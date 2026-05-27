'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Award, BookOpen, CheckCircle, Users } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function AboutContainer() {
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
          <motion.div variants={itemVariants} className="md:col-span-7 pt-4 md:pt-12">
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-6">
              Executive Profile
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-slate-900 mb-8">
              Fiduciary Stewardship,<br />Measured in Decades.
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mb-10">
              A NISM-certified fiduciary with 15+ years delivering institutional-grade wealth strategies. We structure capital for high-net-worth families and corporate executives, strictly devoid of distribution commissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="rounded-none px-8 py-4 font-semibold tracking-wide border border-slate-900 bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                Download Executive CV <ArrowRight size={16} className="ml-3" />
              </Button>
              <Link href="/contact" passHref>
                <Button variant="outline" size="lg" className="rounded-none px-8 py-4 font-semibold tracking-wide border-slate-300 text-slate-900 hover:bg-slate-100 transition-colors">
                  Initiate Engagement
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-5 relative mt-12 md:mt-0">
            {/* Asymmetrical offset credential block */}
            <div className="relative z-10 bg-white p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-200/50 md:-ml-12 md:mt-32">
              <span className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
                Regulatory Authority
              </span>
              <p className="font-serif text-2xl leading-snug text-slate-900 mb-6">
                Registered under the Securities and Exchange Board of India (SEBI).
              </p>
              <div className="pt-6 border-t border-stone-100">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-blue-700" />
                  <p className="font-bold text-slate-900 text-sm">RIA No. INA000020864</p>
                </div>
                <p className="text-xs text-slate-500 mt-2 font-mono uppercase tracking-widest">Audited &amp; Compliant</p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-3/4 h-[120%] bg-stone-200/40 -z-10 translate-x-4 -translate-y-8 mix-blend-multiply" />
          </motion.div>
        </motion.div>

        {/* Experience Timeline - Asymmetric Flow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32 md:mt-48"
        >
          <div className="mb-16 md:mb-24 md:w-2/3">
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-4">
              Professional Trajectory
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-slate-900">
              A Journey of Empirical Rigor
            </h2>
          </div>

          <div className="relative border-l border-slate-300 ml-4 md:ml-6 space-y-16 pb-12">
            {/* 2019 - Present */}
            <motion.div variants={itemVariants} className="relative pl-8 md:pl-16">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-900 ring-4 ring-[#FDFBF7]" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">2019 – Present</h3>
                  <p className="font-serif text-2xl text-slate-900">Independent Fiduciary Advisory</p>
                </div>
                <div className="md:col-span-8 bg-white p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] border border-stone-100">
                  <p className="text-slate-600 leading-relaxed">
                    Founded Sujan Singh Financial Advisory. Providing pure fee-only counsel, compliance-first reporting, and transparent capital-growth roadmaps structured around client milestones.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* 2013 - 2018 */}
            <motion.div variants={itemVariants} className="relative pl-8 md:pl-16">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-300 ring-4 ring-[#FDFBF7]" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">2013 – 2018</h3>
                  <p className="font-serif text-2xl text-slate-900">Senior Portfolio Manager</p>
                </div>
                <div className="md:col-span-8 bg-white/50 p-6 border border-stone-200/50">
                  <p className="text-slate-600 leading-relaxed">
                    Operated within a multinational wealth-management firm. Architected fiduciary-only strategies for HNI families, overseeing asset structures exceeding ₹2 billion with mathematical precision.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2008 - 2012 */}
            <motion.div variants={itemVariants} className="relative pl-8 md:pl-16">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-slate-300 ring-4 ring-[#FDFBF7]" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">2008 – 2012</h3>
                  <p className="font-serif text-2xl text-slate-900">Quantitative Risk Analyst</p>
                </div>
                <div className="md:col-span-8 bg-white/50 p-6 border border-stone-200/50">
                  <p className="text-slate-600 leading-relaxed">
                    Analyst at a top-tier Indian NBFC. Built quantitative models for credit risk assessment and executed structural optimizations for corporate loan portfolios.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Credentials & Testimonials - Rich Ink Dark Mode */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-24 relative overflow-hidden bg-slate-900 py-24 md:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,1),rgba(15,23,42,0.6)_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            
            {/* Credentials Block (Left) */}
            <motion.div variants={itemVariants} className="md:col-span-5">
              <span className="block text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
                Core Competencies
              </span>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight text-white mb-10">
                Institutional Credentials
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="h-5 w-5 text-blue-400" />
                    <h3 className="font-serif text-xl text-white">NISM Certifications</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Series I, IV, V. Formally certified in Equity, Mutual Funds, and Portfolio Management strategies.
                  </p>
                </div>
                <div className="p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <h3 className="font-serif text-xl text-white">Fiduciary Commitment</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A strictly zero-commission, client-first advisory model legally endorsed and audited by SEBI.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Testimonials Block (Right) */}
            <motion.div variants={itemVariants} className="md:col-span-7 md:pl-10 md:border-l border-slate-700/50">
              <span className="block text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-4">
                Client Impact
              </span>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight text-white mb-10">
                Endorsements of Trust
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { q: "The fee-only structure restored my trust. Capital compounded efficiently without hidden distribution drag.", a: "Corporate Executive" },
                  { q: "Sujan architected a tax-efficient retirement track that empirical data supported. Complete objectivity.", a: "HNI Client" },
                  { q: "A profound shift from product salespeople. We received genuine, fiduciary stewardship for our family office.", a: "Business Owner" },
                  { q: "Our liquidity reserves are now mathematically insulated against market drawdowns. Phenomenal rigorous approach.", a: "Medical Professional" }
                ].map((test, i) => (
                  <div key={i} className="p-8 bg-white/5 backdrop-blur-md border border-slate-600/30 hover:bg-white/10 transition-colors duration-300">
                    <p className="font-serif italic text-slate-300 text-lg leading-relaxed mb-6">
                      &quot;{test.q}&quot;
                    </p>
                    <div className="flex items-center gap-3 border-t border-slate-700/50 pt-4">
                      <Users className="w-4 h-4 text-slate-500" />
                      <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">{test.a}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </main>
  );
}