import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Hash } from 'lucide-react';

export const StandardDeviationCalculator: React.FC = () => {
  const [numbers, setNumbers] = useState<string>('10, 12, 23, 23, 16, 23, 21, 16');
  const [result, setResult] = useState<{ mean: number, variance: number, stdDev: number } | null>(null);

  useEffect(() => {
    const nums = numbers.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    if (nums.length < 2) return;
    
    const mean = nums.reduce((a, b) => a + b, 0) / nums.length;
    const variance = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (nums.length - 1);
    const stdDev = Math.sqrt(variance);

    setResult({ mean, variance, stdDev });
  }, [numbers]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Standard Deviation Calculator | Calculate Variance & Std Dev</title>
        <meta name="description" content="Free online standard deviation calculator. Calculate the mean, variance, and standard deviation of a set of numbers for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Hash className="w-8 h-8 text-[#0066cc]" />
          Standard Deviation Calculator
        </h1>
        <p className="text-slate-600">Calculate the mean, variance, and standard deviation of a set of numbers.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="input-label">Enter Numbers (comma separated)</label>
                <input 
                  type="text" 
                  value={numbers} 
                  onChange={(e) => setNumbers(e.target.value)} 
                  placeholder="e.g. 10, 12, 23, 23, 16, 23, 21, 16"
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              What is Standard Deviation?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Standard deviation is a measure of the amount of variation or dispersion of a set of values.
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Mean:</strong> The average of all the numbers in the set.</li>
              <li><strong>Variance:</strong> The average of the squared differences from the mean.</li>
              <li><strong>Standard Deviation:</strong> The square root of the variance.</li>
              <li><strong>Low Standard Deviation:</strong> Indicates that the values tend to be close to the mean.</li>
              <li><strong>High Standard Deviation:</strong> Indicates that the values are spread out over a wider range.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Results
            </h2>
            {result && (
              <div className="space-y-6">
                <div className="text-center py-4 border-b border-slate-800">
                  <div className="text-6xl font-bold mb-1 text-[#0066cc]">{result.stdDev.toFixed(4)}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Standard Deviation</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-slate-200">{result.mean.toFixed(4)}</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Mean</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-slate-200">{result.variance.toFixed(4)}</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Variance</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Math Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standard deviation is a powerful tool for understanding the distribution of data and identifying outliers.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Standard Deviation in 2026</h2>
        <p>
          Our <strong>standard deviation calculator</strong> is a simple and efficient tool for calculating the mean, variance, and standard deviation of a set of numbers. By entering the numbers, we can reveal the distribution and dispersion of your data.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Importance of Standard Deviation</h3>
        <p>
          Standard deviation is essential for analyzing and interpreting data in various fields, including science, finance, and daily life. It's used in everything from quality control to investment risk assessment.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Components of Standard Deviation</h3>
        <ul>
          <li><strong>Mean:</strong> The average of all the numbers in the set.</li>
          <li><strong>Variance:</strong> The average of the squared differences from the mean.</li>
          <li><strong>Standard Deviation:</strong> The square root of the variance.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">What is the difference between population and sample standard deviation?</p>
            <p>Population standard deviation is used when you have data for the entire group. Sample standard deviation is used when you have data for a subset of the group.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I interpret a high standard deviation?</p>
            <p>A high standard deviation indicates that the values are spread out over a wider range, suggesting more variability and less consistency in the data.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
