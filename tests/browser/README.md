# Real-browser lesson smoke tests

This optional development suite uses Playwright with a real WebGL2 browser and the built docs page. It is independent from the mocked UI unit tests and adds no public-site runtime dependency.

## Setup and run

From the repository root, with Node 20+ and pnpm:

~~~sh
pnpm install
pnpm build:demo
pnpm --dir tests/browser install
pnpm --dir tests/browser exec playwright install chromium
pnpm test:browser
~~~

Alternatively use an installed Edge/Chrome executable. In PowerShell:

~~~powershell
$env:BROWSER_EXECUTABLE = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
pnpm test:browser
~~~

BROWSER_CHANNEL can select a Playwright-supported installed channel when BROWSER_EXECUTABLE is absent. PLAYWRIGHT_MODULE optionally points to an existing absolute Playwright package directory.

## Coverage

- Desktop 1440x960 and mobile 390x844, each in a fresh browser context.
- Standalone `guide.html` usage page loads on both viewports.
- Real canvas clicks/raycasting, mobile model peek and return to the lesson.
- Restart confirmation, cancel, Escape, confirmed reset and history notice.
- Target experiment versus free exploration; parameter changes invalidate completion.
- Completion requires every stage; completed lessons remain reviewable.
- Console/page errors fail the run. Missing browser or WebGL2 fails rather than silently skipping.

The test binds a temporary server to 127.0.0.1 and closes it with the browser. It invokes no AI or memory service. Screenshots go to ignored tests/browser-results/. Canvas click coordinates intentionally assume the current lesson camera and the two stated viewports; update them if the camera/layout changes.
