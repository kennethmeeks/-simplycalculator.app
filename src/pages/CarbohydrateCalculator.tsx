import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const CarbohydrateCalculator: React.FC = () => {
  const [calories, setCalories] = useState<number>(2000);
  const [carbPercentage, setCarbPercentage] = useState<number>(50);
  const [carbGrams, setCarbGrams] = useState<number>(0);

  useEffect(() => {
    // 1 gram of carbs = 4 calories
    const grams = (calories * (carbPercentage / 100)) / 4;
    setCarbGrams(grams);
  }, [calories, carbPercentage]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Carbohydrate Calculator | Daily Carb Intake 2026</title>
        <meta name="description" content="Calculate your daily carbohydrate needs in grams based on your total calorie intake and desired percentage. Plan your diet for weight loss or muscle gain." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Carbohydrate Calculator</h1>
        <p className="text-slate-600">Calculate your daily carbohydrate needs in grams based on your total calorie intake.</p>
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
              <label className="block text-sm font-medium text-slate-700 mb-1">Carbohydrate Percentage (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={carbPercentage}
                onChange={(e) => setCarbPercentage(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Your Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Daily Carbohydrate Intake</p>
              <p className="text-4xl font-bold text-[#0066cc]">{carbGrams.toFixed(1)} g</p>
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
        <h2>The Role of Carbohydrates in Your Diet</h2>
        <p>
          Carbohydrates are the body's primary source of energy, providing fuel for your brain, muscles, and organs. They are found in a wide variety of foods, including fruits, vegetables, grains, and dairy products.
        </p>
        <h3>How Many Carbs Do You Need?</h3>
        <p>
          The Dietary Guidelines for Americans recommend that carbohydrates make up 45% to 65% of your total daily calorie intake. For someone on a 2,000-calorie diet, this translates to about 225 to 325 grams of carbs per day.
        </p>
        <h3>Types of Carbohydrates</h3>
        <p>
          Not all carbs are created equal. It's important to focus on complex carbohydrates, which are found in whole grains, beans, and vegetables, as they provide more fiber and nutrients than simple carbohydrates found in sugary drinks and processed snacks.
        </p>
        <h3>Carbs and Weight Management</h3>
        <p>
          While low-carb diets are popular for weight loss, carbohydrates are still an essential part of a balanced diet. The key is to choose high-quality, nutrient-dense sources and to manage your overall calorie intake.
        </p>
      </div>
    </div>
  );
};
