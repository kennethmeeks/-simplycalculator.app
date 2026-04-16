import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const CommissionCalculator: React.FC = () => {
  const [salesAmount, setSalesAmount] = useState<number>(50000);
  const [commissionRate, setCommissionRate] = useState<number>(5);
  const [commissionAmount, setCommissionAmount] = useState<number>(0);
  const [netSales, setNetSales] = useState<number>(0);

  useEffect(() => {
    const comm = (commissionRate / 100) * salesAmount;
    setCommissionAmount(comm);
    setNetSales(salesAmount - comm);
  }, [salesAmount, commissionRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Commission Calculator | Calculate Sales Commission 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online commission calculator. Calculate sales commission amounts and net sales based on sales volume and commission percentage." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Commission Calculator</h1>
        <p className="text-slate-600">
          Quickly calculate the commission amount for a sale based on the total sales volume and the agreed-upon commission percentage.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Sales Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Sales Amount ($)</label>
              <input
                type="number"
                value={salesAmount}
                onChange={(e) => setSalesAmount(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Commission Rate (%)</label>
              <input
                type="number"
                value={commissionRate}
                onChange={(e) => setCommissionRate(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Commission Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Commission Amount</p>
              <p className="text-4xl font-bold text-[#0066cc]">${commissionAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Net Sales (After Commission)</p>
              <p className="text-2xl font-semibold text-slate-900">${netSales.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This is a simple commission calculation. Complex tiered structures are not included.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>How Sales Commission Works</h2>
        <p>
          Commission is a form of variable pay for services rendered or products sold. It is a common way to motivate and reward salespeople. Commission can be a flat fee per sale or, more commonly, a percentage of the total revenue generated.
        </p>
        
        <h3>How to Use the Commission Calculator</h3>
        <p>
          To calculate a simple commission, you only need two pieces of information:
        </p>
        <ul>
          <li><strong>Total Sales Amount:</strong> The total dollar value of the products or services sold.</li>
          <li><strong>Commission Rate:</strong> The percentage of the sale that the salesperson receives as pay.</li>
        </ul>

        <h3>The Commission Formula</h3>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-sm mb-4">
          Commission = Sales Amount * (Commission Rate / 100)
        </div>

        <h3>Common Commission Structures</h3>
        <p>
          While this calculator handles simple percentage-based commissions, many businesses use more complex structures:
        </p>
        <ul>
          <li><strong>Tiered Commission:</strong> The commission rate increases as the salesperson hits certain sales thresholds (e.g., 5% on the first $10,000, 7% on everything above that).</li>
          <li><strong>Base Plus Commission:</strong> The salesperson receives a fixed salary plus a percentage of their sales.</li>
          <li><strong>Draw Against Commission:</strong> The salesperson receives an advance on their commissions, which must be paid back from future sales.</li>
          <li><strong>Residual Commission:</strong> The salesperson continues to receive a commission as long as the customer remains a client (common in insurance and SaaS).</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is a typical real estate commission?</h4>
            <p>In the United States, real estate commissions are typically around 5% to 6% of the home's sale price, which is usually split between the buyer's agent and the seller's agent.</p>
          </div>
          <div>
            <h4 className="font-bold">Is commission taxable?</h4>
            <p>Yes, commissions are considered earned income and are subject to federal and state income taxes, as well as Social Security and Medicare taxes.</p>
          </div>
          <div>
            <h4 className="font-bold">What is the difference between gross and net commission?</h4>
            <p>Gross commission is the total amount earned before any deductions (like taxes or desk fees). Net commission is the amount the salesperson actually takes home.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
