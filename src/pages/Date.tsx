import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const DateCalculator: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  
  const [diffDays, setDiffDays] = useState(0);
  const [diffWeeks, setDiffWeeks] = useState(0);
  const [diffMonths, setDiffMonths] = useState(0);
  const [diffYears, setDiffYears] = useState(0);

  const [addDays, setAddDays] = useState(0);
  const [addWeeks, setAddWeeks] = useState(0);
  const [addMonths, setAddMonths] = useState(0);
  const [addYears, setAddYears] = useState(0);
  const [targetDate, setTargetDate] = useState('');

  useEffect(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDiffDays(days);
    setDiffWeeks(Number((days / 7).toFixed(1)));
    setDiffMonths(Number((days / 30.44).toFixed(1)));
    setDiffYears(Number((days / 365.25).toFixed(2)));
  }, [startDate, endDate]);

  useEffect(() => {
    const start = new Date(startDate);
    start.setDate(start.getDate() + addDays + (addWeeks * 7));
    start.setMonth(start.getMonth() + addMonths);
    start.setFullYear(start.getFullYear() + addYears);
    setTargetDate(start.toLocaleDateString(undefined, { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));
  }, [startDate, addDays, addWeeks, addMonths, addYears]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Date Calculator | Calculate Days Between Dates & Add/Subtract Days</title>
        <meta name="description" content="Free online date calculator to find the number of days between two dates or add/subtract days, weeks, months, and years from any date." />
      </Helmet>

      <h1>Date Calculator</h1>
      <p>Find the exact duration between two dates or calculate a future/past date by adding or subtracting time.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="calculator-container">
            <div className="section-title">Duration Between Dates</div>
            <div className="space-y-4">
              <div>
                <label className="input-label">Start Date</label>
                <input 
                  type="date" 
                  value={startDate} 
                  onChange={(e) => setStartDate(e.target.value)} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">End Date</label>
                <input 
                  type="date" 
                  value={endDate} 
                  onChange={(e) => setEndDate(e.target.value)} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="calculator-container">
            <div className="section-title">Add / Subtract Time</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="input-label">Years</label>
                <input 
                  type="number" 
                  value={addYears} 
                  onChange={(e) => setAddYears(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Months</label>
                <input 
                  type="number" 
                  value={addMonths} 
                  onChange={(e) => setAddMonths(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Weeks</label>
                <input 
                  type="number" 
                  value={addWeeks} 
                  onChange={(e) => setAddWeeks(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Days</label>
                <input 
                  type="number" 
                  value={addDays} 
                  onChange={(e) => setAddDays(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="calculator-container">
            <div className="section-title">Duration Results</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Days</div>
                <div className="text-2xl font-bold text-[#0066cc]">{diffDays}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Weeks</div>
                <div className="text-2xl font-bold text-[#0066cc]">{diffWeeks}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Months</div>
                <div className="text-2xl font-bold text-[#0066cc]">{diffMonths}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Years</div>
                <div className="text-2xl font-bold text-[#0066cc]">{diffYears}</div>
              </div>
            </div>
          </div>

          <div className="calculator-container">
            <div className="section-title">Target Date Result</div>
            <div className="result-box py-6">
              <div className="text-sm text-slate-500 uppercase font-bold mb-2">Calculated Date</div>
              <div className="text-xl font-bold text-[#0066cc]">{targetDate}</div>
            </div>
            <div className="mt-8 border-t border-slate-100 pt-6">
              <ResultActions 
                onReset={() => {
                  setStartDate(new Date().toISOString().split('T')[0]);
                  setEndDate(new Date().toISOString().split('T')[0]);
                  setAddDays(0);
                  setAddWeeks(0);
                  setAddMonths(0);
                  setAddYears(0);
                }}
                onCopy={() => {
                  const text = `Date Results:\nDays Between: ${diffDays}\nTarget Date: ${targetDate}\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Date Calculator" 
        path="/date" 
        description="Calculate days between dates or add/subtract time from any date. Precise duration and target date calculations for 2026 planning."
      />
    </div>
  );
};
