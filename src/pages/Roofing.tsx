import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Ruler, Package, Info, BookOpen, HelpCircle } from 'lucide-react';

export const RoofingCalculator: React.FC = () => {
  const [length, setLength] = useState<string>('40');
  const [width, setWidth] = useState<string>('30');
  const [pitch, setPitch] = useState<string>('4');
  const [waste, setWaste] = useState<string>('10');
  const [squares, setSquares] = useState<number | null>(null);
  const [bundles, setBundles] = useState<number | null>(null);

  const calculate = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const p = parseFloat(pitch);
    const ws = parseFloat(waste);
    
    if (!isNaN(l) && !isNaN(w) && !isNaN(p) && !isNaN(ws)) {
      const baseArea = l * w;
      // Pitch factor = sqrt(1 + (pitch/12)^2)
      const pitchFactor = Math.sqrt(1 + Math.pow(p / 12, 2));
      const actualArea = baseArea * pitchFactor;
      const totalArea = actualArea * (1 + ws / 100);
      
      const sq = totalArea / 100;
       // 3 bundles per square is standard
      const bnd = Math.ceil(sq * 3);
      
      setSquares(sq);
      setBundles(bnd);
    }
  };

  React.useEffect(() => {
    calculate();
  }, [length, width, pitch, waste]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Roofing Calculator | Estimate Shingles & Squares</title>
        <meta name="description" content="Free roofing calculator. Estimate the number of roofing squares and shingle bundles needed for your project based on roof dimensions and pitch." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">other</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">roofing calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Roofing Calculator</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <Ruler className="w-5 h-5 text-[#0066cc]" />
              <h2 className="text-xl font-semibold">Roof Dimensions</h2>
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
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Roof Pitch (x:12)</label>
                <input
                  type="number"
                  value={pitch}
                  onChange={(e) => setPitch(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
                <p className="text-xs text-slate-500">Inches of rise per 12 inches of run.</p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Waste Factor (%)</label>
                <input
                  type="number"
                  value={waste}
                  onChange={(e) => setWaste(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
                <p className="text-xs text-slate-500">Standard is 10-15% for waste and overlap.</p>
              </div>
            </div>
          </div>

          {squares !== null && bundles !== null && (
            <div className="bg-[#0066cc] text-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <p className="text-blue-100 mb-2 uppercase tracking-wider font-semibold text-sm">Estimated Materials Needed</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-4xl font-bold mb-1">{squares.toFixed(1)}</h3>
                    <p className="text-blue-100 text-sm">Squares</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold mb-1">{bundles}</h3>
                    <p className="text-blue-100 text-sm">Bundles</p>
                  </div>
                </div>
                <p className="text-blue-100 text-xs mt-4 italic">One square = 100 sq ft. Standard bundles cover 33.3 sq ft.</p>
              </div>
            </div>
          )}

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              <h2 className="text-2xl font-bold m-0">Roofing Material Estimation</h2>
            </div>
            
            <p>
              Estimating roofing materials is a critical step in any roofing project. Whether you're a DIYer or a professional contractor, getting the right amount of shingles ensures you don't run out mid-project or overspend on unnecessary materials.
            </p>

            <h3>What is a "Square" in Roofing?</h3>
            <p>
              In the roofing industry, the term <strong>"square"</strong> is a standard unit of measurement equal to 100 square feet of roof surface. Most roofing materials, including shingles, underlayment, and metal panels, are sold by the square.
            </p>

            <h3>Understanding Roof Pitch</h3>
            <p>
              The pitch of a roof is its steepness, expressed as the number of inches it rises vertically for every 12 inches it runs horizontally. For example, a "4:12" pitch rises 4 inches for every foot of horizontal distance.
            </p>
            <p>
              Pitch is important because a steeper roof has more surface area than a flat roof with the same footprint. This calculator uses a "pitch factor" to account for this extra area.
            </p>

            <h3>Waste and Overlap</h3>
            <p>
              You should always order more material than the exact square footage of your roof. This accounts for:
              <ul>
                <li><strong>Cutting:</strong> Shingles must be cut at edges, valleys, and ridges.</li>
                <li><strong>Overlap:</strong> Shingles overlap each other to create a watertight seal.</li>
                <li><strong>Mistakes:</strong> A small buffer for errors during installation.</li>
              </ul>
              A standard waste factor is 10% for simple roofs and up to 15-20% for complex roofs with many valleys and hips.
            </p>

            <h3>Bundles per Square</h3>
            <p>
              For standard three-tab or architectural shingles, there are typically <strong>3 bundles per square</strong>. Each bundle covers approximately 33.3 square feet.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0066cc]" />
              Common Pitches
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-slate-600">Flat/Low</span>
                <span className="font-semibold">0:12 - 2:12</span>
              </div>
              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-slate-600">Standard</span>
                <span className="font-semibold">4:12 - 6:12</span>
              </div>
              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-slate-600">Steep</span>
                <span className="font-semibold">7:12 - 9:12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Very Steep</span>
                <span className="font-semibold">10:12+</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold mb-4">Contractor Tip</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Don't forget to order ridge caps and starter shingles separately. These are often sold by the linear foot rather than by the square.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
