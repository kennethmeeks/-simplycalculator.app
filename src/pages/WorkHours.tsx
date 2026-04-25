import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


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
          
          <ResultActions 
            onReset={() => {
              setStartTime('09:00');
              setEndTime('17:00');
              setBreakTime(60);
              setResult(null);
            }}
            onCopy={() => {
              if (result !== null) {
                const text = `Work Hours Results:\nTotal Hours: ${result.toFixed(2)}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Work Hours Calculator"
        path="/work-hours"
        description="Calculate total working hours between shift start and end times, including break deductions."
      />
    </div>
  );
};
