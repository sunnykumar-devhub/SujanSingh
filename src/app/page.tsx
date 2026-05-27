'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Coins,
  Compass,
  HelpCircle,
  Milestone,
  Scale,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import Button from '@/components/ui/Button';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
};

const faqs = [
  {
    q: 'What is the exact annual advisory fee structure?',
    a: 'First Year (Onboarding & Execution Setups): Rs. 13,000. Ongoing Renewal: Rs. 8,000/year (with a standard Rs. 1,000 scaling update applied every 2 years).',
  },
  {
    q: 'Do you offer corporate or promotional discounts?',
    a: 'No. To enforce complete equity across our entire client registry, our transparent pricing remains flat and identical for every single client.',
  },
  {
    q: 'Why pay a fee when there is infinite free personal finance content online?',
    a: 'Free generic blueprints miss the custom variables of your exact financial situation. A SEBI-registered fiduciary provides custom tax engineering, objective accountability, and data-driven risk management.',
  },
];

const pillars = [
  {
    title: 'Strategic Retirement Engineering',
    copy: 'Modeling robust accumulation tracks and sustainable structural cash flows to guarantee lifelong purchasing power.',
    icon: Compass,
  },
  {
    title: 'Objective-Driven Milestone Allocation',
    copy: 'Pairing targeted financial goals with distinct capital tracks matching your time horizon.',
    icon: Milestone,
  },
  {
    title: 'Fiduciary Risk Insulation',
    copy: 'Independently analyzing your life and healthcare safety lines entirely free from product sales targets.',
    icon: ShieldCheck,
  },
  {
    title: 'Liquidity Contingency Reserves',
    copy: 'Engineering robust liquid cash baskets protecting your core compound assets from forced crisis liquidations.',
    icon: TrendingUp,
  },
  {
    title: 'Alpha-Driven Tax Optimization',
    copy: 'Evaluating income parameters to build tax-efficient investment strategies that legally reduce structural fiscal drag.',
    icon: Coins,
  },
  {
    title: 'Empirical Risk Profiling',
    copy: 'Performing granular risk-variance tests to ensure capital matches your true psychological comfort and math constraints.',
    icon: Scale,
  },
];

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-sm">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-base font-semibold text-slate-900">{question}</span>
        {open ? <ChevronDown className="h-5 w-5 text-blue-700" /> : <ChevronRight className="h-5 w-5 text-slate-500" />}
      </button>
      {open && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-700">{answer}</p>}
    </div>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-blue-50/50 text-slate-900">
      <motion.section
        initial="hidden"
        animate="show"
        variants={sectionVariants}
        className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8"
      >
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-blue-200/80 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-800">
            Flat Fee Architecture • SEBI Registered (RIA) • 100% Fiduciary Alignment
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Achieve True Financial Freedom with India&apos;s Trusted Fee-Only Advisor
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
            Zero product commissions, zero hidden conflicts, and full strategic clarity tailored to your long-term wealth outcomes.
          </p>
          <div className="mt-8 flex flex-row items-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Book a Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Explore Full Background &amp; Journey
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-blue-200/60 via-cyan-100/60 to-slate-200/50 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-900 p-8 shadow-2xl">
            <div className="aspect-[4/5] rounded-[1.5rem] border border-white/20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_40%),linear-gradient(160deg,#0f172a,#1e3a8a_55%,#1e293b)]" />
            <p className="mt-5 text-sm text-slate-300">Executive Portrait Placeholder</p>
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={sectionVariants} className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-slate-200/40 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-serif text-3xl font-bold text-slate-950">An Uncompromising Commitment to Your Wealth</h2>
          </div>
          <p className="text-base leading-relaxed text-slate-700">
            Sujan Singh is a SEBI-Registered Investment Adviser (RIA) who holds a Post Graduate Program in Investment Advisory from NISM. Backed by nearly a decade of experience across personal finance architecture and asset stewardship, he has pioneered large-scale financial literacy programs nationwide, equipping thousands of corporate professionals, families, and institutional personnel with data-driven financial clarity.
          </p>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants} className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-8 text-slate-100">
          <h3 className="font-serif text-2xl font-bold">Where Financial Planning Meets Absolute Fiduciary Integrity.</h3>
          <p className="mt-3 max-w-5xl text-slate-300">
            We operate under the gold standard of financial management: no hidden kickbacks, no product distribution agreements, and zero underlying conflicts. Our advice is singularly focused on defending your downside and compounding your legacy.
          </p>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={sectionVariants} className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="font-serif text-3xl font-bold text-slate-950">The 6 Pillars of Personal Financial Architecture</h2>
          <Link href="/services" className="hidden items-center text-sm font-semibold text-blue-800 hover:text-blue-600 md:inline-flex">
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                whileHover={{ y: -4 }}
                key={pillar.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-lg"
              >
                <Icon className="mb-4 h-7 w-7 text-blue-700" />
                <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{pillar.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants} className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
          <h3 className="font-serif text-2xl font-bold text-slate-950">Ongoing Wealth Management Service</h3>
          <p className="mt-3 text-slate-700">
            Continuous, data-driven strategy reviews, macro portfolio alignment adjustments, and active rebalancing parameters for established plans.
          </p>
        </article>
        <article className="rounded-3xl border border-slate-200/80 bg-slate-900 p-8 text-slate-100 shadow-lg">
          <h3 className="font-serif text-2xl font-bold">Fundamental Stock Advisory Service</h3>
          <p className="mt-3 text-slate-300">
            Zero-speculation direct equity exposure built around high-moat, long-term businesses through strict fundamental balance-sheet analysis.
          </p>
        </article>
      </motion.section>

      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants} className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <HelpCircle className="h-6 w-6 text-blue-700" />
          <h2 className="font-serif text-3xl font-bold text-slate-950">Executive FAQ Panel</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              question={item.q}
              answer={item.a}
              open={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
            />
          ))}
        </div>
        <Link href="/faqs" className="mt-6 inline-flex items-center text-sm font-semibold text-blue-800 hover:text-blue-600">
          Access Complete FAQ Engine <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.section>

      <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={sectionVariants} className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-900">Statutory Disclosure</p>
          <p className="mt-2 text-base text-slate-800">
            SEBI Registered Investment Adviser (RIA): <span className="font-bold">INA000020864</span>
          </p>
          <Link href="/disclosures" className="mt-4 inline-flex items-center font-semibold text-blue-800 hover:text-blue-600">
            View Full Disclosure Portal <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
