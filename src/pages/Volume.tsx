import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


type Shape = 'cube' | 'sphere' | 'cylinder' | 'cone' | 'pyramid';

export const VolumeCalculator: React.FC = () => {
  const [shape, setShape] = useState<Shape>('cube');
  const [side, setSide] = useState(1);
  const [radius, setRadius] = useState(1);
  const [height, setHeight] = useState(1);
  const [length, setLength] = useState(1);
  const [width, setWidth] = useState(1);
  
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    let v = 0;
    switch (shape) {
      case 'cube':
        v = length * width * height;
        break;
      case 'sphere':
        v = (4/3) * Math.PI * Math.pow(radius, 3);
        break;
      case 'cylinder':
        v = Math.PI * Math.pow(radius, 2) * height;
        break;
      case 'cone':
        v = (1/3) * Math.PI * Math.pow(radius, 2) * height;
        break;
      case 'pyramid':
        v = (1/3) * length * width * height;
        break;
    }
    setVolume(Number(v.toFixed(4)));
  }, [shape, side, radius, height, length, width]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Volume Calculator [Instant Results]</title>
        <meta name="description" content="Free online volume calculator to find the volume of common 3D shapes including spheres, cylinders, cones, pyramids, and rectangular prisms." />
      </Helmet>

      <h1>Volume Calculator</h1>
      <p>Calculate the volume of various three-dimensional shapes with ease. Simply select your shape and enter the dimensions.</p>

      

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
                <option value="cube">Rectangular Prism / Cube</option>
                <option value="sphere">Sphere</option>
                <option value="cylinder">Cylinder</option>
                <option value="cone">Cone</option>
                <option value="pyramid">Pyramid</option>
              </select>
            </div>

            {(shape === 'cube' || shape === 'pyramid') && (
              <>
                <div>
                  <label className="input-label">Length</label>
                  <input 
                    type="number" 
                    value={length} 
                    onChange={(e) => setLength(Number(e.target.value))} 
                    className="input-field" 
                  />
                </div>
                <div>
                  <label className="input-label">Width</label>
                  <input 
                    type="number" 
                    value={width} 
                    onChange={(e) => setWidth(Number(e.target.value))} 
                    className="input-field" 
                  />
                </div>
              </>
            )}

            {(shape === 'sphere' || shape === 'cylinder' || shape === 'cone') && (
              <div>
                <label className="input-label">Radius</label>
                <input 
                  type="number" 
                  value={radius} 
                  onChange={(e) => setRadius(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            )}

            {(shape !== 'sphere') && (
              <div>
                <label className="input-label">Height</label>
                <input 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Volume Result</div>
            <div className="result-box py-8">
              <div className="text-sm text-slate-500 uppercase font-bold mb-2">Total Volume</div>
              <div className="text-4xl font-bold text-[#0066cc]">{volume}</div>
              <div className="text-xs text-slate-400 mt-2 italic">cubic units</div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Comprehensive Guide to Volume Calculation</h2>
        <p>
          Volume is a measure of the three-dimensional space occupied by an object. Whether you are calculating the amount of water in a pool, the capacity of a shipping container, or the volume of a chemical in a lab, our <strong>volume calculator</strong> provides fast and accurate results for all common 3D shapes in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Common Volume Formulas</h3>
        <p>
          Each shape has its own mathematical formula derived from geometry principles:
        </p>
        <ul>
          <li><strong>Rectangular Prism / Cube:</strong> Length × Width × Height. For a perfect cube, all sides are equal (Side³).</li>
          <li><strong>Sphere:</strong> (4/3) × π × Radius³. This calculates the total space inside a perfectly round ball.</li>
          <li><strong>Cylinder:</strong> π × Radius² × Height. This is the area of the circular base multiplied by the height.</li>
          <li><strong>Cone:</strong> (1/3) × π × Radius² × Height. A cone occupies exactly one-third of the volume of a cylinder with the same base and height.</li>
          <li><strong>Pyramid:</strong> (1/3) × Base Area × Height. Similar to a cone, a pyramid occupies one-third of the volume of its corresponding prism.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Practical Applications of Volume</h3>
        <p>
          Understanding volume is essential in many professional and personal scenarios:
        </p>
        
        <h4 className="font-bold text-slate-900">Construction and DIY</h4>
        <p>
          Calculating the volume of concrete for a slab, the amount of mulch for a garden bed, or the capacity of a storage tank. Accurate volume math prevents waste and ensures you buy the right amount of materials.
        </p>

        <h4 className="font-bold text-slate-900">Logistics and Shipping</h4>
        <p>
          Determining how many boxes can fit into a shipping container or the cargo capacity of a vehicle. This is often referred to as "cubic capacity."
        </p>

        <h4 className="font-bold text-slate-900">Science and Medicine</h4>
        <p>
          Measuring liquid volumes in chemistry experiments or calculating the dosage of a medication based on volume.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What units are used for volume?</p>
            <p>Volume is measured in cubic units, such as cubic centimeters (cm³), cubic meters (m³), cubic inches (in³), or cubic feet (ft³). It can also be expressed in liters or gallons.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I convert between volume units?</p>
            <p>Conversion factors vary. For example, 1 cubic meter equals 1,000 liters. 1 cubic foot equals approximately 7.48 gallons. Our calculator provides the raw numerical result, which you can then convert to your preferred unit.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the value of Pi (π)?</p>
            <p>Pi is a mathematical constant approximately equal to 3.14159. It represents the ratio of a circle's circumference to its diameter.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          To find the volume of a <strong>cylinder</strong> with a radius of <strong>5 cm</strong> and a height of <strong>10 cm</strong>: Volume = π × 5² × 10 = π × 25 × 10 = 250π ≈ <strong>785.40 cm³</strong>. Our calculator performs these complex steps instantly, ensuring you get the right answer every time.
        </p>
      </div>
    </div>
  );
};
