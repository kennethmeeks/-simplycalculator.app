import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Grid, Ruler, Info, ShoppingCart } from 'lucide-react';

export const TileCalculator: React.FC = () => {
  const [length, setLength] = useState<number>(10);
  const [width, setWidth] = useState<number>(10);
  const [tileLength, setTileLength] = useState<number>(12); // inches
  const [tileWidth, setTileWidth] = useState<number>(12); // inches
  const [groutWidth, setGroutWidth] = useState<number>(0.125); // inches
  const [wasteFactor, setWasteFactor] = useState<number>(10); // percentage
  const [totalArea, setTotalArea] = useState<number>(0);
  const [tilesNeeded, setTilesNeeded] = useState<number>(0);
  const [boxesNeeded, setBoxesNeeded] = useState<number>(0);
  const [tilesPerBox, setTilesPerBox] = useState<number>(10);

  useEffect(() => {
    const areaSqFt = length * width;
    const tileAreaSqIn = (tileLength + groutWidth) * (tileWidth + groutWidth);
    const tileAreaSqFt = tileAreaSqIn / 144;
    
    const rawTiles = areaSqFt / tileAreaSqFt;
    const tilesWithWaste = Math.ceil(rawTiles * (1 + wasteFactor / 100));
    const boxes = Math.ceil(tilesWithWaste / tilesPerBox);
    
    setTotalArea(Number(areaSqFt.toFixed(2)));
    setTilesNeeded(tilesWithWaste);
    setBoxesNeeded(boxes);
  }, [length, width, tileLength, tileWidth, groutWidth, wasteFactor, tilesPerBox]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Tile Calculator | Estimate Tiles and Boxes for Your Project</title>
        <meta name="description" content="Free online tile calculator. Estimate how many tiles and boxes you need for your floor or wall based on dimensions and tile size in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Tile Calculator</h1>
        <p className="text-slate-600">Calculate the number of tiles and boxes needed for your floor or wall tiling project.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <h2 className="section-title">Area Dimensions</h2>
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

            <h2 className="section-title mt-8">Tile & Grout</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="input-label">Tile Length (in)</label>
                <input 
                  type="number" 
                  value={tileLength} 
                  onChange={(e) => setTileLength(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Tile Width (in)</label>
                <input 
                  type="number" 
                  value={tileWidth} 
                  onChange={(e) => setTileWidth(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Grout Width (in)</label>
                <select 
                  value={groutWidth} 
                  onChange={(e) => setGroutWidth(Number(e.target.value))} 
                  className="input-field"
                >
                  <option value={0}>None</option>
                  <option value={0.0625}>1/16"</option>
                  <option value={0.125}>1/8"</option>
                  <option value={0.1875}>3/16"</option>
                  <option value={0.25}>1/4"</option>
                  <option value={0.375}>3/8"</option>
                </select>
              </div>
            </div>

            <h2 className="section-title mt-8">Extras</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Waste Factor (%)</label>
                <select 
                  value={wasteFactor} 
                  onChange={(e) => setWasteFactor(Number(e.target.value))} 
                  className="input-field"
                >
                  <option value={5}>5% (Simple)</option>
                  <option value={10}>10% (Standard)</option>
                  <option value={15}>15% (Diagonal)</option>
                  <option value={20}>20% (Complex)</option>
                </select>
              </div>
              <div>
                <label className="input-label">Tiles per Box</label>
                <input 
                  type="number" 
                  value={tilesPerBox} 
                  onChange={(e) => setTilesPerBox(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Tiling Tips
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Grout Width:</strong> Standard grout width for floor tiles is 1/8" to 1/4". Wall tiles often use 1/16" or 1/8".</li>
              <li><strong>Waste:</strong> Tiling involves many cuts, especially around corners and fixtures. A 10-15% waste factor is highly recommended.</li>
              <li><strong>Layout:</strong> Dry-lay your tiles before applying adhesive to ensure a balanced pattern and avoid small slivers at the edges.</li>
              <li><strong>Batch Consistency:</strong> Buy all your tiles at once from the same batch to ensure color and size consistency.</li>
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
                <div className="text-4xl font-bold mb-1">{tilesNeeded}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Tiles Needed</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">{boxesNeeded}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Boxes Needed</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Grid className="w-4 h-4" />
              Project Area
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your project area is <strong>{totalArea} sq ft</strong>. The estimate above includes the <strong>{wasteFactor}% waste factor</strong>.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Use the Tile Calculator in 2026</h2>
        <p>
          Planning a new tile floor or backsplash? Our <strong>tile calculator</strong> helps you determine exactly how many tiles and boxes you need to buy. Accurate measurements are the foundation of a successful tiling project.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Calculation Formula</h3>
        <p>
          To find the total number of tiles needed, we use the following steps:
        </p>
        <ol>
          <li>Measure the length and width of the area in feet.</li>
          <li>Multiply the length by the width to get the total square footage.</li>
          <li>Calculate the area of a single tile (including grout width) in square inches.</li>
          <li>Divide the total square footage (converted to square inches) by the area of a single tile.</li>
          <li>Add a waste factor (typically 10-15%) to account for cuts and mistakes.</li>
          <li>Divide the total tiles needed by the number of tiles per box.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Grout Width Matters</h3>
        <p>
          Grout width is an essential part of any tiling project. It's not just for aesthetics; it also helps to:
        </p>
        <ul>
          <li><strong>Compensate for Size Variations:</strong> No two tiles are exactly the same size. Grout helps to hide these small differences.</li>
          <li><strong>Allow for Expansion:</strong> Tiles can expand and contract with temperature changes. Grout provides a flexible buffer.</li>
          <li><strong>Prevent Cracking:</strong> Grout helps to distribute weight and prevent tiles from cracking.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How many 12x12 tiles do I need for a 10x10 room?</p>
            <p>A 10x10 room is 100 square feet. A 12x12 tile is 1 square foot. With a 10% waste factor, you should buy approximately 110 tiles.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the average cost of tile per square foot?</p>
            <p>Tile costs vary widely. Ceramic tile typically costs $1-$5 per sq ft, while porcelain can range from $3-$10 per sq ft. Natural stone can be $10-$30+ per sq ft.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I buy extra tiles for future repairs?</p>
            <p>Yes, it's always a good idea to buy an extra box of tiles and keep them in case you need to replace a cracked or damaged tile in the future.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
