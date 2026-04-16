import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


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
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Ultimate Guide to Area Calculation</h2>
        <p>
          Area is a measure of the two-dimensional space inside a boundary. Whether you are calculating the amount of paint needed for a wall, the square footage of a new home, or the size of a garden plot, our <strong>area calculator</strong> provides precise results for all common 2D shapes in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Common Area Formulas</h3>
        <p>
          Each shape has its own mathematical formula derived from geometry principles:
        </p>
        <ul>
          <li><strong>Rectangle / Square:</strong> Length × Width. For a square, all sides are equal (Side²).</li>
          <li><strong>Circle:</strong> π × Radius². This calculates the space inside a circular boundary.</li>
          <li><strong>Triangle:</strong> ½ × Base × Height. This works for any triangle as long as you know the perpendicular height.</li>
          <li><strong>Trapezoid:</strong> ½ × (Base1 + Base2) × Height. This is the average of the two parallel bases multiplied by the height.</li>
          <li><strong>Ellipse:</strong> π × a × b. Where 'a' and 'b' are the semi-major and semi-minor axes.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Practical Applications of Area</h3>
        <p>
          Understanding area is essential in many professional and personal scenarios:
        </p>
        
        <h4 className="font-bold text-slate-900">Real Estate and Construction</h4>
        <p>
          Calculating the square footage of a room for flooring, the area of a roof for shingles, or the size of a lot for property taxes. Accurate area math prevents over-ordering materials and ensures correct pricing.
        </p>

        <h4 className="font-bold text-slate-900">Design and Art</h4>
        <p>
          Determining the canvas size for a painting, the area of a graphic design element, or the amount of fabric needed for upholstery.
        </p>

        <h4 className="font-bold text-slate-900">Agriculture and Landscaping</h4>
        <p>
          Measuring the area of a field for seed and fertilizer application or the size of a lawn for sod installation.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What units are used for area?</p>
            <p>Area is measured in square units, such as square centimeters (cm²), square meters (m²), square inches (in²), or square feet (ft²). Larger areas might use acres or hectares.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I convert between area units?</p>
            <p>Conversion factors for area are the square of the linear conversion factors. For example, since 1 foot = 12 inches, 1 square foot = 12² = 144 square inches.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the "surface area" of a 3D object?</p>
            <p>Surface area is the total area of all the faces of a 3D object. While this calculator focuses on 2D shapes, surface area is essentially the sum of the areas of multiple 2D shapes.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Pro Tip: Irregular Shapes</h3>
        <p>
          To calculate the area of an irregular shape, try breaking it down into smaller, standard shapes (like rectangles and triangles). Calculate the area of each piece and add them together to find the total area.
        </p>
      </div>
    </div>
  );
};
