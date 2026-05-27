'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ShieldAlert,
  ShieldCheck,
  Award,
  BadgeCheck,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  TrendingUp,
  MessageSquareWarning,
  CircleDollarSign,
  FileCheck,
  AlertOctagon,
  ShieldAlert as ShieldAlertIcon,
  HelpCircle,
  FileSpreadsheet,
} from 'lucide-react';
import PageSectionLayout from '@/components/layout/PageSectionLayout';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function ImpostersContainer() {
  return (
    <PageSectionLayout
      fullWidthContent={
        <>
          {/* ─── SECTION 4: CRITICAL RED FLAGS SECTION (Alert Grid) ─── */}
          <section className="bg-stone-50 py-24 border-t border-stone-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="block text-xs uppercase tracking-[0.2em] text-red-600 font-bold mb-4">
                  Tactical Warnings
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
                  Critical Warning Red Flags
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Direct Capital Transfer Requests',
                    desc: 'Any request to transfer investment capital or advisory fees directly to personal bank accounts is a critical fraud red flag.',
                  },
                  {
                    title: 'Guaranteed Return Promises',
                    desc: 'Under strict SEBI individual RIA guidelines, promising assured risk-free compounding is explicitly illegal.',
                  },
                  {
                    title: 'Requesting Login Credentials',
                    desc: 'Fiduciary advisors never demand your personal trading platform keys, passwords, or profile login details.',
                  },
                  {
                    title: 'Advising Without Formal Contracts',
                    desc: 'Statutory compliance requires the mutual execution of a formal SEBI-compliant Advisory Agreement before advisory begins.',
                  },
                  {
                    title: 'WhatsApp or Telegram-Only Channels',
                    desc: 'Imposters utilize unverified text groups. Official advisories communicate solely via corporate domains.',
                  },
                  {
                    title: 'Profit-Sharing Claims',
                    desc: 'We never charge commission cuts, execute dynamic profit-shares, or operate equity trading signals.',
                  },
                ].map((flag, idx) => (
                  <div key={idx} className="bg-white border border-red-200/50 p-8 hover:border-red-400 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertOctagon className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <h3 className="font-serif text-lg text-slate-950 font-bold leading-snug">{flag.title}</h3>
                    </div>
                    <p className="text-slate-650 text-xs leading-relaxed">{flag.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── SECTION 5: STRUCTURAL PAYMENT & SECURITY PROTOCOLS ─── */}
          <section className="bg-white py-24 border-t border-stone-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5">
                  <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
                    Security Architecture
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-6">
                    Structural Payment Protocols
                  </h2>
                  <p className="text-slate-650 text-sm md:text-base leading-relaxed mb-8">
                    To maintain absolute capital insulation, all compliance transitions must go through verified pathways:
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  {[
                    { label: 'Official Invoice-Only Billing', desc: 'Every advisory retainer must be backed by a verified, GST-compliant corporate invoice.' },
                    { label: 'Verified Corporate Domains', desc: 'Fiduciary communication occurs strictly via sujansinghadvisory.com corporate mail servers.' },
                    { label: 'Direct Personal Custody', desc: 'Client funds remain entirely inside your personal trading or banking accounts; we never handle capital.' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-stone-50 border border-stone-200/60 p-6 flex flex-col justify-between hover:border-slate-350 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 flex-shrink-0" />
                        <h4 className="text-sm font-bold text-slate-900">{item.label}</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed pl-7.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ─── SECTION 6: ACTION MANDATE (Stop & Verify) ─── */}
          <section className="bg-slate-900 py-24 relative overflow-hidden border-t border-slate-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_50%)]" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-950 text-red-400 mb-6 border border-red-800">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-tight mb-6">
                Stop &amp; Verify Immediately
              </h2>
              <p className="text-slate-450 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
                If contacted through unofficial WhatsApp groups, Telegram channels, or suspicious social profiles, pause all activity and verify through official communication channels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.sebi.gov.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white text-slate-900 text-xs tracking-wider uppercase font-bold px-8 py-4 hover:bg-stone-250 transition-colors justify-center">
                  Verify SEBI Registry
                  <ArrowRight size={14} />
                </a>
                <Link href="/contact" passHref>
                  <button className="inline-flex items-center gap-3 border border-slate-700 text-white text-xs tracking-wider uppercase font-bold px-8 py-4 hover:bg-white/10 transition-colors justify-center">
                    Contact Official Desk
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* ─── SECTION 7: INVESTOR SAFETY CHECKLIST ─── */}
          <section className="bg-stone-50 py-24 border-t border-stone-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
                  Investor Safety
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
                  Investor Protection Checklist
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  'Cross-check SEBI Individual RIA registry keys.',
                  'Verify official emails end only in @sujansinghadvisory.com.',
                  'Confirm the execution of a formal bilateral agreement before paying.',
                  'Never transfer investment capital to an advisor’s account.',
                  'Decline any absolute guaranteed compounding return promises.',
                  'Verify static invoice banking details before releasing retainer fees.',
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-stone-200/60 p-8 flex items-start gap-4 hover:border-slate-350 transition-all">
                    <div className="h-6 w-6 shrink-0 bg-blue-50 flex items-center justify-center rounded-full text-blue-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── SECTION 8: FINAL TRUST SECTION ─── */}
          <section className="bg-white py-24 border-t border-stone-200/50">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="font-serif text-3xl md:text-4xl text-slate-990 mb-4">
                Transparency and Verification Protect Capital
              </h2>
              <p className="text-slate-650 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8">
                Our advisory practice operates under strict fiduciary, compliance, and investor-protection standards designed to safeguard both trust and capital integrity.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/contact" passHref>
                  <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors justify-center">
                    Speak With Adviser
                    <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </>
      }
    >
      {/* ─── SECTION 1: HERO / SECURITY INTRO ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start"
      >
        <motion.div variants={itemVariants} className="md:col-span-8">
          <div className="flex items-center gap-2 mb-4">
            <ShieldAlert className="h-5 w-5 text-red-600" />
            <span className="text-xs uppercase tracking-[0.2em] text-red-600 font-bold">
              Investor Security Directive
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-slate-900 mb-8">
            Protect Your Capital <br />From Impersonation.
          </h1>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mb-8">
            Security protocols, fiduciary verification standards, and anti-fraud safeguards designed to protect investors from unauthorized entities impersonating SEBI-registered advisers.
          </p>

          {/* Highlight Banner */}
          <div className="bg-red-50 border-l-4 border-red-600 p-5 mb-8">
            <p className="text-xs md:text-sm text-red-800 font-bold leading-relaxed">
              WARNING: We do not operate dynamic Telegram channels, WhatsApp stock signal groups, or request direct capital transfers for trading.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 border-t border-b border-stone-200/60 py-6">
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Fee-Only Advisory</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Verified Practice</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Fiduciary Mandate</span>
            </div>
          </div>
        </motion.div>

        {/* Fiduciary Security Block Quote */}
        <motion.div variants={itemVariants} className="md:col-span-4 relative mt-12 md:mt-0">
          <div className="relative z-10 bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-200/50 md:-ml-8 md:mt-16">
            <span className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
              Security Standard
            </span>
            <p className="font-serif text-xl leading-snug text-slate-900 mb-6 italic">
              &quot;Verification is the ultimate barrier against capital destruction.&quot;
            </p>
            <div className="pt-6 border-t border-stone-100 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-700" />
              <p className="font-bold text-slate-900 text-sm">Insulated Grade</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-3/4 h-[120%] bg-stone-100 -z-10 translate-x-4 -translate-y-8 mix-blend-multiply" />
        </motion.div>
      </motion.div>

      {/* ─── SECTION 2: FRAUD MODALITIES SECTION ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="mt-32 pt-24 border-t border-stone-200/50"
      >
        <div className="mb-16">
          <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
            Risk Identification
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
            Identified Scam Modalities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Smartphone,
              title: 'Digital Cloning',
              desc: 'Imposters clone profiles on Telegram, WhatsApp, or Twitter, copying branding styles to message users directly.',
            },
            {
              icon: TrendingUp,
              title: 'Phantom Guarantees',
              desc: 'Scammers promise risk-free double-digit returns or exclusive inside trading tips to trigger instant actions.',
            },
            {
              icon: MessageSquareWarning,
              title: 'Direct Solicitation',
              desc: 'Cold texts, unverified messaging lists, or direct unsolicited solicitations claiming to represent Sujan Singh.',
            },
            {
              icon: CircleDollarSign,
              title: 'Capital Interception',
              desc: 'Requesting direct funds transfers into personal banking profiles under the pretense of immediate advisory setups.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white border border-stone-200/60 p-8 hover:border-slate-350 transition-all flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 bg-stone-50 flex items-center justify-center rounded-full text-slate-650 mb-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg text-slate-950 font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* ─── SECTION 3: OFFICIAL RIA PROTOCOLS SECTION ─── */}
      <div className="mt-32 pt-24 border-t border-stone-200/50">
        <div className="mb-16">
          <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
            Compliance Operations
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
            Official RIA Fiduciary Mandates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Active SEBI Registration',
              desc: 'Mandatorily registered as an Individual RIA (Registration INA000020864), verified on the official SEBI database.',
            },
            {
              title: 'Bilateral Advisory Agreement',
              desc: 'A formal bilateral agreement must be mutually signed before any advisory fee transitions occur.',
            },
            {
              title: 'Fiduciary Risk Profiling',
              desc: 'All advisory blueprints must be preceded by formal suitability mapping and risk tolerance analysis.',
            },
            {
              title: 'Statutory Fee Compliance',
              desc: 'Fees conform strictly to SEBI guidelines (capped transparently under standard renewal parameters).',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-stone-50 border border-stone-200/60 p-8 hover:border-slate-350 transition-all">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block mb-4">Mandate 0{idx + 1}</span>
              <h3 className="font-serif text-base font-bold text-slate-950 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageSectionLayout>
  );
}