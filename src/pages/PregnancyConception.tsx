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
        <h2 className="text-2xl font-bold text-slate-900">How Conception is Calculated</h2>
        <p>
          Conception typically occurs about 38 weeks (266 days) before your baby's estimated due date. While many think pregnancy is 9 months, it's actually closer to 10 lunar months or 40 weeks from the first day of your last period. Our <strong>conception date calculator 2026</strong> helps bridge the gap between your provided due date and the moment your journey began.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The "Conception Window" Explained</h3>
        <p>
          It's rarely a single day. Because sperm can survive for up to five days inside the female reproductive tract, and an egg is viable for up to 24 hours after ovulation, the "conception window" is typically a 6-day period including the day of ovulation and the five days leading up to it. Intercourse on any of these days can lead to pregnancy.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Can I rely on this for paternity testing?</p>
            <p>No. While this calculator provides a likely window based on standard averages, it is not evidence for legal or medical paternity. Professional DNA testing is the only definitive method.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Why does my doctor use my last period for the due date?</p>
            <p>Most women don't know exactly when they ovulated, but almost everyone knows the first day of their last period. Doctors use the LMP as a reliable starting point for the 40-week count, even though you aren't actually pregnant for the first two weeks of that cycle.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How accurate is a due date?</p>
            <p>Only about 4% of babies are born on their actual due date. Most are born within a window of two weeks before to two weeks after that date.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why the Window Matters</h3>
        <p>
          Understanding your conception window can help you date your pregnancy milestones more accurately and provide context for your early prenatal care. Our tool is a starting point for those curious about the timeline of their pregnancy.
        </p>
      </div>
    </div>
  );
};
