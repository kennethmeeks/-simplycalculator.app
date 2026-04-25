import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const PostpartumRecovery: React.FC = () => {
  const [deliveryDate, setDeliveryDate] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const calculateRecovery = () => {
    const date = new Date(deliveryDate);
    if (isNaN(date.getTime())) return;
    const recoveryDate = new Date(date.getTime() + 6 * 7 * 24 * 60 * 60 * 1000);
    setResult(recoveryDate.toLocaleDateString());
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Postpartum Recovery Calculator | Estimate Your Recovery Timeline 2026</title>
        <meta name="description" content="Free online postpartum recovery calculator for 2026. Quickly estimate your postpartum recovery timeline with instant results." />
      </Helmet>

      <h1>Postpartum Recovery Calculator</h1>
      <p>Quickly estimate your postpartum recovery timeline for health and wellness awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Delivery Date</label>
              <input 
                type="date" 
                value={deliveryDate} 
                onChange={(e) => setDeliveryDate(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateRecovery}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Estimate Recovery Timeline
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
                    <div className="text-sm text-slate-500">Estimated Recovery Date (6 Weeks)</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      This is a general estimate for the initial recovery period.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your delivery date to see results!</div>
                )}
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setDeliveryDate('');
              setResult(null);
            }}
            onCopy={() => {
              if (result) {
                navigator.clipboard.writeText(`Estimated Postpartum Recovery Date: ${result}\nCalculated at simplycalculator.app`);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Postpartum Recovery Calculator"
        path="/postpartum-recovery"
        description="Estimate your postpartum recovery timeline and physical healing milestones."
      />
    </div>
  );
};
