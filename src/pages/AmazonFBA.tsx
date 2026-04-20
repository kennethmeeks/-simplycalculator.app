import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileDown, RotateCcw, Share2 } from 'lucide-react';
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
    const doc = new jsPDF();
    try {
      const canvas = await html2canvas(resultsRef.current, { scale: 2, backgroundColor: '#ffffff' });
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = doc.internal.pageSize.getWidth();
      const contentWidth = pdfWidth - 20;
      const contentHeight = (canvas.height * contentWidth) / canvas.width;
      doc.setFontSize(22);
      doc.text('Amazon FBA Report', 20, 20);
      doc.setFontSize(10);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 28);
      doc.addImage(imgData, 'PNG', 10, 35, contentWidth, contentHeight);
      doc.save('AmazonFBA_Report.pdf');
    } catch (err) { console.error(err); }
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
        <title>Amazon FBA Fee Calculator | Calculate Profit Margins & ROI for Sellers | simplycalculator.app</title>
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

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Ultimate Amazon FBA Profit Guide</h2>
        <p>
          Selling on Amazon in 2026 is a game of margins. With rising fulfillment costs and increased competition, understanding your exact profit per unit is the difference between a thriving business and a failing one. Our <strong>Amazon FBA fee calculator</strong> is designed for serious sellers who need to account for every cent, from referral fees to PPC advertising costs.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Understanding Amazon FBA Fees</h3>
        <p>
          Amazon's fee structure can be complex. To calculate your profit accurately, you must understand the two primary fees:
        </p>
        <ul>
          <li><strong>Referral Fee:</strong> This is Amazon's "commission" for bringing you the customer. For most categories, this is 15% of the total sale price. </li>
          <li><strong>Fulfillment Fee (FBA Fee):</strong> This covers the cost of picking, packing, and shipping your product. This fee is based on the weight and dimensions of your product. </li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Don't Forget the "Hidden" Costs</h3>
        <p>
          Many new sellers fail because they only look at the referral and fulfillment fees. To get a true <strong>net profit margin</strong>, you must also include:
        </p>
        <p><strong>1. Storage Fees:</strong> Amazon charges you for every cubic foot your inventory occupies in their warehouse. These fees increase significantly during the Q4 holiday season.</p>
        <p><strong>2. Advertising (PPC):</strong> In 2026, it is nearly impossible to launch a product without Amazon Advertising. You must calculate your "Advertising Cost of Sale" (ACOS) and factor it into your per-unit profit.</p>
        <p><strong>3. Shipping to Amazon:</strong> Whether you are shipping from China or a local warehouse, the cost of getting your goods into the FBA system must be added to your COGS (Cost of Goods Sold).</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Margin vs. ROI: Which Matters More?</h3>
        <p>
          While both are important, they tell different stories:
        </p>
        <ul>
          <li><strong>Profit Margin:</strong> Tells you how much of every dollar you keep. A 20-30% margin is generally considered healthy for FBA.</li>
          <li><strong>ROI (Return on Investment):</strong> Tells you how hard your money is working. If you spend $10 to make $5 profit, your ROI is 50%. High ROI allows you to scale your business faster with less capital.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is a good profit margin for FBA?</p>
            <p>Most successful sellers aim for a minimum of 25% net profit margin after all fees and advertising. Anything below 15% leaves very little room for error or price wars.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How often do Amazon fees change?</p>
            <p>Amazon typically updates its fee structure once a year, usually in the spring. Always check the latest Seller Central announcements to keep your <strong>FBA profit estimates</strong> accurate.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I include returns in my calculation?</p>
            <p>Yes. A "Return Rate" of 3-5% is standard for most categories. You should subtract this from your total projected profits to stay realistic.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Pro Tip for Amazon Sellers</h3>
        <p>
          Use our <strong>FBA fee estimator</strong> during your product research phase. Before you even order a sample, run the numbers. If the ROI isn't at least 100% at the current market price, the product might not be worth the risk. Remember, your profit is made when you <em>buy</em>, not just when you sell.
        </p>
      </div>
    </div>
  );
};
