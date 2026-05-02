import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Ruler, Info, ShoppingCart, Box } from 'lucide-react';

export const DeckCalculator: React.FC = () => {
  const [length, setLength] = useState<number>(12); // ft
  const [width, setWidth] = useState<number>(12); // ft
  const [boardWidth, setBoardWidth] = useState<number>(5.5); // inches
  const [boardSpacing, setBoardSpacing] = useState<number>(0.25); // inches
  const [joistSpacing, setJoistSpacing] = useState<number>(16); // inches
  const [boardsNeeded, setBoardsNeeded] = useState<number>(0);
  const [joistsNeeded, setJoistsNeeded] = useState<number>(0);
  const [totalArea, setTotalArea] = useState<number>(0);

  useEffect(() => {
    // Total Area = Length * Width
    const area = length * width;
    // Boards = Width / (BoardWidth + BoardSpacing). Assuming boards run the length.
    const boardWidthFt = (boardWidth + boardSpacing) / 12;
    const boards = Math.ceil(width / boardWidthFt);
    // Joists = (Length / (JoistSpacing / 12)) + 1. Assuming joists run the width.
    const joists = Math.ceil(length / (joistSpacing / 12)) + 1;
    
    setTotalArea(Number(area.toFixed(2)));
    setBoardsNeeded(boards);
    setJoistsNeeded(joists);
  }, [length, width, boardWidth, boardSpacing, joistSpacing]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Deck Calculator [100% Private]</title>
        <meta name="description" content="Free online deck calculator. Estimate how many deck boards and joists you need for your new deck based on dimensions and spacing in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Deck Calculator</h1>
        <p className="text-slate-600">Calculate the materials needed for your new wood or composite deck project.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <h2 className="section-title">Deck Dimensions</h2>
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

            <h2 className="section-title mt-8">Board & Joist Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="input-label">Board Width (in)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={boardWidth} 
                  onChange={(e) => setBoardWidth(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Board Spacing (in)</label>
                <input 
                  type="number" 
                  step="0.01"
                  value={boardSpacing} 
                  onChange={(e) => setBoardSpacing(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Joist Spacing (in)</label>
                <select 
                  value={joistSpacing} 
                  onChange={(e) => setJoistSpacing(Number(e.target.value))} 
                  className="input-field"
                >
                  <option value={12}>12 inches</option>
                  <option value={16}>16 inches (Standard)</option>
                  <option value={24}>24 inches</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Deck Building Tips
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Joist Spacing:</strong> Standard joist spacing is 16 inches for wood decks and 12 inches for composite decks.</li>
              <li><strong>Board Spacing:</strong> Leave a 1/8 to 1/4 inch gap between deck boards for drainage and expansion.</li>
              <li><strong>Fasteners:</strong> Use high-quality, corrosion-resistant screws or hidden fasteners for a clean look.</li>
              <li><strong>Permits:</strong> Check with your local building department for required permits and inspections before starting.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Material List
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-slate-800">
                <div className="text-4xl font-bold mb-1">{boardsNeeded}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Deck Boards Needed ({length}ft)</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">{joistsNeeded}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Joists Needed ({width}ft)</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Box className="w-4 h-4" />
              Project Summary
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your project requires <strong>{totalArea} square feet</strong> of decking. This estimate assumes a rectangular deck.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Use the Deck Calculator in 2026</h2>
        <p>
          Building a new deck is a great way to add outdoor living space and value to your home. Our <strong>deck calculator</strong> helps you determine exactly how many boards and joists you need to buy. Accurate measurements are the foundation of a successful decking project.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Calculation Formula</h3>
        <p>
          To find the total number of materials needed, we use the following steps:
        </p>
        <ol>
          <li>Measure the length and width of the deck in feet.</li>
          <li>Multiply the length by the width to get the total square footage.</li>
          <li>Calculate the number of deck boards by dividing the width by the board width (plus any spacing).</li>
          <li>Calculate the number of joists by dividing the length by the joist spacing (usually 16 inches) and adding 1.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Joist Spacing Matters</h3>
        <p>
          Joist spacing is an essential part of any decking project. It's not just for aesthetics; it also helps to:
        </p>
        <ul>
          <li><strong>Ensure Stability:</strong> Joists that are too far apart will cause the deck to sag or bounce.</li>
          <li><strong>Support the Weight:</strong> Deck boards and people are heavy. Joists provide the necessary support.</li>
          <li><strong>Maintain Alignment:</strong> Joists help to keep the deck boards straight and level.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How many boards do I need for a 12x12 deck?</p>
            <p>For a 12x12 deck with 5.5-inch boards and 0.25-inch spacing, you'll need 26 boards (144 / 5.75 = 25.04, rounded up to 26).</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the average cost of a wood deck per square foot?</p>
            <p>Wood deck costs vary widely. Pressure-treated pine typically costs $15-$25 per square foot, while cedar or redwood can range from $25-$45 per square foot, including installation.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I use wood or composite decking?</p>
            <p>Wood is more affordable but requires more maintenance. Composite is more expensive but is more durable and requires less maintenance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
