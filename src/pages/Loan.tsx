import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { DollarSign, Calendar, Percent, TrendingUp } from 'lucide-react';
import { parseInput } from '@/src/lib/calculatorUtils';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const LoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number | string>(30000);
  const [loanTerm, setLoanTerm] = useState<number | string>(60); // months
  const [interestRate, setInterestRate] = useState<number | string>(5.5);
  
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const amount = parseInput(loanAmount.toString());
    const term = parseInput(loanTerm.toString());
    const rate = parseInput(interestRate.toString());
    
    const r = rate / 100 / 12;
    const n = term;
    
    if (n <= 0) {
      setMonthlyPayment(0);
      setTotalInterest(0);
      setTotalCost(amount);
      return;
    }

    if (r === 0) {
      setMonthlyPayment(amount / n);
      setTotalInterest(0);
      setTotalCost(amount);
    } else {
      const payment = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const total = payment * n;
      const interest = total - amount;
      
      setMonthlyPayment(Number(payment.toFixed(2)));
      setTotalInterest(Number(interest.toFixed(2)));
      setTotalCost(Number(total.toFixed(2)));
    }
  }, [loanAmount, loanTerm, interestRate]);

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
      pdf.text('PROFESSIONAL FINANCE REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('LOAN & AMORTIZATION ANALYSIS', 15, 55);
      
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
      pdf.text('simplycalculator.app assumes no liability for critical financial or medical decisions.', 15, footerY + 4);
      
      pdf.setTextColor(0, 102, 204);
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.text('WWW.SIMPLYCALCULATOR.APP', pdfWidth / 2, pdfHeight - 10, { align: 'center' });
      
      pdf.save('Loan_Calculator_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Loan Calculator [Instant Results]</title>
        <meta name="description" content="Free online loan calculator to estimate monthly payments, total interest, and total cost of any loan. Perfect for personal loans, business loans, and more in 2026." />
      </Helmet>

      <h1>Loan Calculator</h1>
      <p>Estimate your monthly payments and see the total interest you'll pay over the life of your loan. Works for personal loans, car loans, and business financing.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Loan Details</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Loan Amount ($)</label>
              <input 
                type="number" 
                value={loanAmount} 
                onChange={(e) => setLoanAmount(e.target.value)} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Loan Term (Months)</label>
              <input 
                type="number" 
                value={loanTerm} 
                onChange={(e) => setLoanTerm(e.target.value)} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Interest Rate (Annual %)</label>
              <input 
                type="number" 
                step="0.01"
                value={interestRate} 
                onChange={(e) => setInterestRate(e.target.value)} 
                className="input-field" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container" ref={resultsRef}>
            <div className="section-title">Payment Summary</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f8fbfe] border-[#e1eefc] p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-[#666] text-[10px] uppercase font-black tracking-widest mb-2">Monthly Payment</div>
                  <div className="text-5xl font-black text-[#0066cc] tracking-tight">${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
              </div>
 
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                  <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1 border-b border-slate-50 pb-1">Total Interest</div>
                  <div className="text-xl font-black text-[#0066cc]">${totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                  <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1 border-b border-slate-50 pb-1">Total Cost</div>
                  <div className="text-xl font-black text-[#0066cc]">${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
              </div>
            </div>
          </div>

          <ResultActions 
            onReset={() => {
                setLoanAmount(30000);
                setLoanTerm(60);
                setInterestRate(5.5);
            }}
            onDownloadPDF={handleDownloadPDF}
            onCopy={() => {
              const text = `Loan Results:\nMonthly Payment: $${monthlyPayment.toFixed(2)}\nTotal Interest: $${totalInterest.toFixed(2)}\nTotal Cost: $${totalCost.toFixed(2)}\nCalculated at simplycalculator.app`;
              navigator.clipboard.writeText(text);
            }}
          />
          
        </div>
      </div>

      <CalculatorSEO 
        name="Loan Calculator" 
        path="/loan" 
        description="Calculate monthly payments, total interest, and the true cost of borrowing. Make informed financial decisions with our comprehensive loan tool for 2026."
      />
    </div>
  );
};
