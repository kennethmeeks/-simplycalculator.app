import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const PregnancyConceptionCalculator: React.FC = () => {
  const [dueDate, setDueDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [conceptionDate, setConceptionDate] = useState<string>('');
  const [conceptionRangeStart, setConceptionRangeStart] = useState<string>('');
  const [conceptionRangeEnd, setConceptionRangeEnd] = useState<string>('');

  useEffect(() => {
    const dDate = new Date(dueDate);
    const cDate = new Date(dDate);
    cDate.setDate(dDate.getDate() - 266); // 266 days before due date
    setConceptionDate(cDate.toDateString());

    const cStart = new Date(cDate);
    cStart.setDate(cDate.getDate() - 7);
    setConceptionRangeStart(cStart.toDateString());

    const cEnd = new Date(cDate);
    cEnd.setDate(cDate.getDate() + 7);
    setConceptionRangeEnd(cEnd.toDateString());
  }, [dueDate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Pregnancy Conception Calculator | Find Your Conception Date 2026</title>
        <meta name="description" content="Calculate your estimated conception date based on your due date. Discover the likely window of conception for your pregnancy." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Pregnancy Conception Calculator</h1>
        <p className="text-slate-600">Find out when your baby was likely conceived based on your due date.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Enter Your Due Date</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Estimated Conception</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Most Likely Conception Date</p>
              <p className="text-2xl font-bold text-[#0066cc]">{conceptionDate}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Conception Window</p>
              <p className="text-xl font-semibold text-slate-900">{conceptionRangeStart} - {conceptionRangeEnd}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: These dates are estimates. Conception typically occurs around 38 weeks before the due date.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>How Conception is Calculated</h2>
        <p>
          Conception typically occurs about 38 weeks before your baby's due date. This is because a full-term pregnancy is considered to be 40 weeks from the first day of your last menstrual period (LMP), and ovulation (and thus conception) usually happens about two weeks after that.
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
