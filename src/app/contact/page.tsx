'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
  ShieldCheck,
  BadgeCheck,
  Award,
  ArrowRight,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import PageSectionLayout from '@/components/layout/PageSectionLayout';
import { containerVariants, itemVariants } from '@/lib/animations';

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
    }, 1200);
  };

  return (
    <PageSectionLayout
      fullWidthContent={
        <>
          {/* ─── SECTION 3: WHY CONTACT SECTION ─── */}
          <section className="bg-stone-50 py-24 border-t border-stone-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="block text-xs uppercase tracking-[0.2em] text-blue-600 font-bold mb-4">
                  Engagement Rationales
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
                  Why Initiate Contact?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Structural Financial Clarity',
                    desc: 'Reorganize fragmented financial positions, duplicate portfolios, and legacy policy layers into a coherent long-term strategy.',
                  },
                  {
                    title: 'Conflict-Free Advisory Model',
                    desc: '100% fee-only fiduciary structure with absolutely no product sale commissions, direct kickbacks, or hidden incentives.',
                  },
                  {
                    title: 'Data-Driven Wealth Architecture',
                    desc: 'Mathematical, milestone-oriented capital mapping designed specifically to sustain purchase power across generational cycles.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-stone-200/60 p-8 flex flex-col justify-between hover:border-slate-350 transition-all duration-300">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-4">Benefit 0{idx + 1}</span>
                      <h3 className="font-serif text-xl text-slate-950 mb-3">{item.title}</h3>
                      <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── SECTION 6: FIDUCIARY TRUST STRIP ─── */}
          <section className="bg-white py-16 border-t border-stone-200/50">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="inline-flex items-center justify-center gap-2.5 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Fiduciary Stewardship Commitment</span>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
                All client engagements are bound strictly by statutory SEBI Individual RIA compliance directives. We accept no commissions, sell no insurance products, and offer complete objectivity throughout your compounding tracks.
              </p>
            </div>
          </section>

          {/* ─── SECTION 7: FINAL CTA SECTION ─── */}
          <section className="bg-slate-900 py-24 relative overflow-hidden border-t border-slate-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_50%)]" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
                Begin Your Fiduciary Engagement
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Submit your foundational parameters and initiate a structured consultation designed for long-term wealth clarity and disciplined financial planning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#intake-form" passHref>
                  <button className="inline-flex items-center gap-3 bg-white text-slate-900 text-xs tracking-wider uppercase font-bold px-8 py-4 hover:bg-stone-250 transition-colors w-full sm:w-auto justify-center">
                    Submit Intake Inquiry
                    <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </>
      }
    >
      {/* ─── SECTION 1: HERO / CONTACT INTRO SECTION ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start"
      >
        <motion.div variants={itemVariants} className="md:col-span-8">
          <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-6">
            Establish Contact
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-slate-900 mb-8">
            Establish Contact.
          </h1>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mb-8">
            Initiate a transparent, fee-only fiduciary engagement through our structured consultation framework designed for clarity, compliance, and precision.
          </p>

          <p className="text-xs text-slate-500 font-semibold italic mb-8">
            * All engagements begin only after formal advisory structuring and suitability risk profiling.
          </p>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-b border-stone-200/60 py-6">
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">RIA Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Fee-Only Advisory</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4.5 w-4.5 text-blue-600 flex-shrink-0" />
              <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Zero Commissions</span>
            </div>
          </div>
        </motion.div>

        {/* Sidebar Mandate Card */}
        <motion.div variants={itemVariants} className="md:col-span-4 relative mt-12 md:mt-0">
          <div className="relative z-10 bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-200/50 md:-ml-8 md:mt-16">
            <span className="block text-xs uppercase tracking-[0.2em] text-slate-400 font-semibold mb-4">
              Advisory Mandate
            </span>
            <p className="font-serif text-xl leading-snug text-slate-900 mb-6 italic">
              &quot;Objectivity is not given; it is engineered through proper structuring.&quot;
            </p>
            <div className="pt-6 border-t border-stone-100 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-700" />
              <p className="font-bold text-slate-900 text-sm">Fiduciary Grade</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-3/4 h-[120%] bg-stone-100 -z-10 translate-x-4 -translate-y-8 mix-blend-multiply" />
        </motion.div>
      </motion.div>

      {/* ─── SECTION 2: CONTACT INFORMATION SECTION ─── */}
      <div className="mt-32 pt-24 border-t border-stone-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Corporate HQ */}
          <div className="bg-stone-50 border border-stone-200/60 p-6 flex flex-col justify-between hover:border-slate-350 hover:bg-white transition-all">
            <div>
              <div className="h-8 w-8 bg-blue-50 flex items-center justify-center rounded-full text-blue-700 mb-4">
                <MapPin className="h-4 w-4" />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-2">Corporate HQ</h3>
              <p className="text-slate-900 font-serif text-sm leading-relaxed">
                713, 7th Floor, Devika Tower,<br />Nehru Place, New Delhi - 110019
              </p>
            </div>
          </div>

          {/* Direct Line */}
          <div className="bg-stone-50 border border-stone-200/60 p-6 flex flex-col justify-between hover:border-slate-350 hover:bg-white transition-all">
            <div>
              <div className="h-8 w-8 bg-blue-50 flex items-center justify-center rounded-full text-blue-700 mb-4">
                <Phone className="h-4 w-4" />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-2">Direct Phone</h3>
              <a href="tel:+918802108844" className="text-slate-900 font-serif text-base font-bold transition hover:text-blue-700">
                +91 88021 08844
              </a>
            </div>
          </div>

          {/* Email Support */}
          <div className="bg-stone-50 border border-stone-200/60 p-6 flex flex-col justify-between hover:border-slate-350 hover:bg-white transition-all">
            <div>
              <div className="h-8 w-8 bg-blue-50 flex items-center justify-center rounded-full text-blue-700 mb-4">
                <Mail className="h-4 w-4" />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-2">Registry Email</h3>
              <a href="mailto:sujansingh20@gmail.com" className="text-slate-900 font-serif text-sm font-bold break-all transition hover:text-blue-700">
                sujansingh20@gmail.com
              </a>
            </div>
          </div>

          {/* Clock Operations */}
          <div className="bg-stone-50 border border-stone-200/60 p-6 flex flex-col justify-between hover:border-slate-350 hover:bg-white transition-all">
            <div>
              <div className="h-8 w-8 bg-blue-50 flex items-center justify-center rounded-full text-blue-700 mb-4">
                <Clock className="h-4 w-4" />
              </div>
              <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-2">Operational Hours</h3>
              <div className="text-slate-900 font-serif text-xs leading-relaxed space-y-0.5">
                <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
                <p>Sat: Appointment Only</p>
                <p>Sun: Closed (IST)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── SECTION 4: CLIENT INTAKE FORM SECTION ─── */}
      <div id="intake-form" className="mt-32 pt-24 border-t border-stone-200/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-12 relative">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-12 md:p-16 border border-emerald-100 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)]"
                >
                  <div className="mx-auto w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Intake Transmitted.</h3>
                  <p className="text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
                    Your structural inquiry has been routed directly to our SEBI registry desk. We will establish contact within 24 operational hours to schedule your preliminary encrypted consultation.
                  </p>
                  <Button
                    onClick={() => setStatus('idle')}
                    variant="outline"
                    className="mt-8 border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="bg-white p-8 md:p-12 border border-stone-200/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)]"
                >
                  <div className="mb-10">
                    <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">
                      Fiduciary Registration Portal
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-slate-900">
                      Structural Intake Framework
                    </h2>
                    <div className="h-px w-full bg-stone-200 mt-6" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                    {/* Full Name */}
                    <div className="relative group">
                      <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2">
                        Legal Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        required
                        placeholder="e.g. Ratan Tata"
                        className="w-full bg-transparent border-0 border-b border-stone-300 py-3 text-slate-900 placeholder:text-slate-300 focus:ring-0 focus:border-blue-700 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative group">
                      <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        placeholder="name@corporation.com"
                        className="w-full bg-transparent border-0 border-b border-stone-300 py-3 text-slate-900 placeholder:text-slate-300 focus:ring-0 focus:border-blue-700 transition-colors"
                      />
                    </div>

                    {/* Mobile */}
                    <div className="relative group">
                      <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        value={form.mobile}
                        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-transparent border-0 border-b border-stone-300 py-3 text-slate-900 placeholder:text-slate-300 focus:ring-0 focus:border-blue-700 transition-colors"
                      />
                    </div>

                    {/* Advisory Layer */}
                    <div className="relative group">
                      <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2">
                        Advisory Requirement
                      </label>
                      <select
                        value={form.advisoryLayer}
                        onChange={(e) => setForm({ ...form, advisoryLayer: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-stone-300 py-3 text-slate-900 focus:ring-0 focus:border-blue-700 transition-colors cursor-pointer"
                      >
                        <option>Comprehensive Financial Planning</option>
                        <option>Retirement Strategy Engineering</option>
                        <option>Equity Portfolio Architecture</option>
                        <option>Tax Infrastructure Optimization</option>
                        <option>General Fiduciary Inquiry</option>
                      </select>
                    </div>

                    {/* Engagement Mode */}
                    <div className="md:col-span-2 mt-2">
                      <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 mb-4">
                        Preferred Modality <span className="text-slate-300 font-normal">(Select Intake Path)</span>
                      </label>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <label className={`flex-1 flex items-center gap-4 p-5 border transition-colors cursor-pointer ${form.engagementMode === 'video' ? 'border-blue-700 bg-blue-50/40 shadow-sm' : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'}`}>
                          <input
                            type="radio"
                            name="mode"
                            checked={form.engagementMode === 'video'}
                            onChange={() => setForm({ ...form, engagementMode: 'video' })}
                            className="h-4.5 w-4.5 accent-blue-700 cursor-pointer"
                          />
                          <div>
                            <span className="text-sm font-bold text-slate-900 block">Encrypted Video Conference</span>
                            <span className="text-[10px] text-slate-400 font-semibold">Secure, professional digital consultation.</span>
                          </div>
                        </label>
                        <label className={`flex-1 flex items-center gap-4 p-5 border transition-colors cursor-pointer ${form.engagementMode === 'office' ? 'border-blue-700 bg-blue-50/40 shadow-sm' : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'}`}>
                          <input
                            type="radio"
                            name="mode"
                            checked={form.engagementMode === 'office'}
                            onChange={() => setForm({ ...form, engagementMode: 'office' })}
                            className="h-4.5 w-4.5 accent-blue-700 cursor-pointer"
                          />
                          <div>
                            <span className="text-sm font-bold text-slate-900 block">In-Person (Delhi HQ)</span>
                            <span className="text-[10px] text-slate-400 font-semibold">Formal consultation at Devika Tower.</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2 relative group mt-4">
                      <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2">
                        Preliminary Context <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                        placeholder="Outline the scope of your current liquidity or primary fiscal objective..."
                        className="w-full bg-transparent border-0 border-b border-stone-300 py-3 text-slate-900 placeholder:text-slate-300 focus:ring-0 focus:border-blue-700 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-between pt-8 border-t border-stone-100">
                    <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                      All submitted information is handled under strict SEBI-mandated client confidentiality standards.
                    </p>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={status === 'submitting'}
                      className="w-full sm:w-auto px-10 py-4 font-semibold tracking-wide rounded-none bg-slate-950 text-white hover:bg-slate-800"
                    >
                      {status === 'submitting' ? 'Transmitting Onboarding Data...' : 'Submit Onboarding Request'}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageSectionLayout>
  );
}
