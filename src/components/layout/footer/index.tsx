'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About the Adviser', href: '/about' },
  { label: 'Advisory Services', href: '/services' },
  { label: 'FAQs & Support', href: '/faqs' },
  { label: 'Book a Consultation', href: '/contact' },
];

const complianceLinks = [
  { label: 'SEBI Disclosures', href: '/disclosures' },
  { label: 'Grievance Redressal', href: '/disclosures' },
  { label: 'Beware of Imposters', href: '/disclosures/imposters' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-left">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">
              Fiduciary Stewardship
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              At Sujan Singh Investment Advisory, we architect comprehensive, commission-free financial
              strategies engineered for long-term compounding and capital protection. Navigate the
              complexities of wealth with an absolute fiduciary partner by your side.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">
              Strategic Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 320, damping: 24 }}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">
              Regulatory & Compliance
            </h4>
            <ul className="space-y-2.5">
              {complianceLinks.map((link) => (
                <li key={link.href + link.label}>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 320, damping: 24 }}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
              <li>
                <motion.a
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  href="https://scores.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1"
                >
                  SEBI SCORES Portal <ExternalLink className="h-3.5 w-3.5" />
                </motion.a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">
              Headquarters & Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5" />
                713, 7th Floor, Devika Tower, Nehru Place, New Delhi - 110019
              </p>
              <a
                href="tel:+918802108844"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                <Phone className="h-4 w-4 text-blue-400" />+91 88021 08844
              </a>
              <a
                href="mailto:sujansingh20@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                <Mail className="h-4 w-4 text-blue-400" />sujansingh20@gmail.com
              </a>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-700 hover:bg-blue-600 hover:border-blue-500 transition-colors text-slate-300 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7 0h3.8v2h.1c.5-.95 1.75-2 3.6-2 3.85 0 4.56 2.53 4.56 5.82V23h-4v-8.1c0-1.93-.03-4.42-2.7-4.42-2.7 0-3.11 2.1-3.11 4.28V23h-4V8z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-700 hover:bg-blue-600 hover:border-blue-500 transition-colors text-slate-300 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.26l-4.9-6.4L6.5 22H3.4l7.24-8.28L1 2h6.4l4.43 5.85L18.9 2zm-1.1 18h1.73L6.46 3.9H4.6L17.8 20z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-700 hover:bg-blue-600 hover:border-blue-500 transition-colors text-slate-300 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.46h-1.27c-1.25 0-1.64.78-1.64 1.57V12h2.8l-.45 2.89h-2.35v6.99A10 10 0 0022 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800/80 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-slate-500">
          <p>© {currentYear} Sujan Singh Investment Advisory. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            SEBI Registered Investment Adviser | Registration No: INA000020864
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
