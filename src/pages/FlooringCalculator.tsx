import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Layout, Ruler, Info, ShoppingCart } from 'lucide-react';

export const FlooringCalculator: React.FC = () => {
  const [length, setLength] = useState<number>(12);
  const [width, setWidth] = useState<number>(12);
  const [wasteFactor, setWasteFactor] = useState<number>(10); // percentage
  const [pricePerSqFt, setPricePerSqFt] = useState<number>(5.50);
  const [totalArea, setTotalArea] = useState<number>(0);
  const [totalAreaWithWaste, setTotalAreaWithWaste] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const area = length * width;
    const areaWithWaste = area * (1 + wasteFactor / 100);
    const cost = areaWithWaste * pricePerSqFt;
    
    setTotalArea(Number(area.toFixed(2)));
    setTotalAreaWithWaste(Number(areaWithWaste.toFixed(2)));
    setTotalCost(Number(cost.toFixed(2)));
  }, [length, width, wasteFactor, pricePerSqFt]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Flooring Calculator | Estimate Material and Cost for Your Floor</title>
        <meta name="description" content="Free online flooring calculator. Estimate how much hardwood, laminate, or tile flooring you need based on room dimensions and waste factor in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Flooring Calculator</h1>
        <p className="text-slate-600">Calculate the total square footage and estimated cost for your new flooring project.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <h2 className="section-title">Room Dimensions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>

            <h2 className="section-title mt-8">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Waste Factor (%)</label>
                <select 
                  value={wasteFactor} 
                  onChange={(e) => setWasteFactor(Number(e.target.value))} 
                  className="input-field"
                >
                  <option value={5}>5% (Simple Room)</option>
                  <option value={10}>10% (Standard)</option>
                  <option value={15}>15% (Diagonal / Complex)</option>
                  <option value={20}>20% (High Waste)</option>
                </select>
              </div>
              <div>
                <label className="input-label">Price per Sq Ft ($)</label>
                <input 
                  type="number" 
                  step="0.01"
                  value={pricePerSqFt} 
                  onChange={(e) => setPricePerSqFt(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Flooring Tips
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Waste Factor:</strong> Always add 10% to your total square footage to account for cuts, mistakes, and waste.</li>
              <li><strong>Diagonal Patterns:</strong> If you're laying flooring diagonally, increase your waste factor to 15-20%.</li>
              <li><strong>Subfloor:</strong> Don't forget to check if your subfloor needs repair or leveling before installation.</li>
              <li><strong>Acclimation:</strong> Hardwood and laminate flooring should sit in the room for 48-72 hours to acclimate to the humidity.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-[#f0f7ff] border border-[#0066cc]/20 text-[#0066cc]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0066cc]">
              <ShoppingCart className="w-5 h-5" />
              Project Estimate
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-[#0066cc]/10">
                <div className="text-4xl font-bold mb-1 text-[#0066cc]">{totalAreaWithWaste}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Sq Ft Needed</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1 text-[#0066cc]">${totalCost.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Estimated Material Cost</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Ruler className="w-4 h-4" />
              Room Area
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your actual room area is <strong>{totalArea} sq ft</strong>. The estimate above includes the <strong>{wasteFactor}% waste factor</strong>.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Use the Flooring Calculator in 2026</h2>
        <p>
          Whether you're installing hardwood, laminate, vinyl, or carpet, our <strong>flooring calculator</strong> helps you determine exactly how much material you need and what it will cost. Accurate measurements are the foundation of a successful flooring project.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Calculation Formula</h3>
        <p>
          To find the total amount of flooring needed, we use the following steps:
        </p>
        <ol>
          <li>Measure the length and width of the room in feet.</li>
          <li>Multiply the length by the width to get the total square footage.</li>
          <li>Add a waste factor (typically 10%) to account for cuts and mistakes.</li>
          <li>Multiply the total square footage (including waste) by the price per square foot.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Waste Factor Matters</h3>
        <p>
          A waste factor is an essential part of any flooring project. You'll never use 100% of the material you buy because:
        </p>
        <ul>
          <li><strong>Cuts:</strong> You'll need to cut boards or tiles to fit the edges of the room.</li>
          <li><strong>Mistakes:</strong> Even the most experienced installers make mistakes.</li>
          <li><strong>Damaged Pieces:</strong> Some pieces may arrive damaged or have natural defects.</li>
          <li><strong>Pattern Matching:</strong> If you're matching a specific pattern, you'll likely have more waste.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How much flooring do I need for a 12x12 room?</p>
            <p>A 12x12 room is 144 square feet. With a 10% waste factor, you should buy approximately 158.4 square feet of flooring.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the average cost of flooring per square foot?</p>
            <p>Flooring costs vary widely. Laminate typically costs $2-$5 per sq ft, while hardwood can range from $6-$15 per sq ft, including installation.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I include closets in my measurements?</p>
            <p>Yes, if you plan to floor the closets, measure them separately and add their square footage to the total room area.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
