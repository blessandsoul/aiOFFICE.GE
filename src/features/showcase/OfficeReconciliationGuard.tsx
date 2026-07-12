'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { cn } from '@/lib/utils';
import {
  RECONCILIATION_STAGES,
  createTimelinePlayer,
  reconciliationFrame,
} from './office-demo-models.mjs';
import { createVisibilityGate } from './office-demo-visibility.mjs';

type TimelinePlayer = {
  replay: () => void;
  cancel: () => void;
};

const RECORDS = ['order', 'inventory', 'waybill', 'accounting'] as const;

export function OfficeReconciliationGuard() {
  const t = useTranslations('product.reconciliationGuard');
  const reduced = Boolean(useReducedMotion());
  const [stage, setStage] = useState(RECONCILIATION_STAGES[0]);
  const playerRef = useRef<TimelinePlayer | null>(null);
  const visibilityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const player = createTimelinePlayer({
      stages: RECONCILIATION_STAGES,
      onStage: setStage,
      reducedMotion: reduced,
    });

    playerRef.current = player;
    const cleanupVisibility = createVisibilityGate({
      target: visibilityRef.current,
      play: player.play,
      reducedMotion: reduced,
    });

    return () => {
      cleanupVisibility();
      player.cancel();
      if (playerRef.current === player) playerRef.current = null;
    };
  }, [reduced]);

  const frame = reconciliationFrame(stage);
  const isBlocked = stage === 'blocked';
  const isCorrecting = stage === 'correcting';
  const isReady = frame.outcome === 'ready-to-ship';
  const statusLabel =
    stage === 'checking'
      ? t('checking')
      : isBlocked
        ? t('blocked')
        : isCorrecting
          ? t('correcting')
          : t('readyToShip');

  return (
    <SectionContainer className="py-20 md:py-28">
      <div
        ref={visibilityRef}
        className="grid gap-10 lg:grid-cols-[1fr_minmax(300px,420px)] lg:gap-14"
      >
        <div className="order-2 lg:order-1">
          <div className="rounded-[28px] bg-[#fafafa] p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] sm:p-5">
            <div className="grid gap-2.5 sm:grid-cols-2">
              {RECORDS.map((record) => {
                const mismatch = frame.mismatch === record && isBlocked;
                const correcting = record === 'accounting' && isCorrecting;
                const matched = isReady || (record !== 'accounting' && stage !== 'checking');

                return (
                  <motion.div
                    key={record}
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduced ? 0 : 0.24 }}
                    className={cn(
                      'rounded-2xl bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.07)]',
                      mismatch && 'bg-[#fff7f7] shadow-[0_0_0_1px_#dc2626]',
                      correcting && 'bg-[#fffbeb] shadow-[0_0_0_1px_#f59e0b]',
                      isReady && 'bg-[#f0fdf8] shadow-[0_0_0_1px_rgba(13,148,136,0.5)]',
                    )}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-[11px] uppercase tracking-wide text-neutral-900/45">
                        {t(record)}
                      </span>
                      {mismatch && (
                        <span className="rounded-full bg-[#dc2626]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#991b1b]">
                          {t('mismatch')}
                        </span>
                      )}
                      {(matched || correcting) && (
                        <span
                          className={cn(
                            'rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide',
                            correcting
                              ? 'bg-[#f59e0b]/15 text-[#92400e]'
                              : 'bg-[#10b981]/12 text-[#065f46]',
                          )}
                        >
                          {correcting ? t('correcting') : t('match')}
                        </span>
                      )}
                    </span>
                    <p className="mt-3 font-display text-3xl font-extrabold tabular-nums text-neutral-900">
                      {correcting && <span className="mr-2 text-lg text-[#991b1b] line-through">10</span>}
                      {frame.records[record]}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div
              className={cn(
                'mt-3 flex flex-col gap-3 rounded-2xl px-4 py-4 sm:flex-row sm:items-center sm:justify-between',
                isReady ? 'bg-[var(--brand)] text-white' : 'bg-[#0e0e11] text-white',
              )}
            >
              <div aria-live="polite">
                <span className="block text-[11px] uppercase tracking-wide text-white/45">
                  {isReady ? t('outcome') : statusLabel}
                </span>
                <span className="mt-1 block text-[15px] font-bold">
                  {isReady ? t('readyToShip') : statusLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={() => playerRef.current?.replay()}
                className="min-h-[44px] shrink-0 rounded-full bg-white px-5 text-[13px] font-bold text-neutral-900 transition-transform active:scale-[0.96] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
              >
                {t('replay')}
              </button>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-[12px] uppercase tracking-wide text-neutral-900/40">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 md:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-[#525252]">
            {t('subtitle')}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
