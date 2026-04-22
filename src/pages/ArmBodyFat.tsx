import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const ArmBodyFat: React.FC = () => {
  const [triceps, setTriceps] = useState<number>(10);
  const [biceps, setBiceps] = useState<number>(5);
  const [result, setResult] = useState<number | null>(null);

  const calculateArmFat = () => {
    setResult((triceps + biceps) / 2);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Arm Body Fat Calculator | Estimate Your Arm Body Fat Percentage 2026</title>
        <meta name="description" content="Free online arm body fat calculator for 2026. Quickly estimate your arm body fat percentage based on skinfold measurements with instant results." />
      </Helmet>

      <h1>Arm Body Fat Calculator</h1>
      <p>Quickly estimate your arm body fat percentage for health and fitness awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Triceps Skinfold (mm)</label>
              <input 
                type="number" 
                value={triceps} 
                onChange={(e) => setTriceps(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Biceps Skinfold (mm)</label>
              <input 
                type="number" 
                value={biceps} 
                onChange={(e) => setBiceps(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateArmFat}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Arm Body Fat
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
                    <div className="text-sm text-slate-500">Estimated Arm Body Fat Percentage</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(1)}%</div>
                    <div className="text-sm text-slate-400 mt-4">
                      Body fat percentage varies based on age, gender, and individual factors.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your details to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Arm Body Fat Calculator" 
        path="/arm-body-fat" 
        description="Estimate arm body fat percentage using skinfold caliper measurements for triceps and biceps."
      />
    </div>
  );
};
