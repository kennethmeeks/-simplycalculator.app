import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const StudentLoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(30000);
  const [interestRate, setInterestRate] = useState<number>(5.5);
  const [loanTerm, setLoanTerm] = useState<number>(10);
  const resultsRef = useRef<HTMLDivElement>(null);

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  const handleReset = () => {
    setLoanAmount(30000);
    setInterestRate(5.5);
    setLoanTerm(10);
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
      doc.text('Student Loan Report', 20, 20);
      doc.setFontSize(10);
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 28);
      
      doc.addImage(imgData, 'PNG', 20, 35, contentWidth, contentHeight);
      doc.save('Student_Loan_Report.pdf');
    } catch (err) { console.error(err); }
  };

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = loanTerm * 12;
    const p = loanAmount;
    
    // Monthly Payment Formula: P = PV * [r(1+r)^n] / [(1+r)^n - 1]
    const payment = r > 0 
      ? p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      : p / n;
    
    setMonthlyPayment(payment);
    setTotalPayment(payment * n);
    setTotalInterest((payment * n) - p);
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Student Loan Calculator | Calculate Monthly Payments 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online student loan calculator. Calculate your monthly student loan payments, total interest, and total cost based on loan amount, rate, and term." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Student Loan Calculator</h1>
        <p className="text-slate-600">
          Determine your monthly student loan payments, total interest, and the total cost of your loan based on the loan amount, interest rate, and term.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="calculator-container shadow-none border-slate-200">
          <h2 className="section-title">Loan Details</h2>
          
          <div className="space-y-6">
            <div>
              <label className="input-label">Loan Amount ($)</label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="input-field"
              />
            </div>
            <div>
              <label className="input-label">Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="input-field"
              />
            </div>
            <div>
              <label className="input-label">Loan Term (Years)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="input-field"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6" ref={resultsRef}>
          <div className="calculator-container bg-[#f0f7ff] border-[#0066cc]/10">
            <h2 className="section-title text-[#0066cc]">Repayment Summary</h2>
            <div className="space-y-6 text-center">
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Estimated Monthly Payment</p>
                <p className="text-4xl font-bold text-[#0066cc]">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-[#0066cc]/10 pt-6">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Interest</p>
                  <p className="text-xl font-bold text-slate-900">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Payment</p>
                  <p className="text-xl font-bold text-slate-900">${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                </div>
              </div>
              
              <div className="pt-4">
                <ResultActions 
                  onReset={handleReset}
                  onDownloadPDF={handleDownloadPDF}
                  onCopy={() => {
                    const text = `Student Loan Results:\nMonthly Payment: $${monthlyPayment.toLocaleString()}\nTotal Interest: $${totalInterest.toLocaleString()}\nTotal Payment: $${totalPayment.toLocaleString()}\nCalculated at simplycalculator.app`;
                    navigator.clipboard.writeText(text);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a Student Loan?</h2>
        <p>
          A student loan is a type of loan designed to help students pay for post-secondary education and the associated fees, such as tuition, books and supplies, and living expenses. It may differ from other types of loans in that the interest rate may be substantially lower and the repayment schedule may be deferred while the student is still in school.
        </p>
        
        <h3>How to Use the Student Loan Calculator</h3>
        <p>
          To estimate your monthly student loan payments and total interest, you need to provide:
        </p>
        <ul>
          <li><strong>Loan Amount:</strong> The total amount of money you plan to borrow.</li>
          <li><strong>Interest Rate:</strong> The annual interest rate charged by the lender.</li>
          <li><strong>Loan Term:</strong> The number of years you will take to pay back the loan.</li>
        </ul>

        <h3>Types of Student Loans</h3>
        <p>
          There are two main types of student loans:
        </p>
        <ul>
          <li><strong>Federal Student Loans:</strong> These loans are funded by the federal government and typically offer lower interest rates and more flexible repayment options.</li>
          <li><strong>Private Student Loans:</strong> These loans are funded by private lenders, such as banks or credit unions, and typically have higher interest rates and less flexible repayment options.</li>
        </ul>

        <h3>Tips for Managing Your Student Loan Repayments</h3>
        <p>
          Managing your student loan repayments effectively can help you stay on track and avoid financial stress:
        </p>
        <ul>
          <li><strong>Understand Your Repayment Options:</strong> Federal student loans offer several repayment options, including income-driven repayment plans.</li>
          <li><strong>Automate Your Payments:</strong> Set up a recurring payment from your checking account to ensure you never miss a due date.</li>
          <li><strong>Pay More Than the Minimum:</strong> Even a small extra payment each month can significantly reduce the total interest you pay and shorten your loan term.</li>
          <li><strong>Consider Loan Forgiveness:</strong> If you work in a public service or non-profit role, you may be eligible for loan forgiveness after a certain period of time.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is a "Subsidized" vs. "Unsubsidized" loan?</h4>
            <p>A subsidized loan is a federal student loan for which the government pays the interest while you're in school. An unsubsidized loan is a federal student loan for which you are responsible for paying all the interest.</p>
          </div>
          <div>
            <h4 className="font-bold">What is a "Deferment" vs. "Forbearance"?</h4>
            <p>A deferment allows you to temporarily stop making payments on your student loan for a specific period of time. A forbearance allows you to temporarily stop making payments or reduce your monthly payments for a specific period of time.</p>
          </div>
          <div>
            <h4 className="font-bold">How can I lower my student loan interest rate?</h4>
            <p>You may be able to lower your student loan interest rate by refinancing your loans with a private lender, but be sure to consider the loss of federal benefits.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
