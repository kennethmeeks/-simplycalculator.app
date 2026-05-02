import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { DollarSign, Calculator, Info, Briefcase } from 'lucide-react';

export const TakeHomePayCalculator: React.FC = () => {
  const [annualSalary, setAnnualSalary] = useState<number>(60000);
  const [filingStatus, setFilingStatus] = useState<string>('single');
  const [state, setState] = useState<string>('CA');
  const [allowances, setAllowances] = useState<number>(0);
  const [monthlyNet, setMonthlyNet] = useState<number>(0);
  const [annualNet, setAnnualNet] = useState<number>(0);
  const [totalTaxes, setTotalTaxes] = useState<number>(0);

  // Simplified tax calculation for 2026 estimation
  useEffect(() => {
    // Federal Tax Estimation (Simplified brackets)
    let federalTax = 0;
    if (annualSalary <= 11000) federalTax = annualSalary * 0.10;
    else if (annualSalary <= 44725) federalTax = 1100 + (annualSalary - 11000) * 0.12;
    else if (annualSalary <= 95375) federalTax = 5147 + (annualSalary - 44725) * 0.22;
    else federalTax = 16290 + (annualSalary - 95375) * 0.24;

    // FICA (Social Security + Medicare)
    const ficaTax = annualSalary * 0.0765;

    // State Tax Estimation (Simplified)
    const stateTax = annualSalary * 0.05; // Average 5% for estimation

    const totalTax = federalTax + ficaTax + stateTax;
    const net = annualSalary - totalTax;

    setAnnualNet(Number(net.toFixed(2)));
    setMonthlyNet(Number((net / 12).toFixed(2)));
    setTotalTaxes(Number(totalTax.toFixed(2)));
  }, [annualSalary, filingStatus, state, allowances]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Take Home Pay Calculator [Free & No Sign-up]</title>
        <meta name="description" content="Free online take home pay calculator. Estimate your annual and monthly net salary after federal and state taxes." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Take Home Pay Calculator</h1>
        <p className="text-slate-600">Estimate your actual take-home pay after federal, state, and FICA taxes.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Annual Salary ($)</label>
                <input 
                  type="number" 
                  value={annualSalary} 
                  onChange={(e) => setAnnualSalary(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
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
                  <option value="head">Head of Household</option>
                </select>
              </div>
              <div>
                <label className="input-label">State</label>
                <select 
                  value={state} 
                  onChange={(e) => setState(e.target.value)}
                  className="input-field"
                >
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                  <option value="TX">Texas (No State Tax)</option>
                  <option value="FL">Florida (No State Tax)</option>
                  <option value="IL">Illinois</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="OH">Ohio</option>
                  <option value="GA">Georgia</option>
                  <option value="NC">North Carolina</option>
                  <option value="MI">Michigan</option>
                </select>
              </div>
              <div>
                <label className="input-label">Allowances / Exemptions</label>
                <input 
                  type="number" 
                  value={allowances} 
                  onChange={(e) => setAllowances(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Tax Breakdown
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Federal Income Tax:</strong> Progressive tax based on your income bracket.</li>
              <li><strong>FICA:</strong> Social Security (6.2%) and Medicare (1.45%).</li>
              <li><strong>State Income Tax:</strong> Varies significantly by state (0% to 13.3%).</li>
              <li><strong>Net Salary:</strong> The amount you actually receive in your bank account.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-[#f0f7ff] border border-[#0066cc]/20 text-[#0066cc]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0066cc]">
              <DollarSign className="w-5 h-5" />
              Net Pay Summary
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-[#0066cc]/10">
                <div className="text-4xl font-bold mb-1 text-[#0066cc]">${monthlyNet.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Monthly Take-Home</div>
              </div>
              <div className="text-center py-4">
                <div className="text-2xl font-bold text-[#0066cc]">${annualNet.toLocaleString()}</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Annual Take-Home</div>
              </div>
              <div className="text-center py-4 border-t border-[#0066cc]/10">
                <div className="text-xl font-bold text-[#0066cc]">${totalTaxes.toLocaleString()}</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Total Estimated Taxes</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Salary Tips
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Negotiate your salary based on net pay if possible, but remember that employer benefits like health insurance and 401k matching are also part of your total compensation package.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Calculate Take Home Pay</h2>
        <p>
          Calculating your <strong>take home pay</strong> involves subtracting all federal, state, and local taxes, as well as any other deductions, from your gross salary.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Calculation Process</h3>
        <p>
          To get an accurate estimate, follow these steps:
        </p>
        <ol>
          <li><strong>Gross Income:</strong> Start with your total annual salary or hourly rate.</li>
          <li><strong>Federal Taxes:</strong> Subtract federal income tax based on your filing status and tax bracket.</li>
          <li><strong>FICA Taxes:</strong> Subtract 7.65% for Social Security and Medicare.</li>
          <li><strong>State Taxes:</strong> Subtract state income tax if applicable.</li>
          <li><strong>Other Deductions:</strong> Subtract health insurance, 401k, and other pre-tax or post-tax deductions.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Your Take Home Pay Varies</h3>
        <p>
          Even with the same salary, two people can have different take-home pay due to:
        </p>
        <ul>
          <li><strong>Filing Status:</strong> Married couples often pay less tax than single filers.</li>
          <li><strong>State of Residence:</strong> States like Texas and Florida have no state income tax, while California and New York have high rates.</li>
          <li><strong>Benefit Choices:</strong> Choosing a more expensive health plan or contributing more to retirement will lower your net pay.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">What is the 50/30/20 rule?</p>
            <p>It's a budgeting rule that suggests spending 50% of your take-home pay on needs, 30% on wants, and 20% on savings and debt repayment.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How can I increase my take-home pay without a raise?</p>
            <p>You can adjust your tax withholding on your W-4 form, or contribute to pre-tax accounts like an HSA to lower your taxable income.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
