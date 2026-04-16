import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


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
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Postpartum Recovery</h2>
        <p>
          Postpartum recovery is a process of healing and adjustment after childbirth. It is a key part of the postpartum period and is essential for health and wellness.
        </p>
        <p>
          Our <strong>postpartum recovery calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to estimate your postpartum recovery timeline based on your delivery date. It assumes that the initial recovery period lasts about 6 weeks.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Postpartum Recovery Calculator?</h3>
        <p>
          Postpartum recovery calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Health:</strong> They provide a fun and insightful way to estimate your recovery timeline and stay healthy.</li>
          <li><strong>Adjustment:</strong> They can be a great tool for understanding your body and adjusting to life after childbirth.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
