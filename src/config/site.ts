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
    description: "An AI office assistant for tasks, email, documents, approvals, reminders, and reports.",
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
      "An AI office assistant for Georgian companies that organizes tasks, email, documents, approvals, reminders, meeting follow-ups and reports. It is not an accounting product and it is not a customer-facing chatbot.",
    serviceType: "AI office assistant and internal workflow automation for Georgian companies",
    audienceName:
      "Georgian companies in distribution, retail, logistics, healthcare, construction and hospitality",
    areaServed: "GE",
    knowsAbout: [
      "Business process automation",
      "Task management",
      "Email triage",
      "Document organization",
      "Approval workflows",
      "Meeting follow-up",
      "Deadline reminders",
      "Office reporting",
      "Internal knowledge search",
    ],
    features: [
      "Tasks collected from email, chat and forms into one queue",
      "Automatic owners, deadlines and reminders based on approved rules",
      "Meeting notes converted into assigned follow-up tasks",
      "Documents organized with the current version and approval status visible",
      "Daily and weekly summaries prepared from real office activity",
    ],
    boundary:
      "aiOFFICE organizes work inside the company. Turning source documents into accounting records belongs to aiDOCS.ge. Customer chat belongs to aiSTAFF.ge, phone calls to aiCALL.ge, and mobile app creation to aiAPP.ge.",
    limits: [
      "The business case is measured on the client's own missed tasks, response time, overdue approvals and manual reporting effort. aiNOW does not reuse savings figures from another company.",
      "aiNOW does not promise headcount reduction.",
      "aiOFFICE is not an accounting system and does not submit tax documents.",
      "Connections to email, calendars, storage and existing business tools are confirmed only after access and compatibility are checked.",
      "Every result is measured on the client's own process. aiNOW publishes no borrowed benchmark as proof.",
    ],
    commitment:
      "Before work starts, aiNOW writes down the office routine, owners, deadlines, approval boundary and the business result that will be measured.",
    summary:
      "aiOFFICE is an AI office assistant for Georgian companies. It gathers tasks from the channels the team already uses, assigns owners and deadlines, organizes documents and approvals, follows up after meetings, and prepares clear status reports while people keep control of important decisions.",
  },
} as const;

export type SiteConfig = typeof SITE;
