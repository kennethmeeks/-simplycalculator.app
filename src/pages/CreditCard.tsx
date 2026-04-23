import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

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

      <CalculatorSEO 
        name="Credit Card Calculator" 
        path="/credit-card" 
        description="Plan your debt payoff strategy with our free credit card tool. See how your monthly payments impact interest and payoff time for 2026."
      />
    </div>
  );
};
