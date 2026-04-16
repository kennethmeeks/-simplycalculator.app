import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const PrimeFactorizationCalculator: React.FC = () => {
  const [number, setNumber] = useState<number>(100);
  const [primeFactors, setPrimeFactors] = useState<number[]>([]);

  useEffect(() => {
    let n = number;
    const factors = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
      while (n % i === 0) {
        factors.push(i);
        n /= i;
      }
    }
    if (n > 1) factors.push(n);
    setPrimeFactors(factors);
  }, [number]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Prime Factorization Calculator | Find Prime Factors 2026</title>
        <meta name="description" content="Calculate the prime factorization of a number. Find the prime factors of your number easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Prime Factorization Calculator</h1>
        <p className="text-slate-600">Find the prime factors of a given number.</p>
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
              <p className="text-sm text-slate-500 mb-1">Prime Factors of {number}</p>
              <p className="text-2xl font-mono font-bold text-[#0066cc] break-all">{primeFactors.join(' × ')}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: Prime factorization is the process of finding the prime numbers that multiply together to get the original number.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Prime Factorization?</h2>
        <p>
          Prime factorization is the process of finding the prime numbers that multiply together to get a number. For example, the prime factorization of 12 is 2 × 2 × 3.
        </p>
        <h3>How to Find Prime Factors</h3>
        <p>
          To find the prime factors of a number, you can divide it by the smallest prime number (2) and continue dividing by prime numbers until the quotient is 1.
        </p>
        <h3>Why Prime Factorization Matters</h3>
        <p>
          Prime factorization is a fundamental concept in number theory and is used in a wide range of fields, including algebra, cryptography, and computer science. It provides a simple and effective way to understand the properties of numbers.
        </p>
      </div>
    </div>
  );
};
