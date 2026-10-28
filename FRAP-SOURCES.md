# 膜的流动性与 FRAP：内容依据与模拟边界

教材对应沿用项目已有章节索引：第二章第四节 pp. 35–39（动态变化研究方法），第三章第二节 pp. 49–55（细胞质膜的基本特征与功能）。本课覆盖膜流动性与 FRAP，不代表两节全部内容都已有互动课。

## 可核查来源

- Axelrod et al. (1976), *Mobility measurement by analysis of fluorescence photobleaching recovery kinetics*. [原始研究](https://pmc.ncbi.nlm.nih.gov/articles/1334945/)，DOI: 10.1016/S0006-3495(76)85755-4。支持以局部漂白后的荧光恢复研究侧向迁移及可移动部分。
- Sprague et al. (2004), *Analysis of Binding Reactions by Fluorescence Recovery after Photobleaching*. [原始研究](https://pmc.ncbi.nlm.nih.gov/articles/PMC1304253/)，DOI: 10.1529/biophysj.103.026765。恢复可同时受扩散与结合动力学影响，不能把每条曲线简单解释为纯扩散速度。
- Day et al. (2012), *Analysis of protein and lipid dynamics using confocal fluorescence recovery after photobleaching (FRAP)*. [实验方法](https://pmc.ncbi.nlm.nih.gov/articles/PMC3538152/)。实验需处理背景、采集漂白并比较相同观察区；有限观察期和实验设计会影响参数解释。

## 本课人为设定的教学模型

下式是用于区分“恢复幅度”和“恢复快慢”的单指数概念模型，并非上述研究的扩散方程、实测拟合或物理参数标定。

`F(t) = 20 + 0.8 × mobileFraction × (1 − exp(−exchangeRate / 100 × t / 5))`

- 漂白前归一化强度 100，漂白后 20；记录 t = 0…30，时间为相对单位。
- 可移动比例取 0…100%，交换速度取 25…200%，相对于默认交换参数；不推算扩散系数。
- 长期平台 `20 + 0.8 × mobileFraction`；恢复半时 `ln(2) × 5 / (exchangeRate / 100)`。半时相对于各自恢复幅度，并非达到强度 50 的时间。
- 可移动比例为零时无恢复幅度，半时显示“无定义”；有限时间末端不能冒充平台。
- 假定周围分子库足够大、漂白不可逆且不改变运动，忽略背景、采集漂白、光开关和新合成。
- 场景中漂白分子保持暗色，未漂白分子从区域外进入；荧光恢复不是原标记自行修复。颗粒数量、位移及播放速度只用于示意，定量读数以同一公式生成的曲线为准。

代码对应：`src/frap-lesson.js`（文案）、`src/frap-experiment.js`（公式）、`demo/frap-explore.js`（数值/曲线）、`src/models-scene.js`（空间示意）。
