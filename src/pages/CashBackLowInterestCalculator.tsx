import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const CashBackLowInterestCalculator: React.FC = () => {
  const [purchasePrice, setPurchasePrice] = useState<number>(30000);
  const [loanTerm, setLoanTerm] = useState<number>(60);
  
  const [cashBackAmount, setCashBackAmount] = useState<number>(3000);
  const [cashBackRate, setCashBackRate] = useState<number>(6);
  
  const [lowInterestRate, setLowInterestRate] = useState<number>(0.9);

  const [cashBackMonthly, setCashBackMonthly] = useState<number>(0);
  const [cashBackTotal, setCashBackTotal] = useState<number>(0);
  
  const [lowInterestMonthly, setLowInterestMonthly] = useState<number>(0);
  const [lowInterestTotal, setLowInterestTotal] = useState<number>(0);

  useEffect(() => {
    const n = loanTerm;
    
    // Cash Back Option
    const r1 = cashBackRate / 100 / 12;
    const p1 = purchasePrice - cashBackAmount;
    const m1 = r1 > 0 ? p1 * (r1 * Math.pow(1 + r1, n)) / (Math.pow(1 + r1, n) - 1) : p1 / n;
    setCashBackMonthly(m1);
    setCashBackTotal(m1 * n);

    // Low Interest Option
    const r2 = lowInterestRate / 100 / 12;
    const p2 = purchasePrice;
    const m2 = r2 > 0 ? p2 * (r2 * Math.pow(1 + r2, n)) / (Math.pow(1 + r2, n) - 1) : p2 / n;
    setLowInterestMonthly(m2);
    setLowInterestTotal(m2 * n);
  }, [purchasePrice, loanTerm, cashBackAmount, cashBackRate, lowInterestRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Auto Financing Comparison [Free & No Sign-up]</title>
        <meta name="description" content="Free online cash back vs low interest calculator. Compare auto financing options to see whether a cash back rebate or a low interest rate is the better deal." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Cash Back vs Low Interest Calculator</h1>
        <p className="text-slate-600">
          Compare auto financing options to see whether a cash back rebate or a low interest rate is the better deal for your new vehicle purchase.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6 text-slate-900">Purchase Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Purchase Price ($)</label>
              <input
                type="number"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Loan Term (Months)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            
            <div className="pt-4 border-t border-slate-100">
              <h3 className="font-semibold mb-3 text-blue-600">Option 1: Cash Back</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Cash Back ($)</label>
                  <input
                    type="number"
                    value={cashBackAmount}
                    onChange={(e) => setCashBackAmount(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Interest Rate (%)</label>
                  <input
                    type="number"
                    value={cashBackRate}
                    onChange={(e) => setCashBackRate(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="font-semibold mb-3 text-green-600">Option 2: Low Interest</h3>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Low Interest Rate (%)</label>
                <input
                  type="number"
                  value={lowInterestRate}
                  onChange={(e) => setLowInterestRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-fit sticky top-8">
          <h2 className="text-xl font-semibold mb-6">Comparison Summary</h2>
          <div className="space-y-8">
            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">Option 1: Cash Back</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Monthly Payment</p>
                  <p className="text-xl font-bold text-slate-900">${cashBackMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Total Cost</p>
                  <p className="text-xl font-bold text-slate-900">${cashBackTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wider">Option 2: Low Interest</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Monthly Payment</p>
                  <p className="text-xl font-bold text-slate-900">${lowInterestMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Total Cost</p>
                  <p className="text-xl font-bold text-slate-900">${lowInterestTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <div className={`p-4 rounded-lg text-center ${cashBackTotal < lowInterestTotal ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                <p className="text-sm font-medium uppercase tracking-wider mb-1">The Better Deal</p>
                <p className="text-2xl font-bold">
                  {cashBackTotal < lowInterestTotal ? 'Option 1: Cash Back' : 'Option 2: Low Interest'}
                </p>
                <p className="text-sm mt-1">
                  Saves you <strong>${Math.abs(cashBackTotal - lowInterestTotal).toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong> in total cost.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <ResultActions 
                  onReset={() => {
                    setPurchasePrice(30000);
                    setLoanTerm(60);
                    setCashBackAmount(3000);
                    setCashBackRate(6);
                    setLowInterestRate(0.9);
                  }}
                  onCopy={() => {
                    const text = `Financing Comparison:\nCash Back Total: $${cashBackTotal.toFixed(0)}\nLow Interest Total: $${lowInterestTotal.toFixed(0)}\nWinner: ${cashBackTotal < lowInterestTotal ? 'Cash Back' : 'Low Interest'}\nCalculated at simplycalculator.app`;
                    navigator.clipboard.writeText(text);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Cash Back vs. Low Interest Calculator" 
        path="/cash-back-low-interest-calculator" 
        description="Compare car dealership rebates against low-interest financing offers. Find the best auto loan deal based on purchase price and term in 2026."
      />
    </div>
  );
};
