# Publish this repository to GitHub

The project is already organised as a GitHub-ready repository. This guide takes
you from this folder to a public repo and a working GitHub Pages demo.

> **You need to choose the account and repository name.** No GitHub credentials
> are stored in this folder. The current environment has neither `git` nor `gh`
> installed, so the steps below are for your machine/browser.

## 0. What will be published

- Source: `src/`, `demo/`, build scripts
- Prebuilt DSH client: `client.js`
- Prebuilt standalone demo + Pages site: `docs/`
- 16-chapter / 44-section study reader: `docs/textbook.html`
- 14 section 3D specimens (structure + experimental methods): `docs/models.html`
- Screenshots and the 20s video: `media/`
- Documentation: `README.md`, `LICENSE`, `GITHUB.md`, `THIRD_PARTY_LICENSES.txt`

`node_modules/` is intentionally ignored and must not be uploaded.

The page includes an 11 MB MP4. GitHub accepts it (under the 100 MB per-file
limit), but if you want to keep the repository lightweight, upload the video as
a GitHub Release asset instead and edit the link in `README.md`.

## Suggested repository settings

- **Name:** `cell-atlas`
- **Description:** `A cinematic, fully procedural Three.js cell biology courseware with a textbook-aligned study layer.`
- **Visibility:** Public (the MIT licence and citation are already included)
- **Topics:**
  `threejs`, `webgl`, `glsl`, `shaders`, `creative-coding`, `cell-biology`,
  `biology`, `science-education`, `procedural-generation`, `dsh-plugin`

## Option A — upload from the browser (no Git required)

1. On GitHub, create a new **empty** repository named `cell-atlas` (do **not**
   initialise it with a README or .gitignore).
2. Unzip `cell-atlas-github.zip` (or open this folder).
3. On the new repository page, choose **uploading an existing file**.
4. Drag the **contents** of the `cell-atlas` folder into the browser — not the
   folder itself, so `README.md` lands at the repository root.
5. Commit with a message such as `feat: initial Cell Atlas release`.
6. Enable Pages: **Settings → Pages → Deploy from a branch → main → /docs**.
7. Replace `HerryAtlas` in `README.md` with your GitHub username, then
   commit that one-line change.

The demo URL will be:

```text
https://herryatlas.github.io/cell-atlas/
https://herryatlas.github.io/cell-atlas/textbook.html   ← 16章44节学习页
https://herryatlas.github.io/cell-atlas/models.html     ← 14个分节3D模型
```

## Option B — GitHub Desktop

1. Install [GitHub Desktop](https://desktop.github.com/).
2. **File → Add local repository** and choose this `cell-atlas` folder.
3. If it is not yet a repository, GitHub Desktop will offer to create one.
4. Publish the repository to your account.
5. Enable Pages as in Option A.

## Option C — Git CLI

If Git is available:

```bash
cd cell-atlas
git init
git add .
git commit -m "feat: initial Cell Atlas release"
git branch -M main
git remote add origin https://github.com/HerryAtlas/cell-atlas.git
git push -u origin main
```

Then, with GitHub CLI installed and authenticated:

```bash
gh repo edit --description "A cinematic, fully procedural Three.js cell biology courseware with a textbook-aligned study layer."
gh repo edit --add-topic threejs,webgl,glsl,shaders,creative-coding,cell-biology,biology,science-education,procedural-generation,dsh-plugin
```

## After publishing

1. Refresh the repository page; the `media/demo-home.jpg` image and
   `media/study-notes.jpg` should render inline in the README.
2. Check **Actions** is unnecessary: the Pages site is served directly from the
   committed `docs/` folder, no build workflow required.
3. Open `https://herryatlas.github.io/cell-atlas/` and verify:
   - the three-page onboarding appears before entering;
   - the T guide page shows the study drawer and model links;
   - `T` opens the study drawer;
   - the book icon / `B` opens the 16-chapter section browser;
   - `docs/textbook.html` loads independently;
   - `docs/models.html` loads all fourteen models;
   - section-level 3D model buttons open the right specimen;
   - model names in the reader strip and DSH study panel jump straight to the
     matching model;
   - chapter rail and next/previous work;
   - the brightness slider persists after reload.
4. Optionally create a GitHub Release `v1.0.0` and attach
   `media/cell-atlas-douyin-20s.mp4` for a smaller download page.

## Share copy

Short description for social posts:

> 一个细胞，就是一个宇宙。完全程序化生成的 Three.js 细胞生物学课件：七幕漫游，
> 从质膜到有丝分裂，配教材对照、学习手册与自测。完整源码 + GitHub Pages Demo。

Hashtags: `#细胞生物学 #Three.js #WebGL #创意编程 #科学可视化 #数字艺术`
