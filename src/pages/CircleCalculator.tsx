import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, Info, BookOpen, HelpCircle } from 'lucide-react';


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

          <div className="prose prose-slate max-w-none">
            <h2 className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              Understanding Circle Geometry
            </h2>
            <p>
              A circle is a perfectly round shape where all points on the boundary are at an equal distance from the center. This distance is called the radius.
            </p>

            <h3>Key Formulas</h3>
            <ul>
              <li><strong>Diameter (d):</strong> d = 2 * r</li>
              <li><strong>Circumference (C):</strong> C = 2 * π * r</li>
              <li><strong>Area (A):</strong> A = π * r²</li>
            </ul>
            <p>Where π (pi) is approximately 3.14159.</p>

            <h2 className="flex items-center gap-2 mt-8">
              <HelpCircle className="w-6 h-6 text-[#0066cc]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What is Pi (π)?</h4>
                <p className="text-slate-600 text-sm">Pi is the ratio of a circle's circumference to its diameter. It's an irrational number, meaning it has infinite non-repeating decimals.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">How do I find the radius from the area?</h4>
                <p className="text-slate-600 text-sm">Divide the area by π, then take the square root of the result: r = √(A / π).</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What is the difference between circumference and perimeter?</h4>
                <p className="text-slate-600 text-sm">Circumference is the specific term for the perimeter (the distance around the boundary) of a circle.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#0066cc]" />
              Quick Tips
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                The area is always in square units (e.g., cm², in²).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                The diameter is always exactly twice the radius.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                Circumference is the distance you would travel if you walked around the circle.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
