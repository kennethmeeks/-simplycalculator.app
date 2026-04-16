import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const ScientificNotation: React.FC = () => {
  const [number, setNumber] = useState<string>('123456');
  const [scientific, setScientific] = useState<string>('');
  const [standard, setStandard] = useState<string>('');

  useEffect(() => {
    const num = parseFloat(number);
    if (!isNaN(num)) {
      setScientific(num.toExponential());
      setStandard(num.toLocaleString(undefined, { maximumFractionDigits: 10 }));
    } else {
      setScientific('Invalid Input');
      setStandard('Invalid Input');
    }
  }, [number]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Scientific Notation Calculator | Convert to Standard Form 2026</title>
        <meta name="description" content="Free online scientific notation calculator for 2026. Easily convert between scientific notation and standard form with instant results." />
      </Helmet>

      <h1>Scientific Notation Calculator</h1>
      <p>Quickly convert between scientific notation and standard form for any number.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Number</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Number</label>
              <input 
                type="text" 
                value={number} 
                onChange={(e) => setNumber(e.target.value)} 
                className="input-field w-full" 
                placeholder="e.g., 123456 or 1.23e5"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Scientific Notation:</span>
                  <span className="font-bold text-[#0066cc]">{scientific}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold">Standard Form:</span>
                  <span className="font-bold text-[#0066cc]">{standard}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Scientific Notation</h2>
        <p>
          Scientific notation is a way of expressing numbers that are too large or too small to be conveniently written in decimal form. It is commonly used by scientists, mathematicians, and engineers to simplify calculations and comparisons.
        </p>
        <p>
          Our <strong>scientific notation calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Format</h3>
        <p>
          Scientific notation is written in the form:
        </p>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center font-mono text-xl">
          m × 10<sup>n</sup>
        </div>
        <p className="mt-4">
          Where:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>m</strong> is the coefficient (a number between 1 and 10).</li>
          <li><strong>n</strong> is the exponent (an integer).</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If you have the number <strong>123,456</strong>, it can be written in scientific notation as:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>1.23456 × 10<sup>5</sup></strong></li>
        </ul>
        <p>
          If you have the number <strong>0.000123</strong>, it can be written in scientific notation as:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>1.23 × 10<sup>-4</sup></strong></li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use Scientific Notation?</h3>
        <p>
          Scientific notation is useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Simplicity:</strong> It makes very large or very small numbers easier to read and write.</li>
          <li><strong>Comparison:</strong> It allows for quick comparison of the magnitude of different numbers.</li>
          <li><strong>Precision:</strong> It clearly indicates the number of significant figures in a measurement.</li>
        </ol>
      </div>
    </div>
  );
};
