import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Paintbrush, Maximize, Info, ShoppingCart } from 'lucide-react';

export const WallpaperCalculator: React.FC = () => {
  const [length, setLength] = useState<number>(12);
  const [width, setWidth] = useState<number>(12);
  const [height, setHeight] = useState<number>(8);
  const [rollWidth, setRollWidth] = useState<number>(20.5); // inches
  const [rollLength, setRollLength] = useState<number>(33); // feet
  const [patternRepeat, setPatternRepeat] = useState<number>(21); // inches
  const [totalArea, setTotalArea] = useState<number>(0);
  const [rollsNeeded, setRollsNeeded] = useState<number>(0);

  useEffect(() => {
    // Total Wall Area = 2 * (length * height) + 2 * (width * height)
    const wallArea = 2 * (length * height) + 2 * (width * height);
    // Roll Area = (rollWidth / 12) * rollLength
    const rollArea = (rollWidth / 12) * rollLength;
    // Adjust for pattern repeat (approx 15% waste)
    const wasteFactor = patternRepeat > 0 ? 1.15 : 1.10;
    const rolls = Math.ceil((wallArea * wasteFactor) / rollArea);
    
    setTotalArea(Number(wallArea.toFixed(2)));
    setRollsNeeded(rolls);
  }, [length, width, height, rollWidth, rollLength, patternRepeat]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Wallpaper Calculator | Estimate Rolls Needed for Your Room</title>
        <meta name="description" content="Free online wallpaper calculator. Estimate how many rolls of wallpaper you need for your walls based on room dimensions and pattern repeat in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Wallpaper Calculator</h1>
        <p className="text-slate-600">Calculate exactly how many rolls of wallpaper you need to buy for your next home improvement project.</p>
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

            <h2 className="section-title mt-8">Wallpaper Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="input-label">Roll Width (in)</label>
                <input 
                  type="number" 
                  value={rollWidth} 
                  onChange={(e) => setRollWidth(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Roll Length (ft)</label>
                <input 
                  type="number" 
                  value={rollLength} 
                  onChange={(e) => setRollLength(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Pattern Repeat (in)</label>
                <input 
                  type="number" 
                  value={patternRepeat} 
                  onChange={(e) => setPatternRepeat(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Wallpapering Tips
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Standard Roll:</strong> A standard American roll typically covers about 30 square feet, while a European roll covers about 56 square feet.</li>
              <li><strong>Pattern Repeat:</strong> If your wallpaper has a pattern, you'll need more rolls to ensure the pattern matches across the entire project.</li>
              <li><strong>Batch Consistency:</strong> Buy all your rolls at once from the same batch to ensure color and pattern consistency.</li>
              <li><strong>Buy Extra:</strong> It's always a good idea to buy 10-15% more wallpaper than you think you'll need for touch-ups.</li>
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
                <div className="text-4xl font-bold mb-1">{rollsNeeded}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Rolls Needed</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">{totalArea}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Sq Ft to Cover</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Maximize className="w-4 h-4" />
              Project Summary
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your project requires <strong>{totalArea} square feet</strong> of wallpaper. This estimate assumes a rectangular room.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Use the Wallpaper Calculator in 2026</h2>
        <p>
          Planning a room makeover? The first step is knowing how much wallpaper to buy. Our <strong>wallpaper calculator</strong> takes the guesswork out of your DIY project, helping you save money and avoid multiple trips to the hardware store.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Calculation Formula</h3>
        <p>
          To find the total number of rolls needed, we use the following steps:
        </p>
        <ol>
          <li>Measure the length and width of the room in feet.</li>
          <li>Multiply the length by the width to get the total square footage.</li>
          <li>Calculate the area of a single roll (including pattern repeat) in square feet.</li>
          <li>Divide the total square footage by the area of a single roll.</li>
          <li>Add a waste factor (typically 10-15%) to account for cuts and mistakes.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Pattern Repeat Matters</h3>
        <p>
          Pattern repeat is an essential part of any wallpapering project. It's not just for aesthetics; it also helps to:
        </p>
        <ul>
          <li><strong>Ensure Alignment:</strong> Patterns that are not aligned will look awkward and unprofessional.</li>
          <li><strong>Improve Appearance:</strong> Patterns that are aligned will create a seamless and beautiful look.</li>
          <li><strong>Maintain Consistency:</strong> Patterns that are aligned will ensure that the entire project looks consistent.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How many rolls of wallpaper do I need for a 12x12 room?</p>
            <p>A 12x12 room is 144 square feet. For a standard 8-foot ceiling, you'll typically need about 6-8 rolls of wallpaper, assuming standard roll and pattern repeat sizes.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the average cost of wallpaper per roll?</p>
            <p>Wallpaper costs vary widely. Vinyl typically costs $20-$50 per roll, while designer wallpaper can range from $50-$200+ per roll, plus installation.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I buy extra rolls for future repairs?</p>
            <p>Yes, it's always a good idea to buy an extra roll of wallpaper and keep it in case you need to replace a damaged or peeling piece in the future.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
