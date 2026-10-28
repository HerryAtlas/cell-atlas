import assert from 'node:assert/strict';
import test from 'node:test';
import { TRANSPORT_PROGRESS_KEY, restoreTransportProgress } from '../src/transport-progress.js';

import { fixture, memoryStorage } from './helpers/lesson-ui.mjs';

function completeRecognition(f) {
  for (const id of ['membrane', 'channel', 'pump', 'atp']) f.click(`[data-pick="${id}"]`);
}

function completeMechanism(f) {
  for (let i = 0; i < 4; i += 1) f.click('[data-act="mech-next"]');
}

function completeExperiment(f, prediction = 'decrease') {
  f.click(`[data-prediction="${prediction}"]`);
  f.input('lsnAtp', 0);
  f.click('[data-act="run-experiment"]');
}

function completeExercises(f) {
  f.ui.handlePick({ id: 'pump' });
  for (const id of ['na-bind', 'phosphorylation', 'e2', 'k-bind', 'dephosphorylation']) {
    f.click(`[data-order="${id}"]`);
  }
  f.click('[data-act="order-check"]');
  f.click('[data-analysis="b"]');
}

function completeLesson(f) {
  f.ui.open();
  completeRecognition(f); f.next().click();
  completeMechanism(f); f.next().click();
  completeExperiment(f); f.next().click();
  completeExercises(f); f.next().click();
  assert.equal(f.ui.isOpen(), false);
}

test('skipping to exercises offers missing stages, and only the whole lesson can finish', (t) => {
  const f = fixture(t);
  f.ui.open(3);
  completeExercises(f);
  assert.equal(f.body().querySelector('.cm-lsn-complete'), null);
  assert.match(f.next().textContent, /继续认识结构/);
  f.next().click();
  assert.equal(f.ui.isOpen(), true);
  assert.match(f.get('#cmLessonProgress').textContent, /认识结构/);
  completeRecognition(f); f.next().click();
  completeMechanism(f); f.next().click();
  completeExperiment(f); f.next().click();
  assert.ok(f.body().querySelector('.cm-lsn-complete'));
  assert.match(f.next().textContent, /完成并返回/);
  f.next().click();
  assert.equal(f.ui.isOpen(), false);
});

test('default parameters are free exploration; only the requested experiment unlocks progression', (t) => {
  const f = fixture(t);
  f.ui.open(2);
  assert.equal(f.get('[data-act="run-experiment"]').disabled, true);
  f.click('[data-prediction="decrease"]');
  f.click('[data-act="run-experiment"]');
  assert.match(f.body().textContent, /自由探索结果/);
  assert.doesNotMatch(f.body().textContent, /预测正确。/);
  assert.equal(f.next().disabled, true);
  f.input('lsnAtp', 0);
  f.click('[data-act="run-experiment"]');
  assert.match(f.body().textContent, /预测正确。/);
  assert.equal(f.next().disabled, false);
  assert.deepEqual(f.calls.lesson.at(-1), { active: true, step: 0, experimentRate: 0 });
  assert.deepEqual(f.calls.experiment.at(-1), { atp: 0, gradient: 0.6, inhibitor: false });
});

test('changing conditions invalidates the result, and restoring them still requires another run', (t) => {
  const f = fixture(t);
  f.ui.open(2);
  completeExperiment(f);
  f.input('lsnGradient', 80);
  assert.equal(f.next().disabled, true);
  assert.equal(f.body().querySelector('.cm-lsn-feedback'), null);
  assert.equal(f.body().querySelector('.cm-lsn-result').hidden, true);
  f.click('[data-act="run-experiment"]');
  assert.match(f.body().textContent, /自由探索结果/);
  assert.equal(f.next().disabled, true);
  f.input('lsnGradient', 60);
  assert.equal(f.next().disabled, true);
  f.click('[data-act="run-experiment"]');
  assert.equal(f.next().disabled, false);
  f.check(true);
  f.click('[data-act="run-experiment"]');
  assert.equal(f.next().disabled, true);
  f.check(false);
  assert.equal(f.next().disabled, true);
  f.click('[data-act="run-experiment"]');
  assert.equal(f.next().disabled, false);
});

test('a wrong prediction receives feedback without rejecting a correctly performed experiment', (t) => {
  const f = fixture(t);
  f.ui.open(2);
  completeExperiment(f, 'increase');
  assert.match(f.body().textContent, /预测与模拟结果不一致/);
  assert.equal(f.next().disabled, false);
  f.click('[data-prediction="decrease"]');
  assert.equal(f.next().disabled, true);
  f.click('[data-act="run-experiment"]');
  assert.match(f.body().textContent, /预测正确。/);
});

test('completed lessons reopen for review, while restarting clears every displayed activity', (t) => {
  const f = fixture(t);
  completeLesson(f);
  f.ui.open();
  assert.match(f.get('#cmLessonProgress').textContent, /复习/);
  assert.equal(f.next().disabled, false);
  f.next().click();
  assert.match(f.get('#cmLessonProgress').textContent, /观察机制/);
  f.next().click();
  assert.match(f.body().textContent, /预测正确。/);
  f.next().click();
  assert.match(f.next().textContent, /结束复习/);
  f.next().click();
  assert.equal(f.ui.isOpen(), false);
  f.ui.open();
  f.click('#cmLessonRestart');
  f.click('#cmLessonRestartConfirm');
  assert.doesNotMatch(f.get('#cmLessonProgress').textContent, /复习/);
  assert.match(f.body().textContent, /已认识 0 \/ 4/);
  assert.equal(f.next().disabled, true);
  f.stage(1); assert.equal(f.next().disabled, true);
  f.stage(2);
  assert.equal(f.get('#lsnAtp').value, '60');
  assert.equal(f.get('[data-act="run-experiment"]').disabled, true);
  assert.equal(f.body().querySelector('.cm-lsn-result'), null);
  f.stage(3);
  assert.equal(f.next().disabled, true);
  assert.equal(f.body().querySelector('.cm-order-selected'), null);
  assert.equal(f.body().querySelector('.cm-lsn-feedback'), null);
});

test('returning to exploration restores its conditions and mechanism review resets the scene', (t) => {
  const f = fixture(t);
  f.ui.open(2);
  completeExperiment(f);
  f.ui.close();
  assert.deepEqual(f.calls.experiment.at(-1), { atp: 1, gradient: 1, inhibitor: false });
  f.ui.open(2);
  assert.deepEqual(f.calls.experiment.at(-1), { atp: 0, gradient: 0.6, inhibitor: false });
  assert.deepEqual(f.calls.lesson.at(-1), { active: true, step: 0, experimentRate: 0 });
  assert.match(f.body().textContent, /预测正确。/);
  f.stage(1);
  assert.deepEqual(f.calls.experiment.at(-1), { atp: 1, gradient: 1, inhibitor: false });
  f.stage(2);
  assert.deepEqual(f.calls.experiment.at(-1), { atp: 0, gradient: 0.6, inhibitor: false });
});

test('replacing a correct analysis answer or clearing an ordering answer blocks completion', (t) => {
  const f = fixture(t);
  f.ui.open(3);
  completeExercises(f);
  assert.equal(f.next().disabled, false);
  f.click('[data-analysis="a"]');
  assert.equal(f.next().disabled, true);
  f.click('[data-analysis="b"]');
  assert.equal(f.next().disabled, false);
  f.click('[data-act="order-reset"]');
  assert.equal(f.next().disabled, true);
});

test('restart cancels mechanism playback before a new attempt', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const f = fixture(t);
  f.ui.open(1);
  f.click('[data-act="mech-play"]');
  t.mock.timers.tick(3800);
  f.click('#cmLessonRestart');
  f.click('#cmLessonRestartConfirm');
  t.mock.timers.tick(20000);
  assert.match(f.get('#cmLessonProgress').textContent, /认识结构/);
  f.stage(1);
  assert.match(f.body().textContent, /01 \/ 05/);
  assert.equal(f.next().disabled, true);
});

test('looking at the model brings it into view and selecting a structure returns to the panel', (t) => {
  const f = fixture(t);
  f.ui.open();
  const modelView = f.get('.cm-view');
  const overlay = f.get('#cmLesson');
  assert.equal(modelView.scrollCalls.length, 0);
  f.click('#cmLessonPeek');
  assert.deepEqual(modelView.scrollCalls, [{ block: 'start', behavior: 'auto' }]);
  assert.equal(overlay.classList.contains('is-peeking'), true);
  assert.equal(f.get('#cmLessonPeek').textContent, '回到面板');
  f.ui.handlePick({ id: 'pump' });
  assert.equal(overlay.classList.contains('is-peeking'), false);
  assert.equal(f.get('#cmLessonPeek').textContent, '看模型');
  assert.match(f.body().textContent, /已认识 1 \/ 4/);
  assert.equal(modelView.scrollCalls.length, 1);
});

test('restart needs a separate confirmation and cancellation preserves progress', (t) => {
  const f = fixture(t);
  f.ui.open();
  f.click('[data-pick="pump"]');
  const before = f.ui.tutor.getTutorContext();
  f.click('#cmLessonRestart');
  assert.equal(f.get('#cmLessonRestartPrompt').hidden, false);
  assert.equal(f.get('#cmLessonRestart').getAttribute('aria-expanded'), 'true');
  assert.match(f.body().textContent, /已认识 1 \/ 4/);
  assert.deepEqual(f.ui.tutor.getTutorContext(), before);
  f.click('#cmLessonRestartCancel');
  assert.equal(f.get('#cmLessonRestartPrompt').hidden, true);
  assert.match(f.body().textContent, /已认识 1 \/ 4/);
  // A stale or hidden confirm action cannot reset the attempt.
  f.click('#cmLessonRestartConfirm');
  assert.match(f.body().textContent, /已认识 1 \/ 4/);
  f.click('#cmLessonRestart');
  f.click('#cmLessonRestartConfirm');
  assert.match(f.body().textContent, /已认识 0 \/ 4/);
  assert.equal(f.get('#cmLessonHistory').hidden, false);
  assert.match(f.get('#cmLessonHistory').textContent, /第 2 轮.*已保留历史尝试/);
});

test('navigation and closing dismiss a pending restart without resetting', (t) => {
  const f = fixture(t);
  f.ui.open();
  f.click('[data-pick="pump"]');
  f.click('#cmLessonRestart');
  f.stage(1);
  assert.equal(f.get('#cmLessonRestartPrompt').hidden, true);
  f.click('#cmLessonRestartConfirm');
  assert.match(f.get('#cmLessonProgress').textContent, /观察机制/);
  f.click('#cmLessonRestart');
  f.ui.close(); f.ui.open();
  assert.equal(f.get('#cmLessonRestartPrompt').hidden, true);
  assert.match(f.get('#cmLessonProgress').textContent, /观察机制/);
  f.stage(0);
  assert.match(f.body().textContent, /已认识 1 \/ 4/);
});

test('the lesson exposes only the restricted tutor handle to integrations', (t) => {
  const f = fixture(t);
  assert.deepEqual(Object.keys(f.ui.tutor).sort(), ['getTutorContext', 'subscribe']);
  for (const key of ['dispatch', 'goTo', 'reset', 'getSnapshot', 'events', 'flow']) {
    assert.equal(f.ui.tutor[key], undefined);
  }
});

test('in-lesson help opens from the header and closes again', (t) => {
  const f = fixture(t);
  f.ui.open();
  assert.equal(f.get('#cmLessonHelp').hidden, true);
  f.click('#cmLessonHelpToggle');
  assert.equal(f.get('#cmLessonHelp').hidden, false);
  assert.equal(f.get('#cmLessonHelpToggle').getAttribute('aria-expanded'), 'true');
  f.click('#cmLessonHelpClose');
  assert.equal(f.get('#cmLessonHelp').hidden, true);
  assert.equal(f.get('#cmLessonHelpToggle').getAttribute('aria-expanded'), 'false');
});

test('speed changes restart the current dwell without skipping steps or clearing progress', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const f = fixture(t);
  f.ui.open(1);
  f.click('[data-act="mech-play"]');
  t.mock.timers.tick(3000);
  f.click('[data-speed="slow"]');
  t.mock.timers.tick(7599);
  assert.match(f.body().textContent, /01 \/ 05/);
  t.mock.timers.tick(1);
  assert.match(f.body().textContent, /02 \/ 05/);
  f.click('[data-speed="normal"]');
  t.mock.timers.tick(3800);
  assert.match(f.body().textContent, /03 \/ 05/);
  f.click('[data-act="mech-play"]');
  t.mock.timers.tick(20000);
  assert.match(f.body().textContent, /03 \/ 05/);
  assert.equal(f.next().disabled, true);
  f.click('[data-act="mech-next"]');
  f.click('[data-act="mech-next"]');
  assert.equal(f.next().disabled, false);
});

test('experiment animation receives only current runs and clears on edits, navigation and restart', (t) => {
  const f = fixture(t);
  f.ui.open(2);
  assert.equal(f.calls.lesson.at(-1).experimentRate, null);
  f.click('[data-prediction="decrease"]');
  f.click('[data-act="run-experiment"]');
  assert.equal(f.calls.lesson.at(-1).experimentRate, 47);
  assert.match(f.get('#lsnPumpStatus').textContent, /较快/);
  f.input('lsnAtp', 20);
  assert.equal(f.calls.lesson.at(-1).experimentRate, null);
  assert.match(f.get('#lsnPumpStatus').textContent, /待运行/);
  f.click('[data-act="run-experiment"]');
  assert.equal(f.calls.lesson.at(-1).experimentRate, 16);
  assert.match(f.get('#lsnPumpStatus').textContent, /低速/);
  f.check(true);
  assert.equal(f.calls.lesson.at(-1).experimentRate, null);
  f.click('[data-act="run-experiment"]');
  assert.equal(f.calls.lesson.at(-1).experimentRate, 0);
  assert.match(f.get('#lsnPumpStatus').textContent, /停止/);
  f.stage(1);
  assert.equal(f.calls.lesson.at(-1).experimentRate, undefined);
  f.stage(2);
  assert.equal(f.calls.lesson.at(-1).experimentRate, 0);
  f.click('#cmLessonRestart');
  f.click('#cmLessonRestartConfirm');
  f.stage(2);
  assert.equal(f.calls.lesson.at(-1).experimentRate, null);
});

test('reduced motion defaults to slow and a live preference change pauses autoplay', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const original = globalThis.matchMedia;
  let changed;
  const media = { matches: true, addEventListener: (_, fn) => { changed = fn; } };
  globalThis.matchMedia = () => media;
  t.after(() => {
    if (original === undefined) delete globalThis.matchMedia;
    else globalThis.matchMedia = original;
  });
  const f = fixture(t);
  f.ui.open(1);
  assert.equal(f.get('[data-speed="slow"]').getAttribute('aria-pressed'), 'true');
  f.click('[data-speed="normal"]');
  f.click('[data-act="mech-play"]');
  changed();
  t.mock.timers.tick(20000);
  assert.match(f.body().textContent, /01 \/ 05/);
  assert.match(f.get('[data-act="mech-play"]').textContent, /播放/);
  f.stage(2);
  f.click('[data-prediction="decrease"]');
  f.click('[data-act="run-experiment"]');
  assert.match(f.get('#lsnPumpStatus').textContent, /静态示意/);
});


test('comparison records survive edits and reuse restores conditions without completing a task', async (t) => {
  const f = fixture(t);
  f.ui.open(2);
  f.click('[data-prediction="decrease"]');
  f.click('[data-act="run-experiment"]');
  completeExperiment(f);
  assert.equal(f.body().querySelectorAll('[data-record]').length, 2);
  assert.match(f.body().textContent, /47%/);
  assert.match(f.body().textContent, /-47/);
  const reuse = f.body().querySelector('[data-reuse]');
  reuse.click(); // Newest run is the target; reuse must invalidate it.
  assert.equal(f.get('#lsnAtp').value, '0');
  assert.equal(f.next().disabled, true);
  assert.match(f.get('#lsnPumpStatus').textContent, /待运行/);
  assert.equal(f.body().querySelectorAll('[data-record]').length, 2);
  f.click('[data-act="restore-conditions"]');
  assert.equal(f.get('#lsnAtp').value, '60');
  assert.equal(f.get('#lsnGradient').value, '60');
  await Promise.resolve();
  const saved = restoreTransportProgress(f.storage.getItem(TRANSPORT_PROGRESS_KEY));
  assert.equal(saved.state.expResult, null);
  assert.equal(saved.course.isStepComplete(2), false);
});

test('reload restores current stage, draft conditions, predictions, records and paused mechanism', async (t) => {
  const storage = memoryStorage();
  const f = fixture(t, storage);
  f.ui.open();
  completeRecognition(f);
  f.stage(1);
  f.click('[data-act="mech-next"]');
  f.click('[data-act="mech-next"]');
  f.click('[data-speed="slow"]');
  f.ui.close();
  await Promise.resolve();
  const resumed = fixture(t, storage);
  resumed.ui.open();
  assert.match(resumed.body().textContent, /03 \/ 05/);
  assert.match(resumed.get('[data-act="mech-play"]').textContent, /播放/);
  assert.equal(resumed.get('[data-speed="slow"]').getAttribute('aria-pressed'), 'true');
  resumed.stage(2);
  completeExperiment(resumed);
  resumed.input('lsnAtp', 25); // Unsaved-to-engine draft must invalidate the result on reload.
  resumed.ui.close();
  await Promise.resolve();
  const again = fixture(t, storage);
  again.ui.open();
  assert.match(again.get('#cmLessonProgress').textContent, /动手探索/);
  assert.equal(again.get('#lsnAtp').value, '25');
  assert.equal(again.next().disabled, true);
  assert.match(again.get('#lsnPumpStatus').textContent, /待运行/);
  assert.equal(again.body().querySelectorAll('[data-record]').length, 1);
  assert.equal(again.get('[data-prediction="decrease"]').classList.contains('is-selected'), true);
});

test('reload preserves incomplete ordering and wrong answers without granting completion', async (t) => {
  const storage = memoryStorage();
  const f = fixture(t, storage);
  f.ui.open(3);
  f.ui.handlePick({ id: 'channel' });
  f.click('[data-order="na-bind"]');
  f.click('[data-order="phosphorylation"]');
  f.click('[data-analysis="a"]');
  f.ui.close();
  await Promise.resolve();
  const resumed = fixture(t, storage);
  resumed.ui.open();
  assert.equal(resumed.body().querySelector('.cm-order-selected').querySelectorAll('li').length, 2);
  assert.equal(resumed.body().querySelectorAll('.bad').length, 2);
  assert.equal(resumed.next().disabled, true);
});

test('restart preserves saved history; confirmed clear removes only this lesson and resets its tutor', async (t) => {
  const storage = memoryStorage();
  storage.setItem('unrelated', 'keep');
  const f = fixture(t, storage);
  const tutor = f.ui.tutor;
  f.ui.open(2);
  completeExperiment(f);
  f.click('#cmLessonRestart');
  f.click('#cmLessonRestartConfirm');
  await Promise.resolve();
  assert.equal(restoreTransportProgress(storage.getItem(TRANSPORT_PROGRESS_KEY)).course.attempt, 2);
  f.stage(2);
  assert.equal(f.body().querySelectorAll('[data-record]').length, 1);
  f.click('#cmLessonHelpToggle');
  f.click('#cmLessonClear');
  f.click('#cmLessonClearCancel');
  assert.equal(f.body().querySelectorAll('[data-record]').length, 1);
  f.click('#cmLessonHelpToggle');
  f.click('#cmLessonClear');
  f.click('#cmLessonClearConfirm');
  await Promise.resolve();
  assert.equal(storage.getItem(TRANSPORT_PROGRESS_KEY), null);
  assert.equal(storage.getItem('unrelated'), 'keep');
  assert.equal(tutor.getTutorContext().progress.completedSteps, 0);
  assert.match(f.body().textContent, /已认识 0 \/ 4/);
  f.click('[data-pick="pump"]');
  await Promise.resolve();
  assert.equal(restoreTransportProgress(storage.getItem(TRANSPORT_PROGRESS_KEY)).course.attempt, 1);
});

test('storage denial does not interrupt learning or claim a successful save', async (t) => {
  const f = fixture(t, { getItem() { throw new Error('Denied'); }, setItem() { throw new Error('Denied'); } });
  f.ui.open();
  f.click('[data-pick="pump"]');
  await Promise.resolve();
  assert.match(f.body().textContent, /已认识 1 \/ 4/);
  assert.match(f.get('#cmLessonSaveStatus').textContent, /保存失败/);
});


test('completed lessons reload in review with all answers and experiment results restored', async (t) => {
  const storage = memoryStorage();
  const f = fixture(t, storage);
  f.ui.open();
  completeRecognition(f);
  f.click('#cmLessonNext');
  completeMechanism(f);
  f.click('#cmLessonNext');
  completeExperiment(f);
  f.click('#cmLessonNext');
  completeExercises(f);
  f.click('#cmLessonNext');
  await Promise.resolve();
  const resumed = fixture(t, storage);
  resumed.ui.open();
  assert.match(resumed.get('#cmLessonProgress').textContent, /认识结构.*复习/);
  assert.match(resumed.body().textContent, /已认识 4 \/ 4/);
  resumed.stage(2);
  assert.match(resumed.body().textContent, /0% 相对速率/);
  assert.equal(resumed.next().disabled, false);
  resumed.stage(3);
  assert.equal(resumed.body().querySelectorAll('.ok').length, 3);
  assert.match(resumed.body().textContent, /样板课完成/);
});

test('restarting a saved draft before any evidence replaces the old saved stage', async (t) => {
  const storage = memoryStorage();
  const f = fixture(t, storage);
  f.ui.open(2);
  f.input('lsnAtp', 25);
  await Promise.resolve();
  assert.equal(restoreTransportProgress(storage.getItem(TRANSPORT_PROGRESS_KEY)).state.stage, 2);
  f.click('#cmLessonRestart');
  f.click('#cmLessonRestartConfirm');
  await Promise.resolve();
  const restored = restoreTransportProgress(storage.getItem(TRANSPORT_PROGRESS_KEY));
  assert.equal(restored.state.stage, 0);
  assert.equal(restored.state.exp.atp, 60);
  assert.equal(restored.course.attempt, 2);
});
