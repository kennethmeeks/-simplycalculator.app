import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const MutualFundCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500);
  const [years, setYears] = useState<number>(10);
  const [expectedReturn, setExpectedReturn] = useState<number>(8);
  const [expenseRatio, setExpenseRatio] = useState<number>(0.5);

  const [futureValue, setFutureValue] = useState<number>(0);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [totalFees, setTotalFees] = useState<number>(0);

  useEffect(() => {
    const netReturn = (expectedReturn - expenseRatio) / 100 / 12;
    const grossReturn = expectedReturn / 100 / 12;
    const n = years * 12;
    
    // Future Value Formula: FV = P * [((1 + r)^n - 1) / r] + PV * (1 + r)^n
    const fvNet = initialInvestment * Math.pow(1 + netReturn, n) + 
                  monthlyContribution * (Math.pow(1 + netReturn, n) - 1) / netReturn;
    
    const fvGross = initialInvestment * Math.pow(1 + grossReturn, n) + 
                    monthlyContribution * (Math.pow(1 + grossReturn, n) - 1) / grossReturn;
    
    setFutureValue(fvNet);
    setTotalContributions(initialInvestment + (monthlyContribution * n));
    setTotalFees(fvGross - fvNet);
  }, [initialInvestment, monthlyContribution, years, expectedReturn, expenseRatio]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Mutual Fund Calculator | Estimate Investment Growth 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online mutual fund calculator. Estimate your future mutual fund balance based on initial investment, monthly contributions, and expense ratio." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Mutual Fund Calculator</h1>
        <p className="text-slate-600">
          Determine how much your mutual fund investment will grow over time by accounting for your initial investment, monthly contributions, and expense ratio.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Investment Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Initial Investment ($)</label>
              <input
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Contribution ($)</label>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Years to Invest</label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Expected Return (%)</label>
                <input
                  type="number"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Expense Ratio (%)</label>
              <input
                type="number"
                value={expenseRatio}
                onChange={(e) => setExpenseRatio(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Investment Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Future Balance</p>
              <p className="text-4xl font-bold text-[#0066cc]">${futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Contributions</p>
                <p className="text-xl font-semibold text-slate-900">${totalContributions.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Total Fees Paid</p>
                <p className="text-xl font-semibold text-slate-900">${totalFees.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation provides an estimate. Actual returns may vary based on market conditions and mutual fund performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a Mutual Fund?</h2>
        <p>
          A mutual fund is a type of investment that pools money from many investors to buy a diversified portfolio of stocks, bonds, or other assets. Mutual funds are managed by professional fund managers who make investment decisions on behalf of the investors.
        </p>
        
        <h3>How to Use the Mutual Fund Calculator</h3>
        <p>
          To estimate the future value of your mutual fund investment, you need to provide:
        </p>
        <ul>
          <li><strong>Initial Investment:</strong> The amount of money you already have invested in the mutual fund.</li>
          <li><strong>Monthly Contribution:</strong> The amount of money you plan to add to your investment each month.</li>
          <li><strong>Years to Invest:</strong> The number of years you plan to invest for.</li>
          <li><strong>Expected Return:</strong> The annual interest rate or rate of return you expect your mutual fund to earn.</li>
          <li><strong>Expense Ratio:</strong> The annual fee charged by the mutual fund to cover its operating expenses.</li>
        </ul>

        <h3>The Impact of Expense Ratios</h3>
        <p>
          The expense ratio is a critical factor to consider when choosing a mutual fund. Even a small difference in expense ratios can have a significant impact on your investment's growth over time. This is because the expense ratio is deducted from your investment's returns each year.
        </p>

        <h3>Types of Mutual Funds</h3>
        <p>
          There are several types of mutual funds:
        </p>
        <ul>
          <li><strong>Stock Funds:</strong> These funds invest primarily in stocks and are typically considered to be higher-risk, higher-reward investments.</li>
          <li><strong>Bond Funds:</strong> These funds invest primarily in bonds and are typically considered to be lower-risk, lower-reward investments.</li>
          <li><strong>Balanced Funds:</strong> These funds invest in a mix of stocks and bonds to provide a balanced portfolio.</li>
          <li><strong>Index Funds:</strong> These funds track a specific market index, such as the S&P 500, and typically have lower expense ratios than actively managed funds.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is a "Load" vs. "No-Load" fund?</h4>
            <p>A load fund is a mutual fund that charges a sales commission when you buy or sell shares. A no-load fund is a mutual fund that does not charge a sales commission.</p>
          </div>
          <div>
            <h4 className="font-bold">What is "Diversification"?</h4>
            <p>Diversification is the practice of spreading your investments across different asset classes and industries to reduce your overall risk.</p>
          </div>
          <div>
            <h4 className="font-bold">How can I choose the right mutual fund?</h4>
            <p>Consider your investment goals, risk tolerance, and time horizon when choosing a mutual fund. Be sure to research the fund's performance, expense ratio, and management team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
