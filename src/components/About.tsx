'use client';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent-blue tracking-widest uppercase mb-3">About Me</h2>
        </div>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 mb-10 lg:mb-0"
          >
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl bg-bg-light border border-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                    <p className="text-neutral-dark font-medium">Profile Image Placeholder</p>
                    <p className="text-gray-500 text-sm mt-2">Professional sitting photo</p>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-6">
              Sujan Singh: Your Trusted Investment Adviser
            </h3>
            <div className="space-y-4 text-gray-600 text-lg mb-8 leading-relaxed">
              <p>
                I am a SEBI-Registered Investment Adviser (RIA) with a Post Graduate Program in Investment Advisory from NISM (SEBI) and over seven years of experience in financial education, planning, and advisory.
              </p>
              <p>
                During these years, I have conducted and led large-scale financial literacy programs across India, reaching thousands of individuals, professionals, and families. My journey in finance began in 2016, dedicated to spreading financial awareness.
              </p>
              <p>
                Today, as a fee-only fiduciary adviser, I provide transparent, unbiased, and personalized financial planning services. I do not earn commissions or incentives — my only source of income is the fee paid by clients, ensuring 100% unbiased advice.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {['SEBI-Registered RIA', '7+ Years Experience', 'Fee-Only Fiduciary', 'NISM Certified'].map((badge) => (
                <div key={badge} className="flex items-center space-x-3 text-brand-blue font-medium bg-bg-light px-4 py-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue flex-shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-brand-blue hover:bg-brand-blue-light transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Read More
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
