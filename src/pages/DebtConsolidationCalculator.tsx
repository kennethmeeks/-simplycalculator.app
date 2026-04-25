import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const DebtConsolidationCalculator: React.FC = () => {
  const [totalDebt, setTotalDebt] = useState<number>(25000);
  const [currentMonthlyPayment, setCurrentMonthlyPayment] = useState<number>(1200);
  const [currentAverageRate, setCurrentAverageRate] = useState<number>(18);
  
  const [newLoanRate, setNewLoanRate] = useState<number>(10);
  const [newLoanTerm, setNewLoanTerm] = useState<number>(36);

  const [newMonthlyPayment, setNewMonthlyPayment] = useState<number>(0);
  const [monthlySavings, setMonthlySavings] = useState<number>(0);
  const [totalCurrentInterest, setTotalCurrentInterest] = useState<number>(0);
  const [totalNewInterest, setTotalNewInterest] = useState<number>(0);
  const [totalSavings, setTotalSavings] = useState<number>(0);

  useEffect(() => {
    // Current Debt Calculation
    const rCurrent = currentAverageRate / 100 / 12;
    const pCurrent = currentMonthlyPayment;
    const b = totalDebt;
    
    let currentMonths = 0;
    let currentInterest = 0;
    
    if (pCurrent > b * rCurrent) {
      const n = -Math.log(1 - (b * rCurrent) / pCurrent) / Math.log(1 + rCurrent);
      currentMonths = Math.ceil(n);
      
      let tempBalance = b;
      for (let i = 0; i < currentMonths; i++) {
        const interest = tempBalance * rCurrent;
        currentInterest += interest;
        tempBalance = tempBalance + interest - pCurrent;
      }
    } else {
      currentInterest = Infinity;
    }

    // New Loan Calculation
    const rNew = newLoanRate / 100 / 12;
    const nNew = newLoanTerm;
    const pNew = rNew > 0 
      ? b * (rNew * Math.pow(1 + rNew, nNew)) / (Math.pow(1 + rNew, nNew) - 1)
      : b / nNew;
    
    const newInterest = (pNew * nNew) - b;

    setNewMonthlyPayment(pNew);
    setMonthlySavings(currentMonthlyPayment - pNew);
    setTotalCurrentInterest(currentInterest);
    setTotalNewInterest(newInterest);
    setTotalSavings(currentInterest !== Infinity ? currentInterest - newInterest : 0);
  }, [totalDebt, currentMonthlyPayment, currentAverageRate, newLoanRate, newLoanTerm]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Debt Consolidation Calculator | Save on Interest 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online debt consolidation calculator. Compare your current debt payments with a new consolidation loan to see how much you can save." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Debt Consolidation Calculator</h1>
        <p className="text-slate-600">
          Compare your current debt payments with a new consolidation loan to see how much you can save on monthly payments and total interest.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-red-600">Current Debt</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Total Debt Amount ($)</label>
                <input
                  type="number"
                  value={totalDebt}
                  onChange={(e) => setTotalDebt(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Monthly Payment ($)</label>
                <input
                  type="number"
                  value={currentMonthlyPayment}
                  onChange={(e) => setCurrentMonthlyPayment(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Average Interest Rate (%)</label>
                <input
                  type="number"
                  value={currentAverageRate}
                  onChange={(e) => setCurrentAverageRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-green-600">New Consolidation Loan</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">New Interest Rate (%)</label>
                <input
                  type="number"
                  value={newLoanRate}
                  onChange={(e) => setNewLoanRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Loan Term (Months)</label>
                <input
                  type="number"
                  value={newLoanTerm}
                  onChange={(e) => setNewLoanTerm(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-fit sticky top-8">
          <h2 className="text-xl font-semibold mb-6">Consolidation Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">New Monthly Payment</p>
              <p className="text-4xl font-bold text-[#0066cc]">${newMonthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              <p className={`text-sm mt-1 font-medium ${monthlySavings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {monthlySavings >= 0 ? 'Save' : 'Increase of'} ${Math.abs(monthlySavings).toLocaleString(undefined, { maximumFractionDigits: 0 })} per month
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total New Interest</p>
                <p className="text-xl font-semibold text-slate-900">${totalNewInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Interest Savings</p>
                <p className={`text-xl font-semibold ${totalSavings >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {totalCurrentInterest === Infinity ? 'N/A' : `$${totalSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}`}
                </p>
              </div>
            </div>

            {totalSavings > 0 && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                Consolidating could save you <strong>${totalSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong> in total interest costs!
              </div>
            )}
            <div className="pt-6 border-t border-slate-200 w-full">
              <ResultActions 
                onReset={() => {
                  setTotalDebt(25000);
                  setCurrentMonthlyPayment(1200);
                  setCurrentAverageRate(18);
                  setNewLoanRate(10);
                  setNewLoanTerm(36);
                }}
                onCopy={() => {
                  const text = `Debt Consolidation Results:\nNew Monthly Payment: $${newMonthlyPayment.toFixed(2)}\nMonthly Savings: $${monthlySavings.toFixed(2)}\nTotal Interest Savings: $${totalSavings.toFixed(2)}\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Debt Consolidation Calculator" 
        path="/debt-consolidation" 
        description="Compare your current debt with a consolidation loan. Calculate monthly savings and interest reduction for your 2026 financial planning."
      />
    </div>
  );
};
