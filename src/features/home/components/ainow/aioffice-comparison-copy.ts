// @ts-expect-error -- Node's standalone TypeScript test runner needs the extension.
import { getAiNowHomeCopy } from "./AiNowHomeCopy.ts";

export type AiOfficeComparisonProblemId = "chats" | "calls" | "content" | "website";

const FALLBACK_PRODUCT_LABELS: Record<AiOfficeComparisonProblemId, string> = {
  chats: "aiCHATS",
  calls: "aiCALL",
  content: "aiCONTENT",
  website: "aiWEB",
};

export function getAiOfficeComparisonProductLabels(locale: string): Record<AiOfficeComparisonProblemId, string> {
  const copy = getAiNowHomeCopy(locale);
  return {
    chats: copy.comparison.problems.chats.productLabel ?? FALLBACK_PRODUCT_LABELS.chats,
    calls: copy.comparison.problems.calls.productLabel ?? FALLBACK_PRODUCT_LABELS.calls,
    content: copy.comparison.problems.content.productLabel ?? FALLBACK_PRODUCT_LABELS.content,
    website: copy.comparison.problems.website.productLabel ?? FALLBACK_PRODUCT_LABELS.website,
  };
}
