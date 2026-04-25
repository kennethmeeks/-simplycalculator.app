import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const CommissionCalculator: React.FC = () => {
  const [salesAmount, setSalesAmount] = useState<number>(50000);
  const [commissionRate, setCommissionRate] = useState<number>(5);
  const [commissionAmount, setCommissionAmount] = useState<number>(0);
  const [netSales, setNetSales] = useState<number>(0);

  useEffect(() => {
    const comm = (commissionRate / 100) * salesAmount;
    setCommissionAmount(comm);
    setNetSales(salesAmount - comm);
  }, [salesAmount, commissionRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Commission Calculator | Calculate Sales Commission 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online commission calculator. Calculate sales commission amounts and net sales based on sales volume and commission percentage." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Commission Calculator</h1>
        <p className="text-slate-600">
          Quickly calculate the commission amount for a sale based on the total sales volume and the agreed-upon commission percentage.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Sales Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Sales Amount ($)</label>
              <input
                type="number"
                value={salesAmount}
                onChange={(e) => setSalesAmount(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Commission Rate (%)</label>
              <input
                type="number"
                value={commissionRate}
                onChange={(e) => setCommissionRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Commission Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Commission Amount</p>
              <p className="text-4xl font-bold text-[#0066cc]">${commissionAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Net Sales (After Commission)</p>
              <p className="text-2xl font-semibold text-slate-900">${netSales.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <ResultActions 
                onReset={() => {
                  setSalesAmount(50000);
                  setCommissionRate(5);
                }}
                onCopy={() => {
                  const text = `Commission Results:\nSales: $${salesAmount}\nCommission ($): $${commissionAmount.toFixed(2)}\nNet Sales: $${netSales.toFixed(2)}\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
              <p className="text-xs text-slate-500 italic mt-4">
                Note: This is a simple commission calculation. Complex tiered structures are not included.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Commission Calculator" 
        path="/commission" 
        description="Calculate sales commission amounts and net sales based on volume and rates. Understand common commission structures for real estate and retail in 2026."
      />
    </div>
  );
};
