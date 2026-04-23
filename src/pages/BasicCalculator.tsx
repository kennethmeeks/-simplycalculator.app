import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const BasicCalculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [equation, setEquation] = useState<string>('');

  const handleNumber = (num: string) => {
    if (display === '0') setDisplay(num);
    else setDisplay(display + num);
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const handleCalculate = () => {
    try {
      const fullEquation = (equation + display).replace(/×/g, '*').replace(/÷/g, '/');
      // Validate the equation to only allow numbers, operators, and decimal points
      if (!/^[0-9+\-*/. ]+$/.test(fullEquation)) {
        throw new Error('Invalid characters in equation');
      }
      
      // Use Function constructor as a slightly safer (but still restricted) way or a simple parser
      // Since we already strictly validated with regex, we can use Function('')() which is scoped.
      // Alternatively, for these basic ops, we can just use a simple eval-like but restricted approach.
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

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Basic Calculator | Simple Math Tool 2026</title>
        <meta name="description" content="Perform basic arithmetic operations with our simple and easy-to-use calculator. Find the sum, difference, product, or quotient of your numbers easily." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Basic Calculator</h1>
        <p className="text-slate-600">Perform basic arithmetic operations quickly and easily.</p>
      </div>

      

      <div className="max-w-xs mx-auto bg-[#f0f7ff] border border-[#0066cc]/10 p-6 rounded-2xl shadow-xl mb-12">
        <div className="bg-white p-4 rounded-xl mb-6 text-right border border-slate-100">
          <p className="text-slate-400 text-xs h-4 mb-1">{equation}</p>
          <p className="text-[#0066cc] text-3xl font-mono truncate">{display}</p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button onClick={handleClear} className="col-span-2 bg-slate-200 text-slate-700 p-4 rounded-xl hover:bg-slate-300 transition-colors font-bold">AC</button>
          <button onClick={() => handleOperator('/')} className="bg-[#0066cc]/10 text-[#0066cc] p-4 rounded-xl hover:bg-[#0066cc]/20 transition-colors font-bold text-xl">÷</button>
          <button onClick={() => handleOperator('*')} className="bg-[#0066cc]/10 text-[#0066cc] p-4 rounded-xl hover:bg-[#0066cc]/20 transition-colors font-bold text-xl">×</button>

          {[7, 8, 9].map(n => (
            <button key={n} onClick={() => handleNumber(String(n))} className="bg-white text-slate-700 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100 font-bold">{n}</button>
          ))}
          <button onClick={() => handleOperator('-')} className="bg-[#0066cc]/10 text-[#0066cc] p-4 rounded-xl hover:bg-[#0066cc]/20 transition-colors font-bold text-xl">-</button>

          {[4, 5, 6].map(n => (
            <button key={n} onClick={() => handleNumber(String(n))} className="bg-white text-slate-700 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100 font-bold">{n}</button>
          ))}
          <button onClick={() => handleOperator('+')} className="bg-[#0066cc]/10 text-[#0066cc] p-4 rounded-xl hover:bg-[#0066cc]/20 transition-colors font-bold text-xl">+</button>

          {[1, 2, 3].map(n => (
            <button key={n} onClick={() => handleNumber(String(n))} className="bg-white text-slate-700 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100 font-bold">{n}</button>
          ))}
          <button onClick={handleCalculate} className="row-span-2 bg-[#0066cc] text-white p-4 rounded-xl hover:bg-[#0052a3] transition-colors font-bold text-xl">=</button>

          <button onClick={() => handleNumber('0')} className="col-span-2 bg-white text-slate-700 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100 font-bold">0</button>
          <button onClick={() => handleNumber('.')} className="bg-white text-slate-700 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100 font-bold">.</button>
        </div>
      </div>

      <CalculatorSEO 
        name="Basic Calculator" 
        path="/basic-calculator" 
        description="Perform simple arithmetic operations with our easy-to-use basic calculator. Ideal for everyday math, quick additions, subtractions, and more in 2026."
      />
    </div>
  );
};
