import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Thermometer, Droplets, Wind, Info, BookOpen, HelpCircle } from 'lucide-react';

export const DewPointCalculator: React.FC = () => {
  const [temp, setTemp] = useState<string>('75');
  const [humidity, setHumidity] = useState<string>('50');
  const [dewPoint, setDewPoint] = useState<number | null>(null);

  const calculate = () => {
    const t = parseFloat(temp);
    const rh = parseFloat(humidity);
    if (!isNaN(t) && !isNaN(rh)) {
      // Magnus formula for dew point
      const a = 17.27;
      const b = 237.7;
      const alpha = ((a * t) / (b + t)) + Math.log(rh / 100);
      const result = (b * alpha) / (a - alpha);
      setDewPoint(result);
    }
  };

  React.useEffect(() => {
    calculate();
  }, [temp, humidity]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Dew Point Calculator | Calculate Humidity & Comfort</title>
        <meta name="description" content="Free dew point calculator. Calculate the dew point temperature using air temperature and relative humidity. Learn about humidity and comfort levels in 2026." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">other</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">dew point calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Dew Point Calculator</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <Droplets className="w-5 h-5 text-[#0066cc]" />
              <h2 className="text-xl font-semibold">Atmospheric Conditions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Air Temperature (°C)</label>
                <input
                  type="number"
                  value={temp}
                  onChange={(e) => setTemp(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Relative Humidity (%)</label>
                <input
                  type="number"
                  value={humidity}
                  onChange={(e) => setHumidity(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {dewPoint !== null && (
            <div className="bg-[#0066cc] text-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <p className="text-blue-100 mb-2 uppercase tracking-wider font-semibold text-sm">Calculated Dew Point</p>
                <h3 className="text-5xl font-bold mb-2">{dewPoint.toFixed(1)}°C</h3>
                <p className="text-blue-100 text-sm">
                  {dewPoint < 10 ? 'Dry' : dewPoint < 16 ? 'Comfortable' : dewPoint < 21 ? 'Humid' : 'Uncomfortably Muggy'}
                </p>
              </div>
            </div>
          )}

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              <h2 className="text-2xl font-bold m-0">What is the Dew Point?</h2>
            </div>
            
            <p>
              The dew point is the temperature to which air must be cooled to become saturated with water vapor. When the air temperature reaches the dew point, the relative humidity is 100%, and water begins to condense out of the air in the form of dew, fog, or frost.
            </p>

            <h3>Why Dew Point Matters More Than Humidity</h3>
            <p>
              While relative humidity tells you how close the air is to being saturated, the dew point is a better measure of how the air actually "feels." This is because relative humidity changes as the temperature changes, even if the amount of moisture in the air stays the same.
            </p>

            <h3>Dew Point and Human Comfort</h3>
            <p>
              The dew point directly affects how effectively our bodies can cool themselves through sweating. High dew points make it harder for sweat to evaporate, leading to that "muggy" or "sticky" feeling.
            </p>
            <ul>
              <li><strong>Below 10°C (50°F):</strong> Very comfortable, dry.</li>
              <li><strong>10°C to 15°C (50-60°F):</strong> Comfortable for most people.</li>
              <li><strong>16°C to 20°C (61-68°F):</strong> Noticeably humid, becoming uncomfortable.</li>
              <li><strong>21°C to 24°C (69-75°F):</strong> Very humid, quite uncomfortable.</li>
              <li><strong>Above 24°C (75°F):</strong> Extremely oppressive, potentially dangerous.</li>
            </ul>

            <h3>The Magnus Formula</h3>
            <p>
              This calculator uses the Magnus-Tetens approximation to calculate the dew point, which is accurate for temperatures between 0°C and 60°C.
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
              <div className="text-sm border-b pb-2">
                <span className="text-slate-600 block mb-1">Dew Point vs. Comfort</span>
                <div className="flex justify-between">
                  <span>&lt; 50°F</span>
                  <span className="text-green-600 font-semibold">Dry</span>
                </div>
              </div>
              <div className="text-sm border-b pb-2">
                <div className="flex justify-between">
                  <span>50-60°F</span>
                  <span className="text-blue-600 font-semibold">Pleasant</span>
                </div>
              </div>
              <div className="text-sm border-b pb-2">
                <div className="flex justify-between">
                  <span>60-65°F</span>
                  <span className="text-yellow-600 font-semibold">Humid</span>
                </div>
              </div>
              <div className="text-sm">
                <div className="flex justify-between">
                  <span>&gt; 70°F</span>
                  <span className="text-red-600 font-semibold">Oppressive</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold mb-4">Condensation Tip</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              If the surface temperature of an object (like a window or a cold drink) is below the dew point of the surrounding air, condensation will form on that surface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
