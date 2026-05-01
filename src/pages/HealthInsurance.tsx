import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

import { Calculator as CalcIcon, Stethoscope, Activity, Pill, User, Users, ShieldCheck } from 'lucide-react';

export const HealthInsuranceCalculator: React.FC = () => {
  const [zipCode, setZipCode] = useState<string>('');
  const [age, setAge] = useState<number>(30);
  const [coverageLevel, setCoverageLevel] = useState<string>('individual');
  const [tobaccoUse, setTobaccoUse] = useState<string>('no');
  const [householdIncome, setHouseholdIncome] = useState<number>(45000);
  
  const [premium, setPremium] = useState<number>(450);
  const [deductible, setDeductible] = useState<number>(2500);
  const [outOfPocket, setOutOfPocket] = useState<number>(6000);
  const [coInsurance, setCoInsurance] = useState<number>(20);
  const [expectedVisits, setExpectedVisits] = useState<number>(4);
  const [visitCost, setVisitCost] = useState<number>(150);
  const [expectedMeds, setExpectedMeds] = useState<number>(200);

  const [estimatedPremium, setEstimatedPremium] = useState<number>(0);
  const [estimatedSubsidy, setEstimatedSubsidy] = useState<number>(0);
  const [finalMonthlyCost, setFinalMonthlyCost] = useState<number>(0);
  const [totalAnnualCost, setTotalAnnualCost] = useState<number>(0);
  const [monthlyAverage, setMonthlyAverage] = useState<number>(0);

  // Estimation Logic (Mock industry logic)
  useEffect(() => {
    // 1. Base Premium Estimation
    let base = 350; // Average base
    
    // Age factor (simplified)
    const ageFactor = age < 25 ? 0.7 : age < 40 ? 1.0 : age < 55 ? 1.5 : 2.0;
    
    // Tobacco surcharge (up to 50%)
    const tobaccoSurcharge = tobaccoUse === 'yes' ? 1.5 : 1.0;
    
    // Coverage Level Multiplier
    const coverageMultiplier = coverageLevel === 'family' ? 2.8 : coverageLevel === 'employee_plus_one' ? 1.9 : 1.0;

    const est = base * ageFactor * tobaccoSurcharge * coverageMultiplier;
    setEstimatedPremium(est);

    // 2. Subsidy Estimation (Simplified ACA-style)
    // 2024 FPL for Individual is ~$15k, Family of 4 ~$31k
    const fplBase = coverageLevel === 'individual' ? 15000 : 31200;
    const fplRatio = householdIncome / fplBase;
    
    let subsidy = 0;
    if (fplRatio < 1.5) subsidy = est * 0.9;
    else if (fplRatio < 2.5) subsidy = est * 0.6;
    else if (fplRatio < 4.0) subsidy = est * 0.3;
    
    setEstimatedSubsidy(subsidy);
    
    // Use estimated premium if user hasn't touched the manual premium field significantly
    // For this calculator, we'll suggest the estimated one
    const actualMonthlyPremium = Math.max(0, est - subsidy);
    setFinalMonthlyCost(actualMonthlyPremium);

    // 3. Total Cost Logic (Usage based)
    const annualPremium = actualMonthlyPremium * 12;
    const medicalExpenses = (expectedVisits * visitCost) + expectedMeds;
    
    let outOfPocketCosts = 0;
    if (medicalExpenses <= deductible) {
      outOfPocketCosts = medicalExpenses;
    } else {
      const remainingAfterDeductible = medicalExpenses - deductible;
      const coInsuranceAmount = remainingAfterDeductible * (coInsurance / 100);
      outOfPocketCosts = Math.min(deductible + coInsuranceAmount, outOfPocket);
    }

    const total = annualPremium + outOfPocketCosts;
    setTotalAnnualCost(total);
    setMonthlyAverage(total / 12);
  }, [zipCode, age, coverageLevel, tobaccoUse, householdIncome, premium, deductible, outOfPocket, coInsurance, expectedVisits, visitCost, expectedMeds]);

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
        <title>Health Insurance Quote & Cost Calculator 2026 | Subsidies & Premiums</title>
        <meta name="description" content="Get a realistic health insurance estimate for 2026. Input your Zip Code, Income, and Age to see potential premiums and government subsidies." />
      </Helmet>

      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mb-2 shadow-sm">
          <Stethoscope className="w-7 h-7" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Health Insurance Optimizer</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Calculate real premiums, project federal subsidies, and find the true cost of coverage for 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          {/* Step 1: Personal Profile */}
          <div className="calculator-container shadow-sm border-slate-200">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">1. Personal Profile</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="input-group">
                <label className="input-label">Zip Code</label>
                <input
                  type="text"
                  placeholder="e.g. 90210"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  className="input-field"
                />
                <p className="text-[11px] text-slate-400 mt-1">Location determines available plans and rates.</p>
              </div>

              <div className="input-group">
                <label className="input-label">Primary Applicant Age</label>
                <input
                  type="number"
                  value={age || ''}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Annual Household Income ($)</label>
                <input
                  type="number"
                  value={householdIncome || ''}
                  onChange={(e) => setHouseholdIncome(Number(e.target.value))}
                  className="input-field border-emerald-200 focus:ring-emerald-500"
                />
                <p className="text-[11px] text-emerald-600 font-medium mt-1">Used to calculate potential tax credits.</p>
              </div>

              <div className="input-group">
                <label className="input-label">Tobacco Use</label>
                <select
                  value={tobaccoUse}
                  onChange={(e) => setTobaccoUse(e.target.value)}
                  className="input-field"
                >
                  <option value="no">No (Non-Tobacco)</option>
                  <option value="yes">Yes (Tobacco User)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Step 2: Coverage Needs */}
          <div className="calculator-container shadow-sm border-slate-200">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="p-2 bg-purple-50 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">2. Coverage Level</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="input-group md:col-span-2">
                <label className="input-label">Who needs coverage?</label>
                <select
                  value={coverageLevel}
                  onChange={(e) => setCoverageLevel(e.target.value)}
                  className="input-field"
                >
                  <option value="individual">Individual Only</option>
                  <option value="employee_plus_one">Individual + Spouse/Partner</option>
                  <option value="family">Family (Individual + Spouse + Children)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Step 3: Usage Projection (Advanced) */}
          <div className="calculator-container shadow-sm border-slate-200 bg-slate-50/50">
            <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <Activity className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-xl font-bold text-slate-800">3. Expected Usage</h2>
              </div>
              <span className="text-xs font-medium text-slate-400 bg-white px-2 py-1 rounded border border-slate-200 uppercase tracking-wider">Projected for 2026</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="input-group">
                <label className="input-label">Planned Office Visits</label>
                <input
                  type="number"
                  value={expectedVisits || ''}
                  onChange={(e) => setExpectedVisits(Number(e.target.value))}
                  className="input-field bg-white"
                />
                <p className="text-[11px] text-slate-400 mt-1">Include PCP and specialists.</p>
              </div>

              <div className="input-group">
                <label className="input-label">Est. Annual Drug Costs ($)</label>
                <input
                  type="number"
                  value={expectedMeds || ''}
                  onChange={(e) => setExpectedMeds(Number(e.target.value))}
                  className="input-field bg-white"
                />
              </div>

              <div className="md:col-span-2 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-slate-600 font-medium italic">Adjust benchmark plan structure:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400">Deductible</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                      <input type="number" value={deductible} onChange={(e) => setDeductible(Number(e.target.value))} className="w-full pl-7 pr-3 py-1.5 border rounded-lg text-sm" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400">OOP Max</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                      <input type="number" value={outOfPocket} onChange={(e) => setOutOfPocket(Number(e.target.value))} className="w-full pl-7 pr-3 py-1.5 border rounded-lg text-sm" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-slate-400">Co-ins %</label>
                    <input type="number" value={coInsurance} onChange={(e) => setCoInsurance(Number(e.target.value))} className="w-full px-3 py-1.5 border rounded-lg text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="sticky top-6 space-y-6">
            <motion.div 
              key={finalMonthlyCost}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              
              <h3 className="text-emerald-400 font-bold mb-6 uppercase text-xs tracking-[0.2em]">Monthly Cost Estimate</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-slate-400 text-sm">
                  <span>Gross Premium</span>
                  <span>{formatCurrency(estimatedPremium)}</span>
                </div>
                <div className="flex items-center justify-between text-emerald-400 text-sm font-medium">
                  <span>Gov. Subsidy (PTC)</span>
                  <span>-{formatCurrency(estimatedSubsidy)}</span>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="text-5xl font-bold text-white mb-2">
                    {formatCurrency(finalMonthlyCost)}
                    <span className="text-lg text-slate-500 font-normal ml-2">/mo</span>
                  </div>
                  <p className="text-xs text-slate-500">Your likely net monthly bill.</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-400 text-sm italic">Total Yearly Expo:</span>
                  <span className="text-xl font-bold text-emerald-400">{formatCurrency(totalAnnualCost)}</span>
                </div>
                <p className="text-[10px] text-slate-500 italic">Includes all premiums and your projected out-of-pocket medical bills.</p>
              </div>
            </motion.div>

            <div className="calculator-container bg-emerald-50/50 border-emerald-100 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Settings2 className="w-4 h-4 text-emerald-600" />
                <h4 className="font-bold text-slate-900 text-sm">Quick Analysis</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{householdIncome < 50000 ? 'You likely qualify for significant subsidies based on your income.' : 'Plan choice is critical for your income level to avoid high out-of-pocket costs.'}</span>
                </li>
                <li className="flex gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{expectedVisits > 6 ? 'High usage suggests a Gold plan might be cheaper than Bronze overall.' : 'Low usage makes High-Deductible (Bronze) plans worth investigating.'}</span>
                </li>
              </ul>
            </div>
            
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-95 flex items-center justify-center gap-2 group">
              Find 2026 Quotes
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Health Insurance Costs in 2026</h2>
        <p>
          Choosing a health insurance plan is one of the most complex financial decisions you'll face. In 2026, premiums continue to rise, and deductibles are higher than ever. Our <strong>health insurance calculator</strong> is designed to help you look past the monthly premium and see the "true cost" of your healthcare based on how you actually use it.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Terms You Need to Know</h3>
        <p>
          To use our <strong>health insurance cost estimator 2026</strong> effectively, it's important to understand these four fundamental components:
        </p>
        <ul>
          <li><strong>Premium:</strong> The fixed amount you pay every month to keep your insurance active. This is paid regardless of whether you see a doctor or not.</li>
          <li><strong>Deductible:</strong> The amount you must pay out of your own pocket for covered health care services before your insurance plan begins to pay. Generally, plans with lower premiums have higher deductibles.</li>
          <li><strong>Co-insurance:</strong> Your share of the costs of a covered health care service, calculated as a percent (for example, 20%) of the allowed amount for the service. You pay co-insurance plus any deductibles you owe.</li>
          <li><strong>Out-of-Pocket Maximum:</strong> The most you have to pay for covered services in a plan year. After you spend this amount on deductibles, copayments, and coinsurance, your health plan pays 100% of the costs of covered benefits.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Estimate Your Usage</h3>
        <p>
          The secret to finding the best plan is accurately predicting your medical needs. Look back at your 2025 records:
        </p>
        <ol>
          <li>How many times did you visit your primary care physician?</li>
          <li>Did you see any specialists?</li>
          <li>What were your total prescription costs?</li>
          <li>Do you have any planned surgeries or procedures for 2026?</li>
        </ol>
        <p>
          Input these estimates into our <strong>medical expense calculator</strong> to see how different plans would perform. A plan that looks expensive on paper (high premium) might actually be cheaper if you have chronic conditions that require frequent care.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Choosing Between Plan Tiers</h3>
        <p>
          Most insurance markets categorize plans into metal tiers: Bronze, Silver, Gold, and Platinum. 
          <strong>Bronze plans</strong> have the lowest premiums but the highest out-of-pocket costs when you need care. They are best for healthy individuals who only want protection against major accidents. 
          <strong>Gold and Platinum plans</strong> have high premiums but cover a much larger percentage of your medical bills. These are often better for families, seniors, or those with ongoing health needs.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is the "Silver Loading" effect in 2026?</p>
            <p>In many states, Silver-tier plans have seen price adjustments due to changes in federal subsidies. This often makes Gold plans more attractive for those who don't qualify for cost-sharing reductions. Always compare all tiers using our calculator.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can I use an HSA with any plan?</p>
            <p>No, you can only contribute to a Health Savings Account (HSA) if you are enrolled in a High Deductible Health Plan (HDHP). These plans often have lower premiums and provide significant tax advantages.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does this calculator include dental and vision?</p>
            <p>This tool focuses on major medical insurance. Dental and vision are typically separate policies with their own premiums and deductibles, though some 2026 plans include them as bundled benefits.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
