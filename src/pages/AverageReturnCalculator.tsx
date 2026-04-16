import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


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
        <title>Average Return Calculator | Arithmetic vs. Geometric Mean 2026 | simplycalculator.app</title>
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
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>Arithmetic vs. Geometric Mean: Which One Matters?</h2>
        <p>
          When evaluating investment performance, there are two ways to calculate the "average" return. While the arithmetic mean is easier to calculate, the geometric mean is the only accurate way to measure the actual growth of your money over time.
        </p>
        
        <h3>1. Arithmetic Mean (Simple Average)</h3>
        <p>
          The arithmetic mean is simply the sum of all returns divided by the number of periods. It's useful for estimating the expected return for a single future period, but it overstates the actual growth of a portfolio over multiple periods.
        </p>

        <h3>2. Geometric Mean (Time-Weighted Return)</h3>
        <p>
          The geometric mean, also known as the Compound Annual Growth Rate (CAGR), accounts for the effects of compounding. It tells you the steady rate of return that would have produced the same final result as the actual fluctuating returns.
        </p>

        <h3>Why the Geometric Mean is Always Lower</h3>
        <p>
          The geometric mean is always less than or equal to the arithmetic mean. This is because of **volatility**. Large negative returns have a disproportionate impact on your portfolio. For example, if you lose 50% one year, you need a 100% gain the next year just to get back to even. The arithmetic mean would be 25%, but the geometric mean would be 0%.
        </p>

        <h3>How to Use the Average Return Calculator</h3>
        <p>
          Simply enter your returns for each period (year, quarter, or month) separated by commas. For example, if your portfolio returned 10% in year one, lost 5% in year two, and gained 15% in year three, you would enter: `10, -5, 15`.
        </p>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">Which average should I use for retirement planning?</h4>
            <p>You should always use the geometric mean (CAGR) for long-term planning. Using the arithmetic mean will lead you to overestimate your future savings.</p>
          </div>
          <div>
            <h4 className="font-bold">What is the "Volatility Drag"?</h4>
            <p>Volatility drag is the reduction in the compound growth rate caused by the variance in returns. The more volatile an investment is, the larger the gap between its arithmetic and geometric average returns.</p>
          </div>
          <div>
            <h4 className="font-bold">Can the geometric mean be negative?</h4>
            <p>Yes, if your total investment value at the end of the period is less than what you started with, the geometric mean will be negative, indicating an overall loss.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
