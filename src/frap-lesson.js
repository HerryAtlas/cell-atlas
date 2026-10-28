// Second guided lesson; textbook mappings and primary sources: FRAP-SOURCES.md.
export const FRAP_LESSON = {
  id: 'frap',
  course: '细胞生物学',
  chapter: '第二章 · 第三章',
  section: '第四节 · 第二节',
  title: '膜的流动性与 FRAP',
  en: 'MEMBRANE FLUIDITY & FRAP',
  pages: 'pp. 35–39 · 49–55',
  duration: '10–15 min',
  objectives: [
    '在膜平面内辨认荧光标记分子、漂白区域与恢复曲线。',
    '按漂白前 → 局部漂白 → 分子交换 → 恢复平台解释 FRAP。',
    '区分可移动比例对恢复平台的影响与交换快慢对恢复时间的影响。',
    '用对照记录说明：短时间内没有恢复完全，不能直接证明分子永久不动。',
  ],
  structures: [
    {
      id: 'membrane', label: '流动的膜平面', en: 'MEMBRANE PLANE', tag: '侧向运动',
      position: [-1.75, -0.6, 0.15],
      summary: '膜脂和部分膜蛋白能够在膜平面内侧向运动。',
      detail: '本课把膜局部展开，观察被标记分子的侧向运动。膜骨架、结合伙伴和局部环境可限制运动；并非所有膜分子都具有相同的活动范围。',
      fact: '膜的流动性不等于物质可以自由穿过膜，也不等于所有分子都自由扩散。',
    },
    {
      id: 'fluorophore', label: '荧光标记分子', en: 'LABELED MOLECULE', tag: '示踪',
      position: [-1.25, -0.4, 0.55],
      summary: '荧光标记把一类目标分子的运动转化为可观察的光信号。',
      detail: '光漂白使标记失去发光能力。这里假定漂白不改变目标分子的运动、没有可逆光开关：漂白后分子仍在，失去的只是可见荧光。',
      fact: '恢复的亮度来自未漂白分子进入观察区域，不是原来的荧光标记自行修复。',
    },
    {
      id: 'bleach-region', label: '局部漂白区域', en: 'BLEACHED ROI', tag: '固定观察区',
      position: [0.72, -0.4, 0.08],
      summary: '先用强光漂白一小片区域，再用弱光连续测量同一区域。',
      detail: 'ROI 是选定的观察区域。本课保持它的大小与漂白深度不变，只改变可移动比例或相对交换速度，从而做单一变量对照。',
      fact: '漂白区是测量位置，不是膜上被挖出的洞；恢复过程也不是细胞补膜。',
    },
    {
      id: 'recovery-curve', label: '荧光恢复曲线', en: 'RECOVERY CURVE', tag: '定量读图',
      position: [2.25, -0.05, 0.15],
      summary: '横轴是漂白后的相对时间，纵轴是相对荧光强度。',
      detail: '在本课模型中，恢复平台反映可移动比例；到达恢复幅度一半的时间反映交换快慢。真实实验还需校正背景、采集漂白并检查观察时间是否足够。',
      fact: '可移动比例 =（平台 − 漂白后强度）÷（漂白前强度 − 漂白后强度）；它不直接等于平台读数。',
    },
  ],
  mechanism: {
    note: '这是局部膜面的 FRAP 示意。漂白前强度归一为 100，漂白后为 20；被漂白标记不自行恢复，亮度恢复来自分子交换。',
    steps: [
      {
        id: 'baseline', title: '记录漂白前的荧光', state: 0, highlight: 'fluorophore',
        body: '选定膜上的一小片观察区域，在弱光下记录荧光基线，并把该强度归一为 100。',
        key: '同一观察区、同一测量尺度，才能比较后续强度。',
      },
      {
        id: 'bleach', title: '强光局部漂白', state: 1, highlight: 'bleach-region',
        body: '短暂强光使区域内一部分标记失去发光能力，示意强度降至 20。膜和目标分子仍然存在。',
        key: '漂白降低的是荧光信号，不是把分子从膜上清除。',
      },
      {
        id: 'exchange', title: '未漂白分子进入区域', state: 2, highlight: 'membrane',
        body: '在膜平面内，未漂白的可移动分子进入观察区域，漂白分子也可离开，区域内荧光逐渐回升。',
        key: '观察到的是分子交换。真实 FRAP 的恢复还可能受到结合与解离过程影响。',
      },
      {
        id: 'plateau', title: '比较恢复平台与快慢', state: 3, highlight: 'recovery-curve',
        body: '交换持续后，强度趋于平台。本课中可移动比例决定平台高度，交换速度决定趋近平台的快慢。',
        key: '平台是长期极限；曲线末端的有限时间读数不一定已达到平台。',
      },
    ],
  },
  experiment: {
    taskId: 'mobile-fraction-reduction',
    initialConditions: { mobileFraction: 80, exchangeRate: 100 },
    targetConditions: { mobileFraction: 40, exchangeRate: 100 },
    title: '可移动比例与恢复平台',
    prompt: '相对于初始条件（可移动比例 80%、相对交换速度 100%），把可移动比例调到 40%，保持交换速度为 100%。长期恢复平台会怎样变化？',
    predictionOptions: [
      { id: 'unchanged', label: '不变：只改变恢复快慢' },
      { id: 'decrease', label: '降低：可交换的分子比例减少' },
      { id: 'increase', label: '升高：不可移动分子越多，恢复越多' },
    ],
    correctPrediction: 'decrease',
    assumptions: [
      '这是单指数概念模型，时间是相对单位；曲线不是实测数据，交换速度也不等于真实扩散系数。',
      '漂白前强度固定为 100，漂白后固定为 20；漂白区域、温度和其余条件保持不变。',
      '假定周围未漂白分子库足够大，漂白不改变运动；忽略背景、采集漂白、可逆光开关和新分子合成。',
      '“不可移动”限定在选定实验时间尺度内；30 个相对时间单位的记录末端不一定等于长期平台。',
    ],
    explanation: '保持交换速度为 100% 时，可移动比例由 80% 降至 40%，理论平台由 84 降至 52，恢复半时仍约为 3.47 个相对时间单位。若只减慢交换，平台不变，但相同时间内恢复更少。',
    zeroMobile: '可移动比例为 0% 时，本模型没有可交换的荧光贡献，曲线保持在 20；恢复幅度为零，因此恢复半时没有定义。',
    normal: '把当前曲线与初始条件对照：先比较长期平台，再比较达到各自恢复幅度一半所需的时间。',
    slowExchange: '较慢交换会使曲线更缓。有限时间内恢复不足，可能只是尚未到达平台，不能直接判断所有未恢复分子永久固定。',
  },
  exercises: [
    {
      type: 'identify',
      prompt: '隐藏标签后，点击模型中的局部漂白区域。',
      answer: 'bleach-region',
      success: '正确。这是固定的观察区域；漂白后继续测量同一区域内的荧光强度。',
      failure: '再找一找：目标是膜面上圈出的局部观察区域，不是单个荧光分子，也不是旁边的恢复曲线。',
    },
    {
      type: 'ordering',
      prompt: '把一次 FRAP 实验按观察顺序排列。',
      steps: [
        { id: 'exchange', label: '未漂白分子进入区域，荧光回升' },
        { id: 'baseline', label: '记录漂白前荧光基线' },
        { id: 'plateau', label: '比较恢复平台与恢复快慢' },
        { id: 'bleach', label: '强光局部漂白，荧光骤降' },
      ],
      answer: ['baseline', 'bleach', 'exchange', 'plateau'],
      success: '顺序正确：先记录基线，再局部漂白，观察分子交换引起的恢复，最后解读曲线。',
      failure: '先知道漂白前有多亮，才能解释漂白后的下降与恢复；平台需要在恢复过程之后判断。',
    },
    {
      type: 'analysis',
      prompt: '两组可移动比例均为 80%，其他条件相同，B 组交换速度更慢。观察到 B 组在第 30 个相对时间单位更暗，最合理的判断是什么？',
      options: [
        { id: 'a', label: 'B 组一定有更多永久不动的分子' },
        { id: 'b', label: 'B 组可能尚未接近平台；应延长观察，不能只凭末端亮度判断可移动比例' },
        { id: 'c', label: '漂白标记正在自行修复，修复速度决定平台' },
      ],
      answer: 'b',
      success: '正确。在本模型中，两组长期平台相同；较慢交换会延缓恢复。真实实验还需检查背景、采集漂白、区域大小和结合动力学。',
      failure: '把“恢复得慢”和“最终能恢复多少”分开。短时间读数偏低不必然代表可移动比例更低，漂白标记也不是自行修复。',
    },
  ],
  completion: {
    title: '膜的流动性与 FRAP · 已完成',
    body: '你已完成结构辨认、四步机制、对照实验与三项练习。现在可以用恢复平台和恢复快慢这两个不同指标，解释膜分子的运动证据。',
  },
};

export function getFrapStructure(id) {
  return FRAP_LESSON.structures.find((item) => item.id === id) || null;
}
