import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { DollarSign, Calculator, Info, PieChart } from 'lucide-react';

export const TaxBracketCalculator: React.FC = () => {
  const [taxableIncome, setTaxableIncome] = useState<number>(75000);
  const [filingStatus, setFilingStatus] = useState<string>('single');
  const [totalTax, setTotalTax] = useState<number>(0);
  const [effectiveRate, setEffectiveRate] = useState<number>(0);
  const [marginalRate, setMarginalRate] = useState<number>(0);

  const brackets = {
    single: [
      { rate: 0.10, min: 0, max: 11000 },
      { rate: 0.12, min: 11000, max: 44725 },
      { rate: 0.22, min: 44725, max: 95375 },
      { rate: 0.24, min: 95375, max: 182100 },
      { rate: 0.32, min: 182100, max: 231250 },
      { rate: 0.35, min: 231250, max: 578125 },
      { rate: 0.37, min: 578125, max: Infinity },
    ],
    married: [
      { rate: 0.10, min: 0, max: 22000 },
      { rate: 0.12, min: 22000, max: 89450 },
      { rate: 0.22, min: 89450, max: 190750 },
      { rate: 0.24, min: 190750, max: 364200 },
      { rate: 0.32, min: 364200, max: 462500 },
      { rate: 0.35, min: 462500, max: 693750 },
      { rate: 0.37, min: 693750, max: Infinity },
    ]
  };

  useEffect(() => {
    const currentBrackets = filingStatus === 'single' ? brackets.single : brackets.married;
    let tax = 0;
    let marginal = 0;

    for (const bracket of currentBrackets) {
      if (taxableIncome > bracket.min) {
        const taxableInBracket = Math.min(taxableIncome, bracket.max) - bracket.min;
        tax += taxableInBracket * bracket.rate;
        marginal = bracket.rate * 100;
      } else {
        break;
      }
    }

    setTotalTax(Number(tax.toFixed(2)));
    setMarginalRate(marginal);
    setEffectiveRate(taxableIncome > 0 ? Number(((tax / taxableIncome) * 100).toFixed(2)) : 0);
  }, [taxableIncome, filingStatus]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Tax Bracket Calculator | Federal Income Tax Brackets 2026</title>
        <meta name="description" content="Free online tax bracket calculator. See your marginal and effective tax rates based on your taxable income for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Tax Bracket Calculator</h1>
        <p className="text-slate-600">Understand how your income is taxed across different federal tax brackets.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="input-label">Taxable Income ($)</label>
                <input 
                  type="number" 
                  value={taxableIncome} 
                  onChange={(e) => setTaxableIncome(Math.max(0, Number(e.target.value)))} 
                  className="input-field text-xl font-bold" 
                />
                <p className="text-xs text-slate-500 mt-1">Your gross income minus deductions (like the standard deduction).</p>
              </div>
              <div>
                <label className="input-label">Filing Status</label>
                <select 
                  value={filingStatus} 
                  onChange={(e) => setFilingStatus(e.target.value)}
                  className="input-field"
                >
                  <option value="single">Single</option>
                  <option value="married">Married Filing Jointly</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              How Progressive Taxation Works
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              The U.S. uses a progressive tax system. This means you don't pay the same rate on all your income. Instead, your income is divided into "buckets" (brackets), and each bucket is taxed at a different rate.
            </p>
            <div className="space-y-2">
              {(filingStatus === 'single' ? brackets.single : brackets.married).map((b, i) => (
                <div key={i} className={`flex justify-between p-2 rounded text-sm ${taxableIncome > b.min ? 'bg-blue-50 border-l-4 border-blue-500' : 'text-slate-400'}`}>
                  <span>{b.rate * 100}% Rate</span>
                  <span>
                    ${b.min.toLocaleString()} - {b.max === Infinity ? 'Over' : `$${b.max.toLocaleString()}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-[#f0f7ff] border border-[#0066cc]/20 text-[#0066cc]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0066cc]">
              <PieChart className="w-5 h-5" />
              Tax Summary
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-[#0066cc]/10">
                <div className="text-4xl font-bold mb-1 text-[#0066cc]">${totalTax.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Federal Tax</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center py-4">
                <div>
                  <div className="text-xl font-bold text-[#0066cc]">{marginalRate}%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Marginal Rate</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#0066cc]">{effectiveRate}%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Effective Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Tax Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your <strong>effective tax rate</strong> is the actual percentage of your total income that goes to taxes. It's always lower than your <strong>marginal tax rate</strong> (the rate on your last dollar earned).
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Tax Brackets</h2>
        <p>
          A <strong>tax bracket</strong> refers to the range of incomes that are taxed at a particular rate. In a progressive tax system, as your income increases, you move into higher tax brackets, but only the income within that specific range is taxed at the higher rate.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Marginal vs. Effective Tax Rate</h3>
        <p>
          It's common to confuse these two terms, but they represent very different things:
        </p>
        <ul>
          <li><strong>Marginal Tax Rate:</strong> This is the tax rate applied to the very last dollar you earned. If you are in the 24% bracket, it means any *additional* dollar you earn will be taxed at 24%.</li>
          <li><strong>Effective Tax Rate:</strong> This is the actual percentage of your total income paid in taxes. It's calculated by dividing your total tax bill by your total taxable income.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Lower Your Tax Bracket</h3>
        <p>
          You can effectively lower your tax bill by reducing your taxable income through deductions and credits:
        </p>
        <ul>
          <li><strong>Standard Deduction:</strong> A flat amount that reduces your taxable income. For 2026, it's estimated at $15,000 for singles and $30,000 for married couples.</li>
          <li><strong>Itemized Deductions:</strong> If your specific expenses (like mortgage interest, medical bills, and charity) exceed the standard deduction, you can itemize them.</li>
          <li><strong>401(k) and IRA Contributions:</strong> Traditional retirement contributions are deducted from your gross income before taxes are calculated.</li>
          <li><strong>HSA Contributions:</strong> Health Savings Account contributions are triple-tax advantaged and lower your taxable income.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">Will a raise put me in a higher bracket and lower my take-home pay?</p>
            <p>No. This is a common myth. Only the money *above* the bracket threshold is taxed at the higher rate. You will always take home more money after a raise, even if you move into a higher bracket.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the highest tax bracket in the US?</p>
            <p>The highest federal income tax bracket is currently 37% for individuals earning over $600,000 and married couples earning over $700,000.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
