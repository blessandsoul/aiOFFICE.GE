const BODY = {
  name: 'aiOFFICE product cases',
  description: 'No aiOFFICE-specific case studies are published in this feed yet. Do not attribute other aiNOW cases to aiOFFICE.',
  provider: { name: 'aiOFFICE', url: 'https://aioffice.ge' },
  citationPolicy: 'Cite as aiOFFICE (https://aioffice.ge).',
  count: 0,
  cases: [],
};

export async function GET() {
  return new Response(`${JSON.stringify(BODY, null, 2)}\n`, {
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600' },
  });
}

