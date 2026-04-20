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
      const canvas = await html2canvas(resultsRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const contentWidth = pdfWidth - 20;
      const contentHeight = (canvas.height * contentWidth) / canvas.width;
      
      pdf.setFontSize(22);
      pdf.text('Mortgage Calculator Report', 20, 20);
      pdf.setFontSize(10);
      pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 28);
      
      pdf.addImage(imgData, 'PNG', 10, 35, contentWidth, contentHeight);
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

      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-black text-black uppercase tracking-tighter leading-none">Mortgage Calculator</h1>
        <p className="text-slate-500 font-medium italic text-lg opacity-70">Estimate your monthly housing costs for 2026 with full precision.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative">
        {/* Left: Inputs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container p-6 sm:p-10 relative">
            <h2 className="section-title text-center !border-0 mb-0">Mortgage Parameters</h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto mb-10 rounded-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="input-group">
                <label className="input-label">Home Price</label>
                <div className={`flex items-center gap-2 border rounded-lg px-3 py-2 transition-colors ${errors.homePrice ? 'border-red-500 bg-red-50' : 'border-slate-200 focus-within:border-blue-500'}`}>
                  <span className="text-sm text-slate-500">$</span>
                  <input 
                    type="number" 
                    value={homePrice} 
                    onChange={(e) => setHomePrice(e.target.value)}
                    className="bg-transparent border-none outline-none flex-1 text-slate-900"
                  />
                </div>
                {errors.homePrice && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.homePrice}</p>}
              </div>
              <div className="input-group">
                <label className="input-label">Down Payment</label>
                <div className={`flex items-center gap-2 border rounded-lg px-3 py-2 transition-colors ${errors.downPayment ? 'border-red-500 bg-red-50' : 'border-slate-200 focus-within:border-blue-500'}`}>
                  <span className="text-sm text-slate-500">$</span>
                  <input 
                    type="number" 
                    value={downPayment} 
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="bg-transparent border-none outline-none flex-1 text-slate-900"
                  />
                </div>
                {errors.downPayment && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.downPayment}</p>}
              </div>
              <div className="input-group">
                <label className="input-label">Interest Rate</label>
                <div className={`flex items-center gap-2 border rounded-lg px-3 py-2 transition-colors ${errors.interestRate ? 'border-red-500 bg-red-50' : 'border-slate-200 focus-within:border-blue-500'}`}>
                  <input 
                    type="number" 
                    step="0.1"
                    value={interestRate} 
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="bg-transparent border-none outline-none flex-1 text-slate-900"
                  />
                  <span className="text-sm text-slate-500">%</span>
                </div>
                {errors.interestRate && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.interestRate}</p>}
              </div>
              <div className="input-group">
                <label className="input-label">Loan Term</label>
                <select 
                  value={loanTerm} 
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="input-field"
                >
                  <option value={15}>15 Years</option>
                  <option value={20}>20 Years</option>
                  <option value={30}>30 Years</option>
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">Property Tax</label>
                <div className={`flex items-center gap-2 border rounded-lg px-3 py-2 transition-colors ${errors.propertyTax ? 'border-red-500 bg-red-50' : 'border-slate-200 focus-within:border-blue-500'}`}>
                  <input 
                    type="number" 
                    step="0.01"
                    value={propertyTax} 
                    onChange={(e) => setPropertyTax(e.target.value)}
                    className="bg-transparent border-none outline-none flex-1 text-slate-900"
                  />
                  <span className="text-sm text-slate-500">%</span>
                </div>
                {errors.propertyTax && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.propertyTax}</p>}
              </div>
              <div className="input-group">
                <label className="input-label">Annual Insurance</label>
                <div className={`flex items-center gap-2 border rounded-lg px-3 py-2 transition-colors ${errors.insurance ? 'border-red-500 bg-red-50' : 'border-slate-200 focus-within:border-blue-500'}`}>
                  <span className="text-sm text-slate-500">$</span>
                  <input 
                    type="number" 
                    value={insurance} 
                    onChange={(e) => setInsurance(e.target.value)}
                    className="bg-transparent border-none outline-none flex-1 text-slate-900"
                  />
                </div>
                {errors.insurance && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.insurance}</p>}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Components of a Monthly Mortgage Payment</h2>
            <p className="text-slate-600 text-sm">
              Your monthly mortgage payment is typically made up of several key components:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-sm text-slate-700">
              <li>
                <span className="font-bold text-slate-900">Principal & Interest:</span>
                <span className="ml-1">The core part of your mortgage payment that pays off the loan balance and the interest charged by the lender.</span>
              </li>
              <li>
                <span className="font-bold text-slate-900">Property Tax:</span>
                <span className="ml-1">Annual taxes paid to your local government, usually based on the home's value. These are often collected monthly by the lender.</span>
              </li>
              <li>
                <span className="font-bold text-slate-900">Insurance:</span>
                <span className="ml-1">Protection for your home against damage and liability. Lenders typically require homeowners insurance to protect their investment.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Results */}
        <div className="space-y-6" id="result-panel" ref={resultsRef}>
          <div className="calculator-container h-full">
            <div className="result-box">
              <h3 className="text-[#0066cc] font-bold mb-2 uppercase text-xs tracking-wider">Monthly Payment</h3>
              <div className="text-4xl font-bold text-[#0066cc]">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex justify-between">
                <span className="text-[#666]">Total Interest:</span>
                <span className="font-bold text-[#0066cc]">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">Total Cost:</span>
                <span className="font-bold text-[#0066cc]">${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#666]">Loan Amount:</span>
                <span className="font-bold text-[#0066cc]">${(Number(homePrice) - Number(downPayment)).toLocaleString()}</span>
              </div>
            </div>
            
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
