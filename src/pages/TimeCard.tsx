import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


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
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Time Cards</h2>
        <p>
          Time cards are a way of tracking working hours over a period of time. They are commonly used in work tracking and payroll awareness to coordinate activities and meet deadlines.
        </p>
        <p>
          Our <strong>time card calculator 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our calculator uses a simple algorithm to calculate total weekly working hours across multiple days. It sums all the hours in the week to provide a total value.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Time Card Calculator?</h3>
        <p>
          Time card calculators are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Tracking:</strong> They provide a fun and insightful way to track your weekly work hours and stay organized.</li>
          <li><strong>Payroll:</strong> They can be a great tool for understanding your payroll and meeting deadlines.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
