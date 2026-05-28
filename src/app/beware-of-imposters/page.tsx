import type { Metadata } from 'next';
import ImpostersContainer from '@/containers/impostersContainer';

export const metadata: Metadata = {
  title: 'Imposters | Sujan Singh - Fiduciary Stewardship',
  description: 'Important information regarding imposters and fake profiles.',
};

export default function ImpostersPage() {
  return <ImpostersContainer />;
}