'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Compass, Layers, Scale, Shield, Target, TrendingUp, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const pillars = [
  {
    title: 'Strategic Retirement Engineering',
    focus: 'Expense modeling, systematic distribution setups, and post-career wealth longevity.',
    copy: 'Retirement is the transition to living entirely on your own terms. We architect robust, inflation-adjusted accumulation strategies and structured drawdown mechanisms to preserve purchasing power and protect your lifestyle throughout your golden years.',
    icon: Compass,
  },
  {
    title: 'Objective-Driven Goal Optimization',
    focus: 'Capital allocation mapping, milestone timelines, and targeted liquidity sizing.',
    copy: 'From funding premier global education to capital procurement for real estate milestones, we map specialized horizons. Every life objective is paired with an independent asset-allocation track engineered around your time horizon.',
    icon: Target,
  },
  {
    title: 'Fiduciary Risk & Insurance Architecture',
    focus: 'Risk vulnerability mapping, independent policy evaluation, and asset protection.',
    copy: 'Wealth accumulation is incomplete without structural insulation. We independently audit your asset-liability exposure, evaluating life, health, and critical illness portfolios entirely free from product-sale commissions.',
    icon: Shield,
  },
  {
    title: 'Liquidity & Emergency Contingency Planning',
    focus: 'Capital accessibility management, cash-flow matching, and volatility buffers.',
    copy: 'Safeguard compounding assets from forced early liquidations during macroeconomic anomalies. We structure optimized liquid contingency baskets equivalent to 6 to 12 months of operating expenses.',
    icon: Layers,
  },
  {
    title: 'Alpha-Driven Tax Planning & Optimization',
    focus: 'Structuring tax-efficient investments, deduction mapping, and post-retirement tax insulation.',
    copy: 'Maximize net performance by minimizing fiscal drag. We evaluate revenue buckets to construct legally compliant, tax-optimized investment vehicles that retain capital efficiency across multiple fiscal cycles.',
    icon: TrendingUp,
  },
  {
    title: 'Empirical Risk Profiling & Asset Mapping',
    focus: 'Psychological tolerance analysis, capacity modeling, and rebalancing parameters.',
    copy: 'Portfolios must match both psychological tolerance and mathematical capacity. We perform granular risk-variance testing to ensure your portfolio mix stays aligned with your market comfort.',
    icon: Scale,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100/70 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-slate-200/60 bg-white p-8"
        >
          <p className="text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-700">Home</Link> / <span>Services</span>
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-slate-950 sm:text-5xl">
            Comprehensive Financial Stewardship Tailored to You
          </h1>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-slate-700">
            An exhaustive umbrella of specialized wealth and advisory solutions engineered to secure your long-term milestones and institutionalize your financial peace of mind.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="mt-10"
        >
          <h2 className="text-2xl font-bold text-slate-950">Core Advisory Services: The 6 Pillars</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200/60 bg-white/80 p-6 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300"
                >
                  <Icon className="h-6 w-6 text-blue-700" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-800">Core Focus: <span className="font-normal text-slate-700">{pillar.focus}</span></p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{pillar.copy}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
          className="mt-10 space-y-6"
        >
          <article className="rounded-3xl border border-slate-200/70 bg-slate-50 p-8">
            <h3 className="text-2xl font-bold text-slate-950">Tier A: Ongoing Wealth Management Service</h3>
            <p className="mt-2 text-sm text-slate-700"><strong>Target Audience:</strong> Clients holding an active, completed holistic baseline financial plan.</p>
            <p className="mt-3 text-slate-700">A high-touch, continuous partnership designed to dynamically navigate market evolutions, regulatory shifts, and major life alterations.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Systematic Portfolio Audits: Continuous tracking of asset class correlations to maintain risk targets.</li>
              <li>Tactical Rebalancing: Unbiased allocation shifts driven purely by mathematical triggers, not market emotion.</li>
              <li>Holistic Advisory Rail: Dedicated year-round consultation desk for dynamic financial choices.</li>
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-slate-100">
            <h3 className="text-2xl font-bold">Tier B: Fundamental Stock Advisory Service</h3>
            <p className="mt-2 text-sm text-slate-300"><strong>Target Audience:</strong> Discretionary capital allocators seeking direct institutional equity exposure.</p>
            <p className="mt-3 text-slate-300">Strictly focused on multi-year compounding cycles through rigorously researched, fundamentally sound businesses.</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200 list-disc pl-5">
              <li>Institutional Fundamental Research: Deep analytical vetting of balance sheets, governance, and economic moats.</li>
              <li>Zero Speculation / Zero Day-Trading: No intraday, options, or technical momentum trading advice.</li>
              <li>Absolute Commission Alignment: 100% flat-fee advisory ensuring recommendations are never incentivized by transaction volumes.</li>
            </ul>
            <p className="mt-4 inline-flex rounded-lg border border-amber-400/40 bg-amber-300/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-amber-200">
              Strictly Fundamental Only
            </p>
          </article>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mt-10 rounded-3xl border border-slate-800 bg-slate-950 p-8"
        >
          <h3 className="text-2xl font-bold text-white">The Fiduciary Gold Standard: Why Ethics Governs Value</h3>
          <p className="mt-4 max-w-5xl leading-relaxed text-slate-300">
            In financial services, integrity is the bedrock of capital preservation. As a SEBI-Registered Investment Adviser (RIA), we explicitly renounce product sales commissions. This eliminates structural conflicts of interest, ensuring that every advisory insight and research recommendation is singularly aligned with your net-worth expansion.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mt-10 rounded-3xl border border-slate-200/60 bg-white p-8"
        >
          <h4 className="text-2xl font-bold text-slate-950">Ready to Build Your Financial Blueprint?</h4>
          <p className="mt-2 text-slate-700">Schedule a strategic consultation and receive a structured fiduciary roadmap tailored to your goals.</p>
          <Link href="/contact" className="mt-5 inline-block">
            <Button variant="secondary" size="lg">
              Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
