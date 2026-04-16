import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, Calendar, Percent, TrendingUp } from 'lucide-react';
import { parseInput } from '@/src/lib/calculatorUtils';

export const LoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number | string>(30000);
  const [loanTerm, setLoanTerm] = useState<number | string>(60); // months
  const [interestRate, setInterestRate] = useState<number | string>(5.5);
  
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const amount = parseInput(loanAmount.toString());
    const term = parseInput(loanTerm.toString());
    const rate = parseInput(interestRate.toString());
    
    const r = rate / 100 / 12;
    const n = term;
    
    if (n <= 0) {
      setMonthlyPayment(0);
      setTotalInterest(0);
      setTotalCost(amount);
      return;
    }

    if (r === 0) {
      setMonthlyPayment(amount / n);
      setTotalInterest(0);
      setTotalCost(amount);
    } else {
      const payment = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const total = payment * n;
      const interest = total - amount;
      
      setMonthlyPayment(Number(payment.toFixed(2)));
      setTotalInterest(Number(interest.toFixed(2)));
      setTotalCost(Number(total.toFixed(2)));
    }
  }, [loanAmount, loanTerm, interestRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Loan Calculator | Calculate Monthly Payments & Interest</title>
        <meta name="description" content="Free online loan calculator to estimate monthly payments, total interest, and total cost of any loan. Perfect for personal loans, business loans, and more in 2026." />
      </Helmet>

      <h1>Loan Calculator</h1>
      <p>Estimate your monthly payments and see the total interest you'll pay over the life of your loan. Works for personal loans, car loans, and business financing.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Loan Details</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Loan Amount ($)</label>
              <input 
                type="number" 
                value={loanAmount} 
                onChange={(e) => setLoanAmount(e.target.value)} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Loan Term (Months)</label>
              <input 
                type="number" 
                value={loanTerm} 
                onChange={(e) => setLoanTerm(e.target.value)} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Interest Rate (Annual %)</label>
              <input 
                type="number" 
                step="0.01"
                value={interestRate} 
                onChange={(e) => setInterestRate(e.target.value)} 
                className="input-field" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Payment Summary</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Monthly Payment</div>
                <div className="text-4xl font-bold text-[#0066cc]">${monthlyPayment.toLocaleString()}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-[#f0f7ff] rounded border border-[#0066cc]/10">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1 border-b border-[#0066cc]/10 pb-1">Total Interest</div>
                  <div className="text-lg font-bold text-[#0066cc]">${totalInterest.toLocaleString()}</div>
                </div>
                <div className="p-3 bg-[#f0f7ff] rounded border border-[#0066cc]/10">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1 border-b border-[#0066cc]/10 pb-1">Total Cost</div>
                  <div className="text-lg font-bold text-[#0066cc]">${totalCost.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Your Loan: A Comprehensive Guide</h2>
        <p>
          Taking out a loan is a major financial decision. Whether it's for a new car, a home renovation, or consolidating debt, understanding the true cost of borrowing is essential. Our <strong>loan calculator</strong> helps you break down the numbers so you can make an informed choice in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How Loan Payments Are Calculated</h3>
        <p>
          Most loans use an amortization formula to determine monthly payments. This formula ensures that you pay off the principal and interest over the specified term.
        </p>
        <div className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 my-4">
          Monthly Payment = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
        </div>
        <p>Where:</p>
        <ul>
          <li><strong>P:</strong> Principal loan amount</li>
          <li><strong>r:</strong> Monthly interest rate (Annual rate / 12)</li>
          <li><strong>n:</strong> Total number of payments (Months)</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Factors Influencing Your Loan</h3>
        <ul>
          <li><strong>Interest Rate:</strong> Even a small difference in the interest rate can save you thousands of dollars over the life of the loan.</li>
          <li><strong>Loan Term:</strong> A longer term means lower monthly payments but higher total interest paid. A shorter term saves you money on interest but requires higher monthly payments.</li>
          <li><strong>Down Payment:</strong> Putting more money down upfront reduces the principal amount, which lowers both your monthly payment and total interest.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is an unsecured vs. secured loan?</p>
            <p>A secured loan is backed by collateral (like a car or house), which usually results in a lower interest rate. An unsecured loan (like a personal loan) doesn't require collateral but often has a higher rate.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can I pay off my loan early?</p>
            <p>Most personal loans allow for early repayment without penalty, which can save you a significant amount in interest. Always check your loan agreement for "prepayment penalties."</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How does my credit score affect my loan?</p>
            <p>Lenders use your credit score to determine your "risk level." A higher score typically qualifies you for lower interest rates and better loan terms.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
