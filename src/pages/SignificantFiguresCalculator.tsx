import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Hash } from 'lucide-react';

export const SignificantFiguresCalculator: React.FC = () => {
  const [number, setNumber] = useState<string>('123.450');
  const [sigFigs, setSigFigs] = useState<number>(0);

  const countSigFigs = (numStr: string): number => {
    const cleanNum = numStr.trim();
    if (!cleanNum || isNaN(Number(cleanNum))) return 0;
    
    const parts = cleanNum.split('.');
    const integerPart = parts[0].replace(/^-/, '');
    const decimalPart = parts[1] || '';

    if (parts.length > 1) {
      // Decimal present
      const combined = integerPart + decimalPart;
      const firstNonZero = combined.search(/[1-9]/);
      if (firstNonZero === -1) return decimalPart.length; // e.g., 0.000
      return combined.length - firstNonZero;
    } else {
      // No decimal
      const firstNonZero = integerPart.search(/[1-9]/);
      if (firstNonZero === -1) return 0;
      const lastNonZero = integerPart.split('').reverse().join('').search(/[1-9]/);
      return integerPart.length - firstNonZero - lastNonZero;
    }
  };

  useEffect(() => {
    setSigFigs(countSigFigs(number));
  }, [number]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Significant Figures Calculator | Count Sig Figs</title>
        <meta name="description" content="Free online significant figures calculator. Count the number of significant figures in a number for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Hash className="w-8 h-8 text-[#0066cc]" />
          Significant Figures Calculator
        </h1>
        <p className="text-slate-600">Count the number of significant figures in a number.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="input-label">Measurement or Quantity to Analyze</label>
                <input 
                  type="text" 
                  value={number} 
                  onChange={(e) => setNumber(e.target.value)} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              What are Significant Figures?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Significant figures are the digits in a number that carry meaningful information about its precision.
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Non-zero Digits:</strong> All non-zero digits are significant.</li>
              <li><strong>Zeros Between Non-zero Digits:</strong> All zeros between non-zero digits are significant.</li>
              <li><strong>Leading Zeros:</strong> Leading zeros are NOT significant.</li>
              <li><strong>Trailing Zeros (with decimal):</strong> Trailing zeros in a number with a decimal point are significant.</li>
              <li><strong>Trailing Zeros (without decimal):</strong> Trailing zeros in a number without a decimal point are NOT significant.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Sig Fig Count
            </h2>
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="text-8xl font-bold mb-4 text-[#0066cc]">{sigFigs}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Significant Figures</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Math Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When performing calculations, your final result should have the same number of significant figures as the least precise measurement.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Significant Figures in 2026</h2>
        <p>
          Our <strong>significant figures calculator</strong> is a simple and efficient tool for counting the number of significant figures in a number. By entering the number, we can reveal its precision and its associated sig fig count.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Importance of Sig Figs</h3>
        <p>
          Significant figures are essential for accurately representing the precision of measurements in science and engineering. They're also used in everything from laboratory research to industrial manufacturing.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Components of Sig Figs</h3>
        <ul>
          <li><strong>Precision:</strong> The level of detail in a measurement.</li>
          <li><strong>Uncertainty:</strong> The range of possible values for a measurement.</li>
          <li><strong>Rounding:</strong> The process of adjusting a number to a specific number of significant figures.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">How many sig figs are in 0.00123?</p>
            <p>There are 3 significant figures (1, 2, 3). The leading zeros are not significant.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How many sig figs are in 123.450?</p>
            <p>There are 6 significant figures (1, 2, 3, 4, 5, 0). The trailing zero is significant because of the decimal point.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
