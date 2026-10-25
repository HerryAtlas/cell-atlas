import { MODEL_SPECS, modelById } from '../src/model-catalog.js';
import { createModelScene } from '../src/models-scene.js';
import { TEXTBOOK } from '../src/textbook.js';
import { createTransportLessonUI } from './transport-lesson-ui.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
const initialModel = MODEL_SPECS.some((item) => item.id === params.get('model')) ? params.get('model') : MODEL_SPECS[0].id;
const queryBookParam = params.get('book');
const queryBook = queryBookParam === null || queryBookParam === '' ? NaN : Number(queryBookParam);
const querySection = params.get('section') || '';
const sceneByBook = [0, 0, 1, 1, 5, 5, 3, 2, 4, 5, 1, 6, 6, 4, 0, 1];
let selectedBook = Number.isInteger(queryBook) && queryBook >= 0 && queryBook < TEXTBOOK.length ? queryBook : null;
let activeSection = querySection;
let activeId = initialModel;
let engine = null;
let lesson = null;

$('cmModelList').innerHTML = MODEL_SPECS.map((spec, index) => `
  ${index === 8 ? '<div class="cm-rail-sep">METHODS / 实验方法</div>' : ''}
  <button type="button" class="cm-model-btn${spec.id === initialModel ? ' is-active' : ''}" data-model="${spec.id}">
    <span>${String(index + 1).padStart(2, '0')}</span>
    <b>${spec.title}</b>
    <em>${spec.en}</em>
  </button>
`).join('');
const modelButtons = Array.from(document.querySelectorAll('[data-model]'));
$('cmBatch').textContent = `BATCH 01–02 · ${String(MODEL_SPECS.length).padStart(2, '0')} MODELS`;
$('cmRailFoot').innerHTML = `结构模型 + 实验方法<br />${MODEL_SPECS.length} 个重点模型`;

function renderInfo(spec) {
  const index = MODEL_SPECS.findIndex((item) => item.id === spec.id);
  const book = selectedBook ?? spec.book;
  const chapter = TEXTBOOK[book] || TEXTBOOK[spec.book];
  $('cmIndex').textContent = `${String(index + 1).padStart(2, '0')} / ${String(MODEL_SPECS.length).padStart(2, '0')}`;
  $('cmChapter').textContent = `${chapter.no} · ${chapter.title}${activeSection ? ` · ${activeSection}` : ''}`;
  $('cmTitle').textContent = spec.title;
  $('cmEn').textContent = spec.en;
  $('cmSummary').textContent = spec.summary;
  $('cmPoints').innerHTML = spec.points.map((point) => `<li>${point}</li>`).join('');
  $('cmBookLink').href = `./textbook.html?book=${book}`;
  const scene = sceneByBook[book];
  $('cmSceneLink').href = scene === undefined ? './index.html' : `./index.html?chapter=${scene}`;
  modelButtons.forEach((button, i) => {
    button.classList.toggle('is-active', i === index);
    button.setAttribute('aria-current', i === index ? 'true' : 'false');
  });
  if (lesson) lesson.setAvailable(spec.id === 'transport');
  document.title = `${spec.title} / Cell Atlas 3D Specimens`;
  const url = new URL(location.href);
  url.searchParams.set('model', spec.id);
  url.searchParams.set('book', String(book));
  history.replaceState(null, '', url);
}

function selectModel(id, fromClick = false) {
  const spec = modelById(id);
  if (lesson?.isOpen()) lesson.close();
  activeId = spec.id;
  if (fromClick) {
    selectedBook = spec.book;
    activeSection = '';
  }
  if (engine) engine.setModel(spec.id);
  renderInfo(spec);
}

modelButtons.forEach((button) => {
  button.addEventListener('click', () => selectModel(button.dataset.model, true));
});

try {
  engine = createModelScene($('modelStage'), {
    onReady: () => $('cmLoading').classList.add('is-hidden'),
    onError: (error) => {
      $('cmError').hidden = false;
      $('cmErrorText').textContent = String(error && error.message ? error.message : error).slice(0, 500);
      $('cmLoading').classList.add('is-hidden');
    },
    onModelChange: renderInfo,
    onPick: (pick) => lesson?.handlePick(pick),
  });
  lesson = createTransportLessonUI({
    getEngine: () => engine,
    onOpen: () => $('cmAuto').setAttribute('aria-pressed', 'false'),
    onClose: () => $('cmAuto').setAttribute('aria-pressed', 'true'),
  });
  if (initialModel !== MODEL_SPECS[0].id) engine.setModel(initialModel);
  else renderInfo(MODEL_SPECS[0]);
  engine.setExposure(Number($('cmExposure').value) / 100);
  if (initialModel === 'transport' && params.get('learn') === '1') lesson.open(0);
} catch (error) {
  $('cmError').hidden = false;
  $('cmErrorText').textContent = String(error && error.message ? error.message : error).slice(0, 500);
  $('cmLoading').classList.add('is-hidden');
}

$('cmReset').addEventListener('click', () => engine && engine.resetView());
$('cmExposure').addEventListener('input', (event) => {
  const value = Number(event.target.value);
  $('cmExposureValue').textContent = String(value);
  if (engine) engine.setExposure(value / 100);
});
$('cmAuto').addEventListener('click', () => {
  if (!engine) return;
  const next = $('cmAuto').getAttribute('aria-pressed') !== 'true';
  $('cmAuto').setAttribute('aria-pressed', String(next));
  engine.setAutoRotate(next);
});
$('cmFull').addEventListener('click', () => {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
  else document.exitFullscreen?.().catch(() => {});
});
$('cmReload').addEventListener('click', () => location.reload());

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lesson?.isOpen()) {
    lesson.close();
    return;
  }
  if (lesson?.isOpen()) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    const index = MODEL_SPECS.findIndex((spec) => spec.id === activeId);
    const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + MODEL_SPECS.length) % MODEL_SPECS.length;
    selectModel(MODEL_SPECS[next].id, true);
    modelButtons[next].scrollIntoView({ block: 'nearest', inline: 'nearest' });
  } else if (event.key.toLowerCase() === 'r') {
    engine?.resetView();
  } else if (event.key.toLowerCase() === 'f') {
    $('cmFull').click();
  }
});

console.log(`Cell Atlas specimens: ${MODEL_SPECS.length} models`);
