import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const PersonalLoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [interestRate, setInterestRate] = useState<number>(10);
  const [loanTerm, setLoanTerm] = useState<number>(3);
  const [originationFee, setOriginationFee] = useState<number>(0);

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [apr, setApr] = useState<number>(0);

  useEffect(() => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    // Monthly Payment Formula: P * (r * (1 + r)^n) / ((1 + r)^n - 1)
    const payment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPay = payment * numberOfPayments;
    const totalInt = totalPay - loanAmount;
    const feeAmount = (originationFee / 100) * loanAmount;
    
    setMonthlyPayment(payment);
    setTotalInterest(totalInt);
    setTotalCost(totalPay + feeAmount);

    // Simple APR estimation for personal loans with fees
    // APR = ((Interest + Fees) / Principal / Days) * 365 * 100
    const totalFinanceCharge = totalInt + feeAmount;
    const estimatedApr = (totalFinanceCharge / loanAmount / (loanTerm * 365)) * 365 * 100;
    setApr(estimatedApr);
  }, [loanAmount, interestRate, loanTerm, originationFee]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Personal Loan Calculator | Estimate Monthly Payments 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online personal loan calculator. Estimate your monthly payments, total interest, and APR for personal loans with or without origination fees." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Personal Loan Calculator</h1>
        <p className="text-slate-600">
          Estimate your monthly personal loan payments and see how interest rates and loan terms affect the total cost of borrowing.
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
              <label className="block text-sm font-medium text-slate-700 mb-1">Loan Term (Years)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Origination Fee (%)</label>
              <input
                type="number"
                value={originationFee}
                onChange={(e) => setOriginationFee(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Loan Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Monthly Payment</p>
              <p className="text-4xl font-bold text-[#0066cc]">${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Interest</p>
                <p className="text-xl font-semibold text-slate-900">${totalInterest.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Estimated APR</p>
                <p className="text-xl font-semibold text-slate-900">{apr.toFixed(2)}%</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Cost of Loan</p>
              <p className="text-2xl font-semibold text-slate-900">${totalCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a Personal Loan?</h2>
        <p>
          A personal loan is a type of unsecured loan that you can use for various purposes, such as debt consolidation, home improvements, or unexpected expenses. Unlike a mortgage or an auto loan, a personal loan is not backed by collateral.
        </p>
        
        <h3>How to Use the Personal Loan Calculator</h3>
        <p>
          To estimate your monthly personal loan payment, you need to provide:
        </p>
        <ul>
          <li><strong>Loan Amount:</strong> The total amount of money you want to borrow.</li>
          <li><strong>Interest Rate:</strong> The annual interest rate offered by the lender.</li>
          <li><strong>Loan Term:</strong> The number of years you will have to repay the loan.</li>
          <li><strong>Origination Fee:</strong> A one-time fee charged by the lender for processing the loan, usually expressed as a percentage of the loan amount.</li>
        </ul>

        <h3>The Personal Loan Formula</h3>
        <p>
          The monthly payment for a personal loan is calculated using the standard amortization formula:
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
          M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
        </div>
        <p>Where:</p>
        <ul>
          <li><strong>M</strong> = Monthly payment</li>
          <li><strong>P</strong> = Principal loan amount</li>
          <li><strong>i</strong> = Monthly interest rate (annual rate / 12)</li>
          <li><strong>n</strong> = Number of months (years * 12)</li>
        </ul>

        <h3>Why Personal Loans are Popular</h3>
        <p>
          Personal loans are a popular choice for many borrowers because they offer:
        </p>
        <ul>
          <li><strong>Fixed Payments:</strong> Your monthly payment remains the same throughout the life of the loan.</li>
          <li><strong>Lower Interest Rates:</strong> Personal loans often have lower interest rates than credit cards, making them a good option for debt consolidation.</li>
          <li><strong>Fast Funding:</strong> Many lenders can provide funding within a few days of approval.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is the difference between an interest rate and an APR?</h4>
            <p>The interest rate is the cost of borrowing the principal amount of the loan. The Annual Percentage Rate (APR) includes the interest rate plus any fees (like origination fees), providing a more accurate picture of the total cost of borrowing.</p>
          </div>
          <div>
            <h4 className="font-bold">Can I pay off my personal loan early?</h4>
            <p>Most personal loans allow you to pay off the balance early without a penalty. However, it's always a good idea to check with your lender before you sign the loan agreement.</p>
          </div>
          <div>
            <h4 className="font-bold">What credit score do I need for a personal loan?</h4>
            <p>While requirements vary by lender, you typically need a credit score of at least 600 to qualify for a personal loan. Borrowers with higher credit scores (700+) will generally receive the best interest rates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
