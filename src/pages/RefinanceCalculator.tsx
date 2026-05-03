import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const RefinanceCalculator: React.FC = () => {
  const [currentBalance, setCurrentBalance] = useState<number>(250000);
  const [currentRate, setCurrentRate] = useState<number>(6.5);
  const [currentTerm, setCurrentTerm] = useState<number>(25);
  const [newRate, setNewRate] = useState<number>(5.5);
  const [newTerm, setNewTerm] = useState<number>(30);
  const [closingCosts, setClosingCosts] = useState<number>(5000);

  const [currentPayment, setCurrentPayment] = useState<number>(0);
  const [newPayment, setNewPayment] = useState<number>(0);
  const [monthlySavings, setMonthlySavings] = useState<number>(0);
  const [breakEvenMonths, setBreakEvenMonths] = useState<number>(0);
  const [totalInterestSavings, setTotalInterestSavings] = useState<number>(0);

  useEffect(() => {
    const calculatePayment = (principal: number, annualRate: number, years: number) => {
      const monthlyRate = annualRate / 100 / 12;
      const numberOfPayments = years * 12;
      if (monthlyRate === 0) return principal / numberOfPayments;
      return principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    };

    const currPay = calculatePayment(currentBalance, currentRate, currentTerm);
    const nPay = calculatePayment(currentBalance, newRate, newTerm);
    
    const savings = currPay - nPay;
    const breakEven = savings > 0 ? closingCosts / savings : 0;
    
    const currentTotalInterest = (currPay * currentTerm * 12) - currentBalance;
    const newTotalInterest = (nPay * newTerm * 12) - currentBalance;
    const interestSavings = currentTotalInterest - newTotalInterest;

    setCurrentPayment(currPay);
    setNewPayment(nPay);
    setMonthlySavings(savings);
    setBreakEvenMonths(breakEven);
    setTotalInterestSavings(interestSavings);
  }, [currentBalance, currentRate, currentTerm, newRate, newTerm, closingCosts]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Refinance Calculator [Instant Results]</title>
        <meta name="description" content="Free online mortgage refinance calculator. See if refinancing your mortgage makes sense by calculating monthly savings and break-even point." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Refinance Calculator</h1>
        <p className="text-slate-600">
          Determine if refinancing your mortgage or loan is a smart financial move by comparing your current loan with a new one.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Loan Comparison</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Current Loan Balance ($)</label>
              <input
                type="number"
                value={currentBalance}
                onChange={(e) => setCurrentBalance(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Rate (%)</label>
                <input
                  type="number"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Term (Yrs)</label>
                <input
                  type="number"
                  value={currentTerm}
                  onChange={(e) => setCurrentTerm(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">New Rate (%)</label>
                <input
                  type="number"
                  value={newRate}
                  onChange={(e) => setNewRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">New Term (Yrs)</label>
                <input
                  type="number"
                  value={newTerm}
                  onChange={(e) => setNewTerm(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Closing Costs ($)</label>
              <input
                type="number"
                value={closingCosts}
                onChange={(e) => setClosingCosts(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Refinance Summary</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Current Payment</p>
                <p className="text-xl font-semibold text-slate-900">${currentPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">New Payment</p>
                <p className="text-xl font-semibold text-slate-900">${newPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-1">Monthly Savings</p>
              <p className={`text-4xl font-bold ${monthlySavings > 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${monthlySavings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Break-Even Point</p>
              <p className="text-2xl font-semibold text-slate-900">
                {breakEvenMonths > 0 ? `${breakEvenMonths.toFixed(1)} Months` : 'N/A'}
              </p>
              <p className="text-xs text-slate-500 mt-1">Time to recover closing costs through monthly savings.</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Interest Savings</p>
              <p className="text-2xl font-semibold text-slate-900">${totalInterestSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>Should You Refinance Your Mortgage?</h2>
        <p>
          Refinancing your mortgage means replacing your current loan with a new one, typically with different terms. The most common reasons to refinance are to lower your interest rate, reduce your monthly payment, or change the length of your loan.
        </p>
        
        <h3>How to Use the Refinance Calculator</h3>
        <p>
          To determine if refinancing is right for you, you need to provide:
        </p>
        <ul>
          <li><strong>Current Loan Balance:</strong> The amount you still owe on your current mortgage.</li>
          <li><strong>Current Interest Rate:</strong> The interest rate you are currently paying.</li>
          <li><strong>New Interest Rate:</strong> The interest rate offered for the new mortgage.</li>
          <li><strong>New Loan Term:</strong> The length of the new mortgage (e.g., 15 or 30 years).</li>
          <li><strong>Closing Costs:</strong> The fees associated with getting the new mortgage, such as appraisal fees, title insurance, and origination fees.</li>
        </ul>

        <h3>The Break-Even Point</h3>
        <p>
          The break-even point is the most important metric when considering a refinance. it's the number of months it will take for your monthly savings to cover the upfront closing costs. If you plan to stay in your home longer than the break-even point, refinancing usually makes sense.
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
          Break-Even Months = Closing Costs / Monthly Savings
        </div>

        <h3>When to Refinance</h3>
        <p>
          Refinancing is typically a good idea if:
        </p>
        <ul>
          <li><strong>Interest Rates Have Dropped:</strong> Even a 1% drop in interest rates can save you thousands of dollars over the life of your loan.</li>
          <li><strong>Your Credit Score Has Improved:</strong> A higher credit score can help you qualify for a much lower interest rate.</li>
          <li><strong>You Want to Change Your Loan Term:</strong> Switching from a 30-year to a 15-year mortgage can save you a massive amount in interest, though your monthly payment will likely increase.</li>
          <li><strong>You Want to Switch from an ARM to a Fixed-Rate Mortgage:</strong> This can provide peace of mind by locking in a stable interest rate.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is a "Cash-Out" Refinance?</h4>
            <p>A cash-out refinance allows you to take out a new mortgage for more than you owe on your current one and receive the difference in cash. This is often used for home improvements or debt consolidation.</p>
          </div>
          <div>
            <h4 className="font-bold">How much are typical closing costs?</h4>
            <p>Closing costs for a refinance typically range from 2% to 5% of the loan amount. For a $250,000 mortgage, this could be anywhere from $5,000 to $12,500.</p>
          </div>
          <div>
            <h4 className="font-bold">Can I refinance with no closing costs?</h4>
            <p>Some lenders offer "no-closing-cost" refinances, but this usually means the costs are either rolled into the loan balance or the lender charges a higher interest rate to cover the fees.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
