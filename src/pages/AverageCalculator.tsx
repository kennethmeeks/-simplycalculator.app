import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const AverageCalculator: React.FC = () => {
  const [numbers, setNumbers] = useState<string>('');
  const [stats, setStats] = useState<{
    mean: number;
    sum: number;
    count: number;
    median: number;
    mode: string;
  } | null>(null);

  const calculateAverage = () => {
    const cleaned = numbers.split(/[,\s\n]+/).map(s => s.trim()).filter(s => s !== '').map(Number).filter(n => !isNaN(n));

    if (cleaned.length === 0) {
      setStats(null);
      return;
    }

    const sum = cleaned.reduce((acc, n) => acc + n, 0);
    const mean = sum / cleaned.length;

    const sorted = [...cleaned].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

    const counts: Record<number, number> = {};
    let maxCount = 0;
    cleaned.forEach(n => {
      counts[n] = (counts[n] || 0) + 1;
      maxCount = Math.max(maxCount, counts[n]);
    });
    const modes = Object.keys(counts).filter(k => counts[Number(k)] === maxCount);
    const modeStr = (modes.length === cleaned.length && cleaned.length > 1) ? 'None' : modes.join(', ');

    setStats({
      mean,
      sum,
      count: cleaned.length,
      median,
      mode: modeStr
    });
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
              <label className="input-label text-slate-900 font-bold mb-2 block">Data Set Values</label>
              <textarea 
                value={numbers} 
                onChange={(e) => setNumbers(e.target.value)} 
                className="input-field w-full h-40 resize-none font-mono text-lg" 
                placeholder="Example: 10, 25, 30.5, 42&#10;or&#10;10 25 30.5 42"
              />
              <div className="mt-3 space-y-2">
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                  <span className="text-[#0066cc] font-bold">How to calculate:</span> Enter as many numbers as you need. Our engine automatically ignores text and separates values by <span className="underline decoration-blue-200">commas</span>, <span className="underline decoration-blue-200">spaces</span>, or <span className="underline decoration-blue-200">new lines</span>.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-slate-100 text-[11px] font-bold text-slate-600 rounded">Positive/Negative OK</span>
                  <span className="px-2 py-0.5 bg-slate-100 text-[11px] font-bold text-slate-600 rounded">Decimals OK</span>
                </div>
              </div>
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
              <div className="text-center space-y-6">
                {stats !== null ? (
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Average (Mean)</div>
                      <div className="text-5xl font-bold text-[#0066cc] tracking-tight">{stats.mean.toLocaleString(undefined, { maximumFractionDigits: 4 })}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                      <div className="text-left p-3 rounded-lg bg-slate-50">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Sum</div>
                        <div className="text-xl font-bold text-slate-700">{stats.sum.toLocaleString()}</div>
                      </div>
                      <div className="text-left p-3 rounded-lg bg-slate-50">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Count</div>
                        <div className="text-xl font-bold text-slate-700">{stats.count}</div>
                      </div>
                      <div className="text-left p-3 rounded-lg bg-slate-50">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Median</div>
                        <div className="text-xl font-bold text-slate-700">{stats.median.toLocaleString()}</div>
                      </div>
                      <div className="text-left p-3 rounded-lg bg-slate-50">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Mode</div>
                        <div className="text-xl font-bold text-slate-700 truncate" title={stats.mode}>{stats.mode}</div>
                      </div>
                    </div>

                    <div className="text-[12px] text-slate-400 italic">
                      The mean is the total sum ({stats.sum.toLocaleString()}) divided by the number of values ({stats.count}).
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-12">
                    <div className="text-slate-200 mb-4">
                      <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="font-medium">Enter your data set to see</p>
                    <p className="text-sm">mean, median, mode, and sum.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setNumbers('');
              setStats(null);
            }}
            onCopy={() => {
              if (stats !== null) {
                const text = `Average (Mean): ${stats.mean}\nSum: ${stats.sum}\nCount: ${stats.count}\nMedian: ${stats.median}\nMode: ${stats.mode}\nCalculated at simplycalculator.app`;
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
