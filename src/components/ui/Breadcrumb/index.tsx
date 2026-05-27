'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Do not render anything if the user is on the home page
  if (pathname === '/') return null;

  // Split path into individual segments
  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-6 md:mb-8 overflow-x-auto no-scrollbar py-1 text-left"
    >
      {/* Root Home Anchor */}
      <Link 
        href="/" 
        className="flex items-center gap-1.5 hover:text-blue-600 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 rounded-md p-1 min-h-[36px] min-w-[36px] justify-center"
      >
        <Home size={16} className="shrink-0" />
        <span className="sr-only">Home</span>
      </Link>

      {pathSegments.map((segment, index) => {
        const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const isLast = index === pathSegments.length - 1;

        // Base formatting: replace hyphens with spaces
        let displayName = segment.replace(/-/g, ' ');

        // Apply custom premium overrides
        const lowerSegment = segment.toLowerCase();
        if (lowerSegment === 'imposters') {
          displayName = 'Beware of Imposters';
        } else if (lowerSegment === 'disclosures') {
          displayName = 'SEBI Disclosures';
        } else if (lowerSegment === 'faqs') {
          displayName = 'FAQs';
        } else {
          // Capitalize first letters dynamically
          displayName = displayName
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        }

        return (
          <div key={url} className="flex items-center gap-2 shrink-0">
            <ChevronRight size={14} className="text-slate-300 shrink-0" />
            {isLast ? (
              <span className="text-slate-800 font-semibold truncate max-w-[200px]" aria-current="page">
                {displayName}
              </span>
            ) : (
              <Link 
                href={url} 
                className="hover:text-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 rounded-md py-1 px-1.5"
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