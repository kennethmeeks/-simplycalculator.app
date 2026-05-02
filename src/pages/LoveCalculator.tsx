import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const LoveCalculator: React.FC = () => {
  const [name1, setName1] = useState<string>('');
  const [name2, setName2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateLove = () => {
    const combinedNames = (name1 + name2).toLowerCase();
    let score = 0;
    for (let i = 0; i < combinedNames.length; i++) {
      score += combinedNames.charCodeAt(i);
    }
    setResult(score % 101);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Love Calculator [Instant Results]</title>
        <meta name="description" content="Free online love calculator for 2026. Quickly calculate compatibility between two names with instant results." />
      </Helmet>

      <h1>Love Calculator</h1>
      <p>Quickly calculate compatibility between two names for fun and entertainment.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Names</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Name 1</label>
              <input 
                type="text" 
                value={name1} 
                onChange={(e) => setName1(e.target.value)} 
                className="input-field w-full" 
                placeholder="Enter first name..."
              />
            </div>
            <div className="input-group">
              <label className="input-label">Name 2</label>
              <input 
                type="text" 
                value={name2} 
                onChange={(e) => setName2(e.target.value)} 
                className="input-field w-full" 
                placeholder="Enter second name..."
              />
            </div>
            <button 
              onClick={calculateLove}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Compatibility
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
                    <div className="text-sm text-slate-500">Compatibility Score</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result}%</div>
                    <div className="text-sm text-slate-400 mt-4">
                      {result > 80 ? 'A perfect match!' : result > 50 ? 'A good match!' : 'Keep looking!'}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter names to see results!</div>
                )}
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setName1('');
              setName2('');
              setResult(null);
            }}
            onCopy={() => {
              if (result !== null) {
                const text = `Love Compatibility between ${name1} and ${name2}: ${result}%\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Love Calculator"
        path="/love-calculator"
        description="Just for fun: calculate the compatibility score between two names with our love meter."
      />
    </div>
  );
};
