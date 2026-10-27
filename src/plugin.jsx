import { createCellAtlasScene } from './scene.js';
import { CHAPTERS } from './chapters.js';
import { TEXTBOOK, TEXTBOOK_SECTION_COUNT, bookChapterForScene } from './textbook.js';
import { modelsForSection, MODEL_SPECS } from './model-catalog.js';
import { createModelScene } from './models-scene.js';

let React = null;
let store = null;
let localeService = null;
const DEFAULT_BRIGHTNESS = 0.58;

const EN_LOCALE = {
  launcherTitle: 'Cell Atlas',
  launcherAria: 'Open Cell Atlas',
  close: 'Close Cell Atlas',
  play: 'Play',
  pause: 'Pause',
  replay: 'Replay',
  prev: 'Previous chapter',
  next: 'Next chapter',
  fullscreen: 'Enter fullscreen',
  exitFullscreen: 'Exit fullscreen',
  brightness: 'Brightness',
  brightnessHint: 'Brightness (− / =)',
  resetView: 'Reset view',
  resetViewHint: 'Reset view (R)',
  study: 'Study notes',
  studyTitle: 'Study notes',
  closeStudy: 'Close study notes',
  textbookAlignment: 'Textbook',
  bookTitle: 'Full textbook',
  bookSubtitle: 'Section-by-section study',
  openBook: 'Open section library',
  closeBook: 'Close section library',
  jumpScene: 'View related movement',
  bookCta: 'Section-by-section study',
  bookCtaSub: '16 chapters · 44 sections',
  selfCheck: 'Self-check',
  chapterOf: 'Chapter',
  objectives: 'Learning objectives',
  concepts: 'Key concepts',
  mechanism: 'Mechanism',
  pitfalls: 'Common traps',
  quiz: 'Self-check',
  visuals: 'Visual legend',
  related: 'Related chapters',
  showAnswer: 'Show answer',
  hideAnswer: 'Hide answer',
  answer: 'Answer',
  textbookSections: 'Textbook sections',
  studyCitation: 'Study summary aligned with Ding Mingxiao et al., Cell Biology, 5th ed., Higher Education Press, 2020 (ISBN 978-7-04-047157-1). Defer to the textbook.',
  auto: 'AUTO',
  hold: 'HOLD',
  hint: 'Drag to look · Scroll to zoom · T opens study notes',
  enter: 'Enter the cell',
  loading: 'Calibrating optical field',
  chapter: 'Chapter',
  errorTitle: 'The optical field could not start',
  errorBody: 'This browser could not create a WebGL context. Try a current browser with hardware acceleration enabled, then reopen the atlas.',
  dialog: 'Cell Atlas — a cinematic journey through the living cell',
};

const ZH_LOCALE = {
  launcherTitle: '细胞图谱',
  launcherAria: '打开细胞图谱',
  close: '关闭细胞图谱',
  play: '播放',
  pause: '暂停',
  replay: '重新播放',
  prev: '上一章',
  next: '下一章',
  fullscreen: '进入全屏',
  exitFullscreen: '退出全屏',
  brightness: '亮度',
  brightnessHint: '亮度（− / =）',
  resetView: '重置视角',
  resetViewHint: '重置视角（R）',
  study: '学习手册',
  studyTitle: '学习手册',
  closeStudy: '关闭学习手册',
  textbookAlignment: '教材对照',
  bookTitle: '教材分节',
  bookSubtitle: '按节学习',
  openBook: '打开全书分节',
  closeBook: '关闭全书分节',
  jumpScene: '看对应画面',
  bookCta: '全书分节学习',
  bookCtaSub: '16 章 · 44 节',
  selfCheck: '自测',
  chapterOf: '章节',
  objectives: '学习目标',
  concepts: '核心概念',
  mechanism: '机制拆解',
  pitfalls: '易错点',
  quiz: '自测',
  visuals: '画面图例',
  related: '相关章节',
  showAnswer: '展开答案',
  hideAnswer: '收起答案',
  answer: '答案',
  textbookSections: '教材小节',
  studyCitation: '依据丁明孝等《细胞生物学》第5版（高等教育出版社，2020，ISBN 978-7-04-047157-1）相关章节整理；本页为学习摘要，请以原书为准。',
  auto: '自动漫游',
  hold: '已暂停',
  hint: '拖动环视 · 滚轮缩放 · 按 T 打开学习手册',
  enter: '进入细胞',
  loading: '正在校准光学场',
  chapter: '章节',
  errorTitle: '光学场未能启动',
  errorBody: '当前浏览器无法创建 WebGL 上下文。请尝试开启硬件加速的现代浏览器，然后重新打开细胞图谱。',
  dialog: '细胞图谱 —— 一场穿过活细胞的视觉漫游',
};

function createStore() {
  let open = false;
  const listeners = new Set();
  return {
    get: () => open,
    set(value) {
      const next = Boolean(value);
      if (next === open) return;
      open = next;
      for (const listener of listeners) listener();
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

function translateRaw(key, fallback) {
  if (!localeService) return fallback;
  try {
    const value = localeService.bind('cell-atlas')(key);
    return value === key ? fallback : value;
  } catch (error) {
    return fallback;
  }
}

function useAtlasOpen() {
  const [open, setOpen] = React.useState(store.get());
  React.useEffect(() => store.subscribe(() => setOpen(store.get())), []);
  return open;
}

function useT() {
  const [, force] = React.useReducer((value) => value + 1, 0);
  React.useEffect(() => {
    if (!localeService || typeof localeService.subscribe !== 'function') return undefined;
    return localeService.subscribe(() => force());
  }, []);
  return React.useCallback((key, fallback) => translateRaw(key, fallback), []);
}

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };
  switch (name) {
    case 'close':
      return (
        <svg {...common}>
          <path d="M6 6 18 18M18 6 6 18" />
        </svg>
      );
    case 'prev':
      return (
        <svg {...common}>
          <path d="m14.5 6-6 6 6 6" />
          <path d="M6.5 6v12" opacity="0.4" />
        </svg>
      );
    case 'next':
      return (
        <svg {...common}>
          <path d="m9.5 6 6 6-6 6" />
          <path d="M17.5 6v12" opacity="0.4" />
        </svg>
      );
    case 'pause':
      return (
        <svg {...common}>
          <path d="M8.5 6v12M15.5 6v12" />
        </svg>
      );
    case 'play':
      return (
        <svg {...common}>
          <path d="M8.5 5.8 18 12l-9.5 6.2Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'replay':
      return (
        <svg {...common}>
          <path d="M5 12a7 7 0 1 0 2.2-5.1" />
          <path d="M5 5.3V10h4.7" />
        </svg>
      );
    case 'expand':
      return (
        <svg {...common}>
          <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
        </svg>
      );
    case 'collapse':
      return (
        <svg {...common}>
          <path d="M4 9h5V4M20 9h-5V4M4 15h5v5M20 15h-5v5" />
        </svg>
      );
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M4 12h15M13 6l6 6-6 6" />
        </svg>
      );
    case 'sun':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.6" />
          <path d="M12 3.2v2.1M12 18.7v2.1M3.2 12h2.1M18.7 12h2.1M5.8 5.8l1.5 1.5M16.7 16.7l1.5 1.5M18.2 5.8l-1.5 1.5M7.3 16.7l-1.5 1.5" />
        </svg>
      );
    case 'reset':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 3v3.4M12 17.6V21M3 12h3.4M17.6 12H21" />
          <path d="M6.2 6.2a8.2 8.2 0 0 1 11.6 0" opacity="0.45" />
        </svg>
      );
    case 'book':
      return (
        <svg {...common}>
          <path d="M4 5.2c2.7-.9 5.3-.9 8 1.1v13c-2.7-2-5.3-2-8-1.1Z" />
          <path d="M20 5.2c-2.7-.9-5.3-.9-8 1.1v13c2.7-2 5.3-2 8-1.1Z" />
          <path d="M12 6.3v13" opacity="0.5" />
        </svg>
      );
    case 'help':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9.2a2.6 2.6 0 0 1 5.1.8c0 1.7-2.6 2-2.6 3.6" />
          <path d="M12 17.2v.1" />
        </svg>
      );
    case 'plus':
      return (
        <svg {...common}>
          <path d="M12 6v12M6 12h12" />
        </svg>
      );
    case 'minus':
      return (
        <svg {...common}>
          <path d="M6 12h12" />
        </svg>
      );
    default:
      return null;
  }
}

function CellMark({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="25" stroke="currentColor" strokeOpacity="0.28" strokeDasharray="1.5 4" />
      <circle cx="32" cy="32" r="19" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.1" />
      <ellipse
        cx="32"
        cy="32"
        rx="25"
        ry="10"
        transform="rotate(-28 32 32)"
        stroke="#7ff7e4"
        strokeOpacity="0.7"
        strokeWidth="1.1"
      />
      <path
        d="M17 41c6-3 10-9 15-10 6-1 9 5 16 3"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="7.4" fill="#7ff7e4" fillOpacity="0.16" stroke="#7ff7e4" strokeWidth="1" />
      <circle cx="32" cy="32" r="2.5" fill="#7ff7e4" />
      <circle cx="45" cy="26" r="1.6" fill="#ff9fc9" />
      <circle cx="21" cy="37" r="1.2" fill="#ffd08a" />
      <circle cx="39" cy="44" r="1" fill="#bda8ff" fillOpacity="0.9" />
    </svg>
  );
}

function Launcher(props) {
  const open = useAtlasOpen();
  const t = useT();
  return (
    <>
      <style>{LAUNCHER_CSS}</style>
      <button
        type="button"
        className={`ca-launcher ${open ? 'is-open' : ''}`}
        title={t('launcherTitle', '细胞图谱')}
        aria-label={t('launcherAria', '打开细胞图谱')}
        aria-pressed={open}
        onClick={() => store.set(true)}
        data-wide={props && props.wide ? 'true' : 'false'}
      >
        <span className="ca-launcher-halo" aria-hidden="true" />
        <CellMark className="ca-launcher-mark" />
        <span className="ca-launcher-dot" aria-hidden="true" />
      </button>
    </>
  );
}

function HeaderEntry() {
  const open = useAtlasOpen();
  const t = useT();
  return (
    <>
      <style>{HEADER_CSS}</style>
      <button
        type="button"
        className={`ca-header-entry ${open ? 'is-open' : ''}`}
        title={t('launcherTitle', '细胞图谱')}
        aria-label={t('launcherAria', '打开细胞图谱')}
        aria-haspopup="dialog"
        onClick={() => store.set(true)}
      >
        <span className="ca-header-entry-mark-wrap">
          <CellMark className="ca-header-entry-mark" />
          <span className="ca-header-entry-live" aria-hidden="true" />
        </span>
        <span className="ca-header-entry-text">
          <span className="ca-header-entry-cn">{t('launcherTitle', '细胞图谱')}</span>
          <span className="ca-header-entry-en">CELL ATLAS</span>
        </span>
        <Icon name="arrow" size={13} />
      </button>
    </>
  );
}

function formatFocus(chapter) {
  const focus = {
    origin: '12.4 µm',
    membrane: '0.4 µm',
    cytoskeleton: '3.2 µm',
    mitochondria: '1.6 µm',
    nucleus: '6.8 µm',
    endomembrane: '2.4 µm',
    mitosis: '9.1 µm',
  };
  return focus[chapter.id] || '—';
}

function QuizItem({ item, index, t }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`ca-quiz ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="ca-quiz-q"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="ca-quiz-no">Q{String(index + 1).padStart(2, '0')}</span>
        <span className="ca-quiz-text">{item.q}</span>
        <Icon name={open ? 'minus' : 'plus'} size={15} />
      </button>
      {open && (
        <div className="ca-quiz-a">
          <span className="ca-quiz-a-label">{t('answer', '答案')}</span>
          <p>{item.a}</p>
        </div>
      )}
    </div>
  );
}

function StudyPanel({ chapter, onClose, onOpenBook, onOpenModel, t }) {
  const study = chapter.study;
  return (
    <div
      className="ca-study-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="ca-study-panel"
        id="ca-study-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ca-study-title"
        tabIndex={-1}
        autoFocus
      >
        <header className="ca-study-head">
          <div className="ca-study-heading">
            <div className="ca-study-eyebrow">STUDY NOTES / {t('studyTitle', '学习手册')}</div>
            <h2 id="ca-study-title">
              {study.textbook.chapter} · {study.textbook.title}
            </h2>
            <div className="ca-study-meta">
              《细胞生物学》第 5 版 · 丁明孝 等 · 高等教育出版社 · pp.{study.textbook.pages}
            </div>
          </div>
          <button
            type="button"
            className="ca-iconbtn ca-study-close"
            onClick={onClose}
            aria-label={t('closeStudy', '关闭学习手册')}
            title={t('closeStudy', '关闭学习手册')}
          >
            <Icon name="close" />
          </button>
        </header>

        <div className="ca-study-scroll">
          <button type="button" className="ca-study-book-cta" onClick={onOpenBook}>
            <span className="ca-study-book-cta-icon"><Icon name="book" size={17} /></span>
            <span className="ca-study-book-cta-copy">
              <b>{t('bookCta', '全书分节学习')}</b>
              <em>
                {TEXTBOOK.length} 章 · {TEXTBOOK_SECTION_COUNT} 节 · 按节精读 + 自测
              </em>
            </span>
            <span className="ca-study-book-cta-key">B</span>
            <Icon name="arrow" size={14} />
          </button>

          <div className="ca-study-model-index">
            <div className="ca-study-model-head">
              <span>3D 模型</span>
              <em>点击名称直接观察</em>
            </div>
            <div className="ca-study-model-links">
              {[
                { label: '结构模型', batch: 1 },
                { label: '实验方法', batch: 2 },
              ].map((group) => (
                <div className="ca-study-model-group" key={group.label}>
                  <div className="ca-study-model-group-label">{group.label}</div>
                  <div className="ca-study-model-group-links">
                    {MODEL_SPECS.filter((spec) => (spec.batch || 1) === group.batch).map((spec) => {
                      const book = TEXTBOOK[spec.book];
                      return (
                        <button
                          type="button"
                          key={spec.id}
                          className="ca-study-model-link"
                          onClick={() => onOpenModel({
                            modelId: spec.id,
                            book: spec.book,
                            section: spec.sections[0],
                            chapterTitle: book.title,
                          })}
                          title={`${spec.en} · ${book.no} ${book.title}`}
                        >
                          <span>{spec.no}</span>
                          {spec.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <section className="ca-study-section">
            <div className="ca-study-label">
              <span>01</span>
              <b>{t('objectives', '学习目标')}</b>
              <em>OBJECTIVES</em>
            </div>
            <ul className="ca-study-objectives">
              {study.objectives.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="ca-study-section">
            <div className="ca-study-label">
              <span>02</span>
              <b>{t('concepts', '核心概念')}</b>
              <em>KEY CONCEPTS</em>
            </div>
            <dl className="ca-concepts">
              {study.concepts.map((concept) => (
                <div className="ca-concept" key={concept.term}>
                  <dt>
                    <span>{concept.term}</span>
                    <em>{concept.en}</em>
                  </dt>
                  <dd>{concept.def}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="ca-study-section">
            <div className="ca-study-label">
              <span>03</span>
              <b>{t('mechanism', '机制拆解')}</b>
              <em>MECHANISM</em>
            </div>
            <ol className="ca-study-mechanism">
              {study.mechanism.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="ca-study-section">
            <div className="ca-study-label">
              <span>04</span>
              <b>{t('pitfalls', '易错点')}</b>
              <em>COMMON TRAPS</em>
            </div>
            <ul className="ca-study-traps">
              {study.pitfalls.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="ca-study-section">
            <div className="ca-study-label">
              <span>05</span>
              <b>{t('quiz', '自测')}</b>
              <em>SELF-CHECK</em>
            </div>
            <div className="ca-quiz-list">
              {study.quiz.map((item, index) => (
                <QuizItem key={item.q} item={item} index={index} t={t} />
              ))}
            </div>
          </section>

          <section className="ca-study-section">
            <div className="ca-study-label">
              <span>06</span>
              <b>{t('visuals', '画面图例')}</b>
              <em>VISUAL LEGEND</em>
            </div>
            <div className="ca-visuals">
              {study.visuals.map((item) => (
                <div className="ca-visual" key={item.label}>
                  <span
                    className="ca-visual-dot"
                    style={{ background: item.color, color: item.color }}
                  />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="ca-study-section">
            <div className="ca-study-label">
              <span>07</span>
              <b>{t('related', '相关章节')}</b>
              <em>READ FURTHER</em>
            </div>
            <ul className="ca-related">
              {study.related.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="ca-study-sections">
              <span>{t('textbookSections', '教材小节')}</span>
              {study.textbook.sections.map((item) => (
                <em key={item}>{item}</em>
              ))}
            </div>
          </section>

          <footer className="ca-study-footer">
            <span className="ca-study-footer-mark">5</span>
            <p>{t('studyCitation', '依据丁明孝等《细胞生物学》第5版（高等教育出版社，2020）相关章节整理；本页为学习摘要，请以原书为准。')}</p>
          </footer>
        </div>
      </section>
    </div>
  );
}

function TextbookBrowser({ initialChapter, onClose, onJump, onOpenModel, t }) {
  const [selected, setSelected] = React.useState(
    Math.max(0, Math.min(TEXTBOOK.length - 1, initialChapter || 0))
  );
  const [openSection, setOpenSection] = React.useState(0);
  const chapter = TEXTBOOK[selected];

  React.useEffect(() => {
    setOpenSection(0);
  }, [selected]);

  return (
    <div
      className="ca-book-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="ca-book-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ca-book-title"
        tabIndex={-1}
        autoFocus
      >
        <header className="ca-book-head">
          <div className="ca-book-heading">
            <div className="ca-book-eyebrow">FULL TEXTBOOK / {t('bookTitle', '教材分节')}</div>
            <h2 id="ca-book-title">
              {t('bookSubtitle', '按节学习')}
              <span>{TEXTBOOK.length} 章 · {TEXTBOOK_SECTION_COUNT} 节</span>
            </h2>
            <div className="ca-book-meta">
              《细胞生物学》第 5 版 · 丁明孝 等 · 高等教育出版社 · 2020
            </div>
          </div>
          <button
            type="button"
            className="ca-iconbtn ca-book-close"
            onClick={onClose}
            aria-label={t('closeBook', '关闭全书分节')}
            title={t('closeBook', '关闭全书分节')}
          >
            <Icon name="close" />
          </button>
        </header>

        <div className="ca-book-body">
          <nav className="ca-book-nav" aria-label={t('chapterOf', '章节')}>
            {TEXTBOOK.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`ca-book-navitem ${index === selected ? 'is-active' : ''}`}
                onClick={() => setSelected(index)}
                aria-current={index === selected ? 'true' : undefined}
              >
                <span className="ca-book-nav-no">{item.no}</span>
                <span className="ca-book-nav-title">{item.title}</span>
                <em>{item.sections.length} 节</em>
                {item.scene !== null && item.scene !== undefined && (
                  <i>画面 {String(item.scene + 1).padStart(2, '0')}</i>
                )}
              </button>
            ))}
          </nav>

          <div className="ca-book-main">
            <div className="ca-book-chapterhead">
              <div>
                <div className="ca-book-kicker">
                  {chapter.no} <span>/</span> {chapter.sections.length} 节 <span>/</span> pp.{chapter.pages}
                </div>
                <h3>{chapter.title}</h3>
                <p>{chapter.overview}</p>
              </div>
              {chapter.scene !== null && chapter.scene !== undefined && (
                <button type="button" className="ca-book-jump" onClick={() => onJump(chapter.scene)}>
                  {t('jumpScene', '看对应画面')}
                  <Icon name="arrow" size={14} />
                </button>
              )}
            </div>

            <div className="ca-book-sections">
              {chapter.sections.map((section, index) => {
                const open = index === openSection;
                const sectionModels = modelsForSection(chapter.id, section.no);
                return (
                  <article className={`ca-book-section ${open ? 'is-open' : ''}`} key={`${chapter.id}-${section.no}`}>
                    <button
                      type="button"
                      className="ca-book-section-head"
                      onClick={() => setOpenSection(open ? -1 : index)}
                      aria-expanded={open}
                    >
                      <span className="ca-book-section-no">{section.no}</span>
                      <span className="ca-book-section-title">{section.title}</span>
                      <span className="ca-book-section-pages">pp.{section.pages}</span>
                      <Icon name={open ? 'minus' : 'plus'} size={15} />
                    </button>
                    {open && (
                      <div className="ca-book-section-body">
                        {sectionModels.length > 0 && (
                          <div className="ca-book-model-row">
                            {sectionModels.map((sectionModel) => (
                              <button
                                type="button"
                                className="ca-book-model-btn"
                                key={sectionModel.id}
                                onClick={() => onOpenModel({
                                  modelId: sectionModel.id,
                                  book: selected,
                                  section: section.no,
                                  chapterTitle: chapter.title,
                                })}
                              >
                                <span>3D</span>
                                {sectionModel.title}
                                <Icon name="arrow" size={13} />
                              </button>
                            ))}
                          </div>
                        )}
                        <div className="ca-book-outline">
                          {section.outline.map((item) => <span key={item}>{item}</span>)}
                        </div>
                        <p className="ca-book-summary">{section.summary}</p>
                        <ul className="ca-book-points">
                          {section.points.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                        <dl className="ca-book-terms">
                          {section.terms.map((item) => (
                            <div key={item.t}>
                              <dt>{item.t}</dt>
                              <dd>{item.d}</dd>
                            </div>
                          ))}
                        </dl>
                        <details className="ca-book-check">
                          <summary>
                            <span>{t('selfCheck', '自测')}</span>
                            {section.check.q}
                          </summary>
                          <p>{section.check.a}</p>
                        </details>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
            <footer className="ca-book-foot">
              依据《细胞生物学》第 5 版相关章节整理 · 共 {TEXTBOOK_SECTION_COUNT} 节 · 以原书为准
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionModelViewer({ context, onClose, t }) {
  const hostRef = React.useRef(null);
  const engineRef = React.useRef(null);
  const [spec, setSpec] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let alive = true;
    try {
      const engine = createModelScene(hostRef.current, {
        onModelChange: (next) => {
          if (alive) setSpec(next);
        },
        onError: (modelError) => {
          if (alive) setError(modelError && modelError.message ? modelError.message : String(modelError));
        },
      });
      engineRef.current = engine;
      engine.setModel(context.modelId);
    } catch (modelError) {
      setError(modelError && modelError.message ? modelError.message : String(modelError));
    }
    return () => {
      alive = false;
      if (engineRef.current) {
        engineRef.current.dispose();
        engineRef.current = null;
      }
    };
  }, [context.modelId]);

  return (
    <div className="ca-model-backdrop" role="presentation">
      <section className="ca-model-panel" role="dialog" aria-modal="true" aria-label={spec ? spec.title : '3D model'}>
        <div className="ca-model-stage" ref={hostRef} />
        <header className="ca-model-head">
          <div>
            <div className="ca-model-eyebrow">SECTION MODEL / 3D SPECIMEN</div>
            <h2>{spec ? spec.title : '正在构建模型'}</h2>
            <div className="ca-model-meta">{context.section} · {context.chapterTitle}</div>
          </div>
          <button type="button" className="ca-iconbtn" onClick={onClose} aria-label={t('closeBook', '关闭')}>
            <Icon name="close" />
          </button>
        </header>
        {spec && (
          <div className="ca-model-caption">
            <div className="ca-model-en">{spec.en}</div>
            <p>{spec.summary}</p>
            <ul>{spec.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </div>
        )}
        <div className="ca-model-hint">拖动旋转 · 滚轮缩放</div>
        <div className="ca-model-actions">
          <button type="button" onClick={() => engineRef.current?.resetView()}>重置视角</button>
          <button type="button" onClick={onClose}>返回全书</button>
        </div>
        {error && <div className="ca-model-error"><b>3D 模型未能启动</b><span>{error}</span></div>}
      </section>
    </div>
  );
}

function UsageManual({ onClose }) {
  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div className="ca-manual-backdrop" role="presentation">
      <section className="ca-manual-panel" role="dialog" aria-modal="true" aria-labelledby="caManualTitle">
        <header className="ca-manual-head">
          <div>
            <div className="ca-manual-eyebrow">CELL ATLAS / COMPLETE MANUAL</div>
            <h2 id="caManualTitle">使用手册</h2>
            <p>从学习手册、全书分节，到 14 个模型与跨膜运输导学。</p>
          </div>
          <button type="button" className="ca-iconbtn" onClick={onClose} aria-label="关闭使用手册" autoFocus>
            <Icon name="close" />
          </button>
        </header>
        <div className="ca-manual-scroll">
          <section className="ca-manual-section">
            <div className="ca-manual-no">01 / START</div>
            <h3>打开后先看什么</h3>
            <div className="ca-manual-grid">
              <div><b>学习手册</b><p>按 <kbd>T</kbd>，或点右上角「学习」。每节包含学习目标、核心概念、机制拆解、易错点、自测和教材页码。</p></div>
              <div><b>全书分节</b><p>按 <kbd>B</kbd>，或点右上角书本图标。左侧 16 章，右侧 44 节，搜索框可筛章节和小节。</p></div>
              <div><b>3D 模型</b><p>章节顶部和小节里的模型名就是入口。当前有 8 个结构模型和 6 个实验方法模型。</p></div>
              <div><b>使用手册</b><p>右上角 <kbd>?</kbd> 可随时重新打开本页；<kbd>Esc</kbd> 关闭。</p></div>
            </div>
          </section>

          <section className="ca-manual-section">
            <div className="ca-manual-no">02 / MODELS</div>
            <h3>看模型</h3>
            <div className="ca-manual-grid">
              <div><b>结构模型</b><p>原核/真核、质膜、跨膜运输、内膜系统、线粒体/叶绿体、细胞骨架、细胞核、核糖体。</p></div>
              <div><b>方法模型</b><p>光学显微、电子显微、差速离心、细胞培养、FRAP、FRET。</p></div>
              <div><b>操作</b><p>拖动旋转、滚轮缩放、双击重置；关闭模型后回到打开它的章节位置。</p></div>
              <div><b>标注</b><p>模型上的标签用于识别结构；导学里的「认识结构」会隐藏标签，先靠形状判断。</p></div>
            </div>
          </section>

          <section className="ca-manual-section">
            <div className="ca-manual-no">03 / GUIDED LESSON</div>
            <h3>跨膜运输导学</h3>
            <div className="ca-manual-grid ca-manual-stages">
              <div><b>01 认识结构</b><p>点模型里的膜、通道、泵、ATP；也可以点下方名称。</p><em>完成：四个结构都点过</em></div>
              <div><b>02 观察机制</b><p>可选正常 / 慢速，或逐步看 E1–E2 的 5 个步骤；暂停、回看、重播不会清空进度。</p><em>完成：五个步骤都看过</em></div>
              <div><b>03 动手探索</b><p>先预测再运行，泵按速率区间演示；只有目标实验计完成。减少动态效果开启时显示静态示意。</p><em>完成：目标实验运行成功</em></div>
              <div><b>04 场景练习</b><p>点击泵、排 5 步顺序、选对结果分析；答错可重试。</p><em>完成：三道题都正确</em></div>
            </div>
            <div className="ca-manual-target">
              <b>目标实验 · 必须精确匹配</b>
              <div><code>ATP 0%</code><code>梯度 60%</code><code>无抑制剂</code></div>
              <p>只有这个条件计入完成；其它组合是自由探索。改任何参数后，旧结果失效，必须重新运行。所有阶段都有当前有效证据，才能结课。</p>
            </div>
            <p className="ca-manual-note">完成后进入复习；「重新学习」需要二次确认，历史只在本次打开期间保留。手机端点「看模型」收起面板后直接点结构。</p>
          </section>

          <section className="ca-manual-section">
            <div className="ca-manual-no">04 / CONTROLS</div>
            <h3>操作速查</h3>
            <div className="ca-manual-keys">
              <span><kbd>拖动</kbd> 旋转</span>
              <span><kbd>滚轮</kbd> 缩放</span>
              <span><kbd>双击</kbd> 重置视角</span>
              <span><kbd>←</kbd><kbd>→</kbd> 切换章节</span>
              <span><kbd>Space</kbd> 暂停 / 继续</span>
              <span><kbd>F</kbd> 全屏</span>
              <span><kbd>R</kbd> 重置视角</span>
              <span><kbd>−</kbd><kbd>=</kbd> 亮度</span>
            </div>
          </section>

          <section className="ca-manual-section">
            <div className="ca-manual-no">05 / BOUNDARIES</div>
            <h3>当前边界</h3>
            <p className="ca-manual-note">本手册只描述插件当前功能。完成判定由课程引擎按证据执行，不依赖 AI；AI 助教、Jarvis 和记忆服务尚未接入主流程，也不会上传学习记录。学习进度目前只保留在本次打开期间。</p>
          </section>

          <div className="ca-manual-foot">
            <button type="button" className="ca-manual-close" onClick={onClose}>返回插件</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function AtlasExperience() {
  const t = useT();
  const rootRef = React.useRef(null);
  const hostRef = React.useRef(null);
  const engineRef = React.useRef(null);
  const closeRef = React.useRef(null);
  const actionsRef = React.useRef({});
  const timersRef = React.useRef([]);
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [chapter, setChapter] = React.useState(0);
  const [playing, setPlaying] = React.useState(!reducedMotion);
  const [progress, setProgress] = React.useState(0);
  const [brightness, setBrightness] = React.useState(() => {
    try {
      const stored = Number(window.localStorage.getItem('cell-atlas.brightness'));
      if (Number.isFinite(stored) && stored >= 0.3 && stored <= 1) return stored;
    } catch (storageError) {
      /* storage can be unavailable */
    }
    return DEFAULT_BRIGHTNESS;
  });
  const [ready, setReady] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [intro, setIntro] = React.useState('in');
  const [introPage, setIntroPage] = React.useState(0);
  const [manualOpen, setManualOpen] = React.useState(false);
  const [studyOpen, setStudyOpen] = React.useState(false);
  const [bookOpen, setBookOpen] = React.useState(false);
  const [bookChapter, setBookChapter] = React.useState(0);
  const [modelView, setModelView] = React.useState(null);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const current = CHAPTERS[chapter];
  const study = current.study;
  const ended = !playing && chapter === CHAPTERS.length - 1 && progress > 0.995;

  React.useEffect(() => {
    const previousFocus = document.activeElement;
    const bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    let alive = true;
    try {
      const engine = createCellAtlasScene(hostRef.current, {
        onReady: () => {
          if (alive) setReady(true);
        },
        onError: (renderError) => {
          if (alive) {
            setError(renderError && renderError.message ? renderError.message : String(renderError));
          }
        },
      });
      engineRef.current = engine;
    } catch (creationError) {
      setError(creationError && creationError.message ? creationError.message : String(creationError));
    }
    return () => {
      alive = false;
      document.body.style.overflow = bodyOverflow;
      if (engineRef.current) {
        engineRef.current.dispose();
        engineRef.current = null;
      }
      for (const timer of timersRef.current) window.clearTimeout(timer);
      timersRef.current = [];
      if (previousFocus && typeof previousFocus.focus === 'function') {
        try {
          previousFocus.focus({ preventScroll: true });
        } catch (focusError) {
          /* focus restoration is best effort */
        }
      }
    };
  }, []);

  React.useEffect(() => {
    if (engineRef.current) engineRef.current.setChapter(chapter);
  }, [chapter]);

  React.useEffect(() => {
    if (engineRef.current) engineRef.current.setPaused(!playing);
  }, [playing]);

  React.useEffect(() => {
    if (engineRef.current) engineRef.current.setBrightness(brightness);
    try {
      window.localStorage.setItem('cell-atlas.brightness', String(brightness));
    } catch (storageError) {
      /* ignore storage failures */
    }
  }, [brightness]);

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setIntro((value) => (value === 'out' ? value : value));
    }, 2800);
    timersRef.current.push(timer);
    return () => window.clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (intro !== 'out') return undefined;
    const timer = window.setTimeout(() => setIntro('gone'), 720);
    timersRef.current.push(timer);
    return () => window.clearTimeout(timer);
  }, [intro]);

  React.useEffect(() => {
    if (intro !== 'gone') return undefined;
    const timer = window.setTimeout(() => {
      if (closeRef.current) {
        try {
          closeRef.current.focus({ preventScroll: true });
        } catch (focusError) {
          /* ignore */
        }
      }
    }, 100);
    timersRef.current.push(timer);
    return () => window.clearTimeout(timer);
  }, [intro]);

  React.useEffect(() => {
    if (!playing || intro !== 'gone' || error || studyOpen) return undefined;
    let frame = 0;
    let lastPaint = 0;
    const started = performance.now();
    const duration = current.duration;
    const tick = (now) => {
      const value = Math.min(1, (now - started) / duration);
      if (now - lastPaint > 70) {
        lastPaint = now;
        setProgress(value);
      }
      if (value >= 1) {
        setProgress(1);
        if (chapter < CHAPTERS.length - 1) {
          setChapter((index) => Math.min(CHAPTERS.length - 1, index + 1));
          setProgress(0);
        } else {
          setPlaying(false);
        }
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [chapter, playing, intro, error, studyOpen, current.duration]);

  const dismissIntro = React.useCallback(() => {
    setIntro((value) => (value === 'in' ? 'out' : value));
    if (engineRef.current) engineRef.current.pulse();
  }, []);

  const openManual = React.useCallback(() => {
    setIntro((value) => (value === 'in' ? 'out' : value));
    setManualOpen(true);
    if (engineRef.current) engineRef.current.pulse();
  }, []);

  const closeManual = React.useCallback(() => {
    setManualOpen(false);
  }, []);

  const close = React.useCallback(() => {
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    store.set(false);
  }, []);

  const goTo = React.useCallback((index) => {
    const next = Math.max(0, Math.min(CHAPTERS.length - 1, index));
    setChapter(next);
    setProgress(0);
  }, []);

  const step = React.useCallback((delta) => {
    setChapter((index) => Math.max(0, Math.min(CHAPTERS.length - 1, index + delta)));
    setProgress(0);
  }, []);

  const togglePlay = React.useCallback(() => {
    if (!playing && ended) {
      setChapter(0);
      setProgress(0);
      setPlaying(true);
      return;
    }
    setPlaying(!playing);
  }, [playing, ended]);

  const toggleFullscreen = React.useCallback(() => {
    if (!document.fullscreenElement) {
      if (rootRef.current && rootRef.current.requestFullscreen) {
        rootRef.current.requestFullscreen().catch(() => {});
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  const setBrightnessValue = React.useCallback((value) => {
    const next = Math.max(0.3, Math.min(1, Math.round(Number(value) * 100) / 100));
    setBrightness(Number.isFinite(next) ? next : DEFAULT_BRIGHTNESS);
  }, []);

  const nudgeBrightness = React.useCallback((delta) => {
    setBrightness((value) => Math.max(0.3, Math.min(1, Math.round((value + delta) * 100) / 100)));
  }, []);

  const resetView = React.useCallback(() => {
    if (engineRef.current) engineRef.current.resetView();
  }, []);

  const openStudy = React.useCallback(() => {
    setPlaying(false);
    setStudyOpen(true);
  }, []);

  const closeStudy = React.useCallback(() => {
    setStudyOpen(false);
  }, []);

  const openBook = React.useCallback(() => {
    setPlaying(false);
    setStudyOpen(false);
    setBookChapter(bookChapterForScene(chapter));
    setBookOpen(true);
  }, [chapter]);

  const closeBook = React.useCallback(() => {
    setBookOpen(false);
  }, []);

  const openModel = React.useCallback((context) => {
    setPlaying(false);
    engineRef.current?.setPaused?.(true);
    setModelView(context);
  }, []);

  const closeModel = React.useCallback(() => {
    engineRef.current?.setPaused?.(false);
    setModelView(null);
  }, []);

  actionsRef.current = {
    close,
    step,
    togglePlay,
    toggleFullscreen,
    nudgeBrightness,
    resetView,
    openStudy,
    closeStudy,
    openBook,
    closeBook,
    openModel,
    closeModel,
    studyOpen,
    bookOpen,
    modelView,
  };

  React.useEffect(() => {
    const onKeyDown = (event) => {
      const tag = event.target && event.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || (event.target && event.target.isContentEditable)) return;
      if (actionsRef.current.modelView) {
        if (event.key === 'Escape') {
          event.preventDefault();
          actionsRef.current.closeModel();
        }
        return;
      }
      if (actionsRef.current.bookOpen) {
        if (event.key === 'Escape' || event.key.toLowerCase() === 'b') {
          event.preventDefault();
          actionsRef.current.closeBook();
        }
        return;
      }
      if (event.key === 'Escape') {
        event.preventDefault();
        if (actionsRef.current.studyOpen) actionsRef.current.closeStudy();
        else actionsRef.current.close();
        return;
      }
      if (event.key.toLowerCase() === 'b') {
        event.preventDefault();
        actionsRef.current.openBook();
        return;
      }
      if (event.key.toLowerCase() === 't') {
        event.preventDefault();
        if (actionsRef.current.studyOpen) actionsRef.current.closeStudy();
        else actionsRef.current.openStudy();
        return;
      }
      if (actionsRef.current.studyOpen) return;
      if (tag === 'BUTTON' || tag === 'A') return;
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        actionsRef.current.step(1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        actionsRef.current.step(-1);
      } else if (event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        actionsRef.current.togglePlay();
      } else if (event.key.toLowerCase() === 'f') {
        event.preventDefault();
        actionsRef.current.toggleFullscreen();
      } else if (event.key === '-' || event.key === '_') {
        event.preventDefault();
        actionsRef.current.nudgeBrightness(-0.06);
      } else if (event.key === '=' || event.key === '+') {
        event.preventDefault();
        actionsRef.current.nudgeBrightness(0.06);
      } else if (event.key.toLowerCase() === 'r') {
        event.preventDefault();
        actionsRef.current.resetView();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  React.useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  const fullscreenSupported =
    typeof document !== 'undefined' && Boolean(document.fullscreenEnabled || document.webkitFullscreenEnabled);

  return (
    <div
      ref={rootRef}
      className={`ca-root ${ready ? 'is-ready' : ''}`}
      style={{ '--ca-accent': current.accent }}
      role="dialog"
      aria-modal="true"
      aria-label={t('dialog', '细胞图谱 —— 一场穿过活细胞的视觉漫游')}
    >
      <style>{ATLAS_CSS}</style>
      <div className="ca-fallback" aria-hidden="true">
        <div className="ca-fallback-cell" />
        <div className="ca-fallback-glow" />
      </div>
      <div className={`ca-canvas ${ready ? 'is-ready' : ''}`} ref={hostRef} />
      <div className="ca-grain" aria-hidden="true" />
      <div className="ca-scanlines" aria-hidden="true" />
      <div className="ca-vignette" aria-hidden="true" />

      <div className="ca-frame" aria-hidden="true">
        <span className="ca-corner ca-corner-tl" />
        <span className="ca-corner ca-corner-tr" />
        <span className="ca-corner ca-corner-bl" />
        <span className="ca-corner ca-corner-br" />
      </div>
      <div className="ca-reticle" aria-hidden="true" />

      <div className="ca-ui">
        <header className="ca-header">
          <div className="ca-brand">
            <CellMark className="ca-brand-mark" />
            <div className="ca-brand-text">
              <div className="ca-wordmark">
                CELL <span>ATLAS</span>
              </div>
              <div className="ca-wordmark-cn">细胞图谱 · 一次关于边界的漫游</div>
            </div>
          </div>
          <div className="ca-topreadout">
            <span className="ca-live-dot" />
            <span>LIVE SPECIMEN</span>
            <span className="ca-topreadout-sep">/</span>
            <span>{current.readout}</span>
          </div>
          <div className="ca-topright">
            <button
              type="button"
              className="ca-book-btn ca-help-btn"
              onClick={openManual}
              aria-label="打开完整使用手册"
              title="完整使用手册"
            >
              <Icon name="help" size={15} />
            </button>
            <button
              type="button"
              className="ca-book-btn"
              onClick={openBook}
              aria-label={t('openBook', '打开全书分节')}
              title={`${t('openBook', '打开全书分节')} · B`}
            >
              <Icon name="book" size={15} />
            </button>
            <button
              type="button"
              className="ca-study-toggle"
              onClick={openStudy}
              aria-expanded={studyOpen}
              aria-controls="ca-study-panel"
              title={`${t('studyTitle', '学习手册')} · T`}
            >
              <Icon name="book" size={14} />
              <span>{t('study', '学习')}</span>
            </button>
            <div className="ca-counter" aria-label={`${t('chapter', '章节')} ${chapter + 1}`}>
              <b>{current.no}</b>
              <span>/ {String(CHAPTERS.length).padStart(2, '0')}</span>
            </div>
            <button
              type="button"
              className="ca-iconbtn"
              onClick={close}
              ref={closeRef}
              aria-label={t('close', '关闭细胞图谱')}
              title={t('close', '关闭细胞图谱')}
            >
              <Icon name="close" />
            </button>
          </div>
        </header>

        <main className="ca-stage">
          <div className="ca-readout" aria-hidden="true">
            <div>{current.readout}</div>
            <div className="ca-readout-sub">
              FOCUS {formatFocus(current)} <span>/</span> SECTION 0.{chapter + 2} µm
            </div>
          </div>

          <article className="ca-caption" key={current.id}>
            <div className="ca-kicker">
              <span className="ca-kicker-line" />
              <span>
                {current.kicker} <span className="ca-kicker-slash">/</span> {current.cnKicker}
              </span>
            </div>
            <h1>{current.title}</h1>
            <div className="ca-en">{current.en}</div>
            <button
              type="button"
              className="ca-textbook-chip"
              onClick={openStudy}
              aria-label={`${t('study', '学习手册')}：${t('textbookAlignment', '教材对照')}，${study.textbook.chapter} ${study.textbook.title}，pp.${study.textbook.pages}`}
              title={`${t('study', '学习手册')} · T`}
            >
              <span className="ca-textbook-chip-icon">
                <Icon name="book" size={17} />
              </span>
              <span className="ca-textbook-chip-main">
                <span className="ca-textbook-chip-top">
                  <b>{t('study', '学习手册')}</b>
                  <em>
                    {t('textbookAlignment', '教材对照')} · {study.textbook.chapter} {study.textbook.title}
                  </em>
                </span>
                <span className="ca-textbook-chip-sub">
                  pp.{study.textbook.pages} · 学习目标 / 机制拆解 / 自测
                </span>
              </span>
              <span className="ca-textbook-chip-key">T</span>
              <Icon name="arrow" size={14} />
            </button>
            <p className="ca-body">{current.body}</p>
            <div className="ca-facts">
              {current.facts.map((fact, index) => (
                <div className="ca-fact" key={fact.k} style={{ '--i': index }}>
                  <div className="ca-fact-k">{fact.k}</div>
                  <div className="ca-fact-v">{fact.v}</div>
                </div>
              ))}
            </div>
          </article>

          <nav className="ca-rail" aria-label="Chapters">
            {CHAPTERS.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={index === chapter ? 'is-active' : ''}
                data-complete={index < chapter ? 'true' : 'false'}
                onClick={() => goTo(index)}
                aria-label={`${item.no} ${item.short}`}
                aria-current={index === chapter ? 'step' : undefined}
              >
                <span className="ca-rail-title">{item.short}</span>
                <span className="ca-rail-line" />
                <span className="ca-rail-no">{item.no}</span>
              </button>
            ))}
          </nav>

          <div className="ca-spine" aria-hidden="true">
            <span>HOMO SAPIENS</span>
            <span>CELLULAR SPECIMEN / 001</span>
          </div>
        </main>

        <footer className="ca-footer">
          <div className="ca-auto">
            <span className={`ca-auto-dot ${playing ? 'is-live' : ''}`} />
            <span className="ca-auto-label">{playing ? t('auto', '自动漫游') : t('hold', '已暂停')}</span>
            <span className="ca-auto-sep">/</span>
            <span className="ca-hint">
              <kbd>T</kbd>
              <span>{t('study', '学习手册')}</span>
            </span>
          </div>

          <div className="ca-timeline" role="group" aria-label="Timeline">
            {CHAPTERS.map((item, index) => {
              const fill = index < chapter ? 1 : index === chapter ? progress : 0;
              return (
                <button
                  type="button"
                  key={item.id}
                  className={`ca-seg ${index === chapter ? 'is-active' : ''}`}
                  onClick={() => goTo(index)}
                  aria-label={`${item.no} ${item.short}`}
                >
                  <span className="ca-seg-track">
                    <span className="ca-seg-fill" style={{ transform: `scaleX(${fill})` }} />
                  </span>
                  <span className="ca-seg-label">{item.no}</span>
                </button>
              );
            })}
          </div>

          <div className="ca-controls">
            <label className="ca-lum" title={t('brightnessHint', '亮度（− / =）')}>
              <Icon name="sun" size={13} />
              <input
                type="range"
                min="0.3"
                max="1"
                step="0.01"
                value={brightness}
                onChange={(event) => setBrightnessValue(event.target.value)}
                aria-label={t('brightness', '亮度')}
              />
              <span className="ca-lum-value" aria-hidden="true">
                {Math.round(brightness * 100)}
              </span>
            </label>
            <button
              type="button"
              className="ca-ctrl ca-ctrl-quiet"
              onClick={resetView}
              aria-label={t('resetView', '重置视角')}
              title={t('resetViewHint', '重置视角（R）')}
            >
              <Icon name="reset" />
            </button>
            <button
              type="button"
              className="ca-ctrl"
              onClick={() => step(-1)}
              disabled={chapter === 0}
              aria-label={t('prev', '上一章')}
              title={t('prev', '上一章')}
            >
              <Icon name="prev" />
            </button>
            <button
              type="button"
              className="ca-ctrl ca-ctrl-primary"
              onClick={togglePlay}
              aria-label={ended ? t('replay', '重新播放') : playing ? t('pause', '暂停') : t('play', '播放')}
              title={ended ? t('replay', '重新播放') : playing ? t('pause', '暂停') : t('play', '播放')}
            >
              <Icon name={ended ? 'replay' : playing ? 'pause' : 'play'} />
            </button>
            <button
              type="button"
              className="ca-ctrl"
              onClick={() => step(1)}
              disabled={chapter === CHAPTERS.length - 1}
              aria-label={t('next', '下一章')}
              title={t('next', '下一章')}
            >
              <Icon name="next" />
            </button>
            {fullscreenSupported && (
              <button
                type="button"
                className="ca-ctrl ca-ctrl-quiet"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? t('exitFullscreen', '退出全屏') : t('fullscreen', '进入全屏')}
                title={isFullscreen ? t('exitFullscreen', '退出全屏') : t('fullscreen', '进入全屏')}
              >
                <Icon name={isFullscreen ? 'collapse' : 'expand'} />
              </button>
            )}
          </div>
        </footer>
      </div>

      {intro !== 'gone' && (
        <div
          className={`ca-intro ${intro === 'out' ? 'is-out' : ''}`}
          aria-hidden={intro === 'out'}
        >
          <div className="ca-intro-grid" aria-hidden="true" />
          <div className={`ca-intro-inner ${introPage > 0 ? 'is-guide' : ''}`}>
            {introPage === 0 && (
              <div className="ca-intro-step">
                <div className="ca-intro-welcome">欢迎来到细胞的世界</div>
                <div className="ca-intro-eyebrow">AN INTERACTIVE CELL ATLAS · MMXXVI</div>
                <h2>
                  <span className="ca-intro-fill">CELL</span>
                  <span className="ca-intro-slash">/</span>
                  <span className="ca-intro-outline">ATLAS</span>
                </h2>
                <div className="ca-intro-cn">细胞图谱</div>
                <div className="ca-intro-sub">一场从质膜到基因组的七幕视觉漫游</div>
                <div className="ca-intro-quick">
                  <div><kbd>T</kbd><b>学习手册</b><em>目标 · 概念 · 机制 · 自测</em></div>
                  <div><kbd>B</kbd><b>全书分节</b><em>16 章 · 44 节 · 3D 模型</em></div>
                  <div><kbd>↔</kbd><b>自由观察</b><em>拖动旋转 · 滚轮缩放</em></div>
                </div>
                <div className="ca-intro-actions">
                  <button type="button" className="ca-enter" onClick={() => setIntroPage(1)}>
                    <span>先看使用说明</span>
                    <Icon name="arrow" size={15} />
                  </button>
                  <span className="ca-intro-count">01 / 04</span>
                </div>
              </div>
            )}

            {introPage === 1 && (
              <div className="ca-intro-step ca-intro-guide">
                <div className="ca-intro-eyebrow">HOW TO USE / 使用说明</div>
                <h2 className="ca-guide-title">按 <kbd>T</kbd>，打开学习手册</h2>
                <div className="ca-guide-grid">
                  <div className="ca-guide-mock" aria-hidden="true">
                    <div className="ca-guide-mock-head">
                      <span>STUDY NOTES</span><b>学习手册</b><kbd>T</kbd>
                    </div>
                    <div className="ca-guide-mock-body">
                      <div className="ca-guide-mini-label">学习目标</div>
                      <p>说出流动镶嵌模型，并解释支持它的实验证据。</p>
                      <div className="ca-guide-mini-label">核心概念</div>
                      <p>磷脂双分子层 / 整合膜蛋白 / 膜的不对称性</p>
                      <div className="ca-guide-mini-label">机制拆解</div>
                      <p>膜脂流动性 → 蛋白运动 → 选择透过与信号接收</p>
                      <div className="ca-guide-mini-label">易错点</div>
                      <p>流动性不是“所有蛋白都能自由漂移”，膜骨架和连接会限制运动。</p>
                      <div className="ca-guide-mini-label">自测</div>
                      <p>为什么胆固醇对膜流动性有双向调节？</p>
                    </div>
                  </div>
                  <div className="ca-guide-copy">
                    <div className="ca-guide-block">
                      <span>01</span>
                      <div><b>T 打开的抽屉里有什么</b><p>学习目标、核心概念、机制拆解、易错点、画面图例、相关章节，以及可展开的自测答案；每页都带教材页码。</p></div>
                    </div>
                    <div className="ca-guide-block">
                      <span>02</span>
                      <div><b>从哪里打开</b><p>按 T；点右上角的「学习手册」；或点章节标题下方的「学习手册 · 教材对照」大按钮。关闭后回到原位。</p></div>
                    </div>
                    <div className="ca-guide-block">
                      <span>03</span>
                      <div><b>自动漫游会暂停</b><p>打开手册、全书分节或 3D 模型时，自动漫游会暂停；关闭后手动继续。</p></div>
                    </div>
                  </div>
                </div>
                <div className="ca-intro-actions">
                  <button type="button" className="ca-intro-secondary" onClick={() => setIntroPage(0)}>← 返回</button>
                  <button type="button" className="ca-enter" onClick={() => setIntroPage(2)}>
                    <span>下一步：新版使用说明</span>
                    <Icon name="arrow" size={15} />
                  </button>
                  <span className="ca-intro-count">02 / 04</span>
                </div>
              </div>
            )}

            {introPage === 2 && (
              <div className="ca-intro-step ca-intro-guide ca-intro-usage">
                <div className="ca-intro-eyebrow">COMPLETE GUIDE / 新版完整导引</div>
                <h2 className="ca-guide-title">从结构到结课，一页走完</h2>
                <div className="ca-usage-grid">
                  <div className="ca-usage-col">
                    <div className="ca-usage-col-title">IN THIS PLUGIN / 插件内</div>
                    <div className="ca-usage-step">
                      <span>01</span>
                      <div><b>按 T 打开学习手册</b><p>每节都有学习目标、核心概念、机制拆解、易错点、自测和教材页码。</p></div>
                    </div>
                    <div className="ca-usage-step">
                      <span>02</span>
                      <div><b>按 B 打开全书分节</b><p>左侧 16 章，右侧 44 节；搜索框可以筛章节和小节。</p></div>
                    </div>
                    <div className="ca-usage-step">
                      <span>03</span>
                      <div><b>模型名字就是入口</b><p>章节顶部和小节里的模型名可以直接打开：8 个结构模型 + 6 个实验方法模型。</p></div>
                    </div>
                    <div className="ca-usage-step">
                      <span>04</span>
                      <div><b>模型里怎么操作</b><p>拖动旋转、滚轮缩放、双击重置；关闭模型后回到全书原位置。</p></div>
                    </div>
                  </div>
                  <div className="ca-usage-col ca-usage-col-lesson">
                    <div className="ca-usage-col-title">GUIDED LESSON / 跨膜运输导学</div>
                    <div className="ca-usage-target">
                      <b>目标实验 · 必须精确匹配</b>
                      <div><code>ATP 0%</code><code>梯度 60%</code><code>无抑制剂</code></div>
                      <p>只有这个条件计入完成；其它组合是自由探索。改任何参数后，旧结果失效，必须重新运行。</p>
                    </div>
                    <p className="ca-usage-note">完整规则已经列在本页；插件内可以从「物质的跨膜运输」章节打开模型观察结构。通用操作、模型和全部按键见完整使用手册。</p>
                    <button
                      type="button"
                      className="ca-usage-link"
                      onClick={openManual}
                    >查看完整使用手册 →</button>
                  </div>
                </div>
                <div className="ca-usage-rules">
                  <div className="ca-usage-rule">
                    <span>01</span>
                    <b>认识结构</b>
                    <p>点模型里的膜、通道、泵、ATP；标签已隐藏，也可以点下方名称。</p>
                    <em>完成：四个结构都点过</em>
                  </div>
                  <div className="ca-usage-rule">
                    <span>02</span>
                    <b>观察机制</b>
                    <p>可选正常 / 慢速，或逐步看 E1–E2 的 5 个步骤；暂停、回看、重播不会清空进度。</p>
                    <em>完成：五个步骤都看过</em>
                  </div>
                  <div className="ca-usage-rule">
                    <span>03</span>
                    <b>动手探索</b>
                    <p>先预测再运行，泵按速率区间演示；只有目标实验计完成。减少动态效果开启时显示静态示意。</p>
                    <em>完成：目标实验运行成功</em>
                  </div>
                  <div className="ca-usage-rule">
                    <span>04</span>
                    <b>场景练习</b>
                    <p>点击泵、排 5 步顺序、选对结果分析；三项都正确才算完成，答错可重试。</p>
                    <em>完成：三道题都正确</em>
                  </div>
                </div>
                <div className="ca-usage-notes">
                  <div><b>自由浏览</b><p>四个阶段可随时切换，但最终结课要求每个阶段都有当前有效证据。</p></div>
                  <div><b>复习与重学</b><p>完成后再进入是复习；「重新学习」需要二次确认，历史只在本次打开期间保留。</p></div>
                  <div><b>手机</b><p>点「看模型」收起面板，直接点 3D 结构；选中后自动回到面板。</p></div>
                  <div><b>判定边界</b><p>本版没有 AI 自动批改；是否完成由课程引擎按上述证据判断。</p></div>
                </div>
                <div className="ca-usage-update">
                  <b>这一版更新</b>
                  <span>四页入口引导 · 右上角「?」可随时重开 · 章节 / 模型深链 · 8 个结构模型 + 6 个方法模型</span>
                </div>
                <div className="ca-intro-actions">
                  <button type="button" className="ca-intro-secondary" onClick={() => setIntroPage(1)}>← 返回</button>
                  <button type="button" className="ca-enter" onClick={() => setIntroPage(3)}>
                    <span>下一步：全书与操作</span>
                    <Icon name="arrow" size={15} />
                  </button>
                  <span className="ca-intro-count">03 / 04</span>
                </div>
              </div>
            )}

            {introPage === 3 && (
              <div className="ca-intro-step ca-intro-guide ca-intro-controls">
                <div className="ca-intro-eyebrow">NAVIGATION & CONTROLS / 全书与操作</div>
                <h2 className="ca-guide-title">按 <kbd>B</kbd>，进入 16 章 44 节</h2>
                <div className="ca-controls-grid">
                  <div className="ca-guide-mock ca-book-mock" aria-hidden="true">
                    <div className="ca-guide-mock-head"><span>BOOK INDEX</span><b>全书分节</b><kbd>B</kbd></div>
                    <div className="ca-book-mock-body">
                      <div className="ca-book-mock-row"><span>01</span>绪论<em>2 节</em></div>
                      <div className="ca-book-mock-row"><span>02</span>细胞生物学研究方法<em>4 节</em></div>
                      <div className="ca-book-mock-row is-active"><span>03</span>细胞质膜<em>2 节</em></div>
                      <div className="ca-book-mock-row"><span>04</span>物质的跨膜运输<em>3 节</em></div>
                      <div className="ca-book-mock-row"><span>05</span>细胞质基质与内膜系统<em>2 节</em></div>
                      <div className="ca-book-mock-row"><span>06</span>蛋白质分选与膜泡运输<em>2 节</em></div>
                      <div className="ca-book-mock-section"><span>第一节</span>细胞质膜的结构模型与基本成分<em>3D 模型</em></div>
                    </div>
                  </div>
                  <div className="ca-guide-copy">
                    <div className="ca-guide-block">
                      <span>01</span>
                      <div><b>左侧章节，右侧小节</b><p>按 B 或点右上角书本图标打开全书。左侧 16 章可以切换，右侧列出每一节；搜索框可筛章节和小节。</p></div>
                    </div>
                    <div className="ca-guide-block">
                      <span>02</span>
                      <div><b>每节都有完整学习卡</b><p>教材页码、小节提纲、内容定位、机制要点、关键术语、可展开自测；页面支持直接打印。</p></div>
                    </div>
                    <div className="ca-guide-block">
                      <span>03</span>
                      <div><b>模型名字就是入口</b><p>章节顶部和每个小节会显示 3D 模型名称（结构 + 实验方法）。点击名称直接观察，关闭后回到该小节。</p></div>
                    </div>
                    <div className="ca-guide-block">
                      <span>04</span>
                      <div><b>观察动作与亮度</b><p>拖动旋转、滚轮缩放、双击重置；模型页右下角有 20–70 的亮度滑杆，主场景也可用 − / = 调亮度。</p></div>
                    </div>
                  </div>
                </div>
                <div className="ca-intro-keymap">
                  <div><kbd>←</kbd><kbd>→</kbd><b>切换章节</b></div>
                  <div><kbd>Space</kbd><b>暂停 / 继续</b></div>
                  <div><kbd>T</kbd><b>学习手册</b></div>
                  <div><kbd>B</kbd><b>全书分节</b></div>
                  <div><kbd>F</kbd><b>全屏</b></div>
                  <div><kbd>R</kbd><b>重置视角</b></div>
                  <div><kbd>−</kbd><kbd>=</kbd><b>降低 / 提高亮度</b></div>
                  <div><kbd>双击</kbd><b>重置视角</b></div>
                </div>
                <div className="ca-intro-actions">
                  <button type="button" className="ca-intro-secondary" onClick={() => setIntroPage(2)}>← 返回</button>
                  <button type="button" className="ca-enter" onClick={dismissIntro}>
                    <span>{t('enter', '进入细胞')}</span>
                    <Icon name="arrow" size={15} />
                  </button>
                  <span className="ca-intro-count">04 / 04</span>
                </div>
              </div>
            )}
          </div>
          <div className="ca-intro-skip">按 T 学习手册 · B 全书分节 · 拖动旋转</div>
        </div>
      )}

      {studyOpen && !error && (
        <StudyPanel chapter={current} onClose={closeStudy} onOpenBook={openBook} onOpenModel={openModel} t={t} />
      )}

      {bookOpen && !error && (
        <TextbookBrowser
          initialChapter={bookChapter}
          onClose={closeBook}
          onJump={(sceneIndex) => {
            setBookOpen(false);
            goTo(sceneIndex);
          }}
          onOpenModel={openModel}
          t={t}
        />
      )}

      {modelView && (
        <SectionModelViewer context={modelView} onClose={closeModel} t={t} />
      )}

      {manualOpen && <UsageManual onClose={closeManual} />}

      {error && (
        <div className="ca-error" role="alert">
          <div className="ca-error-card">
            <div className="ca-error-no">ERR / WEBGL</div>
            <h2>{t('errorTitle', '光学场未能启动')}</h2>
            <p>{t('errorBody', '当前浏览器无法创建 WebGL 上下文。请尝试开启硬件加速的现代浏览器，然后重新打开细胞图谱。')}</p>
            <div className="ca-error-detail">{error}</div>
            <div className="ca-error-actions">
              <button type="button" className="ca-enter" onClick={() => window.location.reload()}>
                <span>RELOAD</span>
              </button>
              <button type="button" className="ca-ctrl ca-ctrl-primary" onClick={close} aria-label={t('close', '关闭')}>
                <Icon name="close" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CellAtlasOverlay() {
  const open = useAtlasOpen();
  if (!open) return null;
  return <AtlasExperience />;
}

export function createPlugin(react) {
  React = react;
  store = createStore();
  return {
    inject: ['slots'],
    apply(ctx) {
      const locale = ctx.get('locale');
      if (locale) {
        localeService = locale;
        try {
          ctx.effect(() => locale.register('cell-atlas', 'en', EN_LOCALE));
          ctx.effect(() => locale.register('cell-atlas', 'zh', ZH_LOCALE));
          ctx.effect(() => locale.register('cell-atlas', 'zh-CN', ZH_LOCALE));
        } catch (error) {
          // The atlas still has hard-coded Chinese fallbacks if a dictionary
          // namespace is already owned.
        }
      }

      ctx.slots.inject('conversation.header.leading', () =>
        ctx.slots.register({ name: 'conversation.header.leading' }, HeaderEntry)
      );

      ctx.slots.inject('sidebar.footer.action', () =>
        ctx.slots.register(
          {
            name: 'sidebar.footer.action',
            id: 'cell-atlas-launcher',
            order: 22,
            label: () => translateRaw('launcherTitle', '细胞图谱'),
          },
          Launcher
        )
      );

      ctx.slots.inject('shell.overlay', () =>
        ctx.slots.register(
          {
            name: 'shell.overlay',
            id: 'cell-atlas-overlay',
            order: 60,
          },
          CellAtlasOverlay
        )
      );
    },
  };
}

const HEADER_CSS = `
.ca-header-entry {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 30px;
  padding: 0 9px 0 5px;
  margin-right: 8px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 8px;
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 5%, transparent);
  color: var(--dsw-alias-label-secondary);
  font-family: inherit;
  cursor: pointer;
  appearance: none;
  flex: none;
  min-width: 0;
  transition: color .2s ease, border-color .2s ease, background .2s ease, transform .2s ease;
}
.ca-header-entry:hover,
.ca-header-entry:focus-visible {
  color: var(--dsw-alias-label-primary);
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 55%, var(--dsw-alias-border-l1));
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, var(--dsw-alias-bg-layer-1));
  transform: translateY(-1px);
  outline: none;
}
.ca-header-entry:focus-visible {
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--dsw-alias-brand-primary) 28%, transparent);
}
.ca-header-entry.is-open {
  border-color: var(--dsw-alias-brand-primary);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, var(--dsw-alias-bg-layer-1));
  color: var(--dsw-alias-label-primary);
}
.ca-header-entry-mark-wrap {
  position: relative;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  flex: none;
}
.ca-header-entry-mark {
  width: 21px;
  height: 21px;
  color: var(--dsw-alias-label-primary);
  opacity: .82;
}
.ca-header-entry-live {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--dsw-alias-brand-primary);
  box-shadow: 0 0 6px color-mix(in srgb, var(--dsw-alias-brand-primary) 70%, transparent);
}
.ca-header-entry-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  line-height: 1;
}
.ca-header-entry-cn {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .08em;
  color: var(--dsw-alias-label-primary);
  white-space: nowrap;
}
.ca-header-entry-en {
  margin-top: 3px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 6px;
  letter-spacing: .2em;
  color: var(--dsw-alias-label-secondary);
  white-space: nowrap;
}
.ca-header-entry > svg {
  flex: none;
  opacity: .42;
  margin-left: 1px;
}
@media (max-width: 760px) {
  .ca-header-entry {
    width: 30px;
    padding: 0;
    justify-content: center;
    margin-right: 4px;
  }
  .ca-header-entry-text,
  .ca-header-entry > svg {
    display: none;
  }
}
`;

const LAUNCHER_CSS = `
.ca-launcher {
  position: relative;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 9px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
  transition: color .22s ease, background .22s ease, border-color .22s ease, transform .22s ease;
  overflow: visible;
}
.ca-launcher:hover,
.ca-launcher:focus-visible {
  color: var(--dsw-alias-label-primary);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent);
  border-color: var(--dsw-alias-border-l1);
  outline: none;
}
.ca-launcher.is-open {
  color: var(--dsw-alias-brand-primary);
  border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 40%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
}
.ca-launcher-mark {
  width: 21px;
  height: 21px;
  position: relative;
  z-index: 2;
  transition: transform .5s cubic-bezier(.2,.8,.2,1);
}
.ca-launcher:hover .ca-launcher-mark { transform: rotate(14deg) scale(1.06); }
.ca-launcher-halo {
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--dsw-alias-brand-primary) 32%, transparent), transparent 70%);
  filter: blur(5px);
  opacity: 0;
  transition: opacity .3s ease;
}
.ca-launcher:hover .ca-launcher-halo { opacity: .9; }
.ca-launcher-dot {
  position: absolute;
  right: 4px;
  bottom: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--dsw-alias-brand-primary);
  box-shadow: 0 0 8px color-mix(in srgb, var(--dsw-alias-brand-primary) 80%, transparent);
  opacity: .7;
}
`;

const ATLAS_CSS = `
.ca-root {
  position: fixed;
  inset: 0;
  z-index: 2147483000;
  overflow: hidden;
  pointer-events: auto;
  background: #02060b;
  color: #e8fbf7;
  font-family: "Inter", "SF Pro Display", "Segoe UI", system-ui, "Microsoft YaHei", sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
  isolation: isolate;
}
.ca-root *,
.ca-root *::before,
.ca-root *::after { box-sizing: border-box; }
.ca-root button { font: inherit; color: inherit; }
.ca-root ::selection { background: rgba(127,247,228,.3); color: #fff; }

.ca-fallback {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background:
    radial-gradient(45% 48% at 50% 52%, rgba(13,92,96,.45), transparent 70%),
    radial-gradient(30% 36% at 30% 38%, rgba(151,33,99,.16), transparent 75%),
    radial-gradient(35% 40% at 68% 64%, rgba(71,55,180,.16), transparent 75%),
    #02060b;
}
.ca-fallback-cell {
  position: absolute;
  left: 50%;
  top: 50%;
  width: min(60vw, 60vh);
  height: min(60vw, 60vh);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid rgba(127,247,228,.2);
  background: radial-gradient(circle at 36% 30%, rgba(45,219,205,.22), rgba(20,76,96,.13) 45%, rgba(4,12,18,.05) 70%);
  box-shadow: 0 0 120px rgba(31,182,201,.22), inset 0 0 90px rgba(127,247,228,.1);
  filter: blur(.4px);
  animation: caFallbackBreath 8s ease-in-out infinite;
}
.ca-fallback-cell::before,
.ca-fallback-cell::after {
  content: "";
  position: absolute;
  inset: 12%;
  border-radius: 50%;
  border: 1px solid rgba(255,110,180,.16);
  transform: rotate(24deg) scaleY(.42);
}
.ca-fallback-cell::after {
  inset: 28%;
  border-color: rgba(127,247,228,.22);
  transform: rotate(-38deg) scaleY(.5);
}
.ca-fallback-glow {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 28vw;
  height: 28vw;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,93,173,.2), rgba(127,247,228,.08) 40%, transparent 68%);
  filter: blur(30px);
}
@keyframes caFallbackBreath {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: .82; }
  50% { transform: translate(-50%, -50%) scale(1.035); opacity: 1; }
}

.ca-canvas {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.ca-canvas canvas { opacity: 0; transition: opacity 1.6s cubic-bezier(.2,.7,.2,1); cursor: grab; }
.ca-canvas.is-ready canvas { opacity: 1; }
.ca-canvas canvas:active { cursor: grabbing; }

.ca-grain,
.ca-scanlines,
.ca-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.ca-grain {
  z-index: 3;
  opacity: .16;
  mix-blend-mode: soft-light;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E");
}
.ca-scanlines {
  z-index: 3;
  opacity: .16;
  background: repeating-linear-gradient(to bottom, rgba(215,255,248,.055) 0, rgba(215,255,248,.055) 1px, transparent 1px, transparent 3px);
  animation: caScanDrift 16s linear infinite;
}
@keyframes caScanDrift { from { background-position-y: 0; } to { background-position-y: 120px; } }
.ca-vignette {
  z-index: 3;
  background:
    linear-gradient(90deg, rgba(1,5,9,.56) 0%, rgba(1,5,9,.14) 24%, transparent 44%, transparent 72%, rgba(1,5,9,.34) 100%),
    radial-gradient(ellipse at 50% 50%, transparent 54%, rgba(0,4,8,.52) 100%);
}

.ca-frame { position: absolute; inset: 12px; z-index: 4; pointer-events: none; }
.ca-corner {
  position: absolute;
  width: 26px;
  height: 26px;
  border-color: rgba(127,247,228,.28);
  border-style: solid;
}
.ca-corner-tl { left: 0; top: 0; border-width: 1px 0 0 1px; }
.ca-corner-tr { right: 0; top: 0; border-width: 1px 1px 0 0; }
.ca-corner-bl { left: 0; bottom: 0; border-width: 0 0 1px 1px; }
.ca-corner-br { right: 0; bottom: 0; border-width: 0 1px 1px 0; }

.ca-reticle {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 34px;
  height: 34px;
  z-index: 4;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid rgba(127,247,228,.13);
  pointer-events: none;
  opacity: .55;
}
.ca-reticle::before,
.ca-reticle::after {
  content: "";
  position: absolute;
  background: rgba(127,247,228,.24);
}
.ca-reticle::before { width: 10px; height: 1px; left: 11px; top: 16px; }
.ca-reticle::after { width: 1px; height: 10px; left: 16px; top: 11px; }

.ca-ui {
  position: absolute;
  inset: 0;
  z-index: 6;
  display: flex;
  flex-direction: column;
  padding: 26px 32px 20px;
  pointer-events: none;
}
.ca-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  position: relative;
  flex: none;
}
.ca-brand { display: flex; align-items: center; gap: 11px; }
.ca-brand-mark {
  width: 37px;
  height: 37px;
  color: rgba(232,251,247,.66);
  filter: drop-shadow(0 0 12px rgba(127,247,228,.14));
  flex: none;
}
.ca-wordmark {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 11px;
  line-height: 1.2;
  letter-spacing: .35em;
  color: rgba(232,251,247,.78);
  white-space: nowrap;
}
.ca-wordmark span { color: var(--ca-accent); }
.ca-wordmark-cn {
  margin-top: 6px;
  font-size: 10px;
  letter-spacing: .12em;
  color: rgba(201,233,228,.44);
  white-space: nowrap;
}
.ca-topreadout {
  position: absolute;
  left: 50%;
  top: 4px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  letter-spacing: .22em;
  color: rgba(201,233,228,.42);
  white-space: nowrap;
}
.ca-topreadout-sep { opacity: .35; }
.ca-live-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--ca-accent);
  box-shadow: 0 0 9px var(--ca-accent);
  animation: caLivePulse 2.4s ease-in-out infinite;
}
@keyframes caLivePulse {
  0%, 100% { opacity: .35; transform: scale(.8); }
  50% { opacity: 1; transform: scale(1); }
}
.ca-topright { display: flex; align-items: center; gap: 12px; }
.ca-study-toggle {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 42px;
  padding: 0 17px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 42%, rgba(127,247,228,.18));
  border-radius: 999px;
  background: color-mix(in srgb, var(--ca-accent) 8%, rgba(3,12,16,.58));
  color: var(--ca-accent);
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .08em;
  cursor: pointer;
  backdrop-filter: blur(10px);
  pointer-events: auto;
  flex: none;
  transition: color .25s ease, border-color .25s ease, background .25s ease, box-shadow .25s ease;
}
.ca-study-toggle:hover,
.ca-study-toggle:focus-visible {
  color: #fff;
  border-color: var(--ca-accent);
  background: rgba(17,46,48,.52);
  box-shadow: 0 0 18px color-mix(in srgb, var(--ca-accent) 16%, transparent);
  outline: none;
}
.ca-study-toggle[aria-expanded="true"] {
  color: var(--ca-accent);
  border-color: color-mix(in srgb, var(--ca-accent) 55%, transparent);
  background: color-mix(in srgb, var(--ca-accent) 9%, rgba(3,12,16,.5));
}
.ca-study-toggle > svg { flex: none; opacity: .8; }
.ca-book-btn {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  padding: 0;
  flex: none;
  border: 1px solid rgba(127,247,228,.2);
  border-radius: 50%;
  background: rgba(3,12,16,.3);
  color: var(--ca-accent);
  cursor: pointer;
  pointer-events: auto;
  backdrop-filter: blur(10px);
  transition: color .25s ease, border-color .25s ease, background .25s ease, box-shadow .25s ease;
}
.ca-book-btn:hover,
.ca-book-btn:focus-visible {
  color: #fff;
  border-color: var(--ca-accent);
  background: rgba(17,46,48,.52);
  box-shadow: 0 0 16px color-mix(in srgb, var(--ca-accent) 18%, transparent);
  outline: none;
}
.ca-counter {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 10px;
  letter-spacing: .18em;
  color: rgba(201,233,228,.42);
  display: flex;
  align-items: baseline;
  gap: 7px;
}
.ca-counter b {
  font-size: 17px;
  font-weight: 400;
  letter-spacing: .05em;
  color: var(--ca-accent);
}
.ca-iconbtn {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  padding: 0;
  border-radius: 50%;
  border: 1px solid rgba(127,247,228,.2);
  background: rgba(3,12,16,.3);
  color: rgba(232,251,247,.82);
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: border-color .25s ease, background .25s ease, color .25s ease, transform .25s ease;
  pointer-events: auto;
}
.ca-iconbtn:hover,
.ca-iconbtn:focus-visible {
  color: #fff;
  border-color: var(--ca-accent);
  background: rgba(17,46,48,.52);
  transform: rotate(90deg);
  outline: none;
}

.ca-stage { position: relative; flex: 1; min-height: 0; }

.ca-caption {
  position: absolute;
  left: 0;
  bottom: clamp(38px, 7vh, 88px);
  width: min(570px, 47vw);
  pointer-events: none;
  z-index: 2;
}
.ca-caption::before {
  content: "";
  position: absolute;
  inset: -30px -70px -30px -38px;
  z-index: -1;
  background: radial-gradient(ellipse at 18% 52%, rgba(1,6,10,.72), rgba(1,6,10,.24) 48%, transparent 72%);
  filter: blur(10px);
}
.ca-caption > * {
  animation: caCaptionIn .95s cubic-bezier(.16,.84,.24,1) both;
}
.ca-caption > *:nth-child(1) { animation-delay: .03s; }
.ca-caption > *:nth-child(2) { animation-delay: .1s; }
.ca-caption > *:nth-child(3) { animation-delay: .16s; }
.ca-caption > *:nth-child(4) { animation-delay: .22s; }
.ca-caption > *:nth-child(5) { animation-delay: .3s; }
@keyframes caCaptionIn {
  from { opacity: 0; transform: translateY(20px); filter: blur(7px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
.ca-kicker {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: .3em;
  color: var(--ca-accent);
  text-transform: uppercase;
}
.ca-kicker-line {
  display: inline-block;
  width: 34px;
  height: 1px;
  background: var(--ca-accent);
  box-shadow: 0 0 8px var(--ca-accent);
}
.ca-kicker-slash { color: rgba(201,233,228,.32); margin: 0 3px; }
.ca-caption h1 {
  margin: 17px 0 9px;
  font-family: "Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", SimSun, serif;
  font-size: clamp(38px, 4.25vw, 62px);
  font-weight: 300;
  line-height: 1.08;
  letter-spacing: .025em;
  color: #dcefe9;
  text-shadow: 0 4px 28px rgba(0,0,0,.58), 0 0 44px rgba(127,247,228,.05);
}
.ca-en {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 9px;
  letter-spacing: .27em;
  color: rgba(201,233,228,.42);
  text-transform: uppercase;
  margin-bottom: 12px;
}
.ca-textbook-chip {
  display: flex;
  align-items: center;
  gap: 12px;
  width: min(100%, 440px);
  min-height: 54px;
  margin: 0 0 17px;
  padding: 9px 12px 9px 10px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 45%, rgba(127,247,228,.16));
  border-radius: 8px;
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--ca-accent) 9%, rgba(5,18,21,.62)), rgba(4,14,18,.4));
  color: rgba(232,251,247,.8);
  font-family: inherit;
  cursor: pointer;
  pointer-events: auto;
  text-align: left;
  box-shadow: inset 2px 0 0 color-mix(in srgb, var(--ca-accent) 70%, transparent);
  transition: border-color .25s ease, background .25s ease, box-shadow .25s ease, transform .25s ease;
}
.ca-textbook-chip:hover,
.ca-textbook-chip:focus-visible {
  border-color: color-mix(in srgb, var(--ca-accent) 70%, transparent);
  background:
    linear-gradient(90deg, color-mix(in srgb, var(--ca-accent) 14%, rgba(6,22,24,.74)), rgba(5,18,21,.5));
  box-shadow:
    inset 2px 0 0 var(--ca-accent),
    0 0 22px color-mix(in srgb, var(--ca-accent) 10%, transparent);
  outline: none;
  transform: translateY(-1px);
}
.ca-textbook-chip-icon {
  flex: none;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 38%, transparent);
  border-radius: 6px;
  color: var(--ca-accent);
  background: color-mix(in srgb, var(--ca-accent) 7%, transparent);
}
.ca-textbook-chip-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.ca-textbook-chip-top {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 7px;
}
.ca-textbook-chip-top > b {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .08em;
  color: rgba(240,255,251,.92);
  white-space: nowrap;
}
.ca-textbook-chip-top > em {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8.5px;
  font-style: normal;
  letter-spacing: .05em;
  color: var(--ca-accent);
  opacity: .75;
  white-space: nowrap;
}
.ca-textbook-chip-sub {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  line-height: 1.5;
  letter-spacing: .04em;
  color: rgba(201,233,228,.44);
  white-space: nowrap;
}
.ca-textbook-chip-key {
  flex: none;
  width: 23px;
  height: 23px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(201,233,228,.28);
  border-radius: 4px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 10px;
  color: rgba(232,251,247,.68);
  background: rgba(2,10,14,.35);
}
.ca-textbook-chip > svg {
  flex: none;
  color: var(--ca-accent);
  opacity: .55;
}
.ca-body {
  margin: 0;
  max-width: 520px;
  font-size: 13.5px;
  line-height: 1.92;
  letter-spacing: .035em;
  color: rgba(216,241,236,.66);
  text-wrap: pretty;
}
.ca-facts {
  display: flex;
  gap: 30px;
  margin-top: 23px;
  padding-top: 15px;
  border-top: 1px solid rgba(127,247,228,.16);
  max-width: 540px;
}
.ca-fact { min-width: 0; animation: caCaptionIn .9s cubic-bezier(.16,.84,.24,1) both; animation-delay: calc(.32s + var(--i) * .08s); }
.ca-fact-k {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  letter-spacing: .14em;
  color: rgba(201,233,228,.38);
  white-space: nowrap;
}
.ca-fact-v {
  margin-top: 5px;
  font-size: 13px;
  letter-spacing: .03em;
  color: rgba(232,251,247,.8);
  white-space: nowrap;
}
.ca-fact-v::before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-right: 8px;
  border-radius: 50%;
  background: var(--ca-accent);
  box-shadow: 0 0 8px var(--ca-accent);
  vertical-align: 2px;
}

.ca-readout {
  position: absolute;
  right: 0;
  top: 2px;
  text-align: right;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  letter-spacing: .18em;
  line-height: 1.8;
  color: rgba(201,233,228,.38);
  white-space: nowrap;
}
.ca-readout-sub { color: rgba(201,233,228,.24); }
.ca-readout-sub span { opacity: .5; margin: 0 3px; }

.ca-rail {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 13px;
  z-index: 2;
}
.ca-rail button {
  pointer-events: auto;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 9px;
  padding: 2px 0;
  border: 0;
  background: transparent;
  color: rgba(201,233,228,.42);
  cursor: pointer;
  opacity: .62;
  transition: color .3s ease, opacity .3s ease;
  outline: none;
}
.ca-rail button:hover,
.ca-rail button:focus-visible { color: var(--ca-accent); opacity: 1; }
.ca-rail button.is-active { color: var(--ca-accent); opacity: 1; }
.ca-rail-no {
  width: 18px;
  text-align: right;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  letter-spacing: .05em;
}
.ca-rail-line {
  width: 18px;
  height: 1px;
  background: currentColor;
  opacity: .55;
  transition: width .35s ease, box-shadow .35s ease;
}
.ca-rail button.is-active .ca-rail-line {
  width: 38px;
  box-shadow: 0 0 9px var(--ca-accent);
  opacity: 1;
}
.ca-rail-title {
  font-size: 10px;
  letter-spacing: .08em;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(7px);
  transition: opacity .3s ease, transform .3s ease;
}
.ca-rail button.is-active .ca-rail-title,
.ca-rail button:hover .ca-rail-title,
.ca-rail button:focus-visible .ca-rail-title {
  opacity: 1;
  transform: translateX(0);
}

.ca-spine {
  position: absolute;
  left: 3px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 18px;
  writing-mode: vertical-rl;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  letter-spacing: .28em;
  color: rgba(201,233,228,.22);
  opacity: .8;
  pointer-events: none;
}

.ca-footer {
  display: flex;
  align-items: center;
  gap: 24px;
  flex: none;
  padding-top: 13px;
  border-top: 1px solid rgba(127,247,228,.12);
}
.ca-auto {
  display: flex;
  align-items: center;
  gap: 9px;
  min-width: 250px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 9.5px;
  letter-spacing: .12em;
  color: rgba(201,233,228,.52);
}
.ca-auto-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 1px solid rgba(201,233,228,.4);
  background: transparent;
  transition: background .3s ease, border-color .3s ease;
}
.ca-auto-dot.is-live {
  background: var(--ca-accent);
  border-color: var(--ca-accent);
  box-shadow: 0 0 8px var(--ca-accent);
  animation: caLivePulse 2s ease-in-out infinite;
}
.ca-auto-label { color: rgba(232,251,247,.72); white-space: nowrap; }
.ca-auto-sep { opacity: .3; }
.ca-hint {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  opacity: 1;
  font-size: 9.5px;
  color: rgba(201,233,228,.68);
}
.ca-hint kbd {
  display: inline-grid;
  place-items: center;
  min-width: 17px;
  height: 17px;
  padding: 0 4px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 45%, transparent);
  border-bottom-color: color-mix(in srgb, var(--ca-accent) 70%, transparent);
  border-radius: 3px;
  background: color-mix(in srgb, var(--ca-accent) 7%, rgba(2,10,14,.6));
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  line-height: 1;
  color: var(--ca-accent);
  box-shadow: 0 0 8px color-mix(in srgb, var(--ca-accent) 12%, transparent);
}

.ca-timeline {
  display: flex;
  gap: 6px;
  flex: 1;
  min-width: 160px;
}
.ca-seg {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 3px 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  pointer-events: auto;
  opacity: .55;
  transition: opacity .3s ease;
}
.ca-seg:hover,
.ca-seg:focus-visible,
.ca-seg.is-active { opacity: 1; outline: none; }
.ca-seg-track {
  position: relative;
  display: block;
  height: 2px;
  background: rgba(201,233,228,.17);
  overflow: hidden;
}
.ca-seg-fill {
  position: absolute;
  inset: 0;
  background: var(--ca-accent);
  transform-origin: left center;
  box-shadow: 0 0 8px var(--ca-accent);
  transition: transform .12s linear;
}
.ca-seg-label {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  letter-spacing: .1em;
  color: rgba(201,233,228,.34);
  text-align: left;
}
.ca-seg.is-active .ca-seg-label { color: var(--ca-accent); }
.ca-seg[data-complete="true"] .ca-seg-fill { background: rgba(201,233,228,.42); box-shadow: none; }

.ca-controls { display: flex; align-items: center; gap: 7px; pointer-events: auto; }
.ca-lum {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 8px;
  border: 1px solid rgba(201,233,228,.13);
  border-radius: 999px;
  background: rgba(2,10,14,.28);
  color: rgba(201,233,228,.44);
  pointer-events: auto;
  flex: none;
  cursor: pointer;
  backdrop-filter: blur(8px);
}
.ca-lum > svg { flex: none; opacity: .7; }
.ca-lum input[type="range"] {
  appearance: none;
  -webkit-appearance: none;
  width: 56px;
  height: 16px;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}
.ca-lum input[type="range"]::-webkit-slider-runnable-track {
  height: 2px;
  border-radius: 2px;
  background: rgba(201,233,228,.25);
}
.ca-lum input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 9px;
  height: 9px;
  margin-top: -3.5px;
  border: 0;
  border-radius: 50%;
  background: var(--ca-accent);
  box-shadow: 0 0 7px color-mix(in srgb, var(--ca-accent) 65%, transparent);
}
.ca-lum input[type="range"]::-moz-range-track {
  height: 2px;
  border: 0;
  border-radius: 2px;
  background: rgba(201,233,228,.25);
}
.ca-lum input[type="range"]::-moz-range-thumb {
  width: 9px;
  height: 9px;
  border: 0;
  border-radius: 50%;
  background: var(--ca-accent);
  box-shadow: 0 0 7px color-mix(in srgb, var(--ca-accent) 65%, transparent);
}
.ca-lum:focus-within,
.ca-lum:hover { border-color: rgba(201,233,228,.32); color: rgba(232,251,247,.7); }
.ca-lum-value {
  width: 16px;
  text-align: right;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  letter-spacing: .04em;
  color: rgba(201,233,228,.45);
}
.ca-ctrl {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  padding: 0;
  border-radius: 50%;
  border: 1px solid rgba(201,233,228,.18);
  background: rgba(2,10,14,.28);
  color: rgba(232,251,247,.74);
  cursor: pointer;
  transition: color .22s ease, border-color .22s ease, background .22s ease, transform .22s ease;
  backdrop-filter: blur(8px);
}
.ca-ctrl:hover,
.ca-ctrl:focus-visible {
  color: #fff;
  border-color: var(--ca-accent);
  background: rgba(14,40,42,.5);
  outline: none;
}
.ca-ctrl:active { transform: scale(.94); }
.ca-ctrl:disabled { opacity: .24; cursor: default; }
.ca-ctrl:disabled:hover { color: rgba(232,251,247,.74); border-color: rgba(201,233,228,.18); background: rgba(2,10,14,.28); }
.ca-ctrl-primary {
  width: 39px;
  height: 39px;
  color: #03110f;
  border-color: transparent;
  background: var(--ca-accent);
  box-shadow: 0 0 20px color-mix(in srgb, var(--ca-accent) 36%, transparent);
}
.ca-ctrl-primary:hover,
.ca-ctrl-primary:focus-visible {
  color: #03110f;
  background: var(--ca-accent);
  border-color: transparent;
  box-shadow: 0 0 28px color-mix(in srgb, var(--ca-accent) 55%, transparent);
}
.ca-ctrl-quiet { border-color: transparent; background: transparent; }

.ca-study-backdrop {
  position: absolute;
  inset: 0;
  z-index: 30;
  display: flex;
  justify-content: flex-end;
  background: rgba(0,4,8,.6);
  backdrop-filter: blur(10px);
  pointer-events: auto;
  animation: caStudyFade .28s ease both;
}
@keyframes caStudyFade { from { opacity: 0; } to { opacity: 1; } }
.ca-study-panel {
  position: relative;
  width: min(600px, 94vw);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 100% 0%, color-mix(in srgb, var(--ca-accent) 7%, transparent), transparent 44%),
    linear-gradient(165deg, rgba(7,19,24,.985), rgba(2,7,11,.995));
  border-left: 1px solid rgba(127,247,228,.22);
  box-shadow: -42px 0 110px rgba(0,0,0,.55);
  animation: caStudyIn .48s cubic-bezier(.2,.82,.2,1) both;
}
@keyframes caStudyIn {
  from { transform: translateX(45px); opacity: .3; }
  to { transform: translateX(0); opacity: 1; }
}
.ca-study-panel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--ca-accent), transparent 70%);
  opacity: .8;
  z-index: 2;
}
.ca-study-panel:focus { outline: none; }
.ca-study-head {
  flex: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 28px 28px 20px;
  border-bottom: 1px solid rgba(127,247,228,.14);
}
.ca-study-heading { min-width: 0; }
.ca-study-eyebrow {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  letter-spacing: .28em;
  color: var(--ca-accent);
  text-transform: uppercase;
  opacity: .85;
}
.ca-study-head h2 {
  margin: 9px 0 9px;
  font-family: "Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", SimSun, serif;
  font-size: clamp(22px, 2.4vw, 30px);
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: .03em;
  color: rgba(232,251,247,.92);
}
.ca-study-meta {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  line-height: 1.7;
  letter-spacing: .06em;
  color: rgba(201,233,228,.4);
}
.ca-study-close { flex: none; width: 34px; height: 34px; }
.ca-study-close:hover { transform: rotate(90deg); }
.ca-study-scroll {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 8px 28px 38px;
  scrollbar-width: thin;
  scrollbar-color: rgba(127,247,228,.22) transparent;
}
.ca-study-scroll::-webkit-scrollbar { width: 6px; }
.ca-study-scroll::-webkit-scrollbar-track { background: transparent; }
.ca-study-scroll::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: rgba(127,247,228,.2);
}
.ca-study-book-cta {
  display: flex;
  align-items: center;
  gap: 11px;
  width: 100%;
  margin: 18px 0 2px;
  padding: 10px 11px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 40%, rgba(127,247,228,.14));
  border-radius: 8px;
  background: linear-gradient(90deg, color-mix(in srgb, var(--ca-accent) 10%, rgba(5,18,21,.62)), rgba(4,14,18,.4));
  color: rgba(232,251,247,.8);
  text-align: left;
  cursor: pointer;
  box-shadow: inset 2px 0 0 color-mix(in srgb, var(--ca-accent) 70%, transparent);
  transition: border-color .25s ease, background .25s ease, transform .25s ease;
}
.ca-study-book-cta:hover,
.ca-study-book-cta:focus-visible {
  border-color: var(--ca-accent);
  background: color-mix(in srgb, var(--ca-accent) 12%, rgba(5,18,21,.7));
  transform: translateY(-1px);
  outline: none;
}
.ca-study-book-cta-icon {
  flex: none;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 38%, transparent);
  border-radius: 6px;
  color: var(--ca-accent);
  background: color-mix(in srgb, var(--ca-accent) 7%, transparent);
}
.ca-study-book-cta-copy { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.ca-study-book-cta-copy b { font-size: 13px; font-weight: 500; letter-spacing: .05em; color: rgba(240,255,251,.92); }
.ca-study-book-cta-copy em { font-family: var(--mono); font-size: 8px; font-style: normal; color: rgba(201,233,228,.45); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ca-study-book-cta-key {
  flex: none;
  width: 21px;
  height: 21px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(201,233,228,.25);
  border-radius: 4px;
  font-family: var(--mono);
  font-size: 9px;
  color: rgba(232,251,247,.55);
}
.ca-study-book-cta > svg { flex: none; color: var(--ca-accent); opacity: .55; }
.ca-study-model-index {
  margin-top: 12px;
  padding: 10px 11px;
  border: 1px solid rgba(127,247,228,.12);
  border-radius: 7px;
  background: rgba(4,14,18,.32);
}
.ca-study-model-head { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; margin-bottom: 8px; }
.ca-study-model-head > span { font-family: var(--mono); font-size: 8px; letter-spacing: .14em; color: var(--ca-accent); opacity: .72; }
.ca-study-model-head > em { font-family: var(--mono); font-size: 7px; font-style: normal; color: rgba(201,233,228,.34); }
.ca-study-model-links { display: flex; flex-direction: column; gap: 8px; }
.ca-study-model-group-label { margin-bottom: 4px; font-family: var(--mono); font-size: 6.5px; letter-spacing: .12em; color: rgba(201,233,228,.32); }
.ca-study-model-group-links { display: flex; flex-wrap: wrap; gap: 5px; }
.ca-study-model-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 7px;
  border: 1px solid rgba(127,247,228,.13);
  border-radius: 4px;
  background: transparent;
  color: rgba(232,251,247,.68);
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: .02em;
  cursor: pointer;
  transition: .2s ease;
}
.ca-study-model-link > span { color: var(--ca-accent); opacity: .55; font-size: 7px; }
.ca-study-model-link:hover,
.ca-study-model-link:focus-visible { border-color: var(--ca-accent); color: var(--ca-accent); background: color-mix(in srgb, var(--ca-accent) 8%, transparent); outline: none; }
.ca-study-section {
  padding-top: 24px;
}
.ca-study-section + .ca-study-section {
  margin-top: 24px;
  border-top: 1px solid rgba(127,247,228,.12);
}
.ca-study-label {
  display: flex;
  align-items: baseline;
  gap: 9px;
  margin-bottom: 14px;
}
.ca-study-label > span {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  color: var(--ca-accent);
  opacity: .75;
}
.ca-study-label > b {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .12em;
  color: rgba(232,251,247,.85);
}
.ca-study-label > em {
  margin-left: auto;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  font-style: normal;
  letter-spacing: .18em;
  color: rgba(201,233,228,.26);
}
.ca-study-objectives {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ca-study-objectives li {
  position: relative;
  margin: 10px 0;
  padding-left: 22px;
  font-size: 12.5px;
  line-height: 1.8;
  color: rgba(220,242,236,.76);
}
.ca-study-objectives li::before {
  content: "";
  position: absolute;
  left: 0;
  top: .78em;
  width: 11px;
  height: 1px;
  background: var(--ca-accent);
  box-shadow: 0 0 6px var(--ca-accent);
}
.ca-concepts { margin: 0; }
.ca-concept {
  display: grid;
  grid-template-columns: 158px minmax(0, 1fr);
  gap: 18px;
  padding: 12px 0;
  border-top: 1px solid rgba(127,247,228,.09);
}
.ca-concept:first-child { border-top: 0; padding-top: 0; }
.ca-concept dt {
  margin: 0;
  min-width: 0;
}
.ca-concept dt > span {
  display: block;
  font-size: 12.5px;
  line-height: 1.5;
  letter-spacing: .03em;
  color: rgba(232,251,247,.88);
}
.ca-concept dt > em {
  display: block;
  margin-top: 4px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: .04em;
  color: var(--ca-accent);
  opacity: .56;
  overflow-wrap: anywhere;
}
.ca-concept dd {
  margin: 0;
  font-size: 12px;
  line-height: 1.82;
  color: rgba(210,236,230,.62);
}
.ca-study-mechanism {
  counter-reset: ca-step;
  list-style: none;
  margin: 0;
  padding: 0;
}
.ca-study-mechanism li {
  counter-increment: ca-step;
  position: relative;
  margin: 12px 0;
  padding-left: 30px;
  font-size: 12px;
  line-height: 1.85;
  color: rgba(210,236,230,.68);
}
.ca-study-mechanism li::before {
  content: counter(ca-step, decimal-leading-zero);
  position: absolute;
  left: 0;
  top: 3px;
  width: 19px;
  height: 19px;
  display: grid;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 42%, transparent);
  border-radius: 50%;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  color: var(--ca-accent);
  opacity: .8;
}
.ca-study-traps {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ca-study-traps li {
  position: relative;
  margin: 10px 0;
  padding: 5px 0 5px 14px;
  border-left: 1px solid rgba(255,116,183,.42);
  font-size: 12px;
  line-height: 1.8;
  color: rgba(220,242,236,.7);
}
.ca-study-traps li::before {
  content: "!";
  position: absolute;
  left: -5px;
  top: 9px;
  width: 9px;
  height: 9px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #081218;
  color: #ff8fc1;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 7px;
}
.ca-quiz-list { display: flex; flex-direction: column; gap: 8px; }
.ca-quiz {
  border: 1px solid rgba(127,247,228,.12);
  border-radius: 6px;
  background: rgba(4,13,17,.35);
  overflow: hidden;
  transition: border-color .25s ease, background .25s ease;
}
.ca-quiz.is-open {
  border-color: color-mix(in srgb, var(--ca-accent) 28%, rgba(127,247,228,.12));
  background: rgba(5,17,21,.5);
}
.ca-quiz-q {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 12px;
  border: 0;
  background: transparent;
  color: rgba(232,251,247,.8);
  text-align: left;
  cursor: pointer;
}
.ca-quiz-q:focus-visible { outline: 1px solid var(--ca-accent); outline-offset: -1px; }
.ca-quiz-no {
  flex: none;
  padding-top: 2px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  letter-spacing: .06em;
  color: var(--ca-accent);
  opacity: .7;
}
.ca-quiz-text {
  flex: 1;
  font-size: 12px;
  line-height: 1.75;
  color: rgba(232,251,247,.8);
}
.ca-quiz-q > svg { flex: none; margin-top: 2px; opacity: .45; }
.ca-quiz-a {
  display: flex;
  gap: 10px;
  padding: 0 12px 13px 38px;
  animation: caQuizIn .3s ease both;
}
@keyframes caQuizIn { from { opacity: 0; transform: translateY(-3px); } to { opacity: 1; transform: translateY(0); } }
.ca-quiz-a-label {
  flex: none;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 8px;
  letter-spacing: .06em;
  color: var(--ca-accent);
  padding-top: 2px;
  opacity: .75;
}
.ca-quiz-a p {
  margin: 0;
  font-size: 11.5px;
  line-height: 1.82;
  color: rgba(201,233,228,.62);
}
.ca-visuals {
  display: flex;
  flex-wrap: wrap;
  gap: 7px 8px;
}
.ca-visual {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 9px;
  border: 1px solid rgba(127,247,228,.12);
  border-radius: 4px;
  background: rgba(4,14,18,.35);
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: .03em;
  color: rgba(210,236,230,.66);
}
.ca-visual-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: 0 0 6px currentColor;
  flex: none;
}
.ca-related {
  list-style: none;
  margin: 0;
  padding: 0;
}.ca-related li {
  position: relative;
  margin: 8px 0;
  padding-left: 17px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 8px;
  line-height: 1.8;
  letter-spacing: .04em;
  color: rgba(201,233,228,.52);
}
.ca-related li::before {
  content: "↗";
  position: absolute;
  left: 0;
  color: var(--ca-accent);
  opacity: .55;
}
.ca-study-sections {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 17px;
  padding-top: 14px;
  border-top: 1px solid rgba(127,247,228,.1);
}
.ca-study-sections > span {
  width: 100%;
  margin-bottom: 2px;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 7px;
  letter-spacing: .14em;
  color: rgba(201,233,228,.3);
}
.ca-study-sections > em {
  padding: 3px 7px;
  border: 1px solid rgba(127,247,228,.12);
  border-radius: 4px;
  font-style: normal;
  font-size: 9px;
  line-height: 1.5;
  color: rgba(201,233,228,.46);
}
.ca-study-footer {
  display: flex;
  gap: 14px;
  margin-top: 30px;
  padding-top: 18px;
  border-top: 1px solid rgba(127,247,228,.12);
}
.ca-study-footer-mark {
  flex: none;
  width: 26px;
  height: 32px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(127,247,228,.2);
  border-radius: 3px;
  font-family: "Songti SC", "Noto Serif SC", "STSong", serif;
  font-size: 15px;
  color: var(--ca-accent);
  opacity: .65;
}
.ca-study-footer p {
  margin: 0;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  line-height: 1.8;
  letter-spacing: .02em;
  color: rgba(201,233,228,.3);
}

.ca-book-backdrop {
  position: absolute;
  inset: 0;
  z-index: 40;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(0,4,8,.74);
  backdrop-filter: blur(12px);
  pointer-events: auto;
  animation: caStudyFade .28s ease both;
}
.ca-book-panel {
  width: min(1180px, 96vw);
  height: min(900px, 92vh);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(127,247,228,.22);
  border-radius: 10px;
  background:
    radial-gradient(ellipse at 100% 0%, color-mix(in srgb, var(--ca-accent) 7%, transparent), transparent 42%),
    linear-gradient(165deg, rgba(6,18,23,.995), rgba(2,7,11,.998));
  box-shadow: 0 30px 120px rgba(0,0,0,.65);
  animation: caBookIn .45s cubic-bezier(.2,.82,.2,1) both;
}
.ca-book-panel:focus { outline: none; }
@keyframes caBookIn {
  from { opacity: 0; transform: translateY(18px) scale(.985); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.ca-book-head {
  flex: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 28px 18px;
  border-bottom: 1px solid rgba(127,247,228,.14);
  position: relative;
}
.ca-book-head::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 170px;
  height: 2px;
  background: linear-gradient(90deg, var(--ca-accent), transparent);
  opacity: .8;
}
.ca-book-heading { min-width: 0; }
.ca-book-eyebrow {
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: .28em;
  color: var(--ca-accent);
  opacity: .85;
}
.ca-book-head h2 {
  margin: 8px 0 7px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 12px;
  font-family: var(--serif);
  font-size: clamp(24px, 3vw, 34px);
  font-weight: 400;
  letter-spacing: .03em;
  color: rgba(232,251,247,.94);
}
.ca-book-head h2 span {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: .1em;
  color: var(--ca-accent);
  opacity: .65;
}
.ca-book-meta {
  font-family: var(--mono);
  font-size: 8px;
  line-height: 1.7;
  color: rgba(201,233,228,.38);
}
.ca-book-close { flex: none; width: 34px; height: 34px; }
.ca-book-body {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 258px minmax(0, 1fr);
}
.ca-book-nav {
  overflow-y: auto;
  padding: 10px;
  border-right: 1px solid rgba(127,247,228,.12);
  background: rgba(2,9,13,.34);
  scrollbar-width: thin;
  scrollbar-color: rgba(127,247,228,.2) transparent;
}
.ca-book-navitem {
  width: 100%;
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr);
  gap: 2px 7px;
  align-items: center;
  padding: 8px 9px;
  margin-bottom: 3px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  color: rgba(201,233,228,.55);
  text-align: left;
  cursor: pointer;
  transition: .2s ease;
}
.ca-book-navitem:hover,
.ca-book-navitem:focus-visible {
  color: rgba(232,251,247,.88);
  background: rgba(127,247,228,.05);
  outline: none;
}
.ca-book-navitem.is-active {
  color: var(--ca-accent);
  border-color: color-mix(in srgb, var(--ca-accent) 35%, transparent);
  background: color-mix(in srgb, var(--ca-accent) 8%, rgba(4,14,18,.45));
}
.ca-book-nav-no {
  grid-row: 1 / 3;
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: .02em;
  color: currentColor;
  opacity: .65;
}
.ca-book-nav-title {
  font-size: 11px;
  line-height: 1.45;
  color: currentColor;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ca-book-navitem em,
.ca-book-navitem i {
  font-family: var(--mono);
  font-size: 7px;
  font-style: normal;
  line-height: 1.5;
  color: rgba(201,233,228,.3);
}
.ca-book-navitem i { color: var(--ca-accent); opacity: .55; }
.ca-book-main {
  overflow-y: auto;
  padding: 24px 28px 34px;
  scrollbar-width: thin;
  scrollbar-color: rgba(127,247,228,.2) transparent;
}
.ca-book-main::-webkit-scrollbar { width: 6px; }
.ca-book-main::-webkit-scrollbar-thumb { background: rgba(127,247,228,.2); border-radius: 6px; }
.ca-book-chapterhead {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(127,247,228,.12);
}
.ca-book-kicker {
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: .12em;
  color: var(--ca-accent);
  opacity: .7;
}
.ca-book-kicker span { color: rgba(201,233,228,.24); margin: 0 5px; }
.ca-book-chapterhead h3 {
  margin: 8px 0 7px;
  font-family: var(--serif);
  font-size: 28px;
  font-weight: 400;
  letter-spacing: .03em;
  color: rgba(232,251,247,.94);
}
.ca-book-chapterhead p {
  margin: 0;
  max-width: 720px;
  font-size: 12px;
  line-height: 1.85;
  color: rgba(210,236,230,.62);
}
.ca-book-jump {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 11px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 40%, transparent);
  border-radius: 5px;
  background: color-mix(in srgb, var(--ca-accent) 6%, transparent);
  color: var(--ca-accent);
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: .06em;
  white-space: nowrap;
  cursor: pointer;
}
.ca-book-jump:hover { background: color-mix(in srgb, var(--ca-accent) 13%, transparent); }
.ca-book-sections { padding-top: 15px; }
.ca-book-section {
  border-bottom: 1px solid rgba(127,247,228,.1);
}
.ca-book-section.is-open { background: rgba(127,247,228,.018); }
.ca-book-section-head {
  width: 100%;
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 13px 2px;
  border: 0;
  background: transparent;
  color: rgba(232,251,247,.82);
  text-align: left;
  cursor: pointer;
}
.ca-book-section-head:hover { color: #fff; }
.ca-book-section-no {
  flex: none;
  width: 40px;
  font-family: var(--mono);
  font-size: 8px;
  color: var(--ca-accent);
  opacity: .7;
}
.ca-book-section-title {
  flex: 1;
  min-width: 0;
  font-size: 14px;
  letter-spacing: .03em;
}
.ca-book-section-pages {
  flex: none;
  font-family: var(--mono);
  font-size: 7px;
  color: rgba(201,233,228,.32);
}
.ca-book-section-head > svg { flex: none; opacity: .45; }
.ca-book-section-body {
  padding: 0 2px 20px 52px;
  animation: caQuizIn .3s ease both;
}
.ca-book-outline {
  display: flex;
  flex-wrap: wrap;
  gap: 5px 6px;
  margin-bottom: 13px;
}
.ca-book-outline > span {
  padding: 3px 7px;
  border: 1px solid rgba(127,247,228,.12);
  border-radius: 3px;
  font-family: var(--mono);
  font-size: 8px;
  color: rgba(201,233,228,.46);
}
.ca-book-summary {
  margin: 0 0 13px;
  font-size: 12.5px;
  line-height: 1.85;
  color: rgba(220,242,236,.76);
}
.ca-book-points {
  margin: 0 0 14px;
  padding: 0;
  list-style: none;
  counter-reset: ca-book-point;
}
.ca-book-points li {
  counter-increment: ca-book-point;
  position: relative;
  padding-left: 24px;
  margin: 7px 0;
  font-size: 11.5px;
  line-height: 1.8;
  color: rgba(210,236,230,.66);
}
.ca-book-points li::before {
  content: counter(ca-book-point, decimal-leading-zero);
  position: absolute;
  left: 0;
  top: 3px;
  font-family: var(--mono);
  font-size: 7px;
  color: var(--ca-accent);
  opacity: .65;
}
.ca-book-terms {
  margin: 0 0 14px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
}
.ca-book-terms > div {
  padding: 8px 10px;
  border: 1px solid rgba(127,247,228,.09);
  border-radius: 4px;
  background: rgba(4,14,18,.3);
}
.ca-book-terms dt {
  font-size: 11px;
  color: rgba(232,251,247,.84);
}
.ca-book-terms dd {
  margin: 4px 0 0;
  font-size: 10.5px;
  line-height: 1.7;
  color: rgba(201,233,228,.54);
}
.ca-book-check {
  padding: 9px 11px;
  border: 1px solid rgba(127,247,228,.12);
  border-radius: 5px;
  background: rgba(4,14,18,.3);
}
.ca-book-check summary {
  display: flex;
  align-items: baseline;
  gap: 8px;
  cursor: pointer;
  list-style: none;
  font-size: 11px;
  line-height: 1.7;
  color: rgba(232,251,247,.72);
}
.ca-book-check summary::-webkit-details-marker { display: none; }
.ca-book-check summary > span {
  flex: none;
  font-family: var(--mono);
  font-size: 8px;
  color: var(--ca-accent);
  opacity: .75;
}
.ca-book-check[open] summary { color: rgba(232,251,247,.9); }
.ca-book-check p {
  margin: 9px 0 0 38px;
  font-size: 11px;
  line-height: 1.8;
  color: rgba(201,233,228,.62);
}
.ca-book-foot {
  margin-top: 22px;
  padding-top: 13px;
  border-top: 1px solid rgba(127,247,228,.1);
  font-family: var(--mono);
  font-size: 7px;
  line-height: 1.7;
  color: rgba(201,233,228,.28);
}

.ca-book-model-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 11px; }
.ca-book-model-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  width: auto;
  margin-top: 0;
  padding: 8px 10px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 28%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--ca-accent) 5%, transparent);
  color: rgba(232,251,247,.72);
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: .03em;
  text-align: left;
  cursor: pointer;
  transition: .2s ease;
}
.ca-book-model-btn:hover,
.ca-book-model-btn:focus-visible {
  border-color: var(--ca-accent);
  color: var(--ca-accent);
  background: color-mix(in srgb, var(--ca-accent) 10%, transparent);
  outline: none;
}
.ca-book-model-btn > span {
  flex: none;
  padding: 2px 5px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 38%, transparent);
  border-radius: 3px;
  color: var(--ca-accent);
  font-size: 6px;
}
.ca-book-model-btn > svg { margin-left: auto; opacity: .55; }

.ca-model-backdrop {
  position: absolute;
  inset: 0;
  z-index: 50;
  background: #02070a;
  animation: caStudyFade .3s ease both;
}
.ca-model-panel {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #02070a;
}
.ca-model-stage { position: absolute; inset: 0; z-index: 1; }
.ca-model-stage .cm-canvas { display: block; width: 100%; height: 100%; cursor: grab; }
.ca-model-stage .cm-canvas:active { cursor: grabbing; }
.ca-model-stage .cm-label-layer { position: absolute; inset: 0; z-index: 2; pointer-events: none; overflow: hidden; }
.ca-model-stage .cm-label { position: absolute; left: 0; top: 0; display: flex; align-items: center; gap: 7px; white-space: nowrap; filter: drop-shadow(0 2px 8px rgba(0,0,0,.8)); transition: opacity .25s ease; }
.ca-model-stage .cm-label i { width: 5px; height: 5px; flex: none; border-radius: 50%; background: var(--ca-accent); box-shadow: 0 0 9px var(--ca-accent); }
.ca-model-stage .cm-label span { display: flex; flex-direction: column; gap: 1px; padding: 3px 7px; border: 1px solid rgba(127,247,228,.14); border-radius: 3px; background: rgba(2,8,11,.58); backdrop-filter: blur(6px); }
.ca-model-stage .cm-label b { font-size: 11px; font-weight: 400; letter-spacing: .04em; color: rgba(240,255,251,.92); }
.ca-model-stage .cm-label em { font-family: var(--mono); font-size: 7px; font-style: normal; letter-spacing: .07em; color: rgba(204,235,228,.4); }
.ca-model-head {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 4;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  padding: 24px 28px 30px;
  background: linear-gradient(180deg, rgba(2,7,10,.82), transparent);
  pointer-events: none;
}
.ca-model-head > div { min-width: 0; }
.ca-model-eyebrow { font-family: var(--mono); font-size: 8px; letter-spacing: .26em; color: var(--ca-accent); opacity: .8; }
.ca-model-head h2 { margin: 8px 0 6px; font-family: var(--serif); font-size: clamp(26px, 3.2vw, 42px); font-weight: 300; letter-spacing: .03em; color: rgba(238,251,247,.95); }
.ca-model-meta { font-family: var(--mono); font-size: 8px; letter-spacing: .06em; color: rgba(204,235,228,.4); }
.ca-model-head .ca-iconbtn { pointer-events: auto; flex: none; }
.ca-model-caption {
  position: absolute;
  left: 28px;
  bottom: 28px;
  z-index: 4;
  width: min(500px, 48vw);
  padding: 18px 20px;
  border: 1px solid rgba(127,247,228,.14);
  border-radius: 7px;
  background: rgba(2,10,13,.66);
  backdrop-filter: blur(14px);
}
.ca-model-en { font-family: var(--mono); font-size: 9px; letter-spacing: .18em; color: var(--ca-accent); opacity: .7; }
.ca-model-caption p { margin: 10px 0 13px; font-size: 14px; line-height: 1.9; color: rgba(204,235,228,.7); }
.ca-model-caption ul { display: flex; flex-direction: column; gap: 6px; margin: 0; padding: 0; list-style: none; }
.ca-model-caption li { position: relative; padding-left: 16px; font-size: 12.5px; line-height: 1.75; color: rgba(204,235,228,.6); }
.ca-model-caption li::before { content: ""; position: absolute; left: 0; top: .62em; width: 7px; height: 1px; background: var(--ca-accent); opacity: .6; }
.ca-model-hint { position: absolute; right: 28px; bottom: 78px; z-index: 4; font-family: var(--mono); font-size: 7px; letter-spacing: .08em; color: rgba(204,235,228,.3); pointer-events: none; }
.ca-model-actions { position: absolute; right: 28px; bottom: 28px; z-index: 4; display: flex; gap: 6px; }
.ca-model-actions button { height: 31px; padding: 0 11px; border: 1px solid rgba(127,247,228,.18); border-radius: 999px; background: rgba(2,10,13,.55); color: rgba(232,251,247,.7); font-family: var(--mono); font-size: 8px; cursor: pointer; backdrop-filter: blur(10px); }
.ca-model-actions button:hover { border-color: var(--ca-accent); color: var(--ca-accent); }
.ca-model-error { position: absolute; inset: 0; z-index: 8; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; padding: 30px; background: rgba(2,7,10,.9); text-align: center; }
.ca-model-error b { font-family: var(--serif); font-size: 28px; font-weight: 400; color: #ffe8f2; }
.ca-model-error span { max-width: 520px; font-size: 12px; line-height: 1.8; color: rgba(204,235,228,.55); }

@media (max-width: 880px) {
  .ca-model-head { padding: 16px 16px 24px; }
  .ca-model-head h2 { font-size: 25px; }
  .ca-model-caption { left: 16px; right: 16px; bottom: 72px; width: auto; padding: 12px 14px; }
  .ca-model-caption p { display: none; }
  .ca-model-caption ul { display: none; }
  .ca-model-hint { display: none; }
  .ca-model-actions { right: 16px; bottom: 18px; }
  .ca-model-head .ca-iconbtn { width: 32px; height: 32px; }
  .ca-model-stage .cm-label b { font-size: 9px; }
  .ca-model-stage .cm-label em { display: none; }
  .ca-intro { overflow-y: auto; align-items: start; padding: 28px 16px 48px; }
  .ca-intro-quick { grid-template-columns: 1fr; max-width: 340px; margin-top: 20px; gap: 6px; }
  .ca-intro-quick > div { flex-direction: row; align-items: center; gap: 10px; padding: 9px 11px; text-align: left; }
  .ca-intro-actions { flex-wrap: wrap; gap: 10px; margin-top: 18px; }
  .ca-guide-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 18px; }
  .ca-guide-title { font-size: 26px !important; }
  .ca-guide-title kbd { min-width: 27px; height: 27px; font-size: 12px; }
  .ca-guide-mock-body { padding: 10px 12px 13px; }
  .ca-guide-mock-body p { font-size: 11px; }
  .ca-guide-copy { gap: 13px; }
  .ca-guide-block p { font-size: 11px; }
  .ca-intro-count { display: none; }
  .ca-controls-grid { grid-template-columns: 1fr; gap: 16px; margin-top: 18px; }
  .ca-intro-keymap { grid-template-columns: 1fr 1fr; margin-top: 14px; }
  .ca-intro-keymap > div { padding: 6px 7px; }
  .ca-book-mock-row { font-size: 7.5px; }
  .ca-intro-controls .ca-intro-actions { margin-top: 14px; }
}
@media (max-width: 520px) {
  .ca-model-head h2 { font-size: 22px; }
  .ca-model-caption { bottom: 62px; }
  .ca-model-actions { left: 16px; right: auto; }
}

.ca-manual-backdrop {
  position: absolute;
  inset: 0;
  z-index: 60;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(1,4,8,.82);
  backdrop-filter: blur(10px);
}
.ca-manual-panel {
  width: min(980px, 100%);
  max-height: calc(100% - 16px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(127,247,228,.22);
  border-radius: 10px;
  background:
    radial-gradient(ellipse at 100% 0%, rgba(127,247,228,.08), transparent 45%),
    linear-gradient(165deg, rgba(6,18,23,.98), rgba(2,7,10,.99));
  box-shadow: 0 32px 100px rgba(0,0,0,.65);
}
.ca-manual-head { flex: none; display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; padding: 22px 24px 18px; border-bottom: 1px solid rgba(127,247,228,.14); }
.ca-manual-eyebrow { font-family: "SFMono-Regular", Consolas, monospace; font-size: 8px; letter-spacing: .18em; color: var(--ca-accent); opacity: .7; }
.ca-manual-head h2 { margin: 8px 0 5px; font-family: "Songti SC", "Noto Serif SC", "STSong", SimSun, serif; font-size: 31px; font-weight: 300; letter-spacing: .04em; }
.ca-manual-head p { margin: 0; font-size: 12px; line-height: 1.7; color: rgba(201,233,228,.52); }
.ca-manual-scroll { flex: 1; overflow-y: auto; padding: 0 24px 24px; scrollbar-width: thin; scrollbar-color: rgba(127,247,228,.2) transparent; }
.ca-manual-section { padding: 20px 0; border-bottom: 1px solid rgba(127,247,228,.1); }
.ca-manual-no { margin-bottom: 7px; font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; letter-spacing: .14em; color: var(--ca-accent); opacity: .6; }
.ca-manual-section h3 { margin: 0 0 10px; font-family: "Songti SC", "Noto Serif SC", "STSong", SimSun, serif; font-size: 22px; font-weight: 400; }
.ca-manual-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 7px; }
.ca-manual-grid > div { padding: 10px 11px; border: 1px solid rgba(127,247,228,.11); border-radius: 4px; background: rgba(127,247,228,.025); }
.ca-manual-grid b { display: block; margin-bottom: 3px; font-size: 11.5px; font-weight: 500; color: rgba(238,251,247,.9); }
.ca-manual-grid p { margin: 0; font-size: 10.5px; line-height: 1.65; color: rgba(201,233,228,.52); }
.ca-manual-grid em { display: block; margin-top: 5px; font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; line-height: 1.5; font-style: normal; color: rgba(255,216,153,.72); }
.ca-manual-stages { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.ca-manual-target { margin-top: 7px; padding: 11px 12px; border: 1px solid rgba(255,216,153,.28); border-radius: 4px; background: rgba(255,216,153,.05); }
.ca-manual-target > b { display: block; margin-bottom: 6px; font-family: "SFMono-Regular", Consolas, monospace; font-size: 8px; font-weight: 400; letter-spacing: .06em; color: #ffd899; }
.ca-manual-target > div { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 7px; }
.ca-manual-target code { padding: 3px 5px; border: 1px solid rgba(255,216,153,.3); border-radius: 3px; color: #ffd899; font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; }
.ca-manual-target p { margin: 0; font-size: 10.5px; line-height: 1.65; color: rgba(255,232,190,.74); }
.ca-manual-note { margin: 8px 0 0; font-size: 10.5px; line-height: 1.7; color: rgba(201,233,228,.5); }
.ca-manual-keys { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px; }
.ca-manual-keys > span { display: flex; align-items: center; flex-wrap: wrap; gap: 5px; min-height: 35px; padding: 7px 8px; border: 1px solid rgba(127,247,228,.1); border-radius: 4px; font-size: 9px; color: rgba(201,233,228,.5); }
.ca-manual-keys kbd { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 4px; border: 1px solid rgba(127,247,228,.35); border-radius: 3px; color: var(--ca-accent); font-family: "SFMono-Regular", Consolas, monospace; font-size: 8px; }
.ca-manual-foot { display: flex; justify-content: flex-end; padding-top: 18px; }
.ca-manual-close { padding: 9px 13px; border: 1px solid rgba(127,247,228,.35); border-radius: 4px; background: rgba(127,247,228,.08); color: var(--ca-accent); font-family: "SFMono-Regular", Consolas, monospace; font-size: 9px; }
.ca-manual-close:hover { background: var(--ca-accent); color: #03110f; }
.ca-intro {
  position: absolute;
  inset: 0;
  z-index: 12;
  display: grid;
  place-items: center;
  padding: 24px;
  overflow-y: auto;
  cursor: pointer;
  background:
    radial-gradient(ellipse at 50% 58%, rgba(2,8,12,.08) 0%, rgba(2,7,11,.62) 52%, rgba(1,4,8,.95) 100%);
  backdrop-filter: blur(2px);
  animation: caIntroIn .7s ease both;
  transition: opacity .6s ease;
}
@keyframes caIntroIn { from { opacity: 0; } to { opacity: 1; } }
.ca-intro.is-out { animation: caIntroOut .65s cubic-bezier(.4,0,.2,1) both; pointer-events: none; }
@keyframes caIntroOut { to { opacity: 0; visibility: hidden; } }
.ca-intro.is-out .ca-intro-inner { transform: scale(1.035); opacity: 0; transition: transform .65s ease, opacity .5s ease; }
.ca-intro-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(127,247,228,.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(127,247,228,.055) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse at center, #000 0%, transparent 68%);
  animation: caGridDrift 18s linear infinite;
  pointer-events: none;
}
@keyframes caGridDrift { from { background-position: 0 0, 0 0; } to { background-position: 0 72px, 72px 0; } }
.ca-intro-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 960px;
  transition: transform .65s ease, opacity .5s ease;
}
.ca-intro-eyebrow {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 9px;
  letter-spacing: .48em;
  color: var(--ca-accent);
  opacity: .8;
  text-transform: uppercase;
}
.ca-intro h2 {
  margin: 26px 0 10px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: .12em;
  font-family: "Helvetica Neue", "Arial Narrow", "Segoe UI", sans-serif;
  font-size: clamp(66px, 13.5vw, 176px);
  font-weight: 200;
  line-height: .82;
  letter-spacing: .015em;
  color: #d9eee8;
}
.ca-intro-fill {
  background: linear-gradient(115deg, #c8e4dc 8%, #7fcfc2 46%, #a892c0 92%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.ca-intro-outline {
  color: transparent;
  -webkit-text-stroke: 1px rgba(220,242,235,.32);
}
.ca-intro-slash { color: var(--ca-accent); font-weight: 100; opacity: .62; }
.ca-intro-cn {
  margin-top: 22px;
  margin-left: .6em;
  font-family: "Songti SC", "Noto Serif SC", "Source Han Serif SC", "STSong", SimSun, serif;
  font-size: 21px;
  font-weight: 300;
  letter-spacing: .6em;
  color: rgba(220,242,235,.74);
}
.ca-intro-sub {
  margin-top: 12px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 9px;
  letter-spacing: .3em;
  color: rgba(201,233,228,.4);
}
.ca-enter {
  margin-top: 32px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 13px 24px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--ca-accent) 55%, transparent);
  background: color-mix(in srgb, var(--ca-accent) 6%, transparent);
  color: rgba(220,242,235,.86);
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 9px;
  letter-spacing: .3em;
  cursor: pointer;
  transition: background .3s ease, color .3s ease, box-shadow .3s ease;
  backdrop-filter: blur(8px);
}
.ca-enter:hover,
.ca-enter:focus-visible {
  background: var(--ca-accent);
  color: #03110f;
  box-shadow: 0 0 32px color-mix(in srgb, var(--ca-accent) 45%, transparent);
  outline: none;
}
.ca-intro-step { animation: caIntroStep .5s cubic-bezier(.16,.84,.24,1) both; }
.ca-intro-welcome { margin-bottom: 15px; font-family: "Songti SC", "Noto Serif SC", "STSong", SimSun, serif; font-size: 19px; font-weight: 300; letter-spacing: .24em; color: rgba(238,251,247,.88); }
@keyframes caIntroStep { from { opacity: 0; transform: translateY(12px); filter: blur(5px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
.ca-intro-quick { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; max-width: 620px; margin: 28px auto 0; }
.ca-intro-quick > div { display: flex; flex-direction: column; align-items: center; gap: 5px; padding: 12px 10px; border: 1px solid rgba(127,247,228,.13); border-radius: 6px; background: rgba(2,10,13,.36); }
.ca-intro-quick kbd { display: inline-grid; place-items: center; min-width: 23px; height: 23px; padding: 0 5px; border: 1px solid rgba(127,247,228,.45); border-radius: 4px; color: var(--ca-accent); font-family: "SFMono-Regular", Consolas, monospace; font-size: 10px; }
.ca-intro-quick b { font-size: 12px; font-weight: 400; letter-spacing: .08em; color: rgba(232,251,247,.88); }
.ca-intro-quick em { font-family: "SFMono-Regular", Consolas, monospace; font-size: 8px; line-height: 1.6; font-style: normal; color: rgba(201,233,228,.34); }
.ca-intro-actions { display: flex; align-items: center; justify-content: center; gap: 16px; margin-top: 22px; }
.ca-intro-actions .ca-enter { margin-top: 0; }
.ca-intro-count { font-family: "SFMono-Regular", Consolas, monospace; font-size: 8px; letter-spacing: .18em; color: rgba(201,233,228,.3); }
.ca-intro-secondary { padding: 10px 15px; border: 0; background: transparent; color: rgba(201,233,228,.55); font-family: "SFMono-Regular", Consolas, monospace; font-size: 9px; letter-spacing: .06em; cursor: pointer; }
.ca-intro-secondary:hover { color: var(--ca-accent); }
.ca-intro-inner.is-guide { max-width: 1060px; text-align: left; }
.ca-intro-inner.is-guide .ca-intro-eyebrow { text-align: center; }
.ca-guide-title { display: block !important; justify-content: center !important; margin: 14px 0 0 !important; text-align: center; font-family: "Songti SC", "Noto Serif SC", "STSong", SimSun, serif !important; font-size: clamp(27px, 3vw, 38px) !important; font-weight: 300 !important; letter-spacing: .04em !important; color: rgba(238,251,247,.95) !important; }
.ca-guide-title kbd { display: inline-grid; place-items: center; min-width: 32px; height: 32px; padding: 0 8px; margin: 0 4px; border: 1px solid rgba(127,247,228,.45); border-radius: 5px; background: rgba(127,247,228,.05); color: var(--ca-accent); font-family: "SFMono-Regular", Consolas, monospace; font-size: 14px; vertical-align: 2px; }
.ca-guide-grid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: 26px; align-items: start; margin: 24px 0 4px; }
.ca-guide-mock { border: 1px solid rgba(127,247,228,.18); border-radius: 7px; background: linear-gradient(165deg, rgba(6,19,24,.94), rgba(2,8,11,.96)); box-shadow: 0 24px 60px rgba(0,0,0,.4); overflow: hidden; }
.ca-guide-mock-head { display: flex; align-items: center; gap: 9px; padding: 11px 14px; border-bottom: 1px solid rgba(127,247,228,.12); font-family: "SFMono-Regular", Consolas, monospace; }
.ca-guide-mock-head span { font-size: 6px; letter-spacing: .2em; color: rgba(127,247,228,.55); }
.ca-guide-mock-head b { font-size: 13px; font-weight: 400; letter-spacing: .06em; color: rgba(238,251,247,.9); }
.ca-guide-mock-head kbd { margin-left: auto; display: grid; place-items: center; width: 21px; height: 21px; border: 1px solid rgba(127,247,228,.35); border-radius: 3px; color: var(--ca-accent); font-family: "SFMono-Regular", Consolas, monospace; font-size: 9px; }
.ca-guide-mock-body { padding: 14px 16px 16px; }
.ca-guide-mini-label { margin: 10px 0 4px; font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; letter-spacing: .12em; color: var(--ca-accent); opacity: .72; }
.ca-guide-mock-body p { margin: 0; font-size: 12px; line-height: 1.75; color: rgba(201,233,228,.58); }
.ca-guide-copy { display: flex; flex-direction: column; gap: 16px; padding-top: 2px; }
.ca-guide-block { display: grid; grid-template-columns: 27px minmax(0, 1fr); gap: 9px; }
.ca-guide-block > span { width: 23px; height: 23px; display: grid; place-items: center; border: 1px solid rgba(127,247,228,.3); border-radius: 50%; color: var(--ca-accent); font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; }
.ca-guide-block b { display: block; margin-bottom: 4px; font-size: 13px; font-weight: 500; letter-spacing: .04em; color: rgba(238,251,247,.9); }
.ca-guide-block p { margin: 0; font-size: 12px; line-height: 1.78; color: rgba(201,233,228,.54); }
.ca-usage-grid { display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(0, .96fr); gap: 14px; margin: 20px 0 0; text-align: left; }
.ca-usage-col { padding: 13px 14px; border: 1px solid rgba(127,247,228,.16); border-radius: 6px; background: rgba(2,10,13,.42); }
.ca-usage-col-lesson { border-color: rgba(255,216,153,.24); background: rgba(255,216,153,.035); }
.ca-usage-col-title { margin-bottom: 7px; font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; letter-spacing: .15em; color: rgba(127,247,228,.62); }
.ca-usage-col-lesson .ca-usage-col-title { color: rgba(255,216,153,.72); }
.ca-usage-step { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 8px; padding: 7px 0; border-top: 1px solid rgba(127,247,228,.08); }
.ca-usage-step > span { padding-top: 2px; font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; color: var(--ca-accent); opacity: .62; }
.ca-usage-step b { display: block; margin-bottom: 2px; font-size: 11.5px; font-weight: 500; color: rgba(238,251,247,.9); }
.ca-usage-step p { margin: 0; font-size: 10.5px; line-height: 1.65; color: rgba(201,233,228,.52); }
.ca-usage-target { padding: 10px 11px; border: 1px solid rgba(255,216,153,.26); border-radius: 4px; background: rgba(255,216,153,.05); }
.ca-usage-target > b { display: block; margin-bottom: 6px; font-family: "SFMono-Regular", Consolas, monospace; font-size: 8px; font-weight: 400; letter-spacing: .06em; color: #ffd899; }
.ca-usage-target p { margin: 0 0 7px; font-size: 10.5px; line-height: 1.65; color: rgba(255,232,190,.72); }
.ca-usage-target > div { display: flex; flex-wrap: wrap; gap: 4px; margin: 6px 0 8px; }
.ca-usage-target code { padding: 3px 5px; border: 1px solid rgba(255,216,153,.3); border-radius: 3px; color: #ffd899; font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; }
.ca-usage-note { margin: 9px 0 0; font-size: 10.5px; line-height: 1.65; color: rgba(201,233,228,.52); }
.ca-usage-link { display: inline-block; margin-top: 9px; padding: 0 0 2px; border: 0; border-bottom: 1px solid rgba(255,216,153,.5); background: transparent; cursor: pointer; font-family: "SFMono-Regular", Consolas, monospace; font-size: 9px; color: #ffd899; }
.ca-usage-link:hover { border-bottom-color: #ffd899; }
.ca-usage-update { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px; margin-top: 12px; padding: 9px 11px; border: 1px solid rgba(127,247,228,.12); border-radius: 4px; background: rgba(127,247,228,.035); text-align: left; }
.ca-usage-update b { flex: none; font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; font-weight: 400; letter-spacing: .12em; color: var(--ca-accent); }
.ca-usage-update span { font-size: 10.5px; line-height: 1.6; color: rgba(201,233,228,.52); }
.ca-usage-rules { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-top: 10px; text-align: left; }
.ca-usage-rule { padding: 9px 10px; border: 1px solid rgba(127,247,228,.12); border-radius: 4px; background: rgba(2,10,13,.3); }
.ca-usage-rule > span { display: block; margin-bottom: 4px; font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; color: var(--ca-accent); opacity: .6; }
.ca-usage-rule b { display: block; margin-bottom: 3px; font-size: 11px; font-weight: 500; color: rgba(238,251,247,.9); }
.ca-usage-rule p { margin: 0; font-size: 9.5px; line-height: 1.55; color: rgba(201,233,228,.48); }
.ca-usage-rule em { display: block; margin-top: 5px; font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; line-height: 1.5; font-style: normal; color: rgba(255,216,153,.72); }
.ca-usage-notes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-top: 6px; text-align: left; }
.ca-usage-notes > div { padding: 8px 10px; border-left: 1px solid rgba(127,247,228,.22); background: rgba(127,247,228,.025); }
.ca-usage-notes b { display: block; margin-bottom: 3px; font-size: 10px; font-weight: 500; color: rgba(238,251,247,.84); }
.ca-usage-notes p { margin: 0; font-size: 9px; line-height: 1.55; color: rgba(201,233,228,.44); }
.ca-intro-inner.is-guide .ca-intro-actions { margin-top: 20px; }
.ca-controls-grid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr); gap: 26px; align-items: start; margin: 22px 0 0; }
.ca-book-mock-body { padding: 8px 12px 10px; }
.ca-book-mock-row { display: grid; grid-template-columns: 22px minmax(0, 1fr) auto; gap: 7px; align-items: center; padding: 4px 6px; border: 1px solid transparent; border-radius: 3px; font-family: "SFMono-Regular", Consolas, monospace; font-size: 8px; color: rgba(201,233,228,.42); }
.ca-book-mock-row > span { color: var(--ca-accent); opacity: .6; font-size: 7px; }
.ca-book-mock-row > em { font-style: normal; font-size: 7px; color: rgba(201,233,228,.26); }
.ca-book-mock-row.is-active { border-color: rgba(127,247,228,.22); background: rgba(127,247,228,.06); color: rgba(238,251,247,.82); }
.ca-book-mock-section { display: flex; align-items: center; gap: 7px; margin: 8px 0 2px 26px; padding: 7px 8px; border-left: 1px solid rgba(127,247,228,.3); font-family: "SFMono-Regular", Consolas, monospace; font-size: 7px; line-height: 1.5; color: rgba(201,233,228,.5); }
.ca-book-mock-section > span { color: var(--ca-accent); opacity: .7; }
.ca-book-mock-section > em { margin-left: auto; padding: 2px 4px; border: 1px solid rgba(127,247,228,.24); border-radius: 2px; font-style: normal; font-size: 6px; color: var(--ca-accent); white-space: nowrap; }
.ca-intro-keymap { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-top: 18px; }
.ca-intro-keymap > div { display: flex; flex-wrap: wrap; align-items: center; gap: 5px; padding: 7px 8px; border: 1px solid rgba(127,247,228,.11); border-radius: 4px; background: rgba(2,10,13,.3); }
.ca-intro-keymap kbd { display: inline-grid; place-items: center; min-width: 20px; height: 20px; padding: 0 4px; border: 1px solid rgba(127,247,228,.35); border-radius: 3px; color: var(--ca-accent); font-family: "SFMono-Regular", Consolas, monospace; font-size: 8px; }
.ca-intro-keymap b { font-size: 9px; font-weight: 400; color: rgba(201,233,228,.55); }
.ca-intro-controls .ca-intro-actions { margin-top: 18px; }
.ca-intro-load {
  margin: 28px auto 0;
  width: 210px;
  height: 1px;
  background: rgba(201,233,228,.15);
  overflow: hidden;
}
.ca-intro-load span {
  display: block;
  width: 100%;
  height: 100%;
  background: var(--ca-accent);
  transform-origin: left center;
  animation: caLoad 2.8s cubic-bezier(.3,.6,.4,1) both;
  box-shadow: 0 0 10px var(--ca-accent);
}
@keyframes caLoad { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.ca-intro-meta {
  margin-top: 15px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  letter-spacing: .24em;
  color: rgba(201,233,228,.3);
}
.ca-intro-skip {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 26px;
  z-index: 2;
  text-align: center;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
  font-size: 7px;
  letter-spacing: .26em;
  color: rgba(201,233,228,.35);
}

.ca-error {
  position: absolute;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  padding: 26px;
  background: rgba(1,4,8,.82);
  backdrop-filter: blur(8px);
}
.ca-error-card {
  max-width: 520px;
  padding: 30px 32px;
  border: 1px solid rgba(255,116,183,.26);
  background: rgba(5,11,16,.86);
  box-shadow: 0 24px 80px rgba(0,0,0,.6);
}
.ca-error-no {
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 8px;
  letter-spacing: .28em;
  color: #ff8fc1;
}
.ca-error-card h2 {
  margin: 14px 0 12px;
  font-family: "Songti SC", "Noto Serif SC", "STSong", SimSun, serif;
  font-size: 28px;
  font-weight: 400;
  color: #ffeaf4;
}
.ca-error-card p { margin: 0; font-size: 13px; line-height: 1.85; color: rgba(232,251,247,.66); }
.ca-error-detail {
  margin-top: 16px;
  padding: 10px 12px;
  background: rgba(255,116,183,.06);
  border-left: 2px solid rgba(255,116,183,.5);
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 9px;
  line-height: 1.6;
  color: rgba(255,190,217,.65);
  overflow-wrap: anywhere;
}
.ca-error-actions { display: flex; align-items: center; gap: 12px; margin-top: 20px; }

@media (max-width: 1180px) {
  .ca-spine { display: none; }
  .ca-topreadout { display: none; }
  .ca-caption { width: min(540px, 58vw); }
  .ca-readout { display: none; }
}
@media (max-width: 880px) {
  .ca-intro { align-items: start; padding-top: 18px; padding-bottom: 24px; }
  .ca-manual-backdrop { padding: 0; }
  .ca-manual-panel { width: 100%; height: 100%; max-height: none; border: 0; border-radius: 0; }
  .ca-manual-head { padding: 18px 18px 14px; }
  .ca-manual-head h2 { font-size: 26px; }
  .ca-manual-scroll { padding: 0 16px 20px; }
  .ca-manual-grid, .ca-manual-stages { grid-template-columns: 1fr; }
  .ca-manual-keys { grid-template-columns: 1fr 1fr; }
  .ca-ui { padding: 16px 16px 14px; }
  .ca-brand-mark { width: 31px; height: 31px; }
  .ca-wordmark { font-size: 9px; letter-spacing: .26em; }
  .ca-wordmark-cn { display: none; }
  .ca-topright { gap: 8px; }
  .ca-help-btn { width: 31px; height: 31px; }
  .ca-study-toggle {
    width: 34px;
    height: 34px;
    padding: 0;
    justify-content: center;
    border-radius: 50%;
  }
  .ca-study-toggle span { display: none; }
  .ca-book-btn { width: 33px; height: 33px; }
  .ca-counter { font-size: 8px; }
  .ca-counter b { font-size: 14px; }
  .ca-iconbtn { width: 33px; height: 33px; }
  .ca-caption { width: min(590px, calc(100% - 8px)); bottom: 44px; }
  .ca-caption h1 { font-size: clamp(32px, 7.4vw, 44px); margin-top: 12px; }
  .ca-en { margin-bottom: 12px; font-size: 8px; }
  .ca-body { font-size: 12px; line-height: 1.8; max-width: 100%; }
  .ca-facts { gap: 18px; margin-top: 14px; padding-top: 11px; }
  .ca-fact-k { font-size: 7px; }
  .ca-fact-v { font-size: 11px; }
  .ca-rail { display: none; }
  .ca-footer { flex-wrap: wrap; gap: 9px 14px; padding-top: 10px; }
  .ca-auto { min-width: 0; flex: 1; order: 1; }
  .ca-hint { display: none; }
  .ca-controls { order: 2; margin-left: auto; gap: 5px; }
  .ca-lum { height: 31px; padding: 0 6px; gap: 4px; }
  .ca-lum input[type="range"] { width: 42px; }
  .ca-lum-value { display: none; }
  .ca-ctrl { width: 31px; height: 31px; }
  .ca-ctrl-primary { width: 35px; height: 35px; }
  .ca-timeline { order: 3; flex-basis: 100%; min-width: 0; }
  .ca-intro h2 { font-size: clamp(56px, 17vw, 110px); }
  .ca-intro-cn { font-size: 17px; margin-top: 18px; }
  .ca-intro-sub { font-size: 8px; letter-spacing: .2em; }
  .ca-intro-eyebrow { font-size: 7px; letter-spacing: .3em; }
  .ca-intro-inner { max-width: 100%; }
  .ca-usage-grid { grid-template-columns: 1fr; gap: 10px; }
  .ca-usage-rules, .ca-usage-notes { grid-template-columns: 1fr 1fr; }
  .ca-usage-step p, .ca-usage-note, .ca-usage-update span { font-size: 11px; }
  .ca-intro-skip { bottom: 18px; font-size: 6px; }
  .ca-study-panel { width: 100%; }
  .ca-study-head { padding: 20px 18px 16px; }
  .ca-study-head h2 { font-size: 21px; }
  .ca-study-scroll { padding: 4px 18px 30px; }
  .ca-study-label > em { display: none; }
  .ca-concept { grid-template-columns: 1fr; gap: 5px; padding: 11px 0; }
  .ca-concept dt > span { font-size: 12px; }
  .ca-concept dd { font-size: 11.5px; }
  .ca-study-footer { margin-top: 24px; }
}
@media (max-width: 520px) {
  .ca-usage-rules, .ca-usage-notes { grid-template-columns: 1fr; }
  .ca-textbook-chip { width: 100%; min-height: 48px; gap: 8px; padding: 7px 9px; }
  .ca-textbook-chip-icon { width: 28px; height: 28px; }
  .ca-textbook-chip-top > b { font-size: 12px; }
  .ca-textbook-chip-top > em { font-size: 7.5px; }
  .ca-textbook-chip-sub { font-size: 7px; white-space: normal; }
  .ca-textbook-chip-key { display: none; }
  .ca-textbook-chip > svg { display: none; }
  .ca-study-meta { font-size: 7px; }
  .ca-study-objectives li,
  .ca-study-mechanism li,
  .ca-study-traps li { font-size: 11.5px; }
  .ca-book-backdrop { padding: 0; }
  .ca-book-panel { width: 100%; height: 100%; border-radius: 0; border: 0; }
  .ca-book-head { padding: 18px 18px 14px; }
  .ca-book-head h2 { font-size: 23px; margin: 6px 0; }
  .ca-book-body { display: flex; flex-direction: column; }
  .ca-book-nav {
    flex: none;
    display: flex;
    gap: 5px;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 8px 12px;
    border-right: 0;
    border-bottom: 1px solid rgba(127,247,228,.12);
  }
  .ca-book-navitem {
    flex: 0 0 164px;
    margin-bottom: 0;
    grid-template-columns: 38px minmax(0, 1fr);
  }
  .ca-book-navitem i { display: none; }
  .ca-book-main { flex: 1; padding: 18px 16px 26px; }
  .ca-book-chapterhead { gap: 12px; flex-wrap: wrap; }
  .ca-book-chapterhead h3 { font-size: 24px; }
  .ca-book-jump { order: 2; }
  .ca-book-section-head { gap: 8px; }
  .ca-book-section-no { width: 34px; }
  .ca-book-section-title { font-size: 13px; }
  .ca-book-section-body { padding-left: 42px; }
  .ca-book-terms { grid-template-columns: 1fr; }
  .ca-study-book-cta { margin-top: 12px; }
  .ca-study-book-cta-copy em { white-space: normal; line-height: 1.5; }
}
@media (max-height: 740px) {
  .ca-intro { align-items: start; padding-top: 16px; padding-bottom: 20px; }
  .ca-ui { padding-top: 16px; padding-bottom: 12px; }
  .ca-caption { bottom: 24px; }
  .ca-caption h1 { font-size: clamp(30px, 3.5vw, 44px); margin: 10px 0 6px; }
  .ca-body { display: none; }
  .ca-facts { margin-top: 10px; padding-top: 9px; }
  .ca-rail { gap: 8px; }
  .ca-intro h2 { font-size: clamp(58px, 10vw, 120px); }
  .ca-intro-cn { margin-top: 14px; }
  .ca-enter { margin-top: 20px; }
  .ca-intro-load { margin-top: 18px; }
  .ca-intro-meta { margin-top: 10px; }
  .ca-study-head { padding: 18px 22px 14px; }
  .ca-study-head h2 { margin: 6px 0; font-size: 22px; }
  .ca-study-scroll { padding-top: 0; }
  .ca-study-section { padding-top: 18px; }
  .ca-book-head { padding: 16px 20px 12px; }
  .ca-book-head h2 { font-size: 24px; margin: 5px 0; }
  .ca-book-main { padding-top: 16px; }
  .ca-book-chapterhead { padding-bottom: 14px; }
}
@media (prefers-reduced-motion: reduce) {
  .ca-root *,
  .ca-root *::before,
  .ca-root *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
`;
