import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const CreditCardPayoffCalculator: React.FC = () => {
  const [balance, setBalance] = useState<number>(5000);
  const [interestRate, setInterestRate] = useState<number>(18);
  const [monthsToPayOff, setMonthsToPayOff] = useState<number>(24);

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = monthsToPayOff;
    const b = balance;
    
    // Monthly Payment Formula: P = PV * [r(1+r)^n] / [(1+r)^n - 1]
    const payment = r > 0 
      ? b * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      : b / n;
    
    setMonthlyPayment(payment);
    setTotalPayment(payment * n);
    setTotalInterest((payment * n) - b);
  }, [balance, interestRate, monthsToPayOff]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Credit Card Payoff Goal Calculator | Calculate Monthly Payment 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online credit card payoff calculator. Calculate the monthly payment needed to pay off your credit card balance within a specific timeframe." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Credit Card Payoff Calculator</h1>
        <p className="text-slate-600">
          Determine the monthly payment required to pay off your credit card balance within a specific number of months.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Payoff Goal</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Current Balance ($)</label>
              <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Interest Rate (APR) (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Months to Pay Off</label>
              <input
                type="number"
                value={monthsToPayOff}
                onChange={(e) => setMonthsToPayOff(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl font-semibold mb-4">Required Monthly Payment</h2>
          <div className="space-y-4">
            <p className="text-6xl font-bold text-[#0066cc]">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 w-full">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Interest</p>
                <p className="text-xl font-semibold text-slate-900">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Payment</p>
                <p className="text-xl font-semibold text-slate-900">${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Credit Card Payoff Calculator" 
        path="/credit-card-payoff" 
        description="Calculate the monthly payment needed to pay off your credit card balance by a specific goal date. Plan your 2026 debt-free journey."
      />
    </div>
  );
};
