import { TRANSPORT_LESSON as lesson } from '../src/transport-lesson.js';
import { TRANSPORT_FLOW as flow } from '../src/transport-flow.js';
import { createTransportProgressStore as createStore, makeTransportProgress as makeProgress, getExperimentRecords } from '../src/transport-progress.js';
import { createGuidedLessonUI } from './guided-lesson-ui.js';
import { createTransportExplore as createExplore } from './transport-explore.js';

export function createTransportLessonUI(options) {
  return createGuidedLessonUI({ ...options, config: {
    lesson, flow, createStore, makeProgress, getExperimentRecords, createExplore,
    sceneDefaults: { atp: 1, gradient: 1, inhibitor: false }, experimentPick: 'pump',
    subtitle: '通道与泵 · Na⁺/K⁺ 泵的主动运输',
    entryDescription: '点结构 · 看机制 · 做实验 · 场景练习',
    bookLabel: '教材 pp. 62–68 · 回到对应小节 →', bookHref: './textbook.html?book=3',
    pickHint: '提示：点击泵、通道、膜或 ATP。高亮环会跟随你的选择。',
    helpHTML: `
          <li><b>认识结构</b>：直接点模型里的膜、通道、泵、ATP；标签已隐藏，也可以点下方名称。四个都点过，底部「下一步」才解锁。</li>
          <li><b>观察机制</b>：可选「正常 / 慢速」播放，或用「下一步」逐步看；系统减少动态效果开启时默认慢速。5 个步骤都看过，底部「下一步」才解锁；暂停、回看、重播都不会清空进度。</li>
          <li><b>动手探索</b>：先选一个预测，再运行模拟。只有 <b>ATP = 0%、Na⁺ 梯度 = 60%、不加抑制剂</b> 的目标实验会解锁下一步；其它条件可以自由探索，但不计完成。改条件后要重新运行。每次运行加入对照记录，可复用条件或恢复初始条件；复用后仍需运行。运行后泵按「停止 / 低速 / 较快」演示；减少动态效果开启时显示静态示意。</li>
          <li><b>场景练习</b>：点击泵、排好 5 步顺序、选对结果分析；三项都正确才算完成。答错可重试。</li>
          <li><b>结课与复习</b>：可以点上方阶段回看；所有阶段完成后才能「完成并返回」。完成后再进入是复习，也可以「重新学习」。</li>
          <li><b>手机</b>：点「看模型」收起面板，直接点结构，选中后自动回到面板。重学会二次确认；进度保存在当前浏览器，刷新后可继续；重学保留历史，清除本课记录会删除所有轮次。</li>
        `,
  } });
}
