import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const StatisticsCalculator: React.FC = () => {
  const [input, setInput] = useState('10, 20, 30, 40, 50');
  const [mean, setMean] = useState(0);
  const [median, setMedian] = useState(0);
  const [mode, setMode] = useState<number[]>([]);
  const [range, setRange] = useState(0);
  const [stdDev, setStdDev] = useState(0);
  const [variance, setVariance] = useState(0);
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    const numbers = input
      .split(/[\s,]+/)
      .map(n => parseFloat(n))
      .filter(n => !isNaN(n));

    if (numbers.length === 0) return;

    const n = numbers.length;
    const s = numbers.reduce((a, b) => a + b, 0);
    const m = s / n;
    const sorted = [...numbers].sort((a, b) => a - b);
    const minVal = sorted[0];
    const maxVal = sorted[n - 1];
    const r = maxVal - minVal;

    // Median
    let med = 0;
    if (n % 2 === 0) {
      med = (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
    } else {
      med = sorted[Math.floor(n / 2)];
    }

    // Mode
    const counts: { [key: number]: number } = {};
    let maxCount = 0;
    numbers.forEach(num => {
      counts[num] = (counts[num] || 0) + 1;
      if (counts[num] > maxCount) maxCount = counts[num];
    });
    const modes = Object.keys(counts)
      .map(Number)
      .filter(num => counts[num] === maxCount && maxCount > 1);

    // Variance & Std Dev
    const sqDiffs = numbers.map(num => Math.pow(num - m, 2));
    const v = sqDiffs.reduce((a, b) => a + b, 0) / n;
    const sd = Math.sqrt(v);

    setMean(Number(m.toFixed(4)));
    setMedian(Number(med.toFixed(4)));
    setMode(modes);
    setRange(Number(r.toFixed(4)));
    setStdDev(Number(sd.toFixed(4)));
    setVariance(Number(v.toFixed(4)));
    setCount(n);
    setSum(Number(s.toFixed(4)));
    setMin(Number(minVal.toFixed(4)));
    setMax(Number(maxVal.toFixed(4)));
  }, [input]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Statistics Calculator | Mean, Median, Mode, Range & Std Dev</title>
        <meta name="description" content="Free online statistics calculator to find the mean, median, mode, range, standard deviation, and variance for a set of numbers." />
      </Helmet>

      <h1>Statistics Calculator</h1>
      <p>Enter a set of numbers separated by commas or spaces to calculate the key statistical measures instantly.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Data Set</div>
          <div className="space-y-4">
            <textarea 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              className="input-field h-32 font-mono text-sm"
              placeholder="e.g., 10, 20, 30, 40, 50"
            />
            <p className="text-xs text-slate-500 italic">
              Tip: You can paste a list of numbers from Excel or a text file.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Statistical Results</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Mean (Average)</div>
                <div className="text-2xl font-bold text-[#0066cc]">{mean}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Median</div>
                <div className="text-2xl font-bold text-[#0066cc]">{median}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Mode</div>
                <div className="text-2xl font-bold text-[#0066cc]">
                  {mode.length > 0 ? mode.join(', ') : 'None'}
                </div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Range</div>
                <div className="text-2xl font-bold text-[#0066cc]">{range}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Std Deviation</div>
                <div className="text-2xl font-bold text-[#0066cc]">{stdDev}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Variance</div>
                <div className="text-2xl font-bold text-[#0066cc]">{variance}</div>
              </div>
            </div>
          </div>

          <div className="calculator-container">
            <div className="section-title">Data Summary</div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-500">Count (n):</span>
                <span className="font-bold">{count}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-500">Sum:</span>
                <span className="font-bold">{sum}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-500">Minimum:</span>
                <span className="font-bold">{min}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-500">Maximum:</span>
                <span className="font-bold">{max}</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Statistics Calculator" 
        path="/statistics" 
        description="Calculate mean, median, mode, variance, and standard deviation for any data set. A comprehensive statistical analysis tool for 2026."
      />
    </div>
  );
};
