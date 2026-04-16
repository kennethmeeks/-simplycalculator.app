import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { DollarSign, Calculator, Info, TrendingUp } from 'lucide-react';

export const DividendCalculator: React.FC = () => {
  const [investmentAmount, setInvestmentAmount] = useState<number>(10000);
  const [dividendYield, setDividendYield] = useState<number>(4);
  const [reinvestDividends, setReinvestDividends] = useState<boolean>(true);
  const [yearsToHold, setYearsToHold] = useState<number>(10);
  const [annualContribution, setAnnualContribution] = useState<number>(1200);
  const [annualDividendIncome, setAnnualDividendIncome] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [totalDividends, setTotalDividends] = useState<number>(0);

  useEffect(() => {
    let currentBalance = investmentAmount;
    let accumulatedDividends = 0;
    const yieldRate = dividendYield / 100;

    for (let i = 0; i < yearsToHold; i++) {
      const yearlyDividend = currentBalance * yieldRate;
      accumulatedDividends += yearlyDividend;
      
      if (reinvestDividends) {
        currentBalance += yearlyDividend;
      }
      
      currentBalance += annualContribution;
    }

    setAnnualDividendIncome(Number((currentBalance * yieldRate).toFixed(2)));
    setTotalValue(Number(currentBalance.toFixed(2)));
    setTotalDividends(Number(accumulatedDividends.toFixed(2)));
  }, [investmentAmount, dividendYield, reinvestDividends, yearsToHold, annualContribution]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Dividend Calculator | Estimate Your Passive Income</title>
        <meta name="description" content="Free online dividend calculator. Estimate your annual dividend income and total investment growth over time." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Dividend Calculator</h1>
        <p className="text-slate-600">Calculate your potential passive income from dividend-paying stocks and ETFs.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Initial Investment ($)</label>
                <input 
                  type="number" 
                  value={investmentAmount} 
                  onChange={(e) => setInvestmentAmount(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Dividend Yield (%)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={dividendYield} 
                  onChange={(e) => setDividendYield(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Years to Hold</label>
                <input 
                  type="number" 
                  value={yearsToHold} 
                  onChange={(e) => setYearsToHold(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Annual Contribution ($)</label>
                <input 
                  type="number" 
                  value={annualContribution} 
                  onChange={(e) => setAnnualContribution(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div className="md:col-span-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={reinvestDividends} 
                    onChange={(e) => setReinvestDividends(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-300 text-[#0066cc] focus:ring-[#0066cc]"
                  />
                  <span className="text-slate-700 font-medium">Reinvest Dividends (DRIP)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Dividend Investing Basics
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Dividend Yield:</strong> The annual dividend payment divided by the stock price.</li>
              <li><strong>DRIP:</strong> Dividend Reinvestment Plan, where dividends are used to buy more shares.</li>
              <li><strong>Compound Interest:</strong> Reinvesting dividends creates a powerful compounding effect over time.</li>
              <li><strong>Passive Income:</strong> Dividends provide regular cash flow without selling your shares.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-[#f0f7ff] border border-[#0066cc]/20 text-[#0066cc]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0066cc]">
              <TrendingUp className="w-5 h-5" />
              Projected Results
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-[#0066cc]/10">
                <div className="text-4xl font-bold mb-1 text-[#0066cc]">${annualDividendIncome.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Annual Dividend Income</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center py-4">
                <div>
                  <div className="text-xl font-bold text-[#0066cc]">${totalValue.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Total Value</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#0066cc]">${totalDividends.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Total Dividends</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Investing Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Focus on <strong>Dividend Aristocrats</strong>—companies that have increased their dividends for 25+ consecutive years—for more reliable passive income.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Use the Dividend Calculator</h2>
        <p>
          Our <strong>dividend calculator</strong> helps you visualize the power of long-term dividend investing. By entering your initial investment, expected yield, and holding period, you can see how much passive income you could generate.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Power of Dividend Reinvestment</h3>
        <p>
          One of the most effective ways to build wealth is through a <strong>Dividend Reinvestment Plan (DRIP)</strong>. Instead of taking the cash, you use your dividends to buy more shares of the company. This increases your share count, which in turn increases your next dividend payment, creating a powerful "snowball effect."
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Terms to Know</h3>
        <ul>
          <li><strong>Ex-Dividend Date:</strong> You must own the stock before this date to receive the next dividend.</li>
          <li><strong>Payout Ratio:</strong> The percentage of earnings a company pays out as dividends. A lower ratio (under 60%) is generally more sustainable.</li>
          <li><strong>Dividend Growth Rate:</strong> How much a company increases its dividend payment each year.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">Are dividends taxed?</p>
            <p>Yes. Qualified dividends are taxed at the lower capital gains rates (0%, 15%, or 20%), while non-qualified dividends are taxed as ordinary income.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is a good dividend yield?</p>
            <p>A "good" yield depends on the industry, but generally, 2% to 5% is considered healthy. Extremely high yields (over 10%) can sometimes be a warning sign of a company in trouble.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
