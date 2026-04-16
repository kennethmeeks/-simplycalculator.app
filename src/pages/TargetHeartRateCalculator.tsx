import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Heart, Activity, Info } from 'lucide-react';

export const TargetHeartRateCalculator: React.FC = () => {
  const [age, setAge] = useState(30);
  const [restingHR, setRestingHR] = useState(70);
  
  const [maxHR, setMaxHR] = useState(0);
  const [zones, setZones] = useState<{ name: string, min: number, max: number, desc: string }[]>([]);

  useEffect(() => {
    // Karvonen Formula: Target Heart Rate = ((Max HR − Resting HR) × %Intensity) + Resting HR
    const mhr = 220 - age;
    setMaxHR(mhr);
    
    const hrReserve = mhr - restingHR;
    
    const zoneData = [
      { name: 'Zone 1: Very Light', min: 50, max: 60, desc: 'Recovery, warm-up, and basic health.' },
      { name: 'Zone 2: Light', min: 60, max: 70, desc: 'Fat burning and basic endurance.' },
      { name: 'Zone 3: Moderate', min: 70, max: 80, desc: 'Aerobic fitness and cardiovascular health.' },
      { name: 'Zone 4: Hard', min: 80, max: 90, desc: 'Anaerobic capacity and speed endurance.' },
      { name: 'Zone 5: Maximum', min: 90, max: 100, desc: 'Peak performance and sprinting.' },
    ];
    
    const calculatedZones = zoneData.map(z => ({
      ...z,
      min: Math.round((hrReserve * (z.min / 100)) + restingHR),
      max: Math.round((hrReserve * (z.max / 100)) + restingHR),
    }));
    
    setZones(calculatedZones);
  }, [age, restingHR]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Target Heart Rate Calculator | Find Your Training Zones</title>
        <meta name="description" content="Free online target heart rate calculator using the Karvonen formula. Find your optimal heart rate zones for fat loss and fitness in 2026." />
      </Helmet>

      <h1>Target Heart Rate Calculator</h1>
      <p>Calculate your maximum heart rate and training zones. Optimize your workouts by exercising at the right intensity for your goals.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Your Stats</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Age (years)</label>
              <input 
                type="number" 
                value={age} 
                onChange={(e) => setAge(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Resting Heart Rate (BPM)</label>
              <input 
                type="number" 
                value={restingHR} 
                onChange={(e) => setRestingHR(Number(e.target.value))} 
                className="input-field" 
              />
              <p className="text-[10px] text-slate-400 mt-1 italic">Measure your pulse for 60 seconds while sitting still.</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-slate-50 rounded border border-slate-100 text-center">
            <div className="text-xs text-slate-500 uppercase font-bold mb-1">Estimated Max Heart Rate</div>
            <div className="text-3xl font-bold text-slate-700">{maxHR} BPM</div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Training Zones</div>
            <div className="space-y-3">
              {zones.map((zone) => (
                <div key={zone.name} className="p-3 border rounded border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-slate-800">{zone.name}</span>
                    <span className="text-sm font-bold text-[#0066cc]">{zone.min} - {zone.max} BPM</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{zone.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Heart Rate Training: A Guide to Intensity</h2>
        <p>
          Exercising at the right intensity is the difference between seeing results and spinning your wheels. Heart rate training uses your pulse as a real-time indicator of how hard your body is working. Our <strong>target heart rate calculator</strong> uses the advanced Karvonen formula to give you precise zones in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Karvonen Formula</h3>
        <p>
          While many simple calculators just use "220 minus age," the Karvonen formula is more accurate because it accounts for your <strong>Resting Heart Rate (RHR)</strong>. This reflects your current fitness level.
        </p>
        <div className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 my-4">
          Target HR = ((Max HR − Resting HR) × %Intensity) + Resting HR
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Five Training Zones</h3>
        <ul>
          <li><strong>Zone 1 (50-60%):</strong> Very light effort. Ideal for recovery days and warm-ups.</li>
          <li><strong>Zone 2 (60-70%):</strong> Light effort. The "fat-burning zone." You can hold a conversation easily. Builds basic aerobic endurance.</li>
          <li><strong>Zone 3 (70-80%):</strong> Moderate effort. Improves cardiovascular efficiency. Conversation becomes more difficult.</li>
          <li><strong>Zone 4 (80-90%):</strong> Hard effort. Improves anaerobic capacity and high-speed endurance. You can only speak in short sentences.</li>
          <li><strong>Zone 5 (90-100%):</strong> Maximum effort. Sprinting and peak performance. Only sustainable for very short durations.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How do I find my resting heart rate?</p>
            <p>The best time is right after you wake up, before getting out of bed. Place two fingers on your wrist or neck and count the beats for 60 seconds.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Is the "220 minus age" formula accurate?</p>
            <p>It's a rough estimate. It can be off by as much as 10-15 beats per minute for many individuals. The Karvonen formula or a field test is much more reliable.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I always train in the fat-burning zone (Zone 2)?</p>
            <p>While Zone 2 burns a higher <em>percentage</em> of fat, higher intensity zones burn more <em>total</em> calories. A well-rounded program includes a mix of intensities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
