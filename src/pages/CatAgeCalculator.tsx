import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

import { Calculator, Info, Cat, Heart } from 'lucide-react';

export const CatAgeCalculator: React.FC = () => {
  const [catAge, setCatAge] = useState<number>(3);
  const [humanAge, setHumanAge] = useState<number>(0);

  useEffect(() => {
    let age = 0;
    if (catAge === 1) {
      age = 15;
    } else if (catAge === 2) {
      age = 24;
    } else {
      const baseAge = 24;
      const extraYears = catAge - 2;
      age = baseAge + (extraYears * 4);
    }
    setHumanAge(age);
  }, [catAge]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Cat Age Calculator | Convert Cat Years to Human Years</title>
        <meta name="description" content="Free online cat age calculator. Convert your cat's age to human years based on their actual age for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Cat className="w-8 h-8 text-[#0066cc]" />
          Cat Age Calculator
        </h1>
        <p className="text-slate-600">Find out how old your cat is in human years based on their actual age.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Cat's Age (Years)</label>
                <input 
                  type="number" 
                  value={catAge} 
                  onChange={(e) => setCatAge(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              How Cat Aging Works
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Cats age much faster during their first two years. A one-year-old cat is roughly equivalent to a 15-year-old human, and a two-year-old cat is about 24 years old in human terms.
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>First Year:</strong> Equivalent to about 15 human years.</li>
              <li><strong>Second Year:</strong> Adds about 9 more human years.</li>
              <li><strong>Each Subsequent Year:</strong> Adds about 4 human years.</li>
              <li><strong>Senior Cats:</strong> Generally considered seniors after age 11.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400" />
              Human Age Equivalent
            </h2>
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="text-6xl font-bold mb-2 text-[#0066cc]">{humanAge}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Human Years Old</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Pet Care Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Regular vet checkups are essential for cats, as they are masters at hiding pain or illness. Senior cats should have checkups every 6 months.
            </p>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Cat Age Calculator" 
        path="/cat-age-calculator" 
        description="Convert cat years to human years with precision. Understand developmental stages and dietary needs for every life phase in 2026."
      />
    </div>
  );
};
