import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const BoatLoanCalculator: React.FC = () => {
  const [boatPrice, setBoatPrice] = useState<number>(50000);
  const [downPayment, setDownPayment] = useState<number>(5000);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(10);

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const principal = boatPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    // Monthly Payment Formula: P * (r * (1 + r)^n) / ((1 + r)^n - 1)
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPay = payment * numberOfPayments;
    const totalInt = totalPay - principal;
    
    setMonthlyPayment(payment);
    setTotalInterest(totalInt);
    setTotalCost(totalPay + downPayment);
  }, [boatPrice, downPayment, interestRate, loanTerm]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Boat Loan Calculator | Estimate Monthly Payments 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online boat loan calculator. Estimate your monthly payments, total interest, and total cost for financing a new or used boat." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Boat Loan Calculator</h1>
        <p className="text-slate-600">
          Planning to buy a boat? Use our boat loan calculator to estimate your monthly payments and see how different loan terms and interest rates affect your budget.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Boat Loan Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Boat Price ($)</label>
              <input
                type="number"
                value={boatPrice}
                onChange={(e) => setBoatPrice(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Down Payment ($)</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Loan Term (Years)</label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none bg-white"
              >
                <option value={5}>5 Years</option>
                <option value={10}>10 Years</option>
                <option value={15}>15 Years</option>
                <option value={20}>20 Years</option>
              </select>
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
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Interest Paid</p>
              <p className="text-2xl font-semibold text-slate-900">${totalInterest.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Cost of Boat</p>
              <p className="text-2xl font-semibold text-slate-900">${totalCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation provides an estimate. Taxes, registration, and insurance are not included.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Boat Loan Calculator" 
        path="/boat-loan-calculator" 
        description="Estimate monthly payments and total interest for your new or used boat. Plan your nautical adventures with accurate financial projections for 2026."
      />
    </div>
  );
};
