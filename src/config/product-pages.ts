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
