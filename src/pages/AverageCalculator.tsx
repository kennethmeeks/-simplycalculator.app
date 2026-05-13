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
    range: number;
    variance: number;
    stdDev: number;
    geoMean: number | null;
    harMean: number | null;
  } | null>(null);

  const calculateAverage = () => {
    const cleaned = numbers.split(/[,\s\n]+/).map(s => s.trim()).filter(s => s !== '').map(Number).filter(n => !isNaN(n));

    if (cleaned.length === 0) {
      setStats(null);
      return;
    }

    const sum = cleaned.reduce((acc, n) => acc + n, 0);
    const mean = sum / cleaned.length;

    // Median
    const sorted = [...cleaned].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

    // Mode
    const counts: Record<number, number> = {};
    let maxCount = 0;
    cleaned.forEach(n => {
      counts[n] = (counts[n] || 0) + 1;
      maxCount = Math.max(maxCount, counts[n]);
    });
    const modes = Object.keys(counts).filter(k => counts[Number(k)] === maxCount);
    const modeStr = (modes.length === cleaned.length && cleaned.length > 1) ? 'None' : modes.join(', ');

    // Range
    const range = sorted[sorted.length - 1] - sorted[0];

    // Variance & StdDev
    const squareDiffs = cleaned.map(n => Math.pow(n - mean, 2));
    const variance = squareDiffs.reduce((acc, n) => acc + n, 0) / cleaned.length;
    const stdDev = Math.sqrt(variance);

    // Geometric Mean
    let geoMean: number | null = null;
    if (cleaned.every(n => n > 0)) {
        const product = cleaned.reduce((acc, n) => acc * n, 1);
        geoMean = Math.pow(product, 1 / cleaned.length);
    }

    // Harmonic Mean
    let harMean: number | null = null;
    if (cleaned.every(n => n > 0)) {
        const invSum = cleaned.reduce((acc, n) => acc + (1 / n), 0);
        harMean = cleaned.length / invSum;
    }

    setStats({
      mean,
      sum,
      count: cleaned.length,
      median,
      mode: modeStr,
      range,
      variance,
      stdDev,
      geoMean,
      harMean
    });
  };

  const getStepByStep = () => {
    const rawValue = input.trim();
    if (!rawValue) return null;
    const nums = rawValue.split(/[\s,]+/).map(n => parseInput(n)).filter(n => !isNaN(n));
    if (nums.length === 0) return null;

    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 text-slate-700 bg-blue-50/40 p-8 rounded-2xl border border-blue-100 mt-12 mb-12"
      >
        <h3 className="text-2xl font-bold text-[#0066cc] flex items-center gap-2">
          <BookOpen className="text-blue-500" size={24} />
          Step-by-Step Statistical Solution
        </h3>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <section className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <p className="font-bold mb-2 text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-[10px]">1</span>
                Identify the Data Set
            </p>
            <p className="text-slate-600">You have provided {nums.length} numbers for analysis in 2026 standards:</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {nums.map((n, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-xs font-mono">{n}</span>
                ))}
            </div>
          </section>

          <section className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <p className="font-bold mb-2 text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-[10px]">2</span>
                Compute the Sum (Σx)
            </p>
            <p className="text-slate-600 mb-3">Add all elements together to find the aggregate total:</p>
            <div className="font-mono bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs overflow-x-auto">
              {nums.join(' + ')} = <span className="text-blue-600 font-bold">{stats.sum}</span>
            </div>
          </section>

          <section className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <p className="font-bold mb-2 text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-[10px]">3</span>
                The Arithmetic Mean Formula (μ)
            </p>
            <p className="text-slate-600 mb-2">Divide the sum (Σx) by the count of elements (n) to find the average:</p>
            <div className="flex flex-col items-center justify-center py-4 bg-blue-50/50 rounded-lg border border-blue-100/30">
                <div className="text-xs font-mono text-slate-400 mb-1">Average = Sum / Count</div>
                <div className="text-lg font-mono">
                    {stats.sum} / {stats.count} = <span className="text-[#0066cc] font-black">{stats.mean.toFixed(4)}</span>
                </div>
            </div>
          </section>

          <section className="pt-6 border-t border-blue-200/50">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calculator size={18} className="text-blue-500" />
                Advanced 2026 Statistical Proofs
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 group hover:border-blue-400 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Standard Deviation (σ)</span>
                <span className="font-mono text-xs text-slate-900">{stats.stdDev.toFixed(8)}</span>
                <p className="text-[10px] text-slate-500 mt-2 leading-tight">Measures the amount of variation or dispersion in the set.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 group hover:border-blue-400 transition-colors">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Variance (σ²)</span>
                <span className="font-mono text-xs text-slate-900">{stats.variance.toFixed(8)}</span>
                <p className="text-[10px] text-slate-500 mt-2 leading-tight">The numerical expectation of the squared deviation from the mean.</p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Average Calculator | Mean, Median, Mode & Statistics 2026</title>
        <meta name="description" content="Free online average calculator for 2026. Calculate mean, median, mode, variance, and standard deviation for any dataset with specific statistical breakdowns." />
      </Helmet>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Average Calculator</h1>
        <p className="text-lg text-slate-600">Calculate the average (arithmetic mean) and a full statistical profile for any set of numbers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Enter Your Dataset</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label text-slate-900 font-bold mb-2 block uppercase text-[11px] tracking-wider">Dataset Values</label>
              <textarea 
                value={numbers} 
                onChange={(e) => setNumbers(e.target.value)} 
                className="input-field w-full h-48 resize-none font-mono text-base p-4 bg-slate-50 border-slate-200 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all" 
                placeholder="Enter numbers here...&#10;Example: 85, 90, 78, 92, 88"
              />
              <div className="mt-4 p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                <p className="text-[13px] text-blue-900 leading-relaxed">
                  <strong>Specific Instructions:</strong> You can separate your numbers using <strong>commas</strong>, <strong>spaces</strong>, or <strong>new lines</strong>. Our calculator handles decimals and negative values automatically. It will ignore non-numeric text, allowing you to paste data from spreadsheets or documents directly.
                </p>
              </div>
            </div>
            <button 
              onClick={calculateAverage}
              className="w-full bg-[#0066cc] text-white py-4 rounded-lg font-bold hover:bg-[#0052a3] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Calculate Statistical Results
            </button>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Statistical Analysis</div>
            <div className="result-box bg-white">
              <div className="text-center space-y-6">
                {stats !== null ? (
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-slate-100">
                      <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Arithmetic Mean (Avg)</div>
                      <div className="text-6xl font-black text-[#0066cc] tracking-tighter">{stats.mean.toLocaleString(undefined, { maximumFractionDigits: 4 })}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 pb-6 border-b border-slate-100">
                      <div className="text-left p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Median</div>
                        <div className="text-lg font-bold text-slate-800">{stats.median.toLocaleString()}</div>
                        <div className="text-[10px] text-slate-500">The middle value</div>
                      </div>
                      <div className="text-left p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Mode</div>
                        <div className="text-lg font-bold text-slate-800 truncate" title={stats.mode}>{stats.mode}</div>
                        <div className="text-[10px] text-slate-500">Most frequent</div>
                      </div>
                      <div className="text-left p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Range</div>
                        <div className="text-lg font-bold text-slate-800">{stats.range.toLocaleString()}</div>
                        <div className="text-[10px] text-slate-500">Max minus Min</div>
                      </div>
                      <div className="text-left p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Count</div>
                        <div className="text-lg font-bold text-slate-800">{stats.count}</div>
                        <div className="text-[10px] text-slate-500">Total samples</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-left p-2">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Std. Deviation</div>
                        <div className="text-base font-bold text-slate-700">{stats.stdDev.toFixed(4)}</div>
                      </div>
                      <div className="text-left p-2">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Variance</div>
                        <div className="text-base font-bold text-slate-700">{stats.variance.toFixed(4)}</div>
                      </div>
                      {stats.geoMean && (
                        <div className="text-left p-2">
                            <div className="text-[10px] font-bold text-slate-400 uppercase">Geometric Mean</div>
                            <div className="text-base font-bold text-slate-700">{stats.geoMean.toFixed(4)}</div>
                        </div>
                      )}
                      {stats.harMean && (
                        <div className="text-left p-2">
                            <div className="text-[10px] font-bold text-slate-400 uppercase">Harmonic Mean</div>
                            <div className="text-base font-bold text-slate-700">{stats.harMean.toFixed(4)}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-400 py-16">
                    <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="font-bold text-slate-900">Waiting for Data</p>
                    <p className="text-sm px-8">Enter your numbers to see the mean, median, mode, and standard deviation.</p>
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
                const text = `Average (Mean): ${stats.mean}\nSum: ${stats.sum}\nCount: ${stats.count}\nMedian: ${stats.median}\nMode: ${stats.mode}\nStd Dev: ${stats.stdDev}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>
      
      {stats !== null && getStepByStep()}

      <CalculatorSEO 
        name="Average Calculator" 
        path="/average-calculator" 
        description="Professional-grade average calculator for 2026. Calculate the arithmetic mean, median, mode, variance, and standard deviation for any dataset with detailed statistical insights."
      />
    </div>
  );
};
