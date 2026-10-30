import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import { serve } from './server.mjs';
import { CHAPTERS } from '../../src/chapters.js';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const output = path.join(root, 'tests/browser-results/opening');
await mkdir(output, {recursive:true});
const {server,url} = await serve(path.join(root,'docs'));
const browser = await chromium.launch({headless:true, executablePath:process.env.BROWSER_EXECUTABLE});
const report=[];
try {
  const viewports=[{width:1440,height:1000},{width:390,height:844}]
    .filter(v=>!process.env.MAIN_VIEWPORT || (v.width>900?'desktop':'mobile')===process.env.MAIN_VIEWPORT);
  assert.ok(viewports.length, 'Invalid MAIN_VIEWPORT');
  for (const viewport of viewports) {
    const mode=viewport.width>900?'desktop':'mobile';
    const context=await browser.newContext({viewport,deviceScaleFactor:1});
    const page=await context.newPage(),errors=[];
    page.on('pageerror',e=>{if(!errors.length)console.error(e.stack);errors.push(e.message);});
    page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
    await page.goto(url+'/');
    await page.locator('#loading').waitFor({state:'hidden'});
    for(const id of ['guideNext','guideNextTwo','guideNextThree','enterBtn']) await page.locator('#'+id).click();
    await page.locator('#playBtn').click();
    for (let i=0;i<CHAPTERS.length;i++) {
      // The bottom timeline remains reachable at phone widths.
      await page.locator('#timeline button').nth(i).click();
      // Software WebGL can render below real time; wait for rendered frames so
      // actor/camera transitions settle before judging the composition.
      await page.evaluate(() => new Promise(resolve => {let n=0;const tick=()=>++n>=100?resolve():requestAnimationFrame(tick);requestAnimationFrame(tick);}));
      assert.equal(await page.locator('#title').innerText(),CHAPTERS[i].title);
      assert.equal(await page.locator('#error').isVisible(),false);
      assert.equal(await page.locator('#stage canvas').evaluate(el=>!!el.getContext('webgl2')),true);
      await page.screenshot({path:path.join(output,`${mode}-${CHAPTERS[i].id}.png`)});
      const box=await page.locator('#stage canvas').boundingBox();
      await page.mouse.move(box.x+box.width*.55,box.y+box.height*.3);
      await page.mouse.down();
      await page.mouse.move(box.x+box.width*.65,box.y+box.height*.35,{steps:6});
      await page.mouse.up();
      await page.mouse.wheel(0,-80);
      await page.locator('#resetBtn').click();
      assert.deepEqual(errors,[],mode+'/'+CHAPTERS[i].id);
      report.push({mode,id:CHAPTERS[i].id,webgl:true,errors:0});
      console.log(mode+': '+CHAPTERS[i].id);
    }
    // Reset the cycle and measure rendered simulation time. A wall-clock sleep
    // can land in the next cycle or before anaphase on slow software WebGL.
    await page.locator('#timeline button').nth(6).click();
    await page.evaluate(() => new Promise(resolve => {
      let elapsed=0, last=performance.now();
      const tick=now=>{
        elapsed+=Math.max(0,Math.min(now-last,50)); last=now;
        if(elapsed>=10500) resolve(); else requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }));
    await page.screenshot({path:path.join(output,mode+'-division-late.png')});
    assert.deepEqual(errors,[]);
    await context.close();
  }
  await writeFile(path.join(output,process.env.MAIN_VIEWPORT?`report-${process.env.MAIN_VIEWPORT}.json`:'report.json'),JSON.stringify(report,null,2));
} finally {await browser.close();await new Promise(r=>server.close(r));}
