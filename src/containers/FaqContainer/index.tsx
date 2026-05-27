'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { containerVariants, itemVariants } from '@/lib/animations';

/**
 * Simple accordion component used inside the FAQ page.
 */
function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200/50 pb-4 mb-4">
      <button
        type="button"
        className="w-full flex items-center justify-between text-left text-slate-800 hover:text-blue-600 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-lg font-medium">{question}</span>
        {open ? (
          <ChevronDown className="w-5 h-5" />
        ) : (
          <ChevronRight className="w-5 h-5" />
        )}
      </button>
      {open && (
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="show"
          className="mt-2 text-slate-600"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}

export default function FaqContainer() {
  const faqs = [
    {
      q: 'What is your fee structure?',
      a: 'We operate on a transparent flat‑fee model – no commissions, no hidden charges. Fees are disclosed up‑front and charged annually.',
    },
    {
      q: 'How do you ensure fiduciary independence?',
      a: 'As a SEBI‑registered RIA we are prohibited from earning commissions on product sales. All recommendations are purely client‑first.',
    },
    {
      q: 'What is the typical onboarding process?',
      a: 'We begin with a discovery call, followed by a risk‑profiling questionnaire, then a bespoke wealth‑strategy presentation.',
    },
    {
      q: 'Do you serve corporate executives?',
      a: 'Yes – we have extensive experience advising senior executives, board members, and family offices across India.',
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 text-slate-900">
      <Breadcrumb />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-4 py-20"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-8">
          Frequently Asked Questions
        </motion.h1>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <Accordion key={i} question={f.q} answer={f.a} />
          ))}
        </div>
        <motion.div variants={itemVariants} className="flex justify-center mt-12">
          <Link href="/contact" passHref>
            <Button variant="primary" size="lg" className="shadow-md font-bold">
              Get Your Free Consultation <ArrowRight size={16} className="ml-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
