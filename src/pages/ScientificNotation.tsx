import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const ScientificNotation: React.FC = () => {
  const [number, setNumber] = useState<string>('123456');
  const [scientific, setScientific] = useState<string>('');
  const [standard, setStandard] = useState<string>('');

  useEffect(() => {
    const num = parseFloat(number);
    if (!isNaN(num)) {
      setScientific(num.toExponential());
      setStandard(num.toLocaleString(undefined, { maximumFractionDigits: 10 }));
    } else {
      setScientific('Invalid Input');
      setStandard('Invalid Input');
    }
  }, [number]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Scientific Notation Calculator [100% Private]</title>
        <meta name="description" content="Free online scientific notation calculator for 2026. Easily convert between scientific notation and standard form with instant results." />
      </Helmet>

      <h1>Scientific Notation Calculator</h1>
      <p>Quickly convert between scientific notation and standard form for any number.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Number</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Number</label>
              <input 
                type="text" 
                value={number} 
                onChange={(e) => setNumber(e.target.value)} 
                className="input-field w-full" 
                placeholder="e.g., 123456 or 1.23e5"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Scientific Notation:</span>
                  <span className="font-bold text-[#0066cc]">{scientific}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold">Standard Form:</span>
                  <span className="font-bold text-[#0066cc]">{standard}</span>
                </div>
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setNumber('123456');
            }}
            onCopy={() => {
              const text = `Scientific Notation Results:\nNumber: ${number}\nScientific: ${scientific}\nStandard: ${standard}\nCalculated at simplycalculator.app`;
              navigator.clipboard.writeText(text);
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Scientific Notation Calculator"
        path="/scientific-notation"
        description="Convert standard numbers to scientific notation and vice versa with precision."
      />
    </div>
  );
};
