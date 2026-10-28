import assert from 'node:assert/strict';
import test from 'node:test';
import { CourseEngine } from '../src/course-engine.js';
import { FRAP_FLOW } from '../src/frap-flow.js';
import { FRAP_LESSON } from '../src/frap-lesson.js';
import { runFrapExperiment } from '../src/frap-experiment.js';
import { makeFrapProgress, restoreFrapProgress, createFrapProgressStore,
  getFrapExperimentRecords, FRAP_PROGRESS_KEY } from '../src/frap-progress.js';
import { TRANSPORT_FLOW } from '../src/transport-flow.js';
import { TRANSPORT_LESSON } from '../src/transport-lesson.js';
import { makeTransportProgress, restoreTransportProgress, createTransportProgressStore,
  TRANSPORT_PROGRESS_KEY } from '../src/transport-progress.js';

function sample() {
  const course = new CourseEngine(FRAP_FLOW);
  const experiment = FRAP_LESSON.experiment;
  const state = { selected: 'bleach-region', mechIndex: 3,
    exp: { ...experiment.targetConditions }, order: [] };
  course.dispatch('structure.selected', { id: state.selected });
  course.goTo(1);
  FRAP_LESSON.mechanism.steps.forEach(({ id }, index) => course.dispatch('mechanism.step', { id, index }));
  course.goTo(2);
  const prediction = experiment.correctPrediction;
  course.dispatch('experiment.prediction', { id: prediction, taskId: experiment.taskId,
    conditions: { ...experiment.targetConditions } });
  const result = runFrapExperiment(state.exp, prediction);
  course.dispatch('experiment.run', { taskId: experiment.taskId, ...state.exp, prediction,
    plateau: result.plateau, halfTime: result.halfTime });
  return { course, state, result, value: makeFrapProgress(course, state, 'slow') };
}
function transportSample() {
  const course = new CourseEngine(TRANSPORT_FLOW);
  const state = { selected: null, mechIndex: 0,
    exp: { ...TRANSPORT_LESSON.experiment.initialConditions }, order: [] };
  return makeTransportProgress(course, state, 'normal');
}
function memory() {
  const values = new Map();
  return { values, getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value), removeItem: (key) => values.delete(key) };
}

test('FRAP evidence restores conditions, curve, feedback and all four mechanism steps', () => {
  const { value, result } = sample();
  assert.deepEqual(value.view.exp, { mobileFraction: 40, exchangeRate: 100 });
  const restored = restoreFrapProgress(JSON.stringify(value));
  assert.equal(restored.course.isStepComplete(1), true);
  assert.equal(restored.course.isStepComplete(2), true);
  assert.equal(restored.state.mechIndex, 3);
  assert.equal(restored.state.selected, 'bleach-region');
  assert.equal(restored.mechSpeed, 'slow');
  assert.deepEqual(restored.state.expResult, result);
  assert.equal(restored.state.expResult.conditionsMet, true);
  assert.equal(restored.state.expResult.predictionCorrect, true);
  assert.deepEqual([...restored.state.picked], ['bleach-region']);
  assert.deepEqual(Object.keys(value), ['version', 'course', 'view']);
});

test('FRAP four-step exercise and answer feedback survive a reload', () => {
  const { course, state } = sample();
  const [identify, ordering, analysis] = FRAP_LESSON.exercises;
  course.goTo(3);
  state.order = [...ordering.answer];
  course.dispatch('exercise.answer', { exercise: 'identify', picked: identify.answer, correct: true });
  course.dispatch('exercise.answer', { exercise: 'ordering', answer: state.order, correct: true });
  course.dispatch('exercise.answer', { exercise: 'analysis', answer: analysis.answer, correct: true });
  const restored = restoreFrapProgress(JSON.stringify(makeFrapProgress(course, state, 'normal')));
  assert.equal(restored.state.order.length, 4);
  assert.deepEqual(restored.state.order, ordering.answer);
  assert.equal(restored.state.orderFeedback, 'ok');
  assert.equal(restored.state.identifyResult, 'ok');
  assert.equal(restored.state.analysisResult, 'ok');
  assert.equal(restored.course.isStepComplete(3), true);
});

test('FRAP rejects incompatible conditions, forged experiment results and foreign step ids', () => {
  const mutations = [
    (s) => { s.view.exp.mobileFraction = 101; },
    (s) => { s.view.exp.exchangeRate = null; },
    (s) => { s.course.events.at(-1).payload.plateau += 1; },
    (s) => { s.course.events.at(-1).payload.halfTime = 999; },
    (s) => { s.course.events.at(-1).payload.taskId = 'atp-depletion'; },
    (s) => { s.view.mechIndex = 4; },
    (s) => { s.view.order = ['baseline', 'baseline']; },
    (s) => { s.view.order = ['na-bind']; },
    (s) => { s.course.events[1].payload.id = 'bleach'; },
  ];
  for (const mutate of mutations) {
    const { value } = sample();
    mutate(value);
    assert.throws(() => restoreFrapProgress(JSON.stringify(value)));
  }
});

test('each lesson rejects the other lesson snapshot and a store refuses a foreign save', () => {
  const frap = sample().value;
  const transport = transportSample();
  assert.throws(() => restoreFrapProgress(JSON.stringify(transport)));
  assert.throws(() => restoreTransportProgress(JSON.stringify(frap)));
  const storage = memory();
  const store = createFrapProgressStore(() => storage);
  store.load();
  assert.equal(store.save(transport), false);
  assert.equal(storage.getItem(FRAP_PROGRESS_KEY), null);
  assert.equal(store.save(frap), true);
});

test('both lessons persist independently and clearing FRAP leaves transport and other data intact', () => {
  const storage = memory();
  const frap = createFrapProgressStore(() => storage);
  const transport = createTransportProgressStore(() => storage);
  const transportValue = transportSample();
  storage.setItem('unrelated', 'keep');
  frap.load(); transport.load();
  assert.equal(frap.save(sample().value), true);
  assert.equal(transport.save(transportValue), true);
  assert.ok(createFrapProgressStore(() => storage).load());
  assert.ok(createTransportProgressStore(() => storage).load());
  const originalTransport = storage.getItem(TRANSPORT_PROGRESS_KEY);
  assert.equal(frap.clear(), true);
  assert.equal(storage.getItem(FRAP_PROGRESS_KEY), null);
  assert.equal(storage.getItem(TRANSPORT_PROGRESS_KEY), originalTransport);
  assert.equal(storage.getItem('unrelated'), 'keep');
});

test('a foreign snapshot stored under FRAP key is preserved until explicit clearing', () => {
  const storage = memory();
  const foreign = JSON.stringify(transportSample());
  storage.setItem(FRAP_PROGRESS_KEY, foreign);
  const store = createFrapProgressStore(() => storage);
  assert.equal(store.load(), null);
  assert.equal(store.save(sample().value), false);
  assert.equal(storage.getItem(FRAP_PROGRESS_KEY), foreign);
  assert.equal(store.clear(), true);
  assert.equal(store.save(sample().value), true);
});

test('FRAP history is kept across attempts but cannot restore active prediction or feedback', () => {
  const { course } = sample();
  const before = getFrapExperimentRecords(course);
  assert.equal(before.length, 1);
  assert.equal(before[0].mobileFraction, 40);
  assert.equal(before[0].exchangeRate, 100);
  assert.equal(before[0].attempt, 1);
  course.reset();
  const state = { selected: null, mechIndex: 0,
    exp: { ...FRAP_LESSON.experiment.initialConditions }, order: [] };
  const restored = restoreFrapProgress(JSON.stringify(makeFrapProgress(course, state, 'normal')));
  assert.equal(restored.state.prediction, null);
  assert.equal(restored.state.expResult, null);
  assert.equal(restored.state.orderFeedback, null);
  assert.equal(restored.course.attempt, 2);
  assert.deepEqual(getFrapExperimentRecords(restored.course), before);
});

test('a stale FRAP page cannot overwrite a newer record or undo clearing', () => {
  const storage = memory();
  const first = createFrapProgressStore(() => storage);
  const stale = createFrapProgressStore(() => storage);
  first.load(); stale.load();
  assert.equal(first.save(sample().value), true);
  assert.equal(stale.save(sample().value), false);
  const loaded = createFrapProgressStore(() => storage);
  assert.ok(loaded.load());
  assert.equal(first.clear(), true);
  assert.equal(loaded.save(sample().value), false);
  assert.equal(storage.getItem(FRAP_PROGRESS_KEY), null);
});


test('a flat FRAP recovery curve retains its null half-time and exploration status', () => {
  const { course, state } = sample();
  course.revoke('experiment.run');
  state.exp.mobileFraction = 0;
  const prediction = FRAP_LESSON.experiment.correctPrediction;
  const result = runFrapExperiment(state.exp, prediction);
  course.dispatch('experiment.run', { taskId: FRAP_LESSON.experiment.taskId, ...state.exp,
    prediction, plateau: result.plateau, halfTime: result.halfTime });
  const restored = restoreFrapProgress(JSON.stringify(makeFrapProgress(course, state, 'normal')));
  assert.equal(restored.state.expResult.halfTime, null);
  assert.equal(restored.state.expResult.predictionCorrect, null);
  assert.equal(restored.state.expResult.conditionsMet, false);
  assert.equal(restored.course.isStepComplete(2), false);
  assert.equal(getFrapExperimentRecords(restored.course).length, 2);
});
