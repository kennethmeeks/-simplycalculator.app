import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Triangle } from 'lucide-react';

export const PythagoreanTheoremCalculator: React.FC = () => {
  const [a, setA] = useState<string>('3');
  const [b, setB] = useState<string>('4');
  const [c, setC] = useState<string>('');
  const [result, setResult] = useState<string>('');

  useEffect(() => {
    const sideA = parseFloat(a);
    const sideB = parseFloat(b);
    const sideC = parseFloat(c);

    if (!isNaN(sideA) && !isNaN(sideB)) {
      setResult(Math.sqrt(sideA * sideA + sideB * sideB).toFixed(4));
    } else if (!isNaN(sideA) && !isNaN(sideC)) {
      if (sideC > sideA) {
        setResult(Math.sqrt(sideC * sideC - sideA * sideA).toFixed(4));
      } else {
        setResult('Invalid');
      }
    } else if (!isNaN(sideB) && !isNaN(sideC)) {
      if (sideC > sideB) {
        setResult(Math.sqrt(sideC * sideC - sideB * sideB).toFixed(4));
      } else {
        setResult('Invalid');
      }
    } else {
      setResult('');
    }
  }, [a, b, c]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Pythagorean Theorem Calculator | Solve Right Triangles</title>
        <meta name="description" content="Free online Pythagorean theorem calculator. Solve for the missing side of a right triangle using a² + b² = c² for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Triangle className="w-8 h-8 text-[#0066cc]" />
          Pythagorean Theorem Calculator
        </h1>
        <p className="text-slate-600">Solve for the missing side of a right triangle using the Pythagorean theorem: a² + b² = c².</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="input-label">Side a</label>
                <input 
                  type="number" 
                  value={a} 
                  onChange={(e) => setA(e.target.value)} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Side b</label>
                <input 
                  type="number" 
                  value={b} 
                  onChange={(e) => setB(e.target.value)} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Side c (Hypotenuse)</label>
                <input 
                  type="number" 
                  value={c} 
                  onChange={(e) => setC(e.target.value)} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              What is the Pythagorean Theorem?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              The Pythagorean theorem states that in a right-angled triangle, the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides.
            </p>
            <div className="bg-white p-4 rounded border border-slate-200 text-center font-serif text-xl mb-4">
              a² + b² = c²
            </div>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Hypotenuse (c):</strong> The longest side of a right triangle, opposite the right angle.</li>
              <li><strong>Legs (a and b):</strong> The two shorter sides that form the right angle.</li>
              <li><strong>Right Triangle:</strong> A triangle with one 90-degree angle.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Missing Side
            </h2>
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="text-8xl font-bold mb-4 text-[#0066cc]">{result || '0'}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Calculated Value</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Math Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The hypotenuse is always the longest side of a right triangle. If your calculated value for a or b is longer than c, check your inputs.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding the Pythagorean Theorem in 2026</h2>
        <p>
          Our <strong>Pythagorean theorem calculator</strong> is a powerful tool for solving right triangles. By entering any two side lengths, we can reveal the length of the third side.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The History of the Theorem</h3>
        <p>
          The Pythagorean theorem is named after the ancient Greek philosopher Pythagoras, although it was known to the Babylonians and Indians long before his time.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Applications</h3>
        <ul>
          <li><strong>Construction:</strong> Ensuring corners are square and calculating roof pitches.</li>
          <li><strong>Navigation:</strong> Finding the shortest distance between two points.</li>
          <li><strong>Physics:</strong> Calculating vectors and forces.</li>
          <li><strong>Daily Life:</strong> Determining the size of a TV screen or the length of a ladder needed to reach a window.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">What is a Pythagorean triple?</p>
            <p>A Pythagorean triple consists of three positive integers a, b, and c, such that a² + b² = c². The most famous example is (3, 4, 5).</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can I use the Pythagorean theorem on any triangle?</p>
            <p>No, the Pythagorean theorem only applies to right-angled triangles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
