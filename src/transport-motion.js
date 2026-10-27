// Display timing only: these bands are deliberately qualitative, not molecular
// kinetics. Both the lesson copy and the renderer use the same thresholds.
export function getPumpActivity(rate) {
  if (!Number.isFinite(rate) || rate < 0 || rate > 100) {
    return { id: 'pending', label: '待运行', stepSeconds: 0 };
  }
  if (rate === 0) return { id: 'stopped', label: '停止', stepSeconds: 0 };
  if (rate < 35) return { id: 'slow', label: '低速', stepSeconds: 2.4 };
  return { id: 'fast', label: '较快', stepSeconds: 1.2 };
}

export function advancePumpCycle(phase, delta, rate, reducedMotion = false) {
  const { stepSeconds } = getPumpActivity(rate);
  if (!stepSeconds || reducedMotion) return 0;
  const elapsed = Number.isFinite(delta) ? Math.max(0, Math.min(delta, 0.05)) : 0;
  return (phase + elapsed / stepSeconds) % 5;
}
