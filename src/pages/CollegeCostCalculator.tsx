import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


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
              <ResultActions 
                onReset={() => {
                  setTuition(25000);
                  setRoomAndBoard(12000);
                  setBooksAndSupplies(1200);
                  setOtherExpenses(2500);
                  setYears(4);
                  setInflationRate(3);
                }}
                onCopy={() => {
                  const text = `College Cost Projection:\nTotal Cost: $${totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}\nAnnual Cost: $${annualCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
              <p className="text-xs text-slate-500 italic mt-4">
                Note: This calculation provides an estimate. Actual costs may vary based on financial aid, scholarships, and specific college fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="College Cost Calculator" 
        path="/college-cost" 
        description="Estimate the total cost of a college degree. Account for tuition, living expenses, and inflation to plan your 2026 education budget."
      />
    </div>
  );
};
