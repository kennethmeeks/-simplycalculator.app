import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const DaysUntil: React.FC = () => {
  const [targetDate, setTargetDate] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateDaysUntil = () => {
    const target = new Date(targetDate);
    if (isNaN(target.getTime())) return;
    const diff = target.getTime() - new Date().getTime();
    setResult(Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Days Until Calculator | Count Down to Any Date 2026</title>
        <meta name="description" content="Free online days until calculator for 2026. Quickly count down to any date with instant results." />
      </Helmet>

      <h1>Days Until Calculator</h1>
      <p>Quickly count down to any date for any purpose.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Target Date</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Target Date</label>
              <input 
                type="date" 
                value={targetDate} 
                onChange={(e) => setTargetDate(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateDaysUntil}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Days Until
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
                    <div className="text-sm text-slate-500">Days Until</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result} Days</div>
                    <div className="text-sm text-slate-400 mt-4">
                      {result > 0 ? 'Keep counting down!' : 'The date has arrived!'}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your target date to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Countdown</h2>
        <p>
          Countdown is a process of counting down to a specific date or event. It is commonly used for planning and anticipation.
        </p>
        <p>
          Our <strong>days until calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to count down to a specific date based on the current date. It calculates the difference between the target date and the current date in days.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Days Until Calculator?</h3>
        <p>
          Days until calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Planning:</strong> They provide a fun and insightful way to count down to any date and plan for events.</li>
          <li><strong>Anticipation:</strong> They can be a great tool for building anticipation and excitement for special occasions.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
