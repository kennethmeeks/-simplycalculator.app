import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, Info, BookOpen, HelpCircle } from 'lucide-react';


export const HalfLifeCalculator: React.FC = () => {
  const [initialAmount, setInitialAmount] = useState<string>('');
  const [remainingAmount, setRemainingAmount] = useState<string>('');
  const [halfLife, setHalfLife] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [solveFor, setSolveFor] = useState<'remaining' | 'initial' | 'halfLife' | 'time'>('remaining');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const N0 = parseFloat(initialAmount);
    const Nt = parseFloat(remainingAmount);
    const t12 = parseFloat(halfLife);
    const t = parseFloat(time);

    let res: number | null = null;

    if (solveFor === 'remaining') {
      if (!isNaN(N0) && !isNaN(t12) && !isNaN(t)) {
        res = N0 * Math.pow(0.5, t / t12);
      }
    } else if (solveFor === 'initial') {
      if (!isNaN(Nt) && !isNaN(t12) && !isNaN(t)) {
        res = Nt / Math.pow(0.5, t / t12);
      }
    } else if (solveFor === 'halfLife') {
      if (!isNaN(N0) && !isNaN(Nt) && !isNaN(t)) {
        res = (t * Math.log(0.5)) / Math.log(Nt / N0);
      }
    } else if (solveFor === 'time') {
      if (!isNaN(N0) && !isNaN(Nt) && !isNaN(t12)) {
        res = (t12 * Math.log(Nt / N0)) / Math.log(0.5);
      }
    }

    setResult(res);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Half-Life Calculator | Exponential Decay Solver</title>
        <meta name="description" content="Free online half-life calculator. Solve for remaining amount, initial amount, half-life, or time using the exponential decay formula." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">math</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">half-life calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Half-Life Calculator</h1>
        <p className="text-slate-600 mt-2">Solve exponential decay problems by calculating any of the four variables.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Solve For</label>
                  <select
                    value={solveFor}
                    onChange={(e) => setSolveFor(e.target.value as any)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  >
                    <option value="remaining">Remaining Amount (Nₜ)</option>
                    <option value="initial">Initial Amount (N₀)</option>
                    <option value="halfLife">Half-Life (t₁/₂)</option>
                    <option value="time">Time (t)</option>
                  </select>
                </div>

                {solveFor !== 'initial' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Initial Amount (N₀)</label>
                    <input
                      type="number"
                      value={initialAmount}
                      onChange={(e) => setInitialAmount(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="e.g., 100"
                    />
                  </div>
                )}

                {solveFor !== 'remaining' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Remaining Amount (Nₜ)</label>
                    <input
                      type="number"
                      value={remainingAmount}
                      onChange={(e) => setRemainingAmount(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="e.g., 25"
                    />
                  </div>
                )}

                {solveFor !== 'halfLife' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Half-Life (t₁/₂)</label>
                    <input
                      type="number"
                      value={halfLife}
                      onChange={(e) => setHalfLife(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="e.g., 5"
                    />
                  </div>
                )}

                {solveFor !== 'time' && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Time (t)</label>
                    <input
                      type="number"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                      placeholder="e.g., 10"
                    />
                  </div>
                )}

                <button
                  onClick={calculate}
                  className="w-full bg-[#0066cc] text-white font-semibold py-3 rounded-xl hover:bg-[#0052a3] transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate
                </button>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Result</h2>
                {result !== null ? (
                  <div className="space-y-2">
                    <p className="text-sm text-slate-500">
                      {solveFor === 'remaining' && 'Remaining Amount (Nₜ)'}
                      {solveFor === 'initial' && 'Initial Amount (N₀)'}
                      {solveFor === 'halfLife' && 'Half-Life (t₁/₂)'}
                      {solveFor === 'time' && 'Time (t)'}
                    </p>
                    <p className="text-4xl font-bold text-[#0066cc]">{result.toLocaleString(undefined, { maximumFractionDigits: 4 })}</p>
                  </div>
                ) : (
                  <div className="text-slate-400">
                    <Calculator className="w-12 h-12 mb-2 opacity-20 mx-auto" />
                    <p>Enter values to calculate the missing variable</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              Understanding Half-Life
            </h2>
            <p>
              Half-life is the time required for a quantity to reduce to half of its initial value. The term is commonly used in nuclear physics to describe how quickly unstable atoms undergo radioactive decay.
            </p>

            <h3>The Half-Life Formula</h3>
            <p>The standard formula for exponential decay using half-life is:</p>
            <div className="bg-slate-100 p-4 rounded-lg font-mono text-center mb-4">
              Nₜ = N₀ * (1/2)^(t / t₁/₂)
            </div>
            <p>Where:</p>
            <ul>
              <li><strong>Nₜ:</strong> Remaining amount after time t</li>
              <li><strong>N₀:</strong> Initial amount</li>
              <li><strong>t:</strong> Time elapsed</li>
              <li><strong>t₁/₂:</strong> Half-life of the substance</li>
            </ul>

            <h2 className="flex items-center gap-2 mt-8">
              <HelpCircle className="w-6 h-6 text-[#0066cc]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What is radioactive decay?</h4>
                <p className="text-slate-600 text-sm">Radioactive decay is the process by which an unstable atomic nucleus loses energy by radiation.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">Can half-life be used for things other than radiation?</h4>
                <p className="text-slate-600 text-sm">Yes, it's used in pharmacology (drug half-life), chemical reactions, and even social media engagement decay.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What is the decay constant?</h4>
                <p className="text-slate-600 text-sm">The decay constant (λ) is related to half-life by the formula: λ = ln(2) / t₁/₂.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#0066cc]" />
              Quick Tips
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                Ensure time (t) and half-life (t₁/₂) are in the same units (e.g., years, hours).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                The units for N₀ and Nₜ must also be consistent (e.g., grams, moles).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                After two half-lives, 25% of the initial amount remains.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
