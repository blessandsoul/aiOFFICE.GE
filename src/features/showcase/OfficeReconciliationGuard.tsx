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
import { createOfficeDemoLoop } from './office-demo-visibility.mjs';

type DemoController = {
  replay: () => void;
  cleanup: () => void;
};

const RECORDS = ['order', 'inventory', 'waybill', 'accounting'] as const;

export function OfficeReconciliationGuard() {
  const t = useTranslations('product.reconciliationGuard');
  const reduced = Boolean(useReducedMotion());
  const [stage, setStage] = useState(RECONCILIATION_STAGES[0]);
  const controllerRef = useRef<DemoController | null>(null);
  const visibilityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const player = createTimelinePlayer({
      stages: RECONCILIATION_STAGES,
      onStage: setStage,
    });

    const controller = createOfficeDemoLoop({
      target: visibilityRef.current,
      play: player.play,
      showFinal: () => setStage(RECONCILIATION_STAGES[RECONCILIATION_STAGES.length - 1]),
      reset: () => setStage(RECONCILIATION_STAGES[0]),
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
    <SectionContainer className="py-16 md:py-24 lg:py-28">
      <div
        ref={visibilityRef}
        data-landing-demo="office-reconciliation-guard"
        data-demo-id="office-reconciliation-guard"
        data-demo-detail={stage}
        aria-live="off"
        className="grid gap-10 lg:grid-cols-[1fr_minmax(300px,420px)] lg:gap-14"
      >
        <div className="order-2 lg:order-1">
          <div className="rounded-3xl bg-[#fafafa] p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.06)] sm:p-5">
            <div className="grid gap-2.5 sm:grid-cols-2">
              {RECORDS.map((record) => {
                const mismatch = frame.mismatch === record && isBlocked;
                const correcting = record === 'accounting' && isCorrecting;
                const matched = isReady || (record !== 'accounting' && stage !== 'checking');
                const recordStatus = mismatch
                  ? 'mismatch'
                  : correcting
                    ? 'correcting'
                    : matched
                      ? 'match'
                      : null;

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
                    <span className="flex min-h-[40px] items-start justify-between gap-3">
                      <span className="text-[11px] font-semibold tracking-wide text-[#667085]">
                        {t(record)}
                      </span>
                      <span
                        aria-hidden={!recordStatus}
                        className={cn(
                          'w-[104px] shrink-0 rounded-full px-2 py-0.5 text-center text-[10px] font-bold leading-tight tracking-wide',
                          !recordStatus && 'invisible',
                          mismatch && 'bg-[#dc2626]/10 text-[#991b1b]',
                          correcting && 'bg-[#f59e0b]/15 text-[#92400e]',
                          matched && !correcting && 'bg-[#10b981]/12 text-[#065f46]',
                        )}
                      >
                        {recordStatus ? t(recordStatus) : t('match')}
                      </span>
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
                isReady ? 'bg-[var(--brand-cta)] text-white' : 'bg-[#0e0e11] text-white',
              )}
            >
              <div aria-live="off" className="min-h-[80px] min-w-0">
                <span className={cn(
                  'block text-[11px] font-semibold tracking-wide',
                  isReady ? 'text-white' : 'text-[#D1D5DB]',
                )}>
                  {isReady ? t('outcome') : statusLabel}
                </span>
                <span className="mt-1 block text-[15px] font-bold">
                  {isReady ? t('readyToShip') : statusLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={() => controllerRef.current?.replay()}
                data-demo-replay
                className="min-h-[44px] shrink-0 rounded-xl bg-white px-5 text-[13px] font-bold text-neutral-900 transition-transform active:scale-[0.96] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
              >
                {t('replay')}
              </button>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
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
      </div>
    </SectionContainer>
  );
}
