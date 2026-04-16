import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const AnnuityPayoutCalculator: React.FC = () => {
  const [annuityBalance, setAnnuityBalance] = useState<number>(500000);
  const [payoutYears, setPayoutYears] = useState<number>(25);
  const [expectedReturn, setExpectedReturn] = useState<number>(4);
  const [payoutFrequency, setPayoutFrequency] = useState<number>(12);

  const [monthlyPayout, setMonthlyPayout] = useState<number>(0);
  const [totalPayout, setTotalPayout] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  useEffect(() => {
    const r = expectedReturn / 100 / payoutFrequency;
    const n = payoutYears * payoutFrequency;
    
    // Annuity Payout Formula: P = PV * [r(1+r)^n] / [(1+r)^n - 1]
    const payout = r > 0 
      ? annuityBalance * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      : annuityBalance / n;
    
    setMonthlyPayout(payout);
    setTotalPayout(payout * n);
    setTotalInterest((payout * n) - annuityBalance);
  }, [annuityBalance, payoutYears, expectedReturn, payoutFrequency]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Annuity Payout Calculator | Estimate Retirement Income 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online annuity payout calculator. Estimate your monthly or annual annuity payments based on your current balance, payout period, and expected return." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Annuity Payout Calculator</h1>
        <p className="text-slate-600">
          Determine how much monthly income your annuity will provide by accounting for your current balance, payout period, and expected rate of return.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Payout Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Annuity Balance ($)</label>
              <input
                type="number"
                value={annuityBalance}
                onChange={(e) => setAnnuityBalance(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Payout Period (Years)</label>
              <input
                type="number"
                value={payoutYears}
                onChange={(e) => setPayoutYears(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Expected Return During Payout (%)</label>
              <input
                type="number"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Payout Frequency</label>
              <select
                value={payoutFrequency}
                onChange={(e) => setPayoutFrequency(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none bg-white"
              >
                <option value={1}>Annually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Payout Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated {payoutFrequency === 12 ? 'Monthly' : payoutFrequency === 4 ? 'Quarterly' : 'Annual'} Payout</p>
              <p className="text-4xl font-bold text-[#0066cc]">${monthlyPayout.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Payouts</p>
                <p className="text-xl font-semibold text-slate-900">${totalPayout.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Interest Earned</p>
                <p className="text-xl font-semibold text-slate-900">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation provides an estimate. Actual payouts may vary based on market conditions and annuity fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is an Annuity Payout?</h2>
        <p>
          An annuity payout is the stage of an annuity contract where the insurance company begins to make regular payments to the annuitant. This is often used as a source of guaranteed income for retirees. The amount of the payout depends on the balance in the annuity, the payout period, and the expected rate of return on the remaining funds.
        </p>
        
        <h3>How to Use the Annuity Payout Calculator</h3>
        <p>
          To estimate your future annuity payout, you need to provide:
        </p>
        <ul>
          <li><strong>Annuity Balance:</strong> The total amount of money currently in your annuity.</li>
          <li><strong>Payout Period:</strong> The number of years you want to receive payments.</li>
          <li><strong>Expected Return:</strong> The annual interest rate or rate of return you expect the annuity to earn during the payout phase.</li>
          <li><strong>Payout Frequency:</strong> How often you want to receive payments (e.g., monthly, quarterly, or annually).</li>
        </ul>

        <h3>The Annuity Payout Formula</h3>
        <p>
          The periodic payout of an annuity is calculated using the following formula:
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
          P = PV * [r(1+r)^n] / [(1+r)^n - 1]
        </div>
        <p>Where:</p>
        <ul>
          <li><strong>P</strong> = Periodic payout</li>
          <li><strong>PV</strong> = Present Value (annuity balance)</li>
          <li><strong>r</strong> = Rate of return per period</li>
          <li><strong>n</strong> = Number of periods</li>
        </ul>

        <h3>Why Annuity Payouts are Popular</h3>
        <p>
          Annuity payouts are a popular choice for many retirees because they offer:
        </p>
        <ul>
          <li><strong>Guaranteed Income:</strong> You can choose an annuity that provides a guaranteed stream of income for a specific period of time or for life.</li>
          <li><strong>Tax-Deferred Growth:</strong> You only pay taxes on the earnings in your annuity as you receive the payments.</li>
          <li><strong>Peace of Mind:</strong> Knowing that you have a steady source of income can provide peace of mind in retirement.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is the difference between "Period Certain" and "Life Only" payouts?</h4>
            <p>A "Period Certain" payout provides a guaranteed stream of income for a specific number of years (e.g., 10, 20, or 30 years). A "Life Only" payout provides a guaranteed stream of income for as long as you live, but the payments stop when you die.</p>
          </div>
          <div>
            <h4 className="font-bold">What is an "Inflation-Adjusted" payout?</h4>
            <p>An inflation-adjusted payout increases your periodic payments over time to account for inflation. This can help you maintain your purchasing power in retirement, but it usually results in a lower initial payout.</p>
          </div>
          <div>
            <h4 className="font-bold">What are the taxes on annuity payouts?</h4>
            <p>Annuity payouts are typically taxed as ordinary income. If you invested after-tax money into the annuity, a portion of each payout will be considered a return of your principal and will not be taxed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
