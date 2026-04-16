import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Paintbrush, Maximize, Info, ShoppingCart } from 'lucide-react';

export const PaintCalculator: React.FC = () => {
  const [length, setLength] = useState<number>(12);
  const [width, setWidth] = useState<number>(12);
  const [height, setHeight] = useState<number>(8);
  const [coats, setCoats] = useState<number>(2);
  const [doors, setDoors] = useState<number>(1);
  const [windows, setWindows] = useState<number>(2);
  const [coverage, setCoverage] = useState<number>(350); // sq ft per gallon
  const [totalArea, setTotalArea] = useState<number>(0);
  const [gallonsNeeded, setGallonsNeeded] = useState<number>(0);

  useEffect(() => {
    // Wall area = 2 * (length * height) + 2 * (width * height)
    const wallArea = 2 * (length * height) + 2 * (width * height);
    // Subtract doors (approx 21 sq ft) and windows (approx 15 sq ft)
    const subtractedArea = (doors * 21) + (windows * 15);
    const netArea = Math.max(0, wallArea - subtractedArea) * coats;
    
    setTotalArea(Number(netArea.toFixed(2)));
    setGallonsNeeded(Number((netArea / coverage).toFixed(2)));
  }, [length, width, height, coats, doors, windows, coverage]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Paint Calculator | Estimate Gallons Needed for Your Room</title>
        <meta name="description" content="Free online paint calculator. Estimate how many gallons of paint you need for your walls based on room dimensions, doors, and windows in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Paint Calculator</h1>
        <p className="text-slate-600">Calculate exactly how much paint you need to buy for your next home improvement project.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <h2 className="section-title">Room Dimensions</h2>
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
                <label className="input-label">Height (ft)</label>
                <input 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>

            <h2 className="section-title mt-8">Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="input-label">Number of Coats</label>
                <input 
                  type="number" 
                  value={coats} 
                  onChange={(e) => setCoats(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Number of Doors</label>
                <input 
                  type="number" 
                  value={doors} 
                  onChange={(e) => setDoors(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Number of Windows</label>
                <input 
                  type="number" 
                  value={windows} 
                  onChange={(e) => setWindows(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Pro Painting Tips
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Standard Coverage:</strong> One gallon of paint typically covers about 350 to 400 square feet.</li>
              <li><strong>Primer:</strong> If you're painting a light color over a dark one, you'll likely need a coat of primer first.</li>
              <li><strong>Textured Walls:</strong> Rough or textured surfaces require more paint than smooth walls.</li>
              <li><strong>Buy Extra:</strong> It's always a good idea to buy 10% more paint than you think you'll need for touch-ups.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Shopping List
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-slate-800">
                <div className="text-4xl font-bold mb-1">{gallonsNeeded}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Gallons Needed</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">{totalArea}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Sq Ft to Paint</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Maximize className="w-4 h-4" />
              Coverage Estimate
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Based on a standard coverage of <strong>{coverage} sq ft per gallon</strong>. Most high-quality paints will fall into this range.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Use the Paint Calculator in 2026</h2>
        <p>
          Planning a room makeover? The first step is knowing how much paint to buy. Our <strong>paint calculator</strong> takes the guesswork out of your DIY project, helping you save money and avoid multiple trips to the hardware store.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Calculation Formula</h3>
        <p>
          To find the total area of your walls, we use the following steps:
        </p>
        <ol>
          <li>Calculate the perimeter of the room: 2 × (Length + Width).</li>
          <li>Multiply the perimeter by the wall height to get the gross wall area.</li>
          <li>Subtract the area of doors (standard door is ~21 sq ft) and windows (standard window is ~15 sq ft).</li>
          <li>Multiply the result by the number of coats you plan to apply.</li>
          <li>Divide the total area by the coverage rate of your paint (usually 350-400 sq ft per gallon).</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Factors That Affect Paint Usage</h3>
        <p>
          While our calculator provides a solid estimate, several factors can influence the actual amount of paint you'll use:
        </p>
        <ul>
          <li><strong>Surface Porosity:</strong> New drywall or unpainted wood will soak up more paint than previously painted surfaces.</li>
          <li><strong>Color Change:</strong> Drastic color changes (e.g., white to deep red) often require more coats or a tinted primer.</li>
          <li><strong>Application Method:</strong> Spraying usually uses more paint than rolling or brushing due to overspray.</li>
          <li><strong>Waste:</strong> Some paint is always lost in the tray, on the roller, or during cleaning.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How much paint do I need for a 12x12 room?</p>
            <p>For a standard 12x12 room with 8-foot ceilings, you'll typically need about 2 gallons for two coats of paint, assuming standard door and window sizes.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I buy 5-gallon buckets or 1-gallon cans?</p>
            <p>If you need more than 4 gallons, a 5-gallon bucket is usually more cost-effective. It also ensures color consistency across the entire project.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does the calculator include the ceiling?</p>
            <p>This specific calculator is for walls. To calculate ceiling paint, simply multiply the length by the width of the room.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
