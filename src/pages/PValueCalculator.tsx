import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const PValueCalculator: React.FC = () => {
  const [zScore, setZScore] = useState<number>(1.96);
  const [pValue, setPValue] = useState<number>(0);

  useEffect(() => {
    // Simple approximation for normal distribution P-value
    const t = 1 / (1 + 0.2316419 * Math.abs(zScore));
    const d = 0.3989423 * Math.exp(-zScore * zScore / 2);
    const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    
    if (zScore > 0) setPValue(1 - p);
    else setPValue(p);
  }, [zScore]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>P-value Calculator | Statistical Significance Tool 2026</title>
        <meta name="description" content="Calculate the P-value of a Z-score based on the standard normal distribution. Find the statistical significance of your data easily." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">P-value Calculator</h1>
        <p className="text-slate-600">Calculate the P-value of a Z-score in a standard normal distribution.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Data Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Z-score</label>
              <input
                type="number"
                step="0.01"
                value={zScore}
                onChange={(e) => setZScore(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">P-value (One-Tailed)</p>
              <p className="text-4xl font-bold text-[#0066cc]">{pValue.toFixed(4)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">P-value (Two-Tailed)</p>
              <p className="text-2xl font-bold text-slate-900">{(pValue * 2).toFixed(4)}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation uses an approximation of the standard normal distribution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a P-value?</h2>
        <p>
          A P-value (or probability value) is a measure of the statistical significance of a result in a data set. It's a useful tool for quantifying the uncertainty of an estimate and identifying the range of values for a data set.
        </p>
        <h3>How to Use a P-value</h3>
        <p>
          To use a P-value, you simply compare it to a significance level (usually 0.05). If the P-value is less than the significance level, then the result is considered to be statistically significant.
        </p>
        <h3>Why P-values Matter</h3>
        <p>
          P-values are critical for analyzing and interpreting data in a wide range of fields, including statistics, science, and business. They provide a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
