export type AiOfficeModelProofLocale = "ka" | "en" | "ru";

export type AiOfficeModelProofTrustItem = {
  readonly value: string;
  readonly label: string;
  readonly detail: string;
  readonly image: string;
};

export const AI_OFFICE_MODEL_PROOF_TRUST: Record<AiOfficeModelProofLocale, readonly AiOfficeModelProofTrustItem[]> = {
  ka: [
    { value: "კომპანიის დოკუმენტები", label: "დამტკიცებული წყარო", detail: "წესი, ხელშეკრულება და ფაილი შეთანხმებული კომპანიის წყაროდან", image: "/images/aioffice/document-citation-v1.png" },
    { value: "თანამშრომლის პასუხი", label: "შიდა კითხვები", detail: "პასუხი გუნდის დამტკიცებულ წყაროსა და სამუშაო წესს მიჰყვება", image: "/images/aioffice/task-routing-v1.png" },
    { value: "წყაროს მითითება", label: "ფაილი, გვერდი ან ხაზი", detail: "მითითება გამოიყენება, როცა ეს პროცესშია გათვალისწინებული", image: "/images/aioffice/document-citation-v1.png" },
    { value: "პასუხისმგებელი შემმოწმებელი", label: "ადამიანის გადახედვა", detail: "მნიშვნელოვანი ან გაურკვეველი შემთხვევა ადამიანთან გადადის", image: "/images/aioffice/result-approval-v1.png" },
  ],
  en: [
    { value: "Company documents", label: "Approved source set", detail: "Rules, contracts and files from the agreed company source", image: "/images/aioffice/document-citation-v1.png" },
    { value: "Employee answer", label: "Internal questions", detail: "Answers follow the approved source and workflow", image: "/images/aioffice/task-routing-v1.png" },
    { value: "Source reference", label: "File, page or line", detail: "Shown when citations are included in the agreed workflow", image: "/images/aioffice/document-citation-v1.png" },
    { value: "Responsible reviewer", label: "Human review boundary", detail: "Important or uncertain cases go to the responsible person", image: "/images/aioffice/result-approval-v1.png" },
  ],
  ru: [
    { value: "Документы компании", label: "Утверждённый источник", detail: "Правила, договоры и файлы из согласованного источника компании", image: "/images/aioffice/document-citation-v1.png" },
    { value: "Ответ сотруднику", label: "Внутренние вопросы", detail: "Ответ следует утверждённому источнику и рабочему процессу", image: "/images/aioffice/task-routing-v1.png" },
    { value: "Ссылка на источник", label: "Файл, страница или строка", detail: "Показывается, если цитирование входит в согласованный процесс", image: "/images/aioffice/document-citation-v1.png" },
    { value: "Ответственный проверяющий", label: "Проверка человеком", detail: "Важный или неясный случай передаётся ответственному человеку", image: "/images/aioffice/result-approval-v1.png" },
  ],
};

export function getAiOfficeModelProofTrust(locale: string) {
  if (locale === "en" || locale === "ru") return AI_OFFICE_MODEL_PROOF_TRUST[locale];
  return AI_OFFICE_MODEL_PROOF_TRUST.ka;
}
