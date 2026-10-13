import type { ProductPagesConfig } from '@/features/product-pages/types';

export const PRODUCT_PAGES = {
  pricing: { status: 'public', mode: 'project' },
  contact: { status: 'public' },
  blog: { status: 'off' },
  integrations: {
    status: 'public',
    records: [
      { id: 'email', name: 'Email', icon: 'solar:letter-bold-duotone', category: 'communication', connection: 'custom', status: 'customSetup', dataFlow: 'messages' },
      { id: 'calendar', name: 'Calendar', icon: 'solar:calendar-bold-duotone', category: 'businessSystems', connection: 'custom', status: 'customSetup', dataFlow: 'appointments' },
      { id: 'documents', name: 'Cloud documents', icon: 'solar:document-bold-duotone', category: 'businessSystems', connection: 'custom', status: 'customSetup', dataFlow: 'documents' },
      { id: 'task-system', name: 'Task system', icon: 'solar:checklist-minimalistic-bold-duotone', category: 'businessSystems', connection: 'custom', status: 'customSetup', dataFlow: 'taskRecords' },
      {
        id: 'tiktok-workflows',
        name: 'TikTok leads and messages',
        icon: 'solar:videocamera-record-bold-duotone',
        category: 'communication',
        connection: 'planned',
        status: 'planned',
        dataFlow: 'taskRecords',
        machineDescription:
          'Turning authorized TikTok leads, business messages and eligible Shop orders into office tasks is planned and is not currently available.',
        requirements: [
          'Relevant TikTok API approval',
          'Approved scopes and customer authorization',
          'Regional availability of the requested TikTok service',
        ],
        officialSources: [
          'https://business-api.tiktok.com/portal',
          'https://partner.tiktokshop.com/docv2/page/tts-developer-guide',
        ],
      },
    ],
  },
  security: { status: 'public' },
  privacy: { status: 'public' },
  terms: { status: 'public' },
  cookies: { status: 'off' },
  solutions: { status: 'off', slugs: [] },
  localeNamespaces: {
    ka: ['productPages.common', 'productPages.pricing', 'productPages.contact', 'productPages.integrations', 'productPages.security', 'productPages.privacy', 'productPages.terms'],
    en: ['productPages.common', 'productPages.pricing', 'productPages.contact', 'productPages.integrations', 'productPages.security', 'productPages.privacy', 'productPages.terms'],
    ru: ['productPages.common', 'productPages.pricing', 'productPages.contact', 'productPages.integrations', 'productPages.security', 'productPages.privacy', 'productPages.terms'],
  },
} as const satisfies ProductPagesConfig;
