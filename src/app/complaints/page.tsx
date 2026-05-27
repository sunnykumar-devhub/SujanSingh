'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, ShieldAlert, TableProperties } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';

const sourceRows = [
  ['1', 'Directly from', '0', '0', '0', '0', '0', '0'],
  ['2', 'SEBI (SCORES)', '0', '0', '0', '0', '0', '0'],
  ['3', 'Other Sources (if any)', '0', '0', '0', '0', '0', '0'],
];

const monthlyRows = [
  ['1', 'Jan, 2026', '0', '0', '0', '0'],
  ['2', 'Feb, 2026', '0', '0', '0', '0'],
  ['3', 'Mar, 2026', '0', '0', '0', '0'],
];

const annualRows = [['1', '2026', '0', '0', '0', '0']];

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-slate-50/60 pb-24 pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <Breadcrumb />

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-slate-200/60 bg-white/90 p-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800">
                <ShieldAlert className="h-3.5 w-3.5" />
                Grievance Redressal Mechanism
              </p>
              <h1 className="font-serif text-4xl font-bold text-slate-950 sm:text-5xl mt-3">
                Complaints &amp; Grievance Status
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-700">
                In compliance with SEBI Regulations, we publish the month-on-month status of client grievances and their resolution tracking. Fiduciary accountability remains our absolute standard.
              </p>
            </div>
            <div className="shrink-0 bg-slate-50 rounded-2xl border border-slate-200/60 p-4 text-center md:text-right">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Data Ending</span>
              <span className="text-lg font-black text-slate-900 block mt-1">October 31, 2025</span>
            </div>
          </div>
        </motion.section>

        {/* Tables Section */}
        <div className="mt-10 space-y-10">
          
          {/* Table 1 */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <TableProperties className="h-5 w-5 text-blue-700" />
              <h2 className="text-xl font-bold text-slate-950">Grievance Status for Current Month</h2>
            </div>
            <div className="overflow-x-auto no-scrollbar -mx-6 px-6">
              <table className="w-full min-w-[980px] text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-4 px-4 font-bold rounded-l-2xl">Sr. No</th>
                    <th className="py-4 px-4 font-bold">Received From</th>
                    <th className="py-4 px-4 font-bold text-center">Pending Last Month</th>
                    <th className="py-4 px-4 font-bold text-center">Received</th>
                    <th className="py-4 px-4 font-bold text-center">Resolved</th>
                    <th className="py-4 px-4 font-bold text-center">Total Pending</th>
                    <th className="py-4 px-4 font-bold text-center">Pending &gt; 3 Months</th>
                    <th className="py-4 px-4 font-bold text-center rounded-r-2xl">Avg Resolution Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {sourceRows.map((row) => (
                    <tr key={row[0]} className="hover:bg-slate-50/40 transition-colors">
                      <td className="py-4 px-4 font-semibold text-slate-400">{row[0]}</td>
                      <td className="py-4 px-4 font-semibold text-slate-900">{row[1]}</td>
                      <td className="py-4 px-4 text-center">{row[2]}</td>
                      <td className="py-4 px-4 text-center">{row[3]}</td>
                      <td className="py-4 px-4 text-center">{row[4]}</td>
                      <td className="py-4 px-4 text-center">{row[5]}</td>
                      <td className="py-4 px-4 text-center">{row[6]}</td>
                      <td className="py-4 px-4 text-center text-slate-500 font-medium">{row[7]}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-slate-200 bg-slate-50/80 font-bold text-slate-950">
                    <td className="py-4 px-4 rounded-l-2xl" colSpan={2}>Grand Total</td>
                    <td className="py-4 px-4 text-center">0</td>
                    <td className="py-4 px-4 text-center">0</td>
                    <td className="py-4 px-4 text-center">0</td>
                    <td className="py-4 px-4 text-center">0</td>
                    <td className="py-4 px-4 text-center">0</td>
                    <td className="py-4 px-4 text-center rounded-r-2xl">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Table 2 */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <TableProperties className="h-5 w-5 text-blue-700" />
              <h2 className="text-xl font-bold text-slate-950">Trend of Monthly Disposal of Complaints</h2>
            </div>
            <div className="overflow-x-auto no-scrollbar -mx-6 px-6">
              <table className="w-full min-w-[760px] text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-4 px-4 font-bold rounded-l-2xl">Sr. No</th>
                    <th className="py-4 px-4 font-bold">Month</th>
                    <th className="py-4 px-4 font-bold text-center">Carried Forward</th>
                    <th className="py-4 px-4 font-bold text-center">Received</th>
                    <th className="py-4 px-4 font-bold text-center">Resolved</th>
                    <th className="py-4 px-4 font-bold text-center rounded-r-2xl">Pending</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {monthlyRows.map((row) => (
                    <tr key={row[0]} className="hover:bg-slate-50/40 transition-colors">
                      <td className="py-4 px-4 font-semibold text-slate-400">{row[0]}</td>
                      <td className="py-4 px-4 font-semibold text-slate-900">{row[1]}</td>
                      <td className="py-4 px-4 text-center">{row[2]}</td>
                      <td className="py-4 px-4 text-center">{row[3]}</td>
                      <td className="py-4 px-4 text-center">{row[4]}</td>
                      <td className="py-4 px-4 text-center">{row[5]}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-slate-200 bg-slate-50/80 font-bold text-slate-950">
                    <td className="py-4 px-4 rounded-l-2xl" colSpan={2}>Grand Total</td>
                    <td className="py-4 px-4 text-center">0</td>
                    <td className="py-4 px-4 text-center">0</td>
                    <td className="py-4 px-4 text-center">0</td>
                    <td className="py-4 px-4 text-center rounded-r-2xl">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Table 3 */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <TableProperties className="h-5 w-5 text-blue-700" />
              <h2 className="text-xl font-bold text-slate-950">Trend of Annual Disposal of Complaints</h2>
            </div>
            <div className="overflow-x-auto no-scrollbar -mx-6 px-6">
              <table className="w-full min-w-[760px] text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/50 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-4 px-4 font-bold rounded-l-2xl">Sr. No</th>
                    <th className="py-4 px-4 font-bold">Year</th>
                    <th className="py-4 px-4 font-bold text-center">Carried Forward</th>
                    <th className="py-4 px-4 font-bold text-center">Received</th>
                    <th className="py-4 px-4 font-bold text-center">Resolved</th>
                    <th className="py-4 px-4 font-bold text-center rounded-r-2xl">Pending</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {annualRows.map((row) => (
                    <tr key={row[0]} className="hover:bg-slate-50/40 transition-colors">
                      <td className="py-4 px-4 font-semibold text-slate-400">{row[0]}</td>
                      <td className="py-4 px-4 font-semibold text-slate-900">{row[1]}</td>
                      <td className="py-4 px-4 text-center">{row[2]}</td>
                      <td className="py-4 px-4 text-center">{row[3]}</td>
                      <td className="py-4 px-4 text-center">{row[4]}</td>
                      <td className="py-4 px-4 text-center">{row[5]}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-slate-200 bg-slate-50/80 font-bold text-slate-950">
                    <td className="py-4 px-4 rounded-l-2xl" colSpan={2}>Grand Total</td>
                    <td className="py-4 px-4 text-center">0</td>
                    <td className="py-4 px-4 text-center">0</td>
                    <td className="py-4 px-4 text-center">0</td>
                    <td className="py-4 px-4 text-center rounded-r-2xl">0</td>
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
          className="mt-10 rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-800">
                <Award className="h-3.5 w-3.5" />
                Empirical Excellence
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">Fiduciary Commitment &amp; Trust</h3>
              <p className="mt-2 max-w-2xl text-slate-700">
                Sujan Singh Investment Advisory delivers structured, objective wealth management free of commissions.
              </p>
            </div>
            <Link href="/contact" className="inline-block shrink-0">
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
