import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const AnniversaryCalculator: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateAnniversary = () => {
    const start = new Date(startDate);
    if (isNaN(start.getTime())) return;
    const diff = new Date().getTime() - start.getTime();
    setResult(Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Anniversary Calculator | Track Your Years of Celebration 2026</title>
        <meta name="description" content="Free online anniversary calculator for 2026. Quickly track your years of celebration from a specific start date with instant results." />
      </Helmet>

      <h1>Anniversary Calculator</h1>
      <p>Quickly track your years of celebration from a specific start date for health and wellness awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Anniversary Start Date</label>
              <input 
                type="date" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateAnniversary}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Years of Celebration
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
                    <div className="text-sm text-slate-500">Years of Celebration</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result} Years</div>
                    <div className="text-sm text-slate-400 mt-4">
                      Congratulations on your progress! Keep celebrating!
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your start date to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Anniversary Calculator" 
        path="/anniversary-calculator" 
        description="Calculate years, months, and days since a specific start date for weddings, work, or sobriety anniversaries."
      />
    </div>
  );
};
