import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const SobrietyCalculator: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateSobriety = () => {
    const start = new Date(startDate);
    if (isNaN(start.getTime())) return;
    const diff = new Date().getTime() - start.getTime();
    setResult(Math.floor(diff / (1000 * 60 * 60 * 24)));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Sobriety Calculator | Track Your Days of Sobriety 2026</title>
        <meta name="description" content="Free online sobriety calculator for 2026. Quickly track your days of sobriety from a specific start date with instant results." />
      </Helmet>

      <h1>Sobriety Calculator</h1>
      <p>Quickly track your days of sobriety from a specific start date for health and wellness awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Sobriety Start Date</label>
              <input 
                type="date" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateSobriety}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Days Sober
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
                    <div className="text-sm text-slate-500">Days of Sobriety</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result} Days</div>
                    <div className="text-sm text-slate-400 mt-4">
                      Congratulations on your progress! Keep going!
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your start date to see results!</div>
                )}
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setStartDate('');
              setResult(null);
            }}
            onCopy={() => {
              if (result !== null) {
                const text = `Sober Days: ${result}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Sobriety Calculator"
        path="/sobriety-calculator"
        description="Track your journey with our sobriety counter. Calculate days, months, and years of abstinence."
      />
    </div>
  );
};
