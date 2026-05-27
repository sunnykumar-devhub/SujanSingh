'use client';
import { Download } from 'lucide-react';

export default function Disclosures() {
  return (
    <section id="disclosures" className="py-24 bg-bg-light border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-3">SEBI Disclosures</h2>
          <div className="h-1 w-20 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 text-sm md:text-base text-gray-600 leading-relaxed space-y-6">
          <p>
            I, <strong className="text-brand-blue">Sujan Singh</strong>, am fully committed to transparency and compliance with the regulations set by the <strong className="text-brand-blue">Securities and Exchange Board of India (SEBI)</strong>. As part of this commitment, the following key information is disclosed:
          </p>
          
          <ul className="space-y-4 ml-4">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 mr-3 flex-shrink-0"></span>
              <span><strong className="text-neutral-dark">SEBI Registration No.:</strong> INA00001XXXX</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 mr-3 flex-shrink-0"></span>
              <span><strong className="text-neutral-dark">Registered Investment Adviser:</strong> Sujan Singh (SEBI RIA)</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 mr-3 flex-shrink-0"></span>
              <span><strong className="text-neutral-dark">Disclaimer:</strong> All services are provided in line with SEBI guidelines, and we do not provide any recommendations for specific securities or mutual fund products outside of agreed advisory terms.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 mr-3 flex-shrink-0"></span>
              <span><strong className="text-neutral-dark">Conflicts of Interest:</strong> We do not receive any commission from financial products, ensuring unbiased advice at all times.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 mr-3 flex-shrink-0"></span>
              <span><strong className="text-neutral-dark">Fee Structure:</strong> Our fees are flat and transparent. We charge a one-time fee for our advisory services, as well as annual renewal charges.</span>
            </li>
          </ul>

          <p className="pt-4 text-gray-500 italic">
            For detailed and official SEBI disclosures, please click the button below.
          </p>

          <div className="mt-8">
            <button className="inline-flex items-center px-6 py-3 border border-brand-blue text-brand-blue font-medium rounded-lg hover:bg-brand-blue hover:text-white transition-colors duration-300">
              <Download className="mr-2 w-4 h-4" />
              View Full SEBI Disclosures
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
