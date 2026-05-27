'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowRight,
  ExternalLink,
  FileCheck,
  Mail,
  Phone,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import { containerVariants, itemVariants } from '@/lib/animations';

const scopeItems = [
  'Comprehensive Financial Planning',
  'Goal-Based Investment Advisory',
  'Retirement & Tax Planning',
  'Risk Management & Insurance Planning',
  'Portfolio Review & Rebalancing',
];

export default function DisclosuresContainer() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans selection:bg-blue-100 pb-24 pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Breadcrumb />
        
        {/* Editorial Hero */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start"
        >
          <motion.div variants={itemVariants} className="md:col-span-8 pt-4 md:pt-12">
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-6">
              Statutory Transparency
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-slate-900 mb-8">
              Regulatory Authority <br />Disclosures.
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mb-10">
              Mandated SEBI RIA disclosures, fiduciary compliance registries, and comprehensive grievance redressal data reflecting our absolute commitment to objective stewardship.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 relative mt-12 md:mt-0">
            {/* Asymmetrical offset credential block */}
            <div className="relative z-10 bg-white p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-200/50 md:-ml-8 md:mt-24">
              <span className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
                Regulatory Identifier
              </span>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="h-6 w-6 text-blue-700" />
                <p className="font-serif text-2xl leading-snug text-slate-900">
                  INA000020864
                </p>
              </div>
              <div className="pt-6 border-t border-stone-100">
                <p className="font-bold text-slate-900 text-sm">Sujan Singh, RIA</p>
                <p className="text-xs text-slate-500 mt-2 font-mono uppercase tracking-widest">Individual Investment Adviser</p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-3/4 h-[120%] bg-stone-200/40 -z-10 translate-x-4 -translate-y-8 mix-blend-multiply" />
          </motion.div>
        </motion.div>

        {/* Core Disclosures - Asymmetric Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 md:mt-32"
        >
          <div className="relative border-l border-slate-300 ml-4 md:ml-6 space-y-16 pb-12">
            
            {/* 1. SEBI Registration */}
            <motion.div variants={itemVariants} className="relative pl-8 md:pl-16">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-900 ring-4 ring-[#FDFBF7]" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Section 01</h3>
                  <p className="font-serif text-2xl text-slate-900">Registration Details</p>
                </div>
                <div className="md:col-span-8 bg-white p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] border border-stone-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-slate-700">
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-slate-400 mb-1">Name</span>
                      <p className="font-semibold text-slate-900">Sujan Singh</p>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-slate-400 mb-1">Registration Number</span>
                      <p className="font-mono font-semibold text-slate-900">INA000020864</p>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-slate-400 mb-1">Registration Type</span>
                      <p className="font-semibold text-slate-900">Individual Investment Adviser</p>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-slate-400 mb-1">Date & Location</span>
                      <p className="font-semibold text-slate-900">07-08-2025 | New Delhi, Delhi</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Nature & Scope */}
            <motion.div variants={itemVariants} className="relative pl-8 md:pl-16">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-300 ring-4 ring-[#FDFBF7]" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><FileCheck className="h-4 w-4" /> Section 02</h3>
                  <p className="font-serif text-2xl text-slate-900">Nature & Scope of Services</p>
                </div>
                <div className="md:col-span-8 space-y-6">
                  <div className="bg-white/50 p-6 border border-stone-200/50">
                    <p className="font-bold text-slate-900 mb-3">Service Modalities</p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed">
                      <li>We execute non-discretionary, fee-only financial structuring and investment advisory.</li>
                      <li>We strictly prohibit the sale of financial products or the acquisition of third-party commissions.</li>
                      <li>Our structural architecture is designed to be 100% unbiased and mathematically objective.</li>
                    </ul>
                  </div>
                  <div className="bg-white/50 p-6 border border-stone-200/50">
                    <p className="font-bold text-slate-900 mb-4">Advisory Scope</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                      {scopeItems.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-700" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Compensation & Risk */}
            <motion.div variants={itemVariants} className="relative pl-8 md:pl-16">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-300 ring-4 ring-[#FDFBF7]" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><AlertCircle className="h-4 w-4" /> Section 03</h3>
                  <p className="font-serif text-2xl text-slate-900">Compensation & Risk Parameters</p>
                </div>
                <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/50 p-6 border border-stone-200/50">
                    <p className="font-bold text-slate-900 mb-3">Compensation Disclosure</p>
                    <p className="text-slate-700 leading-relaxed">
                      Our singular source of revenue is the direct professional fee paid by our clients. We do not generate commissions, referral kickbacks, or external incentives, ensuring structural eradication of conflicts of interest.
                    </p>
                  </div>
                  <div className="bg-white/50 p-6 border border-stone-200/50">
                    <p className="font-bold text-slate-900 mb-3">Risk Acknowledgment</p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed text-sm">
                      <li>Securities investments carry inherent market risks.</li>
                      <li>Historical performance metrics do not guarantee future yields.</li>
                      <li>Clients must rigorously review all related documentation prior to capital deployment.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 4. Contact & Compliance */}
            <motion.div variants={itemVariants} className="relative pl-8 md:pl-16">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-300 ring-4 ring-[#FDFBF7]" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><Mail className="h-4 w-4" /> Section 04</h3>
                  <p className="font-serif text-2xl text-slate-900">Compliance & Grievance Protocol</p>
                </div>
                <div className="md:col-span-8 space-y-6">
                  <div className="bg-white/50 p-6 border border-stone-200/50">
                    <p className="font-bold text-slate-900 mb-4">Grievance Redressal Mechanisms</p>
                    <div className="space-y-3 text-slate-700">
                      <p className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-700" />
                        <span><strong className="text-slate-900">Email:</strong> <a className="text-blue-700 hover:text-blue-900 transition-colors" href="mailto:sujansingh20@gmail.com">sujansingh20@gmail.com</a></span>
                      </p>
                      <p className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-blue-700" />
                        <span><strong className="text-slate-900">Phone:</strong> <a className="text-blue-700 hover:text-blue-900 transition-colors" href="tel:+918802108844">+91 8802108844</a></span>
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-stone-200/50">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        If a grievance remains unresolved, clients may escalate the issue via the SEBI SCORES portal at{' '}
                        <a href="https://scores.gov.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-900 transition-colors">
                          https://scores.gov.in <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white/50 p-6 border border-stone-200/50">
                       <p className="font-bold text-slate-900 mb-2">Privacy Mandate</p>
                       <p className="text-slate-600 text-sm leading-relaxed">Client data is retained under strict confidentiality protocols and is never distributed to third parties without explicit authorization.</p>
                    </div>
                    <div className="bg-white/50 p-6 border border-stone-200/50">
                       <p className="font-bold text-slate-900 mb-2">Statutory Disclaimer</p>
                       <p className="text-slate-600 text-sm leading-relaxed">Website content serves informational purposes only and does not constitute formal advisory execution unless a binding engagement is signed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Institutional Grievance Data - Rich Ink Dark Mode */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-32 relative overflow-hidden bg-slate-900 py-24 md:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,1),rgba(15,23,42,0.4)_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-center justify-between">
            <motion.div variants={itemVariants} className="lg:w-1/3">
              <span className="block text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
                Institutional Accountability
              </span>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight text-white mb-6">
                Grievance Resolution Registry
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                As part of our commitment to absolute transparency, we publish our month-on-month operational grievance statistics, conforming to SEBI regulatory guidelines.
              </p>
              <Link href="/complaints" passHref>
                <Button variant="outline" size="lg" className="rounded-none border-slate-600 text-slate-200 hover:bg-white hover:text-slate-900 transition-colors">
                  Examine Complete Registry <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants} className="lg:w-2/3 w-full">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-8">
                <div className="flex justify-between items-center border-b border-slate-700/50 pb-6 mb-8">
                  <p className="font-mono text-sm tracking-widest text-slate-400 uppercase">Filing Period</p>
                  <p className="font-bold text-white tracking-wide">February 2026</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'At start of month', value: '0' },
                    { label: 'Received queries', value: '0' },
                    { label: 'Resolved queries', value: '0' },
                    { label: 'Pending queries', value: '0' },
                  ].map((item, idx) => (
                    <div key={idx} className="relative">
                      <p className="text-4xl font-serif text-white mb-2">{item.value}</p>
                      <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{item.label}</p>
                      {idx !== 3 && <div className="hidden md:block absolute -right-3 top-2 h-8 w-px bg-slate-700/50" />}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
