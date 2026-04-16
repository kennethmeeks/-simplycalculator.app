import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


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

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Ultimate Concrete Calculation Guide</h2>
        <p>
          Calculating the exact amount of concrete for a project is one of the most critical steps in any construction job. Whether you are a professional contractor or a DIY homeowner, ordering too little concrete can lead to cold joints and structural weaknesses, while ordering too much is a waste of money and resources. Our <strong>concrete calculator for slabs and footings</strong> is designed to provide precision for on-site use in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Calculate Concrete Volume</h3>
        <p>
          Concrete is typically sold by the cubic yard. To find the volume manually, you first calculate the cubic footage and then divide by 27 (since there are 27 cubic feet in a cubic yard).
        </p>
        <p><strong>The Formula for Slabs:</strong></p>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm overflow-x-auto">
          Volume (Cubic Yards) = [Length (ft) × Width (ft) × Thickness (ft)] / 27
        </div>
        <p className="mt-4">
          Remember to convert your thickness from inches to feet by dividing by 12. For example, a 4-inch slab is 0.33 feet thick.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why You Need a Waste Factor</h3>
        <p>
          In the real world, forms bulge, subgrades are uneven, and some concrete is always left in the pump or the truck. We recommend adding a <strong>10% waste factor</strong> to every order. For complex footings or uneven ground, you might even increase this to 15%. It is much cheaper to have a little extra than to have the truck leave while you are three wheelbarrows short.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Bags vs. Ready-Mix</h3>
        <p>
          For small projects like post holes or small equipment pads, buying pre-mixed bags (like Quikrete) is often more practical. 
        </p>
        <ul>
          <li>An <strong>80lb bag</strong> yields approximately 0.6 cubic feet.</li>
          <li>A <strong>60lb bag</strong> yields approximately 0.45 cubic feet.</li>
        </ul>
        <p>
          If your project requires more than 1 cubic yard (about 45 of the 80lb bags), it is usually time to call a ready-mix truck. The labor saved in mixing by hand far outweighs the delivery fee for larger volumes.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How deep should a concrete slab be?</p>
            <p>For most residential walkways and patios, 4 inches is standard. For driveways that will hold heavy vehicles, 5 to 6 inches is recommended with rebar reinforcement.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How many 80lb bags are in a cubic yard?</p>
            <p>There are 45 bags of 80lb concrete in one cubic yard. If you are using 60lb bags, you will need 60 bags to equal one cubic yard.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the "standard" concrete mix ratio?</p>
            <p>A common "recipe" for concrete is 1 part cement, 2 parts sand, and 3 parts gravel. However, for structural work, always use a pre-engineered mix design from a reputable supplier.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Pro Tip for Contractors</h3>
        <p>
          Always measure your forms <em>after</em> they are braced. Bracing can slightly change the interior dimensions, and those fractions of an inch add up over a large pour. Use our <strong>on-site concrete estimator</strong> to double-check your math right before you pick up the phone to order the truck.
        </p>
      </div>
    </div>
  );
};
