import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const FactorCalculator: React.FC = () => {
  const [number, setNumber] = useState<number>(100);
  const [factors, setFactors] = useState<number[]>([]);

  useEffect(() => {
    const f = [];
    for (let i = 1; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        f.push(i);
        if (i !== number / i) f.push(number / i);
      }
    }
    setFactors(f.sort((a, b) => a - b));
  }, [number]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Factor Calculator | Find All Factors 2026</title>
        <meta name="description" content="Calculate all the factors of a number. Find the divisors of your number easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Factor Calculator</h1>
        <p className="text-slate-600">Find all the factors (divisors) of a given number.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Enter Number</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Number</label>
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Factors of {number}</p>
              <p className="text-lg font-mono text-slate-900 break-all">{factors.join(', ')}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Number of Factors</p>
              <p className="text-2xl font-bold text-[#0066cc]">{factors.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What are Factors?</h2>
        <p>
          Factors (or divisors) are numbers that can be multiplied together to get another number. For example, the factors of 6 are 1, 2, 3, and 6.
        </p>
        <h3>How to Find Factors</h3>
        <p>
          To find the factors of a number, you can divide it by every number from 1 to the square root of the number. If the division results in a whole number, then both the divisor and the quotient are factors.
        </p>
        <h3>Why Factors Matter</h3>
        <p>
          Factors are a fundamental concept in number theory and are used in a wide range of fields, including algebra, cryptography, and computer science. They provide a simple and effective way to understand the properties of numbers.
        </p>
      </div>
    </div>
  );
};
