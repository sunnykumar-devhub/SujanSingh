'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronRight,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  MessageSquareWarning,
  CircleDollarSign,
  Lock,
  ExternalLink,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';

const vectors = [
  {
    title: 'Digital Cloning & Impersonation',
    text: 'Fabricating unauthorized profiles and channels across Telegram, WhatsApp, Instagram, or X (Twitter) using copied photos and logos.',
    icon: Smartphone,
    color: 'from-amber-500/10 to-red-500/10 text-red-600',
  },
  {
    title: 'Phantom Metrics & Guarantees',
    text: 'Displaying doctored account screenshots, fake trade logs, and guaranteeing high, risk-free returns that are mathematically impossible.',
    icon: TrendingUp,
    color: 'from-red-500/10 to-rose-500/10 text-red-600',
  },
  {
    title: 'Direct Solicitation (DMs)',
    text: 'Reaching out uninvited via direct messaging or group invites, acting as a credentialed representative or Sujan Singh himself.',
    icon: MessageSquareWarning,
    color: 'from-orange-500/10 to-red-500/10 text-red-600',
  },
  {
    title: 'Capital Interception',
    text: 'Requesting direct cash transfers to personal or unrelated bank accounts under the guise of an exclusive investment pool or advisory fee.',
    icon: CircleDollarSign,
    color: 'from-rose-500/10 to-purple-500/10 text-red-600',
  },
];

const legalMandates = [
  {
    title: 'Active SEBI Registration',
    desc: 'The adviser must possess a valid registration number issued by SEBI, easily verifiable on the official SEBI portal.',
  },
  {
    title: 'Bilateral Agreement',
    desc: 'A formal, signed Investment Advisory Agreement is legally mandatory before any fees can be collected or advice can be issued.',
  },
  {
    title: 'Fiduciary Risk Profiling',
    desc: 'A granular suitability assessment must mathematically justify any recommended asset allocation or portfolio strategy.',
  },
  {
    title: 'Statutory Fee Caps',
    desc: 'Strictly capped at flat ₹1.25 Lakh per annum, or 2.5% of Assets Under Advisory (AUA). Profit-sharing models are illegal.',
  },
];

const redFlags = [
  {
    title: 'Direct Asset Control',
    desc: 'They ask you to route investment capital directly into their bank accounts rather than your own brokerage account.',
  },
  {
    title: 'Guaranteed Returns',
    desc: 'They promise absolute capital protection or fixed/guaranteed market returns under any condition.',
  },
  {
    title: 'Account Credentials',
    desc: 'They request transactional credentials, passwords, or demand a Power of Attorney (POA) to trade on your behalf.',
  },
  {
    title: 'Lack of Fiduciary Contract',
    desc: 'They operate solely over chat groups or social channels without executing a legally binding, signed agreement.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ImpostersPage() {
  return (
    <div className="relative min-h-screen bg-slate-50/60 overflow-hidden pb-24">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-red-200/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-blue-200/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-indigo-200/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <Breadcrumb />

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-red-200/80 bg-white p-8 md:p-12 shadow-premium mb-12"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-transparent rounded-bl-full pointer-events-none" />
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200/60 mb-6">
              <ShieldAlert className="h-3.5 w-3.5" /> Fiduciary Security Directive
            </span>
            <h1 className="font-serif text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Beware of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">Imposters</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
              Digital safety protocols to verify regulatory authenticity, identify fraudulent channels, and shield your wealth from malicious actors impersonating Sujan Singh.
            </p>
          </div>
        </motion.div>

        {/* Dynamic Bento Threat Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {vectors.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_12px_30px_rgba(239,68,68,0.06)]"
              >
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${item.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors duration-200">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 font-medium">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Side-by-Side Trust vs Threat Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Trust Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-premium"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-slate-900">Official RIA Fiduciary Mandates</h2>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">Legally Required Protocols</p>
              </div>
            </div>

            <div className="space-y-6">
              {legalMandates.map((item, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center font-bold text-xs group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-slate-900 leading-snug">{item.title}</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Threat Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-red-100 bg-red-50/20 p-8 shadow-premium"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-2xl bg-red-50 text-red-600 border border-red-100">
                <ShieldAlert className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-slate-900">Critical Red Flags & Indicators</h2>
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mt-0.5">Definite Indicators of Fraud</p>
              </div>
            </div>

            <div className="space-y-6">
              {redFlags.map((item, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-md bg-red-100 text-red-600 border border-red-200 flex items-center justify-center font-bold text-xs group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                    ✕
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-slate-900 leading-snug">{item.title}</h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Security Covenant Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-premium mb-16"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-slate-900 text-white">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">Fiduciary Covenant & Payment Protocols</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                To guarantee maximum integrity, Sujan Singh Advisory strictly operates under static financial guardrails. We do not accept or hold client investment assets, and all authorized billing is conducted solely via formal invoices.
              </p>
            </div>
            <div className="w-full md:w-auto flex-shrink-0">
              <a 
                href="https://www.sebi.gov.in" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 transition"
              >
                Verify SEBI Registry <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-150">
              <h5 className="font-bold text-sm text-slate-900">Separate Accounts</h5>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">We never ask for account credentials or directly manage execution balances. Your capital stays exclusively in your personal bank and demat accounts.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-150">
              <h5 className="font-bold text-sm text-slate-900">No Cash or Pools</h5>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">Any solicitation asking to deposit capital into pool accounts, proprietary tokens, or personal wallets under our name is completely fraudulent.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-150">
              <h5 className="font-bold text-sm text-slate-900">Verified Billing Only</h5>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">Invoices are sent solely from our official email domain. Verification of alphanumeric account routing is mandatory before any remittance.</p>
            </div>
          </div>
        </motion.div>

        {/* Premium Action Banner (CTA) */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-12 text-center shadow-premium"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.12),transparent_40%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.08),transparent_40%)]" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-serif text-3xl font-bold tracking-tight">Stop & Verify Immediately</h3>
            <p className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed">
              If you are contacted by any WhatsApp group, Telegram channel, or social media profile referencing Sujan Singh or offering unverified investment plans, pause and reach out immediately to our official team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-700/30 -translate-y-px active:translate-y-0 transition-all duration-150"
              >
                Contact Official Desk <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

