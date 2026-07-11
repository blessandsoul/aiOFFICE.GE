'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { SectionContainer } from '@/components/layout/SectionContainer';

/* =========================================================================
   OfficeLeak: the Georgia-correct calculator.

   Every automation vendor on the internet puts an "hours saved" slider on the page. All of
   them were built on an American wage. A Georgian working hour costs about 14 GEL and an
   American one about 38 dollars, so saving the US-average handful of hours a week is worth
   roughly a hundred and something lari a month here, for the entire automation. Nobody buys
   that, and they are right not to.

   So this counts the money that leaks OUT instead: the order that vanished in a chat thread,
   the delivery that went out wrong, the waybill fine. Those are worth real money in Georgia
   and they are what a distributor already lies awake about.

   Every input is his. We supply no percentage and no benchmark. If his number comes out small,
   the widget says so plainly, and he has saved himself a meeting. A calculator that can only
   produce a large number is a slot machine.
   ========================================================================= */

export function OfficeLeak() {
  const t = useTranslations('product.leak');

  const [orders, setOrders] = useState(60);
  const [viber, setViber] = useState(55); // percent
  const [retype, setRetype] = useState(70); // percent of those
  const [errors, setErrors] = useState(4); // percent that go wrong
  const [ticket, setTicket] = useState(180);
  const [fines, setFines] = useState(1800); // GEL last year

  const perMonth = orders * 30;
  const messy = perMonth * (viber / 100);
  const retyped = messy * (retype / 100);
  const wrong = retyped * (errors / 100);
  const lostGel = wrong * ticket;
  const finesGel = fines / 12;
  const total = lostGel + finesGel;

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(Math.round(n));

  const small = total < 900;

  return (
    <SectionContainer className="py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_minmax(300px,420px)] lg:gap-14">
        {/* LEFT: his inputs */}
        <div>
          <span className="text-[12px] uppercase tracking-wide text-neutral-900/40">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 max-w-lg text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 md:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-3 max-w-xl text-pretty text-[15px] leading-relaxed text-[#525252]">
            {t('subtitle')}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Range label={t('orders')} value={orders} min={5} max={500} step={5} onChange={setOrders} />
            <Range label={t('ticket')} value={ticket} min={20} max={2000} step={10} onChange={setTicket} suffix=" GEL" />
            <Range label={t('viber')} value={viber} min={0} max={100} step={5} onChange={setViber} suffix="%" />
            <Range label={t('retype')} value={retype} min={0} max={100} step={5} onChange={setRetype} suffix="%" />
            <Range label={t('errors')} value={errors} min={0} max={20} step={1} onChange={setErrors} suffix="%" />
            <Range label={t('fines')} value={fines} min={0} max={20000} step={100} onChange={setFines} suffix=" GEL" />
          </div>
        </div>

        {/* RIGHT: his number */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl bg-[#fafafa] p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
            <span className="text-[12px] uppercase tracking-wide text-neutral-900/40">
              {t('lost')}
            </span>
            <p className="mt-2 font-display text-3xl font-extrabold tabular-nums leading-none text-neutral-900">
              {fmt(lostGel)}
              <span className="ml-1.5 text-base font-bold text-[#737373]">{t('perMonth')}</span>
            </p>
          </div>

          <div className="rounded-2xl bg-[#fafafa] p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
            <span className="text-[12px] uppercase tracking-wide text-neutral-900/40">
              {t('finesOut')}
            </span>
            <p className="mt-2 font-display text-3xl font-extrabold tabular-nums leading-none text-neutral-900">
              {fmt(finesGel)}
              <span className="ml-1.5 text-base font-bold text-[#737373]">{t('perMonth')}</span>
            </p>
          </div>

          <div
            className="rounded-2xl p-6 md:p-7"
            style={{ background: 'color-mix(in srgb, var(--brand) 14%, white)' }}
          >
            <span className="text-[12px] uppercase tracking-wide text-neutral-900/50">
              {t('total')}
            </span>
            <p className="mt-3 font-display text-5xl font-extrabold tabular-nums leading-none text-neutral-900 md:text-6xl">
              {fmt(total)}
              <span className="ml-2 text-2xl font-bold text-neutral-900/50">{t('perMonth')}</span>
            </p>
          </div>

          <p
            className={
              small
                ? 'text-pretty text-[13px] font-semibold leading-relaxed text-neutral-900'
                : 'text-pretty text-[12px] leading-relaxed text-[#737373]'
            }
          >
            {t('note')}
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

function Range({
  label,
  value,
  min,
  max,
  step,
  onChange,
  suffix = '',
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  suffix?: string;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-[13px] leading-snug text-neutral-900/70">{label}</span>
        <span className="whitespace-nowrap font-display text-[15px] font-extrabold tabular-nums text-[var(--brand)]">
          {value}
          {suffix}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2.5 h-10 w-full cursor-pointer appearance-none bg-transparent focus-visible:outline-none [&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[#e5e5e5] [&::-webkit-slider-thumb]:mt-[-7px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--brand)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:ease-out active:[&::-webkit-slider-thumb]:scale-[0.96] [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[var(--brand)] [&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-[#e5e5e5]"
      />
    </label>
  );
}
