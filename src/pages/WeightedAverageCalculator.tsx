import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Plus, Trash2, Calculator, Percent } from 'lucide-react';

interface WeightedItem {
  id: string;
  value: number;
  weight: number;
}

export const WeightedAverageCalculator: React.FC = () => {
  const [items, setItems] = useState<WeightedItem[]>([
    { id: '1', value: 90, weight: 50 },
    { id: '2', value: 80, weight: 50 },
  ]);
  const [weightedAverage, setWeightedAverage] = useState<number>(0);
  const [totalWeight, setTotalWeight] = useState<number>(0);

  const addItem = () => {
    setItems([...items, { id: Math.random().toString(36).substr(2, 9), value: 0, weight: 0 }]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof WeightedItem, value: number) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  useEffect(() => {
    let sum = 0;
    let weightSum = 0;
    items.forEach(item => {
      sum += item.value * item.weight;
      weightSum += item.weight;
    });
    setTotalWeight(weightSum);
    setWeightedAverage(weightSum > 0 ? sum / weightSum : 0);
  }, [items]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Weighted Average Calculator | Calculate Mean with Weights</title>
        <meta name="description" content="Free online weighted average calculator. Easily calculate the weighted mean for grades, investments, or any set of values with different weights in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Weighted Average Calculator</h1>
        <p className="text-slate-600">Calculate the average of a set of values where each value has a different level of importance or weight.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="flex justify-between items-center mb-4">
              <h2 className="section-title mb-0">Values and Weights</h2>
              <button 
                onClick={addItem}
                className="text-xs bg-[#0066cc] text-white px-3 py-1.5 rounded hover:bg-[#0052a3] flex items-center gap-1 font-bold uppercase tracking-wider"
              >
                <Plus className="w-3 h-3" /> Add Row
              </button>
            </div>
            
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded group">
                  <div className="flex-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">Value</label>
                    <input 
                      type="number" 
                      value={item.value} 
                      onChange={(e) => updateItem(item.id, 'value', Number(e.target.value))}
                      className="w-full text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">Weight</label>
                    <input 
                      type="number" 
                      value={item.weight} 
                      onChange={(e) => updateItem(item.id, 'weight', Number(e.target.value))}
                      className="w-full text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                    />
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="mt-4 text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              The Formula
            </h2>
            <p className="text-blue-800 text-sm leading-relaxed">
              A weighted average is calculated by multiplying each value by its weight, summing those products, and then dividing by the total weight.
            </p>
            <div className="bg-white/50 p-3 rounded font-mono text-xs border border-blue-200 my-4 text-blue-900">
              Weighted Average = Σ(Value × Weight) / ΣWeight
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Percent className="w-5 h-5" />
              Result
            </h2>
            <div className="text-center py-8">
              <div className="text-5xl font-bold mb-2">{weightedAverage.toFixed(2)}</div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Weighted Average</div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between text-xs text-slate-400">
              <span>Total Weight:</span>
              <span className="text-white font-bold">{totalWeight}</span>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4">Common Uses</h3>
            <ul className="text-sm text-slate-600 space-y-3">
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Calculating course grades.
              </li>
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Investment portfolio returns.
              </li>
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Inventory valuation (WAC).
              </li>
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Statistical data analysis.
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Weighted Averages in 2026</h2>
        <p>
          A <strong>weighted average</strong> is a calculation that takes into account the varying degrees of importance of the numbers in a data set. In a simple average, all numbers are treated equally. In a weighted average, some numbers contribute more to the final result than others.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Example: Academic Grades</h3>
        <p>
          Imagine you have two tests. Test 1 is worth 20% of your grade and you got an 80%. Test 2 is worth 80% of your grade and you got a 90%.
        </p>
        <ul>
          <li><strong>Simple Average:</strong> (80 + 90) / 2 = 85%</li>
          <li><strong>Weighted Average:</strong> (80 × 0.2) + (90 × 0.8) = 16 + 72 = 88%</li>
        </ul>
        <p>
          As you can see, the weighted average is higher because you performed better on the test that carried more weight.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Weighted Average in Finance</h3>
        <p>
          Investors often use weighted averages to calculate the return on a portfolio. If you have $1,000 in a stock that gained 10% and $9,000 in a bond that gained 2%, your weighted average return isn't 6% (the simple average). It's actually much closer to 2% because the bond makes up 90% of your total investment.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Do weights have to add up to 100?</p>
            <p>No. Our calculator will divide by the total weight regardless of what it is. However, in many contexts like grades or percentages, it's common for them to sum to 100 or 1.0.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can weights be negative?</p>
            <p>Mathematically, yes, but in most practical applications (like grades or finance), weights are positive values representing importance or quantity.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
