import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

import { TrendingUp, DollarSign, Percent, BarChart, FileDown, Share2, RotateCcw } from 'lucide-react';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const ROICalculator: React.FC = () => {
  const [amountInvested, setAmountInvested] = useState(10000);
  const [amountReturned, setAmountReturned] = useState(15000);
  const [investmentPeriod, setInvestmentPeriod] = useState(2); // years
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const [totalProfit, setTotalProfit] = useState(0);
  const [roi, setRoi] = useState(0);
  const [annualizedRoi, setAnnualizedRoi] = useState(0);

  const handleReset = () => {
    setAmountInvested(10000);
    setAmountReturned(15000);
    setInvestmentPeriod(2);
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
      pdf.text('PROFESSIONAL ROI REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('RETURN ON INVESTMENT ANALYSIS', 15, 55);
      
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
      
      pdf.save('ROI_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  useEffect(() => {
    const profit = amountReturned - amountInvested;
    const roiVal = (profit / amountInvested) * 100;
    
    // Annualized ROI = [(1 + ROI/100)^(1/n) - 1] * 100
    const annRoi = (Math.pow(1 + roiVal / 100, 1 / investmentPeriod) - 1) * 100;
    
    setTotalProfit(Number(profit.toFixed(2)));
    setRoi(Number(roiVal.toFixed(2)));
    setAnnualizedRoi(Number(annRoi.toFixed(2)));
  }, [amountInvested, amountReturned, investmentPeriod]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>ROI Calculator | Calculate Return on Investment & Profit</title>
        <meta name="description" content="Free online ROI calculator to measure investment performance. Calculate total return, profit, and annualized ROI for any investment in 2026." />
      </Helmet>

      <h1>ROI Calculator</h1>
      <p>Measure the efficiency of an investment or compare the efficiency of several different investments. Calculate your total profit and annualized return on investment.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Investment Data</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Amount Invested ($)</label>
              <input 
                type="number" 
                value={amountInvested} 
                onChange={(e) => setAmountInvested(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Amount Returned ($)</label>
              <input 
                type="number" 
                value={amountReturned} 
                onChange={(e) => setAmountReturned(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Investment Period (Years)</label>
              <input 
                type="number" 
                value={investmentPeriod} 
                onChange={(e) => setInvestmentPeriod(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-6" id="result-panel" ref={resultsRef}>
          <div className="calculator-container h-full">
            <div className="section-title">Performance Summary</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10 text-center">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Total ROI</div>
                <div className="text-4xl font-bold text-[#0066cc]">{roi}%</div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-slate-50 rounded border border-slate-100 flex justify-between items-center">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Total Profit</div>
                  <div className="text-lg font-bold text-[#0066cc]">${totalProfit.toLocaleString()}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-100 flex justify-between items-center">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Annualized ROI</div>
                  <div className="text-lg font-bold text-[#0066cc]">{annualizedRoi}%</div>
                </div>
              </div>

                <ResultActions 
                  onReset={handleReset}
                  onDownloadPDF={handleDownloadPDF}
                  onCopy={() => {
                        const text = `ROI Results:\nTotal ROI: ${roi}%\nProfit: $${totalProfit.toLocaleString()}\nCalculated at simplycalculator.app`;
                        navigator.clipboard.writeText(text);
                    }}
                />
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="ROI Calculator (Return on Investment)" 
        path="/roi" 
        description="Measure the profitability of your investments. Calculate total ROI and annualized ROI for stocks, business projects, or any financial venture in 2026."
      />
    </div>
  );
};
