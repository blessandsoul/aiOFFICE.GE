/**
 * THE ONE FILE THAT DIFFERS PER LANDING.
 *
 * Everything else in this repo is shared with the other aiNOW product landings and is kept in
 * sync from `landing-template/` by `python scripts/landings.py sync`. If you find yourself
 * editing a shared file to make THIS site different, stop: the difference belongs here, or in
 * src/messages/*.json, or in this site's own widgets under src/features/showcase/.
 *
 * Per-site, never synced: src/config/site.ts, src/app/brand.css, src/messages/*.json,
 * src/features/showcase/**, src/features/home/components/LandingShowcase.tsx,
 * .impeccable/config.json, public/**.
 */

export const SITE = {
  /** Machine key. Lands on <html data-product> and is the deploy smoke-test hook. */
  key: "aioffice",

  domain: "aioffice.ge",
  baseUrl: "https://aioffice.ge",

  /** Rendered as <prefix><mark> by the nav, hero, footer and wordmark band. */
  wordmark: { prefix: "ai", mark: "OFFICE" },

  /** The product colour. src/app/brand.css is generated from this; keep them in step. */
  brandHex: "#00c2a8",

  /** Three hexes the hero grainient shader interpolates: soft, brand, accent. */
  shader: ["#c8fff4", "#00c2a8", "#008c78"] as [string, string, string],

  /**
   * i18n.
   *
   * `defaultLocale` is the UNPREFIXED locale (next-intl `localePrefix: "as-needed"`), so it
   * decides the URL shape: the default lives at `/`, the others at `/<locale>`. The Georgian
   * landings use "ka"; the export landings (aiapp, vibecoding) use "en".
   */
  defaultLocale: "ka",
  locales: ["ka", "en", "ru"],

  /** PWA manifest. Not locale-aware (Next metadata routes are build-time). English. */
  manifest: {
    name: "aiOFFICE",
    short: "aiOFFICE",
    description: "Company private AI model and central knowledge bank for employee onboarding, internal policies, and CRM workflows.",
    background: "#fbfcfc",
    theme: "#0d9488",
  },
  /**
   * The machine-readable half of the page.
   *
   * StructuredData.tsx turns this into the JSON-LD entity graph and /llms.txt turns it
   * into prose. Between them they decide whether ChatGPT, Perplexity and Gemini can
   * recommend this domain, or whether they have to guess and therefore stay quiet.
   *
   * `boundary` names the sibling product that owns the adjacent job, so our own six
   * domains stop competing for the same query and a model can route a question
   * correctly. `limits` states what we cannot do, which looks like a mistake and is the
   * opposite: an assistant will not stake an answer on a page that claims to do
   * everything, and it will happily cite one that draws its own edges.
   */
  seo: {
    disambiguating:
      "A private company AI model and central knowledge bank for Georgian businesses that indexes internal regulations, contracts, invoices, and workflows, answers employee questions in Telegram, Slack, and CRM with exact document page citations, and automates employee onboarding. It is not an accounting ERP and it is not a public customer chatbot.",
    serviceType: "Company Private AI Model & Central Knowledge Bank for Georgian Businesses",
    audienceName:
      "Georgian companies in distribution, retail, logistics, healthcare, construction, finance and hospitality",
    areaServed: "GE",
    knowsAbout: [
      "Company private AI model",
      "Corporate knowledge bank",
      "Employee onboarding automation",
      "Document citation and search",
      "Internal policy Q&A",
      "Telegram & Slack AI assistant",
      "CRM workflow automation",
      "24/7 Knowledge synchronization",
      "Isolated enterprise data security",
    ],
    features: [
      "Private AI model trained on your company's documents, contracts, and regulations",
      "Instant answers in Telegram, Slack, WhatsApp and CRM in 0.28 seconds",
      "Exact document citations with file name, page, and line number",
      "Instant zero-day employee onboarding without distracting managers",
      "24/7 continuous automatic synchronization with new corporate files",
      "100% isolated enterprise data security with zero external training leakage",
    ],
    boundary:
      "aiOFFICE organizes internal company knowledge, onboarding, and workflow rules. Processing accounting documents and 1C/ORIS postings belongs to aiDOCS.ge. External customer-facing chat belongs to aiSTAFF.ge, automated phone calls to aiCALL.ge, and web apps to aiAPP.ge.",
    limits: [
      "The business case is measured on the client's own onboarding speed, response time to internal questions, and eliminated manager interruptions. aiNOW does not reuse savings figures from another company.",
      "aiNOW does not promise headcount reduction; aiOFFICE eliminates repetitive routine so teams focus on high-value business.",
      "aiOFFICE is not an accounting system and does not submit tax documents (that belongs to aiDOCS.ge).",
      "Connections to Telegram, Slack, CRM, and cloud storage are configured after access and compatibility check.",
      "Every result is measured on the client's own verified data. aiNOW publishes no borrowed benchmark as proof.",
    ],
    commitment:
      "Before work starts, aiNOW indexes the company's internal documents, builds the private AI model, connects it to your communication channels, and verifies citation accuracy.",
    summary:
      "aiOFFICE is a private company AI model and knowledge bank for Georgian businesses. It indexes internal regulations, contracts, and CRM processes, providing instant answers with exact page citations in Telegram, Slack, and CRM to onboard new hires and keep leaders focused.",
  },
} as const;

export type SiteConfig = typeof SITE;
