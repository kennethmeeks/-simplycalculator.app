import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const ChronologicalAge: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>('');
  const [result, setResult] = useState<{ years: number, months: number, days: number } | null>(null);

  const calculateAge = () => {
    const birth = new Date(birthDate);
    const now = new Date();
    if (isNaN(birth.getTime())) return;

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({ years, months, days });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Chronological Age Calculator | Calculate Your Exact Age 2026</title>
        <meta name="description" content="Free online chronological age calculator for 2026. Quickly calculate your exact age in years, months, and days with instant results." />
      </Helmet>

      <h1>Chronological Age Calculator</h1>
      <p>Quickly calculate your exact age in years, months, and days for health and wellness awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Birth Date</div>
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
            <button 
              onClick={calculateAge}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Exact Age
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
                    <div className="text-sm text-slate-500">Your Exact Age</div>
                    <div className="text-4xl font-bold text-[#0066cc]">{result.years} Years, {result.months} Months, {result.days} Days</div>
                    <div className="text-sm text-slate-400 mt-4">
                      This is your chronological age as of today.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your birth date to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Chronological Age Calculator" 
        path="/chronological-age" 
        description="Calculate your exact age in years, months, and days. Ideal for legal documents, clinical use, and personal tracking in 2026."
      />
    </div>
  );
};
