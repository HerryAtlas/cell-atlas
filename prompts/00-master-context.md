# 00 · Master Context

你是 Cell Atlas 的编码代理。先读仓库根目录的 `AGENTS.md`，再读本文件。

## 项目是什么

Cell Atlas（胞宇 · 细胞图谱）是一个电影感、完全程序化的 Three.js 细胞生物学课程作品：

- 7 个视觉运动：整细胞、质膜、细胞骨架、线粒体/叶绿体、细胞核/基因组、内膜系统、有丝分裂
- 16 章 / 44 节教材内容
- 14 个分节 3D 模型：8 个结构模型 + 6 个实验方法模型
- 两个交付目标：
  - `docs/`：由 `demo/` 构建的静态站，公开主站
  - `client.js`：由 `src/entry.jsx` 构建的 DSH Web UI 插件

## 不可违反的约束

1. 14 个模型 ID 必须保持稳定：
   `prokaryote-eukaryote`, `membrane-mosaic`, `transport`, `endomembrane`, `mito-chloro`, `cytoskeleton`, `nucleus`, `ribosome`, `light-microscopy`, `electron-microscopy`, `centrifugation`, `cell-culture`, `frap`, `fret`
2. 不要移除一个 section 对应多个模型的映射。
3. 不改 7 幕 / 16 章 / 44 节结构，除非同步更新所有消费者。
4. 不引入下载的 3D 模型、纹理、HDRI、雪碧图或 web font；全部程序化生成。
5. 保持暗场、青绿色、克制 bloom、可读标签的视觉语言。
6. 保留学习层：目标、概念、机制、易错点、自测、教材页码。
7. 不手工编辑 `docs/` 或 `client.js`；改 `demo/`、`src/` 后重新构建。
8. 独立站和 DSH 插件尽量共享内容/模型；不要只修一端。

## 关键文件

| 路径 | 责任 |
|---|---|
| `src/models-scene.js` | 14 个模型构建器、拾取目标、选中高亮、模型动画 |
| `src/transport-lesson.js` | 跨膜运输样板课内容：目标、结构卡、机制步骤、实验、练习 |
| `src/model-catalog.js` | 模型目录与 section 映射 |
| `src/textbook*.js` | 16/44 教材内容 |
| `demo/models.js` | 独立模型页控制、导学实例化、深链 |
| `demo/transport-lesson-ui.js` | 导学四阶段 UI |
| `demo/models.html` / `models.css` | 模型页与导学面板 |
| `demo/main.js` / `style.css` | 主场景、三页 onboarding |
| `demo/textbook.js` | 教材页与模型深链 |
| `COURSE-MAP.md` | 44 节课程建设地图 |

## 构建与验证

```bash
node build.mjs
node build-demo.mjs
```

最低验证：

1. 两个构建都成功；
2. 打开 `docs/index.html`、`docs/textbook.html`、`docs/models.html`；
3. 检查 onboarding、T 学习手册、B 全书、模型链接、亮度、旋转/缩放；
4. 桌面和窄屏各走一次；
5. 无 console error；
6. 不提交 `node_modules/`、token、私钥、`.env`。

## 当前功能状态

- `COURSE-MAP.md` 已列出 16/44 节的目标、模型、状态和待补内容。
- 「跨膜运输」样板课已完成 1–6 步闭环：
  - 场景点击结构与知识卡
  - Na⁺/K⁺ 泵 E1–E2 机制播放
  - ATP / 梯度 / 哇巴因预测实验
  - 隐藏标签辨认、过程排序、结果分析
- 教材链接可由 `textbook.html` 带 `&learn=1` 进入导学。
- 手机端导学有「看模型」折叠模式。
- 第 7–10 步（全章内容深化、学习记录、完整静态备用与设备优化）尚未完成。

## 公开地址

- 主站：<https://herryatlas.github.io/cell-atlas/>
- 导学：<https://herryatlas.github.io/cell-atlas/models.html?model=transport&learn=1>
- 仓库：<https://github.com/HerryAtlas/cell-atlas>

## 给代理的工作方式

- 先读文件再改；不要凭记忆重写。
- 小步、可验证地改；每次只打穿一个学习闭环。
- 科学内容要有教材页码依据；不确定就标记待审，不要编造。
- 完成后同步 `COURSE-MAP.md` 和用户可见的使用说明。
