import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


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
              <ResultActions 
                onReset={() => {
                  setAnnuityBalance(500000);
                  setPayoutYears(25);
                  setExpectedReturn(4);
                  setPayoutFrequency(12);
                }}
                onCopy={() => {
                  const text = `Annuity Payout Projection:\nPayout: $${monthlyPayout.toLocaleString(undefined, { maximumFractionDigits: 0 })} (${payoutFrequency === 12 ? 'Monthly' : payoutFrequency === 4 ? 'Quarterly' : 'Annual'})\nTotal Payouts: $${totalPayout.toLocaleString(undefined, { maximumFractionDigits: 0 })}\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
              <p className="text-xs text-slate-500 italic mt-4">
                Note: This calculation provides an estimate. Actual payouts may vary based on market conditions and annuity fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Annuity Payout Calculator" 
        path="/annuity-payout" 
        description="Estimate your monthly or annual annuity income. Plan for 2026 retirement by calculating payouts based on balance, period, and expected returns."
      />
    </div>
  );
};
