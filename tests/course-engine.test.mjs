import assert from 'node:assert/strict';
import { CourseEngine } from '../src/course-engine.js';
import { TRANSPORT_FLOW } from '../src/transport-flow.js';

const engine = new CourseEngine(TRANSPORT_FLOW);
assert.equal(engine.currentStep.id, 'recognize');
assert.equal(engine.canAdvance(), false);

for (const item of ['membrane', 'channel', 'pump', 'atp']) {
  engine.dispatch('structure.selected', { id: item });
}
assert.equal(engine.isStepComplete(), true);
assert.equal(engine.advance(), true);
assert.equal(engine.currentStep.id, 'mechanism');

assert.equal(engine.canAdvance(), false);
for (let index = 0; index < 5; index += 1) {
  engine.dispatch('mechanism.step', { index });
}
assert.equal(engine.advance(), true);
assert.equal(engine.currentStep.id, 'explore');

assert.equal(engine.canAdvance(), false);
engine.dispatch('experiment.prediction', { id: 'decrease' });
assert.equal(engine.canAdvance(), false);
engine.dispatch('experiment.run', { rate: 0, atp: 0, gradient: 60 });
assert.equal(engine.advance(), true);
assert.equal(engine.currentStep.id, 'exercise');

assert.equal(engine.canAdvance(), false);
engine.dispatch('exercise.answer', { exercise: 'identify', correct: false });
assert.equal(engine.canAdvance(), false);
engine.dispatch('exercise.answer', { exercise: 'identify', correct: true });
engine.dispatch('exercise.answer', { exercise: 'ordering', correct: true });
assert.equal(engine.canAdvance(), false);
engine.dispatch('exercise.answer', { exercise: 'analysis', correct: true });
assert.equal(engine.canAdvance(), true);
assert.equal(engine.advance(), true);
assert.equal(engine.courseComplete, true);

const snapshot = engine.getSnapshot();
const restored = CourseEngine.fromSnapshot(TRANSPORT_FLOW, snapshot);
assert.equal(restored.courseComplete, true);
assert.equal(restored.currentStep.id, 'exercise');
assert.equal(restored.events.length, engine.events.length);

const retry = new CourseEngine(TRANSPORT_FLOW);
retry.goTo(2);
retry.dispatch('experiment.prediction', { id: 'decrease' });
retry.dispatch('experiment.run', { rate: 0 });
assert.equal(retry.isStepComplete(), true);
retry.revoke('experiment.run');
assert.equal(retry.isStepComplete(), false);

console.log('course-engine tests: ok');
