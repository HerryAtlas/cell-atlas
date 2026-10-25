// Small, dependency-free course state machine.
//
// The engine owns sequence, evidence, completion and snapshots. It does not
// know about Three.js, the DOM, an LLM or Jarvis. A lesson definition supplies
// steps and requirements; interaction code dispatches events; an AI tutor can
// subscribe to the same events without being able to mark a step complete.

const ENGINE_VERSION = 1;

function matches(event, match) {
  if (!match) return true;
  return Object.keys(match).every((key) => event.payload?.[key] === match[key]);
}

function validateFlow(flow) {
  if (!flow || !Array.isArray(flow.steps) || flow.steps.length === 0) {
    throw new TypeError('CourseEngine requires a flow with at least one step');
  }
  const ids = new Set();
  flow.steps.forEach((step, index) => {
    if (!step.id || typeof step.id !== 'string') {
      throw new TypeError(`Step ${index} is missing an id`);
    }
    if (ids.has(step.id)) throw new TypeError(`Duplicate step id: ${step.id}`);
    ids.add(step.id);
    if (step.requirements && !Array.isArray(step.requirements)) {
      throw new TypeError(`Step ${step.id} requirements must be an array`);
    }
  });
}

export class CourseEngine {
  constructor(flow, options = {}) {
    validateFlow(flow);
    this.flow = flow;
    this.stepIndex = 0;
    this.events = [];
    this.completed = new Set();
    this.courseComplete = false;
    this.listeners = new Set();
    this.sequence = 0;
    this.startedAt = options.startedAt || Date.now();
    this._emit({ type: 'course.started', stepIndex: 0 });
  }

  get steps() {
    return this.flow.steps;
  }

  get currentStep() {
    return this.flow.steps[this.stepIndex] || null;
  }

  get progress() {
    const total = this.flow.steps.length;
    const complete = this.isStepComplete();
    return {
      stepIndex: this.stepIndex,
      stepNumber: this.stepIndex + 1,
      total,
      completedSteps: this.completed.size,
      currentStepComplete: complete,
      canAdvance: this.canAdvance(),
      courseComplete: this.courseComplete,
      percent: Math.round((this.completed.size / total) * 100),
    };
  }

  isStepComplete(index = this.stepIndex) {
    const step = this.flow.steps[index];
    if (!step) return false;
    const requirements = step.requirements || [];
    return requirements.every((requirement) => (
      this.events.some((event) => event.type === requirement.type && matches(event, requirement.match))
    ));
  }

  canAdvance() {
    return !this.courseComplete && this.isStepComplete();
  }

  advance() {
    if (!this.canAdvance()) return false;
    this.completed.add(this.currentStep.id);
    if (this.stepIndex >= this.flow.steps.length - 1) {
      this.courseComplete = true;
      this._emit({ type: 'course.completed', stepIndex: this.stepIndex });
    } else {
      this.stepIndex += 1;
      this._emit({ type: 'step.advanced', stepIndex: this.stepIndex });
    }
    return true;
  }

  goTo(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.flow.steps.length) return false;
    if (index === this.stepIndex) return true;
    this.stepIndex = index;
    this._emit({ type: 'step.changed', stepIndex: this.stepIndex });
    return true;
  }

  dispatch(type, payload = {}) {
    const event = {
      type,
      payload,
      sequence: this.sequence += 1,
      ts: Date.now(),
      stepId: this.currentStep?.id || null,
    };
    this.events.push(event);
    this._emit({ type: 'course.event', event });
    this._emit({ type: 'step.updated', stepIndex: this.stepIndex, stepComplete: this.isStepComplete() });
    return event;
  }

  // Remove evidence that is no longer valid, e.g. an experiment result after
  // the learner changes a slider. The UI must dispatch the replacement event;
  // revoke() is never a way to mark a step complete.
  revoke(type, match) {
    const before = this.events.length;
    this.events = this.events.filter((event) => !(event.type === type && matches(event, match)));
    if (this.events.length === before) return false;
    this._emit({ type: 'course.event.revoked', eventType: type, match: match || null });
    this._emit({ type: 'step.updated', stepIndex: this.stepIndex, stepComplete: this.isStepComplete() });
    return true;
  }

  subscribe(listener) {
    if (typeof listener !== 'function') return () => {};
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  _emit(event) {
    for (const listener of this.listeners) {
      try {
        listener(event, this);
      } catch {
        // A listener (AI, analytics, UI) must not break the lesson state machine.
      }
    }
  }

  getSnapshot() {
    return {
      version: ENGINE_VERSION,
      flowId: this.flow.id,
      stepIndex: this.stepIndex,
      completed: Array.from(this.completed),
      courseComplete: this.courseComplete,
      events: this.events.map((event) => ({ ...event })),
      startedAt: this.startedAt,
    };
  }

  static fromSnapshot(flow, snapshot) {
    validateFlow(flow);
    if (!snapshot || snapshot.flowId !== flow.id || snapshot.version !== ENGINE_VERSION) {
      throw new Error('Snapshot does not belong to this course flow/version');
    }
    const engine = new CourseEngine(flow, { startedAt: snapshot.startedAt });
    engine.stepIndex = Math.max(0, Math.min(flow.steps.length - 1, Number(snapshot.stepIndex) || 0));
    engine.completed = new Set(Array.isArray(snapshot.completed) ? snapshot.completed : []);
    engine.courseComplete = Boolean(snapshot.courseComplete);
    engine.events = Array.isArray(snapshot.events)
      ? snapshot.events.map((event) => ({ ...event }))
      : [];
    engine.sequence = engine.events.reduce((max, event) => Math.max(max, Number(event.sequence) || 0), 0);
    return engine;
  }

  reset() {
    this.stepIndex = 0;
    this.events = [];
    this.completed = new Set();
    this.courseComplete = false;
    this.sequence = 0;
    this._emit({ type: 'course.reset', stepIndex: 0 });
  }
}

export function createCourseEngine(flow) {
  return new CourseEngine(flow);
}
