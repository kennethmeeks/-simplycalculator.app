import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const PresentValueCalculator: React.FC = () => {
  const [futureValue, setFutureValue] = useState<number>(10000);
  const [interestRate, setInterestRate] = useState<number>(7);
  const [years, setYears] = useState<number>(10);
  const [compounding, setCompounding] = useState<number>(1);
  const [presentValue, setPresentValue] = useState<number>(0);

  useEffect(() => {
    const r = interestRate / 100 / compounding;
    const n = years * compounding;
    
    // Present Value Formula: PV = FV / (1 + r)^n
    const pv = futureValue / Math.pow(1 + r, n);
    setPresentValue(pv);
  }, [futureValue, interestRate, years, compounding]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Present Value Calculator [100% Private]</title>
        <meta name="description" content="Free online present value calculator. Calculate the current value of a future sum of money based on a specific interest rate and time period." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Present Value Calculator</h1>
        <p className="text-slate-600">
          Determine the current value of a future sum of money, accounting for the time value of money and a specific interest rate.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Calculation Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Future Value ($)</label>
              <input
                type="number"
                value={futureValue}
                onChange={(e) => setFutureValue(Number(e.target.value))}
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
          <h2 className="text-xl font-semibold mb-4">Present Value (PV)</h2>
          <div className="space-y-4">
            <p className="text-6xl font-bold text-[#0066cc]">${presentValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p className="text-sm text-slate-500 max-w-xs mx-auto">
              This is what ${futureValue.toLocaleString()} in {years} years is worth today at a {interestRate}% interest rate.
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Present Value (PV)?</h2>
        <p>
          Present Value (PV) is a financial concept that states that an amount of money today is worth more than the same amount in the future. This is because money today can be invested and earn interest over time. Present value is the current value of a future sum of money or stream of cash flows given a specified rate of return.
        </p>
        
        <h3>The Time Value of Money</h3>
        <p>
          The time value of money is the core principle behind present value. It assumes that a dollar today is worth more than a dollar tomorrow because of its potential earning capacity. This core principle of finance holds that, provided money can earn interest, any amount of money is worth more the sooner it is received.
        </p>

        <h3>How to Use the Present Value Calculator</h3>
        <p>
          To calculate the present value of a future sum, you need to provide:
        </p>
        <ul>
          <li><strong>Future Value:</strong> The amount of money you expect to receive or have in the future.</li>
          <li><strong>Annual Interest Rate:</strong> The discount rate or the rate of return you could earn on an alternative investment.</li>
          <li><strong>Number of Years:</strong> The time period until the future value is received.</li>
          <li><strong>Compounding Frequency:</strong> How often the interest is calculated and added to the principal.</li>
        </ul>

        <h3>The Present Value Formula</h3>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
          PV = FV / (1 + r)^n
        </div>
        <p>Where:</p>
        <ul>
          <li><strong>PV</strong> = Present Value</li>
          <li><strong>FV</strong> = Future Value</li>
          <li><strong>r</strong> = Rate of return (interest rate) per period</li>
          <li><strong>n</strong> = Number of periods</li>
        </ul>

        <h3>Why Present Value is Important</h3>
        <p>
          Present value is a fundamental tool used in many areas of finance, including:
        </p>
        <ul>
          <li><strong>Investment Appraisal:</strong> Comparing the cost of an investment today with the present value of its future returns.</li>
          <li><strong>Retirement Planning:</strong> Determining how much you need to save today to reach a specific goal in the future.</li>
          <li><strong>Loan Valuation:</strong> Calculating the current value of future loan payments.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is the discount rate?</h4>
            <p>The discount rate is the interest rate used in present value calculations to discount future cash flows back to their present value. It represents the "opportunity cost" of not having the money today.</p>
          </div>
          <div>
            <h4 className="font-bold">What happens to PV as interest rates rise?</h4>
            <p>As interest rates (the discount rate) rise, the present value of a future sum of money decreases. This is because the money you have today has a higher earning potential, making future money less valuable by comparison.</p>
          </div>
          <div>
            <h4 className="font-bold">What is "Net Present Value" (NPV)?</h4>
            <p>Net Present Value is the difference between the present value of cash inflows and the present value of cash outflows over a period of time. It's a key metric used to determine the profitability of an investment or project.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
