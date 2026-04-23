import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
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

      <CalculatorSEO 
        name="Life Insurance Calculator" 
        path="/life-insurance" 
        description="Estimate the life insurance coverage your family needs using the DIME method. Plan for debt, income, mortgage, and education in 2026."
      />
    </div>
  );
};
