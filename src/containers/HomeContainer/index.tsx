'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Milestone,
  Compass,
  Scale,
  Coins,
  Layers,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { containerVariants, itemVariants } from '@/lib/animations';

interface Pillar {
  icon: React.ReactNode;
  title: string;
  desc: string;
  colSpan: string;
}

const pillars: Pillar[] = [
  {
    icon: <Compass className="h-5 w-5 text-blue-700" />,
    title: 'Strategic Retirement Engineering',
    desc: 'Modeling robust accumulation tracks and sustainable cash flows to preserve lifelong purchasing power.',
    colSpan: 'md:col-span-7',
  },
  {
    icon: <Milestone className="h-5 w-5 text-blue-700" />,
    title: 'Objective Milestone Allocation',
    desc: 'Pairing targeted financial goals with distinct capital tracks matching your time horizon.',
    colSpan: 'md:col-span-5',
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-blue-700" />,
    title: 'Fiduciary Risk Insulation',
    desc: 'Independently analyzing your healthcare and safety reserves, operating free from distribution commissions.',
    colSpan: 'md:col-span-4',
  },
  {
    icon: <Layers className="h-5 w-5 text-blue-700" />,
    title: 'Liquidity Contingency Reserves',
    desc: 'Architecting robust liquid cash baskets that protect compounding assets from forced crisis liquidations.',
    colSpan: 'md:col-span-8',
  },
  {
    icon: <Coins className="h-5 w-5 text-blue-700" />,
    title: 'Structural Tax Optimization',
    desc: 'Evaluating income parameters to execute tax-efficient strategies that legally reduce structural fiscal drag.',
    colSpan: 'md:col-span-6',
  },
  {
    icon: <Scale className="h-5 w-5 text-blue-700" />,
    title: 'Empirical Risk Profiling',
    desc: 'Measuring granular risk-variance to ensure capital allocations match your psychological comfort and mathematical capacity.',
    colSpan: 'md:col-span-6',
  },
];

export default function HomeContainer() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans selection:bg-blue-100 pb-24 pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Breadcrumb />

        {/* Hero - Editorial Asymmetry */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start"
        >
          <motion.div variants={itemVariants} className="md:col-span-7 pt-4 md:pt-12">
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-6">
              Institutional-Grade Stewardship
            </span>
            <h1 className="font-serif text-5xl md:text-[5.5rem] leading-[1.05] tracking-tight text-slate-900 mb-8">
              Architect Your Financial Legacy.
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mb-10">
              Preserve and structure your capital through empirical modeling and absolute fiduciary alignment. We execute bespoke financial planning devoid of product commissions.
            </p>
            <Link href="/contact" passHref>
              <Button variant="primary" size="lg" className="rounded-none px-8 py-4 font-semibold tracking-wide border border-slate-900 bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                Initiate Fiduciary Engagement <ArrowRight size={16} className="ml-3" />
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-5 relative mt-8 md:mt-0">
            {/* Asymmetrical offset image/card block to break the grid */}
            <div className="relative z-10 bg-white p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-200/50 md:-ml-12 md:mt-24">
              <span className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
                The Fiduciary Standard
              </span>
              <p className="font-serif text-2xl leading-snug text-slate-900 mb-6 italic">
                &quot;True wealth preservation requires mathematical rigor and uncompromised objectivity.&quot;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                <div className="h-12 w-12 rounded-full bg-slate-200 border-2 border-white flex-shrink-0 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200)' }} />
                <div>
                  <p className="font-bold text-slate-900 text-sm">Sujan Singh, RIA</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">SEBI-Registered Adviser</p>
                </div>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-3/4 h-[120%] bg-stone-200/40 -z-10 translate-x-4 -translate-y-8 mix-blend-multiply" />
          </motion.div>
        </motion.div>

        {/* Pillars Section - Asymmetrical Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32 md:mt-48"
        >
          <div className="mb-16 md:mb-24 md:w-2/3">
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-4">
              Methodology &amp; Execution
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-slate-900">
              The Six Fiduciary Cornerstones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {pillars.map((pillar) => (
              <motion.div 
                key={pillar.title} 
                variants={itemVariants}
                className={`${pillar.colSpan} bg-white p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-stone-100 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 group`}
              >
                <div className="h-10 w-10 mb-6 flex items-center justify-center bg-stone-50 rounded-full group-hover:bg-blue-50 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="font-serif tracking-tight text-slate-900 text-2xl mb-4 leading-snug">{pillar.title}</h3>
                <p className="font-sans text-slate-600 leading-relaxed text-sm md:text-base">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Dark Mode Visualizer Section - Organic Depth & Color */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-32 relative overflow-hidden bg-slate-900 py-24 md:py-32"
      >
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(15,23,42,1),rgba(15,23,42,0.4)_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div variants={itemVariants} className="md:col-span-5 md:col-start-8 order-1 md:order-2">
              <span className="block text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-6">
                Proprietary Analytics
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-white mb-8">
                Wealth &amp; Tier Modeling
              </h2>
              <p className="text-slate-300 leading-relaxed mb-10 text-lg">
                Measure and construct your assets across liquidity tiers and risk parameters. We architect a data-driven matrix to ensure structural efficiency for long-term compounding.
              </p>
              <Link href="/services" passHref>
                <Button variant="outline" size="lg" className="rounded-none border-slate-600 text-slate-200 hover:bg-white hover:text-slate-900 transition-colors px-8 py-4">
                  Examine Tier Matrix <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={itemVariants} className="md:col-span-6 md:col-start-1 order-2 md:order-1">
              {/* Abstract editorial graphic replacing basic grid */}
              <div className="relative aspect-square md:aspect-[4/3] w-full">
                <div className="absolute inset-0 border border-slate-700/50 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-slate-500 font-mono text-xs uppercase tracking-widest">Fig 01. Flow</span>
                    <Layers className="text-slate-600 h-6 w-6" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-px w-full bg-slate-700/50" />
                    <div className="h-px w-3/4 bg-slate-700/50" />
                    <div className="h-px w-1/2 bg-slate-700/50" />
                  </div>
                </div>
                <div className="absolute -right-6 -bottom-6 w-2/3 h-2/3 bg-slate-800/80 backdrop-blur-sm border border-slate-600 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] p-6">
                  <span className="text-slate-400 font-mono text-xs uppercase tracking-widest block mb-4">Capital Track</span>
                  <div className="flex items-end gap-2 h-32">
                    <div className="w-1/4 bg-blue-900/50 h-1/3" />
                    <div className="w-1/4 bg-blue-800/50 h-1/2" />
                    <div className="w-1/4 bg-blue-700/50 h-3/4" />
                    <div className="w-1/4 bg-blue-600/50 h-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
