import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const FutureValueCalculator: React.FC = () => {
  const [presentValue, setPresentValue] = useState<number>(10000);
  const [interestRate, setInterestRate] = useState<number>(7);
  const [years, setYears] = useState<number>(10);
  const [compounding, setCompounding] = useState<number>(1);
  const [futureValue, setFutureValue] = useState<number>(0);

  useEffect(() => {
    const r = interestRate / 100 / compounding;
    const n = years * compounding;
    
    // Future Value Formula: FV = PV * (1 + r)^n
    const fv = presentValue * Math.pow(1 + r, n);
    setFutureValue(fv);
  }, [presentValue, interestRate, years, compounding]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Future Value Calculator [Updated for 2026]</title>
        <meta name="description" content="Free online future value calculator. Calculate the future value of a current sum of money based on a specific interest rate and time period." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Future Value Calculator</h1>
        <p className="text-slate-600">
          Determine the future value of a current sum of money, accounting for the time value of money and a specific interest rate.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Calculation Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Present Value ($)</label>
              <input
                type="number"
                value={presentValue}
                onChange={(e) => setPresentValue(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Annual Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Number of Years</label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Compounding Frequency</label>
              <select
                value={compounding}
                onChange={(e) => setCompounding(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none bg-white"
              >
                <option value={1}>Annually</option>
                <option value={2}>Semiannually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
                <option value={365}>Daily</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl font-semibold mb-4">Future Value (FV)</h2>
          <div className="space-y-4">
            <p className="text-6xl font-bold text-[#0066cc]">${futureValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p className="text-sm text-slate-500 max-w-xs mx-auto">
              This is what ${presentValue.toLocaleString()} today will be worth in {years} years at a {interestRate}% interest rate.
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Future Value (FV)?</h2>
        <p>
          Future Value (FV) is a financial concept that calculates the value of a current asset at a specified date in the future based on an assumed rate of growth. It is the core of all investment planning, helping you understand how much your money will grow over time through the power of compounding.
        </p>
        
        <h3>The Power of Compounding</h3>
        <p>
          The time value of money is the core principle behind future value. It assumes that a dollar today is worth more than a dollar tomorrow because of its potential earning capacity. This core principle of finance holds that, provided money can earn interest, any amount of money is worth more the sooner it is received.
        </p>

        <h3>How to Use the Future Value Calculator</h3>
        <p>
          To calculate the future value of a current sum, you need to provide:
        </p>
        <ul>
          <li><strong>Present Value:</strong> The amount of money you have today to invest.</li>
          <li><strong>Annual Interest Rate:</strong> The expected rate of return or the interest rate you will earn on your investment.</li>
          <li><strong>Number of Years:</strong> The time period for which the money will be invested.</li>
          <li><strong>Compounding Frequency:</strong> How often the interest is calculated and added to the principal.</li>
        </ul>

        <h3>The Future Value Formula</h3>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
          FV = PV * (1 + r)^n
        </div>
        <p>Where:</p>
        <ul>
          <li><strong>FV</strong> = Future Value</li>
          <li><strong>PV</strong> = Present Value</li>
          <li><strong>r</strong> = Rate of return (interest rate) per period</li>
          <li><strong>n</strong> = Number of periods</li>
        </ul>

        <h3>Why Future Value is Important</h3>
        <p>
          Future value is a fundamental tool used in many areas of finance, including:
        </p>
        <ul>
          <li><strong>Investment Planning:</strong> Determining how much your current savings will grow into by the time you need them.</li>
          <li><strong>Retirement Planning:</strong> Estimating the future size of your nest egg.</li>
          <li><strong>Goal Setting:</strong> Calculating how much you need to save today to reach a specific goal in the future.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is compounding?</h4>
            <p>Compounding is the process where the value of an investment increases because the earnings on an investment, both capital gains and interest, earn interest as time passes. This exponential growth is why starting to save early is so important.</p>
          </div>
          <div>
            <h4 className="font-bold">What happens to FV as interest rates rise?</h4>
            <p>As interest rates rise, the future value of a current sum of money increases. This is because the money you have today has a higher earning potential, making it grow faster over time.</p>
          </div>
          <div>
            <h4 className="font-bold">What is the difference between simple and compound interest?</h4>
            <p>Simple interest is calculated only on the principal amount of a loan or deposit. Compound interest is calculated on the principal amount and also on the accumulated interest of previous periods.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
