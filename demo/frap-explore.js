import { runFrapExperiment, FRAP_OBSERVATION_END } from '../src/frap-experiment.js';

export function createFrapExplore({ lesson, state, course, engine, body, esc, updateFooter, motionPreference, getExperimentRecords }) {
  const spec = lesson.experiment;
  const initial = runFrapExperiment(spec.initialConditions, spec.correctPrediction);
  const half = (result) => result.halfTime === null ? '无定义（无恢复）' : result.halfTime + ' 相对时间单位';
  function observation(result) {
    if (result.halfTime === null) return spec.zeroMobile;
    return state.exp.exchangeRate < 100 ? spec.slowExchange : spec.normal;
  }
  function sync() {
    engine()?.setExperiment({ ...state.exp });
    engine()?.setLessonState({ active: true, mode: 'experiment', step: 0,
      experimentResult: state.expResult ? { ...state.expResult, runId: course.sequence } : null });
  }
  function status() {
    if (!state.expResult) return '模型状态：待运行。修改条件或预测后需重新运行。';
    return motionPreference?.matches
      ? '模型状态：已按系统减少动态效果偏好显示观察末端的静态示意。'
      : '模型状态：本次运行演示一次局部漂白与恢复，随后停在观察末端；动画节奏经过压缩，以曲线标注为准。';
  }
  function invalidate() {
    state.expResult = null;
    course.revoke('experiment.run');
    sync();
    body.querySelector('.cm-lsn-result')?.setAttribute('hidden', '');
    body.querySelector('.cm-lsn-feedback')?.remove();
    const label = body.querySelector('#lsnFrapStatus');
    if (label) label.textContent = status();
    updateFooter();
  }
  function graph(result) {
    const x = (time) => 42 + time / FRAP_OBSERVATION_END * 270;
    const y = (intensity) => 166 - intensity * 1.3;
    const points = (samples) => samples.map(({ time, intensity }) => x(time).toFixed(2) + ',' + y(intensity).toFixed(2)).join(' ');
    return `<figure class="cm-frap-graph">
      <svg viewBox="0 0 336 210" role="img" aria-label="恢复曲线：当前实验与初始条件对照，横轴为相对时间，纵轴为归一化荧光强度">
        <text x="8" y="16">归一化荧光强度</text>
        ${[0, 20, 60, 100].map((v) => `<line class="grid" x1="42" y1="${y(v)}" x2="312" y2="${y(v)}"/><text x="34" y="${y(v) + 4}" text-anchor="end">${v}</text>`).join('')}
        <path class="axis" d="M42 30V166H312"/>
        <polyline class="reference" points="${points(initial.samples)}"/>
        <polyline class="current" points="${points(result.samples)}"/>
        ${[0, 10, 20, 30].map((t) => `<text x="${x(t)}" y="182" text-anchor="middle">${t}</text>`).join('')}
        <text x="180" y="203" text-anchor="middle">漂白后时间（相对单位）</text>
      </svg>
      <figcaption><span class="current-key">— 当前实验</span> <span class="reference-key">┄ 初始条件 80% / 100%</span><br/>两条曲线均从漂白后强度 20 开始；漂白前为 100。</figcaption>
    </figure>`;
  }
  function recordsHTML() {
    const records = getExperimentRecords(course);
    const labels = { decrease: '降低', unchanged: '不变', increase: '升高' };
    return '<section class="cm-lsn-records"><h3>实验对照记录</h3>'
      + '<p class="cm-lsn-small">初始条件参考：可移动比例 80%、交换速度 100% → 平台 84，恢复半时 3.47。平台差值为归一化强度差；展示最近 20 次运行（含历史轮次）。左右滑动可查看完整记录。</p>'
      + (records.length ? '<div class="cm-lsn-table-scroll" role="region" aria-label="实验对照记录" tabindex="0"><table><thead><tr><th scope="col">记录 / 轮次</th><th scope="col">平台</th><th scope="col">较初始</th><th scope="col">恢复半时</th><th scope="col">可移动比例</th><th scope="col">交换速度</th><th scope="col">预测</th><th scope="col">类型 / 操作</th></tr></thead><tbody>'
        + records.slice().reverse().map((r) => '<tr data-record="' + r.sequence + '"><th scope="row">#' + r.number + ' / 第 ' + r.attempt + ' 轮</th><td>' + r.plateau + '</td><td>' + (r.plateau > initial.plateau ? '+' : '') + (r.plateau - initial.plateau) + '</td><td>' + half(r) + '</td><td>' + r.mobileFraction + '%</td><td>' + r.exchangeRate + '%</td><td>' + esc(labels[r.prediction]) + '</td><td>' + (r.conditionsMet ? '目标实验' : '自由探索') + '<button type="button" class="cm-lsn-btn" data-reuse="' + r.sequence + '" aria-label="复用第 ' + r.number + ' 条记录的条件">复用条件</button></td></tr>').join('')
        + '</tbody></table></div>' : '<p class="cm-lsn-small">运行一次模拟后，结果会自动加入这里。</p>') + '</section>';
  }
  function restoreConditions(conditions) {
    state.exp = { mobileFraction: conditions.mobileFraction, exchangeRate: conditions.exchangeRate };
    invalidate();
    render();
    body.querySelector('[data-act="run-experiment"]')?.focus();
  }
  function render() {
    const result = state.expResult;
    body.innerHTML = `
      <p class="cm-lsn-lead">先预测，再改变一个条件并运行。将恢复平台与恢复快慢分别比较。</p>
      <div class="cm-lsn-kicker">STEP 03 · PREDICT → RUN → COMPARE → EXPLAIN</div>
      <h3 class="cm-lsn-title">${esc(spec.title)}</h3>
      <p class="cm-lsn-muted">${esc(spec.prompt)}</p>
      <div class="cm-lsn-choice">${spec.predictionOptions.map((p) => `<button type="button" class="${state.prediction === p.id ? 'is-selected' : ''}" data-prediction="${p.id}">${esc(p.label)}</button>`).join('')}</div>
      <div class="cm-lsn-slider">
        <label for="lsnMobileFraction">可移动比例 <span class="cm-lsn-muted">0–100%</span></label>
        <output id="lsnMobileFractionOut">${state.exp.mobileFraction}%</output>
        <input id="lsnMobileFraction" data-exp="mobileFraction" type="range" min="0" max="100" step="10" value="${state.exp.mobileFraction}"/>
      </div>
      <div class="cm-lsn-slider">
        <label for="lsnExchangeRate">相对交换速度 <span class="cm-lsn-muted">25–200%</span></label>
        <output id="lsnExchangeRateOut">${state.exp.exchangeRate}%</output>
        <input id="lsnExchangeRate" data-exp="exchangeRate" type="range" min="25" max="200" step="25" value="${state.exp.exchangeRate}"/>
      </div>
      <button type="button" class="cm-lsn-btn primary" data-act="run-experiment" ${state.prediction ? '' : 'disabled'}>运行模拟 →</button>
      <button type="button" class="cm-lsn-btn" data-act="restore-conditions">恢复初始条件</button>
      ${result ? `<div class="cm-lsn-result">
        <div class="cm-lsn-kicker">OBSERVATION / 观察</div>
        <strong>长期恢复平台 ${result.plateau}</strong>
        <p>恢复半时：${half(result)}。指完成自身恢复幅度一半所需时间。</p>
        <p>观察末端（t = 30）强度：${result.samples.at(-1).intensity.toFixed(2)}。末端读数不等于长期平台。</p>
        ${graph(result)}<p>${esc(observation(result))}</p>
      </div><div class="cm-lsn-feedback ${result.conditionsMet ? result.predictionCorrect ? 'ok' : 'bad' : ''}">
        ${result.conditionsMet ? (result.predictionCorrect ? '预测正确。' : '预测与结果不一致，可以据此修正理解。') + esc(spec.explanation) : '这是自由探索结果，尚未验证题目中的预测。请将可移动比例调到 40%、交换速度保持 100%，再运行一次。'}
      </div>` : '<p class="cm-lsn-small">先选预测，再运行。改变条件后需重新运行，旧记录仍保留。</p>'}
      <p class="cm-lsn-small" id="lsnFrapStatus" role="status">${esc(status())}</p>
      ${recordsHTML()}
      <div class="cm-lsn-assumptions"><b>SIMULATION ASSUMPTIONS / 模拟假设</b><ul>${spec.assumptions.map((s) => '<li>' + esc(s) + '</li>').join('')}</ul></div>`;
    body.querySelector('[data-act="restore-conditions"]').addEventListener('click', () => restoreConditions(spec.initialConditions));
    body.querySelectorAll('[data-reuse]').forEach((button) => button.addEventListener('click', () => {
      const record = getExperimentRecords(course).find((r) => r.sequence === Number(button.dataset.reuse));
      if (record) restoreConditions(record);
    }));
    body.querySelectorAll('[data-prediction]').forEach((button) => button.addEventListener('click', () => {
      state.prediction = button.dataset.prediction;
      invalidate();
      course.revoke('experiment.prediction');
      course.dispatch('experiment.prediction', { id: state.prediction, taskId: spec.taskId, conditions: { ...spec.targetConditions } });
      render();
      updateFooter();
    }));
    body.querySelectorAll('[data-exp]').forEach((input) => input.addEventListener('input', () => {
      state.exp[input.dataset.exp] = Number(input.value);
      body.querySelector('#' + input.getAttribute('id') + 'Out').textContent = input.value + '%';
      invalidate();
    }));
    body.querySelector('[data-act="run-experiment"]').addEventListener('click', () => {
      if (!state.prediction) return;
      state.expResult = runFrapExperiment(state.exp, state.prediction);
      course.revoke('experiment.run');
      course.dispatch('experiment.run', { taskId: spec.taskId, ...state.exp, prediction: state.prediction,
        plateau: state.expResult.plateau, halfTime: state.expResult.halfTime });
      sync();
      engine()?.selectPick('bleach-region');
      render();
      updateFooter();
    });
  }
  return { sync, render, observation };
}
