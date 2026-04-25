import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const FertilityCalculator: React.FC = () => {
  const [lastPeriod, setLastPeriod] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [results, setResults] = useState<string[]>([]);

  const calculateFertility = () => {
    const date = new Date(lastPeriod);
    if (isNaN(date.getTime())) return;
    const fertileStart = new Date(date.getTime() + (cycleLength - 18) * 24 * 60 * 60 * 1000);
    const fertileEnd = new Date(date.getTime() + (cycleLength - 11) * 24 * 60 * 60 * 1000);
    setResults([fertileStart.toLocaleDateString(), fertileEnd.toLocaleDateString()]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Fertility Calculator | Estimate Your Fertile Window 2026</title>
        <meta name="description" content="Free online fertility calculator for 2026. Quickly estimate your fertile window based on your menstrual cycle with instant results." />
      </Helmet>

      <h1>Fertility Calculator</h1>
      <p>Quickly estimate your fertile window for family planning and health awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">First Day of Last Period</label>
              <input 
                type="date" 
                value={lastPeriod} 
                onChange={(e) => setLastPeriod(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Average Cycle Length (Days)</label>
              <input 
                type="number" 
                value={cycleLength} 
                onChange={(e) => setCycleLength(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateFertility}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Fertile Window
            </button>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="text-center space-y-4">
                {results.length > 0 ? (
                  <div className="space-y-2">
                    <div className="text-sm text-slate-500">Estimated Fertile Window</div>
                    <div className="text-3xl font-bold text-[#0066cc]">{results[0]} - {results[1]}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      This is your most fertile window for conception.
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
              setLastPeriod('');
              setCycleLength(28);
              setResults([]);
            }}
            onCopy={() => {
              if (results.length > 0) {
                const text = `Fertility Results:\nFertile Window: ${results[0]} - ${results[1]}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Fertility Calculator"
        path="/fertility-calculator"
        description="Calculate your most fertile days based on your menstrual cycle history."
      />
    </div>
  );
};
