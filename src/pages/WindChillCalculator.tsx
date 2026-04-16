import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const WindChillCalculator: React.FC = () => {
  const [temp, setTemp] = useState<number>(30);
  const [wind, setWind] = useState<number>(15);
  const [windChill, setWindChill] = useState<number>(0);

  useEffect(() => {
    // Wind Chill formula (Fahrenheit)
    setWindChill(35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16));
  }, [temp, wind]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Wind Chill Calculator | Cold Weather Tool 2026</title>
        <meta name="description" content="Calculate the wind chill based on the temperature and wind speed. Find the effective temperature of your environment easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Wind Chill Calculator</h1>
        <p className="text-slate-600">Calculate the wind chill based on the temperature and wind speed.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Weather Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Temperature (°F)</label>
              <input
                type="number"
                value={temp}
                onChange={(e) => setTemp(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Wind Speed (mph)</label>
              <input
                type="number"
                value={wind}
                onChange={(e) => setWind(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Wind Chill Index</p>
              <p className="text-4xl font-bold text-[#0066cc]">{windChill.toFixed(1)} °F</p>
              <p className="text-lg font-semibold text-slate-900">{((windChill - 32) * 5 / 9).toFixed(1)} °C</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation uses the standard NWS formula for wind chill.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Wind Chill?</h2>
        <p>
          Wind chill is a measure of the effective temperature of an environment based on the temperature and wind speed. It's a useful tool for quantifying the uncertainty of an estimate and identifying the range of values for a data set.
        </p>
        <h3>The Formula</h3>
        <p>
          The formula for wind chill is: 35.74 + 0.6215T - 35.75V^0.16 + 0.4275TV^0.16, where T is temperature and V is wind speed.
        </p>
        <h3>Why Wind Chill Matters</h3>
        <p>
          Wind chill is critical for analyzing and interpreting data in a wide range of fields, including meteorology, science, and public health. It provides a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
