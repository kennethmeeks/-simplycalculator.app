import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Ruler, Info, ShoppingCart, Box } from 'lucide-react';

export const StairCalculator: React.FC = () => {
  const [totalRise, setTotalRise] = useState<number>(100); // inches
  const [targetRiserHeight, setTargetRiserHeight] = useState<number>(7.5); // inches
  const [treadDepth, setTreadDepth] = useState<number>(10); // inches
  const [numRisers, setNumRisers] = useState<number>(0);
  const [actualRiserHeight, setActualRiserHeight] = useState<number>(0);
  const [totalRun, setTotalRun] = useState<number>(0);
  const [stringerLength, setStringerLength] = useState<number>(0);
  const [stairAngle, setStairAngle] = useState<number>(0);

  useEffect(() => {
    // Number of Risers = Total Rise / Target Riser Height
    const risers = Math.round(totalRise / targetRiserHeight);
    // Actual Riser Height = Total Rise / Number of Risers
    const actualHeight = totalRise / risers;
    // Total Run = (Number of Risers - 1) * Tread Depth
    const run = (risers - 1) * treadDepth;
    // Stringer Length = sqrt(Total Rise^2 + Total Run^2)
    const length = Math.sqrt(Math.pow(totalRise, 2) + Math.pow(run, 2));
    // Stair Angle = atan(Total Rise / Total Run) * (180 / PI)
    const angle = Math.atan(totalRise / run) * (180 / Math.PI);
    
    setNumRisers(risers);
    setActualRiserHeight(Number(actualHeight.toFixed(3)));
    setTotalRun(Number(run.toFixed(2)));
    setStringerLength(Number(length.toFixed(2)));
    setStairAngle(Number(angle.toFixed(2)));
  }, [totalRise, targetRiserHeight, treadDepth]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Stair Calculator | Estimate Stringer Length and Step Count</title>
        <meta name="description" content="Free online stair calculator. Estimate how many steps and what stringer length you need for your new stairs based on total rise and tread depth in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Stair Calculator</h1>
        <p className="text-slate-600">Calculate the stringer length, number of steps, and stair angle for your new deck, porch, or interior staircase.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <h2 className="section-title">Stair Dimensions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="input-label">Total Rise (in)</label>
                <input 
                  type="number" 
                  value={totalRise} 
                  onChange={(e) => setTotalRise(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Target Riser Height (in)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={targetRiserHeight} 
                  onChange={(e) => setTargetRiserHeight(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Tread Depth (in)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={treadDepth} 
                  onChange={(e) => setTreadDepth(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Stair Building Tips
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Riser Height:</strong> Standard riser height is between 7 and 7.75 inches for most residential codes.</li>
              <li><strong>Tread Depth:</strong> Standard tread depth is at least 10 inches for safety and comfort.</li>
              <li><strong>Headroom:</strong> Ensure at least 80 inches of vertical headroom throughout the entire staircase.</li>
              <li><strong>Stringers:</strong> Use pressure-treated 2x12s for exterior stringers and space them no more than 16 inches apart.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Stair Estimate
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-slate-800">
                <div className="text-4xl font-bold mb-1">{numRisers}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Number of Risers</div>
              </div>
              <div className="text-center py-4 border-b border-slate-800">
                <div className="text-4xl font-bold mb-1">{actualRiserHeight}"</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Actual Riser Height</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">{stringerLength}"</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Stringer Length</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Box className="w-4 h-4" />
              Project Summary
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your stairs will have a total run of <strong>{totalRun} inches</strong> and a stair angle of <strong>{stairAngle}°</strong>. This estimate assumes a straight staircase.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Use the Stair Calculator in 2026</h2>
        <p>
          Building a new staircase is a complex project. Our <strong>stair calculator</strong> helps you determine exactly how many steps and what stringer length you need to buy. Accurate measurements are the foundation of a safe and comfortable staircase.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Calculation Formula</h3>
        <p>
          To find the total number of materials needed, we use the following steps:
        </p>
        <ol>
          <li>Measure the total rise of the staircase in inches.</li>
          <li>Divide the total rise by the target riser height (usually 7.5 inches) and round to the nearest whole number to get the number of risers.</li>
          <li>Divide the total rise by the number of risers to get the actual riser height.</li>
          <li>Calculate the total run by multiplying the number of risers (minus 1) by the tread depth.</li>
          <li>Calculate the stringer length using the Pythagorean theorem: sqrt(Total Rise^2 + Total Run^2).</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Stair Angle Matters</h3>
        <p>
          Stair angle is an essential part of any staircase project. It's not just for aesthetics; it also helps to:
        </p>
        <ul>
          <li><strong>Ensure Safety:</strong> Stairs that are too steep are dangerous and difficult to climb.</li>
          <li><strong>Improve Comfort:</strong> Stairs that are too shallow are awkward and take up too much space.</li>
          <li><strong>Meet Building Codes:</strong> Most residential codes require a stair angle between 30 and 37 degrees.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How many steps do I need for a 100-inch rise?</p>
            <p>For a 100-inch rise with a 7.5-inch target riser height, you'll need 13 risers (100 / 7.5 = 13.33, rounded to 13). This means you'll have 12 treads.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the average cost of a wood staircase per foot?</p>
            <p>Wood staircase costs vary widely. A basic interior staircase typically costs $1,000-$3,000, while a custom deck staircase can range from $500-$2,000, including installation.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I use 2x10 or 2x12 stringers?</p>
            <p>2x12 stringers are standard for most residential staircases. 2x10 stringers are only recommended for very short staircases (under 3 steps) or areas with limited space.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
