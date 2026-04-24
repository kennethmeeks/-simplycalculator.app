import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const DayOfTheWeekCalculator: React.FC = () => {
  const [date, setDate] = useState<string>('2026-01-01');
  const [dayName, setDayName] = useState<string>('');

  useEffect(() => {
    const d = new Date(date);
    const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    setDayName(names[d.getUTCDay()]);
  }, [date]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Day of the Week Calculator | Find the Day for Any Date 2026</title>
        <meta name="description" content="Calculate the day of the week for any given date. Find the day of your birth or any historical event easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Day of the Week Calculator</h1>
        <p className="text-slate-600">Find the day of the week for any given date.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Date Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Select Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Day of the Week</p>
              <p className="text-4xl font-bold text-[#0066cc]">{dayName}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation uses the UTC day of the week for the selected date.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Day of the Week Calculator" 
        path="/day-of-the-week" 
        description="Find the day of the week for any date. Discover what day you were born or plan future 2026 events instantly."
      />
    </div>
  );
};
