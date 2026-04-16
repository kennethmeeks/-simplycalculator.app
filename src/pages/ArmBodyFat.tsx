import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const ArmBodyFat: React.FC = () => {
  const [triceps, setTriceps] = useState<number>(10);
  const [biceps, setBiceps] = useState<number>(5);
  const [result, setResult] = useState<number | null>(null);

  const calculateArmFat = () => {
    setResult((triceps + biceps) / 2);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Arm Body Fat Calculator | Estimate Your Arm Body Fat Percentage 2026</title>
        <meta name="description" content="Free online arm body fat calculator for 2026. Quickly estimate your arm body fat percentage based on skinfold measurements with instant results." />
      </Helmet>

      <h1>Arm Body Fat Calculator</h1>
      <p>Quickly estimate your arm body fat percentage for health and fitness awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Triceps Skinfold (mm)</label>
              <input 
                type="number" 
                value={triceps} 
                onChange={(e) => setTriceps(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Biceps Skinfold (mm)</label>
              <input 
                type="number" 
                value={biceps} 
                onChange={(e) => setBiceps(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateArmFat}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Arm Body Fat
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
                    <div className="text-sm text-slate-500">Estimated Arm Body Fat Percentage</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(1)}%</div>
                    <div className="text-sm text-slate-400 mt-4">
                      Body fat percentage varies based on age, gender, and individual factors.
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
        <h2 className="text-2xl font-bold text-slate-900">Understanding Arm Body Fat</h2>
        <p>
          Arm body fat is a measure of the fat content in the arms. It is commonly used for health and fitness tracking to manage weight and improve fitness.
        </p>
        <p>
          Our <strong>arm body fat calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to estimate your arm body fat percentage based on skinfold measurements. It assumes that the average of your triceps and biceps skinfolds is a good indicator of your arm fat content.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use an Arm Body Fat Calculator?</h3>
        <p>
          Arm body fat calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Health:</strong> They provide a fun and insightful way to estimate your arm body fat and stay healthy.</li>
          <li><strong>Fitness:</strong> They can be a great tool for tracking your body composition and improving fitness.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
