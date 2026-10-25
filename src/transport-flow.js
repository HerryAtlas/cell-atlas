import { TRANSPORT_LESSON } from './transport-lesson.js';

// The course engine only sees declarative requirements. The UI dispatches
// evidence; it cannot mark a step complete without producing the evidence.
export const TRANSPORT_FLOW = {
  id: 'transport-lesson-v1',
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
        { type: 'experiment.prediction' },
        { type: 'experiment.run' },
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
