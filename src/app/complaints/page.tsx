'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

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

const colors = [
  { key: 'blue', dot: 'bg-blue-600', accent: 'text-blue-700', ring: 'ring-blue-200', soft: 'bg-blue-50' },
  { key: 'red', dot: 'bg-red-600', accent: 'text-red-700', ring: 'ring-red-200', soft: 'bg-red-50' },
  { key: 'green', dot: 'bg-emerald-600', accent: 'text-emerald-700', ring: 'ring-emerald-200', soft: 'bg-emerald-50' },
  { key: 'pink', dot: 'bg-pink-600', accent: 'text-pink-700', ring: 'ring-pink-200', soft: 'bg-pink-50' },
  { key: 'purple', dot: 'bg-violet-600', accent: 'text-violet-700', ring: 'ring-violet-200', soft: 'bg-violet-50' },
  { key: 'skyblue', dot: 'bg-sky-600', accent: 'text-sky-700', ring: 'ring-sky-200', soft: 'bg-sky-50' },
] as const;

export default function ComplaintsPage() {
  const router = useRouter();
  const [layout, setLayout] = useState<'fullwidth' | 'boxed'>('fullwidth');
  const [color, setColor] = useState<(typeof colors)[number]['key']>('blue');

  const theme = useMemo(() => colors.find((c) => c.key === color) ?? colors[0], [color]);

  return (
    <section className="min-h-screen bg-slate-50 text-slate-900">
      <div className={`${layout === 'fullwidth' ? 'w-full' : 'max-w-7xl mx-auto'} px-4 sm:px-6 lg:px-8 py-14`}>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <p className="text-sm text-slate-600">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-1">/</span>
            <span>Complaints</span>
          </p>
          <h1 className={`mt-3 text-4xl md:text-5xl font-extrabold ${theme.accent}`}>Complaints</h1>
          <p className="mt-2 text-slate-700 font-medium">Data for the month ending - 31.10.2025</p>

          <button
            type="button"
            onClick={() => router.back()}
            className="mt-4 inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Go Back
          </button>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-800">Select Your Style</p>
              <p className="text-xs text-slate-600 mt-1">Choose your layout</p>
              <div className="mt-3 flex gap-2">
                {(['fullwidth', 'boxed'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLayout(l)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold border ${layout === l ? `bg-slate-900 text-white border-slate-900` : 'bg-white text-slate-700 border-slate-200'}`}
                  >
                    {l === 'fullwidth' ? 'Fullwidth' : 'Boxed'}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              <p className="text-sm font-semibold text-slate-800">Color scheme</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {colors.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setColor(c.key)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${color === c.key ? `ring-2 ${c.ring} border-slate-300` : 'border-slate-200'}`}
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${c.dot}`} />
                    {`color-${c.key}`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 overflow-x-auto">
            <table className="w-full min-w-[980px] text-sm text-left">
              <thead className={`text-slate-800 ${theme.soft}`}>
                <tr>
                  <th className="p-2">Sr. No</th><th className="p-2">Received from</th><th className="p-2">Pending at the end of last Month</th><th className="p-2">Received</th><th className="p-2">Resolved</th><th className="p-2">Total Pending</th><th className="p-2">Pending Complaints &gt; 3 Month</th><th className="p-2">Average Resolution Time</th>
                </tr>
              </thead>
              <tbody>
                {sourceRows.map((row) => (
                  <tr key={row[0]} className="border-t border-slate-200">{row.map((cell, i) => <td key={i} className="p-2">{cell}</td>)}</tr>
                ))}
                <tr className={`border-t border-slate-300 font-semibold ${theme.soft}`}>
                  <td className="p-2" colSpan={2}>Grand Total</td><td className="p-2">0</td><td className="p-2">0</td><td className="p-2">0</td><td className="p-2">0</td><td className="p-2">0</td><td className="p-2">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">Trend of monthly disposal of complaints</h2>
            <table className="w-full min-w-[760px] text-sm text-left">
              <thead className={`text-slate-800 ${theme.soft}`}><tr><th className="p-2">Sr. No</th><th className="p-2">Month</th><th className="p-2">Carried forward From Previous Month</th><th className="p-2">Received</th><th className="p-2">Resolved</th><th className="p-2">Pending</th></tr></thead>
              <tbody>
                {monthlyRows.map((row) => (<tr key={row[0]} className="border-t border-slate-200">{row.map((cell, i) => <td key={i} className="p-2">{cell}</td>)}</tr>))}
                <tr className={`border-t border-slate-300 font-semibold ${theme.soft}`}><td className="p-2" colSpan={2}>Grand Total</td><td className="p-2">0</td><td className="p-2">0</td><td className="p-2">0</td><td className="p-2">0</td></tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 overflow-x-auto">
            <h2 className="text-xl font-bold mb-4">Trend of annual disposal of complaints</h2>
            <table className="w-full min-w-[760px] text-sm text-left">
              <thead className={`text-slate-800 ${theme.soft}`}><tr><th className="p-2">Sr. No</th><th className="p-2">Year</th><th className="p-2">Carried Forward from Previous Year</th><th className="p-2">Received</th><th className="p-2">Resolved</th><th className="p-2">Pending</th></tr></thead>
              <tbody>
                {annualRows.map((row) => (<tr key={row[0]} className="border-t border-slate-200">{row.map((cell, i) => <td key={i} className="p-2">{cell}</td>)}</tr>))}
                <tr className={`border-t border-slate-300 font-semibold ${theme.soft}`}><td className="p-2" colSpan={2}>Grand Total</td><td className="p-2">0</td><td className="p-2">0</td><td className="p-2">0</td><td className="p-2">0</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className={`text-2xl font-bold ${theme.accent}`}>Sound Finance Solutions for Successful People</h3>
          <p className="mt-3 text-slate-700">
            At Sujan Singh Investment Advisory, I specialize in providing comprehensive financial solutions to help you achieve long-term success. My advisory services are designed to grow, protect, and manage your wealth with personalized strategies tailored for every stage of life. Trust me to guide you through the complexities of finance, ensuring your future remains secure.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold text-slate-900">Quick Links</p>
              <ul className="mt-2 space-y-1 text-slate-700">
                <li><Link href="/">Home</Link></li><li><Link href="/about">About Me</Link></li><li><Link href="/services">Services</Link></li><li><Link href="/faqs">FAQs</Link></li><li><Link href="/disclosures">SEBI Disclosures</Link></li><li><Link href="/contact">Contact Me</Link></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <p className="font-semibold text-slate-900">Contact Information</p>
              <p className="mt-2 text-slate-700">Phone: +91 88021 08844</p>
              <p className="text-slate-700">Email: sujansingh20@gmail.com</p>
              <p className="text-slate-700">Office Address: 713, 7th Floor, Devika Tower, Nehru Place, Delhi- 110019</p>
              <p className="mt-2 text-slate-700">Follow me:</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
