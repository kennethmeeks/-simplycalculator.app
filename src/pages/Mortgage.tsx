import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { FileDown, AlertCircle, Share2, RotateCcw } from 'lucide-react';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { parseInput } from '@/src/lib/calculatorUtils';

export const MortgageCalculator: React.FC = () => {
  const [homePrice, setHomePrice] = useState<number | string>(400000);
  const [downPayment, setDownPayment] = useState<number | string>(80000);
  const [interestRate, setInterestRate] = useState<number | string>(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState<number | string>(1.2);
  const [insurance, setInsurance] = useState<number | string>(1200);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isExporting, setIsExporting] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleReset = () => {
    setHomePrice(400000);
    setDownPayment(80000);
    setInterestRate(6.5);
    setLoanTerm(30);
    setPropertyTax(1.2);
    setInsurance(1200);
  };

  useEffect(() => {
    const newErrors: Record<string, string> = {};
    const price = parseInput(homePrice.toString());
    const down = parseInput(downPayment.toString());
    const rate = parseInput(interestRate.toString());
    const tax = parseInput(propertyTax.toString());
    const ins = parseInput(insurance.toString());
    
    if (price <= 0) newErrors.homePrice = "Price must be positive";
    if (price > 100000000) newErrors.homePrice = "Price is too high";
    if (down < 0) newErrors.downPayment = "Cannot be negative";
    if (down >= price) newErrors.downPayment = "Must be less than home price";
    if (rate < 0 || rate > 100) newErrors.interestRate = "Rate must be 0-100%";
    if (tax < 0 || tax > 100) newErrors.propertyTax = "Tax must be 0-100%";
    if (ins < 0) newErrors.insurance = "Insurance cannot be negative";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const principal = price - down;
      const monthlyRate = rate / 100 / 12;
      const numberOfPayments = loanTerm * 12;

      let monthlyPAndI = 0;
      if (monthlyRate === 0) {
        monthlyPAndI = principal / numberOfPayments;
      } else {
        const x = Math.pow(1 + monthlyRate, numberOfPayments);
        monthlyPAndI = (principal * x * monthlyRate) / (x - 1);
      }

      const monthlyTax = (price * (tax / 100)) / 12;
      const monthlyInsurance = ins / 12;

      const totalMonthly = monthlyPAndI + monthlyTax + monthlyInsurance;
      
      setMonthlyPayment(totalMonthly);
      setTotalPayment(totalMonthly * numberOfPayments);
      setTotalInterest((monthlyPAndI * numberOfPayments) - principal);
    } else {
      setMonthlyPayment(0);
      setTotalPayment(0);
      setTotalInterest(0);
    }
  }, [homePrice, downPayment, interestRate, loanTerm, propertyTax, insurance]);

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
      
      // Branding Header
      pdf.setFillColor(0, 102, 204); // #0066cc
      pdf.rect(0, 0, pdfWidth, 40, 'F');
      
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      pdf.text('SIMPLYCALCULATOR.APP', 15, 25);
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text('PROFESSIONAL MORTGAGE REPORT // 2026', 15, 33);
      
      // Machine Info
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('MORTGAGE CALCULATION ANALYSIS', 15, 55);
      
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(150, 150, 150);
      pdf.text(`TIMESTAMP: ${new Date().toLocaleString()}`, 15, 62);
      
      // Horizontal Line
      pdf.setDrawColor(230, 230, 230);
      pdf.line(15, 75, pdfWidth - 15, 75);
      
      // Image Placement
      const imgProps = pdf.getImageProperties(imgData);
      const displayWidth = pdfWidth - 30;
      const displayHeight = (imgProps.height * displayWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 15, 85, displayWidth, displayHeight);
      
      // Disclaimer/Footer
      const footerY = Math.max(85 + displayHeight + 20, pdfHeight - 30);
      pdf.setFontSize(8);
      pdf.setTextColor(180, 180, 180);
      pdf.text('DISCLAIMER: This report is an estimate based on mathematical models and verified formulas.', 15, footerY);
      pdf.text('simplycalculator.app assumes no liability for critical financial or medical decisions.', 15, footerY + 4);
      
      pdf.setTextColor(0, 102, 204);
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.text('WWW.SIMPLYCALCULATOR.APP', pdfWidth / 2, pdfHeight - 10, { align: 'center' });
      
      pdf.save('Mortgage_Calculator_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto w-full space-y-12 pb-20">
      <Helmet>
        <title>Mortgage Calculator with Taxes and Insurance 2026 | simplycalculator.app</title>
        <meta name="description" content="Calculate your total monthly house payment with our free mortgage calculator with taxes and insurance. Estimate principal, interest, property tax, and homeowners insurance for 2026." />
      </Helmet>

      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase">Mortgage Calculator</h1>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm">Estimate your monthly housing costs for 2026 with full precision.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left: Inputs */}
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <div className="mb-8">
              <h2 className="text-blue-600 font-bold text-2xl">Mortgage Parameters</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600">Home Price</label>
                <div className={`flex items-center gap-2 border rounded-lg px-3 h-12 transition-colors ${errors.homePrice ? 'border-red-500 bg-red-50' : 'border-slate-200 focus-within:border-blue-600'}`}>
                  <span className="text-sm text-slate-400">$</span>
                  <input 
                    type="number" 
                    value={homePrice} 
                    onChange={(e) => setHomePrice(e.target.value)}
                    className="bg-transparent border-none outline-none flex-1 text-slate-700 font-medium"
                  />
                </div>
                {errors.homePrice && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.homePrice}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600">Down Payment</label>
                <div className={`flex items-center gap-2 border rounded-lg px-3 h-12 transition-colors ${errors.downPayment ? 'border-red-500 bg-red-50' : 'border-slate-200 focus-within:border-blue-600'}`}>
                  <span className="text-sm text-slate-400">$</span>
                  <input 
                    type="number" 
                    value={downPayment} 
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="bg-transparent border-none outline-none flex-1 text-slate-700 font-medium"
                  />
                </div>
                {errors.downPayment && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.downPayment}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600">Interest Rate</label>
                <div className={`flex items-center gap-2 border rounded-lg px-3 h-12 transition-colors ${errors.interestRate ? 'border-red-500 bg-red-50' : 'border-slate-200 focus-within:border-blue-600'}`}>
                  <input 
                    type="number" 
                    step="0.1"
                    value={interestRate} 
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="bg-transparent border-none outline-none flex-1 text-slate-700 font-medium"
                  />
                  <span className="text-sm text-slate-400">%</span>
                </div>
                {errors.interestRate && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.interestRate}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600">Loan Term (Years)</label>
                <select 
                  value={loanTerm} 
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-12 px-3 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-medium text-slate-700 transition-all"
                >
                  <option value={15}>15 Years</option>
                  <option value={20}>20 Years</option>
                  <option value={30}>30 Years</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600">Property Tax</label>
                <div className={`flex items-center gap-2 border rounded-lg px-3 h-12 transition-colors ${errors.propertyTax ? 'border-red-500 bg-red-50' : 'border-slate-200 focus-within:border-blue-600'}`}>
                  <input 
                    type="number" 
                    step="0.01"
                    value={propertyTax} 
                    onChange={(e) => setPropertyTax(e.target.value)}
                    className="bg-transparent border-none outline-none flex-1 text-slate-700 font-medium"
                  />
                  <span className="text-sm text-slate-400">%</span>
                </div>
                {errors.propertyTax && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.propertyTax}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600">Annual Insurance</label>
                <div className={`flex items-center gap-2 border rounded-lg px-3 h-12 transition-colors ${errors.insurance ? 'border-red-500 bg-red-50' : 'border-slate-200 focus-within:border-blue-600'}`}>
                  <span className="text-sm text-slate-400">$</span>
                  <input 
                    type="number" 
                    value={insurance} 
                    onChange={(e) => setInsurance(e.target.value)}
                    className="bg-transparent border-none outline-none flex-1 text-slate-700 font-medium"
                  />
                </div>
                {errors.insurance && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.insurance}</p>}
              </div>
            </div>
          </section>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Payment Breakdown</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Your monthly mortgage payment is typically made up of several key components: Principal, Interest, Property Taxes, and Homeowners Insurance (PITI).
            </p>
          </div>
        </div>

        {/* Right: Results */}
        <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col h-full relative overflow-hidden" ref={resultsRef}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-blue-600 font-bold text-2xl mb-8 relative z-10">Your Results</h2>
          
          <div className="flex-1 flex flex-col justify-center items-center text-center relative z-10">
            <div className="space-y-4 w-full">
              <div>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-1">Monthly Payment</p>
                <div className="text-blue-600 text-6xl font-bold tracking-tight">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
              </div>
              
              <div className="pt-8 border-t border-slate-100 w-full space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">Total Interest:</span>
                  <span className="font-bold text-slate-700">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">Total Cost:</span>
                  <span className="font-bold text-slate-700">${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">Loan Amount:</span>
                  <span className="font-bold text-slate-700">${(Number(homePrice) - Number(downPayment)).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-12 w-full">
              <ResultActions 
                  onReset={handleReset}
                  onDownloadPDF={handleDownloadPDF}
                  onCopy={() => {
                      const text = `Mortgage Calculator Results:\nMonthly Payment: $${monthlyPayment.toLocaleString()}\nTotal Interest: $${totalInterest.toLocaleString()}\nCalculated at simplycalculator.app`;
                      navigator.clipboard.writeText(text);
                  }}
              />
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 relative z-10">
            <p className="text-slate-400 text-[11px] font-medium leading-relaxed italic">
              Note: This report is an estimate based on mathematical models and verified formulas.
            </p>
          </div>
        </section>
      </div>

      <div className="prose prose-slate max-w-none">
        <h3 className="text-2xl font-bold text-slate-900">About this Mortgage Calculator with Taxes and Insurance</h3>
        <p>
          Our <strong>free Mortgage Calculator with Taxes and Insurance 2026</strong> is designed to provide home buyers with a clear, comprehensive picture of their future housing costs. Unlike basic calculators that only show principal and interest, our tool factors in property taxes and homeowners insurance, giving you a more realistic estimate of your total monthly "PITI" (Principal, Interest, Taxes, and Insurance) payment. This tool is essential for anyone looking to buy a home in 2026, as interest rates and property values continue to evolve in a dynamic real estate market.
        </p>

        <h4 className="text-xl font-bold text-slate-900 mt-8">Understanding the Mortgage Formula</h4>
        <p>
          The core of any mortgage calculation is the standard amortization formula. To calculate the monthly principal and interest (P&I) payment, we use the following equation:
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-center my-4">
          M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
        </div>
        <p>Where:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>M</strong> is the total monthly principal and interest payment.</li>
          <li><strong>P</strong> is the principal loan amount (Home Price minus Down Payment).</li>
          <li><strong>i</strong> is the monthly interest rate (Annual Interest Rate divided by 12 months).</li>
          <li><strong>n</strong> is the number of months in the loan term (e.g., 360 months for a 30-year mortgage).</li>
        </ul>
        <p>
          After calculating the P&I, our calculator adds the monthly property tax (Annual Tax / 12) and the monthly insurance premium (Annual Insurance / 12) to arrive at your final total monthly payment.
        </p>

        <h4 className="text-xl font-bold text-slate-900 mt-8">Why Taxes and Insurance Matter</h4>
        <p>
          Many first-time home buyers make the mistake of only budgeting for the principal and interest. However, property taxes and insurance can easily add hundreds of dollars to your monthly bill. In 2026, property taxes vary significantly by location, often ranging from 0.5% to over 2.5% of the home's assessed value. Similarly, homeowners insurance rates are influenced by the home's location, age, and replacement cost. By including these in your calculation, you avoid "sticker shock" when you receive your final closing disclosure.
        </p>

        <h4 className="text-xl font-bold text-slate-900 mt-6">How to Use This Calculator</h4>
        <p>
          To get the most accurate results for your 2026 home purchase, follow these simple steps:
        </p>
        <ol>
          <li><strong>Enter the Home Price:</strong> This is the total purchase price of the property you're interested in.</li>
          <li><strong>Input Your Down Payment:</strong> Enter the amount you plan to pay upfront. A higher down payment reduces your loan amount and monthly interest.</li>
          <li><strong>Set the Interest Rate:</strong> Enter the annual interest rate offered by your lender. Even a small change in this rate can significantly impact your monthly payment.</li>
          <li><strong>Choose Your Loan Term:</strong> Select the length of the mortgage, typically 15, 20, or 30 years.</li>
          <li><strong>Include Taxes and Insurance:</strong> Don't forget to enter your estimated annual property tax rate and homeowners insurance premium for a complete financial picture.</li>
        </ol>

        <h4 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h4>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is a good down payment in 2026?</p>
            <p>While 20% is the traditional benchmark to avoid private mortgage insurance (PMI), many buyers in 2026 are successful with as little as 3-5% down. However, a larger down payment will always result in lower monthly costs and less interest paid over time.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How does the loan term affect my payment?</p>
            <p>A shorter term (like 15 years) will have higher monthly payments but will save you thousands of dollars in interest over the life of the loan. A longer term (30 years) offers lower monthly payments but higher total interest costs.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Are property taxes included in the monthly payment?</p>
            <p>Yes, our calculator includes property taxes and insurance in the final monthly estimate, as most lenders collect these monthly through an escrow account to ensure they are paid on time.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does this calculator include PMI?</p>
            <p>Currently, this calculator does not automatically calculate Private Mortgage Insurance (PMI). If your down payment is less than 20%, you should add the estimated monthly PMI cost to your insurance field for a more accurate total.</p>
          </div>
        </div>

        <h4 className="text-xl font-bold text-slate-900 mt-8">Example Usage</h4>
        <p>
          Imagine you're buying a home for <strong>$450,000</strong> with a <strong>$90,000</strong> (20%) down payment. At a <strong>6.5%</strong> interest rate for <strong>30 years</strong>, with <strong>1.2%</strong> property tax and <strong>$1,200</strong> annual insurance, your estimated monthly payment would be approximately <strong>$2,825</strong>. This breakdown helps you budget effectively before you even talk to a lender.
        </p>
      </div>
    </div>
  );
};
