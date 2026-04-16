import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Hash } from 'lucide-react';

export const LCMCalculator: React.FC = () => {
  const [numbers, setNumbers] = useState<string>('12, 18');
  const [lcm, setLcm] = useState<number>(0);

  const calculateGCF = (a: number, b: number): number => {
    while (b) {
      a %= b;
      [a, b] = [b, a];
    }
    return a;
  };

  const calculateLCM = (a: number, b: number): number => {
    return Math.abs(a * b) / calculateGCF(a, b);
  };

  useEffect(() => {
    const nums = numbers.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    if (nums.length < 2) return;
    
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
      result = calculateLCM(result, nums[i]);
    }
    setLcm(result);
  }, [numbers]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>LCM Calculator | Least Common Multiple Calculator</title>
        <meta name="description" content="Free online LCM calculator. Find the least common multiple of two or more numbers for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Hash className="w-8 h-8 text-[#0066cc]" />
          LCM Calculator
        </h1>
        <p className="text-slate-600">Find the least common multiple (LCM) of two or more numbers.</p>
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
                  placeholder="e.g. 12, 18, 24"
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              What is LCM?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              The least common multiple (LCM) is the smallest positive integer that is divisible by each of the numbers without leaving a remainder.
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Multiples:</strong> Numbers that are divisible by another number without leaving a remainder.</li>
              <li><strong>Common Multiples:</strong> Multiples that are shared by two or more numbers.</li>
              <li><strong>Least Common Multiple:</strong> The smallest of these common multiples.</li>
              <li><strong>Applications:</strong> Used for finding common denominators and solving problems involving periodic events.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              LCM Result
            </h2>
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="text-8xl font-bold mb-4 text-[#0066cc]">{lcm}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Least Common Multiple</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Math Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              You can find the LCM by listing the multiples of each number and finding the smallest one they have in common.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding LCM in 2026</h2>
        <p>
          Our <strong>LCM calculator</strong> is a simple and efficient tool for finding the least common multiple of two or more numbers. By entering the numbers, we can reveal the smallest multiple they have in common.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Importance of LCM</h3>
        <p>
          The least common multiple is essential for finding common denominators and solving problems involving periodic events. It's also used in various mathematical and scientific applications.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Components of LCM</h3>
        <ul>
          <li><strong>Multiples:</strong> Numbers that are divisible by another number without leaving a remainder.</li>
          <li><strong>Common Multiples:</strong> Multiples that are shared by two or more numbers.</li>
          <li><strong>Least Common Multiple:</strong> The smallest of these common multiples.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">What is the LCM of 12 and 18?</p>
            <p>The multiples of 12 are 12, 24, 36, 48, 60, 72. The multiples of 18 are 18, 36, 54, 72. The common multiples are 36, 72. The LCM is 36.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I find the LCM of more than two numbers?</p>
            <p>You can find the LCM of more than two numbers by finding the LCM of the first two numbers, then finding the LCM of that result and the third number, and so on.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
