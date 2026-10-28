import { FRAP_LESSON as lesson } from '../frap-lesson.js';
import { FRAP_FLOW as flow } from '../frap-flow.js';
import { createFrapProgressStore as createStore, makeFrapProgress as makeProgress, getFrapExperimentRecords as getExperimentRecords } from '../frap-progress.js';
import { createGuidedLessonUI } from './guided-lesson-ui.js';
import { createFrapExplore as createExplore } from './frap-explore.js';

export function createFrapLessonUI(options) {
  return createGuidedLessonUI({ ...options, config: {
    lesson, flow, createStore, makeProgress, getExperimentRecords, createExplore,
    sceneDefaults: { ...lesson.experiment.initialConditions }, experimentPick: 'bleach-region',
    subtitle: '第二节互动课 · 局部漂白、分子交换与恢复曲线',
    entryDescription: '点结构 · 看漂白与恢复 · 做对照实验 · 场景练习',
    bookLabel: '教材 pp. 35–39 · 49–55 · 回到实验方法 →', bookHref: './textbook.html?book=1',
    pickHint: '提示：点击膜面、荧光标记、漂白区域或恢复曲线。高亮环会跟随选择。',
    helpHTML: `
      <li><b>认识结构</b>：点击膜面、荧光标记、漂白区域和恢复曲线，也可用名称按钮辅助选择。四个都认识后解锁下一步。</li>
      <li><b>观察机制</b>：依次看漂白前、局部漂白、分子交换、恢复平台这 4 步。可手动逐步看，或选正常 / 慢速播放。</li>
      <li><b>动手探索</b>：先预测平台变化，再调节条件并运行。目标实验是<b>可移动比例 40%、相对交换速度 100%</b>；其它条件是自由探索，不计本阶段完成。预测答错仍可通过实验修正理解。</li>
      <li><b>读曲线</b>：实线为当前实验，虚线为初始条件；平台是长期极限，曲线记录到 30 个相对时间单位。可移动比例影响平台，交换速度影响恢复半时；这些是教学模型结果。</li>
      <li><b>场景练习</b>：点击局部漂白区域、排好 4 步顺序、选对分析。三个任务都正确且前面阶段齐全后才能结课。</li>
      <li><b>继续学习</b>：两节课分别保存在当前浏览器。每次运行加入对照记录；复用条件后要重新运行。重学需确认并保留历史；清除本课记录只删除 FRAP。手机点「看模型」后可直接选结构。</li>`,
  } });
}
