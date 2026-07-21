import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(
  new URL('../home/components/LandingWork.tsx', import.meta.url),
  'utf8',
);

test('process heading keeps localized accent text inside the 24px-gutter shell', () => {
  assert.match(source, /w-\[calc\(100%_-_48px\)\]/u);
  assert.match(source, /<h2[^>]*\bmin-w-0\b[^>]*\bmax-w-3xl\b/u);
  assert.match(
    source,
    /<span className="[^"]*\bblock\b[^"]*\bmax-w-full\b[^"]*\bwhitespace-normal\b[^"]*\bbreak-words\b[^"]*\[overflow-wrap:anywhere\][^"]*">/u,
  );
  assert.doesNotMatch(source, /headingPre'\)\}<br\s*\/>/u);
  assert.doesNotMatch(source, /headingAccent[\s\S]{0,180}\btruncate\b/u);
});
