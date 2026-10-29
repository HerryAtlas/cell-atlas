import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { serve } from './server.mjs';
import { MODEL_SPECS } from '../../src/model-catalog.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const output = path.join(root, 'tests/browser-results/models');
const requested = process.env.MODEL_IDS?.split(',');
const specs = requested ? MODEL_SPECS.filter(spec => requested.includes(spec.id)) : MODEL_SPECS;
assert.ok(specs.length > 0, 'No matching models');
await mkdir(output, { recursive: true });
const { server, url } = await serve(path.join(root, 'docs'));
const browser = await chromium.launch({ headless: true, executablePath: process.env.BROWSER_EXECUTABLE });
const report = [];
try {
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
    const mode = viewport.width > 900 ? 'desktop' : 'mobile';
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
    for (const { id } of specs) {
      await page.goto(url + '/models.html?model=' + id);
      await page.locator('#cmLoading').waitFor({ state: 'hidden' });
      assert.equal(await page.locator('#modelStage canvas').evaluate(el => !!el.getContext('webgl2')), true);
      if (await page.locator('#cmAuto').getAttribute('aria-pressed') === 'true') await page.locator('#cmAuto').click();
      await page.waitForTimeout(250);
      const canvas = await page.locator('#modelStage canvas').boundingBox();
      assert.ok(canvas.width >= 320 && canvas.height >= 320);
      await page.screenshot({ path: path.join(output, mode + '-' + id + '.png') });
      // Exercise actual orbit and wheel handlers, then check a second view.
      await page.mouse.move(canvas.x + canvas.width * 0.55, canvas.y + canvas.height * 0.45);
      await page.mouse.down();
      await page.mouse.move(canvas.x + canvas.width * 0.67, canvas.y + canvas.height * 0.48, { steps: 8 });
      await page.mouse.up();
      await page.mouse.wheel(0, -80);
      await page.waitForTimeout(80);
      assert.deepEqual(errors, [], mode + '/' + id);
      report.push({ mode, id, webgl: true, errors: 0 });
      console.log(mode + ': ' + id);
    }
    await context.close();
  }
  await writeFile(path.join(output, requested ? 'report-selected.json' : 'report.json'), JSON.stringify(report, null, 2));
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}
