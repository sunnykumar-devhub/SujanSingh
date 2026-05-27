'use client';
import { motion } from 'framer-motion';
import { Target, Shield, Umbrella, PiggyBank, Receipt, LineChart, CheckCircle2, ArrowRight } from 'lucide-react';

const PLANNING_SERVICES = [
  {
    icon: Umbrella,
    title: 'Retirement Planning',
    points: ['Estimate retirement needs.', 'Create a diversified investment plan.']
  },
  {
    icon: Target,
    title: 'Goal-Based Planning',
    points: ['Set clear, achievable financial goals.', 'Create a tailored strategy for each goal.']
  },
  {
    icon: Shield,
    title: 'Insurance Planning',
    points: ['Choose the right life insurance plan.', 'Cover health-related risks.']
  },
  {
    icon: PiggyBank,
    title: 'Emergency Fund',
    points: ['Build a safety net for unexpected expenses.', 'Preserve long-term investment plans.']
  },
  {
    icon: Receipt,
    title: 'Tax Planning',
    points: ['Maximize savings through tax-efficient investments.', 'Leverage available tax strategies.']
  },
  {
    icon: LineChart,
    title: 'Risk Profiling',
    points: ['Assess your financial risk capacity.', 'Create a portfolio tailored to your risk tolerance.']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent-blue tracking-widest uppercase mb-3">Our Services</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-6">
            Personalized Financial Planning
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a complete, personalized, and unbiased approach to help you achieve financial freedom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {PLANNING_SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-50 text-accent-blue rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4">{service.title}</h3>
              <ul className="space-y-3 mb-6">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 mr-2 flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center text-accent-blue font-medium text-sm hover:text-brand-blue transition-colors">
                Explore More <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Wealth Management Service */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-12 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
               <span className="text-accent-blue mr-3 text-3xl">◆</span> Wealth Management Service
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed text-lg">
              We provide continuous guidance and reviews to ensure your investments stay aligned with your changing goals and market conditions.
            </p>
            <p className="text-blue-100/80 mb-8 text-sm md:text-base">
              This ongoing wealth management service is for clients who have already completed their financial planning with us and want continuous professional guidance.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-accent-blue mr-3 bg-white rounded-full flex-shrink-0" />
                <span className="font-medium text-white">Regular Portfolio Reviews - Unbiased checks to keep investments aligned.</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-accent-blue mr-3 bg-white rounded-full flex-shrink-0" />
                <span className="font-medium text-white">Strategic Modifications - Adjustments as markets and personal situations change.</span>
              </li>
            </ul>
            <button className="bg-white text-brand-blue px-6 py-3 rounded-lg font-medium hover:bg-bg-light transition-colors duration-200">
              Read More
            </button>
          </div>
        </motion.div>

        {/* Stock Advisory Service */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-bg-light rounded-3xl p-8 md:p-12 border border-gray-100 shadow-md flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4 flex items-center">
                <span className="text-accent-blue mr-3 text-3xl">◆</span> Stock Advisory Service
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Designed for clients who wish to allocate a portion of their investments to equities for long-term growth.
            </p>
            <p className="text-gray-500 mb-8 text-sm md:text-base">
              Our Stock Advisory Service is offered only to clients who have already completed their financial planning with us and wish to allocate a portion of their investments to equities. We focus on fundamentally strong companies and do not provide trading calls.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" />
                <span className="font-medium text-brand-blue">Advise fundamentally strong, long-term stocks.</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" />
                <span className="font-medium text-brand-blue">No trading or speculative calls – only research-based picks.</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" />
                <span className="font-medium text-brand-blue">Portfolio suggestions aligned with your risk profile.</span>
              </li>
            </ul>
            <button className="bg-brand-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-blue-light transition-colors duration-200">
              Read More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
