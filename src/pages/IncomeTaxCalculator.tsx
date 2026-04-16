import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const IncomeTaxCalculator: React.FC = () => {
  const [income, setIncome] = useState<number>(60000);
  const [filingStatus, setFilingStatus] = useState<'single' | 'married'>('single');
  const [deductions, setDeductions] = useState<number>(14600); // 2024 Standard Deduction for Single

  const calculateTax = () => {
    const taxableIncome = Math.max(0, income - deductions);
    let tax = 0;

    // 2024 Federal Income Tax Brackets (Simplified)
    const brackets = filingStatus === 'single' 
      ? [
          { limit: 11600, rate: 0.10 },
          { limit: 47150, rate: 0.12 },
          { limit: 100525, rate: 0.22 },
          { limit: 191950, rate: 0.24 },
          { limit: 243725, rate: 0.32 },
          { limit: 609350, rate: 0.35 },
          { limit: Infinity, rate: 0.37 }
        ]
      : [
          { limit: 23200, rate: 0.10 },
          { limit: 94300, rate: 0.12 },
          { limit: 201050, rate: 0.22 },
          { limit: 383900, rate: 0.24 },
          { limit: 487450, rate: 0.32 },
          { limit: 731200, rate: 0.35 },
          { limit: Infinity, rate: 0.37 }
        ];

    let previousLimit = 0;
    for (const bracket of brackets) {
      if (taxableIncome > bracket.limit) {
        tax += (bracket.limit - previousLimit) * bracket.rate;
        previousLimit = bracket.limit;
      } else {
        tax += (taxableIncome - previousLimit) * bracket.rate;
        break;
      }
    }

    return tax;
  };

  const tax = calculateTax();
  const effectiveRate = income > 0 ? (tax / income) * 100 : 0;
  const takeHome = income - tax;

  return (
    <>
      <Helmet>
        <title>Income Tax Calculator 2024-2025 | Federal Tax Estimator</title>
        <meta name="description" content="Estimate your federal income tax for 2024 and 2025. Calculate taxable income, tax brackets, effective tax rate, and take-home pay with our free tool." />
        <meta name="keywords" content="income tax calculator, federal tax estimator, tax bracket calculator, 2024 tax calculator, 2025 tax calculator, take home pay, effective tax rate" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Income Tax Calculator</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Your Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Annual Gross Income ($)
                </label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Filing Status
                </label>
                <select
                  value={filingStatus}
                  onChange={(e) => {
                    const status = e.target.value as 'single' | 'married';
                    setFilingStatus(status);
                    setDeductions(status === 'single' ? 14600 : 29200);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="single">Single</option>
                  <option value="married">Married Filing Jointly</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deductions (Standard or Itemized) ($)
                </label>
                <input
                  type="number"
                  value={deductions}
                  onChange={(e) => setDeductions(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  2024 Standard: $14,600 (Single), $29,200 (Married)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">Tax Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                <span className="text-blue-800">Estimated Federal Tax:</span>
                <span className="text-2xl font-bold text-blue-900">${tax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                <span className="text-blue-800">Effective Tax Rate:</span>
                <span className="text-xl font-semibold text-blue-900">{effectiveRate.toFixed(2)}%</span>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-blue-800 font-semibold">Estimated Take-Home:</span>
                <span className="text-2xl font-bold text-green-700">${takeHome.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
            </div>
          </div>
        </div>

        

        <section className="prose max-w-none mt-12">
          <h2>Understanding Your Income Tax</h2>
          <p>
            Calculating your income tax can be a complex process, but understanding the basics helps you plan your finances better. This income tax calculator provides an estimate of your federal tax liability based on the 2024 and 2025 tax brackets.
          </p>

          <h3>How Federal Income Tax Works</h3>
          <p>
            The United States uses a progressive tax system. This means that as your income increases, the rate at which you are taxed on additional dollars also increases. It's a common misconception that moving into a higher tax bracket means all your income is taxed at that higher rate. In reality, only the portion of your income that falls within that specific bracket is taxed at that rate.
          </p>

          <h3>Standard vs. Itemized Deductions</h3>
          <p>
            Deductions reduce your taxable income. Most taxpayers choose the <strong>standard deduction</strong>, which is a fixed dollar amount based on your filing status. For the 2024 tax year, the standard deduction is $14,600 for single filers and $29,200 for those married filing jointly. If your eligible expenses (like mortgage interest, state and local taxes, and charitable contributions) exceed the standard deduction, you might choose to <strong>itemized deductions</strong> instead.
          </p>

          <h3>Effective Tax Rate vs. Marginal Tax Rate</h3>
          <ul>
            <li><strong>Marginal Tax Rate:</strong> The tax rate applied to the very last dollar you earned. This corresponds to your highest tax bracket.</li>
            <li><strong>Effective Tax Rate:</strong> The actual percentage of your total income that goes to taxes. It is calculated by dividing your total tax by your total gross income.</li>
          </ul>

          <h3>Key Tax Planning Tips</h3>
          <p>
            To lower your tax bill, consider contributing to tax-advantaged accounts like a 401(k) or a Traditional IRA. These contributions are typically made with pre-tax dollars, which reduces your taxable income for the year. Additionally, check if you qualify for tax credits, such as the Child Tax Credit or the Earned Income Tax Credit (EITC), which reduce your tax liability dollar-for-dollar.
          </p>

          <h3>Frequently Asked Questions</h3>
          <div className="space-y-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-bold">When are taxes due?</h4>
              <p className="text-sm">For most taxpayers, federal income tax returns are due by April 15th of each year. If the 15th falls on a weekend or holiday, the deadline is moved to the next business day.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-bold">What is taxable income?</h4>
              <p className="text-sm">Taxable income is your gross income minus any adjustments (like student loan interest) and your standard or itemized deductions.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-bold">Does this calculator include state taxes?</h4>
              <p className="text-sm">No, this specific tool estimates federal income tax only. State income tax rates vary significantly across the country, with some states having no income tax at all.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IncomeTaxCalculator;
