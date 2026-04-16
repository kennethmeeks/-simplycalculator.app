import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Hash } from 'lucide-react';

export const PermutationCalculator: React.FC = () => {
  const [n, setN] = useState<number>(5);
  const [r, setR] = useState<number>(3);
  const [permutation, setPermutation] = useState<number>(0);

  const factorial = (num: number): number => {
    if (num < 0) return 0;
    if (num === 0) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  useEffect(() => {
    if (n >= r && n >= 0 && r >= 0) {
      setPermutation(factorial(n) / factorial(n - r));
    } else {
      setPermutation(0);
    }
  }, [n, r]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Permutation Calculator | Calculate Permutations (nPr)</title>
        <meta name="description" content="Free online permutation calculator. Calculate the number of ways to arrange r objects from a set of n objects for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Hash className="w-8 h-8 text-[#0066cc]" />
          Permutation Calculator
        </h1>
        <p className="text-slate-600">Calculate the number of ways to arrange r objects from a set of n objects (nPr).</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Total Number of Objects (n)</label>
                <input 
                  type="number" 
                  value={n} 
                  onChange={(e) => setN(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Number of Objects to Arrange (r)</label>
                <input 
                  type="number" 
                  value={r} 
                  onChange={(e) => setR(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              What is a Permutation?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              A permutation is an arrangement of objects in a specific order. The number of permutations of n objects taken r at a time is given by the formula:
            </p>
            <div className="bg-white p-4 rounded border border-slate-200 text-center font-serif text-xl mb-4">
              nPr = n! / (n - r)!
            </div>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>n:</strong> The total number of objects in the set.</li>
              <li><strong>r:</strong> The number of objects being arranged.</li>
              <li><strong>Order Matters:</strong> In a permutation, the order of the objects is important. (e.g., ABC is different from CBA).</li>
              <li><strong>Factorial (!):</strong> The product of all positive integers up to that number (e.g., 5! = 5 * 4 * 3 * 2 * 1 = 120).</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Permutations (nPr)
            </h2>
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="text-8xl font-bold mb-4 text-[#0066cc]">{permutation.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Arrangements</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Math Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If you're arranging all n objects, the number of permutations is simply n!. For example, there are 3! = 6 ways to arrange the letters A, B, and C.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Permutations in 2026</h2>
        <p>
          Our <strong>permutation calculator</strong> is a powerful tool for calculating the number of ways to arrange objects in a specific order. By entering n and r, we can reveal the total number of permutations.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Importance of Permutations</h3>
        <p>
          Permutations are essential for solving problems in probability, statistics, and combinatorics. They're used in everything from password security to genetic research.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Components of Permutations</h3>
        <ul>
          <li><strong>Set:</strong> The collection of objects being arranged.</li>
          <li><strong>Arrangement:</strong> The specific order of the objects.</li>
          <li><strong>Factorial:</strong> The product of all positive integers up to that number.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">What is the difference between a permutation and a combination?</p>
            <p>In a permutation, the order of the objects matters. In a combination, the order does not matter.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I calculate permutations with repetition?</p>
            <p>If objects can be repeated, the number of permutations is n^r. For example, there are 10^3 = 1000 ways to create a 3-digit code using the numbers 0-9.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
