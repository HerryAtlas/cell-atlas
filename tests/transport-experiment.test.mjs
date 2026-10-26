import assert from 'node:assert/strict';
import test from 'node:test';
import { runTransportExperiment } from '../src/transport-experiment.js';
import { CourseEngine } from '../src/course-engine.js';
import { TRANSPORT_FLOW } from '../src/transport-flow.js';
import { TRANSPORT_LESSON } from '../src/transport-lesson.js';

const spec = TRANSPORT_LESSON.experiment;

test('default conditions and other explorations never grade the target prediction', () => {
  for (const conditions of [spec.initialConditions,
    { atp: 0, gradient: 50, inhibitor: false },
    { atp: 0, gradient: 60, inhibitor: true }]) {
    const result = runTransportExperiment(conditions, 'decrease');
    assert.equal(result.conditionsMet, false);
    assert.equal(result.predictionCorrect, null);
  }
});

test('target conditions produce a stopped pump and feedback for both predictions', () => {
  const correct = runTransportExperiment(spec.targetConditions, 'decrease');
  assert.deepEqual(correct, { rate: 0, conditionsMet: true, predictionCorrect: true });
  assert.equal(runTransportExperiment(spec.targetConditions, 'increase').predictionCorrect, false);
});

test('the task accepts a mistaken prediction followed by the specified experiment', () => {
  const engine = new CourseEngine(TRANSPORT_FLOW);
  engine.goTo(2);
  engine.dispatch('experiment.prediction', { taskId: spec.taskId, id: 'increase' });
  engine.dispatch('experiment.run', { taskId: spec.taskId, ...spec.initialConditions });
  assert.equal(engine.isStepComplete(), false);
  engine.revoke('experiment.run');
  engine.dispatch('experiment.run', { taskId: spec.taskId, ...spec.targetConditions });
  assert.equal(engine.isStepComplete(), true);
  engine.revoke('experiment.run');
  assert.equal(engine.isStepComplete(), false);
});

test('invalid conditions and absent predictions cannot generate a result', () => {
  for (const atp of [NaN, Infinity, -1, 101, '0']) {
    assert.throws(() => runTransportExperiment({ ...spec.targetConditions, atp }, 'decrease'));
  }
  assert.throws(() => runTransportExperiment(spec.targetConditions, null));
});
