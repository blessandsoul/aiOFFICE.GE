export type AiOfficeCategoryProductId =
  | "aichats"
  | "aicall"
  | "aicontent"
  | "aiads"
  | "aimusic"
  | "aistaff"
  | "aibrain"
  | "aioffice"
  | "aidocs"
  | "aiweb"
  | "aiapp"
  | "vibecoding";

export type AiOfficeCategoryLocale = "ka" | "en" | "ru";

export const AI_OFFICE_CATEGORY_PRODUCT_NAMES: Record<
  AiOfficeCategoryLocale,
  Record<AiOfficeCategoryProductId, string>
> = {
  ka: {
    aichats: "თანამშრომლის კითხვა",
    aicall: "პასუხისმგებელთან გადაბარება",
    aicontent: "დამტკიცებული წყარო",
    aiads: "ონბორდინგის დახმარება",
    aimusic: "პასუხის გადახედვა",
    aistaff: "პასუხისმგებელი თანამშრომელი",
    aibrain: "კომპანიის ცოდნა",
    aioffice: "სამუშაო პროცესის მართვა",
    aidocs: "წყაროს დოკუმენტები",
    aiweb: "შიდა გვერდი",
    aiapp: "დავალების სივრცე",
    vibecoding: "მორგებული პროცესი",
  },
  en: {
    aichats: "Employee question",
    aicall: "Human handoff",
    aicontent: "Approved source",
    aiads: "Onboarding support",
    aimusic: "Answer review",
    aistaff: "Responsible teammate",
    aibrain: "Company knowledge",
    aioffice: "Workflow control",
    aidocs: "Source documents",
    aiweb: "Internal page",
    aiapp: "Task workspace",
    vibecoding: "Custom workflow",
  },
  ru: {
    aichats: "Вопрос сотрудника",
    aicall: "Передача человеку",
    aicontent: "Утверждённый источник",
    aiads: "Поддержка онбординга",
    aimusic: "Проверка ответа",
    aistaff: "Ответственный сотрудник",
    aibrain: "Знания компании",
    aioffice: "Управление процессом",
    aidocs: "Исходные документы",
    aiweb: "Внутренняя страница",
    aiapp: "Рабочее пространство задачи",
    vibecoding: "Собственный процесс",
  },
};

export const AI_OFFICE_CATEGORY_PRODUCT_HREFS: Record<AiOfficeCategoryProductId, "#hero" | "#how-we-work" | "#model-architecture" | "#cta"> = {
  aichats: "#hero",
  aicall: "#model-architecture",
  aicontent: "#hero",
  aiads: "#how-we-work",
  aimusic: "#model-architecture",
  aistaff: "#model-architecture",
  aibrain: "#hero",
  aioffice: "#how-we-work",
  aidocs: "#hero",
  aiweb: "#hero",
  aiapp: "#how-we-work",
  vibecoding: "#cta",
};

export function getAiOfficeCategoryProductNames(locale: string) {
  if (locale === "ka" || locale === "ru") return AI_OFFICE_CATEGORY_PRODUCT_NAMES[locale];
  return AI_OFFICE_CATEGORY_PRODUCT_NAMES.en;
}

export function getAiOfficeCategoryProductHref(productId: string) {
  return AI_OFFICE_CATEGORY_PRODUCT_HREFS[productId as AiOfficeCategoryProductId] ?? "#categories";
}
