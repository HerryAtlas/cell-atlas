import assert from 'node:assert/strict';
import http from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

async function serve(root) {
  const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg' };
  const server = http.createServer(async (req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const target = path.resolve(root, '.' + pathname + (pathname.endsWith('/') ? 'index.html' : ''));
      if (!target.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
      const data = await readFile(target);
      res.writeHead(200, { 'Content-Type': mime[path.extname(target)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      res.end(data);
    } catch { res.writeHead(404).end(); }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  return { server, url: 'http://127.0.0.1:' + server.address().port };
}

// Actual browser, real built page and real raycasting. No engine hooks, event
// injection, DOM fixture or alternative testing implementation of the lesson.
export async function runSmoke({ playwright, executablePath, channel,
  outputDir = path.join(projectRoot, 'tests/browser-results'), onProgress = () => {} } = {}) {
  const { server, url } = await serve(path.join(projectRoot, 'docs'));
  let browser;
  const results = [];
  await mkdir(outputDir, { recursive: true });
  try {
    browser = await playwright.chromium.launch({
      headless: true,
      ...(executablePath ? { executablePath } : channel ? { channel } : {}),
    });
    for (const viewport of [{ width: 1440, height: 960 }, { width: 390, height: 844 }]) {
      const name = viewport.width > 900 ? 'desktop' : 'mobile';
      const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
      const page = await context.newPage();
      page.setDefaultTimeout(12000);
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
      const next = page.locator('#cmLessonNext');
      const body = page.locator('#cmLessonBody');
      const stage = (n) => page.locator('[data-stage="' + n + '"]').click();
      const click = (selector) => page.locator(selector).click();
      const assertText = async (locator, pattern) => assert.match(await locator.innerText(), pattern);
      async function clickPump() {
        if (name === 'mobile') {
          await click('#cmLessonPeek');
          assert.equal(await page.locator('#cmLesson').evaluate((el) => el.classList.contains('is-peeking')), true);
        }
        const canvas = page.locator('#modelStage canvas');
        const box = await canvas.boundingBox();
        assert.ok(box && box.y >= -1 && box.x >= 0, 'Model must be in view');
        // Fixed lesson camera and these two regression viewports: pump body.
        // Click through the actual canvas/pointer/raycaster path.
        await canvas.click({ position: { x: box.width * 0.65, y: box.height * 0.47 } });
        if (name === 'mobile') {
          await page.waitForFunction(() => !document.querySelector('#cmLesson').classList.contains('is-peeking'));
        }
      }
      try {
        onProgress(name + ': model and restart');
        await page.goto(url + '/models.html?model=transport&learn=1');
        await page.locator('#cmLesson').waitFor({ state: 'visible' });
        await page.locator('#cmLoading.is-hidden').waitFor({ state: 'attached' });
        assert.equal(await page.locator('#modelStage canvas').evaluate((el) => !!el.getContext('webgl2')), true);
        await clickPump();
        await assertText(body, /已认识 1 \/ 4/);
        await assertText(body.locator('article h3'), /Na⁺\/K⁺ 泵/);
        await click('#cmLessonRestart');
        assert.equal(await page.locator('#cmLessonRestartPrompt').isVisible(), true);
        await assertText(body, /已认识 1 \/ 4/);
        assert.equal(await page.locator('#cmLessonRestartCancel').evaluate((el) => el === document.activeElement), true);
        await page.screenshot({ path: path.join(outputDir, name + '-confirmation.png') });
        await page.keyboard.press('Escape');
        assert.equal(await page.locator('#cmLessonRestartPrompt').isVisible(), false);
        assert.equal(await page.locator('#cmLesson').isVisible(), true);
        await click('#cmLessonRestart');
        await click('#cmLessonRestartCancel');
        await assertText(body, /已认识 1 \/ 4/);
        await click('#cmLessonRestart');
        await click('#cmLessonRestartConfirm');
        await assertText(body, /已认识 0 \/ 4/);
        await assertText(page.locator('#cmLessonHistory'), /第 2 轮.*已保留历史尝试.*刷新后不保留/);
        assert.equal(await next.isEnabled(), false);
        assert.equal(await page.locator('#cmLessonRestartPrompt').isVisible(), false);
        await page.screenshot({ path: path.join(outputDir, name + '-restart.png') });

        onProgress(name + ': target experiment');
        await stage(2);
        await click('[data-prediction="decrease"]');
        await click('[data-act="run-experiment"]');
        await assertText(page.locator('.cm-lsn-feedback'), /自由探索结果/);
        assert.equal(await next.isEnabled(), false);
        await page.locator('#lsnAtp').focus();
        await page.keyboard.press('Home');
        await click('[data-act="run-experiment"]');
        await assertText(page.locator('.cm-lsn-result'), /0% 相对速率/);
        await assertText(page.locator('.cm-lsn-feedback'), /预测正确/);
        assert.equal(await next.isEnabled(), true);
        await page.locator('#lsnGradient').focus();
        await page.keyboard.press('ArrowRight');
        assert.equal(await next.isEnabled(), false);
        await page.keyboard.press('ArrowLeft');
        assert.equal(await next.isEnabled(), false);
        await click('[data-act="run-experiment"]');
        assert.equal(await next.isEnabled(), true);

        onProgress(name + ': completion and review');
        await stage(3);
        await clickPump();
        await assertText(body.locator('.cm-lsn-feedback').first(), /正确。你点到/);
        for (const id of ['na-bind','phosphorylation','e2','k-bind','dephosphorylation']) {
          await click('[data-order="' + id + '"]');
        }
        await click('[data-act="order-check"]');
        await click('[data-analysis="b"]');
        assert.equal(await page.locator('.cm-lsn-complete').count(), 0);
        await assertText(next, /继续认识结构/);
        await next.click();
        for (const id of ['membrane','channel','pump','atp']) await click('[data-pick="' + id + '"]');
        await next.click();
        for (let i=0; i<4; i++) await click('[data-act="mech-next"]');
        await next.click();
        await next.click();
        await assertText(page.locator('.cm-lsn-complete'), /样板课完成/);
        await next.click();
        assert.equal(await page.locator('#cmLesson').isVisible(), false);
        await click('#cmLearnEntry');
        await assertText(page.locator('#cmLessonProgress'), /复习/);
        await next.click();
        await assertText(page.locator('#cmLessonProgress'), /观察机制.*复习/);
        assert.deepEqual(errors, [], 'No browser console or page errors');
        results.push({ viewport, name, passed: true });
        onProgress(name + ': passed');
      } catch (error) {
        await page.screenshot({ path: path.join(outputDir, name + '-failure.png') }).catch(() => {});
        throw new Error(name + ' browser smoke failed: ' + error.message, { cause: error });
      } finally { await context.close(); }
    }
    return results;
  } finally {
    if (browser) await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

if (typeof process !== 'undefined' && process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const require = createRequire(import.meta.url);
  const playwright = process.env.PLAYWRIGHT_MODULE
    ? require(process.env.PLAYWRIGHT_MODULE) : require('playwright');
  const result = await runSmoke({
    playwright,
    executablePath: process.env.BROWSER_EXECUTABLE,
    channel: process.env.BROWSER_CHANNEL,
    onProgress: console.log,
  });
  console.log(JSON.stringify(result, null, 2));
}
