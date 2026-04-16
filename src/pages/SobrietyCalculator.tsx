import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const SobrietyCalculator: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateSobriety = () => {
    const start = new Date(startDate);
    if (isNaN(start.getTime())) return;
    const diff = new Date().getTime() - start.getTime();
    setResult(Math.floor(diff / (1000 * 60 * 60 * 24)));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Sobriety Calculator | Track Your Days of Sobriety 2026</title>
        <meta name="description" content="Free online sobriety calculator for 2026. Quickly track your days of sobriety from a specific start date with instant results." />
      </Helmet>

      <h1>Sobriety Calculator</h1>
      <p>Quickly track your days of sobriety from a specific start date for health and wellness awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Sobriety Start Date</label>
              <input 
                type="date" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateSobriety}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Days Sober
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
                    <div className="text-sm text-slate-500">Days of Sobriety</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result} Days</div>
                    <div className="text-sm text-slate-400 mt-4">
                      Congratulations on your progress! Keep going!
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your start date to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Sobriety</h2>
        <p>
          Sobriety is a process of maintaining abstinence from addictive substances. It is a key part of recovery and is essential for health and wellness.
        </p>
        <p>
          Our <strong>sobriety calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to track your days of sobriety based on your start date. It calculates the difference between the current date and your start date in days.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Sobriety Calculator?</h3>
        <p>
          Sobriety calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Progress Tracking:</strong> They provide a fun and insightful way to track your sobriety progress and stay motivated.</li>
          <li><strong>Health Awareness:</strong> They can be a great tool for understanding your recovery and improving health.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
