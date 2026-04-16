import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, DollarSign, Percent, Info, BookOpen, HelpCircle, Calculator } from 'lucide-react';


export const MortgageUKCalculator: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState<number>(300000);
  const [deposit, setDeposit] = useState<number>(60000);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [term, setTerm] = useState<number>(25);
  const [mortgageType, setMortgageType] = useState<string>('repayment');
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [sdlt, setSdlt] = useState<number>(0);

  useEffect(() => {
    const principal = propertyValue - deposit;
    if (principal <= 0) {
      setMonthlyPayment(0);
      return;
    }

    const r = interestRate / 100 / 12;
    const n = term * 12;
    
    let payment = 0;
    if (mortgageType === 'repayment') {
      payment = (principal * r) / (1 - Math.pow(1 + r, -n));
    } else {
      // Interest-only
      payment = principal * r;
    }
    
    setMonthlyPayment(payment);
    
    const totalPaid = mortgageType === 'repayment' ? payment * n : (payment * n) + principal;
    setTotalInterest(totalPaid - principal);
    setTotalCost(totalPaid + deposit);

    // Simplified SDLT for standard residential (England/NI)
    // 0% on first £250k, 5% on next £675k, 10% on next £575k, 12% on remaining
    let tax = 0;
    if (propertyValue > 250000) {
      const taxableAmount = propertyValue - 250000;
      if (taxableAmount <= 675000) {
        tax = taxableAmount * 0.05;
      } else {
        tax = (675000 * 0.05) + ((taxableAmount - 675000) * 0.10);
      }
    }
    setSdlt(tax);
  }, [propertyValue, deposit, interestRate, term, mortgageType]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>UK Mortgage Calculator | Calculate Monthly Payments & SDLT 2026</title>
        <meta name="description" content="Free UK mortgage calculator. Calculate monthly repayments, interest-only payments, and estimated Stamp Duty Land Tax (SDLT) for UK properties." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">mortgage</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">uk mortgage calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">UK Mortgage Calculator</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-5 h-5 text-[#0066cc]" />
              <h2 className="text-xl font-semibold">Mortgage Details</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Property Value (£)</label>
                <input
                  type="number"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Deposit (£)</label>
                <input
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
                <p className="text-xs text-slate-500">Min 5% for most residential mortgages.</p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Interest Rate (%)</label>
                <input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Term (Years)</label>
                <input
                  type="number"
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-medium text-slate-700">Mortgage Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={mortgageType === 'repayment'}
                      onChange={() => setMortgageType('repayment')}
                      className="text-[#0066cc] focus:ring-[#0066cc]"
                    />
                    <span className="text-sm">Repayment</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={mortgageType === 'interest-only'}
                      onChange={() => setMortgageType('interest-only')}
                      className="text-[#0066cc] focus:ring-[#0066cc]"
                    />
                    <span className="text-sm">Interest-only</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0066cc] text-white p-8 rounded-2xl shadow-lg">
            <div className="text-center">
              <p className="text-blue-100 mb-2 uppercase tracking-wider font-semibold text-xs">Estimated Monthly Payment</p>
              <h3 className="text-5xl font-bold mb-4">£{monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-blue-400/30">
                <div>
                  <p className="text-blue-100 text-xs uppercase tracking-wider font-semibold mb-1">Total Interest</p>
                  <p className="text-xl font-bold">£{totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
                <div>
                  <p className="text-blue-100 text-xs uppercase tracking-wider font-semibold mb-1">Estimated SDLT</p>
                  <p className="text-xl font-bold">£{sdlt.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
            </div>
          </div>

          

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              <h2 className="text-2xl font-bold m-0">UK Mortgage Guide</h2>
            </div>
            
            <p>
              Buying a property in the UK involves several costs beyond the monthly mortgage payment. Understanding these factors is key to successful homeownership.
            </p>

            <h3>Repayment vs. Interest-only</h3>
            <p>
              Most UK residential mortgages are <strong>repayment</strong> mortgages, where you pay back both the interest and a portion of the principal each month. <strong>Interest-only</strong> mortgages are less common for primary residences and require you to have a separate plan to pay off the principal at the end of the term.
            </p>

            <h3>Stamp Duty Land Tax (SDLT)</h3>
            <p>
              SDLT is a tax you pay when buying a property or land over a certain price in England and Northern Ireland. The rates are tiered based on the property value. First-time buyers often qualify for relief on properties up to £425,000.
            </p>

            <h3>Loan-to-Value (LTV)</h3>
            <p>
              LTV is the ratio of your mortgage amount to the property value. A lower LTV (higher deposit) usually qualifies you for better interest rates. Most lenders offer their best rates at 60% LTV or lower.
            </p>

            <h3>Mortgage Fees</h3>
            <p>
              Don't forget to account for arrangement fees, valuation fees, and legal costs. Arrangement fees can range from £0 to over £2,000 and can often be added to the mortgage balance.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0066cc]" />
              UK Mortgage FAQ
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-slate-900">What is an "AIP"?</h4>
                <p className="text-xs text-slate-600">An Agreement in Principle (AIP) is a document from a lender stating how much they might be willing to lend you.</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">Fixed vs. Tracker?</h4>
                <p className="text-xs text-slate-600">Fixed rates stay the same for 2-5 years. Tracker rates follow the Bank of England base rate.</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">What is "SVR"?</h4>
                <p className="text-xs text-slate-600">The Standard Variable Rate is the rate you move to when your fixed deal ends. It's usually much higher.</p>
              </div>
            </div>
          </div>

          

          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold mb-4">Buyer Tip</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Always check for "Early Repayment Charges" (ERCs). These are fees you pay if you pay off your mortgage or switch lenders before your deal ends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
