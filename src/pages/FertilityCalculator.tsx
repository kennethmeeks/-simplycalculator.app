import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const FertilityCalculator: React.FC = () => {
  const [lastPeriod, setLastPeriod] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [results, setResults] = useState<string[]>([]);

  const calculateFertility = () => {
    const date = new Date(lastPeriod);
    if (isNaN(date.getTime())) return;
    const fertileStart = new Date(date.getTime() + (cycleLength - 18) * 24 * 60 * 60 * 1000);
    const fertileEnd = new Date(date.getTime() + (cycleLength - 11) * 24 * 60 * 60 * 1000);
    setResults([fertileStart.toLocaleDateString(), fertileEnd.toLocaleDateString()]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Fertility Calculator | Estimate Your Fertile Window 2026</title>
        <meta name="description" content="Free online fertility calculator for 2026. Quickly estimate your fertile window based on your menstrual cycle with instant results." />
      </Helmet>

      <h1>Fertility Calculator</h1>
      <p>Quickly estimate your fertile window for family planning and health awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">First Day of Last Period</label>
              <input 
                type="date" 
                value={lastPeriod} 
                onChange={(e) => setLastPeriod(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Average Cycle Length (Days)</label>
              <input 
                type="number" 
                value={cycleLength} 
                onChange={(e) => setCycleLength(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateFertility}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Fertile Window
            </button>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="text-center space-y-4">
                {results.length > 0 ? (
                  <div className="space-y-2">
                    <div className="text-sm text-slate-500">Estimated Fertile Window</div>
                    <div className="text-3xl font-bold text-[#0066cc]">{results[0]} - {results[1]}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      This is your most fertile window for conception.
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
        <h2 className="text-2xl font-bold text-slate-900">Understanding Fertility</h2>
        <p>
          Fertility is a process of being able to conceive and bear children. It is a key part of reproductive health and is essential for family planning.
        </p>
        <p>
          Our <strong>fertility calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to estimate your fertile window based on the first day of your last period and your average cycle length. It assumes that your most fertile window is between 11 and 18 days before your next period.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Fertility Calculator?</h3>
        <p>
          Fertility calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Family Planning:</strong> They provide a fun and insightful way to estimate your fertile window and plan for conception.</li>
          <li><strong>Health Awareness:</strong> They can be a great tool for tracking your menstrual cycle and understanding your body.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
