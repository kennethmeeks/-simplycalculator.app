import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

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
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Measuring Body Fat: A Comprehensive Guide</h2>
        <p>
          Body fat percentage is a much better indicator of health and fitness than weight alone. It represents the proportion of your total body mass that is composed of fat tissue. Our <strong>body fat calculator</strong> uses the US Navy method, which is a reliable and accessible way to estimate these numbers in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The US Navy Method</h3>
        <p>
          The US Navy method uses simple circumference measurements to estimate body fat. While not as precise as a DEXA scan or hydrostatic weighing, it is remarkably accurate for most people and requires only a measuring tape.
        </p>
        <p>
          For the most accurate results, take your measurements in the morning before eating or exercising. Ensure the measuring tape is snug but not compressing the skin.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Body Fat Categories</h3>
        <p>
          The American Council on Exercise (ACE) provides the following guidelines for body fat percentages:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Category</th>
                <th className="text-left py-2">Women (%)</th>
                <th className="text-left py-2">Men (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Essential Fat</td>
                <td className="py-2">10-13%</td>
                <td className="py-2">2-5%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Athletes</td>
                <td className="py-2">14-20%</td>
                <td className="py-2">6-13%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Fitness</td>
                <td className="py-2">21-24%</td>
                <td className="py-2">14-17%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Average</td>
                <td className="py-2">25-31%</td>
                <td className="py-2">18-24%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Obese</td>
                <td className="py-2">32%+</td>
                <td className="py-2">25%+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Body Fat Matters</h3>
        <ul>
          <li><strong>Disease Risk:</strong> High body fat, particularly visceral fat around the organs, is linked to heart disease, type 2 diabetes, and certain cancers.</li>
          <li><strong>Athletic Performance:</strong> Lower body fat percentages (within healthy limits) often correlate with better speed, agility, and endurance.</li>
          <li><strong>Metabolic Health:</strong> Lean muscle mass is more metabolically active than fat, meaning it burns more calories even at rest.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How accurate is this calculator?</p>
            <p>The US Navy method typically has an error margin of 3-4% compared to clinical methods. It is best used for tracking trends over time rather than as an absolute measurement.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can I target fat loss in specific areas?</p>
            <p>No. "Spot reduction" is a myth. When you lose body fat, your body decides where it comes from based on genetics and hormones.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the healthiest body fat percentage?</p>
            <p>For most men, 14-20% is considered healthy. For most women, 21-28% is considered healthy. Essential fat is necessary for hormone production and organ protection.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
