import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

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
        <title>Pace Calculator — Want to Break 20:00 in a 5K? Free Tool</title>
        <meta name="description" content="Calculate your exact running pace. Find the split times you need to hit your goal time for any race distance in 2026." />
      </Helmet>

      <h1>Pace Calculator: What Split Do You Need To Hit Your Goal?</h1>
      <p>Running just 5 seconds per mile faster can be the difference between a PR and a struggle; find your perfect pace instantly.</p>

      

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

      <CalculatorSEO 
        name="Pace Calculator" 
        path="/pace-calculator" 
        description="Calculate your running pace, time, or distance for your next race or training session. Benchmarks and race goal setting for 2026."
      />
    </div>
  );
};
