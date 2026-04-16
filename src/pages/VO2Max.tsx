import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const VO2Max: React.FC = () => {
  const [restingHR, setRestingHR] = useState<number>(70);
  const [maxHR, setMaxHR] = useState<number>(180);
  const [result, setResult] = useState<number | null>(null);

  const calculateVO2Max = () => {
    if (restingHR === 0) return;
    setResult(15.3 * (maxHR / restingHR));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>VO2 Max Calculator | Estimate Your Aerobic Fitness 2026</title>
        <meta name="description" content="Free online VO2 max calculator for 2026. Quickly estimate your VO2 max and aerobic fitness with instant results." />
      </Helmet>

      <h1>VO2 Max Calculator</h1>
      <p>Quickly estimate your VO2 max for health and fitness tracking.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Resting Heart Rate (bpm)</label>
              <input 
                type="number" 
                value={restingHR} 
                onChange={(e) => setRestingHR(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Maximum Heart Rate (bpm)</label>
              <input 
                type="number" 
                value={maxHR} 
                onChange={(e) => setMaxHR(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateVO2Max}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate VO2 Max
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
                    <div className="text-sm text-slate-500">Estimated VO2 Max</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(1)} ml/kg/min</div>
                    <div className="text-sm text-slate-400 mt-4">
                      VO2 max is a measure of the maximum amount of oxygen your body can use during exercise.
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
        <h2 className="text-2xl font-bold text-slate-900">Understanding VO2 Max</h2>
        <p>
          VO2 max is a measure of the maximum amount of oxygen your body can use during exercise. It is commonly used in health and fitness tracking to assess aerobic fitness and potential.
        </p>
        <p>
          Our <strong>VO2 max calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to estimate your VO2 max based on your resting and maximum heart rates. It uses the Uth-Sørensen-Overgaard-Pedersen formula to provide accurate results.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a VO2 Max Calculator?</h3>
        <p>
          VO2 max calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Fitness:</strong> They provide a fun and insightful way to estimate your VO2 max and improve aerobic fitness.</li>
          <li><strong>Performance:</strong> They can be a great tool for assessing your potential for endurance and power.</li>
          <li><strong>Health:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
