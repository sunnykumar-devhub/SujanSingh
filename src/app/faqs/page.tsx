'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronDown,
  CreditCard,
  Layers,
  Sliders,
  HelpCircle,
  ShieldAlert,
  FileCheck,
  BadgeCheck,
  Award,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import PageSectionLayout from '@/components/layout/PageSectionLayout';
import { containerVariants, itemVariants } from '@/lib/animations';

type FaqItem = {
  question: string;
  answer: string;
};

type Category = {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: FaqItem[];
};

const categories: Category[] = [
  {
    key: 'fees',
    label: 'Capital & Compensation',
    icon: CreditCard,
    items: [
      {
        question: 'How is the advisory fee structured?',
        answer: 'We operate on a strict, fixed-fee methodology. The fee is determined transparently by your Total Assets Under Advisory (AUA), ensuring our compensation is completely decoupled from product distributions.',
      },
      {
        question: 'What is the precise annual retainer?',
        answer: 'Initial structural onboarding is Rs. 13,000. The annual ongoing retainer is Rs. 8,000. Fees are non-negotiable and strictly uniform.',
      },
      {
        question: 'Does the fee apply individually or per household?',
        answer: 'Our fiduciary mandate covers the entire household structure. There are zero supplementary charges for spouses or immediate dependents.',
      },
      {
        question: 'Why is the fee structure significantly below industry averages?',
        answer: 'Integrity should not be cost-prohibitive. We engineer a flat-fee architecture to guarantee absolute objectivity, removing the percentage-of-AUM drag commonly charged by wealth managers.',
      },
      {
        question: 'Are discretionary discounts available?',
        answer: 'No. To maintain fiduciary equality, our fee schedule is non-negotiable and strictly uniform across all client tiers.',
      },
      {
        question: 'Is annual renewal a requisite?',
        answer: 'Yes. Wealth preservation requires continuous macro adjustments. The renewal ensures systematic portfolio audits and year-round strategic counsel.',
      },
      {
        question: 'May I pause and renew after multiple years?',
        answer: 'Yes, however returning after a multi-year lapse requires total structural recalibration, resulting in the application of the initial first-year onboarding fee.',
      },
      {
        question: 'Why compensate an adviser when digital content is abundant?',
        answer: 'Information is not execution. When you retain a SEBI-registered adviser, you acquire bespoke capital structuring, emotional insulation during drawdowns, and mathematically rigorous accountability.',
      },
    ],
  },
  {
    key: 'scope',
    label: 'Services & Advisory Scope',
    icon: Layers,
    items: [
      {
        question: 'Do you provide direct stock recommendations?',
        answer: 'Yes. We execute direct equity strategies governed strictly by your risk parameters and SEBI compliance guidelines.',
      },
      {
        question: 'Are existing legacy portfolios audited?',
        answer: 'Absolutely. The foundational step of our engagement is a granular audit of your legacy assets to eliminate systemic inefficiencies, high expense ratios, and duplicate layers.',
      },
      {
        question: 'Do you advise on real estate, gold, and alternative assets?',
        answer: 'Yes. We evaluate real estate, gold, and other commodities strictly as asset classes within your broader liquidity matrix. Note: We hold no brokerage licenses and do not execute property transactions.',
      },
      {
        question: 'Do you recommend new or alternative products?',
        answer: 'Only if empirically justified by your risk capacity. We stringently avoid unregulated vehicles and speculative momentum trends.',
      },
      {
        question: 'What is included in comprehensive financial planning?',
        answer: 'The initial blueprint includes cash-flow optimization, liability insulation, tax-efficiency mapping, and long-term asset allocation models.',
      },
      {
        question: 'Do you provide tax-saving strategies?',
        answer: 'Yes, tax-saving strategies are a core part of the comprehensive financial planning and advisory process, structured to maximize net compounding efficiency legally.',
      },
    ],
  },
  {
    key: 'planning',
    label: 'Planning & Support',
    icon: Sliders,
    items: [
      {
        question: 'What is the delivery timeline for the financial plan?',
        answer: 'Delivery of the initial comprehensive financial blueprint requires 7–10 operational working days following the receipt of your complete foundational data.',
      },
      {
        question: 'What is the post-plan support duration?',
        answer: 'Your retainer includes 12 months of continuous advisory support to ensure flawless execution of the blueprint.',
      },
      {
        question: 'Are there constraints on query frequency?',
        answer: 'No. We encourage unlimited queries and continuous dialogue to prevent unilateral financial errors.',
      },
      {
        question: 'What are the standard response latencies?',
        answer: 'Standard inquiries are resolved within 24 operational working hours. Critical liquidity or market events receive expedited priority.',
      },
      {
        question: 'How are significant life transitions handled?',
        answer: 'We dynamically update and recalibrate your roadmap at zero additional cost during your active retainer year.',
      },
    ],
  },
  {
    key: 'meetings',
    label: 'Meetings & Communication',
    icon: HelpCircle,
    items: [
      {
        question: 'Who acts as the primary fiduciary advisor?',
        answer: 'Sujan Singh, Principal SEBI-Registered Investment Adviser (RIA), personally engineers and audits every portfolio and client blueprint.',
      },
      {
        question: 'Which support languages are available?',
        answer: 'We execute professional advisory in both English and Hindi.',
      },
      {
        question: 'What are the primary communication channels?',
        answer: 'We utilize secure email, dedicated telephone lines, business WhatsApp messaging, and encrypted video conferencing.',
      },
      {
        question: 'Is in-person consultation availability possible?',
        answer: 'Yes. Our practice is optimized for secure digital infrastructure. However, bespoke in-person consultations are available at our Delhi/NCR headquarters by appointment.',
      },
    ],
  },
  {
    key: 'eligibility',
    label: 'Eligibility & Suitability',
    icon: ShieldAlert,
    items: [
      {
        question: 'Who is NOT suitable for your advisory services?',
        answer: 'We decline engagements with individuals seeking speculative stock tips, commission-based insurance sales, intraday momentum trading, or those unwilling to undergo rigorous data transparency.',
      },
      {
        question: 'What is the required expectation alignment?',
        answer: 'Clients must understand we do not offer guaranteed returns or fast wealth multipliers. Our practice is strictly fee-only, long-term, and suitability-driven.',
      },
      {
        question: 'Is structured data sharing a mandatory requirement?',
        answer: 'Yes. We require comprehensive and transparent data sharing regarding assets, liabilities, and income tracks to construct a compliant and accurate financial plan.',
      },
    ],
  },
  {
    key: 'policies',
    label: 'Miscellaneous & Policies',
    icon: FileCheck,
    items: [
      {
        question: 'How is the confidentiality of client data maintained?',
        answer: 'All submitted information is strictly handled under SEBI-mandated client confidentiality regulations and secure encrypted databases.',
      },
      {
        question: 'What is the testimonial privacy policy?',
        answer: 'Under strict SEBI compliance mandates, we maintain absolute anonymity for our active clients. We do not publish promotional testimonials.',
      },
      {
        question: 'How is platform neutrality ensured?',
        answer: 'We accept zero commissions and maintain no partnerships with asset management companies or brokerages, guaranteeing absolute execution neutrality.',
      },
      {
        question: 'Are your practices aligned with SEBI compliance rules?',
        answer: 'Yes. Sujan Singh is an individual RIA fully audited and compliant with the SEBI (Investment Advisers) Regulations, 1993.',
      },
    ],
  },
];

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const currentCategory = useMemo(
    () => categories.find((c) => c.key === activeCategory) ?? categories[0],
    [activeCategory]
  );

  return (
    <PageSectionLayout
      fullWidthContent={
        <>
          {/* ─── FINAL TRUST SECTION ─── */}
          <section className="bg-slate-900 py-24 relative overflow-hidden border-t border-slate-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_50%)]" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
                Clarity Protects Capital
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Our advisory framework is designed to ensure transparency, structured decision-making, and long-term fiduciary discipline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <button className="inline-flex items-center gap-3 bg-white text-slate-900 text-xs tracking-wider uppercase font-bold px-8 py-4 hover:bg-stone-250 transition-colors w-full sm:w-auto justify-center">
                    Contact Adviser
                    <ArrowRight size={14} />
                  </button>
                </Link>
                <Link href="/contact" passHref>
                  <button className="inline-flex items-center gap-3 border border-slate-700 text-white text-xs tracking-wider uppercase font-bold px-8 py-4 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
                    Book Consultation
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </>
      }
    >
      {/* ─── SECTION 1: HERO / FAQ INTRO SECTION ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end"
      >
        <motion.div variants={itemVariants} className="md:col-span-8">
          <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-6">
            FAQ Knowledge System
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-slate-900 mb-6">
            Operational Clarity <br />&amp; Fiduciary Resolutions.
          </h1>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl">
            A structured knowledge base covering advisory fees, services, processes, communication standards, and fiduciary boundaries under SEBI regulations.
          </p>

          {/* Trust Tags */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 border-t border-b border-stone-200/60 py-4">
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Fee-Only Advisory</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">RIA Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Zero Commissions</span>
            </div>
          </div>
        </motion.div>

        {/* Sidebar Quote */}
        <motion.div variants={itemVariants} className="md:col-span-4 hidden md:block border-l border-slate-300 pl-8 pb-4">
          <p className="font-serif text-xl italic text-slate-900 mb-4">
            &quot;Clarity precedes execution. Ambiguity destroys capital.&quot;
          </p>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">The Fiduciary Mandate</span>
        </motion.div>
      </motion.div>

      {/* ─── SECTION 2: FAQ CATEGORY NAVIGATION ─── */}
      <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Navigation Tabs */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-4 sticky top-32"
        >
          <div className="bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-stone-100">
            <h3 className="font-serif text-2xl text-slate-900 mb-8">Inquiry Sectors</h3>
            <div className="flex flex-col gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                const active = activeCategory === category.key;
                return (
                  <button
                    key={category.key}
                    onClick={() => {
                      setActiveCategory(category.key);
                      setOpenItem(null);
                    }}
                    className={`flex items-center gap-4 w-full text-left px-4 py-4 transition-all duration-300 border-l-2 ${
                      active
                        ? 'border-blue-700 bg-blue-50/50 text-blue-900'
                        : 'border-transparent text-slate-500 hover:bg-stone-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${active ? 'text-blue-700' : 'text-slate-400'}`} />
                    <span className="font-semibold tracking-wide text-sm">{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.aside>

        {/* Right Column: Accordion Content */}
        <motion.section
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-8"
        >
          <div className="mb-10">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-slate-900">{currentCategory.label}</h2>
            <div className="h-px w-full bg-stone-200 mt-6" />
          </div>

          <div className="space-y-6">
            {currentCategory.items.map((item, index) => {
              const id = `${currentCategory.key}-${index}`;
              const isOpen = openItem === id;
              return (
                <motion.article
                  key={id}
                  layout
                  className={`transition-all duration-500 border-b border-stone-200 pb-6 ${
                    isOpen ? '' : 'hover:border-slate-400'
                  }`}
                >
                  <button
                    onClick={() => setOpenItem(isOpen ? null : id)}
                    className="flex w-full items-start justify-between gap-6 text-left group"
                  >
                    <h3 className={`font-serif text-xl md:text-2xl leading-snug transition-colors duration-300 ${isOpen ? 'text-blue-900' : 'text-slate-900 group-hover:text-blue-800'}`}>
                      {item.question}
                    </h3>
                    <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-300 text-slate-400 group-hover:border-blue-400 group-hover:text-blue-600'}`}>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
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
                        <div className="pt-6 pr-8">
                          <p className="text-base md:text-lg leading-relaxed text-slate-700">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </motion.section>
      </div>
    </PageSectionLayout>
  );
}
