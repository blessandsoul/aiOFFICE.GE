'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { cn } from '@/lib/utils';
import { createTimelinePlayer } from './office-demo-models.mjs';
import { createOfficeDemoLoop } from './office-demo-visibility.mjs';

const INDUSTRIES = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6'] as const;
type Industry = (typeof INDUSTRIES)[number];

type DemoController = {
  replay: () => void;
  takeControl: () => void;
  cleanup: () => void;
};

const MAP_CYCLE_MS = 7000;

const DIFFICULTY = ['d1', 'd1', 'd2', 'd2', 'd2', 'd3'] as const;

export function OfficeMap() {
  const t = useTranslations('product.map');
  const actions = useTranslations('product.flow');
  const reduced = Boolean(useReducedMotion());
  const [ind, setInd] = useState<Industry>('i1');
  const [manual, setManual] = useState(false);
  const manualRef = useRef(false);
  const visibilityRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<DemoController | null>(null);

  useEffect(() => {
    const applyIndustry = (industry: Industry) => {
      if (!manualRef.current) setInd(industry);
    };
    const player = createTimelinePlayer({
      stages: INDUSTRIES,
      onStage: applyIndustry,
      durationMs: MAP_CYCLE_MS,
    });
    const controller = createOfficeDemoLoop({
      target: visibilityRef.current,
      reducedMotion: reduced,
      cycleMs: MAP_CYCLE_MS,
      play: player.play,
      showFinal: () => applyIndustry(INDUSTRIES[INDUSTRIES.length - 1]),
      reset: () => applyIndustry(INDUSTRIES[0]),
      stop: player.cancel,
    });

    controllerRef.current = controller;
    return () => {
      controller.cleanup();
      player.cancel();
      if (controllerRef.current === controller) controllerRef.current = null;
    };
  }, [reduced]);

  const selectIndustry = (industry: Industry) => {
    if (!manualRef.current) {
      manualRef.current = true;
      setManual(true);
      controllerRef.current?.takeControl();
    }
    setInd(industry);
  };

  const replayDemo = () => {
    manualRef.current = false;
    setManual(false);
    controllerRef.current?.replay();
  };

  return (
    <SectionContainer className="py-20 md:py-28">
      <div ref={visibilityRef} className="mx-auto max-w-5xl lg:ml-0">
        <span className="text-[12px] font-semibold tracking-wide text-neutral-900/40">
          {t('eyebrow')}
        </span>
        <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 md:text-4xl">
          {t('heading')}
        </h2>
        <p className="mt-3 max-w-xl text-pretty text-[15px] leading-relaxed text-[#525252]">
          {t('subtitle')}
        </p>

        <button
          type="button"
          onClick={replayDemo}
          data-manual={manual ? 'true' : 'false'}
          className="mt-5 min-h-[44px] rounded-xl bg-neutral-900 px-5 text-[13px] font-bold text-white transition-transform active:scale-[0.97] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
        >
          {actions('again')}
        </button>

        <div className="mt-8 flex flex-wrap gap-2">
          {INDUSTRIES.map((i) => {
            const on = i === ind;
            return (
              <button
                key={i}
                type="button"
                onClick={() => selectIndustry(i)}
                aria-pressed={on}
                className={cn(
                  'min-h-[44px] rounded-full px-5 text-[14px] font-medium',
                  'transition-[transform,background-color,box-shadow,color] duration-150 ease-out',
                  'active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2',
                  on
                    ? 'bg-[var(--brand)] text-white'
                    : 'bg-[#fafafa] text-[#525252] shadow-[0_0_0_1px_rgba(0,0,0,0.06)] md:hover:bg-[#f0f0f0]',
                )}
              >
                {t(i)}
              </button>
            );
          })}
        </div>

        <ol className="mt-10 flex flex-col gap-2">
          {[1, 2, 3, 4, 5, 6].map((n, idx) => {
            const first = idx === 0;
            const last = idx >= 4;
            return (
              <motion.li
                key={`${ind}-${n}`}
                initial={reduced ? false : { opacity: 0, y: 10, filter: 'blur(3px)' }}
                animate={{ opacity: last ? 0.6 : 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: reduced ? 0 : idx * 0.055,
                  duration: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className={cn(
                  'grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-1 rounded-2xl px-5 py-4 md:grid-cols-[auto_1.4fr_1fr_auto] md:items-center',
                  first
                    ? 'bg-[color-mix(in_srgb,var(--brand)_11%,white)] shadow-[0_0_0_1px_var(--brand)]'
                    : 'bg-[#fafafa] shadow-[0_0_0_1px_rgba(0,0,0,0.05)]',
                )}
              >
                <span
                  className={cn(
                    'flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold tabular-nums',
                    first ? 'text-white' : 'bg-white text-neutral-900/40 shadow-[0_0_0_1px_rgba(0,0,0,0.07)]',
                  )}
                  style={first ? { background: 'var(--brand)' } : undefined}
                >
                  {n}
                </span>

                <span className="min-w-0">
                  <span className="block text-pretty text-[15px] font-semibold leading-snug text-neutral-900">
                    {t(`${ind}p${n}`)}
                  </span>
                  {first && (
                    <span className="mt-1 inline-block text-[11px] font-bold tracking-wide text-[var(--brand)]">
                      {t('first')}
                    </span>
                  )}
                  {idx === 1 && (
                    <span className="mt-1 inline-block text-[11px] font-semibold tracking-wide text-neutral-900/35">
                      {t('then')}
                    </span>
                  )}
                  {idx === 4 && (
                    <span className="mt-1 inline-block text-[11px] font-semibold tracking-wide text-neutral-900/35">
                      {t('later')}
                    </span>
                  )}
                </span>

                <span className="col-span-2 md:col-span-1 md:col-start-3">
                  <span className="block text-[11px] font-semibold tracking-wide text-neutral-900/35">
                    {t('moves')}
                  </span>
                  <span className="mt-0.5 block text-pretty text-[13px] leading-snug text-[#525252]">
                    {t(`${ind}p${n}m`)}
                  </span>
                </span>

                <span className="col-span-2 md:col-span-1 md:col-start-4 md:justify-self-end">
                  <span
                    className={cn(
                      'inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold',
                      DIFFICULTY[idx] === 'd1' && 'bg-[#10b981]/12 text-[#065f46]',
                      DIFFICULTY[idx] === 'd2' && 'bg-[#f59e0b]/14 text-[#92400e]',
                      DIFFICULTY[idx] === 'd3' && 'bg-neutral-900/8 text-neutral-900/55',
                    )}
                  >
                    {t(DIFFICULTY[idx])}
                  </span>
                </span>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </SectionContainer>
  );
}
