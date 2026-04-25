import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const RetirementDate: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>('');
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [result, setResult] = useState<string | null>(null);

  const calculateRetirement = () => {
    const birth = new Date(birthDate);
    if (isNaN(birth.getTime())) return;
    const retirement = new Date(birth.getFullYear() + retirementAge, birth.getMonth(), birth.getDate());
    setResult(retirement.toLocaleDateString());
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Retirement Date Calculator | Estimate Your Retirement Date 2026</title>
        <meta name="description" content="Free online retirement date calculator for 2026. Quickly estimate your retirement date based on your birth date and retirement age with instant results." />
      </Helmet>

      <h1>Retirement Date Calculator</h1>
      <p>Quickly estimate your retirement date for financial planning and wellness awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Birth Date</label>
              <input 
                type="date" 
                value={birthDate} 
                onChange={(e) => setBirthDate(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Retirement Age</label>
              <input 
                type="number" 
                value={retirementAge} 
                onChange={(e) => setRetirementAge(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateRetirement}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Retirement Date
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
                    <div className="text-sm text-slate-500">Estimated Retirement Date</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      This is a general estimate based on your birth date and retirement age.
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
              setBirthDate('');
              setRetirementAge(65);
              setResult(null);
            }}
            onCopy={() => {
              if (result !== null) {
                const text = `Estimated Retirement Date: ${result}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Retirement Date Calculator"
        path="/retirement-date"
        description="Calculate your projected retirement date based on your birth date and target retirement age."
      />
    </div>
  );
};
