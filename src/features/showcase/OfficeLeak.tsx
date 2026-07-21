'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useReducedMotion } from 'framer-motion';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { createTimelinePlayer } from './office-demo-models.mjs';
import { createOfficeDemoLoop } from './office-demo-visibility.mjs';

type DemoController = {
  replay: () => void;
  takeControl: () => void;
  cleanup: () => void;
};

const LEAK_CYCLE_MS = 7000;
const LEAK_DEMO_STAGES = [0, 1, 2, 3];
const LEAK_DEMO_FRAMES = [
  { orders: 20, channelShare: 20, retype: 25, errors: 1, ticket: 80, fines: 0 },
  { orders: 35, channelShare: 35, retype: 45, errors: 2, ticket: 120, fines: 600 },
  { orders: 50, channelShare: 45, retype: 60, errors: 3, ticket: 150, fines: 1200 },
  { orders: 60, channelShare: 55, retype: 70, errors: 4, ticket: 180, fines: 1800 },
];

export function OfficeLeak() {
  const t = useTranslations('product.leak');
  const actions = useTranslations('product.flow');
  const reduced = Boolean(useReducedMotion());

  const [orders, setOrders] = useState(LEAK_DEMO_FRAMES[0].orders);
  const [channelShare, setChannelShare] = useState(LEAK_DEMO_FRAMES[0].channelShare);
  const [retype, setRetype] = useState(LEAK_DEMO_FRAMES[0].retype);
  const [errors, setErrors] = useState(LEAK_DEMO_FRAMES[0].errors);
  const [ticket, setTicket] = useState(LEAK_DEMO_FRAMES[0].ticket);
  const [fines, setFines] = useState(LEAK_DEMO_FRAMES[0].fines);
  const [manual, setManual] = useState(false);
  const manualRef = useRef(false);
  const visibilityRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<DemoController | null>(null);

  useEffect(() => {
    const applyFrame = (index: number) => {
      if (manualRef.current) return;
      const frame = LEAK_DEMO_FRAMES[index];
      setOrders(frame.orders);
      setChannelShare(frame.channelShare);
      setRetype(frame.retype);
      setErrors(frame.errors);
      setTicket(frame.ticket);
      setFines(frame.fines);
    };
    const player = createTimelinePlayer({
      stages: LEAK_DEMO_STAGES,
      onStage: applyFrame,
      durationMs: LEAK_CYCLE_MS,
    });
    const controller = createOfficeDemoLoop({
      target: visibilityRef.current,
      reducedMotion: reduced,
      cycleMs: LEAK_CYCLE_MS,
      play: player.play,
      showFinal: () => applyFrame(LEAK_DEMO_STAGES[LEAK_DEMO_STAGES.length - 1]),
      reset: () => applyFrame(LEAK_DEMO_STAGES[0]),
      stop: player.cancel,
    });

    controllerRef.current = controller;
    return () => {
      controller.cleanup();
      player.cancel();
      if (controllerRef.current === controller) controllerRef.current = null;
    };
  }, [reduced]);

  const takeControl = (setter: (value: number) => void) => (value: number) => {
    if (!manualRef.current) {
      manualRef.current = true;
      setManual(true);
      controllerRef.current?.takeControl();
    }
    setter(value);
  };

  const replayDemo = () => {
    manualRef.current = false;
    setManual(false);
    controllerRef.current?.replay();
  };

  const perMonth = orders * 30;
  const messy = perMonth * (channelShare / 100);
  const retyped = messy * (retype / 100);
  const wrong = retyped * (errors / 100);
  const lostGel = wrong * ticket;
  const finesGel = fines / 12;
  const total = lostGel + finesGel;

  const fmt = (n: number) =>
    new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(Math.round(n));

  return (
    <SectionContainer className="py-16 md:py-24 lg:py-28">
      <div
        ref={visibilityRef}
        data-landing-demo="office-leak-calculator"
        data-demo-id="office-leak-calculator"
        data-demo-detail={`${orders}-${channelShare}-${retype}-${errors}-${ticket}-${fines}`}
        aria-live="off"
        className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,420px)] lg:gap-14"
      >
        <div className="min-w-0">
          <span className="text-[12px] font-semibold tracking-wide text-[#667085]">
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 max-w-lg text-balance font-display text-[30px] font-extrabold leading-[1.1] tracking-tight text-[#101828] md:text-[36px] md:leading-[1.12]">
            {t('heading')}
          </h2>
          <p className="mt-3 max-w-xl text-pretty text-[15px] leading-relaxed text-[#4B5563]">
            {t('subtitle')}
          </p>

          <button
            type="button"
            onClick={replayDemo}
            data-manual={manual ? 'true' : 'false'}
            data-demo-replay
            className="mt-5 min-h-[44px] max-w-full rounded-xl bg-neutral-900 px-5 text-center text-[13px] font-bold text-white transition-transform active:scale-[0.96] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
          >
            {actions('again')}
          </button>

          <div className="mt-8 grid min-w-0 gap-6 sm:grid-cols-2">
            <Range label={t('orders')} value={orders} min={5} max={500} step={5} onChange={takeControl(setOrders)} />
            <Range label={t('ticket')} value={ticket} min={20} max={2000} step={10} onChange={takeControl(setTicket)} suffix=" GEL" />
            <Range label={t('channelShare')} value={channelShare} min={0} max={100} step={5} onChange={takeControl(setChannelShare)} suffix="%" />
            <Range label={t('retype')} value={retype} min={0} max={100} step={5} onChange={takeControl(setRetype)} suffix="%" />
            <Range label={t('errors')} value={errors} min={0} max={20} step={1} onChange={takeControl(setErrors)} suffix="%" />
            <Range label={t('fines')} value={fines} min={0} max={20000} step={100} onChange={takeControl(setFines)} suffix=" GEL" />
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <div className="rounded-2xl bg-[#fafafa] p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
            <span className="text-[12px] font-semibold tracking-wide text-[#4B5563]">
              {t('lost')}
            </span>
            <p className="mt-2 flex min-w-0 flex-wrap items-baseline gap-1.5 font-display text-3xl font-extrabold tabular-nums leading-none text-neutral-900">
              <span className="inline-block min-w-[7ch] text-right">{fmt(lostGel)}</span>
              <span className="ml-1.5 text-base font-bold text-[#737373]">{t('perMonth')}</span>
            </p>
          </div>

          <div className="rounded-2xl bg-[#fafafa] p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
            <span className="text-[12px] font-semibold tracking-wide text-[#667085]">
              {t('finesOut')}
            </span>
            <p className="mt-2 flex min-w-0 flex-wrap items-baseline gap-1.5 font-display text-3xl font-extrabold tabular-nums leading-none text-neutral-900">
              <span className="inline-block min-w-[7ch] text-right">{fmt(finesGel)}</span>
              <span className="ml-1.5 text-base font-bold text-[#737373]">{t('perMonth')}</span>
            </p>
          </div>

          <div
            className="rounded-2xl p-6 md:p-7"
            style={{ background: 'color-mix(in srgb, var(--brand) 14%, white)' }}
          >
            <span className="text-[12px] font-semibold tracking-wide text-[#4B5563]">
              {t('total')}
            </span>
            <p className="mt-3 flex min-w-0 flex-wrap items-baseline gap-2 font-display text-5xl font-extrabold tabular-nums leading-none text-neutral-900 md:text-6xl">
              <span className="inline-block min-w-[7ch] text-right">{fmt(total)}</span>
              <span className="ml-2 text-2xl font-bold text-[#4B5563]">{t('perMonth')}</span>
            </p>
          </div>

          <p
            data-demo-outcome
            className="min-h-[42px] text-pretty text-[13px] font-semibold leading-relaxed text-neutral-900"
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
    <label className="block min-w-0">
      <span className="flex min-h-[40px] min-w-0 items-start justify-between gap-3">
        <span className="min-w-0 break-words text-[13px] leading-snug text-neutral-900/70">{label}</span>
        <span className="min-w-[112px] shrink-0 whitespace-nowrap text-right font-display text-[15px] font-extrabold tabular-nums text-[var(--brand-cta)]">
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
        className="mt-2.5 h-11 w-full cursor-pointer appearance-none rounded-lg bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 [&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[#e5e5e5] [&::-webkit-slider-thumb]:mt-[-7px] [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--brand-cta)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-150 [&::-webkit-slider-thumb]:ease-out active:[&::-webkit-slider-thumb]:scale-[0.96] [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[var(--brand-cta)] [&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-[#e5e5e5]"
      />
    </label>
  );
}
