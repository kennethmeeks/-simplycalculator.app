import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const PregnancyCalculator: React.FC = () => {
  const [lastPeriod, setLastPeriod] = useState('2026-01-01');
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const start = new Date(lastPeriod);
    const due = new Date(start);
    due.setDate(start.getDate() + 280); // 40 weeks
    setDueDate(due);

    const now = new Date();
    const diff = now.getTime() - start.getTime();
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (totalDays >= 0) {
      setWeeks(Math.floor(totalDays / 7));
      setDays(totalDays % 7);
    } else {
      setWeeks(0);
      setDays(0);
    }
  }, [lastPeriod]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Pregnancy Due Date Calculator | Track Progress & Weeks</title>
        <meta name="description" content="Calculate your pregnancy due date and track your progress with our free online tool. Accurate 2026 pregnancy tracker based on your last period (LMP)." />
      </Helmet>

      <h1>Pregnancy Due Date Calculator</h1>
      <p>Estimate your baby's due date and find out how far along you are in your pregnancy journey.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
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
            <p className="text-xs text-[#666]">
              Most pregnancies last around 40 weeks (280 days) from the first day of your last menstrual period.
            </p>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-6 text-center">
                <div>
                  <p className="text-sm font-bold text-[#666] uppercase mb-1">Estimated Due Date</p>
                  <p className="text-3xl font-bold text-[#0066cc]">
                    {dueDate ? dueDate.toLocaleDateString(undefined, { dateStyle: 'long' }) : '---'}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#b3d9ff]">
                  <p className="text-sm font-bold text-[#666] uppercase mb-1">Current Progress</p>
                  <p className="text-2xl font-bold text-[#0066cc]">
                    {weeks} Weeks, {days} Days
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Pregnancy Due Date Calculator" 
        path="/pregnancy" 
        description="Estimate your baby's due date and track your pregnancy progress. Find out how far along you are and what to expect in 2026."
      />
    </div>
  );
};
