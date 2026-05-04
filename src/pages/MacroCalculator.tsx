import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

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
        <title>Macro Calculator — The Perfect 40/30/30 Split Free 2026</title>
        <meta name="description" content="Optimize your diet. Calculate your ideal protein, carb, and fat ratios for muscle gain or fat loss with our free 2026 tool." />
      </Helmet>

      <h1>Macro Calculator: What Should Your Protein and Fat Ratios Be?</h1>
      <p>The perfect 40/30/30 macro split could be the key to your transformation; calculate your grams of protein, fat, and carbs.</p>

      

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

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 pt-12">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4">Professional Guidance: Precision Nutrition</h2>
          <p className="text-slate-600 leading-relaxed">
            While "calories in vs. calories out" determines weight change, your macronutrient split (Protein, Carbs, Fats) determines *what* that weight is. This calculation is critical for body composition because it ensures you are consuming enough protein to preserve muscle and enough fats for hormonal health, while adjusting carbs to fuel your specific activity level and training intensity.
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
          <h3 className="font-bold text-slate-900 flex items-center gap-2">
            <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs text uppercase tracking-wider">Common Pitfalls</span>
          </h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <span className="font-bold text-slate-900 min-w-[20px]">1.</span>
              <span><strong className="text-slate-900">Fear of Fats:</strong> Many people cut fats too low to save calories. Fats are essential for absorbing vitamins (A, D, E, K) and regulating testosterone and estrogen. Never drop below 20-25% of your total calories from fat for extended periods.</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-slate-900 min-w-[20px]">2.</span>
              <span><strong className="text-slate-900">Ignoring Fiber:</strong> While not a primary macro, tracking only "net carbs" can lead to a low-fiber diet. Aim for 25-35g of fiber daily to support gut health and maintain satiety during a cut.</span>
            </li>
          </ul>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm italic">
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs not-italic uppercase tracking-wider">Pro-Tip</span>
              The "Protein Anchor" Rule
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Start your macro planning with protein. For active individuals, a range of 0.8g to 1g of protein per pound of lean body mass is the "gold standard" for preserving muscle during weight loss and facilitating recovery during muscle growth phases.
            </p>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Macro Calculator" 
        path="/macro-calculator" 
        description="Calculate your ideal macronutrient ratios for weight loss, maintenance, or muscle gain. Optimize your protein, fat, and carb intake for 2026."
      />
    </div>
  );
};
