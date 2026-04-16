import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const HeightCalculator: React.FC = () => {
  const [fatherHeight, setFatherHeight] = useState<number>(175);
  const [motherHeight, setMotherHeight] = useState<number>(165);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [predictedHeight, setPredictedHeight] = useState<number>(0);

  useEffect(() => {
    // Mid-parental height formula
    if (gender === 'male') {
      setPredictedHeight((fatherHeight + motherHeight + 13) / 2);
    } else {
      setPredictedHeight((fatherHeight + motherHeight - 13) / 2);
    }
  }, [fatherHeight, motherHeight, gender]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Height Calculator | Child Height Prediction Tool 2026</title>
        <meta name="description" content="Predict a child's adult height based on the heights of their parents. Find the estimated height of your child easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Height Calculator</h1>
        <p className="text-slate-600">Predict a child's adult height based on the heights of their parents.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Parent Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Father's Height (cm)</label>
              <input
                type="number"
                value={fatherHeight}
                onChange={(e) => setFatherHeight(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mother's Height (cm)</label>
              <input
                type="number"
                value={motherHeight}
                onChange={(e) => setMotherHeight(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Child's Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as any)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Predicted Adult Height</p>
              <p className="text-4xl font-bold text-[#0066cc]">{predictedHeight.toFixed(1)} cm</p>
              <p className="text-lg font-semibold text-slate-900">{(predictedHeight / 2.54 / 12).toFixed(0)}' {((predictedHeight / 2.54) % 12).toFixed(1)}"</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation uses the mid-parental height formula, which provides an estimate based on genetics.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a Height Calculator?</h2>
        <p>
          A height calculator is a tool for predicting a child's adult height based on the heights of their parents. It's a useful tool for quantifying the uncertainty of an estimate and identifying the range of values for a data set.
        </p>
        <h3>How to Use a Height Calculator</h3>
        <p>
          To use a height calculator, you simply enter the heights of the parents and the gender of the child. The calculator will then perform the calculation and display the predicted adult height.
        </p>
        <h3>Why Height Calculators Matter</h3>
        <p>
          Height calculators are critical for analyzing and interpreting data in a wide range of fields, including genetics, science, and medicine. They provide a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
