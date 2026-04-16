import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const AutoLeaseCalculator: React.FC = () => {
  const [vehiclePrice, setVehiclePrice] = useState<number>(35000);
  const [downPayment, setDownPayment] = useState<number>(3000);
  const [tradeInValue, setTradeInValue] = useState<number>(0);
  const [leaseTerm, setLeaseTerm] = useState<number>(36);
  const [moneyFactor, setMoneyFactor] = useState<number>(0.0025);
  const [residualValue, setResidualValue] = useState<number>(20000);
  const [salesTax, setSalesTax] = useState<number>(7);

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [depreciationFee, setDepreciationFee] = useState<number>(0);
  const [financeFee, setFinanceFee] = useState<number>(0);

  useEffect(() => {
    const capitalizedCost = vehiclePrice - downPayment - tradeInValue;
    
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
    setTotalCost(totalMonthly * leaseTerm + downPayment + tradeInValue);
  }, [vehiclePrice, downPayment, tradeInValue, leaseTerm, moneyFactor, residualValue, salesTax]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Auto Lease Calculator | Estimate Monthly Payments 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online auto lease calculator. Estimate your monthly car lease payments, including depreciation, finance fees, and sales tax." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Auto Lease Calculator</h1>
        <p className="text-slate-600">
          Determine your estimated monthly car lease payment by accounting for the vehicle's price, residual value, and the money factor.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Lease Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Vehicle Price ($)</label>
              <input
                type="number"
                value={vehiclePrice}
                onChange={(e) => setVehiclePrice(Number(e.target.value))}
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
                <label className="block text-sm font-medium text-slate-700 mb-1">Trade-In ($)</label>
                <input
                  type="number"
                  value={tradeInValue}
                  onChange={(e) => setTradeInValue(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Lease Term (Months)</label>
                <input
                  type="number"
                  value={leaseTerm}
                  onChange={(e) => setLeaseTerm(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Money Factor</label>
                <input
                  type="number"
                  step="0.0001"
                  value={moneyFactor}
                  onChange={(e) => setMoneyFactor(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
                <p className="text-[10px] text-slate-500 mt-1">APR / 2400</p>
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
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation provides an estimate. Dealership fees and local taxes may vary.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>How Auto Leasing Works</h2>
        <p>
          Leasing a car is essentially renting it for a long period (usually 2 to 4 years). Instead of paying for the entire value of the car, you only pay for the **depreciation** that occurs during the time you have the vehicle, plus interest and fees.
        </p>
        
        <h3>How to Use the Auto Lease Calculator</h3>
        <p>
          To get an accurate estimate of your lease payment, you need to provide:
        </p>
        <ul>
          <li><strong>Vehicle Price:</strong> The negotiated price of the car (also known as the "Gross Capitalized Cost").</li>
          <li><strong>Down Payment:</strong> The amount of cash you pay upfront to reduce the monthly payment.</li>
          <li><strong>Trade-In:</strong> The value of your current car if you are trading it in.</li>
          <li><strong>Lease Term:</strong> The length of the lease in months.</li>
          <li><strong>Money Factor:</strong> The interest rate on the lease. To convert a standard APR to a money factor, divide by 2400.</li>
          <li><strong>Residual Value:</strong> The estimated value of the car at the end of the lease. This is usually set by the manufacturer.</li>
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
          Leasing is a good option if you like to drive a new car every few years and want lower monthly payments. However, you don't build any equity in the vehicle, and you may face mileage limits and wear-and-tear charges at the end of the lease. Buying is better if you plan to keep the car for a long time and want to eventually own it outright.
        </p>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is a "good" money factor?</h4>
            <p>A good money factor depends on current interest rates and your credit score. For example, a money factor of 0.0025 is roughly equivalent to a 6% APR (0.0025 * 2400 = 6).</p>
          </div>
          <div>
            <h4 className="font-bold">Can I negotiate the residual value?</h4>
            <p>No, the residual value is typically set by the leasing company (the "lessor") and is not negotiable. However, you can negotiate the vehicle's price (capitalized cost) and sometimes the money factor.</p>
          </div>
          <div>
            <h4 className="font-bold">What happens if I go over the mileage limit?</h4>
            <p>Most leases have a limit of 10,000 to 15,000 miles per year. If you exceed this limit, you will be charged a fee for every extra mile (usually $0.15 to $0.25 per mile) when you return the car.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
