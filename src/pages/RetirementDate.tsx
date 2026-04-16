import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


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
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Retirement</h2>
        <p>
          Retirement is a process of leaving work and starting a new phase of life. It is a key part of financial planning and is essential for health and wellness.
        </p>
        <p>
          Our <strong>retirement date calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to estimate your retirement date based on your birth date and retirement age. It adds your retirement age to your birth year to provide a total value.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Retirement Date Calculator?</h3>
        <p>
          Retirement date calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Financial Planning:</strong> They provide a fun and insightful way to estimate your retirement date and plan for growth.</li>
          <li><strong>Wellness:</strong> They can be a great tool for understanding your health and improving wellness.</li>
          <li><strong>Insight:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
