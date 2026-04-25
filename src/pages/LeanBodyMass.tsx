import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const LeanBodyMass: React.FC = () => {
  const [weight, setWeight] = useState<number>(150);
  const [bodyFat, setBodyFat] = useState<number>(20);
  const [result, setResult] = useState<number | null>(null);

  const calculateLBM = () => {
    setResult(weight * (1 - bodyFat / 100));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Lean Body Mass Calculator | Estimate Your Lean Body Mass 2026</title>
        <meta name="description" content="Free online lean body mass calculator for 2026. Quickly estimate your lean body mass based on weight and body fat percentage with instant results." />
      </Helmet>

      <h1>Lean Body Mass Calculator</h1>
      <p>Quickly estimate your lean body mass for health and fitness tracking.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Weight (lbs)</label>
              <input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Body Fat Percentage (%)</label>
              <input 
                type="number" 
                value={bodyFat} 
                onChange={(e) => setBodyFat(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateLBM}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Lean Body Mass
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
                    <div className="text-sm text-slate-500">Estimated Lean Body Mass</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(1)} lbs</div>
                    <div className="text-sm text-slate-400 mt-4">
                      Lean body mass is your total weight minus your body fat weight.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your details to see results!</div>
                )}
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setWeight(150);
              setBodyFat(20);
              setResult(null);
            }}
            onCopy={() => {
              if (result !== null) {
                const text = `Lean Body Mass: ${result.toFixed(1)} lbs\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Lean Body Mass Calculator"
        path="/lean-body-mass"
        description="Estimate your lean body mass (LBM) to better understand your body composition and fitness progress."
      />
    </div>
  );
};
