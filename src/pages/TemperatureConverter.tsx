import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const TemperatureConverter: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [from, setFrom] = useState<string>('c');
  const [to, setTo] = useState<string>('f');
  const [result, setResult] = useState<number | null>(null);

  const convertTemperature = () => {
    let celsius = 0;
    if (from === 'c') celsius = value;
    else if (from === 'f') celsius = (value - 32) * 5 / 9;
    else if (from === 'k') celsius = value - 273.15;

    let final = 0;
    if (to === 'c') final = celsius;
    else if (to === 'f') final = celsius * 9 / 5 + 32;
    else if (to === 'k') final = celsius + 273.15;

    setResult(final);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Temperature Converter | Convert Celsius, Fahrenheit & Kelvin 2026</title>
        <meta name="description" content="Free online temperature converter for 2026. Quickly convert between Celsius, Fahrenheit, and Kelvin with instant results." />
      </Helmet>

      <h1>Temperature Converter</h1>
      <p>Quickly convert between Celsius, Fahrenheit, and Kelvin for any purpose.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Converter Settings</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Temperature Value</label>
              <input 
                type="number" 
                value={value} 
                onChange={(e) => setValue(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">From</label>
                <select 
                  value={from} 
                  onChange={(e) => setFrom(e.target.value)} 
                  className="input-field w-full"
                >
                  <option value="c">Celsius (°C)</option>
                  <option value="f">Fahrenheit (°F)</option>
                  <option value="k">Kelvin (K)</option>
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">To</label>
                <select 
                  value={to} 
                  onChange={(e) => setTo(e.target.value)} 
                  className="input-field w-full"
                >
                  <option value="c">Celsius (°C)</option>
                  <option value="f">Fahrenheit (°F)</option>
                  <option value="k">Kelvin (K)</option>
                </select>
              </div>
            </div>
            <button 
              onClick={convertTemperature}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Convert Temperature
            </button>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="text-center space-y-4">
                {result !== null ? (
                  <div className="space-y-2">
                    <div className="text-sm text-slate-500">Converted Temperature</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(2)} {to.toUpperCase()}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      {value} {from.toUpperCase()} is {result.toFixed(2)} {to.toUpperCase()}.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter a value to see results!</div>
                )}
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setValue(0);
              setResult(null);
            }}
            onCopy={() => {
              if (result !== null) {
                const text = `${value} ${from.toUpperCase()} is ${result.toFixed(2)} ${to.toUpperCase()}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Temperature Converter"
        path="/temperature-converter"
        description="Convert Celsius, Fahrenheit, and Kelvin instantly."
      />
    </div>
  );
};
