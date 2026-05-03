import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, BookOpen, HelpCircle } from 'lucide-react';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const CanadianMortgageCalculator: React.FC = () => {
  const [homePrice, setHomePrice] = useState<number>(500000);
  const [downPayment, setDownPayment] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [amortization, setAmortization] = useState<number>(25);
  const [paymentFrequency, setPaymentFrequency] = useState<string>('monthly');
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const principal = homePrice - downPayment;
    if (principal <= 0) {
      setMonthlyPayment(0);
      return;
    }

    // Canadian mortgages are compounded semi-annually
    // Effective annual rate = (1 + (r/2))^2 - 1
    // Monthly rate = (1 + EAR)^(1/12) - 1
    const r = interestRate / 100;
    const effectiveAnnualRate = Math.pow(1 + r / 2, 2) - 1;
    const monthlyRate = Math.pow(1 + effectiveAnnualRate, 1 / 12) - 1;
    
    const numberOfPayments = amortization * 12;
    const payment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    
    let freqMultiplier = 1;
    if (paymentFrequency === 'bi-weekly') freqMultiplier = 0.5;
    if (paymentFrequency === 'weekly') freqMultiplier = 0.25;
    
    const finalPayment = payment * freqMultiplier;
    setMonthlyPayment(finalPayment);
    
    const totalPaid = payment * numberOfPayments;
    setTotalInterest(totalPaid - principal);
    setTotalCost(totalPaid + downPayment);
  }, [homePrice, downPayment, interestRate, amortization, paymentFrequency]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Canadian Mortgage Calculator [100% Private]</title>
        <meta name="description" content="Free Canadian mortgage calculator. Calculate monthly, bi-weekly, or weekly payments with semi-annual compounding for Canadian fixed-rate mortgages." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">mortgage</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">canadian mortgage calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Canadian Mortgage Calculator</h1>
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
                <label className="block text-sm font-medium text-slate-700">Home Price ($)</label>
                <input
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Down Payment ($)</label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
                <p className="text-xs text-slate-500">Min 5% for first $500k, 10% for next $500k.</p>
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
                <label className="block text-sm font-medium text-slate-700">Amortization (Years)</label>
                <select
                  value={amortization}
                  onChange={(e) => setAmortization(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                >
                  <option value={10}>10 Years</option>
                  <option value={15}>15 Years</option>
                  <option value={20}>20 Years</option>
                  <option value={25}>25 Years</option>
                  <option value={30}>30 Years (20%+ down only)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Payment Frequency</label>
                <select
                  value={paymentFrequency}
                  onChange={(e) => setPaymentFrequency(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                >
                  <option value="monthly">Monthly</option>
                  <option value="bi-weekly">Bi-Weekly</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-[#0066cc] text-white p-8 rounded-2xl shadow-lg">
            <div className="text-center">
              <p className="text-blue-100 mb-2 uppercase tracking-wider font-semibold text-xs">Estimated {paymentFrequency} Payment</p>
              <h3 className="text-5xl font-bold mb-4">${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-blue-400/30">
                <div>
                  <p className="text-blue-100 text-xs uppercase tracking-wider font-semibold mb-1">Total Interest</p>
                  <p className="text-xl font-bold">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
                <div>
                  <p className="text-blue-100 text-xs uppercase tracking-wider font-semibold mb-1">Total Cost</p>
                  <p className="text-xl font-bold">${totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-blue-400/30">
                <ResultActions 
                  onReset={() => {
                    setHomePrice(500000);
                    setDownPayment(100000);
                    setInterestRate(4.5);
                    setAmortization(25);
                    setPaymentFrequency('monthly');
                  }}
                  onCopy={() => {
                    const text = `Canadian Mortgage Projection:\n${paymentFrequency.charAt(0).toUpperCase() + paymentFrequency.slice(1)} Payment: $${monthlyPayment.toFixed(2)}\nTotal Interest: $${totalInterest.toLocaleString()}\nCalculated at simplycalculator.app`;
                    navigator.clipboard.writeText(text);
                  }}
                  dark
                />
              </div>
            </div>
          </div>

          

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              <h2 className="text-2xl font-bold m-0">Canadian Mortgage Rules</h2>
            </div>
            
            <p>
              Mortgages in Canada have several unique characteristics compared to other countries, particularly the United States. Understanding these rules is essential for accurate financial planning.
            </p>

            <h3>Semi-Annual Compounding</h3>
            <p>
              By law, Canadian fixed-rate mortgages are compounded <strong>semi-annually</strong> (twice per year), rather than monthly. This results in a slightly different effective interest rate than what is advertised. Our calculator automatically handles this conversion for you.
            </p>

            <h3>Down Payment Requirements</h3>
            <p>
              In Canada, the minimum down payment depends on the home price:
            </p>
            <ul>
              <li><strong>$500,000 or less:</strong> 5% of the purchase price.</li>
              <li><strong>$500,001 to $999,999:</strong> 5% of the first $500,000, plus 10% of the portion above $500,000.</li>
              <li><strong>$1,000,000 or more:</strong> 20% of the purchase price.</li>
            </ul>

            <h3>CMHC Insurance</h3>
            <p>
              If your down payment is less than 20%, you are required to purchase mortgage default insurance (often called CMHC insurance). The premium is added to your mortgage principal and paid off over the life of the loan.
            </p>

            <h3>Amortization Limits</h3>
            <p>
              The maximum amortization period for an insured mortgage (less than 20% down) is <strong>25 years</strong>. If you have a down payment of 20% or more, you can choose an amortization of up to <strong>30 years</strong>.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0066cc]" />
              Mortgage FAQ
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-slate-900">What is the "Stress Test"?</h4>
                <p className="text-xs text-slate-600">A rule that requires you to prove you can afford payments at a higher interest rate than your actual contract rate.</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">Fixed vs. Variable?</h4>
                <p className="text-xs text-slate-600">Fixed rates stay the same for your term. Variable rates fluctuate with the Bank of Canada's prime rate.</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">What is a "Term"?</h4>
                <p className="text-xs text-slate-600">The length of time your mortgage contract and rate are valid (usually 5 years), after which you must renew.</p>
              </div>
            </div>
          </div>

          

          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold mb-4">Savings Tip</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Choosing <strong>accelerated bi-weekly</strong> payments can save you thousands in interest and shave years off your mortgage by making the equivalent of one extra monthly payment per year.
            </p>
          </div>
        </div>
      </div>
      <CalculatorSEO 
        name="Canadian Mortgage Calculator" 
        path="/canadian-mortgage-calculator" 
        description="Calculate your Canadian mortgage payments using semi-annual compounding rules. Plan for down payments, CMHC insurance, and stress tests for 2026."
      />
    </div>
  );
};
