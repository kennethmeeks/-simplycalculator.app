import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Binary, Hash, Info } from 'lucide-react';

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

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Language of Machines: A Binary Guide</h2>
        <p>
          Binary is a base-2 numbering system that uses only two symbols: 0 and 1. It is the fundamental language of all modern digital computers, representing the "on" and "off" states of transistors. Our <strong>binary calculator</strong> helps you bridge the gap between human and machine language in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How Binary Works</h3>
        <p>
          In our standard decimal system, each position represents a power of 10. In binary, each position represents a power of 2.
        </p>
        <p>Example: <strong>1011</strong> in binary</p>
        <ul>
          <li>1 * 2⁰ = 1</li>
          <li>1 * 2¹ = 2</li>
          <li>0 * 2² = 0</li>
          <li>1 * 2³ = 8</li>
          <li>Total = 8 + 0 + 2 + 1 = <strong>11</strong> in decimal</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Bits and Bytes</h3>
        <ul>
          <li><strong>Bit:</strong> A single binary digit (0 or 1). The smallest unit of data.</li>
          <li><strong>Nibble:</strong> A group of 4 bits.</li>
          <li><strong>Byte:</strong> A group of 8 bits. A byte can represent 256 unique values (0-255).</li>
          <li><strong>Kilobyte (KB):</strong> 1,024 bytes (2¹⁰).</li>
          <li><strong>Megabyte (MB):</strong> 1,024 kilobytes (2²⁰).</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Applications of Binary</h3>
        <ul>
          <li><strong>Data Storage:</strong> All files (images, videos, text) are stored as binary data.</li>
          <li><strong>Networking:</strong> IP addresses and data packets are processed in binary.</li>
          <li><strong>Logic Gates:</strong> Computers use binary to perform logical operations (AND, OR, NOT).</li>
          <li><strong>Cryptography:</strong> Encryption algorithms rely on complex binary manipulations.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Why do computers use binary instead of decimal?</p>
            <p>Binary is much easier to implement in hardware. A transistor can be either "on" (1) or "off" (0). Representing ten different states reliably would be much more complex and prone to errors.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is "Two's Complement"?</p>
            <p>Two's complement is a mathematical operation on binary numbers used to represent signed (positive and negative) integers in computing.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I convert binary to hex?</p>
            <p>Group the binary digits into sets of four (starting from the right) and convert each set into its corresponding hex digit. For example, 1010 1111 becomes AF.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
