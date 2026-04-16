import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


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
        <title>Love Calculator | Calculate Compatibility Between Two Names 2026</title>
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
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Love Compatibility</h2>
        <p>
          Love compatibility is a process of determining the compatibility between two people based on various factors. It is commonly used for fun and entertainment to see how well two people might get along.
        </p>
        <p>
          Our <strong>love calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to calculate compatibility based on the characters in each name. While not scientifically proven, it is a fun way to see how well two people might match.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Love Calculator?</h3>
        <p>
          Love calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Fun:</strong> They provide a fun and entertaining way to see how well two people might match.</li>
          <li><strong>Conversation Starter:</strong> They can be a great conversation starter for couples and friends.</li>
          <li><strong>Entertainment:</strong> They offer a lighthearted way to explore relationships and compatibility.</li>
        </ol>
      </div>
    </div>
  );
};
