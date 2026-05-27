'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Compass,
  Layers,
  Scale,
  Shield,
  Target,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Award,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import PageSectionLayout from '@/components/layout/PageSectionLayout';
import { containerVariants, itemVariants } from '@/lib/animations';

interface PillarItem {
  key: string;
  title: string;
  focus: string;
  copy: string;
  detail: string;
  icon: React.ComponentType<{ className?: string }>;
}

const servicePillars: PillarItem[] = [
  {
    key: 'retirement',
    title: 'Strategic Retirement Engineering',
    focus: 'Systematic distribution setups and post-career wealth longevity.',
    copy: 'Retirement is the transition to living entirely on your own terms. We architect robust, inflation-adjusted accumulation strategies and structured drawdown mechanisms.',
    detail: 'We build rigorous cash-flow models to project accumulation pathways and safe initial withdrawal rates (SWR). By evaluating inflation-indexed parameters, we ensure your lifelong purchasing power is insulated against prolonged market drawdowns.',
    icon: Compass,
  },
  {
    key: 'goal',
    title: 'Objective-Driven Goal Optimization',
    focus: 'Capital allocation mapping and targeted liquidity sizing.',
    copy: 'From funding global education to capital procurement for real estate milestones, we map specialized horizons. Every objective is paired with an independent asset-allocation track.',
    detail: 'We decant your financial targets into structured duration tracks (short, medium, and long-term), assigning mathematically matching asset baskets to each objective. This ensures no crucial life milestone is compromised by sudden market anomalies.',
    icon: Target,
  },
  {
    key: 'risk',
    title: 'Fiduciary Risk Architecture',
    focus: 'Vulnerability mapping and independent policy evaluation.',
    copy: 'We independently audit your asset-liability exposure, evaluating life, health, and critical illness portfolios entirely free from product-sale commissions.',
    detail: 'We analyze existing policy parameters, term limits, exclusions, and cost drags. Because we accept zero distribution payouts or kickbacks, our insulation analysis is completely objective and singularly aligned with your security needs.',
    icon: Shield,
  },
  {
    key: 'liquidity',
    title: 'Liquidity Contingency Planning',
    focus: 'Cash-flow matching and volatility buffers.',
    copy: 'Safeguard compounding assets from forced early liquidations during macroeconomic anomalies. We structure optimized liquid contingency baskets.',
    detail: 'We architect distinct emergency reserve pools matched to your operating expenses. By structuring liquid, low-volatility baskets (arbitrage, ultra-short, liquid liquid assets), we guarantee that your primary compounding engines never face premature crisis liquidations.',
    icon: Layers,
  },
  {
    key: 'tax',
    title: 'Structural Tax Planning',
    focus: 'Structuring tax-efficient investments and post-retirement tax insulation.',
    copy: 'Maximize net performance by minimizing fiscal drag. We execute legally compliant, tax-optimized investment vehicles.',
    detail: 'By evaluating structural parameters (LTCG, STCG, dividend distributions, and multi-tier tax brackets), we organize capital transactions and asset placements to legally minimize statutory drag, securing higher compounding net margins.',
    icon: TrendingUp,
  },
  {
    key: 'profile',
    title: 'Empirical Risk Profiling',
    focus: 'Psychological tolerance analysis and capacity modeling.',
    copy: 'Portfolios must match psychological tolerance and mathematical capacity. We perform granular risk-variance testing.',
    detail: 'We evaluate risk parameters using behavioral finance models and capital capacity math. This ensures that when volatility triggers occur, your allocation remains perfectly inside both your mental comfort zone and mathematical survival limit.',
    icon: Scale,
  },
];

export default function ServicesContainer() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  return (
    <PageSectionLayout
      fullWidthContent={
        <>
          {/* ─── SECTION 4: SERVICE DETAIL EXPERIENCE (Interactive Accordions) ─── */}
          <section className="bg-stone-50 py-24 border-t border-stone-200/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
                  Operational Details
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                  Detailed Service Architectures
                </h2>
                <p className="text-slate-500 text-xs md:text-sm mt-3">
                  Click on any cornerstone below to expand its empirical methodology, compliance scope, and structural execution tracks.
                </p>
              </div>

              <div className="space-y-6">
                {servicePillars.map((item, idx) => {
                  const isOpen = activeAccordion === item.key;
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.key}
                      className="bg-white border border-stone-200/60 p-6 md:p-8 hover:border-slate-350 transition-all duration-300"
                    >
                      <button
                        onClick={() => setActiveAccordion(isOpen ? null : item.key)}
                        className="flex w-full items-start justify-between gap-6 text-left group"
                      >
                        <div className="flex gap-4 items-start">
                          <div className={`h-10 w-10 shrink-0 flex items-center justify-center rounded-sm ${isOpen ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 group-hover:bg-blue-100'}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                              Cornerstone 0{idx + 1}
                            </span>
                            <h3 className={`font-serif text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-blue-900' : 'text-slate-900 group-hover:text-blue-800'}`}>
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <div className={`mt-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-300 text-slate-400 group-hover:border-blue-400 group-hover:text-blue-600'}`}>
                          <ChevronDown className={`h-3 w-3 transition-transform duration-350 ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 pl-14 border-t border-stone-100 mt-6">
                              <p className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wider">Methodology Framework</p>
                              <p className="text-slate-650 text-sm md:text-base leading-relaxed mb-4">
                                {item.copy}
                              </p>
                              <p className="text-slate-500 text-xs md:text-sm leading-relaxed bg-stone-50 border border-stone-150 p-4 font-mono">
                                {item.detail}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ─── SECTION 5: EXECUTION MODALITIES SECTION (Tiers Dark Mode) ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden bg-slate-900 py-24 md:py-32 border-t border-slate-800"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,1),rgba(15,23,42,0.4)_70%)]" />
            
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="block text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
                  Execution Modalities
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-tight">
                  Institutional Portals
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                {/* Tier A */}
                <motion.div variants={itemVariants} className="relative p-8 md:p-12 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 flex flex-col justify-between">
                  <div className="absolute -left-px top-10 h-16 w-1 bg-blue-500" />
                  <div>
                    <h3 className="font-serif text-2xl text-white mb-2">Tier A: Ongoing Wealth Management</h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">Continuous Strategic Partnership</p>
                    <p className="text-slate-300 leading-relaxed text-sm mb-6">
                      A high-touch advisory model designed to dynamically oversee multi-asset allocations, tax mitigations, and lifelong cash flows.
                    </p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex gap-3 text-slate-400 text-xs">
                        <span className="text-blue-400 font-bold">—</span>
                        <span><strong>Portfolio Rebalancing:</strong> Systematic asset checks based strictly on mathematical tolerance triggers.</span>
                      </li>
                      <li className="flex gap-3 text-slate-400 text-xs">
                        <span className="text-blue-400 font-bold">—</span>
                        <span><strong>Ongoing Retention:</strong> Year-round advisory support for dynamic life choices.</span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/contact" passHref>
                    <button className="inline-flex items-center gap-2.5 text-xs tracking-wider uppercase font-bold text-blue-400 hover:text-white transition-colors">
                      Retain Strategic Management <ArrowRight size={14} />
                    </button>
                  </Link>
                </motion.div>

                {/* Tier B */}
                <motion.div variants={itemVariants} className="relative p-8 md:p-12 bg-[#0A0F1C] border border-slate-700/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                  <div className="absolute -left-px top-10 h-16 w-1 bg-amber-500" />
                  <div>
                    <h3 className="font-serif text-2xl text-white mb-2">Tier B: Fundamental Stock Advisory</h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">Concentrated Equity Allocation</p>
                    <p className="text-slate-300 leading-relaxed text-sm mb-6">
                      Strictly focused on multi-year compounding cycles through rigorously researched, fundamentally sound businesses possessing structural competitive moats.
                    </p>
                    <ul className="space-y-4 mb-8">
                      <li className="flex gap-3 text-slate-400 text-xs">
                        <span className="text-amber-400 font-bold">—</span>
                        <span><strong>Long-Term Compounding:</strong> 15-20 highly researched equity tracks, avoiding momentum trends.</span>
                      </li>
                      <li className="flex gap-3 text-slate-400 text-xs">
                        <span className="text-amber-400 font-bold">—</span>
                        <span><strong>Rigorous Valuations:</strong> Dynamic quantitative and qualitative business moats modeling.</span>
                      </li>
                    </ul>
                  </div>
                  <Link href="/contact" passHref>
                    <button className="inline-flex items-center gap-2.5 text-xs tracking-wider uppercase font-bold text-amber-400 hover:text-white transition-colors">
                      Retain Stock Advisory <ArrowRight size={14} />
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ─── SECTION 6: FIDUCIARY COVENANT SECTION ─── */}
          <section className="bg-white py-24 border-t border-stone-200/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
                Fiduciary Integrity
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-6">
                Pure Fee-Only Structuring.
              </h2>
              <p className="text-slate-650 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                Integrity is the cornerstone of capital preservation. Operating as a SEBI-registered Investment Adviser, Sujan Singh explicitly renounces all third-party commissions, brokerages, and referral kickbacks. Our advice remains singularly focused on your net wealth growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-6 border-t border-stone-150">
                <div>
                  <h4 className="text-sm font-bold text-slate-950 uppercase tracking-wide mb-1">01. Zero Product Sales</h4>
                  <p className="text-xs text-slate-500">We hold no insurance licenses and sell no proprietary funds.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950 uppercase tracking-wide mb-1">02. No Commission Drag</h4>
                  <p className="text-xs text-slate-500">Unbiased capital mapping entirely free of transactional drags.</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950 uppercase tracking-wide mb-1">03. Absolute Privacy</h4>
                  <p className="text-xs text-slate-500">Fiduciary safety under stringent SEBI compliance mandates.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ─── SECTION 7: FINAL CTA SECTION ─── */}
          <section className="bg-slate-900 py-24 relative overflow-hidden border-t border-slate-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_50%)]" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
                Architect Your Financial Blueprint
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Schedule a strategic consultation to receive a structured fiduciary roadmap tailored to your long-term objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <button className="inline-flex items-center gap-3 bg-white text-slate-900 text-xs tracking-wider uppercase font-bold px-8 py-4 hover:bg-stone-250 transition-colors w-full sm:w-auto justify-center">
                    Book Consultation
                    <ArrowRight size={14} />
                  </button>
                </Link>
                <Link href="/contact" passHref>
                  <button className="inline-flex items-center gap-3 border border-slate-700 text-white text-xs tracking-wider uppercase font-bold px-8 py-4 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
                    Contact Adviser
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </>
      }
    >
      {/* ─── SECTION 1: HERO / SERVICES INTRO ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start"
      >
        <motion.div variants={itemVariants} className="md:col-span-8">
          <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-6">
            Advisory Architecture
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-slate-900 mb-8">
            Exhaustive Wealth <br />Stewardship.
          </h1>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mb-8">
            An institutional-grade umbrella of fiduciary advisory solutions engineered for long-term capital preservation, tax efficiency, and intelligent wealth compounding.
          </p>

          {/* Premium Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 border-t border-b border-stone-200/60 py-6">
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Fee-Only Advisory</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Zero Commissions</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Personalized Plan</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" passHref>
              <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors justify-center w-full sm:w-auto">
                Schedule Consultation
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* ─── SECTION 2: ADVISORY PHILOSOPHY (The Core Mandate) ─── */}
        <motion.div variants={itemVariants} className="md:col-span-4 relative mt-12 md:mt-0">
          <div className="relative z-10 bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-200/50 md:-ml-8 md:mt-16">
            <span className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
              The Core Mandate
            </span>
            <p className="font-serif text-xl leading-snug text-slate-900 mb-6 italic">
              &quot;We deploy empirical structuring models to measure, preserve, and execute your capital requirements.&quot;
            </p>
            <div className="pt-6 border-t border-stone-100 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-700" />
              <p className="font-bold text-slate-900 text-sm">Fiduciary Grade</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-3/4 h-[120%] bg-stone-100 -z-10 translate-x-4 -translate-y-8 mix-blend-multiply" />
        </motion.div>
      </motion.div>

      {/* ─── SECTION 3: CORE ADVISORY SERVICES GRID ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="mt-32 pt-24 border-t border-stone-200/50"
      >
        <div className="mb-16">
          <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
            Services Architecture
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
            The Six Fiduciary Cornerstones
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {servicePillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border border-stone-200/60 p-8 hover:border-slate-350 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="mb-6 w-10 h-10 bg-blue-50 flex items-center justify-center rounded-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-350">
                    <Icon className="h-5 w-5 text-blue-700 transition-colors duration-350" />
                  </div>
                  <span className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                    {item.focus}
                  </span>
                  <h3 className="font-serif text-xl text-slate-900 tracking-tight leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.copy}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex justify-between items-center text-xs font-mono uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                  <span>Core Pillar 0{idx + 1}</span>
                  <ArrowRight size={12} className="transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </PageSectionLayout>
  );
}