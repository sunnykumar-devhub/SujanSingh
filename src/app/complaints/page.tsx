'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, ShieldAlert, TableProperties, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import PageSectionLayout from '@/components/layout/PageSectionLayout';
import Button from '@/components/ui/Button';

const sourceRows = [
  ['1', 'Directly from Investors', '0', '0', '0', '0', '0', '0'],
  ['2', 'SEBI (SCORES)', '0', '0', '0', '0', '0', '0'],
  ['3', 'Other Sources', '0', '0', '0', '0', '0', '0'],
];

const monthlyRows = [
  ['1', 'January 2026', '0', '0', '0', '0'],
  ['2', 'February 2026', '0', '0', '0', '0'],
  ['3', 'March 2026', '0', '0', '0', '0'],
];

const annualRows = [['1', '2026', '0', '0', '0', '0']];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ComplaintsPage() {
  return (
    <PageSectionLayout>

      {/* HERO */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start"
      >
        <motion.div variants={itemVariants} className="md:col-span-8">
          <span className="text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold flex items-center gap-2 mb-6">
            <ShieldAlert className="h-4 w-4" />
            SEBI Regulatory Compliance Dashboard
          </span>

          <h1 className="font-serif text-5xl md:text-6xl leading-tight text-slate-900 mb-6">
            Investor Grievance <br /> Transparency Report
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
            In accordance with SEBI (Investment Advisers) Regulations, all investor complaints and resolutions are recorded and disclosed for full transparency and accountability.
          </p>

          {/* CTA ROW */}
          <div className="flex flex-wrap gap-4 mt-8">

            <Link href="/disclosures">
              <Button className="rounded-none px-6 py-3">
                View Complete Grievance Status
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/disclosures/imposters">
              <Button variant="secondary" className="rounded-none px-6 py-3">
                Report Impersonation
                <AlertTriangle className="ml-2 h-4 w-4" />
              </Button>
            </Link>

          </div>
        </motion.div>

        {/* SIDE INFO */}
        <motion.div variants={itemVariants} className="md:col-span-4">
          <div className="bg-slate-900 text-white p-8 border border-slate-800">
            <p className="text-xs uppercase tracking-widest text-blue-400 mb-3">
              Reporting Period
            </p>
            <p className="text-3xl font-mono mb-6">Oct 2025</p>

            <div className="border-t border-slate-700 pt-4 flex justify-between">
              <span className="text-sm text-slate-300">Total Pending</span>
              <span className="font-mono text-white">0</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* TABLE 1 */}
      <section className="mt-24">
        <div className="mb-6">
          <h2 className="text-2xl font-serif text-slate-900 flex items-center gap-2">
            <TableProperties className="h-5 w-5 text-blue-700" />
            Current Month Complaint Status
          </h2>
        </div>

        <div className="overflow-x-auto border border-slate-200 bg-white">
          <table className="w-full min-w-[900px] text-sm">
            <thead className="bg-slate-50 text-slate-600 uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4 text-left">Sr</th>
                <th className="p-4 text-left">Source</th>
                <th className="p-4">Pending Prev</th>
                <th className="p-4">Received</th>
                <th className="p-4">Resolved</th>
                <th className="p-4">Pending</th>
                <th className="p-4">3 Months</th>
                <th className="p-4">Avg Time</th>
              </tr>
            </thead>

            <tbody>
              {sourceRows.map((r) => (
                <tr key={r[0]} className="border-t hover:bg-slate-50">
                  {r.map((c, i) => (
                    <td key={i} className="p-4 text-center font-mono text-slate-700">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TABLE 2 */}
      <section className="mt-20">
        <h2 className="text-2xl font-serif mb-6">Monthly Disposal Trend</h2>
        <div className="overflow-x-auto border border-slate-200 bg-white">
          <table className="w-full min-w-[700px] text-sm">
            <thead className="bg-slate-50 text-xs uppercase">
              <tr>
                <th className="p-4">Sr</th>
                <th className="p-4">Month</th>
                <th className="p-4">Carried</th>
                <th className="p-4">Received</th>
                <th className="p-4">Resolved</th>
                <th className="p-4">Pending</th>
              </tr>
            </thead>
            <tbody>
              {monthlyRows.map((r) => (
                <tr key={r[0]} className="border-t">
                  {r.map((c, i) => (
                    <td key={i} className="p-4 text-center font-mono">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TABLE 3 */}
      <section className="mt-20">
        <h2 className="text-2xl font-serif mb-6">Annual Disposal Trend</h2>
        <div className="overflow-x-auto border border-slate-200 bg-white">
          <table className="w-full min-w-[700px] text-sm">
            <thead className="bg-slate-50 text-xs uppercase">
              <tr>
                <th className="p-4">Sr</th>
                <th className="p-4">Year</th>
                <th className="p-4">Carried</th>
                <th className="p-4">Received</th>
                <th className="p-4">Resolved</th>
                <th className="p-4">Pending</th>
              </tr>
            </thead>
            <tbody>
              {annualRows.map((r) => (
                <tr key={r[0]} className="border-t">
                  {r.map((c, i) => (
                    <td key={i} className="p-4 text-center font-mono">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="mt-24 bg-slate-900 text-white p-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-400">
              Empirical Compliance
            </p>
            <h3 className="text-2xl font-serif mt-2">
              Absolute Fiduciary Transparency
            </h3>
            <p className="text-slate-300 mt-3 max-w-xl">
              We maintain zero pending complaints and publish all grievance data in accordance with SEBI regulatory standards.
            </p>
          </div>

          <Link href="/contact">
            <Button className="rounded-none px-6 py-3">
              Contact Compliance Desk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

    </PageSectionLayout>
  );
}