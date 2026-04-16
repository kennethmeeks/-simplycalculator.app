import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const CommonFactorCalculator: React.FC = () => {
  const [num1, setNum1] = useState<number>(24);
  const [num2, setNum2] = useState<number>(36);
  const [commonFactors, setCommonFactors] = useState<number[]>([]);
  const [gcf, setGcf] = useState<number>(0);

  useEffect(() => {
    const factors1 = [];
    for (let i = 1; i <= num1; i++) if (num1 % i === 0) factors1.push(i);
    
    const factors2 = [];
    for (let i = 1; i <= num2; i++) if (num2 % i === 0) factors2.push(i);
    
    const common = factors1.filter(f => factors2.includes(f));
    setCommonFactors(common);
    setGcf(Math.max(...common));
  }, [num1, num2]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Common Factor Calculator | Find Shared Divisors 2026</title>
        <meta name="description" content="Calculate the common factors of two numbers. Find the shared divisors and the Greatest Common Factor (GCF) easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Common Factor Calculator</h1>
        <p className="text-slate-600">Find the common factors and Greatest Common Factor (GCF) of two numbers.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Enter Numbers</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Number 1</label>
              <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Number 2</label>
              <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Greatest Common Factor (GCF)</p>
              <p className="text-4xl font-bold text-[#0066cc]">{gcf}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">All Common Factors</p>
              <p className="text-lg font-mono text-slate-900 break-all">{commonFactors.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What are Common Factors?</h2>
        <p>
          Common factors are numbers that can be divided evenly into two or more numbers. For example, the common factors of 12 and 18 are 1, 2, 3, and 6.
        </p>
        <h3>Greatest Common Factor (GCF)</h3>
        <p>
          The Greatest Common Factor (GCF) is the largest number that is a factor of both numbers. In the example above, the GCF of 12 and 18 is 6.
        </p>
        <h3>Why Common Factors Matter</h3>
        <p>
          Common factors are a fundamental concept in number theory and are used in a wide range of fields, including algebra, cryptography, and computer science. They provide a simple and effective way to understand the properties of numbers.
        </p>
      </div>
    </div>
  );
};
