import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, DollarSign, Percent, Info, BookOpen, HelpCircle, Calculator } from 'lucide-react';


export const HomeEquityCalculator: React.FC = () => {
  const [homeValue, setHomeValue] = useState<number>(500000);
  const [mortgageBalance, setMortgageBalance] = useState<number>(300000);
  const [otherLiens, setOtherLiens] = useState<number>(0);
  const [equity, setEquity] = useState<number>(0);
  const [equityPercent, setEquityPercent] = useState<number>(0);

  useEffect(() => {
    const totalDebt = mortgageBalance + otherLiens;
    const currentEquity = Math.max(0, homeValue - totalDebt);
    setEquity(currentEquity);
    setEquityPercent(homeValue > 0 ? (currentEquity / homeValue) * 100 : 0);
  }, [homeValue, mortgageBalance, otherLiens]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Home Equity Calculator | Calculate Your Home's Value 2026</title>
        <meta name="description" content="Free home equity calculator. Calculate how much equity you have in your home based on market value and mortgage balance in 2026." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">mortgage</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">home equity calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Home Equity Calculator</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <Home className="w-5 h-5 text-[#0066cc]" />
              <h2 className="text-xl font-semibold">Equity Details</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Estimated Home Value ($)</label>
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
                <label className="block text-sm font-medium text-slate-700">Other Liens ($)</label>
                <input
                  type="number"
                  value={otherLiens}
                  onChange={(e) => setOtherLiens(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
                <p className="text-xs text-slate-500">Include HELOCs or other property loans.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0066cc] text-white p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <p className="text-blue-100 mb-2 uppercase tracking-wider font-semibold text-xs">Total Home Equity</p>
                <h3 className="text-4xl font-bold">${equity.toLocaleString()}</h3>
              </div>
              <div>
                <p className="text-blue-100 mb-2 uppercase tracking-wider font-semibold text-xs">Equity Percentage</p>
                <h3 className="text-4xl font-bold">{equityPercent.toFixed(1)}%</h3>
              </div>
            </div>
          </div>

          

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              <h2 className="text-2xl font-bold m-0">Guide to Home Equity</h2>
            </div>
            
            <p>
              Home equity is the difference between your home's current market value and the total amount you owe on any mortgages or liens secured by the property.
            </p>

            <h3>How to Build Home Equity</h3>
            <ul>
              <li><strong>Market Appreciation:</strong> As property values in your area increase, your equity grows automatically.</li>
              <li><strong>Mortgage Repayment:</strong> Every principal payment you make increases your ownership stake.</li>
              <li><strong>Home Improvements:</strong> Renovations that increase market value can boost your equity.</li>
              <li><strong>Down Payment:</strong> Your initial down payment is your starting equity.</li>
            </ul>

            <h3>Why Home Equity Matters</h3>
            <p>
              Equity is a powerful financial tool. It represents a significant portion of many homeowners' net worth and can be used to:
            </p>
            <ul>
              <li>Secure a <strong>HELOC</strong> or <strong>Home Equity Loan</strong> for major expenses.</li>
              <li>Provide a down payment for a new home when you sell.</li>
              <li>Fund retirement through a reverse mortgage (for seniors).</li>
              <li>Eliminate <strong>Private Mortgage Insurance (PMI)</strong> once you reach 20% equity.</li>
            </ul>

            <h3>The Equity Formula</h3>
            <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm border border-slate-200 my-4">
              Home Equity = Market Value - All Mortgage Balances
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0066cc]" />
              Equity FAQ
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-slate-900">What is "Negative Equity"?</h4>
                <p className="text-xs text-slate-600">Also known as being "underwater," this happens when you owe more on your mortgage than the home is worth.</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">How do I find my home's value?</h4>
                <p className="text-xs text-slate-600">You can use online estimates (like Zillow), look at recent sales in your area, or hire a professional appraiser.</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">Can I lose equity?</h4>
                <p className="text-xs text-slate-600">Yes, if the local housing market declines or if you take out additional loans against your home.</p>
              </div>
            </div>
          </div>

          

          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold mb-4">Financial Tip</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Aim for at least 20% equity to avoid PMI and qualify for the best interest rates on home equity products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
