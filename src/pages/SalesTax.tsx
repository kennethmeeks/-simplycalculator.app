import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

import { ShoppingCart, DollarSign, Percent, Tag } from 'lucide-react';

export const SalesTaxCalculator: React.FC = () => {
  const [price, setPrice] = useState(100);
  const [taxRate, setTaxRate] = useState(8.25);
  
  const [taxAmount, setTaxAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const tax = price * (taxRate / 100);
    const total = price + tax;
    
    setTaxAmount(Number(tax.toFixed(2)));
    setTotalPrice(Number(total.toFixed(2)));
  }, [price, taxRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Sales Tax Calculator | Calculate Final Price & Tax Amount</title>
        <meta name="description" content="Free online sales tax calculator to find the total cost of your purchases. Calculate tax amount and final price based on your local tax rate in 2026." />
      </Helmet>

      <h1>Sales Tax Calculator</h1>
      <p>Quickly calculate the total cost of an item including sales tax. Perfect for shopping, business expenses, and budgeting for large purchases.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Purchase Details</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Item Price ($)</label>
              <input 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Sales Tax Rate (%)</label>
              <input 
                type="number" 
                step="0.001"
                value={taxRate} 
                onChange={(e) => setTaxRate(Number(e.target.value))} 
                className="input-field" 
              />
              <p className="text-[10px] text-slate-400 mt-1 italic">Check your local city and state rates.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Total Cost</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Total Price</div>
                <div className="text-4xl font-bold text-[#0066cc]">${totalPrice.toLocaleString()}</div>
              </div>

              <div className="p-4 bg-slate-50 rounded border border-slate-100">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Sales Tax Amount</div>
                <div className="text-2xl font-bold text-[#0066cc]">${taxAmount.toLocaleString()}</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Sales Tax Calculator" 
        path="/sales-tax" 
        description="Calculate sales tax for any purchase based on your local tax rate. Plan your 2026 expense budgeting with accuracy."
      />

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Shopping Smart: A Sales Tax Guide</h2>
        <p>
          Sales tax is a consumption tax imposed by the government on the sale of goods and services. In many countries, including the United States, the price you see on the tag is not the final price you pay at the register. Our <strong>sales tax calculator</strong> helps you avoid "sticker shock" in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How Sales Tax is Calculated</h3>
        <p>
          The math for sales tax is a simple percentage calculation:
        </p>
        <div className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 my-4">
          Total Price = Net Price + (Net Price * Tax Rate)
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Understanding Tax Rates</h3>
        <p>
          In the United States, sales tax is managed at the state and local levels. There is no national sales tax. This means your total tax rate is often a combination of:
        </p>
        <ul>
          <li><strong>State Sales Tax:</strong> Set by the state government.</li>
          <li><strong>County Sales Tax:</strong> An additional percentage added by the county.</li>
          <li><strong>City Sales Tax:</strong> A further percentage added by the city.</li>
          <li><strong>Special District Tax:</strong> Taxes for specific projects like public transit or stadiums.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Tax-Exempt Items</h3>
        <p>
          Many states exempt certain categories of goods from sales tax to reduce the burden on consumers. Common exemptions include:
        </p>
        <ul>
          <li><strong>Groceries:</strong> Unprepared food items are often tax-free.</li>
          <li><strong>Prescription Drugs:</strong> Most medical necessities are exempt.</li>
          <li><strong>Clothing:</strong> Some states have "tax-free weekends" or exempt clothing under a certain dollar amount.</li>
          <li><strong>Services:</strong> In many states, professional services (like legal or accounting help) are not subject to sales tax.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Which states have no sales tax?</p>
            <p>As of 2026, Alaska, Delaware, Montana, New Hampshire, and Oregon do not have a statewide sales tax.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Do I pay sales tax on online purchases?</p>
            <p>Yes. Following the 2018 Supreme Court ruling in Wayfair v. South Dakota, most online retailers are now required to collect sales tax based on the shipping address of the customer.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is a Use Tax?</p>
            <p>Use tax is a companion to sales tax. If you buy something from out-of-state and the seller doesn't collect sales tax, you are technically required to report and pay "use tax" to your home state.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
