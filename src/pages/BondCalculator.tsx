import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const BondCalculator: React.FC = () => {
  const [faceValue, setFaceValue] = useState<number>(1000);
  const [couponRate, setCouponRate] = useState<number>(5);
  const [marketRate, setMarketRate] = useState<number>(4);
  const [yearsToMaturity, setYearsToMaturity] = useState<number>(10);
  const [paymentFrequency, setPaymentFrequency] = useState<number>(2);

  const [bondPrice, setBondPrice] = useState<number>(0);
  const [currentYield, setCurrentYield] = useState<number>(0);

  useEffect(() => {
    const r = marketRate / 100 / paymentFrequency;
    const n = yearsToMaturity * paymentFrequency;
    const c = (faceValue * (couponRate / 100)) / paymentFrequency;
    
    // Bond Price Formula: P = C * [1 - (1+r)^-n] / r + F / (1+r)^n
    const pvCoupons = r > 0 ? c * (1 - Math.pow(1 + r, -n)) / r : c * n;
    const pvFaceValue = faceValue / Math.pow(1 + r, n);
    
    const price = pvCoupons + pvFaceValue;
    
    setBondPrice(price);
    setCurrentYield((faceValue * (couponRate / 100)) / price * 100);
  }, [faceValue, couponRate, marketRate, yearsToMaturity, paymentFrequency]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Bond Price Calculator | Calculate Bond Yield 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online bond calculator. Estimate the current price and yield of a bond based on its face value, coupon rate, market rate, and maturity." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Bond Calculator</h1>
        <p className="text-slate-600">
          Determine the current price and yield of a bond by accounting for its face value, coupon rate, market interest rate, and years to maturity.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Bond Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Face Value ($)</label>
              <input
                type="number"
                value={faceValue}
                onChange={(e) => setFaceValue(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Coupon Rate (%)</label>
                <input
                  type="number"
                  value={couponRate}
                  onChange={(e) => setCouponRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Market Rate (%)</label>
                <input
                  type="number"
                  value={marketRate}
                  onChange={(e) => setMarketRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Years to Maturity</label>
                <input
                  type="number"
                  value={yearsToMaturity}
                  onChange={(e) => setYearsToMaturity(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Payment Frequency</label>
                <select
                  value={paymentFrequency}
                  onChange={(e) => setPaymentFrequency(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none bg-white"
                >
                  <option value={1}>Annually</option>
                  <option value={2}>Semi-Annually</option>
                  <option value={4}>Quarterly</option>
                  <option value={12}>Monthly</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Bond Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Bond Price</p>
              <p className="text-4xl font-bold text-[#0066cc]">${bondPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <p className="text-sm text-slate-500 mt-1">
                {bondPrice > faceValue ? 'Trading at a Premium' : bondPrice < faceValue ? 'Trading at a Discount' : 'Trading at Par'}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Current Yield</p>
              <p className="text-xl font-semibold text-slate-900">{currentYield.toFixed(2)}%</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <ResultActions 
                onReset={() => {
                  setFaceValue(1000);
                  setCouponRate(5);
                  setMarketRate(4);
                  setYearsToMaturity(10);
                  setPaymentFrequency(2);
                }}
                onCopy={() => {
                  const text = `Bond Results:\nPrice: $${bondPrice.toFixed(2)}\nCurrent Yield: ${currentYield.toFixed(2)}%\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
              <p className="text-xs text-slate-500 italic mt-4">
                Note: This calculation provides an estimate. Actual bond prices may vary based on credit risk and market liquidity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Bond Calculator" 
        path="/bond" 
        description="Estimate current bond prices and yields based on face value, coupon rates, and market conditions. Plan your 2026 fixed-income investments with precision."
      />
    </div>
  );
};
