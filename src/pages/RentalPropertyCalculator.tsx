import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Home, DollarSign, Percent, TrendingUp, PieChart } from 'lucide-react';

export const RentalPropertyCalculator: React.FC = () => {
  // Purchase Information
  const [purchasePrice, setPurchasePrice] = useState<number>(250000);
  const [closingCosts, setClosingCosts] = useState<number>(5000);
  const [rehabCosts, setRehabCosts] = useState<number>(0);
  
  // Loan Information
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  
  // Income
  const [monthlyRent, setMonthlyRent] = useState<number>(2200);
  const [otherIncome, setOtherIncome] = useState<number>(0);
  
  // Expenses (Monthly)
  const [propertyTaxes, setPropertyTaxes] = useState<number>(250);
  const [insurance, setInsurance] = useState<number>(100);
  const [hoa, setHoa] = useState<number>(0);
  const [maintenancePercent, setMaintenancePercent] = useState<number>(5);
  const [vacancyPercent, setVacancyPercent] = useState<number>(5);
  const [managementPercent, setManagementPercent] = useState<number>(8);

  // Results
  const [results, setResults] = useState({
    monthlyMortgage: 0,
    totalMonthlyExpenses: 0,
    monthlyCashFlow: 0,
    capRate: 0,
    cashOnCash: 0,
    totalInvestment: 0,
    noi: 0
  });

  useEffect(() => {
    const downPayment = purchasePrice * (downPaymentPercent / 100);
    const loanAmount = purchasePrice - downPayment;
    const totalInv = downPayment + closingCosts + rehabCosts;
    
    // Mortgage calculation
    const monthlyRate = interestRate / 100 / 12;
    const n = loanTerm * 12;
    let mortgage = 0;
    if (monthlyRate > 0) {
      mortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    } else {
      mortgage = loanAmount / n;
    }

    const grossIncome = monthlyRent + otherIncome;
    const maintenance = monthlyRent * (maintenancePercent / 100);
    const vacancy = monthlyRent * (vacancyPercent / 100);
    const management = monthlyRent * (managementPercent / 100);
    
    const operatingExpenses = propertyTaxes + insurance + hoa + maintenance + vacancy + management;
    const cashFlow = grossIncome - operatingExpenses - mortgage;
    
    const annualNoi = (grossIncome - operatingExpenses) * 12;
    const capRate = (annualNoi / purchasePrice) * 100;
    const cashOnCash = ((cashFlow * 12) / totalInv) * 100;

    setResults({
      monthlyMortgage: mortgage,
      totalMonthlyExpenses: operatingExpenses,
      monthlyCashFlow: cashFlow,
      capRate: capRate,
      cashOnCash: cashOnCash,
      totalInvestment: totalInv,
      noi: annualNoi
    });
  }, [purchasePrice, closingCosts, rehabCosts, downPaymentPercent, interestRate, loanTerm, monthlyRent, otherIncome, propertyTaxes, insurance, hoa, maintenancePercent, vacancyPercent, managementPercent]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Helmet>
        <title>Rental Property Calculator | Real Estate ROI & Cash Flow 2026</title>
        <meta name="description" content="Free rental property calculator for real estate investors. Calculate cash flow, Cap Rate, ROI, and Cash-on-Cash return for your next investment property." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Home className="text-[#0066cc]" />
          Rental Property Calculator
        </h1>
        <p className="text-slate-600 max-w-3xl">
          Analyze potential rental property investments. Calculate key metrics like Net Operating Income (NOI), Cap Rate, and Monthly Cash Flow to determine if a deal makes financial sense.
        </p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Inputs Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Purchase & Loan */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#0066cc]" />
              Purchase & Financing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Purchase Price ($)</label>
                <input
                  type="number"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Down Payment (%)</label>
                <input
                  type="number"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Interest Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Loan Term (Years)</label>
                <input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Income & Expenses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Monthly Income
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Rent ($)</label>
                  <input
                    type="number"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Other Income ($)</label>
                  <input
                    type="number"
                    value={otherIncome}
                    onChange={(e) => setOtherIncome(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-red-500" />
                Monthly Expenses
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Taxes ($)</label>
                    <input
                      type="number"
                      value={propertyTaxes}
                      onChange={(e) => setPropertyTaxes(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Insurance ($)</label>
                    <input
                      type="number"
                      value={insurance}
                      onChange={(e) => setInsurance(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Maint/Vacancy/Mgmt (%)</label>
                  <div className="grid grid-cols-3 gap-2">
                    <input type="number" value={maintenancePercent} onChange={(e) => setMaintenancePercent(Number(e.target.value))} className="w-full px-2 py-2 border border-slate-300 rounded-lg text-xs" title="Maintenance %" />
                    <input type="number" value={vacancyPercent} onChange={(e) => setVacancyPercent(Number(e.target.value))} className="w-full px-2 py-2 border border-slate-300 rounded-lg text-xs" title="Vacancy %" />
                    <input type="number" value={managementPercent} onChange={(e) => setManagementPercent(Number(e.target.value))} className="w-full px-2 py-2 border border-slate-300 rounded-lg text-xs" title="Management %" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="space-y-6">
          <div className="bg-[#0066cc] text-white p-8 rounded-2xl shadow-lg sticky top-8">
            <h2 className="text-2xl font-bold mb-8 border-b border-white/20 pb-4">Investment Summary</h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-white/70 text-sm uppercase tracking-wider mb-1">Monthly Cash Flow</p>
                <p className={`text-4xl font-bold ${results.monthlyCashFlow >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                  ${results.monthlyCashFlow.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
                <div>
                  <p className="text-white/70 text-xs uppercase mb-1">Cap Rate</p>
                  <p className="text-xl font-bold">{results.capRate.toFixed(2)}%</p>
                </div>
                <div>
                  <p className="text-white/70 text-xs uppercase mb-1">Cash-on-Cash</p>
                  <p className="text-xl font-bold">{results.cashOnCash.toFixed(2)}%</p>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/20 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Monthly Mortgage:</span>
                  <span className="font-semibold">${results.monthlyMortgage.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Operating Expenses:</span>
                  <span className="font-semibold">${results.totalMonthlyExpenses.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Total Cash Needed:</span>
                  <span className="font-semibold">${results.totalInvestment.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Educational Content */}
      <div className="mt-16 prose prose-slate max-w-none">
        <h2 className="text-3xl font-bold text-slate-900">Understanding Rental Property Analysis</h2>
        <p>
          Investing in rental property is one of the most reliable ways to build wealth, but it requires careful analysis. Unlike primary residences, investment properties are businesses. You need to know exactly how much cash is coming in and, more importantly, how much is going out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-bold text-[#0066cc] mt-0">Cash Flow</h3>
            <p className="text-sm">The net amount of cash moving into and out of the investment. Positive cash flow is essential for long-term sustainability and covering unexpected repairs.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-bold text-[#0066cc] mt-0">Cap Rate</h3>
            <p className="text-sm">Capitalization Rate is the ratio of Net Operating Income (NOI) to the property purchase price. It helps compare different properties regardless of financing.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-bold text-[#0066cc] mt-0">Cash-on-Cash</h3>
            <p className="text-sm">This measures the annual return on the actual cash you invested (down payment + closing costs). It's often the most important metric for investors using leverage.</p>
          </div>
        </div>

        <h3>Key Formulas Used</h3>
        <ul>
          <li><strong>Net Operating Income (NOI):</strong> Annual Gross Income - Annual Operating Expenses</li>
          <li><strong>Cap Rate:</strong> (Annual NOI / Purchase Price) × 100</li>
          <li><strong>Cash-on-Cash Return:</strong> (Annual Cash Flow / Total Initial Cash Invested) × 100</li>
        </ul>

        <h3>Common Mistakes to Avoid</h3>
        <p>
          Many new investors underestimate expenses. Always account for:
        </p>
        <ul>
          <li><strong>Vacancy:</strong> Properties aren't always occupied. Budget 5-10% for turnover time.</li>
          <li><strong>Capital Expenditures (CapEx):</strong> Big-ticket items like roofs, HVAC systems, and water heaters eventually fail.</li>
          <li><strong>Property Management:</strong> Even if you manage it yourself, budget for it. Your time has value, and you may want to hire a pro later.</li>
        </ul>
      </div>
    </div>
  );
};
