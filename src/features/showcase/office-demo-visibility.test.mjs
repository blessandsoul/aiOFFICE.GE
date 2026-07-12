import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import { createVisibilityGate } from './office-demo-visibility.mjs';

function observerHarness() {
  let callback;
  let observedTarget;
  let disconnectCount = 0;
  let options;

  class FakeIntersectionObserver {
    constructor(nextCallback, nextOptions) {
      callback = nextCallback;
      options = nextOptions;
    }

    observe(target) {
      observedTarget = target;
    }

    disconnect() {
      disconnectCount += 1;
    }
  }

  return {
    FakeIntersectionObserver,
    emit(isIntersecting) {
      callback([{ isIntersecting }]);
    },
    snapshot() {
      return { disconnectCount, observedTarget, options };
    },
  };
}

test('normal motion stays idle below fold and plays once on first visibility', () => {
  const harness = observerHarness();
  const target = { id: 'real-demo-box' };
  let playCount = 0;

  const cleanup = createVisibilityGate({
    target,
    play: () => {
      playCount += 1;
    },
    Observer: harness.FakeIntersectionObserver,
  });

  assert.equal(playCount, 0);
  assert.equal(harness.snapshot().observedTarget, target);
  assert.deepEqual(harness.snapshot().options, { threshold: 0.35 });

  harness.emit(false);
  assert.equal(playCount, 0);

  harness.emit(true);
  harness.emit(true);
  assert.equal(playCount, 1);
  assert.equal(harness.snapshot().disconnectCount, 1);

  cleanup();
});

test('cleanup before visibility prevents a later observer callback from playing', () => {
  const harness = observerHarness();
  let playCount = 0;

  const cleanup = createVisibilityGate({
    target: { id: 'removed-demo-box' },
    play: () => {
      playCount += 1;
    },
    Observer: harness.FakeIntersectionObserver,
  });

  cleanup();
  harness.emit(true);

  assert.equal(playCount, 0);
  assert.equal(harness.snapshot().disconnectCount, 1);
});

test('Strict Mode-like setup and idempotent cleanup isolate stale observers', () => {
  const firstHarness = observerHarness();
  const secondHarness = observerHarness();
  const plays = [];

  const cleanupFirst = createVisibilityGate({
    target: { id: 'first-mounted-box' },
    play: () => plays.push('first'),
    Observer: firstHarness.FakeIntersectionObserver,
  });

  cleanupFirst();
  cleanupFirst();

  const cleanupSecond = createVisibilityGate({
    target: { id: 'second-mounted-box' },
    play: () => plays.push('second'),
    Observer: secondHarness.FakeIntersectionObserver,
  });

  firstHarness.emit(true);
  secondHarness.emit(true);

  assert.deepEqual(plays, ['second']);
  assert.equal(firstHarness.snapshot().disconnectCount, 1);
  assert.equal(secondHarness.snapshot().disconnectCount, 1);

  cleanupSecond();
  cleanupSecond();
  assert.equal(secondHarness.snapshot().disconnectCount, 1);
});

test('reduced motion emits the final timeline immediately without observing', () => {
  let observerConstructed = false;
  let playCount = 0;

  class UnexpectedObserver {
    constructor() {
      observerConstructed = true;
    }
  }

  const cleanup = createVisibilityGate({
    target: { id: 'reduced-motion-box' },
    play: () => {
      playCount += 1;
    },
    reducedMotion: true,
    Observer: UnexpectedObserver,
  });

  assert.equal(playCount, 1);
  assert.equal(observerConstructed, false);
  cleanup();
});

test('both office demos wire the gate to a real rendered box', () => {
  for (const component of ['OfficeExceptionGuard.tsx', 'OfficeReconciliationGuard.tsx']) {
    const source = readFileSync(new URL(component, import.meta.url), 'utf8');

    assert.match(source, /import \{ createVisibilityGate \} from '.\/office-demo-visibility\.mjs';/u);
    assert.match(source, /const visibilityRef = useRef<HTMLDivElement>\(null\);/u);
    assert.match(source, /<div\s+ref=\{visibilityRef\}/u);
    assert.match(source, /target: visibilityRef\.current/u);
    assert.match(source, /const cleanupVisibility = createVisibilityGate/u);
    assert.match(source, /cleanupVisibility\(\);/u);
    assert.doesNotMatch(source, /player\.play\(\);/u);
  }
});
