import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const SocialSecurityCalculator: React.FC = () => {
  const [currentSalary, setCurrentSalary] = useState<number>(75000);
  const [birthYear, setBirthYear] = useState<number>(1980);
  const [retirementAge, setRetirementAge] = useState<number>(67);

  const [estimatedMonthlyBenefit, setEstimatedMonthlyBenefit] = useState<number>(0);
  const [fullRetirementAge, setFullRetirementAge] = useState<number>(67);

  useEffect(() => {
    // Determine Full Retirement Age (FRA)
    let fra = 67;
    if (birthYear <= 1937) fra = 65;
    else if (birthYear <= 1942) fra = 65 + (birthYear - 1937) * 2 / 12;
    else if (birthYear <= 1954) fra = 66;
    else if (birthYear <= 1959) fra = 66 + (birthYear - 1954) * 2 / 12;
    setFullRetirementAge(fra);

    // Simplified Social Security Benefit Estimation
    // This is a very rough approximation based on 2024 bend points
    const monthlySalary = Math.min(currentSalary, 168600) / 12; // 2024 Wage Base
    let benefit = 0;
    
    if (monthlySalary > 0) {
      benefit += Math.min(monthlySalary, 1174) * 0.90;
      if (monthlySalary > 1174) {
        benefit += Math.min(monthlySalary - 1174, 7078 - 1174) * 0.32;
      }
      if (monthlySalary > 7078) {
        benefit += (monthlySalary - 7078) * 0.15;
      }
    }

    // Adjust for early/late retirement
    const monthsDiff = (retirementAge - fra) * 12;
    if (monthsDiff < 0) {
      // Early retirement reduction (approx 0.5% per month)
      benefit *= (1 + (monthsDiff * 0.005));
    } else if (monthsDiff > 0) {
      // Delayed retirement credit (approx 0.66% per month)
      benefit *= (1 + (monthsDiff * 0.0066));
    }

    setEstimatedMonthlyBenefit(benefit);
  }, [currentSalary, birthYear, retirementAge]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Social Security Calculator [100% Private]</title>
        <meta name="description" content="Free online Social Security calculator. Estimate your future monthly Social Security benefits based on your current salary and retirement age." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Social Security Calculator</h1>
        <p className="text-slate-600">
          Estimate your future monthly Social Security benefits by accounting for your current salary, birth year, and planned retirement age.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Benefit Details</h2>
          
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
              <label className="block text-sm font-medium text-slate-700 mb-1">Birth Year</label>
              <input
                type="number"
                value={birthYear}
                onChange={(e) => setBirthYear(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Planned Retirement Age</label>
              <select
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none bg-white"
              >
                {Array.from({ length: 9 }, (_, i) => 62 + i).map(age => (
                  <option key={age} value={age}>{age}</option>
                ))}
                <option value={70}>70 (Maximum Benefit)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl font-semibold mb-4">Estimated Monthly Benefit</h2>
          <div className="space-y-4">
            <p className="text-6xl font-bold text-[#0066cc]">${estimatedMonthlyBenefit.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            <div className="pt-4 border-t border-slate-200 w-full">
              <p className="text-sm text-slate-500 mb-1">Full Retirement Age (FRA)</p>
              <p className="text-xl font-semibold text-slate-900">{fullRetirementAge} Years</p>
            </div>
            <p className="text-xs text-slate-500 italic mt-4">
              Note: This is a simplified estimate. Your actual benefit will be based on your highest 35 years of indexed earnings.
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>How Social Security Benefits are Calculated</h2>
        <p>
          Social Security benefits are based on your lifetime earnings. The Social Security Administration (SSA) uses your highest 35 years of indexed earnings to calculate your Primary Insurance Amount (PIA), which is the benefit you would receive at your Full Retirement Age (FRA).
        </p>
        
        <h3>How to Use the Social Security Calculator</h3>
        <p>
          To estimate your future Social Security benefit, you need to provide:
        </p>
        <ul>
          <li><strong>Current Annual Salary:</strong> Your current gross annual salary.</li>
          <li><strong>Birth Year:</strong> Your year of birth, which determines your Full Retirement Age.</li>
          <li><strong>Planned Retirement Age:</strong> The age at which you plan to start receiving your Social Security benefits.</li>
        </ul>

        <h3>Full Retirement Age (FRA)</h3>
        <p>
          Your Full Retirement Age is the age at which you are entitled to 100% of your Primary Insurance Amount. For most people born after 1960, the FRA is 67.
        </p>

        <h3>The Impact of Early or Late Retirement</h3>
        <p>
          You can choose to start receiving Social Security benefits as early as age 62 or as late as age 70:
        </p>
        <ul>
          <li><strong>Early Retirement (Age 62 to FRA):</strong> Your monthly benefit will be permanently reduced by up to 30% compared to your FRA benefit.</li>
          <li><strong>Late Retirement (FRA to Age 70):</strong> Your monthly benefit will increase by 8% for every year you delay receiving benefits beyond your FRA, up to age 70.</li>
        </ul>

        <h3>Why Social Security is Important</h3>
        <p>
          Social Security is a critical part of a retirement plan because it offers:
        </p>
        <ul>
          <li><strong>Inflation Protection:</strong> Your benefit is adjusted annually for inflation through Cost-of-Living Adjustments (COLAs).</li>
          <li><strong>Guaranteed Income:</strong> Your benefit is fixed for life, providing a stable source of income in retirement.</li>
          <li><strong>Survivor Benefits:</strong> Your spouse or other beneficiary may be eligible for survivor benefits after you die.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is the "Maximum Taxable Earnings"?</h4>
            <p>The Social Security Administration only taxes earnings up to a certain limit each year. For 2024, this limit is $168,600. Any earnings above this amount are not subject to Social Security taxes and do not increase your future benefit.</p>
          </div>
          <div>
            <h4 className="font-bold">How many "Credits" do I need to qualify?</h4>
            <p>To qualify for Social Security benefits, you typically need to earn 40 credits, which is equivalent to 10 years of work. You can earn up to 4 credits per year.</p>
          </div>
          <div>
            <h4 className="font-bold">Will Social Security be around when I retire?</h4>
            <p>While the Social Security trust funds are projected to be depleted by the mid-2030s, the system will still be able to pay about 75% to 80% of scheduled benefits from ongoing tax revenue. Congress is expected to make changes to the system to ensure its long-term solvency.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
