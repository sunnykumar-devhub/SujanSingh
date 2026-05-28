'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Do not render anything if the user is on the home page
  if (pathname === '/') return null;

  // Split path into individual segments
  let pathSegments = pathname.split('/').filter((segment) => segment !== '');

  // Custom routing override: complaints page nests under SEBI Disclosures in breadcrumbs
  if (pathSegments.length === 1 && pathSegments[0] === 'complaints') {
    pathSegments = ['disclosures', 'complaints'];
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-8 overflow-x-auto no-scrollbar py-1 text-left select-none"
    >
      {/* Root Home Anchor - text based as per user design */}
      <Link 
        href="/" 
        className="hover:text-blue-600 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 rounded-md py-1"
      >
        HOME
      </Link>

      {pathSegments.map((segment, index) => {
        const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const isLast = index === pathSegments.length - 1;

        // Base formatting: replace hyphens with spaces and capitalize fully
        let displayName = segment.replace(/-/g, ' ').toUpperCase();

        // Apply custom overrides in uppercase
        const lowerSegment = segment.toLowerCase();
        if (lowerSegment === 'imposters') {
          displayName = 'BEWARE OF IMPOSTERS';
        } else if (lowerSegment === 'disclosures') {
          displayName = 'SEBI DISCLOSURES';
        } else if (lowerSegment === 'faqs') {
          displayName = 'FAQS';
        }

        return (
          <div key={url} className="flex items-center gap-2 shrink-0">
            <ChevronRight size={12} className="text-slate-400 shrink-0" />
            {isLast ? (
              <span className="text-slate-800 font-extrabold truncate max-w-[240px]" aria-current="page">
                {displayName}
              </span>
            ) : (
              <Link 
                href={url} 
                className="hover:text-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 rounded-md py-1"
              >
                {displayName}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
export { Breadcrumb };