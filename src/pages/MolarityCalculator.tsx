import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const MolarityCalculator: React.FC = () => {
  const [moles, setMoles] = useState<number>(1);
  const [volume, setVolume] = useState<number>(1);
  const [molarity, setMolarity] = useState<number>(0);

  useEffect(() => {
    setMolarity(moles / volume);
  }, [moles, volume]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Molarity Calculator | Solution Concentration Tool 2026</title>
        <meta name="description" content="Calculate the molarity of a solution based on the number of moles and the volume. Find the chemical properties of your solution easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Molarity Calculator</h1>
        <p className="text-slate-600">Calculate the molarity of a solution based on the number of moles and the volume.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Solution Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Moles of Solute (mol)</label>
              <input
                type="number"
                value={moles}
                onChange={(e) => setMoles(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Volume of Solution (L)</label>
              <input
                type="number"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Molarity (M)</p>
              <p className="text-4xl font-bold text-[#0066cc]">{molarity.toFixed(4)} mol/L</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: Molarity is defined as moles of solute per liter of solution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Molarity?</h2>
        <p>
          Molarity is a measure of the concentration of a solute in a solution. It's a fundamental chemical property of matter and is used in a wide range of fields, including chemistry, biology, and medicine.
        </p>
        <h3>The Formula</h3>
        <p>
          The formula for molarity is: M = n / V, where M is molarity, n is moles of solute, and V is volume of solution.
        </p>
        <h3>Why Molarity Matters</h3>
        <p>
          Molarity is critical for analyzing and interpreting data in a wide range of fields, including science, medicine, and manufacturing. It provides a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
