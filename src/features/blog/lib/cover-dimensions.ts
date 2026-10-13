export type CoverDimensions = { width: number; height: number }

const COVER_DIMENSIONS: Record<string, CoverDimensions> = {
    "/images/aioffice/blog/rogor-avitsilot-modzvelebuli-tsesebis-pasukhi-shida-ai-asistentisgan-glass-v1.png": { width: 1536, height: 1024 },
    "/images/aioffice/blog/shida-ai-asistentis-momtsodeblis-shemotsmeba-glass-v1.png": { width: 1536, height: 1024 },
    "/images/blog/aioffice/ai-pilotis-akhali-gundis-gafartoeba.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/axali-tanamshromlis-pirveli-kviris-onboarding-telegram-slack.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/axali-tanamshromlis-rolze-morgebuli-codnis-paketi.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/damtkicebuli-codnis-migracia-ert-sadziebo-bankshi.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/dokumentebis-taxonomia-centraluri-codnis-bankistvis.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/dublikati-sop-ebi-indeksirebamde.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/eqspertis-uxilavi-codnis-aghuba-dakargvamde.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/filialebis-ertiani-damtkicebuli-tsodna.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/ganmeorebadi-shida-kitxvebis-martvadi-faq.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/kompaniis-codnis-inventarizacia-ai-pilottvis.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/kompaniis-shida-leksikoni-abreviebi-produqtis-saxelebi.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/operaciuli-cvlis-gadabareba-mimdinare-instruqciebit.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/produktis-katalogis-cvlileba-gayidvebis-cesrigshi.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/qartuli-rusuli-inglisuri-terminologiis-martva-onbording-shi.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/sezonuri-cvladi-tanamshromlebis-tsodnis-martva.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/shida-ai-asistentis-tsodnis-dafarvis-auditi.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/tanamshromlis-ukukavshiri-tsodnis-bazis-kharvezebze.webp": { width: 1672, height: 941 },
    "/images/blog/aioffice/tanamshromlis-wasvlis-dros-codnis-gadacema-da-wvdomis-gaukmeba.webp": { width: 1672, height: 941 },
}

export function getCoverDimensions(coverPath: string): CoverDimensions | undefined {
    return Object.hasOwn(COVER_DIMENSIONS, coverPath) ? COVER_DIMENSIONS[coverPath] : undefined
}
