import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { PiggyBank, TrendingUp, DollarSign, Percent } from 'lucide-react';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';

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
        <title>Free 2026 401k Calculator — How Much Will I Have at 67?</title>
        <meta name="description" content="Estimate your future 401k retirement balance with employer match. See how much wealth you'll accumulate by 2026 and beyond." />
      </Helmet>

      <h1>How Big Will Your 401k Retirement Nest Egg Be?</h1>
      <p>Your 401k could grow to over $1,240,000 if you start today; use this free calculator to see your exact retirement potential.</p>

      

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
          
          <ResultActions 
            onReset={() => {
              setCurrentBalance(50000);
              setAnnualSalary(75000);
              setContributionRate(6);
              setEmployerMatch(50);
              setMatchLimit(6);
              setYearsToRetirement(30);
              setExpectedReturn(7);
              setSalaryIncrease(3);
            }}
            onCopy={() => {
              const text = `401(k) Projection:\nEstimated Balance: $${futureBalance.toLocaleString()}\nYour Contributions: $${totalContributions.toLocaleString()}\nEmployer Match: $${totalMatch.toLocaleString()}\nCalculated at simplycalculator.app`;
              navigator.clipboard.writeText(text);
            }}
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 pt-12">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4">Professional Guidance: Why Your 401(k) Strategy Matters</h2>
          <p className="text-slate-600 leading-relaxed">
            Your 401(k) is often your most powerful wealth-building engine due to the "triple threat" of tax-deferred growth, employer matching, and payroll automation. Small adjustments to your contribution rate today can compound into hundreds of thousands of additional dollars by retirement, providing the essential safety net needed to maintain your lifestyle after your working years.
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
          <h3 className="font-bold text-slate-900 flex items-center gap-2">
            <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs text uppercase tracking-wider">Common Pitfalls</span>
          </h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <span className="font-bold text-slate-900 min-w-[20px]">1.</span>
              <span><strong className="text-slate-900">Leaving Money on the Table:</strong> Failing to contribute enough to reach the full employer match is a guaranteed 100% loss on your "free" investment capital.</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-slate-900 min-w-[20px]">2.</span>
              <span><strong className="text-slate-900">Inflation Ignorance:</strong> Not factor in salary increases or failing to increase your percentage contribution as your salary grows reduces your future purchasing power.</span>
            </li>
          </ul>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm italic">
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs not-italic uppercase tracking-wider">Pro-Tip</span>
              The "Rule of 15%" Benchmark
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Financial experts generally recommend saving 15% of your gross household income for retirement. If your employer matches 5%, you only need to contribute 10% from your own paycheck to hit this critical benchmark.
            </p>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="401k Calculator" 
        path="/401k" 
        description="Plan your retirement by estimating your 401k future value. Account for salary growth, employer matching, and investment returns for a secure 2026 financial future."
      />
    </div>
  );
};
