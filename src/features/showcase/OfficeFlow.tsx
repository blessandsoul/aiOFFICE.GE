'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Ico } from '@/components/common/Ico';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { cn } from '@/lib/utils';
import {
  FLOW_STAGES,
  createTimelinePlayer,
  flowFrame,
} from './office-demo-models.mjs';
import { createOfficeDemoLoop } from './office-demo-visibility.mjs';

type DemoController = {
  replay: () => void;
  cleanup: () => void;
};

const FLOW_CYCLE_MS = 7000;
const STAGE_COPY = ['s1', 's2', 's3', 's4', 's5'] as const;
const STAGE_ICONS = {
  received: 'solar:chat-round-dots-bold-duotone',
  checked: 'solar:check-circle-bold-duotone',
  'document-prepared': 'solar:text-bold-duotone',
  'human-approval': 'solar:shield-check-bold-duotone',
  ready: 'solar:check-circle-bold-duotone',
} as const;
const OFFICE_FLOW_STAGES = FLOW_STAGES as (keyof typeof STAGE_ICONS)[];

export function OfficeFlow() {
  const t = useTranslations('product.flow');
  const reduced = Boolean(useReducedMotion());
  const [stage, setStage] = useState(OFFICE_FLOW_STAGES[0]);
  const visibilityRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<DemoController | null>(null);

  useEffect(() => {
    const player = createTimelinePlayer({
      stages: OFFICE_FLOW_STAGES,
      onStage: setStage,
      durationMs: FLOW_CYCLE_MS,
    });
    const controller = createOfficeDemoLoop({
      target: visibilityRef.current,
      reducedMotion: reduced,
      cycleMs: FLOW_CYCLE_MS,
      play: player.play,
      showFinal: () => setStage(OFFICE_FLOW_STAGES[OFFICE_FLOW_STAGES.length - 1]),
      reset: () => setStage(OFFICE_FLOW_STAGES[0]),
      stop: player.cancel,
    });

    controllerRef.current = controller;
    return () => {
      controller.cleanup();
      player.cancel();
      if (controllerRef.current === controller) controllerRef.current = null;
    };
  }, [reduced]);

  const activeIndex = OFFICE_FLOW_STAGES.indexOf(stage);
  const activeFrame = flowFrame(stage);

  return (
    <SectionContainer className="py-16 md:py-24 lg:py-28">
      <div
        ref={visibilityRef}
        data-landing-demo="office-flow"
        data-demo-id="office-flow"
        data-demo-detail={stage}
        aria-live="off"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="text-[12px] font-semibold tracking-wide text-[#667085]">
              {t('eyebrow')}
            </span>
            <h2 className="mt-4 text-balance font-display text-[30px] font-extrabold leading-[1.1] tracking-tight text-[#101828] md:text-[36px] md:leading-[1.12]">
              {t('heading')}
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-[15px] leading-relaxed text-[#4B5563]">
              {t('subtitle')}
            </p>
          </div>

          <button
            type="button"
            onClick={() => controllerRef.current?.replay()}
            data-demo-replay
            className="inline-flex min-h-12 max-w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 text-center text-[14px] font-bold text-white transition-transform active:scale-[0.96] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
          >
            <Ico name="solar:refresh-bold-duotone" className="h-5 w-5" />
            {activeFrame.approved ? t('again') : t('running')}
          </button>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-[#f7f7f8] shadow-[0_0_0_1px_rgba(0,0,0,0.07),0_28px_70px_-48px_rgba(0,0,0,0.38)]">
          <div className="flex min-w-0 items-start gap-3 bg-[#0e0e11] p-4 text-white sm:items-center sm:p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-cta)]">
              <Ico name="solar:chat-round-dots-bold-duotone" className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <span className="block text-[11px] font-medium text-white/50">09:10 · Email</span>
              <span className="mt-1 block text-pretty text-[14px] font-semibold leading-snug text-white/90">
                {t('s1sub')}
              </span>
            </div>
            <span className="hidden items-end gap-[3px] sm:flex" aria-hidden="true">
              {[8, 16, 11, 22, 13, 19, 9, 15].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="w-[3px] rounded-full bg-white/35"
                  style={{ height }}
                />
              ))}
            </span>
          </div>

          <div className="p-3 sm:p-5 lg:p-6">
            <ol className="grid grid-cols-1 gap-3 lg:grid-cols-5" aria-live="off">
              {OFFICE_FLOW_STAGES.map((item, index) => {
                const frame = flowFrame(item);
                const reached = index <= activeIndex;
                const current = item === stage;
                const isApproval = item === 'human-approval';
                const isReady = frame.approved && reached;

                return (
                  <motion.li
                    key={item}
                    aria-current={current ? 'step' : undefined}
                    initial={false}
                    animate={{ y: 0 }}
                    transition={{ duration: reduced ? 0 : 0.24, ease: [0.23, 1, 0.32, 1] }}
                    className={cn(
                      'relative min-w-0 rounded-2xl bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.07)]',
                      !reached && 'bg-[#fafafa] shadow-[0_0_0_1px_rgba(0,0,0,0.05)]',
                      isApproval && reached && 'bg-[#fffaf0] shadow-[0_0_0_1px_rgba(217,119,6,0.55)]',
                      isReady && 'bg-[#f0fdf8] shadow-[0_0_0_1px_rgba(13,148,136,0.5)]',
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900/6 text-[#667085]',
                        reached && !isApproval && !isReady && 'bg-[var(--brand-cta)] text-white',
                        isApproval && reached && 'bg-[#d97706] text-white',
                        isReady && 'bg-[#0d9488] text-white',
                      )}
                    >
                      <Ico name={STAGE_ICONS[item]} className="h-6 w-6" />
                    </span>
                    <span className="mt-4 block text-[14px] font-bold leading-snug text-neutral-900">
                      {t(STAGE_COPY[index])}
                    </span>
                    <span className="mt-1.5 block text-pretty text-[12.5px] leading-relaxed text-[#626262]">
                      {t(`${STAGE_COPY[index]}sub`)}
                    </span>
                    {isApproval && (
                      <span className="mt-3 inline-flex rounded-full bg-[#d97706]/12 px-2.5 py-1 text-[10px] font-bold text-[#92400e]">
                        {t('human')}
                      </span>
                    )}
                  </motion.li>
                );
              })}
            </ol>

            <div
              data-office-comparison
              className="mt-4 grid gap-3 rounded-2xl bg-[#0e0e11] p-3 text-white sm:grid-cols-2 sm:p-4"
            >
              <div className="flex min-w-0 items-start gap-3 rounded-xl bg-white/[0.06] p-3">
                <Ico name="solar:clock-circle-bold-duotone" className="mt-0.5 h-5 w-5 shrink-0 text-white/55" />
                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold text-white/50">{t('manual')}</span>
                  <span className="mt-1 block text-pretty text-[13px] font-semibold leading-snug text-white/85">
                    {t('handTime')}
                  </span>
                </div>
              </div>
              <div className="flex min-w-0 items-start gap-3 rounded-xl bg-white p-3 text-neutral-900">
                <Ico name="solar:bolt-bold-duotone" className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]" />
                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold text-[#667085]">{t('auto')}</span>
                  <span className="mt-1 block text-pretty text-[13px] font-semibold leading-snug">
                    {t('autoTime')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p data-demo-outcome className="mt-4 max-w-3xl text-pretty text-[12.5px] leading-relaxed text-[#4B5563]">
          {t('note')}
        </p>
      </div>
    </SectionContainer>
  );
}
