import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const MarriageTaxCalculator: React.FC = () => {
  const [income1, setIncome1] = useState<number>(60000);
  const [income2, setIncome2] = useState<number>(40000);
  const [deductions, setDeductions] = useState<number>(29200); // 2024 Standard Deduction for MFJ

  const [singleTax1, setSingleTax1] = useState<number>(0);
  const [singleTax2, setSingleTax2] = useState<number>(0);
  const [marriedTax, setMarriedTax] = useState<number>(0);
  const [penaltyOrBonus, setPenaltyOrBonus] = useState<number>(0);

  // Simplified 2024 Tax Brackets for calculation purposes
  const calculateTax = (taxableIncome: number, isMarried: boolean) => {
    // This is a simplified model of the US federal income tax brackets
    const brackets = isMarried 
      ? [
          { limit: 23200, rate: 0.10 },
          { limit: 94300, rate: 0.12 },
          { limit: 201050, rate: 0.22 },
          { limit: 383900, rate: 0.24 },
          { limit: 487450, rate: 0.32 },
          { limit: 731200, rate: 0.35 },
          { limit: Infinity, rate: 0.37 }
        ]
      : [
          { limit: 11600, rate: 0.10 },
          { limit: 47150, rate: 0.12 },
          { limit: 100525, rate: 0.22 },
          { limit: 191950, rate: 0.24 },
          { limit: 243725, rate: 0.32 },
          { limit: 609350, rate: 0.35 },
          { limit: Infinity, rate: 0.37 }
        ];

    let tax = 0;
    let previousLimit = 0;

    for (const bracket of brackets) {
      if (taxableIncome > bracket.limit) {
        tax += (bracket.limit - previousLimit) * bracket.rate;
        previousLimit = bracket.limit;
      } else {
        tax += (taxableIncome - previousLimit) * bracket.rate;
        break;
      }
    }
    return Math.max(0, tax);
  };

  useEffect(() => {
    // Single Deductions (2024)
    const singleDeduction = 14600;
    
    const tax1 = calculateTax(income1 - singleDeduction, false);
    const tax2 = calculateTax(income2 - singleDeduction, false);
    const mTax = calculateTax(income1 + income2 - deductions, true);

    setSingleTax1(tax1);
    setSingleTax2(tax2);
    setMarriedTax(mTax);
    setPenaltyOrBonus((tax1 + tax2) - mTax);
  }, [income1, income2, deductions]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Marriage Tax Penalty & Bonus Calculator 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online marriage tax calculator. See if getting married will result in a tax penalty or a tax bonus based on your combined incomes." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Marriage Tax Calculator</h1>
        <p className="text-slate-600">
          Determine if getting married will result in a tax penalty or a tax bonus by comparing your combined tax liability as a married couple versus two single individuals.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Income Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Person 1 Annual Income ($)</label>
              <input
                type="number"
                value={income1}
                onChange={(e) => setIncome1(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Person 2 Annual Income ($)</label>
              <input
                type="number"
                value={income2}
                onChange={(e) => setIncome2(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Combined Standard Deduction ($)</label>
              <input
                type="number"
                value={deductions}
                onChange={(e) => setDeductions(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
              <p className="text-[10px] text-slate-500 mt-1">Default is $29,200 (2024 MFJ Standard Deduction)</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Tax Comparison</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Single Tax</p>
                <p className="text-xl font-semibold text-slate-900">${(singleTax1 + singleTax2).toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Married Tax</p>
                <p className="text-xl font-semibold text-slate-900">${marriedTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-1">
                {penaltyOrBonus >= 0 ? "Marriage Tax Bonus (Savings)" : "Marriage Tax Penalty (Cost)"}
              </p>
              <p className={`text-4xl font-bold ${penaltyOrBonus >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${Math.abs(penaltyOrBonus).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This is a simplified model based on 2024 federal tax brackets. It does not include state taxes, credits, or itemized deductions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is the Marriage Tax Penalty and Bonus?</h2>
        <p>
          The "marriage penalty" or "marriage bonus" refers to the change in a couple's total tax liability when they get married and file a joint return, compared to what they would have paid as two single individuals.
        </p>
        
        <h3>How to Use the Marriage Tax Calculator</h3>
        <p>
          To determine your marriage tax outcome, you need to provide:
        </p>
        <ul>
          <li><strong>Annual Income:</strong> The gross annual income for both individuals.</li>
          <li><strong>Deductions:</strong> The standard deduction for a married couple filing jointly (MFJ). For 2024, this is $29,200.</li>
        </ul>

        <h3>Marriage Tax Bonus vs. Penalty</h3>
        <p>
          Whether you receive a bonus or a penalty depends largely on how similar your incomes are:
        </p>
        <ul>
          <li><strong>Marriage Bonus:</strong> Typically occurs when one spouse earns significantly more than the other. By filing jointly, the higher earner's income is "pushed down" into lower tax brackets.</li>
          <li><strong>Marriage Penalty:</strong> Typically occurs when both spouses earn similar, high incomes. Their combined income may push them into a higher tax bracket than they would have faced individually.</li>
        </ul>

        <h3>The Impact of Tax Reform</h3>
        <p>
          The Tax Cuts and Jobs Act (TCJA) of 2017 significantly reduced the marriage penalty for most taxpayers by making the tax brackets for married couples exactly double the brackets for single individuals (except for the highest 37% bracket).
        </p>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">Should we file "Married Filing Separately"?</h4>
            <p>In most cases, "Married Filing Jointly" results in a lower tax liability. However, filing separately may be beneficial in certain situations, such as when one spouse has significant medical expenses or student loan payments based on income.</p>
          </div>
          <div>
            <h4 className="font-bold">Does marriage affect my tax credits?</h4>
            <p>Yes, getting married can affect your eligibility for certain tax credits, such as the Earned Income Tax Credit (EITC) or the Child Tax Credit, as these are based on combined household income.</p>
          </div>
          <div>
            <h4 className="font-bold">What is the "Standard Deduction"?</h4>
            <p>The standard deduction is a fixed dollar amount that reduces the amount of income on which you're taxed. It is significantly higher for married couples filing jointly than for single individuals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
