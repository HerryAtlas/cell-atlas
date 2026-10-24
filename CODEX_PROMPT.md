# Start here — Codex

This repository is a working Three.js courseware project, not a blank scaffold. Before changing code, read:

1. `AGENTS.md` — project invariants, source map and testing rules.
2. `README.md` — public description and run instructions.
3. `package.json` — build scripts and the only two dev dependencies.
4. `src/model-catalog.js` — the 14 model IDs and section mapping.
5. `src/models-scene.js` — model builders and shared geometry helpers.

## Recommended first prompt

Copy this into Codex after opening the repository:

```text
请先阅读 AGENTS.md、README.md、package.json 和 src/model-catalog.js。
然后用不超过 20 行总结：
1. 项目的两个交付目标；
2. 14 个模型 ID 与来源文件；
3. 7 幕 / 16 章 / 44 节之间的关系；
4. 哪些文件是生成文件、不能手改；
5. 你准备如何验证修改。

在我确认之前不要改代码。
```

## Working prompt template

```text
任务：[具体修改，例如“把 FRET 模型的双受体结构再细化，保持现有 id 与深链不变”]

约束：
- 先读 AGENTS.md，遵守其中的硬约束。
- 只做外科手术式修改，不要重写整个渲染器。
- 不改 14 个模型 ID、7 幕结构、16/44 节结构。
- 修改后运行 node build.mjs 和 node build-demo.mjs。
- 检查 docs/index.html、docs/textbook.html、docs/models.html。
- 汇报：改了哪些文件、为什么、如何验证、还有什么风险。

先给我一个 5 步以内的计划，确认后再动手。
```

## What not to feed Codex

- Do not paste all source files into the chat; let Codex read the repository.
- Do not upload `node_modules/`.
- Do not hand-edit `docs/` or `client.js`; they are generated.
- Do not upload the 112 MB Windows desktop build for code work; it is only for distribution.
- Do not include competition materials, signed documents or personal contact details in a public repository.

## Environment

```bash
pnpm install
node build.mjs
node build-demo.mjs
python -m http.server 8000
```

Codex needs Node.js 20+ and pnpm for builds. WebGL2 and a browser are needed only for visual verification.

## If using Codex Cloud

Push this repository to GitHub first, then connect the repository in Codex. Keep `AGENTS.md` at the repository root; Codex will read it automatically. The build is static and has no backend.
