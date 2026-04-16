import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const BabyWeight: React.FC = () => {
  const [fatherWeight, setFatherWeight] = useState<number>(180);
  const [motherWeight, setMotherWeight] = useState<number>(140);
  const [result, setResult] = useState<number | null>(null);

  const calculateBabyWeight = () => {
    setResult((fatherWeight + motherWeight) / 40);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Baby Weight Calculator | Estimate Your Baby's Birth Weight 2026</title>
        <meta name="description" content="Free online baby weight calculator for 2026. Quickly estimate your baby's birth weight based on parents' weights with instant results." />
      </Helmet>

      <h1>Baby Weight Calculator</h1>
      <p>Quickly estimate your baby's birth weight based on parents' weights for family planning and health awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Father's Weight (lbs)</label>
              <input 
                type="number" 
                value={fatherWeight} 
                onChange={(e) => setFatherWeight(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Mother's Weight (lbs)</label>
              <input 
                type="number" 
                value={motherWeight} 
                onChange={(e) => setMotherWeight(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateBabyWeight}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Baby Weight
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
                    <div className="text-sm text-slate-500">Estimated Birth Weight</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(1)} lbs</div>
                    <div className="text-sm text-slate-400 mt-4">
                      Birth weight varies based on genetics, nutrition, and individual factors.
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
        <h2 className="text-2xl font-bold text-slate-900">Understanding Baby Weight</h2>
        <p>
          Baby weight is a measure of the weight of a baby at birth. It is commonly used in family planning and health awareness to track growth and development.
        </p>
        <p>
          Our <strong>baby weight calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to estimate your baby's birth weight based on your weights. It assumes that a baby's birth weight is proportional to the average weight of their parents.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Baby Weight Calculator?</h3>
        <p>
          Baby weight calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Family Planning:</strong> They provide a fun and insightful way to estimate your baby's birth weight and plan for growth.</li>
          <li><strong>Health Awareness:</strong> They can be a great tool for tracking your baby's growth and development.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
