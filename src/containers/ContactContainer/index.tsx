'use client';

import * as React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactContainer() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate async submit
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-24">
      <div className="bg-slate-900 py-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Start Your Journey</h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-300">
          Book a complimentary, no-obligation discovery call to discuss your financial goals and explore
          how a fee-only approach can work for you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-slate-900 p-10 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 -mt-20 -ml-20 w-64 h-64 bg-brand-blue-light rounded-full blur-3xl opacity-20" />

              <h2 className="text-3xl font-bold mb-8 relative z-10">Get in Touch</h2>
              <p className="text-slate-300 mb-12 text-lg leading-relaxed relative z-10">
                Whether you have a specific query about our services or you are ready to build a comprehensive
                financial plan, I am here to help.
              </p>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-blue-light mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Office</h3>
                    <p className="text-slate-300">Devika Tower, Nehru Place, New Delhi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-blue-light mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-slate-300">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-brand-blue-light mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-slate-300">hello@sujansinghadvisory.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand-blue-light mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Hours</h3>
                    <p className="text-slate-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 lg:p-16 bg-white">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Book a Discovery Call</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-light focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-light focus:border-transparent"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    What would you like help with?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-light focus:border-transparent"
                    placeholder="Tell us about your goals, challenges, or questions..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 disabled:opacity-70"
                >
                  {formStatus === 'submitting' && 'Sending...'}
                  {formStatus === 'idle' && (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                  {formStatus === 'success' && (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Sent Successfully
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
