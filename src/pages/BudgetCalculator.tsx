import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


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
        <title>Monthly Budget Calculator | Plan Your Finances 2026 | simplycalculator.app</title>
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
                  * Financial experts recommend spending no more than 30% of your income on housing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>Why Budgeting is Essential</h2>
        <p>
          A budget is a plan for your money. It helps you ensure that you have enough for the things you need and the things that are important to you. Without a budget, it's easy to overspend and find yourself struggling to pay your bills or reach your financial goals.
        </p>
        
        <h3>How to Use the Budget Calculator</h3>
        <p>
          To create a realistic budget, you need to provide:
        </p>
        <ul>
          <li><strong>Monthly Income:</strong> Your total take-home pay after taxes and other deductions.</li>
          <li><strong>Housing:</strong> Your rent or mortgage payment, including property taxes and insurance.</li>
          <li><strong>Utilities:</strong> Your monthly costs for electricity, water, gas, internet, and phone.</li>
          <li><strong>Food:</strong> Your estimated spending on groceries and dining out.</li>
          <li><strong>Transportation:</strong> Your car payment, gas, maintenance, and public transit costs.</li>
          <li><strong>Insurance:</strong> Your monthly premiums for health, life, and auto insurance.</li>
          <li><strong>Entertainment:</strong> Your spending on movies, concerts, streaming services, and hobbies.</li>
          <li><strong>Other:</strong> Any other recurring expenses, such as gym memberships, clothing, or gifts.</li>
        </ul>

        <h3>Common Budgeting Rules</h3>
        <p>
          There are several popular budgeting methods you can use to manage your money:
        </p>
        <ul>
          <li><strong>The 50/30/20 Rule:</strong> Allocate 50% of your income to needs, 30% to wants, and 20% to savings and debt repayment.</li>
          <li><strong>Zero-Based Budgeting:</strong> Every dollar of your income is assigned a specific purpose, so your income minus your expenses equals zero at the end of the month.</li>
          <li><strong>The Envelope System:</strong> You allocate a specific amount of cash for each expense category and put it in an envelope. Once the envelope is empty, you stop spending in that category for the month.</li>
        </ul>

        <h3>Tips for Successful Budgeting</h3>
        <p>
          Budgeting is a habit that takes time to develop. Here are some tips to help you stay on track:
        </p>
        <ul>
          <li><strong>Be Realistic:</strong> Don't set a budget that is so restrictive that you can't stick to it.</li>
          <li><strong>Track Your Spending:</strong> Use an app or a spreadsheet to record every dollar you spend.</li>
          <li><strong>Review Your Budget Regularly:</strong> Your income and expenses will change over time, so it's important to update your budget accordingly.</li>
          <li><strong>Build an Emergency Fund:</strong> Aim to save three to six months of living expenses in case of unexpected events.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is a good savings rate?</h4>
            <p>While any amount of saving is good, many financial experts recommend aiming for a savings rate of at least 15% to 20% of your gross income for retirement and other long-term goals.</p>
          </div>
          <div>
            <h4 className="font-bold">How can I cut back on my expenses?</h4>
            <p>Look for areas where you can reduce your spending, such as dining out less, canceling unused subscriptions, or shopping for better rates on insurance and utilities.</p>
          </div>
          <div>
            <h4 className="font-bold">Should I prioritize saving or paying off debt?</h4>
            <p>It depends on the interest rate of your debt. Generally, it's a good idea to pay off high-interest debt (like credit cards) first while still building a small emergency fund.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
