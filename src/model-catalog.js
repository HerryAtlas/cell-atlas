// Curated section-model catalog. This is batch 01: eight focused 3D specimens
// that cover the most visually teachable sections of the textbook.

export const MODEL_SPECS = [
  {
    id: 'prokaryote-eukaryote',
    no: '01',
    title: '原核细胞 / 真核细胞',
    en: 'TWO ARCHITECTURES OF LIFE',
    book: 0,
    sections: ['第二节'],
    accent: '#7ff7e4',
    summary: '同一套生命逻辑，两条不同的空间组织路线：原核细胞用拟核与紧凑的细胞质完成一切，真核细胞用膜性区室把反应分开。',
    points: ['原核细胞没有核膜，DNA 集中在拟核区', '真核细胞以核膜、内膜系统和细胞骨架组织区室', '核糖体、膜和能量代谢是两者共享的底层机制', '细胞壁、荚膜和菌毛构成原核细胞的界面与附着结构'],
  },
  {
    id: 'membrane-mosaic',
    no: '02',
    title: '细胞质膜的流动镶嵌',
    en: 'A LIQUID MOSAIC',
    book: 2,
    sections: ['第一节', '第二节'],
    accent: '#65e6d8',
    summary: '膜不是一堵墙，而是一片二维流体：脂质提供流动性，蛋白质提供功能，糖链朝向外侧形成识别层。',
    points: ['磷脂双分子层是膜的基本骨架', '整合膜蛋白穿越脂双层，外周膜蛋白附着在表面', '膜的不对称性与流动性共同决定运输、识别和信号功能', '磷脂酰丝氨酸主要位于内叶，脂质可侧向扩散但很少自发翻转'],
  },
  {
    id: 'transport',
    no: '03',
    title: '跨膜运输：通道与泵',
    en: 'CHANNELS, CARRIERS & PUMPS',
    book: 3,
    sections: ['第一节', '第二节'],
    accent: '#8dd7ff',
    summary: '通道让离子顺梯度快速通过，泵用 ATP 逆梯度建立并维持电化学梯度；两者共同塑造膜电位与次级运输。',
    points: ['通道蛋白形成亲水孔道，选择性强、转运快', 'P 型泵通过磷酸化构象变化逆梯度转运离子', 'Na⁺/K⁺ 泵每水解 1 个 ATP 净泵出 1 个正电荷，参与膜电位', '每个循环泵出 3 个 Na⁺、泵入 2 个 K⁺，并由 1 个 ATP 供能'],
  },
  {
    id: 'endomembrane',
    no: '04',
    title: '内膜系统与膜泡运输',
    en: 'THE SECRETORY RIVER',
    book: 4,
    sections: ['第二节'],
    maps: [
      { book: 4, sections: ['第二节'] },
      { book: 5, sections: ['第一节', '第二节'] },
    ],
    accent: '#ffb27a',
    summary: '内质网、高尔基体和溶酶体通过膜泡连成一条动态河流：蛋白质在 ER 合成，在高尔基体修饰分选，最终抵达溶酶体或细胞外。',
    points: ['粗面 ER 合成并初步折叠分泌蛋白和膜蛋白', '高尔基体完成糖基化、分选与包装', 'COPII/COPI、Rab 与 SNARE 保证膜泡定向运输和融合'],
  },
  {
    id: 'mito-chloro',
    no: '05',
    title: '线粒体 / 叶绿体',
    en: 'TWO ENERGY CONVERTERS',
    book: 6,
    sections: ['第一节', '第二节', '第三节'],
    accent: '#ffb36b',
    summary: '线粒体把化学能转成质子梯度，叶绿体把光能转成化学能；两者都用膜上的电子传递链和 ATP 合酶完成能量转换。',
    points: ['线粒体内膜折叠成嵴，扩大氧化磷酸化面积', '叶绿体类囊体堆叠成基粒，承载光反应', 'H⁺ 经 F₀F₁ ATP 合酶回流，驱动 ADP + Pi → ATP', '两者都有自身 DNA，按内共生学说起源于细菌/蓝细菌'],
  },
  {
    id: 'cytoskeleton',
    no: '06',
    title: '细胞骨架三纤维',
    en: 'THE LIVING SCAFFOLD',
    book: 7,
    sections: ['第一节', '第二节', '第三节'],
    accent: '#9ee7ff',
    summary: '微丝、微管和中间丝在直径、极性、动力学和力学角色上分工不同，却共同把细胞组织成有张力、可运动、能运输的整体。',
    points: ['微丝直径约 7 nm，有极性，肌球蛋白沿其运动', '微管直径约 24 nm，动态不稳定，是运输轨道和纺锤体骨架', '中间丝直径约 10 nm，无极性，主要承担抗拉力', '驱动蛋白向微管正极运动，动力蛋白向负极运动'],
  },
  {
    id: 'nucleus',
    no: '07',
    title: '细胞核与染色质',
    en: 'THE GENOME, CONTINUOUSLY READ',
    book: 8,
    sections: ['第一节', '第二节', '第三节', '第四节', '第五节', '第六节'],
    accent: '#d3a4ff',
    summary: '核被膜把转录与翻译在空间上分开，核孔控制大分子交换，染色质在核内折叠成动态的三维调控网络。',
    points: ['核孔复合体控制核质交换，核纤层支撑核膜', '核孔复合体由外环、内环、辐条和中央通道组成，兼具高通量与选择性', '核小体是染色质的基本单位，约 147 bp DNA 缠绕组蛋白八聚体', '核仁组织 rRNA 转录、加工与核糖体亚基组装'],
  },
  {
    id: 'ribosome',
    no: '08',
    title: '核糖体与翻译',
    en: 'THE TRANSLATION MACHINE',
    book: 9,
    sections: ['第一节', '第二节'],
    accent: '#8cf0c8',
    summary: '核糖体把 mRNA 的碱基序列翻译成蛋白质：小亚基识别 mRNA，大亚基催化肽键形成，tRNA 按密码子递送氨基酸。',
    points: ['原核核糖体为 70S，真核核糖体为 80S', 'rRNA 构成催化核心，肽键形成主要由 rRNA 催化', '多核糖体让同一条 mRNA 同时被多个核糖体翻译', 'A/P/E 位点依次完成氨酰-tRNA 进入、肽键形成和空 tRNA 释放'],
  },
  {
    id: 'light-microscopy',
    no: '09',
    batch: 2,
    title: '光学显微与荧光成像',
    en: 'LIGHT & FLUORESCENCE MICROSCOPY',
    book: 1,
    sections: ['第一节'],
    accent: '#8fe8ff',
    summary: '光穿过样品，被物镜收集、滤片筛选后成像；荧光标记让特定分子从背景中“亮起来”，共聚焦则用点扫描去掉焦外光。',
    points: ['分辨率受衍射极限限制，放大倍数不等于分辨率', '荧光滤片把激发光和发射光分开，暗背景上只看见标记分子', '共聚焦针孔抑制焦外荧光，超分辨方法进一步突破衍射极限'],
  },
  {
    id: 'electron-microscopy',
    no: '10',
    batch: 2,
    title: '电子显微镜',
    en: 'ELECTRON MICROSCOPY',
    book: 1,
    sections: ['第一节'],
    accent: '#aab8ff',
    summary: '电子束在真空柱中被电磁透镜聚焦，穿过超薄样品或扫描表面；波长更短，使分辨率进入纳米尺度。',
    points: ['TEM 让电子穿透超薄切片，观察细胞内部超微结构', 'SEM 收集表面二次电子，重建样品表面形貌', '样品需固定、脱水、包埋、切片和染色，活细胞不能直接观察'],
  },
  {
    id: 'centrifugation',
    no: '11',
    batch: 2,
    title: '差速离心与亚细胞分离',
    en: 'DIFFERENTIAL CENTRIFUGATION',
    book: 1,
    sections: ['第二节'],
    accent: '#ffcf8a',
    summary: '细胞被破碎后，不同大小和密度的细胞器在离心场中分层；逐步提高离心力，就能把细胞核、线粒体、微粒体等依次分离。',
    points: ['低速离心先沉淀细胞核和未破碎细胞', '提高转速依次沉淀线粒体、溶酶体、微粒体', '密度梯度离心可进一步纯化同一细胞器'],
  },
  {
    id: 'cell-culture',
    no: '12',
    batch: 2,
    title: '细胞培养',
    en: 'CELL CULTURE',
    book: 1,
    sections: ['第三节'],
    accent: '#9ff2c0',
    summary: '细胞在无菌、恒温、合适培养基和气体环境中贴壁或悬浮生长；培养瓶把“体内环境”压缩成一个可观察、可干预的小系统。',
    points: ['原代细胞更接近体内状态，连续细胞系可长期传代', '培养基提供营养、生长因子和缓冲体系，需定期换液', '无菌操作、温度和 CO₂ 浓度决定培养是否成功'],
  },
  {
    id: 'frap',
    no: '13',
    batch: 2,
    title: 'FRAP 荧光漂白恢复',
    en: 'FLUORESCENCE RECOVERY AFTER PHOTOBLEACHING',
    book: 1,
    sections: ['第四节'],
    accent: '#71f0d4',
    summary: '用强激光把一小块荧光区域漂白，再观察周围未漂白分子扩散进来；恢复曲线能报告分子的运动速度与结合状态。',
    points: ['漂白区荧光恢复速度反映分子扩散和交换', '恢复不完整提示存在不易移动的结合池', 'FRAP 适合研究膜蛋白、核蛋白和细胞质分子的动态'],
  },
  {
    id: 'fret',
    no: '14',
    batch: 2,
    title: 'FRET 荧光共振能量转移',
    en: 'FÖRSTER RESONANCE ENERGY TRANSFER',
    book: 1,
    sections: ['第四节'],
    accent: '#ff9fc9',
    summary: '两个荧光基团足够靠近时，供体把能量无辐射地传给受体；受体发光明暗变化，可读出纳米尺度的分子邻近与构象变化。',
    points: ['FRET 效率随距离的六次方衰减，作用范围约 1–10 nm', '供体发射下降、受体发射增强是经典读出', '可构建 FRET 探针检测蛋白互作、钙离子和构象变化'],
  },
];

export const MODEL_BATCH = MODEL_SPECS.length;

export function modelById(id) {
  return MODEL_SPECS.find((model) => model.id === id) || MODEL_SPECS[0];
}

export function modelsForSection(chapterId, sectionNo) {
  const book = Number(String(chapterId || '').replace('ch', '')) - 1;
  return MODEL_SPECS.filter((model) => {
    const maps = model.maps || [{ book: model.book, sections: model.sections }];
    return maps.some((entry) => entry.book === book && entry.sections.includes(sectionNo));
  });
}

export function modelForSection(chapterId, sectionNo) {
  return modelsForSection(chapterId, sectionNo)[0] || null;
}

export function modelForBook(bookIndex) {
  return MODEL_SPECS.find((model) => model.book === bookIndex) || null;
}
