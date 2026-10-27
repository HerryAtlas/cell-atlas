# Cell Atlas Prompt Pack

这是 Cell Atlas 这轮功能建设的可复用提示词包，面向 Codex / DeepSeek Harness / 其它编码代理。它不是聊天记录，也不包含系统提示、私有凭据或提交包里的敏感文件。

## 包含内容

| 文件 | 用途 |
|---|---|
| `00-master-context.md` | 项目快照、硬约束、相关文件、验证命令 |
| `01-product-roadmap.md` | 10 步课程产品路线图与本轮状态 |
| `02-transport-lesson-spec.md` | 跨膜运输样板课的详细产品与交互规格 |
| `03-rebuild-prompt.md` | 一次性重建「跨膜运输导学」的实现提示词 |
| `04-expand-chapter-template.md` | 扩展到下一节的模板与质量门 |
| `05-content-review-prompt.md` | 学科内容审校提示词 |
| `06-student-trial-prompt.md` | 真实学生试用脚本与记录模板 |
| `07-next-steps.md` | 第 7–10 步的优先 backlog |
| `MANIFEST.md` | 文件清单与 zip 校验信息 |
| `cell-atlas-prompt-pack.zip` | 以上 Markdown 的打包下载 |

## 使用顺序

1. 把 `00-master-context.md` 和 `03-rebuild-prompt.md` 一起交给编码代理；
2. 用 `05-content-review-prompt.md` 做学科审校；
3. 用 `06-student-trial-prompt.md` 做 3–5 人试用；
4. 用 `04-expand-chapter-template.md` 扩展下一节；
5. 每次改动同步 `COURSE-MAP.md`、`README.md` 和站内使用说明。

## 重要边界

- 不把密钥、token、`.env`、SSH 私钥或学生个人信息放进提示词或仓库。
- 不编造教材页码、实验数据或学生试用结果。
- 3D 模型是教学示意，不按真实分子比例；实验模拟要明确假设。
- 生成内容必须回到 `AGENTS.md` 的 14 个稳定模型 ID、16/44 结构和“无外部视觉素材”约束。

## 当前对应版本

- 功能提交：`12ae379`（使用说明）之前的 `9a61e4c`（导学第一版）
- 线上入口：<https://herryatlas.github.io/cell-atlas/models.html?model=transport&learn=1>
- 课程地图：[`../COURSE-MAP.md`](../COURSE-MAP.md)

提示词包是开发与教研资产，不是课程内容本身；正式教学内容仍以 `src/textbook-part*.js`、`src/transport-lesson.js` 和审校后的页面为准。
