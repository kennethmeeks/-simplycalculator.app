import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

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

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Building Blocks of Life: A Protein Guide</h2>
        <p>
          Protein is a vital macronutrient that plays a role in nearly every biological process in your body. From building muscle to producing enzymes and hormones, getting enough protein is essential for health and performance. Our <strong>protein calculator</strong> helps you find your optimal intake in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How Much Protein Do You Really Need?</h3>
        <p>
          The Recommended Dietary Allowance (RDA) for protein is 0.8 grams per kilogram of body weight. However, this is the <em>minimum</em> to prevent deficiency, not the <em>optimum</em> for active individuals.
        </p>
        <ul>
          <li><strong>Sedentary Adults:</strong> 0.8 - 1.2 g/kg. Sufficient for basic health.</li>
          <li><strong>Endurance Athletes:</strong> 1.2 - 1.7 g/kg. Needed to repair muscle damage from long-duration training.</li>
          <li><strong>Strength Athletes / Muscle Building:</strong> 1.6 - 2.2 g/kg. The "sweet spot" for maximizing muscle protein synthesis.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Benefits of High Protein Intake</h3>
        <ul>
          <li><strong>Muscle Growth & Retention:</strong> Provides the amino acids needed to build new muscle and prevent muscle loss during weight loss.</li>
          <li><strong>Satiety:</strong> Protein is the most satiating macronutrient, meaning it keeps you full for longer and helps control hunger.</li>
          <li><strong>Metabolic Boost:</strong> Protein has a higher Thermic Effect of Food (TEF) than carbs or fats, meaning your body burns more calories just digesting it.</li>
          <li><strong>Bone Health:</strong> Contrary to old myths, high protein intake is actually beneficial for bone density and strength.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Can I eat too much protein?</p>
            <p>For healthy individuals, high protein intake is generally safe. However, people with pre-existing kidney conditions should consult a doctor before significantly increasing their protein intake.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What are the best sources of protein?</p>
            <p>Lean meats (chicken, turkey, beef), fish, eggs, and dairy are "complete" proteins. Plant-based sources like beans, lentils, tofu, and quinoa are also excellent, though some may need to be combined to provide all essential amino acids.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does protein timing matter?</p>
            <p>While the total daily intake is most important, spreading your protein across 3-5 meals (20-40g per meal) is generally considered optimal for muscle protein synthesis.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
