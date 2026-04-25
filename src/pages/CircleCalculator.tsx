import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, Info, BookOpen, HelpCircle } from 'lucide-react';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const CircleCalculator: React.FC = () => {
  const [radius, setRadius] = useState<string>('');
  const [diameter, setDiameter] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [circumference, setCircumference] = useState<string>('');
  const [lastChanged, setLastChanged] = useState<'radius' | 'diameter' | 'area' | 'circumference' | null>(null);

  const calculate = (type: 'radius' | 'diameter' | 'area' | 'circumference', value: string) => {
    const val = parseFloat(value);
    if (isNaN(val) || val < 0) {
      setRadius('');
      setDiameter('');
      setArea('');
      setCircumference('');
      return;
    }

    let r = 0;
    if (type === 'radius') r = val;
    else if (type === 'diameter') r = val / 2;
    else if (type === 'area') r = Math.sqrt(val / Math.PI);
    else if (type === 'circumference') r = val / (2 * Math.PI);

    setRadius(r.toFixed(4));
    setDiameter((r * 2).toFixed(4));
    setArea((Math.PI * r * r).toFixed(4));
    setCircumference((2 * Math.PI * r).toFixed(4));
    setLastChanged(type);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Circle Calculator | Area, Circumference, Radius & Diameter</title>
        <meta name="description" content="Free online circle calculator. Calculate the area, circumference, radius, and diameter of a circle with any single input." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">math</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">circle calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Circle Calculator</h1>
        <p className="text-slate-600 mt-2">Enter any one value to calculate all other properties of a circle.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Radius (r)</label>
                  <input
                    type="number"
                    value={radius}
                    onChange={(e) => { setRadius(e.target.value); calculate('radius', e.target.value); }}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Diameter (d)</label>
                  <input
                    type="number"
                    value={diameter}
                    onChange={(e) => { setDiameter(e.target.value); calculate('diameter', e.target.value); }}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Area (A)</label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => { setArea(e.target.value); calculate('area', e.target.value); }}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 78.54"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Circumference (C)</label>
                  <input
                    type="number"
                    value={circumference}
                    onChange={(e) => { setCircumference(e.target.value); calculate('circumference', e.target.value); }}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 31.42"
                  />
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Circle Properties</h2>
                {radius ? (
                  <div className="space-y-4 w-full">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Radius</span>
                      <span className="font-bold text-slate-900">{radius}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Diameter</span>
                      <span className="font-bold text-slate-900">{diameter}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Area</span>
                      <span className="font-bold text-[#0066cc]">{area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Circumference</span>
                      <span className="font-bold text-slate-900">{circumference}</span>
                    </div>
                    <div className="pt-6 border-t border-slate-200">
                      <ResultActions 
                        onReset={() => {
                          setRadius('');
                          setDiameter('');
                          setArea('');
                          setCircumference('');
                          setLastChanged(null);
                        }}
                        onCopy={() => {
                          const text = `Circle Results:\nRadius: ${radius}\nDiameter: ${diameter}\nArea: ${area}\nCircumference: ${circumference}\nCalculated at simplycalculator.app`;
                          navigator.clipboard.writeText(text);
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-slate-400">
                    <Calculator className="w-12 h-12 mb-2 opacity-20 mx-auto" />
                    <p>Enter any value to see all circle properties</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Circle Calculator" 
        path="/circle" 
        description="Calculate circle area, circumference, radius, and diameter. Solve geometry problems instantly with any single dimension in 2026."
      />
    </div>
  );
};
