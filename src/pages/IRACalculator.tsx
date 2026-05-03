import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const IRACalculator: React.FC = () => {
  const [currentAge, setCurrentAge] = useState<number>(30);
  const [retirementAge, setRetirementAge] = useState<number>(65);
  const [currentBalance, setCurrentBalance] = useState<number>(10000);
  const [annualContribution, setAnnualContribution] = useState<number>(7000);
  const [expectedReturn, setExpectedReturn] = useState<number>(7);
  const [taxRateAtRetirement, setTaxRateAtRetirement] = useState<number>(22);

  const [futureValue, setFutureValue] = useState<number>(0);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [afterTaxValue, setAfterTaxValue] = useState<number>(0);

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
    setAfterTaxValue(totalFv * (1 - taxRateAtRetirement / 100));
  }, [currentAge, retirementAge, currentBalance, annualContribution, expectedReturn, taxRateAtRetirement]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Traditional IRA Calculator [100% Private]</title>
        <meta name="description" content="Free online traditional IRA calculator. Estimate your future traditional IRA balance and see the impact of taxes on your retirement savings." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Traditional IRA Calculator</h1>
        <p className="text-slate-600">
          Determine how much your traditional IRA will grow over time by accounting for your current balance, annual contributions, and expected rate of return.
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
              <p className="text-sm text-slate-500 mb-1">Estimated Future Balance (Pre-Tax)</p>
              <p className="text-4xl font-bold text-[#0066cc]">${futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Contributions</p>
                <p className="text-xl font-semibold text-slate-900">${totalContributions.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Estimated After-Tax Value</p>
                <p className="text-xl font-semibold text-slate-900">${afterTaxValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
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
        <h2>What is a Traditional IRA?</h2>
        <p>
          A traditional IRA is a type of individual retirement account (IRA) that offers tax-deferred growth and potential tax deductions for your contributions. Unlike a Roth IRA, contributions to a traditional IRA are made with pre-tax dollars, meaning you may be able to deduct your contributions from your taxable income.
        </p>
        
        <h3>How to Use the Traditional IRA Calculator</h3>
        <p>
          To estimate the future value of your traditional IRA, you need to provide:
        </p>
        <ul>
          <li><strong>Current Age:</strong> Your current age.</li>
          <li><strong>Retirement Age:</strong> The age at which you plan to retire and begin withdrawing from your IRA.</li>
          <li><strong>Current Balance:</strong> The amount of money you already have in your traditional IRA.</li>
          <li><strong>Annual Contribution:</strong> The amount of money you plan to add to your IRA each year.</li>
          <li><strong>Expected Return:</strong> The annual interest rate or rate of return you expect your IRA to earn.</li>
          <li><strong>Retirement Tax Rate:</strong> The annual income tax rate you expect to pay in retirement.</li>
        </ul>

        <h3>Benefits of a Traditional IRA</h3>
        <p>
          A traditional IRA can offer several advantages:
        </p>
        <ul>
          <li><strong>Tax-Deferred Growth:</strong> Your investment earnings grow tax-deferred within the account.</li>
          <li><strong>Potential Tax Deduction:</strong> You may be able to deduct your contributions from your taxable income, which can lower your current tax bill.</li>
          <li><strong>Flexibility:</strong> You can choose from a wide range of investment options, including stocks, bonds, and mutual funds.</li>
        </ul>

        <h3>Traditional IRA Contribution Limits</h3>
        <p>
          The IRS sets annual limits on how much you can contribute to a traditional IRA. For 2024 and 2025, the limit is $7,000 ($8,000 if you're age 50 or older). These limits are subject to income phase-outs, meaning you may not be able to deduct your contributions if your income is too high and you have access to a retirement plan at work.
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
            <h4 className="font-bold">What are the requirements for tax-deferred growth in a traditional IRA?</h4>
            <p>To enjoy tax-deferred growth, you must keep your money in the account until you reach age 59½. If you withdraw money before then, you may have to pay a 10% penalty.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
