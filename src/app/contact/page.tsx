'use client';

import { FormEvent, useState } from 'react';
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
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Breadcrumb from '@/components/ui/Breadcrumb';
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
            <span className="block text-xs uppercase tracking-[0.2em] text-blue-700 font-semibold mb-6">
              Establish Contact
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-slate-900 mb-8">
              Initiate a Fiduciary <br />Engagement.
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mb-10">
              Commence a transparent, commission-free advisory dialogue. Provide your foundational parameters via our structural intake framework below.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-4 hidden md:block border-l border-slate-300 pl-8 pb-4 mt-12 md:mt-0">
             <p className="font-serif text-xl italic text-slate-900 mb-4">
               &quot;Objectivity is not given; it is engineered through proper structuring.&quot;
             </p>
             <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">The Mandate</span>
          </motion.div>
        </motion.div>

        {/* Contact Layout - Editorial Asymmetry */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Corporate Info */}
          <motion.aside variants={itemVariants} className="lg:col-span-4 sticky top-32 space-y-8">
            <div className="bg-white p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-stone-100">
              <h2 className="font-serif text-2xl text-slate-900 mb-8">Corporate Headquarters</h2>
              <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-slate-400 shrink-0" />
                  <p>713, 7th Floor, Devika Tower,<br />Nehru Place, New Delhi,<br />Delhi - 110019</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 text-slate-400 shrink-0" />
                  <a href="tel:+918802108844" className="font-semibold text-slate-900 transition hover:text-blue-700">+91 88021 08844</a>
                </div>
                <div className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 text-slate-400 shrink-0" />
                  <a href="mailto:sujansingh20@gmail.com" className="font-semibold text-slate-900 break-all transition hover:text-blue-700">sujansingh20@gmail.com</a>
                </div>
                <div className="flex gap-4 pt-4 border-t border-stone-100">
                  <Clock className="mt-1 h-5 w-5 text-slate-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Operational Hours (IST)</p>
                    <p>Mon – Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: Strict Appointment Only</p>
                    <p>Sun: Markets Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 md:p-10 text-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]">
               <h3 className="font-serif text-2xl mb-4">Why Initiate Contact?</h3>
               <div className="space-y-5 text-sm text-slate-300 leading-relaxed">
                 <p><strong className="text-white block mb-1">1. Architectural Engineering</strong> Recalibrate disjointed assets into a unified roadmap.</p>
                 <p><strong className="text-white block mb-1">2. Eradication of Conflicts</strong> Direct fee-only counsel with zero third-party commissions.</p>
                 <p><strong className="text-white block mb-1">3. Mathematical Accountability</strong> Long-term stewardship designed to bypass emotional cognitive biases.</p>
               </div>
            </div>
          </motion.aside>

          {/* Right Column: Intake Framework */}
          <motion.section variants={itemVariants} className="lg:col-span-8 relative">
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
                  <h3 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Intake Received.</h3>
                  <p className="text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
                    Your structural inquiry has been routed to our advisory desk. We will establish contact within 24 operational hours to schedule your preliminary consultation.
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
                  className="bg-white p-8 md:p-12 border border-stone-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)]"
                >
                  <div className="mb-10">
                    <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-slate-900">Structural Intake Form</h2>
                    <div className="h-px w-full bg-stone-200 mt-6" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                    {/* Full Name */}
                    <div className="relative group">
                      <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2">Legal Name</label>
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
                      <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2">Email Address</label>
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
                      <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2">Mobile Number</label>
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
                      <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2">Advisory Requirement</label>
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
                      <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 mb-4">Preferred Modality</label>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <label className={`flex-1 flex items-center gap-4 p-4 border transition-colors cursor-pointer ${form.engagementMode === 'video' ? 'border-blue-700 bg-blue-50/50' : 'border-stone-200 hover:border-stone-300'}`}>
                          <input type="radio" name="mode" checked={form.engagementMode === 'video'} onChange={() => setForm({ ...form, engagementMode: 'video' })} className="h-4 w-4 accent-blue-700" />
                          <span className="text-sm font-semibold text-slate-900">Encrypted Video Conference</span>
                        </label>
                        <label className={`flex-1 flex items-center gap-4 p-4 border transition-colors cursor-pointer ${form.engagementMode === 'office' ? 'border-blue-700 bg-blue-50/50' : 'border-stone-200 hover:border-stone-300'}`}>
                          <input type="radio" name="mode" checked={form.engagementMode === 'office'} onChange={() => setForm({ ...form, engagementMode: 'office' })} className="h-4 w-4 accent-blue-700" />
                          <span className="text-sm font-semibold text-slate-900">In-Person (Delhi HQ)</span>
                        </label>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2 relative group mt-4">
                      <label className="block text-xs uppercase tracking-widest font-semibold text-slate-400 mb-2">Preliminary Context</label>
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
                    <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                      All data submitted is strictly governed by SEBI client confidentiality mandates.
                    </p>
                    <Button 
                      type="submit"
                      variant="primary" 
                      size="lg" 
                      isLoading={status === 'submitting'} 
                      className="w-full sm:w-auto px-10 py-4 font-semibold tracking-wide rounded-none"
                    >
                      {status === 'submitting' ? 'Transmitting Data...' : 'Submit Inquiry'}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
