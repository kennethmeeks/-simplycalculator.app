import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { TrendingUp, DollarSign, Calendar, PieChart } from 'lucide-react';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const InvestmentCalculator: React.FC = () => {
  const [initialAmount, setInitialAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [years, setYears] = useState(20);
  const [returnRate, setReturnRate] = useState(7);
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const [futureValue, setFutureValue] = useState(0);
  const [totalContributions, setTotalContributions] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const handleReset = () => {
    setInitialAmount(10000);
    setMonthlyContribution(500);
    setYears(20);
    setReturnRate(7);
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
      pdf.text('PROFESSIONAL INVESTMENT REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('ASSET GROWTH & PROJECTION ANALYSIS', 15, 55);
      
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
      
      pdf.save('Investment_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  useEffect(() => {
    const r = returnRate / 100 / 12;
    const n = years * 12;
    const p = initialAmount;
    const pmt = monthlyContribution;
    
    let fv = 0;
    if (r === 0) {
      fv = p + (pmt * n);
    } else {
      fv = p * Math.pow(1 + r, n) + pmt * ((Math.pow(1 + r, n) - 1) / r);
    }
    
    const totalContrib = p + (pmt * n);
    const interest = fv - totalContrib;
    
    setFutureValue(Number(fv.toFixed(2)));
    setTotalContributions(Number(totalContrib.toFixed(2)));
    setTotalInterest(Number(interest.toFixed(2)));
  }, [initialAmount, monthlyContribution, years, returnRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Investment Calculator | Estimate Future Wealth & Growth</title>
        <meta name="description" content="Free online investment calculator to project your future wealth. Calculate compound growth based on initial investment, monthly contributions, and return rates in 2026." />
      </Helmet>

      <h1>Investment Calculator</h1>
      <p>Project the growth of your investments over time. See how compounding interest and regular contributions can build significant wealth for your future.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Investment Strategy</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Initial Investment ($)</label>
              <input 
                type="number" 
                value={initialAmount} 
                onChange={(e) => setInitialAmount(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Monthly Contribution ($)</label>
              <input 
                type="number" 
                value={monthlyContribution} 
                onChange={(e) => setMonthlyContribution(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Investment Term (Years)</label>
              <input 
                type="number" 
                value={years} 
                onChange={(e) => setYears(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Expected Return Rate (Annual %)</label>
              <input 
                type="number" 
                step="0.1"
                value={returnRate} 
                onChange={(e) => setReturnRate(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-6" id="result-panel" ref={resultsRef}>
          <div className="calculator-container h-full">
            <div className="section-title">Growth Projection</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10 text-center">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Future Value</div>
                <div className="text-4xl font-bold text-[#0066cc]">${futureValue.toLocaleString()}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded border border-slate-100 flex flex-col justify-center">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1 text-center">Total Contributions</div>
                  <div className="text-lg font-bold text-[#0066cc] text-center">${totalContributions.toLocaleString()}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-100 flex flex-col justify-center">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1 text-center">Total Interest</div>
                  <div className="text-lg font-bold text-[#0066cc] text-center">${totalInterest.toLocaleString()}</div>
                </div>
              </div>

              <ResultActions 
                onReset={handleReset}
                onDownloadPDF={handleDownloadPDF}
                onCopy={() => {
                  const text = `Investment Results:\nFuture Value: $${futureValue.toLocaleString()}\nTotal Interest: $${totalInterest.toLocaleString()}\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Investment Calculator" 
        path="/investment" 
        description="Visualize your financial future with our investment growth calculator. Plan regular contributions and leverage the power of compounding in 2026."
      />
    </div>
  );
};
