import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

import { DollarSign, Calculator, Info, TrendingUp } from 'lucide-react';

export const CapitalGainsTaxCalculator: React.FC = () => {
  const [purchasePrice, setPurchasePrice] = useState<number>(10000);
  const [sellingPrice, setSellingPrice] = useState<number>(15000);
  const [holdingPeriod, setHoldingPeriod] = useState<string>('long');
  const [annualIncome, setAnnualIncome] = useState<number>(50000);
  const [filingStatus, setFilingStatus] = useState<string>('single');
  const [capitalGain, setCapitalGain] = useState<number>(0);
  const [taxRate, setTaxRate] = useState<number>(0);
  const [taxAmount, setTaxAmount] = useState<number>(0);
  const [netProfit, setNetProfit] = useState<number>(0);

  useEffect(() => {
    const gain = sellingPrice - purchasePrice;
    setCapitalGain(gain);

    let rate = 0;
    if (holdingPeriod === 'short') {
      // Short-term capital gains are taxed as ordinary income
      if (annualIncome <= 11000) rate = 10;
      else if (annualIncome <= 44725) rate = 12;
      else if (annualIncome <= 95375) rate = 22;
      else rate = 24;
    } else {
      // Long-term capital gains tax rates (2026 estimates)
      if (filingStatus === 'single') {
        if (annualIncome <= 44625) rate = 0;
        else if (annualIncome <= 492300) rate = 15;
        else rate = 20;
      } else {
        if (annualIncome <= 89250) rate = 0;
        else if (annualIncome <= 553850) rate = 15;
        else rate = 20;
      }
    }

    setTaxRate(rate);
    const tax = gain > 0 ? gain * (rate / 100) : 0;
    setTaxAmount(Number(tax.toFixed(2)));
    setNetProfit(Number((gain - tax).toFixed(2)));
  }, [purchasePrice, sellingPrice, holdingPeriod, annualIncome, filingStatus]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Capital Gains Tax Calculator | Long & Short Term Taxes</title>
        <meta name="description" content="Free online capital gains tax calculator. Estimate your taxes on stocks, real estate, and other investments for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Capital Gains Tax Calculator</h1>
        <p className="text-slate-600">Estimate the taxes you'll owe on your investment profits based on your holding period and income.</p>
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
                  onChange={(e) => setPurchasePrice(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Selling Price ($)</label>
                <input 
                  type="number" 
                  value={sellingPrice} 
                  onChange={(e) => setSellingPrice(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Holding Period</label>
                <select 
                  value={holdingPeriod} 
                  onChange={(e) => setHoldingPeriod(e.target.value)}
                  className="input-field"
                >
                  <option value="long">Long Term (1+ Year)</option>
                  <option value="short">Short Term (Less than 1 Year)</option>
                </select>
              </div>
              <div>
                <label className="input-label">Filing Status</label>
                <select 
                  value={filingStatus} 
                  onChange={(e) => setFilingStatus(e.target.value)}
                  className="input-field"
                >
                  <option value="single">Single</option>
                  <option value="married">Married Filing Jointly</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="input-label">Estimated Annual Taxable Income ($)</label>
                <input 
                  type="number" 
                  value={annualIncome} 
                  onChange={(e) => setAnnualIncome(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
                <p className="text-xs text-slate-500 mt-1">Your total income excluding this capital gain.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Tax Rules for 2026
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Short-Term Gains:</strong> Taxed at your ordinary income tax rate.</li>
              <li><strong>Long-Term Gains:</strong> Taxed at 0%, 15%, or 20% depending on your income.</li>
              <li><strong>Net Investment Income Tax (NIIT):</strong> An additional 3.8% tax applies to high earners.</li>
              <li><strong>Capital Losses:</strong> Can be used to offset capital gains and up to $3,000 of ordinary income.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-[#f0f7ff] border border-[#0066cc]/20 text-[#0066cc]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0066cc]">
              <TrendingUp className="w-5 h-5" />
              Tax Summary
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-[#0066cc]/10">
                <div className="text-4xl font-bold mb-1 text-[#0066cc]">${taxAmount.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Estimated Tax Owed</div>
              </div>
              <div className="space-y-4 text-center py-4 border-b border-[#0066cc]/10">
                <div>
                  <div className="text-xl font-bold text-[#0066cc]">${capitalGain.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Total Gain</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#0066cc]">{taxRate}%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Tax Rate</div>
                </div>
              </div>
              <div className="text-center py-4 border-t border-[#0066cc]/10">
                <div className="text-2xl font-bold text-[#0066cc]">${netProfit.toLocaleString()}</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Net Profit After Tax</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Investment Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Holding an investment for more than one year can significantly reduce your tax bill by qualifying for lower long-term capital gains rates.
            </p>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Capital Gains Tax Calculator" 
        path="/capital-gains-tax-calculator" 
        description="Estimate your capital gains tax liability for 2026. Understand short-term vs. long-term rates and plan your investment sales effectively."
      />
    </div>
  );
};
