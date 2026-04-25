import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


type Shape = 'rectangle' | 'circle' | 'triangle' | 'trapezoid' | 'ellipse';

export const AreaCalculator: React.FC = () => {
  const [shape, setShape] = useState<Shape>('rectangle');
  const [length, setLength] = useState(10);
  const [width, setWidth] = useState(5);
  const [radius, setRadius] = useState(5);
  const [base, setBase] = useState(10);
  const [height, setHeight] = useState(5);
  const [base2, setBase2] = useState(8);
  const [radius2, setRadius2] = useState(3);
  
  const [area, setArea] = useState(0);

  useEffect(() => {
    let a = 0;
    switch (shape) {
      case 'rectangle':
        a = length * width;
        break;
      case 'circle':
        a = Math.PI * Math.pow(radius, 2);
        break;
      case 'triangle':
        a = 0.5 * base * height;
        break;
      case 'trapezoid':
        a = 0.5 * (base + base2) * height;
        break;
      case 'ellipse':
        a = Math.PI * radius * radius2;
        break;
    }
    setArea(Number(a.toFixed(4)));
  }, [shape, length, width, radius, base, height, base2, radius2]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Area Calculator | Calculate Area for Circle, Rectangle, Triangle & More | simplycalculator.app</title>
        <meta name="description" content="Free online area calculator to find the surface area of common 2D shapes including circles, rectangles, triangles, trapezoids, and ellipses." />
      </Helmet>

      <h1>Area Calculator</h1>
      <p>Calculate the area of various two-dimensional shapes. Select your shape and enter the required dimensions to get the result instantly.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Select Shape & Dimensions</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Shape</label>
              <select 
                value={shape} 
                onChange={(e) => setShape(e.target.value as Shape)}
                className="input-field"
              >
                <option value="rectangle">Rectangle / Square</option>
                <option value="circle">Circle</option>
                <option value="triangle">Triangle</option>
                <option value="trapezoid">Trapezoid</option>
                <option value="ellipse">Ellipse</option>
              </select>
            </div>

            {shape === 'rectangle' && (
              <>
                <div>
                  <label className="input-label">Length</label>
                  <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} className="input-field" />
                </div>
                <div>
                  <label className="input-label">Width</label>
                  <input type="number" value={width} onChange={(e) => setWidth(Number(e.target.value))} className="input-field" />
                </div>
              </>
            )}

            {shape === 'circle' && (
              <div>
                <label className="input-label">Radius</label>
                <input type="number" value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="input-field" />
              </div>
            )}

            {shape === 'triangle' && (
              <>
                <div>
                  <label className="input-label">Base</label>
                  <input type="number" value={base} onChange={(e) => setBase(Number(e.target.value))} className="input-field" />
                </div>
                <div>
                  <label className="input-label">Height</label>
                  <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="input-field" />
                </div>
              </>
            )}

            {shape === 'trapezoid' && (
              <>
                <div>
                  <label className="input-label">Base 1 (Top)</label>
                  <input type="number" value={base} onChange={(e) => setBase(Number(e.target.value))} className="input-field" />
                </div>
                <div>
                  <label className="input-label">Base 2 (Bottom)</label>
                  <input type="number" value={base2} onChange={(e) => setBase2(Number(e.target.value))} className="input-field" />
                </div>
                <div>
                  <label className="input-label">Height</label>
                  <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="input-field" />
                </div>
              </>
            )}

            {shape === 'ellipse' && (
              <>
                <div>
                  <label className="input-label">Semi-major Axis (a)</label>
                  <input type="number" value={radius} onChange={(e) => setRadius(Number(e.target.value))} className="input-field" />
                </div>
                <div>
                  <label className="input-label">Semi-minor Axis (b)</label>
                  <input type="number" value={radius2} onChange={(e) => setRadius2(Number(e.target.value))} className="input-field" />
                </div>
              </>
            )}
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Area Result</div>
            <div className="result-box py-8">
              <div className="text-sm text-slate-500 uppercase font-bold mb-2">Total Area</div>
              <div className="text-4xl font-bold text-[#0066cc]">{area}</div>
              <div className="text-xs text-slate-400 mt-2 italic">square units</div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setShape('rectangle');
              setLength(10);
              setWidth(5);
              setRadius(5);
              setBase(10);
              setHeight(5);
              setBase2(8);
              setRadius2(3);
            }}
            onCopy={() => {
              const text = `Area Results (${shape}):\nArea: ${area} square units\nCalculated at simplycalculator.app`;
              navigator.clipboard.writeText(text);
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Area Calculator" 
        path="/area" 
        description="Calculate the surface area for common 2D shapes like circles, rectangles, and triangles. Get precise geometric measurements for 2026 projects."
      />
    </div>
  );
};
