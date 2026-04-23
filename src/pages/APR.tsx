import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Percent, DollarSign, Calendar, Info } from 'lucide-react';
import { CalculatorSEO } from '../components/CalculatorSEO';
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
    try {
      const element = resultsRef.current;
      const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.setFillColor(0, 102, 204);
      pdf.rect(0, 0, pdfWidth, 40, 'F');
      
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      pdf.text('SIMPLYCALCULATOR.APP', 15, 25);
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text('PROFESSIONAL APR ANALYSIS REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('ANNUAL PERCENTAGE RATE BREAKDOWN', 15, 55);
      
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(150, 150, 150);
      pdf.text(`TIMESTAMP: ${new Date().toLocaleString()}`, 15, 62);
      
      pdf.setDrawColor(230, 230, 230);
      pdf.line(15, 75, pdfWidth - 15, 75);
      
      const imgProps = pdf.getImageProperties(imgData);
      const displayWidth = pdfWidth - 30;
      const displayHeight = (imgProps.height * displayWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 15, 85, displayWidth, displayHeight);
      
      const footerY = Math.max(85 + displayHeight + 20, pdfHeight - 30);
      pdf.setFontSize(8);
      pdf.setTextColor(180, 180, 180);
      pdf.text('DISCLAIMER: This report is an estimate based on mathematical models and verified formulas.', 15, footerY);
      
      pdf.setTextColor(0, 102, 204);
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.text('WWW.SIMPLYCALCULATOR.APP', pdfWidth / 2, pdfHeight - 10, { align: 'center' });
      
      pdf.save('APR_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
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

      <CalculatorSEO 
        name="APR Calculator" 
        path="/apr-calculator" 
        description="Calculate the True Annual Percentage Rate (APR) of your loan. Uncover hidden fees and compare loan offers for better financial decisions in 2026."
      />
    </div>
  );
};
