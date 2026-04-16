import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const DiscountCalculator: React.FC = () => {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState(20);
  const [tax, setTax] = useState(8);

  const [savings, setSavings] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    const saved = price * (discount / 100);
    const discountedPrice = price - saved;
    const taxAmount = discountedPrice * (tax / 100);
    setSavings(saved);
    setFinalPrice(discountedPrice + taxAmount);
  }, [price, discount, tax]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Discount Calculator | Calculate Sale Price & Savings with Tax</title>
        <meta name="description" content="Calculate sale prices and total savings with our free discount calculator. Includes sales tax calculation for accurate shopping estimates in 2026." />
      </Helmet>

      <h1>Discount Calculator</h1>
      <p>Find out how much you save on sales and calculate the final price after discount and sales tax.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Original Price ($)</label>
              <input 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Discount (%)</label>
              <input 
                type="number" 
                value={discount} 
                onChange={(e) => setDiscount(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Sales Tax (%)</label>
              <input 
                type="number" 
                value={tax} 
                onChange={(e) => setTax(Number(e.target.value))} 
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
        <h2 className="text-2xl font-bold text-slate-900">About Discount Calculations</h2>
        <p>
          Whether you're shopping during a holiday sale or using a coupon code, understanding how much you're actually saving is key to smart spending. Our <strong>discount calculator with sales tax</strong> makes it easy to determine your total savings and the final price, even after accounting for local sales tax. In 2026, being a savvy shopper means knowing the real cost before you reach the checkout.
        </p>
        <p>
          Discounts can be tricky, especially when they are stacked or when tax is involved. Our tool simplifies the math so you can compare deals across different stores and make the best financial decisions.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Discount Calculator</h3>
        <p>
          Simply enter the following details to see your final price:
        </p>
        <ol>
          <li><strong>Original Price:</strong> The price of the item before any discounts are applied.</li>
          <li><strong>Discount (%):</strong> The percentage off being offered (e.g., 20%, 50%).</li>
          <li><strong>Sales Tax (%):</strong> Your local sales tax rate, which is applied to the discounted price.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Discount Formula</h3>
        <p>
          To calculate the final price manually, you can use these steps:
        </p>
        <ul>
          <li><strong>Savings:</strong> Original Price × (Discount / 100)</li>
          <li><strong>Sale Price:</strong> Original Price - Savings</li>
          <li><strong>Tax Amount:</strong> Sale Price × (Tax Rate / 100)</li>
          <li><strong>Final Price:</strong> Sale Price + Tax Amount</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Is sales tax calculated before or after the discount?</p>
            <p>In most jurisdictions, sales tax is calculated based on the final, discounted price of the item, not the original price. Our calculator follows this standard practice to give you the most accurate estimate.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I calculate "Buy One, Get One 50% Off"?</p>
            <p>For a "BOGO 50%" deal on two identical items, the effective discount on the total purchase is 25%. You can enter the combined original price of both items and use 25% as the discount rate in our calculator.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What if there are multiple discounts?</p>
            <p>If you have a 20% store discount and a 10% coupon, they are usually applied sequentially. First, take 20% off the original price, then take 10% off that new subtotal. The total discount is not a simple 30% (it's actually 28%).</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is a "Double Discount"?</p>
            <p>A double discount occurs when a store allows you to apply a coupon on top of an already discounted sale item. This is often where the biggest savings are found!</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          Imagine you find a pair of shoes originally priced at <strong>$120</strong> with a <strong>30% discount</strong>. Your local sales tax is <strong>8.5%</strong>. The discount saves you <strong>$36</strong>, making the subtotal <strong>$84</strong>. After adding the <strong>$7.14</strong> in sales tax, your final price at the register would be <strong>$91.14</strong>.
        </p>
      </div>
    </div>
  );
};
