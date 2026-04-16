import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { GraduationCap, Award, DollarSign, Percent } from 'lucide-react';

export const ScholarshipCalculator: React.FC = () => {
  const [tuition, setTuition] = useState<number>(30000);
  const [scholarshipAmount, setScholarshipAmount] = useState<number>(5000);
  const [isFullRide, setIsFullRide] = useState<boolean>(false);
  const [remainingBalance, setRemainingBalance] = useState<number>(0);
  const [percentageCovered, setPercentageCovered] = useState<number>(0);

  useEffect(() => {
    if (isFullRide) {
      setRemainingBalance(0);
      setPercentageCovered(100);
    } else {
      const balance = Math.max(0, tuition - scholarshipAmount);
      setRemainingBalance(balance);
      setPercentageCovered(Number(((scholarshipAmount / tuition) * 100).toFixed(2)));
    }
  }, [tuition, scholarshipAmount, isFullRide]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Scholarship Calculator | Calculate Financial Aid & Tuition Coverage</title>
        <meta name="description" content="Free online scholarship calculator. Estimate your remaining tuition balance and percentage of coverage based on your scholarship and financial aid in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Scholarship Calculator</h1>
        <p className="text-slate-600">Calculate how much of your tuition is covered by scholarships and determine your remaining financial balance.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Total Annual Tuition ($)</label>
                <input 
                  type="number" 
                  value={tuition} 
                  onChange={(e) => setTuition(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Scholarship Amount ($)</label>
                <input 
                  type="number" 
                  value={scholarshipAmount} 
                  onChange={(e) => setScholarshipAmount(Math.max(0, Number(e.target.value)))} 
                  disabled={isFullRide}
                  className="input-field disabled:bg-slate-50" 
                />
              </div>
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={isFullRide} 
                    onChange={(e) => setIsFullRide(e.target.checked)}
                    className="w-4 h-4 text-[#0066cc] rounded border-slate-300 focus:ring-[#0066cc]"
                  />
                  <span className="text-sm font-medium text-slate-700">Full Ride Scholarship (Covers 100% of Tuition)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded p-6">
            <h2 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Maximizing Your Aid
            </h2>
            <p className="text-amber-800 text-sm leading-relaxed">
              Scholarships are "gift aid" that you don't have to pay back. They can be merit-based, need-based, or tied to specific talents or backgrounds. Always apply for multiple scholarships to increase your chances of reducing your student debt.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-amber-600 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Financial Results
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-amber-500/30">
                <div className="text-4xl font-bold mb-1">${remainingBalance.toLocaleString()}</div>
                <div className="text-xs font-medium text-amber-100 uppercase tracking-wider">Remaining Balance</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">{percentageCovered}%</div>
                <div className="text-xs font-medium text-amber-100 uppercase tracking-wider">Tuition Covered</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Types of Aid
            </h3>
            <ul className="text-sm text-slate-600 space-y-3">
              <li className="flex gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <strong>Merit-Based:</strong> Academic or athletic.
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <strong>Need-Based:</strong> Based on family income.
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <strong>Private:</strong> From local or national orgs.
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Power of Scholarships in 2026</h2>
        <p>
          With the rising cost of higher education, <strong>scholarships</strong> are more important than ever. Our calculator helps you understand the true cost of your education after financial aid is applied.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Net Price vs. Sticker Price</h3>
        <p>
          The "sticker price" is the total cost of tuition and fees before any aid. The "net price" is what you actually pay. Many students at private universities pay significantly less than the sticker price due to generous institutional scholarships.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Find More Scholarships</h3>
        <ul>
          <li><strong>FAFSA:</strong> Always complete the Free Application for Federal Student Aid.</li>
          <li><strong>Local Organizations:</strong> Check with community foundations, rotary clubs, and local businesses.</li>
          <li><strong>University Portals:</strong> Most colleges have their own scholarship search engines for admitted students.</li>
          <li><strong>Niche Scholarships:</strong> Look for aid tied to your specific major, heritage, or unique hobbies.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Are scholarships taxable?</p>
            <p>Generally, scholarship money used for tuition, fees, and required books is tax-free. However, money used for room and board may be considered taxable income.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can I lose my scholarship?</p>
            <p>Many scholarships have "renewal requirements," such as maintaining a certain GPA or being enrolled full-time. Always read the fine print of your award letter.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
