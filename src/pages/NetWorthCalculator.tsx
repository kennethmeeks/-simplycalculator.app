import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

import { DollarSign, Calculator, Info, TrendingUp, Briefcase, Home, Car, CreditCard } from 'lucide-react';

export const NetWorthCalculator: React.FC = () => {
  const [cash, setCash] = useState<number>(5000);
  const [investments, setInvestments] = useState<number>(50000);
  const [realEstate, setRealEstate] = useState<number>(300000);
  const [vehicles, setVehicles] = useState<number>(25000);
  const [otherAssets, setOtherAssets] = useState<number>(10000);

  const [mortgage, setMortgage] = useState<number>(200000);
  const [studentLoans, setStudentLoans] = useState<number>(20000);
  const [carLoans, setCarLoans] = useState<number>(15000);
  const [creditCardDebt, setCreditCardDebt] = useState<number>(2000);
  const [otherLiabilities, setOtherLiabilities] = useState<number>(0);

  const [netWorth, setNetWorth] = useState<number>(0);
  const [totalAssets, setTotalAssets] = useState<number>(0);
  const [totalLiabilities, setTotalLiabilities] = useState<number>(0);

  useEffect(() => {
    const assets = cash + investments + realEstate + vehicles + otherAssets;
    const liabilities = mortgage + studentLoans + carLoans + creditCardDebt + otherLiabilities;
    setTotalAssets(assets);
    setTotalLiabilities(liabilities);
    setNetWorth(assets - liabilities);
  }, [cash, investments, realEstate, vehicles, otherAssets, mortgage, studentLoans, carLoans, creditCardDebt, otherLiabilities]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Net Worth — Are You Richer Than You Think? Free 2026</title>
        <meta name="description" content="Calculate your true financial standing. Subtract your liabilities from your assets to see your 2026 net worth instantly." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Net Worth Calculator: What Are You Actually Worth Today?</h1>
        <p className="text-slate-600">Most millionaires didn't know their net worth until they tracked it; use this free tool to see your total financial score.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Assets (What You Own)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label flex items-center gap-2">
                  <DollarSign className="w-4 h-4" /> Cash & Savings
                </label>
                <input 
                  type="number" 
                  value={cash} 
                  onChange={(e) => setCash(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Investments (401k, Stocks)
                </label>
                <input 
                  type="number" 
                  value={investments} 
                  onChange={(e) => setInvestments(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label flex items-center gap-2">
                  <Home className="w-4 h-4" /> Real Estate Value
                </label>
                <input 
                  type="number" 
                  value={realEstate} 
                  onChange={(e) => setRealEstate(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label flex items-center gap-2">
                  <Car className="w-4 h-4" /> Vehicles Value
                </label>
                <input 
                  type="number" 
                  value={vehicles} 
                  onChange={(e) => setVehicles(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div className="md:col-span-2">
                <label className="input-label">Other Assets (Jewelry, Art, etc.)</label>
                <input 
                  type="number" 
                  value={otherAssets} 
                  onChange={(e) => setOtherAssets(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="calculator-container">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-red-600" />
              Liabilities (What You Owe)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label flex items-center gap-2">
                  <Home className="w-4 h-4" /> Mortgage Balance
                </label>
                <input 
                  type="number" 
                  value={mortgage} 
                  onChange={(e) => setMortgage(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Student Loans
                </label>
                <input 
                  type="number" 
                  value={studentLoans} 
                  onChange={(e) => setStudentLoans(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label flex items-center gap-2">
                  <Car className="w-4 h-4" /> Car Loans
                </label>
                <input 
                  type="number" 
                  value={carLoans} 
                  onChange={(e) => setCarLoans(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label flex items-center gap-2">
                  <CreditCard className="w-4 h-4" /> Credit Card Debt
                </label>
                <input 
                  type="number" 
                  value={creditCardDebt} 
                  onChange={(e) => setCreditCardDebt(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div className="md:col-span-2">
                <label className="input-label">Other Liabilities</label>
                <input 
                  type="number" 
                  value={otherLiabilities} 
                  onChange={(e) => setOtherLiabilities(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Net Worth Summary
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-slate-800">
                <div className={`text-4xl font-bold mb-1 ${netWorth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  ${netWorth.toLocaleString()}
                </div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Net Worth</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Total Assets</span>
                  <span className="text-green-400 font-bold">${totalAssets.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Total Liabilities</span>
                  <span className="text-red-400 font-bold">${totalLiabilities.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Financial Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Track your <strong>net worth</strong> quarterly to see your financial progress. Focus on increasing your assets (investing) and decreasing your liabilities (paying off debt).
            </p>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Net Worth Calculator" 
        path="/net-worth" 
        description="Track your financial progress by calculating your total net worth. Subtract your liabilities from your assets and see where you stand in 2026."
      />
    </div>
  );
};
