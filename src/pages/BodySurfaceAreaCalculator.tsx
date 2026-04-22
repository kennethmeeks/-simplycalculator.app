import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const BodySurfaceAreaCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(175);
  const [bsa, setBsa] = useState<number>(0);

  useEffect(() => {
    // Mosteller Formula
    const calculatedBsa = Math.sqrt((height * weight) / 3600);
    setBsa(calculatedBsa);
  }, [weight, height]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Body Surface Area Calculator | BSA Test 2026</title>
        <meta name="description" content="Calculate your Body Surface Area (BSA) based on your weight and height. Monitor your body's total surface area for medical and health purposes." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Body Surface Area Calculator</h1>
        <p className="text-slate-600">Calculate your total body surface area using the Mosteller formula.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Your Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Your Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Body Surface Area (BSA)</p>
              <p className="text-4xl font-bold text-[#0066cc]">{bsa.toFixed(2)} m²</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This is an estimate of your body's total surface area. Always consult with your healthcare provider for medical advice.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Body Surface Area Calculator" 
        path="/body-surface-area" 
        description="Calculate your Body Surface Area (BSA) using standard medical formulas like Mosteller. Essential for clinical assessments and dosage calculations in 2026."
      />
    </div>
  );
};
