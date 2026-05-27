'use client';

import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';

interface PageSectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  showBreadcrumb?: boolean;
  fullWidthContent?: React.ReactNode;
}

/**
 * PageSectionLayout
 * 
 * Reusable layout wrapper that standardizes:
 * 1. Top padding for fixed navigation offset (120px equivalent via pt-28 md:pt-32).
 * 2. Bottom padding (80px equivalent via pb-20).
 * 3. Max-width horizontal alignment and margins.
 * 4. Automatic breadcrumb placement.
 * 5. Optional full-width sibling content (like dark blocks/CTAs) that bypasses the max-width restriction.
 */
export default function PageSectionLayout({
  children,
  className = '',
  containerClassName = '',
  showBreadcrumb = true,
  fullWidthContent,
}: PageSectionLayoutProps) {
  return (
    <main className={`min-h-screen bg-[#FDFBF7] text-slate-900 font-sans selection:bg-blue-100 pt-28 pb-20 ${className}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full ${containerClassName}`}>
        {showBreadcrumb && <Breadcrumb />}
        {children}
      </div>
      {fullWidthContent}
    </main>
  );
}
