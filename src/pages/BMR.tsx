import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Activity, User, Info } from 'lucide-react';

export const BMRCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [age, setAge] = useState(30);
  const [bmr, setBmr] = useState(0);

  useEffect(() => {
    // Mifflin-St Jeor Equation
    let bmrValue = 0;
    if (gender === 'male') {
      bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    setBmr(Math.round(bmrValue));
  }, [gender, weight, height, age]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>BMR Calculator | Calculate Your Basal Metabolic Rate | simplycalculator.app</title>
        <meta name="description" content="Free online BMR calculator using the Mifflin-St Jeor equation. Find out how many calories your body burns at rest in 2026." />
      </Helmet>

      <h1>BMR Calculator</h1>
      <p>Your Basal Metabolic Rate (BMR) is the number of calories your body needs to function while at rest. This includes basic functions like breathing, circulation, and cell production.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Your Details</div>
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
            <div>
              <label className="input-label">Age (years)</label>
              <input 
                type="number" 
                value={age} 
                onChange={(e) => setAge(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Your BMR Result</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10 text-center">
                <div className="text-xs text-slate-500 uppercase font-bold">Basal Metabolic Rate</div>
                <div className="text-5xl font-bold text-[#0066cc]">{bmr}</div>
                <div className="text-sm text-slate-500 mt-1 font-medium">Calories / Day</div>
              </div>
              
              <div className="p-4 bg-slate-50 rounded border border-slate-100 text-sm text-slate-600 italic">
                This is the minimum energy your body requires to maintain vital functions if you were to stay in bed all day.
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding BMR: A Guide to Your Metabolism</h2>
        <p>
          Basal Metabolic Rate (BMR) is a fundamental metric in health and fitness. It represents the energy expenditure of an individual at rest in a neutrally temperate environment. Our <strong>BMR calculator</strong> uses the highly accurate Mifflin-St Jeor equation to provide you with a reliable estimate in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Mifflin-St Jeor Equation</h3>
        <p>
          Developed in 1990, this formula is widely considered the most accurate for estimating BMR in healthy adults.
        </p>
        <ul>
          <li><strong>For Men:</strong> BMR = 10 * weight (kg) + 6.25 * height (cm) - 5 * age (y) + 5</li>
          <li><strong>For Women:</strong> BMR = 10 * weight (kg) + 6.25 * height (cm) - 5 * age (y) - 161</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Factors That Influence BMR</h3>
        <ul>
          <li><strong>Muscle Mass:</strong> Muscle tissue burns more calories than fat tissue, even at rest. Increasing your lean muscle mass will raise your BMR.</li>
          <li><strong>Age:</strong> Metabolism naturally slows down as we age, partly due to the loss of muscle tissue and hormonal changes.</li>
          <li><strong>Genetics:</strong> Some people naturally have a faster or slower metabolism due to their genetic makeup.</li>
          <li><strong>Hormones:</strong> Thyroid hormones, in particular, play a major role in regulating your metabolic rate.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use Your BMR</h3>
        <p>
          Knowing your BMR is the first step in creating a weight management plan. To find your Total Daily Energy Expenditure (TDEE), you multiply your BMR by an activity factor.
        </p>
        <ul>
          <li><strong>Sedentary:</strong> BMR x 1.2</li>
          <li><strong>Lightly Active:</strong> BMR x 1.375</li>
          <li><strong>Moderately Active:</strong> BMR x 1.55</li>
          <li><strong>Very Active:</strong> BMR x 1.725</li>
          <li><strong>Extra Active:</strong> BMR x 1.9</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Can I eat fewer calories than my BMR?</p>
            <p>It is generally not recommended to eat fewer calories than your BMR for extended periods without medical supervision, as your body needs this energy for vital organ functions.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does drinking cold water raise BMR?</p>
            <p>While your body burns a tiny amount of extra energy to warm the water to body temperature, the effect on your overall BMR is negligible.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How often should I recalculate my BMR?</p>
            <p>You should recalculate whenever you have a significant change in weight (more than 5-10 lbs) or as you enter a new decade of life.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
