import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';


export const TimeCard: React.FC = () => {
  const [hours, setHours] = useState<number[]>([8, 8, 8, 8, 8, 0, 0]);
  const [result, setResult] = useState<number | null>(null);

  const calculateTimeCard = () => {
    setResult(hours.reduce((acc, h) => acc + h, 0));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Time Card Calculator | Calculate Weekly Working Hours 2026</title>
        <meta name="description" content="Free online time card calculator for 2026. Quickly calculate weekly working hours across multiple days with instant results." />
      </Helmet>

      <h1>Time Card Calculator</h1>
      <p>Quickly calculate weekly working hours across multiple days for work tracking and payroll awareness.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Weekly Hours</div>
          <div className="space-y-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={day} className="flex justify-between items-center">
                <label className="input-label">{day}</label>
                <input 
                  type="number" 
                  value={hours[i]} 
                  onChange={(e) => {
                    const newHours = [...hours];
                    newHours[i] = Number(e.target.value);
                    setHours(newHours);
                  }} 
                  className="input-field w-24" 
                />
              </div>
            ))}
            <button 
              onClick={calculateTimeCard}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Calculate Total Weekly Hours
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
                    <div className="text-sm text-slate-500">Total Weekly Hours</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result.toFixed(1)} Hours</div>
                    <div className="text-sm text-slate-400 mt-4">
                      This is your total working time for the week.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your hours to see results!</div>
                )}
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setHours([8, 8, 8, 8, 8, 0, 0]);
              setResult(null);
            }}
            onCopy={() => {
              if (result !== null) {
                const text = `Total Weekly Hours: ${result.toFixed(1)}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Time Card Calculator"
        path="/time-card"
        description="Effortlessly calculate your weekly work hours for payroll and shift tracking."
      />
    </div>
  );
};
