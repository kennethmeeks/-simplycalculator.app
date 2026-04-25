import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const DueDate: React.FC = () => {
  const [lastPeriod, setLastPeriod] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const calculateDueDate = () => {
    const date = new Date(lastPeriod);
    if (isNaN(date.getTime())) return;
    const dueDate = new Date(date.getTime() + 280 * 24 * 60 * 60 * 1000);
    setResult(dueDate.toLocaleDateString());
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Due Date Calculator | Estimate Your Baby's Due Date 2026</title>
        <meta name="description" content="Free online due date calculator for 2026. Quickly estimate your baby's due date based on the first day of your last period with instant results." />
      </Helmet>

      <h1>Due Date Calculator</h1>
      <p>Quickly estimate your baby's due date for family planning and health awareness.</p>

      

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
            <button 
              onClick={calculateDueDate}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Due Date
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
                    <div className="text-sm text-slate-500">Estimated Due Date</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      This is a general estimate based on a 40-week gestation period.
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
              setResult(null);
            }}
            onCopy={() => {
              if (result) {
                navigator.clipboard.writeText(`Estimated Due Date: ${result}\nCalculated at simplycalculator.app`);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Due Date Calculator"
        path="/due-date"
        description="Estimate your pregnancy due date based on LMP or conception date."
      />
    </div>
  );
};
