import { FRAP_LESSON } from './frap-lesson.js';

export const FRAP_PREBLEACH = 100;
export const FRAP_POSTBLEACH = 20;
export const FRAP_OBSERVATION_END = 30;

export function validateFrapConditions(value) {
  return Boolean(value && Number.isInteger(value.mobileFraction)
    && value.mobileFraction >= 0 && value.mobileFraction <= 100 && value.mobileFraction % 10 === 0
    && Number.isInteger(value.exchangeRate) && value.exchangeRate >= 25
    && value.exchangeRate <= 200 && value.exchangeRate % 25 === 0);
}

// A single-exponential teaching model, not a fit of diffusion coefficients.
// Time is illustrative and dimensionless; the observation window is finite.
export function frapIntensity(conditions, time) {
  return FRAP_POSTBLEACH + 0.8 * conditions.mobileFraction
    * (1 - Math.exp(-conditions.exchangeRate / 100 * Math.max(0, time) / 5));
}

export function runFrapExperiment(conditions, prediction) {
  if (!validateFrapConditions(conditions)) throw new TypeError('Invalid FRAP conditions');
  if (!FRAP_LESSON.experiment.predictionOptions.some((option) => option.id === prediction)) {
    throw new TypeError('Choose a prediction before running the experiment');
  }
  const target = FRAP_LESSON.experiment.targetConditions;
  const conditionsMet = conditions.mobileFraction === target.mobileFraction
    && conditions.exchangeRate === target.exchangeRate;
  return {
    plateau: FRAP_POSTBLEACH + 0.8 * conditions.mobileFraction,
    halfTime: conditions.mobileFraction === 0 ? null
      : Math.round(Math.LN2 * 5 / (conditions.exchangeRate / 100) * 100) / 100,
    samples: Array.from({ length: FRAP_OBSERVATION_END + 1 }, (_, time) => ({ time, intensity: frapIntensity(conditions, time) })),
    conditionsMet,
    predictionCorrect: conditionsMet ? prediction === FRAP_LESSON.experiment.correctPrediction : null,
  };
}
