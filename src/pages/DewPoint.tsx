import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Thermometer, Droplets, Wind, Info, BookOpen, HelpCircle } from 'lucide-react';
import { CalculatorSEO } from '../components/CalculatorSEO';

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

          </div>
        </div>

      <CalculatorSEO 
        name="Dew Point Calculator" 
        path="/dew-point" 
        description="Calculate the dew point temperature based on air temperature and relative humidity. Understand comfort levels, condensation risks, and atmospheric moisture in 2026."
      />
    </div>
  );
};
