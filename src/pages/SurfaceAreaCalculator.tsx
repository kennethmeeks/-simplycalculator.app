import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, Info, BookOpen, HelpCircle } from 'lucide-react';


export const SurfaceAreaCalculator: React.FC = () => {
  const [shape, setShape] = useState<'sphere' | 'cylinder' | 'cone' | 'cube' | 'rectangular-prism'>('sphere');
  const [radius, setRadius] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const r = parseFloat(radius);
    const h = parseFloat(height);
    const l = parseFloat(length);
    const w = parseFloat(width);

    let sa = 0;
    if (shape === 'sphere') {
      if (!isNaN(r)) sa = 4 * Math.PI * r * r;
    } else if (shape === 'cylinder') {
      if (!isNaN(r) && !isNaN(h)) sa = 2 * Math.PI * r * h + 2 * Math.PI * r * r;
    } else if (shape === 'cone') {
      if (!isNaN(r) && !isNaN(h)) {
        const slantHeight = Math.sqrt(r * r + h * h);
        sa = Math.PI * r * (r + slantHeight);
      }
    } else if (shape === 'cube') {
      if (!isNaN(l)) sa = 6 * l * l;
    } else if (shape === 'rectangular-prism') {
      if (!isNaN(l) && !isNaN(w) && !isNaN(h)) sa = 2 * (l * w + l * h + w * h);
    }

    setResult(sa);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Surface Area Calculator | 3D Shape Solver</title>
        <meta name="description" content="Free online surface area calculator. Calculate the surface area of spheres, cylinders, cones, cubes, and rectangular prisms." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">math</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">surface area calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Surface Area Calculator</h1>
        <p className="text-slate-600 mt-2">Calculate the surface area of common 3D geometric shapes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Select Shape</label>
                  <select
                    value={shape}
                    onChange={(e) => setShape(e.target.value as any)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  >
                    <option value="sphere">Sphere</option>
                    <option value="cylinder">Cylinder</option>
                    <option value="cone">Cone</option>
                    <option value="cube">Cube</option>
                    <option value="rectangular-prism">Rectangular Prism</option>
                  </select>
                </div>

                {(shape === 'sphere' || shape === 'cylinder' || shape === 'cone') && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Radius (r)</label>
                    <input
                      type="number"
                      value={radius}
                      onChange={(e) => setRadius(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="e.g., 5"
                    />
                  </div>
                )}

                {(shape === 'cylinder' || shape === 'cone' || shape === 'rectangular-prism') && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Height (h)</label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="e.g., 10"
                    />
                  </div>
                )}

                {(shape === 'cube' || shape === 'rectangular-prism') && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Length (l)</label>
                    <input
                      type="number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="e.g., 8"
                    />
                  </div>
                )}

                {shape === 'rectangular-prism' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Width (w)</label>
                    <input
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="e.g., 6"
                    />
                  </div>
                )}

                <button
                  onClick={calculate}
                  className="w-full bg-[#0066cc] text-white font-semibold py-3 rounded-xl hover:bg-[#0052a3] transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate Surface Area
                </button>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Total Surface Area</h2>
                {result !== null ? (
                  <div className="space-y-2">
                    <p className="text-5xl font-bold text-[#0066cc]">{result.toLocaleString(undefined, { maximumFractionDigits: 4 })}</p>
                    <p className="text-sm text-slate-500">Square Units</p>
                  </div>
                ) : (
                  <div className="text-slate-400">
                    <Calculator className="w-12 h-12 mb-2 opacity-20 mx-auto" />
                    <p>Enter dimensions to calculate the surface area</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              Understanding Surface Area
            </h2>
            <p>
              Surface area is the total area that the surface of a three-dimensional object occupies. It is measured in square units.
            </p>

            <h3>Key Formulas</h3>
            <ul>
              <li><strong>Sphere:</strong> 4 * π * r²</li>
              <li><strong>Cylinder:</strong> 2 * π * r * h + 2 * π * r²</li>
              <li><strong>Cone:</strong> π * r * (r + √(r² + h²))</li>
              <li><strong>Cube:</strong> 6 * l²</li>
              <li><strong>Rectangular Prism:</strong> 2 * (l*w + l*h + w*h)</li>
            </ul>

            <h2 className="flex items-center gap-2 mt-8">
              <HelpCircle className="w-6 h-6 text-[#0066cc]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What is the difference between volume and surface area?</h4>
                <p className="text-slate-600 text-sm">Volume is the amount of space inside an object, while surface area is the total area of its outer surface.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">How do I find the surface area of a composite shape?</h4>
                <p className="text-slate-600 text-sm">Calculate the surface area of each individual part and add them together, subtracting any overlapping areas.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What are the units for surface area?</h4>
                <p className="text-slate-600 text-sm">Surface area is always measured in square units, such as square inches (in²), square centimeters (cm²), or square feet (ft²).</p>
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
                The surface area of a cube is just 6 times the area of one of its faces.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                For a cylinder, the surface area includes the top and bottom circles plus the curved side.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                Always use the same units for all dimensions (radius, height, length, width).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
