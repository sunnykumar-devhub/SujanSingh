'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  Layers,
  Scale,
  FileText,
  HelpCircle,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import PageSectionLayout from '@/components/layout/pageSectionLayout';
import { containerVariants, itemVariants } from '@/lib/animations';

interface DisclosureItem {
  key: string;
  title: string;
  focus: string;
  desc: string;
  detail: string;
}

const detailedDisclosures: DisclosureItem[] = [
  {
    key: 'nature',
    title: 'Nature of Services',
    focus: 'Fee-Only Individual Advisory Mandates',
    desc: 'Advisory is strictly fee-only, objective, and commission-free, tailored entirely to the client household’s long-term milestone planning.',
    detail: 'We provide strategic asset allocation strategies, cash-flow models, and liquidity matching structures. We do not operate distribution networks or mutual fund brokerages, guaranteeing zero transactional cross-subsidization.',
  },
  {
    key: 'scope',
    title: 'Scope of Advisory',
    focus: 'Authorized Asset Allocations & Portfolio Audits',
    desc: 'Authorized to advise on public equity direct tracks, mutual fund categories, debt vectors, alternative assets, and liability insulation products.',
    detail: 'All advice is strictly restricted to non-discretionary recommendations, meaning clients retain absolute execution authority. We do not handle direct cash execution or manage third-party broker keys.',
  },
  {
    key: 'compensation',
    title: 'Compensation Disclosure',
    focus: 'Uniform Flat retianers & Setup fee schedule',
    desc: 'Compensation is derived exclusively from a flat onboarding setup fee and a uniform annual renewal retainer, completely decoupled from AUM drag.',
    detail: 'First-year comprehensive onboarding: Rs. 13,000. Annual renewal retainer: Rs. 8,000. Under SEBI compliance guidelines, fees are non-negotiable and strictly uniform across all family office structures.',
  },
  {
    key: 'conflict',
    title: 'Conflict of Interest Statement',
    focus: 'Absolute Decoupling from Product Publishers',
    desc: 'Zero associations, affiliate contracts, or strategic distribution partnerships with asset management firms, life/health insurers, or banks.',
    detail: 'No indirect payments, referral payouts, commission shares, soft dollar compensations, or corporate sponsorships are accepted. Efficacy is audited directly by SEBI compliance desks.',
  },
  {
    key: 'privacy',
    title: 'Privacy & Client Confidentiality',
    focus: 'Encrypted Data Storage & Strict Disclosure Rules',
    desc: 'Client financial blue-prints, data transparency sheets, and portfolio audits are kept under strict end-to-end security protocols.',
    detail: 'We never share client data with external platforms, broker networks, or distribution channels unless formally compelled by statutory SEBI regulatory directives.',
  },
  {
    key: 'risk',
    title: 'Risk Disclosure Statement',
    focus: 'Market Volatility & Non-Guaranteed Compounding',
    desc: 'Investing in financial assets carries systemic market risks. Past efficiency is not indicative of future compounding tracks.',
    detail: 'We construct rigorous capital buffers, liquidity matrices, and empirical risk insulations to manage downside variance, but we do not guarantee exact statutory returns.',
  },
];

export default function DisclosuresContainer() {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('nature');

  return (
    <PageSectionLayout
      fullWidthContent={
        <>
          {/* ─── SECTION 5: COMPLIANCE TRACKER & STATS (Dark Dashboard) ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden bg-slate-900 py-24 md:py-32 border-t border-slate-800"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,1),rgba(15,23,42,0.4)_70%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-12 lg:items-center justify-between">
                <motion.div variants={itemVariants} className="max-w-2xl">
                  <span className="block text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
                    Statutory Transparency
                  </span>
                  <h3 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-tight mb-6">
                    Investor Grievance Transparency
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-8">
                    In accordance with SEBI (Investment Advisers) Regulations, all complaints received and resolved are disclosed in a structured monthly format for investor protection and transparency.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <Link href="/disclosures/complaints" passHref>
                      <button className="inline-flex items-center gap-3 bg-white text-slate-900 text-xs tracking-wider uppercase font-bold px-6 py-3.5 hover:bg-slate-200 transition-colors duration-200">
                        View Complete Grievance Status
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </Link>
                    <Link href="/disclosures/imposters" className="text-xs text-red-400 underline hover:text-red-300 transition-colors">
                      Report Impersonation / Fraud Alert
                    </Link>
                  </div>
                </motion.div>

                {/* Dashboard Stats */}
                <motion.div
                  variants={itemVariants}
                  className="bg-slate-800/40 border border-slate-700/50 p-8 shrink-0 w-full lg:w-[480px]"
                >
                  <div className="mb-6 flex justify-between items-center pb-4 border-b border-slate-700/50">
                    <span className="text-white font-serif text-lg">Active Operational Cycle</span>
                    <span className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest bg-emerald-500/10 px-2.5 py-1 rounded-sm">
                      100% Resolved
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'At start', value: '0' },
                      { label: 'Received', value: '0' },
                      { label: 'Resolved', value: '0' },
                      { label: 'Pending', value: '0' },
                    ].map((item, idx) => (
                      <div key={idx} className="relative text-center">
                        <p className="text-3xl font-serif text-white mb-1">{item.value}</p>
                        <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold leading-tight">{item.label}</p>
                        {idx !== 3 && <div className="hidden md:block absolute -right-2 top-2 h-8 w-px bg-slate-700/50" />}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ─── SECTION 6: GRIEVANCE REDRESSAL SUPPORT (Investor Desks) ─── */}
          <section className="bg-stone-50 py-24 border-t border-stone-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
                  Escalation Desks
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
                  Investor Support Channels
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Email Support */}
                <div className="bg-white border border-stone-200/60 p-8 flex flex-col justify-between hover:border-slate-350 transition-all">
                  <div>
                    <div className="h-10 w-10 bg-blue-50 flex items-center justify-center rounded-full text-blue-700 mb-6">
                      <Mail className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg text-slate-950 mb-2">Investor Support Desk</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6">
                      Submit statutory inquiries, registration questions, or dispute reviews directly to our operations office.
                    </p>
                  </div>
                  <a href="mailto:compliance@sujansinghadvisory.com" className="text-xs font-mono font-bold text-blue-700 hover:text-blue-900 uppercase tracking-widest inline-flex items-center gap-1.5">
                    compliance@sujansinghadvisory.com <ArrowRight size={12} />
                  </a>
                </div>

                {/* Telephone Registry */}
                <div className="bg-white border border-stone-200/60 p-8 flex flex-col justify-between hover:border-slate-350 transition-all">
                  <div>
                    <div className="h-10 w-10 bg-blue-50 flex items-center justify-center rounded-full text-blue-700 mb-6">
                      <Phone className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg text-slate-950 mb-2">Registry Office Desk</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6">
                      Contact our Delhi/NCR registration office directly for regulatory audits or offline compliance reviews.
                    </p>
                  </div>
                  <a href="tel:+911140842980" className="text-xs font-mono font-bold text-blue-700 hover:text-blue-900 uppercase tracking-widest inline-flex items-center gap-1.5">
                    +91-11-4084-2980 <ArrowRight size={12} />
                  </a>
                </div>

                {/* SEBI SCORES Access */}
                <div className="bg-white border border-stone-200/60 p-8 flex flex-col justify-between hover:border-slate-350 transition-all">
                  <div>
                    <div className="h-10 w-10 bg-blue-50 flex items-center justify-center rounded-full text-blue-700 mb-6">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg text-slate-950 mb-2">SEBI SCORES Portal</h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6">
                      Filing grievances directly with the Securities and Exchange Board of India via the online SCORES mechanism.
                    </p>
                  </div>
                  <a href="https://scores.gov.in" target="_blank" rel="noreferrer" className="text-xs font-mono font-bold text-blue-700 hover:text-blue-900 uppercase tracking-widest inline-flex items-center gap-1.5">
                    Execute SCORES Filing <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ─── SECTION 8: DISCLAIMER & PRIVACY SECTION ─── */}
          <section className="bg-white py-24 border-t border-stone-200/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
                Statutory Notice
              </span>
              <h2 className="font-serif text-3xl text-slate-900 mb-6">Compliance Disclaimers</h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
                Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
              </p>
              <div className="h-px w-full bg-stone-200 mb-8" />
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                Sujan Singh Advisory — All Rights Reserved. Active Individual RIA Registration No. INA000020864.
              </p>
            </div>
          </section>

          {/* ─── SECTION 9: FINAL TRUST CTA SECTION ─── */}
          <section className="bg-slate-900 py-24 relative overflow-hidden border-t border-slate-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_50%)]" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
                Transparency is the Foundation of Fiduciary Trust
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Our advisory practice is built on objective stewardship, regulatory discipline, and investor-first accountability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <button className="inline-flex items-center gap-3 bg-white text-slate-900 text-xs tracking-wider uppercase font-bold px-8 py-4 hover:bg-stone-250 transition-colors w-full sm:w-auto justify-center">
                    Contact Compliance Desk
                    <ArrowRight size={14} />
                  </button>
                </Link>
                <Link href="/contact" passHref>
                  <button className="inline-flex items-center gap-3 border border-slate-700 text-white text-xs tracking-wider uppercase font-bold px-8 py-4 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
                    Schedule Consultation
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </>
      }
    >
      {/* ─── SECTION 1: HERO / REGULATORY INTRO SECTION ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start"
      >
        <motion.div variants={itemVariants} className="md:col-span-8">
          <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-6">
            Statutory Transparency
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-slate-900 mb-8">
            Regulatory Transparency <br />&amp; Disclosures.
          </h1>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mb-8">
            Mandated SEBI RIA disclosures, investor protection standards, fiduciary compliance registries, and grievance redressal data reflecting our commitment to transparent and conflict-free advisory stewardship.
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 border-t border-b border-stone-200/60 py-6">
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">INA000020864</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Fee-Only Advisory</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Compliance First</span>
            </div>
          </div>
        </motion.div>

        {/* The Core Mandate Sidebar Quote */}
        <motion.div variants={itemVariants} className="md:col-span-4 relative mt-12 md:mt-0">
          <div className="relative z-10 bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-200/50 md:-ml-8 md:mt-16">
            <span className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
              The Regulatory Mandate
            </span>
            <p className="font-serif text-xl leading-snug text-slate-900 mb-6 italic">
              &quot;Objective wealth preservation requires absolute transparency and complete regulatory compliance.&quot;
            </p>
            <div className="pt-6 border-t border-stone-100 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-700" />
              <p className="font-bold text-slate-900 text-sm">Fiduciary Grade</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-3/4 h-[120%] bg-stone-100 -z-10 translate-x-4 -translate-y-8 mix-blend-multiply" />
        </motion.div>
      </motion.div>

      {/* ─── SECTION 2: REGULATORY IDENTIFIER SECTION ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="mt-32 pt-24 border-t border-stone-200/50"
      >
        <div className="mb-16">
          <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
            Registration Credentials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
            Advisory Registry Identifiers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { key: 'Registration Number', val: 'INA000020864' },
            { key: 'Adviser Type', val: 'Individual RIA' },
            { key: 'Registration Status', val: 'Active / Audited' },
            { key: 'Place of Registry', val: 'Delhi / NCR, India' },
            { key: 'Date of Registration', val: 'Dec 24, 2019' },
          ].map((item, idx) => (
            <div key={idx} className="bg-stone-50 border border-stone-200/60 p-6 flex flex-col justify-between hover:border-slate-350 hover:bg-white transition-all">
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block mb-2">{item.key}</span>
              <p className="font-serif text-base font-bold text-slate-900">{item.val}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ─── SECTION 3: FIDUCIARY DISCLOSURES (Expandable Accordion) ─── */}
      <div className="mt-32 pt-24 border-t border-stone-200/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
              Fiduciary Obligations
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-6">
              Mandated Fiduciary Disclosures
            </h2>
            <p className="text-slate-650 text-sm md:text-base leading-relaxed mb-8">
              Click on any regulatory sector on the right to examine our compliance frameworks, compensation schedules, and conflict mitigation grids.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {detailedDisclosures.map((item) => {
              const isOpen = activeAccordion === item.key;
              return (
                <div key={item.key} className="bg-white border border-stone-200/60 p-6 hover:border-slate-350 transition-all">
                  <button
                    onClick={() => setActiveAccordion(isOpen ? null : item.key)}
                    className="flex w-full items-start justify-between gap-6 text-left group"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                        {item.focus}
                      </span>
                      <h3 className="font-serif text-lg text-slate-950 transition-colors group-hover:text-blue-800">
                        {item.title}
                      </h3>
                    </div>
                    <div className={`mt-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${isOpen ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-300 text-slate-400 group-hover:border-blue-400 group-hover:text-blue-600'}`}>
                      <ChevronDown className={`h-3 w-3 transition-transform duration-350 ${isOpen ? 'rotate-180' : ''}`} />
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
                        <div className="pt-4 border-t border-stone-100 mt-4 text-xs md:text-sm text-slate-650 space-y-3">
                          <p className="font-semibold text-slate-950">{item.desc}</p>
                          <p className="text-slate-500 bg-stone-50 border border-stone-150 p-4 font-mono leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── SECTION 4: SCOPE OF SERVICES GRID ─── */}
      <div className="mt-32 pt-24 border-t border-stone-200/50">
        <div className="mb-16">
          <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
            Authorized Advices
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
            Scope of Authorized Advisory
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { label: 'Comprehensive Planning', desc: 'Holistic household balance sheet blueprints.' },
            { label: 'Goal-Based Advisory', desc: 'Milestone duration tracking & asset placements.' },
            { label: 'Retirement & Tax Planning', desc: 'Inflation-adjusted cash flows & tax efficiency.' },
            { label: 'Risk Management', desc: 'Independent term liability & health vulnerability checks.' },
            { label: 'Review & Rebalancing', desc: 'Continuous asset audits based on quantitative triggers.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-stone-200/60 p-6 flex flex-col justify-between hover:border-slate-350 transition-all group">
              <div>
                <div className="h-8 w-8 bg-blue-50 flex items-center justify-center rounded-full text-blue-700 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <CheckCircle2 className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-serif text-sm font-bold text-slate-950 mb-2 leading-tight">{item.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── SECTION 5: FIDUCIARY COVENANT SECTION (Absolute Neutrality) ─── */}
      <div className="mt-32 py-24 border-t border-b border-stone-200/50 bg-stone-50/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
            Absolute Neutrality
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-950 leading-tight tracking-tight mb-6">
            Shielding Your Compound Interest from Conflict Drag
          </h2>
          <p className="text-slate-650 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Under SEBI RIA guidelines, we declare zero corporate sponsorships, bank tie-ups, or insurance product quotas. We accept zero sales commissions, ensuring that our advisory is derived from objective math and empirical research.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-stone-200">
            <div>
              <p className="text-xl font-bold font-serif text-slate-950 mb-1">0.00%</p>
              <p className="text-[10px] uppercase text-slate-400 font-bold">Commissions</p>
            </div>
            <div>
              <p className="text-xl font-bold font-serif text-slate-950 mb-1">None</p>
              <p className="text-[10px] uppercase text-slate-400 font-bold">Sales Targets</p>
            </div>
            <div>
              <p className="text-xl font-bold font-serif text-slate-950 mb-1">100%</p>
              <p className="text-[10px] uppercase text-slate-400 font-bold">Fee-Only Integrity</p>
            </div>
            <div>
              <p className="text-xl font-bold font-serif text-slate-950 mb-1">Audited</p>
              <p className="text-[10px] uppercase text-slate-400 font-bold">SEBI Registry</p>
            </div>
          </div>
        </div>
      </div>
    </PageSectionLayout>
  );
}
