import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const CollegeCostCalculator: React.FC = () => {
  const [tuition, setTuition] = useState<number>(25000);
  const [roomAndBoard, setRoomAndBoard] = useState<number>(12000);
  const [booksAndSupplies, setBooksAndSupplies] = useState<number>(1200);
  const [otherExpenses, setOtherExpenses] = useState<number>(2500);
  const [years, setYears] = useState<number>(4);
  const [inflationRate, setInflationRate] = useState<number>(3);

  const [totalCost, setTotalCost] = useState<number>(0);
  const [annualCost, setAnnualCost] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    let baseAnnual = tuition + roomAndBoard + booksAndSupplies + otherExpenses;
    
    for (let i = 0; i < years; i++) {
      total += baseAnnual * Math.pow(1 + inflationRate / 100, i);
    }
    
    setTotalCost(total);
    setAnnualCost(total / years);
  }, [tuition, roomAndBoard, booksAndSupplies, otherExpenses, years, inflationRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>College Cost Calculator | Estimate Tuition & Expenses 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online college cost calculator. Estimate the total cost of a college education, including tuition, room and board, books, and other expenses." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">College Cost Calculator</h1>
        <p className="text-slate-600">
          Estimate the total cost of a college education by accounting for tuition, room and board, books, and other expenses, adjusted for inflation.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Annual Expenses (Current)</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Tuition & Fees ($)</label>
              <input
                type="number"
                value={tuition}
                onChange={(e) => setTuition(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Room & Board ($)</label>
              <input
                type="number"
                value={roomAndBoard}
                onChange={(e) => setRoomAndBoard(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Books & Supplies ($)</label>
                <input
                  type="number"
                  value={booksAndSupplies}
                  onChange={(e) => setBooksAndSupplies(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Other Expenses ($)</label>
                <input
                  type="number"
                  value={otherExpenses}
                  onChange={(e) => setOtherExpenses(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Years to Graduate</label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Inflation Rate (%)</label>
                <input
                  type="number"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Cost Summary</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Total Cost</p>
              <p className="text-4xl font-bold text-[#0066cc]">${totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Average Annual Cost</p>
              <p className="text-xl font-semibold text-slate-900">${annualCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation provides an estimate. Actual costs may vary based on financial aid, scholarships, and specific college fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is the Cost of College?</h2>
        <p>
          The cost of college is the total amount of money you will need to pay for a post-secondary education. This typically includes tuition and fees, room and board, books and supplies, and other personal expenses.
        </p>
        
        <h3>How to Use the College Cost Calculator</h3>
        <p>
          To estimate the total cost of a college education, you need to provide:
        </p>
        <ul>
          <li><strong>Tuition & Fees:</strong> The annual cost of tuition and other required fees.</li>
          <li><strong>Room & Board:</strong> The annual cost of housing and meals.</li>
          <li><strong>Books & Supplies:</strong> The annual cost of textbooks and other required supplies.</li>
          <li><strong>Other Expenses:</strong> The annual cost of personal expenses, such as transportation and entertainment.</li>
          <li><strong>Years to Graduate:</strong> The number of years you plan to take to graduate.</li>
          <li><strong>Inflation Rate:</strong> The annual rate of increase in college costs.</li>
        </ul>

        <h3>Ways to Pay for College</h3>
        <p>
          There are several ways to pay for college:
        </p>
        <ul>
          <li><strong>Scholarships and Grants:</strong> These are awards that do not need to be paid back.</li>
          <li><strong>Student Loans:</strong> These are loans that must be paid back with interest.</li>
          <li><strong>Work-Study:</strong> This is a program that allows students to work part-time while in school.</li>
          <li><strong>Savings:</strong> This is money that you or your family have saved for college.</li>
        </ul>

        <h3>Tips for Reducing College Costs</h3>
        <p>
          Reducing the cost of college can help you avoid excessive student loan debt:
        </p>
        <ul>
          <li><strong>Consider a Community College:</strong> Starting at a community college and then transferring to a four-year university can save you thousands of dollars.</li>
          <li><strong>Apply for Scholarships and Grants:</strong> Be sure to apply for as many scholarships and grants as possible.</li>
          <li><strong>Live at Home:</strong> Living at home can save you a significant amount of money on room and board.</li>
          <li><strong>Work Part-Time:</strong> Working part-time while in school can help you pay for your expenses.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is the "Net Price" of college?</h4>
            <p>The net price of college is the total cost of attendance minus any scholarships and grants you receive.</p>
          </div>
          <div>
            <h4 className="font-bold">What is a "529 Plan"?</h4>
            <p>A 529 plan is a tax-advantaged savings plan designed to help families save for future education costs.</p>
          </div>
          <div>
            <h4 className="font-bold">How can I increase my chances of getting financial aid?</h4>
            <p>Be sure to complete the Free Application for Federal Student Aid (FAFSA) as early as possible each year.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
