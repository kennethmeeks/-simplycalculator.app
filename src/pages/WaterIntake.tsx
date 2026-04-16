import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


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

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Hydration</h2>
        <p>
          Hydration is a process of maintaining the body's water balance. It is essential for health and wellness, as water is involved in almost every bodily function.
        </p>
        <p>
          Our <strong>water intake calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to estimate your daily water needs based on your weight and activity level. It assumes that you need about 0.5 oz of water per pound of body weight, plus an additional 12 oz for every 30 minutes of exercise.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Water Intake Calculator?</h3>
        <p>
          Water intake calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Health:</strong> They provide a fun and insightful way to estimate your daily water needs and stay hydrated.</li>
          <li><strong>Fitness:</strong> They can be a great tool for managing hydration during exercise and improving performance.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
