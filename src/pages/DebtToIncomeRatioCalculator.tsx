import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const DebtToIncomeRatioCalculator: React.FC = () => {
  const [grossMonthlyIncome, setGrossMonthlyIncome] = useState<number>(5000);
  const [monthlyMortgage, setMonthlyMortgage] = useState<number>(1500);
  const [monthlyAutoLoan, setMonthlyAutoLoan] = useState<number>(400);
  const [monthlyStudentLoan, setMonthlyStudentLoan] = useState<number>(200);
  const [monthlyCreditCard, setMonthlyCreditCard] = useState<number>(100);
  const [monthlyOtherDebt, setMonthlyOtherDebt] = useState<number>(0);

  const [totalMonthlyDebt, setTotalMonthlyDebt] = useState<number>(0);
  const [dtiRatio, setDtiRatio] = useState<number>(0);

  useEffect(() => {
    const totalDebt = monthlyMortgage + monthlyAutoLoan + monthlyStudentLoan + monthlyCreditCard + monthlyOtherDebt;
    setTotalMonthlyDebt(totalDebt);
    setDtiRatio((totalDebt / grossMonthlyIncome) * 100);
  }, [grossMonthlyIncome, monthlyMortgage, monthlyAutoLoan, monthlyStudentLoan, monthlyCreditCard, monthlyOtherDebt]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Debt-to-Income (DTI) Ratio Calculator | Mortgage Planning 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online debt-to-income (DTI) ratio calculator. Calculate your DTI ratio to see how much of your gross monthly income goes toward debt payments." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Debt-to-Income (DTI) Ratio Calculator</h1>
        <p className="text-slate-600">
          Your Debt-to-Income (DTI) ratio is a key metric used by lenders to determine your ability to manage monthly payments and repay debts.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Income & Debt Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Gross Monthly Income ($)</label>
              <input
                type="number"
                value={grossMonthlyIncome}
                onChange={(e) => setGrossMonthlyIncome(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Monthly Debt Payments</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Mortgage / Rent ($)</label>
                  <input
                    type="number"
                    value={monthlyMortgage}
                    onChange={(e) => setMonthlyMortgage(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Auto Loan ($)</label>
                  <input
                    type="number"
                    value={monthlyAutoLoan}
                    onChange={(e) => setMonthlyAutoLoan(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Student Loan ($)</label>
                  <input
                    type="number"
                    value={monthlyStudentLoan}
                    onChange={(e) => setMonthlyStudentLoan(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Credit Card (Minimum Payment) ($)</label>
                  <input
                    type="number"
                    value={monthlyCreditCard}
                    onChange={(e) => setMonthlyCreditCard(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Other Debt ($)</label>
                  <input
                    type="number"
                    value={monthlyOtherDebt}
                    onChange={(e) => setMonthlyOtherDebt(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">DTI Results</h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-slate-500 mb-1">Your Debt-to-Income Ratio</p>
              <p className={`text-6xl font-bold ${dtiRatio <= 36 ? 'text-green-600' : dtiRatio <= 43 ? 'text-orange-500' : 'text-red-600'}`}>
                {dtiRatio.toFixed(1)}%
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Monthly Debt</p>
              <p className="text-2xl font-semibold text-slate-900">${totalMonthlyDebt.toLocaleString()}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">What This Means:</h3>
              <p className="text-sm text-slate-600">
                {dtiRatio <= 36 
                  ? "Excellent! Lenders generally consider a DTI of 36% or less to be healthy and manageable." 
                  : dtiRatio <= 43 
                  ? "Good. A DTI of 43% is typically the maximum ratio for many mortgage lenders." 
                  : "High. A DTI above 43% may make it difficult to qualify for new loans or a mortgage."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is the Debt-to-Income (DTI) Ratio?</h2>
        <p>
          The Debt-to-Income (DTI) ratio is a percentage that shows how much of your gross monthly income goes toward paying your monthly debt obligations. Lenders use this ratio to assess your creditworthiness and determine if you can afford to take on additional debt.
        </p>
        
        <h3>How to Calculate Your DTI Ratio</h3>
        <p>
          To calculate your DTI ratio, you divide your total monthly debt payments by your gross monthly income (your income before taxes and other deductions).
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
          DTI = (Total Monthly Debt Payments) / (Gross Monthly Income) * 100
        </div>

        <h3>Why Your DTI Ratio Matters</h3>
        <p>
          Your DTI ratio is one of the most important factors lenders consider when you apply for a mortgage, auto loan, or personal loan. A lower DTI ratio indicates that you have a good balance between debt and income, making you a less risky borrower.
        </p>

        <h3>DTI Benchmarks for Mortgages</h3>
        <p>
          While different lenders have different requirements, here are some general guidelines:
        </p>
        <ul>
          <li><strong>36% or Less:</strong> This is considered an ideal DTI ratio. It shows that you have a manageable amount of debt and plenty of income to cover your living expenses.</li>
          <li><strong>37% to 43%:</strong> This is still considered acceptable by many lenders, especially for conventional mortgages. However, you may be required to have a higher credit score or a larger down payment.</li>
          <li><strong>44% to 50%:</strong> This is considered high. You may struggle to qualify for a mortgage unless you have significant assets or a very high credit score.</li>
          <li><strong>Above 50%:</strong> This is very high. Most lenders will be hesitant to offer you a loan, as more than half of your income is already committed to debt payments.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">Does DTI include living expenses like groceries and utilities?</h4>
            <p>No, the DTI ratio typically only includes fixed debt payments that appear on your credit report, such as mortgages, car loans, student loans, and credit card minimum payments. It does not include variable expenses like utilities, groceries, or insurance.</p>
          </div>
          <div>
            <h4 className="font-bold">How can I lower my DTI ratio?</h4>
            <p>There are two ways to lower your DTI ratio: either increase your gross monthly income or decrease your monthly debt payments. Paying off a small loan or increasing your income through a raise or side hustle can significantly improve your ratio.</p>
          </div>
          <div>
            <h4 className="font-bold">What is the difference between "Front-End" and "Back-End" DTI?</h4>
            <p>The **Front-End Ratio** only includes your housing-related expenses (mortgage, taxes, insurance). The **Back-End Ratio** includes all of your monthly debt payments. Lenders typically focus more on the back-end ratio.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
