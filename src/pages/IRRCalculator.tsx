import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const IRRCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(100000);
  const [cashFlows, setCashFlows] = useState<string>('20000, 30000, 40000, 50000');
  const [irr, setIrr] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const calculateNPV = (rate: number, initial: number, flows: number[]) => {
    let npv = -initial;
    for (let i = 0; i < flows.length; i++) {
      npv += flows[i] / Math.pow(1 + rate, i + 1);
    }
    return npv;
  };

  useEffect(() => {
    const flows = cashFlows.split(',').map(s => s.trim()).filter(s => s !== '').map(Number);
    
    if (flows.some(isNaN)) {
      setError('Please enter valid numbers separated by commas.');
      return;
    }
    
    setError('');

    // IRR Calculation using Newton's method or simple bisection
    let low = -1.0;
    let high = 10.0;
    let guess = 0.1;
    let precision = 0.00001;
    let maxIterations = 1000;

    for (let i = 0; i < maxIterations; i++) {
      const npv = calculateNPV(guess, initialInvestment, flows);
      if (Math.abs(npv) < precision) break;

      if (npv > 0) {
        low = guess;
      } else {
        high = guess;
      }
      guess = (low + high) / 2;
    }

    setIrr(guess * 100);
  }, [initialInvestment, cashFlows]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>IRR Calculator [Free & No Sign-up]</title>
        <meta name="description" content="Free online IRR calculator. Calculate the Internal Rate of Return (IRR) for your investment projects based on initial cost and periodic cash flows." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">IRR Calculator</h1>
        <p className="text-slate-600">
          The Internal Rate of Return (IRR) is a metric used in financial analysis to estimate the profitability of potential investments. Use this calculator to see the expected return on your projects.
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
              <label className="block text-sm font-medium text-slate-700 mb-1">Cash Flows per Period ($, comma separated)</label>
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
          <h2 className="text-xl font-semibold mb-4">Internal Rate of Return (IRR)</h2>
          <div className="space-y-4">
            <p className="text-6xl font-bold text-[#0066cc]">{irr.toFixed(2)}%</p>
            <p className="text-sm text-slate-500 max-w-xs mx-auto">
              This is the discount rate that makes the Net Present Value (NPV) of all cash flows equal to zero.
            </p>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="IRR Calculator" 
        path="/irr-calculator" 
        description="Calculate the Internal Rate of Return (IRR) for your investment projects. Evaluate profitability and make informed capital budgeting decisions in 2026."
      />
    </div>
  );
};
