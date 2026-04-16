import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const PercentageOff: React.FC = () => {
  const [originalPrice, setOriginalPrice] = useState<number>(100);
  const [percentOff, setPercentOff] = useState<number>(20);
  const [savings, setSavings] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<number>(0);

  useEffect(() => {
    const saved = originalPrice * (percentOff / 100);
    setSavings(saved);
    setFinalPrice(originalPrice - saved);
  }, [originalPrice, percentOff]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Percentage Off Calculator | Calculate Sale Price & Savings 2026</title>
        <meta name="description" content="Free online percentage off calculator for 2026. Quickly calculate how much you save on sales and find the final price after discount." />
      </Helmet>

      <h1>Percentage Off Calculator</h1>
      <p>Quickly find out how much you save on sales and calculate the final price after a percentage discount.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Original Price ($)</label>
              <input 
                type="number" 
                value={originalPrice} 
                onChange={(e) => setOriginalPrice(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Percent Off (%)</label>
              <input 
                type="number" 
                value={percentOff} 
                onChange={(e) => setPercentOff(Number(e.target.value))} 
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
                  <span className="font-bold">You Save:</span>
                  <span className="font-bold text-[#0066cc]">${savings.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold">Final Price:</span>
                  <span className="text-2xl font-bold text-[#0066cc]">${finalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Calculate Percentage Off</h2>
        <p>
          Calculating a percentage off is a common task when shopping or managing a budget. Whether it's a 20% store-wide sale or a 50% clearance event, knowing your final price helps you make informed decisions.
        </p>
        <p>
          Our <strong>percentage off calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Formula</h3>
        <p>
          To calculate the savings and final price manually, use these simple formulas:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Savings:</strong> Original Price × (Percent Off / 100)</li>
          <li><strong>Final Price:</strong> Original Price - Savings</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If an item is originally priced at <strong>$80</strong> and is on sale for <strong>25% off</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Savings:</strong> $80 × 0.25 = $20</li>
          <li><strong>Final Price:</strong> $80 - $20 = $60</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Shopping Tips</h3>
        <p>
          When shopping during sales, keep these tips in mind:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Compare Prices:</strong> A 50% discount at one store might still be more expensive than the regular price at another.</li>
          <li><strong>Check for Exclusions:</strong> Many sales exclude certain brands or categories. Always read the fine print.</li>
          <li><strong>Stack Coupons:</strong> Some stores allow you to use a coupon on top of a sale price for even deeper savings.</li>
        </ol>
      </div>
    </div>
  );
};
