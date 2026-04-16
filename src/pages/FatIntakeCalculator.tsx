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
        <h2>The Role of Fats in Your Diet</h2>
        <p>
          Fats are an essential part of a healthy diet, providing energy, supporting cell growth, and helping your body absorb certain vitamins. They are found in a wide variety of foods, including nuts, seeds, avocados, and oils.
        </p>
        <h3>How Much Fat Do You Need?</h3>
        <p>
          The Dietary Guidelines for Americans recommend that fats make up 20% to 35% of your total daily calorie intake. For someone on a 2,000-calorie diet, this translates to about 44 to 78 grams of fat per day.
        </p>
        <h3>Types of Fats</h3>
        <p>
          Not all fats are created equal. It's important to focus on healthy, unsaturated fats, which are found in nuts, seeds, and avocados, as they can help lower your risk of heart disease. Saturated and trans fats, which are found in processed snacks and fried foods, should be limited.
        </p>
        <h3>Fats and Weight Management</h3>
        <p>
          While fats are high in calories, they are still an essential part of a balanced diet. The key is to choose high-quality, nutrient-dense sources and to manage your overall calorie intake.
        </p>
      </div>
    </div>
  );
};
