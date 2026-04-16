import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Plus, Trash2, Calculator } from 'lucide-react';

interface Room {
  id: string;
  name: string;
  shape: 'rectangle' | 'circle' | 'triangle';
  dim1: number;
  dim2: number;
}

export const SquareFootageCalculator: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([
    { id: '1', name: 'Room 1', shape: 'rectangle', dim1: 12, dim2: 10 }
  ]);
  const [wastePercent, setWastePercent] = useState(10);
  const [totalSqFt, setTotalSqFt] = useState(0);
  const [withWaste, setWithWaste] = useState(0);

  const addRoom = () => {
    const newRoom: Room = {
      id: Math.random().toString(36).substr(2, 9),
      name: `Room ${rooms.length + 1}`,
      shape: 'rectangle',
      dim1: 0,
      dim2: 0
    };
    setRooms([...rooms, newRoom]);
  };

  const removeRoom = (id: string) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter(room => room.id !== id));
    }
  };

  const updateRoom = (id: string, field: keyof Room, value: any) => {
    setRooms(rooms.map(room => room.id === id ? { ...room, [field]: value } : room));
  };

  useEffect(() => {
    let total = 0;
    rooms.forEach(room => {
      if (room.shape === 'rectangle') {
        total += room.dim1 * room.dim2;
      } else if (room.shape === 'circle') {
        total += Math.PI * Math.pow(room.dim1 / 2, 2);
      } else if (room.shape === 'triangle') {
        total += (room.dim1 * room.dim2) / 2;
      }
    });
    setTotalSqFt(Number(total.toFixed(2)));
    setWithWaste(Number((total * (1 + wastePercent / 100)).toFixed(2)));
  }, [rooms, wastePercent]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Square Footage Calculator | Calculate Area for Flooring & Paint</title>
        <meta name="description" content="Free online square footage calculator for rooms, houses, and outdoor spaces. Calculate total area for flooring, paint, and landscaping with waste factor." />
      </Helmet>

      <h1>Square Footage Calculator</h1>
      <p>Calculate the total square footage of multiple rooms or areas. Perfect for flooring, painting, and home improvement projects.</p>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="section-title flex justify-between items-center">
              <span>Rooms / Areas</span>
              <button 
                onClick={addRoom}
                className="text-xs bg-[#0066cc] text-white px-3 py-1 rounded hover:bg-[#0052a3] flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> Add Area
              </button>
            </div>
            
            <div className="space-y-4">
              {rooms.map((room, index) => (
                <div key={room.id} className="p-4 bg-slate-50 border border-slate-200 rounded-lg relative group">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                    <div className="md:col-span-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Name</label>
                      <input 
                        type="text" 
                        value={room.name} 
                        onChange={(e) => updateRoom(room.id, 'name', e.target.value)}
                        className="w-full text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">Shape</label>
                      <select 
                        value={room.shape} 
                        onChange={(e) => updateRoom(room.id, 'shape', e.target.value)}
                        className="w-full text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                      >
                        <option value="rectangle">Rectangle</option>
                        <option value="circle">Circle (Diameter)</option>
                        <option value="triangle">Triangle (Base/Height)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">
                        {room.shape === 'circle' ? 'Diameter (ft)' : 'Length / Base (ft)'}
                      </label>
                      <input 
                        type="number" 
                        value={room.dim1} 
                        onChange={(e) => updateRoom(room.id, 'dim1', Number(e.target.value))}
                        className="w-full text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                      />
                    </div>
                    {room.shape !== 'circle' && (
                      <div>
                        <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block">
                          {room.shape === 'rectangle' ? 'Width (ft)' : 'Height (ft)'}
                        </label>
                        <input 
                          type="number" 
                          value={room.dim2} 
                          onChange={(e) => updateRoom(room.id, 'dim2', Number(e.target.value))}
                          className="w-full text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                        />
                      </div>
                    )}
                  </div>
                  {rooms.length > 1 && (
                    <button 
                      onClick={() => removeRoom(room.id)}
                      className="absolute -right-2 -top-2 bg-white border border-slate-200 text-red-500 p-1 rounded-full shadow-sm hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Project Summary</div>
            <div className="space-y-4">
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Total Square Footage</div>
                <div className="text-3xl font-bold text-[#0066cc]">{totalSqFt} <span className="text-sm font-normal text-slate-400">sq ft</span></div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <label className="input-label">Waste Factor (%)</label>
                <div className="flex items-center gap-3">
                  <input 
                    type="number" 
                    value={wastePercent} 
                    onChange={(e) => setWastePercent(Number(e.target.value))} 
                    className="input-field w-24" 
                  />
                  <span className="text-xs text-slate-500 italic">Recommended: 10%</span>
                </div>
              </div>

              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Total with Waste</div>
                <div className="text-3xl font-bold text-[#0066cc]">{withWaste} <span className="text-sm font-normal text-slate-400">sq ft</span></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Ultimate Guide to Square Footage Calculation</h2>
        <p>
          Calculating square footage is a critical step in any home improvement project. Whether you are ordering hardwood floors, buying paint for a bedroom, or planning a new patio, knowing the exact area ensures you buy the right amount of materials and stay within your budget. Our <strong>square footage calculator</strong> makes it easy to handle complex layouts and multiple rooms in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Calculate Square Footage for Different Shapes</h3>
        <p>
          Most rooms are rectangular, but sometimes you'll encounter more complex geometries. Here's how to handle them:
        </p>
        
        <h4 className="font-bold text-slate-900">Rectangular and Square Areas</h4>
        <p>
          The simplest calculation: multiply the length by the width. For example, a room that is 12 feet long and 10 feet wide is 120 square feet (12 x 10 = 120).
        </p>

        <h4 className="font-bold text-slate-900">Circular Areas</h4>
        <p>
          For circular spaces like fire pits or round rugs, measure the diameter (the distance across the center). The formula is πr², where 'r' is the radius (half the diameter). Our tool handles the math for you—just enter the diameter.
        </p>

        <h4 className="font-bold text-slate-900">Triangular Areas</h4>
        <p>
          If you have a triangular corner or a gabled wall, multiply the base by the height and divide by two. For example, a triangle with a 10-foot base and 8-foot height is 40 square feet (10 x 8 / 2 = 40).
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why You Need a Waste Factor</h3>
        <p>
          When ordering materials like tile, laminate, or hardwood, you should always order more than the exact square footage of the room. This is called a <strong>waste factor</strong>. 
        </p>
        <ul>
          <li><strong>Standard Rooms:</strong> Add 10% for standard rectangular rooms.</li>
          <li><strong>Complex Layouts:</strong> Add 15% if the room has many corners, angles, or if you are laying tile in a diagonal pattern.</li>
          <li><strong>Natural Materials:</strong> Add 15-20% for materials like natural stone or low-grade wood where some pieces may be unusable due to defects.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How do I calculate square footage for an L-shaped room?</p>
            <p>The easiest way is to split the "L" into two separate rectangles. Calculate the area of each rectangle individually and add them together. Our calculator allows you to add multiple "areas" to get a single total.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How many square feet are in a square yard?</p>
            <p>There are 9 square feet in 1 square yard. To convert square feet to square yards, divide your total by 9.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the "usable" square footage of a house?</p>
            <p>Usable square footage typically excludes the thickness of walls, closets, and utility rooms. For flooring, you only measure the visible floor space. For real estate listings, the "gross living area" usually includes everything within the exterior walls.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Practical Tips for Measuring</h3>
        <p>
          When measuring for a project, always measure to the nearest inch and convert to decimals of a foot for the most accurate result. For example, 10 feet 6 inches is 10.5 feet. If you are measuring for paint, don't forget to subtract the area of large windows and doors from your total wall square footage.
        </p>
      </div>
    </div>
  );
};
