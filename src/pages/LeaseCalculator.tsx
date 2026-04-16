import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const LeaseCalculator: React.FC = () => {
  const [assetPrice, setAssetPrice] = useState<number>(25000);
  const [downPayment, setDownPayment] = useState<number>(2000);
  const [leaseTerm, setLeaseTerm] = useState<number>(36);
  const [interestRate, setInterestRate] = useState<number>(6);
  const [residualValue, setResidualValue] = useState<number>(12000);
  const [salesTax, setSalesTax] = useState<number>(7);

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [depreciationFee, setDepreciationFee] = useState<number>(0);
  const [financeFee, setFinanceFee] = useState<number>(0);

  useEffect(() => {
    const capitalizedCost = assetPrice - downPayment;
    const moneyFactor = (interestRate / 100) / 24;
    
    // Depreciation Fee = (Cap Cost - Residual) / Term
    const depFee = (capitalizedCost - residualValue) / leaseTerm;
    
    // Finance Fee = (Cap Cost + Residual) * Money Factor
    const finFee = (capitalizedCost + residualValue) * moneyFactor;
    
    const basePayment = depFee + finFee;
    const taxAmount = basePayment * (salesTax / 100);
    const totalMonthly = basePayment + taxAmount;

    setMonthlyPayment(totalMonthly);
    setDepreciationFee(depFee);
    setFinanceFee(finFee);
    setTotalCost(totalMonthly * leaseTerm + downPayment);
  }, [assetPrice, downPayment, leaseTerm, interestRate, residualValue, salesTax]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Lease Calculator | General Asset Lease Payments 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online lease calculator. Estimate monthly payments for any leased asset, including equipment, vehicles, and more. Calculate depreciation and finance fees." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Lease Calculator</h1>
        <p className="text-slate-600">
          Calculate the estimated monthly payment for any leased asset by accounting for the price, residual value, and interest rate.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Lease Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Asset Price ($)</label>
              <input
                type="number"
                value={assetPrice}
                onChange={(e) => setAssetPrice(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Down Payment ($)</label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Lease Term (Months)</label>
                <input
                  type="number"
                  value={leaseTerm}
                  onChange={(e) => setLeaseTerm(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Interest Rate (%)</label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Sales Tax (%)</label>
                <input
                  type="number"
                  value={salesTax}
                  onChange={(e) => setSalesTax(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Residual Value ($)</label>
              <input
                type="number"
                value={residualValue}
                onChange={(e) => setResidualValue(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Lease Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Monthly Payment</p>
              <p className="text-4xl font-bold text-[#0066cc]">${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Depreciation Fee</p>
                <p className="text-xl font-semibold text-slate-900">${depreciationFee.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Finance Fee</p>
                <p className="text-xl font-semibold text-slate-900">${financeFee.toFixed(2)}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Cost of Lease</p>
              <p className="text-2xl font-semibold text-slate-900">${totalCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>How Leasing Works</h2>
        <p>
          Leasing is a financial arrangement where you pay for the use of an asset (like a car, piece of equipment, or property) for a specific period of time. Instead of paying for the entire value of the asset, you only pay for the **depreciation** that occurs during the time you have it, plus interest and fees.
        </p>
        
        <h3>How to Use the Lease Calculator</h3>
        <p>
          To get an accurate estimate of your lease payment, you need to provide:
        </p>
        <ul>
          <li><strong>Asset Price:</strong> The total cost of the asset you are leasing.</li>
          <li><strong>Down Payment:</strong> The amount of cash you pay upfront to reduce the monthly payment.</li>
          <li><strong>Lease Term:</strong> The length of the lease in months.</li>
          <li><strong>Interest Rate:</strong> The annual interest rate on the lease.</li>
          <li><strong>Residual Value:</strong> The estimated value of the asset at the end of the lease.</li>
        </ul>

        <h3>The Lease Payment Formula</h3>
        <p>
          A lease payment consists of two main parts:
        </p>
        <ol>
          <li><strong>Depreciation Fee:</strong> (Net Capitalized Cost - Residual Value) / Term</li>
          <li><strong>Finance Fee:</strong> (Net Capitalized Cost + Residual Value) * Money Factor</li>
        </ol>
        <p>The sum of these two fees, plus sales tax, equals your total monthly payment.</p>

        <h3>Leasing vs. Buying</h3>
        <p>
          Leasing is a good option if you want lower monthly payments and don't want to own the asset outright. However, you don't build any equity in the asset, and you may face mileage or usage limits. Buying is better if you plan to keep the asset for a long time and want to eventually own it.
        </p>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is a money factor?</h4>
            <p>The money factor is the interest rate on a lease. To convert a standard APR to a money factor, divide by 2400. To convert a money factor back to an APR, multiply by 2400.</p>
          </div>
          <div>
            <h4 className="font-bold">Can I negotiate the residual value?</h4>
            <p>No, the residual value is typically set by the leasing company and is not negotiable. However, you can negotiate the asset's price and sometimes the interest rate.</p>
          </div>
          <div>
            <h4 className="font-bold">What happens if I want to end the lease early?</h4>
            <p>Most leases have an early termination fee, which can be quite expensive. It's always a good idea to check with your leasing company before you sign the lease agreement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
