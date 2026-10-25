import { TRANSPORT_LESSON } from '../src/transport-lesson.js';
import { CourseEngine } from '../src/course-engine.js';
import { TRANSPORT_FLOW } from '../src/transport-flow.js';

const STAGES = [
  { id: 'recognize', label: '认识结构', short: '01' },
  { id: 'mechanism', label: '观察机制', short: '02' },
  { id: 'explore', label: '动手探索', short: '03' },
  { id: 'exercise', label: '场景练习', short: '04' },
];
const $ = (id) => document.getElementById(id);

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

export function createTransportLessonUI({ getEngine, onOpen, onClose }) {
  const entry = $('cmLearnEntry');
  const overlay = $('cmLesson');
  const body = $('cmLessonBody');
  const progress = $('cmLessonProgress');
  const nextButton = $('cmLessonNext');
  const closeButton = $('cmLessonClose');
  const peekButton = $('cmLessonPeek');
  const tabs = Array.from(document.querySelectorAll('[data-stage]'));
  const course = new CourseEngine(TRANSPORT_FLOW);

  const state = {
    open: false,
    stage: 0,
    picked: new Set(),
    selected: null,
    mechIndex: 0,
    mechPlaying: false,
    mechTimer: null,
    prediction: null,
    exp: { atp: 60, gradient: 60, inhibitor: false },
    expRun: false,
    expResult: null,
    identifyResult: null,
    identifyPicked: null,
    order: [],
    orderFeedback: null,
    analysisResult: null,
    analysisChoice: null,
  };

  const engine = () => getEngine();

  function setAvailable(value) {
    entry.hidden = !value;
    if (!value && state.open) close();
  }

  function setPeek(value) {
    overlay.classList.toggle('is-peeking', Boolean(value));
    peekButton.textContent = value ? '回到面板' : '看模型';
  }

  function open(stage = 0) {
    if (!engine() || state.open) return;
    state.open = true;
    overlay.hidden = false;
    setPeek(false);
    engine().setAutoRotate(false);
    engine().setLabelsVisible(false);
    onOpen?.();
    goStage(stage);
  }

  function close() {
    if (!state.open) return;
    state.open = false;
    setPeek(false);
    stopMechanism();
    overlay.hidden = true;
    const instance = engine();
    if (instance) {
      instance.setLabelsVisible(true);
      instance.clearHighlight();
      instance.setLessonState({ active: false });
      instance.setExperiment({ atp: 1, gradient: 1, inhibitor: false });
      instance.setAutoRotate(true);
    }
    onClose?.();
  }

  function goStage(stage) {
    const next = Math.max(0, Math.min(STAGES.length - 1, stage));
    stopMechanism();
    course.goTo(next);
    state.stage = next;
    const instance = engine();
    if (!instance) return;
    instance.setLabelsVisible(false);
    if (next === 0) {
      instance.setLessonState({ active: false });
      instance.clearHighlight();
    } else if (next === 1) {
      state.mechIndex = 0;
      state.mechPlaying = false;
      syncMechanism();
    } else if (next === 2) {
      instance.setLessonState({ active: true, step: 0 });
      instance.selectPick('pump');
    } else {
      instance.setLessonState({ active: false });
      instance.clearHighlight();
    }
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
    else if (state.stage === 2) renderExplore();
    else renderExercises();
  }

  function allStructuresSeen() {
    return state.picked.size === TRANSPORT_LESSON.structures.length;
  }

  function allExercisesDone() {
    return course.isStepComplete(3);
  }

  function canGoNext() {
    return course.isStepComplete();
  }

  function updateFooter() {
    const stage = STAGES[state.stage];
    progress.textContent = `${stage.short} / 04 · ${stage.label}`;
    nextButton.disabled = state.stage === 3 ? !allExercisesDone() : !canGoNext();
    if (state.stage === 3) nextButton.textContent = allExercisesDone() ? '完成并返回 →' : '完成练习后继续';
    else nextButton.textContent = '下一步 →';
  }

  function renderRecognize() {
    const selected = TRANSPORT_LESSON.structures.find((item) => item.id === state.selected);
    body.innerHTML = `
      <p class="cm-lsn-lead">先不看标签，直接点击左侧模型中的结构。认识四个关键角色后，再进入机制演示。</p>
      <div class="cm-lsn-objectives">
        <b>本课目标 / OBJECTIVES</b>
        <ul>${TRANSPORT_LESSON.objectives.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
      </div>
      <div class="cm-lsn-kicker">STEP 01 · CLICK TO IDENTIFY</div>
      <h3 class="cm-lsn-title">点击结构，打开知识卡</h3>
      <p class="cm-lsn-muted">已认识 ${state.picked.size} / ${TRANSPORT_LESSON.structures.length}。也可以点击下面的名称作为辅助选择。</p>
      <div class="cm-lsn-picklist">
        ${TRANSPORT_LESSON.structures.map((item) => `
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
      ` : '<p class="cm-lsn-muted">提示：点击泵、通道、膜或 ATP。高亮环会跟随你的选择。</p>'}
      <p class="cm-lsn-small">模型为教学示意，不按真实分子比例；点击空白处不会改变选择。</p>
    `;
    body.querySelectorAll('[data-pick]').forEach((button) => {
      button.addEventListener('click', () => {
        const instance = engine();
        if (instance) instance.selectPick(button.dataset.pick);
      });
    });
  }

  function syncMechanism() {
    const step = TRANSPORT_LESSON.mechanism.steps[state.mechIndex];
    const instance = engine();
    if (!instance || !step) return;
    instance.setLessonState({ active: true, step: step.state });
    instance.selectPick(step.highlight);
    course.dispatch('mechanism.step', { index: state.mechIndex, id: step.id });
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
      if (state.mechIndex < TRANSPORT_LESSON.mechanism.steps.length - 1) {
        state.mechIndex += 1;
        syncMechanism();
        renderMechanism();
        updateFooter();
        scheduleMechanism();
      } else {
        stopMechanism();
        renderMechanism();
      }
    }, 3800);
  }

  function setMech(index) {
    const max = TRANSPORT_LESSON.mechanism.steps.length - 1;
    state.mechIndex = Math.max(0, Math.min(max, index));
    syncMechanism();
    renderMechanism();
    updateFooter();
    if (state.mechPlaying) scheduleMechanism();
  }

  function renderMechanism() {
    const step = TRANSPORT_LESSON.mechanism.steps[state.mechIndex];
    const total = TRANSPORT_LESSON.mechanism.steps.length;
    body.innerHTML = `
      <p class="cm-lsn-lead">${esc(TRANSPORT_LESSON.mechanism.note)}</p>
      <div class="cm-lsn-kicker">STEP 02 · MECHANISM PLAYBACK · ${String(state.mechIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div>
      <h3 class="cm-lsn-title">${esc(step.title)}</h3>
      <p class="cm-lsn-muted">${esc(step.body)}</p>
      <div class="cm-lsn-card">
        <div class="cm-lsn-kicker">KEY POINT / 重点</div>
        <p>${esc(step.key)}</p>
      </div>
      <div class="cm-mech-dots" aria-hidden="true">
        ${TRANSPORT_LESSON.mechanism.steps.map((_, index) => `<i class="${index < state.mechIndex ? 'is-done' : index === state.mechIndex ? 'is-current' : ''}"></i>`).join('')}
      </div>
      <div class="cm-lsn-controls">
        <button type="button" data-act="mech-prev" ${state.mechIndex === 0 ? 'disabled' : ''}>← 上一步</button>
        <button type="button" class="primary" data-act="mech-play">${state.mechPlaying ? '⏸ 暂停' : '▶ 播放'}</button>
        <button type="button" data-act="mech-next" ${state.mechIndex === total - 1 ? 'disabled' : ''}>下一步 →</button>
        <button type="button" data-act="mech-replay">↺ 重播</button>
      </div>
      <p class="cm-lsn-small">播放时每 3.8 秒自动推进一步；看完 5 步后，底部「下一步」才会解锁。暂停、回看和重播都不会重置模型。高亮环指向当前步骤的重点结构。</p>
    `;
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

  function experimentRate() {
    if (state.exp.inhibitor) return 0;
    const atp = state.exp.atp / 100;
    const gradient = state.exp.gradient / 100;
    return Math.round(100 * atp * (0.45 + 0.55 * gradient));
  }

  function experimentObservation(rate) {
    if (state.exp.inhibitor) return TRANSPORT_LESSON.experiment.inhibited;
    if (rate === 0) return state.exp.atp === 0 ? TRANSPORT_LESSON.experiment.zeroAtp : TRANSPORT_LESSON.experiment.lowAtp;
    if (rate < 35) return '低速率：泵仍能工作，但不能充分维持 Na⁺/K⁺ 梯度；膜电位恢复变慢。';
    return TRANSPORT_LESSON.experiment.normal;
  }

  function renderExplore() {
    const prediction = state.prediction;
    const result = state.expResult;
    body.innerHTML = `
      <p class="cm-lsn-lead">先做一个预测，再改变条件并运行模拟。观察相对速率，再解释为什么。</p>
      <div class="cm-lsn-kicker">STEP 03 · PREDICT → RUN → OBSERVE → EXPLAIN</div>
      <h3 class="cm-lsn-title">${esc(TRANSPORT_LESSON.experiment.title)}</h3>
      <p class="cm-lsn-muted">${esc(TRANSPORT_LESSON.experiment.prompt)}</p>
      <div class="cm-lsn-choice">
        ${TRANSPORT_LESSON.experiment.predictionOptions.map((option) => `
          <button type="button" class="${prediction === option.id ? 'is-selected' : ''}" data-prediction="${option.id}">${esc(option.label)}</button>
        `).join('')}
      </div>
      <div class="cm-lsn-slider">
        <label for="lsnAtp">ATP 供应 <span class="cm-lsn-muted">0–100%</span></label>
        <output id="lsnAtpOut">${state.exp.atp}%</output>
        <input id="lsnAtp" data-exp="atp" type="range" min="0" max="100" step="5" value="${state.exp.atp}" />
      </div>
      <div class="cm-lsn-slider">
        <label for="lsnGradient">Na⁺ 梯度相对充足度</label>
        <output id="lsnGradientOut">${state.exp.gradient}%</output>
        <input id="lsnGradient" data-exp="gradient" type="range" min="0" max="100" step="5" value="${state.exp.gradient}" />
      </div>
      <label class="cm-lsn-check"><input id="lsnInhibitor" type="checkbox" ${state.exp.inhibitor ? 'checked' : ''} /> 加入哇巴因（Na⁺/K⁺ 泵抑制剂）</label>
      <button type="button" class="cm-lsn-btn primary" data-act="run-experiment" ${prediction ? '' : 'disabled'}>运行模拟 →</button>
      ${result ? `
        <div class="cm-lsn-result">
          <div class="cm-lsn-kicker">OBSERVATION / 观察</div>
          <strong>${result.rate}% 相对速率</strong>
          <p>${esc(result.observation)}</p>
        </div>
        <div class="cm-lsn-feedback ${result.predictionCorrect ? 'ok' : 'bad'}">
          ${result.predictionCorrect ? '预测正确。' : '预测与模拟结果不一致，正好用来修正模型。'} ${esc(TRANSPORT_LESSON.experiment.explanation)}
        </div>
      ` : '<p class="cm-lsn-small">预测是必填的。模拟结果只用于比较趋势，不是实验测量值。</p>'}
      <div class="cm-lsn-assumptions">
        <b>SIMULATION ASSUMPTIONS / 模拟假设</b>
        <ul>${TRANSPORT_LESSON.experiment.assumptions.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
      </div>
    `;
    body.querySelectorAll('[data-prediction]').forEach((button) => {
      button.addEventListener('click', () => {
        state.prediction = button.dataset.prediction;
        state.expRun = false;
        state.expResult = null;
        course.revoke('experiment.run');
        course.revoke('experiment.prediction');
        course.dispatch('experiment.prediction', { id: state.prediction });
        renderExplore();
        updateFooter();
      });
    });
    body.querySelectorAll('[data-exp]').forEach((input) => {
      input.addEventListener('input', () => {
        state.exp[input.dataset.exp] = Number(input.value);
        const out = $(`lsn${input.dataset.exp === 'atp' ? 'Atp' : 'Gradient'}Out`);
        if (out) out.textContent = `${input.value}%`;
        state.expRun = false;
        state.expResult = null;
        course.revoke('experiment.run');
        body.querySelector('.cm-lsn-result')?.setAttribute('hidden', '');
        body.querySelector('.cm-lsn-feedback')?.remove();
        updateFooter();
      });
    });
    $('lsnInhibitor')?.addEventListener('change', (event) => {
      state.exp.inhibitor = event.target.checked;
      state.expRun = false;
      state.expResult = null;
      course.revoke('experiment.run');
      body.querySelector('.cm-lsn-result')?.setAttribute('hidden', '');
      body.querySelector('.cm-lsn-feedback')?.remove();
      updateFooter();
    });
    body.querySelector('[data-act="run-experiment"]')?.addEventListener('click', () => {
      if (!state.prediction) return;
      const rate = experimentRate();
      state.expRun = true;
      state.expResult = {
        rate,
        observation: experimentObservation(rate),
        predictionCorrect: state.prediction === TRANSPORT_LESSON.experiment.correctPrediction,
      };
      course.revoke('experiment.run');
      course.dispatch('experiment.run', {
        rate,
        atp: state.exp.atp,
        gradient: state.exp.gradient,
        inhibitor: state.exp.inhibitor,
        prediction: state.prediction,
      });
      const instance = engine();
      if (instance) {
        instance.setExperiment({
          atp: state.exp.atp / 100,
          gradient: state.exp.gradient / 100,
          inhibitor: state.exp.inhibitor,
        });
        instance.setLessonState({ active: true, step: 4 });
        instance.selectPick('pump');
      }
      renderExplore();
      updateFooter();
    });
  }

  function orderSteps() {
    const byId = new Map(TRANSPORT_LESSON.exercises[1].steps.map((item) => [item.id, item]));
    return state.order.map((id) => byId.get(id)).filter(Boolean);
  }

  function renderExercises() {
    const identify = TRANSPORT_LESSON.exercises[0];
    const ordering = TRANSPORT_LESSON.exercises[1];
    const analysis = TRANSPORT_LESSON.exercises[2];
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
      ${allExercisesDone() ? `<div class="cm-lsn-complete"><h3>${esc(TRANSPORT_LESSON.completion.title)}</h3><p>${esc(TRANSPORT_LESSON.completion.body)}</p></div>` : ''}
    `;
    body.querySelectorAll('[data-order]').forEach((button) => {
      button.addEventListener('click', () => {
        state.order.push(button.dataset.order);
        state.orderFeedback = null;
        course.revoke('exercise.answer', { exercise: 'ordering' });
        renderExercises();
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
    if (!state.open || !pick?.id) return;
    if (state.stage === 0) {
      if (!TRANSPORT_LESSON.structures.some((item) => item.id === pick.id)) return;
      state.picked.add(pick.id);
      state.selected = pick.id;
      course.dispatch('structure.selected', { id: pick.id });
      renderRecognize();
      updateFooter();
      if (overlay.classList.contains('is-peeking')) setPeek(false);
    } else if (state.stage === 3 && !state.identifyResult) {
      const exercise = TRANSPORT_LESSON.exercises[0];
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

  entry.addEventListener('click', () => open(0));
  peekButton.addEventListener('click', () => setPeek(!overlay.classList.contains('is-peeking')));
  closeButton.addEventListener('click', close);
  nextButton.addEventListener('click', () => {
    if (state.stage < STAGES.length - 1) {
      if (!course.advance()) return;
      goStage(course.stepIndex);
    } else if (allExercisesDone()) {
      course.advance();
      close();
    }
  });
  tabs.forEach((tab) => tab.addEventListener('click', () => goStage(Number(tab.dataset.stage))));

  return {
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
