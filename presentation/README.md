# Cell Atlas 介绍与计划材料

> 当前仓库：<https://github.com/HerryAtlas/cell-atlas>  
> 在线演示：<https://herryatlas.github.io/cell-atlas/>  
> 版本日期：2026-10

## 文件

| 文件 | 用途 |
|---|---|
| `Cell-Atlas-产品介绍与未来构想.pptx` | 15 页产品介绍，含逐页演讲备注 |
| `Cell-Atlas-产品介绍与未来构想.pdf` | 可直接转发的 PDF |
| `演讲提纲.md` | 10–12 分钟讲稿、5 分钟短版、Demo 脚本、Q&A |
| `Cell-Atlas-团队与算力合作计划书.docx` | 16 页团队招募与算力合作计划书，可编辑 |
| `Cell-Atlas-团队与算力合作计划书.pdf` | 可直接发送的 PDF |

## 重新生成

```bash
python build_deck.py
python build_plan.py
```

`build_deck.py` 和 `build_plan.py` 使用 `assets/` 中的裁剪截图；截图来源于公开演示与浏览器回归结果。

## 对外口径

- 当前是 **MVP**，不是完成品。
- 16 章 / 44 节是内容地图，不等于 44 节都已完成互动化。
- 已完整互动化：**2 / 44** 节。
- 14 个模型：8 个结构模型 + 6 个实验方法模型。
- AI 助教、云记忆、教师 dashboard、手势交互尚未接入主流程。
- 当前仓库与演示地址以上方链接为准；旧 Netlify 部署可能仍在线，但不作为主地址。
