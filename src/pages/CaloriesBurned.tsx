import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


const activities = [
  { name: 'Walking (3.5 mph)', met: 4.3 },
  { name: 'Running (6 mph)', met: 9.8 },
  { name: 'Cycling (12-14 mph)', met: 8.0 },
  { name: 'Swimming (Laps, Moderate)', met: 5.8 },
  { name: 'Yoga', met: 2.5 },
  { name: 'Weight Lifting', met: 3.5 }
];

export const CaloriesBurned: React.FC = () => {
  const [weight, setWeight] = useState<number>(150);
  const [duration, setDuration] = useState<number>(30);
  const [activity, setActivity] = useState<number>(4.3);
  const [result, setResult] = useState<number | null>(null);

  const calculateCalories = () => {
    const calories = (activity * 3.5 * weight * 0.453592) / 200 * duration;
    setResult(Math.round(calories));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Calories Burned Calculator | Estimate Calories Burned During Exercise 2026</title>
        <meta name="description" content="Free online calories burned calculator for 2026. Quickly estimate calories burned during exercise with instant results." />
      </Helmet>

      <h1>Calories Burned Calculator</h1>
      <p>Quickly estimate calories burned during exercise for health and fitness tracking.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Weight (lbs)</label>
              <input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Duration (minutes)</label>
              <input 
                type="number" 
                value={duration} 
                onChange={(e) => setDuration(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Activity</label>
              <select 
                value={activity} 
                onChange={(e) => setActivity(Number(e.target.value))} 
                className="input-field w-full"
              >
                {activities.map((a, i) => (
                  <option key={i} value={a.met}>{a.name}</option>
                ))}
              </select>
            </div>
            <button 
              onClick={calculateCalories}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Calories Burned
            </button>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="text-center space-y-4">
                {result !== null ? (
                  <div className="space-y-2">
                    <div className="text-sm text-slate-500">Estimated Calories Burned</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      Calories burned vary based on intensity and individual factors.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your details to see results!</div>
                )}
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setWeight(150);
              setDuration(30);
              setActivity(4.3);
              setResult(null);
            }}
            onCopy={() => {
              if (result !== null) {
                const text = `Estimated Calories Burned: ${result}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Calories Burned Calculator" 
        path="/calories-burned" 
        description="Estimate the amount of energy burned during physical activity. Track your exercise and improve your fitness with our easy-to-use tool for 2026."
      />
    </div>
  );
};
