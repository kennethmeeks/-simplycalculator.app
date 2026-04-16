import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Circle, Info, Settings, Ruler } from 'lucide-react';

export const TireSizeCalculator: React.FC = () => {
  const [width, setWidth] = useState<number>(225);
  const [aspectRatio, setAspectRatio] = useState<number>(45);
  const [rimSize, setRimSize] = useState<number>(18);
  const [diameter, setDiameter] = useState<number>(0);
  const [circumference, setCircumference] = useState<number>(0);
  const [revsPerMile, setRevsPerMile] = useState<number>(0);

  useEffect(() => {
    // Formula: Diameter = RimSize + 2 * (Width * AspectRatio / 100) / 25.4
    const sidewall = (width * aspectRatio) / 100;
    const totalDiameter = rimSize + (2 * sidewall) / 25.4;
    setDiameter(Number(totalDiameter.toFixed(2)));
    
    const circ = totalDiameter * Math.PI;
    setCircumference(Number(circ.toFixed(2)));
    
    // Revs per mile = 63360 / Circumference
    setRevsPerMile(Number((63360 / circ).toFixed(0)));
  }, [width, aspectRatio, rimSize]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Tire Size Calculator | Calculate Diameter & Circumference</title>
        <meta name="description" content="Free online tire size calculator. Calculate your tire's diameter, circumference, and revolutions per mile based on standard tire sizing in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Tire Size Calculator</h1>
        <p className="text-slate-600">Enter your tire's measurements to calculate its overall dimensions and performance characteristics.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="input-label">Width (mm)</label>
                <input 
                  type="number" 
                  value={width} 
                  onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Aspect Ratio (%)</label>
                <input 
                  type="number" 
                  value={aspectRatio} 
                  onChange={(e) => setAspectRatio(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Rim Size (in)</label>
                <input 
                  type="number" 
                  value={rimSize} 
                  onChange={(e) => setRimSize(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded border border-slate-200 text-xs text-slate-500 font-mono text-center">
              Example: {width}/{aspectRatio}R{rimSize}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Tire Sizing Explained
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Tire sizes are written in a specific format (e.g., 225/45R18). Each number represents a different measurement:
            </p>
            <ul className="mt-4 text-xs text-slate-500 space-y-2 list-disc pl-4">
              <li><strong>Width (225):</strong> The width of the tire in millimeters from sidewall to sidewall.</li>
              <li><strong>Aspect Ratio (45):</strong> The height of the sidewall as a percentage of the width.</li>
              <li><strong>Rim Size (18):</strong> The diameter of the wheel in inches that the tire fits.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Ruler className="w-5 h-5" />
              Tire Dimensions
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-slate-800">
                <div className="text-4xl font-bold mb-1">{diameter}"</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Overall Diameter</div>
              </div>
              <div className="text-center py-4 border-b border-slate-800">
                <div className="text-4xl font-bold mb-1">{circumference}"</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Circumference</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">{revsPerMile}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Revolutions Per Mile</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Safety Warning
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When changing tire sizes, it is generally recommended to stay within 3% of the original diameter to avoid issues with speedometer accuracy, ABS, and traction control systems.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Importance of Tire Sizing in 2026</h2>
        <p>
          Choosing the right <strong>tire size</strong> is essential for your vehicle's safety, performance, and fuel efficiency. Our calculator helps you understand the physical dimensions of your tires and how they impact your car's behavior on the road.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How Tire Size Affects Speedometer Accuracy</h3>
        <p>
          Your speedometer is calibrated based on the circumference of your original tires. If you install larger tires, your speedometer will read slower than your actual speed. Conversely, smaller tires will cause your speedometer to read faster than you are actually traveling.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Sidewall Height and Ride Comfort</h3>
        <p>
          The <strong>aspect ratio</strong> determines how much "cushion" your tires provide. A higher aspect ratio (e.g., 65) means more sidewall, which generally results in a smoother ride but less responsive handling. A lower aspect ratio (e.g., 35) means less sidewall, which improves cornering performance but makes the ride much firmer and increases the risk of wheel damage from potholes.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Can I put wider tires on my current rims?</p>
            <p>Usually, yes, but only within a certain range. Every rim has a range of tire widths it can safely accommodate. Consult a tire professional before making a significant change.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What does the "R" in a tire size mean?</p>
            <p>The "R" stands for <strong>Radial</strong>, which refers to the way the tire is constructed. Almost all modern passenger car tires are radial tires.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
