import type { Metadata } from 'next';
import FAQs from '@/containers/faqContainer';

export const metadata: Metadata = {
  title: 'FAQs | Sujan Singh - Fiduciary Stewardship',
  description:
    'Frequently asked questions about our fee-only fiduciary advisory services, wealth strategies, and regulatory standing.',
};

export default function FaqsPage() {
  return <FAQs />;
}
