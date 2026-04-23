import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const MarginCalculator: React.FC = () => {
  const [cost, setCost] = useState<number>(100);
  const [revenue, setRevenue] = useState<number>(150);
  const [margin, setMargin] = useState<number>(0);
  const [markup, setMarkup] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);

  useEffect(() => {
    const p = revenue - cost;
    setProfit(p);
    setMargin((p / revenue) * 100);
    setMarkup((p / cost) * 100);
  }, [cost, revenue]);

  const handleMarginChange = (val: number) => {
    setMargin(val);
    const rev = cost / (1 - val / 100);
    setRevenue(rev);
  };

  const handleMarkupChange = (val: number) => {
    setMarkup(val);
    const rev = cost * (1 + val / 100);
    setRevenue(rev);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Margin Calculator | Calculate Profit Margin & Markup 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online margin calculator. Calculate gross profit margin, markup percentage, and total profit based on cost and revenue." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Margin Calculator</h1>
        <p className="text-slate-600">
          Determine your gross profit margin, markup percentage, and total profit. Use this tool to set the right price for your products and services.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Price Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Cost ($)</label>
              <input
                type="number"
                value={cost}
                onChange={(e) => setCost(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Revenue ($)</label>
              <input
                type="number"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div className="pt-4 border-t border-slate-100">
              <label className="block text-sm font-medium text-slate-700 mb-1">Target Margin (%)</label>
              <input
                type="number"
                value={margin}
                onChange={(e) => handleMarginChange(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Target Markup (%)</label>
              <input
                type="number"
                value={markup}
                onChange={(e) => handleMarkupChange(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Profit Analysis</h2>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-slate-500 mb-1">Gross Profit Margin</p>
              <p className="text-4xl font-bold text-[#0066cc]">{margin.toFixed(2)}%</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Gross Profit</p>
                <p className="text-2xl font-semibold text-[#0066cc]">${profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Markup</p>
                <p className="text-2xl font-semibold text-[#0066cc]">{markup.toFixed(2)}%</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: Margin is calculated based on revenue, while markup is calculated based on cost.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Margin Calculator" 
        path="/margin-calculator" 
        description="Calculate gross profit margin, markup, and selling price. Understand the key differences between margin and markup to optimize your business pricing in 2026."
      />
    </div>
  );
};
