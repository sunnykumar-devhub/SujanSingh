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
import Card from '@/components/ui/Card';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { containerVariants, itemVariants } from '@/lib/animations';

interface Pillar {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const pillars: Pillar[] = [
  {
    icon: <Compass className="h-6 w-6 text-brand-blue" />,
    title: 'Strategic Retirement Engineering',
    desc: 'Modeling robust accumulation tracks and sustainable cash flows to guarantee lifelong purchasing power.',
  },
  {
    icon: <Milestone className="h-6 w-6 text-brand-blue" />,
    title: 'Objective-Driven Milestone Allocation',
    desc: 'Pairing targeted financial goals with distinct capital tracks matching your time horizon.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-brand-blue" />,
    title: 'Fiduciary Risk Insulation',
    desc: 'Independently analyzing your life and healthcare safety lines entirely free from product sales targets.',
  },
  {
    icon: <Layers className="h-6 w-6 text-brand-blue" />,
    title: 'Liquidity Contingency Reserves',
    desc: 'Engineering robust liquid cash baskets that protect core compounding assets from forced crisis liquidations.',
  },
  {
    icon: <Coins className="h-6 w-6 text-brand-blue" />,
    title: 'Alpha-Driven Tax Optimization',
    desc: 'Evaluating income parameters to build tax-efficient investment strategies that legally reduce structural fiscal drag.',
  },
  {
    icon: <Scale className="h-6 w-6 text-brand-blue" />,
    title: 'Empirical Risk Profiling',
    desc: 'Performing granular risk-variance tests to ensure capital matches your psychological comfort and mathematical capacity.',
  },
];

export default function HomeContainer() {
  return (
    <section className="min-h-screen bg-brand-light text-brand-slate font-sans">
      <Breadcrumb />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="font-serif tracking-tight text-slate-900 text-4xl sm:text-5xl leading-tight"
        >
          Achieve True Financial Freedom with India&apos;s Trusted Fee-Only Advisor
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-3xl mx-auto font-sans text-slate-600 leading-relaxed text-lg"
        >
          Flat-Fee Architecture • SEBI Registered (RIA) • 100% Fiduciary Alignment • Zero Product Commissions Ever.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-8 flex justify-center">
          <Link href="/contact">
            <Button variant="primary" size="lg" className="shadow-premium">
              Book a Strategy Session <ArrowRight size={16} className="ml-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        <motion.h2
          variants={itemVariants}
          className="font-serif tracking-tight text-slate-900 text-3xl text-center"
        >
          The Six Pillars of Fiduciary Wealth Management
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={itemVariants}>
              <Card
                variant="glass"
                hoverEffect
                className="h-full p-6 bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-premium"
              >
                <div className="flex items-center gap-3 mb-4">
                  {pillar.icon}
                  <h3 className="font-serif tracking-tight text-slate-900 text-xl">{pillar.title}</h3>
                </div>
                <p className="font-sans text-slate-600 leading-relaxed text-sm">{pillar.desc}</p>
                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <Link href="/services">
                    <Button variant="secondary" size="md">
                      Learn More <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="bg-brand-navy py-16 md:py-24"
      >
        <motion.h2
          variants={itemVariants}
          className="font-serif tracking-tight text-white text-3xl text-center"
        >
          Wealth & Stock Tier Visualizer
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-3xl mx-auto text-center font-sans text-slate-300 leading-relaxed"
        >
          A dynamic, data-driven matrix that maps your assets across liquidity tiers and risk bands, ensuring every rupee works optimally for long-term outcomes.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-8 flex justify-center">
          <Link href="/services">
            <Button variant="outline" size="lg">
              Explore Tier Matrix <ArrowRight size={14} className="ml-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
