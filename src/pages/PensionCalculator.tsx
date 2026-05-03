import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const PensionCalculator: React.FC = () => {
  const [currentSalary, setCurrentSalary] = useState<number>(75000);
  const [yearsOfService, setYearsOfService] = useState<number>(25);
  const [multiplier, setMultiplier] = useState<number>(2);
  const [retirementAge, setRetirementAge] = useState<number>(65);

  const [annualPension, setAnnualPension] = useState<number>(0);
  const [monthlyPension, setMonthlyPension] = useState<number>(0);
  const [replacementRatio, setReplacementRatio] = useState<number>(0);

  useEffect(() => {
    // Pension Formula: Salary * Years of Service * Multiplier
    const annual = currentSalary * yearsOfService * (multiplier / 100);
    
    setAnnualPension(annual);
    setMonthlyPension(annual / 12);
    setReplacementRatio((annual / currentSalary) * 100);
  }, [currentSalary, yearsOfService, multiplier]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Pension Calculator [Updated for 2026]</title>
        <meta name="description" content="Free online pension calculator. Estimate your future pension income based on your salary, years of service, and your employer's pension multiplier." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Pension Calculator</h1>
        <p className="text-slate-600">
          Estimate your future pension income by accounting for your current salary, years of service, and your employer's pension multiplier.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Pension Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Current Annual Salary ($)</label>
              <input
                type="number"
                value={currentSalary}
                onChange={(e) => setCurrentSalary(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Expected Years of Service</label>
              <input
                type="number"
                value={yearsOfService}
                onChange={(e) => setYearsOfService(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Pension Multiplier (%)</label>
              <input
                type="number"
                step="0.1"
                value={multiplier}
                onChange={(e) => setMultiplier(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
              <p className="text-[10px] text-slate-500 mt-1">Commonly between 1.5% and 2.5%</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Retirement Age</label>
              <input
                type="number"
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Pension Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Annual Pension</p>
              <p className="text-4xl font-bold text-[#0066cc]">${annualPension.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Monthly Pension</p>
              <p className="text-2xl font-semibold text-slate-900">${monthlyPension.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Income Replacement Ratio</p>
              <p className="text-2xl font-semibold text-slate-900">{replacementRatio.toFixed(1)}%</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation provides an estimate. Your actual pension may be based on your average salary over several years.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a Defined Benefit Pension?</h2>
        <p>
          A defined benefit pension is a type of retirement plan where an employer promises a specified monthly benefit on retirement that is predetermined by a formula based on the employee's earnings history, tenure of service, and age.
        </p>
        
        <h3>How to Use the Pension Calculator</h3>
        <p>
          To estimate your future pension income, you need to provide:
        </p>
        <ul>
          <li><strong>Current Annual Salary:</strong> Your current gross annual salary.</li>
          <li><strong>Expected Years of Service:</strong> The total number of years you expect to work for your employer.</li>
          <li><strong>Pension Multiplier:</strong> The percentage of your salary you earn for each year of service. This is usually set by your employer's pension plan.</li>
          <li><strong>Retirement Age:</strong> The age at which you plan to retire and start receiving your pension.</li>
        </ul>

        <h3>The Pension Formula</h3>
        <p>
          The standard formula for a defined benefit pension is:
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
          Annual Pension = Final Average Salary * Years of Service * Multiplier
        </div>

        <h3>Why Pensions are Valuable</h3>
        <p>
          Pensions are a valuable part of a retirement plan because they offer:
        </p>
        <ul>
          <li><strong>Guaranteed Income:</strong> Your pension benefit is fixed for life, providing a stable source of income in retirement.</li>
          <li><strong>Employer Contributions:</strong> Your employer is responsible for funding the pension plan and ensuring there are enough assets to pay the promised benefits.</li>
          <li><strong>Survivor Benefits:</strong> Many pension plans offer survivor benefits, which provide a portion of your pension to your spouse or other beneficiary after you die.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is "Vesting"?</h4>
            <p>Vesting is the process by which an employee earns the right to receive a pension benefit. Most pension plans require an employee to work for a certain number of years (usually 5 to 10) before they are "fully vested" in the plan.</p>
          </div>
          <div>
            <h4 className="font-bold">What is a "Final Average Salary"?</h4>
            <p>Most pension plans use your average salary over your final few years of employment (e.g., your highest 3 or 5 years) to calculate your pension benefit.</p>
          </div>
          <div>
            <h4 className="font-bold">Can I take my pension as a lump sum?</h4>
            <p>Some pension plans allow you to take your benefit as a single lump-sum payment instead of a monthly annuity. This can provide more flexibility but also carries more risk, as you are responsible for managing the money yourself.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
