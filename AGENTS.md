# Cell Atlas — Codex project instructions

This file is the entry point for Codex and other coding agents. Read it before changing anything.

## What this project is

A cinematic, fully procedural Three.js cell-biology courseware.

- **7 visual movements**: whole cell, membrane, cytoskeleton, mitochondria/chloroplasts, nucleus/genome, endomembrane system, mitosis.
- **16 chapters / 44 sections** of textbook-aligned study content.
- **14 section-level 3D models**: 8 cell-structure models + 6 experimental-method models.
- Two delivery targets:
  1. standalone static site in `docs/` (built from `demo/`);
  2. DSH Web UI plugin in `client.js` (built from `src/entry.jsx`).

The project is deliberately **fully procedural**: no downloaded 3D models, textures, HDRIs, sprite sheets or web fonts. Everything is generated with Three.js geometry, shaders, particles and canvas labels.

## Commands

Use Node.js 20+ and pnpm.

```bash
pnpm install

# Rebuild the DSH plugin client
node build.mjs          # -> client.js

# Rebuild the standalone static site
node build-demo.mjs     # -> docs/

# Preview the standalone site
python -m http.server 8000
# http://localhost:8000/docs/
```

If the DSH environment supplies its own Node binary, use that binary explicitly. Do not add a framework or bundler beyond esbuild without a clear reason.

## Source of truth / code map

| Path | Responsibility |
|---|---|
| `src/scene.js` | Main Seven Movements scene: renderer, camera, post-processing, particles, organelles, movement state. |
| `src/chapters.js` | Seven movement definitions, copy, camera targets, palette and study-note metadata. |
| `src/models-scene.js` | Standalone section-model renderer plus all 14 model builders and shared helpers. |
| `src/course-engine.js` | Deterministic lesson state machine: evidence, gating, snapshots and subscriptions; no DOM/AI dependency. |
| `src/transport-flow.js` | Declarative requirements for the guided transport lesson. |
| `src/model-catalog.js` | 14 model specs, section mapping, `modelForSection()` / `modelsForSection()` deep-link helpers. |
| `src/textbook.js` + `src/textbook-part1.js` + `src/textbook-part2.js` | 16-chapter / 44-section study content, section cards, terms and self-check answers. |
| `src/plugin.jsx` | DSH Web UI overlay: onboarding, study drawer, section browser, `SectionModelViewer`. |
| `src/shaders.js` | GLSL used by the main scene. |
| `src/entry.jsx` | Plugin entry point; mounts the overlay. |
| `demo/main.js` | Standalone courseware behaviour: onboarding, controls, labels, chapter navigation. |
| `demo/textbook.js` | Standalone 16/44 section reader and model deep links. |
| `demo/models.js` | Standalone 14-model gallery, rail switching, controls and annotation labels. |
| `demo/*.html`, `demo/*.css` | Standalone shells and layout. |
| `docs/` | **Generated** static site; do not hand-edit. |
| `client.js` | **Generated** plugin bundle; do not hand-edit. |
| `media/` | Screenshots, cover and 20s showcase video; not required at runtime. |

## Hard invariants

1. **Keep all 14 model IDs stable.** External links and catalog mappings depend on them:
   `prokaryote-eukaryote`, `membrane-mosaic`, `transport`, `endomembrane`, `mito-chloro`, `cytoskeleton`, `nucleus`, `ribosome`, `light-microscopy`, `electron-microscopy`, `centrifugation`, `cell-culture`, `frap`, `fret`.
2. **Do not remove `modelsForSection()` / multiple models per section.** The study layer supports more than one model per section.
3. **Do not change the 7 movements or the 16/44 structure without updating every consumer** (`chapters.js`, `textbook*.js`, `demo/textbook.js`, plugin, README).
4. **No external visual assets.** Keep the no-textures/no-models constraint unless the user explicitly changes the brief.
5. **Preserve the visual language**: dark optical field, teal/cyan accents, restrained bloom, cinematic but readable labels. Do not make the scene uniformly bright.
6. **Preserve the learning layer**: objectives, concepts, mechanism, common traps, self-check and textbook page references.
7. **Do not edit `docs/` or `client.js` manually.** Edit `demo/`, `src/` and the build scripts, then rebuild.
8. **Standalone and plugin should share the same content/models**; avoid fixing one target only.

## Model work

- A model builder lives in `src/models-scene.js` and returns a `THREE.Group`.
- `group.userData.distance` controls the camera distance for that model.
- `group.userData.update(time)` is optional animation.
- Use the existing helpers (`box`, `ball`, `capsule`, `torus`, `tube`, `label`, `screenPanel`, `knob`, `lensElement`, `beamCylinder`) before adding new primitives.
- Add/update the matching spec in `src/model-catalog.js`; keep `id`, `number`, `chapterId`, `sectionNo`, labels and study copy consistent.
- Add the builder to `BUILDERS`; every catalog ID must have a builder.
- Test labels, camera framing, exposure and the mobile/rail layout.

## Content work

- Textbook content is in `src/textbook-part1.js` and `src/textbook-part2.js`.
- Each section has a section number, textbook pages, outline, orientation, three mechanism points, key terms, a self-check question and answer.
- Keep the Chinese pedagogical voice concise and accurate. Do not invent textbook page numbers or scientific claims.
- Reference: 丁明孝、王喜忠、张传茂、陈建国主编《细胞生物学》第 5 版，高等教育出版社，2020，ISBN 978-7-04-047157-1.
- If content changes, rebuild both `docs/` and `client.js`.

## User-facing documentation parity

Any change to a user flow must update the instructions in the same change:

1. `demo/main.js` — the three-page onboarding copy.
2. `demo/models.html` — the in-lesson **使用说明** panel, button labels and hints.
3. `README.md` — the guided-lesson steps, completion rules and mobile behaviour.
4. `COURSE-MAP.md` — section status and remaining work, when a lesson changes.

A feature is not done if a user cannot discover how to use it from the page. Keep onboarding at exactly three pages. Browser tests should cover the critical instructions and controls where practical.

## Testing / definition of done

Minimum for any change:

1. `node build.mjs` succeeds.
2. `node build-demo.mjs` succeeds.
3. Open `docs/index.html`, `docs/textbook.html` and `docs/models.html` in a WebGL2 browser.
4. Check: onboarding, `T`, `B`, chapter navigation, model links, model rotation/zoom/brightness, no console errors.
5. Check a narrow/mobile viewport; labels and rails must remain usable.
6. Do not commit `node_modules/`.

Run `pnpm test` for course-engine, experiment and lesson UI regression tests. Run pnpm test:browser for the independent desktop/mobile suite (setup: tests/browser/README.md). Browser smoke tests are also mandatory; unit tests cannot verify camera framing, label overlap, WebGL shaders or visual deep-link behaviour.

## Current state

- 14 models implemented; methods models were recently upgraded to instrument-level detail.
- Onboarding is exactly three pages; page 1 starts with “欢迎来到细胞的世界”.
- `docs/` and `client.js` are prebuilt and current at the time of this file.
- DSH is optional; the standalone `docs/` site is the primary public demo.
- The repository is prepared for GitHub Pages (`main` / `docs`).

## Working style

- Make surgical changes; do not rewrite the whole renderer for a small request.
- Read the surrounding builder/helper before adding new geometry.
- Keep the build green and verify in a real browser.
- If a request is ambiguous, state the assumption and preserve existing public IDs/content.
