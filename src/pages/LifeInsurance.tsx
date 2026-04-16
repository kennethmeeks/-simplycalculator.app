import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

import { Calculator as CalcIcon, Info, ShieldCheck, Heart, Home, GraduationCap, AlertCircle } from 'lucide-react';

export const LifeInsuranceCalculator: React.FC = () => {
  const [debt, setDebt] = useState<number>(0);
  const [funeral, setFuneral] = useState<number>(15000);
  const [income, setIncome] = useState<number>(50000);
  const [years, setYears] = useState<number>(10);
  const [mortgage, setMortgage] = useState<number>(250000);
  const [education, setEducation] = useState<number>(100000);
  const [assets, setAssets] = useState<number>(50000);

  const [totalNeeded, setTotalNeeded] = useState<number>(0);

  useEffect(() => {
    const needed = debt + funeral + (income * years) + mortgage + education - assets;
    setTotalNeeded(Math.max(0, needed));
  }, [debt, funeral, income, years, mortgage, education, assets]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Helmet>
        <title>Life Insurance Calculator 2026 | How Much Coverage Do I Need?</title>
        <meta name="description" content="Use our free life insurance calculator to determine exactly how much coverage you need to protect your family in 2026. Calculate based on debt, income, and future needs." />
        <meta name="keywords" content="life insurance calculator, how much life insurance do I need, life insurance coverage calculator 2026, term life insurance calculator, DIME method calculator" />
      </Helmet>

      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-2">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Life Insurance Calculator</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Determine the ideal amount of life insurance coverage to ensure your loved ones are financially secure in 2026.
        </p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
              <CalcIcon className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-800">Coverage Requirements</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="input-group">
                <label className="input-label flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-slate-400" />
                  Existing Debt ($)
                </label>
                <input
                  type="number"
                  value={debt || ''}
                  onChange={(e) => setDebt(Number(e.target.value))}
                  placeholder="e.g. 15000"
                  className="input-field"
                />
                <p className="text-[10px] text-slate-400 mt-1">Credit cards, personal loans, etc.</p>
              </div>

              <div className="input-group">
                <label className="input-label flex items-center gap-2">
                  <Heart className="w-4 h-4 text-slate-400" />
                  Funeral Expenses ($)
                </label>
                <input
                  type="number"
                  value={funeral || ''}
                  onChange={(e) => setFuneral(Number(e.target.value))}
                  placeholder="e.g. 15000"
                  className="input-field"
                />
                <p className="text-[10px] text-slate-400 mt-1">Average cost is $10k-$15k.</p>
              </div>

              <div className="input-group">
                <label className="input-label flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-slate-400" />
                  Education Fund ($)
                </label>
                <input
                  type="number"
                  value={education || ''}
                  onChange={(e) => setEducation(Number(e.target.value))}
                  placeholder="e.g. 100000"
                  className="input-field"
                />
                <p className="text-[10px] text-slate-400 mt-1">Total for all children.</p>
              </div>

              <div className="input-group">
                <label className="input-label flex items-center gap-2">
                  <Home className="w-4 h-4 text-slate-400" />
                  Mortgage Balance ($)
                </label>
                <input
                  type="number"
                  value={mortgage || ''}
                  onChange={(e) => setMortgage(Number(e.target.value))}
                  placeholder="e.g. 250000"
                  className="input-field"
                />
                <p className="text-[10px] text-slate-400 mt-1">Total remaining balance.</p>
              </div>

              <div className="input-group">
                <label className="input-label">Annual Income to Replace ($)</label>
                <input
                  type="number"
                  value={income || ''}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  placeholder="e.g. 50000"
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Years of Replacement</label>
                <input
                  type="number"
                  value={years || ''}
                  onChange={(e) => setYears(Number(e.target.value))}
                  placeholder="e.g. 10"
                  className="input-field"
                />
                <p className="text-[10px] text-slate-400 mt-1">How many years should income last?</p>
              </div>

              <div className="input-group md:col-span-2">
                <label className="input-label">Existing Assets & Insurance ($)</label>
                <input
                  type="number"
                  value={assets || ''}
                  onChange={(e) => setAssets(Number(e.target.value))}
                  placeholder="e.g. 50000"
                  className="input-field"
                />
                <p className="text-[10px] text-slate-400 mt-1">Savings, current policies, etc. (Subtracted from total)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="result-box text-center bg-blue-50 border-blue-100"
          >
            <h3 className="text-blue-600 font-bold mb-2 uppercase text-xs tracking-wider">Recommended Coverage</h3>
            <div className="text-4xl font-bold text-slate-900 mb-2">
              {formatCurrency(totalNeeded)}
            </div>
            <p className="text-sm text-slate-600">
              This is the estimated amount needed to cover your family's future expenses.
            </p>
          </motion.div>

          <div className="calculator-container bg-slate-50 border-slate-200">
            <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-sm">
              <Info className="w-4 h-4 text-blue-500" />
              The DIME Method
            </h4>
            <ul className="text-xs space-y-2 text-slate-600">
              <li><strong>D</strong>ebt: Total of all non-mortgage debt.</li>
              <li><strong>I</strong>ncome: Annual salary × years needed.</li>
              <li><strong>M</strong>ortgage: Pay off the family home.</li>
              <li><strong>E</strong>ducation: College costs for children.</li>
            </ul>
          </div>

          
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How Much Life Insurance Do I Need in 2026?</h2>
        <p>
          Determining the right amount of life insurance is one of the most critical financial decisions you will make for your family. In 2026, with rising costs of living and education, a generic "10 times your salary" rule might not be enough. Our <strong>life insurance calculator</strong> uses the comprehensive DIME method to provide a personalized estimate based on your specific financial obligations.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Understanding the DIME Method</h3>
        <p>
          The DIME method is a popular and effective way to calculate life insurance needs because it looks at four key areas of your financial life:
        </p>
        <ul>
          <li><strong>Debt:</strong> This includes everything from credit card balances and personal loans to car payments. Your goal is to ensure your family isn't burdened by these debts if you are no longer there to pay them.</li>
          <li><strong>Income Replacement:</strong> This is often the largest part of your coverage. Consider how many years your family will need your income to maintain their current standard of living. In 2026, many experts recommend replacing income until your youngest child reaches adulthood or until your spouse reaches retirement age.</li>
          <li><strong>Mortgage:</strong> For most families, the home is the largest expense. Providing enough coverage to pay off the mortgage entirely can give your family the security of a permanent roof over their heads.</li>
          <li><strong>Education:</strong> If you have children, you likely want to help them with college or vocational training. Estimate the future cost of tuition and board for each child and include it in your total.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Factors to Consider in 2026</h3>
        <p>
          When using our <strong>life insurance coverage calculator 2026</strong>, keep in mind that inflation plays a significant role. A million-dollar policy might sound like a lot, but when spread over 20 years of rising prices, its purchasing power diminishes. It's often wise to round up your estimate or consider a policy with an inflation rider.
        </p>
        <p>
          Additionally, don't forget to subtract your existing assets. If you have significant savings, investments, or a current employer-provided life insurance policy, these can reduce the amount of private coverage you need to purchase. However, be cautious with employer policies, as they usually end if you leave the company.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Term vs. Whole Life Insurance</h3>
        <p>
          Once you know how much coverage you need, you'll need to decide on the type of policy. <strong>Term life insurance</strong> is generally the most affordable and provides coverage for a specific period (e.g., 10, 20, or 30 years). It is ideal for covering temporary needs like a mortgage or children's education. <strong>Whole life insurance</strong> provides permanent coverage and includes a cash value component, but it comes with significantly higher premiums.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">When should I re-evaluate my life insurance needs?</p>
            <p>You should review your coverage whenever you experience a major life event, such as getting married, having a child, buying a new home, or taking on significant new debt. Even without these events, a review every 3-5 years is a good practice.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does a stay-at-home parent need life insurance?</p>
            <p>Absolutely. While they may not have a traditional salary, the cost of replacing the services they provide (childcare, household management, transportation) is substantial. A life insurance policy can help cover these costs.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Is life insurance taxable?</p>
            <p>In most cases, life insurance death benefits are paid out to beneficiaries tax-free. However, any interest earned on the benefit before it is paid out may be taxable.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
