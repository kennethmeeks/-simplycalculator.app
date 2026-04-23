import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

import { Utensils, Info } from 'lucide-react';

export const ProteinCalculator: React.FC = () => {
  const [weight, setWeight] = useState(70);
  const [goal, setGoal] = useState<'maintenance' | 'muscle' | 'athlete'>('maintenance');
  
  const [proteinMin, setProteinMin] = useState(0);
  const [proteinMax, setProteinMax] = useState(0);

  useEffect(() => {
    let minFactor = 0.8;
    let maxFactor = 1.2;

    if (goal === 'muscle') {
      minFactor = 1.6;
      maxFactor = 2.2;
    } else if (goal === 'athlete') {
      minFactor = 1.2;
      maxFactor = 1.7;
    }

    setProteinMin(Math.round(weight * minFactor));
    setProteinMax(Math.round(weight * maxFactor));
  }, [weight, goal]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Protein Calculator | Calculate Your Daily Protein Needs</title>
        <meta name="description" content="Free online protein calculator to determine your ideal daily protein intake for muscle growth, weight loss, or maintenance in 2026." />
      </Helmet>

      <h1>Protein Calculator</h1>
      <p>Calculate your ideal daily protein intake based on your body weight and fitness goals. Essential for muscle repair, recovery, and overall health.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Your Profile</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Body Weight (kg)</label>
              <input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Your Goal</label>
              <select 
                value={goal} 
                onChange={(e) => setGoal(e.target.value as any)}
                className="input-field"
              >
                <option value="maintenance">General Health / Maintenance</option>
                <option value="athlete">Endurance Athlete / Active</option>
                <option value="muscle">Muscle Building / Strength Training</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Daily Protein Target</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10 text-center">
                <div className="text-xs text-slate-500 uppercase font-bold">Recommended Range</div>
                <div className="text-5xl font-bold text-[#0066cc]">{proteinMin} - {proteinMax}</div>
                <div className="text-sm text-slate-500 mt-1 font-medium">Grams / Day</div>
              </div>
              
              <div className="p-4 bg-slate-50 rounded border border-slate-100 text-sm text-slate-600 italic">
                This range is based on current nutritional science for your specific activity level.
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Protein Calculator" 
        path="/protein-calculator" 
        description="Calculate your ideal daily protein intake based on weight, activity level, and fitness goals. Plan your nutrition for muscle growth or fat loss in 2026."
      />
    </div>
  );
};
