'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, ShieldAlert, TableProperties } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';

const sourceRows = [
  ['1', 'Directly from Investors', '0', '0', '0', '0', '0', '0'],
  ['2', 'SEBI (SCORES)', '0', '0', '0', '0', '0', '0'],
  ['3', 'Other Sources (if any)', '0', '0', '0', '0', '0', '0'],
];

const monthlyRows = [
  ['1', 'January, 2026', '0', '0', '0', '0'],
  ['2', 'February, 2026', '0', '0', '0', '0'],
  ['3', 'March, 2026', '0', '0', '0', '0'],
];

const annualRows = [['1', '2026', '0', '0', '0', '0']];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function ComplaintsPage() {
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
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-6 flex items-center gap-2">
              <ShieldAlert className="h-4 w-4" /> Regulatory Compliance Archive
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-slate-900 mb-8">
              Institutional Grievance <br />Registry.
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mb-10">
              In strict adherence to SEBI Regulations, we publicly index the month-on-month status of client grievances and structural resolutions. Fiduciary accountability is our absolute baseline.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 relative mt-12 md:mt-0">
            {/* Asymmetrical offset credential block */}
            <div className="relative z-10 bg-slate-900 p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] md:-ml-8 md:mt-24">
              <span className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
                Reporting Period
              </span>
              <p className="font-mono text-3xl leading-snug text-white mb-6">
                Feb 2026
              </p>
              <div className="pt-6 border-t border-slate-700/50 flex justify-between items-center text-slate-300">
                <span className="text-sm font-semibold tracking-wide">Total Pending:</span>
                <span className="font-mono text-white text-lg font-bold">00</span>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-3/4 h-[120%] bg-blue-900/5 -z-10 translate-x-4 -translate-y-8 mix-blend-multiply" />
          </motion.div>
        </motion.div>

        {/* Ledger Tables */}
        <div className="mt-24 md:mt-32 space-y-20">
          
          {/* Ledger 1 */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-stone-200 pb-4">
              <div>
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><TableProperties className="h-4 w-4" /> Registry 01</span>
                <h2 className="font-serif text-3xl text-slate-900">Current Month Status</h2>
              </div>
            </div>
            <div className="bg-white border border-stone-200 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] overflow-x-auto">
              <table className="w-full min-w-[980px] text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50/50">
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest">Sr. No</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest">Received From</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Pending Prev.</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Received</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Resolved</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Total Pending</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Pending &gt; 3M</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Avg Res Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-slate-700">
                  {sourceRows.map((row) => (
                    <tr key={row[0]} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-5 px-6 font-mono text-slate-400">{row[0]}</td>
                      <td className="py-5 px-6 font-semibold text-slate-900">{row[1]}</td>
                      <td className="py-5 px-6 text-center font-mono">{row[2]}</td>
                      <td className="py-5 px-6 text-center font-mono">{row[3]}</td>
                      <td className="py-5 px-6 text-center font-mono">{row[4]}</td>
                      <td className="py-5 px-6 text-center font-mono">{row[5]}</td>
                      <td className="py-5 px-6 text-center font-mono">{row[6]}</td>
                      <td className="py-5 px-6 text-center text-slate-500">{row[7]}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-stone-300 bg-stone-50 font-bold text-slate-900">
                    <td className="py-5 px-6 uppercase tracking-wider text-xs" colSpan={2}>Aggregate Total</td>
                    <td className="py-5 px-6 text-center font-mono text-base">0</td>
                    <td className="py-5 px-6 text-center font-mono text-base">0</td>
                    <td className="py-5 px-6 text-center font-mono text-base">0</td>
                    <td className="py-5 px-6 text-center font-mono text-base">0</td>
                    <td className="py-5 px-6 text-center font-mono text-base">0</td>
                    <td className="py-5 px-6 text-center font-mono text-base text-slate-500">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Ledger 2 */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-stone-200 pb-4">
              <div>
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><TableProperties className="h-4 w-4" /> Registry 02</span>
                <h2 className="font-serif text-3xl text-slate-900">Monthly Disposal Trajectory</h2>
              </div>
            </div>
            <div className="bg-white border border-stone-200 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] overflow-x-auto">
              <table className="w-full min-w-[760px] text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50/50">
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest">Sr. No</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest">Fiscal Month</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Carried Forward</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Received</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Resolved</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Pending</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-slate-700">
                  {monthlyRows.map((row) => (
                    <tr key={row[0]} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-5 px-6 font-mono text-slate-400">{row[0]}</td>
                      <td className="py-5 px-6 font-semibold text-slate-900">{row[1]}</td>
                      <td className="py-5 px-6 text-center font-mono">{row[2]}</td>
                      <td className="py-5 px-6 text-center font-mono">{row[3]}</td>
                      <td className="py-5 px-6 text-center font-mono">{row[4]}</td>
                      <td className="py-5 px-6 text-center font-mono">{row[5]}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-stone-300 bg-stone-50 font-bold text-slate-900">
                    <td className="py-5 px-6 uppercase tracking-wider text-xs" colSpan={2}>Aggregate Total</td>
                    <td className="py-5 px-6 text-center font-mono text-base">0</td>
                    <td className="py-5 px-6 text-center font-mono text-base">0</td>
                    <td className="py-5 px-6 text-center font-mono text-base">0</td>
                    <td className="py-5 px-6 text-center font-mono text-base">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Ledger 3 */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-stone-200 pb-4">
              <div>
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2"><TableProperties className="h-4 w-4" /> Registry 03</span>
                <h2 className="font-serif text-3xl text-slate-900">Annual Disposal Trajectory</h2>
              </div>
            </div>
            <div className="bg-white border border-stone-200 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] overflow-x-auto">
              <table className="w-full min-w-[760px] text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50/50">
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest">Sr. No</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest">Fiscal Year</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Carried Forward</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Received</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Resolved</th>
                    <th className="py-5 px-6 font-mono text-xs text-slate-500 uppercase tracking-widest text-center">Pending</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-slate-700">
                  {annualRows.map((row) => (
                    <tr key={row[0]} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-5 px-6 font-mono text-slate-400">{row[0]}</td>
                      <td className="py-5 px-6 font-semibold text-slate-900">{row[1]}</td>
                      <td className="py-5 px-6 text-center font-mono">{row[2]}</td>
                      <td className="py-5 px-6 text-center font-mono">{row[3]}</td>
                      <td className="py-5 px-6 text-center font-mono">{row[4]}</td>
                      <td className="py-5 px-6 text-center font-mono">{row[5]}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-stone-300 bg-stone-50 font-bold text-slate-900">
                    <td className="py-5 px-6 uppercase tracking-wider text-xs" colSpan={2}>Aggregate Total</td>
                    <td className="py-5 px-6 text-center font-mono text-base">0</td>
                    <td className="py-5 px-6 text-center font-mono text-base">0</td>
                    <td className="py-5 px-6 text-center font-mono text-base">0</td>
                    <td className="py-5 px-6 text-center font-mono text-base">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

        </div>

        {/* Footer CTA */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mt-24 bg-white border border-stone-200 p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)]"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">
                <Award className="h-4 w-4" />
                Empirical Excellence
              </p>
              <h3 className="font-serif text-3xl font-bold text-slate-900">Absolute Fiduciary Architecture</h3>
              <p className="mt-3 max-w-2xl text-slate-600 leading-relaxed">
                Sujan Singh Investment Advisory engineers structured, mathematically objective wealth management entirely insulated from product distributions and hidden commissions.
              </p>
            </div>
            <Link href="/contact" className="inline-block shrink-0 mt-4 lg:mt-0">
              <Button variant="primary" size="lg" className="rounded-none px-8 py-4 tracking-wide font-semibold">
                Establish Contact <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
