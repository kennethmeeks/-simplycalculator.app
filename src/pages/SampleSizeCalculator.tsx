import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, Info, BookOpen, HelpCircle } from 'lucide-react';


export const SampleSizeCalculator: React.FC = () => {
  const [confidenceLevel, setConfidenceLevel] = useState<string>('95');
  const [marginOfError, setMarginOfError] = useState<string>('5');
  const [populationSize, setPopulationSize] = useState<string>('');
  const [proportion, setProportion] = useState<string>('50');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const cl = parseFloat(confidenceLevel) / 100;
    const moe = parseFloat(marginOfError) / 100;
    const pop = populationSize ? parseInt(populationSize) : Infinity;
    const p = parseFloat(proportion) / 100;

    if (isNaN(cl) || isNaN(moe) || isNaN(p) || moe <= 0) return;

    // Z-score for common confidence levels
    const zScores: { [key: string]: number } = {
      '80': 1.282,
      '85': 1.440,
      '90': 1.645,
      '95': 1.960,
      '99': 2.576,
    };

    const z = zScores[confidenceLevel] || 1.96; // Default to 95% if not in list
    
    // Sample size formula for infinite population
    const nInfinite = (Math.pow(z, 2) * p * (1 - p)) / Math.pow(moe, 2);

    let n = nInfinite;
    if (pop !== Infinity) {
      // Finite population correction
      n = nInfinite / (1 + (nInfinite - 1) / pop);
    }

    setResult(Math.ceil(n));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Sample Size Calculator | Determine Survey Size</title>
        <meta name="description" content="Free online sample size calculator. Determine the required sample size for your survey or study based on confidence level and margin of error." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">math</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">sample size calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Sample Size Calculator</h1>
        <p className="text-slate-600 mt-2">Determine the minimum number of participants needed for a statistically significant study.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Confidence Level (%)</label>
                  <select
                    value={confidenceLevel}
                    onChange={(e) => setConfidenceLevel(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                  >
                    <option value="80">80%</option>
                    <option value="85">85%</option>
                    <option value="90">90%</option>
                    <option value="95">95%</option>
                    <option value="99">99%</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Margin of Error (%)</label>
                  <input
                    type="number"
                    value={marginOfError}
                    onChange={(e) => setMarginOfError(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Population Size (Optional)</label>
                  <input
                    type="number"
                    value={populationSize}
                    onChange={(e) => setPopulationSize(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 10000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Expected Proportion (%)</label>
                  <input
                    type="number"
                    value={proportion}
                    onChange={(e) => setProportion(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 50"
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
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Required Sample Size</h2>
                {result !== null ? (
                  <div className="space-y-2">
                    <p className="text-5xl font-bold text-[#0066cc]">{result.toLocaleString()}</p>
                    <p className="text-sm text-slate-500">Participants needed</p>
                  </div>
                ) : (
                  <div className="text-slate-400">
                    <Calculator className="w-12 h-12 mb-2 opacity-20 mx-auto" />
                    <p>Enter survey parameters to see the required sample size</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              Understanding Sample Size
            </h2>
            <p>
              Sample size is the number of observations or participants included in a study. A larger sample size generally leads to more accurate results and a smaller margin of error.
            </p>

            <h3>The Sample Size Formula</h3>
            <p>For an infinite population, the formula is:</p>
            <div className="bg-slate-100 p-4 rounded-lg font-mono text-center mb-4">
              n = (Z² * p * (1 - p)) / E²
            </div>
            <p>Where:</p>
            <ul>
              <li><strong>Z:</strong> Z-score related to the confidence level</li>
              <li><strong>p:</strong> Expected proportion (usually 0.5 for maximum sample size)</li>
              <li><strong>E:</strong> Margin of error (in decimal form)</li>
            </ul>

            <h2 className="flex items-center gap-2 mt-8">
              <HelpCircle className="w-6 h-6 text-[#0066cc]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What is the margin of error?</h4>
                <p className="text-slate-600 text-sm">The margin of error is the amount of random sampling error in a survey's results. A 5% margin of error means the true value is likely within +/- 5% of the survey result.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">Why use 50% for the expected proportion?</h4>
                <p className="text-slate-600 text-sm">A proportion of 50% (0.5) provides the most conservative (largest) sample size estimate, ensuring your study is sufficiently powered regardless of the actual result.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What is a confidence level?</h4>
                <p className="text-slate-600 text-sm">The confidence level is the probability that the true population parameter lies within the confidence interval. 95% is the most common standard.</p>
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
                A 95% confidence level with a 5% margin of error is the industry standard.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                If you don't know the population size, leave it blank (assumes infinite).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                Increasing the confidence level will increase the required sample size.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
