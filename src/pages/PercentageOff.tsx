import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


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

      <CalculatorSEO 
        name="Percentage Off Calculator" 
        path="/percentage-off" 
        description="Calculate the final price and total savings after a percentage discount. Perfect for shopping sales and budget planning in 2026."
      />
    </div>
  );
};
