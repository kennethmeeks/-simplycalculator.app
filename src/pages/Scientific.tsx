import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const ScientificCalculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleDigit = (digit: string) => {
    if (display === '0') {
      setDisplay(digit);
    } else {
      setDisplay(display + digit);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const handleEqual = () => {
    try {
      const fullEquation = (equation + display).replace('×', '*').replace('÷', '/');
      // Validate the equation to only allow numbers, operators, and decimal points
      if (!/^[0-9+\-*/. ]+$/.test(fullEquation)) {
        throw new Error('Invalid characters in equation');
      }
      
      // eslint-disable-next-line no-new-func
      const result = new Function(`return ${fullEquation}`)();
      
      if (typeof result !== 'number' || !isFinite(result)) {
        throw new Error('Invalid result');
      }

      setDisplay(String(result));
      setEquation('');
    } catch (e) {
      setDisplay('Error');
    }
  };

  const handleFunction = (fn: string) => {
    try {
      const val = Number(display);
      let result = 0;
      switch (fn) {
        case 'sin': result = Math.sin(val); break;
        case 'cos': result = Math.cos(val); break;
        case 'tan': result = Math.tan(val); break;
        case 'sqrt': result = Math.sqrt(val); break;
        case 'log': result = Math.log10(val); break;
        case 'ln': result = Math.log(val); break;
        default: result = val;
      }
      setDisplay(String(result));
    } catch (e) {
      setDisplay('Error');
    }
  };

  const buttons = [
    ['sin', 'cos', 'tan', 'C'],
    ['sqrt', 'log', 'ln', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=', '']
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Free Scientific Calculator 2026 | simplycalculator.app</title>
        <meta name="description" content="Use our free 2026 online scientific calculator for advanced math, trigonometry, and logarithms. Accurate and easy to use." />
      </Helmet>

      <h1>Scientific Calculator</h1>
      <p>Perform advanced mathematical calculations including trigonometry, logarithms, and square roots.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container p-6 bg-[#f0f7ff] border border-[#0066cc]/10 rounded-xl shadow-xl">
          <div className="bg-white p-4 rounded-lg mb-4 text-right border border-slate-100">
            <div className="text-slate-400 text-xs h-4 mb-1">{equation}</div>
            <div className="text-[#0066cc] text-3xl font-mono overflow-hidden">{display}</div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {buttons.flat().map((btn, i) => {
              if (!btn) return <div key={i}></div>;
              let onClick = () => handleDigit(btn);
              if (['+', '-', '×', '÷'].includes(btn)) onClick = () => handleOperator(btn);
              if (btn === '=') onClick = handleEqual;
              if (btn === 'C') onClick = handleClear;
              if (['sin', 'cos', 'tan', 'sqrt', 'log', 'ln'].includes(btn)) onClick = () => handleFunction(btn);

              const isOp = ['+', '-', '×', '÷', '='].includes(btn);
              const isFn = ['sin', 'cos', 'tan', 'sqrt', 'log', 'ln'].includes(btn);

              return (
                <button
                  key={i}
                  onClick={onClick}
                  className={`p-3 rounded-lg font-bold text-sm transition-colors ${
                    isOp ? 'bg-[#0066cc] text-white hover:bg-[#0052a3]' :
                    isFn ? 'bg-[#0066cc]/10 text-[#0066cc] hover:bg-[#0066cc]/20' :
                    btn === 'C' ? 'bg-red-500 text-white hover:bg-red-600' :
                    'bg-white text-slate-700 border border-slate-100 hover:bg-slate-50'
                  }`}
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Instructions</div>
            <div className="space-y-4 text-sm text-slate-600">
              <p>Our scientific calculator is designed for students, engineers, and anyone needing more than basic arithmetic.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Trigonometry:</strong> Calculate sine (sin), cosine (cos), and tangent (tan). Note: Results are in radians.</li>
                <li><strong>Logarithms:</strong> Use 'log' for base-10 and 'ln' for natural logarithms.</li>
                <li><strong>Roots:</strong> Use 'sqrt' to find the square root of any positive number.</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Scientific Calculator" 
        path="/scientific" 
        description="Perform advanced mathematical operations including trigonometry, logarithms, and powers. A free online scientific calculator for 2026."
      />
    </div>
  );
};
