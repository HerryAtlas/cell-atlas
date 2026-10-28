import { serve } from './server.mjs';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

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
      const guide = await context.newPage();
      await guide.goto(url + '/guide.html');
      await assertText(guide.locator('h1'), /先知道怎么走/);
      await guide.close();
      const onboarding = await context.newPage();
      await onboarding.goto(url + '/index.html');
      await onboarding.locator('#guideNext').click();
      await onboarding.locator('#guideNextTwo').click();
      assert.equal(await onboarding.locator('#introStepThree').isVisible(), true);
      assert.match(await onboarding.locator('#introStepThree').innerText(), /目标实验/);
      assert.match(await onboarding.locator('#introStepThree').innerText(), /改条件 = 重跑/);
      assert.match(await onboarding.locator('#introStepThree').innerText(), /FRAP/);
      await onboarding.screenshot({ path: path.join(outputDir, name + '-onboarding.png') });
      await onboarding.locator('#guideNextThree').click();
      assert.equal(await onboarding.locator('#introStepFour').isVisible(), true);
      await onboarding.close();
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
        await page.locator('#cmLoading').waitFor({ state: 'hidden' });
        assert.equal(await page.locator('#modelStage canvas').evaluate((el) => !!el.getContext('webgl2')), true);
        await click('#cmLessonHelpToggle');
        assert.equal(await page.locator('#cmLessonHelp').isVisible(), true);
        await assertText(page.locator('#cmLessonHelp'), /ATP = 0%|目标实验/);
        await click('#cmLessonHelpClose');
        assert.equal(await page.locator('#cmLessonHelp').isVisible(), false);
        await clickPump();
        await assertText(body, /已认识 1 \/ 4/);
        await assertText(body.locator('article h3'), /Na⁺\/K⁺ 泵/);
        await page.reload();
        await page.locator('#cmLesson').waitFor({ state: 'visible' });
        await page.locator('#cmLoading').waitFor({ state: 'hidden' });
        await assertText(body, /已认识 1 \/ 4/);
        await assertText(page.locator('#cmLessonSaveStatus'), /保存|恢复/);
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
        await assertText(page.locator('#cmLessonHistory'), /第 2 轮.*已保留历史尝试/);
        assert.equal(await next.isEnabled(), false);
        assert.equal(await page.locator('#cmLessonRestartPrompt').isVisible(), false);
        await page.screenshot({ path: path.join(outputDir, name + '-restart.png') });

        onProgress(name + ': playback speed');
        await stage(1);
        await click('[data-speed="slow"]');
        await click('[data-act="mech-play"]');
        await page.waitForFunction(() => /02 \/ 05/.test(document.querySelector('#cmLessonBody').textContent), null, { timeout: 10000 });
        await click('[data-speed="normal"]');
        await page.waitForFunction(() => /03 \/ 05/.test(document.querySelector('#cmLessonBody').textContent), null, { timeout: 6000 });
        await click('[data-act="mech-play"]');
        assert.equal(await next.isEnabled(), false);
        await page.screenshot({ path: path.join(outputDir, name + '-playback-speed.png') });
        await page.reload();
        await page.locator('#cmLesson').waitFor({ state: 'visible' });
        await page.locator('#cmLoading').waitFor({ state: 'hidden' });
        await assertText(body, /03 \/ 05/);
        await assertText(page.locator('[data-act="mech-play"]'), /播放/);

        onProgress(name + ': target experiment');
        await stage(2);
        await assertText(page.locator('#lsnPumpStatus'), /待运行/);
        await click('[data-prediction="decrease"]');
        await click('[data-act="run-experiment"]');
        await assertText(page.locator('.cm-lsn-feedback'), /自由探索结果/);
        await assertText(page.locator('#lsnPumpStatus'), /较快/);
        await page.locator('#lsnAtp').focus();
        await page.keyboard.press('Home');
        for (let i=0; i<4; i++) await page.keyboard.press('ArrowRight');
        await assertText(page.locator('#lsnPumpStatus'), /待运行/);
        await click('[data-act="run-experiment"]');
        await assertText(page.locator('.cm-lsn-result'), /16% 相对速率/);
        await assertText(page.locator('#lsnPumpStatus'), /低速/);
        await page.locator('#lsnInhibitor').check();
        await assertText(page.locator('#lsnPumpStatus'), /待运行/);
        await click('[data-act="run-experiment"]');
        await assertText(page.locator('#lsnPumpStatus'), /停止/);
        await page.locator('#lsnInhibitor').uncheck();
        assert.equal(await next.isEnabled(), false);
        await page.locator('#lsnAtp').focus();
        await page.keyboard.press('Home');
        await click('[data-act="run-experiment"]');
        await assertText(page.locator('.cm-lsn-result'), /0% 相对速率/);
        await assertText(page.locator('#lsnPumpStatus'), /停止/);
        await page.screenshot({ path: path.join(outputDir, name + '-pump-stopped.png') });
        await assertText(page.locator('.cm-lsn-feedback'), /预测正确/);
        const recordsBefore = await page.locator('[data-record]').count();
        assert.equal(recordsBefore, 4);
        await page.reload();
        await page.locator('#cmLesson').waitFor({ state: 'visible' });
        await page.locator('#cmLoading').waitFor({ state: 'hidden' });
        assert.equal(await page.locator('[data-record]').count(), recordsBefore);
        assert.equal(await next.isEnabled(), true);
        await page.locator('[data-reuse]').first().click();
        await assertText(page.locator('#lsnPumpStatus'), /待运行/);
        assert.equal(await next.isEnabled(), false);
        assert.equal(await page.locator('[data-record]').count(), recordsBefore);
        await click('[data-act="restore-conditions"]');
        assert.equal(await page.locator('#lsnAtp').inputValue(), '60');
        await page.locator('#lsnAtp').focus();
        await page.keyboard.press('Home');
        await click('[data-act="run-experiment"]');
        await page.locator('.cm-lsn-records').scrollIntoViewIfNeeded();
        await page.screenshot({ path: path.join(outputDir, name + '-experiment-records.png') });
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
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
          if (id === 'phosphorylation') {
            await page.reload();
            await page.locator('#cmLesson').waitFor({ state: 'visible' });
            await page.locator('#cmLoading').waitFor({ state: 'hidden' });
            assert.equal(await page.locator('.cm-order-selected li').count(), 2);
            await assertText(body.locator('.cm-lsn-feedback').first(), /正确。你点到/);
          }
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
        await page.reload();
        await page.locator('#cmLesson').waitFor({ state: 'visible' });
        await page.locator('#cmLoading').waitFor({ state: 'hidden' });
        await assertText(page.locator('#cmLessonProgress'), /复习/);
        await next.click();
        await assertText(page.locator('#cmLessonProgress'), /观察机制.*复习/);
        onProgress(name + ': reduced motion');
        await click('[data-act="mech-play"]');
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await page.waitForFunction(() => document.querySelector('[data-speed="slow"]')?.getAttribute('aria-pressed') === 'true');
        await assertText(page.locator('[data-act="mech-play"]'), /播放/);
        await stage(2);
        await page.locator('#lsnAtp').focus();
        await page.keyboard.press('End');
        await click('[data-act="run-experiment"]');
        await assertText(page.locator('#lsnPumpStatus'), /较快.*静态示意/);
        await page.screenshot({ path: path.join(outputDir, name + '-reduced-motion.png') });
        onProgress(name + ': local save, clear and incompatible data');
        await click('#cmLessonHelpToggle');
        await click('#cmLessonClear');
        await page.keyboard.press('Escape');
        assert.equal(await page.locator('#cmLessonClearPrompt').isVisible(), false);
        assert.ok(await page.locator('[data-record]').count() >= 4);
        await click('#cmLessonHelpToggle');
        await click('#cmLessonClear');
        await click('#cmLessonClearConfirm');
        await assertText(body, /已认识 0 \/ 4/);
        assert.equal(await page.evaluate(() => localStorage.getItem('cell-atlas.lesson.transport.progress')), null);
        await page.reload();
        await page.locator('#cmLesson').waitFor({ state: 'visible' });
        await page.locator('#cmLoading').waitFor({ state: 'hidden' });
        await assertText(body, /已认识 0 \/ 4/);
        await page.evaluate(() => localStorage.setItem('cell-atlas.lesson.transport.progress', '{"version":999}'));
        await page.reload();
        await page.locator('#cmLesson').waitFor({ state: 'visible' });
        await page.locator('#cmLoading').waitFor({ state: 'hidden' });
        await assertText(page.locator('#cmLessonSaveStatus'), /不兼容|损坏/);
        await click('[data-pick="pump"]');
        assert.equal(await page.evaluate(() => localStorage.getItem('cell-atlas.lesson.transport.progress')), '{"version":999}');
        await click('#cmLessonHelpToggle');
        await click('#cmLessonClear');
        await click('#cmLessonClearConfirm');
        await click('[data-pick="pump"]');
        await page.reload();
        await page.locator('#cmLesson').waitFor({ state: 'visible' });
        await page.locator('#cmLoading').waitFor({ state: 'hidden' });
        await assertText(body, /已认识 1 \/ 4/);
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
  const { runFrapSmoke } = await import('./frap-smoke.mjs');
  console.log(JSON.stringify(await runFrapSmoke({ playwright,
    executablePath: process.env.BROWSER_EXECUTABLE,
    channel: process.env.BROWSER_CHANNEL, onProgress: console.log }), null, 2));
}
