'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  ShieldCheck,
  ChevronRight,
  AlertTriangle,
  HelpCircle,
  ArrowUpRight,
} from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { containerVariants, itemVariants } from '@/lib/animations';

/**
 * ImpostersContainer – informs visitors about fraudulent impersonation attempts
 * and provides clear steps to verify the authentic adviser. Uses glass‑cards
 * with subtle motion for a premium look.
 */
export default function ImpostersContainer() {
  const warnings = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-red-600" />, // Fraud alert
      title: 'Verify the SEBI Registration Number',
      content: (
        <p className="text-sm text-slate-600">
          The authentic adviser is registered under RIA No. <strong>INA000020864</strong>. Always cross‑check this ID on the official SEBI portal.
        </p>
      ),
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-yellow-600" />, // Warning
      title: 'Beware of Unsolicited Calls',
      content: (
        <p className="text-sm text-slate-600">
          We never initiate cold calls asking for payment details. Any such request is a red flag.
        </p>
      ),
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-blue-600" />, // Help
      title: 'Official Communication Channels',
      content: (
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
          <li>Email: <strong>contact@sujansinghadvisory.com</strong></li>
          <li>Phone: <strong>+91‑11‑2345‑6789</strong></li>
          <li>Website: <strong>www.sujansinghadvisory.com</strong></li>
        </ul>
      ),
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 text-slate-900">
      <Breadcrumb />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-8">
          Protect Yourself From Imposters
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-center text-slate-700 max-w-3xl mx-auto mb-12">
          Fee‑only advisory is a high‑trust service. Verify the authenticity of any adviser claiming to be Sujan Singh.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {warnings.map((w, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card variant="glass" hoverEffect className="p-6 h-full flex flex-col justify-between">
                <div className="flex items-center space-x-3 mb-3">
                  {w.icon}
                  <h3 className="text-xl font-semibold text-slate-800">{w.title}</h3>
                </div>
                <div className="flex-grow text-slate-600">{w.content}</div>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div variants={itemVariants} className="flex justify-center mt-12">
          <Link href="/contact" passHref>
            <Button variant="primary" size="lg" className="shadow-md font-bold">
              Verify My Advisor <ArrowUpRight size={16} className="ml-1" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}