import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const BudgetCalculator: React.FC = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(5000);
  
  // Expenses
  const [housing, setHousing] = useState<number>(1500);
  const [utilities, setUtilities] = useState<number>(300);
  const [food, setFood] = useState<number>(600);
  const [transportation, setTransportation] = useState<number>(400);
  const [insurance, setInsurance] = useState<number>(200);
  const [entertainment, setEntertainment] = useState<number>(200);
  const [other, setOther] = useState<number>(300);

  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [remainingBalance, setRemainingBalance] = useState<number>(0);
  const [savingsRate, setSavingsRate] = useState<number>(0);

  useEffect(() => {
    const total = housing + utilities + food + transportation + insurance + entertainment + other;
    setTotalExpenses(total);
    setRemainingBalance(monthlyIncome - total);
    setSavingsRate(((monthlyIncome - total) / monthlyIncome) * 100);
  }, [monthlyIncome, housing, utilities, food, transportation, insurance, entertainment, other]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Monthly Budget Calculator [Instant Results]</title>
        <meta name="description" content="Free online monthly budget calculator. Track your income and expenses, calculate your savings rate, and see where your money is going." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Monthly Budget Calculator</h1>
        <p className="text-slate-600">
          Take control of your finances by tracking your monthly income and expenses. See exactly how much you're saving and where you can cut back.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Income & Expenses</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Income (After Tax) ($)</label>
              <input
                type="number"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none font-bold text-lg"
              />
            </div>
            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider">Monthly Expenses</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <label className="w-32 text-xs text-slate-500">Housing</label>
                  <input
                    type="number"
                    value={housing}
                    onChange={(e) => setHousing(Number(e.target.value))}
                    className="flex-1 px-4 py-1 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="w-32 text-xs text-slate-500">Utilities</label>
                  <input
                    type="number"
                    value={utilities}
                    onChange={(e) => setUtilities(Number(e.target.value))}
                    className="flex-1 px-4 py-1 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="w-32 text-xs text-slate-500">Food / Groceries</label>
                  <input
                    type="number"
                    value={food}
                    onChange={(e) => setFood(Number(e.target.value))}
                    className="flex-1 px-4 py-1 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="w-32 text-xs text-slate-500">Transportation</label>
                  <input
                    type="number"
                    value={transportation}
                    onChange={(e) => setTransportation(Number(e.target.value))}
                    className="flex-1 px-4 py-1 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="w-32 text-xs text-slate-500">Insurance</label>
                  <input
                    type="number"
                    value={insurance}
                    onChange={(e) => setInsurance(Number(e.target.value))}
                    className="flex-1 px-4 py-1 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="w-32 text-xs text-slate-500">Entertainment</label>
                  <input
                    type="number"
                    value={entertainment}
                    onChange={(e) => setEntertainment(Number(e.target.value))}
                    className="flex-1 px-4 py-1 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <label className="w-32 text-xs text-slate-500">Other</label>
                  <input
                    type="number"
                    value={other}
                    onChange={(e) => setOther(Number(e.target.value))}
                    className="flex-1 px-4 py-1 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Budget Summary</h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-slate-500 mb-1">Remaining Balance (Savings)</p>
              <p className={`text-6xl font-bold ${remainingBalance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${remainingBalance.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Expenses</p>
                <p className="text-2xl font-semibold text-slate-900">${totalExpenses.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Savings Rate</p>
                <p className="text-2xl font-semibold text-slate-900">{savingsRate.toFixed(1)}%</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Budget Analysis:</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Housing Cost:</span>
                  <span className={`font-medium ${housing / monthlyIncome > 0.3 ? 'text-orange-600' : 'text-slate-900'}`}>
                    {((housing / monthlyIncome) * 100).toFixed(1)}%
                  </span>
                </div>
                <p className="text-xs text-slate-500 italic">
                  * Professionals recommend spending no more than 30% of your income on housing.
                </p>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-200">
              <ResultActions 
                onReset={() => {
                  setMonthlyIncome(5000);
                  setHousing(1500);
                  setUtilities(300);
                  setFood(600);
                  setTransportation(400);
                  setInsurance(200);
                  setEntertainment(200);
                  setOther(300);
                }}
                onCopy={() => {
                  const text = `Monthly Budget Summary:\nIncome: $${monthlyIncome}\nExpenses: $${totalExpenses}\nSavings: $${remainingBalance}\nSavings Rate: ${savingsRate.toFixed(1)}%\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Monthly Budget Calculator" 
        path="/budget" 
        description="Take control of your finances with our free monthly budget tool. Track income and expenses, and calculate your savings rate for 2026."
      />
    </div>
  );
};
