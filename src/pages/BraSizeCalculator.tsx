import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const BraSizeCalculator: React.FC = () => {
  const [band, setBand] = useState<number>(34);
  const [bust, setBust] = useState<number>(36);
  const [braSize, setBraSize] = useState<string>('');

  useEffect(() => {
    const bandSize = band % 2 === 0 ? band : band + 1;
    const diff = Math.round(bust - bandSize);
    const cups = ['AA', 'A', 'B', 'C', 'D', 'DD', 'E', 'F', 'G', 'H'];
    const cup = diff >= 0 && diff < cups.length ? cups[diff] : 'Unknown';
    setBraSize(`${bandSize}${cup}`);
  }, [band, bust]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Bra Size Calculator | Find Your Perfect Fit 2026</title>
        <meta name="description" content="Calculate your bra size based on your band and bust measurements. Find the perfect fit for your body easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Bra Size Calculator</h1>
        <p className="text-slate-600">Find your perfect bra size based on your measurements.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Your Measurements</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Band Size (inches)</label>
              <input
                type="number"
                value={band}
                onChange={(e) => setBand(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Bust Size (inches)</label>
              <input
                type="number"
                value={bust}
                onChange={(e) => setBust(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Bra Size</p>
              <p className="text-4xl font-bold text-[#0066cc]">{braSize}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <ResultActions 
                onReset={() => {
                  setBand(34);
                  setBust(36);
                }}
                onCopy={() => {
                  const text = `Estimated Bra Size: ${braSize}\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
              <p className="text-xs text-slate-500 italic mt-4">
                Note: This calculation uses a standard method for estimating bra size. For the best fit, we recommend trying on different sizes and styles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Bra Size Calculator" 
        path="/bra-size-calculator" 
        description="Find your accurate bra size using professional fitting methods. Learn how to measure band and bust dimensions for the perfect support in 2026."
      />
    </div>
  );
};
