import type { Metadata } from 'next';
import DisclosuresContainer from '@/containers/DisclosuresContainer';

export const metadata: Metadata = {
  title: 'SEBI Disclosures',
  description:
    'Statutory SEBI RIA disclosures, fiduciary compliance registry, and month-on-month grievance redressal data for Sujan Singh (INA000020864).',
};

export default function DisclosuresPage() {
  return <DisclosuresContainer />;
}