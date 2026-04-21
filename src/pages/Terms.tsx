import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, FileText, Scale, Info } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Helmet>
        <title>Terms of Service | simplycalculator.app</title>
        <meta name="description" content="Read our terms of service and conditions for using simplycalculator.app. Professional and transparent guidelines for our users." />
      </Helmet>

      <div className="flex items-center gap-3 mb-8">
        <Scale className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-slate-900 m-0">Terms of Service</h1>
      </div>

      <div className="prose prose-slate max-w-none space-y-8">
        <section>
          <div className="flex items-center gap-2 text-slate-900 mb-3">
            <FileText className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-bold m-0 uppercase tracking-wider">1. Agreement to Terms</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            By accessing or using simplycalculator.app ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our website or services.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 text-slate-900 mb-3">
            <Info className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-bold m-0 uppercase tracking-wider">2. Use of Our Services</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Our calculators and tools are provided for educational and informational purposes only. You agree to use the site at your own risk. We do not guarantee the accuracy, completeness, or reliability of any calculation results.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            You may not use our services for any illegal purposes or to conduct any activity that violates the rights of others.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 text-slate-900 mb-3">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-bold m-0 uppercase tracking-wider">3. Intellectual Property</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            All content on simplycalculator.app, including but not limited to text, graphics, logos, images, and software, is the property of simplycalculator.app and is protected by copyright and other intellectual property laws.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 text-slate-900 mb-3">
            <Scale className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-bold m-0 uppercase tracking-wider">4. Limitation of Liability</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            In no event shall simplycalculator.app be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website or tools.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h2 className="text-lg font-bold text-blue-900 mt-0 mb-4 uppercase tracking-widest">5. No Professional Advice</h2>
          <p className="text-blue-800 text-sm leading-relaxed m-0">
            The mathematical models and tools available on this site do not substitute for professional financial, medical, or legal advice. Always consult with a licensed professional before making significant decisions based on calculation results. Results provided by AI-powered calculators are estimates and should be verified independently.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-3">6. Modifications to Terms</h2>
          <p className="text-slate-600 leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site signifies your acceptance of the revised terms.
          </p>
        </section>

        <div className="pt-8 border-t border-slate-200">
          <p className="text-slate-400 text-xs">
            Last Updated: April 21, 2026
          </p>
        </div>
      </div>
    </div>
  );
};
