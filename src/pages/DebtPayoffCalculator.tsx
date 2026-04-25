import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';

export const DebtPayoffCalculator: React.FC = () => {
  const [totalDebt, setTotalDebt] = useState<number>(25000);
  const [averageInterestRate, setAverageInterestRate] = useState<number>(12);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(1000);

  const [monthsToPayOff, setMonthsToPayOff] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  useEffect(() => {
    const r = averageInterestRate / 100 / 12;
    const p = monthlyPayment;
    const b = totalDebt;
    
    if (p <= b * r) {
      setMonthsToPayOff(Infinity);
      setTotalInterest(Infinity);
      setTotalPayment(Infinity);
      return;
    }

    // Formula for months to pay off: n = -log(1 - (b * r) / p) / log(1 + r)
    const n = -Math.log(1 - (b * r) / p) / Math.log(1 + r);
    const months = Math.ceil(n);
    
    let currentBalance = b;
    let totalInt = 0;
    for (let i = 0; i < months; i++) {
      const interest = currentBalance * r;
      totalInt += interest;
      currentBalance = currentBalance + interest - p;
    }

    setMonthsToPayOff(months);
    setTotalInterest(totalInt);
    setTotalPayment(b + totalInt);
  }, [totalDebt, averageInterestRate, monthlyPayment]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Debt Payoff Calculator | Calculate Debt-Free Date 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online debt payoff calculator. See how long it will take to pay off your total debt and how much interest you will pay based on your monthly payment." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Debt Payoff Calculator</h1>
        <p className="text-slate-600">
          Determine how long it will take to pay off your total debt and see how much interest you'll pay based on your monthly payment.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Debt Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Debt ($)</label>
              <input
                type="number"
                value={totalDebt}
                onChange={(e) => setTotalDebt(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Average Interest Rate (%)</label>
              <input
                type="number"
                value={averageInterestRate}
                onChange={(e) => setAverageInterestRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Payment ($)</label>
              <input
                type="number"
                value={monthlyPayment}
                onChange={(e) => setMonthlyPayment(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Payoff Summary</h2>
          <div className="space-y-6">
            {monthsToPayOff === Infinity ? (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 font-semibold">Warning: Your monthly payment is too low!</p>
                <p className="text-sm text-red-500 mt-1">Your payment must be greater than the monthly interest (${(totalDebt * (averageInterestRate / 100 / 12)).toFixed(2)}) to reduce the balance.</p>
              </div>
            ) : (
              <>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Time to Pay Off</p>
                  <p className="text-4xl font-bold text-[#0066cc]">
                    {monthsToPayOff} <span className="text-lg font-normal text-slate-500">Months</span>
                  </p>
                  <p className="text-sm text-slate-500 mt-1">({(monthsToPayOff / 12).toFixed(1)} Years)</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Total Interest</p>
                    <p className="text-xl font-semibold text-slate-900">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Total Payment</p>
                    <p className="text-xl font-semibold text-slate-900">${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-200">
                  <ResultActions 
                    onReset={() => {
                      setTotalDebt(25000);
                      setAverageInterestRate(12);
                      setMonthlyPayment(1000);
                    }}
                    onCopy={() => {
                      const text = `Debt Payoff Results:\nMonths to Pay Off: ${monthsToPayOff}\nTotal Interest: $${totalInterest.toFixed(2)}\nTotal Payment: $${totalPayment.toFixed(2)}\nCalculated at simplycalculator.app`;
                      navigator.clipboard.writeText(text);
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Debt Payoff Calculator" 
        path="/debt-payoff" 
        description="Calculate how long it will take to be debt-free. Plan your payoff strategy for 2026 with our free calculator."
      />

      <div className="prose prose-slate max-w-none">
        <h2>How to Pay Off Your Debt Faster</h2>
        <p>
          Paying off debt can be a daunting task, but having a clear plan can make it much more manageable. By setting a specific payoff goal, you can determine exactly how much you need to pay each month to become debt-free.
        </p>
        
        <h3>How to Use the Debt Payoff Calculator</h3>
        <p>
          To estimate your debt payoff time, you need to provide:
        </p>
        <ul>
          <li><strong>Total Debt:</strong> The total amount you currently owe on all your debts.</li>
          <li><strong>Average Interest Rate:</strong> The average annual interest rate charged by all your lenders.</li>
          <li><strong>Monthly Payment:</strong> The amount you plan to pay toward your total debt each month.</li>
        </ul>

        <h3>The Importance of Paying More Than the Minimum</h3>
        <p>
          Lenders typically set a very low minimum payment, often just 1% to 2% of your balance plus interest. If you only pay the minimum, it can take decades to pay off your balance and you will end up paying several times the original amount in interest.
        </p>

        <h3>Strategies for Successful Debt Payoff</h3>
        <p>
          If you have multiple debts with balances, consider these popular strategies:
        </p>
        <ul>
          <li><strong>The Debt Avalanche:</strong> Focus on paying off the debt with the highest interest rate first while making minimum payments on the others. This saves you the most money in interest.</li>
          <li><strong>The Debt Snowball:</strong> Focus on paying off the debt with the smallest balance first. This provides a psychological boost and helps you stay motivated.</li>
          <li><strong>Debt Consolidation:</strong> Consider taking out a personal loan with a lower interest rate to pay off all your debt balances.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is a "Balance Transfer"?</h4>
            <p>A balance transfer allows you to move your balance from one credit card to another, often with a 0% introductory APR for a certain period (e.g., 12 to 18 months). This can be a great way to save on interest while you pay down your debt.</p>
          </div>
          <div>
            <h4 className="font-bold">How does my credit score affect my payoff plan?</h4>
            <p>Borrowers with higher credit scores (700+) typically qualify for loans with much lower interest rates and better rewards programs, which can make it easier to pay off their debt.</p>
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
