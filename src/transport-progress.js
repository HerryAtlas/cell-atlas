import { createLessonProgress } from './lesson-progress.js';
import { TRANSPORT_FLOW } from './transport-flow.js';
import { TRANSPORT_LESSON } from './transport-lesson.js';
import { runTransportExperiment } from './transport-experiment.js';

export const TRANSPORT_PROGRESS_KEY = 'cell-atlas.lesson.transport.progress';

// Persist only values reachable with the lesson's controls (5-point increments).
const validateConditions = (value) => ['atp', 'gradient'].every((key) => (
  Number.isFinite(value[key]) && value[key] >= 0 && value[key] <= 100 && value[key] % 5 === 0
)) && typeof value.inhibitor === 'boolean';

const progress = createLessonProgress({
  lesson: TRANSPORT_LESSON, flow: TRANSPORT_FLOW,
  runExperiment: runTransportExperiment, validateConditions,
  storageKey: TRANSPORT_PROGRESS_KEY, resultKeys: ['rate'],
});

export const makeTransportProgress = progress.makeProgress;
export const restoreTransportProgress = progress.restoreProgress;
export const createTransportProgressStore = progress.createStore;
export const getExperimentRecords = progress.getExperimentRecords;
