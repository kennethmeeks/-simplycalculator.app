import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const ConcreteCalculator: React.FC = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('imperial');
  const [shape, setShape] = useState<'slab' | 'column' | 'footing'>('slab');
  
  // Slab / Footing dimensions
  const [length, setLength] = useState(10);
  const [width, setWidth] = useState(10);
  const [thickness, setThickness] = useState(4); // inches or cm
  
  // Column dimensions
  const [diameter, setDiameter] = useState(12);
  const [height, setHeight] = useState(8);
  
  const [quantity, setQuantity] = useState(1);
  const [waste, setWaste] = useState(10); // percentage
  
  const [volume, setVolume] = useState(0);
  const [bags80lb, setBags80lb] = useState(0);
  const [bags60lb, setBags60lb] = useState(0);

  useEffect(() => {
    let volCubicFt = 0;
    
    if (shape === 'slab' || shape === 'footing') {
      if (unitSystem === 'imperial') {
        // Length(ft) * Width(ft) * Thickness(ft)
        volCubicFt = length * width * (thickness / 12);
      } else {
        // Length(m) * Width(m) * Thickness(m) -> convert to cubic ft for bag calc
        const volCubicM = length * width * (thickness / 100);
        volCubicFt = volCubicM * 35.3147;
      }
    } else if (shape === 'column') {
      if (unitSystem === 'imperial') {
        // PI * r^2 * h
        const radius = (diameter / 12) / 2;
        volCubicFt = Math.PI * Math.pow(radius, 2) * height;
      } else {
        const radiusM = (diameter / 100) / 2;
        const volCubicM = Math.PI * Math.pow(radiusM, 2) * height;
        volCubicFt = volCubicM * 35.3147;
      }
    }
    
    const totalVol = volCubicFt * quantity * (1 + waste / 100);
    setVolume(totalVol);
    
    // 80lb bag is approx 0.6 cubic feet
    // 60lb bag is approx 0.45 cubic feet
    setBags80lb(Math.ceil(totalVol / 0.6));
    setBags60lb(Math.ceil(totalVol / 0.45));
  }, [unitSystem, shape, length, width, thickness, diameter, height, quantity, waste]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Concrete Calculator | Cubic Yards & Bag Estimator for Slabs & Footings | simplycalculator.app</title>
        <meta name="description" content="Calculate concrete volume in cubic yards or bags for slabs, footings, and columns. Includes waste percentage and bag count for 80lb and 60lb mixes." />
      </Helmet>

      <h1>Concrete Calculator</h1>
      <p>Estimate the amount of concrete needed for your construction project, including slabs, footings, and columns.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Project Details</div>
          
          <div className="flex gap-4 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={unitSystem === 'imperial'}
                onChange={() => setUnitSystem('imperial')}
              />
              <span className="text-sm font-bold">US Units (ft/in)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={unitSystem === 'metric'}
                onChange={() => setUnitSystem('metric')}
              />
              <span className="text-sm font-bold">Metric Units (m/cm)</span>
            </label>
          </div>

          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Shape</label>
              <select 
                value={shape} 
                onChange={(e) => setShape(e.target.value as any)} 
                className="input-field w-full"
              >
                <option value="slab">Slab / Square Footing</option>
                <option value="column">Round Column / Post Hole</option>
              </select>
            </div>

            {shape === 'slab' ? (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="input-group">
                    <label className="input-label">Length ({unitSystem === 'imperial' ? 'ft' : 'm'})</label>
                    <input 
                      type="number" 
                      value={length} 
                      onChange={(e) => setLength(Number(e.target.value))} 
                      className="input-field w-full" 
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Width ({unitSystem === 'imperial' ? 'ft' : 'm'})</label>
                    <input 
                      type="number" 
                      value={width} 
                      onChange={(e) => setWidth(Number(e.target.value))} 
                      className="input-field w-full" 
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label className="input-label">Thickness ({unitSystem === 'imperial' ? 'in' : 'cm'})</label>
                  <input 
                    type="number" 
                    value={thickness} 
                    onChange={(e) => setThickness(Number(e.target.value))} 
                    className="input-field w-full" 
                  />
                </div>
              </>
            ) : (
              <>
                <div className="input-group">
                  <label className="input-label">Diameter ({unitSystem === 'imperial' ? 'in' : 'cm'})</label>
                  <input 
                    type="number" 
                    value={diameter} 
                    onChange={(e) => setDiameter(Number(e.target.value))} 
                    className="input-field w-full" 
                  />
                </div>
                <div className="input-group">
                  <label className="input-label">Height ({unitSystem === 'imperial' ? 'ft' : 'm'})</label>
                  <input 
                    type="number" 
                    value={height} 
                    onChange={(e) => setHeight(Number(e.target.value))} 
                    className="input-field w-full" 
                  />
                </div>
              </>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">Quantity</label>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
              <div className="input-group">
                <label className="input-label">Waste (%)</label>
                <input 
                  type="number" 
                  value={waste} 
                  onChange={(e) => setWaste(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-4">
                <div className="text-center pb-4 border-b border-[#b3d9ff]">
                  <div className="text-[#666] text-xs uppercase font-bold mb-1">Total Volume</div>
                  <div className="text-3xl font-bold text-[#0066cc]">
                    {(volume / 27).toFixed(2)} Cubic Yards
                  </div>
                  <div className="text-[#666] text-sm mt-1">
                    {volume.toFixed(2)} Cubic Feet
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="text-center">
                    <div className="text-[#666] text-xs uppercase font-bold mb-1">80lb Bags</div>
                    <div className="text-2xl font-bold text-[#0066cc]">{bags80lb}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#666] text-xs uppercase font-bold mb-1">60lb Bags</div>
                    <div className="text-2xl font-bold text-[#0066cc]">{bags60lb}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Concrete Calculator" 
        path="/concrete" 
        description="Calculate concrete volume and bag counts for slabs, footings, and columns. Estimate cubic yards with waste factors for 2026 construction projects."
      />
    </div>
  );
};
