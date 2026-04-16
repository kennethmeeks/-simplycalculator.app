import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const GDPCalculator: React.FC = () => {
  const [consumption, setConsumption] = useState<number>(1000);
  const [investment, setInvestment] = useState<number>(500);
  const [government, setGovernment] = useState<number>(400);
  const [exports, setExports] = useState<number>(200);
  const [imports, setImports] = useState<number>(150);
  const [gdp, setGdp] = useState<number>(0);

  useEffect(() => {
    setGdp(consumption + investment + government + (exports - imports));
  }, [consumption, investment, government, exports, imports]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>GDP Calculator | Economic Growth Tool 2026</title>
        <meta name="description" content="Calculate the Gross Domestic Product (GDP) of an economy using the expenditure approach. Find the economic growth of your country easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">GDP Calculator</h1>
        <p className="text-slate-600">Calculate the Gross Domestic Product (GDP) using the expenditure approach.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Economic Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Consumption (C)</label>
              <input
                type="number"
                value={consumption}
                onChange={(e) => setConsumption(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Investment (I)</label>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Government Spending (G)</label>
              <input
                type="number"
                value={government}
                onChange={(e) => setGovernment(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Exports (X)</label>
                <input
                  type="number"
                  value={exports}
                  onChange={(e) => setExports(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Imports (M)</label>
                <input
                  type="number"
                  value={imports}
                  onChange={(e) => setImports(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Gross Domestic Product (GDP)</p>
              <p className="text-4xl font-bold text-[#0066cc]">{gdp.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Net Exports (X - M)</p>
              <p className="text-2xl font-bold text-slate-900">{(exports - imports).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is GDP?</h2>
        <p>
          Gross Domestic Product (GDP) is the total value of all goods and services produced in an economy over a certain period of time. It's a useful tool for quantifying the economic growth of a country and identifying the range of values for a data set.
        </p>
        <h3>The Expenditure Approach</h3>
        <p>
          The expenditure approach calculates GDP by summing the total spending on all final goods and services produced in an economy. The formula is: GDP = C + I + G + (X - M).
        </p>
        <h3>Why GDP Matters</h3>
        <p>
          GDP is critical for analyzing and interpreting data in a wide range of fields, including economics, finance, and business. It provides a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
