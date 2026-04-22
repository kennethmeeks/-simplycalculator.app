import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, EyeOff, FileText, Globe, Mail, DollarSign } from 'lucide-react';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Helmet>
        <title>Privacy Policy | simplycalculator.app | Your Data Security 2026</title>
        <meta name="description" content="Read our comprehensive privacy policy. Learn how simplycalculator.app protects your data through local browser processing and transparent advertising practices." />
      </Helmet>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
        <p className="text-slate-500 italic">Last Updated: April 13, 2026</p>
      </div>
      
      <div className="space-y-12 text-slate-700 leading-relaxed">
        <section className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex gap-4 items-start">
          <Shield className="w-8 h-8 text-[#0066cc] shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Our Privacy Commitment</h2>
            <p>
              At <strong>simplycalculator.app</strong>, we believe your data belongs to you. We have designed our platform to be "privacy-by-default," meaning we collect the absolute minimum amount of information necessary to provide our services.
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <EyeOff className="w-6 h-6 text-[#0066cc]" />
            <h2 className="text-2xl font-bold text-slate-900">Local Processing (Client-Side)</h2>
          </div>
          <p className="mb-4">
            The most important aspect of our privacy model is <strong>Local Processing</strong>. When you enter numbers into our calculators—whether it's your annual salary, your weight, or your mortgage details—that data is processed entirely within your own web browser.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Your calculation data is <strong>never</strong> sent to our servers.</li>
            <li>We do not store your financial or health metrics in any database.</li>
            <li>Once you close your browser tab, the temporary data used for the calculation is cleared.</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-[#0066cc]" />
            <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
          </div>
          <p className="mb-4">While we don't collect your calculation data, we do collect standard web analytics to help us improve the site:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-bold mb-2">Log Data</h4>
              <p className="text-sm">Standard information sent by your browser, such as IP address, browser type, and pages visited. This is used for security and performance monitoring.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="font-bold mb-2">Contact Information</h4>
              <p className="text-sm">If you choose to contact us via our form, we collect your name and email address solely to respond to your inquiry.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-[#0066cc]" />
            <h2 className="text-2xl font-bold text-slate-900">Cookies and Advertising</h2>
          </div>
          <p className="mb-4">
            We use third-party advertising partners (like Google AdSense) to keep our tools free for everyone. These partners may use cookies to serve ads based on your prior visits to our website or other websites on the Internet.
          </p>
          <p className="mb-4">
            Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-[#0066cc] hover:underline" target="_blank" rel="noopener noreferrer">Ads Settings</a>.
          </p>
        </section>

        <section className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-900">Advertiser Disclosure</h2>
          </div>
          <p>
            <strong>simplycalculator.app</strong> is an independent, advertising-supported comparison service. We may receive compensation from the companies whose products appear on this site.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-6 h-6 text-[#0066cc]" />
            <h2 className="text-2xl font-bold text-slate-900">Affiliate Relationships</h2>
          </div>
          <p className="mb-4">
            <strong>simplycalculator.app</strong> participates in various affiliate marketing programs. This means we may post affiliate links to products or services provided by third parties. If you click on an affiliate link and make a purchase or sign up for a service, we may receive a commission at no additional cost to you.
          </p>
          <p className="mb-4">
            Our affiliate relationships do not influence the accuracy of our calculators or the integrity of our tools. We only recommend products or services that we believe provide value to our users.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-[#0066cc]" />
            <h2 className="text-2xl font-bold text-slate-900">Data Security</h2>
          </div>
          <p>
            We employ industry-standard security measures to protect the information we do collect. Our site is served exclusively over HTTPS, ensuring that all communication between your browser and our servers is encrypted.
          </p>
        </section>

        <section className="border-t border-slate-200 pt-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-[#0066cc]" />
            <h2 className="text-2xl font-bold text-slate-900">Contact Our Privacy Officer</h2>
          </div>
          <p className="mb-4">
            If you have questions about this policy or how we handle your data, please reach out to us:
          </p>
          <div className="bg-slate-50 p-4 rounded-lg inline-block">
            <p className="font-mono text-sm">Email: support@simplycalculator.app</p>
          </div>
        </section>
      </div>
    </div>
  );
};
