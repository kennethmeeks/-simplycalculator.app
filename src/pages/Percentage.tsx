import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { parseInput } from '@/src/lib/calculatorUtils';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const PercentageCalculator: React.FC = () => {
  const [val1, setVal1] = useState<number | string>(20);
  const [val2, setVal2] = useState<number | string>(100);
  const [result1, setResult1] = useState(0);

  const [val3, setVal3] = useState<number | string>(50);
  const [val4, setVal4] = useState<number | string>(200);
  const [result2, setResult2] = useState(0);
  
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v1 = parseInput(val1.toString());
    const v2 = parseInput(val2.toString());
    const v3 = parseInput(val3.toString());
    const v4 = parseInput(val4.toString());

    setResult1((v1 / 100) * v2);
    setResult2(v4 !== 0 ? (v3 / v4) * 100 : 0);
  }, [val1, val2, val3, val4]);

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
      pdf.text('PROFESSIONAL MATHEMATICAL REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('PERCENTAGE ANALYSIS', 15, 55);
      
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
      
      pdf.save('Percentage_Calculator_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto w-full space-y-12 pb-20">
      <Helmet>
        <title>Percentage Calculator — Solve Any % Problem in 5 Seconds Free</title>
        <meta name="description" content="Calculate percentage increases, decreases, and fractions. The fastest way to solve any percentage math problem in 2026." />
      </Helmet>

      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase">Percentage Calculator: How Do You Solve This Math Problem?</h1>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm">You can solve any percentage increase or decrease in under 5 seconds with this free tool, no manual math required.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-8" ref={resultsRef}>
          <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">%</span>
              </div>
              <h2 className="text-blue-600 font-bold text-2xl">What is X% of Y?</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 flex-wrap bg-slate-50 p-6 rounded-lg border border-slate-100">
                <span className="text-sm font-bold text-slate-600">What is</span>
                <input 
                  type="number" 
                  value={val1} 
                  onChange={(e) => setVal1(e.target.value)} 
                  className="w-24 h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-bold text-slate-700 transition-all" 
                />
                <span className="text-sm font-bold text-slate-600">% of</span>
                <input 
                  type="number" 
                  value={val2} 
                  onChange={(e) => setVal2(e.target.value)} 
                  className="w-32 h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-bold text-slate-700 transition-all" 
                />
                <span className="text-sm font-bold text-slate-600">?</span>
              </div>

              <div className="flex items-center justify-between p-6 bg-blue-600 rounded-xl text-white shadow-md">
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Calculation Result</p>
                  <p className="text-sm font-medium opacity-90">Verified output</p>
                </div>
                <span className="text-4xl font-black">{result1.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">?</span>
              </div>
              <h2 className="text-blue-600 font-bold text-2xl">X is what % of Y?</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 flex-wrap bg-slate-50 p-6 rounded-lg border border-slate-100">
                <input 
                  type="number" 
                  value={val3} 
                  onChange={(e) => setVal3(e.target.value)} 
                  className="w-28 h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-bold text-slate-700 transition-all" 
                />
                <span className="text-sm font-bold text-slate-600">is what % of</span>
                <input 
                  type="number" 
                  value={val4} 
                  onChange={(e) => setVal4(e.target.value)} 
                  className="w-32 h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-bold text-slate-700 transition-all" 
                />
                <span className="text-sm font-bold text-slate-600">?</span>
              </div>

              <div className="flex items-center justify-between p-6 bg-blue-600 rounded-xl text-white shadow-md">
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Percentage Value</p>
                  <p className="text-sm font-medium opacity-90">Calculated ratio</p>
                </div>
                <span className="text-4xl font-black">{result2.toFixed(2)}%</span>
              </div>
            </div>
          </section>
          
          <div data-html2canvas-ignore className="md:pt-4">
              <ResultActions 
                onReset={() => {
                  setVal1(20);
                  setVal2(100);
                  setVal3(50);
                  setVal4(200);
                }}
                onDownloadPDF={handleDownloadPDF}
                onCopy={() => {
                   const text = `${val1}% of ${val2} is ${result1.toFixed(2)}\n${val3} is ${result2.toFixed(2)}% of ${val4}\nCalculated at simplycalculator.app`;
                   navigator.clipboard.writeText(text);
                }}
              />
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-slate-900 rounded-xl p-8 text-white shadow-lg space-y-6">
            <h3 className="text-blue-400 font-bold text-[11px] uppercase tracking-widest border-b border-white/10 pb-4">Standard Formulae</h3>
            <ul className="space-y-6">
              <li className="space-y-2">
                <span className="text-xs text-white/50 block uppercase tracking-wider font-bold">Relative Value</span>
                <p className="text-sm font-medium leading-relaxed">Percentage = (Value / Total) × 100</p>
              </li>
              <li className="space-y-2">
                <span className="text-xs text-white/50 block uppercase tracking-wider font-bold">Absolute Value</span>
                <p className="text-sm font-medium leading-relaxed">Value = (Percentage / 100) × Total</p>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h3 className="text-slate-900 font-bold text-sm mb-4">Precision Note</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Results are calculated using floating-point precision and rounded to two decimal places for maximum reliability in commercial applications.
            </p>
          </div>
        </aside>
      </div>

      <CalculatorSEO 
        name="Percentage Calculator" 
        path="/math/percentage" 
        description="Solve common percentage problems instantly. Find the percentage of a value or the ratio between two numbers with our straightforward calculator for 2026."
      />
    </div>
  );
};
