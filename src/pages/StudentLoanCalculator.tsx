import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const StudentLoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(30000);
  const [interestRate, setInterestRate] = useState<number>(5.5);
  const [loanTerm, setLoanTerm] = useState<number>(10);
  const resultsRef = useRef<HTMLDivElement>(null);

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  const handleReset = () => {
    setLoanAmount(30000);
    setInterestRate(5.5);
    setLoanTerm(10);
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
      pdf.text('PROFESSIONAL STUDENT LOAN REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('FINANCIAL AID REPAYMENT ANALYSIS', 15, 55);
      
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
      
      pdf.save('Student_Loan_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const p = loanAmount;
    
    // Monthly Payment Formula: P = PV * [r(1+r)^n] / [(1+r)^n - 1]
    const payment = r > 0 
      ? p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      : p / n;
    
    setMonthlyPayment(payment);
    setTotalPayment(payment * n);
    setTotalInterest((payment * n) - p);
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Student Loan Calculator | Calculate Monthly Payments 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online student loan calculator. Calculate your monthly student loan payments, total interest, and total cost based on loan amount, rate, and term." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Student Loan Calculator</h1>
        <p className="text-slate-600">
          Determine your monthly student loan payments, total interest, and the total cost of your loan based on the loan amount, interest rate, and term.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="calculator-container shadow-none border-slate-200">
          <h2 className="section-title">Loan Details</h2>
          
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
              <label className="input-label">Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="input-field"
              />
            </div>
            <div>
              <label className="input-label">Loan Term (Years)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="input-field"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6" ref={resultsRef}>
          <div className="calculator-container bg-[#f0f7ff] border-[#0066cc]/10">
            <h2 className="section-title text-[#0066cc]">Repayment Summary</h2>
            <div className="space-y-6 text-center">
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Estimated Monthly Payment</p>
                <p className="text-4xl font-bold text-[#0066cc]">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-[#0066cc]/10 pt-6">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Interest</p>
                  <p className="text-xl font-bold text-slate-900">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Payment</p>
                  <p className="text-xl font-bold text-slate-900">${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
              
              <div className="pt-4">
                <ResultActions 
                  onReset={handleReset}
                  onDownloadPDF={handleDownloadPDF}
                  onCopy={() => {
                    const text = `Student Loan Results:\nMonthly Payment: $${monthlyPayment.toLocaleString()}\nTotal Interest: $${totalInterest.toLocaleString()}\nTotal Payment: $${totalPayment.toLocaleString()}\nCalculated at simplycalculator.app`;
                    navigator.clipboard.writeText(text);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Student Loan Calculator" 
        path="/student-loan-calculator" 
        description="Estimate your monthly student loan payments and visualize your repayment journey. Plan for your future education and debt management in 2026."
      />
    </div>
  );
};
