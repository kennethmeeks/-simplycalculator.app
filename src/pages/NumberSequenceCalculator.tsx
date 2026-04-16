import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, Info, BookOpen, HelpCircle } from 'lucide-react';


export const NumberSequenceCalculator: React.FC = () => {
  const [type, setType] = useState<'arithmetic' | 'geometric'>('arithmetic');
  const [a1, setA1] = useState<string>('');
  const [dOrR, setDOrR] = useState<string>('');
  const [n, setN] = useState<string>('');
  const [result, setResult] = useState<{
    nthTerm: number;
    sum: number;
    sequence: number[];
  } | null>(null);

  const calculate = () => {
    const start = parseFloat(a1);
    const diffOrRatio = parseFloat(dOrR);
    const count = parseInt(n);

    if (isNaN(start) || isNaN(diffOrRatio) || isNaN(count) || count <= 0) return;

    let nthTerm = 0;
    let sum = 0;
    const sequence: number[] = [];

    if (type === 'arithmetic') {
      nthTerm = start + (count - 1) * diffOrRatio;
      sum = (count / 2) * (start + nthTerm);
      for (let i = 0; i < Math.min(count, 10); i++) {
        sequence.push(start + i * diffOrRatio);
      }
    } else {
      nthTerm = start * Math.pow(diffOrRatio, count - 1);
      if (diffOrRatio === 1) {
        sum = start * count;
      } else {
        sum = (start * (1 - Math.pow(diffOrRatio, count))) / (1 - diffOrRatio);
      }
      for (let i = 0; i < Math.min(count, 10); i++) {
        sequence.push(start * Math.pow(diffOrRatio, i));
      }
    }

    setResult({ nthTerm, sum, sequence });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Number Sequence Calculator | Arithmetic & Geometric Sequences</title>
        <meta name="description" content="Free online number sequence calculator. Calculate the nth term and sum of arithmetic and geometric sequences with step-by-step results." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">math</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">number sequence calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Number Sequence Calculator</h1>
        <p className="text-slate-600 mt-2">Calculate the nth term and sum of arithmetic or geometric sequences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Sequence Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as 'arithmetic' | 'geometric')}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  >
                    <option value="arithmetic">Arithmetic</option>
                    <option value="geometric">Geometric</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Term (a₁)</label>
                  <input
                    type="number"
                    value={a1}
                    onChange={(e) => setA1(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    {type === 'arithmetic' ? 'Common Difference (d)' : 'Common Ratio (r)'}
                  </label>
                  <input
                    type="number"
                    value={dOrR}
                    onChange={(e) => setDOrR(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder={type === 'arithmetic' ? 'e.g., 3' : 'e.g., 2'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Number of Terms (n)</label>
                  <input
                    type="number"
                    value={n}
                    onChange={(e) => setN(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 10"
                  />
                </div>
                <button
                  onClick={calculate}
                  className="w-full bg-[#0066cc] text-white font-semibold py-3 rounded-xl hover:bg-[#0052a3] transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate
                </button>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Results</h2>
                {result ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-500">nth Term (aₙ)</p>
                      <p className="text-2xl font-bold text-[#0066cc]">{result.nthTerm.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Sum of n Terms (Sₙ)</p>
                      <p className="text-2xl font-bold text-slate-900">{result.sum.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">First {result.sequence.length} Terms</p>
                      <p className="text-slate-700 font-mono mt-1">
                        {result.sequence.join(', ')}{parseInt(n) > 10 ? '...' : ''}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center">
                    <Calculator className="w-12 h-12 mb-2 opacity-20" />
                    <p>Enter values to see the sequence details</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              Understanding Number Sequences
            </h2>
            <p>
              A number sequence is a list of numbers that follow a specific pattern. The two most common types of sequences are arithmetic and geometric.
            </p>

            <h3>Arithmetic Sequence</h3>
            <p>
              In an arithmetic sequence, the difference between any two consecutive terms is constant. This difference is called the <strong>common difference (d)</strong>.
            </p>
            <ul>
              <li><strong>nth Term Formula:</strong> aₙ = a₁ + (n - 1)d</li>
              <li><strong>Sum Formula:</strong> Sₙ = (n/2)(a₁ + aₙ)</li>
            </ul>

            <h3>Geometric Sequence</h3>
            <p>
              In a geometric sequence, each term is found by multiplying the previous term by a constant called the <strong>common ratio (r)</strong>.
            </p>
            <ul>
              <li><strong>nth Term Formula:</strong> aₙ = a₁ * rⁿ⁻¹</li>
              <li><strong>Sum Formula:</strong> Sₙ = a₁(1 - rⁿ) / (1 - r)</li>
            </ul>

            <h2 className="flex items-center gap-2 mt-8">
              <HelpCircle className="w-6 h-6 text-[#0066cc]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What is the difference between a sequence and a series?</h4>
                <p className="text-slate-600 text-sm">A sequence is a list of numbers, while a series is the sum of the terms in a sequence.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">Can the common difference be negative?</h4>
                <p className="text-slate-600 text-sm">Yes, in an arithmetic sequence, a negative common difference means the terms are decreasing.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What happens if the common ratio is 1?</h4>
                <p className="text-slate-600 text-sm">If r = 1 in a geometric sequence, all terms are identical, and the sum is simply a₁ * n.</p>
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
                Use arithmetic for linear growth (e.g., saving $10 every week).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                Use geometric for exponential growth (e.g., compound interest).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                Double-check your common ratio if the numbers get very large quickly.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
