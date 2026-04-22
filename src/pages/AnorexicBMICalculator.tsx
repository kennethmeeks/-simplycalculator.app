import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const AnorexicBMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(50);
  const [height, setHeight] = useState<number>(170);
  const [bmi, setBmi] = useState<number>(0);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    const calculatedBmi = weight / Math.pow(height / 100, 2);
    setBmi(calculatedBmi);

    if (calculatedBmi < 15) {
      setCategory('Very Severely Underweight');
    } else if (calculatedBmi < 16) {
      setCategory('Severely Underweight');
    } else if (calculatedBmi < 18.5) {
      setCategory('Underweight');
    } else if (calculatedBmi < 25) {
      setCategory('Normal (Healthy Weight)');
    } else {
      setCategory('Overweight');
    }
  }, [weight, height]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Anorexic BMI Calculator | Underweight BMI Test 2026</title>
        <meta name="description" content="Calculate your BMI and identify if you are in the underweight category. Understand the risks associated with low BMI and find resources for support." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Anorexic BMI Calculator</h1>
        <p className="text-slate-600">Calculate your Body Mass Index (BMI) and identify potential health risks.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Your Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Your Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Your BMI</p>
              <p className="text-4xl font-bold text-[#0066cc]">{bmi.toFixed(1)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Category</p>
              <p className={`text-xl font-semibold ${bmi < 18.5 ? 'text-red-600' : 'text-slate-900'}`}>{category}</p>
            </div>
            {bmi < 18.5 && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700 font-medium">
                  Warning: A BMI below 18.5 is considered underweight and may be associated with health risks. Please consult with a healthcare professional.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Anorexic BMI Calculator" 
        path="/anorexic-bmi-calculator" 
        description="A specialized tool to identify severe underweight categories and understand associated health risks and support resources."
      />
    </div>
  );
};
