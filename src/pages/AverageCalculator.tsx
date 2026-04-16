import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const AverageCalculator: React.FC = () => {
  const [numbers, setNumbers] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateAverage = () => {
    const numList = numbers.split(/[,\s]+/).map(Number).filter(n => !isNaN(n));
    if (numList.length === 0) return;
    const sum = numList.reduce((acc, n) => acc + n, 0);
    setResult(sum / numList.length);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Average Calculator | Calculate the Mean of a Set of Numbers 2026</title>
        <meta name="description" content="Free online average calculator for 2026. Quickly calculate the mean of a set of numbers with instant results." />
      </Helmet>

      <h1>Average Calculator</h1>
      <p>Quickly calculate the mean of a set of numbers for any purpose.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Numbers</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Numbers (separated by commas or spaces)</label>
              <textarea 
                value={numbers} 
                onChange={(e) => setNumbers(e.target.value)} 
                className="input-field w-full h-32 resize-none" 
                placeholder="Enter numbers here..."
              />
            </div>
            <button 
              onClick={calculateAverage}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Average
            </button>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="text-center space-y-4">
                {result !== null ? (
                  <div className="space-y-2">
                    <div className="text-sm text-slate-500">Average (Mean)</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(2)}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      The average is the sum of all numbers divided by the count of numbers.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter numbers to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Averages</h2>
        <p>
          Averages are a way of summarizing a set of numbers into a single value. They are commonly used in statistics, science, and everyday life to represent typical values.
        </p>
        <p>
          Our <strong>average calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to calculate the mean of a set of numbers. It sums all the numbers in the set and divides the total by the number of values.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use an Average Calculator?</h3>
        <p>
          Average calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Summarization:</strong> They provide a fun and insightful way to summarize a set of numbers into a single value.</li>
          <li><strong>Comparison:</strong> They can be a great tool for comparing different sets of data.</li>
          <li><strong>Insight:</strong> They offer a unique perspective on your potential for understanding trends and patterns.</li>
        </ol>
      </div>
    </div>
  );
};
