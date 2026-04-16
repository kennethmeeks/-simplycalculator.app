import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const RepaymentCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [interestRate, setInterestRate] = useState<number>(8);
  const [loanTerm, setLoanTerm] = useState<number>(60);

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = loanTerm;
    const p = loanAmount;
    
    // Monthly Payment Formula: P = PV * [r(1+r)^n] / [(1+r)^n - 1]
    const payment = r > 0 
      ? p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      : p / n;
    
    setMonthlyPayment(payment);
    setTotalPayment(payment * n);
    setTotalInterest((payment * n) - p);
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Loan Repayment Calculator | Calculate Monthly Payments 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online loan repayment calculator. Calculate your monthly loan payments, total interest, and total cost based on loan amount, rate, and term." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Repayment Calculator</h1>
        <p className="text-slate-600">
          Determine your monthly loan payments, total interest, and the total cost of your loan based on the loan amount, interest rate, and term.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Loan Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Loan Amount ($)</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Loan Term (Months)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Repayment Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Monthly Payment</p>
              <p className="text-4xl font-bold text-[#0066cc]">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
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
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation provides an estimate. Actual payments may vary based on lender fees and specific loan terms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a Loan Repayment?</h2>
        <p>
          A loan repayment is the act of paying back money borrowed from a lender. This typically involves making regular payments (usually monthly) that include both principal (the original amount borrowed) and interest (the cost of borrowing).
        </p>
        
        <h3>How to Use the Repayment Calculator</h3>
        <p>
          To estimate your monthly loan payments and total interest, you need to provide:
        </p>
        <ul>
          <li><strong>Loan Amount:</strong> The total amount of money you plan to borrow.</li>
          <li><strong>Interest Rate:</strong> The annual interest rate charged by the lender.</li>
          <li><strong>Loan Term:</strong> The number of months you will take to pay back the loan.</li>
        </ul>

        <h3>The Components of a Loan Payment</h3>
        <p>
          Most loan payments are made up of two parts:
        </p>
        <ul>
          <li><strong>Principal:</strong> This is the portion of your payment that goes toward reducing the total amount you owe.</li>
          <li><strong>Interest:</strong> This is the portion of your payment that goes toward the cost of borrowing the money.</li>
        </ul>

        <h3>Tips for Managing Your Loan Repayments</h3>
        <p>
          Managing your loan repayments effectively can help you stay on track and avoid financial stress:
        </p>
        <ul>
          <li><strong>Automate Your Payments:</strong> Set up a recurring payment from your checking account to ensure you never miss a due date.</li>
          <li><strong>Pay More Than the Minimum:</strong> Even a small extra payment each month can significantly reduce the total interest you pay and shorten your loan term.</li>
          <li><strong>Understand Your Loan Terms:</strong> Be sure to read and understand all the terms and conditions of your loan, including any fees or penalties.</li>
          <li><strong>Build an Emergency Fund:</strong> Having a small amount of money saved for unexpected events can help you avoid missing a loan payment.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is a "Fixed" vs. "Variable" interest rate?</h4>
            <p>A fixed interest rate remains the same throughout the life of the loan, while a variable interest rate can change over time based on market conditions.</p>
          </div>
          <div>
            <h4 className="font-bold">What is a "Prepayment Penalty"?</h4>
            <p>A prepayment penalty is a fee charged by some lenders if you pay off your loan early. Be sure to check your loan agreement for any such penalties.</p>
          </div>
          <div>
            <h4 className="font-bold">How does my credit score affect my interest rate?</h4>
            <p>Borrowers with higher credit scores (700+) typically qualify for loans with much lower interest rates and better terms.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
