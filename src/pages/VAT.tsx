import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const VATCalculator: React.FC = () => {
  const [amount, setAmount] = useState(100);
  const [vatRate, setVatRate] = useState(20);
  const [isInclusive, setIsInclusive] = useState(false);

  const [vatAmount, setVatAmount] = useState(0);
  const [netAmount, setNetAmount] = useState(0);
  const [grossAmount, setGrossAmount] = useState(0);
  
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInclusive) {
      // Amount is Gross (Net + VAT)
      const net = amount / (1 + vatRate / 100);
      const vat = amount - net;
      setNetAmount(net);
      setVatAmount(vat);
      setGrossAmount(amount);
    } else {
      // Amount is Net
      const vat = amount * (vatRate / 100);
      const gross = amount + vat;
      setNetAmount(amount);
      setVatAmount(vat);
      setGrossAmount(gross);
    }
  }, [amount, vatRate, isInclusive]);

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
      pdf.text('PROFESSIONAL TAX REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('VAT ANALYSIS', 15, 55);
      
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
      
      pdf.save('VAT_Calculator_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>VAT Calculator | Add or Remove Value Added Tax Easily</title>
        <meta name="description" content="Calculate VAT (Value Added Tax) with our free online tool. Add or remove VAT from any amount instantly with accurate 2026 tax rates and formulas." />
      </Helmet>

      <h1>VAT Calculator</h1>
      <p>Quickly calculate Value Added Tax (VAT) by adding it to a net amount or removing it from a gross amount.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Item or Total Amount ($)</label>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">VAT Rate (%)</label>
              <input 
                type="number" 
                value={vatRate} 
                onChange={(e) => setVatRate(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Calculation Type</label>
              <select 
                value={isInclusive ? 'inclusive' : 'exclusive'} 
                onChange={(e) => setIsInclusive(e.target.value === 'inclusive')}
                className="input-field w-full"
              >
                <option value="exclusive">Add VAT (Amount is Net)</option>
                <option value="inclusive">Remove VAT (Amount is Gross)</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container" ref={resultsRef}>
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold text-slate-600">Net Amount:</span>
                  <span className="font-bold text-[#0066cc]">${netAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold text-slate-600">VAT Amount ({vatRate}%):</span>
                  <span className="font-bold text-[#0066cc]">${vatAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-black uppercase text-slate-900">Gross Amount:</span>
                  <span className="text-2xl font-black text-[#0066cc]">${grossAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setAmount(100);
              setVatRate(20);
              setIsInclusive(false);
            }}
            onDownloadPDF={handleDownloadPDF}
            onCopy={() => {
              const text = `VAT Results:\nNet: $${netAmount.toFixed(2)}\nVAT: $${vatAmount.toFixed(2)}\nGross: $${grossAmount.toFixed(2)}\nCalculated at simplycalculator.app`;
              navigator.clipboard.writeText(text);
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="VAT Calculator" 
        path="/vat" 
        description="Add or remove Value Added Tax easily from any amount. Perfect for global tax calculations in 2026."
      />

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About VAT Calculation</h2>
        <p>
          Value Added Tax (VAT) is a consumption tax placed on a product whenever value is added at each stage of the supply chain, from production to the point of sale. In 2026, VAT remains a primary source of revenue for many governments worldwide. Our <strong>vat calculator to add or remove tax</strong> is designed to help business owners, freelancers, and consumers quickly determine tax amounts for their financial records.
        </p>
        <p>
          Whether you're a small business owner calculating invoices or a consumer trying to understand the pre-tax price of a product, our tool provides instant, accurate results. It's an essential resource for anyone operating in countries that use a VAT system.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the VAT Calculator</h3>
        <p>
          Our tool supports two main types of calculations:
        </p>
        <ol>
          <li><strong>Adding VAT (Net to Gross):</strong> If you have a price excluding tax (Net), enter it and the VAT rate to find the total price including tax (Gross). This is common when setting prices for your services.</li>
          <li><strong>Removing VAT (Gross to Net):</strong> If you have a total price (Gross) and want to know the original price before tax was added, select "Remove VAT". This is useful for expense tracking and tax returns.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The VAT Formula</h3>
        <p>
          To calculate VAT manually, you can use these formulas:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>To Add VAT:</strong> Gross Amount = Net Amount × (1 + VAT Rate / 100)</li>
          <li><strong>To Remove VAT:</strong> Net Amount = Gross Amount / (1 + VAT Rate / 100)</li>
          <li><strong>VAT Amount:</strong> Gross Amount - Net Amount</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is the difference between Net and Gross?</p>
            <p>Net refers to the price of a good or service before tax is added. Gross refers to the final price paid by the consumer, which includes the Net price plus the VAT amount.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What are common VAT rates in 2026?</p>
            <p>VAT rates vary by country. For example, the UK standard rate is 20%, while many EU countries range between 17% and 27%. Some countries also have reduced rates for essential items like food and books.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Is VAT the same as Sales Tax?</p>
            <p>While both are consumption taxes, they are collected differently. Sales tax is typically collected only at the final point of sale to the consumer, whereas VAT is collected at every stage of the production and distribution process.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can businesses reclaim VAT?</p>
            <p>In many jurisdictions, VAT-registered businesses can reclaim the VAT they pay on business-related purchases, effectively making it a tax only on the final consumer.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If you have a Net price of <strong>$100</strong> and a VAT rate of <strong>20%</strong>, the VAT amount is <strong>$20</strong>, making the Gross total <strong>$120</strong>. If you have a Gross price of <strong>$120</strong> and want to remove 20% VAT, you divide 120 by 1.2, which returns the original Net price of <strong>$100</strong>.
        </p>
      </div>
    </div>
  );
};
