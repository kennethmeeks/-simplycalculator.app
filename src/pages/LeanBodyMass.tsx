import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const LeanBodyMass: React.FC = () => {
  const [weight, setWeight] = useState<number>(150);
  const [bodyFat, setBodyFat] = useState<number>(20);
  const [result, setResult] = useState<number | null>(null);

  const calculateLBM = () => {
    setResult(weight * (1 - bodyFat / 100));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Lean Body Mass Calculator | Estimate Your Lean Body Mass 2026</title>
        <meta name="description" content="Free online lean body mass calculator for 2026. Quickly estimate your lean body mass based on weight and body fat percentage with instant results." />
      </Helmet>

      <h1>Lean Body Mass Calculator</h1>
      <p>Quickly estimate your lean body mass for health and fitness tracking.</p>

      

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
              <label className="input-label">Body Fat Percentage (%)</label>
              <input 
                type="number" 
                value={bodyFat} 
                onChange={(e) => setBodyFat(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateLBM}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Lean Body Mass
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
                    <div className="text-sm text-slate-500">Estimated Lean Body Mass</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(1)} lbs</div>
                    <div className="text-sm text-slate-400 mt-4">
                      Lean body mass is your total weight minus your body fat weight.
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
        <h2 className="text-2xl font-bold text-slate-900">Understanding Lean Body Mass</h2>
        <p>
          Lean body mass is a measure of the weight of the body's non-fat components. It is commonly used in health and fitness tracking to manage weight and improve fitness.
        </p>
        <p>
          Our <strong>lean body mass calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to estimate your lean body mass based on your weight and body fat percentage. It subtracts the weight of your body fat from your total weight.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Lean Body Mass Calculator?</h3>
        <p>
          Lean body mass calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Health:</strong> They provide a fun and insightful way to estimate your lean body mass and stay healthy.</li>
          <li><strong>Fitness:</strong> They can be a great tool for tracking your body composition and improving fitness.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
