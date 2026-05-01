import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

import { Percent, DollarSign, Calendar, Info, RotateCcw, Share2, FileDown } from 'lucide-react';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const SimpleInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(1);
  const [timeUnit, setTimeUnit] = useState<'years' | 'months' | 'days'>('years');
  
  const [interest, setInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const resultsRef = React.useRef<HTMLDivElement>(null);

  const handleReset = () => {
    setPrincipal(1000);
    setRate(5);
    setTime(1);
    setTimeUnit('years');
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
      pdf.text('PROFESSIONAL FINANCE REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('SIMPLE INTEREST ANALYSIS', 15, 55);
      
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
      
      pdf.save('Simple_Interest_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  useEffect(() => {
    let t = time;
    if (timeUnit === 'months') t = time / 12;
    else if (timeUnit === 'days') t = time / 365;
    
    const i = principal * (rate / 100) * t;
    const total = principal + i;
    
    setInterest(Number(i.toFixed(2)));
    setTotalAmount(Number(total.toFixed(2)));
  }, [principal, rate, time, timeUnit]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Simple Interest Calculator | Calculate Basic Interest & Growth</title>
        <meta name="description" content="Free online simple interest calculator. Calculate interest earned or paid on a principal amount over time without compounding in 2026." />
      </Helmet>

      <h1>Simple Interest Calculator</h1>
      <p>Calculate the interest earned or paid on a principal amount over a specific period. Simple interest doesn't account for compounding, making it ideal for basic loans and short-term investments.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Interest Details</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Initial Principal Amount ($)</label>
              <input 
                type="number" 
                value={principal} 
                onChange={(e) => setPrincipal(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Interest Rate (Annual %)</label>
              <input 
                type="number" 
                step="0.01"
                value={rate} 
                onChange={(e) => setRate(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="input-label">Loan or Investment Time</label>
                <input 
                  type="number" 
                  value={time} 
                  onChange={(e) => setTime(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Unit</label>
                <select 
                  value={timeUnit} 
                  onChange={(e) => setTimeUnit(e.target.value as any)}
                  className="input-field"
                >
                  <option value="years">Years</option>
                  <option value="months">Months</option>
                  <option value="days">Days</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6" id="result-panel" ref={resultsRef}>
          <div className="calculator-container h-full">
            <div className="section-title">Calculation Results</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Total Interest</div>
                <div className="text-4xl font-bold text-[#0066cc]">${interest.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
              </div>

              <div className="p-4 bg-slate-50 rounded border border-slate-100">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Total Amount (Principal + Interest)</div>
                <div className="text-2xl font-bold text-slate-700">${totalAmount.toLocaleString(undefined, {minimumFractionDigits: 2})}</div>
              </div>

              <ResultActions 
                onReset={handleReset}
                onDownloadPDF={handleDownloadPDF}
                onCopy={() => {
                  const text = `Simple Interest Results:\nPrincipal: $${principal}\nInterest: $${interest}\nTotal: $${totalAmount}\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Simple Interest Calculator" 
        path="/simple-interest" 
        description="Calculate basic interest on any amount without compounding. Ideal for short-term loans and 2026 budgeting."
      />

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Simple Interest: A Basic Finance Guide</h2>
        <p>
          Simple interest is the most basic way to calculate interest. Unlike compound interest, which calculates interest on both the principal and accumulated interest, simple interest only applies to the original amount borrowed or invested. Our <strong>simple interest calculator</strong> makes these calculations effortless in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Simple Interest Formula</h3>
        <p>
          The formula for simple interest is one of the most famous in finance:
        </p>
        <div className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 my-4">
          I = P * r * t
        </div>
        <p>Where:</p>
        <ul>
          <li><strong>I:</strong> Total Interest</li>
          <li><strong>P:</strong> Principal amount</li>
          <li><strong>r:</strong> Annual interest rate (as a decimal)</li>
          <li><strong>t:</strong> Time in years</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">When is Simple Interest Used?</h3>
        <ul>
          <li><strong>Short-term Loans:</strong> Many personal loans between friends or family use simple interest.</li>
          <li><strong>Certificates of Deposit (CDs):</strong> Some short-term CDs pay simple interest.</li>
          <li><strong>Consumer Credit:</strong> Some types of installment loans use simple interest rather than amortization.</li>
          <li><strong>Late Payments:</strong> Penalties for late utility bills or taxes are often calculated using simple interest.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How is simple interest different from compound interest?</p>
            <p>Simple interest stays the same every period because it's always calculated on the original principal. Compound interest grows every period because it's calculated on the principal plus the interest already earned.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Which is better for me?</p>
            <p>If you are borrowing money, simple interest is better because you'll pay less. If you are saving or investing, compound interest is better because you'll earn more.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can I convert simple interest to an annual rate?</p>
            <p>Yes, the 'r' in the formula is already the annual rate. If you know the total interest paid, you can rearrange the formula to find the rate: r = I / (P * t).</p>
          </div>
        </div>
      </div>
    </div>
  );
};
