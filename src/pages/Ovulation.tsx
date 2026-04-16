import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const Ovulation: React.FC = () => {
  const [lastPeriod, setLastPeriod] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [result, setResult] = useState<string | null>(null);

  const calculateOvulation = () => {
    const date = new Date(lastPeriod);
    if (isNaN(date.getTime())) return;
    const ovulationDate = new Date(date.getTime() + (cycleLength - 14) * 24 * 60 * 60 * 1000);
    setResult(ovulationDate.toLocaleDateString());
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Ovulation Calculator | Estimate Your Fertile Window 2026</title>
        <meta name="description" content="Free online ovulation calculator for 2026. Quickly estimate your ovulation date and fertile window with instant results." />
      </Helmet>

      <h1>Ovulation Calculator</h1>
      <p>Quickly estimate your ovulation date and fertile window for family planning and health awareness.</p>

      

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
              onClick={calculateOvulation}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Ovulation Date
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
                    <div className="text-sm text-slate-500">Estimated Ovulation Date</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      Your most fertile window is typically 2-3 days before and on this date.
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
        <h2 className="text-2xl font-bold text-slate-900">Understanding Ovulation</h2>
        <p>
          Ovulation is a process of releasing an egg from the ovary. It is a key part of the menstrual cycle and is essential for conception.
        </p>
        <p>
          Our <strong>ovulation calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to estimate your ovulation date based on the first day of your last period and your average cycle length. It assumes that ovulation occurs 14 days before the start of your next period.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use an Ovulation Calculator?</h3>
        <p>
          Ovulation calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Family Planning:</strong> They provide a fun and insightful way to estimate your fertile window and plan for conception.</li>
          <li><strong>Health Awareness:</strong> They can be a great tool for tracking your menstrual cycle and understanding your body.</li>
          <li><strong>Conception:</strong> They offer a unique perspective on your potential for pregnancy.</li>
        </ol>
      </div>
    </div>
  );
};
