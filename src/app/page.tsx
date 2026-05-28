import type { Metadata } from 'next';
import HomeContainer from '@/containers/homeContainer';

export const metadata: Metadata = {
  title: 'Sujan Singh - Fiduciary Wealth Management & Advisory',
  description:
    'Achieve true financial freedom with Sujan Singh, a SEBI-Registered Investment Adviser. Zero product commissions, strict fiduciary alignment.',
};

export default function HomePage() {
  return <HomeContainer />;
}
