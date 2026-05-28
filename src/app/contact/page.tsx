import type { Metadata } from 'next';
import ContactContainer from "@/containers/contactContainer";

export const metadata: Metadata = {
  title: 'Contact | Sujan Singh - Fiduciary Stewardship',
  description: 'Get in touch with Sujan Singh for fiduciary wealth management services.',
};

export default function ContactPage() {
  return (
    <ContactContainer />
  );
}
