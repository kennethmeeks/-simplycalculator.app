import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const AutoLoanCalculator: React.FC = () => {
  const [price, setPrice] = useState(30000);
  const [downPayment, setDownPayment] = useState(5000);
  const [tradeIn, setTradeIn] = useState(0);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(60); // Months

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const principal = price - downPayment - tradeIn;
    const monthlyRate = interestRate / 100 / 12;
    const n = loanTerm;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / n);
      setTotalInterest(0);
      return;
    }

    const x = Math.pow(1 + monthlyRate, n);
    const monthly = (principal * x * monthlyRate) / (x - 1);
    
    setMonthlyPayment(monthly);
    setTotalInterest((monthly * n) - principal);
  }, [price, downPayment, tradeIn, interestRate, loanTerm]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Auto Loan Calculator | Car Payment with Trade-In & Down Payment | simplycalculator.app</title>
        <meta name="description" content="Estimate your monthly car payments with our free auto loan calculator. Factor in trade-in value, down payments, and interest rates for 2026." />
      </Helmet>

      <h1>Auto Loan Calculator</h1>
      <p>Estimate your monthly car payments based on vehicle price, down payment, trade-in value, and interest rate.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Vehicle Price ($)</label>
              <input 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Down Payment ($)</label>
              <input 
                type="number" 
                value={downPayment} 
                onChange={(e) => setDownPayment(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Trade-in Value ($)</label>
              <input 
                type="number" 
                value={tradeIn} 
                onChange={(e) => setTradeIn(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Interest Rate (%)</label>
              <input 
                type="number" 
                step="0.1" 
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Loan Term (Months)</label>
              <select 
                value={loanTerm} 
                onChange={(e) => setLoanTerm(Number(e.target.value))} 
                className="input-field w-full"
              >
                <option value={36}>36 Months</option>
                <option value={48}>48 Months</option>
                <option value={60}>60 Months</option>
                <option value={72}>72 Months</option>
                <option value={84}>84 Months</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Total Interest:</span>
                  <span className="font-bold text-[#0066cc]">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold">Monthly Payment:</span>
                  <span className="text-2xl font-bold text-[#0066cc]">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About Auto Loans</h2>
        <p>
          An auto loan is a secured personal loan used specifically to purchase a vehicle. In 2026, with fluctuating interest rates and vehicle prices, using our <strong>auto loan calculator with trade in and down payment</strong> is essential for budgeting your next car purchase. The vehicle itself serves as collateral, which typically allows for lower interest rates compared to unsecured personal loans.
        </p>
        <p>
          Understanding the total cost of ownership is as important as the monthly payment. While a low monthly payment might seem attractive, a longer loan term can significantly increase the total interest you pay over time. Our tool helps you find the right balance between a manageable monthly cost and a low total interest expense.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Auto Loan Calculator</h3>
        <p>
          To get an accurate estimate of your monthly payments, provide the following information:
        </p>
        <ol>
          <li><strong>Vehicle Price:</strong> The total cost of the car, including any dealer fees or taxes.</li>
          <li><strong>Down Payment:</strong> The amount of cash you're paying upfront. A larger down payment reduces your loan principal.</li>
          <li><strong>Trade-in Value:</strong> The amount the dealer is giving you for your current vehicle. This also reduces the amount you need to borrow.</li>
          <li><strong>Interest Rate:</strong> The annual percentage rate (APR) offered by your lender. This is based on your credit score and current market conditions.</li>
          <li><strong>Loan Term:</strong> The number of months you'll have to pay back the loan (typically 36 to 84 months).</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Auto Loan Formula</h3>
        <p>
          The monthly payment is calculated using the standard amortization formula:
        </p>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm overflow-x-auto">
          M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
        </div>
        <p className="mt-4">Where:</p>
        <ul>
          <li><strong>M:</strong> Monthly payment</li>
          <li><strong>P:</strong> Principal loan amount (Price - Down Payment - Trade-in)</li>
          <li><strong>i:</strong> Monthly interest rate (Annual Rate / 12 / 100)</li>
          <li><strong>n:</strong> Number of months (Loan Term)</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is a good interest rate for a car loan in 2026?</p>
            <p>Interest rates vary based on your credit score, the lender, and whether the car is new or used. Generally, a "good" rate for someone with excellent credit might range from 4% to 6%, while those with lower scores may see rates of 10% or higher.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I choose a longer or shorter loan term?</p>
            <p>A shorter term (e.g., 36 or 48 months) will result in higher monthly payments but lower total interest costs. A longer term (e.g., 72 or 84 months) lowers your monthly payment but significantly increases the total interest you'll pay over the life of the loan.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How does a trade-in affect my loan?</p>
            <p>A trade-in acts like a down payment. It reduces the total amount you need to borrow (the principal), which in turn reduces both your monthly payment and the total interest you'll pay.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the "20/4/10" rule for car buying?</p>
            <p>A common financial guideline is to put at least 20% down, limit the loan term to 4 years (48 months), and ensure that total car-related expenses (payment, insurance, fuel) don't exceed 10% of your gross monthly income.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If you purchase a car for <strong>$35,000</strong>, put <strong>$5,000</strong> down, and have a <strong>$3,000</strong> trade-in, your loan principal is <strong>$27,000</strong>. With a <strong>5% interest rate</strong> over <strong>60 months</strong>, your monthly payment would be approximately <strong>$509.53</strong>, and you'd pay about <strong>$3,571</strong> in total interest.
        </p>
      </div>
    </div>
  );
};
