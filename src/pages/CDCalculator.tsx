import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const CDCalculator: React.FC = () => {
  const [initialDeposit, setInitialDeposit] = useState<number>(10000);
  const [apy, setApy] = useState<number>(5.0);
  const [termMonths, setTermMonths] = useState<number>(12);
  const [compounding, setCompounding] = useState<number>(12);

  const [futureValue, setFutureValue] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  useEffect(() => {
    const r = apy / 100 / compounding;
    const n = (termMonths / 12) * compounding;
    
    // Future Value Formula: FV = PV * (1 + r)^n
    const fv = initialDeposit * Math.pow(1 + r, n);
    
    setFutureValue(fv);
    setTotalInterest(fv - initialDeposit);
  }, [initialDeposit, apy, termMonths, compounding]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>CD Calculator | Calculate Certificate of Deposit Interest 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online CD calculator. Calculate the future value and total interest earned on your Certificate of Deposit (CD) based on APY and term." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">CD Calculator</h1>
        <p className="text-slate-600">
          Determine how much your Certificate of Deposit (CD) will be worth at maturity by accounting for the initial deposit, APY, and term length.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">CD Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Initial Deposit ($)</label>
              <input
                type="number"
                value={initialDeposit}
                onChange={(e) => setInitialDeposit(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Annual Percentage Yield (APY) (%)</label>
              <input
                type="number"
                value={apy}
                onChange={(e) => setApy(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Term (Months)</label>
              <input
                type="number"
                value={termMonths}
                onChange={(e) => setTermMonths(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Compounding Frequency</label>
              <select
                value={compounding}
                onChange={(e) => setCompounding(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none bg-white"
              >
                <option value={1}>Annually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
                <option value={365}>Daily</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl font-semibold mb-4">Value at Maturity</h2>
          <div className="space-y-4">
            <p className="text-6xl font-bold text-[#0066cc]">${futureValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Interest Earned</p>
              <p className="text-2xl font-semibold text-slate-900">${totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="CD Calculator" 
        path="/cd-calculator" 
        description="Calculate the interest and maturity value of your Certificate of Deposit (CD). Compare compounding frequencies and term lengths for maximum returns in 2026."
      />
    </div>
  );
};
