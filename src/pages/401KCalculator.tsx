import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { PiggyBank, TrendingUp, DollarSign, Percent } from 'lucide-react';

export const FourOhOneKCalculator: React.FC = () => {
  const [currentBalance, setCurrentBalance] = useState(50000);
  const [annualSalary, setAnnualSalary] = useState(75000);
  const [contributionRate, setContributionRate] = useState(6);
  const [employerMatch, setEmployerMatch] = useState(50);
  const [matchLimit, setMatchLimit] = useState(6);
  const [yearsToRetirement, setYearsToRetirement] = useState(30);
  const [expectedReturn, setExpectedReturn] = useState(7);
  const [salaryIncrease, setSalaryIncrease] = useState(3);

  const [futureBalance, setFutureBalance] = useState(0);
  const [totalContributions, setTotalContributions] = useState(0);
  const [totalMatch, setTotalMatch] = useState(0);

  useEffect(() => {
    let balance = currentBalance;
    let totalCont = 0;
    let totalM = 0;
    let currentSalary = annualSalary;

    for (let i = 0; i < yearsToRetirement; i++) {
      const annualContribution = currentSalary * (contributionRate / 100);
      const annualMatch = currentSalary * (Math.min(contributionRate, matchLimit) / 100) * (employerMatch / 100);
      
      totalCont += annualContribution;
      totalM += annualMatch;
      
      balance = (balance + annualContribution + annualMatch) * (1 + expectedReturn / 100);
      currentSalary *= (1 + salaryIncrease / 100);
    }

    setFutureBalance(Math.round(balance));
    setTotalContributions(Math.round(totalCont));
    setTotalMatch(Math.round(totalM));
  }, [currentBalance, annualSalary, contributionRate, employerMatch, matchLimit, yearsToRetirement, expectedReturn, salaryIncrease]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>401k Calculator | Estimate Your Retirement Savings | simplycalculator.app</title>
        <meta name="description" content="Free online 401k calculator with employer match. Estimate your future retirement balance based on contributions, salary growth, and investment returns in 2026." />
      </Helmet>

      <h1>401k Calculator</h1>
      <p>Estimate your future 401k balance at retirement. Factor in your current balance, annual contributions, employer matching, and expected market returns.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Your 401k Details</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Current 401k Balance ($)</label>
              <input 
                type="number" 
                value={currentBalance} 
                onChange={(e) => setCurrentBalance(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="input-label">Annual Salary ($)</label>
                <input 
                  type="number" 
                  value={annualSalary} 
                  onChange={(e) => setAnnualSalary(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Contribution (%)</label>
                <input 
                  type="number" 
                  value={contributionRate} 
                  onChange={(e) => setContributionRate(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="input-label">Employer Match (%)</label>
                <input 
                  type="number" 
                  value={employerMatch} 
                  onChange={(e) => setEmployerMatch(Number(e.target.value))} 
                  className="input-field" 
                />
                <p className="text-[10px] text-slate-400 mt-1 italic">e.g., 50% match</p>
              </div>
              <div>
                <label className="input-label">Match Limit (%)</label>
                <input 
                  type="number" 
                  value={matchLimit} 
                  onChange={(e) => setMatchLimit(Number(e.target.value))} 
                  className="input-field" 
                />
                <p className="text-[10px] text-slate-400 mt-1 italic">Up to X% of salary</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="input-label">Years to Retire</label>
                <input 
                  type="number" 
                  value={yearsToRetirement} 
                  onChange={(e) => setYearsToRetirement(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Return (%)</label>
                <input 
                  type="number" 
                  value={expectedReturn} 
                  onChange={(e) => setExpectedReturn(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Salary Inc. (%)</label>
                <input 
                  type="number" 
                  value={salaryIncrease} 
                  onChange={(e) => setSalaryIncrease(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Retirement Projection</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Estimated Balance at Retirement</div>
                <div className="text-4xl font-bold text-[#0066cc]">${futureBalance.toLocaleString()}</div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Your Total Contributions</div>
                  <div className="text-xl font-bold text-[#0066cc]">${totalContributions.toLocaleString()}</div>
                </div>
                <div className="p-4 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Employer Match</div>
                  <div className="text-xl font-bold text-[#0066cc]">${totalMatch.toLocaleString()}</div>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 rounded border border-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Investment Growth</span>
                </div>
                <div className="text-2xl font-bold text-emerald-600">
                  ${(futureBalance - currentBalance - totalContributions - totalMatch).toLocaleString()}
                </div>
                <p className="text-[10px] text-emerald-600/70 mt-1 italic">Earnings from compound interest over {yearsToRetirement} years.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Maximizing Your 401k: A Comprehensive Guide</h2>
        <p>
          A 401k is one of the most powerful tools for building long-term wealth. By contributing pre-tax dollars and benefiting from employer matches, you can significantly accelerate your retirement savings. Our <strong>401k calculator</strong> helps you visualize your financial future in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How the 401k Match Works</h3>
        <p>
          The employer match is essentially "free money." Most employers will match a percentage of your contributions up to a certain limit. For example, a "50% match up to 6%" means if you contribute 6% of your salary, your employer adds another 3%.
        </p>
        <p className="bg-slate-50 p-4 border-l-4 border-[#0066cc] italic">
          <strong>Tip:</strong> Always aim to contribute at least enough to get the full employer match. It's an immediate 50% or 100% return on your investment.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Power of Compounding</h3>
        <p>
          The true magic of a 401k is compound interest. As your investments grow, the earnings themselves start to generate more earnings. Over 20 or 30 years, this compounding effect accounts for the vast majority of your final balance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Traditional vs. Roth 401k</h3>
        <ul>
          <li><strong>Traditional 401k:</strong> Contributions are made pre-tax, reducing your taxable income today. You pay taxes on withdrawals in retirement.</li>
          <li><strong>Roth 401k:</strong> Contributions are made with after-tax dollars. You don't get a tax break now, but all withdrawals in retirement are tax-free.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is the 401k contribution limit for 2026?</p>
            <p>Contribution limits are adjusted annually by the IRS. For 2026, ensure you check the latest IRS guidelines for both individual and total contribution limits (including employer match).</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What happens if I leave my job?</p>
            <p>You generally have four options: leave the money in your former employer's plan, roll it over into your new employer's 401k, roll it over into an IRA, or cash it out (which usually incurs taxes and penalties).</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is "Vesting"?</p>
            <p>Vesting refers to the ownership of employer-contributed funds. While your own contributions are always 100% yours, employer matches may "vest" over several years of service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
