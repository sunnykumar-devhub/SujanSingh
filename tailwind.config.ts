import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0f172a',
        'brand-blue': '#2563eb',
        'brand-slate': '#334155',
        'brand-light': '#f8fafc',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        premium:
          '0 10px 25px rgba(15, 23, 42, 0.08), 0 20px 48px rgba(15, 23, 42, 0.12), 0 2px 6px rgba(15, 23, 42, 0.06)',
      },
      backdropBlur: {
        glass: '14px',
      },
    },
  },
  plugins: [],
};

export default config;
