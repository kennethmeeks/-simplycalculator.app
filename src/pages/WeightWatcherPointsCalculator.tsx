import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const WeightWatcherPointsCalculator: React.FC = () => {
  const [calories, setCalories] = useState<number>(200);
  const [fat, setFat] = useState<number>(5);
  const [fiber, setFiber] = useState<number>(2);
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    // Classic Points Formula
    const calculatedPoints = (calories / 50) + (fat / 12) - (Math.min(fiber, 4) / 5);
    setPoints(Math.max(0, Math.round(calculatedPoints)));
  }, [calories, fat, fiber]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Weight Watcher Points Calculator | Points Tracker 2026</title>
        <meta name="description" content="Calculate your Weight Watcher points based on calories, fat, and fiber content. Track your points for better weight management and health." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Weight Watcher Points Calculator</h1>
        <p className="text-slate-600">Calculate your estimated Weight Watcher points based on nutritional information.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Nutritional Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Calories (kcal)</label>
              <input
                type="number"
                value={calories}
                onChange={(e) => setCalories(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Total Fat (g)</label>
              <input
                type="number"
                value={fat}
                onChange={(e) => setFat(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Dietary Fiber (g)</label>
              <input
                type="number"
                value={fiber}
                onChange={(e) => setFiber(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Your Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Points</p>
              <p className="text-4xl font-bold text-[#0066cc]">{points}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This is an estimate based on the classic formula. Weight Watchers has updated their system several times.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What are Weight Watcher Points?</h2>
        <p>
          Weight Watcher points are a measure of the nutritional value of a food item. They're often used by members of the Weight Watchers program to track their daily food intake and manage their weight.
        </p>
        <h3>How Points are Calculated</h3>
        <p>
          The most common way to calculate points is by using the classic formula, which is based on the calories, fat, and fiber content of a food item. Other formulas, such as the PointsPlus and SmartPoints formulas, are also used in certain situations.
        </p>
        <h3>Why Points Matter</h3>
        <p>
          Points are a simple and effective way to track your food intake and make better choices for your health. They're particularly useful for people who are looking to lose weight or maintain a healthy weight.
        </p>
        <h3>Tips for Using Points</h3>
        <ul>
          <li>Focus on healthy, nutrient-dense foods that are low in points.</li>
          <li>Track your points daily and stay within your recommended range.</li>
          <li>Engage in regular physical activity to earn extra points.</li>
          <li>Get enough sleep and manage your stress levels.</li>
          <li>Talk to a professional if you have any concerns about your points or weight.</li>
        </ul>
      </div>
    </div>
  );
};
