import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { parseInput } from '@/src/lib/calculatorUtils';
import { ResultActions } from '../components/ResultActions';
import { FileDown, RotateCcw, Share2 } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const CompoundInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<number | string>(10000);
  const [rate, setRate] = useState<number | string>(7);
  const [years, setYears] = useState<number | string>(10);
  const [compounding, setCompounding] = useState(12); // Monthly
  const [contribution, setContribution] = useState<number | string>(100);
  const resultsRef = useRef<HTMLDivElement>(null);

  const [total, setTotal] = useState(0);
  const [interest, setInterest] = useState(0);

  const handleReset = () => {
    setPrincipal(10000);
    setRate(7);
    setYears(10);
    setCompounding(12);
    setContribution(100);
  };

  const handleDownloadPDF = async () => {
    if (!resultsRef.current) return;
    const doc = new jsPDF();
    try {
      const canvas = await html2canvas(resultsRef.current, { scale: 2, backgroundColor: '#ffffff' });
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = doc.internal.pageSize.getWidth();
      const contentWidth = pdfWidth - 20;
      const contentHeight = (canvas.height * contentWidth) / canvas.width;
      doc.setFontSize(22);
      doc.text('Compound Interest Report', 20, 20);
      doc.setFontSize(10);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 28);
      doc.addImage(imgData, 'PNG', 10, 35, contentWidth, contentHeight);
      doc.save('Compound_Interest_Report.pdf');
    } catch (err) { console.error(err); }
  };

  useEffect(() => {
    const p = parseInput(principal.toString());
    const r = parseInput(rate.toString()) / 100;
    const n = compounding;
    const t = parseInput(years.toString());
    const PMT = parseInput(contribution.toString());

    if (t <= 0 || n <= 0) {
      setTotal(p);
      setInterest(0);
      return;
    }

    // Formula: A = P(1 + r/n)^(nt) + PMT * [((1 + r/n)^(nt) - 1) / (r/n)]
    let finalAmount = 0;
    if (r === 0) {
      finalAmount = p + (PMT * n * t);
    } else {
      const amountFromPrincipal = p * Math.pow(1 + r / n, n * t);
      const amountFromContributions = PMT * ((Math.pow(1 + r / n, n * t) - 1) / (r / n));
      finalAmount = amountFromPrincipal + amountFromContributions;
    }
    
    const totalInvested = p + (PMT * n * t);
    
    setTotal(finalAmount);
    setInterest(finalAmount - totalInvested);
  }, [principal, rate, years, compounding, contribution]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Compound Interest Calculator | Monthly Contributions & Growth 2026 | simplycalculator.app</title>
        <meta name="description" content="Calculate your investment growth with our free compound interest calculator. See how monthly contributions and compounding interest can build your wealth in 2026." />
      </Helmet>

      <h1>Compound Interest Calculator</h1>
      <p>Calculate how much your investment will grow over time with compound interest and regular contributions.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Initial Investment ($)</label>
              <input 
                type="number" 
                value={principal} 
                onChange={(e) => setPrincipal(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Monthly Contribution ($)</label>
              <input 
                type="number" 
                value={contribution} 
                onChange={(e) => setContribution(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Interest Rate (%)</label>
              <input 
                type="number" 
                step="0.1" 
                value={rate} 
                onChange={(e) => setRate(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Years</label>
              <input 
                type="number" 
                value={years} 
                onChange={(e) => setYears(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Compounding Frequency</label>
              <select 
                value={compounding} 
                onChange={(e) => setCompounding(Number(e.target.value))} 
                className="input-field w-full"
              >
                <option value={1}>Annually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
                <option value={365}>Daily</option>
              </select>
            </div>
          </div>
        </div>

        <div id="result-panel" ref={resultsRef}>
          <div className="calculator-container h-full">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Total Interest Earned:</span>
                  <span className="font-bold text-[#0066cc]">${interest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold">Future Value:</span>
                  <span className="text-2xl font-bold text-[#0066cc]">${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </div>

              <ResultActions 
                onReset={handleReset}
                onDownloadPDF={handleDownloadPDF}
                onCopy={() => {
                    const text = `Compound Interest Results:\nFuture Value: $${total.toLocaleString()}\nInterest Earned: $${interest.toLocaleString()}\nCalculated at simplycalculator.app`;
                    navigator.clipboard.writeText(text);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">What is Compound Interest?</h2>
        <p>
          Compound interest is often described as the "eighth wonder of the world" because of its incredible power to build wealth over time. Unlike simple interest, which is only calculated on the initial principal, compound interest is calculated on both the initial principal and the accumulated interest from previous periods. In 2026, understanding this concept is more important than ever for anyone looking to build long-term financial security. Our <strong>compound interest calculator with monthly contributions</strong> helps you visualize how small, regular additions to your savings can grow into a significant nest egg.
        </p>
        <p>
          The true magic of compounding happens over long durations. The earlier you start, the more time your money has to grow. Even modest monthly contributions can lead to substantial results when given decades to compound at a steady rate of return.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Compound Interest Calculator</h3>
        <p>
          To see your potential investment growth, simply fill in the following fields:
        </p>
        <ol>
          <li><strong>Initial Investment:</strong> The starting amount of money you have to invest today.</li>
          <li><strong>Monthly Contribution:</strong> The amount you plan to add to your investment every month. Consistency is key here!</li>
          <li><strong>Interest Rate:</strong> The expected annual percentage rate (APR) of your investment. This is often based on historical stock market or bond returns.</li>
          <li><strong>Years:</strong> The total length of time you plan to keep the money invested before you need to withdraw it.</li>
          <li><strong>Compounding Frequency:</strong> How often the interest is calculated and added back to your balance. Most savings accounts compound monthly or daily.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Compound Interest Formula</h3>
        <p>
          Our calculator uses the standard formula for compound interest with regular contributions:
        </p>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm overflow-x-auto">
          A = P(1 + r/n)^(nt) + PMT × [((1 + r/n)^(nt) - 1) / (r/n)]
        </div>
        <p className="mt-4">Where:</p>
        <ul>
          <li><strong>A:</strong> The future value of the investment</li>
          <li><strong>P:</strong> The initial principal balance</li>
          <li><strong>r:</strong> The annual interest rate (decimal)</li>
          <li><strong>n:</strong> The number of times interest is compounded per year</li>
          <li><strong>t:</strong> The number of years the money is invested</li>
          <li><strong>PMT:</strong> The monthly contribution amount</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is the "Rule of 72"?</p>
            <p>The Rule of 72 is a quick way to estimate how long it will take for your money to double at a given interest rate. Simply divide 72 by your annual interest rate. For example, at a 6% rate, your money will double in approximately 12 years.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How does compounding frequency affect growth?</p>
            <p>The more frequently interest is compounded, the faster your investment grows. Daily compounding will result in a slightly higher future value than monthly or annual compounding, even with the same interest rate, because interest starts earning interest sooner.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Is a 7% interest rate realistic in 2026?</p>
            <p>Historically, the S&P 500 has returned an average of about 7-10% annually before inflation. However, actual returns can vary significantly from year to year, and past performance is no guarantee of future results. It's always wise to test different scenarios in the calculator.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the difference between simple and compound interest?</p>
            <p>Simple interest is calculated only on the principal amount of a loan or deposit. Compound interest is calculated on the principal amount and also on the accumulated interest of previous periods, leading to exponential growth.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If you start with <strong>$10,000</strong> and contribute <strong>$200 per month</strong> for <strong>20 years</strong> at an average annual return of <strong>8%</strong> compounded monthly, your future value would be approximately <strong>$165,000</strong>. Of that total, your contributions only account for $58,000, meaning over <strong>$107,000</strong> was generated purely from interest earned!
        </p>
      </div>
    </div>
  );
};
