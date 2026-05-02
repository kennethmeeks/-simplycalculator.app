import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Ruler, Info, ShoppingCart, Box } from 'lucide-react';

export const GravelCalculator: React.FC = () => {
  const [length, setLength] = useState<number>(20); // ft
  const [width, setWidth] = useState<number>(10); // ft
  const [depth, setDepth] = useState<number>(4); // inches
  const [density, setDensity] = useState<number>(2800); // lbs per cubic yard
  const [totalCubicFeet, setTotalCubicFeet] = useState<number>(0);
  const [totalCubicYards, setTotalCubicYards] = useState<number>(0);
  const [totalTons, setTotalTons] = useState<number>(0);

  useEffect(() => {
    // Cubic Feet = Length * Width * (Depth / 12)
    const cubicFeet = length * width * (depth / 12);
    // Cubic Yards = Cubic Feet / 27
    const cubicYards = cubicFeet / 27;
    // Tons = (Cubic Yards * Density) / 2000
    const tons = (cubicYards * density) / 2000;
    
    setTotalCubicFeet(Number(cubicFeet.toFixed(2)));
    setTotalCubicYards(Number(cubicYards.toFixed(2)));
    setTotalTons(Number(tons.toFixed(2)));
  }, [length, width, depth, density]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Gravel Calculator [Updated for 2026]</title>
        <meta name="description" content="Free online gravel calculator. Estimate how many cubic yards or tons of gravel you need for your driveway or path based on area and depth in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Gravel Calculator</h1>
        <p className="text-slate-600">Calculate the amount of gravel, crushed stone, or sand needed for your driveway, path, or construction project.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <h2 className="section-title">Project Dimensions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="input-label">Length (ft)</label>
                <input 
                  type="number" 
                  value={length} 
                  onChange={(e) => setLength(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Width (ft)</label>
                <input 
                  type="number" 
                  value={width} 
                  onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Depth (in)</label>
                <select 
                  value={depth} 
                  onChange={(e) => setDepth(Number(e.target.value))} 
                  className="input-field"
                >
                  <option value={2}>2 inches</option>
                  <option value={3}>3 inches</option>
                  <option value={4}>4 inches (Standard)</option>
                  <option value={6}>6 inches</option>
                  <option value={8}>8 inches</option>
                </select>
              </div>
            </div>

            <h2 className="section-title mt-8">Material Density</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Material Type</label>
                <select 
                  value={density} 
                  onChange={(e) => setDensity(Number(e.target.value))} 
                  className="input-field"
                >
                  <option value={2800}>Gravel / Crushed Stone (Standard)</option>
                  <option value={2600}>Sand / Fine Gravel</option>
                  <option value={3000}>River Rock / Large Stone</option>
                  <option value={2400}>Topsoil / Dirt</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Gravel Tips
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Standard Depth:</strong> A depth of 4 inches is ideal for most driveways and paths to ensure stability and drainage.</li>
              <li><strong>Compaction:</strong> Gravel will compact by about 10-20% after installation. Add a little extra to account for this.</li>
              <li><strong>Base Layer:</strong> Use a larger, coarser gravel for the base layer and a smaller, finer gravel for the top layer.</li>
              <li><strong>Weed Barrier:</strong> Lay down a landscape fabric before installing gravel to prevent weeds from growing through.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Material Estimate
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-slate-800">
                <div className="text-4xl font-bold mb-1">{totalCubicYards}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Cubic Yards Needed</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">{totalTons}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Tons Needed (Approx)</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Box className="w-4 h-4" />
              Volume Summary
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your project requires <strong>{totalCubicFeet} cubic feet</strong> of gravel. This estimate assumes a rectangular area.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Use the Gravel Calculator in 2026</h2>
        <p>
          Planning a new gravel driveway or garden path? Our <strong>gravel calculator</strong> helps you determine exactly how many cubic yards or tons of gravel you need to buy. Accurate measurements are the foundation of a successful landscaping project.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Calculation Formula</h3>
        <p>
          To find the total amount of gravel needed, we use the following steps:
        </p>
        <ol>
          <li>Measure the length and width of the area in feet.</li>
          <li>Multiply the length by the width to get the total square footage.</li>
          <li>Multiply the total square footage by the desired depth (in feet).</li>
          <li>Divide the total cubic feet by 27 to get the number of cubic yards.</li>
          <li>Multiply the cubic yards by the material density (usually 1.4 tons per cubic yard) to get the number of tons.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Gravel Depth Matters</h3>
        <p>
          Gravel depth is an essential part of any landscaping project. It's not just for aesthetics; it also helps to:
        </p>
        <ul>
          <li><strong>Ensure Stability:</strong> A thick layer of gravel provides a stable surface for walking or driving.</li>
          <li><strong>Improve Drainage:</strong> Gravel allows water to drain through the surface, preventing puddles and erosion.</li>
          <li><strong>Prevent Weeds:</strong> A thick layer of gravel helps to suppress weed growth.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How many tons of gravel do I need for a 20x10 driveway?</p>
            <p>A 20x10 driveway is 200 square feet. For a 4-inch depth, you'll need 66.7 cubic feet of gravel. This is approximately 2.5 cubic yards or 3.5 tons.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the average cost of gravel per ton?</p>
            <p>Gravel costs vary widely. Crushed stone typically costs $30-$50 per ton, while decorative river rock can range from $50-$100 per ton, plus delivery.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I use pea gravel or crushed stone?</p>
            <p>Pea gravel is great for paths and play areas. Crushed stone is better for driveways as it packs down more tightly and provides a more stable surface.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
