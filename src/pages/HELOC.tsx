import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, DollarSign, Percent, Info, BookOpen, HelpCircle, Calculator } from 'lucide-react';


export const HELOCCalculator: React.FC = () => {
  const [homeValue, setHomeValue] = useState<number>(500000);
  const [mortgageBalance, setMortgageBalance] = useState<number>(300000);
  const [ltvLimit, setLtvLimit] = useState<number>(80);
  const [maxLine, setMaxLine] = useState<number>(0);
  const [availableEquity, setAvailableEquity] = useState<number>(0);

  useEffect(() => {
    const maxAllowed = homeValue * (ltvLimit / 100);
    const line = Math.max(0, maxAllowed - mortgageBalance);
    const equity = Math.max(0, homeValue - mortgageBalance);
    
    setMaxLine(line);
    setAvailableEquity(equity);
  }, [homeValue, mortgageBalance, ltvLimit]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>HELOC Calculator | Calculate Home Equity Line of Credit 2026</title>
        <meta name="description" content="Free HELOC calculator. Estimate your maximum Home Equity Line of Credit based on home value, mortgage balance, and LTV limits in 2026." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">mortgage</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">heloc calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">HELOC Calculator</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <Home className="w-5 h-5 text-[#0066cc]" />
              <h2 className="text-xl font-semibold">Property Details</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Current Home Value ($)</label>
                <input
                  type="number"
                  value={homeValue}
                  onChange={(e) => setHomeValue(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Mortgage Balance ($)</label>
                <input
                  type="number"
                  value={mortgageBalance}
                  onChange={(e) => setMortgageBalance(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">LTV Limit (%)</label>
                <input
                  type="number"
                  value={ltvLimit}
                  onChange={(e) => setLtvLimit(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
                <p className="text-xs text-slate-500">Most lenders limit total debt to 80-85% of home value.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0066cc] text-white p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-blue-100 mb-2 uppercase tracking-wider font-semibold text-xs">Estimated Max HELOC</p>
                <h3 className="text-4xl font-bold">${maxLine.toLocaleString()}</h3>
              </div>
              <div>
                <p className="text-blue-100 mb-2 uppercase tracking-wider font-semibold text-xs">Total Home Equity</p>
                <h3 className="text-4xl font-bold">${availableEquity.toLocaleString()}</h3>
              </div>
            </div>
          </div>

          

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              <h2 className="text-2xl font-bold m-0">Understanding HELOC</h2>
            </div>
            
            <p>
              A <strong>Home Equity Line of Credit (HELOC)</strong> is a revolving line of credit, similar to a credit card, that uses your home as collateral. It allows you to borrow against the equity you've built in your home.
            </p>

            <h3>How is a HELOC Calculated?</h3>
            <p>
              Lenders typically use a formula based on your home's appraised value and your current mortgage balance. The key metric is the <strong>Combined Loan-to-Value (CLTV)</strong> ratio.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm border border-slate-200 my-4">
              Max HELOC = (Home Value × LTV Limit) - Current Mortgage Balance
            </div>

            <h3>HELOC vs. Home Equity Loan</h3>
            <p>
              While both use your home as collateral, they function differently:
            </p>
            <ul>
              <li><strong>HELOC:</strong> Revolving credit. You only pay interest on what you use. Usually has a variable interest rate.</li>
              <li><strong>Home Equity Loan:</strong> Lump sum payment. Fixed monthly payments and usually a fixed interest rate.</li>
            </ul>

            <h3>Pros and Cons of a HELOC</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                <h4 className="text-green-800 font-bold mt-0">Pros</h4>
                <ul className="text-sm text-green-700 mb-0">
                  <li>Flexibility to borrow only what you need</li>
                  <li>Lower interest rates than credit cards</li>
                  <li>Interest may be tax-deductible (consult a pro)</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                <h4 className="text-red-800 font-bold mt-0">Cons</h4>
                <ul className="text-sm text-red-700 mb-0">
                  <li>Your home is collateral (risk of foreclosure)</li>
                  <li>Variable rates can increase your payments</li>
                  <li>Closing costs and annual fees may apply</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0066cc]" />
              HELOC FAQ
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-slate-900">What is the "Draw Period"?</h4>
                <p className="text-xs text-slate-600">The time (usually 10 years) when you can withdraw funds and often only pay interest.</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">What is the "Repayment Period"?</h4>
                <p className="text-xs text-slate-600">The time after the draw period ends when you must pay back both principal and interest.</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">Can I get a HELOC with bad credit?</h4>
                <p className="text-xs text-slate-600">It's difficult. Lenders usually require a credit score of 680 or higher for competitive rates.</p>
              </div>
            </div>
          </div>

          

          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold mb-4">Financial Tip</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Use a HELOC for value-adding home improvements or high-interest debt consolidation. Avoid using it for depreciating assets like vacations or luxury cars.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
