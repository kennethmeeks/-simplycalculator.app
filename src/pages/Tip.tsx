import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { parseInput } from '../lib/calculatorUtils';

export const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState<number | string>(50);
  const [tipPercent, setTipPercent] = useState<number | string>(15);
  const [people, setPeople] = useState<number | string>(1);

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [perPerson, setPerPerson] = useState(0);

  useEffect(() => {
    const b = parseInput(bill.toString());
    const t = parseInput(tipPercent.toString());
    const p = parseInput(people.toString());
    
    const tip = b * (t / 100);
    const totalBill = b + tip;
    setTipAmount(tip);
    setTotal(totalBill);
    setPerPerson(p > 0 ? totalBill / p : 0);
  }, [bill, tipPercent, people]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Tip Calculator [Free & No Sign-up]</title>
        <meta name="description" content="Calculate the perfect tip and split the bill easily with our free tip calculator with bill split. Ideal for restaurants, bars, and group dining in 2026." />
      </Helmet>

      <h1>Tip Calculator</h1>
      <p>Calculate the tip for a bill and split it among multiple people.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Bill Amount ($)</label>
              <input 
                type="number" 
                value={bill} 
                onChange={(e) => setBill(e.target.value)}
                className="input-field w-full"
              />
            </div>
            <div className="input-group">
              <label className="input-label">Tip Percentage (%)</label>
              <div className="flex gap-2 mb-2">
                {[10, 15, 18, 20].map((p) => (
                  <button
                    key={p}
                    onClick={() => setTipPercent(p)}
                    className={`px-3 py-1 text-xs border rounded-sm ${
                      tipPercent === p 
                        ? 'bg-[#0066cc] text-white border-[#0066cc]' 
                        : 'bg-white text-[#0066cc] border-[#ccc] hover:bg-gray-50'
                    }`}
                  >
                    {p}%
                  </button>
                ))}
              </div>
              <input 
                type="number" 
                value={tipPercent} 
                onChange={(e) => setTipPercent(e.target.value)}
                className="input-field w-full"
                placeholder="Custom %"
              />
            </div>
            <div className="input-group">
              <label className="input-label">Number of People</label>
              <input 
                type="number" 
                min="1"
                value={people} 
                onChange={(e) => setPeople(e.target.value)}
                className="input-field w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">Tip Amount:</span>
                <span className="text-xl font-bold text-[#0066cc]">${tipAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">Total Bill:</span>
                <span className="text-xl font-bold text-[#0066cc]">${total.toFixed(2)}</span>
              </div>
              <div className="pt-4 mt-4 border-t border-[#b3d9ff] flex justify-between items-center">
                <span className="text-lg font-bold">Per Person:</span>
                <span className="text-3xl font-bold text-[#0066cc]">${perPerson.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Tip Calculator & Bill Splitter" 
        path="/tip" 
        description="Quickly calculate the correct tip and split the bill among friends. Perfect for restaurants, cafes, and group outings in 2026."
      />
    </div>
  );
};
