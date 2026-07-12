'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Ico } from '@/components/common/Ico';
import { cn } from '@/lib/utils';
import { createTimelinePlayer } from './office-demo-models.mjs';
import { createOfficeDemoLoop } from './office-demo-visibility.mjs';

type DemoController = {
  replay: () => void;
  cleanup: () => void;
};

const HERO_CYCLE_MS = 6000;
const HERO_STAGES = [0, 1, 2, 3, 4];
const PROOF_STEPS = [
  { key: 's1', at: 1, icon: 'solar:check-circle-bold-duotone', human: false, ready: false },
  { key: 's2', at: 2, icon: 'solar:text-bold-duotone', human: false, ready: false },
  { key: 's3', at: 3, icon: 'solar:shield-check-bold-duotone', human: true, ready: false },
  { key: 'ready', at: 4, icon: 'solar:check-circle-bold-duotone', human: false, ready: true },
] as const;

export function HeroProof() {
  const t = useTranslations('product.proof');
  const flow = useTranslations('product.flow');
  const reduced = Boolean(useReducedMotion());
  const [beat, setBeat] = useState(HERO_STAGES[0]);
  const visibilityRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<DemoController | null>(null);

  useEffect(() => {
    const player = createTimelinePlayer({
      stages: HERO_STAGES,
      onStage: setBeat,
      durationMs: HERO_CYCLE_MS,
    });
    const controller = createOfficeDemoLoop({
      target: visibilityRef.current,
      reducedMotion: reduced,
      cycleMs: HERO_CYCLE_MS,
      play: player.play,
      showFinal: () => setBeat(HERO_STAGES[HERO_STAGES.length - 1]),
      reset: () => setBeat(HERO_STAGES[0]),
      stop: player.cancel,
    });

    controllerRef.current = controller;
    return () => {
      controller.cleanup();
      player.cancel();
      if (controllerRef.current === controller) controllerRef.current = null;
    };
  }, [reduced]);

  return (
    <div
      ref={visibilityRef}
      className="rounded-3xl bg-white/70 p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.07),0_28px_60px_-40px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-6"
    >
      <div className="rounded-2xl bg-[#0e0e11] p-4">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand)] text-white">
            <Ico name="solar:chat-round-dots-bold-duotone" className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <span className="block text-[10.5px] font-medium text-white/40">23:40 · Viber</span>
            <div className="mt-1 inline-flex items-center gap-2 rounded-xl bg-white/[0.08] px-3 py-2">
              <span className="flex items-end gap-[2px]" aria-hidden="true">
                {[6, 14, 9, 18, 8, 16, 7, 12].map((height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className="w-[2px] rounded-full bg-white/40"
                    style={{ height }}
                  />
                ))}
              </span>
              <span className="font-mono text-[11.5px] text-white/70">0:14</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3.5 flex flex-col gap-2" aria-live="polite">
        {PROOF_STEPS.map((step) => {
          const on = beat >= step.at;
          const label = step.key === 'ready' ? flow('s5') : t(step.key);

          return (
            <motion.div
              key={step.key}
              initial={false}
              animate={{ opacity: on ? 1 : 0.32 }}
              transition={{ duration: reduced ? 0 : 0.24, ease: [0.23, 1, 0.32, 1] }}
              className={cn(
                'flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 shadow-[0_0_0_1px_rgba(0,0,0,0.07)]',
                on && step.human && 'bg-[#fffaf0] shadow-[0_0_0_1px_rgba(217,119,6,0.55)]',
                on && step.ready && 'bg-[#f0fdf8] shadow-[0_0_0_1px_rgba(13,148,136,0.5)]',
              )}
            >
              <span
                className={cn(
                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-900/8 text-neutral-900/30',
                  on && !step.human && !step.ready && 'bg-[var(--brand)] text-white',
                  on && step.human && 'bg-[#d97706] text-white',
                  on && step.ready && 'bg-[#0d9488] text-white',
                )}
              >
                <Ico name={step.icon} className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1 text-pretty text-[12.5px] font-semibold leading-snug text-neutral-900">
                {label}
              </span>
              {step.human && on && (
                <span className="shrink-0 rounded-full bg-[#d97706]/12 px-2 py-1 text-[9.5px] font-bold text-[#92400e]">
                  {t('human')}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-3.5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11.5px] leading-snug text-neutral-900/50">{t('note')}</p>
        <button
          type="button"
          onClick={() => controllerRef.current?.replay()}
          className="min-h-[44px] shrink-0 rounded-xl bg-neutral-900 px-4 text-[12px] font-bold text-white transition-transform active:scale-[0.97] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
        >
          {flow('again')}
        </button>
      </div>
    </div>
  );
}
