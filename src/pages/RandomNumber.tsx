import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const RandomNumber: React.FC = () => {
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);
  const [count, setCount] = useState<number>(1);
  const [results, setResults] = useState<number[]>([]);

  const generateRandom = () => {
    const newResults = [];
    for (let i = 0; i < count; i++) {
      newResults.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    setResults(newResults);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Random Number Generator | Generate Random Integers 2026</title>
        <meta name="description" content="Free online random number generator for 2026. Quickly generate random integers within a specified range with instant results." />
      </Helmet>

      <h1>Random Number Generator</h1>
      <p>Quickly generate random integers within a specified range for any purpose.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Generator Settings</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Minimum Value</label>
              <input 
                type="number" 
                value={min} 
                onChange={(e) => setMin(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Maximum Value</label>
              <input 
                type="number" 
                value={max} 
                onChange={(e) => setMax(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Number of Results</label>
              <input 
                type="number" 
                value={count} 
                onChange={(e) => setCount(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={generateRandom}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Generate Random Numbers
            </button>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {results.map((r, i) => (
                    <div key={i} className="bg-blue-50 border border-blue-100 p-3 rounded-lg font-bold text-[#0066cc] text-xl">
                      {r}
                    </div>
                  ))}
                </div>
                {results.length === 0 && (
                  <div className="text-center text-slate-500 py-4">Click generate to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Random Number Generator" 
        path="/random-number" 
        description="Generate random integers within a specific range instantly. Perfect for games, research, or any situation requiring randomness in 2026."
      />
    </div>
  );
};
