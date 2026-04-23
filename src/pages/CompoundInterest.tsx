import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { parseInput } from '@/src/lib/calculatorUtils';
import { ResultActions } from '../components/ResultActions';
import { FileDown, RotateCcw, Share2 } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const CompoundInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<number | string>(10000);
  const [rate, setRate] = useState<number | string>(7);
  const [years, setYears] = useState<number | string>(10);
  const [compounding, setCompounding] = useState(12); // Monthly
  const [contribution, setContribution] = useState<number | string>(100);
  const resultsRef = useRef<HTMLDivElement>(null);

  const [total, setTotal] = useState(0);
  const [interest, setInterest] = useState(0);

  const handleReset = () => {
    setPrincipal(10000);
    setRate(7);
    setYears(10);
    setCompounding(12);
    setContribution(100);
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
      pdf.text('PROFESSIONAL COMPOUND INTEREST REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('COMPOUND INTEREST GROWTH ANALYSIS', 15, 55);
      
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
      
      pdf.save('Compound_Interest_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  useEffect(() => {
    const p = parseInput(principal.toString());
    const r = parseInput(rate.toString()) / 100;
    const n = compounding;
    const t = parseInput(years.toString());
    const PMT = parseInput(contribution.toString());

    if (t <= 0 || n <= 0) {
      setTotal(p);
      setInterest(0);
      return;
    }

    // Formula: A = P(1 + r/n)^(nt) + PMT * [((1 + r/n)^(nt) - 1) / (r/n)]
    let finalAmount = 0;
    if (r === 0) {
      finalAmount = p + (PMT * n * t);
    } else {
      const amountFromPrincipal = p * Math.pow(1 + r / n, n * t);
      const amountFromContributions = PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));
      finalAmount = amountFromPrincipal + amountFromContributions;
    }
    
    const totalInvested = p + (PMT * n * t);
    
    setTotal(finalAmount);
    setInterest(finalAmount - totalInvested);
  }, [principal, rate, years, compounding, contribution]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Compound Interest Calculator | Monthly Contributions & Growth 2026 | simplycalculator.app</title>
        <meta name="description" content="Calculate your investment growth with our free compound interest calculator. See how monthly contributions and compounding interest can build your wealth in 2026." />
      </Helmet>

      <h1>Compound Interest Calculator</h1>
      <p>Calculate how much your investment will grow over time with compound interest and regular contributions.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Initial Investment ($)</label>
              <input 
                type="number" 
                value={principal} 
                onChange={(e) => setPrincipal(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Monthly Contribution ($)</label>
              <input 
                type="number" 
                value={contribution} 
                onChange={(e) => setContribution(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Interest Rate (%)</label>
              <input 
                type="number" 
                step="0.1" 
                value={rate} 
                onChange={(e) => setRate(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Years</label>
              <input 
                type="number" 
                value={years} 
                onChange={(e) => setYears(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Compounding Frequency</label>
              <select 
                value={compounding} 
                onChange={(e) => setCompounding(Number(e.target.value))} 
                className="input-field w-full"
              >
                <option value={1}>Annually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
                <option value={365}>Daily</option>
              </select>
            </div>
          </div>
        </div>

        <div id="result-panel" ref={resultsRef}>
          <div className="calculator-container h-full">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Total Interest Earned:</span>
                  <span className="font-bold text-[#0066cc]">${interest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold">Future Value:</span>
                  <span className="text-2xl font-bold text-[#0066cc]">${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              <ResultActions 
                onReset={handleReset}
                onDownloadPDF={handleDownloadPDF}
                onCopy={() => {
                    const text = `Compound Interest Results:\nFuture Value: $${total.toLocaleString()}\nInterest Earned: $${interest.toLocaleString()}\nCalculated at simplycalculator.app`;
                    navigator.clipboard.writeText(text);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Compound Interest Calculator" 
        path="/compound-interest" 
        description="Calculate the power of compound interest with regular contributions. Plan your financial future and build long-term wealth with our compound interest tool for 2026."
      />
    </div>
  );
};
