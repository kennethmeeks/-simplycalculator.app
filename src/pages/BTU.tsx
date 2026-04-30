import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Thermometer, Home, Wind, Info, BookOpen, HelpCircle } from 'lucide-react';

import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';

export const BTUCalculator: React.FC = () => {
  const [length, setLength] = useState<string>('20');
  const [width, setWidth] = useState<string>('15');
  const [insulation, setInsulation] = useState<string>('average');
  const [btu, setBtu] = useState<number | null>(null);

  const calculate = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (!isNaN(l) && !isNaN(w)) {
      const area = l * w;
      let multiplier = 20; // Base multiplier for 8ft ceiling
      
      if (insulation === 'poor') multiplier = 30;
      if (insulation === 'good') multiplier = 15;
      
      const result = area * multiplier;
      setBtu(result);
    }
  };

  React.useEffect(() => {
    calculate();
  }, [length, width, insulation]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>BTU Calculator | Calculate Heating & Cooling Needs | simplycalculator.app</title>
        <meta name="description" content="Free BTU calculator for air conditioning and heating. Calculate the BTUs needed for any room size based on square footage and insulation quality." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">other</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">btu calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">BTU Calculator</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <Home className="w-5 h-5 text-[#0066cc]" />
              <h2 className="text-xl font-semibold">Room Dimensions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Length (ft)</label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Width (ft)</label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-medium text-slate-700">Insulation Quality</label>
                <select
                  value={insulation}
                  onChange={(e) => setInsulation(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                >
                  <option value="good">Good (Modern, well-sealed)</option>
                  <option value="average">Average (Standard home)</option>
                  <option value="poor">Poor (Old, drafty, many windows)</option>
                </select>
              </div>
            </div>
          </div>

          {btu !== null && (
            <div className="bg-[#0066cc] text-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <p className="text-blue-100 mb-2 uppercase tracking-wider font-semibold text-sm">Estimated Capacity Needed</p>
                <h3 className="text-5xl font-bold mb-2">{btu.toLocaleString()} BTU</h3>
                <p className="text-blue-100 text-sm">Approximately {(btu / 12000).toFixed(1)} Tons</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <ResultActions 
                  onReset={() => {
                    setLength('20');
                    setWidth('15');
                    setInsulation('average');
                  }}
                  onCopy={() => {
                    const text = `BTU Requirement: ${btu.toLocaleString()} BTU\nRoom Size: ${length}x${width} ft\nCalculated at simplycalculator.app`;
                    navigator.clipboard.writeText(text);
                  }}
                  dark
                />
              </div>
            </div>
          )}

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              <h2 className="text-2xl font-bold m-0">What is a BTU?</h2>
            </div>
            
            <p>
              BTU stands for <strong>British Thermal Unit</strong>. It is a traditional unit of heat; it is defined as the amount of heat required to raise the temperature of one pound of water by one degree Fahrenheit.
            </p>

            <h3>How Many BTUs Do I Need?</h3>
            <p>
              Choosing the right size air conditioner or heater is crucial. An undersized unit will run constantly without cooling or heating the room effectively, while an oversized unit will cycle on and off too frequently, leading to poor humidity control and increased wear on the system.
            </p>

            <h3>Factors Influencing BTU Requirements</h3>
            <ul>
              <li><strong>Room Size:</strong> The primary factor. More square footage requires more power.</li>
              <li><strong>Ceiling Height:</strong> Standard calculations assume 8-foot ceilings. If your ceilings are higher, you'll need more BTUs.</li>
              <li><strong>Insulation:</strong> Well-insulated rooms retain temperature better, requiring fewer BTUs.</li>
              <li><strong>Windows and Sunlight:</strong> Large windows, especially those facing south, can significantly increase the cooling load in summer.</li>
              <li><strong>Occupancy:</strong> Each person in a room adds about 600 BTUs of heat.</li>
              <li><strong>Kitchens:</strong> If the unit is for a kitchen, add an extra 4,000 BTUs to account for heat from appliances.</li>
            </ul>

            <h3>Tons vs. BTUs</h3>
            <p>
              In larger HVAC systems, capacity is often measured in "Tons." One ton of cooling capacity is equal to 12,000 BTUs per hour.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0066cc]" />
              Quick Reference
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-slate-600">150 sq ft</span>
                <span className="font-semibold">5,000 BTU</span>
              </div>
              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-slate-600">250 sq ft</span>
                <span className="font-semibold">6,000 BTU</span>
              </div>
              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-slate-600">350 sq ft</span>
                <span className="font-semibold">8,000 BTU</span>
              </div>
              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-slate-600">450 sq ft</span>
                <span className="font-semibold">10,000 BTU</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">550 sq ft</span>
                <span className="font-semibold">12,000 BTU</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="BTU Calculator" 
        path="/btu" 
        description="Calculate the precise BTU requirements for heating and cooling based on room square footage, insulation quality, and local climate factors in 2026."
      />
    </div>
  );
};
