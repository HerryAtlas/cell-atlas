import assert from 'node:assert/strict';
import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { build } from 'esbuild';
import { serve } from './server.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const key = (id) => 'cell-atlas.lesson.' + id + '.progress';
const courses = {
  transport: { book: 3, section: 1, title: '跨膜运输', target: 'pump',
    structures: ['membrane', 'channel', 'pump', 'atp'],
    order: ['na-bind', 'phosphorylation', 'e2', 'k-bind', 'dephosphorylation'] },
  frap: { book: 1, section: 3, title: 'FRAP', target: 'bleach-region',
    structures: ['membrane', 'fluorophore', 'bleach-region', 'recovery-curve'],
    order: ['baseline', 'bleach', 'exchange', 'plateau'] },
};

export async function runPluginSmoke({ playwright, executablePath, channel, onProgress = () => {},
  outputDir = path.join(root, 'tests/browser-results') }) {
  const site = path.join(outputDir, 'plugin-host');
  await mkdir(site, { recursive: true });
  await build({ absWorkingDir: root, entryPoints: ['tests/browser/plugin-host.jsx'],
    outfile: path.join(site, 'host.js'), bundle: true, platform: 'browser', format: 'iife',
    define: { 'process.env.NODE_ENV': '"development"' } });
  await copyFile(path.join(root, 'client.js'), path.join(site, 'client.js'));
  await copyFile(path.join(root, 'tests/browser/plugin-host.html'), path.join(site, 'index.html'));
  const { server, url } = await serve(site);
  let browser;
  const results = [];
  try {
    browser = await playwright.chromium.launch({ headless: true,
      ...(executablePath ? { executablePath } : channel ? { channel } : {}) });
    for (const viewport of [{ width: 1440, height: 960 }, { width: 390, height: 844 }]) {
      const name = viewport.width > 900 ? 'desktop' : 'mobile';
      const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
      const external = [];
      await context.route('**/*', (route) => {
        const requested = route.request().url();
        if (requested.startsWith(url + '/')) return route.continue();
        external.push(requested); return route.abort();
      });
      const page = await context.newPage();
      page.setDefaultTimeout(15000);
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
      const host = page.locator('.ca-lesson-host');
      const body = host.locator('#cmLessonBody');
      const next = host.locator('#cmLessonNext');
      const click = (selector) => host.locator(selector).click();
      const text = async (locator, expected) => assert.match(await locator.innerText(), expected);
      const stage = (n) => click('[data-stage="' + n + '"]');
      const saved = (id) => page.evaluate((k) => localStorage.getItem(k), key(id));
      async function launch() {
        await page.locator('.ca-launcher').click();
        for (let i = 0; i < 4; i++) await page.locator('.ca-intro .ca-enter').click();
        await page.locator('.ca-intro').waitFor({ state: 'hidden' });
        // The DSH slot can sit inside transformed/clipped layout containers.
        // The top-layer dialog must still cover the whole viewport.
        if (name === 'desktop') await page.addStyleTag({ content:
          '#plugin-root { transform: translateX(180px); width: 70%; overflow: hidden; }' });
        // Fullscreen can be rejected in Electron hosts; the overlay must fall
        // back to an in-window immersive mode instead of hiding the control.
        const fullscreenButton = page.locator('.ca-root button[aria-label*="全屏"]');
        assert.equal(await fullscreenButton.count(), 1, 'Fullscreen control is always available');
        await fullscreenButton.click();
        await page.waitForFunction(() =>
          Boolean(document.fullscreenElement) ||
          document.querySelector('.ca-root')?.classList.contains('is-expanded'));
        const rootBox = await page.locator('.ca-root').boundingBox();
        assert.equal(Math.round(rootBox.x), 0, 'Expanded overlay escapes the slot container');
        assert.equal(Math.round(rootBox.width), viewport.width, 'Expanded overlay spans the viewport');
        const fullscreenTop = await page.locator('.ca-root').evaluate((el) => el.getBoundingClientRect().top);
        assert.ok(fullscreenTop <= 1, 'Fullscreen or expanded mode starts at the viewport top');
        await page.keyboard.press('Escape');
        await page.waitForFunction(() =>
          !document.fullscreenElement &&
          !document.querySelector('.ca-root')?.classList.contains('is-expanded'));
        // Simulate an Electron host that rejects the native API. The control
        // must still expand the overlay instead of doing nothing.
        await page.evaluate(() => {
          const root = document.querySelector('.ca-root');
          root.requestFullscreen = () => Promise.reject(new Error('blocked by host'));
        });
        await fullscreenButton.click();
        await page.waitForFunction(() =>
          document.querySelector('.ca-root')?.classList.contains('is-expanded'));
        await page.keyboard.press('Escape');
        await page.waitForFunction(() =>
          !document.querySelector('.ca-root')?.classList.contains('is-expanded'));
        // The installed Windows client has native controls above the web overlay.
        // Emulate that reserved strip in the browser host; mobile stays unchanged.
        if (name === 'desktop') await page.addStyleTag({ content:
          '.ca-root { --ca-host-top: 40px !important; }' });
        await page.keyboard.press('b');
        await page.locator('.ca-book-panel').waitFor({ state: 'visible' });
        await page.waitForFunction(() => getComputedStyle(document.querySelector('.ca-book-backdrop')).opacity === '1');
        await page.locator('.ca-book-panel').evaluate((el) => Promise.all(el.getAnimations().map((animation) => animation.finished)));
        const bookBox = await page.locator('.ca-book-panel').boundingBox();
        assert.ok(bookBox.y >= (name === 'desktop' ? 40 : 0));
        assert.ok(bookBox.y + bookBox.height <= viewport.height, 'Textbook stays inside available host height');
      }
      async function open(id) {
        const course = courses[id];
        await page.locator('.ca-book-navitem').nth(course.book).click();
        const section = page.locator('.ca-book-section').nth(course.section);
        if (await section.locator('.ca-book-section-head').getAttribute('aria-expanded') !== 'true') {
          await section.locator('.ca-book-section-head').click();
        }
        await section.locator('.ca-book-model-btn').filter({ hasText: course.title }).click();
        await page.locator('[data-open-lesson="' + id + '"]').click();
        await host.locator('#cmLesson').waitFor({ state: 'visible' });
        await page.waitForFunction(() => getComputedStyle(document.querySelector('.ca-model-backdrop')).opacity === '1');
        assert.equal(await page.locator('.ca-model-stage canvas').evaluate((el) => !!el.getContext('webgl2')), true);
        assert.equal(page.url(), url + '/');
        assert.equal(page.frames().length, 1, 'Lesson is in the plugin DOM, not a remote frame');
        assert.equal(await host.locator('#cmLessonBook').evaluate((el) => el.tagName), 'BUTTON');
        const helpBox = await host.locator('#cmLessonHelpToggle').boundingBox();
        assert.ok(helpBox.y >= (name === 'desktop' ? 40 : 0), 'Lesson actions clear native titlebar');
      }
      async function actualPick(id) {
        if (name === 'mobile') await click('#cmLessonPeek');
        const canvas = page.locator('.ca-model-stage canvas');
        const box = await canvas.boundingBox();
        assert.ok(box && box.width > 0 && box.height > 0);
        const x = id === 'transport' ? 0.65 : 0.59;
        const y = id === 'transport' ? 0.47 : 0.54;
        await canvas.click({ position: { x: box.width * x, y: box.height * y } });
        if (name === 'mobile') await page.waitForFunction(() => !document.querySelector('.ca-lesson-host .cm-lesson').classList.contains('is-peeking'));
      }
      async function targetConditions(id) {
        const input = host.locator(id === 'transport' ? '#lsnAtp' : '#lsnMobileFraction');
        await input.focus(); await page.keyboard.press('Home');
        if (id === 'frap') for (let i = 0; i < 4; i++) await page.keyboard.press('ArrowRight');
      }
      try {
        await page.goto(url + '/'); await launch();
        for (const id of ['transport', 'frap']) {
          const course = courses[id];
          onProgress('plugin ' + name + ': ' + id + ' recognition / mechanism');
          await open(id);
          await page.screenshot({ path: path.join(outputDir, 'plugin-' + name + '-' + id + '-entry.png') });
          await click('#cmLessonHelpToggle');
          await text(host.locator('#cmLessonHelp'), /目标实验/);
          await page.keyboard.press('Escape');
          assert.equal(await host.count(), 1, 'Escape only dismisses help');
          await actualPick(id); await text(body, /已认识 1 \/ 4/);
          for (const pick of course.structures) await click('[data-pick="' + pick + '"]');
          await next.click();
          for (let i = 1; i < course.order.length; i++) await click('[data-act="mech-next"]');
          await next.click();
          await click('[data-prediction="increase"]');
          await click('[data-act="run-experiment"]');
          assert.equal(await next.isDisabled(), true);
          await targetConditions(id); await click('[data-act="run-experiment"]');
          assert.equal(await next.isDisabled(), false);
          await text(host.locator('.cm-lsn-feedback'), /预测与/);
          await page.screenshot({ path: path.join(outputDir, 'plugin-' + name + '-' + id + '-experiment.png') });
          const runCount = await host.locator('[data-record]').count();
          onProgress('plugin ' + name + ': ' + id + ' reload / exercises');
          await page.reload(); await launch(); await open(id);
          assert.equal(await host.locator('[data-record]').count(), runCount);
          assert.equal(await next.isDisabled(), false);
          await next.click(); await actualPick(id);
          await text(body, /正确/);
          for (const step of course.order) await click('[data-order="' + step + '"]');
          await click('[data-act="order-check"]'); await click('[data-analysis="b"]');
          assert.equal(await host.locator('.cm-lsn-complete').count(), 1);
          await next.click(); await host.waitFor({ state: 'detached' });
          assert.equal(JSON.parse(await saved(id)).course.courseComplete, true);
          await page.locator('[data-open-lesson="' + id + '"]').click();
          await text(body, /已认识 4 \/ 4/);
          await click('#cmLessonRestart'); await page.keyboard.press('Escape');
          await text(body, /已认识 4 \/ 4/);
          // Internal book action must flush the save and return to the existing library.
          await click('#cmLessonBook');
          await page.locator('.ca-model-panel').waitFor({ state: 'detached' });
          assert.equal(page.url(), url + '/');
        }
        const transport = await saved('transport');
        await open('frap');
        await click('#cmLessonRestart'); await click('#cmLessonRestartConfirm');
        await stage(2); assert.equal(await host.locator('[data-record]').count(), 2);
        await click('#cmLessonHelpToggle'); await click('#cmLessonClear'); await click('#cmLessonClearConfirm');
        assert.equal(await saved('frap'), null);
        assert.equal(await saved('transport'), transport);
        await page.keyboard.press('Escape'); await host.waitFor({ state: 'detached' });
        await page.locator('.ca-model-actions button').filter({ hasText: '返回全书' }).click();
        await open('transport'); await text(body, /已认识 4 \/ 4/);
        await click('#cmLessonClose'); await host.waitFor({ state: 'detached' });
        await page.waitForFunction(() => document.querySelector('[data-open-lesson="transport"]') === document.activeElement);
        assert.equal(await page.locator('[data-open-lesson="transport"]').evaluate((el) => el === document.activeElement), true);
        assert.equal(await page.locator('#other-plugin button').innerText(), 'Host control must stay untouched');
        assert.deepEqual(external, [], 'No external server, CDN or Netlify dependency');
        assert.deepEqual(errors, [], 'No React, browser or WebGL errors');
        results.push({ target: 'plugin', viewport, passed: true });
        onProgress('plugin ' + name + ': passed');
      } catch (error) {
        await page.screenshot({ path: path.join(outputDir, 'plugin-' + name + '-failure.png') }).catch(() => {});
        throw new Error('plugin ' + name + ': ' + error.message, { cause: error });
      } finally { await context.close(); }
    }
    return results;
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const require = createRequire(import.meta.url);
  console.log(JSON.stringify(await runPluginSmoke({ playwright: require(process.env.PLAYWRIGHT_MODULE || 'playwright'),
    executablePath: process.env.BROWSER_EXECUTABLE, channel: process.env.BROWSER_CHANNEL,
    onProgress: console.log }), null, 2));
}
