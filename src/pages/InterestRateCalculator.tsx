import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

import { Percent, TrendingUp, DollarSign, Calculator } from 'lucide-react';

export const InterestRateCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState(10000);
  const [totalAmount, setTotalAmount] = useState(12000);
  const [time, setTime] = useState(2);
  const [timeUnit, setTimeUnit] = useState<'years' | 'months'>('years');
  const [compounding, setCompounding] = useState(12); // Monthly default

  const [interestRate, setInterestRate] = useState(0);
  const [simpleRate, setSimpleRate] = useState(0);

  useEffect(() => {
    if (principal > 0 && totalAmount > principal && time > 0) {
      const t = timeUnit === 'years' ? time : time / 12;
      
      // Simple Interest Rate: R = (I / (P * T)) * 100
      const interest = totalAmount - principal;
      const sRate = (interest / (principal * t)) * 100;
      setSimpleRate(Number(sRate.toFixed(2)));

      // Compound Interest Rate: r = n * [(A/P)^(1/(n*t)) - 1]
      const n = compounding;
      const cRate = n * (Math.pow(totalAmount / principal, 1 / (n * t)) - 1) * 100;
      setInterestRate(Number(cRate.toFixed(2)));
    }
  }, [principal, totalAmount, time, timeUnit, compounding]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Interest Rate Calculator | Calculate Loan & Investment Rates | simplycalculator.app</title>
        <meta name="description" content="Free online interest rate calculator. Find the effective interest rate for loans or investments based on principal, time, and total amount in 2026." />
      </Helmet>

      <h1>Interest Rate Calculator</h1>
      <p>Calculate the interest rate for any loan or investment. Find both simple and compound interest rates based on your principal and final balance.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Loan/Investment Details</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Principal Amount ($)</label>
              <input 
                type="number" 
                value={principal} 
                onChange={(e) => setPrincipal(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Total Final Amount ($)</label>
              <input 
                type="number" 
                value={totalAmount} 
                onChange={(e) => setTotalAmount(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="input-label">Time Period</label>
                <input 
                  type="number" 
                  value={time} 
                  onChange={(e) => setTime(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Unit</label>
                <select 
                  value={timeUnit} 
                  onChange={(e) => setTimeUnit(e.target.value as 'years' | 'months')}
                  className="input-field"
                >
                  <option value="years">Years</option>
                  <option value="months">Months</option>
                </select>
              </div>
            </div>
            <div>
              <label className="input-label">Compounding Frequency</label>
              <select 
                value={compounding} 
                onChange={(e) => setCompounding(Number(e.target.value))}
                className="input-field"
              >
                <option value={1}>Annually (1/yr)</option>
                <option value={2}>Semi-Annually (2/yr)</option>
                <option value={4}>Quarterly (4/yr)</option>
                <option value={12}>Monthly (12/yr)</option>
                <option value={365}>Daily (365/yr)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Calculated Rates</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Compound Interest Rate (APR)</div>
                <div className="text-5xl font-bold text-[#0066cc]">{interestRate}%</div>
                <p className="text-[10px] text-slate-400 mt-1 italic text-center">Based on {compounding === 1 ? 'annual' : compounding === 12 ? 'monthly' : 'selected'} compounding.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded border border-slate-100">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Simple Interest Rate</div>
                <div className="text-2xl font-bold text-slate-700">{simpleRate}%</div>
                <p className="text-[10px] text-slate-400 mt-1 italic">The rate if interest was not compounded.</p>
              </div>

              <div className="p-4 bg-emerald-50 rounded border border-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                  <Calculator className="w-4 h-4" />
                  <span>Total Interest Paid/Earned</span>
                </div>
                <div className="text-2xl font-bold text-emerald-600">
                  ${(totalAmount - principal).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Interest Rate Calculator" 
        path="/interest-rate" 
        description="Calculate the true interest rate for any loan or investment. Find simple and compound rates for 2026."
      />

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Interest Rates: A Guide</h2>
        <p>
          Interest rates are the cost of borrowing money or the reward for saving it. Whether you're analyzing a loan offer or checking the performance of an investment, our <strong>interest rate calculator</strong> helps you find the true percentage in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Simple vs. Compound Interest</h3>
        <p>
          The difference between simple and compound interest is how the interest itself is treated.
        </p>
        <ul>
          <li><strong>Simple Interest:</strong> Calculated only on the principal amount. It doesn't grow over time on its own.</li>
          <li><strong>Compound Interest:</strong> Calculated on the principal plus any accumulated interest. This "interest on interest" leads to exponential growth over time.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Compounding Effect</h3>
        <p>
          The frequency of compounding significantly impacts the total amount. The more often interest is compounded (e.g., daily vs. annually), the higher the effective interest rate will be. This is why credit cards, which often compound daily, can be so expensive.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">APR vs. APY</h3>
        <ul>
          <li><strong>APR (Annual Percentage Rate):</strong> The simple interest rate for a year. It doesn't account for compounding within that year.</li>
          <li><strong>APY (Annual Percentage Yield):</strong> The real rate of return, taking into account the effect of compounding interest. APY is always higher than or equal to APR.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How do I find the interest rate if I only know the monthly payment?</p>
            <p>Finding the rate from a monthly payment requires a more complex iterative calculation (often called the Newton-Raphson method). Most financial calculators use this "behind the scenes."</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Why is my bank's interest rate different from what I calculated?</p>
            <p>Banks often use specific "day count conventions" (like 360 vs 365 days) or include fees in their quoted APR, which can slightly alter the final percentage.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is a "Fixed" vs "Variable" rate?</p>
            <p>A fixed rate stays the same for the life of the loan. A variable rate can change based on market conditions or a specific index (like the Prime Rate).</p>
          </div>
        </div>
      </div>
    </div>
  );
};
