import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const Ovulation: React.FC = () => {
  const [lastPeriod, setLastPeriod] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [result, setResult] = useState<string | null>(null);

  const calculateOvulation = () => {
    const date = new Date(lastPeriod);
    if (isNaN(date.getTime())) return;
    const ovulationDate = new Date(date.getTime() + (cycleLength - 14) * 24 * 60 * 60 * 1000);
    setResult(ovulationDate.toLocaleDateString());
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Ovulation Calculator | Estimate Your Fertile Window 2026</title>
        <meta name="description" content="Free online ovulation calculator for 2026. Quickly estimate your ovulation date and fertile window with instant results." />
      </Helmet>

      <h1>Ovulation Calculator</h1>
      <p>Quickly estimate your ovulation date and fertile window for family planning and health awareness.</p>

      

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
              onClick={calculateOvulation}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Ovulation Date
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
                    <div className="text-sm text-slate-500">Estimated Ovulation Date</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      Your most fertile window is typically 2-3 days before and on this date.
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
        name="Ovulation Calculator" 
        path="/ovulation" 
        description="Estimate your ovulation date and fertile window based on your menstrual cycle. Plan for conception and track your reproductive health in 2026."
      />
    </div>
  );
};
