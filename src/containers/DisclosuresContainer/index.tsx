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
    <section className="min-h-screen bg-slate-50 text-slate-900">
      <Breadcrumb />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-slate-900">
          SEBI RIA Disclosures and Grievance Redressal Data
        </motion.h1>

        <div className="mt-10 space-y-6">
          <motion.article variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-blue-700" />1. SEBI Registration Details</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <p><strong>Name:</strong> Sujan Singh</p>
              <p><strong>SEBI Registration No.:</strong> INA000020864</p>
              <p><strong>Type of Registration:</strong> Individual Investment Adviser</p>
              <p><strong>Date of Registration:</strong> 07-08-2025</p>
              <p><strong>Place of Registration:</strong> New Delhi, Delhi</p>
            </div>
          </motion.article>

          <motion.article variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><FileCheck className="h-5 w-5 text-blue-700" />2. Nature of Services</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-slate-700">
              <li>We provide non-discretionary, fee-only financial planning and investment advisory services.</li>
              <li>We do not sell financial products or earn commissions from any third-party.</li>
              <li>Our advice is 100% unbiased and client-centric.</li>
            </ul>
          </motion.article>

          <motion.article variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold">3. Compensation Disclosure</h2>
            <p className="mt-4 text-sm text-slate-700">
              Our only source of income is the professional fee paid by clients. We do not earn any commissions, referral income, or incentives, ensuring zero conflict of interest.
            </p>
          </motion.article>

          <motion.article variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold">4. Scope of Services</h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
              {scopeItems.map((item) => (
                <li key={item} className="rounded-lg bg-slate-100 px-3 py-2">{item}</li>
              ))}
            </ul>
          </motion.article>

          <motion.article variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold flex items-center gap-2"><AlertCircle className="h-5 w-5 text-amber-600" />5. Risk Disclosure</h2>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-slate-700">
              <li>Investments in securities are subject to market risks.</li>
              <li>Past performance is not indicative of future returns.</li>
              <li>Clients are advised to read all documents carefully before investing.</li>
            </ul>
          </motion.article>

          <motion.article variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold">6. Grievance Redressal</h2>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-700" />Email: <a className="text-blue-700 hover:underline" href="mailto:sujansingh20@gmail.com">sujansingh20@gmail.com</a></p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-blue-700" />Phone: <a className="text-blue-700 hover:underline" href="tel:+918802108844">+91 8802108844</a></p>
              <p>
                If unresolved, clients can lodge complaints on SEBI SCORES at{' '}
                <a href="https://scores.gov.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-700 hover:underline">
                  https://scores.gov.in <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </p>
            </div>
          </motion.article>

          <motion.article variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold">7. Privacy Policy</h2>
            <p className="mt-4 text-sm text-slate-700">
              We respect your privacy. Client data is kept strictly confidential and never shared with third parties without consent.
            </p>
          </motion.article>

          <motion.article variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold">8. Disclaimer</h2>
            <p className="mt-4 text-sm text-slate-700">
              The content on this website is for informational purposes only and does not constitute investment advice unless a formal engagement is established.
            </p>
            <p className="mt-2 text-sm text-slate-700">We do not solicit or sell any financial products.</p>
          </motion.article>
        </div>

        <motion.section variants={itemVariants} className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-xl font-bold flex items-center gap-2"><Scale className="h-5 w-5 text-blue-700" />Investment Advisory - Number of Complaints (February 2026)</h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'At the beginning of the month', value: '0' },
              { label: 'Received During the Month', value: '0' },
              { label: 'Resolved during the month', value: '0' },
              { label: 'Pending at the end of the month', value: '0' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-slate-100 p-4 text-center">
                <p className="text-3xl font-extrabold text-slate-900">{item.value}</p>
                <p className="mt-2 text-xs font-medium text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>

          <Link href="/complaints" className="mt-6 inline-block">
            <Button variant="secondary" size="lg">
              View Complete Grievance Status Here <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.section>
      </motion.div>
    </section>
  );
}
