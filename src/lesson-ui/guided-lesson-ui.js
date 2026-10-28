import { CourseEngine } from '../course-engine.js';

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

export function createGuidedLessonUI({ getEngine, onOpen, onClose, getStorage, config, root = document, onBook }) {
  // A host owns its DOM subtree; no selectors may reach another overlay.
  const $ = (id) => root.querySelector('#' + id);
  const { lesson, flow, createStore, makeProgress, getExperimentRecords, createExplore } = config;
  const STAGES = flow.steps.map((step, index) => ({ id: step.id, label: step.label, short: String(index + 1).padStart(2, '0') }));
  const entry = $('cmLearnEntry');
  let disposed = false;
  const cleanup = [];
  const listen = (target, event, callback) => {
    target?.addEventListener(event, callback);
    cleanup.push(() => target?.removeEventListener?.(event, callback));
  };
  const entryLabel = (verb) => verb + '「' + lesson.title + '」' + (verb === '进入' ? '导学' : '');

  const overlay = $('cmLesson');
  const body = $('cmLessonBody');
  const progress = $('cmLessonProgress');
  const nextButton = $('cmLessonNext');
  const closeButton = $('cmLessonClose');
  const peekButton = $('cmLessonPeek');
  const restartButton = $('cmLessonRestart');
  const restartPrompt = $('cmLessonRestartPrompt');
  const restartConfirm = $('cmLessonRestartConfirm');
  const restartCancel = $('cmLessonRestartCancel');
  const historyNotice = $('cmLessonHistory');
  const helpToggle = $('cmLessonHelpToggle');
  const helpPanel = $('cmLessonHelp');
  const helpClose = $('cmLessonHelpClose');
  const tabs = Array.from(root.querySelectorAll('[data-stage]'));
  const saveStatus = $('cmLessonSaveStatus');
  const clearButton = $('cmLessonClear');
  const clearPrompt = $('cmLessonClearPrompt');
  const clearCancel = $('cmLessonClearCancel');
  const clearConfirm = $('cmLessonClearConfirm');
  const store = createStore(getStorage);
  const restored = store.load();
  const course = restored?.course ?? new CourseEngine(flow);
  let saveQueued = false;
  let saveEpoch = 0;
  let suppressSave = false;
  let syncingScene = false;
  let hasSavedProgress = Boolean(restored);

  const motionPreference = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)');
  let mechSpeed = motionPreference?.matches ? 'slow' : (restored?.mechSpeed ?? 'normal');
  const playbackDelay = () => mechSpeed === 'slow' ? 7600 : 3800;
  const initialState = () => ({
    open: false,
    restartPending: false,
    clearPending: false,
    helpOpen: false,
    stage: 0,
    picked: new Set(),
    selected: null,
    mechIndex: 0,
    mechPlaying: false,
    mechTimer: null,
    prediction: null,
    exp: { ...lesson.experiment.initialConditions },
    expResult: null,
    identifyResult: null,
    identifyPicked: null,
    order: [],
    orderFeedback: null,
    analysisResult: null,
    analysisChoice: null,
  });
  const state = Object.assign(initialState(), restored?.state);

  saveStatus.textContent = store.message;
  if (restored) entry.querySelector('b').textContent = course.courseComplete ? entryLabel('复习') : entryLabel('继续学习');

  // Save after the whole UI action finishes, not halfway through revoke/dispatch.
  function saveProgress() {
    if (disposed || suppressSave || saveQueued || (!hasSavedProgress && course.sequence === 0 && state.stage === 0)) return;
    saveQueued = true;
    const epoch = saveEpoch;
    queueMicrotask(() => {
      saveQueued = false;
      if (disposed || epoch !== saveEpoch || suppressSave) return;
      if (store.save(makeProgress(course, state, mechSpeed))) {
        hasSavedProgress = true;
        entry.querySelector('b').textContent = course.courseComplete ? entryLabel('复习') : entryLabel('继续学习');
      }
      saveStatus.textContent = store.message;
    });
  }

  const engine = () => getEngine();
  const explore = createExplore({ lesson, state, course, engine, body, $, esc, updateFooter, motionPreference, getExperimentRecords });
  if (state.expResult) state.expResult.observation = explore.observation(state.expResult);
  entry.querySelector('b').textContent = restored ? (course.courseComplete ? entryLabel('复习') : entryLabel('继续学习')) : entryLabel('进入');
  entry.querySelector('em').textContent = config.entryDescription;
  overlay.setAttribute('aria-label', lesson.title + '导学');
  $('cmLessonTitle').textContent = lesson.title;
  $('cmLessonSubtitle').textContent = config.subtitle;
  $('cmLessonBook').textContent = config.bookLabel;
  $('cmLessonBook').href = config.bookHref;
  if (onBook) listen($('cmLessonBook'), 'click', (event) => {
    event.preventDefault();
    onBook();
  });
  $('cmLessonHelpSteps').innerHTML = config.helpHTML;
  historyNotice.hidden = true;


  function setAvailable(value) {
    entry.hidden = !value;
    if (!value && state.open) close();
  }

  function setPeek(value) {
    setRestartPending(false);
    setClearPending(false);
    setHelp(false);
    overlay.classList.toggle('is-peeking', Boolean(value));
    peekButton.textContent = value ? '回到面板' : '看模型';
    if (value) root.querySelector('.cm-view')?.scrollIntoView({ block: 'start', behavior: 'auto' });
  }

  function open(stage) {
    if (!engine() || state.open) return;
    state.open = true;
    overlay.hidden = false;
    setPeek(false);
    setHelp(false);
    engine().setAutoRotate(false);
    engine().setLabelsVisible(false);
    onOpen?.();
    goStage(stage ?? (course.courseComplete ? 0 : state.stage), { resume: stage === undefined && !course.courseComplete });
  }

  function close() {
    if (!state.open) return;
    state.open = false;
    setPeek(false);
    setHelp(false);
    stopMechanism();
    overlay.hidden = true;
    const instance = engine();
    if (instance) {
      instance.setLabelsVisible(true);
      instance.clearHighlight();
      instance.setLessonState({ active: false });
      instance.setExperiment({ ...config.sceneDefaults });
      instance.setAutoRotate(true);
    }
    saveProgress();
    onClose?.();
  }

  function goStage(stage, { resume = false } = {}) {
    if (!Number.isInteger(stage) || !course.goTo(stage)) return;
    setRestartPending(false);
    setClearPending(false);
    setHelp(false);
    const next = stage;
    stopMechanism();
    state.stage = next;
    const instance = engine();
    if (!instance) return;
    syncingScene = true;
    instance.setLabelsVisible(false);
    // Restore neutral scene conditions when leaving the experiment.
    instance.setExperiment({ ...config.sceneDefaults });
    if (next === 0) {
      instance.setLessonState({ active: false });
      instance.clearHighlight();
      if (state.selected) instance.selectPick(state.selected);
    } else if (next === 1) {
      if (!resume) state.mechIndex = 0;
      state.mechPlaying = false;
      syncMechanism(!resume);
    } else if (next === 2) {
      explore.sync();
      instance.selectPick(config.experimentPick);
    } else {
      instance.setLessonState({ active: false });
      instance.clearHighlight();
    }
    syncingScene = false;
    renderTabs();
    renderStage();
    updateFooter();
    $('cmLesson').querySelector('.cm-lesson-scroll').scrollTop = 0;
  }

  function renderTabs() {
    tabs.forEach((tab) => {
      tab.setAttribute('aria-selected', String(Number(tab.dataset.stage) === state.stage));
    });
  }

  function renderStage() {
    if (state.stage === 0) renderRecognize();
    else if (state.stage === 1) renderMechanism();
    else if (state.stage === 2) explore.render();
    else renderExercises();
  }

  function allStructuresSeen() {
    return state.picked.size === lesson.structures.length;
  }

  function allExercisesDone() {
    return course.isStepComplete(3);
  }

  function firstIncompleteStage() {
    return STAGES.findIndex((_, index) => !course.isStepComplete(index));
  }

  function setRestartPending(value, restoreFocus = false) {
    state.restartPending = value;
    if (value) { setClearPending(false); setHelp(false); }
    restartPrompt.hidden = !value;
    restartButton.setAttribute('aria-expanded', String(value));
    if (value) restartCancel.focus();
    else if (restoreFocus) restartButton.focus();
  }

  function setHelp(value, restoreFocus = false) {
    state.helpOpen = Boolean(value);
    helpPanel.hidden = !state.helpOpen;
    overlay.classList.toggle('is-help-open', state.helpOpen);
    helpToggle.setAttribute('aria-expanded', String(state.helpOpen));
    if (state.helpOpen) {
      setRestartPending(false);
      setClearPending(false);
      helpClose.focus();
    } else if (restoreFocus) {
      helpToggle.focus();
    }
  }

  function setClearPending(value, restoreFocus = false) {
    state.clearPending = Boolean(value);
    clearPrompt.hidden = !state.clearPending;
    if (value) {
      stopMechanism();
      if (state.stage === 1) renderMechanism();
      setRestartPending(false);
      setHelp(false);
      clearCancel.focus();
    } else if (restoreFocus) helpToggle.focus();
  }

  function clearProgress() {
    if (!state.open || !state.clearPending) return;
    if (!store.clear()) { saveStatus.textContent = store.message; return; }
    hasSavedProgress = false;
    saveEpoch += 1;
    suppressSave = true;
    stopMechanism();
    course.reset({ discardHistory: true });
    Object.assign(state, initialState(), { open: true });
    setPeek(false);
    goStage(0);
    suppressSave = false;
    historyNotice.hidden = true;
    saveStatus.textContent = store.message;
    entry.querySelector('b').textContent = entryLabel('进入');
    helpToggle.focus();
  }

  function requestRestart() {
    if (!state.open) return;
    stopMechanism();
    if (state.stage === 1) renderMechanism();
    setHelp(false);
    setRestartPending(!state.restartPending, state.restartPending);
  }

  function restart() {
    if (!state.open || !state.restartPending) return;
    stopMechanism();
    course.reset();
    Object.assign(state, initialState(), { open: true });
    setPeek(false);
    goStage(0);
    historyNotice.textContent = '已开始第 ' + course.attempt + ' 轮学习，已保留历史尝试；保存状态见上方提示。';
    historyNotice.hidden = false;
    restartButton.focus();
  }

  function updateFooter() {
    saveProgress();
    const stage = STAGES[state.stage];
    progress.textContent = `${stage.short} / 04 · ${stage.label}${course.courseComplete ? ' · 复习' : ''}`;
    nextButton.disabled = state.stage === 3 ? !allExercisesDone() : !course.canAdvance();
    if (state.stage === 3) {
      if (course.courseComplete) nextButton.textContent = '结束复习 →';
      else if (course.canComplete()) nextButton.textContent = '完成并返回 →';
      else if (allExercisesDone()) nextButton.textContent = `继续${STAGES[firstIncompleteStage()].label} →`;
      else nextButton.textContent = '完成练习后继续';
    }
    else nextButton.textContent = '下一步 →';
  }

  function renderRecognize() {
    const selected = lesson.structures.find((item) => item.id === state.selected);
    body.innerHTML = `
      <p class="cm-lsn-lead">先不看标签，直接点击左侧模型中的结构。认识四个关键角色后，再进入机制演示。</p>
      <div class="cm-lsn-objectives">
        <b>本课目标 / OBJECTIVES</b>
        <ul>${lesson.objectives.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
      </div>
      <div class="cm-lsn-kicker">STEP 01 · CLICK TO IDENTIFY</div>
      <h3 class="cm-lsn-title">点击结构，打开知识卡</h3>
      <p class="cm-lsn-muted">已认识 ${state.picked.size} / ${lesson.structures.length}。也可以点击下面的名称作为辅助选择。</p>
      <div class="cm-lsn-picklist">
        ${lesson.structures.map((item) => `
          <button type="button" class="cm-pick-btn${state.picked.has(item.id) ? ' is-done' : ''}${state.selected === item.id ? ' is-active' : ''}" data-pick="${item.id}">
            <span><b>${esc(item.label)}</b><em>${esc(item.en)}</em></span>
            <span>${state.picked.has(item.id) ? '已认识 ✓' : '点击查看 →'}</span>
          </button>
        `).join('')}
      </div>
      ${selected ? `
        <article class="cm-lsn-card">
          <div class="cm-lsn-kicker">${esc(selected.tag)} · STRUCTURE CARD</div>
          <h3>${esc(selected.label)}</h3>
          <div class="cm-en-line">${esc(selected.en)}</div>
          <p>${esc(selected.summary)}</p>
          <p>${esc(selected.detail)}</p>
          <div class="cm-lsn-fact">${esc(selected.fact)}</div>
        </article>
      ` : '<p class="cm-lsn-muted">' + esc(config.pickHint) + '</p>'}
      <p class="cm-lsn-small">模型为教学示意，不按真实分子比例；点击空白处不会改变选择。</p>
    `;
    body.querySelectorAll('[data-pick]').forEach((button) => {
      button.addEventListener('click', () => {
        const instance = engine();
        if (instance) instance.selectPick(button.dataset.pick);
      });
    });
  }

  function syncMechanism(record = true) {
    const step = lesson.mechanism.steps[state.mechIndex];
    const instance = engine();
    if (!instance || !step) return;
    instance.setLessonState({ active: true, mode: 'mechanism', step: step.state });
    instance.selectPick(step.highlight);
    if (record) course.dispatch('mechanism.step', { index: state.mechIndex, id: step.id });
  }

  function stopMechanism() {
    state.mechPlaying = false;
    if (state.mechTimer) {
      clearTimeout(state.mechTimer);
      state.mechTimer = null;
    }
  }

  function scheduleMechanism() {
    if (state.mechTimer) clearTimeout(state.mechTimer);
    if (!state.mechPlaying || !state.open || state.stage !== 1) return;
    state.mechTimer = setTimeout(() => {
      if (!state.open || !state.mechPlaying || state.stage !== 1) return;
      if (state.mechIndex < lesson.mechanism.steps.length - 1) {
        state.mechIndex += 1;
        syncMechanism();
        renderMechanism();
        updateFooter();
        scheduleMechanism();
      } else {
        stopMechanism();
        renderMechanism();
      }
    }, playbackDelay());
  }

  function setMech(index) {
    const max = lesson.mechanism.steps.length - 1;
    state.mechIndex = Math.max(0, Math.min(max, index));
    syncMechanism();
    renderMechanism();
    updateFooter();
    if (state.mechPlaying) scheduleMechanism();
  }

  function renderMechanism() {
    const step = lesson.mechanism.steps[state.mechIndex];
    const total = lesson.mechanism.steps.length;
    body.innerHTML = `
      <p class="cm-lsn-lead">${esc(lesson.mechanism.note)}</p>
      <div class="cm-lsn-kicker">STEP 02 · MECHANISM PLAYBACK · ${String(state.mechIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div>
      <h3 class="cm-lsn-title">${esc(step.title)}</h3>
      <p class="cm-lsn-muted">${esc(step.body)}</p>
      <div class="cm-lsn-card">
        <div class="cm-lsn-kicker">KEY POINT / 重点</div>
        <p>${esc(step.key)}</p>
      </div>
      <div class="cm-mech-dots" aria-hidden="true">
        ${lesson.mechanism.steps.map((_, index) => `<i class="${index < state.mechIndex ? 'is-done' : index === state.mechIndex ? 'is-current' : ''}"></i>`).join('')}
      </div>
      <div class="cm-lsn-speed" role="group" aria-label="机制播放速度">
        <span>播放速度</span>
        <button type="button" class="cm-lsn-btn" data-speed="normal" aria-pressed="${mechSpeed === 'normal'}">正常 · 3.8 秒/步</button>
        <button type="button" class="cm-lsn-btn" data-speed="slow" aria-pressed="${mechSpeed === 'slow'}">慢速 · 7.6 秒/步</button>
      </div>
      <div class="cm-lsn-controls">
        <button type="button" data-act="mech-prev" ${state.mechIndex === 0 ? 'disabled' : ''}>← 上一步</button>
        <button type="button" class="primary" data-act="mech-play">${state.mechPlaying ? '⏸ 暂停' : '▶ 播放'}</button>
        <button type="button" data-act="mech-next" ${state.mechIndex === total - 1 ? 'disabled' : ''}>下一步 →</button>
        <button type="button" data-act="mech-replay">↺ 重播</button>
      </div>
      <p class="cm-lsn-small">播放时每 ${playbackDelay() / 1000} 秒自动推进一步；切换速度从当前步重新计时。${motionPreference?.matches ? '系统减少动态效果偏好已启用；可用慢速播放或手动逐步看。' : ''}看完 ${total} 步后，底部「下一步」才会解锁。暂停、回看和重播都不会重置模型。高亮环指向当前步骤的重点结构。</p>
    `;
    body.querySelectorAll('[data-speed]').forEach((button) => {
      button.addEventListener('click', () => {
        mechSpeed = button.dataset.speed;
        saveProgress();
        renderMechanism();
        body.querySelector('[data-speed="' + mechSpeed + '"]')?.focus();
      });
    });
    body.querySelectorAll('[data-act]').forEach((button) => {
      button.addEventListener('click', () => {
        const action = button.dataset.act;
        if (action === 'mech-prev') setMech(state.mechIndex - 1);
        else if (action === 'mech-next') setMech(state.mechIndex + 1);
        else if (action === 'mech-replay') {
          state.mechPlaying = true;
          setMech(0);
        } else if (action === 'mech-play') {
          state.mechPlaying = !state.mechPlaying;
          if (state.mechPlaying) scheduleMechanism();
          else stopMechanism();
          renderMechanism();
        }
      });
    });
    if (state.mechPlaying) scheduleMechanism();
  }

  function orderSteps() {
    const byId = new Map(lesson.exercises[1].steps.map((item) => [item.id, item]));
    return state.order.map((id) => byId.get(id)).filter(Boolean);
  }

  function renderExercises() {
    const identify = lesson.exercises[0];
    const ordering = lesson.exercises[1];
    const analysis = lesson.exercises[2];
    const selectedOrder = orderSteps();
    body.innerHTML = `
      <p class="cm-lsn-lead">三个任务分别检查辨认、顺序和结果分析。答错可以重试；反馈会解释原因。</p>
      <div class="cm-lsn-kicker">STEP 04 · IN-SCENE EXERCISES</div>
      <h3 class="cm-lsn-title">把刚才的观察变成判断</h3>
      <div class="cm-lsn-card">
        <div class="cm-lsn-kicker">练习 01 · LABEL IDENTIFICATION</div>
        <p>${esc(identify.prompt)}</p>
        ${state.identifyResult ? `<div class="cm-lsn-feedback ${state.identifyResult}">${esc(state.identifyResult === 'ok' ? identify.success : identify.failure)}</div>` : '<p class="cm-lsn-small">直接点击左侧模型中的目标结构。标签已隐藏。</p>'}
        ${state.identifyResult === 'bad' ? '<button type="button" class="cm-lsn-btn" data-act="retry-identify">再试一次</button>' : ''}
      </div>
      <div class="cm-lsn-card">
        <div class="cm-lsn-kicker">练习 02 · PROCESS ORDERING</div>
        <p>${esc(ordering.prompt)}</p>
        <div class="cm-lsn-order">
          ${ordering.steps.filter((step) => !state.order.includes(step.id)).map((step) => `<button type="button" class="cm-order-chip" data-order="${step.id}">${esc(step.label)}</button>`).join('')}
        </div>
        ${selectedOrder.length ? `<ol class="cm-order-selected">${selectedOrder.map((step) => `<li>${esc(step.label)}</li>`).join('')}</ol>` : '<p class="cm-lsn-small">点击上方步骤，把它们加入顺序。</p>'}
        <div class="cm-lsn-controls">
          <button type="button" class="cm-lsn-btn" data-act="order-check" ${selectedOrder.length === ordering.steps.length ? '' : 'disabled'}>检查顺序</button>
          <button type="button" class="cm-lsn-btn" data-act="order-reset">清空</button>
        </div>
        ${state.orderFeedback ? `<div class="cm-lsn-feedback ${state.orderFeedback}">${esc(state.orderFeedback === 'ok' ? ordering.success : ordering.failure)}</div>` : ''}
      </div>
      <div class="cm-lsn-card">
        <div class="cm-lsn-kicker">练习 03 · RESULT ANALYSIS</div>
        <p>${esc(analysis.prompt)}</p>
        <div class="cm-lsn-choice">
          ${analysis.options.map((option) => `<button type="button" class="${state.analysisChoice === option.id ? 'is-selected' : ''}" data-analysis="${option.id}">${esc(option.label)}</button>`).join('')}
        </div>
        ${state.analysisResult ? `<div class="cm-lsn-feedback ${state.analysisResult}">${esc(state.analysisResult === 'ok' ? analysis.success : analysis.failure)}</div>` : ''}
      </div>
      ${course.canComplete() ? `<div class="cm-lsn-complete"><h3>${esc(lesson.completion.title)}</h3><p>${esc(lesson.completion.body)}</p></div>` : allExercisesDone() ? '<p class="cm-lsn-small">练习已完成。请用底部按钮补齐其它阶段，之后再结课。</p>' : ''}
    `;
    body.querySelectorAll('[data-order]').forEach((button) => {
      button.addEventListener('click', () => {
        state.order.push(button.dataset.order);
        state.orderFeedback = null;
        course.revoke('exercise.answer', { exercise: 'ordering' });
        renderExercises();
        updateFooter();
      });
    });
    body.querySelector('[data-act="order-reset"]')?.addEventListener('click', () => {
      state.order = [];
      state.orderFeedback = null;
      course.revoke('exercise.answer', { exercise: 'ordering' });
      renderExercises();
      updateFooter();
    });
    body.querySelector('[data-act="order-check"]')?.addEventListener('click', () => {
      const expected = ordering.answer;
      state.orderFeedback = expected.every((id, index) => state.order[index] === id) && state.order.length === expected.length ? 'ok' : 'bad';
      course.revoke('exercise.answer', { exercise: 'ordering' });
      course.dispatch('exercise.answer', {
        exercise: 'ordering',
        correct: state.orderFeedback === 'ok',
        answer: [...state.order],
      });
      renderExercises();
      updateFooter();
    });
    body.querySelectorAll('[data-analysis]').forEach((button) => {
      button.addEventListener('click', () => {
        state.analysisChoice = button.dataset.analysis;
        state.analysisResult = button.dataset.analysis === analysis.answer ? 'ok' : 'bad';
        course.revoke('exercise.answer', { exercise: 'analysis' });
        course.dispatch('exercise.answer', {
          exercise: 'analysis',
          correct: state.analysisResult === 'ok',
          answer: state.analysisChoice,
        });
        renderExercises();
        updateFooter();
      });
    });
    body.querySelector('[data-act="retry-identify"]')?.addEventListener('click', () => {
      state.identifyResult = null;
      state.identifyPicked = null;
      course.revoke('exercise.answer', { exercise: 'identify' });
      const instance = engine();
      if (instance) instance.clearHighlight();
      renderExercises();
      updateFooter();
    });
  }

  function handlePick(pick) {
    if (syncingScene || !state.open || !pick?.id) return;
    if (state.stage === 0) {
      if (!lesson.structures.some((item) => item.id === pick.id)) return;
      state.picked.add(pick.id);
      state.selected = pick.id;
      course.dispatch('structure.selected', { id: pick.id });
      renderRecognize();
      updateFooter();
      if (overlay.classList.contains('is-peeking')) setPeek(false);
    } else if (state.stage === 3 && !state.identifyResult) {
      const exercise = lesson.exercises[0];
      state.identifyPicked = pick.id;
      state.identifyResult = pick.id === exercise.answer ? 'ok' : 'bad';
      course.revoke('exercise.answer', { exercise: 'identify' });
      course.dispatch('exercise.answer', {
        exercise: 'identify',
        correct: state.identifyResult === 'ok',
        picked: pick.id,
      });
      renderExercises();
      updateFooter();
      if (overlay.classList.contains('is-peeking')) setPeek(false);
    }
  }

  listen(motionPreference, 'change', () => {
    if (motionPreference.matches) {
      mechSpeed = 'slow';
      stopMechanism();
    }
    if (state.open && state.stage === 1) renderMechanism();
    if (state.open && state.stage === 2) explore.render();
  });

  listen(entry, 'click', () => open());
  listen(clearButton, 'click', () => setClearPending(true));
  listen(clearCancel, 'click', () => setClearPending(false, true));
  listen(clearConfirm, 'click', clearProgress);
  listen(peekButton, 'click', () => setPeek(!overlay.classList.contains('is-peeking')));
  listen(closeButton, 'click', close);
  listen(restartButton, 'click', requestRestart);
  listen(restartConfirm, 'click', restart);
  listen(restartCancel, 'click', () => setRestartPending(false, true));
  listen(helpToggle, 'click', () => setHelp(!state.helpOpen, state.helpOpen));
  listen(helpClose, 'click', () => setHelp(false, true));
  listen(overlay, 'keydown', (event) => {
    if (event.key === 'Escape' && state.clearPending) {
      event.stopPropagation();
      setClearPending(false, true);
    } else if (event.key === 'Escape' && state.helpOpen) {
      event.stopPropagation();
      setHelp(false, true);
    } else if (event.key === 'Escape' && state.restartPending) {
      event.stopPropagation();
      setRestartPending(false, true);
    }
  });
  listen(nextButton, 'click', () => {
    if (state.stage < STAGES.length - 1) {
      if (!course.advance()) return;
      goStage(course.stepIndex);
    } else if (allExercisesDone()) {
      if (!course.canComplete()) goStage(firstIncompleteStage());
      else if (course.advance()) close();
    }
  });
  tabs.forEach((tab) => listen(tab, 'click', () => goStage(Number(tab.dataset.stage))));

  return {
    // Optional tutors get this read-only handle, never the course controller.
    tutor: course.getTutorObserver(),
    // Host shortcut handling respects pending confirmations and help first.
    dismiss: () => {
      if (state.clearPending) setClearPending(false, true);
      else if (state.restartPending) setRestartPending(false, true);
      else if (state.helpOpen) setHelp(false, true);
      else close();
    },
    dispose: () => {
      if (disposed) return;
      close();
      if (hasSavedProgress || course.sequence > 0 || state.stage > 0) store.save(makeProgress(course, state, mechSpeed));
      disposed = true;
      saveEpoch += 1;
      stopMechanism();
      cleanup.forEach((remove) => remove());
    },
    setAvailable,
    open,
    close,
    handlePick,
    isOpen: () => state.open,
    refresh: () => {
      if (!state.open) return;
      renderStage();
      updateFooter();
    },
  };
}
