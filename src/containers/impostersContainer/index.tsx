'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  MessageSquareWarning,
  CircleDollarSign,
  Lock,
  ExternalLink,
} from 'lucide-react';
import PageSectionLayout from '@/components/layout/pageSectionLayout';
import Button from '@/components/ui/button';
import { containerVariants, itemVariants } from '@/lib/animations';

const vectors = [
  {
    title: 'Digital Cloning',
    text: 'Fabricating unauthorized profiles across Telegram, WhatsApp, or X using copied credentials.',
    icon: Smartphone,
  },
  {
    title: 'Phantom Guarantees',
    text: 'Displaying doctored trade logs and guaranteeing risk-free returns that are mathematically impossible.',
    icon: TrendingUp,
  },
  {
    title: 'Direct Solicitation',
    text: 'Reaching out uninvited via direct messaging, acting as a credentialed representative.',
    icon: MessageSquareWarning,
  },
  {
    title: 'Capital Interception',
    text: 'Requesting cash transfers to personal accounts under the guise of an advisory fee.',
    icon: CircleDollarSign,
  },
];

const legalMandates = [
  {
    title: 'Active SEBI Registration',
    desc: 'The adviser must possess a valid registration verifiable on the SEBI portal.',
  },
  {
    title: 'Bilateral Agreement',
    desc: 'A formal Advisory Agreement is mandatory before any fees can be collected.',
  },
  {
    title: 'Fiduciary Risk Profiling',
    desc: 'A granular suitability assessment must justify any recommended portfolio strategy.',
  },
  {
    title: 'Statutory Fee Caps',
    desc: 'Capped at flat ₹1.25 Lakh per annum, or 2.5% of AUA. Profit-sharing is illegal.',
  },
];

const redFlags = [
  {
    title: 'Direct Asset Control',
    desc: 'Asking to route investment capital directly into their bank accounts.',
  },
  {
    title: 'Guaranteed Returns',
    desc: 'Promising absolute capital protection or fixed market returns.',
  },
  {
    title: 'Account Credentials',
    desc: 'Requesting transactional credentials or demanding a Power of Attorney (POA).',
  },
  {
    title: 'Lack of Contract',
    desc: 'Operating solely over chat without executing a legally binding agreement.',
  },
];

export default function ImpostersPage() {
  return (
    <PageSectionLayout
      fullWidthContent={
        /* Security Covenant & CTA - Rich Ink Dark Mode */
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-32 relative overflow-hidden bg-slate-900 py-24 md:py-32"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,1),rgba(15,23,42,0.6)_70%)]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

              <motion.div variants={itemVariants} className="md:col-span-6">
                <span className="block text-xs uppercase tracking-[0.2em] text-red-400 font-semibold mb-4">
                  Fiduciary Covenant
                </span>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight text-white mb-6">
                  Structural Payment Protocols
                </h2>
                <p className="text-slate-300 leading-relaxed mb-8">
                  We operate under strict financial guardrails. We never hold client capital. Authorized billing is exclusively conducted via formal invoices sent directly from our verified domain.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50">
                    <p className="font-bold text-white mb-2">Separate Accounts</p>
                    <p className="text-slate-400 text-xs leading-relaxed">Your capital stays exclusively in your personal bank and demat accounts. We never solicit execution credentials.</p>
                  </div>
                  <div className="p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50">
                    <p className="font-bold text-white mb-2">Verified Billing</p>
                    <p className="text-slate-400 text-xs leading-relaxed">Verification of alphanumeric account routing is mandatory before any retainer remittance is processed.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="md:col-span-6 md:pl-10 md:border-l border-slate-700/50">
                <span className="block text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
                  Action Mandate
                </span>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight text-white mb-6">
                  Stop &amp; Verify Immediately
                </h2>
                <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                  If you are contacted by any WhatsApp group, Telegram channel, or social profile offering unverified investment plans, pause and reach out immediately to our official desk.
                </p>

                <div className="bg-white/5 backdrop-blur-md p-8 border border-slate-600/30">
                  <Link href="/contact" passHref>
                    <Button variant="primary" size="lg" className="w-full rounded-none px-8 py-4 font-semibold tracking-wide border border-white bg-white text-slate-900 hover:bg-slate-200 transition-colors">
                      Contact Official Desk <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                  <a
                    href="https://www.sebi.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                  >
                    Verify SEBI Registry <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      }
    >
      {/* Editorial Hero */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start"
      >
        <motion.div variants={itemVariants} className="md:col-span-8">
          <span className="block text-xs uppercase tracking-[0.2em] text-red-700 font-semibold mb-6 flex items-center gap-2">
            <ShieldAlert className="h-4 w-4" /> Fiduciary Security Directive
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-slate-900 mb-8">
            Protect Your Capital <br />From Impersonation.
          </h1>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mb-10">
            Digital safety protocols to verify regulatory authenticity, identify fraudulent channels, and shield your wealth from malicious actors impersonating Sujan Singh.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-4 relative mt-12 md:mt-0">
          {/* Asymmetrical offset credential block */}
          <div className="relative z-10 bg-white p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-red-200/50 md:-ml-8 md:mt-16">
            <span className="block text-xs uppercase tracking-[0.2em] text-red-600 font-semibold mb-4">
              Urgent Mandate
            </span>
            <p className="font-serif text-xl leading-snug text-slate-900 mb-6 italic">
              &quot;We do not operate Telegram channels, nor do we ever ask for direct capital deposits.&quot;
            </p>
            <div className="pt-6 border-t border-red-100 flex items-center gap-3">
              <Lock className="w-5 h-5 text-red-700" />
              <p className="font-bold text-slate-900 text-sm">Security Verification</p>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-3/4 h-[120%] bg-red-100/40 -z-10 translate-x-4 -translate-y-8 mix-blend-multiply" />
        </motion.div>
      </motion.div>

      {/* Threat Vectors - Asymmetrical Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-32 md:mt-48"
      >
        <div className="mb-16 md:mb-24">
          <span className="block text-xs uppercase tracking-[0.2em] text-red-700 font-semibold mb-4">
            Execution Vectors
          </span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-slate-900">
            Identified Fraud Modalities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {vectors.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="bg-white p-8 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-stone-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 group"
              >
                <div className="h-10 w-10 mb-6 flex items-center justify-center bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
                  <Icon className="h-5 w-5 text-red-700" />
                </div>
                <h3 className="font-serif tracking-tight text-slate-900 text-xl mb-3 leading-snug">{item.title}</h3>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Legal Mandates vs Red Flags - Side by Side Asymmetry */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
      >
        {/* Trust Panel */}
        <motion.div variants={itemVariants} className="lg:col-span-6 bg-white p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-stone-100">
          <div className="flex items-center gap-3 mb-10">
            <ShieldCheck className="h-6 w-6 text-blue-700" />
            <h2 className="font-serif text-3xl font-bold text-slate-900">Official RIA Protocols</h2>
          </div>
          <div className="relative border-l border-slate-200 ml-3 space-y-10 pb-4">
            {legalMandates.map((item, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-700 ring-4 ring-white" />
                <h4 className="font-sans font-bold text-base text-slate-900 leading-snug mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Threat Panel */}
        <motion.div variants={itemVariants} className="lg:col-span-6 bg-rose-50/50 p-8 md:p-12 border border-red-100/50 relative">
          <div className="absolute top-0 right-0 h-1 w-1/3 bg-red-600" />
          <div className="flex items-center gap-3 mb-10">
            <ShieldAlert className="h-6 w-6 text-red-600" />
            <h2 className="font-serif text-3xl font-bold text-slate-900">Critical Red Flags</h2>
          </div>
          <div className="relative border-l border-red-200 ml-3 space-y-10 pb-4">
            {redFlags.map((item, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-red-600 ring-4 ring-rose-50" />
                <h4 className="font-sans font-bold text-base text-slate-900 leading-snug mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </PageSectionLayout>
  );
}
