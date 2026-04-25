import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const WaistToHip: React.FC = () => {
  const [waist, setWaist] = useState<number>(30);
  const [hip, setHip] = useState<number>(36);
  const [result, setResult] = useState<number | null>(null);

  const calculateWHR = () => {
    if (hip === 0) return;
    setResult(waist / hip);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Waist to Hip Ratio Calculator | Estimate Your Health Risk 2026</title>
        <meta name="description" content="Free online waist to hip ratio calculator for 2026. Quickly estimate your waist-to-hip ratio and health risk with instant results." />
      </Helmet>

      <h1>Waist to Hip Ratio Calculator</h1>
      <p>Quickly estimate your waist-to-hip ratio for health and wellness awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Waist Circumference (inches)</label>
              <input 
                type="number" 
                value={waist} 
                onChange={(e) => setWaist(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Hip Circumference (inches)</label>
              <input 
                type="number" 
                value={hip} 
                onChange={(e) => setHip(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateWHR}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Waist to Hip Ratio
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
                    <div className="text-sm text-slate-500">Estimated Waist to Hip Ratio</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(2)}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      A ratio above 0.90 for men or 0.85 for women indicates increased health risk.
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
              setWaist(30);
              setHip(36);
              setResult(null);
            }}
            onCopy={() => {
              if (result !== null) {
                const text = `Waist to Hip Ratio: ${result.toFixed(2)}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Waist to Hip Ratio Calculator"
        path="/waist-to-hip-ratio"
        description="Assess your health risk based on fat distribution with our Waist to Hip Ratio (WHR) calculator."
      />
    </div>
  );
};
