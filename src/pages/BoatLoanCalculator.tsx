import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const BoatLoanCalculator: React.FC = () => {
  const [boatPrice, setBoatPrice] = useState<number>(50000);
  const [downPayment, setDownPayment] = useState<number>(5000);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(10);

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const principal = boatPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    // Monthly Payment Formula: P * (r * (1 + r)^n) / ((1 + r)^n - 1)
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPay = payment * numberOfPayments;
    const totalInt = totalPay - principal;
    
    setMonthlyPayment(payment);
    setTotalInterest(totalInt);
    setTotalCost(totalPay + downPayment);
  }, [boatPrice, downPayment, interestRate, loanTerm]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Boat Loan Calculator | Estimate Monthly Payments 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online boat loan calculator. Estimate your monthly payments, total interest, and total cost for financing a new or used boat." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Boat Loan Calculator</h1>
        <p className="text-slate-600">
          Planning to buy a boat? Use our boat loan calculator to estimate your monthly payments and see how different loan terms and interest rates affect your budget.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Boat Loan Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Boat Price ($)</label>
              <input
                type="number"
                value={boatPrice}
                onChange={(e) => setBoatPrice(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Down Payment ($)</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
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
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none bg-white"
              >
                <option value={5}>5 Years</option>
                <option value={10}>10 Years</option>
                <option value={15}>15 Years</option>
                <option value={20}>20 Years</option>
              </select>
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
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Interest Paid</p>
              <p className="text-2xl font-semibold text-slate-900">${totalInterest.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Cost of Boat</p>
              <p className="text-2xl font-semibold text-slate-900">${totalCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation provides an estimate. Taxes, registration, and insurance are not included.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>How Boat Loans Work</h2>
        <p>
          Financing a boat is similar to financing a car or a home. Most boat loans are secured loans, meaning the boat itself serves as collateral. Because boats are considered luxury items, loan terms can be longer than car loans, often ranging from 5 to 20 years.
        </p>
        
        <h3>How to Use the Boat Loan Calculator</h3>
        <p>
          To get an accurate estimate of your boat loan payment, you need to provide:
        </p>
        <ul>
          <li><strong>Boat Price:</strong> The total cost of the boat, including any options and accessories.</li>
          <li><strong>Down Payment:</strong> The amount of cash you pay upfront. Lenders typically require a 10% to 20% down payment for boat loans.</li>
          <li><strong>Interest Rate:</strong> The annual interest rate offered by the lender.</li>
          <li><strong>Loan Term:</strong> The number of years you will have to repay the loan.</li>
        </ul>

        <h3>The Boat Loan Formula</h3>
        <p>
          The monthly payment for a boat loan is calculated using the standard amortization formula:
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
          M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
        </div>
        <p>Where:</p>
        <ul>
          <li><strong>M</strong> = Monthly payment</li>
          <li><strong>P</strong> = Principal loan amount (Boat Price - Down Payment)</li>
          <li><strong>i</strong> = Monthly interest rate (annual rate / 12)</li>
          <li><strong>n</strong> = Number of months (years * 12)</li>
        </ul>

        <h3>Why Boat Loans are Different</h3>
        <p>
          Boat loans are unique for several reasons:
        </p>
        <ul>
          <li><strong>Longer Terms:</strong> Because boats can be very expensive and have a long lifespan, lenders often offer terms up to 20 years.</li>
          <li><strong>Higher Interest Rates:</strong> Interest rates for boat loans are typically higher than mortgage rates but lower than credit card rates.</li>
          <li><strong>Collateral Requirements:</strong> The boat must be in good condition and meet the lender's age and value requirements.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What credit score do I need for a boat loan?</h4>
            <p>While requirements vary by lender, you typically need a credit score of at least 680 to qualify for a boat loan. Borrowers with higher credit scores (740+) will generally receive the best interest rates.</p>
          </div>
          <div>
            <h4 className="font-bold">Can I finance a used boat?</h4>
            <p>Yes, many lenders offer financing for used boats. However, the interest rates may be slightly higher, and the loan term may be shorter depending on the age of the boat.</p>
          </div>
          <div>
            <h4 className="font-bold">Are boat loan interest payments tax-deductible?</h4>
            <p>In some cases, yes. If your boat has sleeping, cooking, and toilet facilities, it may qualify as a second home, and the interest on the loan may be tax-deductible. Consult with a tax professional for more information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
