import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const RoundingCalculator: React.FC = () => {
  const [number, setNumber] = useState<number>(123.4567);
  const [precision, setPrecision] = useState<number>(2);
  const [rounded, setRounded] = useState<number>(0);

  useEffect(() => {
    const factor = Math.pow(10, precision);
    setRounded(Math.round(number * factor) / factor);
  }, [number, precision]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Rounding Calculator | Number Precision Tool 2026</title>
        <meta name="description" content="Round a number to the nearest decimal place or whole number. Find the rounded value of your number easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Rounding Calculator</h1>
        <p className="text-slate-600">Round a number to the nearest decimal place or whole number.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Enter Number</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Number</label>
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Precision (Decimal Places)</label>
              <input
                type="number"
                value={precision}
                onChange={(e) => setPrecision(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Rounded Number</p>
              <p className="text-4xl font-bold text-[#0066cc]">{rounded}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculator uses the standard rounding method (round half up).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Rounding?</h2>
        <p>
          Rounding is a process of simplifying a number while keeping its value close to what it was. It's often used to make numbers easier to work with or to communicate information more clearly.
        </p>
        <h3>How to Round a Number</h3>
        <p>
          To round a number to a certain decimal place, you look at the digit to the right of that place. If the digit is 5 or greater, you round up. If the digit is less than 5, you round down.
        </p>
        <h3>Why Rounding Matters</h3>
        <p>
          Rounding is a fundamental concept in mathematics and is used in a wide range of fields, including science, engineering, and finance. It provides a simple and effective way to manage and communicate complex information.
        </p>
      </div>
    </div>
  );
};
