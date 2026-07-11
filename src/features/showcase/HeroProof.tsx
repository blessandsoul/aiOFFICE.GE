'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

/* =========================================================================
   HeroProof, aiOFFICE: a Viber message at 23:40 that has already become an invoice.

   An owner does not buy "back-office automation". He has heard that phrase from four
   consultants and it means nothing. What he knows is the message that arrives at twenty to
   midnight with a voice note and a photograph of a handwritten list, and what it costs him
   that nobody touches it until Monday.

   So the frame is the message, and then the invoice, and nothing in between. The human approval
   step is visible and it visibly stops the machine, because that is not a caveat we buried, it
   is the reason this is safe to put anywhere near a tax filing.
   ========================================================================= */

const CYCLE = 5600;

export function HeroProof() {
  const t = useTranslations('product.proof');
  const reduced = useReducedMotion();
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    if (reduced) {
      setBeat(3);
      return;
    }
    const id = setInterval(() => setBeat((b) => (b + 1) % 4), CYCLE / 4);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div className="rounded-3xl bg-white/70 p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.07),0_28px_60px_-40px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-6">
      {/* the message that starts everything */}
      <div className="rounded-2xl bg-[#0e0e11] p-4">
        <div className="flex items-start gap-3">
          <span
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white"
            style={{ background: 'var(--brand)' }}
            aria-hidden="true"
          >
            გ
          </span>
          <div className="min-w-0 flex-1">
            <span className="block text-[10.5px] text-white/35">23:40 &middot; Viber</span>
            <div className="mt-1 inline-flex items-center gap-2 rounded-2xl rounded-tl-sm bg-white/[0.08] px-3 py-1.5">
              <span className="flex gap-[2px]" aria-hidden="true">
                {[3, 7, 5, 9, 4, 8, 3, 6].map((h, i) => (
                  <span key={i} className="w-[2px] rounded-full bg-white/40" style={{ height: h * 2 }} />
                ))}
              </span>
              <span className="font-mono text-[11.5px] text-white/70">0:14</span>
            </div>
            <div className="mt-1.5 h-11 w-20 rounded-md bg-white/[0.06] p-1">
              <span className="block h-full w-full rounded bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.10)_0_3px,transparent_3px_7px)]" />
            </div>
          </div>
        </div>
      </div>

      {/* the machine doing it */}
      <div className="mt-3.5 flex flex-col gap-1.5">
        {[
          { k: 's1', at: 1, human: false },
          { k: 's2', at: 2, human: false },
          { k: 's3', at: 3, human: true },
        ].map((s) => {
          const on = beat >= s.at;
          return (
            <motion.div
              key={s.k}
              initial={false}
              animate={{ opacity: on ? 1 : 0.32 }}
              transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3.5 py-2.5',
                on
                  ? s.human
                    ? 'bg-[#fffbeb] shadow-[0_0_0_1px_#f59e0b]'
                    : 'bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.07)]'
                  : 'bg-white/60',
              )}
            >
              <motion.span
                initial={false}
                animate={on ? { scale: 1, opacity: 1 } : { scale: 0.86, opacity: 0.45 }}
                transition={{ type: 'spring', duration: 0.32, bounce: 0 }}
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold',
                  on ? 'text-white' : 'bg-neutral-900/8 text-neutral-900/30',
                )}
                style={on ? { background: s.human ? '#f59e0b' : 'var(--brand)' } : undefined}
                aria-hidden="true"
              >
                {s.human ? '!' : 'ok'}
              </motion.span>
              <span className="min-w-0 flex-1 text-pretty text-[12.5px] font-semibold leading-snug text-neutral-900">
                {t(s.k)}
              </span>
              {s.human && on && (
                <span className="shrink-0 whitespace-nowrap rounded-full bg-[#f59e0b]/15 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wide text-[#92400e]">
                  {t('human')}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      <p className="mt-3.5 text-[11.5px] leading-snug text-neutral-900/45">{t('note')}</p>
    </div>
  );
}
