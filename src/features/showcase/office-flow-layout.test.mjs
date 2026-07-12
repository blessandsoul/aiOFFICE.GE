import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import * as flowModels from './office-demo-models.mjs';

const source = readFileSync(new URL('./OfficeFlow.tsx', import.meta.url), 'utf8');

test('office flow has five approval-safe stages', () => {
  assert.deepEqual(flowModels.FLOW_STAGES, [
    'received',
    'checked',
    'document-prepared',
    'human-approval',
    'ready',
  ]);
});

test('office flow stays draft until approval and only ready is approved', () => {
  const flowFrame = flowModels.flowFrame ?? (() => ({}));

  assert.equal(flowFrame('document-prepared').status, 'draft');
  assert.equal(flowFrame('human-approval').approved, false);
  assert.equal(flowFrame('ready').approved, true);
  assert.equal(
    flowModels.FLOW_STAGES?.map(flowFrame).filter((frame) => frame.approved).length,
    1,
  );
});

test('office flow is a full-width responsive operations board', () => {
  assert.doesNotMatch(source, /lg:grid-cols-\[minmax\(280px,380px\)_1fr\]|max-w-sm/u);
  assert.match(source, /lg:grid-cols-5/u);
  assert.match(source, /data-office-comparison/u);
});

test('office flow uses bundled semantic icons instead of raw UI glyphs', () => {
  assert.doesNotMatch(source, />\s*გ\s*<|>\s*!\s*</u);
  assert.doesNotMatch(source, /from ['"]lucide-react['"]/u);
  assert.match(source, /<Ico/u);
  assert.match(source, /solar:chat-round-dots-bold-duotone/u);
  assert.match(source, /solar:text-bold-duotone/u);
  assert.match(source, /solar:shield-check-bold-duotone/u);
});
