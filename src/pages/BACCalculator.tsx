import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const BACCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(70);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [drinks, setDrinks] = useState<number>(2);
  const [hours, setHours] = useState<number>(2);
  const [bac, setBac] = useState<number>(0);

  useEffect(() => {
    // Widmark Formula
    const r = gender === 'male' ? 0.68 : 0.55;
    const alcoholGrams = drinks * 14; // Standard drink = 14g alcohol
    const calculatedBac = (alcoholGrams / (weight * 1000 * r)) * 100 - (hours * 0.015);
    setBac(Math.max(0, calculatedBac));
  }, [weight, gender, drinks, hours]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>BAC Calculator | Blood Alcohol Content Test 2026</title>
        <meta name="description" content="Calculate your estimated Blood Alcohol Content (BAC) based on your weight, gender, and alcohol consumption. Stay safe and informed about your alcohol levels." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">BAC Calculator</h1>
        <p className="text-slate-600">Calculate your estimated Blood Alcohol Content (BAC) based on your consumption.</p>
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
              <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Number of Drinks</label>
              <input
                type="number"
                value={drinks}
                onChange={(e) => setDrinks(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Hours Since First Drink</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Your Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated BAC</p>
              <p className="text-4xl font-bold text-[#0066cc]">{bac.toFixed(3)} %</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This is an estimate. Individual factors like metabolism and food intake are not considered. Never drink and drive.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Blood Alcohol Content (BAC)?</h2>
        <p>
          Blood Alcohol Content (BAC) is a measure of the amount of alcohol in your bloodstream. It's often used by law enforcement to determine if a person is legally impaired while driving.
        </p>
        <h3>How BAC is Calculated</h3>
        <p>
          The most common way to calculate BAC is by using the Widmark formula, which is based on your weight, gender, and the amount of alcohol you've consumed. Other factors, such as the time since your first drink, also play a role.
        </p>
        <h3>Why BAC Matters</h3>
        <p>
          BAC is a critical measure of impairment, as it affects your reaction time, coordination, and judgment. It's important to understand your BAC and to make safe choices when consuming alcohol.
        </p>
        <h3>Tips for Staying Safe</h3>
        <ul>
          <li>Never drink and drive. Always have a designated driver or use a ride-sharing service.</li>
          <li>Drink in moderation and pace yourself.</li>
          <li>Eat a meal before and while consuming alcohol.</li>
          <li>Stay hydrated by drinking plenty of water.</li>
          <li>Know your limits and listen to your body.</li>
        </ul>
      </div>
    </div>
  );
};
