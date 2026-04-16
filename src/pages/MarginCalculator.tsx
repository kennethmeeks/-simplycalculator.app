import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


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
                <p className="text-2xl font-semibold text-slate-900">${profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Markup</p>
                <p className="text-2xl font-semibold text-slate-900">{markup.toFixed(2)}%</p>
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

      <div className="prose prose-slate max-w-none">
        <h2>Margin vs. Markup: What's the Difference?</h2>
        <p>
          While both margin and markup use the same inputs (cost and revenue) and measure the same thing (profitability), they are calculated differently and provide different perspectives on your business.
        </p>
        
        <h3>1. Gross Profit Margin</h3>
        <p>
          Margin is the percentage of the final selling price that is profit. It tells you how much of every dollar of revenue you keep after paying for the cost of goods sold (COGS).
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
          Margin = [(Revenue - Cost) / Revenue] * 100
        </div>

        <h3>2. Markup Percentage</h3>
        <p>
          Markup is the percentage added to the cost price to arrive at the selling price. It tells you how much more you're charging for a product than what it cost you to buy or produce.
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
          Markup = [(Revenue - Cost) / Cost] * 100
        </div>

        <h3>How to Use the Margin Calculator</h3>
        <p>
          You can use this calculator in several ways:
        </p>
        <ul>
          <li><strong>Calculate Margin/Markup:</strong> Enter your cost and revenue to see your current profitability.</li>
          <li><strong>Set a Price:</strong> Enter your cost and your *target* margin or markup to see what you should charge for your product.</li>
        </ul>

        <h3>Common Business Benchmarks</h3>
        <p>
          What constitutes a "good" margin varies wildly by industry:
        </p>
        <ul>
          <li><strong>Retail:</strong> Often aims for a 50% markup (known as "keystone pricing"), which results in a 33% margin.</li>
          <li><strong>Software (SaaS):</strong> Often has very high gross margins (80%+) because the cost of delivering the software to an additional user is very low.</li>
          <li><strong>Restaurants:</strong> Typically aim for food margins around 60-70% to cover high labor and overhead costs.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">Can margin be higher than 100%?</h4>
            <p>No, gross profit margin can never exceed 100%. If you have zero cost, your margin is exactly 100%. Markup, however, can be much higher than 100% (e.g., if you buy something for $1 and sell it for $10, your markup is 900%).</p>
          </div>
          <div>
            <h4 className="font-bold">Why is margin more important than markup?</h4>
            <p>Most businesses prefer to track margin because it directly relates to the bottom line. If you know your margin is 20%, you know that 20 cents of every dollar you make is profit. Markup doesn't give you that direct relationship to revenue.</p>
          </div>
          <div>
            <h4 className="font-bold">What is "Contribution Margin"?</h4>
            <p>Contribution margin is a more advanced metric that subtracts variable costs from revenue. It tells you how much each sale contributes to covering your fixed costs (like rent and salaries).</p>
          </div>
        </div>
      </div>
    </div>
  );
};
