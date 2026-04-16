import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


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

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Square Roots</h2>
        <p>
          Square roots are a way of finding a value that, when multiplied by itself, gives a specified number. They are commonly used in mathematics, science, and engineering.
        </p>
        <p>
          Our <strong>square root calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to find the square root of a number. It uses the standard square root function to provide accurate results.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Square Root Calculator?</h3>
        <p>
          Square root calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Problem Solving:</strong> They provide a fun and insightful way to find the square root of any number.</li>
          <li><strong>Comparison:</strong> They can be a great tool for comparing different values and relationships.</li>
          <li><strong>Insight:</strong> They offer a unique perspective on your potential for understanding mathematics and patterns.</li>
        </ol>
      </div>
    </div>
  );
};
