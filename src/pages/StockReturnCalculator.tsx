import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { DollarSign, Calculator, Info, TrendingUp, BarChart3 } from 'lucide-react';

export const StockReturnCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(1000);
  const [sharePriceAtPurchase, setSharePriceAtPurchase] = useState<number>(150);
  const [sharePriceAtSale, setSharePriceAtSale] = useState<number>(200);
  const [dividendsReceived, setDividendsReceived] = useState<number>(50);
  const [commissionFees, setCommissionFees] = useState<number>(10);
  
  const [totalReturn, setTotalReturn] = useState<number>(0);
  const [percentageReturn, setPercentageReturn] = useState<number>(0);
  const [netProfit, setNetProfit] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);

  useEffect(() => {
    const numberOfShares = initialInvestment / sharePriceAtPurchase;
    const saleValue = numberOfShares * sharePriceAtSale;
    const profit = (saleValue - initialInvestment) + dividendsReceived - commissionFees;
    const totalVal = saleValue + dividendsReceived - commissionFees;
    const pctReturn = (profit / initialInvestment) * 100;

    setTotalReturn(Number(profit.toFixed(2)));
    setPercentageReturn(Number(pctReturn.toFixed(2)));
    setNetProfit(Number(profit.toFixed(2)));
    setTotalValue(Number(totalVal.toFixed(2)));
  }, [initialInvestment, sharePriceAtPurchase, sharePriceAtSale, dividendsReceived, commissionFees]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Stock Return Calculator | Calculate Your Investment ROI</title>
        <meta name="description" content="Free online stock return calculator. Calculate your total return, percentage gain, and net profit from stock investments including dividends." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Stock Return Calculator</h1>
        <p className="text-slate-600">Calculate the total return on your stock investments, including capital gains and dividends.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Initial Investment ($)</label>
                <input 
                  type="number" 
                  value={initialInvestment} 
                  onChange={(e) => setInitialInvestment(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Purchase Price Per Share ($)</label>
                <input 
                  type="number" 
                  value={sharePriceAtPurchase} 
                  onChange={(e) => setSharePriceAtPurchase(Math.max(0.01, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Selling Price Per Share ($)</label>
                <input 
                  type="number" 
                  value={sharePriceAtSale} 
                  onChange={(e) => setSharePriceAtSale(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Total Dividends Received ($)</label>
                <input 
                  type="number" 
                  value={dividendsReceived} 
                  onChange={(e) => setDividendsReceived(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div className="md:col-span-2">
                <label className="input-label">Total Commission & Fees ($)</label>
                <input 
                  type="number" 
                  value={commissionFees} 
                  onChange={(e) => setCommissionFees(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Stock Return Components
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Capital Gains:</strong> The profit from the increase in share price.</li>
              <li><strong>Dividends:</strong> Cash payments made by the company to shareholders.</li>
              <li><strong>Total Return:</strong> The sum of capital gains and dividends, minus fees.</li>
              <li><strong>ROI (Return on Investment):</strong> The percentage gain or loss relative to the initial investment.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Investment Results
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-slate-800">
                <div className={`text-4xl font-bold mb-1 ${percentageReturn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {percentageReturn}%
                </div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total ROI</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center py-4">
                <div>
                  <div className="text-xl font-bold text-slate-200">${netProfit.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Net Profit</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-200">${totalValue.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Total Value</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Investing Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Don't forget to account for <strong>taxes</strong> on your capital gains and dividends, as they will reduce your actual net return.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Calculate Stock Returns</h2>
        <p>
          Calculating your <strong>stock return</strong> is essential for evaluating the performance of your portfolio. It's not just about the share price; you must also consider dividends and transaction costs.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Total Return Formula</h3>
        <p>
          The formula for total return is:
        </p>
        <div className="bg-slate-100 p-4 rounded font-mono text-center mb-6">
          Total Return = ((End Price - Start Price) + Dividends - Fees) / Start Price
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why ROI Matters</h3>
        <p>
          ROI (Return on Investment) allows you to compare different investments on an equal footing. For example, a $100 profit on a $1,000 investment (10% ROI) is better than a $200 profit on a $5,000 investment (4% ROI).
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">What is a good annual stock return?</p>
            <p>Historically, the S&P 500 has returned an average of about 10% per year before inflation. Anything above this is considered excellent.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Do dividends count toward my return?</p>
            <p>Yes! Dividends are a critical part of total return, especially for long-term investors in established companies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
