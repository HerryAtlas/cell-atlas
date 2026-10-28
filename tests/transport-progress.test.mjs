import assert from 'node:assert/strict';
import test from 'node:test';
import { CourseEngine } from '../src/course-engine.js';
import { TRANSPORT_FLOW } from '../src/transport-flow.js';
import { TRANSPORT_LESSON } from '../src/transport-lesson.js';
import { makeTransportProgress, restoreTransportProgress, createTransportProgressStore,
  TRANSPORT_PROGRESS_KEY, getExperimentRecords } from '../src/transport-progress.js';

function sample() {
  const course = new CourseEngine(TRANSPORT_FLOW);
  const state = { selected: 'pump', mechIndex: 0, exp: { atp: 0, gradient: 60, inhibitor: false }, order: [] };
  course.dispatch('structure.selected', { id: 'pump' });
  course.goTo(2);
  course.dispatch('experiment.prediction', { id: 'decrease', taskId: 'atp-depletion',
    conditions: { ...TRANSPORT_LESSON.experiment.targetConditions } });
  course.dispatch('experiment.run', { taskId: 'atp-depletion', ...state.exp, rate: 0, prediction: 'decrease' });
  return { course, state, value: makeTransportProgress(course, state, 'slow') };
}
function memory() {
  const values = new Map();
  return { values, getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value), removeItem: (key) => values.delete(key) };
}

test('saved records round-trip evidence, view drafts and recomputed feedback', () => {
  const { value } = sample();
  const restored = restoreTransportProgress(JSON.stringify(value));
  assert.equal(restored.course.isStepComplete(2), true);
  assert.deepEqual(restored.state.expResult, { rate: 0, conditionsMet: true, predictionCorrect: true });
  assert.deepEqual([...restored.state.picked], ['pump']);
  assert.equal(restored.mechSpeed, 'slow');
  assert.equal(restored.state.stage, 2);
});

test('inconsistent view, lesson evidence and unsupported versions are rejected', () => {
  const mutations = [
    (s) => { s.version = 99; },
    (s) => { s.course.flowVersion = 999; },
    (s) => { s.view.exp.atp = 60; },
    (s) => { s.view.order = ['na-bind', 'na-bind']; },
    (s) => { s.view.selected = '<script>'; },
    (s) => { s.course.events.at(-1).payload.rate = 100; },
    (s) => { s.course.events[0].payload.id = 'unknown'; },
    (s) => { s.view.mechIndex = 4; },
  ];
  for (const mutate of mutations) {
    const { value } = sample();
    mutate(value);
    assert.throws(() => restoreTransportProgress(JSON.stringify(value)));
  }
  assert.throws(() => restoreTransportProgress('{broken'));
  assert.throws(() => restoreTransportProgress(' '.repeat(2_000_001)));
});

test('exercise correctness cannot contradict the saved answer', () => {
  const { course, state } = sample();
  course.goTo(3);
  course.dispatch('exercise.answer', { exercise: 'analysis', answer: 'a', correct: true });
  assert.throws(() => restoreTransportProgress(JSON.stringify(makeTransportProgress(course, state, 'normal'))));
});

test('invalid saved data is preserved until the user explicitly clears this lesson', () => {
  const storage = memory();
  storage.setItem(TRANSPORT_PROGRESS_KEY, '{"version":99}');
  storage.setItem('unrelated', 'keep');
  const store = createTransportProgressStore(() => storage);
  assert.equal(store.load(), null);
  assert.match(store.message, /不兼容/);
  assert.equal(store.save(sample().value), false);
  assert.equal(storage.getItem(TRANSPORT_PROGRESS_KEY), '{"version":99}');
  assert.equal(store.clear(), true);
  assert.equal(storage.getItem('unrelated'), 'keep');
  assert.equal(store.save(sample().value), true);
});

test('failed reads, quota errors and failed deletion report errors without crashing', () => {
  const store = createTransportProgressStore(() => { throw new Error('Denied'); });
  assert.equal(store.load(), null);
  assert.equal(store.save(sample().value), false);
  assert.equal(store.clear(), false);
  assert.match(store.message, /无法删除/);
  const storage = memory();
  const quota = createTransportProgressStore(() => storage);
  quota.load();
  storage.setItem = () => { throw new Error('Quota'); };
  assert.equal(quota.save(sample().value), false);
  assert.match(quota.message, /保存失败/);
  assert.equal(storage.getItem(TRANSPORT_PROGRESS_KEY), null);
});

test('stale tabs cannot overwrite newer progress or resurrect a cleared record', () => {
  const storage = memory();
  const first = createTransportProgressStore(() => storage);
  const second = createTransportProgressStore(() => storage);
  first.load(); second.load();
  assert.equal(first.save(sample().value), true);
  assert.equal(second.save(sample().value), false);
  assert.match(second.message, /另一页面/);
  const third = createTransportProgressStore(() => storage);
  assert.ok(third.load());
  first.clear();
  assert.equal(third.save(sample().value), false);
  assert.equal(storage.getItem(TRANSPORT_PROGRESS_KEY), null);
});

test('record display is bounded without deleting previous attempts or reactivating evidence', () => {
  const { course, state } = sample();
  for (let i=0; i<24; i++) {
    course.revoke('experiment.run');
    course.dispatch('experiment.run', { taskId: 'atp-depletion', ...state.exp, rate: 0, prediction: 'decrease' });
  }
  const records = getExperimentRecords(course);
  assert.equal(records.length, 20);
  assert.equal(records[0].number, 6);
  course.reset();
  assert.equal(getExperimentRecords(course).length, 20);
  assert.equal(course.isStepComplete(2), false);
  assert.equal(course.events.filter((e) => e.type === 'experiment.run').length, 25);
});

test('discarding history resets sequence and attempts while keeping the tutor handle valid', () => {
  const { course } = sample();
  const tutor = course.getTutorObserver();
  course.reset({ discardHistory: true });
  assert.equal(course.events.length, 0);
  assert.equal(course.sequence, 0);
  assert.equal(course.attempt, 1);
  assert.equal(tutor.getTutorContext().progress.completedSteps, 0);
  assert.equal(course.dispatch('structure.selected', { id: 'pump' }).sequence, 1);
});


test('transport persistence keeps the legacy version-1 envelope and condition projection', () => {
  const { course, state } = sample();
  state.exp.extra = 'not a condition';
  state.identifyResult = 'ok';
  const value = makeTransportProgress(course, state, 'slow');
  assert.deepEqual(Object.keys(value), ['version', 'course', 'view']);
  assert.equal(value.version, 1);
  assert.equal(TRANSPORT_PROGRESS_KEY, 'cell-atlas.lesson.transport.progress');
  assert.deepEqual(Object.keys(value.view), ['selected', 'mechIndex', 'mechSpeed', 'exp', 'order']);
  assert.deepEqual(value.view.exp, { atp: 0, gradient: 60, inhibitor: false });
  assert.equal(restoreTransportProgress(JSON.stringify(value)).state.identifyResult, null);
});

test('active experiment uniqueness cannot be bypassed with unrelated payload fields', () => {
  const { course, state } = sample();
  course.dispatch('experiment.run', { taskId: 'atp-depletion', ...state.exp,
    rate: 0, prediction: 'decrease', exercise: 'unrelated' });
  assert.throws(() => restoreTransportProgress(JSON.stringify(makeTransportProgress(course, state, 'normal'))));
});

test('restoring a new attempt retains prior experiments without reusing their feedback', () => {
  const { course } = sample();
  course.reset();
  const state = { selected: null, mechIndex: 0, exp: { ...TRANSPORT_LESSON.experiment.initialConditions }, order: [] };
  const restored = restoreTransportProgress(JSON.stringify(makeTransportProgress(course, state, 'normal')));
  assert.equal(restored.course.attempt, 2);
  assert.equal(restored.state.prediction, null);
  assert.equal(restored.state.expResult, null);
  assert.equal(restored.state.picked.size, 0);
  assert.equal(getExperimentRecords(restored.course).length, 1);
});
