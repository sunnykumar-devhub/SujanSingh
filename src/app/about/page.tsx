import type { Metadata } from 'next';
import AboutContainer from '@/containers/aboutContainer';

export const metadata: Metadata = {
  title: 'About | Sujan Singh - Fiduciary Stewardship',
  description:
    'Sujan Singh is a NISM-certified, SEBI-registered fee-only fiduciary advisor delivering institutional-grade wealth strategies.',
};

export default function AboutPage() {
  return <AboutContainer />;
}
