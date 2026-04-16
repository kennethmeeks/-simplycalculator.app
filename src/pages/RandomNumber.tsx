import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


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

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Random Number Generation</h2>
        <p>
          Random number generation is a process of generating a sequence of numbers that cannot be reasonably predicted better than by random chance. It is commonly used in statistics, computer science, and gaming.
        </p>
        <p>
          Our <strong>random number generator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our generator uses a pseudo-random number generator (PRNG) to produce numbers within a specified range. While not truly random, PRNGs are sufficient for most everyday purposes.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Random Number Generator?</h3>
        <p>
          Random number generators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Fairness:</strong> They ensure that every number in a range has an equal chance of being selected.</li>
          <li><strong>Simplicity:</strong> They make it easy to generate large quantities of random data.</li>
          <li><strong>Versatility:</strong> They can be used for a wide range of purposes, from choosing a winner in a contest to generating test data for software.</li>
        </ol>
      </div>
    </div>
  );
};
