import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { motion } from 'motion/react';

import { Calculator as CalcIcon, Info, ShieldCheck, Heart, Home, GraduationCap, AlertCircle, User, ChevronRight } from 'lucide-react';

export const LifeInsuranceCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(35);
  const [tobaccoUse, setTobaccoUse] = useState<string>('no');
  const [healthClass, setHealthClass] = useState<string>('excellent');
  const [term, setTerm] = useState<number>(20);
  
  const [debt, setDebt] = useState<number>(0);
  const [funeral, setFuneral] = useState<number>(15000);
  const [income, setIncome] = useState<number>(50000);
  const [years, setYears] = useState<number>(10);
  const [mortgage, setMortgage] = useState<number>(250000);
  const [education, setEducation] = useState<number>(100000);
  const [assets, setAssets] = useState<number>(50000);

  const [totalNeeded, setTotalNeeded] = useState<number>(0);
  const [estimatedPremium, setEstimatedPremium] = useState<number>(0);

  useEffect(() => {
    const needed = debt + funeral + (income * years) + mortgage + education - assets;
    const finalNeeded = Math.max(0, needed);
    setTotalNeeded(finalNeeded);

    // Estimate Premium (simplified industry rates)
    // Base rate per $1000 of coverage for 20-year term for healthy 35yo is around $0.25 - $0.50 annually
    let ratePerKMonthly = 0.04; // $0.48 annually per $1000
    
    // Age factor
    if (age > 60) ratePerKMonthly *= 8;
    else if (age > 50) ratePerKMonthly *= 4;
    else if (age > 40) ratePerKMonthly *= 1.5;
    
    // Tobacco surcharge
    if (tobaccoUse === 'yes') ratePerKMonthly *= 2.5;
    
    // Health Class
    if (healthClass === 'fair') ratePerKMonthly *= 1.8;
    else if (healthClass === 'good') ratePerKMonthly *= 1.3;
    
    // Term multiplier
    if (term === 30) ratePerKMonthly *= 1.4;
    else if (term === 10) ratePerKMonthly *= 0.8;

    const est = (finalNeeded / 1000) * ratePerKMonthly;
    setEstimatedPremium(Math.max(10, est)); // Minimum premium usually $10-15
  }, [debt, funeral, income, years, mortgage, education, assets, age, tobaccoUse, healthClass, term]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <Helmet>
        <title>Life Insurance Quote & Coverage Calculator 2026 | DIME Method</title>
        <meta name="description" content="Calculate your life insurance needs and estimate monthly premiums for 2026. Use the DIME method to protect your family's financial future." />
      </Helmet>

      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 text-white mb-2 shadow-lg">
          <ShieldCheck className="w-7 h-7" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Life Insurance Planner</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Determine exactly how much coverage you need and what it might cost in 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          {/* Section: Personal Profile */}
          <div className="calculator-container shadow-sm border-slate-200">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <User className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-800">1. Your Profile</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="input-group">
                <label className="input-label">Age</label>
                <input
                  type="number"
                  value={age || ''}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Tobacco Use</label>
                <select value={tobaccoUse} onChange={(e) => setTobaccoUse(e.target.value)} className="input-field">
                  <option value="no">Non-Tobacco</option>
                  <option value="yes">Tobacco User</option>
                </select>
              </div>

              <div className="input-group">
                <label className="input-label">Health Status</label>
                <select value={healthClass} onChange={(e) => setHealthClass(e.target.value)} className="input-field">
                  <option value="excellent">Excellent (Preferred Plus)</option>
                  <option value="good">Good (Standard Plus)</option>
                  <option value="fair">Fair (Standard)</option>
                </select>
              </div>

              <div className="input-group">
                <label className="input-label">Desired Term (Years)</label>
                <select value={term} onChange={(e) => setTerm(Number(e.target.value))} className="input-field">
                  <option value={10}>10 Years</option>
                  <option value={20}>20 Years</option>
                  <option value={30}>30 Years</option>
                </select>
              </div>
            </div>
          </div>

          <div className="calculator-container shadow-sm border-slate-200">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <CalcIcon className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-bold text-slate-800">2. Financial Needs (DIME Method)</h2>
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
              </div>

              <div className="input-group">
                <label className="input-label">Annual Income to Replace ($)</label>
                <input
                  type="number"
                  value={income || ''}
                  onChange={(e) => setIncome(Number(e.target.value))}
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Years of Income Replacement</label>
                <input
                  type="number"
                  value={years || ''}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="input-field"
                />
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
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Existing Assets & Savings ($)</label>
                <input
                  type="number"
                  value={assets || ''}
                  onChange={(e) => setAssets(Number(e.target.value))}
                  className="input-field"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="sticky top-6 space-y-6">
            <motion.div 
              key={totalNeeded}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-200/50"
            >
              <h3 className="text-blue-100 font-bold mb-8 uppercase text-xs tracking-widest">Plan Recommendation</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-blue-100 text-xs mb-1 uppercase font-medium">Coverage Needed</p>
                  <div className="text-4xl font-black">{formatCurrency(totalNeeded)}</div>
                </div>
                
                <div className="pt-6 border-t border-blue-500/50">
                  <p className="text-blue-100 text-xs mb-1 uppercase font-medium">Estimated Premium</p>
                  <div className="text-3xl font-black">
                    {formatCurrency(estimatedPremium)}
                    <span className="text-sm font-normal text-blue-200 ml-2">/mo*</span>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-[10px] text-blue-200 italic leading-relaxed">
                *Estimated monthly premium for a {term}-year term policy based on your age and health profile in 2026.
              </p>
            </motion.div>

            <div className="calculator-container bg-slate-50 border-slate-200 p-6">
              <h4 className="font-bold text-slate-900 mb-4 text-sm flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-500" />
                Why DIME?
              </h4>
              <div className="space-y-3 text-xs text-slate-600">
                <p><strong>D</strong>ebt: Clears all outstanding bills.</p>
                <p><strong>I</strong>ncome: Replaces your salary for the family.</p>
                <p><strong>M</strong>ortgage: Ensures they keep the home.</p>
                <p><strong>E</strong>ducation: Funds children's future schooling.</p>
              </div>
            </div>

            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 rounded-2xl shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
              Compare 2026 Rates
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
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
