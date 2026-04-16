import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { CreditCard, DollarSign, Calendar, AlertCircle } from 'lucide-react';

export const CreditCardCalculator: React.FC = () => {
  const [balance, setBalance] = useState(5000);
  const [interestRate, setInterestRate] = useState(19.99);
  const [monthlyPayment, setMonthlyPayment] = useState(200);
  
  const [monthsToPayOff, setMonthsToPayOff] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [isImpossible, setIsImpossible] = useState(false);

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const p = balance;
    const m = monthlyPayment;
    
    if (m <= p * r) {
      setIsImpossible(true);
      return;
    }
    
    setIsImpossible(false);
    
    // Formula: n = -log(1 - (r*p)/m) / log(1 + r)
    const n = -Math.log(1 - (r * p) / m) / Math.log(1 + r);
    const months = Math.ceil(n);
    const total = m * n;
    const interest = total - p;
    
    setMonthsToPayOff(months);
    setTotalInterest(Number(interest.toFixed(2)));
    setTotalCost(Number(total.toFixed(2)));
  }, [balance, interestRate, monthlyPayment]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Credit Card Calculator | Plan Your Debt Payoff Strategy | simplycalculator.app</title>
        <meta name="description" content="Free online credit card calculator to estimate payoff time and interest. See how your monthly payments impact your debt in 2026." />
      </Helmet>

      <h1>Credit Card Calculator</h1>
      <p>Estimate how long it will take to pay off your credit card balance and see how much interest you'll pay. Adjust your monthly payment to see how you can save money.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Debt Details</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Credit Card Balance ($)</label>
              <input 
                type="number" 
                value={balance} 
                onChange={(e) => setBalance(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Interest Rate (APR %)</label>
              <input 
                type="number" 
                step="0.01"
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Monthly Payment ($)</label>
              <input 
                type="number" 
                value={monthlyPayment} 
                onChange={(e) => setMonthlyPayment(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Payoff Summary</div>
            {isImpossible ? (
              <div className="p-4 bg-red-50 border border-red-200 rounded text-red-700 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium">Your monthly payment is too low. It must be greater than the monthly interest (${(balance * (interestRate / 100 / 12)).toFixed(2)}) to ever pay off the balance.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                  <div className="text-xs text-slate-500 uppercase font-bold">Time to Pay Off</div>
                  <div className="text-4xl font-bold text-[#0066cc]">{monthsToPayOff} <span className="text-sm font-normal text-slate-400">months</span></div>
                  <div className="text-[10px] text-slate-400 mt-1">Approx. {(monthsToPayOff / 12).toFixed(1)} years</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-50 rounded border border-slate-100">
                    <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Interest</div>
                    <div className="text-lg font-bold text-slate-700">${totalInterest.toLocaleString()}</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded border border-slate-100">
                    <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Cost</div>
                    <div className="text-lg font-bold text-slate-700">${totalCost.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Breaking the Cycle of Debt: A Credit Card Guide</h2>
        <p>
          Credit cards are powerful tools, but high interest rates can make them a dangerous trap. Understanding how your payments impact your balance is the first step toward financial freedom. Our <strong>credit card calculator</strong> helps you visualize your path out of debt in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Danger of Minimum Payments</h3>
        <p>
          Credit card companies often set minimum payments at just 2-3% of the total balance. If you only pay the minimum, most of your money goes toward interest, and it can take decades to pay off even a small balance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Strategies for Paying Off Debt</h3>
        <ul>
          <li><strong>Debt Avalanche:</strong> Pay off the card with the highest interest rate first while making minimum payments on others. This saves the most money on interest.</li>
          <li><strong>Debt Snowball:</strong> Pay off the smallest balance first to build momentum and psychological wins.</li>
          <li><strong>Balance Transfers:</strong> Move high-interest debt to a card with a 0% introductory APR to save on interest while you pay down the principal.</li>
          <li><strong>Personal Loans:</strong> Consolidate high-interest credit card debt into a lower-interest personal loan with a fixed payoff date.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How is credit card interest calculated?</p>
            <p>Most cards use the "Average Daily Balance" method. They take your APR, divide it by 365 to get a daily rate, and multiply that by your balance every day.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is a good APR?</p>
            <p>In 2026, the average credit card APR is around 20%. "Good" rates for those with excellent credit might be 15-18%, while "bad" rates can exceed 25-30%.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Will paying off my card help my credit score?</p>
            <p>Yes! Your "credit utilization ratio" (how much of your available credit you're using) is a major factor in your credit score. Lowering this ratio usually results in a score boost.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
