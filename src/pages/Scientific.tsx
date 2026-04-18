import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


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

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About Scientific Calculators</h2>
        <p>
          A scientific calculator is a type of electronic calculator, usually but not always handheld, designed to calculate problems in science, engineering, and mathematics. In 2026, online scientific calculators have become indispensable tools for students and professionals alike, offering advanced functionality without the need for physical hardware. Our <strong>free scientific calculator 2026</strong> provides a reliable platform for your most complex math needs.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Scientific Calculator</h3>
        <p>
          To perform advanced calculations, simply follow these steps:
        </p>
        <ol>
          <li><strong>Basic Arithmetic:</strong> Use the number pad and operators (+, -, ×, ÷) for standard math.</li>
          <li><strong>Advanced Functions:</strong> For trigonometry or logarithms, enter the number first, then press the function button (e.g., enter 90, then press 'sin').</li>
          <li><strong>Clearing:</strong> Use the 'C' button to reset the calculator at any time.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Are results in degrees or radians?</p>
            <p>By default, our trigonometric functions (sin, cos, tan) use radians. To convert degrees to radians, multiply the degree value by π/180.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the difference between log and ln?</p>
            <p>'log' refers to the common logarithm (base 10), while 'ln' refers to the natural logarithm (base e, where e is approximately 2.718).</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can I use this for my exams?</p>
            <p>While our calculator is highly accurate, always check with your instructor or testing center to see if online calculators are permitted during official exams.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          To find the <strong>square root of 144</strong>, enter 144 and press 'sqrt' to get <strong>12</strong>. To find the <strong>sine of 1 radian</strong>, enter 1 and press 'sin' to get approximately <strong>0.841</strong>.
        </p>
      </div>
    </div>
  );
};
