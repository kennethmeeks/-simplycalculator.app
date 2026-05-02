import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


const numerologyMap: Record<string, number> = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
  j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
  s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
};

export const Numerology: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateNumerology = () => {
    const lowerName = name.toLowerCase().replace(/[^a-z]/g, '');
    let score = 0;
    for (let i = 0; i < lowerName.length; i++) {
      score += numerologyMap[lowerName[i]] || 0;
    }
    while (score > 9 && score !== 11 && score !== 22 && score !== 33) {
      score = score.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    setResult(score);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Numerology Calculator [100% Private]</title>
        <meta name="description" content="Free online numerology calculator for 2026. Quickly calculate your life path number from your name with instant results." />
      </Helmet>

      <h1>Numerology Calculator</h1>
      <p>Quickly calculate your life path number from your name for insight and self-discovery.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Name</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Full Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="input-field w-full" 
                placeholder="Enter your full name..."
              />
            </div>
            <button 
              onClick={calculateNumerology}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Life Path Number
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
                    <div className="text-sm text-slate-500">Life Path Number</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      {result === 1 ? 'The Leader' : result === 2 ? 'The Peacemaker' : result === 3 ? 'The Creative' : result === 4 ? 'The Builder' : result === 5 ? 'The Adventurer' : result === 6 ? 'The Nurturer' : result === 7 ? 'The Seeker' : result === 8 ? 'The Powerhouse' : result === 9 ? 'The Humanitarian' : 'Master Number'}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your name to see results!</div>
                )}
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setName('');
              setResult(null);
            }}
            onCopy={() => {
              if (result !== null) {
                const text = `Numerology Life Path Number for ${name}: ${result}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Numerology Calculator"
        path="/numerology"
        description="Calculate your life path number based on your name or birth date."
      />
    </div>
  );
};
