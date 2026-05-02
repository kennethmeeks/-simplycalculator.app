import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Ruler, Info, ShoppingCart, Box } from 'lucide-react';

export const FenceCalculator: React.FC = () => {
  const [length, setLength] = useState<number>(100); // ft
  const [postSpacing, setPostSpacing] = useState<number>(8); // ft
  const [picketWidth, setPicketWidth] = useState<number>(5.5); // inches
  const [picketSpacing, setPicketSpacing] = useState<number>(0); // inches
  const [numRails, setNumRails] = useState<number>(3);
  const [postsNeeded, setPostsNeeded] = useState<number>(0);
  const [railsNeeded, setRailsNeeded] = useState<number>(0);
  const [picketsNeeded, setPicketsNeeded] = useState<number>(0);

  useEffect(() => {
    // Posts = (Length / Spacing) + 1
    const posts = Math.ceil(length / postSpacing) + 1;
    // Rails = (Length / RailLength) * numRails. Assuming 8ft rails.
    const rails = Math.ceil(length / 8) * numRails;
    // Pickets = Length / (PicketWidth + PicketSpacing)
    const picketWidthFt = picketWidth / 12;
    const picketSpacingFt = picketSpacing / 12;
    const pickets = Math.ceil(length / (picketWidthFt + picketSpacingFt));
    
    setPostsNeeded(posts);
    setRailsNeeded(rails);
    setPicketsNeeded(pickets);
  }, [length, postSpacing, picketWidth, picketSpacing, numRails]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Fence Calculator [Free & No Sign-up]</title>
        <meta name="description" content="Free online fence calculator. Estimate how many posts, rails, and pickets you need for your new fence based on length and spacing in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Fence Calculator</h1>
        <p className="text-slate-600">Calculate the materials needed for your new wood privacy or picket fence project.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <h2 className="section-title">Fence Dimensions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Total Fence Length (ft)</label>
                <input 
                  type="number" 
                  value={length} 
                  onChange={(e) => setLength(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Post Spacing (ft)</label>
                <select 
                  value={postSpacing} 
                  onChange={(e) => setPostSpacing(Number(e.target.value))} 
                  className="input-field"
                >
                  <option value={6}>6 ft</option>
                  <option value={8}>8 ft (Standard)</option>
                  <option value={10}>10 ft</option>
                </select>
              </div>
            </div>

            <h2 className="section-title mt-8">Picket Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="input-label">Picket Width (in)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={picketWidth} 
                  onChange={(e) => setPicketWidth(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Picket Spacing (in)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={picketSpacing} 
                  onChange={(e) => setPicketSpacing(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Number of Rails</label>
                <select 
                  value={numRails} 
                  onChange={(e) => setNumRails(Number(e.target.value))} 
                  className="input-field"
                >
                  <option value={2}>2 Rails</option>
                  <option value={3}>3 Rails (Standard)</option>
                  <option value={4}>4 Rails</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Fence Building Tips
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Post Depth:</strong> Posts should be buried at least 1/3 of their total length (e.g., 2ft deep for a 6ft fence).</li>
              <li><strong>Concrete:</strong> Use about 1-2 bags of concrete per post hole for stability.</li>
              <li><strong>Rail Length:</strong> Rails are typically sold in 8ft or 16ft lengths. 8ft is easier to transport and handle.</li>
              <li><strong>Gate:</strong> Don't forget to account for gate hardware and extra posts if you're adding a gate.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-[#f0f7ff] border border-[#0066cc]/20 text-[#0066cc]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0066cc]">
              <ShoppingCart className="w-5 h-5" />
              Material List
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-[#0066cc]/10">
                <div className="text-4xl font-bold mb-1 text-[#0066cc]">{postsNeeded}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Posts Needed</div>
              </div>
              <div className="text-center py-4 border-b border-[#0066cc]/10">
                <div className="text-4xl font-bold mb-1 text-[#0066cc]">{railsNeeded}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Rails Needed (8ft)</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1 text-[#0066cc]">{picketsNeeded}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Pickets Needed</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Box className="w-4 h-4" />
              Project Summary
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              For a <strong>{length}ft fence</strong> with <strong>{postSpacing}ft spacing</strong>, you'll need the materials listed above. This estimate assumes a straight line.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Use the Fence Calculator in 2026</h2>
        <p>
          Building a new fence is a great way to add privacy and value to your home. Our <strong>fence calculator</strong> helps you determine exactly how many posts, rails, and pickets you need to buy. Accurate measurements are the foundation of a successful fencing project.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Calculation Formula</h3>
        <p>
          To find the total number of materials needed, we use the following steps:
        </p>
        <ol>
          <li>Measure the total length of the fence line in feet.</li>
          <li>Divide the total length by the post spacing (usually 8ft) and add 1 to get the number of posts.</li>
          <li>Multiply the total length by the number of rails (usually 3) and divide by the rail length (usually 8ft).</li>
          <li>Calculate the number of pickets by dividing the total length by the picket width (plus any spacing).</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Post Spacing Matters</h3>
        <p>
          Post spacing is an essential part of any fencing project. It's not just for aesthetics; it also helps to:
        </p>
        <ul>
          <li><strong>Ensure Stability:</strong> Posts that are too far apart will cause the fence to sag or blow over in the wind.</li>
          <li><strong>Support the Weight:</strong> Rails and pickets are heavy. Posts provide the necessary support.</li>
          <li><strong>Maintain Alignment:</strong> Posts help to keep the fence line straight and level.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How many posts do I need for a 100ft fence?</p>
            <p>For a 100ft fence with 8ft post spacing, you'll need 14 posts (100 / 8 = 12.5, rounded up to 13, plus 1 for the end).</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the average cost of a wood fence per foot?</p>
            <p>Wood fence costs vary widely. Cedar typically costs $15-$30 per linear foot, while pressure-treated pine can range from $10-$20 per linear foot, including installation.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I use 4x4 or 6x6 posts?</p>
            <p>4x4 posts are standard for most residential fences. 6x6 posts are recommended for taller fences (over 6ft) or areas with high winds.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
