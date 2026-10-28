import assert from 'node:assert/strict';
import test from 'node:test';
import { runFrapExperiment, frapIntensity } from '../src/frap-experiment.js';

test('FRAP separates mobile fraction from exchange time and uses the shared curve', () => {
  const initial = runFrapExperiment({ mobileFraction: 80, exchangeRate: 100 }, 'decrease');
  const target = runFrapExperiment({ mobileFraction: 40, exchangeRate: 100 }, 'decrease');
  const slow = runFrapExperiment({ mobileFraction: 80, exchangeRate: 25 }, 'decrease');
  assert.equal(initial.plateau, 84);
  assert.equal(target.plateau, 52);
  assert.equal(target.halfTime, initial.halfTime);
  assert.equal(slow.plateau, initial.plateau);
  assert.equal(slow.halfTime, 13.86);
  assert.ok(Math.abs(slow.halfTime - initial.halfTime * 4) < 0.021);
  assert.ok(slow.samples.at(-1).intensity < initial.samples.at(-1).intensity);
  assert.equal(initial.samples[0].intensity, 20);
  assert.equal(target.predictionCorrect, true);
  assert.equal(initial.predictionCorrect, null);
  assert.equal(runFrapExperiment({ mobileFraction: 40, exchangeRate: 100 }, 'increase').predictionCorrect, false);
  for (const result of [initial, target, slow]) {
    assert.equal(result.samples.length, 31);
    for (let i = 1; i < result.samples.length; i++) {
      assert.ok(result.samples[i].intensity >= result.samples[i - 1].intensity);
      assert.ok(result.samples[i].intensity < result.plateau);
    }
  }
  assert.equal(frapIntensity({ mobileFraction: 40, exchangeRate: 100 }, 10), target.samples[10].intensity);
});

test('zero mobility is flat with no defined recovery half-time; full mobility approaches 100', () => {
  const zero = runFrapExperiment({ mobileFraction: 0, exchangeRate: 25 }, 'decrease');
  assert.equal(zero.halfTime, null);
  assert.equal(zero.plateau, 20);
  assert.ok(zero.samples.every((sample) => sample.intensity === 20));
  const full = runFrapExperiment({ mobileFraction: 100, exchangeRate: 200 }, 'unchanged');
  assert.equal(full.plateau, 100);
  assert.ok(full.samples.at(-1).intensity < 100);
});

test('FRAP refuses invalid conditions and missing predictions', () => {
  for (const value of [null, {}, { mobileFraction: -10, exchangeRate: 100 },
    { mobileFraction: 80, exchangeRate: 0 }, { mobileFraction: 45, exchangeRate: 100 },
    { mobileFraction: 80, exchangeRate: NaN }, { mobileFraction: '80', exchangeRate: 100 }]) {
    assert.throws(() => runFrapExperiment(value, 'decrease'));
  }
  assert.throws(() => runFrapExperiment({ mobileFraction: 80, exchangeRate: 100 }));
});
