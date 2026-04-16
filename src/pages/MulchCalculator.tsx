import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Ruler, Info, ShoppingCart, Box } from 'lucide-react';

export const MulchCalculator: React.FC = () => {
  const [length, setLength] = useState<number>(10); // ft
  const [width, setWidth] = useState<number>(10); // ft
  const [depth, setDepth] = useState<number>(3); // inches
  const [totalCubicFeet, setTotalCubicFeet] = useState<number>(0);
  const [totalCubicYards, setTotalCubicYards] = useState<number>(0);
  const [bagsNeeded, setBagsNeeded] = useState<number>(0);
  const [bagSize, setBagSize] = useState<number>(2); // cubic feet

  useEffect(() => {
    // Cubic Feet = Length * Width * (Depth / 12)
    const cubicFeet = length * width * (depth / 12);
    // Cubic Yards = Cubic Feet / 27
    const cubicYards = cubicFeet / 27;
    // Bags = Cubic Feet / BagSize
    const bags = Math.ceil(cubicFeet / bagSize);
    
    setTotalCubicFeet(Number(cubicFeet.toFixed(2)));
    setTotalCubicYards(Number(cubicYards.toFixed(2)));
    setBagsNeeded(bags);
  }, [length, width, depth, bagSize]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Mulch Calculator | Estimate Cubic Yards and Bags Needed</title>
        <meta name="description" content="Free online mulch calculator. Estimate how many cubic yards or bags of mulch you need for your garden bed based on area and depth in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Mulch Calculator</h1>
        <p className="text-slate-600">Calculate the amount of mulch needed for your garden beds, walkways, or landscaping projects.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <h2 className="section-title">Garden Bed Dimensions</h2>
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
                  <option value={1}>1 inch</option>
                  <option value={2}>2 inches</option>
                  <option value={3}>3 inches (Standard)</option>
                  <option value={4}>4 inches</option>
                  <option value={6}>6 inches</option>
                </select>
              </div>
            </div>

            <h2 className="section-title mt-8">Bag Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Bag Size (cubic feet)</label>
                <select 
                  value={bagSize} 
                  onChange={(e) => setBagSize(Number(e.target.value))} 
                  className="input-field"
                >
                  <option value={1}>1 cu ft</option>
                  <option value={1.5}>1.5 cu ft</option>
                  <option value={2}>2 cu ft (Standard)</option>
                  <option value={3}>3 cu ft</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Mulching Tips
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Standard Depth:</strong> A depth of 2-3 inches is ideal for most garden beds to suppress weeds and retain moisture.</li>
              <li><strong>Bulk vs. Bags:</strong> If you need more than 2 cubic yards, buying in bulk is usually much cheaper than buying bags.</li>
              <li><strong>Tree Rings:</strong> Don't pile mulch against the trunk of a tree (the "mulch volcano"). Leave a few inches of space around the base.</li>
              <li><strong>Timing:</strong> Apply mulch in the late spring after the soil has warmed up but before the summer heat.</li>
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
                <div className="text-4xl font-bold mb-1">{bagsNeeded}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Bags Needed ({bagSize} cu ft)</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Box className="w-4 h-4" />
              Volume Summary
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your project requires <strong>{totalCubicFeet} cubic feet</strong> of mulch. This estimate assumes a rectangular bed.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Use the Mulch Calculator in 2026</h2>
        <p>
          Mulching is one of the best things you can do for your garden. Our <strong>mulch calculator</strong> helps you determine exactly how many cubic yards or bags of mulch you need to buy. Accurate measurements are the foundation of a successful landscaping project.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Calculation Formula</h3>
        <p>
          To find the total amount of mulch needed, we use the following steps:
        </p>
        <ol>
          <li>Measure the length and width of the garden bed in feet.</li>
          <li>Multiply the length by the width to get the total square footage.</li>
          <li>Multiply the total square footage by the desired depth (in feet).</li>
          <li>Divide the total cubic feet by 27 to get the number of cubic yards.</li>
          <li>Divide the total cubic feet by the bag size (usually 2 cu ft) to get the number of bags.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Mulch Depth Matters</h3>
        <p>
          Mulch depth is an essential part of any gardening project. It's not just for aesthetics; it also helps to:
        </p>
        <ul>
          <li><strong>Suppress Weeds:</strong> A thick layer of mulch prevents weed seeds from germinating.</li>
          <li><strong>Retain Moisture:</strong> Mulch helps to keep the soil moist during hot, dry weather.</li>
          <li><strong>Regulate Temperature:</strong> Mulch acts as an insulator, keeping the soil cooler in the summer and warmer in the winter.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How many bags of mulch do I need for a 10x10 bed?</p>
            <p>A 10x10 bed is 100 square feet. For a 3-inch depth, you'll need 25 cubic feet of mulch. With 2 cu ft bags, you should buy 13 bags.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the average cost of mulch per cubic yard?</p>
            <p>Mulch costs vary widely. Cedar typically costs $30-$50 per cubic yard, while dyed hardwood can range from $25-$40 per cubic yard, plus delivery.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I use wood chips or bark mulch?</p>
            <p>Wood chips are great for paths and play areas. Bark mulch is better for garden beds as it decomposes more slowly and adds nutrients to the soil.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
