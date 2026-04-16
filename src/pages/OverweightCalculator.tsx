import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const OverweightCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(90);
  const [height, setHeight] = useState<number>(175);
  const [bmi, setBmi] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [weightToLose, setWeightToLose] = useState<number>(0);

  useEffect(() => {
    const calculatedBmi = weight / Math.pow(height / 100, 2);
    setBmi(calculatedBmi);

    if (calculatedBmi < 18.5) {
      setCategory('Underweight');
      setWeightToLose(0);
    } else if (calculatedBmi < 25) {
      setCategory('Normal (Healthy Weight)');
      setWeightToLose(0);
    } else if (calculatedBmi < 30) {
      setCategory('Overweight');
      setWeightToLose(weight - (24.9 * Math.pow(height / 100, 2)));
    } else {
      setCategory('Obese');
      setWeightToLose(weight - (24.9 * Math.pow(height / 100, 2)));
    }
  }, [weight, height]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Overweight Calculator | Weight Loss Tracker 2026</title>
        <meta name="description" content="Calculate your BMI and identify if you are in the overweight category. Discover how much weight you need to lose to reach a healthy BMI range." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Overweight Calculator</h1>
        <p className="text-slate-600">Calculate your Body Mass Index (BMI) and discover your healthy weight goals.</p>
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
              <p className={`text-xl font-semibold ${bmi >= 25 ? 'text-red-600' : 'text-slate-900'}`}>{category}</p>
            </div>
            {weightToLose > 0 && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700 font-medium">
                  To reach a healthy BMI (24.9), you would need to lose approximately {weightToLose.toFixed(1)} kg.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>Understanding BMI and Overweight Risks</h2>
        <p>
          Body Mass Index (BMI) is a simple measure of your body fat based on your weight and height. While it's not a direct measure of body fat, it's a useful tool for identifying potential health risks.
        </p>
        <h3>Risks of Being Overweight</h3>
        <p>
          Being overweight can lead to several health complications, including:
        </p>
        <ul>
          <li>Heart disease and stroke.</li>
          <li>Type 2 diabetes and insulin resistance.</li>
          <li>High blood pressure and cholesterol levels.</li>
          <li>Certain types of cancer, such as breast and colon cancer.</li>
          <li>Sleep apnea and respiratory issues.</li>
          <li>Osteoarthritis and joint pain.</li>
        </ul>
        <h3>When to Seek Help</h3>
        <p>
          If you have a BMI above 25 or if you're concerned about your weight or health, it's important to talk to a healthcare professional. They can help you identify the underlying cause and develop a plan for healthy weight management.
        </p>
        <h3>Tips for Healthy Weight Management</h3>
        <ul>
          <li>Eat a balanced diet rich in fruits, vegetables, whole grains, and lean protein.</li>
          <li>Engage in regular physical activity, aiming for at least 150 minutes of moderate-intensity exercise per week.</li>
          <li>Get enough sleep and manage your stress levels.</li>
          <li>Monitor your weight and track your progress over time.</li>
          <li>Talk to your doctor or a registered dietitian for personalized support.</li>
        </ul>
      </div>
    </div>
  );
};
