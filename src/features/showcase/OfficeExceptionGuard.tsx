'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Ico } from '@/components/common/Ico';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { cn } from '@/lib/utils';
import {
  EXCEPTION_STAGES,
  createTimelinePlayer,
  exceptionFrame,
} from './office-demo-models.mjs';
import { createOfficeDemoLoop } from './office-demo-visibility.mjs';

type DemoController = {
  replay: () => void;
  cleanup: () => void;
};

const STAGE_LABELS = ['poorPhoto', 'uncertain', 'humanCheck', 'resumed'] as const;

export function OfficeExceptionGuard() {
  const t = useTranslations('product.exceptionGuard');
  const reduced = Boolean(useReducedMotion());
  const [stage, setStage] = useState(EXCEPTION_STAGES[0]);
  const controllerRef = useRef<DemoController | null>(null);
  const visibilityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const player = createTimelinePlayer({
      stages: EXCEPTION_STAGES,
      onStage: setStage,
    });

    const controller = createOfficeDemoLoop({
      target: visibilityRef.current,
      play: player.play,
      showFinal: () => setStage(EXCEPTION_STAGES[EXCEPTION_STAGES.length - 1]),
      reset: () => setStage(EXCEPTION_STAGES[0]),
      stop: player.cancel,
      cycleMs: 7200,
      reducedMotion: reduced,
    });
    controllerRef.current = controller;

    return () => {
      controller.cleanup();
      player.cancel();
      if (controllerRef.current === controller) controllerRef.current = null;
    };
  }, [reduced]);

  const frame = exceptionFrame(stage);
  const activeIndex = EXCEPTION_STAGES.indexOf(stage);
  const hasHumanValue = frame.quantitySource === 'human';
  const isDone = frame.canContinue;

  return (
    <SectionContainer className="py-16 md:py-24 lg:py-28">
      <div
        ref={visibilityRef}
        data-landing-demo="office-exception-guard"
        data-demo-id="office-exception-guard"
        data-demo-detail={stage}
        aria-live="off"
        className="grid gap-10 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-14"
      >
        <div>
          <span className="text-[12px] font-semibold tracking-wide text-[#667085]">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 text-balance font-display text-[30px] font-extrabold leading-[1.1] tracking-tight text-[#101828] md:text-[36px] md:leading-[1.12]">
            {t('heading')}
          </h2>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-[#4B5563]">
            {t('subtitle')}
          </p>
          <p data-demo-outcome className="mt-6">
            {t('outcome')}
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl bg-[#0e0e11] p-3 shadow-[0_24px_70px_rgba(14,14,17,0.12)] sm:p-5">
          <div className="grid gap-3 md:grid-cols-[minmax(180px,0.8fr)_1.2fr]">
            <div className="rounded-2xl bg-white/[0.06] p-3">
              <span className="text-[11px] font-semibold tracking-wide text-[#A3A3A3]">
                {t('poorPhoto')}
              </span>
              <div
                className="mt-3 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-[#b8aea0] p-5"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 25% 20%, rgba(255,255,255,.22), transparent 34%), repeating-linear-gradient(120deg, rgba(0,0,0,.08) 0 2px, transparent 2px 7px)',
                }}
              >
                <div className="h-full w-full rotate-[-3deg] rounded-md bg-[#e4ded3]/65 p-4 shadow-xl blur-[0.7px]">
                  {[72, 88, 61, 80].map((width) => (
                    <span
                      key={width}
                      className="mb-3 block h-1.5 rounded-full bg-neutral-900/20"
                      style={{ width: `${width}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-col rounded-2xl bg-white p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold tracking-wide text-[#667085]">
                    {t('quantity')}
                  </span>
                  <motion.p
                    key={hasHumanValue ? 'human-value' : stage}
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduced ? 0 : 0.24 }}
                    className="mt-1 flex min-h-12 items-center font-display text-5xl font-extrabold tabular-nums text-neutral-900"
                  >
                    {hasHumanValue ? (
                      frame.quantity
                    ) : (
                      <Ico
                        name={
                          stage === 'uncertain'
                            ? 'solar:close-circle-bold-duotone'
                            : 'solar:clock-circle-bold-duotone'
                        }
                        className={cn(
                          'h-10 w-10',
                          stage === 'uncertain' ? 'text-[#d97706]' : 'text-[#667085]',
                        )}
                      />
                    )}
                  </motion.p>
                </div>
                <span
                  className={cn(
                    'rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide',
                    isDone
                      ? 'bg-[#10b981]/12 text-[#065f46]'
                      : 'bg-[#f59e0b]/15 text-[#92400e]',
                  )}
                >
                  {isDone ? t('resumed') : t('held')}
                </span>
              </div>

              <div className="mt-4 min-h-12 rounded-xl bg-[#fafafa] px-3 py-2.5 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
                <span className="block text-[11px] font-semibold tracking-wide text-[#667085]">
                  {hasHumanValue ? t('humanCheck') : t('uncertain')}
                </span>
                <span
                  aria-hidden={!hasHumanValue}
                  className={cn(
                    'mt-1 block min-h-[20px] text-[13px] font-semibold text-neutral-900',
                    !hasHumanValue && 'invisible',
                  )}
                >
                  {t('corrected')}
                </span>
              </div>

              <ol className="mt-5 grid grid-cols-4 gap-1.5" aria-label={t('eyebrow')}>
                {EXCEPTION_STAGES.map((item, index) => {
                  const reached = index <= activeIndex;
                  const current = item === stage;
                  return (
                    <li key={item} aria-current={current ? 'step' : undefined}>
                      <span
                        className={cn(
                          'block h-1.5 rounded-full transition-colors motion-reduce:transition-none',
                          reached ? 'bg-[var(--brand)]' : 'bg-neutral-900/10',
                        )}
                      />
                      <span className="mt-2 block text-[10px] leading-tight text-[#667085]">
                        {t(STAGE_LABELS[index])}
                      </span>
                    </li>
                  );
                })}
              </ol>

              <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="grid min-h-[56px] text-pretty text-[13px] font-semibold leading-snug" aria-live="off">
                  <span
                    aria-hidden={isDone}
                    className={cn(
                      'col-start-1 row-start-1 text-[#92400e] transition-opacity duration-200 ease-out motion-reduce:transition-none',
                      isDone ? 'opacity-0' : 'opacity-100',
                    )}
                  >
                    {t('held')}
                  </span>
                  <span
                    aria-hidden={!isDone}
                    className={cn(
                      'col-start-1 row-start-1 text-[#065f46] transition-opacity duration-200 ease-out motion-reduce:transition-none',
                      isDone ? 'opacity-100' : 'opacity-0',
                    )}
                  >
                    {t('outcome')}
                  </span>
                </p>
                <button
                  type="button"
                  onClick={() => controllerRef.current?.replay()}
                  data-demo-replay
                  className="min-h-[44px] shrink-0 rounded-xl bg-neutral-900 px-5 text-[13px] font-bold text-white transition-transform active:scale-[0.96] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
                >
                  {t('replay')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
