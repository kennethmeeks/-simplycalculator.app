import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator, ShieldCheck, Zap, Users, Code, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Helmet>
        <title>About SimplyCalculator: Professional Mathematical Integrity & Accuracy</title>
        <meta name="description" content="Discover the engineering and philosophy behind SimplyCalculator. Our commitment to 100% precision, privacy, and free professional-grade tools for everyone." />
      </Helmet>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About simplycalculator.app</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Empowering your decisions with precision, clarity, and speed. We make complex math simple for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <Zap className="w-10 h-10 text-[#0066cc] mb-4" />
          <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
          <p className="text-slate-600">Our tools are optimized for speed, providing instant results as you type, even on slow connections.</p>
        </div>
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <ShieldCheck className="w-10 h-10 text-[#0066cc] mb-4" />
          <h3 className="text-xl font-bold mb-2">Privacy First</h3>
          <p className="text-slate-600">Your data stays with you. All calculations happen locally in your browser and are never stored on our servers.</p>
        </div>
        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <Award className="w-10 h-10 text-[#0066cc] mb-4" />
          <h3 className="text-xl font-bold mb-2">Verified Accuracy</h3>
          <p className="text-slate-600">Every algorithm is cross-referenced with industry standards to ensure the highest degree of mathematical precision.</p>
        </div>
      </div>

      <div className="space-y-16 text-slate-700 leading-relaxed">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-[#0066cc]" />
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
          </div>
          <p className="mb-4">
            Founded in early 2026, <strong>simplycalculator.app</strong> was created by a small team of developers and financial analysts who were frustrated by the state of online calculation tools. Most existing sites were either cluttered with intrusive ads, lacked mobile responsiveness, or provided questionable results.
          </p>
          <p>
            We set out to build a platform that prioritizes the user experience above all else. By leveraging modern web technologies like React and Tailwind CSS, we've created a suite of tools that are not only accurate but also a pleasure to use on any device.
          </p>
        </section>

        <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-6 h-6 text-[#0066cc]" />
            <h2 className="text-3xl font-bold text-slate-900">Why We Do It</h2>
          </div>
          <p className="mb-6">
            We believe that financial literacy and health awareness should be accessible to everyone, regardless of their technical or mathematical background. Whether you're calculating your mortgage break-even point or tracking your BMI, having the right data at your fingertips can change the course of your life.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-2">For Homeowners</h4>
              <p className="text-sm">Navigate the complexities of refinancing and equity with tools designed for real-world scenarios.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">For Investors</h4>
              <p className="text-sm">Analyze compound interest, IRR, and future values to make informed decisions about your portfolio.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">For Health Seekers</h4>
              <p className="text-sm">Track essential metrics like BMR and body fat percentage to fuel your fitness journey.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">For Everyday Life</h4>
              <p className="text-sm">Quickly solve common problems like splitting bills, calculating discounts, or determining your age.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-[#0066cc]" />
            <h2 className="text-3xl font-bold text-slate-900">Our Technical Standards</h2>
          </div>
          <p className="mb-4">
            Accuracy is our obsession. Our development process involves rigorous testing of every formula. For financial tools, we follow standard accounting principles (GAAP) and banking regulations. For health tools, we utilize peer-reviewed formulas like the Mifflin-St Jeor equation for BMR and the US Navy method for body fat.
          </p>
          <p>
            Our platform is built using a modern stack including <strong>TypeScript</strong> for type safety, <strong>Vite</strong> for performance, and <strong>Tailwind CSS</strong> for a clean, accessible interface. This ensures that simplycalculator.app remains fast, secure, and reliable for years to come.
          </p>
        </section>

        <section className="bg-indigo-50 p-8 rounded-2xl border border-indigo-200">
          <div className="flex items-center gap-3 mb-4">
            < Award className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-slate-900">Advertiser & Affiliate Disclosure</h2>
          </div>
          <p className="mb-4">
            <strong>simplycalculator.app</strong> is an independent, advertising-supported comparison service. We may receive compensation from the companies whose products appear on this site.
          </p>
          <p>
            <strong>Affiliate Links:</strong> Some of the links on our website are "affiliate links." This means if you click on the link and purchase an item or sign up for a service, we will receive an affiliate commission at no extra cost to you. We only recommend products or services that we believe will add value to our users. This income allows us to maintain the platform and continue providing free, high-quality calculation tools.
          </p>
        </section>

        <section className="bg-amber-50 p-8 rounded-2xl border border-amber-200">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-amber-600" />
            <h2 className="text-3xl font-bold text-slate-900">Financial Disclaimer</h2>
          </div>
          <p className="mb-4">
            The information provided by <strong>simplycalculator.app</strong> is intended for educational and illustrative purposes only. We are not a financial institution, bank, or investment firm.
          </p>
          <p className="mb-4">
            <strong>Not Financial Advice:</strong> The results generated by our calculators do not constitute financial, investment, legal, or tax advice. Every individual's financial situation is unique, and we strongly recommend consulting with a certified financial planner, accountant, or legal professional before making significant financial decisions.
          </p>
          <p>
            <strong>Member FDIC:</strong> simplycalculator.app is not a bank. Any mention of "Member FDIC" on our site refers exclusively to the underlying financial institutions that provide products or services linked through our affiliate partners. Deposits are only insured when held at an FDIC-insured bank.
          </p>
        </section>

        <section className="text-center pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Have Feedback?</h2>
          <p className="mb-6">
            We are constantly evolving. If you have a suggestion for a new tool or have found an issue with an existing one, we want to hear from you.
          </p>
          <a href="/contact" className="inline-block bg-[#0066cc] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors">
            Contact Our Team
          </a>
        </section>
      </div>
    </div>
  );
};
