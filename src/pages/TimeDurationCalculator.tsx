import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const TimeDurationCalculator: React.FC = () => {
  const [startTime, setStartTime] = useState<string>('09:00');
  const [endTime, setEndTime] = useState<string>('17:00');
  const [duration, setDuration] = useState<string>('');

  useEffect(() => {
    const start = new Date(`2000-01-01T${startTime}:00`);
    const end = new Date(`2000-01-01T${endTime}:00`);
    let diff = end.getTime() - start.getTime();
    if (diff < 0) diff += 24 * 60 * 60 * 1000; // Handle overnight
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    setDuration(`${hours} hours and ${minutes} minutes`);
  }, [startTime, endTime]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Time Duration Calculator | Calculate Elapsed Time 2026</title>
        <meta name="description" content="Calculate the duration between two times. Find the elapsed time of your activities easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Time Duration Calculator</h1>
        <p className="text-slate-600">Calculate the duration between two times.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Time Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Start Time</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">End Time</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Duration</p>
              <p className="text-4xl font-bold text-[#0066cc]">{duration}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation handles overnight durations by adding 24 hours if the end time is before the start time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Time Duration?</h2>
        <p>
          Time duration is a measure of the elapsed time between two events. It's a useful tool for quantifying the uncertainty of an estimate and identifying the range of values for a data set.
        </p>
        <h3>How to Calculate Time Duration</h3>
        <p>
          To calculate time duration, you simply subtract the start time from the end time. The formula is: T = E - S, where T is time, E is end time, and S is start time.
        </p>
        <h3>Why Time Duration Matters</h3>
        <p>
          Time duration is critical for analyzing and interpreting data in a wide range of fields, including science, engineering, and business. It provides a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
