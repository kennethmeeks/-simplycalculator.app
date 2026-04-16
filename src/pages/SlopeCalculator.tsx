import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { TrendingUp, Move, Info } from 'lucide-react';

export const SlopeCalculator: React.FC = () => {
  const [x1, setX1] = useState(0);
  const [y1, setY1] = useState(0);
  const [x2, setX2] = useState(2);
  const [y2, setY2] = useState(4);
  
  const [slope, setSlope] = useState<number | string>(0);
  const [angle, setAngle] = useState(0);
  const [equation, setEquation] = useState('');

  useEffect(() => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    
    if (dx === 0) {
      setSlope('Undefined (Vertical)');
      setAngle(90);
      setEquation(`x = ${x1}`);
    } else {
      const m = dy / dx;
      const b = y1 - m * x1;
      const deg = (Math.atan(m) * 180) / Math.PI;
      
      setSlope(Number(m.toFixed(4)));
      setAngle(Number(deg.toFixed(2)));
      setEquation(`y = ${m === 0 ? '' : (m === 1 ? 'x' : (m === -1 ? '-x' : `${m.toFixed(2)}x`))} ${b >= 0 ? `+ ${b.toFixed(2)}` : `- ${Math.abs(b).toFixed(2)}`}`);
    }
  }, [x1, y1, x2, y2]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Slope Calculator | Calculate Line Slope, Angle & Equation</title>
        <meta name="description" content="Free online slope calculator to find the slope of a line between two points. Includes slope-intercept form equation and angle of inclination in 2026." />
      </Helmet>

      <h1>Slope Calculator</h1>
      <p>Find the slope of a line passing through two points (x₁, y₁) and (x₂, y₂). Calculate the rate of change, the angle of inclination, and the line equation.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Point Coordinates</div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="input-label">Point 1: x₁</label>
                <input 
                  type="number" 
                  value={x1} 
                  onChange={(e) => setX1(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Point 1: y₁</label>
                <input 
                  type="number" 
                  value={y1} 
                  onChange={(e) => setY1(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="input-label">Point 2: x₂</label>
                <input 
                  type="number" 
                  value={x2} 
                  onChange={(e) => setX2(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Point 2: y₂</label>
                <input 
                  type="number" 
                  value={y2} 
                  onChange={(e) => setY2(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Line Properties</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10 text-center">
                <div className="text-xs text-slate-500 uppercase font-bold">Slope (m)</div>
                <div className="text-4xl font-bold text-[#0066cc]">{slope}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Angle</div>
                  <div className="text-lg font-bold text-slate-700">{angle}°</div>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Equation</div>
                  <div className="text-xs font-bold text-slate-700 truncate">{equation}</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Slope: A Geometry Guide</h2>
        <p>
          In mathematics, the slope of a line describes its steepness and direction. It is a fundamental concept in algebra, geometry, and calculus, representing the "rate of change" between two variables. Our <strong>slope calculator</strong> helps you solve for slope instantly in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Slope Formula</h3>
        <p>
          The slope (m) of a non-vertical line passing through the points (x₁, y₁) and (x₂, y₂) is calculated as the "rise over run":
        </p>
        <div className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 my-4">
          m = (y₂ - y₁) / (x₂ - x₁)
        </div>
        <p>Where:</p>
        <ul>
          <li><strong>Rise (y₂ - y₁):</strong> The vertical change between the points.</li>
          <li><strong>Run (x₂ - x₁):</strong> The horizontal change between the points.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Types of Slope</h3>
        <ul>
          <li><strong>Positive Slope:</strong> The line rises from left to right. As x increases, y also increases.</li>
          <li><strong>Negative Slope:</strong> The line falls from left to right. As x increases, y decreases.</li>
          <li><strong>Zero Slope:</strong> The line is perfectly horizontal. The y-coordinates are the same (y₁ = y₂).</li>
          <li><strong>Undefined Slope:</strong> The line is perfectly vertical. The x-coordinates are the same (x₁ = x₂). You cannot divide by zero, so the slope is undefined.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Slope-Intercept Form</h3>
        <p>
          Once you have the slope (m), you can write the equation of the line in slope-intercept form: <strong>y = mx + b</strong>, where <strong>b</strong> is the y-intercept (the point where the line crosses the y-axis).
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is the slope of a vertical line?</p>
            <p>A vertical line has an undefined slope because the "run" (change in x) is zero, and division by zero is not possible in mathematics.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I find the angle of a line from its slope?</p>
            <p>The angle of inclination (θ) is found using the inverse tangent function: θ = tan⁻¹(m). This gives the angle the line makes with the positive x-axis.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What does a slope of 1 mean?</p>
            <p>A slope of 1 means that for every 1 unit you move to the right, you move exactly 1 unit up. This creates a 45-degree angle with the x-axis.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
