import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const WorkHours: React.FC = () => {
  const [startTime, setStartTime] = useState<string>('09:00');
  const [endTime, setEndTime] = useState<string>('17:00');
  const [breakTime, setBreakTime] = useState<number>(60);
  const [result, setResult] = useState<number | null>(null);

  const calculateWorkHours = () => {
    const [startH, startM] = startTime.split(':').map(Number);
    const [endH, endM] = endTime.split(':').map(Number);
    
    let diff = (endH * 60 + endM) - (startH * 60 + startM);
    if (diff < 0) diff += 24 * 60;
    
    setResult((diff - breakTime) / 60);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Work Hours Calculator | Calculate Total Working Hours 2026</title>
        <meta name="description" content="Free online work hours calculator for 2026. Quickly calculate total working hours between start and end times with instant results." />
      </Helmet>

      <h1>Work Hours Calculator</h1>
      <p>Quickly calculate total working hours between start and end times for work tracking and payroll awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Start Time</label>
              <input 
                type="time" 
                value={startTime} 
                onChange={(e) => setStartTime(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">End Time</label>
              <input 
                type="time" 
                value={endTime} 
                onChange={(e) => setEndTime(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Break Time (minutes)</label>
              <input 
                type="number" 
                value={breakTime} 
                onChange={(e) => setBreakTime(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateWorkHours}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Work Hours
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
                    <div className="text-sm text-slate-500">Total Work Hours</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(2)} Hours</div>
                    <div className="text-sm text-slate-400 mt-4">
                      This is your total working time minus break time.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your times to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Work Hours</h2>
        <p>
          Work hours are a way of measuring time spent on work activities. They are commonly used in work tracking and payroll awareness to coordinate activities and meet deadlines.
        </p>
        <p>
          Our <strong>work hours calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to calculate total working hours between start and end times. It calculates the difference between the two times and subtracts break time.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Work Hours Calculator?</h3>
        <p>
          Work hours calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Tracking:</strong> They provide a fun and insightful way to track your work hours and stay organized.</li>
          <li><strong>Payroll:</strong> They can be a great tool for understanding your payroll and meeting deadlines.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
