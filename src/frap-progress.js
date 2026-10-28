import { createLessonProgress } from './lesson-progress.js';
import { FRAP_FLOW } from './frap-flow.js';
import { FRAP_LESSON } from './frap-lesson.js';
import { runFrapExperiment, validateFrapConditions } from './frap-experiment.js';

export const FRAP_PROGRESS_KEY = 'cell-atlas.lesson.frap.progress';

const progress = createLessonProgress({
  lesson: FRAP_LESSON, flow: FRAP_FLOW,
  runExperiment: runFrapExperiment, validateConditions: validateFrapConditions,
  storageKey: FRAP_PROGRESS_KEY, resultKeys: ['plateau', 'halfTime'],
});

export const makeFrapProgress = progress.makeProgress;
export const restoreFrapProgress = progress.restoreProgress;
export const createFrapProgressStore = progress.createStore;
export const getFrapExperimentRecords = progress.getExperimentRecords;
