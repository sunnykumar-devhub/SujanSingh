import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sujansinghadvisory.com'),
  title: {
    default: 'Sujan Singh | SEBI-Registered Fee-Only Investment Adviser',
    template: '%s | Sujan Singh Financial Advisory',
  },
  description:
    'Sujan Singh is a SEBI-Registered, fee-only fiduciary adviser delivering commission-free financial planning, portfolio advisory, and long-term wealth stewardship.',
  keywords: [
    'SEBI registered investment adviser',
    'fee-only adviser India',
    'fiduciary financial planning',
    'wealth management advisory',
    'Sujan Singh advisory',
  ],
  authors: [{ name: 'Sujan Singh Financial Advisory' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sujan Singh Financial Advisory',
    title: 'Sujan Singh | SEBI-Registered Fee-Only Investment Adviser',
    description:
      'Commission-free, fiduciary-first financial advisory for long-term wealth creation and capital protection.',
    url: 'https://sujansinghadvisory.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sujan Singh | SEBI-Registered Fee-Only Investment Adviser',
    description:
      'Fiduciary, fee-only investment advisory and financial planning built for long-term outcomes.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-full flex flex-col bg-brand-light text-brand-slate font-sans antialiased`}
      >
        <Navbar />
        <main className="flex-grow pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
