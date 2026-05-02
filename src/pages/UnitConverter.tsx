import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


const units: Record<string, Record<string, number>> = {
  length: {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    millimeters: 1000,
    miles: 0.000621371,
    yards: 1.09361,
    feet: 3.28084,
    inches: 39.3701,
  },
  weight: {
    kilograms: 1,
    grams: 1000,
    milligrams: 1000000,
    pounds: 2.20462,
    ounces: 35.274,
    tons: 0.00110231,
  },
  volume: {
    liters: 1,
    milliliters: 1000,
    gallons: 0.264172,
    quarts: 1.05669,
    pints: 2.11338,
    cups: 4.22675,
  },
};

export const UnitConverter: React.FC = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('meters');
  const [toUnit, setToUnit] = useState('kilometers');
  const [value, setValue] = useState<number>(1);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    const fromRate = units[category][fromUnit];
    const toRate = units[category][toUnit];
    const baseValue = value / fromRate;
    setResult(baseValue * toRate);
  }, [category, fromUnit, toUnit, value]);

  const handleCategoryChange = (newCat: string) => {
    setCategory(newCat);
    const firstUnit = Object.keys(units[newCat])[0];
    const secondUnit = Object.keys(units[newCat])[1] || firstUnit;
    setFromUnit(firstUnit);
    setToUnit(secondUnit);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Unit Converter [Free & No Sign-up]</title>
        <meta name="description" content="Free online unit converter for 2026. Easily convert between metric and imperial units for length, weight, and volume with instant results." />
      </Helmet>

      <h1>Unit Converter</h1>
      <p>Quickly convert between various units of measurement for length, weight, and volume.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Conversion Settings</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Category</label>
              <select 
                value={category} 
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="input-field w-full"
              >
                <option value="length">Length</option>
                <option value="weight">Weight</option>
                <option value="volume">Volume</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">From</label>
                <select 
                  value={fromUnit} 
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="input-field w-full"
                >
                  {Object.keys(units[category]).map(u => (
                    <option key={u} value={u}>{u.charAt(0).toUpperCase() + u.slice(1)}</option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">To</label>
                <select 
                  value={toUnit} 
                  onChange={(e) => setToUnit(e.target.value)}
                  className="input-field w-full"
                >
                  {Object.keys(units[category]).map(u => (
                    <option key={u} value={u}>{u.charAt(0).toUpperCase() + u.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Value to Convert</label>
              <input 
                type="number" 
                value={value} 
                onChange={(e) => setValue(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Result</div>
            <div className="result-box">
              <div className="text-center space-y-2">
                <div className="text-sm text-slate-500">{value} {fromUnit} equals</div>
                <div className="text-3xl font-bold text-[#0066cc]">
                  {result.toLocaleString(undefined, { maximumFractionDigits: 6 })} {toUnit}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Unit Conversions</h2>
        <p>
          Unit conversion is the process of expressing the same property in a different unit of measurement. For example, time can be expressed in minutes instead of hours, while distance can be converted from miles to kilometers, or feet to any other measure of length.
        </p>
        <p>
          Our <strong>unit converter 2026</strong> is designed to handle the most common conversions used in everyday life, science, and engineering. Whether you're following a recipe, planning a trip, or working on a DIY project, accurate conversions are essential.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Common Conversion Factors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold mb-2">Length</h4>
            <ul className="text-sm space-y-1">
              <li>1 Mile = 1.60934 Kilometers</li>
              <li>1 Meter = 3.28084 Feet</li>
              <li>1 Inch = 2.54 Centimeters</li>
            </ul>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h4 className="font-bold mb-2">Weight</h4>
            <ul className="text-sm space-y-1">
              <li>1 Kilogram = 2.20462 Pounds</li>
              <li>1 Pound = 16 Ounces</li>
              <li>1 Ton = 2000 Pounds (US)</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use an Online Converter?</h3>
        <p>
          While many conversion factors are simple, others involve complex decimals that are difficult to calculate mentally. An online tool ensures precision and saves time, especially when dealing with multiple conversions or less familiar units.
        </p>
      </div>
    </div>
  );
};
