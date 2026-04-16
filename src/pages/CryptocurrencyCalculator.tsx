import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { DollarSign, Calculator, Info, TrendingUp, BarChart3, Coins } from 'lucide-react';

export const CryptocurrencyCalculator: React.FC = () => {
  const [investmentAmount, setInvestmentAmount] = useState<number>(1000);
  const [buyPrice, setBuyPrice] = useState<number>(50000);
  const [sellPrice, setSellPrice] = useState<number>(60000);
  const [investmentFee, setInvestmentFee] = useState<number>(0.5);
  const [exitFee, setExitFee] = useState<number>(0.5);
  
  const [totalProfit, setTotalProfit] = useState<number>(0);
  const [percentageReturn, setPercentageReturn] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [totalFees, setTotalFees] = useState<number>(0);

  useEffect(() => {
    const buyFeeAmount = investmentAmount * (investmentFee / 100);
    const netInvestment = investmentAmount - buyFeeAmount;
    const coinsOwned = netInvestment / buyPrice;
    
    const grossValue = coinsOwned * sellPrice;
    const sellFeeAmount = grossValue * (exitFee / 100);
    const netValue = grossValue - sellFeeAmount;
    
    const profit = netValue - investmentAmount;
    const pctReturn = (profit / investmentAmount) * 100;

    setTotalProfit(Number(profit.toFixed(2)));
    setPercentageReturn(Number(pctReturn.toFixed(2)));
    setTotalValue(Number(netValue.toFixed(2)));
    setTotalFees(Number((buyFeeAmount + sellFeeAmount).toFixed(2)));
  }, [investmentAmount, buyPrice, sellPrice, investmentFee, exitFee]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Cryptocurrency Calculator | Calculate Your Crypto ROI</title>
        <meta name="description" content="Free online cryptocurrency calculator. Calculate your total profit, percentage gain, and fees for any crypto investment." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Cryptocurrency Calculator</h1>
        <p className="text-slate-600">Calculate the potential profit or loss on your cryptocurrency investments, including exchange fees.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Investment Amount ($)</label>
                <input 
                  type="number" 
                  value={investmentAmount} 
                  onChange={(e) => setInvestmentAmount(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Buy Price ($)</label>
                <input 
                  type="number" 
                  value={buyPrice} 
                  onChange={(e) => setBuyPrice(Math.max(0.00000001, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Sell Price ($)</label>
                <input 
                  type="number" 
                  value={sellPrice} 
                  onChange={(e) => setSellPrice(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Buy Fee (%)</label>
                <input 
                  type="number" 
                  step="0.01"
                  value={investmentFee} 
                  onChange={(e) => setInvestmentFee(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div className="md:col-span-2">
                <label className="input-label">Sell Fee (%)</label>
                <input 
                  type="number" 
                  step="0.01"
                  value={exitFee} 
                  onChange={(e) => setExitFee(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Crypto Investing Basics
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Exchange Fees:</strong> Most exchanges charge a fee for both buying and selling (usually 0.1% to 1.5%).</li>
              <li><strong>Volatility:</strong> Cryptocurrency prices can fluctuate wildly in a very short time.</li>
              <li><strong>Taxes:</strong> Crypto is treated as property for tax purposes in many countries, meaning you'll owe capital gains tax on profits.</li>
              <li><strong>Security:</strong> Always use two-factor authentication (2FA) and consider a hardware wallet for long-term storage.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Coins className="w-5 h-5" />
              Crypto Results
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
                  <div className="text-xl font-bold text-slate-200">${totalProfit.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Total Profit</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-200">${totalFees.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Total Fees</div>
                </div>
              </div>
              <div className="text-center py-4 border-t border-slate-800">
                <div className="text-2xl font-bold text-slate-200">${totalValue.toLocaleString()}</div>
                <div className="text-[10px] text-slate-400 uppercase font-bold">Final Value</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Investing Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Never invest more than you can afford to lose. The crypto market is highly speculative and can drop significantly in value.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Use the Cryptocurrency Calculator</h2>
        <p>
          Our <strong>cryptocurrency calculator</strong> is designed to help you understand the true performance of your crypto investments. It accounts for the fees charged by exchanges, which can often eat into your profits.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Importance of Fees</h3>
        <p>
          When trading crypto, fees are everywhere. There are trading fees, withdrawal fees, and sometimes even deposit fees. If you're a frequent trader, these small percentages can add up to a significant amount of money over time.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Terms to Know</h3>
        <ul>
          <li><strong>HODL:</strong> A popular term in the crypto community meaning "Hold On for Dear Life"—holding onto your coins despite price drops.</li>
          <li><strong>Market Cap:</strong> The total value of all coins in circulation (Price x Supply).</li>
          <li><strong>Stablecoin:</strong> A cryptocurrency pegged to a stable asset like the US Dollar (e.g., USDT, USDC).</li>
          <li><strong>DeFi:</strong> Decentralized Finance, a system of financial tools built on blockchain technology.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">What is the best way to track my crypto portfolio?</p>
            <p>Using a dedicated portfolio tracker like CoinMarketCap or CoinGecko can help you see all your holdings in one place.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How are crypto profits taxed?</p>
            <p>In most jurisdictions, crypto is taxed as a capital asset. You'll owe capital gains tax when you sell, trade, or use crypto to buy something.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
