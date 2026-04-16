import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const WaistToHip: React.FC = () => {
  const [waist, setWaist] = useState<number>(30);
  const [hip, setHip] = useState<number>(36);
  const [result, setResult] = useState<number | null>(null);

  const calculateWHR = () => {
    if (hip === 0) return;
    setResult(waist / hip);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Waist to Hip Ratio Calculator | Estimate Your Health Risk 2026</title>
        <meta name="description" content="Free online waist to hip ratio calculator for 2026. Quickly estimate your waist-to-hip ratio and health risk with instant results." />
      </Helmet>

      <h1>Waist to Hip Ratio Calculator</h1>
      <p>Quickly estimate your waist-to-hip ratio for health and wellness awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Waist Circumference (inches)</label>
              <input 
                type="number" 
                value={waist} 
                onChange={(e) => setWaist(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Hip Circumference (inches)</label>
              <input 
                type="number" 
                value={hip} 
                onChange={(e) => setHip(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateWHR}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Waist to Hip Ratio
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
                    <div className="text-sm text-slate-500">Estimated Waist to Hip Ratio</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(2)}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      A ratio above 0.90 for men or 0.85 for women indicates increased health risk.
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
        <h2 className="text-2xl font-bold text-slate-900">Understanding Waist to Hip Ratio</h2>
        <p>
          Waist to hip ratio is a measure of the distribution of body fat. It is commonly used in health and wellness awareness to assess the risk of chronic diseases.
        </p>
        <p>
          Our <strong>waist to hip ratio calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to estimate your waist-to-hip ratio based on your waist and hip circumferences. It divides your waist measurement by your hip measurement.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Waist to Hip Ratio Calculator?</h3>
        <p>
          Waist to hip ratio calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Health:</strong> They provide a fun and insightful way to estimate your waist-to-hip ratio and stay healthy.</li>
          <li><strong>Risk Assessment:</strong> They can be a great tool for assessing your risk of chronic diseases and improving wellness.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
