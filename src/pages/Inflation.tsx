import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { TrendingDown, DollarSign, Calendar, Info } from 'lucide-react';

export const InflationCalculator: React.FC = () => {
  const [amount, setAmount] = useState(1000);
  const [years, setYears] = useState(10);
  const [inflationRate, setInflationRate] = useState(3);
  
  const [futureValue, setFutureValue] = useState(0);
  const [purchasingPower, setPurchasingPower] = useState(0);
  const [totalIncrease, setTotalIncrease] = useState(0);

  useEffect(() => {
    const r = inflationRate / 100;
    const n = years;
    
    // Future value of the same amount (how much you'll need to buy the same stuff)
    const fv = amount * Math.pow(1 + r, n);
    
    // Purchasing power of the same amount (how much that amount will buy in the future)
    const pp = amount / Math.pow(1 + r, n);
    
    const increase = fv - amount;
    
    setFutureValue(Number(fv.toFixed(2)));
    setPurchasingPower(Number(pp.toFixed(2)));
    setTotalIncrease(Number(increase.toFixed(2)));
  }, [amount, years, inflationRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Inflation Calculator | Calculate Purchasing Power & Price Growth</title>
        <meta name="description" content="Free online inflation calculator to see how price growth impacts your money. Calculate future purchasing power and cost of living in 2026." />
      </Helmet>

      <h1>Inflation Calculator</h1>
      <p>See how inflation impacts the value of your money over time. Calculate how much you'll need in the future to maintain your current standard of living.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Inflation Parameters</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Current Amount ($)</label>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Number of Years</label>
              <input 
                type="number" 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Average Inflation Rate (Annual %)</label>
              <input 
                type="number" 
                step="0.1"
                value={inflationRate} 
                onChange={(e) => setInflationRate(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Impact of Inflation</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Future Cost of Same Items</div>
                <div className="text-4xl font-bold text-[#0066cc]">${futureValue.toLocaleString()}</div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Purchasing Power</div>
                  <div className="text-lg font-bold text-[#0066cc]">${purchasingPower.toLocaleString()}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Price Increase</div>
                  <div className="text-lg font-bold text-[#0066cc]">${totalIncrease.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Silent Thief: An Inflation Guide</h2>
        <p>
          Inflation is the rate at which the general level of prices for goods and services is rising, and, subsequently, purchasing power is falling. Understanding its impact is critical for long-term financial planning. Our <strong>inflation calculator</strong> helps you visualize the future value of your money in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How Inflation Impact Is Calculated</h3>
        <p>
          Inflation is essentially compound interest in reverse. The formula for future cost is:
        </p>
        <div className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 my-4">
          Future Cost = Current Cost * (1 + r)^n
        </div>
        <p>Where:</p>
        <ul>
          <li><strong>r:</strong> Annual inflation rate</li>
          <li><strong>n:</strong> Number of years</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Inflation Matters</h3>
        <ul>
          <li><strong>Retirement Planning:</strong> If you need $50,000 a year to live today, you might need $100,000 a year in 20-30 years just to maintain the same lifestyle.</li>
          <li><strong>Savings:</strong> If your savings account interest rate is lower than the inflation rate, you are effectively losing money every year.</li>
          <li><strong>Wages:</strong> If your salary doesn't increase at least as fast as inflation, your "real" income is actually decreasing.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What causes inflation?</p>
            <p>Inflation is usually caused by an increase in the money supply, rising production costs (cost-push), or an increase in consumer demand (demand-pull).</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the "target" inflation rate?</p>
            <p>Most central banks, like the Federal Reserve in the US, aim for a target inflation rate of around 2% annually to keep the economy stable.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How can I protect myself from inflation?</p>
            <p>Investing in assets that tend to appreciate over time—like stocks, real estate, or commodities—is the most common way to hedge against inflation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
