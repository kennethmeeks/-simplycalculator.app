import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { TrendingUp, DollarSign, Calendar, PieChart } from 'lucide-react';

export const InvestmentCalculator: React.FC = () => {
  const [initialAmount, setInitialAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [years, setYears] = useState(20);
  const [returnRate, setReturnRate] = useState(7);
  
  const [futureValue, setFutureValue] = useState(0);
  const [totalContributions, setTotalContributions] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const r = returnRate / 100 / 12;
    const n = years * 12;
    const p = initialAmount;
    const pmt = monthlyContribution;
    
    let fv = 0;
    if (r === 0) {
      fv = p + (pmt * n);
    } else {
      fv = p * Math.pow(1 + r, n) + pmt * ((Math.pow(1 + r, n) - 1) / r);
    }
    
    const totalContrib = p + (pmt * n);
    const interest = fv - totalContrib;
    
    setFutureValue(Number(fv.toFixed(2)));
    setTotalContributions(Number(totalContrib.toFixed(2)));
    setTotalInterest(Number(interest.toFixed(2)));
  }, [initialAmount, monthlyContribution, years, returnRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Investment Calculator | Estimate Future Wealth & Growth</title>
        <meta name="description" content="Free online investment calculator to project your future wealth. Calculate compound growth based on initial investment, monthly contributions, and return rates in 2026." />
      </Helmet>

      <h1>Investment Calculator</h1>
      <p>Project the growth of your investments over time. See how compounding interest and regular contributions can build significant wealth for your future.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Investment Strategy</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Initial Investment ($)</label>
              <input 
                type="number" 
                value={initialAmount} 
                onChange={(e) => setInitialAmount(Number(e.target.value))} 
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
            <div>
              <label className="input-label">Investment Term (Years)</label>
              <input 
                type="number" 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Expected Return Rate (Annual %)</label>
              <input 
                type="number" 
                step="0.1"
                value={returnRate} 
                onChange={(e) => setReturnRate(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Growth Projection</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Future Value</div>
                <div className="text-4xl font-bold text-[#0066cc]">${futureValue.toLocaleString()}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Contributions</div>
                  <div className="text-lg font-bold text-[#0066cc]">${totalContributions.toLocaleString()}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Interest</div>
                  <div className="text-lg font-bold text-[#0066cc]">${totalInterest.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Power of Compounding: An Investment Guide</h2>
        <p>
          Investing is the key to building long-term wealth. By putting your money to work in the stock market, real estate, or other assets, you can benefit from the "eighth wonder of the world"—compound interest. Our <strong>investment calculator</strong> helps you visualize your financial future in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How Compounding Works</h3>
        <p>
          Compound interest is interest calculated on the initial principal, which also includes all of the accumulated interest from previous periods on a deposit or loan.
        </p>
        <p>
          The difference between simple interest and compound interest is that compound interest allows your wealth to grow exponentially rather than linearly. The longer you stay invested, the more powerful the effect becomes.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Investment Principles</h3>
        <ul>
          <li><strong>Start Early:</strong> Time is your greatest asset. Even small amounts invested in your 20s can grow to massive sums by retirement.</li>
          <li><strong>Consistency:</strong> Regular monthly contributions (Dollar Cost Averaging) reduce the impact of market volatility and build a strong habit.</li>
          <li><strong>Diversification:</strong> Spreading your investments across different asset classes (stocks, bonds, real estate) helps manage risk.</li>
          <li><strong>Reinvest Dividends:</strong> Automatically reinvesting dividends allows you to buy more shares, further accelerating the compounding process.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is a realistic return rate?</p>
            <p>Historically, the S&P 500 has returned about 10% annually before inflation. Many investors use 7-8% as a more conservative estimate for long-term planning.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How does inflation affect my investments?</p>
            <p>Inflation reduces the purchasing power of your money over time. If inflation is 3% and your return is 7%, your "real" return is 4%.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I pay off debt or invest?</p>
            <p>Generally, if your debt interest rate (like a credit card at 20%) is higher than your expected investment return (7-10%), it's better to pay off the debt first.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
