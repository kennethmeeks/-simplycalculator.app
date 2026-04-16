import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Timer, Footprints, Info } from 'lucide-react';

export const PaceCalculator: React.FC = () => {
  const [distance, setDistance] = useState(5); // km
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  
  const [paceMin, setPaceMin] = useState(0);
  const [paceSec, setPaceSec] = useState(0);
  const [speedKmh, setSpeedKmh] = useState(0);

  useEffect(() => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    if (distance > 0 && totalSeconds > 0) {
      const pacePerKm = totalSeconds / distance;
      setPaceMin(Math.floor(pacePerKm / 60));
      setPaceSec(Math.round(pacePerKm % 60));
      setSpeedKmh(Number((distance / (totalSeconds / 3600)).toFixed(2)));
    }
  }, [distance, hours, minutes, seconds]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Pace Calculator | Calculate Running Pace & Speed</title>
        <meta name="description" content="Free online pace calculator for runners. Calculate your pace per mile or kilometer based on time and distance for your next race in 2026." />
      </Helmet>

      <h1>Pace Calculator</h1>
      <p>Calculate your running pace based on time and distance. Perfect for training for a 5K, 10K, half-marathon, or full marathon.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Race Details</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Distance (km)</label>
              <input 
                type="number" 
                value={distance} 
                onChange={(e) => setDistance(Number(e.target.value))} 
                className="input-field" 
              />
              <div className="flex gap-2 mt-2">
                <button onClick={() => setDistance(5)} className="text-[10px] bg-slate-100 px-2 py-1 rounded hover:bg-slate-200">5K</button>
                <button onClick={() => setDistance(10)} className="text-[10px] bg-slate-100 px-2 py-1 rounded hover:bg-slate-200">10K</button>
                <button onClick={() => setDistance(21.1)} className="text-[10px] bg-slate-100 px-2 py-1 rounded hover:bg-slate-200">Half</button>
                <button onClick={() => setDistance(42.2)} className="text-[10px] bg-slate-100 px-2 py-1 rounded hover:bg-slate-200">Full</button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="input-label">Hours</label>
                <input 
                  type="number" 
                  value={hours} 
                  onChange={(e) => setHours(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Minutes</label>
                <input 
                  type="number" 
                  value={minutes} 
                  onChange={(e) => setMinutes(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Seconds</label>
                <input 
                  type="number" 
                  value={seconds} 
                  onChange={(e) => setSeconds(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Your Pace</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10 text-center">
                <div className="text-xs text-slate-500 uppercase font-bold">Pace per Kilometer</div>
                <div className="text-5xl font-bold text-[#0066cc]">
                  {paceMin}:{paceSec < 10 ? `0${paceSec}` : paceSec}
                </div>
                <div className="text-sm text-slate-500 mt-1 font-medium">min / km</div>
              </div>
              
              <div className="p-4 bg-[#f0f7ff] rounded border border-[#0066cc]/10 text-center">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1 border-b border-[#0066cc]/10 pb-1">Average Speed</div>
                <div className="text-2xl font-bold text-[#0066cc]">{speedKmh} km/h</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Running for Results: A Pace Guide</h2>
        <p>
          Whether you're a beginner runner or an experienced marathoner, understanding your pace is key to effective training and race planning. Our <strong>pace calculator</strong> helps you break down your performance metrics in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Pace Matters</h3>
        <p>
          Pace is the amount of time it takes to cover a specific distance (usually minutes per mile or kilometer). Unlike speed (miles or kilometers per hour), pace is the standard metric used by runners to gauge their effort and predict race times.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Common Race Distances</h3>
        <ul>
          <li><strong>5K:</strong> 3.1 miles or 5 kilometers. A popular distance for beginners and speed training.</li>
          <li><strong>10K:</strong> 6.2 miles or 10 kilometers. A great endurance test for intermediate runners.</li>
          <li><strong>Half Marathon:</strong> 13.1 miles or 21.1 kilometers. Requires significant endurance training.</li>
          <li><strong>Marathon:</strong> 26.2 miles or 42.2 kilometers. The ultimate endurance challenge.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Training with Pace Zones</h3>
        <p>Effective training involves running at different paces to target different energy systems:</p>
        <ul>
          <li><strong>Easy Pace:</strong> 60-90 seconds slower than marathon pace. Used for recovery and building base mileage.</li>
          <li><strong>Tempo Pace:</strong> "Comfortably hard." Used to improve your lactate threshold.</li>
          <li><strong>Interval Pace:</strong> Fast bursts followed by rest. Used to improve VO2 max and top-end speed.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How do I convert km pace to mile pace?</p>
            <p>To convert min/km to min/mile, multiply the total minutes by 1.609. For example, a 5:00 min/km pace is approximately an 8:03 min/mile pace.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is a "good" 5K pace?</p>
            <p>A "good" pace is relative to your age and experience. For many recreational runners, a sub-30 minute 5K (6:00 min/km pace) is an excellent goal.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How can I improve my pace?</p>
            <p>Consistent mileage, strength training, and incorporating "speed work" (intervals and hill repeats) once or twice a week are the most effective ways to get faster.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
