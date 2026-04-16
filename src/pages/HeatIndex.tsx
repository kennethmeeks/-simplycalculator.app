import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Thermometer, Sun, Wind, Info, BookOpen, HelpCircle } from 'lucide-react';

export const HeatIndexCalculator: React.FC = () => {
  const [temp, setTemp] = useState<string>('85');
  const [humidity, setHumidity] = useState<string>('60');
  const [heatIndex, setHeatIndex] = useState<number | null>(null);

  const calculate = () => {
    const t = parseFloat(temp);
    const rh = parseFloat(humidity);
    if (!isNaN(t) && !isNaN(rh)) {
      // Rothfusz regression formula for heat index
      let hi = 0.5 * (t + 61.0 + ((t - 68.0) * 1.2) + (rh * 0.094));
      
      if (hi >= 80) {
        hi = -42.379 + 2.04901523 * t + 10.14333127 * rh - 0.22475541 * t * rh - 
             0.00683783 * t * t - 0.05481717 * rh * rh + 0.00122874 * t * t * rh + 
             0.00085282 * t * rh * rh - 0.00000199 * t * t * rh * rh;
             
        if (rh < 13 && t >= 80 && t <= 112) {
          hi -= ((13 - rh) / 4) * Math.sqrt((17 - Math.abs(t - 95)) / 17);
        } else if (rh > 85 && t >= 80 && t <= 87) {
          hi += ((rh - 85) / 10) * ((87 - t) / 5);
        }
      }
      setHeatIndex(hi);
    }
  };

  React.useEffect(() => {
    calculate();
  }, [temp, humidity]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Heat Index Calculator | Calculate Real Feel Temperature</title>
        <meta name="description" content="Free heat index calculator. Calculate the apparent temperature or 'real feel' based on air temperature and relative humidity. Learn about heat safety in 2026." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">other</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">heat index calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Heat Index Calculator</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <Sun className="w-5 h-5 text-[#0066cc]" />
              <h2 className="text-xl font-semibold">Weather Conditions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Air Temperature (°F)</label>
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

          {heatIndex !== null && (
            <div className="bg-[#0066cc] text-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <p className="text-blue-100 mb-2 uppercase tracking-wider font-semibold text-sm">Apparent Temperature (Real Feel)</p>
                <h3 className="text-5xl font-bold mb-2">{heatIndex.toFixed(1)}°F</h3>
                <p className="text-blue-100 text-sm">
                  {heatIndex < 80 ? 'Safe' : heatIndex < 91 ? 'Caution' : heatIndex < 104 ? 'Extreme Caution' : heatIndex < 125 ? 'Danger' : 'Extreme Danger'}
                </p>
              </div>
            </div>
          )}

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              <h2 className="text-2xl font-bold m-0">What is the Heat Index?</h2>
            </div>
            
            <p>
              The heat index, also known as the <strong>apparent temperature</strong>, is what the temperature feels like to the human body when relative humidity is combined with the air temperature. This has important considerations for the human body's comfort and safety.
            </p>

            <h3>How Humidity Affects Heat</h3>
            <p>
              When the body gets too hot, it begins to perspire or sweat to cool itself off. If the perspiration is not able to evaporate, the body cannot regulate its temperature. Evaporation is a cooling process. When the relative humidity is high, the evaporation rate is reduced, so the body's rate of cooling is reduced. The body feels warmer in humid conditions.
            </p>

            <h3>Heat Index Safety Categories</h3>
            <p>
              The National Weather Service uses the following categories to warn of potential heat-related health issues:
            </p>
            <ul>
              <li><strong>80°F - 90°F (Caution):</strong> Fatigue is possible with prolonged exposure and activity. Continuing activity could lead to heat cramps.</li>
              <li><strong>91°F - 103°F (Extreme Caution):</strong> Heat cramps and heat exhaustion are possible. Continuing activity could lead to heat stroke.</li>
              <li><strong>104°F - 124°F (Danger):</strong> Heat cramps and heat exhaustion are likely; heat stroke is probable with continued activity.</li>
              <li><strong>125°F or higher (Extreme Danger):</strong> Heat stroke is highly likely.</li>
            </ul>

            <h3>Important Note</h3>
            <p>
              Heat index values are devised for shady, light wind conditions. Exposure to full sunshine can increase heat index values by up to 15°F. Also, strong winds, particularly with very hot, very dry air, can be extremely hazardous.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0066cc]" />
              Heat Safety Tips
            </h3>
            <div className="space-y-4">
              <div className="text-sm border-b pb-2">
                <span className="text-slate-600 block mb-1">Stay Hydrated</span>
                <p className="text-slate-500">Drink plenty of water even if you don't feel thirsty.</p>
              </div>
              <div className="text-sm border-b pb-2">
                <span className="text-slate-600 block mb-1">Wear Light Clothing</span>
                <p className="text-slate-500">Wear lightweight, light-colored, loose-fitting clothing.</p>
              </div>
              <div className="text-sm">
                <span className="text-slate-600 block mb-1">Limit Activity</span>
                <p className="text-slate-500">Avoid strenuous activity during the hottest part of the day.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold mb-4">Did You Know?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              The heat index is only valid for temperatures above 80°F (27°C) and relative humidity above 40%. For colder temperatures, the <strong>Wind Chill</strong> is used instead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
