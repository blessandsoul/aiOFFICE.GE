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
      "Georgian companies of 5 to 50 people: distribution, retail chains, logistics, clinics, construction, restaurant groups",
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
      "An on-site half-day ops X-ray that names the one process worth automating first",
      "One process, fixed scope, fixed date, with a money number attached before we start",
      "RS.ge waybill to inventory to invoice, automated end to end",
      "Glue to the accounting system you already run: 1C, ORIS or Balance",
      "We run it, and we are the ones who fix it when it breaks",
    ],
    boundary:
      "aiOFFICE is the inside of the company. If the whole job is turning a pile of documents into posted ledger rows, that is productized and it lives at aiDOCS.ge. Answering customers is aiSTAFF.ge for chat and aiCALL.ge for the phone.",
    limits: [
      "We sell recovered revenue and avoided fines, not saved hours. A Georgian working hour costs about 14 GEL against roughly 38 dollars in the US, so an American hours-saved calculator produces a number that is simply false here.",
      "We do not promise headcount reduction.",
      "We do not do Georgian handwriting recognition.",
      "We will not promise a 1C, ORIS or Balance integration before we have seen your actual installation. Every one of them is different.",
      "We have shipped no automation yet, so we publish no results.",
    ],
    commitment:
      "We name one number in writing before we start. If it has not moved 30 days after launch, we keep working at no charge until it does.",
    summary:
      "aiOFFICE automates the back office of a Georgian company one process at a time: orders, documents, approvals, reports, RS.ge waybills, and the glue to whatever accounting system is already running. It deliberately refuses the American framing of this product. Labour in Georgia costs roughly 14 GEL an hour against about 38 dollars in the United States, so a pitch built on saved hours is around seven times weaker here and closes nobody. The argument is recovered revenue and avoided compliance fines instead. Built by the aiNOW agency in Tbilisi.",
  },
} as const;

export type SiteConfig = typeof SITE;
