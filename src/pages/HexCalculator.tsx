import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Hash, Binary, Info } from 'lucide-react';

export const HexCalculator: React.FC = () => {
  const [hex, setHex] = useState('FF');
  const [decimal, setDecimal] = useState('255');
  const [binary, setBinary] = useState('11111111');
  
  const handleHexChange = (val: string) => {
    const cleanHex = val.replace(/[^0-9A-Fa-f]/g, '').toUpperCase();
    setHex(cleanHex);
    if (cleanHex) {
      const dec = parseInt(cleanHex, 16);
      setDecimal(dec.toString(10));
      setBinary(dec.toString(2));
    } else {
      setDecimal('');
      setBinary('');
    }
  };

  const handleDecChange = (val: string) => {
    const dec = parseInt(val, 10);
    setDecimal(val);
    if (!isNaN(dec)) {
      setHex(dec.toString(16).toUpperCase());
      setBinary(dec.toString(2));
    } else {
      setHex('');
      setBinary('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Hex Calculator | Hexadecimal to Decimal & Binary Converter</title>
        <meta name="description" content="Free online hex calculator and converter. Convert between hexadecimal, decimal, and binary systems instantly. Essential for developers in 2026." />
      </Helmet>

      <h1>Hex Calculator</h1>
      <p>Convert numbers between hexadecimal (base 16), decimal (base 10), and binary (base 2). Essential for web development, programming, and digital design.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Number Conversion</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Hexadecimal (Base 16)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-mono">0x</span>
                <input 
                  type="text" 
                  value={hex} 
                  onChange={(e) => handleHexChange(e.target.value)} 
                  className="input-field pl-9 font-mono uppercase" 
                  placeholder="e.g. FF"
                />
              </div>
            </div>
            <div>
              <label className="input-label">Decimal (Base 10)</label>
              <input 
                type="number" 
                value={decimal} 
                onChange={(e) => handleDecChange(e.target.value)} 
                className="input-field font-mono" 
                placeholder="e.g. 255"
              />
            </div>
            <div>
              <label className="input-label">Binary (Base 2)</label>
              <textarea 
                value={binary} 
                readOnly
                className="input-field font-mono bg-slate-50 h-24 resize-none" 
                placeholder="Binary output..."
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Quick Reference</div>
            <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
              <div className="bg-slate-50 p-1 rounded border border-slate-100">0: 0000</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">1: 0001</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">2: 0010</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">3: 0011</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">4: 0100</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">5: 0101</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">6: 0110</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">7: 0111</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">8: 1000</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">9: 1001</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">A: 1010</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">B: 1011</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">C: 1100</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">D: 1101</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">E: 1110</div>
              <div className="bg-slate-50 p-1 rounded border border-slate-100">F: 1111</div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Power of 16: A Hexadecimal Guide</h2>
        <p>
          Hexadecimal (often shortened to "hex") is a base-16 numbering system. Unlike our everyday decimal system (base 10), which uses ten digits (0-9), hex uses sixteen distinct symbols: 0-9 and the letters A-F. Our <strong>hex calculator</strong> makes converting between these systems seamless in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use Hexadecimal?</h3>
        <p>
          Hex is widely used in computing because it provides a human-friendly way to represent binary code. One hex digit represents exactly four binary bits (a "nibble"), and two hex digits represent exactly one byte (8 bits).
        </p>
        <ul>
          <li><strong>Color Codes:</strong> Web designers use hex codes (e.g., #FF5733) to define colors in CSS.</li>
          <li><strong>Memory Addresses:</strong> Computer systems use hex to represent locations in RAM.</li>
          <li><strong>MAC Addresses:</strong> Network hardware is identified by unique 48-bit hex strings.</li>
          <li><strong>Debugging:</strong> Programmers use hex dumps to inspect the raw contents of files or memory.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Convert Hex to Decimal</h3>
        <p>
          To convert a hex number to decimal, you multiply each digit by 16 raised to the power of its position (starting from 0 on the right).
        </p>
        <p>Example: <strong>0x2F</strong></p>
        <ul>
          <li>F = 15 * 16⁰ = 15 * 1 = 15</li>
          <li>2 = 2 * 16¹ = 2 * 16 = 32</li>
          <li>Total = 32 + 15 = <strong>47</strong></li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What do the letters A-F represent?</p>
            <p>In hex, A=10, B=11, C=12, D=13, E=14, and F=15.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Why is hex better than binary for humans?</p>
            <p>Binary strings are very long and hard to read (e.g., 10101111). Hex condenses this into a much shorter string (AF), making it easier to remember and communicate.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How many colors can be represented in hex?</p>
            <p>A standard 6-digit hex color code (#RRGGBB) can represent 16,777,216 unique colors (256 * 256 * 256).</p>
          </div>
        </div>
      </div>
    </div>
  );
};
