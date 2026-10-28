import { CourseEngine } from './course-engine.js';

// Shared persistence for guided lessons. Lesson identity stays in the engine
// snapshot so existing transport saves keep their original version-1 envelope.
export function createLessonProgress({ lesson, flow, runExperiment, validateConditions,
  storageKey, resultKeys }) {
  const VERSION = 1;
  const MAX_BYTES = 2_000_000;
  const structures = lesson.structures.map(({ id }) => id);
  const predictions = lesson.experiment.predictionOptions.map(({ id }) => id);
  const orderIds = lesson.exercises[1].steps.map(({ id }) => id);
  const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  const validOrder = (value) => Array.isArray(value) && value.length <= orderIds.length
    && new Set(value).size === value.length && value.every((id) => orderIds.includes(id));
  const conditionKeys = Object.keys(lesson.experiment.initialConditions);
  const conditionsOf = (value) => Object.fromEntries(conditionKeys.map((key) => [key, value?.[key]]));
  const validConditions = (value) => value !== null && typeof value === 'object'
    && !Array.isArray(value) && validateConditions(conditionsOf(value));
  const requireValid = (value) => { if (!value) throw new Error('Incompatible lesson progress'); };

  // Validate the lesson's evidence as well as the generic engine envelope. This
  // is consistency checking for local self-study data, not tamper-proof grading.
  function validateEvidence(event) {
    const p = event.payload;
    if (event.type === 'structure.selected') {
      requireValid(event.stepId === 'recognize' && structures.includes(p.id));
    } else if (event.type === 'mechanism.step') {
      requireValid(event.stepId === 'mechanism' && Number.isInteger(p.index)
        && lesson.mechanism.steps[p.index]?.id === p.id);
    } else if (event.type === 'experiment.prediction') {
      requireValid(event.stepId === 'explore' && predictions.includes(p.id)
        && p.taskId === lesson.experiment.taskId && validConditions(p.conditions)
        && same(conditionsOf(p.conditions), conditionsOf(lesson.experiment.targetConditions)));
    } else if (event.type === 'experiment.run') {
      requireValid(event.stepId === 'explore' && validConditions(p)
        && p.taskId === lesson.experiment.taskId && predictions.includes(p.prediction));
      const result = runExperiment(conditionsOf(p), p.prediction);
      requireValid(resultKeys.every((key) => p[key] === result[key]));
    } else if (event.type === 'exercise.answer') {
      requireValid(event.stepId === 'exercise');
      if (p.exercise === 'identify') {
        requireValid(structures.includes(p.picked) && p.correct === (p.picked === lesson.exercises[0].answer));
      } else if (p.exercise === 'ordering') {
        requireValid(validOrder(p.answer) && p.answer.length === orderIds.length
          && p.correct === same(p.answer, lesson.exercises[1].answer));
      } else if (p.exercise === 'analysis') {
        requireValid(lesson.exercises[2].options.some(({ id }) => id === p.answer)
          && p.correct === (p.answer === lesson.exercises[2].answer));
      } else requireValid(false);
    } else requireValid(false);
  }

  function makeProgress(course, state, mechSpeed) {
    return {
      version: VERSION,
      course: course.getSnapshot(),
      view: {
        selected: state.selected, mechIndex: state.mechIndex, mechSpeed,
        exp: conditionsOf(state.exp), order: [...state.order],
      },
    };
  }

  function restoreProgress(raw) {
    requireValid(typeof raw === 'string' && raw.length <= MAX_BYTES);
    const saved = JSON.parse(raw);
    requireValid(saved?.version === VERSION && saved.course?.events?.length <= 10000);
    const course = CourseEngine.fromSnapshot(flow, saved.course);
    course.events.forEach(validateEvidence);
    const view = saved.view;
    requireValid(view && validConditions(view.exp) && validOrder(view.order)
      && ['normal', 'slow'].includes(view.mechSpeed) && Number.isInteger(view.mechIndex)
      && view.mechIndex >= 0 && view.mechIndex < lesson.mechanism.steps.length);
    const active = course.events.filter((e) => e.active && e.attempt === course.attempt);
    const singletons = active.filter((e) => ['experiment.prediction', 'experiment.run', 'exercise.answer'].includes(e.type))
      .map((e) => e.type + ':' + (e.type === 'exercise.answer' ? e.payload.exercise : ''));
    requireValid(new Set(singletons).size === singletons.length);
    const latest = (type, exercise) => active.findLast((e) => e.type === type
      && (!exercise || e.payload.exercise === exercise))?.payload;
    const picked = new Set(active.filter((e) => e.type === 'structure.selected').map((e) => e.payload.id));
    requireValid(view.selected === null || picked.has(view.selected));
    requireValid(view.mechIndex === 0 || active.some((e) => e.type === 'mechanism.step' && e.payload.index === view.mechIndex));
    const prediction = latest('experiment.prediction')?.id ?? null;
    const run = latest('experiment.run');
    if (run) requireValid(run.prediction === prediction && same(conditionsOf(run), conditionsOf(view.exp)));
    const identify = latest('exercise.answer', 'identify');
    const ordering = latest('exercise.answer', 'ordering');
    const analysis = latest('exercise.answer', 'analysis');
    if (ordering) requireValid(same(ordering.answer, view.order));
    const feedback = (e) => e ? (e.correct ? 'ok' : 'bad') : null;
    return {
      course, mechSpeed: view.mechSpeed,
      state: {
        stage: course.stepIndex, picked, selected: view.selected, mechIndex: view.mechIndex,
        prediction, exp: conditionsOf(view.exp),
        expResult: run ? runExperiment(conditionsOf(run), run.prediction) : null,
        identifyPicked: identify?.picked ?? null, identifyResult: feedback(identify),
        order: [...view.order], orderFeedback: feedback(ordering),
        analysisChoice: analysis?.answer ?? null, analysisResult: feedback(analysis),
      },
    };
  }

  function getExperimentRecords(course) {
    const runs = course.events.filter((e) => e.type === 'experiment.run');
    return runs.slice(-20).map((e, index) => ({
      number: Math.max(0, runs.length - 20) + index + 1,
      sequence: e.sequence, attempt: e.attempt, ...conditionsOf(e.payload),
      prediction: e.payload.prediction,
      ...runExperiment(conditionsOf(e.payload), e.payload.prediction),
    }));
  }

  // Only one origin-local key is read/written. Never clear all browser storage.
  // Compare against the last read value so a stale tab cannot resurrect a cleared
  // record or silently overwrite progress saved by another page.
  function createStore(getStorage = () => globalThis.localStorage) {
    let baseline = null;
    let blocked = false;
    let message = '进度自动保存在当前浏览器，不上传。';
    const storage = () => {
      const result = getStorage();
      if (!result) throw new Error('Storage unavailable');
      return result;
    };
    return {
      get message() { return message; },
      load() {
        try { baseline = storage().getItem(storageKey); }
        catch { message = '浏览器无法读取本地记录；本次仍可学习，刷新可能丢失进度。'; return null; }
        if (baseline === null) return null;
        try {
          const result = restoreProgress(baseline);
          message = '已恢复上次进度。继续操作会自动保存到当前浏览器，不上传。';
          return result;
        } catch {
          blocked = true;
          message = '旧存档版本不兼容或内容损坏，已保留原记录。本次可学习；清除本课记录后才能重新保存。';
          return null;
        }
      },
      save(value) {
        if (blocked) return false;
        try {
          const target = storage();
          if (target.getItem(storageKey) !== baseline) {
            blocked = true;
            message = '另一页面已更改本课记录，已暂停保存。请刷新继续，或清除本课记录后重新开始。';
            return false;
          }
          requireValid(value?.version === VERSION && value.course?.flowId === flow.id
            && value.course.flowVersion === (flow.version ?? 1));
          const raw = JSON.stringify(value);
          if (raw.length > MAX_BYTES || value.course.events.length > 10000) throw new Error('Record too large');
          if (raw !== baseline) target.setItem(storageKey, raw);
          baseline = raw;
          message = '已保存到当前浏览器，可刷新后继续；不上传学习记录。';
          return true;
        } catch {
          message = '保存失败（存储不可用或空间不足）。当前仍可学习，最新进度可能无法在刷新后恢复。';
          return false;
        }
      },
      // The lesson UI asks for confirmation before invoking this scoped deletion.
      clear() {
        try {
          storage().removeItem(storageKey);
          baseline = null;
          blocked = false;
          message = '已清除本课记录。后续学习将从新一轮重新保存。';
          return true;
        } catch {
          message = '无法删除本课记录，当前进度未重置。请检查浏览器存储设置后重试。';
          return false;
        }
      },
    };
  }

  return { makeProgress, restoreProgress, createStore, getExperimentRecords, storageKey };
}
