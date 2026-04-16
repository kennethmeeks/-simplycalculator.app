import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, Info, BookOpen, HelpCircle } from 'lucide-react';


export const ZScoreCalculator: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [mean, setMean] = useState<string>('');
  const [stdDev, setStdDev] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const x = parseFloat(value);
    const mu = parseFloat(mean);
    const sigma = parseFloat(stdDev);

    if (isNaN(x) || isNaN(mu) || isNaN(sigma) || sigma === 0) return;

    const z = (x - mu) / sigma;
    setResult(z);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Z-score Calculator | Standard Score Solver</title>
        <meta name="description" content="Free online Z-score calculator. Calculate the standard score (Z-score) for a given value, mean, and standard deviation with step-by-step results." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">math</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">z-score calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Z-score Calculator</h1>
        <p className="text-slate-600 mt-2">Calculate the standard score to see how many standard deviations a value is from the mean.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Value (x)</label>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 85"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mean (μ)</label>
                  <input
                    type="number"
                    value={mean}
                    onChange={(e) => setMean(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 75"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Standard Deviation (σ)</label>
                  <input
                    type="number"
                    value={stdDev}
                    onChange={(e) => setStdDev(e.target.value)}
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

              <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Z-score Result</h2>
                {result !== null ? (
                  <div className="space-y-2">
                    <p className="text-5xl font-bold text-[#0066cc]">{result.toLocaleString(undefined, { maximumFractionDigits: 4 })}</p>
                    <p className="text-sm text-slate-500">Standard deviations from mean</p>
                  </div>
                ) : (
                  <div className="text-slate-400">
                    <Calculator className="w-12 h-12 mb-2 opacity-20 mx-auto" />
                    <p>Enter values to calculate the Z-score</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              Understanding Z-score
            </h2>
            <p>
              A Z-score (also called a standard score) is a statistical measurement that describes a value's relationship to the mean of a group of values. It is measured in terms of standard deviations from the mean.
            </p>

            <h3>The Z-score Formula</h3>
            <div className="bg-slate-100 p-4 rounded-lg font-mono text-center mb-4">
              z = (x - μ) / σ
            </div>
            <p>Where:</p>
            <ul>
              <li><strong>x:</strong> The individual value</li>
              <li><strong>μ:</strong> The population mean</li>
              <li><strong>σ:</strong> The population standard deviation</li>
            </ul>

            <h2 className="flex items-center gap-2 mt-8">
              <HelpCircle className="w-6 h-6 text-[#0066cc]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What does a Z-score of 0 mean?</h4>
                <p className="text-slate-600 text-sm">A Z-score of 0 means the value is exactly equal to the mean.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What is a negative Z-score?</h4>
                <p className="text-slate-600 text-sm">A negative Z-score means the value is below the mean.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">Why are Z-scores useful?</h4>
                <p className="text-slate-600 text-sm">Z-scores allow you to compare values from different datasets that have different means and standard deviations.</p>
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
                A Z-score of 1.0 means the value is 1 standard deviation above the mean.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                In a normal distribution, about 68% of values have a Z-score between -1 and 1.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                Z-scores above 3 or below -3 are considered outliers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
