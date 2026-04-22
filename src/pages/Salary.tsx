import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { parseInput } from '@/src/lib/calculatorUtils';
import { FileDown, RotateCcw, Share2 } from 'lucide-react';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const SalaryCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number | string>(50000);
  const [period, setPeriod] = useState('year');
  const [hoursPerWeek, setHoursPerWeek] = useState<number | string>(40);
  const resultsRef = useRef<HTMLDivElement>(null);

  const [results, setResults] = useState({
    hourly: 0,
    daily: 0,
    weekly: 0,
    monthly: 0,
    annually: 0,
  });

  const handleReset = () => {
    setAmount(50000);
    setPeriod('year');
    setHoursPerWeek(40);
  };

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
      pdf.text('PROFESSIONAL SALARY REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('INCOME CONVERSION ANALYSIS', 15, 55);
      
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
      
      pdf.setTextColor(0, 102, 204);
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.text('WWW.SIMPLYCALCULATOR.APP', pdfWidth / 2, pdfHeight - 10, { align: 'center' });
      
      pdf.save('Salary_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  useEffect(() => {
    const amt = parseInput(amount.toString());
    const hours = parseInput(hoursPerWeek.toString());
    
    let annual = 0;
    if (period === 'hour') annual = amt * hours * 52;
    else if (period === 'day') annual = amt * 5 * 52;
    else if (period === 'week') annual = amt * 52;
    else if (period === 'month') annual = amt * 12;
    else annual = amt;

    if (hours <= 0) {
      setResults({ hourly: 0, daily: 0, weekly: 0, monthly: 0, annually: 0 });
      return;
    }

    setResults({
      hourly: annual / (hours * 52),
      daily: annual / (5 * 52),
      weekly: annual / 52,
      monthly: annual / 12,
      annually: annual,
    });
  }, [amount, period, hoursPerWeek]);

  return (
    <div className="max-w-5xl mx-auto w-full space-y-12 pb-20">
      <Helmet>
        <title>Salary Calculator | Hourly to Annual Salary Converter 2026</title>
        <meta name="description" content="Calculate your annual, monthly, and weekly income with our free salary calculator. Convert hourly to annual salary and see your take-home pay potential for 2026." />
      </Helmet>

      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase">Salary Calculator</h1>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm">Convert pay between different time periods like hourly, weekly, monthly, and annually.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-6">
          <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <div className="mb-8">
              <h2 className="text-blue-600 font-bold text-2xl">Income Parameters</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600">Amount</label>
                <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 h-12 focus-within:border-blue-600 transition-colors">
                  <span className="text-sm text-slate-400">$</span>
                  <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-transparent border-none outline-none flex-1 text-slate-700 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600">Pay Period</label>
                <select 
                  value={period} 
                  onChange={(e) => setPeriod(e.target.value)}
                  className="w-full h-12 px-3 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-medium text-slate-700 transition-all"
                >
                  <option value="hour">Hourly</option>
                  <option value="day">Daily</option>
                  <option value="week">Weekly</option>
                  <option value="month">Monthly</option>
                  <option value="year">Annually</option>
                </select>
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-sm font-bold text-slate-600">Hours per Week</label>
                <input 
                  type="number" 
                  value={hoursPerWeek} 
                  onChange={(e) => setHoursPerWeek(e.target.value)}
                  className="w-full h-12 px-3 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-medium text-slate-700 transition-all"
                />
              </div>
            </div>
          </section>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Understanding Gross Income</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              This calculator provides your <strong>gross income</strong>, which is the total amount earned before taxes, social security, and other deductions.
            </p>
          </div>
        </div>

        <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col h-full relative overflow-hidden" ref={resultsRef}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-blue-600 font-bold text-2xl mb-8 relative z-10">Income Results</h2>

          <div className="flex-1 space-y-6 relative z-10">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-sm text-slate-500 font-medium">Hourly</span>
                <span className="font-bold text-slate-700">${results.hourly.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-sm text-slate-500 font-medium">Daily</span>
                <span className="font-bold text-slate-700">${results.daily.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-sm text-slate-500 font-medium">Weekly</span>
                <span className="font-bold text-slate-700">${results.weekly.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-sm text-slate-500 font-medium">Monthly</span>
                <span className="font-bold text-slate-700">${results.monthly.toFixed(2)}</span>
              </div>
              <div className="pt-4 text-center">
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-1">Annual Salary</p>
                <div className="text-blue-600 text-5xl font-bold tracking-tight">
                  ${results.annually.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <ResultActions 
                onReset={handleReset}
                onDownloadPDF={handleDownloadPDF}
                onCopy={() => {
                    const text = `Salary Results:\nHourly: $${results.hourly.toFixed(2)}\nAnnually: $${results.annually.toLocaleString()}\nCalculated at simplycalculator.app`;
                    navigator.clipboard.writeText(text);
                }}
              />
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 relative z-10">
            <p className="text-slate-400 text-[11px] font-medium leading-relaxed italic">
              Estimated based on {hoursPerWeek} hours/week and 52 weeks/year.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About Salary Conversion</h2>
        <p>
          Understanding your true earnings is essential for financial planning, budgeting, and career negotiations. Our <strong>salary calculator hourly to annual</strong> is designed to provide a clear and accurate breakdown of your income across different timeframes. Whether you're considering a new job offer or simply want to know how your hourly rate translates to a yearly salary, this tool provides the answers you need for 2026.
        </p>
        <p>
          Many people focus solely on their hourly rate, but seeing the annual total can be eye-opening. For instance, a small increase in your hourly pay can lead to thousands of dollars in additional income over the course of a year. Conversely, understanding your weekly or monthly take-home potential helps you create a realistic budget for your living expenses.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Salary Calculator</h3>
        <p>
          To calculate your salary, simply follow these steps:
        </p>
        <ol>
          <li><strong>Enter the Pay Amount:</strong> Input the dollar amount you currently earn or expect to earn.</li>
          <li><strong>Select the Pay Period:</strong> Choose whether the amount entered is hourly, daily, weekly, monthly, or annually.</li>
          <li><strong>Adjust Hours per Week:</strong> If you work more or less than the standard 40 hours, update this field for a more accurate hourly conversion.</li>
          <li><strong>Review Your Results:</strong> The calculator will instantly display your equivalent earnings across all major time periods.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Math Behind Salary Calculation</h3>
        <p>
          The formulas used in our calculator are straightforward but vital for accuracy:
        </p>
        <ul>
          <li><strong>Weekly Salary:</strong> Hourly Rate × Hours per Week</li>
          <li><strong>Annual Salary:</strong> Weekly Salary × Weeks per Year (standard is 52)</li>
          <li><strong>Monthly Salary:</strong> Annual Salary ÷ 12</li>
        </ul>
        <p>
          By using these standard formulas, we ensure that you get a consistent and reliable view of your earnings, regardless of your pay frequency.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Does this include taxes?</p>
            <p>No, this calculator provides your "gross" income, which is the total amount earned before any taxes, social security, or other deductions are taken out. Your "net" or take-home pay will be lower depending on your local tax laws and personal exemptions.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is a standard work week?</p>
            <p>In many countries, a standard full-time work week is 40 hours. However, this can vary by industry and employer, with some considering 35 or 37.5 hours as full-time.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How many working days are in a year?</p>
            <p>Assuming a 5-day work week and 52 weeks per year, there are 260 potential working days. Subtracting holidays and vacation days will give you your actual working days.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Why is knowing my hourly rate important if I'm salaried?</p>
            <p>Even if you receive a fixed annual salary, knowing your effective hourly rate is crucial for evaluating overtime opportunities, comparing different job offers, and understanding the true value of your time.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If you earn <strong>$25 per hour</strong> and work a standard <strong>40-hour week</strong> for <strong>52 weeks a year</strong>, your calculations would be:
        </p>
        <ul>
          <li><strong>Weekly:</strong> $25 × 40 = $1,000</li>
          <li><strong>Annual:</strong> $1,000 × 52 = $52,000</li>
          <li><strong>Monthly:</strong> $52,000 ÷ 12 = $4,333.33</li>
        </ul>
      </div>
    </div>
  );
};
