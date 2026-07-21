import assert from 'node:assert/strict';
import test from 'node:test';

import * as models from './office-demo-models.mjs';

const {
  EXCEPTION_STAGES,
  RECONCILIATION_STAGES,
  createTimelinePlayer,
  exceptionFrame,
  reconciliationFrame,
} = models;

function createClock() {
  let now = 0;
  let id = 0;
  const pending = new Map();

  return {
    setTimeout(callback, delay) {
      const timerId = ++id;
      pending.set(timerId, { callback, at: now + delay });
      return timerId;
    },
    clearTimeout(timerId) {
      pending.delete(timerId);
    },
    advance(milliseconds) {
      const target = now + milliseconds;

      while (true) {
        const next = [...pending.entries()]
          .filter(([, timer]) => timer.at <= target)
          .sort((a, b) => a[1].at - b[1].at || a[0] - b[0])[0];

        if (!next) break;
        const [timerId, timer] = next;
        pending.delete(timerId);
        now = timer.at;
        timer.callback();
      }

      now = target;
    },
    get pendingCount() {
      return pending.size;
    },
  };
}

test('flow approval is the only transition from draft to approved', () => {
  const flowFrame = models.flowFrame ?? (() => ({}));

  assert.deepEqual(models.FLOW_STAGES, [
    'received',
    'checked',
    'document-prepared',
    'human-approval',
    'ready',
  ]);

  const frames = models.FLOW_STAGES?.map(flowFrame) ?? [];
  assert.deepEqual(
    frames.map(({ stage, status, approved }) => ({ stage, status, approved })),
    [
      { stage: 'received', status: 'draft', approved: false },
      { stage: 'checked', status: 'draft', approved: false },
      { stage: 'document-prepared', status: 'draft', approved: false },
      { stage: 'human-approval', status: 'awaiting-approval', approved: false },
      { stage: 'ready', status: 'approved', approved: true },
    ],
  );
});

test('exception frames hold an unreadable quantity until a human supplies 12', () => {
  assert.deepEqual(EXCEPTION_STAGES, [
    'received',
    'uncertain',
    'human-correction',
    'resumed',
  ]);

  const received = exceptionFrame('received');
  const uncertain = exceptionFrame('uncertain');
  const corrected = exceptionFrame('human-correction');
  const resumed = exceptionFrame('resumed');

  assert.equal(received.photoQuality, 'poor');
  assert.equal(received.quantity, null);
  assert.equal(uncertain.quantity, null);
  assert.equal(uncertain.quantitySource, null);
  assert.equal(uncertain.workflowStatus, 'held');
  assert.equal(uncertain.canContinue, false);

  assert.equal(corrected.quantity, 12);
  assert.equal(corrected.quantitySource, 'human');
  assert.equal(corrected.workflowStatus, 'held');
  assert.equal(corrected.canContinue, false);

  assert.equal(resumed.quantity, 12);
  assert.equal(resumed.quantitySource, 'human');
  assert.equal(resumed.workflowStatus, 'resumed');
  assert.equal(resumed.canContinue, true);
  assert.equal(resumed.outcome, 'resumed-after-human-correction');
});

test('reconciliation blocks dispatch on the accounting mismatch', () => {
  assert.deepEqual(RECONCILIATION_STAGES, ['checking', 'blocked', 'correcting', 'ready']);

  const blocked = reconciliationFrame('blocked');

  assert.deepEqual(blocked.records, {
    order: 12,
    inventory: 12,
    waybill: 12,
    accounting: 10,
  });
  assert.equal(blocked.mismatch, 'accounting');
  assert.equal(blocked.dispatchStatus, 'blocked');
  assert.equal(blocked.outcome, null);
});

test('only corrected matching records produce ready-to-ship', () => {
  const frames = RECONCILIATION_STAGES.map(reconciliationFrame);
  const readyFrames = frames.filter((frame) => frame.outcome === 'ready-to-ship');

  assert.equal(readyFrames.length, 1);
  assert.equal(readyFrames[0].stage, 'ready');
  assert.equal(readyFrames[0].mismatch, null);
  assert.equal(readyFrames[0].dispatchStatus, 'ready');
  assert.equal(new Set(Object.values(readyFrames[0].records)).size, 1);

  for (const frame of frames.filter((item) => item.stage !== 'ready')) {
    assert.notEqual(frame.outcome, 'ready-to-ship');
  }
});

test('timeline reaches the final stage at exactly 7200ms', () => {
  const clock = createClock();
  const seen = [];
  const player = createTimelinePlayer({
    stages: EXCEPTION_STAGES,
    onStage: (stage) => seen.push(stage),
    setTimeout: clock.setTimeout,
    clearTimeout: clock.clearTimeout,
  });

  player.play();
  assert.deepEqual(seen, ['received']);

  clock.advance(900);
  assert.deepEqual(seen, ['received', 'uncertain']);

  clock.advance(6299);
  assert.deepEqual(seen, ['received', 'uncertain', 'human-correction']);

  clock.advance(1);
  assert.deepEqual(seen, EXCEPTION_STAGES);
});

test('replay resets the timeline and cleanup cancels pending stages', () => {
  const clock = createClock();
  const seen = [];
  const player = createTimelinePlayer({
    stages: RECONCILIATION_STAGES,
    onStage: (stage) => seen.push(stage),
    setTimeout: clock.setTimeout,
    clearTimeout: clock.clearTimeout,
  });

  player.play();
  clock.advance(900);
  player.replay();
  assert.deepEqual(seen, ['checking', 'blocked', 'checking']);
  assert.equal(clock.pendingCount, 3);

  player.cancel();
  assert.equal(clock.pendingCount, 0);
  clock.advance(7200);
  assert.deepEqual(seen, ['checking', 'blocked', 'checking']);
});

test('reduced motion presents the final stage immediately without timers', () => {
  const clock = createClock();
  const seen = [];
  const player = createTimelinePlayer({
    stages: EXCEPTION_STAGES,
    onStage: (stage) => seen.push(stage),
    reducedMotion: true,
    setTimeout: clock.setTimeout,
    clearTimeout: clock.clearTimeout,
  });

  player.play();

  assert.deepEqual(seen, ['resumed']);
  assert.equal(clock.pendingCount, 0);
});
