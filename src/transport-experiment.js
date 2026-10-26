import { TRANSPORT_LESSON } from './transport-lesson.js';

// A qualitative teaching model. The task prediction concerns the fixed target
// conditions; other parameter combinations are free exploration, not a grade.
export function runTransportExperiment(conditions, prediction) {
  const spec = TRANSPORT_LESSON.experiment;
  if (!conditions || !['atp', 'gradient'].every((key) => (
    Number.isFinite(conditions[key]) && conditions[key] >= 0 && conditions[key] <= 100
  )) || typeof conditions.inhibitor !== 'boolean') {
    throw new TypeError('Invalid experiment conditions');
  }
  if (!spec.predictionOptions.some((option) => option.id === prediction)) {
    throw new TypeError('Choose a prediction before running the experiment');
  }
  const rate = conditions.inhibitor ? 0
    : Math.round(conditions.atp * (0.45 + 0.55 * conditions.gradient / 100));
  const conditionsMet = Object.entries(spec.targetConditions)
    .every(([key, value]) => conditions[key] === value);
  return {
    rate,
    conditionsMet,
    predictionCorrect: conditionsMet ? prediction === spec.correctPrediction : null,
  };
}
