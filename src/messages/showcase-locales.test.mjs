import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const LOCALES = ['en', 'ka', 'ru'];
const COPY_NAMESPACES = [
  'seo',
  'hero',
  'work',
  'faq',
  'cta',
  'capabilities',
  'heroStory',
  'flow',
  'exceptionGuard',
  'leak',
  'reconciliationGuard',
  'map',
  'proof',
];
const EXPECTED_KEYS = {
  capabilities: ['eyebrow', 'title', 'intro', 'outcomeLabel', 'items'],
  flow: [
    'eyebrow',
    'heading',
    'subtitle',
    'play',
    'again',
    'running',
    'manual',
    'auto',
    'handTime',
    'autoTime',
    's1',
    's1sub',
    's2',
    's2sub',
    's3',
    's3sub',
    's4',
    's4sub',
    's5',
    's5sub',
    'human',
    'note',
  ],
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

test('showcase flow and guard namespaces have exact key parity in en, ka, and ru', async () => {
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

test('all rewritten product namespaces keep locale key parity', async () => {
  const english = await loadLocale('en');

  for (const locale of LOCALES) {
    const messages = await loadLocale(locale);
    for (const namespace of COPY_NAMESPACES) {
      assert.deepEqual(
        Object.keys(messages.product[namespace]).sort(),
        Object.keys(english.product[namespace]).sort(),
        `${locale} product.${namespace} keys differ from English`,
      );
    }
  }
});

test('capabilities contain exactly five complete business outcomes in every locale', async () => {
  for (const locale of LOCALES) {
    const messages = await loadLocale(locale);
    const items = messages.product.capabilities.items;

    assert.deepEqual(Object.keys(items), ['1', '2', '3', '4', '5']);
    for (const item of Object.values(items)) {
      assert.deepEqual(Object.keys(item).sort(), ['description', 'result', 'title']);
      assert.ok(Object.values(item).every((value) => typeof value === 'string' && value.trim()));
    }
  }
});

test('Georgian rewritten product copy contains no Cyrillic letters', async () => {
  const messages = await loadLocale('ka');
  const rewrittenCopy = JSON.stringify(
    Object.fromEntries(COPY_NAMESPACES.map((namespace) => [namespace, messages.product[namespace]])),
  );

  assert.doesNotMatch(rewrittenCopy, /[\u0400-\u04ff]/u);
});

test('English product copy names aiNOW as the actor without first-person promises', async () => {
  const messages = await loadLocale('en');
  const rewrittenCopy = JSON.stringify(
    Object.fromEntries(COPY_NAMESPACES.map((namespace) => [namespace, messages.product[namespace]])),
  );

  assert.match(messages.product.hero.signedBy, /^aiNOW\b/u);
  assert.doesNotMatch(rewrittenCopy, /\b(?:Andrew|I|me|my|mine|we|us|our|ours)\b/iu);
  assert.doesNotMatch(
    rewrittenCopy,
    /95%|67%|14 GEL|38 dollars|30 days|24 hours|5 to 50|17 minutes|9 seconds|two days|hour a day|three days/iu,
  );
});

test('flow copy presents approval as the safety gate and ready as the only final state', async () => {
  const approvalPatterns = {
    en: /human approval|person approves/iu,
    ka: /ადამიანის დასტური|თანამშრომელი ადასტურებს/u,
    ru: /подтверждение сотрудником|сотрудник подтверждает/iu,
  };
  const readyPatterns = {
    en: /ready/iu,
    ka: /მზად/u,
    ru: /готов/iu,
  };

  for (const locale of LOCALES) {
    const messages = await loadLocale(locale);
    assert.match(messages.product.flow.s4, approvalPatterns[locale]);
    assert.match(messages.product.flow.s5, readyPatterns[locale]);
  }
});
