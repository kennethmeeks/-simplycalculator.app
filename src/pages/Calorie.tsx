import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const CalorieCalculator: React.FC = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState('male');
  
  // Base values in metric
  const [weightKg, setWeightKg] = useState(70);
  const [heightCm, setHeightCm] = useState(175);
  
  // Imperial display values
  const [weightLbs, setWeightLbs] = useState(154.3);
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(9);

  const [activity, setActivity] = useState(1.2); // Sedentary

  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);

  // Sync metric to imperial
  useEffect(() => {
    if (unitSystem === 'metric') {
      setWeightLbs(Number((weightKg * 2.20462).toFixed(1)));
      const totalInches = heightCm * 0.393701;
      setHeightFt(Math.floor(totalInches / 12));
      setHeightIn(Math.round(totalInches % 12));
    }
  }, [weightKg, heightCm, unitSystem]);

  // Sync imperial to metric
  useEffect(() => {
    if (unitSystem === 'imperial') {
      setWeightKg(Number((weightLbs / 2.20462).toFixed(1)));
      const totalCm = (heightFt * 30.48) + (heightIn * 2.54);
      setHeightCm(Math.round(totalCm));
    }
  }, [weightLbs, heightFt, heightIn, unitSystem]);

  useEffect(() => {
    // Mifflin-St Jeor Equation
    let calculatedBmr = 0;
    if (gender === 'male') {
      calculatedBmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else {
      calculatedBmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    }
    setBmr(calculatedBmr);
    setTdee(calculatedBmr * activity);
  }, [age, gender, weightKg, heightCm, activity]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Calorie Calculator | Daily Needs for Weight Loss & Maintenance | simplycalculator.app</title>
        <meta name="description" content="Estimate your daily calorie needs with our free calorie calculator. Find the right balance for weight loss, muscle gain, or maintenance in 2026." />
      </Helmet>

      <h1>Calorie Calculator</h1>
      <p>Estimate your daily energy expenditure based on your age, gender, weight, height, and activity level.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Energy Parameters</div>
          
          <div className="flex gap-4 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={unitSystem === 'metric'}
                onChange={() => setUnitSystem('metric')}
              />
              <span className="text-sm font-bold">Metric Units</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={unitSystem === 'imperial'}
                onChange={() => setUnitSystem('imperial')}
              />
              <span className="text-sm font-bold">US Units</span>
            </label>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">Age</label>
                <input 
                  type="number" 
                  value={age} 
                  onChange={(e) => setAge(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">Gender</label>
                <select 
                  value={gender} 
                  onChange={(e) => setGender(e.target.value)} 
                  className="input-field w-full"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            {unitSystem === 'metric' ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="input-group">
                  <label className="input-label">Weight (kg)</label>
                  <input 
                    type="number" 
                    value={weightKg} 
                    onChange={(e) => setWeightKg(Number(e.target.value))} 
                    className="input-field w-full" 
                  />
                </div>
                <div className="input-group">
                  <label className="input-label">Height (cm)</label>
                  <input 
                    type="number" 
                    value={heightCm} 
                    onChange={(e) => setHeightCm(Number(e.target.value))} 
                    className="input-field w-full" 
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="input-group">
                  <label className="input-label">Weight (lbs)</label>
                  <input 
                    type="number" 
                    value={weightLbs} 
                    onChange={(e) => setWeightLbs(Number(e.target.value))} 
                    className="input-field w-full" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="input-group">
                    <label className="input-label">Height (ft)</label>
                    <input 
                      type="number" 
                      value={heightFt} 
                      onChange={(e) => setHeightFt(Number(e.target.value))} 
                      className="input-field w-full" 
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Height (in)</label>
                    <input 
                      type="number" 
                      value={heightIn} 
                      onChange={(e) => setHeightIn(Number(e.target.value))} 
                      className="input-field w-full" 
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="input-group">
              <label className="input-label">Activity Level</label>
              <select 
                value={activity} 
                onChange={(e) => setActivity(Number(e.target.value))} 
                className="input-field w-full"
              >
                <option value={1.2}>Sedentary (Office job)</option>
                <option value={1.375}>Lightly Active (1-3 days/week)</option>
                <option value={1.55}>Moderately Active (3-5 days/week)</option>
                <option value={1.725}>Very Active (6-7 days/week)</option>
                <option value={1.9}>Extra Active (Physical job)</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="text-center mb-4">
                <div className="text-[#666] text-xs uppercase font-bold mb-1">Daily Maintenance</div>
                <div className="text-4xl font-bold text-[#0066cc]">{Math.round(tdee).toLocaleString()}</div>
                <div className="text-[#666] text-sm">Calories / Day</div>
              </div>
              <div className="pt-4 border-t border-[#b3d9ff] text-sm">
                <div className="flex justify-between">
                  <span className="font-bold">BMR:</span>
                  <span className="font-bold text-[#0066cc]">{Math.round(bmr)} kcal</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About Calorie Needs</h2>
        <p>
          Understanding your daily calorie requirements is the first step toward achieving your health and fitness goals, whether you're looking to lose weight, gain muscle, or maintain your current physique. Our <strong>calorie calculator for weight loss and maintenance</strong> uses the scientifically-backed Mifflin-St Jeor Equation to provide a highly accurate estimate of your energy needs for 2026.
        </p>
        <p>
          Calories are simply a measure of energy. Your body requires a certain amount of energy just to perform basic functions like breathing and circulating blood, and additional energy for every movement you make throughout the day. By knowing your Total Daily Energy Expenditure (TDEE), you can make informed decisions about your diet and exercise routine.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Calorie Calculator</h3>
        <p>
          To get your personalized calorie estimate, please provide the following details:
        </p>
        <ol>
          <li><strong>Age & Gender:</strong> Metabolic rates vary significantly based on these biological factors. Men typically have a higher BMR due to higher muscle mass.</li>
          <li><strong>Weight & Height:</strong> These determine your body's base energy requirements (BMR). Larger bodies generally require more energy to maintain.</li>
          <li><strong>Activity Level:</strong> Choose the option that best describes your daily physical activity, from sedentary office work to intense athletic training. This is a crucial factor in determining your TDEE.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Science: Mifflin-St Jeor Equation</h3>
        <p>
          Our calculator employs the Mifflin-St Jeor Equation, which is currently the gold standard for estimating Basal Metabolic Rate (BMR) in clinical settings:
        </p>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm overflow-x-auto">
          For Men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5<br/>
          For Women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is BMR vs. TDEE?</p>
            <p><strong>BMR (Basal Metabolic Rate)</strong> is the number of calories your body burns just to keep your organs functioning while at rest. <strong>TDEE (Total Daily Energy Expenditure)</strong> is your BMR plus the calories burned through physical activity. TDEE is the number you should use for daily meal planning.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How many calories should I eat to lose weight?</p>
            <p>A common recommendation is to subtract 500 calories from your TDEE to lose about 1 pound (0.5 kg) per week. This creates a "calorie deficit." However, it's important not to drop below your BMR without medical supervision to avoid metabolic slowdown.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Is the Mifflin-St Jeor Equation accurate?</p>
            <p>Yes, it is currently considered one of the most accurate formulas for predicting BMR in healthy adults. However, it doesn't account for body composition (muscle vs. fat). Highly muscular individuals may find their actual needs are higher than the estimate.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the "Thermic Effect of Food" (TEF)?</p>
            <p>TEF is the energy your body uses to digest, absorb, and process the nutrients in the food you eat. It typically accounts for about 10% of your total daily energy expenditure.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          A <strong>30-year-old male</strong> who is <strong>180 cm tall</strong>, weighs <strong>85 kg</strong>, and is <strong>moderately active</strong> (3-5 days of exercise per week) has a BMR of approximately <strong>1,850 calories</strong> and a TDEE of about <strong>2,870 calories</strong> per day to maintain his current weight.
        </p>
      </div>
    </div>
  );
};
