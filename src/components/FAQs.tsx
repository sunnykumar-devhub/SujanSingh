'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "What is your annual fee?",
    answer: "Our fee structure is flat and transparent, based on the complexity of your financial situation rather than your Assets Under Management (AUM). We charge a one-time fee for our initial comprehensive advisory services, as well as annual renewal charges."
  },
  {
    question: "Do you offer discounts?",
    answer: "We do not offer arbitrary discounts. Our flat fee ensures that every client receives the same high-quality fiduciary advice without cross-subsidization."
  },
  {
    question: "Why should I pay for financial advice when there's so much free content online?",
    answer: "Free content provides generic information, not personalized advice. A fiduciary advisor looks at your specific situation, goals, risk tolerance, and tax implications to build a cohesive plan that generic content cannot address."
  },
  {
    question: "Do you review existing investments?",
    answer: "Yes, reviewing and restructuring existing investments is a core part of our initial financial planning process."
  },
  {
    question: "What do I get with the renewal service after the first year?",
    answer: "The renewal service includes regular portfolio reviews, strategic modifications based on changing life situations or market conditions, and ongoing access to professional guidance to keep you on track."
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-neutral-dark text-white relative overflow-hidden">
      {/* Background styling for the dark section */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-blue-light via-neutral-dark to-neutral-dark pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            <span className="text-accent-blue mr-2">?</span> Frequently Asked Questions (FAQs)
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-white/10 bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-medium text-lg pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-accent-blue flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-white/5 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-accent-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Explore More FAQs
          </button>
        </div>
      </div>
    </section>
  );
}
