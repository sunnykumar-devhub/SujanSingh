'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bg-light min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-0 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-blue leading-tight mb-6">
              Plan Your Financial Freedom with India&apos;s Trusted Fee-Only Advisor
            </h1>
            <p className="text-sm sm:text-base font-semibold tracking-wide text-accent-blue mb-8 uppercase flex flex-wrap justify-center lg:justify-start gap-2">
              <span>Flat Fee</span>
              <span className="hidden sm:inline">|</span>
              <span>SEBI Registered</span>
              <span className="hidden sm:inline">|</span>
              <span>100% Unbiased</span>
              <span className="hidden sm:inline">|</span>
              <span>No Commissions Ever</span>
            </p>
            <div className="flex justify-center lg:justify-start">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-accent-blue hover:bg-brand-blue-light rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                BOOK YOUR FREE 30-MINUTE CONSULTATION
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none flex justify-center lg:justify-end"
          >
            {/* Soft background decorative blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
            
            {/* Image Container Placeholder */}
            <div className="relative w-full aspect-[4/5] max-w-md bg-white/50 backdrop-blur-sm rounded-[2rem] shadow-2xl overflow-hidden border border-white flex items-center justify-center">
                <div className="text-center p-8">
                    <p className="text-neutral-dark font-medium">Hero Image Placeholder</p>
                    <p className="text-gray-500 text-sm mt-2">Professional portrait goes here</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
