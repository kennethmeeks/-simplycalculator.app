import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const CreditCardPayoffCalculator: React.FC = () => {
  const [balance, setBalance] = useState<number>(5000);
  const [interestRate, setInterestRate] = useState<number>(18);
  const [monthsToPayOff, setMonthsToPayOff] = useState<number>(24);

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = monthsToPayOff;
    const b = balance;
    
    // Monthly Payment Formula: P = PV * [r(1+r)^n] / [(1+r)^n - 1]
    const payment = r > 0 
      ? b * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      : b / n;
    
    setMonthlyPayment(payment);
    setTotalPayment(payment * n);
    setTotalInterest((payment * n) - b);
  }, [balance, interestRate, monthsToPayOff]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Credit Card Payoff Goal Calculator | Calculate Monthly Payment 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online credit card payoff calculator. Calculate the monthly payment needed to pay off your credit card balance within a specific timeframe." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Credit Card Payoff Calculator</h1>
        <p className="text-slate-600">
          Determine the monthly payment required to pay off your credit card balance within a specific number of months.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Payoff Goal</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Current Balance ($)</label>
              <input
                type="number"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Interest Rate (APR) (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Months to Pay Off</label>
              <input
                type="number"
                value={monthsToPayOff}
                onChange={(e) => setMonthsToPayOff(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl font-semibold mb-4">Required Monthly Payment</h2>
          <div className="space-y-4">
            <p className="text-6xl font-bold text-[#0066cc]">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 w-full">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Interest</p>
                <p className="text-xl font-semibold text-slate-900">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Payment</p>
                <p className="text-xl font-semibold text-slate-900">${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>How to Pay Off Your Credit Card Faster</h2>
        <p>
          Paying off credit card debt can be a daunting task, but having a clear plan can make it much more manageable. By setting a specific payoff goal, you can determine exactly how much you need to pay each month to become debt-free.
        </p>
        
        <h3>How to Use the Credit Card Payoff Calculator</h3>
        <p>
          To calculate the monthly payment needed to reach your payoff goal, you need to provide:
        </p>
        <ul>
          <li><strong>Current Balance:</strong> The total amount you currently owe on your credit card.</li>
          <li><strong>Interest Rate (APR):</strong> The annual interest rate charged by your credit card issuer.</li>
          <li><strong>Months to Pay Off:</strong> The number of months you want to take to pay off your balance.</li>
        </ul>

        <h3>The Impact of Interest Rates</h3>
        <p>
          Credit card interest rates are typically much higher than other types of loans, such as mortgages or car loans. This means that a large portion of your monthly payment goes toward interest, rather than reducing your principal balance. By paying more than the minimum, you can significantly reduce the total interest you pay and become debt-free much faster.
        </p>

        <h3>Strategies for Successful Debt Payoff</h3>
        <p>
          If you have multiple credit cards with balances, consider these popular strategies:
        </p>
        <ul>
          <li><strong>The Debt Avalanche:</strong> Focus on paying off the card with the highest interest rate first while making minimum payments on the others. This saves you the most money in interest.</li>
          <li><strong>The Debt Snowball:</strong> Focus on paying off the card with the smallest balance first. This provides a psychological boost and helps you stay motivated.</li>
          <li><strong>Debt Consolidation:</strong> Consider taking out a personal loan with a lower interest rate to pay off all your credit card balances.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is a "Balance Transfer"?</h4>
            <p>A balance transfer allows you to move your balance from one credit card to another, often with a 0% introductory APR for a certain period (e.g., 12 to 18 months). This can be a great way to save on interest while you pay down your debt.</p>
          </div>
          <div>
            <h4 className="font-bold">How does my credit score affect my payoff plan?</h4>
            <p>Borrowers with higher credit scores (700+) typically qualify for credit cards with much lower interest rates and better rewards programs, which can make it easier to pay off their debt.</p>
          </div>
          <div>
            <h4 className="font-bold">Should I prioritize saving or paying off debt?</h4>
            <p>It depends on the interest rate of your debt. Generally, it's a good idea to pay off high-interest debt (like credit cards) first while still building a small emergency fund.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
