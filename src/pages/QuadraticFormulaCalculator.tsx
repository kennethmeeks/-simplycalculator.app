import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Sigma } from 'lucide-react';

export const QuadraticFormulaCalculator: React.FC = () => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(-5);
  const [c, setC] = useState<number>(6);
  const [result, setResult] = useState<{ x1: string, x2: string, discriminant: number } | null>(null);

  useEffect(() => {
    const discriminant = b * b - 4 * a * c;
    let x1 = '';
    let x2 = '';

    if (discriminant > 0) {
      x1 = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(4);
      x2 = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(4);
    } else if (discriminant === 0) {
      x1 = (-b / (2 * a)).toFixed(4);
      x2 = x1;
    } else {
      const realPart = (-b / (2 * a)).toFixed(4);
      const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(4);
      x1 = `${realPart} + ${imaginaryPart}i`;
      x2 = `${realPart} - ${imaginaryPart}i`;
    }

    setResult({ x1, x2, discriminant });
  }, [a, b, c]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Quadratic Formula Calculator | Solve Quadratic Equations</title>
        <meta name="description" content="Free online quadratic formula calculator. Solve quadratic equations of the form ax² + bx + c = 0 and find the roots for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Sigma className="w-8 h-8 text-[#0066cc]" />
          Quadratic Formula Calculator
        </h1>
        <p className="text-slate-600">Solve quadratic equations of the form ax² + bx + c = 0 and find the roots.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="input-label">Coefficient a</label>
                <input 
                  type="number" 
                  value={a} 
                  onChange={(e) => setA(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Coefficient b</label>
                <input 
                  type="number" 
                  value={b} 
                  onChange={(e) => setB(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Coefficient c</label>
                <input 
                  type="number" 
                  value={c} 
                  onChange={(e) => setC(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              The Quadratic Formula
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              The quadratic formula is used to find the roots (solutions) of a quadratic equation:
            </p>
            <div className="bg-white p-4 rounded border border-slate-200 text-center font-serif text-xl mb-4">
              x = (-b ± √(b² - 4ac)) / 2a
            </div>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Discriminant (b² - 4ac):</strong> Determines the nature of the roots.</li>
              <li><strong>Positive Discriminant:</strong> Two distinct real roots.</li>
              <li><strong>Zero Discriminant:</strong> One real root (a repeated root).</li>
              <li><strong>Negative Discriminant:</strong> Two complex (imaginary) roots.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-[#f0f7ff] border border-[#0066cc]/20 text-[#0066cc]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0066cc]">
              <Calculator className="w-5 h-5" />
              Solutions
            </h2>
            {result && (
              <div className="space-y-6">
                <div className="text-center py-4 border-b border-[#0066cc]/10">
                  <div className="text-3xl font-bold mb-1 text-[#0066cc]">x₁ = {result.x1}</div>
                  <div className="text-3xl font-bold text-[#0066cc]">x₂ = {result.x2}</div>
                </div>
                <div className="text-center py-4">
                  <div className="text-xl font-bold text-[#0066cc]">{result.discriminant}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Discriminant</div>
                </div>
              </div>
            )}
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Math Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Always check your answers by plugging them back into the original equation to ensure they make it equal to zero.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Quadratic Equations in 2026</h2>
        <p>
          Our <strong>quadratic formula calculator</strong> is a powerful tool for solving quadratic equations. By entering the coefficients a, b, and c, we can reveal the roots of the equation and its associated discriminant.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Role of the Discriminant</h3>
        <p>
          The discriminant (b² - 4ac) is a key part of the quadratic formula. It tells us how many and what kind of roots the equation has.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Components of Quadratic Equations</h3>
        <ul>
          <li><strong>Coefficient a:</strong> The coefficient of the x² term.</li>
          <li><strong>Coefficient b:</strong> The coefficient of the x term.</li>
          <li><strong>Coefficient c:</strong> The constant term.</li>
          <li><strong>Roots:</strong> The values of x that make the equation equal to zero.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">What is a quadratic equation?</p>
            <p>A quadratic equation is a polynomial equation of degree two, typically written in the form ax² + bx + c = 0.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I solve a quadratic equation?</p>
            <p>You can solve a quadratic equation by factoring, completing the square, or using the quadratic formula.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
