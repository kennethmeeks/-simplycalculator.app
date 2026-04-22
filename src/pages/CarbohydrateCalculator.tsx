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
        <h2 className="text-2xl font-bold text-slate-900">The Role of Carbohydrates in Your Diet</h2>
        <p>
          Carbohydrates are the body's primary source of energy, providing fuel for your brain, muscles, and organs. Our <strong>carb calculator 2026</strong> helps you determine the precise amount of grams you need to meet your specific macronutrient goals.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How Many Carbs Do You Need?</h3>
        <p>
          The Dietary Guidelines for Americans recommend that carbohydrates make up 45% to 65% of your total daily calorie intake. For someone on a 2,000-calorie diet, this translates to about 225 to 325 grams of carbs per day. 
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Are low carb diets better for weight loss?</p>
            <p>Low carb diets can be effective for weight loss, but the most important factor is a consistent calorie deficit. Many people find success with moderate carb intakes (40-50%) combined with high fiber and protein.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the difference between simple and complex carbs?</p>
            <p>Simple carbs (sugars) are digested quickly and provide immediate energy but can lead to blood sugar spikes. Complex carbs (starches and fiber) are digested more slowly, providing sustained energy and better satiety.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How many calories are in a gram of carbs?</p>
            <p>Every gram of carbohydrate contains exactly 4 calories. This is the same as protein, while fat contains 9 calories per gram.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Carbs and Weight Management</h3>
        <p>
          While carbohydrates are often blamed for weight gain, they are an essential part of a balanced diet. The key is to choose high-quality, nutrient-dense sources like vegetables, fruits, and whole grains, rather than refined sugars and processed snacks.
        </p>
      </div>
    </div>
  );
};
