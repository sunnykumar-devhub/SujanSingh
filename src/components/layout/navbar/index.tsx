'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ShieldAlert, Award, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'FAQs', path: '/faqs' },
];

const disclosuresLinks = [
  { name: 'Registry & Mandated Disclosures', path: '/disclosures', icon: FileCheck },
  { name: 'Beware of Imposters', path: '/disclosures/imposters', icon: ShieldAlert },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDisclosureOpen, setIsMobileDisclosureOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsMobileDisclosureOpen(false);
  }, [pathname]);

  const isDisclosuresActive = pathname.startsWith('/disclosures');

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pointer-events-none">
      <div 
        className={cn(
          'max-w-7xl mx-auto w-full rounded-2xl md:rounded-full pointer-events-auto transition-all duration-500 border text-white',
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-lg border-slate-800/80 shadow-premium py-2 md:py-2.5 px-6'
            : 'bg-slate-950/80 backdrop-blur-md border-slate-900/60 shadow-xl py-3 md:py-4 px-8'
        )}
      >
        <div className="flex justify-between items-center">
          {/* Logo Group */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">

              <div className="flex flex-col text-left">
                <span className="text-lg font-bold font-serif tracking-tight leading-none text-white transition-colors duration-300 group-hover:text-blue-400">
                  Sujan Singh
                </span>
                <span className="text-[9px] font-bold text-blue-400 tracking-widest uppercase mt-1">
                  Investment Adviser
                </span>
              </div>
            </Link>
          </div>

          {/* Floating Pill Center Menu */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-full border border-slate-800/40 backdrop-blur-xs">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    'px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 relative',
                    isActive
                      ? 'text-white bg-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.35)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* SEBI Disclosures Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className={cn(
                  'px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 flex items-center gap-1.5 focus:outline-none min-h-[36px]',
                  isDisclosuresActive
                    ? 'text-white bg-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.35)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                )}
              >
                SEBI Disclosures
                <ChevronDown className={cn('w-4 h-4 transition-transform duration-350', isDropdownOpen && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-3 w-72 rounded-2xl bg-slate-950 border border-slate-850 shadow-2xl p-2 z-50 text-left backdrop-blur-xl"
                  >
                    {disclosuresLinks.map((subLink) => {
                      const isSubActive = pathname === subLink.path;
                      const SubIcon = subLink.icon;
                      return (
                        <Link
                          key={subLink.path}
                          href={subLink.path}
                          onClick={() => setIsDropdownOpen(false)}
                          className={cn(
                            'flex items-center gap-2.5 px-4 py-3 text-sm font-bold rounded-xl transition-all duration-200',
                            isSubActive
                              ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20'
                              : 'text-slate-300 hover:bg-slate-900 hover:text-white border border-transparent'
                          )}
                        >
                          <SubIcon
                            className={cn(
                              'w-4 h-4 shrink-0',
                              subLink.path.includes('imposters') ? 'text-red-400' : 'text-blue-400'
                            )}
                          />
                          {subLink.name}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="focus:outline-none">
              <Button 
                variant="primary" 
                size="md" 
                className="rounded-full shadow-lg shadow-blue-600/20 font-bold bg-blue-600 hover:bg-blue-500 border-none text-white px-6 py-2.5 hover:scale-[1.02] transition-all duration-300"
              >
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl focus:outline-none transition-colors duration-300 min-h-[40px] min-w-[40px] flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-900"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto w-full bg-slate-950 border border-slate-900 shadow-2xl rounded-2xl overflow-hidden text-left pointer-events-auto"
          >
            <div className="px-5 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={cn(
                      'block px-4 py-3 text-base font-bold rounded-xl transition-all duration-200',
                      isActive
                        ? 'bg-slate-900 text-blue-400'
                        : 'text-slate-300 hover:bg-slate-900/50 hover:text-white'
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="border-t border-slate-900 my-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsMobileDisclosureOpen((prev) => !prev)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-slate-300 rounded-xl hover:bg-slate-900/50 hover:text-white transition-all duration-200"
                >
                  <span>SEBI Disclosures</span>
                  <ChevronDown
                    className={cn('w-4 h-4 transition-transform duration-300', isMobileDisclosureOpen && 'rotate-180')}
                  />
                </button>

                <AnimatePresence>
                  {isMobileDisclosureOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-1 space-y-1">
                        {disclosuresLinks.map((subLink) => {
                          const isSubActive = pathname === subLink.path;
                          const SubIcon = subLink.icon;
                          return (
                            <Link
                              key={subLink.path}
                              href={subLink.path}
                              className={cn(
                                'flex items-center gap-2.5 ml-4 px-4 py-3 text-sm font-bold rounded-xl transition-all duration-200',
                                isSubActive
                                  ? 'bg-slate-900 text-blue-400'
                                  : 'text-slate-300 hover:bg-slate-900/50 hover:text-white'
                              )}
                            >
                              <SubIcon
                                className={cn(
                                  'w-4 h-4 shrink-0',
                                  subLink.path.includes('imposters') ? 'text-red-500' : 'text-blue-400'
                                )}
                              />
                              {subLink.name}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-4">
                <Link href="/contact" className="block focus:outline-none">
                  <Button variant="primary" size="md" className="w-full font-bold rounded-xl py-3 bg-blue-600 text-white">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
export { Navbar };

