import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const BusinessLoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(7.5);
  const [loanTerm, setLoanTerm] = useState<number>(5);
  const [originationFee, setOriginationFee] = useState<number>(2);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [apr, setApr] = useState<number>(0);

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const p = loanAmount;
    const fee = (originationFee / 100) * p;

    if (r === 0) {
      setMonthlyPayment(p / n);
      setTotalInterest(0);
      setTotalCost(p + fee);
    } else {
      const payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setMonthlyPayment(payment);
      setTotalInterest(payment * n - p);
      setTotalCost(payment * n + fee);
      
      // Simple APR approximation: (Total Interest + Fee) / Principal / Years
      setApr(((payment * n - p + fee) / p / loanTerm) * 100);
    }
  }, [loanAmount, interestRate, loanTerm, originationFee]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Business Loan Calculator [Instant Results]</title>
        <meta name="description" content="Free online business loan calculator. Estimate monthly payments, total interest, and APR for your small business loan including origination fees." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Business Loan Calculator</h1>
        <p className="text-slate-600">
          Plan your business growth by estimating the monthly payments and total cost of a small business loan, including the impact of origination fees.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Loan Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Loan Amount ($)</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Annual Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Loan Term (Years)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Origination Fee (%)</label>
              <input
                type="number"
                step="0.1"
                value={originationFee}
                onChange={(e) => setOriginationFee(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Loan Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Monthly Payment</p>
              <p className="text-4xl font-bold text-[#0066cc]">${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Interest</p>
                <p className="text-xl font-semibold text-slate-900">${totalInterest.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Estimated APR</p>
                <p className="text-xl font-semibold text-slate-900">{apr.toFixed(2)}%</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Cost of Loan</p>
              <p className="text-2xl font-semibold text-slate-900">${totalCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <ResultActions 
                onReset={() => {
                  setLoanAmount(100000);
                  setInterestRate(7.5);
                  setLoanTerm(5);
                  setOriginationFee(2);
                }}
                onCopy={() => {
                  const text = `Business Loan Results:\nMonthly Payment: $${monthlyPayment.toFixed(2)}\nTotal Cost: $${totalCost.toLocaleString()}\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
              <p className="text-xs text-slate-500 italic mt-4">
                Note: This calculation assumes monthly compounding and a fixed interest rate.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Business Loan Calculator" 
        path="/business-loan-calculator" 
        description="Estimate monthly payments, total interest, and APR for your business financing. Plan your company's growth with accurate loan projections in 2026."
      />
    </div>
  );
};
