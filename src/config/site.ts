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
  brandHex: "#0d9488",

  /** Three hexes the hero grainient shader interpolates: soft, brand, accent. */
  shader: ["#99f6e4", "#0d9488", "#2dd4bf"] as [string, string, string],

  /**
   * i18n.
   *
   * `defaultLocale` is the UNPREFIXED locale (next-intl `localePrefix: "as-needed"`), so it
   * decides the URL shape: the default lives at `/`, the others at `/<locale>`. The Georgian
   * landings use "ka"; the export landings (aiapp, vibecoding) use "en".
   *
   * It is NOT the same question as "is this locale Georgian". That stays a literal
   * `locale === "ka"` check wherever it appears, because it drives the Georgian font and the OG
   * locale tag, and Georgian is still an offered locale even on an EN-default site. Do not
   * find-replace one for the other.
   */
  defaultLocale: "ka",
  locales: ["ka", "en", "ru"],

  /** PWA manifest. Not locale-aware (Next metadata routes are build-time). English. */
  manifest: {
    name: "aiOFFICE",
    short: "aiOFFICE",
    description: "Back office automation for Georgian companies: orders, documents, approvals, RS.ge.",
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
      "Back-office process automation for Georgian companies: orders, documents, approvals, reports, RS.ge waybills, and the glue to 1C, ORIS or Balance. It is not a customer-facing chatbot and it is not a consultancy selling a strategy deck.",
    serviceType: "Back-office automation for Georgian companies, one process at a time",
    audienceName:
      "Georgian companies in distribution, retail, logistics, healthcare, construction and hospitality",
    areaServed: "GE",
    knowsAbout: [
      "Business process automation",
      "RS.ge waybill",
      "Georgian tax compliance",
      "1C",
      "ORIS accounting",
      "Balance.ge",
      "Document processing",
      "Workflow automation",
      "Internal copilot",
    ],
    features: [
      "A review that identifies the first process worth automating",
      "One process with an agreed scope, owner and approval point",
      "Draft RS.ge waybills, inventory updates and invoices for review",
      "Connection to 1C, ORIS or Balance after access and compatibility are checked",
      "A visible activity trail for every automated step",
    ],
    boundary:
      "aiOFFICE is the inside of the company. If the whole job is turning a pile of documents into posted ledger rows, that is productized and it lives at aiDOCS.ge. Answering customers is aiSTAFF.ge for chat and aiCALL.ge for the phone.",
    limits: [
      "The business case is based on fewer lost orders, fewer data-entry mistakes and safer document handling. aiNOW does not reuse savings figures from another company.",
      "aiNOW does not promise headcount reduction.",
      "aiOFFICE does not include Georgian handwriting recognition.",
      "aiNOW confirms a 1C, ORIS or Balance integration only after checking the client's installation and access.",
      "Every result is measured on the client's own process. aiNOW publishes no borrowed benchmark as proof.",
    ],
    commitment:
      "Before work starts, aiNOW writes down the process, the approval boundary and the business result that will be measured.",
    summary:
      "aiOFFICE automates one back-office process at a time for Georgian companies. It connects orders, documents, approvals, reports and RS.ge drafts while keeping financial and tax actions under human approval. Integration with 1C, ORIS or Balance is confirmed only after aiNOW checks the client's actual system and access.",
  },
} as const;

export type SiteConfig = typeof SITE;
