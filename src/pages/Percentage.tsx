import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
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
        <title>Percentage Calculator | Calculate Percentages with Formula & Steps</title>
        <meta name="description" content="Free online percentage calculator for 2026. Calculate percentages, percentage change, and more with clear steps and formulas for easy understanding." />
      </Helmet>

      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase">Percentage Calculator</h1>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm">Efficient, verified percentage calculations for professional and everyday use in 2026.</p>
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

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About Percentage Calculations</h2>
        <p>
          Percentages are a fundamental part of our daily lives, used in everything from calculating sales tax and discounts to understanding investment returns and statistical data. Our <strong>percentage calculator with steps and formula</strong> provides a simple and efficient way to perform these common calculations without the need for manual math. In 2026, being able to quickly determine a percentage is a vital skill for both personal finance and professional tasks.
        </p>
        <p>
          Whether you're a student working on a math problem, a shopper looking for the best deal, or a business owner analyzing growth, this tool simplifies the process. We don't just give you the answer; we provide the context you need to understand the relationship between the numbers.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Percentage Calculator</h3>
        <p>
          We offer two primary calculation modes to cover the most common needs:
        </p>
        <ol>
          <li><strong>Find a Percentage of a Value (What is X% of Y?):</strong> Use this when you know the percentage and the total amount. For example, finding a 15% tip on a $50 bill.
            <ul className="list-disc pl-5 mt-2">
              <li><strong>Formula:</strong> (Percentage / 100) × Total Value</li>
              <li><strong>Step:</strong> Convert the percentage to a decimal (divide by 100) and multiply by the total.</li>
            </ul>
          </li>
          <li className="mt-4"><strong>Find the Percentage Ratio (X is what % of Y?):</strong> Use this when you want to know what portion one number represents of another. For example, if you've saved $50 out of a $200 goal.
            <ul className="list-disc pl-5 mt-2">
              <li><strong>Formula:</strong> (Value / Total Value) × 100</li>
              <li><strong>Step:</strong> Divide the part by the whole and multiply the result by 100.</li>
            </ul>
          </li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Common Percentage Use Cases</h3>
        <p>
          Percentages are used in various scenarios, including:
        </p>
        <ul>
          <li><strong>Sales Tax:</strong> Calculating the additional cost added to a purchase.</li>
          <li><strong>Discounts:</strong> Determining how much you save during a sale.</li>
          <li><strong>Interest Rates:</strong> Understanding the cost of borrowing or the return on savings.</li>
          <li><strong>Statistics:</strong> Comparing data sets of different sizes.</li>
          <li><strong>Grades:</strong> Calculating your score on a test or assignment.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What does "percent" actually mean?</p>
            <p>The word "percent" comes from the Latin "per centum," which means "by the hundred." It is a way of expressing a number as a fraction of 100. So, 50% is literally 50 per 100, or 0.5.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I calculate a percentage increase?</p>
            <p>To find a percentage increase, subtract the original value from the new value, divide that result by the original value, and then multiply by 100. The formula is: ((New - Old) / Old) * 100.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can a percentage be greater than 100%?</p>
            <p>Yes! A percentage greater than 100% simply means that the value is more than the original total. For example, if a company's revenue grows from $1M to $2.5M, that's a 150% increase, and the new total is 250% of the original.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I convert a decimal to a percentage?</p>
            <p>To convert a decimal to a percentage, simply multiply the decimal by 100 and add the "%" sign. For example, 0.75 becomes 75%.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If you want to find <strong>25%</strong> of <strong>$80</strong>, you would divide 25 by 100 to get 0.25, then multiply 80 by 0.25, resulting in <strong>$20</strong>. Conversely, if you want to know what percentage <strong>$20</strong> is of <strong>$80</strong>, you would divide 20 by 80 (0.25) and multiply by 100 to get <strong>25%</strong>.
        </p>
      </div>
    </div>
  );
};
