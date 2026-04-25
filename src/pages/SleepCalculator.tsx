import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


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
          
          <ResultActions 
            onReset={() => {
              setWakeTime('07:00');
              setResults([]);
            }}
            onCopy={() => {
              if (results.length > 0) {
                const text = `Recommended Bedtimes for ${wakeTime} wake up:\n${results.join(', ')}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Sleep Calculator"
        path="/sleep-calculator"
        description="Optimize your sleep cycles by finding the perfect time to fall asleep or wake up refreshed."
      />
    </div>
  );
};
