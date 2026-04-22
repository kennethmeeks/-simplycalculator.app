import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const PeriodCalculator: React.FC = () => {
  const [lastPeriod, setLastPeriod] = useState<string>(new Date().toISOString().split('T')[0]);
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [nextPeriod, setNextPeriod] = useState<string>('');
  const [ovulationDate, setOvulationDate] = useState<string>('');

  useEffect(() => {
    const lDate = new Date(lastPeriod);
    const nDate = new Date(lDate);
    nDate.setDate(lDate.getDate() + cycleLength);
    setNextPeriod(nDate.toDateString());

    const oDate = new Date(nDate);
    oDate.setDate(nDate.getDate() - 14);
    setOvulationDate(oDate.toDateString());
  }, [lastPeriod, cycleLength]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Period Calculator | Predict Your Next Period 2026</title>
        <meta name="description" content="Calculate your next period and ovulation date based on your last menstrual period and cycle length. Track your cycle for better health and wellness." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Period Calculator</h1>
        <p className="text-slate-600">Predict your next period and ovulation date based on your cycle history.</p>
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
          <h2 className="text-xl font-semibold mb-6">Predictions</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Next Period Starts Around</p>
              <p className="text-2xl font-bold text-[#0066cc]">{nextPeriod}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Ovulation Date</p>
              <p className="text-xl font-semibold text-slate-900">{ovulationDate}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: These dates are estimates. Menstrual cycles can vary due to stress, diet, and other factors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Your Menstrual Cycle</h2>
        <p>
          Your menstrual cycle is the time from the first day of one period to the first day of the next. While the average cycle length is 28 days, it's normal for it to range from 21 to 35 days. Our <strong>period calculator 2026</strong> helps you stay ahead of your body's natural rhythms.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Track Your Cycle?</h3>
        <p>
          Tracking your cycle can help you understand your body's patterns, predict your next period, and identify your most fertile days if you're trying to conceive. It can also help you identify any irregularities that you may want to discuss with your healthcare provider.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is considered a "normal" cycle length?</p>
            <p>While 28 days is the textbook average, a cycle length of 21 to 35 days is considered normal for most adults. For teenagers, cycles can be even longer or more irregular as their bodies adjust.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">When does ovulation typically occur?</p>
            <p>In a standard 28-day cycle, ovulation usually occurs around day 14. More precisely, it happens about 14 days <em>before</em> your next period starts. If your cycle is 30 days, you likely ovulate on day 16.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can stress delay my period?</p>
            <p>Yes. Stress can impact the hypothalamus, the part of your brain that regulates your hormones. High levels of stress can delay or even temporarily stop your period (amenorrhea).</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Factors to Watch For</h3>
        <p>
          While tracking, pay attention to changes in flow, duration, and pain levels. Significant shifts can sometimes indicate underlying conditions like PCOS or thyroid issues. Always use trackers as a tool for personal awareness rather than medical diagnosis.
        </p>
      </div>
    </div>
  );
};
