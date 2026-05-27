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
    label: 'Fees & Engagement',
    icon: CreditCard,
    items: [
      { question: 'How much do we charge?', answer: 'We charge a fixed fee that is affordable for all clients, based on the Assets Under Advisory (AUA) of each individual. A fixed fee means a flat charge for our advisory services, determined by the total assets advised under our guidance.' },
      { question: 'What is your annual fee?', answer: 'First year: Rs. 13,000. Renewal: Rs. 8,000/year. The renewal fee baseline increases by Rs. 1,000 every 2 years.' },
      { question: 'Is the fee per person or per couple?', answer: 'The fee covers the entire family unit (individual or couple), with absolutely no extra charge.' },
      { question: 'Why is your fee so affordable?', answer: 'We believe unbiased advice should be accessible to everyone. Our flat-fee model ensures absolute transparency and fairness.' },
      { question: 'Do you offer discounts?', answer: 'No. Our fee structure is already fair, transparent, and completely equal for all clients.' },
      { question: 'Do I need to renew every year?', answer: 'Yes. Renewal ensures ongoing portfolio reviews, continuous plan updates, and year-round dedicated support.' },
      { question: 'Can I renew after 2–3 years?', answer: 'Yes, but it will be treated as a fresh onboarding cycle with the standard first-year fee applicable.' },
      { question: 'Why should I pay for financial advice when there is so much free content online?', answer: 'Price is what you pay. Value is what you get. When you pay for professional, SEBI-registered advice, you invest in personalized guidance, strict accountability, and long-term clarity tailored specifically to your goals, risks, and life stage.' },
      { question: 'Why should I hire a financial advisor when I can manage my finances on my own?', answer: 'A financial advisor provides expert, unbiased guidance, helping you make better financial choices. They prevent costly mistakes, keep you focused on long-term goals, and save you time, stress, and money by simplifying complex financial options.' },
    ],
  },
  {
    key: 'services',
    label: 'Services & Process',
    icon: Layers,
    items: [
      { question: 'Do you provide stock recommendations?', answer: 'Yes, based strictly on your long-term goals, risk profile, and SEBI guidelines.' },
      { question: 'Do you review existing investments?', answer: 'Absolutely. Reviewing, auditing, and optimizing your current baseline portfolio is an integral part of our onboarding process.' },
      { question: 'Do you advise on real estate and gold?', answer: 'Yes, we offer unbiased, strategic guidance on real estate as part of your financial plan. We help you decide whether to buy, sell, or hold a property, ensuring every decision supports your long-term goals. Please note: We do not participate in real estate transactions, asset matching, or brokerage services.' },
      { question: 'Do you advise on new or alternative products?', answer: 'Only if they fit your goals, risk profile, and comply with SEBI regulations. We strictly avoid speculative or unregulated products.' },
      { question: 'Do your services include recommendations on commodities like gold or silver?', answer: 'Yes, we provide strategic, unbiased advice on gold and silver as part of your overall asset allocation. As a SEBI-registered investment adviser, we do not promote specific products or earn any commissions. Our guidance is always in your best interest.' },
      { question: 'Is my existing investment portfolio reviewed during the financial planning process?', answer: 'Yes, reviewing your current portfolio is an important part of our process. We analyze performance, diversification, and suitability and suggest structural adjustments to ensure your investments align perfectly with your financial goals.' },
      { question: 'What do I get with the renewal service after the first year?', answer: 'Renewal grants you access to a comprehensive review of your financial roadmap every six months, ongoing email and communication support for all your active financial queries, and timely adjustments based on changes in your goals, income, or shifting market conditions.' },
    ],
  },
  {
    key: 'planning',
    label: 'Planning & Support',
    icon: Sliders,
    items: [
      { question: 'What all do you cover in the financial plan?', answer: 'We cover complete cash flow structures, insurance engineering, tax optimization, and asset mapping. Refer to our specialized Financial Planning documentation for deep-dive links.' },
      { question: 'How long will it take to get my plan?', answer: 'Approximately 7–10 working days after receiving all your required documentation and financial details.' },
      { question: 'Do you offer support after delivering the plan?', answer: 'Yes. You receive 12 full months of comprehensive support, including a half-yearly formal review and unlimited query management.' },
      { question: 'How often can I reach out?', answer: 'Anytime. There is no artificial limit on questions regarding your financial decisions.' },
      { question: 'How quickly do you respond?', answer: 'Within 24 hours on active working days, with expedited speeds for high-priority or urgent matters.' },
      { question: 'What if my life situation changes?', answer: 'We update your strategy as your life and milestones evolve, at no extra cost during your active subscription year.' },
      { question: 'Where should I start if my finances are currently unstructured or unclear?', answer: 'You are not alone. Financial clarity starts with small, focused steps. We help you organize your finances, prioritize your goals, and create a clear action plan that works for your life. Start where you are. Use what you have. Do what you can.' },
    ],
  },
  {
    key: 'meetings',
    label: 'Meetings & Communication',
    icon: HelpCircle,
    items: [
      { question: 'Who will be my advisor?', answer: 'Sujan Singh, SEBI-Registered Investment Adviser (RIA).' },
      { question: 'Do you provide home or office visits?', answer: 'We mainly serve clients online via secure video platforms. Digital consultations ensure operational efficiency, though structured in-person meetings are available in Delhi/NCR with a prior appointment.' },
      { question: 'Which languages do you support?', answer: 'Professional fluencies in both English and Hindi.' },
      { question: 'How will we stay in touch during the engagement?', answer: 'Email, telephone, WhatsApp business channels, and scheduled video conferences optimized to your preference.' },
    ],
  },
  {
    key: 'misc',
    label: 'Miscellaneous FAQs',
    icon: ShieldAlert,
    items: [
      { question: 'Who might not be the right fit for your services?', answer: 'Our services may not suit those who want short-term stock tips or active intraday/speculative trading advice, expect us to distribute products like direct insurance or specific mutual funds, prefer commission-based entry points or immediate quick-fix solutions, are unwilling to adhere to a formal structured data-gathering process, or are uncomfortable sharing baseline financial details transparently.' },
      { question: 'Can I connect with an existing client for feedback?', answer: 'We maintain strict customer confidentiality in compliance with SEBI privacy guidelines and never reveal client identities. However, you are welcome to refer to our verified testimonials and public case studies on our portal.' },
      { question: 'Do you recommend any specific platforms for investments?', answer: 'As a SEBI-registered advisor, we do not sell specific financial instruments or accept backend commission kickbacks. We suggest neutral, highly secure platforms that support pure, direct, and zero-commission investing.' },
      { question: 'Is income tax filing included in your services?', answer: 'No, we do not file retrospective income tax returns (ITR). However, we actively guide you with forward-looking tax-saving structures and investment strategies as a core pillar of your financial plan.' },
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100/70 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumb />
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 backdrop-blur"
        >
          <h1 className="font-serif text-4xl font-bold text-slate-950 sm:text-5xl">Frequently Asked Questions (FAQs)</h1>
          <p className="mt-4 max-w-3xl text-slate-700 text-lg leading-relaxed">
            Transparent insights into our fiduciary fee structure, structural advisory process, and communication guidelines.
          </p>
        </motion.section>

        <section className="mt-8">
          <div className="flex flex-wrap gap-3">
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
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? 'border-blue-400 bg-blue-50 text-blue-800'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {currentCategory.items.map((item, index) => {
            const id = `${currentCategory.key}-${index}`;
            const isOpen = openItem === id;
            return (
              <motion.article
                key={id}
                layout
                className={`rounded-2xl border bg-white/90 p-5 shadow-sm transition ${
                  isOpen ? 'border-blue-300 shadow-blue-100/60' : 'border-slate-200/80'
                }`}
              >
                <button
                  onClick={() => setOpenItem(isOpen ? null : id)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <h3 className="text-base font-semibold leading-relaxed text-slate-900">{item.question}</h3>
                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-700' : ''
                    }`}
                  />
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
                      <p className="pt-4 text-sm leading-relaxed text-slate-700">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </section>
      </div>
    </div>
  );
}
