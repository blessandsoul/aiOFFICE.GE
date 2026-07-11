import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const LOCALES = ['en', 'ka', 'ru'];
const EXPECTED_KEYS = {
  exceptionGuard: [
    'eyebrow',
    'heading',
    'subtitle',
    'poorPhoto',
    'quantity',
    'uncertain',
    'held',
    'humanCheck',
    'corrected',
    'resumed',
    'outcome',
    'replay',
  ],
  reconciliationGuard: [
    'eyebrow',
    'heading',
    'subtitle',
    'order',
    'inventory',
    'waybill',
    'accounting',
    'checking',
    'match',
    'mismatch',
    'blocked',
    'correcting',
    'readyToShip',
    'outcome',
    'replay',
  ],
};

async function loadLocale(locale) {
  const url = new URL(`./${locale}.json`, import.meta.url);
  return JSON.parse(await readFile(url, 'utf8'));
}

test('showcase guard namespaces have exact key parity in en, ka, and ru', async () => {
  for (const locale of LOCALES) {
    const messages = await loadLocale(locale);

    for (const [namespace, expectedKeys] of Object.entries(EXPECTED_KEYS)) {
      assert.ok(messages.product[namespace], `${locale} is missing product.${namespace}`);
      assert.deepEqual(
        Object.keys(messages.product[namespace]).sort(),
        [...expectedKeys].sort(),
        `${locale} product.${namespace} keys differ`,
      );
    }
  }
});

test('Georgian showcase guard copy contains no Cyrillic letters', async () => {
  const messages = await loadLocale('ka');
  const guardCopy = JSON.stringify({
    exceptionGuard: messages.product.exceptionGuard,
    reconciliationGuard: messages.product.reconciliationGuard,
  });

  assert.doesNotMatch(guardCopy, /[\u0400-\u04ff]/u);
});
