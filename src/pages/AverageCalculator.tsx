import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


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
          
          <ResultActions 
            onReset={() => {
              setNumbers('');
              setResult(null);
            }}
            onCopy={() => {
              if (result !== null) {
                const text = `Average (Mean): ${result.toFixed(2)}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Average Calculator" 
        path="/average-calculator" 
        description="Calculate the arithmetic mean, median, and mode for any set of numbers with detailed statistical breakdowns."
      />
    </div>
  );
};
