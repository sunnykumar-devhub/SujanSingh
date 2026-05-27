'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Briefcase,
  GraduationCap,
  Handshake,
  ShieldCheck,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Breadcrumb from '@/components/ui/Breadcrumb';

const impactItems = [
  'Indian Army',
  'Indian Air Force',
  'Oil and Natural Gas Corporation (ONGC)',
  'Press Information Bureau (PIB)',
  'Leading National Universities',
];

const cornerstones = [
  {
    title: 'Radical Alignment (100% Fee-Only)',
    detail:
      'Our revenue model is entirely decoupled from product distributions or asset sales. We earn exclusively from transparent, fixed client fees, eliminating hidden commissions and misaligned motives.',
    icon: Handshake,
  },
  {
    title: 'Empirical Objective Mapping',
    detail:
      'We design targeted capital structures around personal milestones, ensuring assets are optimized for horizon planning, liquidity constraints, and tax efficiencies.',
    icon: GraduationCap,
  },
  {
    title: 'Structural Risk Insulation',
    detail:
      'We build robust capital defense systems by auditing insurance architecture and liquidity reserves to protect families from systemic shocks.',
    icon: ShieldCheck,
  },
  {
    title: 'Dynamic Governance & Adaptation',
    detail:
      'A financial roadmap is live. We provide ongoing, data-driven modifications against changing macro conditions, regulations, and life transitions.',
    icon: Briefcase,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100/70 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <Breadcrumb />
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-slate-200/60 bg-white/90 p-8"
        >
          <h1 className="font-serif text-4xl font-bold text-slate-950 sm:text-5xl">
            The Fiduciary Standard in Wealth Stewardship
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
            Bridging institutional expertise with an absolute commitment to unbiased, commission-free financial advisory.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-900 p-6">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="relative rounded-[1.75rem] border border-white/15 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_40%),linear-gradient(150deg,#0f172a,#1e293b_45%,#1d4ed8)] p-6">
              <div className="aspect-[4/5] rounded-2xl border border-white/20 bg-gradient-to-br from-slate-800/60 to-blue-900/70" />
              <p className="mt-4 text-sm text-slate-300">Executive Profile Portrait Placeholder</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/60 bg-white p-8">
            <h2 className="text-2xl font-bold text-slate-950">Executive Profile</h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              Sujan Singh is a SEBI-Registered Investment Adviser (RIA) who holds a Post Graduate Program in Investment Advisory from the National Institute of Securities Markets (NISM). With nearly a decade of professional experience across financial education, strategic asset allocation, and wealth management, his career is anchored on a single mission: democratizing absolute transparency in personal finance.
            </p>
            <p className="mt-4 leading-relaxed text-slate-700">
              Before transitioning into a pure fiduciary advisory practice, Sujan served as Chief Operations Manager at EIFS Pvt. Ltd. from 2016 to 2023. During this tenure, he spearheaded operational scale, led corporate strategy, and pioneered national financial literacy campaigns that equipped thousands of citizens, professionals, and families with practical financial command.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mt-10 rounded-3xl border border-slate-200/60 bg-white p-8"
        >
          <h2 className="text-2xl font-bold text-slate-950">Credibility & Institutional Impact</h2>
          <p className="mt-3 max-w-4xl leading-relaxed text-slate-700">
            Sujan&apos;s large-scale national financial programs have been deployed across premier governmental, corporate, defense, media, and academic institutions.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {impactItems.map((item) => (
              <div key={item} className="rounded-xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                {item}
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mt-10"
        >
          <h2 className="text-2xl font-bold text-slate-950">The 4 Fiduciary Cornerstones</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {cornerstones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-slate-200/60 bg-slate-50 p-6"
                >
                  <Icon className="h-6 w-6 text-blue-700" />
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.detail}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mt-10 rounded-3xl border border-slate-200/60 bg-white p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800">
                <Award className="h-3.5 w-3.5" />
                Begin With Clarity
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Schedule Your Initial Advisory Consultation</h3>
              <p className="mt-2 max-w-2xl text-slate-700">
                Build a structured, unbiased, and long-term capital roadmap with fiduciary-first guidance.
              </p>
            </div>
            <Link href="/contact" className="inline-block">
              <Button variant="secondary" size="lg">
                Book a Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
