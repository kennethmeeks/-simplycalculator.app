import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Home, DollarSign, Percent, Calculator, Info } from 'lucide-react';

export const HouseAffordabilityCalculator: React.FC = () => {
  const [annualIncome, setAnnualIncome] = useState(100000);
  const [monthlyDebts, setMonthlyDebts] = useState(5000);
  const [downPayment, setDownPayment] = useState(20000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.2);
  const [insuranceRate, setInsuranceRate] = useState(0.5);

  const [maxHousePrice, setMaxHousePrice] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [debtToIncome, setDebtToIncome] = useState(0);

  useEffect(() => {
    const monthlyGrossIncome = annualIncome / 12;
    // Standard DTI limit is often 36% to 43%
    const maxMonthlyPI = (monthlyGrossIncome * 0.36) - monthlyDebts;
    
    if (maxMonthlyPI > 0) {
      const r = interestRate / 100 / 12;
      const n = loanTerm * 12;
      
      // Monthly P&I = L * [r(1+r)^n] / [(1+r)^n - 1]
      // L = P&I / ([r(1+r)^n] / [(1+r)^n - 1])
      const factor = (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const loanAmount = maxMonthlyPI / factor;
      
      const price = loanAmount + downPayment;
      setMaxHousePrice(Math.round(price));
      setMonthlyPayment(Math.round(maxMonthlyPI));
      setDebtToIncome(Number(((monthlyDebts / monthlyGrossIncome) * 100).toFixed(1)));
    } else {
      setMaxHousePrice(0);
      setMonthlyPayment(0);
    }
  }, [annualIncome, monthlyDebts, downPayment, interestRate, loanTerm, propertyTaxRate, insuranceRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>House Affordability Calculator | How Much House Can I Afford?</title>
        <meta name="description" content="Free online house affordability calculator. Estimate your maximum home price based on income, debts, and down payment in 2026." />
      </Helmet>

      <h1>House Affordability Calculator</h1>
      <p>Find out how much home you can afford. This calculator uses your income, monthly debts, and down payment to estimate a realistic home price.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Financial Profile</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Annual Gross Income ($)</label>
              <input 
                type="number" 
                value={annualIncome} 
                onChange={(e) => setAnnualIncome(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Monthly Debt Payments ($)</label>
              <input 
                type="number" 
                value={monthlyDebts} 
                onChange={(e) => setMonthlyDebts(Number(e.target.value))} 
                className="input-field" 
              />
              <p className="text-[10px] text-slate-400 mt-1 italic">Include car loans, student loans, credit cards, etc.</p>
            </div>
            <div>
              <label className="input-label">Down Payment ($)</label>
              <input 
                type="number" 
                value={downPayment} 
                onChange={(e) => setDownPayment(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="input-label">Interest Rate (%)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={interestRate} 
                  onChange={(e) => setInterestRate(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Loan Term (Years)</label>
                <select 
                  value={loanTerm} 
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="input-field"
                >
                  <option value={30}>30 Years</option>
                  <option value={15}>15 Years</option>
                  <option value={20}>20 Years</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Affordability Result</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Estimated Home Price</div>
                <div className="text-4xl font-bold text-[#0066cc]">${maxHousePrice.toLocaleString()}</div>
              </div>

              <div className="p-4 bg-slate-50 rounded border border-slate-100">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Estimated Monthly P&I</div>
                <div className="text-2xl font-bold text-slate-700">${monthlyPayment.toLocaleString()}</div>
                <p className="text-[10px] text-slate-400 mt-1 italic">Principal and Interest only.</p>
              </div>

              <div className="p-4 bg-emerald-50 rounded border border-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                  <Calculator className="w-4 h-4" />
                  <span>Debt-to-Income Ratio</span>
                </div>
                <div className="text-2xl font-bold text-emerald-600">
                  {debtToIncome}%
                </div>
                <p className="text-[10px] text-emerald-600/70 mt-1 italic">Lenders typically prefer a DTI below 36% to 43%.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How Much House Can You Afford? A Guide</h2>
        <p>
          Buying a home is one of the most significant financial decisions you'll ever make. Understanding your budget before you start house hunting is essential. Our <strong>house affordability calculator</strong> helps you find a realistic price range in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The 28/36 Rule</h3>
        <p>
          Lenders often use the 28/36 rule to determine how much they'll lend you:
        </p>
        <ul>
          <li><strong>28%:</strong> Your total monthly housing payment (PITI: Principal, Interest, Taxes, Insurance) should not exceed 28% of your gross monthly income.</li>
          <li><strong>36%:</strong> Your total monthly debt payments (including your new mortgage) should not exceed 36% of your gross monthly income.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Factors That Impact Affordability</h3>
        <ul>
          <li><strong>Interest Rates:</strong> Even a 1% difference in interest rates can change your buying power by tens of thousands of dollars.</li>
          <li><strong>Down Payment:</strong> A larger down payment reduces your loan amount and monthly payment, and can help you avoid Private Mortgage Insurance (PMI).</li>
          <li><strong>Property Taxes & Insurance:</strong> These vary significantly by location and can add hundreds of dollars to your monthly payment.</li>
          <li><strong>Credit Score:</strong> A higher credit score qualifies you for lower interest rates, increasing your overall affordability.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is PMI?</p>
            <p>Private Mortgage Insurance (PMI) is usually required if your down payment is less than 20%. It protects the lender if you default on the loan.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I buy at my maximum affordability?</p>
            <p>Not necessarily. It's often wise to buy a home that costs less than your maximum to ensure you have a "buffer" for maintenance, repairs, and other life expenses.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I improve my affordability?</p>
            <p>Pay down existing debts, save for a larger down payment, and work on improving your credit score to secure a better interest rate.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
