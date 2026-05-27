'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar,
  CheckCircle,
  Clock,
  Briefcase,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Breadcrumb from '@/components/ui/Breadcrumb';

type FormState = {
  fullName: string;
  email: string;
  mobile: string;
  advisoryLayer: string;
  engagementMode: 'video' | 'office';
  message: string;
};

const initialForm: FormState = {
  fullName: '',
  email: '',
  mobile: '',
  advisoryLayer: 'Comprehensive Financial Planning',
  engagementMode: 'video',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100/80 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <Breadcrumb />
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <h1 className="font-serif text-4xl font-bold text-slate-950 sm:text-5xl">Partner with a Trusted Fiduciary</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
            Initiate a transparent, commission-free advisory engagement. Reach out via our structural intake framework or establish direct corporate contact.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.aside initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 lg:col-span-4">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Corporate Headquarters</h2>
              <div className="mt-5 space-y-5 text-sm text-slate-700">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-blue-700" />
                  <p>713, 7th Floor, Devika Tower, Nehru Place, New Delhi, Delhi - 110019</p>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-blue-700" />
                  <a href="tel:+918802108844" className="transition hover:text-blue-700">+91 88021 08844</a>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-blue-700" />
                  <a href="mailto:sujansingh20@gmail.com" className="break-all transition hover:text-blue-700">sujansingh20@gmail.com</a>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 text-blue-700" />
                  <div>
                    <p><strong>Monday through Friday:</strong> 9:00 AM - 6:00 PM (IST)</p>
                    <p className="mt-1"><strong>Saturday:</strong> Exclusively by Prior Appointment</p>
                    <p className="mt-1"><strong>Sunday:</strong> Operations Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-slate-900 p-6 text-slate-100 shadow-lg">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">Connect</h3>
              <div className="mt-4 flex items-center gap-3">
                {[Briefcase, MessageCircle, Globe].map((Icon, i) => (
                  <button key={i} type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:-translate-y-0.5 hover:bg-white/20">
                    <Icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>

          <motion.section initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
                  <input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} required placeholder="Enter your legal name" className="w-full rounded-xl border border-slate-200/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="name@company.com" className="w-full rounded-xl border border-slate-200/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Mobile Number</label>
                  <input value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} required placeholder="+91 XXXXX XXXXX" className="w-full rounded-xl border border-slate-200/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Advisory Interest Layer</label>
                  <select value={form.advisoryLayer} onChange={(e) => setForm({ ...form, advisoryLayer: e.target.value })} className="w-full rounded-xl border border-slate-200/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                    <option>Comprehensive Financial Planning</option>
                    <option>Retirement Strategy Engineering</option>
                    <option>Equity &amp; Stock Advisory Portfolio Setup</option>
                    <option>Tax Infrastructure Optimization</option>
                    <option>General Inquiries</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-slate-700">Preferred Engagement Mode</p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <label className="flex items-center gap-3 rounded-xl border border-slate-200/80 px-4 py-3 text-sm text-slate-800">
                    <input type="radio" name="mode" checked={form.engagementMode === 'video'} onChange={() => setForm({ ...form, engagementMode: 'video' })} className="h-4 w-4 accent-blue-700" />
                    Secure Video Consultation (Recommended)
                  </label>
                  <label className="flex items-center gap-3 rounded-xl border border-slate-200/80 px-4 py-3 text-sm text-slate-800">
                    <input type="radio" name="mode" checked={form.engagementMode === 'office'} onChange={() => setForm({ ...form, engagementMode: 'office' })} className="h-4 w-4 accent-blue-700" />
                    In-Person Meeting (Delhi/NCR Office)
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-slate-700">Brief Portfolio Brief / Message</label>
                <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="Briefly outline your primary financial goals or questions..." className="w-full rounded-xl border border-slate-200/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
              </div>

              <Button 
                type="submit"
                variant="secondary" 
                size="lg" 
                isLoading={status === 'submitting'} 
                className="mt-6"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Strategic Inquiry'}
                {status === 'success' && <CheckCircle className="ml-2 h-4 w-4" />}
              </Button>
            </form>

            <div className="mt-8 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-slate-950">Why Connect?</h3>
              <div className="mt-5 space-y-4 text-slate-700">
                <div>
                  <p className="font-semibold text-slate-900">1. Tailored Portfolio Engineering</p>
                  <p className="text-sm">Recalibrate your current assets with data-driven, objective guidance structured around your risk limits and net-worth milestones.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">2. Unbiased Fiscal Stewardship</p>
                  <p className="text-sm">Address complex tax optimizations, inflation structures, and legacy transitions fully free from hidden product distribution commissions.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">3. Long-Term Capital Accountability</p>
                  <p className="text-sm">Build a long-term partnership focused on reducing behavioral allocation mistakes and optimizing growth through changing market conditions.</p>
                </div>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="h-4 w-4" />
                Appointments are prioritized by inquiry completeness.
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
