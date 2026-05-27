'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ShieldAlert, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact Me', href: '/contact' },
];

const disclosuresLinks = [
  { name: 'Registry & Mandated Disclosures', href: '/disclosures', icon: FileCheck },
  { name: 'Beware of Imposters', href: '/disclosures/imposters', icon: ShieldAlert },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileDisclosuresOpen, setMobileDisclosuresOpen] = useState(false);

  const isDisclosuresActive = pathname.startsWith('/disclosures');

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-slate-900 tracking-tight">SUJAN SINGH</Link>

          <div className="hidden lg:flex items-center gap-2">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${pathname === link.href ? 'text-blue-700 bg-blue-50' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'}`}
              >
                {link.name}
              </Link>
            ))}

            <div className="relative" onMouseEnter={() => setDesktopOpen(true)} onMouseLeave={() => setDesktopOpen(false)}>
              <button
                onClick={() => setDesktopOpen((v) => !v)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition inline-flex items-center gap-1 ${isDisclosuresActive ? 'text-blue-700 bg-blue-50' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'}`}
              >
                SEBI Disclosures
                <ChevronDown className={`h-4 w-4 transition-transform ${desktopOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {desktopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    className="absolute right-0 mt-2 w-72 rounded-2xl border border-slate-200 bg-white shadow-xl p-2"
                  >
                    {disclosuresLinks.map((item) => {
                      const Icon = item.icon;
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold transition ${active ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'}`}
                        >
                          <Icon className={`h-4 w-4 ${item.href.includes('imposters') ? 'text-red-500' : 'text-blue-700'}`} />
                          {item.name}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${pathname === '/contact' ? 'text-blue-700 bg-blue-50' : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'}`}
            >
              Contact Me
            </Link>
          </div>

          <button onClick={() => setIsOpen((v) => !v)} className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 bg-white overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-lg text-base font-medium ${pathname === link.href ? 'text-blue-700 bg-blue-50' : 'text-slate-700 hover:bg-slate-100'}`}
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => setMobileDisclosuresOpen((v) => !v)}
                className="w-full px-3 py-3 rounded-lg text-left text-base font-medium text-slate-700 hover:bg-slate-100 inline-flex items-center justify-between"
              >
                SEBI Disclosures
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileDisclosuresOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {mobileDisclosuresOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pl-3"
                  >
                    {disclosuresLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
                        >
                          <Icon className={`h-4 w-4 ${item.href.includes('imposters') ? 'text-red-500' : 'text-blue-700'}`} />
                          {item.name}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-medium ${pathname === '/contact' ? 'text-blue-700 bg-blue-50' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
