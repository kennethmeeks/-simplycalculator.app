import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const BusinessLoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(7.5);
  const [loanTerm, setLoanTerm] = useState<number>(5);
  const [originationFee, setOriginationFee] = useState<number>(2);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [apr, setApr] = useState<number>(0);

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const p = loanAmount;
    const fee = (originationFee / 100) * p;

    if (r === 0) {
      setMonthlyPayment(p / n);
      setTotalInterest(0);
      setTotalCost(p + fee);
    } else {
      const payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setMonthlyPayment(payment);
      setTotalInterest(payment * n - p);
      setTotalCost(payment * n + fee);
      
      // Simple APR approximation: (Total Interest + Fee) / Principal / Years
      setApr(((payment * n - p + fee) / p / loanTerm) * 100);
    }
  }, [loanAmount, interestRate, loanTerm, originationFee]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Business Loan Calculator | Estimate Payments & APR 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online business loan calculator. Estimate monthly payments, total interest, and APR for your small business loan including origination fees." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Business Loan Calculator</h1>
        <p className="text-slate-600">
          Plan your business growth by estimating the monthly payments and total cost of a small business loan, including the impact of origination fees.
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
              <label className="block text-sm font-medium text-slate-700 mb-1">Annual Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
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
                step="0.1"
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
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation assumes monthly compounding and a fixed interest rate.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>Planning Your Small Business Loan</h2>
        <p>
          Taking out a business loan is a major decision that can fuel growth, cover operational expenses, or help you manage cash flow. However, it's essential to understand the true cost of borrowing before signing any agreement.
        </p>
        
        <h3>How to Use the Business Loan Calculator</h3>
        <p>
          To get an accurate picture of your loan's cost, you need to provide:
        </p>
        <ul>
          <li><strong>Loan Amount:</strong> The total amount of money you are borrowing.</li>
          <li><strong>Annual Interest Rate:</strong> The base interest rate charged by the lender.</li>
          <li><strong>Loan Term:</strong> How many years you have to pay back the loan.</li>
          <li><strong>Origination Fee:</strong> A one-time fee charged by the lender for processing the loan, usually expressed as a percentage of the loan amount.</li>
        </ul>

        <h3>Interest Rate vs. APR</h3>
        <p>
          The **interest rate** is the cost of borrowing the principal amount. The **APR (Annual Percentage Rate)** is a broader measure of the cost of the loan, as it includes both the interest rate and any fees (like origination fees). When comparing loans from different lenders, the APR is the most accurate metric to use.
        </p>

        <h3>Common Types of Business Loans</h3>
        <p>
          Depending on your needs, you might consider:
        </p>
        <ul>
          <li><strong>SBA Loans:</strong> Government-backed loans with competitive rates and long terms.</li>
          <li><strong>Term Loans:</strong> A lump sum of cash that you pay back over a fixed period.</li>
          <li><strong>Lines of Credit:</strong> Flexible financing that allows you to draw funds as needed, up to a certain limit.</li>
          <li><strong>Equipment Financing:</strong> A loan specifically used to purchase business equipment, where the equipment itself serves as collateral.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is an origination fee?</h4>
            <p>An origination fee is a one-time upfront fee charged by a lender for processing a new loan application. It is usually deducted from the loan proceeds, meaning if you borrow $100,000 with a 2% fee, you will only receive $98,000.</p>
          </div>
          <div>
            <h4 className="font-bold">How do I qualify for a lower interest rate?</h4>
            <p>Lenders typically look at your personal and business credit scores, your time in business, your annual revenue, and your debt-to-income ratio. The stronger your financial profile, the lower the interest rate you'll be offered.</p>
          </div>
          <div>
            <h4 className="font-bold">What is collateral?</h4>
            <p>Collateral is an asset (like real estate, equipment, or inventory) that a borrower offers to a lender to secure a loan. If the borrower defaults on the loan, the lender can seize the collateral to recover their losses.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
