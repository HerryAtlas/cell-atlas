from __future__ import annotations

import os
from pathlib import Path

from PIL import Image
from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import MSO_ANCHOR, PP_ALIGN
from pptx.oxml.ns import qn
from pptx.util import Inches, Pt

ROOT = Path(r"D:\AI\DSH\细胞图谱\cell-atlas")
OUT = Path(r"D:\AI\DSH\细胞图谱\cell-atlas\presentation")
ASSETS = OUT / "assets"
ASSETS.mkdir(parents=True, exist_ok=True)

BG = "02070A"
BG2 = "061217"
INK = "E8F8F4"
MUTED = "A7C0BC"
FAINT = "66837F"
ACCENT = "7FF7E4"
GOLD = "FFD899"
PINK = "FF9FC9"
LINE = "173A3A"
BODY = "Microsoft YaHei"
DISPLAY = "SimSun"

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)
SLIDE_W = prs.slide_width
SLIDE_H = prs.slide_height


def rgb(value: str) -> RGBColor:
    return RGBColor.from_string(value)


def set_alpha(shape, alpha: float):
    """Set uniform fill transparency on a solid shape (0..1 opacity)."""
    fill = shape.fill
    fill.solid()
    fill.fore_color.rgb = rgb(BG)
    srgb = fill._xPr.find(qn("a:solidFill")).find(qn("a:srgbClr"))
    alpha_el = srgb.makeelement(qn("a:alpha"), {"val": str(int(alpha * 100000))})
    srgb.append(alpha_el)


def rect(slide, x, y, w, h, fill=None, line=None, radius=False, alpha=None):
    shape_type = MSO_SHAPE.ROUNDED_RECTANGLE if radius else MSO_SHAPE.RECTANGLE
    shape = slide.shapes.add_shape(shape_type, Inches(x), Inches(y), Inches(w), Inches(h))
    if radius:
        shape.adjustments[0] = 0.08
    if fill:
        shape.fill.solid()
        shape.fill.fore_color.rgb = rgb(fill)
        if alpha is not None:
            srgb = shape.fill._xPr.find(qn("a:solidFill")).find(qn("a:srgbClr"))
            srgb.append(srgb.makeelement(qn("a:alpha"), {"val": str(int(alpha * 100000))}))
    else:
        shape.fill.background()
    if line:
        shape.line.color.rgb = rgb(line)
        shape.line.width = Pt(0.7)
    else:
        shape.line.fill.background()
    shape.text_frame.text = ""
    return shape


def text(slide, value, x, y, w, h, size=18, color=INK, font=BODY, bold=False,
         align=PP_ALIGN.LEFT, anchor=MSO_ANCHOR.TOP, line_spacing=1.15,
         margins=(0, 0, 0, 0)):
    box = slide.shapes.add_textbox(Inches(x), Inches(y), Inches(w), Inches(h))
    tf = box.text_frame
    tf.clear()
    tf.word_wrap = True
    tf.vertical_anchor = anchor
    tf.margin_left = Inches(margins[0])
    tf.margin_right = Inches(margins[1])
    tf.margin_top = Inches(margins[2])
    tf.margin_bottom = Inches(margins[3])
    p = tf.paragraphs[0]
    p.alignment = align
    p.line_spacing = line_spacing
    run = p.add_run()
    run.text = value
    run.font.name = font
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.color.rgb = rgb(color)
    return box


def kicker(slide, value, x=0.62, y=0.32, w=9.8):
    text(slide, value, x, y, w, 0.3, size=8.5, color=ACCENT, font=BODY, bold=False)
    rect(slide, x, y + 0.23, 0.32, 0.014, fill=ACCENT)


def title(slide, value, y=0.82, size=32, x=0.62, w=11.7, color=INK):
    text(slide, value, x, y, w, 1.0, size=size, color=color, font=DISPLAY,
         line_spacing=1.05)


def footer(slide, idx, total=15, label="CELL ATLAS / 产品介绍与未来构想"):
    rect(slide, 0.62, 7.08, 12.08, 0.01, fill=LINE)
    text(slide, label, 0.62, 7.16, 8.5, 0.2, size=7, color=FAINT, font=BODY)
    text(slide, f"{idx:02d} / {total:02d}", 11.7, 7.16, 1.0, 0.2, size=7,
         color=FAINT, font=BODY, align=PP_ALIGN.RIGHT)


def new_slide(idx, section, bg=BG):
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    rect(slide, 0, 0, 13.333, 7.5, fill=bg)
    # restrained optical grid
    for x in (0.62, 6.3, 12.08):
        rect(slide, x, 0.0, 0.006, 7.5, fill=LINE, alpha=0.35)
    for y in (0.55, 6.98):
        rect(slide, 0, y, 13.333, 0.006, fill=LINE, alpha=0.28)
    kicker(slide, section)
    footer(slide, idx)
    return slide


def image_fill(slide, path, x, y, w, h, overlay=0.0, border=True):
    im = Image.open(path).convert("RGB")
    target_ratio = w / h
    ratio = im.width / im.height
    if ratio > target_ratio:
        nw = int(im.height * target_ratio)
        left = (im.width - nw) // 2
        im = im.crop((left, 0, left + nw, im.height))
    else:
        nh = int(im.width / target_ratio)
        top = (im.height - nh) // 2
        im = im.crop((0, top, im.width, top + nh))
    out = ASSETS / (Path(path).stem + f"-{int(w*100)}x{int(h*100)}.jpg")
    im.save(out, quality=92)
    pic = slide.shapes.add_picture(str(out), Inches(x), Inches(y), Inches(w), Inches(h))
    if overlay:
        rect(slide, x, y, w, h, fill=BG, alpha=overlay)
    if border:
        rect(slide, x, y, w, h, fill=None, line="2B5855")
    return pic


def crop_model(src: Path, name: str, box: tuple[int, int, int, int]) -> Path:
    im = Image.open(src).convert("RGB")
    im = im.crop(box)
    out = ASSETS / name
    im.save(out, quality=94)
    return out


MODEL_NUCLEUS = crop_model(
    Path(r"D:\AI\DSH\细胞图谱\_cmit_build\all-nucleus.png"),
    "model-nucleus.jpg", (225, 70, 960, 900))
MODEL_TRANSPORT = crop_model(
    ROOT / "tests" / "browser-results" / "plugin-desktop-transport-entry.png",
    "model-transport.jpg", (220, 70, 930, 900))
MODEL_FRAP = crop_model(
    ROOT / "tests" / "browser-results" / "frap-desktop-experiment.png",
    "model-frap.jpg", (220, 70, 930, 900))


def image_panel(slide, path, x, y, w, h, caption=""):
    image_fill(slide, path, x, y, w, h, overlay=0.20)
    if caption:
        rect(slide, x + 0.18, y + h - 0.46, 0.22, 0.02, fill=ACCENT)
        text(slide, caption, x + 0.48, y + h - 0.52, w - 0.6, 0.3, size=8, color=MUTED)


def stat(slide, x, y, value, label, width=2.7):
    rect(slide, x, y, width, 1.05, fill=BG2, line=LINE, radius=True)
    text(slide, value, x + 0.18, y + 0.12, width - 0.25, 0.45, size=24, color=ACCENT, font=DISPLAY)
    text(slide, label, x + 0.18, y + 0.65, width - 0.25, 0.2, size=8.5, color=MUTED, font=BODY)


def bullets(slide, items, x, y, w, size=14, gap=0.46, color=MUTED):
    for i, item in enumerate(items):
        yy = y + i * gap
        rect(slide, x, yy + 0.11, 0.08, 0.08, fill=ACCENT)
        text(slide, item, x + 0.22, yy, w - 0.22, gap, size=size, color=color, font=BODY,
             line_spacing=1.2)


def notes(slide, value):
    slide.notes_slide.notes_text_frame.text = value


# ---------------------------------------------------------------------------
# 01 cover
# ---------------------------------------------------------------------------
s = prs.slides.add_slide(prs.slide_layouts[6])
image_fill(s, str(ROOT / "media" / "cover.jpg"), 0, 0, 13.333, 7.5, overlay=0.48, border=False)
rect(s, 0, 0, 0.08, 7.5, fill=ACCENT)
kicker(s, "CELL ATLAS / 胞宇", 0.82, 0.55)
text(s, "走进细胞的世界", 0.82, 1.65, 8.4, 0.9, size=48, color=INK, font=DISPLAY)
text(s, "一个浏览器里的 3D 细胞生物学课程", 0.86, 2.62, 8.2, 0.5, size=22, color=ACCENT, font=BODY)
rect(s, 0.86, 3.34, 0.52, 0.02, fill=ACCENT)
text(s, "从一节可完成的样板课，到一门可运营的课程。", 0.86, 3.58, 7.8, 0.55,
     size=15, color=MUTED, font=BODY)
text(s, "产品介绍与未来构想  /  2026.10", 0.86, 6.55, 7.0, 0.3, size=9, color=FAINT)
text(s, "16 章 · 44 节 · 14 个 3D 模型 · 2 节完整互动课", 0.86, 6.85, 11.0, 0.3,
     size=8, color=FAINT)
notes(s, "各位好，我是 Cell Atlas 的开发者。今天不讲一个宏大的平台，先请大家看一节已经能走完的细胞生物学课：学生进入一个浏览器里的三维细胞空间，通过点击结构、观察机制、做实验和完成练习，真正把知识走一遍。我们先从产品，再谈我们想把这件事带到哪里。")

# ---------------------------------------------------------------------------
# 02 problem
# ---------------------------------------------------------------------------
s = new_slide(2, "01 / WHY")
title(s, "细胞生物学，难在“看见”", y=0.88, size=33, w=6.0)
text(s, "课本上的细胞是静态的，视频里的细胞是别人的。学生需要的是能自己操作的空间。",
     0.65, 2.22, 6.0, 0.9, size=15, color=MUTED, line_spacing=1.6)
bullets(s, [
    "平面图讲不清三维关系：膜、通道、泵、细胞器都在同一个空间里。",
    "视频看懂了，动手仍不会：知识没有经过“操作—反馈—修正”。",
    "模型、教材、练习彼此割裂：学生不知道下一步该做什么。",
], 0.68, 3.4, 5.8, size=12.5, gap=0.8)
rect(s, 0.68, 5.95, 5.9, 0.72, fill=BG2, line=LINE, radius=True)
text(s, "学生不是缺信息，而是缺一个可以操作的空间。", 0.9, 6.13, 5.45, 0.3,
     size=13, color=ACCENT, font=DISPLAY)
image_panel(s, str(MODEL_NUCLEUS), 7.1, 1.0, 5.55, 5.5,
            "细胞核 / 3D specimen")
notes(s, "我们先说问题。细胞生物学最难的不是背名词，而是空间关系和动态过程。传统材料要么是二维图，要么是不可操作的视频。学生看完之后，仍然不知道自己有没有真正理解。我们要补的不是更多信息，而是一个可以操作、可以犯错、可以修正的空间。")

# ---------------------------------------------------------------------------
# 03 product
# ---------------------------------------------------------------------------
s = new_slide(3, "02 / PRODUCT")
title(s, "不是一套视频，而是一间可操作的细胞教室", y=0.86, size=27, w=5.7)
text(s, "把教材、3D 模型、互动实验和练习，放进同一个浏览器。",
     0.65, 2.2, 5.55, 0.55, size=15, color=MUTED)
bullets(s, [
    "16 章 / 44 节：与教材章节和页码对齐。",
    "14 个模型：8 个结构模型 + 6 个实验方法模型。",
    "两节完整互动课：跨膜运输、膜的流动性与 FRAP。",
], 0.68, 3.05, 5.5, size=13, gap=0.62)
stat(s, 0.68, 5.0, "2 / 44", "已完整互动化的节数")
stat(s, 3.55, 5.0, "72", "自动化测试")
image_panel(s, str(MODEL_TRANSPORT),
            6.55, 0.95, 6.1, 5.35, "跨膜运输 / 互动课")
notes(s, "产品是什么？一句话：一个可以在浏览器里操作细胞的教学空间。它不是把课本做成视频，而是把章节、模型、实验和练习接到同一条学习路径上。现在已经有 16 章 44 节的内容地图、14 个程序化模型，以及两节可以完整走完的互动课。")

# ---------------------------------------------------------------------------
# 04 learning loop
# ---------------------------------------------------------------------------
s = new_slide(4, "03 / LEARNING LOOP")
title(s, "四个阶段，把“看懂”变成“做对”", y=0.88, size=33)
items = [
    ("01", "认识结构", "点击膜、通道、泵、ATP，在模型里定位角色。"),
    ("02", "观察机制", "播放 E1–E2 循环，或逐步查看每一步。"),
    ("03", "动手探索", "改条件、做预测、运行实验，比较结果。"),
    ("04", "场景练习", "辨认、排序、解释，完成迁移。"),
]
for i, (no, name, desc) in enumerate(items):
    x = 0.65 + i * 3.08
    rect(s, x, 1.95, 2.82, 3.2, fill=BG2, line=LINE, radius=True)
    text(s, no, x + 0.2, 2.12, 0.7, 0.35, size=10, color=ACCENT, font=BODY)
    text(s, name, x + 0.2, 2.55, 2.35, 0.4, size=21, color=INK, font=DISPLAY)
    text(s, desc, x + 0.2, 3.15, 2.4, 1.3, size=12, color=MUTED, line_spacing=1.55)
    rect(s, x + 0.2, 4.65, 0.38, 0.02, fill=ACCENT)
text(s, "每次点击、每次作答，都是课程引擎的证据；不依赖 AI，也能完成。",
     0.65, 5.55, 11.9, 0.45, size=14, color=ACCENT, font=DISPLAY)
text(s, "自由浏览被允许，但结课要求所有阶段都有当前有效证据。",
     0.65, 6.14, 11.9, 0.35, size=11, color=FAINT)
notes(s, "一节课被拆成四个阶段。认识结构时，学生不能只点“下一步”，必须真的点到四个结构；观察机制时，五个步骤都要看过；动手探索时，要选预测、改条件、跑目标实验；最后用辨认、排序和分析完成迁移。每一次操作都会成为课程引擎的证据，而不是只看一个播放进度。")

# ---------------------------------------------------------------------------
# 05 engine
# ---------------------------------------------------------------------------
s = new_slide(5, "04 / ENGINE")
title(s, "课程引擎是核心，AI 只是可选层", y=0.88, size=31)
# architecture boxes
rect(s, 0.7, 2.2, 2.2, 0.95, fill=BG2, line="2B5855", radius=True)
text(s, "课程定义", 0.9, 2.42, 1.8, 0.3, size=15, color=INK, font=BODY)
text(s, "flow / lesson / experiment", 0.9, 2.78, 1.9, 0.25, size=7.5, color=MUTED)
rect(s, 3.65, 2.2, 2.2, 0.95, fill="0B2E2B", line=ACCENT, radius=True)
text(s, "课程引擎", 3.85, 2.35, 1.8, 0.3, size=16, color=ACCENT, font=BODY)
text(s, "evidence · gating · snapshot", 3.85, 2.78, 1.9, 0.25, size=7, color=MUTED)
rect(s, 6.6, 2.2, 2.2, 0.95, fill=BG2, line="2B5855", radius=True)
text(s, "UI / 3D 场景", 6.8, 2.42, 1.8, 0.3, size=15, color=INK, font=BODY)
text(s, "操作 · 反馈 · 进度", 6.8, 2.78, 1.9, 0.25, size=7.5, color=MUTED)
rect(s, 9.55, 2.2, 2.6, 0.95, fill=BG2, line="3B4A68", radius=True)
text(s, "可选 AI 助教", 9.75, 2.42, 2.2, 0.3, size=15, color=GOLD, font=BODY)
text(s, "只读上下文 · 解释 / 提示", 9.75, 2.78, 2.2, 0.25, size=7.5, color=MUTED)
for x in (2.9, 5.85, 8.8):
    text(s, "→", x, 2.43, 0.55, 0.3, size=20, color=ACCENT, font=BODY)
# read-only branch
rect(s, 3.85, 3.72, 3.85, 0.01, fill=LINE)
rect(s, 3.85, 3.58, 0.01, 0.3, fill=LINE)
text(s, "只读观察者 / 不允许标记完成", 4.05, 3.82, 4.4, 0.3, size=9, color=GOLD)
text(s, "核心原则", 0.7, 4.55, 1.2, 0.3, size=8, color=ACCENT, font=BODY)
text(s, "没有 AI，课程也必须能完成。", 0.7, 4.88, 5.7, 0.65, size=22, color=INK, font=DISPLAY)
bullets(s, [
    "证据驱动：事件按阶段和轮次隔离，撤销不删除历史。",
    "确定性：目标实验、完成门槛和快照校验都由代码决定。",
    "可恢复：本地保存进度；刷新继续，不上传答案。",
], 0.7, 5.65, 6.3, size=11, gap=0.42, color=MUTED)
text(s, "AI 可以解释、追问、给提示；不能替学生完成，也不能改成绩。",
     7.15, 5.55, 5.45, 0.95, size=13, color=GOLD, line_spacing=1.6)
notes(s, "这是产品的技术核心。课程引擎独立于 UI、Three.js 和 AI，负责证据、阶段门槛、完成条件和快照。AI 未来只能拿到只读的上下文，做解释、追问和提示；它不能 dispatch，不能标记完成。这样即使 AI 不可用，课程仍然能上完。")

# ---------------------------------------------------------------------------
# 06 content
# ---------------------------------------------------------------------------
s = new_slide(6, "05 / CONTENT")
title(s, "两节完整互动课，44 节内容地图", y=0.88, size=31)
# two lesson cards
for i, (name, en, bullets_, color) in enumerate([
    ("跨膜运输", "TRANSPORT", ["5 步 E1–E2 机制", "ATP 0% 目标实验", "三道练习 + 记录"], "0B2E2B"),
    ("膜的流动性与 FRAP", "MEMBRANE FLUIDITY & FRAP", ["4 步漂白—交换—平台", "可移动比例 / 交换速度", "平台 / 半时双指标"], "2B2014"),
]):
    x = 0.65 + i * 4.0
    rect(s, x, 1.75, 3.7, 3.35, fill=color, line=LINE, radius=True)
    text(s, en, x + 0.25, 1.98, 3.2, 0.3, size=7.5, color=GOLD, font=BODY)
    text(s, name, x + 0.25, 2.3, 3.2, 0.55, size=20, color=INK, font=DISPLAY)
    for j, b in enumerate(bullets_):
        text(s, "·  " + b, x + 0.25, 3.05 + j * 0.42, 3.1, 0.35, size=10.5, color=MUTED)
    text(s, "已完成", x + 0.25, 4.68, 1.0, 0.25, size=8, color=ACCENT, font=BODY)
text(s, "内容地图：16 章 / 44 节 / 14 个模型", 8.4, 1.9, 4.2, 0.35,
     size=9, color=ACCENT, font=BODY)
text(s, "已完整互动化", 8.4, 2.35, 4.2, 0.3, size=8, color=FAINT, font=BODY)
text(s, "2 / 44", 8.4, 2.72, 3.5, 0.7, size=38, color=INK, font=DISPLAY)
text(s, "下一节：FRET", 8.4, 3.55, 3.5, 0.3, size=12, color=GOLD, font=BODY)
text(s, "其余章节已有教材内容、页码、学习目标和模型映射；尚缺同等级的互动脚本与练习。",
     8.4, 3.95, 4.0, 0.95, size=10.5, color=MUTED, line_spacing=1.6)
image_panel(s, str(ROOT / "tests" / "browser-results" / "frap-desktop-experiment.png"),
            8.35, 5.05, 4.3, 1.55, "FRAP / 对照曲线")
notes(s, "内容侧我们现在有两节完整互动课：跨膜运输和 FRAP。跨膜运输有五个机制步骤、ATP 0% 的目标实验和三道练习；FRAP 有四个机制步骤、可移动比例和交换速度、恢复平台和半时两个指标。14 个模型和 16 章 44 节已经对齐，但目前只有 2/44 节达到完整互动化，这是我们的真实进度。")

# ---------------------------------------------------------------------------
# 07 technology
# ---------------------------------------------------------------------------
s = new_slide(7, "06 / TECHNOLOGY")
title(s, "全程序化：零外部模型与贴图", y=0.88, size=31, w=6.0)
text(s, "所有几何、材质、粒子和标签都由代码生成；不依赖下载的 3D 资产。",
     0.65, 2.25, 5.7, 0.6, size=14, color=MUTED)
for i, (name, desc) in enumerate([
    ("PROCEDURAL 3D", "几何 / 着色器 / 粒子 / 标签"),
    ("TWO TARGETS", "静态网页 + DSH 聊天插件"),
    ("VERIFIED", "72 个单元测试 + 真实浏览器回归"),
]):
    y = 3.15 + i * 1.02
    text(s, name, 0.7, y, 2.2, 0.3, size=8, color=ACCENT, font=BODY)
    text(s, desc, 2.8, y - 0.04, 3.5, 0.55, size=15, color=INK, font=BODY)
    rect(s, 0.7, y + 0.56, 5.8, 0.01, fill=LINE)
text(s, "同一套内容，两种到达方式。", 0.7, 6.35, 5.8, 0.45, size=18, color=ACCENT, font=DISPLAY)
image_panel(s, str(MODEL_FRAP),
            7.0, 0.95, 5.65, 5.7, "DSH 插件 / 同一课程在聊天内打开")
notes(s, "技术上我们坚持全程序化：没有下载的模型、贴图、HDR 或字体。好处是资产轻、可版本化、视觉统一，也方便在不同终端复用。现在同一套课程可以部署成公开网页，也可以作为 DSH 聊天插件在对话里打开。")

# ---------------------------------------------------------------------------
# 08 delivery
# ---------------------------------------------------------------------------
s = new_slide(8, "07 / DELIVERY")
title(s, "学生在哪里，课程就到哪里", y=0.88, size=33)
# two panels
for i, (label, title_, desc, img) in enumerate([
    ("PUBLIC WEB", "公开网页", "零安装、可分享；适合课前预习、课后复习和公开展示。",
     ROOT / "tests" / "browser-results" / "frap-desktop-experiment.png"),
    ("DSH PLUGIN", "聊天内插件", "不离开对话；模型、课程和进度在同一个上下文里。",
     ROOT / "tests" / "browser-results" / "plugin-desktop-transport-entry.png"),
]):
    x = 0.65 + i * 6.2
    rect(s, x, 1.7, 5.85, 4.9, fill=BG2, line=LINE, radius=True)
    image_fill(s, str(img), x + 0.18, 1.88, 5.5, 2.55, overlay=0.22)
    text(s, label, x + 0.22, 4.65, 5.3, 0.25, size=8, color=ACCENT, font=BODY)
    text(s, title_, x + 0.22, 4.92, 5.3, 0.45, size=22, color=INK, font=DISPLAY)
    text(s, desc, x + 0.22, 5.48, 5.3, 0.8, size=11, color=MUTED, line_spacing=1.55)
notes(s, "交付上我们做了两条路径。公开网页适合零安装分享，学生打开链接就能用；DSH 插件则把同一套模型和课程带进聊天，不离开对话。两条路径共享同一套内容、同一套引擎和同一套判定，不是两个不同的产品。")

# ---------------------------------------------------------------------------
# 09 users
# ---------------------------------------------------------------------------
s = new_slide(9, "08 / USERS")
title(s, "三种使用者，一个学习闭环", y=0.88, size=33)
users = [
    ("学生", "自己走一遍", "点结构、看机制、做目标实验；刷新后继续，错误可以重试。"),
    ("教师", "看见学习过程", "教材页码、章节映射、完成条件和练习反馈都在同一条路径上。"),
    ("内容 / 技术团队", "持续扩展", "课程定义、实验、模型和进度模块解耦，下一节课可以复用模板。"),
]
for i, (name, lead, desc) in enumerate(users):
    x = 0.65 + i * 4.05
    rect(s, x, 1.85, 3.72, 3.6, fill=BG2, line=LINE, radius=True)
    text(s, f"0{i+1}", x + 0.25, 2.05, 0.6, 0.3, size=9, color=ACCENT, font=BODY)
    text(s, name, x + 0.25, 2.48, 3.1, 0.5, size=23, color=INK, font=DISPLAY)
    text(s, lead, x + 0.25, 3.05, 3.1, 0.3, size=11, color=GOLD, font=BODY)
    text(s, desc, x + 0.25, 3.55, 3.1, 1.5, size=11.5, color=MUTED, line_spacing=1.55)
text(s, "不是“老师讲、学生看”，而是“学生操作、系统反馈、教师看见”。",
     0.65, 5.95, 11.9, 0.45, size=14, color=ACCENT, font=DISPLAY)
notes(s, "这套东西对三类人有价值。对学生，它是一个可以自己走完的空间；对教师，它把教材页码、学习目标和练习反馈连起来，能看见学生卡在哪；对内容和技术团队，课程定义、实验、模型和进度是解耦的，可以用同一套模板继续扩展。")

# ---------------------------------------------------------------------------
# 10 honest status
# ---------------------------------------------------------------------------
s = new_slide(10, "09 / HONEST STATUS")
title(s, "今天能做什么，不能做什么", y=0.88, size=33)
cols = [
    ("已经可用", ACCENT, [
        "两节完整互动课",
        "14 个可旋转的 3D 模型",
        "公开网页 + DSH 插件",
        "本地保存、刷新续学",
    ]),
    ("正在补齐", GOLD, [
        "其余 42 节的互动脚本",
        "FRET 第三节样板课",
        "课程注册表与作者工具",
        "无障碍与更多设备适配",
    ]),
    ("尚未接入", FAINT, [
        "AI 助教 / Jarvis",
        "云端记忆与账号",
        "教师 dashboard",
        "课堂级分析",
    ]),
]
for i, (head, color, items_) in enumerate(cols):
    x = 0.65 + i * 4.05
    rect(s, x, 1.75, 3.72, 3.9, fill=BG2, line=LINE, radius=True)
    rect(s, x, 1.75, 3.72, 0.05, fill=color)
    text(s, head, x + 0.25, 2.0, 3.1, 0.4, size=14, color=color, font=BODY)
    for j, item in enumerate(items_):
        text(s, "·  " + item, x + 0.25, 2.62 + j * 0.56, 3.1, 0.4, size=11, color=MUTED)
text(s, "这是一个可运行的 MVP，不是完成品。", 0.65, 6.05, 11.9, 0.45,
     size=18, color=INK, font=DISPLAY)
notes(s, "我想诚实地讲今天的边界。已经可用的是两节课、14 个模型、两个交付端和本地进度；正在补齐的是其余 42 节、FRET、作者工具和无障碍；尚未接入的是 AI、云记忆、教师 dashboard 和课堂分析。现在它是一个可运行的 MVP，不是完成品。")

# ---------------------------------------------------------------------------
# 11 roadmap
# ---------------------------------------------------------------------------
s = new_slide(11, "10 / ROADMAP")
title(s, "未来 12 个月：从样板课到课程平台", y=0.88, size=31)
phases = [
    ("0–3 月", "内容深度", ["FRET 第三节样板课", "5–8 节完整互动课", "课程模板 + 教师试用"]),
    ("3–6 月", "教学闭环", ["可选 AI 助教", "教师 dashboard", "1–2 个课堂试点"]),
    ("6–12 月", "平台化", ["课程包与校本部署", "LMS / 课堂分析", "本地优先的记忆", "手势 / AR 交互原型"]),
]
for i, (period, name, items_) in enumerate(phases):
    x = 0.65 + i * 4.05
    rect(s, x, 1.8, 3.72, 4.25, fill=BG2, line=LINE, radius=True)
    text(s, period, x + 0.25, 2.02, 3.0, 0.3, size=9, color=ACCENT, font=BODY)
    text(s, name, x + 0.25, 2.4, 3.1, 0.45, size=20, color=INK, font=DISPLAY)
    for j, item in enumerate(items_):
        text(s, "·  " + item, x + 0.25, 3.1 + j * 0.62, 3.1, 0.4, size=11, color=MUTED)
    if i < 2:
        text(s, "→", x + 3.76, 3.55, 0.3, 0.35, size=18, color=ACCENT)
text(s, "每一步都不依赖付费 AI，也不把基础课程锁在某个平台里。",
     0.65, 6.35, 11.9, 0.35, size=11, color=FAINT)
notes(s, "路线图分三步。先补内容深度：FRET、五到八节课、课程模板和教师试用；再做教学闭环：可选 AI 助教、教师 dashboard、一到两个课堂试点；最后平台化：课程包、校本部署、LMS 和课堂分析，以及手势 / AR 交互原型。每一步都保持基础课程在没有 AI、没有付费平台的情况下可运行。")

# ---------------------------------------------------------------------------
# 12 AI
# ---------------------------------------------------------------------------
s = new_slide(12, "11 / AI")
title(s, "AI 是助教，不是裁判", y=0.88, size=34)
text(s, "先保证没有 AI 也能学完，再让 AI 让学习更好。", 0.65, 1.72, 8.0, 0.45,
     size=17, color=ACCENT, font=DISPLAY)
# diagram
rect(s, 0.7, 2.65, 2.65, 1.2, fill=BG2, line=ACCENT, radius=True)
text(s, "课程引擎", 0.92, 2.88, 2.2, 0.35, size=16, color=ACCENT, font=BODY)
text(s, "证据 / 阶段 / 完成", 0.92, 3.3, 2.2, 0.3, size=8, color=MUTED)
text(s, "→", 3.55, 3.05, 0.5, 0.35, size=20, color=ACCENT)
rect(s, 4.15, 2.65, 2.65, 1.2, fill=BG2, line="3B4A68", radius=True)
text(s, "只读上下文", 4.37, 2.88, 2.2, 0.35, size=16, color=INK, font=BODY)
text(s, "阶段 / 汇总 / 无答案", 4.37, 3.3, 2.2, 0.3, size=8, color=MUTED)
text(s, "→", 6.98, 3.05, 0.5, 0.35, size=20, color=ACCENT)
rect(s, 7.55, 2.65, 2.65, 1.2, fill=BG2, line="3B4A68", radius=True)
text(s, "AI 助教", 7.77, 2.88, 2.2, 0.35, size=16, color=GOLD, font=BODY)
text(s, "解释 / 追问 / 提示", 7.77, 3.3, 2.2, 0.3, size=8, color=MUTED)
text(s, "不能 dispatch · 不能改完成 · 不能看完整答案", 0.7, 4.3, 10.8, 0.35,
     size=11, color=GOLD)
bullets(s, [
    "最小上下文：只给当前阶段、当前步骤和汇总进度。",
    "明确同意：未来接入记忆或云端前，先让学生选择。",
    "可离线：AI 断开、超时或拒绝服务时，课程继续。",
], 0.7, 5.0, 5.8, size=11, gap=0.48)
rect(s, 7.0, 4.65, 5.55, 1.85, fill="16120C", line="4A3822", radius=True)
text(s, "我们希望 AI 改变的是“解释方式”，不是“评价权力”。",
     7.25, 4.95, 5.05, 0.95, size=17, color=GOLD, font=DISPLAY, line_spacing=1.3)
notes(s, "AI 的部分我们很克制。它只拿只读上下文，做解释、追问和提示；它不能推进阶段、不能标记完成、不能看完整答案。未来如果接记忆或云端，一定先做明确同意。更重要的是，AI 断开时课程仍然能继续，因为完成条件在课程引擎里，不在模型里。")

# ---------------------------------------------------------------------------
# 13 spatial interaction
# ---------------------------------------------------------------------------
s = new_slide(13, "12 / SPATIAL INTERACTION")
title(s, "手势交互：可选，不强迫", y=0.88, size=32, w=5.7)
text(s, "让身体成为输入设备；鼠标、触屏和键盘仍然永远可用。",
     0.65, 1.72, 5.9, 0.45, size=14, color=MUTED)
gestures = [
    ("01", "指向识别", "食指射线点选膜、通道、泵或细胞器。"),
    ("02", "捏合缩放", "拇指—食指距离控制镜头与结构层级。"),
    ("03", "双手拆层", "两只手拉开膜、细胞器，或并排做对照。"),
]
for i, (no, name, desc) in enumerate(gestures):
    y = 2.35 + i * 1.02
    text(s, no, 0.68, y, 0.45, 0.25, size=8, color=ACCENT, font=BODY)
    text(s, name, 1.15, y - 0.04, 1.55, 0.35, size=14, color=INK, font=BODY)
    text(s, desc, 2.78, y - 0.04, 3.55, 0.55, size=10.5, color=MUTED, line_spacing=1.35)
    rect(s, 0.68, y + 0.58, 5.55, 0.01, fill=LINE)

# gesture field diagram
rect(s, 6.55, 1.65, 5.9, 3.65, fill=BG2, line=LINE, radius=True)
cx, cy = 9.5, 3.45
for w, h, color in [(2.7, 2.0, "2B5855"), (1.95, 1.45, "3B6B64"), (1.2, 0.9, ACCENT)]:
    ring = s.shapes.add_shape(MSO_SHAPE.OVAL, Inches(cx - w / 2), Inches(cy - h / 2), Inches(w), Inches(h))
    ring.fill.background()
    ring.line.color.rgb = rgb(color)
    ring.line.width = Pt(0.8)
rect(s, cx - 0.02, cy - 1.2, 0.04, 2.4, fill=ACCENT)
rect(s, cx - 1.55, cy - 0.02, 3.1, 0.04, fill=ACCENT)
dot = s.shapes.add_shape(MSO_SHAPE.OVAL, Inches(cx - 0.1), Inches(cy - 0.1), Inches(0.2), Inches(0.2))
dot.fill.solid(); dot.fill.fore_color.rgb = rgb(ACCENT); dot.line.fill.background()
text(s, "POINT", 7.0, 1.92, 1.2, 0.25, size=8, color=ACCENT, font=BODY)
text(s, "PINCH", 10.9, 2.98, 1.2, 0.25, size=8, color=ACCENT, font=BODY)
text(s, "PULL", 7.0, 4.55, 1.2, 0.25, size=8, color=GOLD, font=BODY)
text(s, "可选输入：摄像头 / 深度相机 / WebXR", 7.0, 4.95, 4.7, 0.25, size=8, color=FAINT)
text(s, "先做“指向 + 捏合”，再考虑双手", 7.0, 5.22, 4.7, 0.25, size=8, color=FAINT)

# input adapter strip
rect(s, 0.65, 5.62, 12.0, 1.22, fill="081B1D", line="1E4A48", radius=True)
text(s, "INPUT ADAPTER", 0.9, 5.8, 1.8, 0.25, size=7.5, color=ACCENT, font=BODY)
text(s, "鼠标 / 触屏 / 摄像头 / 深度相机 / WebXR", 0.9, 6.1, 5.6, 0.3, size=11, color=INK, font=BODY)
text(s, "→  语义动作  →  课程引擎", 6.5, 6.1, 4.5, 0.3, size=11, color=GOLD, font=BODY)
text(s, "可选开启 · 摄像头本地处理、不录视频 · 只有教学增益成立才上线",
     0.9, 6.48, 11.2, 0.25, size=8.5, color=MUTED)
notes(s, "未来交互我们想加手势，但不会把它设成必选项。对课程来说，手势只是输入层：指向、捏合、双手拆层，最后都要翻译成同一个语义动作，再交给课程引擎。这样鼠标、触屏、摄像头、深度相机甚至 WebXR 都能接，但课程判定不变。第一阶段只做指向和捏合，摄像头本地处理、不录视频，并且只在确实比鼠标更自然时才启用。")


# ---------------------------------------------------------------------------
# 14 collaboration
# ---------------------------------------------------------------------------
s = new_slide(14, "13 / COLLABORATION")
title(s, "我们在找 3–5 个试点课堂", y=0.88, size=33)
steps = [
    ("01", "选一节最难的课", "从跨膜运输或 FRAP 开始，带一个真实的教学目标来。"),
    ("02", "4–6 周试点", "学生用、教师看；我们根据反馈调整课程和模型。"),
    ("03", "一起看证据", "完成率、停留时间、错误分布、前后测，而不是只看“好不好看”。"),
]
for i, (no, name, desc) in enumerate(steps):
    x = 0.65 + i * 4.05
    text(s, no, x, 1.9, 0.5, 0.3, size=9, color=ACCENT, font=BODY)
    text(s, name, x, 2.32, 3.4, 0.5, size=21, color=INK, font=DISPLAY)
    text(s, desc, x, 3.0, 3.35, 1.2, size=12, color=MUTED, line_spacing=1.6)
    rect(s, x, 2.18, 3.35, 0.01, fill=LINE)
text(s, "合作方式", 0.65, 4.65, 1.2, 0.3, size=8, color=ACCENT, font=BODY)
for i, item in enumerate(["开放核心：公开网页与课程引擎", "课程共建：教材 / 模型 / 练习", "校本部署：全校或课程包"]):
    x = 0.65 + i * 4.05
    rect(s, x, 5.0, 3.7, 0.75, fill=BG2, line=LINE, radius=True)
    text(s, item, x + 0.18, 5.18, 3.35, 0.4, size=10, color=MUTED)
text(s, "带一节你最难的课来，我们一起把它变成可以操作的模型。", 0.65, 6.35, 11.9, 0.4,
     size=16, color=ACCENT, font=DISPLAY)
notes(s, "我们现在最需要的不是一句“很好”，而是几个真实课堂。希望找 3 到 5 位老师或 1 到 2 所学校，用 4 到 6 周做一次试点：选一节最难的课，学生用，老师看，我们一起看完成率、停留时间、错误分布和前后测。合作可以是开放核心、课程共建或校本部署。")

# ---------------------------------------------------------------------------
# 14 closing
# ---------------------------------------------------------------------------
s = prs.slides.add_slide(prs.slide_layouts[6])
image_fill(s, str(ROOT / "media" / "cover.jpg"), 0, 0, 13.333, 7.5, overlay=0.55, border=False)
rect(s, 0, 0, 0.08, 7.5, fill=ACCENT)
kicker(s, "CELL ATLAS / 胞宇", 0.82, 0.55)
text(s, "让每个学生，\n都能走进细胞。", 0.82, 1.45, 9.2, 1.9, size=44, color=INK, font=DISPLAY,
     line_spacing=1.08)
text(s, "一个浏览器里的 3D 细胞生物学课程。", 0.86, 3.5, 8.0, 0.4, size=19, color=ACCENT, font=BODY)
text(s, "现在可以体验", 0.86, 4.35, 2.5, 0.3, size=8, color=FAINT, font=BODY)
text(s, "跨膜运输  ·  膜的流动性与 FRAP", 0.86, 4.7, 7.0, 0.4, size=14, color=INK, font=BODY)
text(s, "https://herryatlas.github.io/cell-atlas/", 0.86, 5.35, 10.5, 0.4, size=14, color=GOLD, font=BODY)
text(s, "https://github.com/HerryAtlas/cell-atlas", 0.86, 5.8, 10.0, 0.35, size=10, color=MUTED, font=BODY)
text(s, "欢迎一起上第一节样板课，也欢迎带一节你想重做的课来。", 0.86, 6.55, 10.5, 0.35,
     size=11, color=MUTED)
notes(s, "最后，用一句话收束：让每个学生都能走进细胞。现在公开网页上已经可以体验跨膜运输和 FRAP 两节课；如果你愿意，我们可以从你最难讲的一节课开始，一起做下一次试点。谢谢。")

# Save
out_path = OUT / "Cell-Atlas-产品介绍与未来构想.pptx"
prs.save(out_path)
print(out_path)
print("slides", len(prs.slides))
