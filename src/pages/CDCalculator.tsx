import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const CDCalculator: React.FC = () => {
  const [initialDeposit, setInitialDeposit] = useState<number>(10000);
  const [apy, setApy] = useState<number>(5.0);
  const [termMonths, setTermMonths] = useState<number>(12);
  const [compounding, setCompounding] = useState<number>(12);

  const [futureValue, setFutureValue] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);

  useEffect(() => {
    const r = apy / 100 / compounding;
    const n = (termMonths / 12) * compounding;
    
    // Future Value Formula: FV = PV * (1 + r)^n
    const fv = initialDeposit * Math.pow(1 + r, n);
    
    setFutureValue(fv);
    setTotalInterest(fv - initialDeposit);
  }, [initialDeposit, apy, termMonths, compounding]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>CD Calculator | Calculate Certificate of Deposit Interest 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online CD calculator. Calculate the future value and total interest earned on your Certificate of Deposit (CD) based on APY and term." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">CD Calculator</h1>
        <p className="text-slate-600">
          Determine how much your Certificate of Deposit (CD) will be worth at maturity by accounting for the initial deposit, APY, and term length.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">CD Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Initial Deposit ($)</label>
              <input
                type="number"
                value={initialDeposit}
                onChange={(e) => setInitialDeposit(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Annual Percentage Yield (APY) (%)</label>
              <input
                type="number"
                value={apy}
                onChange={(e) => setApy(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Term (Months)</label>
              <input
                type="number"
                value={termMonths}
                onChange={(e) => setTermMonths(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Compounding Frequency</label>
              <select
                value={compounding}
                onChange={(e) => setCompounding(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none bg-white"
              >
                <option value={1}>Annually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
                <option value={365}>Daily</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl font-semibold mb-4">Value at Maturity</h2>
          <div className="space-y-4">
            <p className="text-6xl font-bold text-[#0066cc]">${futureValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Interest Earned</p>
              <p className="text-2xl font-semibold text-slate-900">${totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a Certificate of Deposit (CD)?</h2>
        <p>
          A Certificate of Deposit (CD) is a type of savings account offered by banks and credit unions. In exchange for leaving your money in the account for a fixed period of time (the "term"), the bank pays you a higher interest rate than a standard savings account.
        </p>
        
        <h3>How to Use the CD Calculator</h3>
        <p>
          To calculate the future value of your CD, you need to provide:
        </p>
        <ul>
          <li><strong>Initial Deposit:</strong> The amount of money you are putting into the CD.</li>
          <li><strong>APY:</strong> The Annual Percentage Yield, which represents the total amount of interest you'll earn in a year, including compounding.</li>
          <li><strong>Term:</strong> The length of time you agree to leave your money in the CD.</li>
          <li><strong>Compounding Frequency:</strong> How often the interest is calculated and added to the principal.</li>
        </ul>

        <h3>The Power of Compounding in CDs</h3>
        <p>
          Most CDs compound interest daily or monthly. This means you earn interest on your initial deposit AND on the interest that has already been added to your account. This compounding effect is what makes CDs a powerful tool for growing your savings over time.
        </p>

        <h3>Why Choose a CD?</h3>
        <p>
          CDs are a popular choice for many savers because they offer:
        </p>
        <ul>
          <li><strong>Guaranteed Returns:</strong> Your interest rate is fixed for the entire term of the CD.</li>
          <li><strong>Safety:</strong> CDs are typically insured by the FDIC (for banks) or NCUA (for credit unions) up to $250,000 per depositor.</li>
          <li><strong>Discipline:</strong> Because there are penalties for early withdrawal, CDs can help you avoid the temptation to spend your savings.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is an "Early Withdrawal Penalty"?</h4>
            <p>If you need to access your money before the CD term is up, the bank will charge you a penalty. This penalty is often equal to several months of interest and can even eat into your original principal.</p>
          </div>
          <div>
            <h4 className="font-bold">What is a "CD Ladder"?</h4>
            <p>A CD ladder is a strategy where you divide your savings into several CDs with different maturity dates (e.g., 1-year, 2-year, 3-year). This provides you with regular access to your money while still earning higher interest rates on the longer-term CDs.</p>
          </div>
          <div>
            <h4 className="font-bold">What happens when my CD matures?</h4>
            <p>When your CD reaches the end of its term, you typically have a "grace period" (usually 7 to 10 days) to withdraw your money or roll it over into a new CD. If you do nothing, the bank will often automatically renew the CD for the same term at the current interest rate.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
