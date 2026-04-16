import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const SleepCalculator: React.FC = () => {
  const [wakeTime, setWakeTime] = useState<string>('07:00');
  const [results, setResults] = useState<string[]>([]);

  const calculateSleep = () => {
    const [hours, minutes] = wakeTime.split(':').map(Number);
    const wakeDate = new Date();
    wakeDate.setHours(hours, minutes, 0, 0);

    const sleepTimes = [];
    for (let i = 6; i >= 3; i--) {
      const sleepDate = new Date(wakeDate.getTime() - (i * 90 + 15) * 60 * 1000);
      sleepTimes.push(sleepDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }
    setResults(sleepTimes);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Sleep Calculator | Find the Best Time to Go to Bed 2026</title>
        <meta name="description" content="Free online sleep calculator for 2026. Quickly find the best time to go to bed to wake up feeling refreshed with instant results." />
      </Helmet>

      <h1>Sleep Calculator</h1>
      <p>Quickly find the best time to go to bed to wake up feeling refreshed and energized.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Wake Time</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">I want to wake up at:</label>
              <input 
                type="time" 
                value={wakeTime} 
                onChange={(e) => setWakeTime(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateSleep}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Bedtimes
            </button>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Best Times to Sleep</div>
            <div className="result-box">
              <div className="space-y-4">
                {results.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4">
                    {results.map((time, i) => (
                      <div key={i} className="bg-blue-50 border border-blue-100 p-4 rounded-lg text-center">
                        <div className="text-sm text-slate-500">{6 - i} Cycles</div>
                        <div className="text-xl font-bold text-[#0066cc]">{time}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter wake time to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Sleep Cycles</h2>
        <p>
          Sleep cycles are a way of dividing sleep into distinct stages. Each cycle lasts about 90 minutes and consists of light sleep, deep sleep, and REM sleep.
        </p>
        <p>
          Our <strong>sleep calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to find the best time to go to bed based on your wake time. It assumes that each sleep cycle lasts 90 minutes and that it takes about 15 minutes to fall asleep.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Sleep Calculator?</h3>
        <p>
          Sleep calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Energy:</strong> They help you wake up feeling refreshed and energized by avoiding waking up during deep sleep.</li>
          <li><strong>Health:</strong> They can be a great tool for improving sleep quality and overall health.</li>
          <li><strong>Productivity:</strong> They offer a unique perspective on your potential for productivity and focus.</li>
        </ol>
      </div>
    </div>
  );
};
