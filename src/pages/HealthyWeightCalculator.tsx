import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const HealthyWeightCalculator: React.FC = () => {
  const [height, setHeight] = useState<number>(175);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [idealMin, setIdealMin] = useState<number>(0);
  const [idealMax, setIdealMax] = useState<number>(0);

  useEffect(() => {
    // Based on BMI 18.5 to 24.9
    const min = 18.5 * Math.pow(height / 100, 2);
    const max = 24.9 * Math.pow(height / 100, 2);
    setIdealMin(min);
    setIdealMax(max);
  }, [height]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Healthy Weight Calculator | Ideal Body Weight 2026</title>
        <meta name="description" content="Calculate your healthy weight range based on your height and gender. Discover your ideal body weight for optimal health and wellness." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Healthy Weight Calculator</h1>
        <p className="text-slate-600">Find your recommended healthy weight range based on your height.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Your Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
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
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Your Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Healthy Weight Range</p>
              <p className="text-4xl font-bold text-[#0066cc]">{idealMin.toFixed(1)} - {idealMax.toFixed(1)} kg</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This range is based on a BMI of 18.5 to 24.9. Individual factors like muscle mass are not considered.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">What is a Healthy Weight?</h2>
        <p>
          A healthy weight is a weight that is appropriate for your height and body type. It's not just about how you look, but about your overall health and well-being. Our <strong>healthy weight calculator 2026</strong> provides a target range using the standard Body Mass Index (BMI) of 18.5 to 24.9.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How Healthy Weight is Calculated</h3>
        <p>
          The most common way to determine a healthy weight range is by using the Body Mass Index (BMI). A BMI between 18.5 and 24.9 is generally considered to be in the healthy range for most adults. While BMI doesn't account for muscle mass or bone density, it is a reliable starting point for the general population.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Is BMI accurate for athletes?</p>
            <p>BMI often categorizes athletes with high muscle mass as "overweight" because muscle is denser than fat. If you are very muscular, you may want to focus on body fat percentage or waist-to-hip ratio instead of just BMI.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What if I am outside the range?</p>
            <p>Being slightly above or below the range doesn't necessarily mean you are unhealthy. It's best to discuss your specific body composition and health markers (like blood pressure and cholesterol) with a healthcare professional.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does age affect healthy weight?</p>
            <p>Yes. As we age, our muscle mass tends to decrease and body fat tends to increase. Some research suggests that a slightly higher BMI (around 25-27) may actually be healthier for older adults (65+).</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Practical Tips for Weight Management</h3>
        <ul className="space-y-2">
          <li><strong>Balanced Nutrition:</strong> Focus on whole, unprocessed foods like vegetables, lean proteins, and healthy fats.</li>
          <li><strong>Regular Movement:</strong> Aim for a mix of cardiovascular exercise and strength training to maintain muscle mass.</li>
          <li><strong>Consistency:</strong> Focus on sustainable lifestyle changes rather than "crash diets" that are hard to maintain.</li>
        </ul>
      </div>
    </div>
  );
};
