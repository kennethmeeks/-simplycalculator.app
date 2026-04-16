import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const WeightCalculator: React.FC = () => {
  const [mass, setMass] = useState<number>(70);
  const [gravity, setGravity] = useState<number>(9.81);
  const [weight, setWeight] = useState<number>(0);

  useEffect(() => {
    setWeight(mass * gravity);
  }, [mass, gravity]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Weight Calculator | Mass and Gravity Tool 2026</title>
        <meta name="description" content="Calculate the weight of an object based on its mass and gravity. Find the physical properties of your object easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Weight Calculator</h1>
        <p className="text-slate-600">Calculate the weight of an object based on its mass and gravity.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Object Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mass (kg)</label>
              <input
                type="number"
                value={mass}
                onChange={(e) => setMass(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Gravity (m/s²)</label>
              <input
                type="number"
                step="0.01"
                value={gravity}
                onChange={(e) => setGravity(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Weight (W)</p>
              <p className="text-4xl font-bold text-[#0066cc]">{weight.toFixed(2)} N</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: Weight is defined as mass multiplied by gravity.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Weight?</h2>
        <p>
          Weight is a measure of the force of gravity on an object. It's a fundamental physical property of matter and is used in a wide range of fields, including physics, engineering, and science.
        </p>
        <h3>The Formula</h3>
        <p>
          The formula for weight is: W = m * g, where W is weight, m is mass, and g is gravity.
        </p>
        <h3>Why Weight Matters</h3>
        <p>
          Weight is critical for analyzing and interpreting data in a wide range of fields, including science, engineering, and manufacturing. It provides a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
