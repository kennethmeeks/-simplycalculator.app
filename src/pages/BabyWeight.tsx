import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const BabyWeight: React.FC = () => {
  const [fatherWeight, setFatherWeight] = useState<number>(180);
  const [motherWeight, setMotherWeight] = useState<number>(140);
  const [result, setResult] = useState<number | null>(null);

  const calculateBabyWeight = () => {
    setResult((fatherWeight + motherWeight) / 40);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Baby Weight Calculator | Estimate Your Baby's Birth Weight 2026</title>
        <meta name="description" content="Free online baby weight calculator for 2026. Quickly estimate your baby's birth weight based on parents' weights with instant results." />
      </Helmet>

      <h1>Baby Weight Calculator</h1>
      <p>Quickly estimate your baby's birth weight based on parents' weights for family planning and health awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Father's Weight (lbs)</label>
              <input 
                type="number" 
                value={fatherWeight} 
                onChange={(e) => setFatherWeight(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <div className="input-group">
              <label className="input-label">Mother's Weight (lbs)</label>
              <input 
                type="number" 
                value={motherWeight} 
                onChange={(e) => setMotherWeight(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateBabyWeight}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Baby Weight
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
                    <div className="text-sm text-slate-500">Estimated Birth Weight</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(1)} lbs</div>
                    <div className="text-sm text-slate-400 mt-4">
                      Birth weight varies based on genetics, nutrition, and individual factors.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your details to see results!</div>
                )}
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setFatherWeight(180);
              setMotherWeight(140);
              setResult(null);
            }}
            onCopy={() => {
              if (result !== null) {
                const text = `Estimated Baby Weight: ${result.toFixed(1)} lbs\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Baby Weight Calculator" 
        path="/baby-weight" 
        description="Estimate your baby's birth weight using parental growth patterns and health metrics. Learn about healthy weight ranges for newborns in 2026."
      />
    </div>
  );
};
