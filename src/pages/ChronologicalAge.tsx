import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


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

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Chronological Age</h2>
        <p>
          Chronological age is a measure of the time elapsed since a person's birth. It is commonly used in health and wellness awareness to track growth and development.
        </p>
        <p>
          Our <strong>chronological age calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to calculate your exact age in years, months, and days based on your birth date. It calculates the difference between the current date and your birth date.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Chronological Age Calculator?</h3>
        <p>
          Chronological age calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Health Awareness:</strong> They provide a fun and insightful way to calculate your exact age and stay healthy.</li>
          <li><strong>Growth Tracking:</strong> They can be a great tool for tracking your growth and development over time.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
