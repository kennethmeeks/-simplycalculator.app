import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

import { PiggyBank, Target, Calendar, TrendingUp } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const [initialSavings, setInitialSavings] = useState(5000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(200);
  const [years, setYears] = useState(5);
  const [interestRate, setInterestRate] = useState(4.5);
  
  const [totalSavings, setTotalSavings] = useState(0);
  const [totalDeposits, setTotalDeposits] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = years * 12;
    const p = initialSavings;
    const pmt = monthlyDeposit;
    
    let fv = 0;
    if (r === 0) {
      fv = p + (pmt * n);
    } else {
      fv = p * Math.pow(1 + r, n) + pmt * ((Math.pow(1 + r, n) - 1) / r);
    }
    
    const totalDep = p + (pmt * n);
    const interest = fv - totalDep;
    
    setTotalSavings(Number(fv.toFixed(2)));
    setTotalDeposits(Number(totalDep.toFixed(2)));
    setInterestEarned(Number(interest.toFixed(2)));
  }, [initialSavings, monthlyDeposit, years, interestRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Savings Calculator | Track Your Savings Goals & Growth</title>
        <meta name="description" content="Free online savings calculator to reach your financial goals. Calculate how much you'll save over time with interest and regular deposits in 2026." />
      </Helmet>

      <h1>Savings Calculator</h1>
      <p>Plan your savings goals and see how your money grows over time. Perfect for emergency funds, vacation savings, or a down payment on a house.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Savings Plan</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Initial Savings ($)</label>
              <input 
                type="number" 
                value={initialSavings} 
                onChange={(e) => setInitialSavings(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Monthly Deposit ($)</label>
              <input 
                type="number" 
                value={monthlyDeposit} 
                onChange={(e) => setMonthlyDeposit(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Savings Term (Years)</label>
              <input 
                type="number" 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Interest Rate (Annual %)</label>
              <input 
                type="number" 
                step="0.01"
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Savings Growth</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Total Savings</div>
                <div className="text-4xl font-bold text-[#0066cc]">${totalSavings.toLocaleString()}</div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Deposits</div>
                  <div className="text-lg font-bold text-[#0066cc]">${totalDeposits.toLocaleString()}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Interest Earned</div>
                  <div className="text-lg font-bold text-[#0066cc]">${interestEarned.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Savings Calculator" 
        path="/savings" 
        description="Plan your financial future with our free savings growth tool. Calculate the future value of your savings with interest and regular deposits for 2026."
      />
    </div>
  );
};
