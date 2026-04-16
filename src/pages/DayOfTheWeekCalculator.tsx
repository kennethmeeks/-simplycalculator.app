import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


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

      <div className="prose prose-slate max-w-none">
        <h2>What is a Day of the Week Calculator?</h2>
        <p>
          A day of the week calculator is a tool for finding the day of the week for any given date. It's a useful tool for quantifying the uncertainty of an estimate and identifying the range of values for a data set.
        </p>
        <h3>How to Use a Day of the Week Calculator</h3>
        <p>
          To use a day of the week calculator, you simply enter the date you're interested in. The calculator will then perform the calculation and display the day of the week for that date.
        </p>
        <h3>Why Day of the Week Calculators Matter</h3>
        <p>
          Day of the week calculators are critical for analyzing and interpreting data in a wide range of fields, including history, science, and business. They provide a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
