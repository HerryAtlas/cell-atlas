import { createCellAtlasScene } from '../src/scene.js';
import { CHAPTERS } from '../src/chapters.js';

const TOTAL = CHAPTERS.length;
const iconPaths = {
  close: '<path d="M6 6 18 18M18 6 6 18"/>',
  prev: '<path d="m14.5 6-6 6 6 6"/><path d="M6.5 6v12" opacity=".4"/>',
  next: '<path d="m9.5 6 6 6-6 6"/><path d="M17.5 6v12" opacity=".4"/>',
  play: '<path d="M8.5 5.8 18 12l-9.5 6.2Z" fill="currentColor" stroke="none"/>',
  pause: '<path d="M8.5 6v12M15.5 6v12"/>',
  book: '<path d="M4 5.2c2.7-.9 5.3-.9 8 1.1v13c-2.7-2-5.3-2-8-1.1Z"/><path d="M20 5.2c-2.7-.9-5.3-.9-8 1.1v13c2.7-2 5.3-2 8-1.1Z"/><path d="M12 6.3v13" opacity=".5"/>',
  sun: '<circle cx="12" cy="12" r="3.6"/><path d="M12 3.2v2.1M12 18.7v2.1M3.2 12h2.1M18.7 12h2.1M5.8 5.8l1.5 1.5M16.7 16.7l1.5 1.5M18.2 5.8l-1.5 1.5M7.3 16.7l-1.5 1.5"/>',
  reset: '<circle cx="12" cy="12" r="3.2"/><path d="M12 3v3.4M12 17.6V21M3 12h3.4M17.6 12H21"/><path d="M6.2 6.2a8.2 8.2 0 0 1 11.6 0" opacity=".45"/>',
  expand: '<path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/>',
  collapse: '<path d="M4 9h5V4M20 9h-5V4M4 15h5v5M20 15h-5v5"/>',
  arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
  plus: '<path d="M12 6v12M6 12h12"/>',
  minus: '<path d="M6 12h12"/>',
};
function icon(name, size = 18) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || ''}</svg>`;
}
const mark = `
<svg class="brand-mark-svg" viewBox="0 0 64 64" fill="none" aria-hidden="true">
  <circle cx="32" cy="32" r="25" stroke="currentColor" stroke-opacity=".28" stroke-dasharray="1.5 4"/>
  <circle cx="32" cy="32" r="19" stroke="currentColor" stroke-opacity=".6" stroke-width="1.1"/>
  <ellipse cx="32" cy="32" rx="25" ry="10" transform="rotate(-28 32 32)" stroke="#7ff7e4" stroke-opacity=".7" stroke-width="1.1"/>
  <path d="M17 41c6-3 10-9 15-10 6-1 9 5 16 3" stroke="currentColor" stroke-opacity=".4" stroke-width="1.1" stroke-linecap="round"/>
  <circle cx="32" cy="32" r="7.4" fill="#7ff7e4" fill-opacity=".16" stroke="#7ff7e4"/>
  <circle cx="32" cy="32" r="2.5" fill="#7ff7e4"/>
  <circle cx="45" cy="26" r="1.6" fill="#ff9fc9"/><circle cx="21" cy="37" r="1.2" fill="#ffd08a"/>
</svg>`;

const app = document.getElementById('app');
app.innerHTML = `
  <div id="stage" class="stage"></div>
  <div class="loading" id="loading"><span class="loading-dot"></span> CALIBRATING OPTICAL FIELD <span class="loading-line"><i></i></span></div>
  <div class="grain"></div><div class="scanlines"></div><div class="vignette"></div>
  <div class="frame" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
  <div class="reticle" aria-hidden="true"></div>
  <div class="hud">
    <header class="hud-head">
      <div class="brand">${mark}<div><div class="wordmark">CELL <b>ATLAS</b></div><div class="brand-cn">细胞图谱 · 一次关于边界的漫游</div></div></div>
      <div class="top-readout"><span class="live-dot"></span><span>LIVE SPECIMEN</span><span class="slash">/</span><span id="readout">WHOLE CELL</span></div>
      <div class="hud-right">
        <a class="book-link" href="./textbook.html" aria-label="打开全书分节" title="全书分节 · 16章44节">${icon('book', 15)}</a>
        <button class="study-btn" id="studyBtn" aria-expanded="false" title="学习手册 · T">${icon('book', 15)}<span>学习手册</span></button>
        <div class="counter"><b id="chapterNo">01</b><span>/ ${String(TOTAL).padStart(2, '0')}</span></div>
        <button class="icon-btn" id="fullBtn" aria-label="全屏" title="全屏">${icon('expand')}</button>
      </div>
    </header>
    <main class="main">
      <div class="stage-readout" id="stageReadout">WHOLE CELL / OPTICAL DARKFIELD</div>
      <article class="caption" id="caption">
        <div class="kicker"><span class="kicker-line"></span><span id="kicker">PROLOGUE / 序章</span></div>
        <h1 id="title">细胞，是一个宇宙</h1>
        <div class="en" id="en">THE CELL AS A MICROCOSM</div>
        <button class="textbook" id="textbookChip">
          <span class="textbook-icon">${icon('book', 18)}</span>
          <span class="textbook-copy"><b>学习手册</b><em id="textbookLabel">教材对照 · 第一章 绪论 · pp.1–17</em><i>学习目标 / 机制拆解 / 自测</i></span>
          <span class="key">T</span>${icon('arrow', 14)}
        </button>
        <p class="body" id="body"></p>
        <div class="facts" id="facts"></div>
      </article>
      <nav class="rail" id="rail" aria-label="章节"></nav>
      <div class="spine" aria-hidden="true"><span>HOMO SAPIENS</span><span>CELLULAR SPECIMEN / 001</span></div>
    </main>
    <footer class="hud-foot">
      <div class="auto"><span class="auto-dot" id="autoDot"></span><span id="autoLabel">自动漫游</span><span class="hint"><kbd>T</kbd> 学习手册</span></div>
      <div class="timeline" id="timeline"></div>
      <div class="controls">
        <label class="lum" title="亮度">
          ${icon('sun', 13)}
          <input id="lum" type="range" min="30" max="100" step="1" value="44" aria-label="亮度" />
          <span id="lumValue">44</span>
        </label>
        <button class="ctrl" id="resetBtn" aria-label="重置视角" title="重置视角（R）">${icon('reset')}</button>
        <button class="ctrl" id="prevBtn" aria-label="上一章" title="上一章">${icon('prev')}</button>
        <button class="ctrl ctrl-primary" id="playBtn" aria-label="暂停" title="暂停">${icon('pause')}</button>
        <button class="ctrl" id="nextBtn" aria-label="下一章" title="下一章">${icon('next')}</button>
      </div>
    </footer>
  </div>
  <section class="intro" id="intro" aria-label="Cell Atlas 使用说明">
    <div class="intro-grid"></div>
    <div class="intro-inner">
      <div class="intro-step" id="introStepOne">
        <div class="intro-welcome">欢迎来到细胞的世界</div>
        <div class="intro-eyebrow">AN INTERACTIVE CELL ATLAS · MMXXVI</div>
        <div class="intro-title"><span>CELL</span><i>/</i><em>ATLAS</em></div>
        <div class="intro-cn">细胞图谱</div>
        <div class="intro-sub">一场从质膜到基因组的七幕视觉漫游</div>
        <div class="intro-quick">
          <div><kbd>T</kbd><b>学习手册</b><em>目标 · 概念 · 机制 · 自测</em></div>
          <div><kbd>B</kbd><b>全书分节</b><em>16 章 · 44 节 · 3D 模型</em></div>
          <div><kbd>↔</kbd><b>自由观察</b><em>拖动旋转 · 滚轮缩放</em></div>
        </div>
        <div class="intro-actions">
          <button class="enter" id="guideNext"><span>先看使用说明</span>${icon('arrow', 15)}</button>
          <span class="intro-count">01 / 04</span>
        </div>
      </div>

      <div class="intro-step intro-guide" id="introStepTwo" hidden>
        <div class="intro-eyebrow">HOW TO USE / 使用说明</div>
        <h2 class="guide-title">按 <kbd>T</kbd>，打开学习手册</h2>
        <div class="guide-grid">
          <div class="guide-mock" aria-hidden="true">
            <div class="guide-mock-head">
              <span>STUDY NOTES</span><b>学习手册</b><kbd>T</kbd>
            </div>
            <div class="guide-mock-body">
              <div class="guide-mini-label">学习目标</div>
              <p>说出流动镶嵌模型，并解释支持它的实验证据。</p>
              <div class="guide-mini-label">核心概念</div>
              <p>磷脂双分子层 / 整合膜蛋白 / 膜的不对称性</p>
              <div class="guide-mini-label">机制拆解</div>
              <p>膜脂流动性 → 蛋白运动 → 选择透过与信号接收</p>
              <div class="guide-mini-label">易错点</div>
              <p>流动性不是“所有蛋白都能自由漂移”，膜骨架和连接会限制运动。</p>
              <div class="guide-mini-label">自测</div>
              <p>为什么胆固醇对膜流动性有双向调节？</p>
            </div>
          </div>
          <div class="guide-copy">
            <div class="guide-block">
              <div class="guide-block-no">01</div>
              <div><b>T 打开的抽屉里有什么</b><p>学习目标、核心概念、机制拆解、易错点、画面图例、相关章节，以及可展开的自测答案；每页都带教材页码。</p></div>
            </div>
            <div class="guide-block">
              <div class="guide-block-no">02</div>
              <div><b>从哪里打开</b><p>按 T；点右上角的「学习手册」；或点章节标题下方的「学习手册 · 教材对照」大按钮。关闭后回到原位。</p></div>
            </div>
            <div class="guide-block">
              <div class="guide-block-no">03</div>
              <div><b>模型页新增「跨膜运输」导学</b><p>打开 3D 模型页，选择「跨膜运输」→「进入导学」：点击结构认识角色 → 播放 Na⁺/K⁺ 泵的 E1–E2 循环 → 改 ATP/梯度做预测实验 → 完成辨认、排序和分析练习。第一次进入请点导学右上角「使用说明」；手机端点「看模型」可收起面板后直接点结构。打开手册、全书或 3D 模型时，自动漫游仍会暂停。</p></div>
            </div>
          </div>
        </div>
        <div class="intro-actions">
          <button class="intro-secondary" id="guideBack">← 返回</button>
          <button class="enter" id="guideNextTwo"><span>下一步：新版使用说明</span>${icon('arrow', 15)}</button>
          <span class="intro-count">02 / 04</span>
        </div>
      </div>

      <div class="intro-step intro-guide intro-lesson" id="introStepThree" hidden>
        <div class="intro-eyebrow">COMPLETE GUIDE / 新版完整导引</div>
        <h2 class="guide-title">四个阶段，走完才算结课</h2>
        <div class="lesson-guide-grid">
          <div class="lesson-stage-list">
            <div class="lesson-stage"><span>01</span><div><b>认识结构</b><p>点模型里的膜、通道、泵、ATP；四个都点过，下一步才解锁。</p></div></div>
            <div class="lesson-stage"><span>02</span><div><b>观察机制</b><p>播放或逐步看 E1–E2 的 5 个步骤；都看过才能继续。</p></div></div>
            <div class="lesson-stage"><span>03</span><div><b>动手探索</b><p>先预测，再运行。只有目标实验计入完成，其它条件是自由探索。</p></div></div>
            <div class="lesson-stage"><span>04</span><div><b>场景练习</b><p>辨认、排序、结果分析三道都正确，才能结课。</p></div></div>
          </div>
          <div class="lesson-rules">
            <div class="lesson-target">
              <b>目标实验</b>
              <div><code>ATP 0%</code><code>梯度 60%</code><code>无抑制剂</code></div>
              <p>只运行这个条件才会解锁下一步；其它组合显示“自由探索结果”，不计完成。</p>
            </div>
            <div class="lesson-rule"><b>可以自由回看</b><p>四个阶段可随时切换，但最终结课要求每个阶段都有当前有效证据。</p></div>
            <div class="lesson-rule"><b>改条件 = 重跑</b><p>改 ATP、梯度或抑制剂后，旧实验结果失效，必须重新运行。</p></div>
            <div class="lesson-rule"><b>完成后复习</b><p>全部阶段完成后进入复习，可重新回看；「重新学习」会开始新一轮。</p></div>
            <div class="lesson-rule"><b>重新学习与手机</b><p>重学会二次确认，历史只在本次打开期间保留；手机点「看模型」收起面板后直接点结构。</p></div>
            <div class="lesson-rule"><b>完成判定</b><p>本版没有 AI 自动批改；是否完成由课程引擎按上述证据判断。</p></div>
          </div>
        </div>
        <a class="guide-detail-link" href="./guide.html">打开独立完整说明页 →</a>
        <div class="intro-actions">
          <button class="intro-secondary" id="guideBackTwo">← 返回</button>
          <button class="enter" id="guideNextThree"><span>下一步：全书与操作</span>${icon('arrow', 15)}</button>
          <span class="intro-count">03 / 04</span>
        </div>
      </div>

      <div class="intro-step intro-guide intro-controls" id="introStepFour" hidden>
        <div class="intro-eyebrow">NAVIGATION & CONTROLS / 全书与操作</div>
        <h2 class="guide-title">按 <kbd>B</kbd>，进入 16 章 44 节</h2>
        <div class="controls-grid">
          <div class="guide-mock book-mock" aria-hidden="true">
            <div class="guide-mock-head"><span>BOOK INDEX</span><b>全书分节</b><kbd>B</kbd></div>
            <div class="book-mock-body">
              <div class="book-row"><span>01</span>绪论<em>2 节</em></div>
              <div class="book-row"><span>02</span>细胞生物学研究方法<em>4 节</em></div>
              <div class="book-row is-active"><span>03</span>细胞质膜<em>2 节</em></div>
              <div class="book-row"><span>04</span>物质的跨膜运输<em>3 节</em></div>
              <div class="book-row"><span>05</span>细胞质基质与内膜系统<em>2 节</em></div>
              <div class="book-row"><span>06</span>蛋白质分选与膜泡运输<em>2 节</em></div>
              <div class="book-section-mini"><span>第一节</span>细胞质膜的结构模型与基本成分<em>3D 模型</em></div>
            </div>
          </div>
          <div class="guide-copy">
            <div class="guide-block">
              <div class="guide-block-no">01</div>
              <div><b>左侧章节，右侧小节</b><p>按 B 或点右上角书本图标打开全书。左侧 16 章可以切换，右侧列出每一节；搜索框可筛章节和小节。</p></div>
            </div>
            <div class="guide-block">
              <div class="guide-block-no">02</div>
              <div><b>每节都有完整学习卡</b><p>教材页码、小节提纲、内容定位、机制要点、关键术语、可展开自测；页面支持直接打印。</p></div>
            </div>
            <div class="guide-block">
              <div class="guide-block-no">03</div>
              <div><b>模型名字就是入口</b><p>章节顶部和每个小节会显示 3D 模型名称（结构 + 实验方法）。点击名称直接观察，关闭后回到该小节；跨膜运输模型会直接带「导学」入口。</p></div>
            </div>
            <div class="guide-block">
              <div class="guide-block-no">04</div>
              <div><b>观察动作与亮度</b><p>拖动旋转、滚轮缩放、双击重置；模型页右下角有 20–70 的亮度滑杆，主场景也可用 − / = 调亮度。</p></div>
            </div>
          </div>
        </div>
        <div class="intro-keymap">
          <div><kbd>←</kbd><kbd>→</kbd><b>切换章节</b></div>
          <div><kbd>Space</kbd><b>暂停 / 继续</b></div>
          <div><kbd>T</kbd><b>学习手册</b></div>
          <div><kbd>B</kbd><b>全书分节</b></div>
          <div><kbd>F</kbd><b>全屏</b></div>
          <div><kbd>R</kbd><b>重置视角</b></div>
          <div><kbd>−</kbd><kbd>=</kbd><b>降低 / 提高亮度</b></div>
          <div><kbd>双击</kbd><b>重置视角</b></div>
        </div>
        <div class="intro-actions">
          <button class="intro-secondary" id="guideBackThree">← 返回</button>
          <button class="enter" id="enterBtn"><span>进入细胞</span>${icon('arrow', 15)}</button>
          <span class="intro-count">04 / 04</span>
        </div>
      </div>
    </div>
    <div class="intro-skip">按 T 学习手册 · B 全书分节 · 拖动旋转 · 模型页可进导学</div>
  </section>
  <div class="study-backdrop" id="studyBackdrop" hidden>
    <section class="study-panel" id="studyPanel" role="dialog" aria-modal="true" aria-labelledby="studyTitle" tabindex="-1">
      <header class="study-head">
        <div><div class="study-eyebrow">STUDY NOTES / 学习手册</div><h2 id="studyTitle"></h2><div class="study-meta" id="studyMeta"></div></div>
        <button class="icon-btn" id="studyClose" aria-label="关闭学习手册">${icon('close')}</button>
      </header>
      <div class="study-scroll" id="studyScroll"></div>
    </section>
  </div>
  <div class="error" id="error" hidden><div class="error-card"><div class="error-no">ERR / WEBGL</div><h2>光学场未能启动</h2><p id="errorText">当前浏览器无法创建 WebGL 上下文。请使用开启硬件加速的现代浏览器。</p><button class="enter" id="errorReload">重新加载</button></div></div>
`;

const $ = (id) => document.getElementById(id);
const stage = $('stage');
const caption = $('caption');
const rail = $('rail');
const timeline = $('timeline');
let engine = null;
let chapter = 0;
let playing = true;
let introOpen = true;
let studyOpen = false;
let progress = 0;
let remaining = CHAPTERS[0].duration;
let last = performance.now();
let lumValue = 44;
const chapterParam = new URLSearchParams(location.search).get('chapter');
const hasChapterParam = chapterParam !== null && chapterParam !== '';
const urlChapter = Number(chapterParam);
const fromChapterLink = hasChapterParam && Number.isInteger(urlChapter) && urlChapter >= 0 && urlChapter < TOTAL;

const railButtons = CHAPTERS.map((item, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'rail-btn';
  button.dataset.index = String(index);
  button.innerHTML = `<span class="rail-title">${item.short}</span><span class="rail-line"></span><span class="rail-no">${item.no}</span>`;
  button.setAttribute('aria-label', `${item.no} ${item.short}`);
  button.addEventListener('click', () => goTo(index));
  rail.appendChild(button);
  return button;
});
const timelineButtons = CHAPTERS.map((item, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'seg';
  button.innerHTML = `<span class="seg-track"><i></i></span><span class="seg-label">${item.no}</span>`;
  button.setAttribute('aria-label', `${item.no} ${item.short}`);
  button.addEventListener('click', () => goTo(index));
  timeline.appendChild(button);
  return button;
});

function sceneReady() {
  $('loading').classList.add('is-hidden');
}
function showError(error) {
  $('error').hidden = false;
  $('errorText').textContent = String(error && error.message ? error.message : error).slice(0, 500);
  $('loading').classList.add('is-hidden');
}
try {
  engine = createCellAtlasScene(stage, { onReady: sceneReady, onError: showError });
  const stored = Number(localStorage.getItem('cell-atlas.demo.brightness'));
  lumValue = Number.isFinite(stored) && stored >= 30 && stored <= 100 ? stored : 44;
  $('lum').value = String(lumValue);
  $('lumValue').textContent = String(lumValue);
  engine.setBrightness(lumValue / 100);
} catch (error) {
  showError(error);
}
if (fromChapterLink) {
  chapter = urlChapter;
  remaining = CHAPTERS[chapter].duration;
  if (engine) engine.setChapter(chapter);
}

function chapterData(index) {
  return CHAPTERS[index];
}
function updateUI() {
  const data = chapterData(chapter);
  const study = data.study;
  document.documentElement.style.setProperty('--accent', data.accent);
  $('chapterNo').textContent = data.no;
  $('kicker').textContent = `${data.kicker} / ${data.cnKicker}`;
  $('title').textContent = data.title;
  $('en').textContent = data.en;
  $('body').textContent = data.body;
  $('readout').textContent = data.readout;
  $('stageReadout').textContent = data.readout;
  $('textbookLabel').textContent = `教材对照 · ${study.textbook.chapter} ${study.textbook.title} · pp.${study.textbook.pages}`;
  $('facts').innerHTML = data.facts
    .map((fact) => `<div class="fact"><span class="fact-k">${fact.k}</span><span class="fact-v">${fact.v}</span></div>`)
    .join('');
  railButtons.forEach((button, index) => {
    button.classList.toggle('is-active', index === chapter);
    if (index === chapter) button.setAttribute('aria-current', 'step');
    else button.removeAttribute('aria-current');
  });
  timelineButtons.forEach((button, index) => {
    button.classList.toggle('is-active', index === chapter);
    const fill = button.querySelector('.seg-track i');
    fill.style.transform = index < chapter ? 'scaleX(1)' : index === chapter ? `scaleX(${progress})` : 'scaleX(0)';
  });
  $('prevBtn').disabled = chapter === 0;
  $('nextBtn').disabled = chapter === TOTAL - 1;
  if (studyOpen) buildStudy();
  // Force the small entry animation without a framework.
  caption.style.animation = 'none';
  void caption.offsetWidth;
  caption.style.animation = '';
}
function updateProgressUI() {
  const fill = timelineButtons[chapter] && timelineButtons[chapter].querySelector('.seg-track i');
  if (fill) fill.style.transform = `scaleX(${progress})`;
}
function setPlaying(value) {
  playing = value;
  $('autoLabel').textContent = playing ? '自动漫游' : '已暂停';
  $('autoDot').classList.toggle('is-live', playing);
  $('playBtn').innerHTML = playing ? icon('pause') : icon('play');
  $('playBtn').setAttribute('aria-label', playing ? '暂停' : '播放');
  $('playBtn').title = playing ? '暂停' : '播放';
}
function goTo(index) {
  chapter = Math.max(0, Math.min(TOTAL - 1, index));
  progress = 0;
  remaining = chapterData(chapter).duration;
  if (engine) engine.setChapter(chapter);
  updateUI();
}
function openStudy() {
  if (!CHAPTERS[chapter].study) return;
  studyOpen = true;
  setPlaying(false);
  buildStudy();
  $('studyBackdrop').hidden = false;
  $('studyBtn').setAttribute('aria-expanded', 'true');
  requestAnimationFrame(() => $('studyPanel').focus());
}
function closeStudy() {
  studyOpen = false;
  $('studyBackdrop').hidden = true;
  $('studyBtn').setAttribute('aria-expanded', 'false');
}
function buildStudy() {
  const data = chapterData(chapter);
  const s = data.study;
  $('studyTitle').textContent = `${s.textbook.chapter} · ${s.textbook.title}`;
  $('studyMeta').textContent = `丁明孝 等《细胞生物学》第 5 版 · 高等教育出版社 · pp.${s.textbook.pages}`;
  $('studyScroll').innerHTML = `
    <a class="study-book-cta" href="./textbook.html">
      <span class="study-book-cta-icon">${icon('book', 18)}</span>
      <span class="study-book-cta-copy"><b>全书分节学习</b><em>16 章 · 44 节 · 按节精读 + 自测</em></span>
      <span class="study-book-cta-key">B</span>${icon('arrow', 14)}
    </a>
    <section class="study-section">
      <div class="study-label"><span>01</span><b>学习目标</b><em>OBJECTIVES</em></div>
      <ul class="objectives">${s.objectives.map((x) => `<li>${x}</li>`).join('')}</ul>
    </section>
    <section class="study-section">
      <div class="study-label"><span>02</span><b>核心概念</b><em>KEY CONCEPTS</em></div>
      <dl class="concepts">${s.concepts.map((c) => `<div><dt><span>${c.term}</span><em>${c.en}</em></dt><dd>${c.def}</dd></div>`).join('')}</dl>
    </section>
    <section class="study-section">
      <div class="study-label"><span>03</span><b>机制拆解</b><em>MECHANISM</em></div>
      <ol class="mechanism">${s.mechanism.map((x) => `<li>${x}</li>`).join('')}</ol>
    </section>
    <section class="study-section">
      <div class="study-label"><span>04</span><b>易错点</b><em>COMMON TRAPS</em></div>
      <ul class="traps">${s.pitfalls.map((x) => `<li>${x}</li>`).join('')}</ul>
    </section>
    <section class="study-section">
      <div class="study-label"><span>05</span><b>自测</b><em>SELF-CHECK</em></div>
      <div class="quiz-list">${s.quiz.map((q, i) => `<div class="quiz" data-quiz="${i}"><button type="button" class="quiz-q" data-quiz-toggle="${i}" aria-expanded="false"><span>Q${String(i + 1).padStart(2, '0')}</span><b>${q.q}</b>${icon('plus', 15)}</button><div class="quiz-a" hidden><span>答案</span><p>${q.a}</p></div></div>`).join('')}</div>
    </section>
    <section class="study-section">
      <div class="study-label"><span>06</span><b>画面图例</b><em>VISUAL LEGEND</em></div>
      <div class="visuals">${s.visuals.map((v) => `<span class="visual"><i style="background:${v.color};color:${v.color}"></i>${v.label}</span>`).join('')}</div>
    </section>
    <section class="study-section">
      <div class="study-label"><span>07</span><b>相关章节</b><em>READ FURTHER</em></div>
      <ul class="related">${s.related.map((x) => `<li>${x}</li>`).join('')}</ul>
      <div class="sections"><span>教材小节</span>${s.textbook.sections.map((x) => `<em>${x}</em>`).join('')}</div>
    </section>
    <footer class="study-footer"><span>5</span><p>依据丁明孝等《细胞生物学》第5版（高等教育出版社，2020，ISBN 978-7-04-047157-1）相关章节整理。本页为学习摘要，请以原书为准。</p></footer>
  `;
  $('studyScroll').querySelectorAll('[data-quiz-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const quiz = button.closest('.quiz');
      const answer = quiz.querySelector('.quiz-a');
      const open = answer.hidden;
      answer.hidden = !open;
      button.setAttribute('aria-expanded', String(open));
      const svg = button.querySelector('svg');
      if (svg) svg.outerHTML = open ? icon('minus', 15) : icon('plus', 15);
    });
  });
}

$('studyBtn').addEventListener('click', openStudy);
$('textbookChip').addEventListener('click', openStudy);
$('studyClose').addEventListener('click', closeStudy);
$('studyBackdrop').addEventListener('mousedown', (event) => {
  if (event.target === event.currentTarget) closeStudy();
});
$('prevBtn').addEventListener('click', () => goTo(chapter - 1));
$('nextBtn').addEventListener('click', () => goTo(chapter + 1));
$('playBtn').addEventListener('click', () => setPlaying(!playing));
$('resetBtn').addEventListener('click', () => engine && engine.resetView());
$('lum').addEventListener('input', (event) => {
  lumValue = Number(event.target.value);
  $('lumValue').textContent = String(lumValue);
  if (engine) engine.setBrightness(lumValue / 100);
  try { localStorage.setItem('cell-atlas.demo.brightness', String(lumValue)); } catch (error) { /* ignore */ }
});
$('errorReload').addEventListener('click', () => window.location.reload());
$('guideNext').addEventListener('click', () => showIntroStep(1));
$('guideNextTwo').addEventListener('click', () => showIntroStep(2));
$('guideNextThree').addEventListener('click', () => showIntroStep(3));
$('guideBack').addEventListener('click', () => showIntroStep(0));
$('guideBackTwo').addEventListener('click', () => showIntroStep(1));
$('guideBackThree').addEventListener('click', () => showIntroStep(2));
$('enterBtn').addEventListener('click', (event) => { event.stopPropagation(); dismissIntro(); });
$('fullBtn').addEventListener('click', () => {
  if (!document.fullscreenElement) app.requestFullscreen?.().catch(() => {});
  else document.exitFullscreen?.().catch(() => {});
});
document.addEventListener('fullscreenchange', () => {
  $('fullBtn').innerHTML = document.fullscreenElement ? icon('collapse') : icon('expand');
});
function showIntroStep(step) {
  const one = $('introStepOne');
  const two = $('introStepTwo');
  const three = $('introStepThree');
  const four = $('introStepFour');
  if (!one || !two || !three || !four) return;
  one.hidden = step !== 0;
  two.hidden = step !== 1;
  three.hidden = step !== 2;
  four.hidden = step !== 3;
}
function dismissIntro() {
  if (!introOpen) return;
  introOpen = false;
  $('intro').classList.add('is-out');
  setTimeout(() => { $('intro').hidden = true; }, 650);
  if (engine) engine.pulse();
  setPlaying(true);
}
setTimeout(() => { if (fromChapterLink && introOpen) dismissIntro(); }, 350);

document.addEventListener('keydown', (event) => {
  const tag = event.target && event.target.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || (event.target && event.target.isContentEditable)) return;
  if (event.key === 'Escape') {
    if (studyOpen) closeStudy();
    return;
  }
  if (event.key.toLowerCase() === 't') {
    event.preventDefault();
    studyOpen ? closeStudy() : openStudy();
    return;
  }
  if (studyOpen) return;
  if (tag === 'BUTTON' || tag === 'A') return;
  if (event.key === 'ArrowRight') goTo(chapter + 1);
  else if (event.key === 'ArrowLeft') goTo(chapter - 1);
  else if (event.key === ' ') { event.preventDefault(); setPlaying(!playing); }
  else if (event.key.toLowerCase() === 'f') { event.preventDefault(); $('fullBtn').click(); }
  else if (event.key.toLowerCase() === 'r') { if (engine) engine.resetView(); }
});

function tick(now) {
  const delta = Math.min(80, now - last);
  last = now;
  if (playing && !studyOpen && !introOpen && $('error').hidden) {
    remaining -= delta;
    const duration = chapterData(chapter).duration;
    progress = Math.max(0, Math.min(1, 1 - remaining / duration));
    updateProgressUI();
    if (remaining <= 0) {
      if (chapter < TOTAL - 1) goTo(chapter + 1);
      else { remaining = 0; progress = 1; updateProgressUI(); setPlaying(false); }
    }
  }
  requestAnimationFrame(tick);
}

updateUI();
setPlaying(true);
requestAnimationFrame(tick);
