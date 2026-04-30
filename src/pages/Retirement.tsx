import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Umbrella, User, DollarSign, TrendingUp } from 'lucide-react';

export const RetirementCalculator: React.FC = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [returnRate, setReturnRate] = useState(7);
  const [inflationRate, setInflationRate] = useState(3);
  
  const [nestEgg, setNestEgg] = useState(0);
  const [purchasingPower, setPurchasingPower] = useState(0);
  const [yearsToRetirement, setYearsToRetirement] = useState(0);

  useEffect(() => {
    const years = retirementAge - currentAge;
    setYearsToRetirement(years > 0 ? years : 0);
    
    if (years <= 0) {
      setNestEgg(currentSavings);
      setPurchasingPower(currentSavings);
      return;
    }

    const r = returnRate / 100 / 12;
    const n = years * 12;
    const p = currentSavings;
    const pmt = monthlyContribution;
    
    let fv = 0;
    if (r === 0) {
      fv = p + (pmt * n);
    } else {
      fv = p * Math.pow(1 + r, n) + pmt * ((Math.pow(1 + r, n) - 1) / r);
    }
    
    // Adjust for inflation (Purchasing power in today's dollars)
    const inf = inflationRate / 100;
    const pp = fv / Math.pow(1 + inf, years);
    
    setNestEgg(Number(fv.toFixed(2)));
    setPurchasingPower(Number(pp.toFixed(2)));
  }, [currentAge, retirementAge, currentSavings, monthlyContribution, returnRate, inflationRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Retirement Calculator | Plan Your Financial Future</title>
        <meta name="description" content="Free online retirement calculator to estimate your future nest egg. Plan your retirement age, savings goals, and inflation-adjusted purchasing power in 2026." />
      </Helmet>

      <h1>Retirement Calculator</h1>
      <p>Estimate how much you'll have saved by retirement. Plan your contributions and see how inflation will impact your future purchasing power.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Retirement Plan</div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="input-label">Current Age</label>
                <input 
                  type="number" 
                  value={currentAge} 
                  onChange={(e) => setCurrentAge(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Retirement Age</label>
                <input 
                  type="number" 
                  value={retirementAge} 
                  onChange={(e) => setRetirementAge(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            </div>
            <div>
              <label className="input-label">Current Savings ($)</label>
              <input 
                type="number" 
                value={currentSavings} 
                onChange={(e) => setCurrentSavings(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Monthly Contribution ($)</label>
              <input 
                type="number" 
                value={monthlyContribution} 
                onChange={(e) => setMonthlyContribution(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="input-label">Return Rate (%)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={returnRate} 
                  onChange={(e) => setReturnRate(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Inflation (%)</label>
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
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Future Nest Egg</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Estimated Savings at {retirementAge}</div>
                <div className="text-4xl font-bold text-[#0066cc]">${nestEgg.toLocaleString()}</div>
              </div>

              <div className="p-4 bg-slate-50 rounded border border-slate-100">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Purchasing Power (Today's $)</div>
                <div className="text-2xl font-bold text-slate-700">${purchasingPower.toLocaleString()}</div>
                <p className="text-[10px] text-slate-400 mt-1 italic">This is what your savings will feel like in today's money.</p>
              </div>

              <div className="text-center">
                <div className="text-sm text-slate-500">Years until retirement: <span className="font-bold text-[#0066cc]">{yearsToRetirement}</span></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Planning for Retirement: A Strategic Guide</h2>
        <p>
          Retirement planning is about more than just saving money; it's about securing your freedom. Whether you're just starting your career or are nearing the finish line, our <strong>retirement calculator</strong> helps you map out your journey in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The "4% Rule" for Retirement</h3>
        <p>
          A common rule of thumb in retirement planning is the 4% rule. It suggests that you can safely withdraw 4% of your retirement savings in the first year of retirement, and adjust that amount for inflation every year thereafter, with a high probability of your money lasting 30 years.
        </p>
        <p>
          To use this rule, multiply your desired annual retirement income by 25. For example, if you want $40,000 a year, you need a nest egg of $1,000,000.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Factors to Consider</h3>
        <ul>
          <li><strong>Social Security:</strong> Don't forget to factor in estimated Social Security benefits, which can provide a significant floor for your retirement income.</li>
          <li><strong>Healthcare Costs:</strong> Healthcare is often the largest expense in retirement. Consider long-term care insurance or a Health Savings Account (HSA).</li>
          <li><strong>Lifestyle Changes:</strong> Will you travel more? Downsize your home? Your expenses in retirement may be higher or lower than they are now.</li>
          <li><strong>Tax-Advantaged Accounts:</strong> Maximize contributions to 401(k)s, IRAs, and Roth IRAs to benefit from tax-free growth or tax deductions.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">When should I start saving for retirement?</p>
            <p>The best time was yesterday; the second best time is today. The power of compounding means that starting even a few years earlier can result in hundreds of thousands of dollars more in your nest egg.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the difference between a Traditional and Roth IRA?</p>
            <p>Traditional IRAs offer a tax deduction now but you pay taxes when you withdraw. Roth IRAs use after-tax money now but withdrawals in retirement are tax-free.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How much should I be saving?</p>
            <p>Most industry standards recommend saving at least 15% of your gross income for retirement. If you're starting late, you may need to save more.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
