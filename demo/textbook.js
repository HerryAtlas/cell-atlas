import { TEXTBOOK, TEXTBOOK_SECTION_COUNT } from '../src/textbook.js';
import { modelsForSection } from '../src/model-catalog.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);

function chapterIndex(value) {
  const n = Number(value);
  return Number.isInteger(n) && n >= 0 && n < TEXTBOOK.length ? n : 0;
}

const start = chapterIndex(params.get('book'));
let selected = start;

$('tbChapters').innerHTML = TEXTBOOK.map((chapter, index) => `
  <button type="button" class="tb-navitem${index === selected ? ' is-active' : ''}" data-chapter="${index}">
    <span class="tb-nav-no">${chapter.no}</span>
    <span class="tb-nav-title">${chapter.title}</span>
    <span class="tb-nav-count">${chapter.sections.length} 节</span>
    ${chapter.scene === null || chapter.scene === undefined ? '' : `<span class="tb-nav-scene">画面 ${String(chapter.scene + 1).padStart(2, '0')}</span>`}
  </button>
`).join('');

const navButtons = Array.from(document.querySelectorAll('[data-chapter]'));

function render(index, updateUrl = true, scroll = true) {
  selected = chapterIndex(index);
  const chapter = TEXTBOOK[selected];
  navButtons.forEach((button, i) => {
    button.classList.toggle('is-active', i === selected);
    button.setAttribute('aria-current', i === selected ? 'true' : 'false');
  });
  $('tbChapterKicker').textContent = `${chapter.no} / 16  ·  ${chapter.sections.length} 节  ·  pp.${chapter.pages}`;
  $('tbChapterTitle').textContent = chapter.title;
  $('tbChapterOverview').textContent = chapter.overview;
  $('tbPageChip').textContent = `教材 pp.${chapter.pages}`;
  const link = $('tbSceneLink');
  if (chapter.scene === null || chapter.scene === undefined) {
    link.hidden = true;
  } else {
    link.hidden = false;
    link.href = `./index.html?chapter=${chapter.scene}`;
  }
  const chapterModels = [];
  chapter.sections.forEach((section) => {
    modelsForSection(chapter.id, section.no).forEach((model) => {
      if (!chapterModels.some((entry) => entry.model.id === model.id)) {
        chapterModels.push({ model, section });
      }
    });
  });
  const strip = $('tbModelStrip');
  if (chapterModels.length) {
    strip.hidden = false;
    strip.innerHTML = `<span>3D 模型</span>${chapterModels.map(({ model, section }) => `<a href="./models.html?model=${model.id}&book=${selected}&section=${encodeURIComponent(section.no)}${['transport', 'frap'].includes(model.id) ? '&learn=1' : ''}">${model.title}<em>↗</em></a>`).join('')}`;
  } else {
    strip.hidden = true;
    strip.innerHTML = '';
  }
  $('tbSections').innerHTML = chapter.sections.map((section, sectionIndex) => {
    const sectionModels = modelsForSection(chapter.id, section.no);
    return `
    <article class="tb-section">
      <details ${sectionIndex === 0 ? 'open' : ''}>
        <summary>
          <span class="tb-sec-no">${section.no}</span>
          <span class="tb-sec-title">${section.title}</span>
          <span class="tb-sec-pages">pp.${section.pages}</span>
          <span class="tb-sec-toggle" aria-hidden="true"></span>
        </summary>
        <div class="tb-sec-body">
          ${sectionModels.length ? `<div class="tb-model-names">${sectionModels.map((model) => `<a class="tb-model-name" href="./models.html?model=${model.id}&book=${selected}&section=${encodeURIComponent(section.no)}${['transport', 'frap'].includes(model.id) ? '&learn=1' : ''}"><span>3D</span><b>${model.title}</b><em>点击观察 →</em></a>`).join('')}</div>` : ''}
          <div class="tb-outline">${section.outline.map((item) => `<span>${item}</span>`).join('')}</div>
          <p class="tb-summary">${section.summary}</p>
          <div class="tb-points">
            ${section.points.map((item, i) => `<div><span>${String(i + 1).padStart(2, '0')}</span><p>${item}</p></div>`).join('')}
          </div>
          <div class="tb-terms">
            ${section.terms.map((term) => `<div><dt>${term.t}</dt><dd>${term.d}</dd></div>`).join('')}
          </div>
          <details class="tb-check">
            <summary><span>自测</span>${section.check.q}</summary>
            <p>${section.check.a}</p>
          </details>
        </div>
      </details>
    </article>
  `;
  }).join('');
  const pager = document.createElement('nav');
  pager.className = 'tb-pager';
  pager.setAttribute('aria-label', '章节翻页');
  pager.innerHTML = `
    ${selected > 0 ? `<button type="button" data-go="${selected - 1}"><span>← 上一章</span>${TEXTBOOK[selected - 1].title}</button>` : '<span></span>'}
    ${selected < TEXTBOOK.length - 1 ? `<button type="button" class="is-next" data-go="${selected + 1}"><span>下一章 →</span>${TEXTBOOK[selected + 1].title}</button>` : '<span></span>'}
  `;
  $('tbSections').appendChild(pager);
  pager.querySelectorAll('[data-go]').forEach((button) => {
    button.addEventListener('click', () => render(Number(button.dataset.go)));
  });
  document.title = `${chapter.title} / 教材分节 · Cell Atlas`;
  if (updateUrl) {
    const url = new URL(location.href);
    url.searchParams.set('book', String(selected));
    history.replaceState(null, '', url);
  }
  if (scroll) {
    if (window.innerWidth <= 880) {
      const top = window.scrollY + $('tbChapterHead').getBoundingClientRect().top - 68;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

navButtons.forEach((button) => {
  button.addEventListener('click', () => render(Number(button.dataset.chapter)));
});

$('tbSearch').addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();
  navButtons.forEach((button) => {
    const chapter = TEXTBOOK[Number(button.dataset.chapter)];
    const haystack = [
      chapter.no,
      chapter.title,
      ...chapter.sections.map((section) => `${section.title} ${section.outline.join(' ')}`),
    ].join(' ').toLowerCase();
    button.hidden = Boolean(query) && !haystack.includes(query);
  });
});

render(selected, false, false);
console.log(`Cell Atlas study reader: ${TEXTBOOK.length} chapters / ${TEXTBOOK_SECTION_COUNT} sections`);

let printClosed = [];
window.addEventListener('beforeprint', () => {
  printClosed = Array.from(document.querySelectorAll('details:not([open])'));
  printClosed.forEach((details) => { details.open = true; });
});
window.addEventListener('afterprint', () => {
  printClosed.forEach((details) => { details.open = false; });
  printClosed = [];
});
