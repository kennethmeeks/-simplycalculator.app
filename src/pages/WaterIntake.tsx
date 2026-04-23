import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const WaterIntake: React.FC = () => {
  const [weight, setWeight] = useState<number>(150);
  const [activity, setActivity] = useState<number>(30);
  const [result, setResult] = useState<number | null>(null);

  const calculateWater = () => {
    const base = weight * 0.5;
    const extra = (activity / 30) * 12;
    setResult(Math.round(base + extra));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Water Intake Calculator | Estimate Your Daily Water Needs 2026</title>
        <meta name="description" content="Free online water intake calculator for 2026. Quickly estimate your daily water needs based on weight and activity with instant results." />
      </Helmet>

      <h1>Water Intake Calculator</h1>
      <p>Quickly estimate your daily water needs for health and hydration awareness.</p>

      

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
              <label className="input-label">Daily Activity (minutes)</label>
              <input 
                type="number" 
                value={activity} 
                onChange={(e) => setActivity(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateWater}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Water Intake
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
                    <div className="text-sm text-slate-500">Estimated Daily Water Needs</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result} oz</div>
                    <div className="text-sm text-slate-400 mt-4">
                      That's about {(result / 8).toFixed(1)} glasses (8 oz each) per day.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your details to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Water Intake Calculator" 
        path="/water-intake" 
        description="Estimate your ideal daily water intake based on weight and activity levels. Stay hydrated and healthy with our free tool for 2026."
      />
    </div>
  );
};
