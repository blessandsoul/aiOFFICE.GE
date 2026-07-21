import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import test from 'node:test';

const showcaseUrl = new URL('.', import.meta.url);
const files = readdirSync(showcaseUrl)
  .filter((file) => file.endsWith('.tsx'))
  .map((file) => new URL(file, showcaseUrl));
files.push(new URL('../home/components/LandingHero.tsx', import.meta.url));

const banned = [
  /(?:placeholder:)?text-neutral-900\/(?:[0-5]\d?|\[(?:0?\.)?[0-5]\d*\])/gu,
  /text-(?:white|black)\/(?:[0-4]\d?|\[(?:0?\.)?[0-4]\d*\])/gu,
];

test('semantic showcase and hero labels never use failing text opacity utilities', () => {
  for (const url of files) {
    const source = readFileSync(url, 'utf8').replace(/<Ico\b[\s\S]*?\/>/gu, '');
    const failures = banned.flatMap((pattern) => source.match(pattern) ?? []);
    assert.deepEqual(failures, [], `${url.pathname}: ${failures.join(', ')}`);
  }
});

test('tinted office result surfaces use measured dark ink', () => {
  const map = readFileSync(new URL('./OfficeMap.tsx', import.meta.url), 'utf8');
  const leak = readFileSync(new URL('./OfficeLeak.tsx', import.meta.url), 'utf8');
  const reconciliation = readFileSync(new URL('./OfficeReconciliationGuard.tsx', import.meta.url), 'utf8');

  assert.match(map, /text-\[#065F5B\]/u);
  assert.match(map, /bg-neutral-900\/8 text-\[#4B5563\]/u);
  assert.match(leak, /color-mix\(in srgb, var\(--brand\) 14%, white\)[\s\S]{0,220}text-\[#4B5563\]/u);
  assert.match(reconciliation, /isReady \? 'text-white' : 'text-\[#D1D5DB\]'/u);
});
