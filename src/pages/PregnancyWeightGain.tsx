import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const PregnancyWeightGainCalculator: React.FC = () => {
  const [prePregnancyWeight, setPrePregnancyWeight] = useState<number>(60);
  const [height, setHeight] = useState<number>(165);
  const [currentWeek, setCurrentWeek] = useState<number>(20);
  const [twins, setTwins] = useState<boolean>(false);
  const [bmi, setBmi] = useState<number>(0);
  const [recommendedMin, setRecommendedMin] = useState<number>(0);
  const [recommendedMax, setRecommendedMax] = useState<number>(0);

  useEffect(() => {
    const calculatedBmi = prePregnancyWeight / Math.pow(height / 100, 2);
    setBmi(calculatedBmi);

    if (!twins) {
      if (calculatedBmi < 18.5) {
        setRecommendedMin(12.5);
        setRecommendedMax(18);
      } else if (calculatedBmi < 25) {
        setRecommendedMin(11.5);
        setRecommendedMax(16);
      } else if (calculatedBmi < 30) {
        setRecommendedMin(7);
        setRecommendedMax(11.5);
      } else {
        setRecommendedMin(5);
        setRecommendedMax(9);
      }
    } else {
      if (calculatedBmi < 18.5) {
        setRecommendedMin(22.5);
        setRecommendedMax(28);
      } else if (calculatedBmi < 25) {
        setRecommendedMin(17);
        setRecommendedMax(24.5);
      } else if (calculatedBmi < 30) {
        setRecommendedMin(14);
        setRecommendedMax(23);
      } else {
        setRecommendedMin(11);
        setRecommendedMax(19);
      }
    }
  }, [prePregnancyWeight, height, twins]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Pregnancy Weight Gain Calculator | Healthy Weight Tracker 2026</title>
        <meta name="description" content="Calculate your recommended pregnancy weight gain based on your pre-pregnancy BMI. Track your progress throughout each trimester for a healthy pregnancy." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Pregnancy Weight Gain Calculator</h1>
        <p className="text-slate-600">Track your recommended weight gain based on your pre-pregnancy BMI and current week.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Your Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Pre-pregnancy Weight (kg)</label>
              <input
                type="number"
                value={prePregnancyWeight}
                onChange={(e) => setPrePregnancyWeight(Number(e.target.value))}
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
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Current Week of Pregnancy</label>
              <input
                type="number"
                min="1"
                max="42"
                value={currentWeek}
                onChange={(e) => setCurrentWeek(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="twins"
                checked={twins}
                onChange={(e) => setTwins(e.target.checked)}
                className="w-4 h-4 text-[#0066cc] border-slate-300 rounded focus:ring-[#0066cc]"
              />
              <label htmlFor="twins" className="text-sm font-medium text-slate-700">Expecting Twins?</label>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Recommendations</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Pre-pregnancy BMI</p>
              <p className="text-2xl font-bold text-slate-900">{bmi.toFixed(1)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Recommended Weight Gain</p>
              <p className="text-3xl font-bold text-[#0066cc]">{recommendedMin} - {recommendedMax} kg</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: These are general guidelines from the Institute of Medicine (IOM). Always consult with your healthcare provider for personalized advice.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Pregnancy Weight Gain</h2>
        <p>
          Weight gain during pregnancy is a natural and necessary part of supporting your growing baby. The amount of weight you should gain depends largely on your Body Mass Index (BMI) before you became pregnant. Our <strong>pregnancy weight gain calculator 2026</strong> uses guidelines from the Institute of Medicine (IOM) to help you track your progress.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Weight Gain Matters</h3>
        <p>
          Gaining the right amount of weight helps reduce the risk of complications for both you and your baby. Gaining too little can lead to low birth weight or premature birth, while gaining too much can increase the risk of gestational diabetes, preeclampsia, and the need for a C-section.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Where Does the Weight Go?</h3>
        <p>
          It's not just fat! The weight you gain is distributed among several areas:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <li><strong>Baby:</strong> ~3.5 kg</li>
          <li><strong>Placenta:</strong> ~0.7 kg</li>
          <li><strong>Amniotic Fluid:</strong> ~0.9 kg</li>
          <li><strong>Uterus Growth:</strong> ~0.9 kg</li>
          <li><strong>Breast Tissue:</strong> ~0.9 kg</li>
          <li><strong>Blood Volume:</strong> ~1.8 kg</li>
          <li><strong>Fluid in Tissue:</strong> ~1.8 kg</li>
          <li><strong>Fat Stores:</strong> ~3 kg</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">When do you gain the most weight during pregnancy?</p>
            <p>Most women gain the majority of their pregnancy weight during the second and third trimesters. In the first trimester, weight gain is typically minimal (1-2 kg total) as the baby is still very small.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Is it normal to lose weight in the first trimester?</p>
            <p>Some women may lose a small amount of weight due to morning sickness or changes in appetite. However, you should always consult your doctor if you are concerned about weight loss during pregnancy.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How many extra calories do I need?</p>
            <p>On average, pregnant women need about 340 extra calories per day in the second trimester and about 450 extra calories per day in the third trimester. This is roughly equivalent to a small snack or a glass of milk and a piece of fruit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
