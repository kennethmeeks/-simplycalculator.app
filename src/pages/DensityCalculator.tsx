import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const DensityCalculator: React.FC = () => {
  const [mass, setMass] = useState<number>(100);
  const [volume, setVolume] = useState<number>(50);
  const [density, setDensity] = useState<number>(0);

  useEffect(() => {
    setDensity(mass / volume);
  }, [mass, volume]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Density Calculator | Mass and Volume Tool 2026</title>
        <meta name="description" content="Calculate the density of an object based on its mass and volume. Find the physical properties of your object easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Density Calculator</h1>
        <p className="text-slate-600">Calculate the density of an object based on its mass and volume.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Object Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mass (g)</label>
              <input
                type="number"
                value={mass}
                onChange={(e) => setMass(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Volume (cm³)</label>
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
              <p className="text-sm text-slate-500 mb-1">Density (ρ)</p>
              <p className="text-4xl font-bold text-[#0066cc]">{density.toFixed(4)} g/cm³</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: Density is defined as mass per unit volume.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Density?</h2>
        <p>
          Density is a measure of how much mass is contained in a given volume. It's a fundamental physical property of matter and is used in a wide range of fields, including physics, chemistry, and engineering.
        </p>
        <h3>The Formula</h3>
        <p>
          The formula for density is: ρ = m / V, where ρ is density, m is mass, and V is volume.
        </p>
        <h3>Why Density Matters</h3>
        <p>
          Density is critical for analyzing and interpreting data in a wide range of fields, including science, engineering, and manufacturing. It provides a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
