import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Zap, Info } from 'lucide-react';

export const ExponentCalculator: React.FC = () => {
  const [base, setBase] = useState(2);
  const [exponent, setExponent] = useState(8);
  
  const [result, setResult] = useState(0);
  const [scientific, setScientific] = useState('');

  useEffect(() => {
    const res = Math.pow(base, exponent);
    setResult(res);
    setScientific(res.toExponential(4));
  }, [base, exponent]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Exponent Calculator | Calculate Powers & Bases</title>
        <meta name="description" content="Free online exponent calculator to solve for any base raised to a power. Includes scientific notation and step-by-step math guide in 2026." />
      </Helmet>

      <h1>Exponent Calculator</h1>
      <p>Calculate the power of any base raised to an exponent. Solve for positive, negative, and fractional exponents instantly.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Exponent Inputs</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Base (x)</label>
              <input 
                type="number" 
                value={base} 
                onChange={(e) => setBase(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Exponent (n)</label>
              <input 
                type="number" 
                value={exponent} 
                onChange={(e) => setExponent(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Result: xⁿ</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10 text-center">
                <div className="text-xs text-slate-500 uppercase font-bold">Calculation Result</div>
                <div className="text-4xl font-bold text-[#0066cc] truncate px-2">
                  {result > 1e15 ? scientific : result.toLocaleString()}
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded border border-slate-100">
                <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Scientific Notation</div>
                <div className="text-lg font-bold text-slate-700">{scientific}</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Math of Growth: An Exponent Guide</h2>
        <p>
          Exponents are a shorthand way to show how many times a number, called the base, is multiplied by itself. They are essential for understanding compound interest, population growth, and scientific measurements. Our <strong>exponent calculator</strong> simplifies these complex calculations in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Basic Exponent Rules</h3>
        <ul>
          <li><strong>Product Rule:</strong> xᵃ * xᵇ = xᵃ⁺ᵇ</li>
          <li><strong>Quotient Rule:</strong> xᵃ / xᵇ = xᵃ⁻ᵇ</li>
          <li><strong>Power Rule:</strong> (xᵃ)ᵇ = xᵃ*ᵇ</li>
          <li><strong>Zero Exponent:</strong> x⁰ = 1 (for any x ≠ 0)</li>
          <li><strong>Negative Exponent:</strong> x⁻ⁿ = 1 / xⁿ</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Special Cases</h3>
        <p>
          <strong>Negative Bases:</strong> If the base is negative and the exponent is even, the result is positive. If the exponent is odd, the result is negative.
        </p>
        <p>
          <strong>Fractional Exponents:</strong> An exponent like 1/2 is the same as a square root. An exponent of 1/3 is a cube root. In general, x^(1/n) is the n-th root of x.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Real-World Applications</h3>
        <ul>
          <li><strong>Computer Science:</strong> Storage sizes are powers of 2 (e.g., 2¹⁰ = 1024 bytes).</li>
          <li><strong>Finance:</strong> Compound interest formulas use exponents to calculate growth over time.</li>
          <li><strong>Science:</strong> The Richter scale for earthquakes and the pH scale for acidity are logarithmic, which is the inverse of exponentiation.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is 0 to the power of 0?</p>
            <p>In many contexts, 0⁰ is considered "undefined" or an "indeterminate form," though in some fields like combinatorics, it is defined as 1.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I calculate large exponents manually?</p>
            <p>For large exponents, it's often easier to use the rules of exponents to break the problem into smaller parts, or use a calculator like this one!</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the difference between an exponent and a logarithm?</p>
            <p>They are inverse operations. If 2³ = 8, then log₂(8) = 3. The exponent tells you the result of the power, while the log tells you the power needed to get the result.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
