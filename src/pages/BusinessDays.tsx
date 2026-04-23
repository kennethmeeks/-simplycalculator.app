import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const BusinessDays: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateBusinessDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return;

    let count = 0;
    const current = new Date(start);
    while (current <= end) {
      const day = current.getDay();
      if (day !== 0 && day !== 6) count++;
      current.setDate(current.getDate() + 1);
    }
    setResult(count);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Business Days Calculator | Count Working Days Between Dates 2026</title>
        <meta name="description" content="Free online business days calculator for 2026. Quickly count working days between two dates with instant results." />
      </Helmet>

      <h1>Business Days Calculator</h1>
      <p>Quickly count working days between two dates for project planning and work tracking.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Start Date</label>
              <input 
                type="date" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">End Date</label>
              <input 
                type="date" 
                value={endDate} 
                onChange={(e) => setEndDate(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateBusinessDays}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Business Days
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
                    <div className="text-sm text-slate-500">Business Days</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result} Days</div>
                    <div className="text-sm text-slate-400 mt-4">
                      This excludes Saturdays and Sundays.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your dates to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Business Days Calculator" 
        path="/business-days" 
        description="Count working days between any two dates accurately. Exclude weekends and holidays for project planning and professional scheduling in 2026."
      />
    </div>
  );
};
