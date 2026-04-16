import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const GFRCalculator: React.FC = () => {
  const [creatinine, setCreatinine] = useState<number>(1.0);
  const [age, setAge] = useState<number>(30);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [race, setRace] = useState<'black' | 'other'>('other');
  const [gfr, setGfr] = useState<number>(0);

  useEffect(() => {
    // MDRD Equation
    let calculatedGfr = 175 * Math.pow(creatinine, -1.154) * Math.pow(age, -0.203);
    if (gender === 'female') calculatedGfr *= 0.742;
    if (race === 'black') calculatedGfr *= 1.212;
    setGfr(calculatedGfr);
  }, [creatinine, age, gender, race]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>GFR Calculator | Kidney Function Test 2026</title>
        <meta name="description" content="Calculate your Glomerular Filtration Rate (GFR) based on your serum creatinine level, age, gender, and race. Monitor your kidney health and function." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">GFR Calculator</h1>
        <p className="text-slate-600">Calculate your estimated Glomerular Filtration Rate (eGFR) to assess kidney function.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Your Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Serum Creatinine (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={creatinine}
                onChange={(e) => setCreatinine(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Age (Years)</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Race</label>
              <select
                value={race}
                onChange={(e) => setRace(e.target.value as 'black' | 'other')}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              >
                <option value="other">Other</option>
                <option value="black">Black</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Your Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated GFR (eGFR)</p>
              <p className="text-4xl font-bold text-[#0066cc]">{gfr.toFixed(1)} mL/min/1.73m²</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This is an estimate of kidney function. Always consult with your healthcare provider for a professional diagnosis.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>Understanding GFR and Kidney Health</h2>
        <p>
          The Glomerular Filtration Rate (GFR) is a measure of how well your kidneys are filtering waste from your blood. It's considered the best overall index of kidney function.
        </p>
        <h3>What Your GFR Means</h3>
        <p>
          A GFR of 90 or higher is generally considered to be in the normal range for most adults. A GFR below 60 for three months or more may indicate chronic kidney disease (CKD).
        </p>
        <h3>Factors That Influence Your GFR</h3>
        <p>
          Many factors can influence your GFR, including your age, gender, race, and serum creatinine level. It's important to monitor your GFR over time and to talk to your doctor if you have any concerns about your kidney health.
        </p>
        <h3>Tips for Maintaining Kidney Health</h3>
        <ul>
          <li>Manage your blood pressure and blood sugar levels.</li>
          <li>Eat a balanced diet low in salt and processed foods.</li>
          <li>Stay hydrated by drinking plenty of water.</li>
          <li>Avoid smoking and limit your alcohol intake.</li>
          <li>Get regular checkups and monitor your kidney function.</li>
        </ul>
      </div>
    </div>
  );
};
