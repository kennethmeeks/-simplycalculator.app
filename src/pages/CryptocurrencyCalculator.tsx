import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';

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
          <div className="calculator-container bg-[#f0f7ff] border border-[#0066cc]/20 text-[#0066cc]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0066cc]">
              <Coins className="w-5 h-5" />
              Crypto Results
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-[#0066cc]/10">
                <div className={`text-4xl font-bold mb-1 ${percentageReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {percentageReturn}%
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total ROI</div>
              </div>
              <div className="space-y-4 text-center py-4 border-b border-[#0066cc]/10">
                <div>
                  <div className="text-xl font-bold text-[#0066cc]">${totalProfit.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Total Profit</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#0066cc]">${totalFees.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Total Fees</div>
                </div>
              </div>
              <div className="text-center py-4 border-t border-[#0066cc]/10">
                <div className="text-2xl font-bold text-[#0066cc]">${totalValue.toLocaleString()}</div>
                <div className="text-[10px] text-slate-500 uppercase font-bold">Final Value</div>
              </div>
              <div className="pt-4 border-t border-[#0066cc]/10">
                <ResultActions 
                  onReset={() => {
                    setInvestmentAmount(1000);
                    setBuyPrice(50000);
                    setSellPrice(60000);
                    setInvestmentFee(0.5);
                    setExitFee(0.5);
                  }}
                  onCopy={() => {
                    const text = `Crypto Results:\nProfit: $${totalProfit}\nROI: ${percentageReturn}%\nTotal Value: $${totalValue}\nCalculated at simplycalculator.app`;
                    navigator.clipboard.writeText(text);
                  }}
                />
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

      <CalculatorSEO 
        name="Cryptocurrency Calculator" 
        path="/cryptocurrency" 
        description="Calculate potential profits or losses on crypto investments. Account for exchange fees and ROI for any digital asset in 2026."
      />
    </div>
  );
};
