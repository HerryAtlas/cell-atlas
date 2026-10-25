# 03 · 重建「跨膜运输导学」的一次性提示词

把下面整段交给编码代理。它是针对当前 Cell Atlas 仓库的实现提示词，不是从零生成整个项目。

---

## PROMPT

你在 `cell-atlas` 仓库工作。先阅读：

- `AGENTS.md`
- `prompts/00-master-context.md`
- `prompts/02-transport-lesson-spec.md`
- `src/models-scene.js` 的 `buildTransport()`
- `demo/models.js`、`demo/models.html`、`demo/models.css`

目标：为 `transport` 模型实现一个完整的引导式学习闭环，范围只覆盖 **第四章第二节 · ATP 驱动泵与主动运输**。

### 必须交付

1. **课程数据** `src/transport-lesson.js`
   - 4 条学习目标
   - 4 张结构卡：membrane / channel / pump / atp
   - 5 步 Na⁺/K⁺ 泵 E1–E2 机制
   - 预测—操作—观察—解释实验
   - 3 道练习：辨认、排序、结果分析
   - 每道题有正确答案、成功解释、失败反馈

2. **3D 可交互层** `src/models-scene.js`
   - 给膜、通道、泵、ATP 添加透明 raycast 命中体
   - `createModelScene` 增加 `onPick`、`setLessonState`、`setExperiment`、`setLabelsVisible`、`clearHighlight`、`selectPick`
   - 面向相机的高亮环
   - 导学专用离子和 ATP 粒子，随机制步骤改变位置
   - 泵构象随步骤改变
   - 普通模型动画和导学状态互不污染

3. **导学 UI**
   - 右侧固定面板（桌面）/全屏面板（手机）
   - 四个 tab：认识结构 / 观察机制 / 动手探索 / 场景练习
   - 关闭按钮、进度、下一步门控
   - 机制播放/暂停/上一步/下一步/重播
   - 实验滑杆、预测选项、结果、预测反馈、模拟假设
   - 练习的答对/答错反馈与重试
   - 手机“看模型”折叠模式，点选后自动展开

4. **连接**
   - 模型页仅在 `transport` 显示「进入导学」
   - `?learn=1` 自动打开导学
   - 教材模型链接对 transport 自动加 `&learn=1`
   - 导学头部链接回教材 `textbook.html?book=3`

5. **文档**
   - 更新 `COURSE-MAP.md` 的状态
   - 更新 README 的导学说明
   - 更新站内三页 onboarding 的第 2 页，不增加第 4 页

### 科学内容必须正确

- Na⁺/K⁺ 泵每循环：3 Na⁺ 出、2 K⁺ 入、1 ATP 水解，净泵出 1 个正电荷。
- E1 对 Na⁺ 亲和力高；磷酸化转为 E2；E2 对 K⁺ 亲和力高；去磷酸化回到 E1。
- Na⁺ 从胞质侧结合，向胞外释放；K⁺ 从胞外结合，向胞内释放。
- 哇巴因抑制泵，不是通道阻断剂。
- ATP=0 时泵循环停止，梯度因漏通道逐渐耗散。
- 页面/教材范围：pp. 62–68；不要编造实验数据。

### 约束

- 不引入外部图片、纹理、字体、模型或分析脚本。
- 不手工改 `docs/` 或 `client.js`；改源码后运行构建。
- 不改变 14 个模型 ID、7 幕或 16/44 结构。
- 不提交 token、私钥、`.env`、学生个人信息。
- 不把内部推理、系统提示或隐藏指令写进课程内容。
- 不声称已完成真实学生试用。

### 验证

```bash
node build.mjs
node build-demo.mjs
```

浏览器检查：

1. `docs/models.html?model=transport&learn=1` 自动打开导学；
2. 点击 4 个结构 → 下一步；
3. 播放/暂停/步进机制；
4. 预测后把 ATP 设为 0，运行，检查结果文案；
5. 做对排序和分析，检查完成态；
6. 关闭导学，标签与自动旋转恢复；
7. 390×844 手机视图，点“看模型”，点泵，面板自动展开；
8. 无 console error。

最后提交，并回报：

- 改了哪些文件；
- 哪些验收项通过；
- 哪些内容仍需学科审校/学生试用；
- 当前 commit。
