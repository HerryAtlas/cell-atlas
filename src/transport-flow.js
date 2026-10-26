import { TRANSPORT_LESSON } from './transport-lesson.js';

// The course engine only sees declarative requirements. The UI dispatches
// evidence; it cannot mark a step complete without producing the evidence.
export const TRANSPORT_FLOW = {
  // Stable legacy identity; its suffix is not the current schema revision.
  id: 'transport-lesson-v1',
  // Revision of this flow definition/requirements, checked during restore.
  // CourseEngine separately versions the snapshot envelope (ENGINE_VERSION).
  version: 2,
  title: TRANSPORT_LESSON.title,
  course: 'cell-biology',
  lessonId: 'transport',
  steps: [
    {
      id: 'recognize',
      label: '认识结构',
      kind: 'inspect',
      requirements: TRANSPORT_LESSON.structures.map((item) => ({
        type: 'structure.selected',
        match: { id: item.id },
      })),
    },
    {
      id: 'mechanism',
      label: '观察机制',
      kind: 'observe',
      requirements: TRANSPORT_LESSON.mechanism.steps.map((_, index) => ({
        type: 'mechanism.step',
        match: { index },
      })),
    },
    {
      id: 'explore',
      label: '动手探索',
      kind: 'experiment',
      requirements: [
        { type: 'experiment.prediction', match: { taskId: TRANSPORT_LESSON.experiment.taskId } },
        { type: 'experiment.run', match: {
          taskId: TRANSPORT_LESSON.experiment.taskId,
          ...TRANSPORT_LESSON.experiment.targetConditions,
        } },
      ],
    },
    {
      id: 'exercise',
      label: '场景练习',
      kind: 'practice',
      requirements: [
        { type: 'exercise.answer', match: { exercise: 'identify', correct: true } },
        { type: 'exercise.answer', match: { exercise: 'ordering', correct: true } },
        { type: 'exercise.answer', match: { exercise: 'analysis', correct: true } },
      ],
    },
  ],
};
