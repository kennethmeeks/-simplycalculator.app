import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const PaybackPeriodCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(100000);
  const [cashFlows, setCashFlows] = useState<string>('20000, 30000, 40000, 50000');
  const [paybackPeriod, setPaybackPeriod] = useState<number>(0);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const flows = cashFlows.split(',').map(s => s.trim()).filter(s => s !== '').map(Number);
    
    if (flows.some(isNaN)) {
      setError('Please enter valid numbers separated by commas.');
      return;
    }
    
    setError('');

    let cumulativeCashFlow = -initialInvestment;
    let period = 0;

    for (let i = 0; i < flows.length; i++) {
      if (cumulativeCashFlow + flows[i] >= 0) {
        // Linear interpolation for the fractional part of the year
        period = i + (Math.abs(cumulativeCashFlow) / flows[i]);
        break;
      }
      cumulativeCashFlow += flows[i];
    }

    setPaybackPeriod(period);
  }, [initialInvestment, cashFlows]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Payback Period Calculator | Calculate Investment Recovery 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online payback period calculator. Calculate how long it will take to recover the cost of an investment based on periodic cash flows." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Payback Period Calculator</h1>
        <p className="text-slate-600">
          Determine how long it will take for an investment to "pay for itself." Use this calculator to see the time required to recover your initial capital.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Investment Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Initial Investment ($)</label>
              <input
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Annual Cash Inflows ($, comma separated)</label>
              <textarea
                value={cashFlows}
                onChange={(e) => setCashFlows(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none font-mono"
                placeholder="e.g. 20000, 30000, 40000, 50000"
              />
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl font-semibold mb-4">Estimated Payback Period</h2>
          <div className="space-y-4">
            <p className="text-6xl font-bold text-[#0066cc]">
              {paybackPeriod > 0 ? paybackPeriod.toFixed(2) : 'N/A'}
            </p>
            <p className="text-2xl font-semibold text-slate-900">Years</p>
            <p className="text-sm text-slate-500 max-w-xs mx-auto">
              {paybackPeriod > 0 
                ? 'This is the time required to recover your initial investment.' 
                : 'The investment is not recovered within the provided cash flows.'}
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is the Payback Period?</h2>
        <p>
          The payback period is a simple financial metric that calculates the amount of time it takes to recover the cost of an investment. It's often used by businesses to assess the risk of a project: the shorter the payback period, the less time the company's capital is at risk.
        </p>
        
        <h3>How to Use the Payback Period Calculator</h3>
        <p>
          To calculate the payback period for an investment, you need to provide:
        </p>
        <ul>
          <li><strong>Initial Investment:</strong> The total amount of money you are spending today to start the project.</li>
          <li><strong>Annual Cash Inflows:</strong> The amount of money the project is expected to generate in each subsequent year. Enter these as a comma-separated list.</li>
        </ul>

        <h3>Advantages of Using Payback Period</h3>
        <p>
          The payback period is a popular metric because it is easy to understand and calculate. It's particularly useful for:
        </p>
        <ul>
          <li><strong>Assessing Liquidity:</strong> It tells you how quickly you'll get your cash back.</li>
          <li><strong>Risk Management:</strong> Projects with shorter payback periods are generally considered less risky.</li>
          <li><strong>Small Businesses:</strong> It's a great tool for businesses with limited capital that need to prioritize projects with quick returns.</li>
        </ul>

        <h3>Limitations of the Payback Period</h3>
        <p>
          While useful, the payback period has several significant drawbacks:
        </p>
        <ul>
          <li><strong>Ignores the Time Value of Money:</strong> It treats a dollar received in year 5 the same as a dollar received in year 1.</li>
          <li><strong>Ignores Cash Flows After Payback:</strong> It doesn't account for any profit generated after the initial investment is recovered.</li>
          <li><strong>No Profitability Measure:</strong> A project with a short payback period might be less profitable overall than a project with a longer payback period.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is a "good" payback period?</h4>
            <p>A "good" payback period depends on the industry and the company's goals. Many businesses aim for a payback period of 2 to 4 years for equipment or technology investments.</p>
          </div>
          <div>
            <h4 className="font-bold">What is the "Discounted Payback Period"?</h4>
            <p>The discounted payback period is a more advanced version of this metric that accounts for the time value of money by discounting future cash flows back to their present value before calculating the payback time.</p>
          </div>
          <div>
            <h4 className="font-bold">Should I use payback period as my only metric?</h4>
            <p>No, it's best to use the payback period alongside other metrics like **Net Present Value (NPV)** and **Internal Rate of Return (IRR)** to get a complete picture of an investment's value.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
