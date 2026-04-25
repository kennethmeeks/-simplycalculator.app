import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';

import { Car, TrendingDown, DollarSign, Calendar, Info } from 'lucide-react';

export const CarLeaseCalculator: React.FC = () => {
  const [msrp, setMsrp] = useState<number>(35000);
  const [negotiatedPrice, setNegotiatedPrice] = useState<number>(32000);
  const [downPayment, setDownPayment] = useState<number>(3000);
  const [residualValue, setResidualValue] = useState<number>(60); // Percentage
  const [leaseTerm, setLeaseTerm] = useState<number>(36); // Months
  const [moneyFactor, setMoneyFactor] = useState<number>(0.0025);
  const [salesTax, setSalesTax] = useState<number>(7); // Percentage
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    // 1. Capitalized Cost = Negotiated Price - Down Payment
    const capCost = negotiatedPrice - downPayment;
    
    // 2. Residual Value = MSRP * (Residual % / 100)
    const resValue = msrp * (residualValue / 100);
    
    // 3. Monthly Depreciation = (Cap Cost - Residual Value) / Lease Term
    const monthlyDepreciation = (capCost - resValue) / leaseTerm;
    
    // 4. Monthly Rent Charge = (Cap Cost + Residual Value) * Money Factor
    const monthlyRentCharge = (capCost + resValue) * moneyFactor;
    
    // 5. Base Monthly Payment = Monthly Depreciation + Monthly Rent Charge
    const basePayment = monthlyDepreciation + monthlyRentCharge;
    
    // 6. Total Monthly Payment = Base Payment * (1 + Sales Tax / 100)
    const totalPayment = basePayment * (1 + salesTax / 100);
    
    setMonthlyPayment(Number(totalPayment.toFixed(2)));
    setTotalCost(Number((totalPayment * leaseTerm + downPayment).toFixed(2)));
  }, [msrp, negotiatedPrice, downPayment, residualValue, leaseTerm, moneyFactor, salesTax]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Car Lease Calculator | Calculate Monthly Lease Payments</title>
        <meta name="description" content="Free online car lease calculator. Estimate your monthly lease payments, depreciation, and total cost of leasing a vehicle in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Car Lease Calculator</h1>
        <p className="text-slate-600">Calculate your monthly car lease payment by entering the vehicle's price, residual value, and lease terms.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">MSRP ($)</label>
                <input 
                  type="number" 
                  value={msrp} 
                  onChange={(e) => setMsrp(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Negotiated Price ($)</label>
                <input 
                  type="number" 
                  value={negotiatedPrice} 
                  onChange={(e) => setNegotiatedPrice(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Down Payment ($)</label>
                <input 
                  type="number" 
                  value={downPayment} 
                  onChange={(e) => setDownPayment(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Lease Term (Months)</label>
                <input 
                  type="number" 
                  value={leaseTerm} 
                  onChange={(e) => setLeaseTerm(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Residual Value (%)</label>
                <input 
                  type="number" 
                  value={residualValue} 
                  onChange={(e) => setResidualValue(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Money Factor (e.g., 0.0025)</label>
                <input 
                  type="number" 
                  step="0.0001"
                  value={moneyFactor} 
                  onChange={(e) => setMoneyFactor(Number(e.target.value))} 
                  className="input-field" 
                />
                <p className="text-[10px] text-slate-400 mt-1 italic">Multiply by 2400 to get APR.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Leasing Terms Explained
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Residual Value:</strong> The estimated value of the car at the end of the lease.</li>
              <li><strong>Money Factor:</strong> The interest rate on the lease, expressed as a decimal.</li>
              <li><strong>Capitalized Cost:</strong> The total amount being financed (Negotiated Price - Down Payment).</li>
              <li><strong>Rent Charge:</strong> The interest portion of your monthly lease payment.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-[#f0f7ff] border border-[#0066cc]/20 text-[#0066cc]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0066cc]">
              <DollarSign className="w-5 h-5" />
              Lease Results
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-[#0066cc]/10">
                <div className="text-4xl font-bold mb-1 text-[#0066cc]">${monthlyPayment}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Monthly Payment</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1 text-[#0066cc]">${totalCost.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Cost of Lease</div>
              </div>
              <div className="pt-4 border-t border-[#0066cc]/10">
                <ResultActions 
                  onReset={() => {
                    setMsrp(35000);
                    setNegotiatedPrice(32000);
                    setDownPayment(3000);
                    setResidualValue(60);
                    setLeaseTerm(36);
                    setMoneyFactor(0.0025);
                    setSalesTax(7);
                  }}
                  onCopy={() => {
                    const text = `Car Lease Results:\nMonthly Payment: $${monthlyPayment}\nTotal Cost: $${totalCost.toLocaleString()}\nCalculated at simplycalculator.app`;
                    navigator.clipboard.writeText(text);
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
              Leasing Tips
            </h3>
            <ul className="text-sm text-slate-600 space-y-3">
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Negotiate the "Cap Cost" just like a purchase.
              </li>
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Check for manufacturer lease specials.
              </li>
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Be aware of mileage limits and overage fees.
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Car Lease Calculator" 
        path="/car-lease-calculator" 
        description="Estimate monthly payments for your next vehicle lease. Factor in money factor, residual value, and negotiate the best deal in 2026."
      />
    </div>
  );
};
