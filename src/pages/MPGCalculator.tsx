import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Fuel, Gauge, TrendingDown, Info } from 'lucide-react';

export const MPGCalculator: React.FC = () => {
  const [miles, setMiles] = useState<number>(300);
  const [gallons, setGallons] = useState<number>(12);
  const [mpg, setMpg] = useState<number>(0);
  const [lp100km, setLp100km] = useState<number>(0);

  useEffect(() => {
    if (gallons > 0) {
      const calculatedMpg = miles / gallons;
      setMpg(Number(calculatedMpg.toFixed(2)));
      
      // L/100km = 235.215 / MPG
      if (calculatedMpg > 0) {
        setLp100km(Number((235.215 / calculatedMpg).toFixed(2)));
      }
    }
  }, [miles, gallons]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>MPG Calculator | Calculate Fuel Efficiency & L/100km</title>
        <meta name="description" content="Free online MPG calculator. Calculate your vehicle's fuel efficiency in miles per gallon and liters per 100km based on distance and fuel used in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">MPG Calculator</h1>
        <p className="text-slate-600">Calculate your car's fuel efficiency by entering the distance traveled and the amount of fuel used.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Distance Traveled (Miles)</label>
                <input 
                  type="number" 
                  value={miles} 
                  onChange={(e) => setMiles(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Fuel Used (Gallons)</label>
                <input 
                  type="number" 
                  value={gallons} 
                  onChange={(e) => setGallons(Math.max(0.1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              How to Measure MPG
            </h2>
            <ol className="text-slate-600 text-sm space-y-3 list-decimal pl-4">
              <li>Fill your gas tank completely and reset your trip odometer to zero.</li>
              <li>Drive normally until you need more fuel.</li>
              <li>Fill the tank again and record the number of gallons used and the miles on the trip odometer.</li>
              <li>Enter those numbers into this calculator to find your actual MPG.</li>
            </ol>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Gauge className="w-5 h-5" />
              Efficiency Results
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-slate-800">
                <div className="text-4xl font-bold mb-1">{mpg}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Miles Per Gallon (MPG)</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">{lp100km}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Liters per 100km</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
              Improve Your MPG
            </h3>
            <ul className="text-sm text-slate-600 space-y-3">
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Maintain proper tire pressure.
              </li>
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Avoid rapid acceleration and braking.
              </li>
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Remove unnecessary weight from the car.
              </li>
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Use the recommended grade of motor oil.
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Fuel Efficiency in 2026</h2>
        <p>
          Fuel efficiency is a critical factor for car owners, impacting both your wallet and the environment. Our <strong>MPG calculator</strong> provides a simple way to track your vehicle's performance over time.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">MPG vs. L/100km</h3>
        <p>
          In the United States, we use <strong>Miles Per Gallon (MPG)</strong>. In many other parts of the world, fuel efficiency is measured in <strong>Liters per 100 Kilometers (L/100km)</strong>.
        </p>
        <ul>
          <li><strong>MPG:</strong> Higher is better (more distance per unit of fuel).</li>
          <li><strong>L/100km:</strong> Lower is better (less fuel per unit of distance).</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Your MPG Varies</h3>
        <p>
          The fuel efficiency listed on your car's window sticker is an estimate. Your real-world MPG can be affected by:
        </p>
        <ul>
          <li><strong>Driving Habits:</strong> Aggressive driving can lower MPG by up to 33%.</li>
          <li><strong>Terrain:</strong> Driving in hilly areas or on unpaved roads reduces efficiency.</li>
          <li><strong>Weather:</strong> Cold weather and wind resistance can significantly impact fuel economy.</li>
          <li><strong>Vehicle Maintenance:</strong> A poorly tuned engine or clogged air filters can decrease MPG.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Does using AC lower my MPG?</p>
            <p>Yes, using the air conditioner can reduce fuel economy by 5% to 25%, depending on the vehicle and outside temperature.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Is highway MPG always better than city MPG?</p>
            <p>For traditional gas vehicles, yes, because highway driving involves fewer stops and starts. However, many hybrid vehicles actually get better MPG in the city due to regenerative braking.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
