// Small, dependency-free course state machine. Browsing is unrestricted;
// completion requires current evidence from every stage of the current attempt.
const ENGINE_VERSION = 2;

function isRecord(value) {
  return value !== null && typeof value === 'object'
    && Object.getPrototypeOf(value) === Object.prototype;
}

// Course definitions and evidence are JSON data, never live application objects.
function copyData(value, seen = new Set()) {
  if (value === null || typeof value === 'string' || typeof value === 'boolean') return value;
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if ((!Array.isArray(value) && !isRecord(value)) || seen.has(value)) {
    throw new TypeError('Course data must contain only finite, acyclic JSON values');
  }
  seen.add(value);
  const result = Array.isArray(value)
    ? Array.from(value, (item) => copyData(item, seen))
    : Object.fromEntries(Object.entries(value).map(([key, item]) => [key, copyData(item, seen)]));
  seen.delete(value);
  return result;
}

function freezeData(value) {
  if (value && typeof value === 'object') {
    Object.values(value).forEach(freezeData);
    Object.freeze(value);
  }
  return value;
}

function matches(event, match) {
  return !match || Object.keys(match).every((key) => event.payload[key] === match[key]);
}

function validId(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function validTime(value) {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0;
}

function validateFlow(flow) {
  if (!isRecord(flow) || !validId(flow.id) || !Array.isArray(flow.steps) || !flow.steps.length) {
    throw new TypeError('CourseEngine requires a flow id and at least one step');
  }
  if (flow.version !== undefined && !validId(flow.version)
    && !(Number.isSafeInteger(flow.version) && flow.version > 0)) {
    throw new TypeError('Flow version must be a positive integer or nonempty string');
  }
  const ids = new Set();
  flow.steps.forEach((step, index) => {
    if (!isRecord(step) || !validId(step.id) || ids.has(step.id)) {
      throw new TypeError(`Step ${index} requires a unique id`);
    }
    ids.add(step.id);
    if (step.requirements !== undefined && !Array.isArray(step.requirements)) {
      throw new TypeError(`Step ${step.id} requirements must be an array`);
    }
    for (const requirement of step.requirements || []) {
      if (!isRecord(requirement) || !validId(requirement.type)
        || (requirement.match !== undefined && (!isRecord(requirement.match)
          || Object.values(requirement.match).some((value) => value !== null && typeof value === 'object')))) {
        throw new TypeError(`Step ${step.id} has an invalid requirement`);
      }
    }
  });
}

export class CourseEngine {
  #flow;
  #stepIndex = 0;
  #events = [];
  #courseComplete = false;
  #listeners = new Set();
  #tutorListeners = new Set();
  #sequence = 0;
  #attempt = 1;
  #startedAt;

  constructor(flow, options = {}) {
    const definition = copyData(flow);
    validateFlow(definition);
    this.#flow = freezeData(definition);
    this.#startedAt = options.startedAt ?? Date.now();
    if (!validTime(this.#startedAt)) throw new TypeError('Invalid course start time');
  }

  get flow() { return this.#flow; }
  get steps() { return this.#flow.steps; }
  get stepIndex() { return this.#stepIndex; }
  get currentStep() { return this.steps[this.#stepIndex]; }
  get events() { return Object.freeze([...this.#events]); }
  get courseComplete() { return this.#courseComplete; }
  get sequence() { return this.#sequence; }
  get attempt() { return this.#attempt; }
  get startedAt() { return this.#startedAt; }

  get completed() {
    return new Set(this.steps.filter((_, index) => this.isStepComplete(index)).map((step) => step.id));
  }

  get progress() {
    const completedSteps = this.completed.size;
    return {
      stepIndex: this.#stepIndex,
      stepNumber: this.#stepIndex + 1,
      total: this.steps.length,
      completedSteps,
      currentStepComplete: this.isStepComplete(),
      canAdvance: this.canAdvance(),
      courseComplete: this.#courseComplete,
      percent: Math.round((completedSteps / this.steps.length) * 100),
    };
  }

  isStepComplete(index = this.#stepIndex) {
    if (!Number.isInteger(index)) return false;
    const step = this.steps[index];
    if (!step) return false;
    return (step.requirements || []).every((requirement) => this.#events.some((event) => (
      event.active && event.attempt === this.#attempt && event.stepId === step.id
      && event.type === requirement.type && matches(event, requirement.match)
    )));
  }

  canComplete() {
    return this.steps.every((_, index) => this.isStepComplete(index));
  }

  canAdvance() {
    return this.#stepIndex === this.steps.length - 1 ? this.canComplete() : this.isStepComplete();
  }

  advance() {
    if (!this.canAdvance()) return false;
    if (this.#stepIndex === this.steps.length - 1) {
      if (!this.#courseComplete) {
        this.#courseComplete = true;
        this.#emit({ type: 'course.completed', stepIndex: this.#stepIndex });
      }
    } else {
      this.#stepIndex += 1;
      this.#emit({ type: 'step.advanced', stepIndex: this.#stepIndex });
    }
    return true;
  }

  goTo(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.steps.length) return false;
    if (index === this.#stepIndex) return true;
    this.#stepIndex = index;
    this.#emit({ type: 'step.changed', stepIndex: index });
    return true;
  }

  dispatch(type, payload = {}) {
    if (!validId(type) || !isRecord(payload)) throw new TypeError('An event requires a type and object payload');
    const data = copyData(payload);
    const event = freezeData({
      type,
      payload: data,
      sequence: ++this.#sequence,
      ts: Date.now(),
      stepId: this.currentStep.id,
      attempt: this.#attempt,
      active: true,
    });
    this.#events.push(event);
    this.#emit({ type: 'course.event', event });
    this.#emit({ type: 'step.updated', stepIndex: this.#stepIndex, stepComplete: this.isStepComplete() });
    return freezeData(copyData(event));
  }

  // Keep attempts for later feedback. Revocation only changes which evidence
  // counts for this stage; it never erases an answer or experiment from history.
  revoke(type, match) {
    if (!validId(type) || (match !== undefined && !isRecord(match))) {
      throw new TypeError('Revocation requires a type and optional object match');
    }
    const criteria = match === undefined ? undefined : copyData(match);
    let changed = false;
    this.#events = this.#events.map((event) => {
      if (!event.active || event.attempt !== this.#attempt || event.stepId !== this.currentStep.id
        || event.type !== type || !matches(event, criteria)) return event;
      changed = true;
      return freezeData({ ...event, active: false });
    });
    if (!changed) return false;
    if (!this.canComplete()) this.#courseComplete = false;
    this.#emit({ type: 'course.event.revoked', eventType: type, match: criteria || null });
    this.#emit({ type: 'step.updated', stepIndex: this.#stepIndex, stepComplete: this.isStepComplete() });
    return true;
  }

  // Trusted local diagnostics: this stream includes full evidence.
  // Tutor integrations receive getTutorObserver(), never this engine.
  subscribe(listener) {
    if (typeof listener !== 'function') return () => {};
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }

  getTutorContext() {
    const step = this.currentStep;
    // Explicit allowlist: never spread a step, event, snapshot or payload here.
    return freezeData({
      schemaVersion: 1,
      flowId: this.#flow.id,
      flowVersion: this.#flow.version ?? 1,
      currentStep: {
        id: step.id,
        label: typeof step.label === 'string' ? step.label : '',
        kind: typeof step.kind === 'string' ? step.kind : '',
      },
      progress: {
        stepNumber: this.#stepIndex + 1,
        total: this.steps.length,
        completedSteps: this.completed.size,
        currentStepComplete: this.isStepComplete(),
        courseComplete: this.#courseComplete,
      },
    });
  }

  getTutorObserver() {
    // No controller, raw event stream or snapshot accessor escapes this handle.
    return Object.freeze(Object.assign(Object.create(null), {
      getTutorContext: () => this.getTutorContext(),
      subscribe: (listener) => {
        if (typeof listener !== 'function') return () => {};
        const notify = (context) => listener(context);
        this.#tutorListeners.add(notify);
        return () => this.#tutorListeners.delete(notify);
      },
    }));
  }

  #emit(event) {
    // Notify once per state change without forwarding raw evidence/revocation.
    if (this.#tutorListeners.size && event.type !== 'course.event' && event.type !== 'course.event.revoked') {
      const context = this.getTutorContext();
      for (const listener of [...this.#tutorListeners]) {
        try { Promise.resolve(listener(context)).catch(() => {}); } catch { /* Tutor failures cannot interrupt learning. */ }
      }
    }
    if (!this.#listeners.size) return;
    const notification = freezeData(copyData({ ...event, attempt: this.#attempt }));
    const state = freezeData({
      ...this.getSnapshot(),
      progress: this.progress,
      currentStep: copyData(this.currentStep),
    });
    for (const listener of [...this.#listeners]) {
      try {
        listener(notification, state);
      } catch {
        // Read-only observers cannot interrupt the lesson or other observers.
      }
    }
  }

  getSnapshot() {
    return copyData({
      version: ENGINE_VERSION,
      flowId: this.#flow.id,
      flowVersion: this.#flow.version ?? 1,
      stepIndex: this.#stepIndex,
      completed: [...this.completed],
      courseComplete: this.#courseComplete,
      events: this.#events,
      sequence: this.#sequence,
      attempt: this.#attempt,
      startedAt: this.#startedAt,
    });
  }

  static fromSnapshot(flow, snapshot) {
    const data = copyData(snapshot);
    const engine = new CourseEngine(flow);
    const invalid = () => { throw new TypeError('Invalid course snapshot'); };
    // v1 cannot distinguish active evidence, attempts or stage-scoped progress.
    if (!isRecord(data) || data.version !== ENGINE_VERSION || data.flowId !== engine.flow.id
      || data.flowVersion !== (engine.flow.version ?? 1)) {
      throw new Error('Snapshot does not belong to this course flow/version');
    }
    if (!Number.isInteger(data.stepIndex) || data.stepIndex < 0 || data.stepIndex >= engine.steps.length
      || !Number.isSafeInteger(data.attempt) || data.attempt < 1
      || !Number.isSafeInteger(data.sequence) || data.sequence < 0
      || !validTime(data.startedAt) || typeof data.courseComplete !== 'boolean'
      || !Array.isArray(data.completed) || !Array.isArray(data.events)) invalid();
    const stepIds = new Set(engine.steps.map((step) => step.id));
    let sequence = 0;
    let attempt = 1;
    for (const event of data.events) {
      if (!isRecord(event) || !validId(event.type) || !isRecord(event.payload)
        || !stepIds.has(event.stepId) || !validTime(event.ts)
        || !Number.isSafeInteger(event.sequence) || event.sequence !== sequence + 1
        || !Number.isSafeInteger(event.attempt) || event.attempt < attempt || event.attempt > data.attempt
        || typeof event.active !== 'boolean' || (event.attempt < data.attempt && event.active)) invalid();
      sequence = event.sequence;
      attempt = event.attempt;
    }
    if (data.sequence !== sequence) invalid();
    engine.#stepIndex = data.stepIndex;
    engine.#attempt = data.attempt;
    engine.#sequence = data.sequence;
    engine.#startedAt = data.startedAt;
    engine.#events = data.events.map(freezeData);
    const completed = [...engine.completed];
    if (data.completed.length !== completed.length
      || data.completed.some((id, index) => id !== completed[index])
      || (data.courseComplete && !engine.canComplete())) invalid();
    engine.#courseComplete = data.courseComplete;
    return engine;
  }

  reset() {
    this.#events = this.#events.map((event) => event.active ? freezeData({ ...event, active: false }) : event);
    this.#attempt += 1;
    this.#stepIndex = 0;
    this.#courseComplete = false;
    this.#startedAt = Date.now();
    this.#emit({ type: 'course.reset', stepIndex: 0 });
  }
}

export function createCourseEngine(flow) {
  return new CourseEngine(flow);
}
