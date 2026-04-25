import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


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
              <ResultActions 
                onReset={() => {
                  setWeight(70);
                  setGender('male');
                  setDrinks(2);
                  setHours(2);
                }}
                onCopy={() => {
                  const text = `Estimated BAC: ${bac.toFixed(3)}%\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
              />
              <p className="text-xs text-slate-500 italic mt-4">
                Note: This is an estimate. Individual factors like metabolism and food intake are not considered. Never drink and drive.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="BAC Calculator" 
        path="/bac-calculator" 
        description="Estimate your Blood Alcohol Content (BAC) based on weight, gender, and consumption. Understand impairment levels and impairment factors for safety in 2026."
      />
    </div>
  );
};
