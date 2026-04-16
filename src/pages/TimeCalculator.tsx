import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Clock, Plus, Minus, Calculator } from 'lucide-react';

export const TimeCalculator: React.FC = () => {
  const [hours1, setHours1] = useState(0);
  const [minutes1, setMinutes1] = useState(0);
  const [seconds1, setSeconds1] = useState(0);
  
  const [hours2, setHours2] = useState(0);
  const [minutes2, setMinutes2] = useState(0);
  const [seconds2, setSeconds2] = useState(0);
  
  const [operation, setOperation] = useState<'add' | 'subtract'>('add');
  const [result, setResult] = useState({ h: 0, m: 0, s: 0 });
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    const t1 = hours1 * 3600 + minutes1 * 60 + seconds1;
    const t2 = hours2 * 3600 + minutes2 * 60 + seconds2;
    
    let diff = 0;
    if (operation === 'add') {
      diff = t1 + t2;
    } else {
      diff = t1 - t2;
    }
    
    setTotalSeconds(diff);
    
    const absDiff = Math.abs(diff);
    const h = Math.floor(absDiff / 3600);
    const m = Math.floor((absDiff % 3600) / 60);
    const s = absDiff % 60;
    
    setResult({ h, m, s });
  }, [hours1, minutes1, seconds1, hours2, minutes2, seconds2, operation]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Time Calculator | Add, Subtract & Calculate Time Durations</title>
        <meta name="description" content="Free online time calculator to add or subtract hours, minutes, and seconds. Calculate total time duration for work, travel, and projects in 2026." />
      </Helmet>

      <h1>Time Calculator</h1>
      <p>Add or subtract time durations (hours, minutes, and seconds) to calculate total time or the difference between two time periods.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Time Input</div>
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-500 uppercase">Time 1</div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Hours</label>
                  <input type="number" value={hours1} onChange={(e) => setHours1(Number(e.target.value))} className="input-field" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Minutes</label>
                  <input type="number" value={minutes1} onChange={(e) => setMinutes1(Number(e.target.value))} className="input-field" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Seconds</label>
                  <input type="number" value={seconds1} onChange={(e) => setSeconds1(Number(e.target.value))} className="input-field" />
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setOperation('add')}
                className={`p-3 rounded-full border-2 transition-all ${operation === 'add' ? 'bg-[#0066cc] border-[#0066cc] text-white shadow-lg' : 'bg-white border-slate-200 text-slate-400 hover:border-[#0066cc] hover:text-[#0066cc]'}`}
                title="Add Time"
              >
                <Plus className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setOperation('subtract')}
                className={`p-3 rounded-full border-2 transition-all ${operation === 'subtract' ? 'bg-[#0066cc] border-[#0066cc] text-white shadow-lg' : 'bg-white border-slate-200 text-slate-400 hover:border-[#0066cc] hover:text-[#0066cc]'}`}
                title="Subtract Time"
              >
                <Minus className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-500 uppercase">Time 2</div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Hours</label>
                  <input type="number" value={hours2} onChange={(e) => setHours2(Number(e.target.value))} className="input-field" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Minutes</label>
                  <input type="number" value={minutes2} onChange={(e) => setMinutes2(Number(e.target.value))} className="input-field" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Seconds</label>
                  <input type="number" value={seconds2} onChange={(e) => setSeconds2(Number(e.target.value))} className="input-field" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Resulting Duration</div>
            <div className="space-y-6">
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Total Time</div>
                <div className="text-3xl font-bold text-[#0066cc] flex items-baseline gap-2">
                  {totalSeconds < 0 && <span className="text-red-500">-</span>}
                  {result.h}<span className="text-sm font-normal text-slate-400">h</span>
                  {result.m}<span className="text-sm font-normal text-slate-400">m</span>
                  {result.s}<span className="text-sm font-normal text-slate-400">s</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Minutes</div>
                  <div className="text-lg font-bold text-slate-700">{(totalSeconds / 60).toFixed(2)}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Total Hours</div>
                  <div className="text-lg font-bold text-slate-700">{(totalSeconds / 3600).toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f0f7ff] border border-[#0066cc]/20 rounded p-4 text-sm text-[#004d99]">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Time Tip
            </h4>
            <p>This tool is perfect for calculating total work hours, travel durations, or adding up video clip lengths for editing.</p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Comprehensive Guide to Time Calculation</h2>
        <p>
          Time is our most valuable resource, and calculating it accurately can be surprisingly tricky. Whether you are adding up billable hours for a client, calculating the duration of a flight, or planning a project timeline, our <strong>time calculator</strong> provides fast and accurate results for all time-related math in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Add and Subtract Time</h3>
        <p>
          Adding time is different from standard decimal math because time uses a base-60 system (60 seconds in a minute, 60 minutes in an hour). Here's how to do it manually:
        </p>
        
        <h4 className="font-bold text-slate-900">Step 1: Add the Seconds</h4>
        <p>
          Sum the seconds from both time periods. If the total is 60 or more, divide by 60. The remainder is your new seconds value, and the quotient is the number of minutes to "carry over" to the next step.
        </p>

        <h4 className="font-bold text-slate-900">Step 2: Add the Minutes</h4>
        <p>
          Sum the minutes from both time periods, plus any carry-over from the seconds. Again, if the total is 60 or more, divide by 60. The remainder is your new minutes value, and the quotient is the number of hours to carry over.
        </p>

        <h4 className="font-bold text-slate-900">Step 3: Add the Hours</h4>
        <p>
          Sum the hours from both time periods, plus any carry-over from the minutes. This gives you your final total time.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Practical Applications of Time Math</h3>
        <p>
          Calculating time durations is essential in many professional and personal contexts:
        </p>
        <ul>
          <li><strong>Work and Payroll:</strong> Adding up daily hours to calculate weekly totals for timesheets and payroll processing.</li>
          <li><strong>Travel Planning:</strong> Calculating total travel time including layovers and time zone changes.</li>
          <li><strong>Project Management:</strong> Estimating the total duration of a project by adding up individual task times.</li>
          <li><strong>Sports and Fitness:</strong> Calculating total workout time or adding up split times in a race.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is the difference between 12-hour and 24-hour time?</p>
            <p>12-hour time uses AM and PM to distinguish between morning and afternoon. 24-hour time (often called military time) runs from 00:00 to 23:59. Our calculator works with durations, which are independent of the specific time format used.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I calculate time between two specific times (e.g., 9:15 AM to 5:30 PM)?</p>
            <p>To find the duration, subtract the start time from the end time. If the end time is in the PM, add 12 to the hours to convert it to 24-hour time first. For example, 5:30 PM is 17:30. Then, 17:30 - 09:15 = 8 hours and 15 minutes.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How many seconds are in a day?</p>
            <p>There are 86,400 seconds in a standard 24-hour day (24 hours * 60 minutes * 60 seconds).</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If you have two tasks, one taking <strong>2h 45m 30s</strong> and another taking <strong>1h 30m 45s</strong>:
          <br />Seconds: 30 + 45 = 75s (1m 15s)
          <br />Minutes: 45 + 30 + 1 (carry) = 76m (1h 16m)
          <br />Hours: 2 + 1 + 1 (carry) = 4h
          <br />Total: <strong>4h 16m 15s</strong>. Our calculator performs these complex steps instantly, ensuring you get the right answer every time.
        </p>
      </div>
    </div>
  );
};
