import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { serve } from './server.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const FRAP_KEY = 'cell-atlas.lesson.frap.progress';
const TRANSPORT_KEY = 'cell-atlas.lesson.transport.progress';

export async function runFrapSmoke({ playwright, executablePath, channel,
  outputDir = path.join(root, 'tests/browser-results'), onProgress = () => {} }) {
  const { server, url } = await serve(path.join(root, 'docs'));
  let browser;
  const results = [];
  await mkdir(outputDir, { recursive: true });
  try {
    browser = await playwright.chromium.launch({ headless: true,
      ...(executablePath ? { executablePath } : channel ? { channel } : {}) });
    for (const viewport of [{ width: 1440, height: 960 }, { width: 390, height: 844 }]) {
      const name = viewport.width > 900 ? 'desktop' : 'mobile';
      const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
      const page = await context.newPage();
      const errors = [];
      page.setDefaultTimeout(12000);
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
      const click = (s) => page.locator(s).click();
      const body = page.locator('#cmLessonBody');
      const next = page.locator('#cmLessonNext');
      const stage = (i) => click('[data-stage="' + i + '"]');
      const text = async (locator, pattern) => assert.match(await locator.innerText(), pattern);
      const loaded = async () => {
        await page.locator('#cmLoading').waitFor({ state: 'hidden' });
        await page.locator('#cmLesson').waitFor({ state: 'visible' });
      };
      // Keyboard interaction exercises real range controls and input events.
      const range = async (id, arrows) => {
        await page.locator('#' + id).focus();
        await page.keyboard.press('Home');
        for (let i = 0; i < arrows; i++) await page.keyboard.press('ArrowRight');
      };
      const roi = async () => {
        if (name === 'mobile') await click('#cmLessonPeek');
        const canvas = page.locator('#modelStage canvas');
        const box = await canvas.boundingBox();
        assert.ok(box && box.y >= -1);
        // ROI projected from the fixed lesson camera. Use actual pointer/raycast.
        await canvas.click({ position: { x: box.width * (name === 'mobile' ? 0.59 : 0.57), y: box.height * 0.55 } });
        if (name === 'mobile') await page.waitForFunction(() => !document.querySelector('#cmLesson').classList.contains('is-peeking'));
      };
      try {
        onProgress('FRAP ' + name + ': entry, picking and mechanism');
        await page.goto(url + '/textbook.html?book=2');
        const links = page.locator('a[href*="model=frap"][href*="learn=1"]');
        assert.ok(await links.count() > 0, 'Membrane chapter links to FRAP lesson');
        await links.first().click(); await loaded();
        assert.equal(await page.locator('#modelStage canvas').evaluate((el) => !!el.getContext('webgl2')), true);
        await text(page.locator('#cmLessonTitle'), /膜的流动性与 FRAP/);
        await click('#cmLessonHelpToggle');
        await text(page.locator('#cmLessonHelp'), /40%.*100%/);
        await click('#cmLessonHelpClose');
        await page.screenshot({ path: path.join(outputDir, 'frap-' + name + '-recognize.png') });
        await roi(); await text(body, /已认识 1 \/ 4/);
        await text(page.locator('.cm-lsn-card'), /局部漂白区域/);
        for (const id of ['membrane', 'fluorophore', 'recovery-curve']) await click('[data-pick="' + id + '"]');
        await page.reload(); await loaded(); await text(body, /已认识 4 \/ 4/);
        await next.click();
        for (let i = 0; i < 3; i++) {
          await click('[data-act="mech-next"]');
          if (name === 'desktop') await page.screenshot({ path: path.join(outputDir, 'frap-mechanism-' + (i + 1) + '.png') });
        }
        await text(body, /04 \/ 04/);
        await page.reload(); await loaded();
        await text(body, /04 \/ 04/);
        await next.click();
        onProgress('FRAP ' + name + ': experiment, comparison and reload');
        assert.equal(await page.locator('[data-act="run-experiment"]').isDisabled(), true);
        await click('[data-prediction="increase"]');
        await click('[data-act="run-experiment"]');
        await text(page.locator('.cm-lsn-result'), /长期恢复平台 84/);
        assert.equal(await next.isDisabled(), true);
        await range('lsnMobileFraction', 4);
        await click('[data-act="run-experiment"]');
        await text(page.locator('.cm-lsn-result'), /长期恢复平台 52/);
        await text(page.locator('.cm-lsn-feedback'), /预测与结果不一致/);
        assert.equal(await next.isDisabled(), false);
        assert.equal(await page.locator('.cm-frap-graph svg').count(), 1);
        await page.locator('.cm-frap-graph').scrollIntoViewIfNeeded();
        await page.screenshot({ path: path.join(outputDir, 'frap-' + name + '-experiment.png') });
        await range('lsnExchangeRate', 0);
        assert.equal(await page.locator('.cm-lsn-result').isVisible(), false);
        assert.equal(await next.isDisabled(), true);
        await page.reload(); await loaded();
        assert.equal(await page.locator('#lsnExchangeRate').inputValue(), '25');
        assert.equal(await page.locator('[data-record]').count(), 2);
        await click('[data-act="run-experiment"]');
        await text(page.locator('.cm-lsn-result'), /13.86/);
        await page.locator('[data-reuse]').nth(1).click();
        assert.equal(await page.locator('#lsnExchangeRate').inputValue(), '100');
        assert.equal(await next.isDisabled(), true);
        await click('[data-act="run-experiment"]');
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await page.waitForFunction(() => document.querySelector('#lsnFrapStatus').textContent.includes('静态示意'));
        await text(page.locator('#lsnFrapStatus'), /静态示意/);
        await next.click(); await roi();
        await text(body, /正确。这是固定的观察区域/);
        for (const id of ['baseline', 'bleach']) await click('[data-order="' + id + '"]');
        await page.reload(); await loaded();
        assert.equal(await page.locator('.cm-order-selected li').count(), 2);
        for (const id of ['exchange', 'plateau']) await click('[data-order="' + id + '"]');
        await click('[data-act="order-check"]'); await click('[data-analysis="b"]');
        await text(page.locator('.cm-lsn-complete'), /FRAP · 已完成/);
        await next.click();
        onProgress('FRAP ' + name + ': course switching, restart and isolated clearing');
        const frapSave = await page.evaluate((key) => localStorage.getItem(key), FRAP_KEY);
        assert.equal(JSON.parse(frapSave).course.courseComplete, true);
        await click('[data-model="transport"]'); await click('#cmLearnEntry');
        await click('[data-pick="pump"]');
        await click('#cmLessonClose');
        const transportSave = await page.evaluate((key) => localStorage.getItem(key), TRANSPORT_KEY);
        assert.ok(transportSave);
        await click('[data-model="frap"]'); await click('#cmLearnEntry');
        await text(body, /已认识 4 \/ 4/);
        await click('#cmLessonRestart'); await click('#cmLessonRestartCancel');
        await text(body, /已认识 4 \/ 4/);
        await click('#cmLessonRestart'); await click('#cmLessonRestartConfirm');
        await text(body, /已认识 0 \/ 4/);
        await stage(2); assert.equal(await page.locator('[data-record]').count(), 4);
        await click('#cmLessonHelpToggle'); await click('#cmLessonClear'); await page.keyboard.press('Escape');
        assert.ok(await page.evaluate((key) => localStorage.getItem(key), FRAP_KEY));
        await click('#cmLessonHelpToggle'); await click('#cmLessonClear'); await click('#cmLessonClearConfirm');
        assert.equal(await page.evaluate((key) => localStorage.getItem(key), FRAP_KEY), null);
        assert.equal(await page.evaluate((key) => localStorage.getItem(key), TRANSPORT_KEY), transportSave);
        await click('#cmLessonClose'); await click('[data-model="transport"]'); await click('#cmLearnEntry');
        await text(body, /已认识 1 \/ 4/);
        assert.deepEqual(errors, []);
        results.push({ lesson: 'frap', viewport, passed: true });
        onProgress('FRAP ' + name + ': passed');
      } catch (error) {
        await page.screenshot({ path: path.join(outputDir, 'frap-' + name + '-failure.png') }).catch(() => {});
        throw new Error('FRAP ' + name + ': ' + error.message, { cause: error });
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
  const playwright = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
  console.log(JSON.stringify(await runFrapSmoke({ playwright,
    executablePath: process.env.BROWSER_EXECUTABLE, channel: process.env.BROWSER_CHANNEL,
    onProgress: console.log }), null, 2));
}
