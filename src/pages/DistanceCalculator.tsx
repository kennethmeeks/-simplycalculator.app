import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, Info, BookOpen, HelpCircle } from 'lucide-react';


export const DistanceCalculator: React.FC = () => {
  const [dimension, setDimension] = useState<'2D' | '3D'>('2D');
  const [x1, setX1] = useState<string>('');
  const [y1, setY1] = useState<string>('');
  const [z1, setZ1] = useState<string>('');
  const [x2, setX2] = useState<string>('');
  const [y2, setY2] = useState<string>('');
  const [z2, setZ2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const px1 = parseFloat(x1);
    const py1 = parseFloat(y1);
    const pz1 = parseFloat(z1) || 0;
    const px2 = parseFloat(x2);
    const py2 = parseFloat(y2);
    const pz2 = parseFloat(z2) || 0;

    if (isNaN(px1) || isNaN(py1) || isNaN(px2) || isNaN(py2)) return;
    if (dimension === '3D' && (isNaN(pz1) || isNaN(pz2))) return;

    let dist = 0;
    if (dimension === '2D') {
      dist = Math.sqrt(Math.pow(px2 - px1, 2) + Math.pow(py2 - py1, 2));
    } else {
      dist = Math.sqrt(Math.pow(px2 - px1, 2) + Math.pow(py2 - py1, 2) + Math.pow(pz2 - pz1, 2));
    }

    setResult(dist);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Distance Calculator | 2D & 3D Point Distance Solver</title>
        <meta name="description" content="Free online distance calculator. Calculate the distance between two points in 2D or 3D space using the distance formula." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">math</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">distance calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Distance Calculator</h1>
        <p className="text-slate-600 mt-2">Calculate the straight-line distance between two points in 2D or 3D space.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Dimension</label>
                  <select
                    value={dimension}
                    onChange={(e) => setDimension(e.target.value as '2D' | '3D')}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  >
                    <option value="2D">2D (x, y)</option>
                    <option value="3D">3D (x, y, z)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Point 1 (x₁)</label>
                    <input
                      type="number"
                      value={x1}
                      onChange={(e) => setX1(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="x₁"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Point 1 (y₁)</label>
                    <input
                      type="number"
                      value={y1}
                      onChange={(e) => setY1(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="y₁"
                    />
                  </div>
                </div>

                {dimension === '3D' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Point 1 (z₁)</label>
                    <input
                      type="number"
                      value={z1}
                      onChange={(e) => setZ1(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="z₁"
                    />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Point 2 (x₂)</label>
                    <input
                      type="number"
                      value={x2}
                      onChange={(e) => setX2(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="x₂"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Point 2 (y₂)</label>
                    <input
                      type="number"
                      value={y2}
                      onChange={(e) => setY2(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="y₂"
                    />
                  </div>
                </div>

                {dimension === '3D' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Point 2 (z₂)</label>
                    <input
                      type="number"
                      value={z2}
                      onChange={(e) => setZ2(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="z₂"
                    />
                  </div>
                )}

                <button
                  onClick={calculate}
                  className="w-full bg-[#0066cc] text-white font-semibold py-3 rounded-xl hover:bg-[#0052a3] transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate Distance
                </button>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Distance Result</h2>
                {result !== null ? (
                  <div className="space-y-2">
                    <p className="text-5xl font-bold text-[#0066cc]">{result.toLocaleString(undefined, { maximumFractionDigits: 4 })}</p>
                    <p className="text-sm text-slate-500">Units</p>
                  </div>
                ) : (
                  <div className="text-slate-400">
                    <Calculator className="w-12 h-12 mb-2 opacity-20 mx-auto" />
                    <p>Enter coordinates to calculate the distance</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              Understanding the Distance Formula
            </h2>
            <p>
              The distance formula is used to find the straight-line distance between two points in a coordinate system. It is derived from the Pythagorean theorem.
            </p>

            <h3>2D Distance Formula</h3>
            <div className="bg-slate-100 p-4 rounded-lg font-mono text-center mb-4">
              d = √((x₂ - x₁)² + (y₂ - y₁)²)
            </div>

            <h3>3D Distance Formula</h3>
            <div className="bg-slate-100 p-4 rounded-lg font-mono text-center mb-4">
              d = √((x₂ - x₁)² + (y₂ - y₁)² + (z₂ - z₁)²)
            </div>

            <h2 className="flex items-center gap-2 mt-8">
              <HelpCircle className="w-6 h-6 text-[#0066cc]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What is Euclidean distance?</h4>
                <p className="text-slate-600 text-sm">Euclidean distance is the straight-line distance between two points in Euclidean space, calculated using the distance formula.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">Can distance be negative?</h4>
                <p className="text-slate-600 text-sm">No, distance is always a non-negative value. The formula involves squaring differences, which always results in a positive number or zero.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What is the distance between (0,0) and (3,4)?</h4>
                <p className="text-slate-600 text-sm">Using the 2D formula: √((3-0)² + (4-0)²) = √(9 + 16) = √25 = 5.</p>
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
                The order of points (Point 1 vs Point 2) doesn't matter for the distance.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                Use the 3D formula for points in space (e.g., GPS coordinates with altitude).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                The result is in the same units as your input coordinates.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
