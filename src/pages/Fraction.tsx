import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

type Operation = '+' | '-' | '*' | '/';

export const FractionCalculator: React.FC = () => {
  const [num1, setNum1] = useState(1);
  const [den1, setDen1] = useState(2);
  const [num2, setNum2] = useState(1);
  const [den2, setDen2] = useState(4);
  const [operation, setOperation] = useState<Operation>('+');

  const [resNum, setResNum] = useState(0);
  const [resDen, setResDen] = useState(0);
  const [resWhole, setResWhole] = useState(0);
  const [resMixedNum, setResMixedNum] = useState(0);
  
  const resultsRef = useRef<HTMLDivElement>(null);

  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  useEffect(() => {
    let n = 0;
    let d = 0;

    if (den1 === 0 || den2 === 0) return;

    switch (operation) {
      case '+':
        n = num1 * den2 + num2 * den1;
        d = den1 * den2;
        break;
      case '-':
        n = num1 * den2 - num2 * den1;
        d = den1 * den2;
        break;
      case '*':
        n = num1 * num2;
        d = den1 * den2;
        break;
      case '/':
        n = num1 * den2;
        d = den1 * num2;
        break;
    }

    if (d === 0) return;

    const common = Math.abs(gcd(n, d));
    const simplifiedNum = n / common;
    const simplifiedDen = d / common;

    setResNum(simplifiedNum);
    setResDen(simplifiedDen);

    setResWhole(Math.floor(simplifiedNum / simplifiedDen));
    setResMixedNum(simplifiedNum % simplifiedDen);
  }, [num1, den1, num2, den2, operation]);

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
      pdf.text('FRACTION CALCULATION ANALYSIS', 15, 55);
      
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
      
      pdf.save('Fraction_Calculator_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Fraction Calculator | Add, Subtract, Multiply & Divide Fractions</title>
        <meta name="description" content="Free online fraction calculator to add, subtract, multiply, and divide fractions. Includes steps, simplified results, and mixed number conversions." />
      </Helmet>

      <h1>Fraction Calculator</h1>
      <p>Perform basic math operations with fractions, including mixed numbers and improper fractions.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Fractions</div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 justify-center">
              <div className="flex flex-col items-center gap-2">
                <input 
                  type="number" 
                  value={num1} 
                  onChange={(e) => setNum1(Number(e.target.value))} 
                  className="input-field w-20 text-center" 
                />
                <div className="w-20 h-[2px] bg-slate-400"></div>
                <input 
                  type="number" 
                  value={den1} 
                  onChange={(e) => setDen1(Number(e.target.value))} 
                  className="input-field w-20 text-center" 
                />
              </div>

              <select 
                value={operation} 
                onChange={(e) => setOperation(e.target.value as Operation)}
                className="input-field text-xl font-bold px-2"
              >
                <option value="+">+</option>
                <option value="-">−</option>
                <option value="*">×</option>
                <option value="/">÷</option>
              </select>

              <div className="flex flex-col items-center gap-2">
                <input 
                  type="number" 
                  value={num2} 
                  onChange={(e) => setNum2(Number(e.target.value))} 
                  className="input-field w-20 text-center" 
                />
                <div className="w-20 h-[2px] bg-slate-400"></div>
                <input 
                  type="number" 
                  value={den2} 
                  onChange={(e) => setDen2(Number(e.target.value))} 
                  className="input-field w-20 text-center" 
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container" ref={resultsRef}>
            <div className="section-title">Result</div>
            <div className="result-box bg-[#f8fbfe] border-[#e1eefc] p-10 rounded-xl">
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center">
                    <span className="text-4xl font-black text-[#0066cc] tracking-tight">{resNum}</span>
                    <div className="w-20 h-[3px] bg-[#0066cc] my-1 opacity-20"></div>
                    <span className="text-4xl font-black text-[#0066cc] tracking-tight">{resDen}</span>
                  </div>
                  {resWhole !== 0 && resMixedNum !== 0 && (
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-black text-slate-300">=</span>
                      <div className="flex items-center gap-2">
                        <span className="text-5xl font-black text-[#0066cc] tracking-tight">{resWhole}</span>
                        <div className="flex flex-col items-center scale-90">
                          <span className="text-2xl font-black text-[#0066cc] tracking-tight">{Math.abs(resMixedNum)}</span>
                          <div className="w-12 h-[3px] bg-[#0066cc] my-1 opacity-20"></div>
                          <span className="text-2xl font-black text-[#0066cc] tracking-tight">{resDen}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {resDen === 1 && (
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-black text-slate-300">=</span>
                      <span className="text-5xl font-black text-[#0066cc] tracking-tight">{resNum}</span>
                    </div>
                  )}
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-t border-blue-100/50 pt-4 w-full text-center">
                  Decimal Value: {(resNum / resDen).toFixed(6)}
                </div>
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setNum1(1);
              setDen1(2);
              setNum2(1);
              setDen2(4);
              setOperation('+');
            }}
            onDownloadPDF={handleDownloadPDF}
            onCopy={() => {
              const text = `Fraction Result: ${resNum}/${resDen} = ${(resNum / resDen).toFixed(4)}\nCalculated at simplycalculator.app`;
              navigator.clipboard.writeText(text);
            }}
          />
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Comprehensive Guide to Fractions</h2>
        <p>
          Fractions are a fundamental part of mathematics, representing a part of a whole. Whether you are baking, measuring lumber for a DIY project, or solving algebraic equations, understanding how to manipulate fractions is essential. Our <strong>fraction calculator with steps</strong> is designed to help you add, subtract, multiply, and divide fractions with ease in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Types of Fractions</h3>
        <p>
          Before performing calculations, it's important to recognize the different forms a fraction can take:
        </p>
        <ul>
          <li><strong>Proper Fractions:</strong> The numerator (top number) is smaller than the denominator (bottom number), such as 1/2 or 3/4.</li>
          <li><strong>Improper Fractions:</strong> The numerator is equal to or larger than the denominator, such as 5/4 or 7/2. These represent values greater than or equal to one.</li>
          <li><strong>Mixed Numbers:</strong> A combination of a whole number and a proper fraction, such as 1 1/2 or 2 3/4.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Perform Fraction Operations</h3>
        <p>
          Each operation requires a slightly different approach:
        </p>
        
        <h4 className="font-bold text-slate-900">Adding and Subtracting</h4>
        <p>
          To add or subtract fractions, you must have a <strong>Common Denominator</strong>. If the denominators are different, you must find the Least Common Multiple (LCM) and convert the fractions before performing the operation on the numerators.
        </p>

        <h4 className="font-bold text-slate-900">Multiplying</h4>
        <p>
          Multiplication is the simplest operation. You simply multiply the numerators together and the denominators together. No common denominator is required.
        </p>

        <h4 className="font-bold text-slate-900">Dividing</h4>
        <p>
          To divide fractions, use the "Keep, Change, Flip" method. Keep the first fraction, change the division sign to multiplication, and flip the second fraction (use its reciprocal). Then multiply as usual.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How do I simplify a fraction?</p>
            <p>To simplify, find the Greatest Common Divisor (GCD) of the numerator and the denominator and divide both by that number. For example, 4/8 simplifies to 1/2 because both are divisible by 4.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can a denominator be zero?</p>
            <p>No. Division by zero is undefined in mathematics. A fraction with a denominator of zero has no numerical value.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I convert a mixed number to an improper fraction?</p>
            <p>Multiply the whole number by the denominator, add the numerator, and place the result over the original denominator. For 2 1/3: (2 * 3) + 1 = 7, so the improper fraction is 7/3.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          Let's add <strong>1/2</strong> and <strong>1/4</strong>. The common denominator is 4. We convert 1/2 to 2/4. Now we add: <strong>2/4 + 1/4 = 3/4</strong>. Our calculator handles these conversions automatically, providing you with the simplified result instantly.
        </p>
      </div>
    </div>
  );
};
