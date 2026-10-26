import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { createTransportLessonUI } from '../demo/transport-lesson-ui.js';

// A small DOM fixture for event-flow tests, not a browser/layout replacement.
// Read the real shell so missing IDs (including the restart button) fail here.
const shell = readFileSync(new URL('../demo/models.html', import.meta.url), 'utf8');
const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

class Element {
  constructor(tag, attributes = {}) {
    this.tag = tag;
    this.attributes = { ...attributes };
    this.children = [];
    this.listeners = new Map();
    this.scrollCalls = [];
    this.value = attributes.value ?? '';
    this.disabled = 'disabled' in attributes;
    this.hidden = 'hidden' in attributes;
    this.checked = 'checked' in attributes;
    this.dataset = Object.fromEntries(Object.entries(attributes)
      .filter(([name]) => name.startsWith('data-'))
      .map(([name, value]) => [name.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase()), value]));
    this.classList = {
      contains: (name) => (this.attributes.class ?? '').split(/\s+/).includes(name),
      toggle: (name, force) => {
        const classes = new Set((this.attributes.class ?? '').split(/\s+/).filter(Boolean));
        const enabled = force ?? !classes.has(name);
        if (enabled) classes.add(name); else classes.delete(name);
        this.attributes.class = [...classes].join(' ');
        return enabled;
      },
    };
  }

  set innerHTML(html) { this.children = parse(html, this).children; }
  get textContent() { return this.children.map((child) => typeof child === 'string' ? child : child.textContent).join(''); }
  set textContent(text) { this.children = [String(text)]; }
  setAttribute(name, value) {
    this.attributes[name] = String(value);
    if (name === 'hidden' || name === 'disabled') this[name] = true;
  }
  getAttribute(name) { return this.attributes[name] ?? null; }
  addEventListener(type, listener) {
    if (!this.listeners.has(type)) this.listeners.set(type, []);
    this.listeners.get(type).push(listener);
  }
  dispatch(type) {
    if (type === 'click' && this.disabled) return;
    for (const listener of this.listeners.get(type) ?? []) listener({ target: this });
  }
  click() { this.dispatch('click'); }
  focus() { this.focused = true; }
  scrollIntoView(options) { this.scrollCalls.push({ ...options }); }
  remove() { this.parent.children = this.parent.children.filter((child) => child !== this); }
  querySelectorAll(selector) {
    const found = [];
    for (const child of this.children) {
      if (typeof child === 'string') continue;
      if (matches(child, selector)) found.push(child);
      found.push(...child.querySelectorAll(selector));
    }
    return found;
  }
  querySelector(selector) { return this.querySelectorAll(selector)[0] ?? null; }
}

function matches(element, selector) {
  if (selector.startsWith('#')) return element.attributes.id === selector.slice(1);
  if (selector.startsWith('.')) return element.classList.contains(selector.slice(1));
  const attribute = selector.match(/^\[([^=\]]+)(?:="([^"]*)")?\]$/);
  if (attribute) return attribute[1] in element.attributes
    && (attribute[2] === undefined || element.attributes[attribute[1]] === attribute[2]);
  return element.tag === selector;
}

function parse(html, target = new Element('#document')) {
  const stack = [target];
  target.children = [];
  for (const token of html.match(/<!--[\s\S]*?-->|<[^>]*>|[^<]+/g) ?? []) {
    if (token.startsWith('<!')) continue;
    if (token.startsWith('</')) { stack.pop(); continue; }
    if (!token.startsWith('<')) { stack.at(-1).children.push(token); continue; }
    const tag = token.match(/^<([\w-]+)/)?.[1];
    if (!tag) continue;
    const attributes = {};
    const attributeText = token.slice(tag.length + 1, -1);
    for (const match of attributeText.matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
      attributes[match[1]] = match[2] ?? match[3] ?? match[4] ?? '';
    }
    const element = new Element(tag, attributes);
    element.parent = stack.at(-1);
    element.parent.children.push(element);
    if (!voidTags.has(tag) && !token.endsWith('/>')) stack.push(element);
  }
  return target;
}

function fixture(t) {
  const document = parse(shell);
  document.getElementById = (id) => document.querySelector(`#${id}`);
  const priorDocument = globalThis.document;
  globalThis.document = document;
  const calls = { lesson: [], experiment: [] };
  let ui;
  const scene = {
    setAutoRotate() {}, setLabelsVisible() {}, clearHighlight() {},
    setLessonState: (state) => calls.lesson.push({ ...state }),
    setExperiment: (state) => calls.experiment.push({ ...state }),
    selectPick: (id) => ui.handlePick({ id }),
  };
  ui = createTransportLessonUI({ getEngine: () => scene });
  t.after(() => {
    ui.close();
    if (priorDocument === undefined) delete globalThis.document;
    else globalThis.document = priorDocument;
  });
  const get = (selector) => {
    const element = document.querySelector(selector);
    assert.ok(element, `Expected rendered element: ${selector}`);
    return element;
  };
  const click = (selector) => get(selector).click();
  const input = (id, value) => {
    const element = get(`#${id}`);
    element.value = String(value);
    element.dispatch('input');
  };
  const check = (value) => {
    const element = get('#lsnInhibitor');
    element.checked = value;
    element.dispatch('change');
  };
  return {
    ui, calls, get, click, input, check,
    next: () => get('#cmLessonNext'),
    body: () => get('#cmLessonBody'),
    stage: (index) => click(`[data-stage="${index}"]`),
  };
}

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
  assert.deepEqual(f.calls.lesson.at(-1), { active: true, step: 0 });
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
  assert.deepEqual(f.calls.lesson.at(-1), { active: true, step: 0 });
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
  assert.match(f.get('#cmLessonHistory').textContent, /第 2 轮.*已保留历史尝试.*刷新后不保留/);
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
