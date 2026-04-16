import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const SpeedCalculator: React.FC = () => {
  const [distance, setDistance] = useState<number>(100);
  const [time, setTime] = useState<number>(10);
  const [speed, setSpeed] = useState<number>(0);

  useEffect(() => {
    setSpeed(distance / time);
  }, [distance, time]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Speed Calculator | Distance and Time Tool 2026</title>
        <meta name="description" content="Calculate the speed of an object based on its distance and time. Find the physical properties of your object easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Speed Calculator</h1>
        <p className="text-slate-600">Calculate the speed of an object based on its distance and time.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Object Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Distance (m)</label>
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Time (s)</label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Speed (v)</p>
              <p className="text-4xl font-bold text-[#0066cc]">{speed.toFixed(2)} m/s</p>
              <p className="text-lg font-semibold text-slate-900">{(speed * 3.6).toFixed(2)} km/h</p>
              <p className="text-lg font-semibold text-slate-900">{(speed * 2.23694).toFixed(2)} mph</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: Speed is defined as distance divided by time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Speed?</h2>
        <p>
          Speed is a measure of how fast an object is moving. It's a fundamental physical property of matter and is used in a wide range of fields, including physics, engineering, and science.
        </p>
        <h3>The Formula</h3>
        <p>
          The formula for speed is: v = d / t, where v is speed, d is distance, and t is time.
        </p>
        <h3>Why Speed Matters</h3>
        <p>
          Speed is critical for analyzing and interpreting data in a wide range of fields, including science, engineering, and transportation. It provides a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
