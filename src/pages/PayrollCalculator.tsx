import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, Calculator, Info, Briefcase } from 'lucide-react';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const PayrollCalculator: React.FC = () => {
  const [grossPay, setGrossPay] = useState<number>(5000);
  const [payFrequency, setPayFrequency] = useState<string>('monthly');
  const [federalTaxRate, setFederalTaxRate] = useState<number>(15);
  const [stateTaxRate, setStateTaxRate] = useState<number>(5);
  const [ficaRate, setFicaRate] = useState<number>(7.65);
  const [otherDeductions, setOtherDeductions] = useState<number>(200);
  const resultsRef = useRef<HTMLDivElement>(null);

  const [netPay, setNetPay] = useState<number>(0);
  const [totalTaxes, setTotalTaxes] = useState<number>(0);

  const handleReset = () => {
    setGrossPay(5000);
    setFederalTaxRate(15);
    setStateTaxRate(5);
    setFicaRate(7.65);
    setOtherDeductions(200);
    setPayFrequency('monthly');
  };

  const handleDownloadPDF = async () => {
    if (!resultsRef.current) return;
    const doc = new jsPDF();
    try {
      const canvas = await html2canvas(resultsRef.current, { scale: 2, backgroundColor: '#ffffff' });
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = doc.internal.pageSize.getWidth();
      const contentWidth = pdfWidth - 40;
      const contentHeight = (canvas.height * contentWidth) / canvas.width;
      
      doc.setFontSize(22);
      doc.text('Payroll Report', 20, 20);
      doc.setFontSize(10);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 28);
      
      doc.addImage(imgData, 'PNG', 20, 35, contentWidth, contentHeight);
      doc.save('Payroll_Report.pdf');
    } catch (err) { console.error(err); }
  };

  useEffect(() => {
    const federalTax = grossPay * (federalTaxRate / 100);
    const stateTax = grossPay * (stateTaxRate / 100);
    const ficaTax = grossPay * (ficaRate / 100);
    const totalTax = federalTax + stateTax + ficaTax;
    const net = grossPay - totalTax - otherDeductions;

    setTotalTaxes(Number(totalTax.toFixed(2)));
    setNetPay(Number(Math.max(0, net).toFixed(2)));
  }, [grossPay, federalTaxRate, stateTaxRate, ficaRate, otherDeductions]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Payroll Calculator | Estimate Net Pay and Taxes</title>
        <meta name="description" content="Free online payroll calculator. Estimate your net take-home pay after federal, state, and FICA taxes in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Payroll Calculator</h1>
        <p className="text-slate-600">Calculate your net pay by entering your gross income and estimated tax rates.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Gross Pay ($)</label>
                <input 
                  type="number" 
                  value={grossPay} 
                  onChange={(e) => setGrossPay(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Pay Frequency</label>
                <select 
                  value={payFrequency} 
                  onChange={(e) => setPayFrequency(e.target.value)}
                  className="input-field"
                >
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-weekly</option>
                  <option value="semimonthly">Semi-monthly</option>
                  <option value="monthly">Monthly</option>
                  <option value="annually">Annually</option>
                </select>
              </div>
              <div>
                <label className="input-label">Federal Tax Rate (%)</label>
                <input 
                  type="number" 
                  value={federalTaxRate} 
                  onChange={(e) => setFederalTaxRate(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">State Tax Rate (%)</label>
                <input 
                  type="number" 
                  value={stateTaxRate} 
                  onChange={(e) => setStateTaxRate(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">FICA (Social Security + Medicare) %</label>
                <input 
                  type="number" 
                  value={ficaRate} 
                  onChange={(e) => setFicaRate(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Other Deductions ($)</label>
                <input 
                  type="number" 
                  value={otherDeductions} 
                  onChange={(e) => setOtherDeductions(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Payroll Components
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Gross Pay:</strong> Your total earnings before any taxes or deductions.</li>
              <li><strong>FICA:</strong> Federal Insurance Contributions Act, which funds Social Security and Medicare.</li>
              <li><strong>Net Pay:</strong> Your actual "take-home" pay after all deductions.</li>
              <li><strong>Deductions:</strong> Can include health insurance, 401k contributions, and union dues.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-[#f0f7ff] border border-[#0066cc]/20 text-[#0066cc]" ref={resultsRef}>
            <h2 className="section-title text-[#0066cc] flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Pay Summary
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-[#0066cc]/10">
                <div className="text-4xl font-bold mb-1 text-[#0066cc]">${netPay.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Net Take-Home Pay</div>
              </div>
              <div className="space-y-4 text-center py-4 border-b border-[#0066cc]/10">
                <div className="flex justify-between items-center px-4">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Total Taxes</div>
                  <div className="text-xl font-bold text-[#0066cc]">${totalTaxes.toLocaleString()}</div>
                </div>
                <div className="flex justify-between items-center px-4">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Deductions</div>
                  <div className="text-xl font-bold text-[#0066cc]">${otherDeductions.toLocaleString()}</div>
                </div>
              </div>
              
              <div className="pt-2">
                <ResultActions 
                  onReset={handleReset}
                  onDownloadPDF={handleDownloadPDF}
                  onCopy={() => {
                    const text = `Payroll Results:\nNet Pay: $${netPay.toLocaleString()}\nTotal Taxes: $${totalTaxes.toLocaleString()}\nDeductions: $${otherDeductions.toLocaleString()}\nCalculated at simplycalculator.app`;
                    navigator.clipboard.writeText(text);
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 uppercase tracking-tight text-sm">
              <Briefcase className="w-4 h-4 text-blue-600" />
              Employment Tips
            </h3>
            <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
              Review your pay stub regularly to ensure all taxes and benefits are being withheld correctly. Adjust your W-4 if you find you're owing too much or getting a massive refund at tax time.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Your Paycheck in 2026</h2>
        <p>
          Managing your finances starts with understanding your income. Our <strong>payroll calculator</strong> provides a detailed breakdown of where your money goes before it hits your bank account.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Common Payroll Deductions</h3>
        <p>
          Most employees will see several standard deductions on their pay stubs:
        </p>
        <ul>
          <li><strong>Federal Income Tax:</strong> Based on your tax bracket and filing status.</li>
          <li><strong>State Income Tax:</strong> Varies by state; some states like Florida and Texas have no income tax.</li>
          <li><strong>Social Security:</strong> Currently 6.2% of gross pay up to a certain limit.</li>
          <li><strong>Medicare:</strong> Currently 1.45% of all gross pay.</li>
          <li><strong>Retirement Contributions:</strong> Pre-tax contributions to a 401(k) or 403(b).</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Increase Your Take-Home Pay</h3>
        <p>
          While you can't avoid taxes, you can optimize your deductions:
        </p>
        <ul>
          <li><strong>Adjust Withholding:</strong> Use the IRS Tax Withholding Estimator to update your W-4.</li>
          <li><strong>Pre-tax Benefits:</strong> Contributing to an HSA or FSA reduces your taxable income.</li>
          <li><strong>Retirement Savings:</strong> Traditional 401(k) contributions lower your current tax bill.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">What is the difference between gross and net pay?</p>
            <p>Gross pay is the total amount earned before any deductions. Net pay is the amount you actually receive after taxes and other withholdings.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Why is my FICA tax higher than expected?</p>
            <p>FICA consists of both Social Security and Medicare. If you are self-employed, you must pay both the employer and employee portions, totaling 15.3%.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
