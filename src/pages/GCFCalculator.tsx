import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Hash } from 'lucide-react';

export const GCFCalculator: React.FC = () => {
  const [numbers, setNumbers] = useState<string>('24, 36');
  const [gcf, setGcf] = useState<number>(0);

  const calculateGCF = (a: number, b: number): number => {
    while (b) {
      a %= b;
      [a, b] = [b, a];
    }
    return a;
  };

  useEffect(() => {
    const nums = numbers.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    if (nums.length < 2) return;
    
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
      result = calculateGCF(result, nums[i]);
    }
    setGcf(result);
  }, [numbers]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>GCF Calculator | Greatest Common Factor Calculator</title>
        <meta name="description" content="Free online GCF calculator. Find the greatest common factor of two or more numbers for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Hash className="w-8 h-8 text-[#0066cc]" />
          GCF Calculator
        </h1>
        <p className="text-slate-600">Find the greatest common factor (GCF) of two or more numbers.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="input-label">Enter Numbers (comma separated)</label>
                <input 
                  type="text" 
                  value={numbers} 
                  onChange={(e) => setNumbers(e.target.value)} 
                  placeholder="e.g. 24, 36, 48"
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              What is GCF?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              The greatest common factor (GCF) is the largest positive integer that divides each of the numbers without leaving a remainder.
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Common Factors:</strong> Factors that are shared by two or more numbers.</li>
              <li><strong>Greatest Common Factor:</strong> The largest of these common factors.</li>
              <li><strong>Applications:</strong> Used for simplifying fractions and finding common denominators.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              GCF Result
            </h2>
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="text-8xl font-bold mb-4 text-[#0066cc]">{gcf}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Greatest Common Factor</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Math Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              You can find the GCF by listing all the factors of each number and finding the largest one they have in common.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding GCF in 2026</h2>
        <p>
          Our <strong>GCF calculator</strong> is a simple and efficient tool for finding the greatest common factor of two or more numbers. By entering the numbers, we can reveal the largest factor they have in common.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Importance of GCF</h3>
        <p>
          The greatest common factor is essential for simplifying fractions and finding common denominators. It's also used in various mathematical and scientific applications.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Components of GCF</h3>
        <ul>
          <li><strong>Factors:</strong> Numbers that divide another number without leaving a remainder.</li>
          <li><strong>Common Factors:</strong> Factors that are shared by two or more numbers.</li>
          <li><strong>Greatest Common Factor:</strong> The largest of these common factors.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">What is the GCF of 12 and 18?</p>
            <p>The factors of 12 are 1, 2, 3, 4, 6, 12. The factors of 18 are 1, 2, 3, 6, 9, 18. The common factors are 1, 2, 3, 6. The GCF is 6.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I find the GCF of more than two numbers?</p>
            <p>You can find the GCF of more than two numbers by finding the GCF of the first two numbers, then finding the GCF of that result and the third number, and so on.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
