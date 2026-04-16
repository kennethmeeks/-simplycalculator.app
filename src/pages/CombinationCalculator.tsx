import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Hash } from 'lucide-react';

export const CombinationCalculator: React.FC = () => {
  const [n, setN] = useState<number>(5);
  const [r, setR] = useState<number>(3);
  const [combination, setCombination] = useState<number>(0);

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
      setCombination(factorial(n) / (factorial(r) * factorial(n - r)));
    } else {
      setCombination(0);
    }
  }, [n, r]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Combination Calculator | Calculate Combinations (nCr)</title>
        <meta name="description" content="Free online combination calculator. Calculate the number of ways to choose r objects from a set of n objects for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Hash className="w-8 h-8 text-[#0066cc]" />
          Combination Calculator
        </h1>
        <p className="text-slate-600">Calculate the number of ways to choose r objects from a set of n objects (nCr).</p>
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
                <label className="input-label">Number of Objects to Choose (r)</label>
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
              What is a Combination?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              A combination is a selection of objects where the order does not matter. The number of combinations of n objects taken r at a time is given by the formula:
            </p>
            <div className="bg-white p-4 rounded border border-slate-200 text-center font-serif text-xl mb-4">
              nCr = n! / (r! * (n - r)!)
            </div>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>n:</strong> The total number of objects in the set.</li>
              <li><strong>r:</strong> The number of objects being chosen.</li>
              <li><strong>Order Doesn't Matter:</strong> In a combination, the order of the objects is not important. (e.g., ABC is the same as CBA).</li>
              <li><strong>Factorial (!):</strong> The product of all positive integers up to that number (e.g., 5! = 5 * 4 * 3 * 2 * 1 = 120).</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Combinations (nCr)
            </h2>
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="text-8xl font-bold mb-4 text-[#0066cc]">{combination.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Selections</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Math Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If you're choosing all n objects, the number of combinations is simply 1. For example, there is only 1 way to choose the letters A, B, and C.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Combinations in 2026</h2>
        <p>
          Our <strong>combination calculator</strong> is a powerful tool for calculating the number of ways to choose objects where the order does not matter. By entering n and r, we can reveal the total number of combinations.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Importance of Combinations</h3>
        <p>
          Combinations are essential for solving problems in probability, statistics, and combinatorics. They're used in everything from lottery games to genetic research.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Components of Combinations</h3>
        <ul>
          <li><strong>Set:</strong> The collection of objects being chosen from.</li>
          <li><strong>Selection:</strong> The specific group of objects.</li>
          <li><strong>Factorial:</strong> The product of all positive integers up to that number.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">What is the difference between a permutation and a combination?</p>
            <p>In a permutation, the order of the objects matters. In a combination, the order does not matter.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I calculate combinations with repetition?</p>
            <p>If objects can be repeated, the number of combinations is (n + r - 1)! / (r! * (n - 1)!). For example, there are 10 ways to choose 3 items from a set of 3 with repetition.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
