'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Compass, Layers, Scale, Shield, Target, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/Button';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { containerVariants, itemVariants } from '@/lib/animations';

const pillars = [
  {
    title: 'Strategic Retirement Engineering',
    focus: 'Systematic distribution setups and post-career wealth longevity.',
    copy: 'Retirement is the transition to living entirely on your own terms. We architect robust, inflation-adjusted accumulation strategies and structured drawdown mechanisms to preserve purchasing power.',
    icon: Compass,
    colSpan: 'md:col-span-7',
  },
  {
    title: 'Objective-Driven Goal Optimization',
    focus: 'Capital allocation mapping and targeted liquidity sizing.',
    copy: 'From funding global education to capital procurement for real estate milestones, we map specialized horizons. Every objective is paired with an independent asset-allocation track.',
    icon: Target,
    colSpan: 'md:col-span-5',
  },
  {
    title: 'Fiduciary Risk Architecture',
    focus: 'Vulnerability mapping and independent policy evaluation.',
    copy: 'We independently audit your asset-liability exposure, evaluating life, health, and critical illness portfolios entirely free from product-sale commissions.',
    icon: Shield,
    colSpan: 'md:col-span-6',
  },
  {
    title: 'Liquidity Contingency Planning',
    focus: 'Cash-flow matching and volatility buffers.',
    copy: 'Safeguard compounding assets from forced early liquidations during macroeconomic anomalies. We structure optimized liquid contingency baskets equivalent to operating expenses.',
    icon: Layers,
    colSpan: 'md:col-span-6',
  },
  {
    title: 'Structural Tax Planning',
    focus: 'Structuring tax-efficient investments and post-retirement tax insulation.',
    copy: 'Maximize net performance by minimizing fiscal drag. We execute legally compliant, tax-optimized investment vehicles that retain capital efficiency across multiple fiscal cycles.',
    icon: TrendingUp,
    colSpan: 'md:col-span-5',
  },
  {
    title: 'Empirical Risk Profiling',
    focus: 'Psychological tolerance analysis and capacity modeling.',
    copy: 'Portfolios must match psychological tolerance and mathematical capacity. We perform granular risk-variance testing to ensure your portfolio mix stays aligned with market comfort.',
    icon: Scale,
    colSpan: 'md:col-span-7',
  },
];

export default function ServicesContainer() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans selection:bg-blue-100 pb-24 pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Breadcrumb />

        {/* Editorial Hero */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start"
        >
          <motion.div variants={itemVariants} className="md:col-span-8 pt-4 md:pt-12">
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-6">
              Advisory Architecture
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-slate-900 mb-8">
              Exhaustive Wealth <br />Stewardship.
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mb-10">
              An exhaustive umbrella of specialized wealth and advisory solutions engineered to measure your long-term milestones and institutionalize your financial structure.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 relative mt-12 md:mt-0">
            <div className="relative z-10 bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-200/50 md:-ml-8 md:mt-32">
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
            <div className="absolute top-0 right-0 w-full h-[140%] bg-stone-200/40 -z-10 translate-x-4 -translate-y-8 mix-blend-multiply" />
          </motion.div>
        </motion.div>

        {/* The 6 Pillars - Asymmetrical Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32 md:mt-48"
        >
          <div className="mb-16 md:mb-24">
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-4">
              Structural Foundation
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-slate-900">
              Architectural Fiduciary Competencies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div 
                  key={pillar.title} 
                  variants={itemVariants}
                  className={`${pillar.colSpan} bg-white p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-stone-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 group`}
                >
                  <div className="h-10 w-10 mb-6 flex items-center justify-center bg-stone-50 rounded-full group-hover:bg-blue-50 transition-colors">
                    <Icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <h3 className="font-serif tracking-tight text-slate-900 text-2xl mb-3 leading-snug">{pillar.title}</h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Focus: {pillar.focus}</p>
                  <p className="font-sans text-slate-600 leading-relaxed">{pillar.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Advisory Tiers & Fiduciary Ethics - Rich Ink Dark Mode */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-32 relative overflow-hidden bg-slate-900 py-24 md:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,1),rgba(15,23,42,0.4)_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            
            {/* Tiers Left Column */}
            <motion.div variants={itemVariants} className="md:col-span-7 space-y-12">
              <span className="block text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-6">
                Execution Modalities
              </span>
              
              <div className="relative p-8 md:p-12 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50">
                <div className="absolute -left-px top-10 h-16 w-1 bg-blue-500" />
                <h3 className="font-serif text-3xl text-white mb-2">Tier A: Ongoing Wealth Management</h3>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">Baseline Financial Plan Required</p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  A high-touch, continuous partnership designed to dynamically navigate market evolutions, regulatory shifts, and major life alterations.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-slate-300 text-sm">
                    <span className="text-blue-400 font-bold">—</span>
                    <span><strong>Systematic Portfolio Audits:</strong> Continuous tracking of asset class correlations to maintain risk targets.</span>
                  </li>
                  <li className="flex gap-3 text-slate-300 text-sm">
                    <span className="text-blue-400 font-bold">—</span>
                    <span><strong>Tactical Rebalancing:</strong> Unbiased allocation shifts driven purely by mathematical triggers.</span>
                  </li>
                  <li className="flex gap-3 text-slate-300 text-sm">
                    <span className="text-blue-400 font-bold">—</span>
                    <span><strong>Holistic Advisory Rail:</strong> Dedicated year-round consultation desk for dynamic financial choices.</span>
                  </li>
                </ul>
              </div>

              <div className="relative p-8 md:p-12 bg-[#0A0F1C] border border-slate-700/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <div className="absolute -left-px top-10 h-16 w-1 bg-amber-500" />
                <h3 className="font-serif text-3xl text-white mb-2">Tier B: Fundamental Stock Advisory</h3>
                <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">Discretionary Capital Allocators</p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Strictly focused on multi-year compounding cycles through rigorously researched, fundamentally sound businesses.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-slate-300 text-sm">
                    <span className="text-amber-500 font-bold">—</span>
                    <span><strong>Institutional Fundamental Research:</strong> Deep analytical vetting of balance sheets, governance, and economic moats.</span>
                  </li>
                  <li className="flex gap-3 text-slate-300 text-sm">
                    <span className="text-amber-500 font-bold">—</span>
                    <span><strong>Zero Speculation:</strong> No intraday, options, or technical momentum trading advice.</span>
                  </li>
                  <li className="flex gap-3 text-slate-300 text-sm">
                    <span className="text-amber-500 font-bold">—</span>
                    <span><strong>Absolute Commission Alignment:</strong> 100% flat-fee advisory ensuring unbiased recommendations.</span>
                  </li>
                </ul>
                <span className="inline-flex items-center rounded-sm border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  Strictly Fundamental Only
                </span>
              </div>
            </motion.div>

            {/* Ethics & CTA Right Column */}
            <motion.div variants={itemVariants} className="md:col-span-5 md:pl-10 md:border-l border-slate-700/50 sticky top-32">
              <span className="block text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-4">
                The Gold Standard
              </span>
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-white mb-6">
                Why Ethics Governs Value.
              </h2>
              <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                In financial services, integrity is the bedrock of capital preservation. As a SEBI-Registered Investment Adviser (RIA), we explicitly renounce product sales commissions. This eliminates structural conflicts of interest, ensuring that every advisory insight is singularly aligned with your net-worth expansion.
              </p>
              
              <div className="bg-white/5 backdrop-blur-md p-8 border border-slate-600/30">
                <h4 className="font-serif text-2xl text-white mb-4">Architect Your Blueprint</h4>
                <p className="text-slate-400 text-sm mb-8">
                  Schedule a strategic consultation to receive a structured fiduciary roadmap.
                </p>
                <Link href="/contact" passHref>
                  <Button variant="outline" size="lg" className="w-full rounded-none border-slate-600 text-slate-200 hover:bg-white hover:text-slate-900 transition-colors">
                    Execute Consultation <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </main>
  );
}