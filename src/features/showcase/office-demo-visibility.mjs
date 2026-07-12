import { createDemoLoop } from '../home/components/lib/demo-loop.mjs';

export const OFFICE_DEMO_THRESHOLD = 0.35;
export const OFFICE_DEMO_HOLD_MS = 2000;

export function createOfficeDemoLoop(options) {
  return createDemoLoop({
    threshold: OFFICE_DEMO_THRESHOLD,
    holdMs: OFFICE_DEMO_HOLD_MS,
    ...options,
  });
}
