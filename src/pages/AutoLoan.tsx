import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const AutoLoanCalculator: React.FC = () => {
  const [price, setPrice] = useState(30000);
  const [downPayment, setDownPayment] = useState(5000);
  const [tradeIn, setTradeIn] = useState(0);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(60); // Months

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const principal = price - downPayment - tradeIn;
    const monthlyRate = interestRate / 100 / 12;
    const n = loanTerm;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / n);
      setTotalInterest(0);
      return;
    }

    const x = Math.pow(1 + monthlyRate, n);
    const monthly = (principal * x * monthlyRate) / (x - 1);
    
    setMonthlyPayment(monthly);
    setTotalInterest((monthly * n) - principal);
  }, [price, downPayment, tradeIn, interestRate, loanTerm]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Auto Loan Calculator | Car Payment with Trade-In & Down Payment | simplycalculator.app</title>
        <meta name="description" content="Estimate your monthly car payments with our free auto loan calculator. Factor in trade-in value, down payments, and interest rates for 2026." />
      </Helmet>

      <h1>Auto Loan Calculator</h1>
      <p>Estimate your monthly car payments based on vehicle price, down payment, trade-in value, and interest rate.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Vehicle Price ($)</label>
              <input 
                type="number" 
                value={price} 
                onChange={(e) => setPrice(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Down Payment ($)</label>
              <input 
                type="number" 
                value={downPayment} 
                onChange={(e) => setDownPayment(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Trade-in Value ($)</label>
              <input 
                type="number" 
                value={tradeIn} 
                onChange={(e) => setTradeIn(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Interest Rate (%)</label>
              <input 
                type="number" 
                step="0.1" 
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Loan Term (Months)</label>
              <select 
                value={loanTerm} 
                onChange={(e) => setLoanTerm(Number(e.target.value))} 
                className="input-field w-full"
              >
                <option value={36}>36 Months</option>
                <option value={48}>48 Months</option>
                <option value={60}>60 Months</option>
                <option value={72}>72 Months</option>
                <option value={84}>84 Months</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Total Interest:</span>
                  <span className="font-bold text-[#0066cc]">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold">Monthly Payment:</span>
                  <span className="text-2xl font-bold text-[#0066cc]">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setPrice(30000);
              setDownPayment(5000);
              setTradeIn(0);
              setInterestRate(5.5);
              setLoanTerm(60);
            }}
            onCopy={() => {
              const text = `Auto Loan Results:\nMonthly Payment: $${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\nTotal Interest: $${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}\nCalculated at simplycalculator.app`;
              navigator.clipboard.writeText(text);
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Auto Loan Calculator" 
        path="/auto-loan" 
        description="Estimate your monthly car payments with our free car loan tool. Factor in trade-in value, down payments, and interest rates for 2026."
      />
    </div>
  );
};
