import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

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
    const doc = new jsPDF();
    try {
      const canvas = await html2canvas(resultsRef.current, { scale: 2, backgroundColor: '#ffffff' });
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = doc.internal.pageSize.getWidth();
      const contentWidth = pdfWidth - 20;
      const contentHeight = (canvas.height * contentWidth) / canvas.width;
      doc.setFontSize(22);
      doc.text('ROI Report', 20, 20);
      doc.setFontSize(10);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 28);
      doc.addImage(imgData, 'PNG', 10, 35, contentWidth, contentHeight);
      doc.save('ROI_Report.pdf');
    } catch (err) { console.error(err); }
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

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Measuring Success: An ROI Guide</h2>
        <p>
          Return on Investment (ROI) is a popular profitability metric used to evaluate how well an investment has performed. Whether it's a stock purchase, a business project, or a marketing campaign, our <strong>ROI calculator</strong> helps you quantify your success in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How ROI Is Calculated</h3>
        <p>
          The basic ROI formula is simple:
        </p>
        <div className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 my-4">
          ROI = [(Current Value - Cost of Investment) / Cost of Investment] * 100
        </div>
        
        <h4 className="font-bold text-slate-900">Why Annualized ROI Matters</h4>
        <p>
          Total ROI can be misleading if you don't consider the time factor. A 50% return over 10 years is very different from a 50% return over 1 year. Annualized ROI allows you to compare investments of different durations on an apples-to-apples basis.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Limitations of ROI</h3>
        <ul>
          <li><strong>Ignores Risk:</strong> A high ROI might come with high risk. ROI doesn't tell you how likely you were to lose your money.</li>
          <li><strong>Doesn't Account for Cash Flow:</strong> ROI only looks at the start and end values, ignoring any income (like dividends or rent) or expenses that occurred in between.</li>
          <li><strong>Time Sensitivity:</strong> As mentioned, basic ROI doesn't account for the time value of money unless you use the annualized version.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is a "good" ROI?</p>
            <p>A "good" ROI depends on the asset class and your risk tolerance. For stocks, 7-10% annually is often considered good. For a business project, you might look for 15-20% or more.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can ROI be negative?</p>
            <p>Yes. A negative ROI means you lost money on the investment. For example, if you invest $1,000 and get back $800, your ROI is -20%.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How is ROI different from Profit Margin?</p>
            <p>ROI measures the return on the money you put in. Profit Margin measures how much of every dollar of sales the company keeps as profit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
