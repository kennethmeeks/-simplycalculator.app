import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { parseInput } from '@/src/lib/calculatorUtils';

export const SalaryCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number | string>(50000);
  const [period, setPeriod] = useState('year');
  const [hoursPerWeek, setHoursPerWeek] = useState<number | string>(40);

  const [results, setResults] = useState({
    hourly: 0,
    daily: 0,
    weekly: 0,
    monthly: 0,
    annually: 0,
  });

  useEffect(() => {
    const amt = parseInput(amount.toString());
    const hours = parseInput(hoursPerWeek.toString());
    
    let annual = 0;
    if (period === 'hour') annual = amt * hours * 52;
    else if (period === 'day') annual = amt * 5 * 52;
    else if (period === 'week') annual = amt * 52;
    else if (period === 'month') annual = amt * 12;
    else annual = amt;

    if (hours <= 0) {
      setResults({ hourly: 0, daily: 0, weekly: 0, monthly: 0, annually: 0 });
      return;
    }

    setResults({
      hourly: annual / (hours * 52),
      daily: annual / (5 * 52),
      weekly: annual / 52,
      monthly: annual / 12,
      annually: annual,
    });
  }, [amount, period, hoursPerWeek]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Salary Calculator | Hourly to Annual Salary Converter 2026</title>
        <meta name="description" content="Calculate your annual, monthly, and weekly income with our free salary calculator. Convert hourly to annual salary and see your take-home pay potential for 2026." />
      </Helmet>

      <h1>Salary Calculator</h1>
      <p>Convert pay between different time periods like hourly, weekly, monthly, and annually.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Amount ($)</label>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
                className="input-field w-full"
              />
            </div>
            <div className="input-group">
              <label className="input-label">Pay Period</label>
              <select 
                value={period} 
                onChange={(e) => setPeriod(e.target.value)}
                className="input-field w-full"
              >
                <option value="hour">Hourly</option>
                <option value="day">Daily</option>
                <option value="week">Weekly</option>
                <option value="month">Monthly</option>
                <option value="year">Annually</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label">Hours per Week</label>
              <input 
                type="number" 
                value={hoursPerWeek} 
                onChange={(e) => setHoursPerWeek(e.target.value)}
                className="input-field w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Hourly:</span>
                  <span className="font-bold text-[#0066cc]">${results.hourly.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Daily:</span>
                  <span className="font-bold text-[#0066cc]">${results.daily.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Weekly:</span>
                  <span className="font-bold text-[#0066cc]">${results.weekly.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Monthly:</span>
                  <span className="font-bold text-[#0066cc]">${results.monthly.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold">Annually:</span>
                  <span className="text-2xl font-bold text-[#0066cc]">${results.annually.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About Salary Conversion</h2>
        <p>
          Understanding your true earnings is essential for financial planning, budgeting, and career negotiations. Our <strong>salary calculator hourly to annual</strong> is designed to provide a clear and accurate breakdown of your income across different timeframes. Whether you're considering a new job offer or simply want to know how your hourly rate translates to a yearly salary, this tool provides the answers you need for 2026.
        </p>
        <p>
          Many people focus solely on their hourly rate, but seeing the annual total can be eye-opening. For instance, a small increase in your hourly pay can lead to thousands of dollars in additional income over the course of a year. Conversely, understanding your weekly or monthly take-home potential helps you create a realistic budget for your living expenses.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Salary Calculator</h3>
        <p>
          To calculate your salary, simply follow these steps:
        </p>
        <ol>
          <li><strong>Enter the Pay Amount:</strong> Input the dollar amount you currently earn or expect to earn.</li>
          <li><strong>Select the Pay Period:</strong> Choose whether the amount entered is hourly, daily, weekly, monthly, or annually.</li>
          <li><strong>Adjust Hours per Week:</strong> If you work more or less than the standard 40 hours, update this field for a more accurate hourly conversion.</li>
          <li><strong>Review Your Results:</strong> The calculator will instantly display your equivalent earnings across all major time periods.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Math Behind Salary Calculation</h3>
        <p>
          The formulas used in our calculator are straightforward but vital for accuracy:
        </p>
        <ul>
          <li><strong>Weekly Salary:</strong> Hourly Rate × Hours per Week</li>
          <li><strong>Annual Salary:</strong> Weekly Salary × Weeks per Year (standard is 52)</li>
          <li><strong>Monthly Salary:</strong> Annual Salary ÷ 12</li>
        </ul>
        <p>
          By using these standard formulas, we ensure that you get a consistent and reliable view of your earnings, regardless of your pay frequency.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Does this include taxes?</p>
            <p>No, this calculator provides your "gross" income, which is the total amount earned before any taxes, social security, or other deductions are taken out. Your "net" or take-home pay will be lower depending on your local tax laws and personal exemptions.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is a standard work week?</p>
            <p>In many countries, a standard full-time work week is 40 hours. However, this can vary by industry and employer, with some considering 35 or 37.5 hours as full-time.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How many working days are in a year?</p>
            <p>Assuming a 5-day work week and 52 weeks per year, there are 260 potential working days. Subtracting holidays and vacation days will give you your actual working days.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Why is knowing my hourly rate important if I'm salaried?</p>
            <p>Even if you receive a fixed annual salary, knowing your effective hourly rate is crucial for evaluating overtime opportunities, comparing different job offers, and understanding the true value of your time.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If you earn <strong>$25 per hour</strong> and work a standard <strong>40-hour week</strong> for <strong>52 weeks a year</strong>, your calculations would be:
        </p>
        <ul>
          <li><strong>Weekly:</strong> $25 × 40 = $1,000</li>
          <li><strong>Annual:</strong> $1,000 × 52 = $52,000</li>
          <li><strong>Monthly:</strong> $52,000 ÷ 12 = $4,333.33</li>
        </ul>
      </div>
    </div>
  );
};
