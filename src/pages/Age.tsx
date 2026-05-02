import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { CalculatorSEO } from '../components/CalculatorSEO';

export const AgeCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState('1990-01-01');
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const birth = new Date(birthDate);
    const now = new Date();
    
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  }, [birthDate]);

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
      pdf.text('PROFESSIONAL CHRONOLOGICAL REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('AGE ANALYSIS', 15, 55);
      
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
      
      pdf.save('Age_Calculator_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Age Calculator | Calculate Age in Years, Months, and Days | simplycalculator.app</title>
        <meta name="description" content="Calculate your exact age in years, months, and days with our free online age tool. Perfect for legal, medical, or personal use in 2026." />
      </Helmet>

      <h1>Age Calculator</h1>
      <p>The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years, months, and days.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Date of Birth</label>
              <input 
                type="date" 
                value={birthDate} 
                onChange={(e) => setBirthDate(e.target.value)}
                className="input-field w-full"
              />
            </div>
          </div>
        </div>

        <div>
        <div className="calculator-container" ref={resultsRef}>
          <div className="section-title">Results</div>
          <div className="result-box">
            <div className="text-center">
              <p className="font-bold text-[#555] uppercase text-xs mb-4">Your Age is</p>
              <div className="flex justify-center gap-6">
                <div>
                  <p className="text-4xl font-bold text-[#0066cc]">{age.years}</p>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Years</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#0066cc]">{age.months}</p>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Months</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[#0066cc]">{age.days}</p>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Days</p>
                </div>
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => setBirthDate('1990-01-01')}
            onDownloadPDF={handleDownloadPDF}
            onCopy={() => {
              const text = `Age: ${age.years} years, ${age.months} months, ${age.days} days.\nCalculated at simplycalculator.app`;
              navigator.clipboard.writeText(text);
            }}
          />
        </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Age Calculator" 
        path="/age" 
        description="Calculate your exact age in years, months, and days. Determine time intervals between dates and learn about age calculation methods in 2026."
      />
    </div>
  );
};

export default AgeCalculator;
