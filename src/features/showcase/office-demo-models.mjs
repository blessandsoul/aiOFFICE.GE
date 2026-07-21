export const EXCEPTION_STAGES = ['received', 'uncertain', 'human-correction', 'resumed'];
export const FLOW_STAGES = [
  'received',
  'checked',
  'document-prepared',
  'human-approval',
  'ready',
];
export const RECONCILIATION_STAGES = ['checking', 'blocked', 'correcting', 'ready'];

const FLOW_FRAMES = {
  received: { status: 'draft', approved: false },
  checked: { status: 'draft', approved: false },
  'document-prepared': { status: 'draft', approved: false },
  'human-approval': { status: 'awaiting-approval', approved: false },
  ready: { status: 'approved', approved: true },
};

const EXCEPTION_FRAMES = {
  received: {
    photoQuality: 'poor',
    quantity: null,
    quantitySource: null,
    workflowStatus: 'held',
    canContinue: false,
    outcome: null,
  },
  uncertain: {
    photoQuality: 'poor',
    quantity: null,
    quantitySource: null,
    workflowStatus: 'held',
    canContinue: false,
    outcome: null,
  },
  'human-correction': {
    photoQuality: 'poor',
    quantity: 12,
    quantitySource: 'human',
    workflowStatus: 'held',
    canContinue: false,
    outcome: null,
  },
  resumed: {
    photoQuality: 'poor',
    quantity: 12,
    quantitySource: 'human',
    workflowStatus: 'resumed',
    canContinue: true,
    outcome: 'resumed-after-human-correction',
  },
};

const RECONCILIATION_FRAMES = {
  checking: {
    records: { order: 12, inventory: 12, waybill: 12, accounting: 10 },
    mismatch: 'accounting',
    dispatchStatus: 'checking',
    outcome: null,
  },
  blocked: {
    records: { order: 12, inventory: 12, waybill: 12, accounting: 10 },
    mismatch: 'accounting',
    dispatchStatus: 'blocked',
    outcome: null,
  },
  correcting: {
    records: { order: 12, inventory: 12, waybill: 12, accounting: 12 },
    mismatch: null,
    dispatchStatus: 'blocked',
    outcome: null,
  },
  ready: {
    records: { order: 12, inventory: 12, waybill: 12, accounting: 12 },
    mismatch: null,
    dispatchStatus: 'ready',
    outcome: 'ready-to-ship',
  },
};

export function exceptionFrame(stage) {
  const frame = EXCEPTION_FRAMES[stage];
  if (!frame) throw new RangeError(`Unknown exception stage: ${stage}`);
  return { stage, ...frame };
}

export function flowFrame(stage) {
  const frame = FLOW_FRAMES[stage];
  if (!frame) throw new RangeError(`Unknown flow stage: ${stage}`);
  return { stage, ...frame };
}

export function reconciliationFrame(stage) {
  const frame = RECONCILIATION_FRAMES[stage];
  if (!frame) throw new RangeError(`Unknown reconciliation stage: ${stage}`);
  return { stage, ...frame, records: { ...frame.records } };
}

export function createTimelinePlayer({
  stages,
  onStage,
  durationMs = 7200,
  reducedMotion = false,
  setTimeout: schedule = globalThis.setTimeout,
  clearTimeout: cancelScheduled = globalThis.clearTimeout,
}) {
  let timers = [];

  function cancel() {
    timers.forEach((timer) => cancelScheduled(timer));
    timers = [];
  }

  function play() {
    cancel();

    if (reducedMotion || stages.length === 1) {
      onStage(stages.at(-1));
      return;
    }

    onStage(stages[0]);
    const firstChangeAt = Math.min(900, durationMs);
    const remainingTransitions = stages.length - 1;
    timers = stages.slice(1).map((stage, index) => {
      const progress = remainingTransitions === 1 ? 1 : index / (remainingTransitions - 1);
      const at = firstChangeAt + (durationMs - firstChangeAt) * progress;
      return schedule(() => onStage(stage), at);
    });
  }

  return { play, replay: play, cancel };
}
