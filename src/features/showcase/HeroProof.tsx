'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { createDemoLoop } from '@/features/home/components/lib/demo-loop.mjs';
import './office-hero-proof.css';

const CYCLE_MS = 6_400;

const AVATARS = {
  giorgi: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
  mariam: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
  luka: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80',
};

type ChatScenario = {
  id: number;
  caseTag: string;
  tabLabel: string;
  employeeName: string;
  employeeRole: string;
  employeeAvatar: string;
  question: string;
  steps: string[];
  docName: string;
  docCitation: string;
  docQuotePre: string;
  docHighlight: string;
  docQuotePost: string;
};

export function HeroProof(): React.ReactElement {
  const [activeScenario, setActiveScenario] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<ReturnType<typeof createDemoLoop> | null>(null);

  const scenarios: ChatScenario[] = [
    {
      id: 1,
      caseTag: 'კეისი 1',
      tabLabel: 'ონბორდინგი',
      employeeName: 'გიორგი',
      employeeRole: 'ახალი თანამშრომელი',
      employeeAvatar: AVATARS.giorgi,
      question: '„როგორ გავაფორმოთ ახალი კლიენტის ხელშეკრულება და სად იგზავნება ინვოისი?“',
      steps: [
        'შეავსეთ ფორმა №4 CRM-ში (კლიენტის რეკვიზიტები)',
        'ხელმოწერილი ინვოისი ავტომატურად გადადის ბუღალტერიაში',
      ],
      docName: 'sales_onboarding.pdf',
      docCitation: 'გვ. 5, სტრიქონი 6',
      docQuotePre: '„კლიენტის რეგისტრაციისთვის ',
      docHighlight: 'შეავსეთ ფორმა №4 CRM-ში',
      docQuotePost: ', ინვოისი ავტომატურად გადაეცემა ბუღალტერიას.“',
    },
    {
      id: 2,
      caseTag: 'კეისი 2',
      tabLabel: 'ფასდაკლება',
      employeeName: 'მარიამი',
      employeeRole: 'გაყიდვების მენეჯერი',
      employeeAvatar: AVATARS.mariam,
      question: '„რა მაქსიმალური ფასდაკლება შემიძლია მივცე 50+ ცალის შეკვეთაზე?“',
      steps: [
        '50-დან 100 ცალამდე ავტომატური ფასდაკლებაა 12%',
        '100+ ცალზე საჭიროა კომერციული დირექტორის თანხმობა',
      ],
      docName: 'commercial_policy.docx',
      docCitation: 'გვ. 3, სტრიქონი 12',
      docQuotePre: '„50-დან 100 ცალამდე შეკვეთაზე მოქმედებს ',
      docHighlight: 'ავტომატური 12%-იანი ფასდაკლება',
      docQuotePost: ', 100+-ზე დირექტორის დასტურით.“',
    },
    {
      id: 3,
      caseTag: 'კეისი 3',
      tabLabel: 'RS.ge დაბრუნება',
      employeeName: 'ლუკა',
      employeeRole: 'მხარდაჭერის ოპერატორი',
      employeeAvatar: AVATARS.luka,
      question: '„კლიენტს უნდა დაბრუნება, რა ნაბიჯები გვაქვს RS.ge-ზე?“',
      steps: [
        'შეამოწმეთ ზედნადების ნომერი CRM-ში 14 დღის ვადაში',
        'დააჭირეთ „კორექტირებას“ და დაელოდეთ საწყობის დადასტურებას',
      ],
      docName: 'returns_policy.xlsx',
      docCitation: 'გვ. 2, სტრიქონი 8',
      docQuotePre: '„დაბრუნების ვადაა ',
      docHighlight: '14 კალენდარული დღე',
      docQuotePost: ', ზედნადების კორექტირება RS.ge-ზე საწყობის დასტურით.“',
    },
  ];

  const current = scenarios.find((s) => s.id === activeScenario) || scenarios[0];

  const play = useCallback(() => {
    setActiveScenario((prev) => (prev >= 3 ? 1 : prev + 1));
  }, []);

  const showFinal = useCallback(() => {
    setActiveScenario(3);
  }, []);

  const reset = useCallback(() => {
    setActiveScenario(1);
  }, []);

  const stop = useCallback(() => {}, []);

  const selectScenario = useCallback((id: number) => {
    controllerRef.current?.takeControl();
    setIsPlaying(false);
    setActiveScenario(id);
  }, []);

  const replay = useCallback(() => {
    reset();
    setIsPlaying(true);
    controllerRef.current?.replay();
  }, [reset]);

  useEffect(() => {
    const target = rootRef.current;
    if (!target) return undefined;

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    const controller = createDemoLoop({
      target,
      reducedMotion,
      cycleMs: CYCLE_MS,
      holdMs: 2000,
      threshold: 0.35,
      play,
      showFinal,
      reset,
      stop,
    });

    controllerRef.current = controller;

    return () => {
      controller.cleanup();
      controllerRef.current = null;
      stop();
    };
  }, [play, reset, showFinal, stop]);

  return (
    <div
      ref={rootRef}
      id="aioffice-hero-story"
      data-hero-demo="true"
      data-landing-demo="true"
      data-demo-id="aioffice-hero-story"
      data-demo-state={isPlaying ? 'playing' : 'manual'}
      className="office-hero-stage"
      data-testid="office-hero-proof"
      role="region"
      aria-label="aiOFFICE Live Work Chat & Company AI Model Demo"
    >
      {/* ── Top Bar: Integrations & Live Model Sync ── */}
      <div className="office-chat-header">
        <div className="chat-header-title">
          <span className="chat-sync-pulse" />
          <span>თქვენი კომპანიის AI მოდელი</span>
        </div>
        <div className="chat-integrations-ticker">
          <span className="ticker-item">Telegram</span>
          <span className="ticker-dot">•</span>
          <span className="ticker-item">Slack</span>
          <span className="ticker-dot">•</span>
          <span className="ticker-item">CRM</span>
          <span className="ticker-dot">•</span>
          <span className="ticker-item">WhatsApp</span>
        </div>
      </div>

      {/* ── 3-Tab Scenario Switcher ── */}
      <div className="office-tabs-dock" role="tablist" aria-label="აირჩიეთ სამუშაო სიტუაცია">
        {scenarios.map((s) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={activeScenario === s.id}
            className={`office-tab-btn ${activeScenario === s.id ? 'active' : ''}`}
            onClick={() => selectScenario(s.id)}
          >
            <span className="tab-num-tag">{s.caseTag}</span>
            <span className="tab-label-text">{s.tabLabel}</span>
          </button>
        ))}
      </div>

      {/* ── Live Corporate Chat Stream ── */}
      <div className="office-chat-feed">
        
        {/* 1. Message by Employee / New Hire with Photo Avatar */}
        <div className="chat-row-user">
          <div className="user-avatar-wrap">
            <img
              src={current.employeeAvatar}
              alt={current.employeeName}
              className="user-avatar-img"
              width={28}
              height={28}
              loading="eager"
            />
            <span className="user-status-dot" aria-hidden="true" />
          </div>
          <div className="user-bubble-box">
            <div className="user-meta-line">
              <span className="user-name">{current.employeeName}</span>
              <span className="user-badge-tag">{current.employeeRole}</span>
            </div>
            <div className="user-msg-text">{current.question}</div>
          </div>
        </div>

        {/* 2. Instant Response by aiOFFICE Core */}
        <div className="chat-row-ai">
          <div className="ai-avatar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <div className="ai-bubble-box">
            <div className="ai-meta-line">
              <div className="ai-name-wrap">
                <span className="ai-name">aiOFFICE</span>
                <span className="ai-badge-tag">კომპანიის AI მოდელი</span>
              </div>
              <div className="ai-meta-right">
                <span className="ai-zero-call-tag">
                  <svg width="9.5" height="9.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>0 ზარი დირექტორს</span>
                </span>
                <span className="ai-speed-tag">
                  <svg width="9.5" height="9.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  <span>0.28 წმ</span>
                </span>
              </div>
            </div>

            {/* Actionable Steps */}
            <div className="ai-steps-list">
              {current.steps.map((step, idx) => (
                <div key={idx} className="ai-step-item">
                  <span className="step-num-badge">{idx + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {/* Exact Citation & Document Highlighter Card */}
            <div className="ai-citation-card">
              <div className="citation-header-row">
                <div className="citation-left-wrap">
                  <div className="citation-file-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <span className="citation-title">{current.docName}</span>
                </div>
                <span className="citation-exact-loc">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{current.docCitation}</span>
                </span>
              </div>

              {/* Verified Quote Snippet with Yellow Highlighter */}
              <div className="citation-snippet-quote">
                <span>{current.docQuotePre}</span>
                <mark className="snippet-mark">{current.docHighlight}</mark>
                <span>{current.docQuotePost}</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ── Bottom Guarantee Bar: Perpetual Auto-Sync & CRM Integration ── */}
      <div className="office-model-bottom-bar">
        <div className="model-sync-left">
          <div className="model-icon-box">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <div className="model-text-title">ერთხელ იქმნება • მუდმივად ახლდება</div>
            <div className="model-text-sub">ინტეგრაცია CRM-ში, Telegram-სა და ნებისმიერ ჩატში</div>
          </div>
        </div>
        <div className="model-status-pill">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>24/7 SYNC</span>
        </div>
      </div>

      {/* Accessible Replay Button */}
      <button
        type="button"
        className="sr-only"
        onClick={replay}
        aria-label="Replay aiOFFICE Demo"
      >
        Replay
      </button>
    </div>
  );
}
