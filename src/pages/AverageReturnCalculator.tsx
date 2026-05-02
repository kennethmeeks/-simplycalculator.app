import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const AverageReturnCalculator: React.FC = () => {
  const [returns, setReturns] = useState<string>('10, -5, 15, 8, -2');
  const [arithmeticMean, setArithmeticMean] = useState<number>(0);
  const [geometricMean, setGeometricMean] = useState<number>(0);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const returnArray = returns.split(',').map(s => s.trim()).filter(s => s !== '').map(Number);
    
    if (returnArray.some(isNaN)) {
      setError('Please enter valid numbers separated by commas.');
      return;
    }
    
    if (returnArray.length === 0) {
      setArithmeticMean(0);
      setGeometricMean(0);
      setError('');
      return;
    }

    setError('');

    // Arithmetic Mean
    const sum = returnArray.reduce((a, b) => a + b, 0);
    setArithmeticMean(sum / returnArray.length);

    // Geometric Mean (Time-Weighted Return)
    // Formula: [(1+r1)*(1+r2)*...*(1+rn)]^(1/n) - 1
    try {
      const product = returnArray.reduce((acc, r) => acc * (1 + r / 100), 1);
      if (product < 0) {
        setGeometricMean(0);
      } else {
        setGeometricMean((Math.pow(product, 1 / returnArray.length) - 1) * 100);
      }
    } catch (e) {
      setGeometricMean(0);
    }
  }, [returns]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Average Return Calculator [Instant Results]</title>
        <meta name="description" content="Free online average return calculator. Calculate both the arithmetic and geometric average returns for your investment portfolio over multiple periods." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Average Return Calculator</h1>
        <p className="text-slate-600">
          Calculate the average performance of your investments over multiple periods. Compare the simple arithmetic mean with the more accurate geometric mean (CAGR).
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Enter Period Returns</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Returns per Period (%, comma separated)</label>
              <textarea
                value={returns}
                onChange={(e) => setReturns(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none font-mono"
                placeholder="e.g. 10, -5, 15, 8, -2"
              />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Average Returns</h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-slate-500 mb-1">Arithmetic Mean (Simple Average)</p>
              <p className="text-4xl font-bold text-slate-900">{arithmeticMean.toFixed(2)}%</p>
              <p className="text-xs text-slate-500 mt-1">The simple average of all period returns.</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Geometric Mean (Time-Weighted Average)</p>
              <p className="text-4xl font-bold text-[#0066cc]">{geometricMean.toFixed(2)}%</p>
              <p className="text-xs text-slate-500 mt-1">The actual compounded annual growth rate (CAGR).</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <ResultActions 
                onReset={() => {
                  setReturns('10, -5, 15, 8, -2');
                }}
                onCopy={() => {
                  const text = `Investment Returns:\nArithmetic Mean: ${arithmeticMean.toFixed(2)}%\nGeometric Mean: ${geometricMean.toFixed(2)}%\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Average Return Calculator" 
        path="/average-return" 
        description="Calculate arithmetic and geometric average returns for your portfolio. Understand the impact of volatility and compounding on your 2026 investment goals."
      />
    </div>
  );
};
