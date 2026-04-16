import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Car, TrendingDown, DollarSign, Calendar } from 'lucide-react';

export const CarDepreciationCalculator: React.FC = () => {
  const [purchasePrice, setPurchasePrice] = useState<number>(35000);
  const [years, setYears] = useState<number>(5);
  const [depreciationRate, setDepreciationRate] = useState<number>(15);
  const [futureValue, setFutureValue] = useState<number>(0);
  const [totalDepreciation, setTotalDepreciation] = useState<number>(0);

  useEffect(() => {
    // Formula: Future Value = Purchase Price * (1 - Rate/100)^Years
    const fv = purchasePrice * Math.pow(1 - depreciationRate / 100, years);
    setFutureValue(Number(fv.toFixed(2)));
    setTotalDepreciation(Number((purchasePrice - fv).toFixed(2)));
  }, [purchasePrice, years, depreciationRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Car Depreciation Calculator | Estimate Your Vehicle's Future Value</title>
        <meta name="description" content="Free online car depreciation calculator. Estimate your vehicle's future resale value and total depreciation over time in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Car Depreciation Calculator</h1>
        <p className="text-slate-600">Estimate how much your vehicle will be worth in the future based on typical depreciation rates.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Purchase Price ($)</label>
                <input 
                  type="number" 
                  value={purchasePrice} 
                  onChange={(e) => setPurchasePrice(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Years of Ownership</label>
                <input 
                  type="number" 
                  value={years} 
                  onChange={(e) => setYears(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div className="md:col-span-2">
                <label className="input-label">Annual Depreciation Rate (%)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="5" 
                    max="30" 
                    step="1"
                    value={depreciationRate} 
                    onChange={(e) => setDepreciationRate(Number(e.target.value))}
                    className="flex-1 accent-[#0066cc]"
                  />
                  <span className="font-bold text-[#0066cc] w-12">{depreciationRate}%</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1 italic">Typical rates range from 10% to 20% per year.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Car className="w-5 h-5" />
              Depreciation Factors
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Depreciation is the single largest cost of car ownership, often exceeding fuel, insurance, and maintenance combined. New cars can lose up to 20% of their value in the first year alone.
            </p>
            <ul className="mt-4 text-xs text-slate-500 space-y-2 list-disc pl-4">
              <li><strong>Mileage:</strong> Higher mileage leads to faster depreciation.</li>
              <li><strong>Condition:</strong> Well-maintained cars hold their value better.</li>
              <li><strong>Brand Reputation:</strong> Some brands (like Toyota or Honda) depreciate slower.</li>
              <li><strong>Market Demand:</strong> Popular models and colors retain more value.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <TrendingDown className="w-5 h-5" />
              Estimated Value
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-slate-800">
                <div className="text-4xl font-bold mb-1">${futureValue.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Future Resale Value</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">${totalDepreciation.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Value Lost</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Ownership Tips
            </h3>
            <ul className="text-sm text-slate-600 space-y-3">
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Buy 2-3 year old used cars.
              </li>
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Keep detailed service records.
              </li>
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Choose neutral colors (silver, white, black).
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Reality of Car Depreciation in 2026</h2>
        <p>
          Understanding <strong>car depreciation</strong> is essential for making a smart financial decision when purchasing a vehicle. Our calculator helps you visualize the true cost of ownership by showing how much value your car will lose over time.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Depreciation Curve</h3>
        <p>
          Depreciation is not a straight line. It is steepest in the first few years of a car's life.
        </p>
        <ul>
          <li><strong>Year 1:</strong> 15-20% loss in value.</li>
          <li><strong>Years 2-5:</strong> 10-15% loss per year.</li>
          <li><strong>After Year 5:</strong> Depreciation slows down as the car reaches its "floor" value.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Minimize Depreciation</h3>
        <p>
          While you can't stop depreciation entirely, you can slow it down:
        </p>
        <ul>
          <li><strong>Avoid "New Car Smell":</strong> Buying a car that is just 1-2 years old avoids the massive first-year drop in value.</li>
          <li><strong>Maintain Your Vehicle:</strong> Regular oil changes, tire rotations, and keeping the interior clean will help you get a better price when you sell.</li>
          <li><strong>Limit Your Mileage:</strong> The average driver covers 12,000-15,000 miles per year. Exceeding this will accelerate depreciation.</li>
          <li><strong>Choose Wisely:</strong> Research which models have the best resale value before you buy.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Do electric cars depreciate faster?</p>
            <p>Historically, EVs have depreciated faster due to rapid improvements in battery technology and concerns about battery longevity. However, as the market matures in 2026, this gap is closing for many popular models.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does a car's color affect its resale value?</p>
            <p>Yes. Neutral colors like white, silver, and black are the easiest to resell and generally hold their value better than "loud" colors like yellow or orange.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
