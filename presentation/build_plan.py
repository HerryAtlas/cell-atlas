from __future__ import annotations

from pathlib import Path

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_ALIGN_VERTICAL, WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK, WD_LINE_SPACING, WD_TAB_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor, Emu

ROOT = Path(r"D:\AI\DSH\细胞图谱\cell-atlas")
OUT = ROOT / "presentation"
ASSETS = OUT / "assets"

TEAL = "0B3B3A"
ACCENT = "0E7C74"
GOLD = "A8752A"
INK = "1D2B2A"
MUTED = "5D7370"
LIGHT = "F3FAF7"
LIGHT2 = "E9F5F1"
WHITE = "FFFFFF"
LINE = "CFE3DD"

BODY = "Microsoft YaHei"
HEAD = "Microsoft YaHei"
MONO = "Consolas"

doc = Document()
section = doc.sections[0]
section.page_width = Cm(21)
section.page_height = Cm(29.7)
section.top_margin = Cm(2.0)
section.bottom_margin = Cm(1.9)
section.left_margin = Cm(2.1)
section.right_margin = Cm(2.1)
section.header_distance = Cm(0.9)
section.footer_distance = Cm(0.9)

styles = doc.styles
normal = styles["Normal"]
normal.font.name = BODY
normal.font.size = Pt(10.5)
normal.font.color.rgb = RGBColor.from_string(INK)
normal._element.rPr.rFonts.set(qn("w:eastAsia"), BODY)
normal.paragraph_format.line_spacing = 1.42
normal.paragraph_format.space_after = Pt(6)
normal.paragraph_format.space_before = Pt(0)


def rgb(hex_value: str) -> RGBColor:
    return RGBColor.from_string(hex_value)


def set_run_font(run, size=None, bold=None, color=None, name=BODY, italic=None):
    run.font.name = name
    run._element.get_or_add_rPr().rFonts.set(qn("w:eastAsia"), name)
    if size is not None:
        run.font.size = Pt(size)
    if bold is not None:
        run.font.bold = bold
    if italic is not None:
        run.font.italic = italic
    if color is not None:
        run.font.color.rgb = rgb(color)


def p(value="", size=10.5, bold=False, color=INK, name=BODY, align=WD_ALIGN_PARAGRAPH.LEFT,
      space_before=0, space_after=6, line=1.42, italic=False):
    par = doc.add_paragraph()
    par.alignment = align
    par.paragraph_format.space_before = Pt(space_before)
    par.paragraph_format.space_after = Pt(space_after)
    par.paragraph_format.line_spacing = line
    run = par.add_run(value)
    set_run_font(run, size=size, bold=bold, color=color, name=name, italic=italic)
    return par


def rich(parts, size=10.5, space_after=6, line=1.42):
    """parts: [(text, bold, color)]"""
    par = doc.add_paragraph()
    par.paragraph_format.space_before = Pt(0)
    par.paragraph_format.space_after = Pt(space_after)
    par.paragraph_format.line_spacing = line
    for text, bold, color in parts:
        run = par.add_run(text)
        set_run_font(run, size=size, bold=bold, color=color)
    return par


def heading(number, title_text):
    par = doc.add_paragraph()
    par.paragraph_format.space_before = Pt(16)
    par.paragraph_format.space_after = Pt(3)
    par.paragraph_format.keep_with_next = True
    r1 = par.add_run(f"{number}  ")
    set_run_font(r1, size=8.5, bold=True, color=ACCENT, name=MONO)
    r2 = par.add_run(title_text)
    set_run_font(r2, size=17, bold=True, color=TEAL)
    rule = doc.add_paragraph()
    rule.paragraph_format.space_before = Pt(0)
    rule.paragraph_format.space_after = Pt(8)
    rule.paragraph_format.keep_with_next = True
    pPr = rule._p.get_or_add_pPr()
    pBdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "8")
    bottom.set(qn("w:space"), "1")
    bottom.set(qn("w:color"), ACCENT)
    pBdr.append(bottom)
    pPr.append(pBdr)
    return par


def subhead(value, color=ACCENT):
    par = doc.add_paragraph()
    par.paragraph_format.space_before = Pt(10)
    par.paragraph_format.space_after = Pt(3)
    par.paragraph_format.keep_with_next = True
    run = par.add_run(value)
    set_run_font(run, size=12, bold=True, color=color)
    return par


def bullet(value, size=10.5, color=INK):
    par = doc.add_paragraph(style="List Bullet")
    par.paragraph_format.space_before = Pt(0)
    par.paragraph_format.space_after = Pt(3)
    par.paragraph_format.line_spacing = 1.38
    run = par.add_run(value)
    set_run_font(run, size=size, color=color)
    return par


def shade_cell(cell, fill):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), fill)
    tcPr.append(shd)


def set_cell_margins(cell, top=80, bottom=80, left=110, right=110):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = tcPr.find(qn("w:tcMar"))
    if tcMar is None:
        tcMar = OxmlElement("w:tcMar")
        tcPr.append(tcMar)
    for tag, val in (("top", top), ("bottom", bottom), ("left", left), ("right", right)):
        el = tcMar.find(qn(f"w:{tag}"))
        if el is None:
            el = OxmlElement(f"w:{tag}")
            tcMar.append(el)
        el.set(qn("w:w"), str(val))
        el.set(qn("w:type"), "dxa")


def set_table_borders(table, color=LINE, size=4):
    tbl = table._tbl
    tblPr = tbl.tblPr
    borders = OxmlElement("w:tblBorders")
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        el = OxmlElement(f"w:{edge}")
        el.set(qn("w:val"), "single")
        el.set(qn("w:sz"), str(size))
        el.set(qn("w:space"), "0")
        el.set(qn("w:color"), color)
        borders.append(el)
    tblPr.append(borders)


def no_table_borders(table):
    tbl = table._tbl
    tblPr = tbl.tblPr
    borders = OxmlElement("w:tblBorders")
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        el = OxmlElement(f"w:{edge}")
        el.set(qn("w:val"), "nil")
        borders.append(el)
    tblPr.append(borders)


def table(headers, rows, widths, font_size=9, header_fill=TEAL, zebra=True,
          first_col_bold=False, header_color=WHITE):
    t = doc.add_table(rows=1, cols=len(headers))
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    t.allow_autofit = False
    set_table_borders(t)
    hdr = t.rows[0]
    trPr = hdr._tr.get_or_add_trPr()
    trPr.append(OxmlElement("w:tblHeader"))
    for i, h in enumerate(headers):
        cell = hdr.cells[i]
        cell.width = Cm(widths[i])
        shade_cell(cell, header_fill)
        set_cell_margins(cell)
        cell.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
        par = cell.paragraphs[0]
        par.paragraph_format.space_after = Pt(0)
        run = par.add_run(h)
        set_run_font(run, size=font_size, bold=True, color=header_color)
    for r_idx, row in enumerate(rows):
        cells = t.add_row().cells
        trPr = t.rows[-1]._tr.get_or_add_trPr()
        trPr.append(OxmlElement("w:cantSplit"))
        for i, value in enumerate(row):
            cell = cells[i]
            cell.width = Cm(widths[i])
            set_cell_margins(cell)
            cell.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
            if zebra and r_idx % 2 == 1:
                shade_cell(cell, LIGHT)
            par = cell.paragraphs[0]
            par.paragraph_format.space_after = Pt(0)
            par.paragraph_format.line_spacing = 1.25
            run = par.add_run(str(value))
            set_run_font(run, size=font_size, bold=(first_col_bold and i == 0), color=INK)
    for row in t.rows:
        for cell in row.cells:
            for par in cell.paragraphs:
                par.paragraph_format.keep_with_next = False
    return t


def callout(label, value, fill=LIGHT2, bar=ACCENT):
    t = doc.add_table(rows=1, cols=1)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    # Keep the whole callout together; a split table leaves an empty label box.
    trPr = t.rows[0]._tr.get_or_add_trPr()
    trPr.append(OxmlElement("w:cantSplit"))
    cell = t.rows[0].cells[0]
    cell.width = Cm(16.8)
    shade_cell(cell, fill)
    set_cell_margins(cell, top=140, bottom=140, left=200, right=180)
    tcPr = cell._tc.get_or_add_tcPr()
    tcBorders = OxmlElement("w:tcBorders")
    left = OxmlElement("w:left")
    left.set(qn("w:val"), "single")
    left.set(qn("w:sz"), "18")
    left.set(qn("w:space"), "0")
    left.set(qn("w:color"), bar)
    tcBorders.append(left)
    tcPr.append(tcBorders)
    par = cell.paragraphs[0]
    par.paragraph_format.space_after = Pt(3)
    r1 = par.add_run(label)
    set_run_font(r1, size=8, bold=True, color=bar, name=MONO)
    par2 = cell.add_paragraph()
    par2.paragraph_format.space_after = Pt(0)
    par2.paragraph_format.line_spacing = 1.35
    r2 = par2.add_run(value)
    set_run_font(r2, size=10.5, bold=False, color=INK)


def page_break():
    par = doc.add_paragraph()
    par.add_run().add_break(WD_BREAK.PAGE)
    par.paragraph_format.space_after = Pt(0)


def add_field(paragraph, instr):
    run = paragraph.add_run()
    fld_begin = OxmlElement("w:fldChar")
    fld_begin.set(qn("w:fldCharType"), "begin")
    instr_el = OxmlElement("w:instrText")
    instr_el.set(qn("xml:space"), "preserve")
    instr_el.text = instr
    fld_end = OxmlElement("w:fldChar")
    fld_end.set(qn("w:fldCharType"), "end")
    run._r.append(fld_begin)
    run._r.append(instr_el)
    run._r.append(fld_end)


def add_header_footer():
    section.different_first_page_header_footer = True
    header = section.header
    hp = header.paragraphs[0]
    hp.text = ""
    hp.paragraph_format.tab_stops.add_tab_stop(Cm(16.8), WD_TAB_ALIGNMENT.RIGHT)
    r1 = hp.add_run("CELL ATLAS / 团队共建与算力合作计划")
    set_run_font(r1, size=7.5, color=MUTED, name=MONO)
    r2 = hp.add_run("\t2026.10 · v0.1")
    set_run_font(r2, size=7.5, color=MUTED, name=MONO)
    pPr = hp._p.get_or_add_pPr()
    pBdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "4")
    bottom.set(qn("w:space"), "2")
    bottom.set(qn("w:color"), LINE)
    pBdr.append(bottom)
    pPr.append(pBdr)
    footer = section.footer
    fp = footer.paragraphs[0]
    fp.text = ""
    fp.paragraph_format.tab_stops.add_tab_stop(Cm(16.8), WD_TAB_ALIGNMENT.RIGHT)
    r1 = fp.add_run("Cell Atlas · 用于团队与资源合作沟通，不构成投资或雇佣承诺")
    set_run_font(r1, size=7, color=MUTED)
    r2 = fp.add_run("\t")
    set_run_font(r2, size=7, color=MUTED)
    add_field(fp, "PAGE")
    r3 = fp.add_run(" / ")
    set_run_font(r3, size=7, color=MUTED)
    add_field(fp, "NUMPAGES")


def caption(value):
    p(value, size=8, color=MUTED, italic=True, space_after=10)


# ---------------------------------------------------------------------------
# Cover
# ---------------------------------------------------------------------------
# left / right composition
cover = doc.add_table(rows=1, cols=2)
cover.autofit = False
cover.alignment = WD_TABLE_ALIGNMENT.CENTER
no_table_borders(cover)
cover.columns[0].width = Cm(9.0)
cover.columns[1].width = Cm(7.8)
left, right = cover.rows[0].cells
left.width = Cm(9.0)
right.width = Cm(7.8)
for cell in (left, right):
    set_cell_margins(cell, top=0, bottom=0, left=0, right=0)
    cell.vertical_alignment = WD_ALIGN_VERTICAL.TOP

lp = left.paragraphs[0]
lp.paragraph_format.space_after = Pt(20)
r = lp.add_run("CELL ATLAS / 项目计划书")
set_run_font(r, size=8, bold=True, color=ACCENT, name=MONO)

p("", size=6, space_after=0)
t1 = left.add_paragraph()
t1.paragraph_format.space_after = Pt(10)
t1.paragraph_format.line_spacing = 1.08
r = t1.add_run("从两节样板课，\n到一间可运营的\n细胞教室")
set_run_font(r, size=27, bold=True, color=TEAL)

t2 = left.add_paragraph()
t2.paragraph_format.space_after = Pt(18)
r = t2.add_run("团队共建与算力合作计划\n2026–2027")
set_run_font(r, size=13, bold=False, color=ACCENT)

t3 = left.add_paragraph()
t3.paragraph_format.space_after = Pt(6)
r = t3.add_run("16 章 / 44 节  ·  14 个 3D 模型  ·  2 节完整互动课")
set_run_font(r, size=7.5, bold=False, color=MUTED, name=MONO)

t4 = left.add_paragraph()
t4.paragraph_format.space_after = Pt(22)
r = t4.add_run("不是一套视频，而是一个可以操作、可以犯错、可以完成的空间。")
set_run_font(r, size=9.5, bold=False, color=INK)

# thin rule
rule = left.add_paragraph()
rule.paragraph_format.space_before = Pt(2)
rule.paragraph_format.space_after = Pt(18)
pPr = rule._p.get_or_add_pPr()
pBdr = OxmlElement("w:pBdr")
bottom = OxmlElement("w:bottom")
bottom.set(qn("w:val"), "single")
bottom.set(qn("w:sz"), "14")
bottom.set(qn("w:space"), "1")
bottom.set(qn("w:color"), ACCENT)
pBdr.append(bottom)
pPr.append(pBdr)

meta = left.add_paragraph()
meta.paragraph_format.space_after = Pt(2)
r = meta.add_run("版本 v0.1  /  2026.10")
set_run_font(r, size=8, color=MUTED, name=MONO)
meta2 = left.add_paragraph()
meta2.paragraph_format.space_after = Pt(2)
r = meta2.add_run("发起：HerryAtlas  ·  https://github.com/HerryAtlas/cell-atlas")
set_run_font(r, size=7.5, color=MUTED)
meta3 = left.add_paragraph()
r = meta3.add_run("演示：https://herryatlas.github.io/cell-atlas/")
set_run_font(r, size=7.5, color=ACCENT)

rp = right.paragraphs[0]
rp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
rp.paragraph_format.space_after = Pt(0)
run = rp.add_run()
run.add_picture(str(ROOT / "media" / "cover.jpg"), width=Cm(7.8))
# dark label strip under image
ep = right.add_paragraph()
ep.alignment = WD_ALIGN_PARAGRAPH.RIGHT
ep.paragraph_format.space_before = Pt(4)
r = ep.add_run("SCIENTIFIC VISUAL / PROCEDURAL 3D")
set_run_font(r, size=6.5, color=MUTED, name=MONO)

q = doc.add_paragraph()
q.paragraph_format.space_before = Pt(34)
q.paragraph_format.space_after = Pt(0)
r = q.add_run("先把一节课做成可以走完的样板，\n再把这套结构复制到更多章节。")
set_run_font(r, size=11, bold=False, color=TEAL, italic=True)
q2 = doc.add_paragraph()
q2.paragraph_format.space_before = Pt(8)
r = q2.add_run("不是先做一个大平台，再往里面填内容。")
set_run_font(r, size=8, color=MUTED)

page_break()
add_header_footer()

# ---------------------------------------------------------------------------
# One-page summary
# ---------------------------------------------------------------------------
p("ONE-PAGE SUMMARY", size=8, bold=True, color=ACCENT, name=MONO, space_after=4)
p("一页看懂：我们在做什么，缺什么，想找谁", size=21, bold=True, color=TEAL, space_after=10)
p("这份计划书用于两件事：找到能一起把课程做出来的核心队友；找到愿意按里程碑提供算力与云资源的合作方。",
  size=10.5, color=MUTED, space_after=12)

summary_rows = [
    ("项目", "Cell Atlas 是一个浏览器里的 3D 细胞生物学课程。学生点击结构、观察机制、做目标实验、完成练习；课程引擎按证据判定，不依赖 AI。"),
    ("已有", "16 章 / 44 节内容地图；14 个全程序化 3D 模型；跨膜运输、FRAP 两节完整互动课；网页 + DSH 聊天插件；72 个自动化测试。"),
    ("真实进度", "已完整互动化 2 / 44 节。其余章节有教材内容、页码、学习目标和模型映射，但还没有同等级的互动脚本与练习。"),
    ("当前缺口", "内容产能、3D / 前端工程、课堂试点运营；以及 AI 助教评估、CI 和试点服务所需的算力。"),
    ("想找的人", "内容负责人（细胞生物学 / 教学设计）、3D / 前端工程师、教学运营 / 试点伙伴；第二阶段再找 AI / 平台工程师。"),
    ("想要的算力", "不是一上来囤 GPU。先要 CI、存储、1 台小服务器；AI 原型阶段再按需给 1 张 24GB GPU 或等值 GPU 时长。"),
    ("3 个月目标", "FRET 样板课 + 累计 5 节完整互动课；完成 3 位教师访谈；跑通 1 次课堂试点流程。"),
    ("合作方式", "队友：4 周试合作，每周 4–6 小时，先交付一件具体的东西。算力：3 个月启动包，按月复盘，按里程碑扩容。"),
]
t = doc.add_table(rows=0, cols=2)
t.autofit = False
t.alignment = WD_TABLE_ALIGNMENT.CENTER
set_table_borders(t, color=LINE)
for i, (k, v) in enumerate(summary_rows):
    cells = t.add_row().cells
    cells[0].width = Cm(3.1)
    cells[1].width = Cm(13.7)
    for c in cells:
        set_cell_margins(c, top=100, bottom=100, left=140, right=140)
        c.vertical_alignment = WD_ALIGN_VERTICAL.TOP
    shade_cell(cells[0], LIGHT2 if i % 2 == 0 else LIGHT)
    par = cells[0].paragraphs[0]
    par.paragraph_format.space_after = Pt(0)
    run = par.add_run(k)
    set_run_font(run, size=9, bold=True, color=ACCENT)
    par2 = cells[1].paragraphs[0]
    par2.paragraph_format.space_after = Pt(0)
    par2.paragraph_format.line_spacing = 1.3
    run2 = par2.add_run(v)
    set_run_font(run2, size=9.2, color=INK)

p("", size=4, space_after=6)
callout("THE ONE-LINE ASK",
        "给我们 4 周、每周 4–6 小时，或者 3 个月的启动算力；我们先一起做出一节能被真实课堂使用的课。")

# ---------------------------------------------------------------------------
# 01 Project
# ---------------------------------------------------------------------------
heading("01", "项目与问题")
p("细胞生物学最难的部分，不是名词，而是空间关系和动态过程。学生需要在一个可以操作的空间里，把“看见”变成“理解”。",
  size=12, color=TEAL, space_after=10)

p("传统材料通常停在三种形态：课本上的二维图、不可操作的视频、孤立的 3D 模型。它们各自有用，却没有把“结构—机制—实验—练习”接成一条可以走完的路径。学生看完之后，仍然不知道自己有没有真正理解。",
  space_after=8)

subhead("我们的判断")
bullet("理解来自操作：点到一个结构、改一个条件、看到结果变化，比“看一遍动画”更接近真实学习。")
bullet("课程需要判定：完成条件应该由课程引擎按证据判断，而不是按视频播放进度。")
bullet("AI 应该是可选的：没有 AI，基础课程也必须能完成；AI 只做解释、追问和提示。")
bullet("视觉是入口，不是目的：3D 模型服务于机制理解，不追求电影级写实。")

subhead("为什么是现在")
p("浏览器已经能稳定运行 WebGL / WebGL2；Three.js 让程序化 3D 可以在普通笔记本和手机上运行；AI 让个性化解释成为可能。但真正稀缺的不是模型或算力，而是把课程、实验、判定和视觉接成闭环的内容结构。",
  space_after=6)
callout("PRODUCT THESIS",
        "先把一节课做成“可以走完”的样板，再把这套结构复制到更多章节。不是先做一个大平台，再往里面填内容。")

# 02 Product
heading("02", "产品与现状")
p("Cell Atlas 把教材章节、3D 模型、互动实验和练习放进同一个浏览器。它不是视频播放器，也不是模型展示页，而是一条有阶段、有反馈、有完成条件的学习路径。",
  space_after=8)

subhead("一节互动课的四个阶段")
table(
    ["阶段", "学生做什么", "课程引擎记录什么"],
    [
        ("认识结构", "点击膜、通道、泵、ATP 等结构，打开知识卡", "当前阶段内有效识别"),
        ("观察机制", "播放或逐步查看 E1–E2 / 漂白—交换—平台", "已观察的步骤"),
        ("动手探索", "选择预测、改条件、运行目标实验", "实验参数、结果与快照"),
        ("场景练习", "辨认、排序、解释，完成迁移", "答题与阶段完成"),
    ],
    [3.2, 7.5, 6.1],
    font_size=9,
)

p("", size=3, space_after=5)
subhead("现在的真实状态")
table(
    ["项目", "当前值", "说明"],
    [
        ("内容地图", "16 章 / 44 节", "教材章节、页码、学习目标与模型映射已建立"),
        ("3D 模型", "14 个", "8 个细胞结构模型 + 6 个实验方法模型"),
        ("完整互动课", "2 节", "跨膜运输、膜的流动性与 FRAP"),
        ("完整互动化进度", "2 / 44", "其余章节尚未达到同等级互动深度"),
        ("自动化测试", "72 个", "课程引擎、实验、UI 回归"),
        ("交付端", "网页 + 插件", "静态网页与 DSH 聊天插件共享同一套内容与判定"),
        ("AI 助教", "未接入", "当前主流程不依赖 AI；AI 是未来可选层"),
    ],
    [3.6, 3.7, 9.5],
    font_size=8.7,
)

p("", size=3, space_after=5)
page_break()
subhead("产品截图")
# two screenshots side by side
img_table = doc.add_table(rows=1, cols=2)
img_table.autofit = False
img_table.alignment = WD_TABLE_ALIGNMENT.CENTER
for idx, (path, cap) in enumerate([
    (ASSETS / "model-transport.jpg", "跨膜运输 / 互动课"),
    (ASSETS / "model-frap.jpg", "FRAP / 互动课"),
]):
    cell = img_table.rows[0].cells[idx]
    cell.width = Cm(8.2)
    set_cell_margins(cell, top=0, bottom=0, left=0, right=120)
    par = cell.paragraphs[0]
    par.paragraph_format.space_after = Pt(2)
    run = par.add_run()
    run.add_picture(str(path), width=Cm(7.8))
    cap_par = cell.add_paragraph()
    cap_par.paragraph_format.space_after = Pt(0)
    r = cap_par.add_run(cap)
    set_run_font(r, size=7.5, color=MUTED, italic=True)

p("", size=3, space_after=6)
callout("HONEST BOUNDARY",
        "2 / 44 是真实进度。我们不会把“内容地图”说成“已完成课程”，也不会把尚未接入的 AI 说成现有能力。")

# 03 Users
page_break()
heading("03", "用户与试点")
p("这套产品首先服务三种人：学生、教师、内容 / 技术团队。三者的价值不在同一个层面，但共享同一条学习路径。",
  space_after=8)

table(
    ["使用者", "他们需要什么", "我们提供什么"],
    [
        ("学生", "自己走一遍；可以错、可以重试；刷新后继续", "四阶段互动课、即时反馈、本地进度"),
        ("教师", "教材对齐；看见学生卡在哪；课堂可控", "章节 / 页码映射、完成条件、练习反馈；dashboard 待建"),
        ("内容 / 技术团队", "可复用的课程模板；模型与实验解耦", "课程定义、模型注册表、测试与构建流程"),
    ],
    [3.3, 6.4, 7.1],
    font_size=9,
)

p("", size=3, space_after=6)
subhead("一次试点长什么样")
p("4–6 周，1–2 个班级，1 位任课教师。我们不要求学校采购系统，也不要求改造机房：学生用现有浏览器打开网页，教师用现有教案选一节最难讲的课。",
  space_after=5)
bullet("前 1 周：选课、对齐教材页码、确定前后测题目。")
bullet("第 2–4 周：学生课前 / 课后使用；教师观察并记录卡点。")
bullet("第 5–6 周：前后测、访谈、完成率与错误分布复盘；产出 1 份试点报告。")
bullet("数据：默认本地保存，不上传；如需要研究数据，单独征得学生 / 监护人同意，并做匿名化。")

# 04 Technology
page_break()
heading("04", "技术架构与算力含义")
p("Cell Atlas 的核心不是某个 3D 模型，而是三层结构：课程定义、确定性课程引擎、可替换的交互与视觉层。",
  space_after=7)

table(
    ["层", "职责", "当前实现"],
    [
        ("课程定义", "阶段、步骤、证据要求、实验目标、练习", "flow / lesson / experiment 配置"),
        ("课程引擎", "证据、阶段门槛、完成条件、快照、订阅", "无 DOM / 无 AI 依赖，可单测"),
        ("交互与视觉", "3D 模型、点击、实验控件、练习 UI", "Three.js + React / 原生 UI"),
        ("输入适配层（未来）", "鼠标 / 触屏 / 摄像头 / 深度相机 / WebXR → 语义动作", "手势尚未实现，先做接口设计"),
        ("AI 助教（未来）", "只读上下文；解释、追问、提示", "未接入；不能推进阶段或改成绩"),
    ],
    [3.4, 7.6, 5.8],
    font_size=8.8,
)

p("", size=3, space_after=6)
subhead("算力不是当前瓶颈")
p("当前产品是客户端静态应用：3D、交互和进度都在浏览器里完成；没有 GPU 服务器，也没有模型训练。核心课程不需要新的算力就能继续扩展。",
  space_after=5)
p("算力真正会用在四个地方：CI / 浏览器回归、内容预览与批处理、AI 助教评估、试点服务。它们应该按里程碑释放，而不是先囤一批卡。",
  space_after=5)
callout("COMPUTE PRINCIPLE",
        "先证明一节试点课有效，再扩大算力。没有教学增益的算力投入，不进入预算。")

# 05 Roadmap
page_break()
heading("05", "路线图与里程碑")
p("路线图按“内容深度 → 教学闭环 → 平台化”推进。每个阶段只承诺能被验收的结果，不按“做了多少功能”计。",
  space_after=8)

table(
    ["时间", "目标", "验收标准"],
    [
        ("0–3 月", "FRET 样板课；累计 5 节完整互动课；内容模板；3 位教师访谈", "5 节可完整走完；无阻断性 bug；教师能独立完成一次演示"),
        ("3–6 月", "5–8 节；1–2 个课堂试点；教师 dashboard MVP；AI 助教评估", "至少 1 个班级完成 4 周试点；完成率 / 前后测可复盘"),
        ("6–12 月", "3–5 个学校 / 课程包；LMS 对接；手势 / AR 原型", "3 个以上试点复用；课程包可独立部署；交互原型有对照数据"),
    ],
    [2.8, 8.5, 5.5],
    font_size=8.8,
)

p("", size=3, space_after=6)
subhead("Go / No-Go 门槛")
bullet("内容：如果一节新课的制作时间不能降到 2 周以内，先改模板，不扩章节。")
bullet("试点：如果完成率低于 50%，先修课程，不追加功能。")
bullet("AI：如果提示不能提升独立完成率，不进入主流程。")
bullet("手势：如果比鼠标更慢或更易错，不上线，只保留为展示原型。")

# 06 Team
page_break()
heading("06", "团队计划：先一起做一件小事")
p("我们不需要更多只给建议的人，也不需要全职无偿投入。现在需要的是能在 4 周内交付一件具体东西的共建者。",
  size=11, color=TEAL, space_after=8)

table(
    ["角色", "第一个 4 周交付", "投入", "合作方式"],
    [
        ("内容负责人\n细胞生物学 / 教学设计", "1 节新课的脚本：学习目标、机制步骤、3 道练习、教材依据", "4–6 小时 / 周", "4 周试合作；合适后进入核心内容组"),
        ("3D / 前端工程师\nThree.js / WebGL / React", "输入适配层接口 + 1 个模型的性能或细节优化", "4–6 小时 / 周", "4 周试合作；代码署名；合适后进入核心工程组"),
        ("教学运营 / 试点\n学校 / 教师沟通", "试点包：教师指南、前后测模板、3 位教师访谈", "3–5 小时 / 周", "按试点周期合作；可远程"),
        ("AI / 平台工程师\n第二阶段", "AI 助教评估脚本：提示策略、成本模型、离线降级", "4–6 小时 / 周", "先做 2 周技术评估，再决定是否进入"),
        ("设计 / 无障碍 / QA\n兼职", "一次可访问性审查 + 移动端布局问题清单", "2–4 小时 / 周", "按项目制合作"),
    ],
    [3.6, 7.1, 2.6, 3.5],
    font_size=8.3,
)

p("", size=3, space_after=6)
subhead("我们能提供什么")
bullet("一个真实上线、可被课堂使用的产品，而不是课程作业或概念稿。")
bullet("公开署名、作品集材料、推荐信；核心成员进入项目决策。")
bullet("在商业合作前，以书面方式确认署名、贡献记录与权益；不靠口头承诺。")
bullet("课堂试点的一手反馈；教育 / 3D / AI 交叉的项目经验。")

subhead("我们不找什么")
bullet("只给方向、不交付的人；只挂名、不参与的人。")
bullet("要求全职无偿投入的人；在未确认权益前就要求独占成果的人。")
bullet("把“AI 生成一切”当作产品策略的人——这门课的核心是课程结构，不是模型。")

p("", size=3, space_after=6)
p("协作节奏：周一异步更新；周三 30 分钟 demo；周五 review。所有交付进 GitHub issue / PR；贡献记录公开可查。",
  size=9, color=MUTED, italic=True, space_after=4)

# 07 Compute
heading("07", "算力与资源计划：按里程碑释放")
p("我们不把“算力”理解成一台大机器。当前最需要的是稳定的 CI、足够的存储、一个能做 AI 评估的小环境，以及试点期的轻量服务。",
  size=11, color=TEAL, space_after=8)

subhead("三档资源包")
table(
    ["资源", "启动包（0–3 月）", "试点包（3–6 月）", "扩展包（6–12 月）"],
    [
        ("GPU", "1×24GB，按需 100 小时", "1×24GB，按需 300 小时", "2×24/48GB 或 1,000 小时"),
        ("CPU 服务", "1×4 vCPU / 8GB", "2×4 vCPU / 8GB", "4×8 vCPU / 16GB"),
        ("存储 / CDN", "200GB + 基础 CDN", "1TB + CDN", "2TB + CDN"),
        ("CI / 浏览器回归", "2 并发 runner；每月 1,000 分钟", "4 并发 runner", "专用 runner + 设备农场"),
        ("设备", "现有设备", "2 台测试设备（平板 / 低端笔记本）", "4–6 台设备 + 摄像头 / 深度相机"),
        ("用途", "构建、测试、AI 评估准备", "AI 助教评估、试点服务", "多校试点、课程包、AR / 手势"),
    ],
    [3.0, 4.8, 4.4, 4.6],
    font_size=8.2,
)

p("", size=3, space_after=6)
subhead("如果只能给一样")
p("优先给“1 张 24GB GPU 的 200 小时按需时长 + 1 台小服务器 + CI”，而不是一整台长期闲置的机器。这样可以在 3 个月内完成 AI 助教评估和 1 次试点，且随时可停。",
  space_after=5)

page_break()
subhead("GPU 用来做什么 / 不做什么")
table(
    ["用途", "说明", "是否现在需要"],
    [
        ("AI 助教评估", "提示策略、解释质量、答案泄漏检测、成本测算", "3–6 月，按需"),
        ("内容 QA / 检索", "课程一致性检查、术语与页码核对", "可选，低优先级"),
        ("CI / 浏览器回归", "构建、截图、WebGL 回归", "现在就需要（CPU 为主）"),
        ("试点服务", "账号、进度、反馈、日志", "3–6 月，小规格 CPU"),
        ("3D 渲染", "客户端完成，不需要服务器 GPU", "不需要"),
        ("从零训练基础模型", "不做；使用现有模型 / API", "不需要"),
        ("挖矿 / 通用算力转售", "不做", "禁止"),
    ],
    [4.3, 8.2, 4.3],
    font_size=8.5,
)

p("", size=3, space_after=6)
subhead("赞助方得到什么")
bullet("一个真实的教育 3D 产品案例；可公开的试点报告与使用数据（经学校同意、匿名化）。")
bullet("项目页 / 致谢 / 技术分享中的品牌露出；不要求排他，不锁定供应商。")
bullet("优先获得课堂反馈与教学场景需求，而不是一份“看起来很酷”的 demo。")
bullet("所有资源按月复盘；未使用额度可停止，不产生长期承诺。")

# 08 Budget
page_break()
heading("08", "预算与资源使用原则")
p("这一版计划书不承诺现金薪酬，也不虚构收入预测。资源优先顺序是：先保证课堂试点，再保证工程稳定性，最后才是规模化算力。",
  space_after=8)

table(
    ["科目", "3 个月需求", "来源", "优先级"],
    [
        ("教师试点支持", "1–2 位教师的小额课时 / 评审补贴", "小额赞助 / 学校配套", "最高"),
        ("设备与无障碍", "2 台测试设备；摄像头 / 麦克风", "借用 / 赞助", "高"),
        ("CI 与浏览器测试", "2 并发 runner；1,000 分钟 / 月", "云资源赞助", "高"),
        ("GPU 评估", "1×24GB，100–200 小时", "云资源 / GPU 赞助", "中"),
        ("试点服务", "1 台 4 vCPU / 8GB", "云资源赞助", "中"),
        ("内容审核", "学科教师 / 教研顾问", "小额劳务 / 共建", "中"),
        ("美术外包", "非核心；优先程序化", "暂不安排", "低"),
    ],
    [3.6, 6.8, 4.4, 2.0],
    font_size=8.5,
)

p("", size=3, space_after=6)
callout("RESOURCE DISCIPLINE",
        "每一笔算力都对应一个里程碑和一个月度复盘。没有验收指标的算力，不进入下一阶段。")

# 09 Evaluation
page_break()
heading("09", "评估：不要只看“好不好看”")
p("课堂里真正重要的是学生有没有完成、有没有理解、教师有没有省时间。我们按四组指标评估，而不是只看模型精细度。",
  space_after=8)

table(
    ["维度", "指标", "采集方式"],
    [
        ("学习", "完成率、前后测提升、错误分布、迁移题表现", "课程引擎事件 + 前后测"),
        ("产品", "首次完成时间、重试次数、7 日回访、卡点步骤", "本地 / 匿名事件；需同意"),
        ("教师", "备课时长、课堂可控性、是否愿意再用", "访谈 + 简短问卷"),
        ("技术", "帧率、崩溃率、加载时间、移动端可用性", "浏览器回归 + 设备测试"),
        ("AI（未来）", "提示采纳率、独立完成率、答案泄漏率", "对照实验 + 人工审核"),
        ("手势（未来）", "成功率、到达时间、误触率、认知负荷", "与鼠标 / 触屏对照"),
    ],
    [3.0, 8.4, 5.4],
    font_size=8.7,
)

p("", size=3, space_after=6)
p("试点报告默认包含：课程版本、样本量、使用时长、完成率、前后测、教师访谈摘要、主要问题与下一版修改。没有数据就不写“显著提升”。",
  size=9.5, color=MUTED, italic=True)

# 10 Risks
page_break()
heading("10", "风险与应对")
table(
    ["风险", "表现", "应对"],
    [
        ("内容产能不足", "模型很漂亮，但课程做不快", "课程模板；内容负责人；每节 2 周目标；先复用再扩章"),
        ("单点依赖", "一个人停，项目停", "文档、测试、贡献记录；关键模块双人 review"),
        ("算力闲置", "先拿了卡，却没有真实任务", "按里程碑申请；月度用量复盘；按需 / spot 优先"),
        ("AI 过度承诺", "演示很好，课堂不可用", "确定性引擎；AI 只读；无增益就不进主流程"),
        ("学校采购周期", "试点谈得久，落地慢", "免费试点；不要求系统改造；从单节课开始"),
        ("数据隐私", "学生数据 / 摄像头采集", "本地优先；明确同意；匿名化；不录视频"),
        ("设备性能", "低端机卡顿 / 发热", "设备实验室；降级策略；移动端优先测试"),
        ("团队流失", "4 周后无法继续", "先小交付；书面确认权益；不承诺无法兑现的东西"),
    ],
    [4.0, 5.9, 6.7],
    font_size=8.5,
)

# 11 Collaboration
page_break()
heading("11", "合作方式与下一步")
p("如果你愿意加入，或者愿意提供算力，我们不需要先签一个很大的协议。先做一件小事，用 4 周判断彼此是否合适。",
  size=11, color=TEAL, space_after=8)

subhead("对队友：三步")
table(
    ["步骤", "做什么", "产出"],
    [
        ("1. 30 分钟通话", "看一节样板课；说清楚你能投入的时间和想做的方向", "一个具体的 4 周交付"),
        ("2. 4 周试合作", "每周 4–6 小时；周三 demo；周五 review", "一个可合并的 PR / 一节可试讲的课 / 一份试点包"),
        ("3. 复盘", "看交付、协作、价值观；双方决定是否进入核心", "书面记录署名、贡献与后续安排"),
    ],
    [4.0, 8.3, 4.5],
    font_size=8.8,
)

p("", size=3, space_after=6)
subhead("对算力 / 云合作方：三步")
table(
    ["步骤", "做什么", "产出"],
    [
        ("1. 需求对齐", "确认 3 个月启动包；按月用量与里程碑", "资源清单与预算上限"),
        ("2. 3 个月试点", "CI + 1 台小服务器 + 100–200 GPU 小时", "AI 评估报告 + 1 次课堂试点"),
        ("3. 复盘扩容", "有数据再扩容；没有就停止", "公开案例 / 技术分享 / 续约决定"),
    ],
    [4.0, 8.3, 4.5],
    font_size=8.8,
)

p("", size=3, space_after=6)
callout("WHAT TO BRING",
        "不要带一份泛泛的简历或一句“我可以帮忙”。带一个你做过的东西、一个你能交付的 4 周结果，或者一节你最想重做的课。")

p("", size=8, space_after=4)
p("联系与体验", size=8, bold=True, color=ACCENT, name=MONO, space_after=3)
p("演示：https://herryatlas.github.io/cell-atlas/", size=9.5, color=ACCENT, space_after=2)
p("代码：https://github.com/HerryAtlas/cell-atlas", size=9.5, color=ACCENT, space_after=2)

# Appendix
heading("APPENDIX", "附：口径、链接与说明")
p("本计划书中的“已完成 / 正在补齐 / 尚未接入”按 2026 年 10 月的代码与内容状态统计。数字会随版本变化，对外引用时请注明日期。",
  size=9, color=MUTED, space_after=6)
bullet("16 章 / 44 节：教材内容地图，不等于 44 节都已完成互动化。")
bullet("2 节完整互动课：跨膜运输、膜的流动性与 FRAP。")
bullet("14 个模型：8 个结构模型 + 6 个实验方法模型；全部程序化生成。")
bullet("72 个自动化测试：单元与浏览器回归；不代表所有视觉 / 教学效果都已验证。")
bullet("AI、云记忆、教师 dashboard、手势交互：尚未接入主流程，属于未来计划。")

subhead("怎么用这份计划书")
bullet("发给潜在队友：先看第 2 页摘要、第 6 节团队计划、第 11 节合作方式；再约 30 分钟看一节样板课。")
bullet("发给算力 / 云合作方：先看第 2 页、第 7 节资源包、第 11 节三步流程；从 3 个月启动包开始。")
bullet("发给学校 / 教师：先看第 3 节试点设计、第 9 节评估指标；不要求采购系统，从一节课开始。")

p("", size=6, space_after=4)
p("本文件用于团队与资源合作沟通，不构成投资、雇佣或收益承诺。涉及署名、知识产权、数据与商业化的安排，以双方另行签署的书面协议为准。",
  size=8, color=MUTED, italic=True)

out_path = OUT / "Cell-Atlas-团队与算力合作计划书.docx"
doc.save(out_path)
print(out_path)
print("paragraphs", len(doc.paragraphs))
