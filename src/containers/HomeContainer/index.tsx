'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BadgeCheck,
  Shield,
  ShieldCheck,
  Compass,
  Scale,
  Layers,
  ChevronDown,
  Award,
  TrendingUp,
  Target,
  Users,
  CheckCircle2,
} from 'lucide-react';
import PageSectionLayout from '@/components/layout/PageSectionLayout';
import { containerVariants, itemVariants } from '@/lib/animations';

interface Pillar {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  focus: string;
  desc: string;
}

const previewPillars: Pillar[] = [
  {
    icon: Compass,
    title: 'Strategic Retirement Engineering',
    focus: 'Systematic drawdowns & wealth longevity.',
    desc: 'Modeling robust accumulation tracks and sustainable cash flows to preserve lifelong purchasing power.',
  },
  {
    icon: Target,
    title: 'Objective-Driven Goal Optimization',
    focus: 'Capital allocation & targeted liquidity.',
    desc: 'Pairing targeted financial milestones with distinct capital tracks matching your time horizon.',
  },
  {
    icon: Shield,
    title: 'Fiduciary Risk Architecture',
    focus: 'Vulnerability mapping & independent audits.',
    desc: 'Independently analyzing your healthcare and safety reserves, operating free from distribution commissions.',
  },
  {
    icon: Layers,
    title: 'Liquidity Contingency Planning',
    focus: 'Volatility buffers & expense matching.',
    desc: 'Architecting robust liquid cash baskets that protect compounding assets from forced crisis liquidations.',
  },
  {
    icon: TrendingUp,
    title: 'Structural Tax Planning',
    focus: 'Structuring & tax-efficient compounding.',
    desc: 'Evaluating income parameters to execute tax-efficient strategies that legally reduce structural fiscal drag.',
  },
  {
    icon: Scale,
    title: 'Empirical Risk Profiling',
    focus: 'Tolerance analysis & capacity modeling.',
    desc: 'Measuring granular risk-variance to ensure capital allocations match your psychological comfort and mathematical capacity.',
  },
];

const homeFaqs = [
  {
    question: 'How is the advisory fee structured?',
    answer: 'We operate on a strict, fixed-fee methodology. The fee is determined transparently by your Total Assets Under Advisory (AUA), ensuring our compensation is completely decoupled from product distributions.',
  },
  {
    question: 'What is the precise annual retainer?',
    answer: 'Initial structural onboarding: Rs. 13,000. Annual ongoing retainer: Rs. 8,000. The baseline retainer adjusts by Rs. 1,000 every two fiscal cycles to account for inflation.',
  },
  {
    question: 'Why compensate an adviser when digital content is abundant?',
    answer: 'Information is not execution. When you retain a SEBI-registered adviser, you acquire bespoke capital structuring, emotional insulation during drawdowns, and mathematically rigorous accountability.',
  },
  {
    question: 'Who is incompatible with this advisory model?',
    answer: 'We decline engagements with individuals seeking speculative stock tips, commission-based insurance sales, intraday momentum trading, or those unwilling to undergo rigorous data transparency.',
  },
];

export default function HomeContainer() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageSectionLayout
      showBreadcrumb={false}
      fullWidthContent={
        <>
          {/* ─── SECTION 5: INSTITUTIONAL TIER PREVIEWS (Dark Tiers) ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden bg-slate-900 py-24 md:py-32 border-t border-slate-800"
          >
            {/* Subtle radial glows */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,1),rgba(15,23,42,0.4)_70%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="block text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
                  Execution Modalities
                </span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-white">
                  Institutional Advisory Portals
                </h2>
                <p className="text-slate-400 text-sm md:text-base mt-4">
                  Explore our core fiduciary execution pathways, optimized for high-conviction compounding and absolute transparency.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* Tier A: Wealth Management */}
                <motion.div
                  variants={itemVariants}
                  className="relative p-8 md:p-12 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 flex flex-col justify-between"
                >
                  <div className="absolute -left-px top-10 h-16 w-1 bg-blue-500" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2">Tier A</span>
                    <h3 className="font-serif text-3xl text-white mb-4">Ongoing Wealth Management</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-8">
                      A continuous, high-touch strategic partnership engineered to dynamically navigate portfolio rebalancing, tax-efficient drawdowns, and life-transition planning.
                    </p>
                  </div>
                  <Link href="/services" passHref>
                    <button className="inline-flex items-center gap-2.5 text-xs tracking-wider uppercase font-bold text-blue-400 hover:text-white transition-colors">
                      Explore Wealth Tier <ArrowRight size={14} />
                    </button>
                  </Link>
                </motion.div>

                {/* Tier B: Stock Advisory */}
                <motion.div
                  variants={itemVariants}
                  className="relative p-8 md:p-12 bg-[#0A0F1C] border border-slate-700/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-between"
                >
                  <div className="absolute -left-px top-10 h-16 w-1 bg-amber-500" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-2">Tier B</span>
                    <h3 className="font-serif text-3xl text-white mb-4">Fundamental Stock Advisory</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-8">
                      Focusing strictly on concentrated multi-year compounding cycles through rigorously researched, moat-driven equities. Devoid of momentum trading and speculative advisory.
                    </p>
                  </div>
                  <Link href="/services" passHref>
                    <button className="inline-flex items-center gap-2.5 text-xs tracking-wider uppercase font-bold text-amber-400 hover:text-white transition-colors">
                      Explore Stock Tier <ArrowRight size={14} />
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ─── SECTION 6: FAQ ACCORDION PREVIEW ─── */}
          <section className="bg-stone-50 py-24 border-t border-stone-200/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
                  Operational Clarity
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                  Frequently Answered Inquiries
                </h2>
              </div>

              <div className="space-y-6">
                {homeFaqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <article
                      key={idx}
                      className="transition-all duration-300 border-b border-stone-200 pb-6"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="flex w-full items-start justify-between gap-6 text-left group"
                      >
                        <h3 className={`font-serif text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-blue-900' : 'text-slate-900 group-hover:text-blue-800'}`}>
                          {faq.question}
                        </h3>
                        <div className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-300 text-slate-400 group-hover:border-blue-400 group-hover:text-blue-600'}`}>
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
                            <div className="pt-4 pr-6">
                              <p className="text-sm md:text-base leading-relaxed text-slate-600">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </article>
                  );
                })}
              </div>

              <div className="mt-12 text-center">
                <Link href="/faqs" passHref>
                  <button className="inline-flex items-center gap-3 border border-slate-900 bg-slate-950 text-white text-xs tracking-wider uppercase font-bold px-8 py-4 hover:bg-slate-800 transition-colors">
                    Explore Full Inquiry Desk <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* ─── SECTION 7: SEBI DISCLOSURE PREVIEW ─── */}
          <section className="bg-white py-20 border-t border-stone-200/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-blue-700 mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-4">
                SEBI Individual Registration &amp; Fiduciary Compliance
              </h3>
              <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-6">
                RIA Registration No. INA000020864
              </p>
              <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
                In adherence to the Securities and Exchange Board of India (SEBI) guidelines, we maintain complete transparency. We operate strictly on a flat fee-only covenant and are bound to direct all advice solely in your structural interest.
              </p>
              <Link href="/disclosures" passHref>
                <button className="inline-flex items-center gap-2.5 text-xs tracking-wider uppercase font-bold text-blue-700 hover:text-blue-900 transition-colors">
                  Inspect Regulatory Registry &amp; Grievances <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          </section>
        </>
      }
    >
      {/* ─── SECTION 1: HERO SECTION ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* ── LEFT COLUMN ── */}
        <motion.div variants={itemVariants} className="lg:col-span-6 flex flex-col">
          <span className="text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-6">
            Institutional-Grade Stewardship
          </span>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-[60px] text-slate-900 leading-[1.08] tracking-tight mb-8">
            Achieve True Financial Freedom with India&apos;s Trusted Fee-Only Advisor
          </h1>

          {/* 4-Point Trust Grid */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 border-t border-b border-stone-200/60 py-6">
            <div className="flex items-center gap-2.5">
              <BadgeCheck className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-slate-800">Flat Fee RIA</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Shield className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-slate-800">SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2.5">
              <BadgeCheck className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-slate-800">100% Unbiased</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Shield className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-sm font-semibold text-slate-800">Zero Commissions</span>
            </div>
          </div>

          <Link href="/contact" passHref>
            <button className="inline-flex items-center gap-3 bg-slate-950 text-white text-xs tracking-wider uppercase font-bold px-8 py-4 hover:bg-slate-800 transition-colors duration-200 w-fit">
              Initiate Fiduciary Engagement
              <ArrowRight size={14} />
            </button>
          </Link>
        </motion.div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 relative"
        >
          <div className="relative w-full aspect-[4/5] lg:aspect-square rounded-tr-[120px] rounded-br-[120px] rounded-tl-3xl rounded-bl-3xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]">
            <Image
              src="/images/sujan-hero.jpg"
              alt="Sujan Singh - SEBI Registered Investment Advisor"
              fill
              priority
              className="object-cover -rotate-90 scale-[1.3] object-right"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Floating Quote Card */}
          <div className="absolute -bottom-10 -left-4 lg:-left-20 bg-white p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] z-10 w-[290px] lg:w-[320px] rounded-sm border border-stone-100">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2 block">
              The Fiduciary Standard
            </span>
            <p className="font-serif text-sm md:text-base text-slate-900 italic leading-snug mb-4">
              &quot;True wealth preservation requires mathematical rigor and uncompromised objectivity.&quot;
            </p>
            <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
              <div className="h-8 w-8 rounded-full flex-shrink-0 overflow-hidden relative shadow-sm border border-stone-200">
                <Image
                  src="/images/sujan-hero.jpg"
                  alt="Sujan Singh"
                  fill
                  className="object-cover -rotate-90 scale-[1.5] object-right"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Sujan Singh, RIA</p>
                <p className="text-[9px] uppercase tracking-widest text-slate-500 mt-0.5">SEBI-Registered Adviser</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ─── SECTION 2: ABOUT PREVIEW ─── */}
      <div className="mt-32 pt-24 border-t border-stone-200/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Executive Summary */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-xs uppercase tracking-[0.2em] text-blue-600 font-bold">
                Executive Profile
              </span>
            </div>
            <h2 className="font-serif text-4xl text-slate-900 tracking-tight leading-tight mb-6">
              Sujan Singh: Dedicated Fiduciary Stewardship
            </h2>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 font-serif">
              Sujan Singh is an independent, SEBI-registered individual Investment Adviser certified by the National Institute of Securities Markets (NISM). Architecting objective wealth tracks, Sujan operates strictly on a zero-commission flat fee.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Over seven years, he has guided corporate executives, HNI households, and business owners to construct robust, commission-insulated asset allocations that match mathematical capacities and psychological comfort thresholds.
            </p>

            <Link href="/about" passHref>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-slate-900 text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors">
                Read Biography &amp; Credentials
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          {/* Right Column: Fiduciary Trust Badges Stack */}
          <div className="lg:col-span-5 space-y-4">
            {[
              { label: 'SEBI-Registered RIA', desc: 'Reg. No. INA000020864 - Bound strictly by a statutory fiduciary code.' },
              { label: '7+ Years Experience', desc: 'Over half a decade delivering objective, institutional-grade guidance.' },
              { label: 'Fee-Only Fiduciary', desc: '100% free of sales incentives, commission kickbacks, or distribution drag.' },
              { label: 'NISM Certified', desc: 'Post Graduate credentialed in Investment Advisory frameworks.' },
            ].map((badge, idx) => (
              <div key={idx} className="bg-stone-50 border border-stone-200/60 p-5 hover:border-slate-350 hover:bg-white transition-all duration-300">
                <div className="flex items-center gap-3 mb-1">
                  <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 flex-shrink-0" />
                  <h4 className="text-sm font-bold text-slate-900">{badge.label}</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-7.5">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ─── SECTION 3: WHY CHOOSE / FIDUCIARY STANDARD ─── */}
      <div className="mt-32 py-24 border-t border-stone-200/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
            The Fiduciary Mandate
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
            Why Partner with a Fee-Only Fiduciary Advisor?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: '100% Fee-Only Integrity',
              desc: 'Our revenue comes solely from a direct flat fee. No commission incentives, zero sales quotas, and absolute alignment with your financial objectives.',
            },
            {
              title: 'Independent Objectivity',
              desc: 'Complete decoupling from asset management companies and banks. Our advisory is powered entirely by quantitative research and empirical data.',
            },
            {
              title: 'Milestone Architecture',
              desc: 'We map long-term wealth preservation directly to distinct life thresholds, ensuring your assets are insulated from market panic.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-stone-200/60 p-8 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-blue-600 tracking-widest block mb-4">Tenet 0{idx + 1}</span>
                <h3 className="font-serif text-xl text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── SECTION 4: SERVICES PREVIEW ─── */}
      <div className="mt-12 py-24 border-t border-stone-200/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
              Methodology &amp; Scope
            </span>
            <h2 className="font-serif text-4xl text-slate-900 tracking-tight leading-tight">
              The Six Fiduciary Cornerstones
            </h2>
          </div>
          <Link href="/services" passHref>
            <button className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-bold text-blue-700 hover:text-blue-900 transition-colors">
              Explore All Services <ArrowRight size={14} />
            </button>
          </Link>
        </div>

        {/* Interactive Asymmetric Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {previewPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border border-stone-200/60 p-8 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
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
                    {item.desc}
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
      </div>
    </PageSectionLayout>
  );
}
