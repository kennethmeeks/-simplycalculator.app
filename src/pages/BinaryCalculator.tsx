import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Binary, Hash, Info } from 'lucide-react';
import { CalculatorSEO } from '../components/CalculatorSEO';

export const BinaryCalculator: React.FC = () => {
  const [binary, setBinary] = useState('1010');
  const [decimal, setDecimal] = useState('10');
  const [hex, setHex] = useState('A');
  
  const handleBinaryChange = (val: string) => {
    const cleanBin = val.replace(/[^0-1]/g, '');
    setBinary(cleanBin);
    if (cleanBin) {
      const dec = parseInt(cleanBin, 2);
      setDecimal(dec.toString(10));
      setHex(dec.toString(16).toUpperCase());
    } else {
      setDecimal('');
      setHex('');
    }
  };

  const handleDecChange = (val: string) => {
    const dec = parseInt(val, 10);
    setDecimal(val);
    if (!isNaN(dec)) {
      setBinary(dec.toString(2));
      setHex(dec.toString(16).toUpperCase());
    } else {
      setBinary('');
      setHex('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Binary Calculator | Binary to Decimal & Hex Converter | simplycalculator.app</title>
        <meta name="description" content="Free online binary calculator. Convert between binary, decimal, and hexadecimal systems instantly. Essential for computer science in 2026." />
      </Helmet>

      <h1>Binary Calculator</h1>
      <p>Convert numbers between binary (base 2), decimal (base 10), and hexadecimal (base 16). The fundamental language of digital computers.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Number Conversion</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Binary (Base 2)</label>
              <textarea 
                value={binary} 
                onChange={(e) => handleBinaryChange(e.target.value)} 
                className="input-field font-mono h-24 resize-none" 
                placeholder="e.g. 101010"
              />
            </div>
            <div>
              <label className="input-label">Decimal (Base 10)</label>
              <input 
                type="number" 
                value={decimal} 
                onChange={(e) => handleDecChange(e.target.value)} 
                className="input-field font-mono" 
                placeholder="e.g. 42"
              />
            </div>
            <div>
              <label className="input-label">Hexadecimal (Base 16)</label>
              <input 
                type="text" 
                value={hex} 
                readOnly
                className="input-field font-mono bg-slate-50 uppercase" 
                placeholder="Hex output..."
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Binary Powers Table</div>
            <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
              <div className="bg-slate-50 p-1 rounded border border-slate-100">2⁰ = 1</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">2¹ = 2</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">2² = 4</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">2³ = 8</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">2⁴ = 16</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">2⁵ = 32</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">2⁶ = 64</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">2⁷ = 128</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">2⁸ = 256</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">2⁹ = 512</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">2¹⁰ = 1024</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">2¹¹ = 2048</div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Binary Calculator" 
        path="/binary-calculator" 
        description="Convert, add, subtract, multiply, and divide binary numbers. Learn about base-2 logic, bits, and bytes with our comprehensive binary tool in 2026."
      />
    </div>
  );
};
