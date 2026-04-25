import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


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
              <ResultActions 
                onReset={() => {
                  setInitialInvestment(100000);
                  setAnnualContribution(5000);
                  setYears(20);
                  setExpectedReturn(6);
                  setCompounding(1);
                }}
                onCopy={() => {
                  const text = `Annuity Projection:\nFuture Value: $${futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}\nTotal Contributions: $${totalContributions.toLocaleString(undefined, { maximumFractionDigits: 0 })}\nTotal Earnings: $${totalEarnings.toLocaleString(undefined, { maximumFractionDigits: 0 })}\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
              <p className="text-xs text-slate-500 italic mt-4">
                Note: This calculation provides an estimate. Actual returns may vary based on market conditions and annuity fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Annuity Calculator" 
        path="/annuity" 
        description="Estimate the future value of your annuity with our free calculator. Plan for 2026 retirement by factoring in initial investments, contributions, and expected returns."
      />
    </div>
  );
};
