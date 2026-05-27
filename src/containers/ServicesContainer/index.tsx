'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { containerVariants, itemVariants } from '@/lib/animations';

/**
 * ServicesContainer – detailed view of the Six Pillars of Fiduciary Wealth Management.
 * Each pillar is presented as an interactive glass‑card with hover elevation and a CTA.
 * The layout is fully responsive using Tailwind’s grid utilities.
 */
export default function ServicesContainer() {
  const pillars = [
    {
      title: 'Strategic Retirement Engineering',
      desc: 'Robust accumulation tracks & sustainable cash‑flow models guaranteeing lifelong purchasing power.',
      link: '/services#retirement',
    },
    {
      title: 'Objective‑Driven Milestone Allocation',
      desc: 'Tailored capital tracks matched to your personal milestones and time horizons.',
      link: '/services#milestones',
    },
    {
      title: 'Fiduciary Risk Insulation',
      desc: 'Independent analysis free from product‑sales incentives, protecting your portfolio from hidden conflicts.',
      link: '/services#risk',
    },
    {
      title: 'Liquidity Contingency Reserves',
      desc: 'Robust liquid cash baskets that shield core assets from forced crisis liquidations.',
      link: '/services#liquidity',
    },
    {
      title: 'Alpha‑Driven Tax Optimization',
      desc: 'Tax‑efficient strategies that legally reduce fiscal drag while preserving alpha.',
      link: '/services#tax',
    },
    {
      title: 'Empirical Risk Profiling',
      desc: 'Granular risk‑variance testing to align capital with true psychological comfort levels.',
      link: '/services#profiling',
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 text-slate-900">
      <Breadcrumb />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-8">
          Our Six Pillars of Fiduciary Wealth Management
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-slate-700 max-w-3xl mx-auto text-center mb-12">
          Each pillar is a meticulously crafted service designed to protect, grow, and preserve your wealth with absolute transparency.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card variant="glass" hoverEffect className="h-full flex flex-col justify-between p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 flex-grow mb-4">{p.desc}</p>
                <Link href={p.link} className="text-blue-600 hover:underline flex items-center mt-2">
                  Learn More <ArrowRight size={14} className="ml-1" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/contact" passHref>
            <Button variant="primary" size="lg" className="shadow-md font-bold">
              Start Your Fee‑Only Consultation <ArrowRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}