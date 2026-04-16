import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const MeanMedianModeRangeCalculator: React.FC = () => {
  const [input, setInput] = useState<string>('10, 20, 30, 40, 50');
  const [mean, setMean] = useState<number>(0);
  const [median, setMedian] = useState<number>(0);
  const [mode, setMode] = useState<string>('');
  const [range, setRange] = useState<number>(0);

  useEffect(() => {
    const numbers = input.split(',').map(n => Number(n.trim())).filter(n => !isNaN(n));
    if (numbers.length === 0) return;

    // Mean
    const sum = numbers.reduce((a, b) => a + b, 0);
    setMean(sum / numbers.length);

    // Median
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    setMedian(sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2);

    // Mode
    const counts: Record<number, number> = {};
    let maxCount = 0;
    numbers.forEach(n => {
      counts[n] = (counts[n] || 0) + 1;
      maxCount = Math.max(maxCount, counts[n]);
    });
    const modes = Object.keys(counts).filter(k => counts[Number(k)] === maxCount);
    setMode(modes.length === numbers.length ? 'None' : modes.join(', '));

    // Range
    setRange(Math.max(...numbers) - Math.min(...numbers));
  }, [input]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Mean, Median, Mode, Range Calculator | Statistics Tool 2026</title>
        <meta name="description" content="Calculate the mean, median, mode, and range of a data set. Find the central tendency and variability of your data easily." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Mean, Median, Mode, Range Calculator</h1>
        <p className="text-slate-600">Calculate the central tendency and variability of your data set.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Enter Your Data</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Numbers (comma-separated)</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none h-32"
                placeholder="e.g., 10, 20, 30, 40, 50"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Mean (Average)</p>
              <p className="text-2xl font-bold text-[#0066cc]">{mean.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Median (Middle Value)</p>
              <p className="text-2xl font-bold text-slate-900">{median.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Mode (Most Frequent)</p>
              <p className="text-2xl font-bold text-slate-900">{mode}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Range (Difference)</p>
              <p className="text-2xl font-bold text-slate-900">{range.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What are Mean, Median, Mode, and Range?</h2>
        <p>
          Mean, median, and mode are measures of central tendency, which help you find the center of a data set. Range is a measure of variability, which helps you understand how spread out your data is.
        </p>
        <h3>The Definitions</h3>
        <ul>
          <li><strong>Mean:</strong> The average of all numbers in a data set.</li>
          <li><strong>Median:</strong> The middle value of a data set when it is ordered from least to greatest.</li>
          <li><strong>Mode:</strong> The number that appears most frequently in a data set.</li>
          <li><strong>Range:</strong> The difference between the highest and lowest values in a data set.</li>
        </ul>
        <h3>Why These Measures Matter</h3>
        <p>
          Understanding these measures is critical for analyzing and interpreting data in a wide range of fields, including statistics, science, and business. They provide a simple and effective way to summarize and communicate complex information.
        </p>
      </div>
    </div>
  );
};
