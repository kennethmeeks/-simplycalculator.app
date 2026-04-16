import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Divide, Info } from 'lucide-react';

export const LongDivisionCalculator: React.FC = () => {
  const [dividend, setDividend] = useState(125);
  const [divisor, setDivisor] = useState(5);
  
  const [quotient, setQuotient] = useState(0);
  const [remainder, setRemainder] = useState(0);
  const [steps, setSteps] = useState<string[]>([]);

  useEffect(() => {
    if (divisor !== 0) {
      const q = Math.floor(dividend / divisor);
      const r = dividend % divisor;
      setQuotient(q);
      setRemainder(r);
      
      // Basic step generation for educational purposes
      const s = [];
      s.push(`${dividend} ÷ ${divisor} = ${q} with a remainder of ${r}`);
      s.push(`${divisor} goes into ${dividend} exactly ${q} times.`);
      if (r > 0) {
        s.push(`The leftover amount is ${r}.`);
      } else {
        s.push(`There is no remainder.`);
      }
      setSteps(s);
    }
  }, [dividend, divisor]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Long Division Calculator | Step-by-Step Math Solver</title>
        <meta name="description" content="Free online long division calculator with remainders. Solve complex division problems with step-by-step explanations in 2026." />
      </Helmet>

      <h1>Long Division Calculator</h1>
      <p>Solve division problems with ease. Calculate the quotient and remainder for any two numbers, with a clear breakdown of the results.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Division Inputs</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Dividend (Number to divide)</label>
              <input 
                type="number" 
                value={dividend} 
                onChange={(e) => setDividend(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Divisor (Number to divide by)</label>
              <input 
                type="number" 
                value={divisor} 
                onChange={(e) => setDivisor(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Result</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10 text-center">
                <div className="text-xs text-slate-500 uppercase font-bold">Quotient</div>
                <div className="text-5xl font-bold text-[#0066cc]">{quotient}</div>
                {remainder > 0 && (
                  <div className="text-sm text-slate-500 mt-2 font-medium italic">Remainder: {remainder}</div>
                )}
              </div>
              
              <div className="space-y-2">
                {steps.map((step, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded border border-slate-100 text-sm text-slate-600">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Mastering Long Division: A Step-by-Step Guide</h2>
        <p>
          Long division is a standard method for dividing multi-digit numbers. It breaks a complex division problem into a series of simpler steps. Our <strong>long division calculator</strong> helps you solve these problems instantly in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Parts of a Division Problem</h3>
        <ul>
          <li><strong>Dividend:</strong> The number you are dividing (the total amount).</li>
          <li><strong>Divisor:</strong> The number you are dividing by (the number of groups).</li>
          <li><strong>Quotient:</strong> The result of the division (the size of each group).</li>
          <li><strong>Remainder:</strong> The amount left over that cannot be evenly divided.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Standard Method (DMSB)</h3>
        <p>A common mnemonic for remembering the steps of long division is <strong>DMSB</strong>:</p>
        <ol>
          <li><strong>Divide:</strong> See how many times the divisor goes into the first digit(s) of the dividend.</li>
          <li><strong>Multiply:</strong> Multiply that number by the divisor.</li>
          <li><strong>Subtract:</strong> Subtract the result from the part of the dividend you just used.</li>
          <li><strong>Bring Down:</strong> Bring down the next digit of the dividend and repeat.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Long Division Still Matters</h3>
        <p>
          While calculators are everywhere, understanding long division is crucial for developing number sense and mental math skills. It's also a foundational step for learning polynomial division in algebra.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What happens if I divide by zero?</p>
            <p>Division by zero is undefined in mathematics. You cannot divide a total into zero groups.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I write a remainder as a decimal?</p>
            <p>To continue the division into decimals, add a decimal point and zeros to the dividend and continue the DMSB process.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the difference between long division and short division?</p>
            <p>Short division is a condensed version of long division where you perform the subtraction and "bringing down" steps mentally. It's usually used for single-digit divisors.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
