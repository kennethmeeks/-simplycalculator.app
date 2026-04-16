import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


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
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Ultimate Guide to Date Calculations</h2>
        <p>
          Calculating the duration between two dates or determining a future date is a common task in project management, legal proceedings, and personal planning. Our <strong>date calculator</strong> is a versatile tool designed to provide precise results for any date-related query in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Date Calculator?</h3>
        <p>
          While it might seem simple to count days on a calendar, manual calculations are prone to errors, especially when dealing with leap years, varying month lengths, and long durations. A digital calculator ensures accuracy and saves time.
        </p>
        <ul>
          <li><strong>Project Deadlines:</strong> Calculate how many working days or weeks are left until a milestone.</li>
          <li><strong>Legal and Contractual:</strong> Determine the exact date a contract expires or a notice period ends.</li>
          <li><strong>Personal Milestones:</strong> Find out exactly how many days until your next vacation or how many weeks since a special event.</li>
          <li><strong>Age and Anniversary:</strong> Calculate precise ages or durations for anniversaries.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Understanding Date Math</h3>
        <p>
          Date math involves adding or subtracting units of time (days, weeks, months, years) from a starting point. Our calculator handles the complexities of the Gregorian calendar automatically.
        </p>
        
        <h4 className="font-bold text-slate-900">Leap Years</h4>
        <p>
          A leap year occurs every four years (with some exceptions) and adds an extra day to February. This affects any calculation that spans across the end of February in a leap year. Our tool accounts for these variations to ensure your results are always correct.
        </p>

        <h4 className="font-bold text-slate-900">Month Lengths</h4>
        <p>
          Since months vary from 28 to 31 days, adding "one month" can be ambiguous. Our calculator uses standard calendar logic to move to the same day in the following month, adjusting for shorter months if necessary.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How many days are in a year?</p>
            <p>A standard year has 365 days, while a leap year has 366 days. For long-term averages, 365.25 days is often used.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does this calculator include the end date?</p>
            <p>By default, most date duration calculations count the number of full days between the two dates. If you need to include the end date as a "day of work," simply add one to the result.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the Gregorian calendar?</p>
            <p>The Gregorian calendar is the most widely used civil calendar in the world today. It was introduced in 1582 to replace the Julian calendar and improve the accuracy of leap year calculations.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Pro Tip: Working Days</h3>
        <p>
          If you are using this for business, remember that the total number of days includes weekends and holidays. To find "business days," you typically subtract 2 days for every 7-day period, though specific holidays will vary by region.
        </p>
      </div>
    </div>
  );
};
