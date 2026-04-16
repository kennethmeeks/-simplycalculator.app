import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Activity, Utensils, Info } from 'lucide-react';

export const MacroCalculator: React.FC = () => {
  const [calories, setCalories] = useState(2000);
  const [goal, setGoal] = useState<'maintenance' | 'cutting' | 'bulking'>('maintenance');
  
  const [protein, setProtein] = useState({ grams: 0, calories: 0, percent: 30 });
  const [carbs, setCarbs] = useState({ grams: 0, calories: 0, percent: 40 });
  const [fat, setFat] = useState({ grams: 0, calories: 0, percent: 30 });

  useEffect(() => {
    let pPerc = 30;
    let cPerc = 40;
    let fPerc = 30;

    if (goal === 'cutting') {
      pPerc = 40;
      cPerc = 30;
      fPerc = 30;
    } else if (goal === 'bulking') {
      pPerc = 25;
      cPerc = 50;
      fPerc = 25;
    }

    const pCals = calories * (pPerc / 100);
    const cCals = calories * (cPerc / 100);
    const fCals = calories * (fPerc / 100);

    setProtein({ grams: Math.round(pCals / 4), calories: Math.round(pCals), percent: pPerc });
    setCarbs({ grams: Math.round(cCals / 4), calories: Math.round(cCals), percent: cPerc });
    setFat({ grams: Math.round(fCals / 9), calories: Math.round(fCals), percent: fPerc });
  }, [calories, goal]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Macro Calculator | Calculate Protein, Carbs & Fat Ratios</title>
        <meta name="description" content="Free online macro calculator to determine your ideal macronutrient ratios for weight loss, muscle gain, or maintenance in 2026." />
      </Helmet>

      <h1>Macro Calculator</h1>
      <p>Determine your ideal daily intake of protein, carbohydrates, and fats based on your calorie goals and fitness objectives.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Your Goals</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Daily Calorie Target</label>
              <input 
                type="number" 
                value={calories} 
                onChange={(e) => setCalories(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Fitness Goal</label>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => setGoal('cutting')}
                  className={`py-2 text-xs rounded border font-bold transition-colors ${goal === 'cutting' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#0066cc]'}`}
                >
                  Cutting
                </button>
                <button 
                  onClick={() => setGoal('maintenance')}
                  className={`py-2 text-xs rounded border font-bold transition-colors ${goal === 'maintenance' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#0066cc]'}`}
                >
                  Maintain
                </button>
                <button 
                  onClick={() => setGoal('bulking')}
                  className={`py-2 text-xs rounded border font-bold transition-colors ${goal === 'bulking' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#0066cc]'}`}
                >
                  Bulking
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Daily Macro Split</div>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded border border-blue-100 flex justify-between items-center">
                <div>
                  <div className="text-xs text-blue-600 font-bold uppercase">Protein ({protein.percent}%)</div>
                  <div className="text-2xl font-bold text-slate-800">{protein.grams}g</div>
                </div>
                <div className="text-sm text-slate-500">{protein.calories} kcal</div>
              </div>
              <div className="p-4 bg-green-50 rounded border border-green-100 flex justify-between items-center">
                <div>
                  <div className="text-xs text-green-600 font-bold uppercase">Carbs ({carbs.percent}%)</div>
                  <div className="text-2xl font-bold text-slate-800">{carbs.grams}g</div>
                </div>
                <div className="text-sm text-slate-500">{carbs.calories} kcal</div>
              </div>
              <div className="p-4 bg-orange-50 rounded border border-orange-100 flex justify-between items-center">
                <div>
                  <div className="text-xs text-orange-600 font-bold uppercase">Fats ({fat.percent}%)</div>
                  <div className="text-2xl font-bold text-slate-800">{fat.grams}g</div>
                </div>
                <div className="text-sm text-slate-500">{fat.calories} kcal</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Mastering Your Macros: A Nutritional Guide</h2>
        <p>
          "Macros" is short for macronutrients—the three main components of every diet: protein, carbohydrates, and fats. While calories determine whether you gain or lose weight, your macro ratio determines the <em>quality</em> of that weight change. Our <strong>macro calculator</strong> helps you optimize your nutrition for your specific goals in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Three Pillars of Nutrition</h3>
        <ul>
          <li><strong>Protein (4 calories per gram):</strong> Essential for muscle repair, immune function, and satiety. High-protein diets are often preferred for fat loss (cutting) to preserve lean muscle mass.</li>
          <li><strong>Carbohydrates (4 calories per gram):</strong> Your body's primary energy source. Carbs fuel your brain and your workouts. Higher carb ratios are often used for muscle building (bulking).</li>
          <li><strong>Fats (9 calories per gram):</strong> Crucial for hormone production, brain health, and nutrient absorption. Fats are energy-dense and keep you full for longer.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Choosing Your Macro Ratio</h3>
        <p>
          There is no "perfect" ratio, but common starting points include:
        </p>
        <ul>
          <li><strong>Maintenance:</strong> 30% Protein, 40% Carbs, 30% Fat. A balanced approach for general health.</li>
          <li><strong>Cutting (Fat Loss):</strong> 40% Protein, 30% Carbs, 30% Fat. Higher protein helps maintain muscle while in a calorie deficit.</li>
          <li><strong>Bulking (Muscle Gain):</strong> 25% Protein, 50% Carbs, 25% Fat. Higher carbs provide the energy needed for intense training and recovery.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Do I have to hit my macros exactly?</p>
            <p>No. Think of these as targets. If you're within 5-10 grams of each target, you're doing great. Consistency over time is more important than daily perfection.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What about fiber?</p>
            <p>Fiber is a type of carbohydrate that your body doesn't fully digest. Aim for 25-35 grams of fiber per day for digestive health and satiety.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I track "Net Carbs"?</p>
            <p>Net carbs are total carbs minus fiber and sugar alcohols. Many people find tracking net carbs useful for keto or low-carb diets, but for general fitness, tracking total carbs is usually sufficient.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
