import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { TrendingUp, Info } from 'lucide-react';

export const LogCalculator: React.FC = () => {
  const [value, setValue] = useState(100);
  const [base, setBase] = useState(10);
  
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (value > 0 && base > 0 && base !== 1) {
      setResult(Number((Math.log(value) / Math.log(base)).toFixed(6)));
    }
  }, [value, base]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Log Calculator | Calculate Logarithms for Any Base</title>
        <meta name="description" content="Free online logarithm calculator. Calculate log base 10, log base 2, or natural log (ln) for any number instantly in 2026." />
      </Helmet>

      <h1>Log Calculator</h1>
      <p>Calculate the logarithm of any number for any base. Solve for common logs, natural logs, and custom bases.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Logarithm Inputs</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Number (x)</label>
              <input 
                type="number" 
                value={value} 
                onChange={(e) => setValue(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Base (b)</label>
              <input 
                type="number" 
                value={base} 
                onChange={(e) => setBase(Number(e.target.value))} 
                className="input-field" 
              />
              <div className="flex gap-2 mt-2">
                <button onClick={() => setBase(10)} className="text-[10px] bg-slate-100 px-2 py-1 rounded hover:bg-slate-200">Base 10</button>
                <button onClick={() => setBase(2)} className="text-[10px] bg-slate-100 px-2 py-1 rounded hover:bg-slate-200">Base 2</button>
                <button onClick={() => setBase(Math.E)} className="text-[10px] bg-slate-100 px-2 py-1 rounded hover:bg-slate-200">Natural (e)</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Result: logᵦ(x)</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10 text-center">
                <div className="text-xs text-slate-500 uppercase font-bold">Logarithm Result</div>
                <div className="text-5xl font-bold text-[#0066cc]">{result}</div>
              </div>
              
              <div className="p-4 bg-slate-50 rounded border border-slate-100 text-sm text-slate-600 italic">
                This means that {base.toFixed(2)} raised to the power of {result} equals {value}.
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Power of Logs: A Logarithm Guide</h2>
        <p>
          Logarithms are the inverse operation of exponentiation. If you have an equation like <strong>bʸ = x</strong>, the logarithm tells you what the exponent <strong>y</strong> is. Our <strong>log calculator</strong> helps you solve these equations instantly in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Common Types of Logarithms</h3>
        <ul>
          <li><strong>Common Logarithm (log₁₀):</strong> A logarithm with base 10. This is the default "log" button on most calculators.</li>
          <li><strong>Natural Logarithm (ln):</strong> A logarithm with base <strong>e</strong> (approximately 2.718). It is widely used in calculus and physics.</li>
          <li><strong>Binary Logarithm (log₂):</strong> A logarithm with base 2. Essential in computer science for understanding data structures and algorithms.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Logarithm Rules</h3>
        <ul>
          <li><strong>Product Rule:</strong> logᵦ(x * y) = logᵦ(x) + logᵦ(y)</li>
          <li><strong>Quotient Rule:</strong> logᵦ(x / y) = logᵦ(x) - logᵦ(y)</li>
          <li><strong>Power Rule:</strong> logᵦ(xⁿ) = n * logᵦ(x)</li>
          <li><strong>Change of Base:</strong> logᵦ(x) = logₐ(x) / logₐ(b)</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Real-World Applications</h3>
        <ul>
          <li><strong>Richter Scale:</strong> Measures the magnitude of earthquakes. Each whole number increase represents a tenfold increase in measured amplitude.</li>
          <li><strong>Decibel Scale:</strong> Measures the intensity of sound.</li>
          <li><strong>pH Scale:</strong> Measures the acidity or alkalinity of a solution.</li>
          <li><strong>Complexity Analysis:</strong> Computer scientists use log₂ to describe the efficiency of algorithms like binary search.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Can you take the log of a negative number?</p>
            <p>In the real number system, you cannot take the logarithm of a negative number or zero. The result would be an imaginary or complex number.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is log(1) for any base?</p>
            <p>Logᵦ(1) is always 0, because any base raised to the power of 0 equals 1.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is logᵦ(b)?</p>
            <p>Logᵦ(b) is always 1, because any base raised to the power of 1 equals itself.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
