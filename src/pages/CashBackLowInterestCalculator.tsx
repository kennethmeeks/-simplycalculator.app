import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const CashBackLowInterestCalculator: React.FC = () => {
  const [purchasePrice, setPurchasePrice] = useState<number>(30000);
  const [loanTerm, setLoanTerm] = useState<number>(60);
  
  const [cashBackAmount, setCashBackAmount] = useState<number>(3000);
  const [cashBackRate, setCashBackRate] = useState<number>(6);
  
  const [lowInterestRate, setLowInterestRate] = useState<number>(0.9);

  const [cashBackMonthly, setCashBackMonthly] = useState<number>(0);
  const [cashBackTotal, setCashBackTotal] = useState<number>(0);
  
  const [lowInterestMonthly, setLowInterestMonthly] = useState<number>(0);
  const [lowInterestTotal, setLowInterestTotal] = useState<number>(0);

  useEffect(() => {
    const n = loanTerm;
    
    // Cash Back Option
    const r1 = cashBackRate / 100 / 12;
    const p1 = purchasePrice - cashBackAmount;
    const m1 = r1 > 0 ? p1 * (r1 * Math.pow(1 + r1, n)) / (Math.pow(1 + r1, n) - 1) : p1 / n;
    setCashBackMonthly(m1);
    setCashBackTotal(m1 * n);

    // Low Interest Option
    const r2 = lowInterestRate / 100 / 12;
    const p2 = purchasePrice;
    const m2 = r2 > 0 ? p2 * (r2 * Math.pow(1 + r2, n)) / (Math.pow(1 + r2, n) - 1) : p2 / n;
    setLowInterestMonthly(m2);
    setLowInterestTotal(m2 * n);
  }, [purchasePrice, loanTerm, cashBackAmount, cashBackRate, lowInterestRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Cash Back vs Low Interest Calculator | Compare Auto Financing 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online cash back vs low interest calculator. Compare auto financing options to see whether a cash back rebate or a low interest rate is the better deal." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Cash Back vs Low Interest Calculator</h1>
        <p className="text-slate-600">
          Compare auto financing options to see whether a cash back rebate or a low interest rate is the better deal for your new vehicle purchase.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6 text-slate-900">Purchase Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Purchase Price ($)</label>
              <input
                type="number"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(Number(e.target.value))}
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
            
            <div className="pt-4 border-t border-slate-100">
              <h3 className="font-semibold mb-3 text-blue-600">Option 1: Cash Back</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Cash Back ($)</label>
                  <input
                    type="number"
                    value={cashBackAmount}
                    onChange={(e) => setCashBackAmount(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Interest Rate (%)</label>
                  <input
                    type="number"
                    value={cashBackRate}
                    onChange={(e) => setCashBackRate(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="font-semibold mb-3 text-green-600">Option 2: Low Interest</h3>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Low Interest Rate (%)</label>
                <input
                  type="number"
                  value={lowInterestRate}
                  onChange={(e) => setLowInterestRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-fit sticky top-8">
          <h2 className="text-xl font-semibold mb-6">Comparison Summary</h2>
          <div className="space-y-8">
            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">Option 1: Cash Back</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Monthly Payment</p>
                  <p className="text-xl font-bold text-slate-900">${cashBackMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Total Cost</p>
                  <p className="text-xl font-bold text-slate-900">${cashBackTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wider">Option 2: Low Interest</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Monthly Payment</p>
                  <p className="text-xl font-bold text-slate-900">${lowInterestMonthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Total Cost</p>
                  <p className="text-xl font-bold text-slate-900">${lowInterestTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <div className={`p-4 rounded-lg text-center ${cashBackTotal < lowInterestTotal ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                <p className="text-sm font-medium uppercase tracking-wider mb-1">The Better Deal</p>
                <p className="text-2xl font-bold">
                  {cashBackTotal < lowInterestTotal ? 'Option 1: Cash Back' : 'Option 2: Low Interest'}
                </p>
                <p className="text-sm mt-1">
                  Saves you <strong>${Math.abs(cashBackTotal - lowInterestTotal).toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong> in total cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>Cash Back vs. Low Interest: Which is Better?</h2>
        <p>
          When buying a new car, dealerships often offer a choice between a cash back rebate and a low interest rate (sometimes as low as 0%). While both options can save you money, one is usually a better deal than the other depending on the purchase price, the loan term, and the interest rates available.
        </p>
        
        <h3>How to Use the Cash Back vs. Low Interest Calculator</h3>
        <p>
          To compare your auto financing options, you need to provide:
        </p>
        <ul>
          <li><strong>Purchase Price:</strong> The total price of the vehicle before any rebates or financing.</li>
          <li><strong>Loan Term:</strong> The number of months you plan to take to pay off the loan.</li>
          <li><strong>Cash Back Option:</strong> The amount of the cash back rebate and the interest rate you would pay if you took the rebate.</li>
          <li><strong>Low Interest Option:</strong> The low interest rate offered by the dealership.</li>
        </ul>

        <h3>Factors to Consider</h3>
        <p>
          When choosing between cash back and low interest, keep these factors in mind:
        </p>
        <ul>
          <li><strong>Loan Amount:</strong> A larger loan amount usually makes the low interest rate option more attractive.</li>
          <li><strong>Loan Term:</strong> A longer loan term also makes the low interest rate option more attractive, as you'll save more on interest over time.</li>
          <li><strong>Interest Rate Difference:</strong> The larger the difference between the market interest rate and the low interest rate, the better the low interest option becomes.</li>
          <li><strong>Cash Flow:</strong> A cash back rebate can be used as a down payment, which can lower your monthly payment and improve your cash flow.</li>
        </ul>

        <h3>Tips for Getting the Best Deal</h3>
        <p>
          To get the best deal on your new car financing:
        </p>
        <ul>
          <li><strong>Shop Around:</strong> Compare the dealership's financing offers with those from banks and credit unions.</li>
          <li><strong>Check Your Credit Score:</strong> A higher credit score can help you qualify for the lowest interest rates.</li>
          <li><strong>Negotiate the Price:</strong> Always negotiate the purchase price of the vehicle BEFORE discussing financing options.</li>
          <li><strong>Read the Fine Print:</strong> Be sure to understand all the terms and conditions of any financing offer.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">Can I get both cash back and a low interest rate?</h4>
            <p>Typically, you must choose one or the other. However, some dealerships may offer a smaller rebate in combination with a slightly lower interest rate.</p>
          </div>
          <div>
            <h4 className="font-bold">What is a "Manufacturer Rebate"?</h4>
            <p>A manufacturer rebate is a cash incentive offered by the car manufacturer to encourage sales. This is the same as the "cash back" option in this calculator.</p>
          </div>
          <div>
            <h4 className="font-bold">How does a down payment affect the comparison?</h4>
            <p>A larger down payment reduces the loan amount, which can make the cash back option more attractive since you'll be paying interest on a smaller balance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
