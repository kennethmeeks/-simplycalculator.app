import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const AnnuityCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(100000);
  const [annualContribution, setAnnualContribution] = useState<number>(5000);
  const [years, setYears] = useState<number>(20);
  const [expectedReturn, setExpectedReturn] = useState<number>(6);
  const [compounding, setCompounding] = useState<number>(1);

  const [futureValue, setFutureValue] = useState<number>(0);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [totalEarnings, setTotalEarnings] = useState<number>(0);

  useEffect(() => {
    const r = expectedReturn / 100 / compounding;
    const n = years * compounding;
    const p = annualContribution / compounding;
    
    // Future Value of an Annuity Formula: FV = P * [((1 + r)^n - 1) / r] + PV * (1 + r)^n
    const fvPrincipal = initialInvestment * Math.pow(1 + r, n);
    const fvAnnuity = r > 0 ? p * (Math.pow(1 + r, n) - 1) / r : p * n;
    
    const totalFv = fvPrincipal + fvAnnuity;
    const totalCont = initialInvestment + (annualContribution * years);
    
    setFutureValue(totalFv);
    setTotalContributions(totalCont);
    setTotalEarnings(totalFv - totalCont);
  }, [initialInvestment, annualContribution, years, expectedReturn, compounding]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Annuity Calculator | Estimate Future Value 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online annuity calculator. Estimate the future value of your annuity based on initial investment, annual contributions, and expected return." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Annuity Calculator</h1>
        <p className="text-slate-600">
          Determine the future value of your annuity by accounting for your initial investment, annual contributions, and expected rate of return.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Annuity Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Initial Investment ($)</label>
              <input
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
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
                <label className="block text-sm font-medium text-slate-700 mb-1">Years to Grow</label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Expected Return (%)</label>
                <input
                  type="number"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Compounding Frequency</label>
              <select
                value={compounding}
                onChange={(e) => setCompounding(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none bg-white"
              >
                <option value={1}>Annually</option>
                <option value={2}>Semiannually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Annuity Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Future Value</p>
              <p className="text-4xl font-bold text-[#0066cc]">${futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Contributions</p>
                <p className="text-xl font-semibold text-slate-900">${totalContributions.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Earnings</p>
                <p className="text-xl font-semibold text-slate-900">${totalEarnings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation provides an estimate. Actual returns may vary based on market conditions and annuity fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is an Annuity?</h2>
        <p>
          An annuity is a financial product that pays out a fixed stream of payments to an individual, typically used as a primary source of income for retirees. Annuities are created and sold by financial institutions, which accept and invest funds from individuals and then, upon annuitization, issue a stream of payments at a later point in time.
        </p>
        
        <h3>How to Use the Annuity Calculator</h3>
        <p>
          To estimate the future value of your annuity, you need to provide:
        </p>
        <ul>
          <li><strong>Initial Investment:</strong> The amount of money you are putting into the annuity today.</li>
          <li><strong>Annual Contribution:</strong> The amount of money you plan to add to the annuity each year.</li>
          <li><strong>Years to Grow:</strong> The number of years until you plan to start receiving payments.</li>
          <li><strong>Expected Return:</strong> The annual interest rate or rate of return you expect the annuity to earn.</li>
          <li><strong>Compounding Frequency:</strong> How often the interest is calculated and added to the principal.</li>
        </ul>

        <h3>The Future Value of an Annuity Formula</h3>
        <p>
          The future value of an annuity is calculated using the following formula:
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
          FV = P * [((1 + r)^n - 1) / r] + PV * (1 + r)^n
        </div>
        <p>Where:</p>
        <ul>
          <li><strong>FV</strong> = Future Value</li>
          <li><strong>P</strong> = Periodic payment (contribution)</li>
          <li><strong>r</strong> = Rate of return per period</li>
          <li><strong>n</strong> = Number of periods</li>
          <li><strong>PV</strong> = Present Value (initial investment)</li>
        </ul>

        <h3>Why Annuities are Popular</h3>
        <p>
          Annuities are a popular choice for many retirees because they offer:
        </p>
        <ul>
          <li><strong>Tax-Deferred Growth:</strong> You don't pay taxes on the earnings in your annuity until you start receiving payments.</li>
          <li><strong>Guaranteed Income:</strong> You can choose an annuity that provides a guaranteed stream of income for life.</li>
          <li><strong>No Contribution Limits:</strong> Unlike IRAs and 401(k)s, there are no federal limits on how much you can contribute to an annuity.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is the difference between a "Fixed" and a "Variable" annuity?</h4>
            <p>A fixed annuity provides a guaranteed interest rate for a specific period of time. A variable annuity allows you to invest your contributions in a range of sub-accounts (similar to mutual funds), which can provide higher returns but also carries more risk.</p>
          </div>
          <div>
            <h4 className="font-bold">What is an "Immediate" annuity?</h4>
            <p>An immediate annuity starts paying out income right away, usually within a month of your initial investment. This is often used by people who are already retired and want to convert a lump sum of cash into a steady stream of income.</p>
          </div>
          <div>
            <h4 className="font-bold">What are the fees associated with annuities?</h4>
            <p>Annuities can have several types of fees, including surrender charges (for early withdrawal), mortality and expense risk charges, and administrative fees. It's important to understand all the fees before you invest.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
