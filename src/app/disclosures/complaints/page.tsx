import type { Metadata } from 'next';
import ComplaintsContainer from "@/containers/complaintsContainer";

export const metadata: Metadata = {
  title: 'Complaints | Sujan Singh - Fiduciary Stewardship',
  description: 'Grievance redressal mechanism and complaints procedure.',
};

export default function ComplaintsPage() {
  return (
    <ComplaintsContainer />
  );
}