import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const ConceptionCalculator: React.FC = () => {
  const [lastPeriod, setLastPeriod] = useState<string>(new Date().toISOString().split('T')[0]);
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [conceptionDate, setConceptionDate] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');

  useEffect(() => {
    const lDate = new Date(lastPeriod);
    const cDate = new Date(lDate);
    cDate.setDate(lDate.getDate() + (cycleLength - 14)); // Ovulation approx 14 days before next period
    setConceptionDate(cDate.toDateString());

    const dDate = new Date(cDate);
    dDate.setDate(cDate.getDate() + 266); // 266 days from conception
    setDueDate(dDate.toDateString());
  }, [lastPeriod, cycleLength]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Conception Calculator | Predict Your Conception Date 2026</title>
        <meta name="description" content="Calculate your estimated conception date based on your last menstrual period and cycle length. Discover the likely window of conception for your pregnancy." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Conception Calculator</h1>
        <p className="text-slate-600">Find out when you likely conceived based on your last menstrual period.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Your Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">First Day of Last Period</label>
              <input
                type="date"
                value={lastPeriod}
                onChange={(e) => setLastPeriod(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Average Cycle Length (Days)</label>
              <input
                type="number"
                value={cycleLength}
                onChange={(e) => setCycleLength(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Estimated Dates</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Likely Conception Date</p>
              <p className="text-2xl font-bold text-[#0066cc]">{conceptionDate}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Due Date</p>
              <p className="text-xl font-semibold text-slate-900">{dueDate}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: These dates are estimates. Ovulation typically occurs about 14 days before your next period starts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>How Conception is Calculated</h2>
        <p>
          Conception typically occurs during ovulation, which is the point in your menstrual cycle when an egg is released from the ovary. For most women with a 28-day cycle, ovulation happens around day 14.
        </p>
        <h3>Why the Window Matters</h3>
        <p>
          Sperm can live inside the female reproductive tract for up to five days, and an egg is viable for about 12 to 24 hours after ovulation. This means that intercourse occurring several days before ovulation can still lead to conception.
        </p>
        <h3>Accuracy of the Calculation</h3>
        <p>
          The most accurate way to determine your conception date is through an early ultrasound (usually before 12 weeks), which measures the size of the embryo or fetus. Due dates calculated from the LMP or conception date are always estimates, as every pregnancy is unique.
        </p>
      </div>
    </div>
  );
};
