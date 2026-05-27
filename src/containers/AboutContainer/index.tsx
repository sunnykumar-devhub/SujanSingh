'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, BookOpen, Calendar, CheckCircle, Users } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { containerVariants, itemVariants } from '@/lib/animations';

export default function AboutContainer() {
  return (
    <section className="min-h-screen bg-slate-50 text-slate-900">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Hero Intro */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-4 py-20 text-center"
      >
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
          Meet Sujan Singh – Your Trusted SEBI‑Registered Fee‑Only Adviser
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          A NISM‑certified fiduciary with 15+ years delivering institutional‑grade wealth strategies to high‑net‑worth families and corporate executives across India.
        </motion.p>
        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          <Button variant="primary" size="lg" className="shadow-md font-bold">
            Download My CV <ArrowRight size={16} className="ml-1" />
          </Button>
          <Link href="/contact" passHref>
            <Button variant="outline" size="lg" className="border-slate-300 text-slate-800">
              Connect Now <ArrowRight size={16} className="ml-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Credentials Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="bg-slate-950 text-white py-12"
      >
        <motion.h2 variants={itemVariants} className="text-center text-2xl font-bold mb-8">
          Professional Credentials & Accolades
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          <motion.div variants={itemVariants}>
            <Card variant="glass" hoverEffect className="p-6 h-full">
              <div className="flex items-center space-x-3 mb-3">
                <Award className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold">SEBI Registration</h3>
              </div>
              <p className="text-sm text-slate-600">RIA No. INA000020864 – Fully compliant & audited.</p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card variant="glass" hoverEffect className="p-6 h-full">
              <div className="flex items-center space-x-3 mb-3">
                <BookOpen className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold">NISM Certifications</h3>
              </div>
              <p className="text-sm text-slate-600">Series I, IV, V – Certified in Equity, Mutual Funds, and Portfolio Management.</p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card variant="glass" hoverEffect className="p-6 h-full">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold">Fiduciary Commitment</h3>
              </div>
              <p className="text-sm text-slate-600">Zero‑commission, client‑first advisory model endorsed by the Securities and Exchange Board of India.</p>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-4 py-16"
      >
        <motion.h2 variants={itemVariants} className="text-2xl font-bold text-slate-800 mb-8 text-center">
          A Journey of Impactful Advisory
        </motion.h2>
        <div className="space-y-8">
          {/* 2008 – Early Career */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">2008 – 2012</h3>
              <p className="text-slate-600">Analyst at a top‑tier Indian NBFC – Built quantitative models for credit risk and structured loan portfolios.</p>
            </div>
          </motion.div>
          {/* 2013 – Mid‑Career */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">2013 – 2018</h3>
              <p className="text-slate-600">Senior Portfolio Manager at a multinational wealth‑management firm – Designed fiduciary‑only strategies for HNI families, managing assets over ₹2 billion.</p>
            </div>
          </motion.div>
          {/* 2019 – Independent Advisory */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">2019 – Present</h3>
              <p className="text-slate-600">Founded Sujan Singh Financial Advisory – Providing pure fee‑only counsel, compliance‑first reporting, and transparent wealth‑growth roadmaps.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Client Testimonials (static placeholders) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="bg-slate-950 text-white py-12"
      >
        <motion.h2 variants={itemVariants} className="text-center text-2xl font-bold mb-8">
          What Clients Say
        </motion.h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card variant="glass" hoverEffect className="p-6 text-slate-800 bg-white/90">
                <p className="italic mb-4">“Sujan’s fee‑only approach gave me confidence. My portfolio grew 18% YoY without hidden commissions.”</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">Anonymous HNI Client</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}