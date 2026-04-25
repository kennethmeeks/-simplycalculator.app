import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const BigNumberCalculator: React.FC = () => {
  const [num1, setNum1] = useState<string>('12345678901234567890');
  const [num2, setNum2] = useState<string>('98765432109876543210');
  const [operation, setOperation] = useState<'+' | '-' | '*' | '/'>('+');
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    try {
      const b1 = BigInt(num1);
      const b2 = BigInt(num2);
      let res: bigint;
      if (operation === '+') res = b1 + b2;
      else if (operation === '-') res = b1 - b2;
      else if (operation === '*') res = b1 * b2;
      else res = b1 / b2;
      setResult(res.toString());
    } catch (e) {
      setResult('Invalid Input');
    }
  }, [num1, num2, operation]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Big Number Calculator | Large Integer Tool 2026</title>
        <meta name="description" content="Perform basic arithmetic operations on very large integers. Find the sum, difference, product, or quotient of your big numbers easily." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Big Number Calculator</h1>
        <p className="text-slate-600">Perform basic arithmetic operations on very large integers.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Enter Big Numbers</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Number 1</label>
              <input
                type="text"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none font-mono"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Operation</label>
              <select
                value={operation}
                onChange={(e) => setOperation(e.target.value as any)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              >
                <option value="+">Addition (+)</option>
                <option value="-">Subtraction (-)</option>
                <option value="*">Multiplication (*)</option>
                <option value="/">Division (/)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Number 2</label>
              <input
                type="text"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none font-mono"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Result</p>
              <p className="text-2xl font-mono font-bold text-[#0066cc] break-all">{result}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <ResultActions 
                onReset={() => {
                  setNum1('12345678901234567890');
                  setNum2('98765432109876543210');
                  setOperation('+');
                }}
                onCopy={() => {
                  navigator.clipboard.writeText(result);
                }}
              />
              <p className="text-xs text-slate-500 italic mt-4">
                Note: This calculator uses BigInt to handle integers larger than 2^53 - 1.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Big Number Calculator" 
        path="/big-number-calculator" 
        description="Perform arithmetic on arbitrarily large integers using BigInt technology. Handle astronomical figures and high-precision values easily in 2026."
      />
    </div>
  );
};
