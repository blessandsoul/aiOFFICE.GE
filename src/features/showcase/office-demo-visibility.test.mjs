import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import * as lifecycle from './office-demo-visibility.mjs';

const SHOWCASE_COMPONENTS = [
  'OfficeFlow.tsx',
  'OfficeExceptionGuard.tsx',
  'OfficeLeak.tsx',
  'OfficeReconciliationGuard.tsx',
  'OfficeMap.tsx',
  'HeroProof.tsx',
];
const RAW_STATUS_GLYPH = /(?:['"][—–?✓✔✕→←]['"]|>\s*[—–?✓✔✕→←]\s*<)/u;

function createObserverHarness() {
  const instances = [];

  class Observer {
    constructor(callback, options) {
      this.callback = callback;
      this.options = options;
      this.observed = [];
      this.disconnectCalls = 0;
      instances.push(this);
    }

    observe(target) {
      this.observed.push(target);
    }

    disconnect() {
      this.disconnectCalls += 1;
    }

    emit(target, intersectionRatio, isIntersecting = intersectionRatio > 0) {
      this.callback([{ target, intersectionRatio, isIntersecting }]);
    }
  }

  return { Observer, instances };
}

function createDocumentHarness() {
  const listeners = new Map();

  return {
    hidden: false,
    listeners,
    addEventListener(type, callback) {
      listeners.set(type, callback);
    },
    removeEventListener(type, callback) {
      if (listeners.get(type) === callback) listeners.delete(type);
    },
    setHidden(hidden) {
      this.hidden = hidden;
      listeners.get('visibilitychange')?.();
    },
  };
}

function createTimerHarness() {
  let nextId = 1;
  const tasks = new Map();

  return {
    schedule(callback, delay) {
      const id = nextId++;
      tasks.set(id, { callback, delay, cancelled: false, fired: false });
      return id;
    },
    cancel(id) {
      const task = tasks.get(id);
      if (task) task.cancelled = true;
    },
    fire(id) {
      const task = tasks.get(id);
      assert.ok(task, `unknown timer ${id}`);
      if (task.cancelled || task.fired) return;
      task.fired = true;
      task.callback();
    },
    pending() {
      return [...tasks.entries()].filter(([, task]) => !task.cancelled && !task.fired);
    },
  };
}

function createHarness(overrides = {}) {
  const target = { id: 'office-story' };
  const observer = createObserverHarness();
  const pageDocument = createDocumentHarness();
  const timers = createTimerHarness();
  const calls = [];
  const createOfficeDemoLoop = lifecycle.createOfficeDemoLoop;

  assert.equal(typeof createOfficeDemoLoop, 'function');
  const controller = createOfficeDemoLoop({
    target,
    cycleMs: 7000,
    play: () => calls.push('play'),
    showFinal: () => calls.push('showFinal'),
    reset: () => calls.push('reset'),
    stop: () => calls.push('stop'),
    Observer: observer.Observer,
    pageDocument,
    schedule: timers.schedule,
    cancelScheduled: timers.cancel,
    ...overrides,
  });

  return { target, observer, pageDocument, timers, calls, controller };
}

test('office stories start at 35 percent visibility and repeat after a 2 second final hold', () => {
  const harness = createHarness();
  const observed = harness.observer.instances[0];

  assert.deepEqual(observed.options, { threshold: 0.35 });
  observed.emit(harness.target, 0.34, true);
  assert.deepEqual(harness.calls, []);

  observed.emit(harness.target, 0.35, true);
  assert.deepEqual(harness.calls, ['play']);
  assert.equal(harness.timers.pending()[0][1].delay, 9000);

  harness.timers.fire(harness.timers.pending()[0][0]);
  assert.deepEqual(harness.calls, ['play', 'stop', 'reset', 'play']);
});

test('offscreen and hidden office stories stop, reset, and restart cleanly', () => {
  const harness = createHarness();
  const observed = harness.observer.instances[0];

  observed.emit(harness.target, 0.8);
  observed.emit(harness.target, 0, false);
  assert.deepEqual(harness.calls, ['play', 'stop', 'reset']);
  assert.equal(harness.timers.pending().length, 0);

  observed.emit(harness.target, 0.8);
  harness.pageDocument.setHidden(true);
  assert.deepEqual(harness.calls, ['play', 'stop', 'reset', 'play', 'stop', 'reset']);

  harness.pageDocument.setHidden(false);
  assert.equal(harness.calls.at(-1), 'play');
});

test('reduced motion renders the final office state without observers or timers', () => {
  const harness = createHarness({ reducedMotion: true });

  assert.deepEqual(harness.calls, ['showFinal']);
  assert.equal(harness.observer.instances.length, 0);
  assert.equal(harness.timers.pending().length, 0);
});

test('manual control cancels automatic repetition without resetting visitor input', () => {
  const harness = createHarness();
  const observed = harness.observer.instances[0];

  observed.emit(harness.target, 0.8);
  harness.controller.takeControl();

  assert.deepEqual(harness.calls, ['play', 'stop']);
  assert.equal(harness.timers.pending().length, 0);

  observed.emit(harness.target, 0, false);
  observed.emit(harness.target, 0.8);
  assert.deepEqual(harness.calls, ['play', 'stop', 'stop']);
});

test('explicit replay releases manual ownership and restarts the visible loop', () => {
  const harness = createHarness();
  const observed = harness.observer.instances[0];

  observed.emit(harness.target, 0.8);
  harness.controller.takeControl();
  harness.controller.replay();

  assert.deepEqual(harness.calls, ['play', 'stop', 'stop', 'reset', 'play']);
  assert.equal(harness.timers.pending().length, 1);
  assert.equal(harness.timers.pending()[0][1].delay, 9000);
});

test('all office stories use the shared visible loop and expose replay', () => {
  for (const component of SHOWCASE_COMPONENTS) {
    const source = readFileSync(new URL(component, import.meta.url), 'utf8');

    assert.match(source, /createOfficeDemoLoop/u, `${component} must use the shared office loop`);
    assert.match(source, /\.replay\(\)/u, `${component} must expose replay`);
    assert.doesNotMatch(source, /createVisibilityGate|setInterval/u);
  }
});

test('all office stories use bundled icons instead of raw visitor status glyphs', () => {
  for (const component of SHOWCASE_COMPONENTS) {
    const source = readFileSync(new URL(component, import.meta.url), 'utf8');
    assert.doesNotMatch(source, RAW_STATUS_GLYPH, `${component} contains a raw status glyph`);
    assert.doesNotMatch(source, /from ['"]lucide-react['"]/u);
  }

  const exceptionSource = readFileSync(
    new URL('OfficeExceptionGuard.tsx', import.meta.url),
    'utf8',
  );
  assert.match(exceptionSource, /import \{ Ico \} from '@\/components\/common\/Ico';/u);
  assert.match(exceptionSource, /<Ico/u);
});

test('manual leak and map stories yield until an enabled explicit replay', () => {
  for (const component of ['OfficeLeak.tsx', 'OfficeMap.tsx']) {
    const source = readFileSync(new URL(component, import.meta.url), 'utf8');
    assert.match(source, /\.takeControl\(\)/u, `${component} must yield to manual input`);
    assert.doesNotMatch(source, /disabled=\{manual\}/u);
    assert.match(source, /onClick=\{replayDemo\}/u);
    assert.match(
      source,
      /const replayDemo = \(\) => \{[\s\S]*?manualRef\.current = false;[\s\S]*?setManual\(false\);[\s\S]*?controllerRef\.current\?\.replay\(\);[\s\S]*?\};/u,
      `${component} must release manual ownership before replay`,
    );
  }
});
