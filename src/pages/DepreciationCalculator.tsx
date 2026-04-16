import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const DepreciationCalculator: React.FC = () => {
  const [assetCost, setAssetCost] = useState<number>(50000);
  const [salvageValue, setSalvageValue] = useState<number>(5000);
  const [usefulLife, setUsefulLife] = useState<number>(5);
  const [method, setMethod] = useState<'straight-line' | 'double-declining'>('straight-line');

  const [annualDepreciation, setAnnualDepreciation] = useState<number[]>([]);
  const [accumulatedDepreciation, setAccumulatedDepreciation] = useState<number[]>([]);
  const [bookValue, setBookValue] = useState<number[]>([]);

  useEffect(() => {
    const annual: number[] = [];
    const accumulated: number[] = [];
    const book: number[] = [];
    
    let currentBookValue = assetCost;
    let currentAccumulated = 0;

    if (method === 'straight-line') {
      const dep = (assetCost - salvageValue) / usefulLife;
      for (let i = 1; i <= usefulLife; i++) {
        annual.push(dep);
        currentAccumulated += dep;
        accumulated.push(currentAccumulated);
        book.push(assetCost - currentAccumulated);
      }
    } else {
      const rate = (2 / usefulLife);
      for (let i = 1; i <= usefulLife; i++) {
        let dep = currentBookValue * rate;
        if (currentBookValue - dep < salvageValue) {
          dep = currentBookValue - salvageValue;
        }
        annual.push(dep);
        currentAccumulated += dep;
        accumulated.push(currentAccumulated);
        currentBookValue -= dep;
        book.push(currentBookValue);
        if (currentBookValue <= salvageValue) break;
      }
    }

    setAnnualDepreciation(annual);
    setAccumulatedDepreciation(accumulated);
    setBookValue(book);
  }, [assetCost, salvageValue, usefulLife, method]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Depreciation Calculator | Straight-Line & Declining Balance 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online depreciation calculator. Calculate annual depreciation, accumulated depreciation, and book value using straight-line or double-declining balance methods." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Depreciation Calculator</h1>
        <p className="text-slate-600">
          Determine the annual depreciation, accumulated depreciation, and book value of an asset using the straight-line or double-declining balance methods.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Asset Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Asset Cost ($)</label>
              <input
                type="number"
                value={assetCost}
                onChange={(e) => setAssetCost(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Salvage Value ($)</label>
                <input
                  type="number"
                  value={salvageValue}
                  onChange={(e) => setSalvageValue(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Useful Life (Years)</label>
                <input
                  type="number"
                  value={usefulLife}
                  onChange={(e) => setUsefulLife(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1 text-slate-900">Depreciation Method</label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button
                  onClick={() => setMethod('straight-line')}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${method === 'straight-line' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}
                >
                  Straight-Line
                </button>
                <button
                  onClick={() => setMethod('double-declining')}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${method === 'double-declining' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'}`}
                >
                  Double-Declining
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Depreciation Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-2 font-semibold text-slate-700">Year</th>
                  <th className="pb-2 font-semibold text-slate-700">Annual</th>
                  <th className="pb-2 font-semibold text-slate-700">Book Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {annualDepreciation.map((dep, i) => (
                  <tr key={i}>
                    <td className="py-2 text-slate-600">{i + 1}</td>
                    <td className="py-2 text-slate-900 font-medium">${dep.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td className="py-2 text-slate-900 font-medium">${bookValue[i].toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Depreciation?</h2>
        <p>
          Depreciation is the process of allocating the cost of a tangible asset over its useful life. It represents the reduction in the value of an asset due to wear and tear, obsolescence, or age. Depreciation is an important concept in accounting and finance, as it allows businesses to match the cost of an asset with the revenue it generates.
        </p>
        
        <h3>How to Use the Depreciation Calculator</h3>
        <p>
          To calculate the depreciation of an asset, you need to provide:
        </p>
        <ul>
          <li><strong>Asset Cost:</strong> The total amount you paid for the asset, including any shipping or installation costs.</li>
          <li><strong>Salvage Value:</strong> The estimated value of the asset at the end of its useful life.</li>
          <li><strong>Useful Life:</strong> The number of years you expect to use the asset.</li>
          <li><strong>Depreciation Method:</strong> The method you want to use to calculate the annual depreciation.</li>
        </ul>

        <h3>Common Depreciation Methods</h3>
        <p>
          There are several methods for calculating depreciation:
        </p>
        <ul>
          <li><strong>Straight-Line Method:</strong> This is the simplest method, where the annual depreciation is the same each year. It's calculated as (Asset Cost - Salvage Value) / Useful Life.</li>
          <li><strong>Double-Declining Balance Method:</strong> This is an accelerated depreciation method, where the annual depreciation is higher in the early years of the asset's life. It's calculated as (2 / Useful Life) * Book Value at the beginning of the year.</li>
        </ul>

        <h3>Why Depreciation is Important</h3>
        <p>
          Depreciation is important for several reasons:
        </p>
        <ul>
          <li><strong>Tax Benefits:</strong> Depreciation is a tax-deductible expense, which can lower a business's taxable income and tax bill.</li>
          <li><strong>Asset Valuation:</strong> Depreciation helps businesses accurately value their assets on their balance sheets.</li>
          <li><strong>Replacement Planning:</strong> Tracking depreciation can help businesses plan for the eventual replacement of their assets.</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">What is "Accumulated Depreciation"?</h4>
            <p>Accumulated depreciation is the total amount of depreciation that has been recorded for an asset since it was acquired.</p>
          </div>
          <div>
            <h4 className="font-bold">What is "Book Value"?</h4>
            <p>Book value is the original cost of an asset minus its accumulated depreciation. It represents the value of the asset as recorded on a business's balance sheet.</p>
          </div>
          <div>
            <h4 className="font-bold">Can I change the depreciation method for an asset?</h4>
            <p>Generally, businesses must use the same depreciation method for an asset throughout its useful life. However, there may be certain circumstances where a change is allowed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
