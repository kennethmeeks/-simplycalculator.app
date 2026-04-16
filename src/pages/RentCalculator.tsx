import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Home, DollarSign, Percent, Calculator, Info } from 'lucide-react';

export const RentCalculator: React.FC = () => {
  const [annualIncome, setAnnualIncome] = useState(60000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [percentage, setPercentage] = useState(30);
  
  const [maxRent, setMaxRent] = useState(0);
  const [maxRentAfterDebt, setMaxRentAfterDebt] = useState(0);

  useEffect(() => {
    const monthlyGross = annualIncome / 12;
    const rent = monthlyGross * (percentage / 100);
    const rentAfterDebt = rent - monthlyDebts;
    
    setMaxRent(Math.round(rent));
    setMaxRentAfterDebt(Math.round(rentAfterDebt > 0 ? rentAfterDebt : 0));
  }, [annualIncome, monthlyDebts, percentage]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Rent Calculator | How Much Rent Can I Afford?</title>
        <meta name="description" content="Free online rent calculator. Estimate your maximum monthly rent based on your annual income and debts in 2026. Use the 30% rule for budgeting." />
      </Helmet>

      <h1>Rent Calculator</h1>
      <p>Find out how much rent you can afford. This calculator uses your annual income and monthly debts to estimate a realistic rent budget.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Income & Debts</div>
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
              <label className="input-label">Rent Percentage (%)</label>
              <input 
                type="number" 
                value={percentage} 
                onChange={(e) => setPercentage(Number(e.target.value))} 
                className="input-field" 
              />
              <p className="text-[10px] text-slate-400 mt-1 italic">Standard rule is 30%.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Rent Budget</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Recommended Max Rent</div>
                <div className="text-4xl font-bold text-[#0066cc]">${maxRent.toLocaleString()}</div>
                <p className="text-[10px] text-slate-400 mt-1 italic text-center">Based on {percentage}% of gross income.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded border border-slate-100">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Rent After Debts</div>
                <div className="text-2xl font-bold text-slate-700">${maxRentAfterDebt.toLocaleString()}</div>
                <p className="text-[10px] text-slate-400 mt-1 italic">A more conservative budget factoring in your monthly bills.</p>
              </div>

              <div className="p-4 bg-emerald-50 rounded border border-emerald-100">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                  <Calculator className="w-4 h-4" />
                  <span>Monthly Gross Income</span>
                </div>
                <div className="text-2xl font-bold text-emerald-600">
                  ${(annualIncome / 12).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How Much Rent Can You Afford? A Guide</h2>
        <p>
          Budgeting for rent is one of the most important financial decisions you'll make. Whether you're moving to a new city or just looking for a new place, our <strong>rent calculator</strong> helps you find a realistic price range in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The 30% Rule</h3>
        <p>
          The 30% rule is a common guideline that suggests you should spend no more than 30% of your gross monthly income on rent. This rule was popularized by the US government in the 1980s and remains a standard benchmark for housing affordability.
        </p>
        <p className="bg-slate-50 p-4 border-l-4 border-[#0066cc] italic">
          <strong>Note:</strong> In high-cost-of-living areas (like NYC or San Francisco), many people spend 40% or even 50% of their income on rent. However, this leaves less money for savings, debt repayment, and other essentials.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Factors That Impact Your Rent Budget</h3>
        <ul>
          <li><strong>Net vs. Gross Income:</strong> While the 30% rule uses gross income (before taxes), it's often wiser to budget based on your net income (take-home pay) to ensure you have enough for other expenses.</li>
          <li><strong>Debt-to-Income Ratio:</strong> If you have significant student loans or credit card debt, you may need to spend less than 30% on rent to stay financially healthy.</li>
          <li><strong>Utilities & Insurance:</strong> Don't forget to factor in electricity, water, internet, and renter's insurance, which can add $100-$300 to your monthly housing costs.</li>
          <li><strong>Lifestyle Choices:</strong> Do you eat out often? Travel? Your personal spending habits will dictate how much you can comfortably spend on rent.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is the "40x Rule"?</p>
            <p>Many landlords in major cities require your annual gross income to be at least 40 times the monthly rent. For example, to rent a $2,000 apartment, you would need to earn at least $80,000 a year.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I save money on rent?</p>
            <p>Consider getting a roommate, moving slightly further from the city center, or negotiating your rent if you're a long-term tenant with a good payment history.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Is renter's insurance worth it?</p>
            <p>Absolutely. It's usually very affordable ($15-$30 a month) and protects your personal belongings in case of fire, theft, or other disasters.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
