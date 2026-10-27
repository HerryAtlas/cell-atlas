import assert from 'node:assert/strict';
import test from 'node:test';
import { getPumpActivity, advancePumpCycle } from '../src/transport-motion.js';

test('display bands distinguish pending, stopped, low and high rates at boundaries', () => {
  for (const rate of [null, undefined, NaN, -1, 101]) assert.equal(getPumpActivity(rate).id, 'pending');
  assert.equal(getPumpActivity(0).id, 'stopped');
  for (const rate of [1, 34]) assert.equal(getPumpActivity(rate).id, 'slow');
  for (const rate of [35, 100]) assert.equal(getPumpActivity(rate).id, 'fast');
});

test('fast cycles advance sooner, while stopped, pending and reduced motion never cycle', () => {
  const tick = (rate, frames) => {
    let phase = 0;
    for (let i = 0; i < frames; i++) phase = advancePumpCycle(phase, 1/60, rate);
    return phase;
  };
  assert.ok(tick(47, 90) > 1 && tick(16, 90) < 1);
  assert.ok(tick(47, 390) < 1, 'A full five-step cycle wraps to a new ion set');
  for (const rate of [0, null, undefined]) assert.equal(advancePumpCycle(3, 0.05, rate), 0);
  assert.equal(advancePumpCycle(3, 0.05, 47, true), 0);
  assert.equal(advancePumpCycle(0, 120, 47), advancePumpCycle(0, 0.05, 47));
});
