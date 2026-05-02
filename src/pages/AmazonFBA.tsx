import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileDown, RotateCcw, Share2 } from 'lucide-react';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const AmazonFBACalculator: React.FC = () => {
  const [price, setPrice] = useState(29.99);
  const [cost, setCost] = useState(8.50);
  const [shipping, setShipping] = useState(1.20);
  
  const [referralFeePercent, setReferralFeePercent] = useState(15);
  const [fulfillmentFee, setFulfillmentFee] = useState(5.40);
  const [storageFee, setStorageFee] = useState(0.45);
  const [advertising, setAdvertising] = useState(3.00); // Per unit
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleReset = () => {
    setPrice(29.99);
    setCost(8.50);
    setShipping(1.20);
    setReferralFeePercent(15);
    setFulfillmentFee(5.40);
    setStorageFee(0.45);
    setAdvertising(3.00);
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
      pdf.text('PROFESSIONAL AMAZON FBA REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('FBA PROFITABILITY ANALYSIS', 15, 55);
      
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
      
      pdf.save('Amazon_FBA_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };
  
  const [referralFee, setReferralFee] = useState(0);
  const [totalFees, setTotalFees] = useState(0);
  const [netProfit, setNetProfit] = useState(0);
  const [margin, setMargin] = useState(0);
  const [roi, setRoi] = useState(0);

  useEffect(() => {
    const refFee = price * (referralFeePercent / 100);
    setReferralFee(refFee);
    
    const fees = refFee + fulfillmentFee + storageFee + advertising;
    setTotalFees(fees);
    
    const profit = price - cost - shipping - fees;
    setNetProfit(profit);
    
    setMargin((profit / price) * 100);
    setRoi((profit / (cost + shipping)) * 100);
  }, [price, cost, shipping, referralFeePercent, fulfillmentFee, storageFee, advertising]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Amazon FBA Fee Calculator [Updated for 2026]</title>
        <meta name="description" content="Calculate your Amazon FBA profit margins and ROI. Includes referral fees, fulfillment fees, storage, and advertising costs for 2026 e-commerce sellers." />
      </Helmet>

      <h1>Amazon FBA Fee Calculator</h1>
      <p>Estimate your net profit, margin, and ROI for selling on Amazon FBA after all fees and costs.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Product Costs & Fees</div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">Sale Price ($)</label>
                <input 
                  type="number" 
                  value={price} 
                  onChange={(e) => setPrice(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">Product Cost ($)</label>
                <input 
                  type="number" 
                  value={cost} 
                  onChange={(e) => setCost(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Shipping to Amazon ($)</label>
              <input 
                type="number" 
                value={shipping} 
                onChange={(e) => setShipping(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">Referral Fee (%)</label>
                <input 
                  type="number" 
                  value={referralFeePercent} 
                  onChange={(e) => setReferralFeePercent(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">Fulfillment Fee ($)</label>
                <input 
                  type="number" 
                  value={fulfillmentFee} 
                  onChange={(e) => setFulfillmentFee(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">Storage Fee ($)</label>
                <input 
                  type="number" 
                  value={storageFee} 
                  onChange={(e) => setStorageFee(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">Advertising / PPC ($)</label>
                <input 
                  type="number" 
                  value={advertising} 
                  onChange={(e) => setAdvertising(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
            </div>
          </div>
        </div>

        <div id="result-panel" ref={resultsRef}>
          <div className="calculator-container h-full">
            <div className="section-title">Profit Analysis</div>
            <div className="result-box">
              <div className="space-y-4">
                <div className="text-center pb-4 border-b border-[#b3d9ff]">
                  <div className="text-[#666] text-xs uppercase font-bold mb-1">Net Profit Per Unit</div>
                  <div className="text-4xl font-bold text-[#0066cc]">
                    ${netProfit.toFixed(2)}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="text-center">
                    <div className="text-[#666] text-xs uppercase font-bold mb-1">Profit Margin</div>
                    <div className="text-2xl font-bold text-[#0066cc]">{margin.toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#666] text-xs uppercase font-bold mb-1">ROI</div>
                    <div className="text-2xl font-bold text-[#0066cc]">{roi.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Referral Fee:</span>
                    <span>${referralFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Amazon Fees:</span>
                    <span>${totalFees.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total Cost of Goods:</span>
                    <span>${(cost + shipping).toFixed(2)}</span>
                  </div>
                </div>

                <ResultActions 
                  onReset={handleReset}
                  onDownloadPDF={handleDownloadPDF}
                  onCopy={() => {
                      const text = `Amazon FBA Results:\nNet Profit: $${netProfit.toFixed(2)}\nROI: ${roi.toFixed(1)}%\nCalculated at simplycalculator.app`;
                      navigator.clipboard.writeText(text);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Amazon FBA Fee Calculator" 
        path="/amazon-fba" 
        description="Calculate your Amazon FBA profit margins and ROI. Factor in referral fees, fulfillment, storage, and advertising costs for 2026 sales success."
      />
    </div>
  );
};
