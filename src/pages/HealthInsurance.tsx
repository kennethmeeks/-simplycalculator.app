import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

import { Calculator as CalcIcon, Stethoscope, Activity, Pill, User, Users, ShieldCheck } from 'lucide-react';

export const HealthInsuranceCalculator: React.FC = () => {
  const [premium, setPremium] = useState<number>(450);
  const [deductible, setDeductible] = useState<number>(2500);
  const [outOfPocket, setOutOfPocket] = useState<number>(6000);
  const [coInsurance, setCoInsurance] = useState<number>(20);
  const [expectedVisits, setExpectedVisits] = useState<number>(4);
  const [visitCost, setVisitCost] = useState<number>(150);
  const [expectedMeds, setExpectedMeds] = useState<number>(200);

  const [totalAnnualCost, setTotalAnnualCost] = useState<number>(0);
  const [monthlyAverage, setMonthlyAverage] = useState<number>(0);

  useEffect(() => {
    const annualPremium = premium * 12;
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
  }, [premium, deductible, outOfPocket, coInsurance, expectedVisits, visitCost, expectedMeds]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(val);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Helmet>
        <title>Health Insurance Cost Calculator 2026 | Estimate Annual Medical Expenses</title>
        <meta name="description" content="Estimate your total annual health insurance costs for 2026. Calculate premiums, deductibles, and out-of-pocket expenses to find the best plan for your budget." />
        <meta name="keywords" content="health insurance calculator, health insurance cost estimator 2026, medical expense calculator, health plan comparison tool, out of pocket cost calculator" />
      </Helmet>

      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-2">
          <Stethoscope className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Health Insurance Cost Calculator</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Estimate your total yearly healthcare spending by combining premiums with expected medical usage in 2026.
        </p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-bold text-slate-800">Plan Details</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="input-group">
                <label className="input-label">Monthly Premium ($)</label>
                <input
                  type="number"
                  value={premium || ''}
                  onChange={(e) => setPremium(Number(e.target.value))}
                  className="input-field"
                />
                <p className="text-[10px] text-slate-400 mt-1">Amount you pay every month regardless of use.</p>
              </div>

              <div className="input-group">
                <label className="input-label">Annual Deductible ($)</label>
                <input
                  type="number"
                  value={deductible || ''}
                  onChange={(e) => setDeductible(Number(e.target.value))}
                  className="input-field"
                />
                <p className="text-[10px] text-slate-400 mt-1">Amount you pay before insurance kicks in.</p>
              </div>

              <div className="input-group">
                <label className="input-label">Out-of-Pocket Max ($)</label>
                <input
                  type="number"
                  value={outOfPocket || ''}
                  onChange={(e) => setOutOfPocket(Number(e.target.value))}
                  className="input-field"
                />
                <p className="text-[10px] text-slate-400 mt-1">The absolute most you'll pay in a year.</p>
              </div>

              <div className="input-group">
                <label className="input-label">Co-insurance (%)</label>
                <input
                  type="number"
                  value={coInsurance || ''}
                  onChange={(e) => setCoInsurance(Number(e.target.value))}
                  className="input-field"
                />
                <p className="text-[10px] text-slate-400 mt-1">Your share of costs after deductible (e.g. 20%).</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-8 mb-6 border-b border-slate-100 pb-4">
              <Activity className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-bold text-slate-800">Expected Usage</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="input-group">
                <label className="input-label">Doctor Visits per Year</label>
                <input
                  type="number"
                  value={expectedVisits || ''}
                  onChange={(e) => setExpectedVisits(Number(e.target.value))}
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Avg. Cost per Visit ($)</label>
                <input
                  type="number"
                  value={visitCost || ''}
                  onChange={(e) => setVisitCost(Number(e.target.value))}
                  className="input-field"
                />
              </div>

              <div className="input-group md:col-span-2">
                <label className="input-label flex items-center gap-2">
                  <Pill className="w-4 h-4 text-slate-400" />
                  Annual Prescription Costs ($)
                </label>
                <input
                  type="number"
                  value={expectedMeds || ''}
                  onChange={(e) => setExpectedMeds(Number(e.target.value))}
                  className="input-field"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="result-box text-center bg-emerald-50 border-emerald-100"
          >
            <h3 className="text-emerald-600 font-bold mb-2 uppercase text-xs tracking-wider">Total Annual Cost</h3>
            <div className="text-4xl font-bold text-slate-900 mb-2">
              {formatCurrency(totalAnnualCost)}
            </div>
            <div className="pt-4 border-t border-emerald-100 mt-4">
              <p className="text-xs text-slate-500 uppercase tracking-wide">Monthly Average</p>
              <p className="text-xl font-bold text-emerald-700">{formatCurrency(monthlyAverage)}</p>
            </div>
          </motion.div>

          <div className="calculator-container bg-slate-50 border-slate-200 p-4">
            <h4 className="font-bold text-slate-800 mb-3 text-sm">Plan Comparison Tip</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Low premium plans often have high deductibles. If you expect many doctor visits or high medication costs, a "Gold" or "Platinum" plan with higher premiums but lower out-of-pocket costs might save you money overall.
            </p>
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
