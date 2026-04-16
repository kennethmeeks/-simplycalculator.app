import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const RatioCalculator: React.FC = () => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(2);
  const [c, setC] = useState<number>(3);
  const [d, setD] = useState<number | null>(null);

  const calculateRatio = () => {
    if (a === 0) return;
    setD((b * c) / a);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Ratio Calculator | Solve Proportions and Ratios 2026</title>
        <meta name="description" content="Free online ratio calculator for 2026. Quickly solve proportions and ratios with instant results." />
      </Helmet>

      <h1>Ratio Calculator</h1>
      <p>Quickly solve proportions and ratios for any purpose.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Solve Proportion (A:B = C:D)</div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">A</label>
                <input 
                  type="number" 
                  value={a} 
                  onChange={(e) => setA(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">B</label>
                <input 
                  type="number" 
                  value={b} 
                  onChange={(e) => setB(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">C</label>
                <input 
                  type="number" 
                  value={c} 
                  onChange={(e) => setC(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">D (Solve for this)</label>
                <input 
                  type="text" 
                  value="?" 
                  disabled 
                  className="input-field w-full bg-slate-100" 
                />
              </div>
            </div>
            <button 
              onClick={calculateRatio}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Solve for D
            </button>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="text-center space-y-4">
                {d !== null ? (
                  <div className="space-y-2">
                    <div className="text-sm text-slate-500">Value of D</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{d.toFixed(2)}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      The proportion is {a}:{b} = {c}:{d.toFixed(2)}.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter values to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Ratios</h2>
        <p>
          Ratios are a way of comparing two quantities. They are commonly used in mathematics, science, and everyday life to represent proportions and relationships.
        </p>
        <p>
          Our <strong>ratio calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to solve proportions and ratios. It uses the cross-multiplication method to find the missing value in a proportion.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Ratio Calculator?</h3>
        <p>
          Ratio calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Problem Solving:</strong> They provide a fun and insightful way to solve proportions and ratios.</li>
          <li><strong>Comparison:</strong> They can be a great tool for comparing different quantities and relationships.</li>
          <li><strong>Insight:</strong> They offer a unique perspective on your potential for understanding proportions and patterns.</li>
        </ol>
      </div>
    </div>
  );
};
