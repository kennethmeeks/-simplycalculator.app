import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

export const BRRRRCalculator: React.FC = () => {
  // Buy & Rehab
  const [purchasePrice, setPurchasePrice] = useState(150000);
  const [purchaseClosingCosts, setPurchaseClosingCosts] = useState(3000);
  const [rehabCosts, setRehabCosts] = useState(40000);
  const [holdingCosts, setHoldingCosts] = useState(5000);
  
  // Rent
  const [monthlyRent, setMonthlyRent] = useState(1800);
  const [operatingExpenses, setOperatingExpenses] = useState(600); // Taxes, Ins, Maint, etc.
  
  // Refinance
  const [arv, setArv] = useState(250000);
  const [refiLtv, setRefiLtv] = useState(75); // %
  const [refiInterestRate, setRefiInterestRate] = useState(6.5);
  const [refiClosingCosts, setRefiClosingCosts] = useState(4000);
  
  // Results
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [newLoanAmount, setNewLoanAmount] = useState(0);
  const [cashOut, setCashOut] = useState(0);
  const [cashLeftInDeal, setCashLeftInDeal] = useState(0);
  const [monthlyMortgage, setMonthlyMortgage] = useState(0);
  const [monthlyCashFlow, setMonthlyCashFlow] = useState(0);
  const [equityCreated, setEquityCreated] = useState(0);
  const [cocReturn, setCocReturn] = useState(0);

  useEffect(() => {
    const totalInv = purchasePrice + purchaseClosingCosts + rehabCosts + holdingCosts;
    setTotalInvestment(totalInv);
    
    const loanAmt = arv * (refiLtv / 100);
    setNewLoanAmount(loanAmt);
    
    const cashOutAmt = loanAmt - refiClosingCosts - totalInv;
    setCashOut(cashOutAmt);
    
    const leftInDeal = totalInv + refiClosingCosts - loanAmt;
    setCashLeftInDeal(leftInDeal > 0 ? leftInDeal : 0);
    
    // Mortgage calculation (30 year fixed)
    const monthlyRate = (refiInterestRate / 100) / 12;
    const n = 30 * 12;
    const mortgage = loanAmt * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    setMonthlyMortgage(mortgage);
    
    const cashFlow = monthlyRent - operatingExpenses - mortgage;
    setMonthlyCashFlow(cashFlow);
    
    setEquityCreated(arv - loanAmt);
    
    if (leftInDeal > 0) {
      setCocReturn((cashFlow * 12 / leftInDeal) * 100);
    } else {
      setCocReturn(Infinity); // Infinite return if no cash left
    }
  }, [purchasePrice, purchaseClosingCosts, rehabCosts, holdingCosts, monthlyRent, operatingExpenses, arv, refiLtv, refiInterestRate, refiClosingCosts]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Advanced BRRRR Calculator | Real Estate Investing Strategy & ROI | simplycalculator.app</title>
        <meta name="description" content="Analyze your BRRRR real estate deals with our advanced calculator. Calculate cash-out amounts, equity created, and cash flow for 2026 investors." />
      </Helmet>

      <h1>BRRRR Method Calculator</h1>
      <p>Analyze your "Buy, Rehab, Rent, Refinance, Repeat" deals with precision to maximize your real estate portfolio growth.</p>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="section-title">1. Buy & Rehab</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">Purchase Price ($)</label>
                <input type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))} className="input-field w-full" />
              </div>
              <div className="input-group">
                <label className="input-label">Purchase Closing Costs ($)</label>
                <input type="number" value={purchaseClosingCosts} onChange={(e) => setPurchaseClosingCosts(Number(e.target.value))} className="input-field w-full" />
              </div>
              <div className="input-group">
                <label className="input-label">Rehab Costs ($)</label>
                <input type="number" value={rehabCosts} onChange={(e) => setRehabCosts(Number(e.target.value))} className="input-field w-full" />
              </div>
              <div className="input-group">
                <label className="input-label">Holding Costs ($)</label>
                <input type="number" value={holdingCosts} onChange={(e) => setHoldingCosts(Number(e.target.value))} className="input-field w-full" />
              </div>
            </div>
          </div>

          <div className="calculator-container">
            <div className="section-title">2. Rent & Expenses</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">Monthly Rent ($)</label>
                <input type="number" value={monthlyRent} onChange={(e) => setMonthlyRent(Number(e.target.value))} className="input-field w-full" />
              </div>
              <div className="input-group">
                <label className="input-label">Monthly Operating Expenses ($)</label>
                <input type="number" value={operatingExpenses} onChange={(e) => setOperatingExpenses(Number(e.target.value))} className="input-field w-full" />
              </div>
            </div>
          </div>

          <div className="calculator-container">
            <div className="section-title">3. Refinance</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">After Repair Value (ARV) ($)</label>
                <input type="number" value={arv} onChange={(e) => setArv(Number(e.target.value))} className="input-field w-full" />
              </div>
              <div className="input-group">
                <label className="input-label">Refi Loan-to-Value (LTV) (%)</label>
                <input type="number" value={refiLtv} onChange={(e) => setRefiLtv(Number(e.target.value))} className="input-field w-full" />
              </div>
              <div className="input-group">
                <label className="input-label">Refi Interest Rate (%)</label>
                <input type="number" value={refiInterestRate} onChange={(e) => setRefiInterestRate(Number(e.target.value))} className="input-field w-full" />
              </div>
              <div className="input-group">
                <label className="input-label">Refi Closing Costs ($)</label>
                <input type="number" value={refiClosingCosts} onChange={(e) => setRefiClosingCosts(Number(e.target.value))} className="input-field w-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container sticky top-4">
            <div className="section-title">Deal Summary</div>
            <div className="result-box">
              <div className="space-y-4">
                <div className="text-center pb-4 border-b border-[#b3d9ff]">
                  <div className="text-[#666] text-xs uppercase font-bold mb-1">Cash Left in Deal</div>
                  <div className={`text-3xl font-bold ${cashLeftInDeal === 0 ? 'text-green-600' : 'text-[#0066cc]'}`}>
                    ${cashLeftInDeal.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </div>
                  {cashOut > 0 && <div className="text-green-600 text-sm font-bold mt-1">Infinite Return! (${cashOut.toLocaleString()} Cash Out)</div>}
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Monthly Cash Flow:</span>
                    <span className={`font-bold ${monthlyCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${monthlyCashFlow.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equity Created:</span>
                    <span className="font-bold text-[#0066cc]">${equityCreated.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cash-on-Cash Return:</span>
                    <span className="font-bold text-[#0066cc]">
                      {cocReturn === Infinity ? 'Infinite' : `${cocReturn.toFixed(1)}%`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Investment:</span>
                    <span>${totalInvestment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New Loan Amount:</span>
                    <span>${newLoanAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="BRRRR Method Calculator" 
        path="/brrrr" 
        description="Analyze your BRRRR real estate deals with our advanced calculator. Calculate cash-out amounts, equity created, and cash flow for 2026 investors."
      />

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Advanced Guide to the BRRRR Method</h2>
        <p>
          The BRRRR method (Buy, Rehab, Rent, Refinance, Repeat) is one of the most powerful wealth-building strategies in real estate investing. In 2026, as interest rates and property values fluctuate, having an <strong>advanced BRRRR calculator</strong> is essential for identifying deals that allow you to recycle your capital and scale your portfolio rapidly.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How the BRRRR Method Works</h3>
        <p>
          The goal of the BRRRR method is to buy a distressed property, add value through renovation, and then refinance the property based on its new, higher value. If done correctly, you can pull out all (or most) of your initial investment, allowing you to buy the next property with the same money.
        </p>
        <ol>
          <li><strong>Buy:</strong> Purchase a property below market value that needs work.</li>
          <li><strong>Rehab:</strong> Renovate the property to increase its value and appeal to renters.</li>
          <li><strong>Rent:</strong> Place a high-quality tenant to generate cash flow and satisfy lender requirements for the refinance.</li>
          <li><strong>Refinance:</strong> Get a new long-term mortgage based on the After Repair Value (ARV).</li>
          <li><strong>Repeat:</strong> Use the cash pulled out from the refinance to fund your next deal.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Metrics for BRRRR Success</h3>
        <p>
          To ensure a successful BRRRR deal, you must focus on three critical numbers:
        </p>
        <p><strong>1. The 70% Rule:</strong> Most investors aim to have their total investment (Purchase + Rehab) be no more than 70-75% of the ARV. This ensures that when you refinance at 75% LTV, you can pull out all your cash.</p>
        <p><strong>2. Cash-on-Cash Return:</strong> If you do have some cash left in the deal, what is the return on that specific amount? A <strong>BRRRR ROI calculator</strong> helps you compare this to other investment opportunities.</p>
        <p><strong>3. Post-Refi Cash Flow:</strong> This is where many investors fail. You must ensure the property still generates positive cash flow even with the larger, new mortgage payment. Our calculator accounts for taxes, insurance, and maintenance to give you a realistic net cash flow figure.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is a "Perfect BRRRR"?</p>
            <p>A perfect BRRRR is when the new loan amount covers 100% of your purchase price, closing costs, and rehab costs. This results in an "infinite return" because you have $0 of your own money left in the deal.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How long is the "Seasoning Period"?</p>
            <p>In 2026, most conventional lenders require you to own the property for 6 to 12 months before they will allow a cash-out refinance based on the new appraised value. Always check with your lender before starting a deal.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What if the appraisal comes in low?</p>
            <p>This is the biggest risk in BRRRR. If the ARV is lower than expected, you will have "cash left in the deal." While not ideal, as long as the property still cash flows, it can still be a great long-term investment.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Pro Tip for Real Estate Investors</h3>
        <p>
          Don't underestimate <strong>holding costs</strong>. Interest on hard money loans, utilities, and insurance during the rehab phase can add up to thousands of dollars. Our <strong>advanced real estate deal analyzer</strong> includes a dedicated field for these costs to ensure your "Repeat" phase is as profitable as possible.
        </p>
      </div>
    </div>
  );
};
