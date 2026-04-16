import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const ChildHeightPredictor: React.FC = () => {
  const [fatherHeight, setFatherHeight] = useState<number>(70);
  const [motherHeight, setMotherHeight] = useState<number>(64);
  const [gender, setGender] = useState<string>('boy');
  const [result, setResult] = useState<number | null>(null);

  const predictHeight = () => {
    let predicted = (fatherHeight + motherHeight) / 2;
    if (gender === 'boy') predicted += 2.5;
    else predicted -= 2.5;
    setResult(predicted);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Child Height Predictor | Estimate Your Child's Future Height 2026</title>
        <meta name="description" content="Free online child height predictor for 2026. Quickly estimate your child's future height based on parents' heights with instant results." />
      </Helmet>

      <h1>Child Height Predictor</h1>
      <p>Quickly estimate your child's future height based on parents' heights for family planning and health awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Father's Height (inches)</label>
              <input 
                type="number" 
                value={fatherHeight} 
                onChange={(e) => setFatherHeight(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Mother's Height (inches)</label>
              <input 
                type="number" 
                value={motherHeight} 
                onChange={(e) => setMotherHeight(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Child's Gender</label>
              <select 
                value={gender} 
                onChange={(e) => setGender(e.target.value)} 
                className="input-field w-full"
              >
                <option value="boy">Boy</option>
                <option value="girl">Girl</option>
              </select>
            </div>
            <button 
              onClick={predictHeight}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Predict Child's Height
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
                    <div className="text-sm text-slate-500">Predicted Future Height</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(1)} inches</div>
                    <div className="text-sm text-slate-400 mt-4">
                      That's about {Math.floor(result / 12)}' {Math.round(result % 12)}" tall.
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
        <h2 className="text-2xl font-bold text-slate-900">Understanding Height Prediction</h2>
        <p>
          Height prediction is a process of estimating a child's future height based on various factors. It is commonly used for family planning and health awareness to track growth and development.
        </p>
        <p>
          Our <strong>child height predictor 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our predictor uses a simple algorithm to estimate a child's future height based on the Mid-Parental Height formula. It assumes that a child's height is the average of their parents' heights, adjusted for gender.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Child Height Predictor?</h3>
        <p>
          Child height predictors are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Family Planning:</strong> They provide a fun and insightful way to estimate your child's future height and plan for growth.</li>
          <li><strong>Health Awareness:</strong> They can be a great tool for tracking your child's growth and development.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your child's potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
