import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const DayCounter: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('2026-01-01');
  const [endDate, setEndDate] = useState<string>('2026-12-31');
  const [days, setDays] = useState<number>(0);

  useEffect(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = Math.abs(end.getTime() - start.getTime());
    setDays(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, [startDate, endDate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Day Counter | Calculate Days Between Dates 2026</title>
        <meta name="description" content="Calculate the number of days between two dates. Find the duration of your projects and events easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Day Counter</h1>
        <p className="text-slate-600">Calculate the number of days between two dates.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Date Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Days</p>
              <p className="text-4xl font-bold text-[#0066cc]">{days} days</p>
              <p className="text-lg font-semibold text-slate-900">{(days / 7).toFixed(1)} weeks</p>
              <p className="text-lg font-semibold text-slate-900">{(days / 30.44).toFixed(1)} months</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation uses the absolute difference between the two dates.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a Day Counter?</h2>
        <p>
          A day counter is a tool for calculating the number of days between two dates. It's a useful tool for quantifying the uncertainty of an estimate and identifying the range of values for a data set.
        </p>
        <h3>How to Use a Day Counter</h3>
        <p>
          To use a day counter, you simply enter the start and end dates for your project or event. The calculator will then perform the calculation and display the total number of days.
        </p>
        <h3>Why Day Counters Matter</h3>
        <p>
          Day counters are critical for analyzing and interpreting data in a wide range of fields, including project management, science, and business. They provide a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
