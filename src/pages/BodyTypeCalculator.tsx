import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const BodyTypeCalculator: React.FC = () => {
  const [bust, setBust] = useState<number>(90);
  const [waist, setWaist] = useState<number>(70);
  const [hips, setHips] = useState<number>(95);
  const [bodyType, setBodyType] = useState<string>('');

  useEffect(() => {
    // Simple logic for body type classification
    if (bust / hips >= 1.05 && bust / waist >= 1.25) {
      setBodyType('Inverted Triangle');
    } else if (hips / bust >= 1.05 && hips / waist >= 1.25) {
      setBodyType('Pear (Triangle)');
    } else if (Math.abs(bust - hips) <= bust * 0.05 && bust / waist >= 1.25) {
      setBodyType('Hourglass');
    } else if (Math.abs(bust - hips) <= bust * 0.05 && bust / waist < 1.25) {
      setBodyType('Rectangle');
    } else {
      setBodyType('Apple (Round)');
    }
  }, [bust, waist, hips]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Body Type Calculator | Find Your Body Shape 2026</title>
        <meta name="description" content="Calculate your body type based on your bust, waist, and hip measurements. Discover your body shape for better fashion and fitness choices." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Body Type Calculator</h1>
        <p className="text-slate-600">Find your body shape based on your measurements.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Your Measurements (cm)</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Bust</label>
              <input
                type="number"
                value={bust}
                onChange={(e) => setBust(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Waist</label>
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Hips</label>
              <input
                type="number"
                value={hips}
                onChange={(e) => setHips(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Your Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Your Body Type</p>
              <p className="text-4xl font-bold text-[#0066cc]">{bodyType}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This is a general classification based on measurements. Every body is unique and beautiful.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Body Type Calculator" 
        path="/body-type-calculator" 
        description="Identify your body shape using bust, waist, and hip measurements. Get personalized insights for fashion, fitness, and health in 2026."
      />
    </div>
  );
};
