import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';

import { Activity, User, Info } from 'lucide-react';

export const BodyFatCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [waist, setWaist] = useState(80);
  const [neck, setNeck] = useState(38);
  const [hip, setHip] = useState(90); // Only for females
  
  const [bodyFat, setBodyFat] = useState(0);
  const [fatMass, setFatMass] = useState(0);
  const [leanMass, setLeanMass] = useState(0);
  const [category, setCategory] = useState('');

  useEffect(() => {
    let bf = 0;
    if (gender === 'male') {
      // US Navy formula for men
      bf = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
    } else {
      // US Navy formula for women
      bf = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.221 * Math.log10(height)) - 450;
    }
    
    if (bf < 0) bf = 0;
    if (bf > 100) bf = 100;
    
    const fat = (bf / 100) * weight;
    const lean = weight - fat;
    
    setBodyFat(Number(bf.toFixed(1)));
    setFatMass(Number(fat.toFixed(1)));
    setLeanMass(Number(lean.toFixed(1)));
    
    // Categorization
    if (gender === 'male') {
      if (bf < 6) setCategory('Essential Fat');
      else if (bf < 14) setCategory('Athletes');
      else if (bf < 18) setCategory('Fitness');
      else if (bf < 25) setCategory('Average');
      else setCategory('Obese');
    } else {
      if (bf < 14) setCategory('Essential Fat');
      else if (bf < 21) setCategory('Athletes');
      else if (bf < 25) setCategory('Fitness');
      else if (bf < 32) setCategory('Average');
      else setCategory('Obese');
    }
  }, [gender, weight, height, waist, neck, hip]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Body Fat Calculator | Estimate Your Body Fat Percentage | simplycalculator.app</title>
        <meta name="description" content="Free online body fat calculator using the US Navy method. Estimate your body fat percentage, lean mass, and fat mass in 2026." />
      </Helmet>

      <h1>Body Fat Calculator</h1>
      <p>Estimate your body fat percentage using the US Navy method. This tool provides a quick way to track your body composition changes over time.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Measurements (cm)</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Gender</label>
              <div className="flex gap-4">
                <button 
                  onClick={() => setGender('male')}
                  className={`flex-1 py-2 rounded border font-bold transition-colors ${gender === 'male' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#0066cc]'}`}
                >
                  Male
                </button>
                <button 
                  onClick={() => setGender('female')}
                  className={`flex-1 py-2 rounded border font-bold transition-colors ${gender === 'female' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#0066cc]'}`}
                >
                  Female
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="input-label">Weight (kg)</label>
                <input 
                  type="number" 
                  value={weight} 
                  onChange={(e) => setWeight(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Height (cm)</label>
                <input 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="input-label">Waist (cm)</label>
                <input 
                  type="number" 
                  value={waist} 
                  onChange={(e) => setWaist(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Neck (cm)</label>
                <input 
                  type="number" 
                  value={neck} 
                  onChange={(e) => setNeck(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            </div>
            {gender === 'female' && (
              <div>
                <label className="input-label">Hip (cm)</label>
                <input 
                  type="number" 
                  value={hip} 
                  onChange={(e) => setHip(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Body Composition</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10 text-center">
                <div className="text-xs text-slate-500 uppercase font-bold">Body Fat Percentage</div>
                <div className="text-5xl font-bold text-[#0066cc]">{bodyFat}%</div>
                <div className="text-sm text-slate-500 mt-1 font-medium">{category}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-[#f0f7ff] rounded border border-[#0066cc]/10 text-center">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Fat Mass</div>
                  <div className="text-lg font-bold text-[#0066cc]">{fatMass} kg</div>
                </div>
                <div className="p-3 bg-[#f0f7ff] rounded border border-[#0066cc]/10 text-center">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Lean Mass</div>
                  <div className="text-lg font-bold text-[#0066cc]">{leanMass} kg</div>
                </div>
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setGender('male');
              setWeight(70);
              setHeight(175);
              setWaist(80);
              setNeck(38);
              setHip(90);
            }}
            onCopy={() => {
              const text = `Body Fat Summary:\nBody Fat: ${bodyFat}%\nCategory: ${category}\nFat Mass: ${fatMass}kg\nLean Mass: ${leanMass}kg\nCalculated at simplycalculator.app`;
              navigator.clipboard.writeText(text);
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Body Fat Calculator" 
        path="/body-fat-calculator" 
        description="Estimate your body fat percentage using the US Navy method. Track your fitness progress, lean mass, and fat mass with accuracy in 2026."
      />
    </div>
  );
};
