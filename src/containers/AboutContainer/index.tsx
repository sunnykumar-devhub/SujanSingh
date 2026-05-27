'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  Users,
  Shield,
  BadgeCheck,
  Scale,
  Coins,
  FileCheck,
  Calendar,
  Layers,
} from 'lucide-react';
import PageSectionLayout from '@/components/layout/PageSectionLayout';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function AboutContainer() {
  return (
    <PageSectionLayout
      fullWidthContent={
        <>
          {/* ─── SECTION 4: CORE PHILOSOPHY SECTION (Dark Mode Impact) ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden bg-slate-900 py-24 md:py-32 border-t border-slate-800"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.12),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,1),rgba(15,23,42,0.6)_70%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="block text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
                  Advisory Foundations
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-tight">
                  Core Fiduciary Philosophy
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Coins,
                    title: 'Fee-Only Advisory',
                    desc: 'Revenue generated strictly from transparent flat charges. Absolutely no commission kickbacks or product incentives.',
                  },
                  {
                    icon: Shield,
                    title: 'Fiduciary Responsibility',
                    desc: 'Statutorily bound to act in your singular interest. Our advisory blueprints are designed purely to protect your capital.',
                  },
                  {
                    icon: Layers,
                    title: 'Transparent Structuring',
                    desc: 'Clear accounting grids, clean asset visibility, and direct exposure audits to eliminate hidden portfolio expenses.',
                  },
                  {
                    icon: Scale,
                    title: 'Risk-Calibrated Allocation',
                    desc: 'Matching tactical allocations to mathematical risk capacities and your psychological behavioral comfort.',
                  },
                  {
                    icon: FileCheck,
                    title: 'Tax-Efficient Compounding',
                    desc: 'Continuous structuring strategies to mitigate structural fiscal drag across multiple investment horizons.',
                  },
                  {
                    icon: Award,
                    title: 'Long-Term Preservation',
                    desc: 'Structuring diversified capital tracks geared toward intergenerational growth and purchasing power maintenance.',
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="bg-slate-800/40 border border-slate-700/50 p-8 flex flex-col justify-between"
                    >
                      <div>
                        <div className="mb-6 w-10 h-10 bg-slate-800 flex items-center justify-center rounded-sm">
                          <Icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <h3 className="font-serif text-xl text-white mb-3">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ─── SECTION 5: CREDENTIALS & COMPLIANCE ─── */}
          <section className="bg-stone-50 py-24 border-t border-stone-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
                  Regulatory Footprint
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
                  Compliance Certifications
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: 'NISM Certifications',
                    desc: 'Formally credentialed in Equity, Mutual Funds, and specialized Portfolio advisory tracks.',
                  },
                  {
                    title: 'SEBI Registration',
                    desc: 'Licensed individual Investment Adviser under active Registration No. INA000020864.',
                  },
                  {
                    title: 'Audited Practice',
                    desc: 'Subject to continuous regulatory compliance, annual reporting, and structural audits.',
                  },
                  {
                    title: 'Compliance-First',
                    desc: 'Standardized dispute redressals, conflict resolution sheets, and pure client alignment.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-stone-200/60 p-8 hover:border-slate-350 transition-all duration-300">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-4">Credential 0{idx + 1}</span>
                    <h3 className="font-serif text-lg text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── SECTION 6: TESTIMONIALS / TRUST ─── */}
          <section className="bg-white py-24 border-t border-stone-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
                  Client Impact
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
                  Endorsements of Trust
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    q: 'The fee-only structure restored my trust. Capital compounded efficiently without hidden distribution drag.',
                    a: 'Corporate Executive',
                  },
                  {
                    q: 'Sujan architected a tax-efficient retirement track that empirical data supported. Complete objectivity.',
                    a: 'HNI Client',
                  },
                  {
                    q: 'A profound shift from product salespeople. We received genuine, fiduciary stewardship for our family office.',
                    a: 'Business Owner',
                  },
                ].map((test, idx) => (
                  <div key={idx} className="bg-stone-50 border border-stone-200/60 p-8 flex flex-col justify-between hover:bg-white transition-all duration-350">
                    <p className="font-serif italic text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                      &quot;{test.q}&quot;
                    </p>
                    <div className="flex items-center gap-3 border-t border-stone-200/65 pt-4">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">{test.a}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── SECTION 7: FINAL CTA SECTION ─── */}
          <section className="bg-slate-900 py-24 relative overflow-hidden border-t border-slate-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_50%)]" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
                Build Your Financial Future on Fiduciary Principles
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Partner with an independent registered advisor bound strictly by your long-term wealth growth, with absolute pricing clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" passHref>
                  <button className="inline-flex items-center gap-3 bg-white text-slate-900 text-xs tracking-wider uppercase font-bold px-8 py-4 hover:bg-stone-250 transition-colors w-full sm:w-auto justify-center">
                    Book Strategic Consultation
                    <ArrowRight size={14} />
                  </button>
                </Link>
                <Link href="/contact" passHref>
                  <button className="inline-flex items-center gap-3 border border-slate-700 text-white text-xs tracking-wider uppercase font-bold px-8 py-4 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center">
                    Contact Adviser
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </>
      }
    >
      {/* ─── SECTION 1: HERO / EXECUTIVE INTRO SECTION ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        {/* Left Side: Portrait Offset */}
        <motion.div variants={itemVariants} className="lg:col-span-5 relative group">
          {/* Luxury Accent Backing Plate */}
          <div className="absolute -inset-3 bg-stone-100 rounded-2xl -z-10 border border-stone-200/60 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
          
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-stone-200 bg-stone-50">
            <Image
              src="/images/sujan-hero.jpg"
              alt="Sujan Singh"
              fill
              priority
              className="object-cover -rotate-90 scale-[1.3] object-right"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Premium overlay gradient to bind image beautifully */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Dynamic Watermark Fiduciary Tag */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md px-5 py-4 border border-stone-200 shadow-lg flex justify-between items-center">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-0.5">
                  Regulatory Mandate
                </span>
                <p className="text-xs font-bold text-slate-900 leading-tight">Sujan Singh, RIA</p>
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <Shield className="h-4 w-4" />
              </div>
            </div>
          </div>
        </motion.div>


        {/* Right Side: Identity & Core Details */}
        <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-4 w-4 text-blue-600" />
            <span className="text-xs uppercase tracking-[0.2em] text-blue-600 font-bold">
              Executive Profile
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-slate-900 leading-[1.08] tracking-tight mb-6">
            Fiduciary Stewardship, Measured in Decades.
          </h1>

          <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-8">
            A SEBI-Registered, fee-only fiduciary adviser delivering transparent, commission-free wealth architecture designed for long-term capital preservation and intelligent compounding.
          </p>

          {/* Core Trust Indicators Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8 border-t border-stone-200/60 pt-6">
            <div className="flex items-center gap-2.5">
              <BadgeCheck className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Award className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Reg. INA000020864</span>
            </div>
            <div className="flex items-center gap-2.5">
              <BookOpen className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">NISM Certified</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Shield className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Zero Commissions</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" passHref>
              <button className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors justify-center w-full sm:w-auto">
                Schedule Consultation
                <ArrowRight size={14} />
              </button>
            </Link>
            <Link href="/services" passHref>
              <button className="inline-flex items-center gap-2 px-6 py-3.5 border border-stone-300 text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-stone-50 transition-colors justify-center w-full sm:w-auto">
                Explore Services
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* ─── SECTION 2: EXECUTIVE PROFILE SECTION ─── */}
      <div className="mt-32 pt-24 border-t border-stone-200/50">
        <div className="max-w-3xl">
          <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
            Adviser History &amp; Credibility
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-8">
            Adhering strictly to pure, objective client alignment.
          </h2>
          <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
            <p>
              I am an independent Investment Adviser registered with the Securities and Exchange Board of India (SEBI) and holding advanced PG certifications in Investment Advisory structures. My professional mission started in 2016, dedicated to advancing objective wealth management structures throughout India.
            </p>
            <p>
              Under my fee-only advisory covenant, Sujan Singh Financial Advisory does not hold product brokerages or distributor keys. I refuse third-party incentives, commissions, or referral payments. The only compensation received is the transparent flat fee paid by my clients.
            </p>
            <p>
              This absolute objectivity protects family offices, HNIs, and corporate leaders from structural conflicts of interest, ensuring portfolio structures are rebalanced, tax-managed, and milestone-mapped solely to enhance your long-term compounding stability.
            </p>
          </div>
        </div>
      </div>

      {/* ─── SECTION 3: PROFESSIONAL TRAJECTORY / TIMELINE ─── */}
      <div className="mt-32 pt-24 border-t border-stone-200/50">
        <div className="mb-16">
          <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
            Professional Trajectory
          </span>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight text-slate-900">
            A Trajectory of Quantitative Rigor
          </h2>
        </div>

        <div className="relative border-l border-stone-200 ml-4 md:ml-6 space-y-12 pb-6">
          {/* Milestone 2019 - Present */}
          <div className="relative pl-8 md:pl-16">
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-900 ring-4 ring-[#FDFBF7]" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                  <Calendar size={12} /> 2019 – Present
                </span>
                <p className="font-serif text-xl text-slate-900 font-bold">Independent Fiduciary Advisory</p>
              </div>
              <div className="md:col-span-8 bg-stone-50 border border-stone-200/60 p-6">
                <p className="text-slate-650 text-sm leading-relaxed">
                  Founded Sujan Singh Financial Advisory. Architecting fee-only comprehensive blueprints, rebalancing strategies, and tax-efficient wealth management programs for HNI structures.
                </p>
              </div>
            </div>
          </div>

          {/* Milestone 2013 - 2018 */}
          <div className="relative pl-8 md:pl-16">
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-stone-300 ring-4 ring-[#FDFBF7]" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                  <Calendar size={12} /> 2013 – 2018
                </span>
                <p className="font-serif text-xl text-slate-900 font-bold">Senior Portfolio Manager</p>
              </div>
              <div className="md:col-span-8 bg-stone-50/50 border border-stone-250 p-6">
                <p className="text-slate-650 text-sm leading-relaxed">
                  Operated within a multinational wealth-management firm. Built direct allocation frameworks, managed family assets exceeding ₹2 billion, and structured risk analysis profiles.
                </p>
              </div>
            </div>
          </div>

          {/* Milestone 2008 - 2012 */}
          <div className="relative pl-8 md:pl-16">
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-stone-300 ring-4 ring-[#FDFBF7]" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                  <Calendar size={12} /> 2008 – 2012
                </span>
                <p className="font-serif text-xl text-slate-900 font-bold">Quantitative Risk Analyst</p>
              </div>
              <div className="md:col-span-8 bg-stone-50/50 border border-stone-250 p-6">
                <p className="text-slate-650 text-sm leading-relaxed">
                  Analyst at a premier Indian NBFC, building quantitative matrices for corporate liability matching and credit risk evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSectionLayout>
  );
}