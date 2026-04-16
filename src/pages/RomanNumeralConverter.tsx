import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


const romanMap: [string, number][] = [
  ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
  ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
  ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
];

export const RomanNumeralConverter: React.FC = () => {
  const [number, setNumber] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const toRoman = (num: number) => {
    let result = '';
    for (const [roman, value] of romanMap) {
      while (num >= value) {
        result += roman;
        num -= value;
      }
    }
    return result;
  };

  const fromRoman = (roman: string) => {
    let result = 0;
    let i = 0;
    for (const [r, v] of romanMap) {
      while (roman.startsWith(r, i)) {
        result += v;
        i += r.length;
      }
    }
    return result;
  };

  const handleConvert = () => {
    if (!isNaN(Number(number))) {
      setResult(toRoman(Number(number)));
    } else {
      setResult(fromRoman(number.toUpperCase()).toString());
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Roman Numeral Converter | Convert Arabic to Roman Numerals 2026</title>
        <meta name="description" content="Free online roman numeral converter for 2026. Quickly convert between Arabic and Roman numerals with instant results." />
      </Helmet>

      <h1>Roman Numeral Converter</h1>
      <p>Quickly convert between Arabic and Roman numerals for any purpose.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Converter Settings</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Number (Arabic or Roman)</label>
              <input 
                type="text" 
                value={number} 
                onChange={(e) => setNumber(e.target.value)} 
                className="input-field w-full" 
                placeholder="Enter number here..."
              />
            </div>
            <button 
              onClick={handleConvert}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Convert Number
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
                    <div className="text-sm text-slate-500">Converted Number</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      {number} is {result}.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter a value to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Roman Numerals</h2>
        <p>
          Roman numerals are a way of representing numbers using letters from the Latin alphabet. They were used in ancient Rome and are still used today for decorative purposes and in some contexts.
        </p>
        <p>
          Our <strong>roman numeral converter 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our converter uses a simple algorithm to convert between Arabic and Roman numerals. It uses a mapping of Roman letters to Arabic values to provide accurate results.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Roman Numeral Converter?</h3>
        <p>
          Roman numeral converters are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>History:</strong> They provide a fun and insightful way to learn about ancient numerical systems.</li>
          <li><strong>Design:</strong> They can be a great tool for designers and artists who want to use Roman numerals in their work.</li>
          <li><strong>Insight:</strong> They offer a unique perspective on your potential for understanding different numerical systems and patterns.</li>
        </ol>
      </div>
    </div>
  );
};
