'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  CreditCard,
  HelpCircle,
  Layers,
  ShieldAlert,
  Sliders,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
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
      { question: 'How is the advisory fee structured?', answer: 'We operate on a strict, fixed-fee methodology. The fee is determined transparently by your Total Assets Under Advisory (AUA), ensuring our compensation is completely decoupled from product distributions.' },
      { question: 'What is the precise annual retainer?', answer: 'Initial structural onboarding: Rs. 13,000. Annual ongoing retainer: Rs. 8,000. The baseline retainer adjusts by Rs. 1,000 every two fiscal cycles to account for inflation.' },
      { question: 'Does the fee apply individually or per household?', answer: 'Our fiduciary mandate covers the entire household structure. There are zero supplementary charges for spouses or immediate dependents.' },
      { question: 'Why is the fee structure significantly below industry averages?', answer: 'Integrity should not be cost-prohibitive. We engineer a flat-fee architecture to guarantee absolute objectivity, removing the punitive percentage-of-AUM drag commonly charged by wealth managers.' },
      { question: 'Are there discretionary discounts available?', answer: 'No. To maintain fiduciary equality, our fee schedule is non-negotiable and strictly uniform across all client tiers.' },
      { question: 'Is annual renewal a requisite?', answer: 'Yes. Wealth preservation requires continuous macro adjustments. The renewal ensures systematic portfolio audits and year-round strategic counsel.' },
      { question: 'May I pause and renew after multiple years?', answer: 'Yes, however returning after a multi-year lapse requires total structural recalibration, resulting in the application of the initial first-year onboarding fee.' },
      { question: 'Why compensate an adviser when digital content is abundant?', answer: 'Information is not execution. When you retain a SEBI-registered adviser, you acquire bespoke capital structuring, emotional insulation during drawdowns, and mathematically rigorous accountability.' },
      { question: 'What prevents me from managing capital autonomously?', answer: 'Autonomy often invites behavioral cognitive biases. We function as your objective structural barrier, preventing impulsive capital destruction and engineering tax-efficient compounding.' },
    ],
  },
  {
    key: 'services',
    label: 'Execution & Method',
    icon: Layers,
    items: [
      { question: 'Does the mandate include equity recommendations?', answer: 'Yes. We execute direct equity strategies governed strictly by your risk parameters and SEBI compliance guidelines.' },
      { question: 'Are existing legacy portfolios audited?', answer: 'Absolutely. The foundational step of our engagement is a granular audit of your legacy assets to eliminate systemic inefficiencies.' },
      { question: 'Is physical real estate analyzed within the framework?', answer: 'Yes. We evaluate real estate purely as an asset class within your broader liquidity matrix. Note: We hold no brokerage licenses and do not execute property transactions.' },
      { question: 'Are alternative or speculative assets modeled?', answer: 'Only if empirically justified by your risk capacity. We stringently avoid unregulated vehicles and speculative momentum trends.' },
      { question: 'Does the advisory cover precious metals?', answer: 'We model gold and silver allocations strictly as anti-inflationary volatility buffers within the broader portfolio architecture.' },
      { question: 'How is the legacy portfolio restructured?', answer: 'We assess cross-asset correlations, expense ratios, and historical volatility, subsequently executing precise tactical shifts to align the portfolio with your target milestones.' },
      { question: 'What ongoing deliverables are included post-renewal?', answer: 'You retain continuous access to our consultation desk, bi-annual comprehensive roadmap audits, and tactical rebalancing directives when macroeconomic conditions shift.' },
    ],
  },
  {
    key: 'planning',
    label: 'Structural Engineering',
    icon: Sliders,
    items: [
      { question: 'What comprises the initial financial blueprint?', answer: 'The blueprint includes cash-flow optimization, liability insulation (insurance), tax-efficiency mapping, and long-term asset allocation models.' },
      { question: 'What is the delivery timeline for the blueprint?', answer: 'Execution requires 7–10 operational days following the receipt of your complete foundational data.' },
      { question: 'Is consultation available after blueprint delivery?', answer: 'Yes. Your retainer includes 12 months of continuous advisory access to ensure flawless execution of the blueprint.' },
      { question: 'Are there constraints on inquiry frequency?', answer: 'No. We encourage continuous dialogue to prevent unilateral financial errors.' },
      { question: 'What are the standard response latencies?', answer: 'Standard inquiries are resolved within 24 operational hours. Critical liquidity or market events receive expedited priority.' },
      { question: 'How are significant life transitions handled?', answer: 'We dynamically recalibrate your roadmap at zero additional cost during your active retainer year.' },
      { question: 'How do we proceed if my current finances are chaotic?', answer: 'Chaos is the prerequisite to order. We begin by organizing fragmented data into a cohesive matrix, allowing us to execute a step-by-step structural consolidation.' },
    ],
  },
  {
    key: 'meetings',
    label: 'Communication Architecture',
    icon: HelpCircle,
    items: [
      { question: 'Who acts as the primary fiduciary?', answer: 'Sujan Singh, Principal SEBI-Registered Investment Adviser (RIA), personally engineers and audits every portfolio.' },
      { question: 'Are physical consultations mandatory?', answer: 'No. Our practice is optimized for secure digital infrastructure. However, bespoke in-person consultations are available at our Delhi/NCR headquarters by formal appointment.' },
      { question: 'Which linguistic modalities are supported?', answer: 'We execute professional advisory in both English and Hindi.' },
      { question: 'What are the primary communication vectors?', answer: 'We utilize secure email, dedicated telephone lines, business messaging, and encrypted video conferencing.' },
    ],
  },
  {
    key: 'misc',
    label: 'Fiduciary Boundaries',
    icon: ShieldAlert,
    items: [
      { question: 'Who is incompatible with this advisory model?', answer: 'We decline engagements with individuals seeking speculative stock tips, commission-based insurance sales, intraday momentum trading, or those unwilling to undergo rigorous data transparency.' },
      { question: 'Can I verify efficacy with existing clients?', answer: 'Under stringent SEBI privacy mandates, we maintain absolute anonymity for our clients. Efficacy can be verified via our public institutional case studies and regulated testimonials.' },
      { question: 'Do you mandate specific execution platforms?', answer: 'No. We prescribe neutral, zero-commission execution infrastructure but remain completely platform-agnostic.' },
      { question: 'Does the retainer cover statutory tax filings?', answer: 'No. We engineer forward-looking tax-mitigation strategies but do not act as statutory accountants for retrospective ITR filing.' },
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
    <main className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans selection:bg-blue-100 pb-24 pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Breadcrumb />
        
        {/* Editorial Hero */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-end"
        >
          <motion.div variants={itemVariants} className="md:col-span-8 pt-4">
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-6">
              Operational Clarity
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-slate-900 mb-6">
              Authoritative <br />Resolutions.
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl">
              Absolute transparency regarding our fiduciary compensation, structural methodology, and execution boundaries.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 hidden md:block border-l border-slate-300 pl-8 pb-4">
             <p className="font-serif text-xl italic text-slate-900 mb-4">
               &quot;Clarity precedes execution. Ambiguity destroys capital.&quot;
             </p>
             <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">The Fiduciary Mandate</span>
          </motion.div>
        </motion.div>

        {/* FAQ Layout - Editorial Asymmetry */}
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
      </div>
    </main>
  );
}
