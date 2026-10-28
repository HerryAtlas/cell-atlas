import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createTransportLessonUI } from '../../demo/transport-lesson-ui.js';

// A small DOM fixture for event-flow tests, not a browser/layout replacement.
// Read the real shell so missing IDs (including the restart button) fail here.
const shell = readFileSync(new URL('../../demo/models.html', import.meta.url), 'utf8')
  .replace('<!-- LESSON_SHELL -->', readFileSync(new URL('../../src/lesson-ui/shell.html', import.meta.url), 'utf8'));
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
  removeEventListener(type, listener) {
    this.listeners.set(type, (this.listeners.get(type) ?? []).filter((item) => item !== listener));
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

export function memoryStorage() {
  const values = new Map();
  return {
    values,
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
  };
}

export function fixture(t, storage = memoryStorage(), createUI = createTransportLessonUI) {
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
  ui = createUI({ getEngine: () => scene, getStorage: () => storage });
  t.after(() => {
    ui.dispose();
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
    get ui() { return ui; }, calls, get, click, input, check, storage,
    switchLesson: (create) => { ui.dispose(); ui = create({ getEngine: () => scene, getStorage: () => storage }); },
    next: () => get('#cmLessonNext'),
    body: () => get('#cmLessonBody'),
    stage: (index) => click(`[data-stage="${index}"]`),
  };
}
