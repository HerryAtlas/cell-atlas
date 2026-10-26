import assert from 'node:assert/strict';
import test from 'node:test';
import { CourseEngine } from '../src/course-engine.js';
import { TRANSPORT_FLOW } from '../src/transport-flow.js';

const FLOW = {
  id: 'test-course', version: 1,
  steps: [
    { id: 'observe', requirements: [{ type: 'answer', match: { correct: true } }] },
    { id: 'practice', requirements: [{ type: 'answer', match: { correct: true } }] },
  ],
};

function completeStep(engine, index) {
  engine.goTo(index);
  for (const requirement of engine.currentStep.requirements || []) {
    engine.dispatch(requirement.type, requirement.match || {});
  }
}

function completeCourse(engine) {
  engine.steps.forEach((_, index) => completeStep(engine, index));
  assert.equal(engine.advance(), true);
}

test('the transport lesson needs evidence from all four stages', () => {
  const engine = new CourseEngine(TRANSPORT_FLOW);
  assert.equal(engine.currentStep.id, 'recognize');
  assert.equal(engine.canAdvance(), false);
  for (let index = 0; index < engine.steps.length; index += 1) {
    completeStep(engine, index);
    assert.equal(engine.progress.completedSteps, index + 1);
    assert.equal(engine.advance(), true);
  }
  assert.equal(engine.courseComplete, true);
  assert.equal(engine.progress.percent, 100);
});

test('jumping to the final stage cannot complete an unfinished course', () => {
  const engine = new CourseEngine(TRANSPORT_FLOW);
  completeStep(engine, engine.steps.length - 1);
  assert.equal(engine.isStepComplete(), true);
  assert.equal(engine.canComplete(), false);
  assert.equal(engine.canAdvance(), false);
  assert.equal(engine.advance(), false);
  assert.equal(engine.courseComplete, false);
  assert.equal(engine.progress.percent, 25);
});

test('the transport experiment only accepts the requested ATP depletion conditions', () => {
  const engine = new CourseEngine(TRANSPORT_FLOW);
  engine.goTo(2);
  engine.dispatch('experiment.prediction', { id: 'decrease', taskId: 'atp-depletion' });
  engine.dispatch('experiment.run', { taskId: 'atp-depletion', atp: 60, gradient: 60, inhibitor: false });
  assert.equal(engine.isStepComplete(), false);
  engine.dispatch('experiment.run', { taskId: 'atp-depletion', atp: 0, gradient: 0, inhibitor: false });
  assert.equal(engine.isStepComplete(), false);
  engine.dispatch('experiment.run', { taskId: 'atp-depletion', atp: 0, gradient: 60, inhibitor: true });
  assert.equal(engine.isStepComplete(), false);
  engine.dispatch('experiment.run', { taskId: 'atp-depletion', atp: 0, gradient: 60, inhibitor: false });
  assert.equal(engine.isStepComplete(), true);
  engine.revoke('experiment.run');
  assert.equal(engine.isStepComplete(), false);
});

test('review navigation works after completion without another completion event', () => {
  const engine = new CourseEngine(FLOW);
  let completions = 0;
  engine.subscribe((event) => { if (event.type === 'course.completed') completions += 1; });
  completeCourse(engine);
  engine.goTo(0);
  assert.equal(engine.canAdvance(), true);
  assert.equal(engine.advance(), true);
  assert.equal(engine.currentStep.id, 'practice');
  assert.equal(engine.advance(), true);
  assert.equal(completions, 1);
});

test('identical requirements in different stages do not share evidence', () => {
  const engine = new CourseEngine(FLOW);
  completeStep(engine, 0);
  engine.goTo(1);
  assert.equal(engine.isStepComplete(), false);
  engine.dispatch('answer', { correct: false });
  assert.equal(engine.isStepComplete(), false);
  engine.dispatch('answer', { correct: true });
  engine.revoke('answer', { correct: true });
  assert.equal(engine.isStepComplete(), false);
  assert.equal(engine.isStepComplete(0), true);
});

test('revocation preserves attempts and invalidates derived course completion', () => {
  const engine = new CourseEngine(FLOW);
  completeCourse(engine);
  const length = engine.events.length;
  assert.equal(engine.revoke('answer'), true);
  assert.equal(engine.events.length, length);
  assert.equal(engine.events.at(-1).active, false);
  assert.equal(engine.courseComplete, false);
  assert.equal(engine.progress.percent, 50);
  assert.equal(engine.revoke('answer'), false);
  engine.dispatch('answer', { correct: true });
  assert.equal(engine.canComplete(), true);
  assert.equal(engine.events.length, length + 1);
  assert.equal(engine.advance(), true);
});

test('restart begins a new attempt without reusing or deleting earlier answers', () => {
  const engine = new CourseEngine(FLOW, { startedAt: 1 });
  completeCourse(engine);
  engine.reset();
  assert.equal(engine.attempt, 2);
  assert.equal(engine.currentStep.id, 'observe');
  assert.equal(engine.progress.percent, 0);
  assert.equal(engine.courseComplete, false);
  assert.equal(engine.events.length, 2);
  assert.ok(engine.events.every((event) => event.attempt === 1 && !event.active));
  assert.ok(engine.startedAt > 1);
  engine.dispatch('answer', { correct: true });
  assert.equal(engine.events.at(-1).sequence, 3);
  assert.equal(engine.events.at(-1).attempt, 2);
  const restored = CourseEngine.fromSnapshot(FLOW, JSON.parse(JSON.stringify(engine.getSnapshot())));
  assert.equal(restored.progress.percent, 50);
  assert.equal(restored.attempt, 2);
});

test('observers receive immutable data without access to engine methods', () => {
  const engine = new CourseEngine(FLOW);
  const notices = [];
  engine.subscribe(() => { throw new Error('broken observer'); });
  engine.subscribe((event, state) => { notices.push({ event, state }); });
  engine.dispatch('answer', { correct: true, nested: { value: 1 } });
  assert.equal(notices.length, 2);
  const notice = notices[0];
  assert.equal(notice.state.dispatch, undefined);
  assert.equal(notice.state.advance, undefined);
  assert.ok(Object.isFrozen(notice.state));
  assert.ok(Object.isFrozen(notice.state.events));
  assert.ok(Object.isFrozen(notice.event));
  assert.throws(() => { notice.state.courseComplete = true; }, TypeError);
  assert.throws(() => { notice.state.events[0].payload.nested.value = 9; }, TypeError);
  assert.throws(() => { notice.event.event.payload.correct = false; }, TypeError);
  assert.equal(engine.courseComplete, false);
  assert.equal(engine.events[0].payload.nested.value, 1);
});

test('unsubscribing stops notifications', () => {
  const engine = new CourseEngine(FLOW);
  let calls = 0;
  const unsubscribe = engine.subscribe(() => { calls += 1; });
  engine.dispatch('answer');
  unsubscribe();
  engine.dispatch('answer');
  assert.equal(calls, 2);
});

test('payloads, definitions, snapshots and dispatch results cannot mutate live evidence', () => {
  const definition = structuredClone(FLOW);
  const engine = new CourseEngine(definition);
  definition.steps[0].requirements = [];
  assert.equal(engine.isStepComplete(), false);
  const payload = { correct: true, nested: { value: 1 } };
  const event = engine.dispatch('answer', payload);
  payload.correct = false;
  payload.nested.value = 2;
  assert.equal(engine.isStepComplete(), true);
  assert.throws(() => { event.payload.correct = false; }, TypeError);
  assert.throws(() => { engine.events[0].payload.correct = false; }, TypeError);
  engine.completed.clear();
  assert.equal(engine.progress.completedSteps, 1);
  const snapshot = engine.getSnapshot();
  const restored = CourseEngine.fromSnapshot(FLOW, snapshot);
  snapshot.events[0].payload.correct = false;
  snapshot.events[0].payload.nested.value = 3;
  assert.equal(engine.isStepComplete(), true);
  assert.equal(restored.isStepComplete(), true);
  assert.equal(restored.events[0].payload.nested.value, 1);
});

test('completed snapshots round-trip and continue sequence numbering', () => {
  const engine = new CourseEngine(FLOW);
  completeCourse(engine);
  const snapshot = engine.getSnapshot();
  const restored = CourseEngine.fromSnapshot(FLOW, JSON.parse(JSON.stringify(snapshot)));
  assert.deepEqual(restored.getSnapshot(), snapshot);
  restored.dispatch('feedback', { useful: true });
  assert.equal(restored.events.at(-1).sequence, 3);
});

test('snapshots reject incompatible versions and malformed or inconsistent state', () => {
  const engine = new CourseEngine(FLOW);
  completeCourse(engine);
  const valid = engine.getSnapshot();
  const mutations = [
    (s) => { s.version = 1; },
    (s) => { s.flowId = 'another-course'; },
    (s) => { s.flowVersion = 2; },
    (s) => { s.stepIndex = 0.5; },
    (s) => { s.stepIndex = -1; },
    (s) => { s.stepIndex = 2; },
    (s) => { s.stepIndex = '1'; },
    (s) => { s.startedAt = -1; },
    (s) => { s.attempt = 0; },
    (s) => { s.attempt = 1.5; },
    (s) => { s.events[0].attempt = 0; },
    (s) => { s.events[0].attempt = 2; },
    (s) => { s.events[0].active = 'true'; },
    (s) => { s.events[0].active = false; },
    (s) => { s.events[0].sequence = 2; },
    (s) => { s.events[0].stepId = 'missing'; },
    (s) => { s.events[0].payload = null; },
    (s) => { s.events[0].type = ''; },
    (s) => { s.events[0].ts = -1; },
    (s) => { s.sequence = 9; },
    (s) => { s.completed = ['observe', 'observe']; },
    (s) => { s.completed = ['missing']; },
    (s) => { s.courseComplete = 'true'; },
    (s) => { s.events = []; s.sequence = 0; s.completed = []; },
    (s) => { s.events[0].payload.nested = { invalid: undefined }; },
  ];
  for (const mutate of mutations) {
    const snapshot = structuredClone(valid);
    mutate(snapshot);
    assert.throws(() => CourseEngine.fromSnapshot(FLOW, snapshot), undefined, mutate.toString());
  }
});

test('reset snapshots reject active evidence from an older attempt', () => {
  const engine = new CourseEngine(FLOW);
  completeCourse(engine);
  engine.reset();
  const snapshot = engine.getSnapshot();
  snapshot.events[0].active = true;
  assert.throws(() => CourseEngine.fromSnapshot(FLOW, snapshot));
});

test('malformed definitions, payloads and invalid navigation fail without changing state', () => {
  assert.throws(() => new CourseEngine({ steps: FLOW.steps }));
  assert.throws(() => new CourseEngine({ id: 'x', steps: [FLOW.steps[0], FLOW.steps[0]] }));
  assert.throws(() => new CourseEngine({ id: 'x', steps: [{ id: 'x', requirements: [{}] }] }));
  const engine = new CourseEngine(FLOW);
  for (const index of [-1, 0.5, NaN, 2, '1']) assert.equal(engine.goTo(index), false);
  assert.equal(engine.stepIndex, 0);
  for (const value of [null, [], { invalid: Infinity }, { invalid: () => {} }]) {
    assert.throws(() => engine.dispatch('answer', value));
  }
  const cyclic = {};
  cyclic.self = cyclic;
  assert.throws(() => engine.dispatch('answer', cyclic));
  assert.equal(engine.events.length, 0);
  assert.equal(engine.sequence, 0);
});

test('tutor context allowlists metadata and excludes answers, requirements and attempts', () => {
  const flow = structuredClone(FLOW);
  flow.secret = 'author-only';
  flow.steps[0].answer = 'solution-only';
  const engine = new CourseEngine(flow);
  engine.dispatch('answer', { correct: false, answer: 'old-answer', nested: { secret: 'old-private' } });
  engine.reset();
  engine.dispatch('answer', { correct: true, answer: 'new-answer' });
  const context = engine.getTutorContext();
  assert.deepEqual(Object.keys(context).sort(), ['currentStep', 'flowId', 'flowVersion', 'progress', 'schemaVersion']);
  assert.deepEqual(Object.keys(context.currentStep).sort(), ['id', 'kind', 'label']);
  assert.deepEqual(Object.keys(context.progress).sort(), ['completedSteps', 'courseComplete', 'currentStepComplete', 'stepNumber', 'total']);
  assert.doesNotMatch(JSON.stringify(context), /author-only|solution-only|old-answer|old-private|new-answer|requirements|payload|events|attempt|startedAt|sequence/);
  assert.equal(context.progress.completedSteps, 1);
  assert.ok(Object.isFrozen(context.currentStep));
  assert.throws(() => { context.progress.completedSteps = 99; }, TypeError);
  assert.equal(engine.progress.completedSteps, 1);
});

test('tutor subscriptions provide only current minimal context and no controller', () => {
  const engine = new CourseEngine(FLOW);
  const observer = engine.getTutorObserver();
  assert.equal(Object.getPrototypeOf(observer), null);
  assert.ok(Object.isFrozen(observer));
  assert.deepEqual(Object.keys(observer).sort(), ['getTutorContext', 'subscribe']);
  const notifications = [];
  observer.subscribe(() => { throw new Error('offline tutor'); });
  const stop = observer.subscribe((...args) => notifications.push(args));
  engine.dispatch('answer', { correct: true, answer: 'do-not-forward' });
  assert.equal(notifications.length, 1);
  assert.equal(notifications[0].length, 1);
  assert.doesNotMatch(JSON.stringify(notifications), /do-not-forward|payload|events/);
  const previous = notifications[0][0];
  engine.advance();
  assert.equal(notifications.at(-1)[0].progress.stepNumber, 2);
  assert.equal(previous.progress.stepNumber, 1);
  engine.reset();
  assert.equal(notifications.at(-1)[0].progress.completedSteps, 0);
  assert.equal(notifications.at(-1)[0].progress.stepNumber, 1);
  const count = notifications.length;
  stop(); engine.dispatch('answer');
  assert.equal(notifications.length, count);
  for (const key of ['dispatch', 'advance', 'goTo', 'reset', 'getSnapshot', 'events', 'flow']) {
    assert.equal(observer[key], undefined);
  }
});

test('tutor revocation notices cannot leak the match criteria or evidence payload', () => {
  const engine = new CourseEngine(FLOW);
  const notices = [];
  engine.getTutorObserver().subscribe((context) => notices.push(context));
  engine.dispatch('answer', { correct: true, answer: 'private-student-answer' });
  engine.revoke('answer', { answer: 'private-student-answer' });
  assert.equal(notices.length, 2);
  assert.equal(notices.at(-1).progress.currentStepComplete, false);
  assert.doesNotMatch(JSON.stringify(notices), /private-student-answer|match|payload/);
});

test('async tutor failures do not interrupt learning or become unhandled rejections', async () => {
  const engine = new CourseEngine(FLOW);
  engine.getTutorObserver().subscribe(async () => { throw new Error('Tutor offline'); });
  completeStep(engine, 0);
  assert.equal(engine.advance(), true);
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(engine.stepIndex, 1);
});
