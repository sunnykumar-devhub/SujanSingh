'use client';
import { motion } from 'framer-motion';
import { Scale, Wallet, FileText, TrendingUp, ShieldCheck, Lightbulb } from 'lucide-react';

const PILLARS = [
  {
    icon: Scale,
    title: 'Unbiased & Client-First',
    description: 'I work for you, not for product companies. Objective advice guaranteed.'
  },
  {
    icon: Wallet,
    title: 'Flat Fee, Full Transparency',
    description: 'Know exactly what you pay and what you get. No hidden charges.'
  },
  {
    icon: FileText,
    title: 'SEBI-Registered & Ethical',
    description: 'Regulated, compliant, and deeply trustworthy financial practice.'
  },
  {
    icon: TrendingUp,
    title: 'Tailored Financial Plans',
    description: 'Strategies designed uniquely around your specific goals and risk profile.'
  },
  {
    icon: ShieldCheck,
    title: 'Complete Financial Guidance',
    description: 'Investments, taxes, insurance, retirement – comprehensive coverage.'
  },
  {
    icon: Lightbulb,
    title: 'Clarity & Confidence',
    description: 'I simplify finance so you can make confident, informed decisions.'
  }
];

export default function WhyChooseMe() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent-blue tracking-widest uppercase mb-3">Why Choose Me</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-6">
            Where Financial Planning Meets True Integrity
          </p>
          <p className="text-lg text-gray-600">
            Empowering You With Clarity, Confidence, and Freedom. We follow the fiduciary gold standard: No commissions. No hidden motives. Just pure, transparent advice for your best interest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-bg-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300 text-accent-blue">
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
