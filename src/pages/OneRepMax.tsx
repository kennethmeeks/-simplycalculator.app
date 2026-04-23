import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const OneRepMax: React.FC = () => {
  const [weight, setWeight] = useState<number>(100);
  const [reps, setReps] = useState<number>(10);
  const [result, setResult] = useState<number | null>(null);

  const calculateOneRepMax = () => {
    setResult(Math.round(weight * (1 + reps / 30)));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>One Rep Max Calculator | Estimate Your Maximum Lift 2026</title>
        <meta name="description" content="Free online one rep max calculator for 2026. Quickly estimate your maximum lift based on weight and reps with instant results." />
      </Helmet>

      <h1>One Rep Max Calculator</h1>
      <p>Quickly estimate your maximum lift for any exercise based on weight and reps.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Weight Lifted (lbs)</label>
              <input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Reps Performed</label>
              <input 
                type="number" 
                value={reps} 
                onChange={(e) => setReps(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateOneRepMax}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate One Rep Max
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
                    <div className="text-sm text-slate-500">Estimated One Rep Max</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result} lbs</div>
                    <div className="text-sm text-slate-400 mt-4">
                      That's your estimated maximum lift for a single repetition.
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
        name="One Rep Max Calculator" 
        path="/one-rep-max" 
        description="Estimate your one-repetition maximum lift for any weightlifting exercise. Plan your strength training and track progress with our free tool for 2026."
      />
    </div>
  );
};
