import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { motion } from 'motion/react';
import { FileDown, AlertCircle, Share2, RotateCcw } from 'lucide-react';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { parseInput } from '../lib/calculatorUtils';

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
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      
      pdf.setFillColor(0, 102, 204);
      pdf.rect(0, 0, pdfWidth, 40, 'F');
      
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(24);
      pdf.text('SIMPLYCALCULATOR.APP', 15, 25);
      
      const imgProps = pdf.getImageProperties(imgData);
      const displayWidth = pdfWidth - 30;
      const displayHeight = (imgProps.height * displayWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 15, 50, displayWidth, displayHeight);
      pdf.save('Mortgage_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto w-full space-y-12 pb-20">
      <Helmet>
        <title>Mortgage Calculator with Taxes and Insurance 2026 | simplycalculator.app</title>
        <meta name="description" content="Free mortgage calculator with taxes and insurance. Estimate your total monthly payment." />
      </Helmet>

      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-slate-900 uppercase">Mortgage Calculator</h1>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm">Estimate your monthly housing costs for 2026.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-blue-600 font-bold text-2xl mb-6">Mortgage Parameters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600">Home Price</label>
                <input 
                  type="number" 
                  value={homePrice} 
                  onChange={(e) => setHomePrice(e.target.value)}
                  className="w-full h-12 px-3 border border-slate-200 rounded-lg outline-none focus:border-blue-600 font-medium"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600">Down Payment</label>
                <input 
                  type="number" 
                  value={downPayment} 
                  onChange={(e) => setDownPayment(e.target.value)}
                  className="w-full h-12 px-3 border border-slate-200 rounded-lg outline-none focus:border-blue-600 font-medium"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600">Interest Rate (%)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={interestRate} 
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full h-12 px-3 border border-slate-200 rounded-lg outline-none focus:border-blue-600 font-medium"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600">Loan Term (Years)</label>
                <select 
                  value={loanTerm} 
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-12 px-3 border border-slate-200 rounded-lg outline-none focus:border-blue-600 font-medium"
                >
                  <option value={15}>15 Years</option>
                  <option value={20}>20 Years</option>
                  <option value={30}>30 Years</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm" ref={resultsRef}>
          <h2 className="text-blue-600 font-bold text-2xl mb-8">Results</h2>
          <div className="text-center space-y-6">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Monthly Payment</p>
              <div className="text-blue-600 text-6xl font-bold">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
            </div>
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Total Interest:</span>
                <span className="font-bold">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Total Cost:</span>
                <span className="font-bold">${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
              </div>
            </div>
            <ResultActions 
                onReset={handleReset}
                onDownloadPDF={handleDownloadPDF}
                onCopy={() => {
                    const text = `Mortgage: $${monthlyPayment.toFixed(0)}/mo`;
                    navigator.clipboard.writeText(text);
                }}
            />
          </div>
        </section>
      </div>

      <CalculatorSEO 
        name="Mortgage Calculator" 
        path="/mortgage" 
        description="Calculate your monthly mortgage payments with taxes and insurance."
      />
    </div>
  );
};
