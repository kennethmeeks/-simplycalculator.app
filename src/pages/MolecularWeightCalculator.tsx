import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const MolecularWeightCalculator: React.FC = () => {
  const [formula, setFormula] = useState<string>('H2O');
  const [weight, setWeight] = useState<number>(18.015);

  const atomicWeights: { [key: string]: number } = {
    'H': 1.008, 'He': 4.0026, 'Li': 6.94, 'Be': 9.0122, 'B': 10.81, 'C': 12.011, 'N': 14.007, 'O': 15.999, 'F': 18.998, 'Ne': 20.180,
    'Na': 22.990, 'Mg': 24.305, 'Al': 26.982, 'Si': 28.085, 'P': 30.974, 'S': 32.06, 'Cl': 35.45, 'Ar': 39.948, 'K': 39.098, 'Ca': 40.078
  };

  const calculateWeight = () => {
    let total = 0;
    const regex = /([A-Z][a-z]*)(\d*)/g;
    let match;
    while ((match = regex.exec(formula)) !== null) {
      const element = match[1];
      const count = match[2] ? parseInt(match[2]) : 1;
      if (atomicWeights[element]) {
        total += atomicWeights[element] * count;
      }
    }
    setWeight(total);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Molecular Weight Calculator | Chemical Formula Tool 2026</title>
        <meta name="description" content="Calculate the molecular weight of a chemical formula based on the atomic weights of its elements. Find the chemical properties of your formula easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Molecular Weight Calculator</h1>
        <p className="text-slate-600">Calculate the molecular weight of a chemical formula.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Formula Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Chemical Formula (e.g., H2O, NaCl)</label>
              <input
                type="text"
                value={formula}
                onChange={(e) => setFormula(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none font-mono"
              />
            </div>
            <button
              onClick={calculateWeight}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-semibold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Weight
            </button>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Molecular Weight</p>
              <p className="text-4xl font-bold text-[#0066cc]">{weight.toFixed(3)} g/mol</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculator uses standard atomic weights for common elements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Molecular Weight?</h2>
        <p>
          Molecular weight is a measure of the sum of the atomic weights of all the atoms in a molecule. It's a fundamental chemical property of matter and is used in a wide range of fields, including chemistry, biology, and medicine.
        </p>
        <h3>How to Calculate Molecular Weight</h3>
        <p>
          To calculate molecular weight, you simply sum the atomic weights of all the atoms in the chemical formula. For example, the molecular weight of H2O is (2 * 1.008) + 15.999 = 18.015 g/mol.
        </p>
        <h3>Why Molecular Weight Matters</h3>
        <p>
          Molecular weight is critical for analyzing and interpreting data in a wide range of fields, including science, medicine, and manufacturing. It provides a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
