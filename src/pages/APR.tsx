import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Percent, DollarSign, Calendar, Info } from 'lucide-react';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const APRCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanFees, setLoanFees] = useState(500);
  const [interestRate, setInterestRate] = useState(5.0);
  const [loanTerm, setLoanTerm] = useState(36); // months
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const [apr, setApr] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleReset = () => {
    setLoanAmount(10000);
    setLoanFees(500);
    setInterestRate(5.0);
    setLoanTerm(36);
  };

  const handleDownloadPDF = async () => {
    if (!resultsRef.current) return;
    const doc = new jsPDF();
    try {
      const canvas = await html2canvas(resultsRef.current, { scale: 2, backgroundColor: '#ffffff' });
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = doc.internal.pageSize.getWidth();
      const contentWidth = pdfWidth - 20;
      const contentHeight = (canvas.height * contentWidth) / canvas.width;
      doc.setFontSize(22);
      doc.text('APR Analysis Report', 20, 20);
      doc.setFontSize(10);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 28);
      doc.addImage(imgData, 'PNG', 10, 35, contentWidth, contentHeight);
      doc.save('APR_Report.pdf');
    } catch (err) { console.error(err); }
  };

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = loanTerm;
    const p = loanAmount;
    const f = loanFees;
    
    // Monthly payment based on principal only
    const pmt = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    // Total cost including fees
    const total = pmt * n + f;
    
    // To find APR, we need to find the rate 'i' such that:
    // (p - f) = pmt * [(1 - (1+i)^-n) / i]
    // This requires numerical approximation.
    
    let low = 0;
    let high = 1; // 100% monthly is way too high, but safe for search
    let guess = 0.05 / 12;
    const target = p - f;
    
    for (let i = 0; i < 100; i++) {
      guess = (low + high) / 2;
      const val = pmt * ((1 - Math.pow(1 + guess, -n)) / guess);
      if (val > target) low = guess;
      else high = guess;
    }
    
    const aprVal = guess * 12 * 100;
    
    setApr(Number(aprVal.toFixed(3)));
    setMonthlyPayment(Number(pmt.toFixed(2)));
    setTotalCost(Number(total.toFixed(2)));
  }, [loanAmount, loanFees, interestRate, loanTerm]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>APR Calculator | Calculate True Annual Percentage Rate | simplycalculator.app</title>
        <meta name="description" content="Free online APR calculator to find the true cost of borrowing. Calculate Annual Percentage Rate including interest and loan fees in 2026." />
      </Helmet>

      <h1>APR Calculator</h1>
      <p>Calculate the true Annual Percentage Rate (APR) of your loan. See how upfront fees and interest rates combine to create the real cost of your debt.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Loan Parameters</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Loan Amount ($)</label>
              <input 
                type="number" 
                value={loanAmount} 
                onChange={(e) => setLoanAmount(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Upfront Fees ($)</label>
              <input 
                type="number" 
                value={loanFees} 
                onChange={(e) => setLoanFees(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Interest Rate (Annual %)</label>
              <input 
                type="number" 
                step="0.01"
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Loan Term (Months)</label>
              <input 
                type="number" 
                value={loanTerm} 
                onChange={(e) => setLoanTerm(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-6" id="result-panel" ref={resultsRef}>
          <div className="calculator-container h-full">
            <div className="section-title">True Cost Analysis</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10 text-center">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">True APR</div>
                <div className="text-4xl font-bold text-[#0066cc]">{apr}%</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded border border-slate-100 flex flex-col justify-center">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1 text-center">Monthly Payment</div>
                  <div className="text-lg font-bold text-slate-700 text-center">${monthlyPayment.toLocaleString()}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-100 flex flex-col justify-center">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1 text-center">Total Cost</div>
                  <div className="text-lg font-bold text-slate-700 text-center">${totalCost.toLocaleString()}</div>
                </div>
              </div>

              <ResultActions 
                onReset={handleReset}
                onDownloadPDF={handleDownloadPDF}
                onCopy={() => {
                  const text = `APR Results:\nTrue APR: ${apr}%\nMonthly Payment: $${monthlyPayment.toLocaleString()}\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Interest vs. APR: A True Cost Guide</h2>
        <p>
          When shopping for a loan, you'll often see two different numbers: the interest rate and the APR. Understanding the difference is critical to finding the best deal. Our <strong>APR calculator</strong> helps you uncover the hidden costs of borrowing in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">What is APR?</h3>
        <p>
          APR stands for Annual Percentage Rate. While the interest rate tells you the cost of the principal, the APR includes the interest rate PLUS any additional fees or costs associated with the loan (like origination fees, points, or insurance).
        </p>
        <p>
          Because it includes these extra costs, the APR is almost always higher than the base interest rate. It provides a more accurate "bottom line" for comparing different loan offers.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why APR is Important</h3>
        <ul>
          <li><strong>Apples-to-Apples Comparison:</strong> One lender might offer a low interest rate but high fees, while another has a higher rate but no fees. Comparing their APRs tells you which one is actually cheaper.</li>
          <li><strong>Transparency:</strong> Lenders are legally required to disclose the APR so consumers aren't misled by "teaser" interest rates.</li>
          <li><strong>Total Cost Awareness:</strong> It helps you understand exactly how much you are paying for every dollar you borrow.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Is APR the same as APY?</p>
            <p>No. APR is used for loans (what you pay), while APY (Annual Percentage Yield) is used for savings (what you earn). APY accounts for compound interest, while APR typically does not.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can APR change?</p>
            <p>Yes, if you have a variable-rate loan (like many credit cards or ARMs), the APR can fluctuate based on market conditions.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does APR include all fees?</p>
            <p>Most standard loan fees are included, but some (like late fees or appraisal fees) might not be. Always read the fine print of your loan disclosure.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
