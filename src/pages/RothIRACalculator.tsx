import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const RothIRACalculator: React.FC = () => {
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [currentBalance, setCurrentBalance] = useState<number>(10000);
  const [annualContribution, setAnnualContribution] = useState<number>(7000);
  const [expectedReturn, setExpectedReturn] = useState<number>(7);
  const [taxRateAtRetirement, setTaxRateAtRetirement] = useState<number>(22);

  const [futureValue, setFutureValue] = useState<number>(0);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [taxSavings, setTaxSavings] = useState<number>(0);

  useEffect(() => {
    const r = expectedReturn / 100;
    const n = retirementAge - currentAge;
    
    // Future Value of a Series Formula: FV = P * [((1 + r)^n - 1) / r] + PV * (1 + r)^n
    const fvPrincipal = currentBalance * Math.pow(1 + r, n);
    const fvSeries = r > 0 ? annualContribution * (Math.pow(1 + r, n) - 1) / r : annualContribution * n;
    
    const totalFv = fvPrincipal + fvSeries;
    const totalCont = currentBalance + (annualContribution * n);
    
    setFutureValue(totalFv);
    setTotalContributions(totalCont);
    setTaxSavings((totalFv - totalCont) * (taxRateAtRetirement / 100));
  }, [currentAge, retirementAge, currentBalance, annualContribution, expectedReturn, taxRateAtRetirement]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Roth IRA Calculator | Estimate Retirement Wealth 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online Roth IRA calculator. Estimate your future Roth IRA balance and see the tax-free growth of your retirement savings." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Roth IRA Calculator</h1>
        <p className="text-slate-600">
          Determine how much your Roth IRA will grow over time by accounting for your current balance, annual contributions, and expected rate of return.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">IRA Details</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Age</label>
                <input
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Retirement Age</label>
                <input
                  type="number"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Current Balance ($)</label>
              <input
                type="number"
                value={currentBalance}
                onChange={(e) => setCurrentBalance(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Annual Contribution ($)</label>
              <input
                type="number"
                value={annualContribution}
                onChange={(e) => setAnnualContribution(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Expected Return (%)</label>
                <input
                  type="number"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Retirement Tax Rate (%)</label>
                <input
                  type="number"
                  value={taxRateAtRetirement}
                  onChange={(e) => setTaxRateAtRetirement(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Retirement Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Future Balance</p>
              <p className="text-4xl font-bold text-[#0066cc]">${futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Contributions</p>
                <p className="text-xl font-semibold text-[#0066cc]">${totalContributions.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Estimated Tax Savings</p>
                <p className="text-xl font-semibold text-[#0066cc]">${taxSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation provides an estimate. Actual returns may vary based on market conditions and IRA contribution limits.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a Roth IRA?</h2>
        <p>
          A Roth IRA is a type of individual retirement account (IRA) that offers tax-free growth and tax-free withdrawals in retirement. Unlike a traditional IRA, contributions to a Roth IRA are made with after-tax dollars, meaning you don't get a tax deduction for your contributions.
        </p>
        
        <h3>How to Use the Roth IRA Calculator</h3>
        <p>
          To estimate the future value of your Roth IRA, you need to provide:
        </p>
        <ul>
          <li><strong>Current Age:</strong> Your current age.</li>
          <li><strong>Retirement Age:</strong> The age at which you plan to retire and begin withdrawing from your IRA.</li>
          <li><strong>Current Balance:</strong> The amount of money you already have in your Roth IRA.</li>
          <li><strong>Annual Contribution:</strong> The amount of money you plan to add to your IRA each year.</li>
          <li><strong>Expected Return:</strong> The annual interest rate or rate of return you expect your IRA to earn.</li>
          <li><strong>Retirement Tax Rate:</strong> The annual income tax rate you expect to pay in retirement.</li>
        </ul>

        <h3>Benefits of a Roth IRA</h3>
        <p>
          A Roth IRA can offer several advantages:
        </p>
        <ul>
          <li><strong>Tax-Free Growth:</strong> Your investment earnings grow tax-free within the account.</li>
          <li><strong>Tax-Free Withdrawals:</strong> You can withdraw your contributions and earnings tax-free in retirement, provided you meet certain requirements.</li>
          <li><strong>No Required Minimum Distributions (RMDs):</strong> Unlike traditional IRAs, Roth IRAs do not require you to take distributions during your lifetime.</li>
          <li><strong>Flexibility:</strong> You can withdraw your contributions (but not your earnings) at any time without penalty.</li>
        </ul>

        <h3>Roth IRA Contribution Limits</h3>
        <p>
          The IRS sets annual limits on how much you can contribute to a Roth IRA. For 2024 and 2025, the limit is $7,000 ($8,000 if you're age 50 or older). These limits are subject to income phase-outs, meaning you may not be able to contribute if your income is too high.
        </p>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is the difference between a "Roth" and "Traditional" IRA?</h4>
            <p>A Roth IRA offers tax-free growth and tax-free withdrawals in retirement, while a traditional IRA offers a tax deduction for your contributions but your withdrawals are taxed as ordinary income in retirement.</p>
          </div>
          <div>
            <h4 className="font-bold">Can I convert a traditional IRA to a Roth IRA?</h4>
            <p>Yes, you can convert a traditional IRA to a Roth IRA, but you will have to pay income taxes on the amount you convert.</p>
          </div>
          <div>
            <h4 className="font-bold">What are the requirements for tax-free withdrawals from a Roth IRA?</h4>
            <p>To withdraw your earnings tax-free, you must be at least 59½ years old and have had the account for at least five years.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
