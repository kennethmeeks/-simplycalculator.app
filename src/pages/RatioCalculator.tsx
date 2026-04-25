import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const RatioCalculator: React.FC = () => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(2);
  const [c, setC] = useState<number>(3);
  const [d, setD] = useState<number | null>(null);

  const calculateRatio = () => {
    if (a === 0) return;
    setD((b * c) / a);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Ratio Calculator | Solve Proportions and Ratios 2026</title>
        <meta name="description" content="Free online ratio calculator for 2026. Quickly solve proportions and ratios with instant results." />
      </Helmet>

      <h1>Ratio Calculator</h1>
      <p>Quickly solve proportions and ratios for any purpose.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Solve Proportion (A:B = C:D)</div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">A</label>
                <input 
                  type="number" 
                  value={a} 
                  onChange={(e) => setA(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">B</label>
                <input 
                  type="number" 
                  value={b} 
                  onChange={(e) => setB(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">C</label>
                <input 
                  type="number" 
                  value={c} 
                  onChange={(e) => setC(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">D (Solve for this)</label>
                <input 
                  type="text" 
                  value="?" 
                  disabled 
                  className="input-field w-full bg-slate-100" 
                />
              </div>
            </div>
            <button 
              onClick={calculateRatio}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Solve for D
            </button>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="text-center space-y-4">
                {d !== null ? (
                  <div className="space-y-2">
                    <div className="text-sm text-slate-500">Value of D</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{d.toFixed(2)}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      The proportion is {a}:{b} = {c}:{d.toFixed(2)}.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter values to see results!</div>
                )}
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setA(1);
              setB(2);
              setC(3);
              setD(null);
            }}
            onCopy={() => {
              if (d !== null) {
                const text = `Ratio Results: ${a}:${b} = ${c}:${d.toFixed(2)}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Ratio Calculator"
        path="/ratio-calculator"
        description="Solve ratios and proportions easily. Find the missing value (D) in A:B = C:D."
      />
    </div>
  );
};
