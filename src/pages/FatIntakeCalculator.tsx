import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const FatIntakeCalculator: React.FC = () => {
  const [calories, setCalories] = useState<number>(2000);
  const [fatPercentage, setFatPercentage] = useState<number>(30);
  const [fatGrams, setFatGrams] = useState<number>(0);

  useEffect(() => {
    // 1 gram of fat = 9 calories
    const grams = (calories * (fatPercentage / 100)) / 9;
    setFatGrams(grams);
  }, [calories, fatPercentage]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Fat Intake Calculator | Daily Fat Needs 2026</title>
        <meta name="description" content="Calculate your daily fat intake in grams based on your total calorie intake and desired percentage. Plan your diet for weight loss or muscle gain." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Fat Intake Calculator</h1>
        <p className="text-slate-600">Calculate your daily fat needs in grams based on your total calorie intake.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Your Daily Goals</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Daily Calories (kcal)</label>
              <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Fat Percentage (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={fatPercentage}
                onChange={(e) => setFatPercentage(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Your Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Daily Fat Intake</p>
              <p className="text-4xl font-bold text-[#0066cc]">{fatGrams.toFixed(1)} g</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: These are general guidelines. Individual needs may vary based on activity level and health goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Role of Fats in Your Diet</h2>
        <p>
          Fats are an essential part of a healthy diet, providing energy, supporting cell growth, and helping your body absorb certain vitamins. Our <strong>fat intake calculator 2026</strong> helps you determine exactly how many grams of fat you should consume to stay within your desired macronutrient range.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How Much Fat Do You Need?</h3>
        <p>
          The Dietary Guidelines for Americans recommend that fats make up 20% to 35% of your total daily calorie intake. For someone on a 2,000-calorie diet, this translates to about 44 to 78 grams of fat per day. 
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Will eating fat make me fat?</p>
            <p>Body fat gain is primarily caused by an overall calorie surplus, not just the intake of dietary fat. In fact, healthy fats help with satiety and hormonal balance, which can actually assist in weight management.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What are the "best" sources of healthy fat?</p>
            <p>Monounsaturated and polyunsaturated fats are considered the healthiest. Great sources include avocados, extra virgin olive oil, nuts (like walnuts and almonds), seeds (chia and flax), and fatty fish like salmon.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How many calories are in a gram of fat?</p>
            <p>Fat is more energy-dense than other macronutrients. Every gram of fat contains exactly 9 calories, whereas protein and carbohydrates contain only 4 calories per gram.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Types of Fats and Their Impact</h3>
        <p>
          Focus on replacing saturated fats (found in fatty meats and butter) and trans fats (found in processed snacks) with unsaturated fats. This simple shift can help lower LDL (bad) cholesterol and improve your overall cardiovascular health profile in 2026.
        </p>
      </div>
    </div>
  );
};
