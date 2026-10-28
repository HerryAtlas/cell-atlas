import { runTransportExperiment as runExperiment } from '../transport-experiment.js';
import { getPumpActivity } from '../transport-motion.js';

export function createTransportExplore({ lesson, state, course, engine, body, $, esc, updateFooter, motionPreference, getExperimentRecords }) {
  function sync() {
    const instance = engine();
    if (!instance) return;
    instance.setExperiment({
      atp: state.exp.atp / 100,
      gradient: state.exp.gradient / 100,
      inhibitor: state.exp.inhibitor,
    });
    // Only a completed run can drive the cycle. Parameter edits clear the rate.
    instance.setLessonState({ active: true, step: 0, experimentRate: state.expResult?.rate ?? null });
  }

  function invalidateExperiment() {
    state.expResult = null;
    course.revoke('experiment.run');
    sync();
    body.querySelector('.cm-lsn-result')?.setAttribute('hidden', '');
    body.querySelector('.cm-lsn-feedback')?.remove();
    const status = body.querySelector('#lsnPumpStatus');
    if (status) status.textContent = pumpStatus();
    updateFooter();
  }

  function experimentObservation(rate) {
    if (state.exp.inhibitor) return lesson.experiment.inhibited;
    if (rate === 0) return state.exp.atp === 0 ? lesson.experiment.zeroAtp : lesson.experiment.lowAtp;
    if (rate < 35) return '低速率：泵仍能工作，但不能充分维持 Na⁺/K⁺ 梯度；膜电位恢复变慢。';
    return lesson.experiment.normal;
  }

  function pumpStatus() {
    const activity = getPumpActivity(state.expResult?.rate);
    if (activity.id === 'pending') return '模型状态：待运行。先运行模拟，修改条件后需重新运行。';
    return '模型状态：' + activity.label + '。'
      + (motionPreference?.matches
        ? '已按系统减少动态效果偏好显示静态示意；速率仍以数值为准。'
        : '循环节奏按速率区间示意（0% 停止，1–34% 低速，35–100% 较快），不代表真实分子速度。');
  }

  function experimentRecordsHTML() {
    const records = getExperimentRecords(course);
    const baseline = runExperiment(lesson.experiment.initialConditions, 'decrease').rate;
    const predictionLabel = { decrease: '下降/停止', unchanged: '不变', increase: '上升' };
    return '<section class="cm-lsn-records"><h3>实验对照记录</h3>'
      + '<p class="cm-lsn-small">初始条件参考：ATP 60%、梯度 60%、无抑制剂 → ' + baseline
      + '%。差值单位为百分点，所有数值均为模型结果。展示最近 20 次运行（含历史轮次）。复用条件后需重新运行；左右滑动表格可查看完整记录。</p>'
      + (records.length ? '<div class="cm-lsn-table-scroll" role="region" aria-label="实验对照记录" tabindex="0"><table>'
        + '<thead><tr><th scope="col">记录 / 轮次</th><th scope="col">速率</th><th scope="col">较初始</th><th scope="col">ATP</th><th scope="col">梯度</th><th scope="col">抑制剂</th><th scope="col">预测</th><th scope="col">类型 / 操作</th></tr></thead><tbody>'
        + records.slice().reverse().map((r) => '<tr data-record="' + r.sequence + '"><th scope="row">#' + r.number + ' / 第 ' + r.attempt + ' 轮</th><td>' + r.rate + '%</td><td>'
          + (r.rate > baseline ? '+' : '') + (r.rate - baseline) + '</td><td>' + r.atp + '%</td><td>'
          + r.gradient + '%</td><td>' + (r.inhibitor ? '有' : '无') + '</td><td>' + esc(predictionLabel[r.prediction])
          + '</td><td>' + (r.conditionsMet ? '目标实验' : '自由探索') + '<button type="button" class="cm-lsn-btn" data-reuse="' + r.sequence + '" aria-label="复用第 ' + r.number + ' 条记录的条件">复用条件</button></td></tr>').join('')
        + '</tbody></table></div>' : '<p class="cm-lsn-small">运行一次模拟后，结果会自动加入这里。</p>') + '</section>';
  }

  function render() {
    const prediction = state.prediction;
    const result = state.expResult;
    body.innerHTML = `
      <p class="cm-lsn-lead">先做一个预测，再改变条件并运行模拟。观察相对速率，再解释为什么。</p>
      <div class="cm-lsn-kicker">STEP 03 · PREDICT → RUN → OBSERVE → EXPLAIN</div>
      <h3 class="cm-lsn-title">${esc(lesson.experiment.title)}</h3>
      <p class="cm-lsn-muted">${esc(lesson.experiment.prompt)}</p>
      <div class="cm-lsn-choice">
        ${lesson.experiment.predictionOptions.map((option) => `
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
      <button type="button" class="cm-lsn-btn" data-act="restore-conditions">恢复初始条件</button>
      ${result ? `
        <div class="cm-lsn-result">
          <div class="cm-lsn-kicker">OBSERVATION / 观察</div>
          <strong>${result.rate}% 相对速率</strong>
          <p>${esc(result.observation)}</p>
        </div>
        <div class="cm-lsn-feedback ${result.conditionsMet ? (result.predictionCorrect ? 'ok' : 'bad') : ''}">
          ${result.conditionsMet
            ? `${result.predictionCorrect ? '预测正确。' : '预测与模拟结果不一致，正好用来修正模型。'} ${esc(lesson.experiment.explanation)}`
            : '这是自由探索结果，尚未验证题目中的预测。请将 ATP 调到 0%、梯度保持 60%、取消抑制剂，再运行一次。'}
        </div>
      ` : '<p class="cm-lsn-small">预测是必填的。模拟结果只用于比较趋势，不是实验测量值。</p>'}
      <p class="cm-lsn-small" id="lsnPumpStatus" role="status">${esc(pumpStatus())}</p>
      ${experimentRecordsHTML()}
      <div class="cm-lsn-assumptions">
        <b>SIMULATION ASSUMPTIONS / 模拟假设</b>
        <ul>${lesson.experiment.assumptions.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>
      </div>
    `;
    const restoreConditions = (conditions) => {
      state.exp = { atp: conditions.atp, gradient: conditions.gradient, inhibitor: conditions.inhibitor };
      invalidateExperiment();
      render();
      body.querySelector('[data-act="run-experiment"]')?.focus();
    };
    body.querySelector('[data-act="restore-conditions"]').addEventListener('click', () => {
      restoreConditions(lesson.experiment.initialConditions);
    });
    body.querySelectorAll('[data-reuse]').forEach((button) => {
      button.addEventListener('click', () => {
        const record = getExperimentRecords(course).find((r) => r.sequence === Number(button.dataset.reuse));
        if (record) restoreConditions(record);
      });
    });
    body.querySelectorAll('[data-prediction]').forEach((button) => {
      button.addEventListener('click', () => {
        state.prediction = button.dataset.prediction;
        invalidateExperiment();
        course.revoke('experiment.prediction');
        course.dispatch('experiment.prediction', {
          id: state.prediction,
          taskId: lesson.experiment.taskId,
          conditions: { ...lesson.experiment.targetConditions },
        });
        render();
        updateFooter();
      });
    });
    body.querySelectorAll('[data-exp]').forEach((input) => {
      input.addEventListener('input', () => {
        state.exp[input.dataset.exp] = Number(input.value);
        const out = $(`lsn${input.dataset.exp === 'atp' ? 'Atp' : 'Gradient'}Out`);
        if (out) out.textContent = `${input.value}%`;
        invalidateExperiment();
      });
    });
    $('lsnInhibitor')?.addEventListener('change', (event) => {
      state.exp.inhibitor = event.target.checked;
      invalidateExperiment();
    });
    body.querySelector('[data-act="run-experiment"]')?.addEventListener('click', () => {
      if (!state.prediction) return;
      const result = runExperiment(state.exp, state.prediction);
      state.expResult = {
        ...result,
        observation: experimentObservation(result.rate),
      };
      course.revoke('experiment.run');
      course.dispatch('experiment.run', {
        taskId: lesson.experiment.taskId,
        rate: result.rate,
        atp: state.exp.atp,
        gradient: state.exp.gradient,
        inhibitor: state.exp.inhibitor,
        prediction: state.prediction,
      });
      sync();
      engine()?.selectPick('pump');
      render();
      updateFooter();
    });
  }

  return { sync, render, observation: (result) => experimentObservation(result.rate) };
}
