import type { Metadata } from 'next';
import ServicesContainer from '@/containers/servicesContainer';

export const metadata: Metadata = {
  title: 'Services | Sujan Singh - Fiduciary Wealth Management',
  description:
    'Comprehensive fee-only advisory services including strategic retirement engineering, tax planning, and fiduciary stock advisory.',
};

export default function ServicesPage() {
  return <ServicesContainer />;
}
