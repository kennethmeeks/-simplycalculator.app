import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const SquareRoot: React.FC = () => {
  const [number, setNumber] = useState<number>(1);
  const [result, setResult] = useState<number | null>(null);

  const calculateSquareRoot = () => {
    setResult(Math.sqrt(number));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Square Root Calculator | Find the Square Root of a Number 2026</title>
        <meta name="description" content="Free online square root calculator for 2026. Quickly find the square root of any number with instant results." />
      </Helmet>

      <h1>Square Root Calculator</h1>
      <p>Quickly find the square root of any number for any purpose.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Number</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Number</label>
              <input 
                type="number" 
                value={number} 
                onChange={(e) => setNumber(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateSquareRoot}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Square Root
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
                    <div className="text-sm text-slate-500">Square Root</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(4)}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      The square root of {number} is {result.toFixed(4)}.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter a number to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Square Root Calculator" 
        path="/square-root" 
        description="Quickly find the square root of any positive number. Ideal for math, science, and engineering problems in 2026."
      />
    </div>
  );
};
