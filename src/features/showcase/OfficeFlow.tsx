'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { cn } from '@/lib/utils';

/* =========================================================================
   OfficeFlow: the signature.

   An owner does not buy "back-office automation". He does not know what that is and he has
   heard it from four consultants already. What he knows is the Viber message that arrives at
   twenty to midnight on a Friday with a voice note and a photograph of a handwritten list,
   and what it costs him that nobody handles it until Monday.

   So the widget is that message, and then the six things that happen to it. No jargon, no
   architecture diagram. If a stranger presses play and cannot tell what happened, the section
   has failed and we would rather know.

   The human approval step is deliberately IN the flow and visibly stops it. That is not a
   caveat we buried, it is the reason this is safe to put anywhere near a tax filing, and it
   is the difference between us and the demo he saw on LinkedIn.
   ========================================================================= */

const STEPS = ['s1', 's2', 's3', 's4', 's5', 's6'] as const;
const HUMAN_AT = 4; // index of the approval step, zero-based
const STEP_MS = 1150;

export function OfficeFlow() {
  const t = useTranslations('product.flow');
  const reduced = useReducedMotion();
  const [at, setAt] = useState(-1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);
  useEffect(() => clear, [clear]);

  const run = useCallback(() => {
    clear();
    setAt(0);
    if (reduced) {
      setAt(STEPS.length - 1);
      return;
    }
    STEPS.forEach((_, i) => {
      if (i === 0) return;
      timers.current.push(setTimeout(() => setAt(i), i * STEP_MS));
    });
  }, [clear, reduced]);

  const running = at >= 0 && at < STEPS.length - 1;
  const done = at === STEPS.length - 1;

  return (
    <SectionContainer className="py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-14">
        <div>
          <span className="text-[12px] uppercase tracking-wide text-neutral-900/40">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 md:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-[#525252]">
            {t('subtitle')}
          </p>

          <button
            type="button"
            onClick={run}
            disabled={running}
            className={cn(
              'mt-8 inline-flex h-14 items-center rounded-full px-8 text-[15px] font-bold text-white',
              'transition-[transform,filter] duration-150 ease-out active:scale-[0.96] md:hover:brightness-110',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2',
              running && 'opacity-70',
            )}
            style={{ background: 'var(--brand)' }}
          >
            {running ? t('running') : done ? t('again') : t('play')}
          </button>

          {/* the two clocks. the left one is what today costs him. */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#fafafa] p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
              <span className="text-[11px] uppercase tracking-wide text-neutral-900/40">
                {t('manual')}
              </span>
              <p className="mt-2 text-pretty text-[13px] font-semibold leading-snug text-neutral-900">
                {t('handTime')}
              </p>
            </div>
            <div
              className="rounded-2xl p-4"
              style={{ background: 'color-mix(in srgb, var(--brand) 12%, white)' }}
            >
              <span className="text-[11px] uppercase tracking-wide text-neutral-900/50">
                {t('auto')}
              </span>
              <p className="mt-2 text-pretty text-[13px] font-semibold leading-snug text-neutral-900">
                {t('autoTime')}
              </p>
            </div>
          </div>

          <p className="mt-6 text-pretty text-[12px] leading-relaxed text-[#737373]">{t('note')}</p>
        </div>

        {/* THE FLOW */}
        <div className="relative">
          {/* the phone, holding the message that starts everything */}
          <div className="mb-4 max-w-sm rounded-2xl bg-[#0e0e11] p-4">
            <div className="flex items-start gap-3">
              <span
                className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white"
                style={{ background: 'var(--brand)' }}
                aria-hidden="true"
              >
                გ
              </span>
              <div className="min-w-0">
                <span className="block text-[11px] text-white/35">23:40</span>
                <div className="mt-1 rounded-2xl rounded-tl-sm bg-white/[0.08] px-3 py-2">
                  <span className="flex items-center gap-2 text-[13px] text-white/80">
                    <span className="flex gap-[2px]" aria-hidden="true">
                      {[3, 7, 5, 9, 4, 8, 3].map((h, i) => (
                        <span
                          key={i}
                          className="w-[2px] rounded-full bg-white/40"
                          style={{ height: h * 2 }}
                        />
                      ))}
                    </span>
                    0:14
                  </span>
                </div>
                <div className="mt-1.5 h-14 w-24 rounded-lg bg-white/[0.06] p-1.5">
                  <span className="block h-full w-full rounded bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.10)_0_3px,transparent_3px_7px)]" />
                </div>
              </div>
            </div>
          </div>

          <ol className="relative flex flex-col gap-2.5">
            {/* the spine */}
            <span
              className="absolute bottom-3 left-[15px] top-3 w-px bg-[#e5e5e5]"
              aria-hidden="true"
            />
            <motion.span
              className="absolute left-[15px] top-3 w-px origin-top"
              style={{ background: 'var(--brand)', bottom: 12 }}
              initial={false}
              animate={{ scaleY: at < 0 ? 0 : (at + 1) / STEPS.length }}
              transition={{ duration: reduced ? 0 : 0.5, ease: [0.23, 1, 0.32, 1] }}
              aria-hidden="true"
            />

            {STEPS.map((s, i) => {
              const lit = at >= i;
              const isHuman = i === HUMAN_AT;
              return (
                <li key={s} className="relative flex gap-4 pl-0">
                  <span className="relative z-10 mt-2.5 flex h-8 w-8 shrink-0 items-center justify-center">
                    <motion.span
                      initial={false}
                      animate={{ scale: lit ? 1 : 0.95, opacity: lit ? 1 : 0.35 }}
                      transition={{ duration: reduced ? 0 : 0.24, ease: [0.23, 1, 0.32, 1] }}
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-bold tabular-nums',
                        lit ? 'text-white' : 'bg-white text-neutral-900/30 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]',
                      )}
                      style={lit ? { background: isHuman ? '#f59e0b' : 'var(--brand)' } : undefined}
                    >
                      {isHuman ? (
                        <span aria-hidden="true">!</span>
                      ) : (
                        i + 1
                      )}
                    </motion.span>
                  </span>

                  <motion.div
                    initial={false}
                    animate={{ opacity: lit ? 1 : 0.4, y: 0 }}
                    transition={{ duration: reduced ? 0 : 0.26, ease: [0.23, 1, 0.32, 1] }}
                    className={cn(
                      'min-w-0 flex-1 rounded-2xl px-4 py-3',
                      lit
                        ? isHuman
                          ? 'bg-[#fffbeb] shadow-[0_0_0_1px_#f59e0b]'
                          : 'bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]'
                        : 'bg-[#fafafa]',
                    )}
                  >
                    <span className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-[14px] font-semibold text-neutral-900">{t(s)}</span>
                      {isHuman && (
                        <span className="rounded-full bg-[#f59e0b]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#92400e]">
                          {t('human')}
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block text-pretty text-[13px] leading-relaxed text-[#525252]">
                      {t(`${s}sub`)}
                    </span>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </SectionContainer>
  );
}
