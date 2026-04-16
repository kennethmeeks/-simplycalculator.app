import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, Info, BookOpen, HelpCircle } from 'lucide-react';


export const ConfidenceIntervalCalculator: React.FC = () => {
  const [sampleMean, setSampleMean] = useState<string>('');
  const [sampleSize, setSampleSize] = useState<string>('');
  const [stdDev, setStdDev] = useState<string>('');
  const [confidenceLevel, setConfidenceLevel] = useState<string>('95');
  const [result, setResult] = useState<{
    lower: number;
    upper: number;
    marginOfError: number;
  } | null>(null);

  const calculate = () => {
    const xBar = parseFloat(sampleMean);
    const n = parseInt(sampleSize);
    const s = parseFloat(stdDev);
    const cl = parseFloat(confidenceLevel);

    if (isNaN(xBar) || isNaN(n) || isNaN(s) || n <= 0 || s < 0) return;

    // Z-score for common confidence levels
    const zScores: { [key: string]: number } = {
      '80': 1.282,
      '85': 1.440,
      '90': 1.645,
      '95': 1.960,
      '99': 2.576,
    };

    const z = zScores[confidenceLevel] || 1.96;
    const marginOfError = z * (s / Math.sqrt(n));
    
    setResult({
      lower: xBar - marginOfError,
      upper: xBar + marginOfError,
      marginOfError
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Confidence Interval Calculator | Statistical Range Solver</title>
        <meta name="description" content="Free online confidence interval calculator. Calculate the confidence interval for a sample mean with step-by-step results." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">math</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">confidence interval calculator</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Confidence Interval Calculator</h1>
        <p className="text-slate-600 mt-2">Calculate the range of values that is likely to contain the true population mean.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Sample Mean (x̄)</label>
                  <input
                    type="number"
                    value={sampleMean}
                    onChange={(e) => setSampleMean(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Sample Size (n)</label>
                  <input
                    type="number"
                    value={sampleSize}
                    onChange={(e) => setSampleSize(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Standard Deviation (s)</label>
                  <input
                    type="number"
                    value={stdDev}
                    onChange={(e) => setStdDev(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
                    placeholder="e.g., 10"
                  />
                </div>
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
                <button
                  onClick={calculate}
                  className="w-full bg-[#0066cc] text-white font-semibold py-3 rounded-xl hover:bg-[#0052a3] transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate
                </button>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Confidence Interval</h2>
                {result ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-500">Interval Range</p>
                      <p className="text-2xl font-bold text-[#0066cc]">
                        {result.lower.toLocaleString(undefined, { maximumFractionDigits: 4 })} to {result.upper.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Margin of Error</p>
                      <p className="text-xl font-bold text-slate-900">±{result.marginOfError.toLocaleString(undefined, { maximumFractionDigits: 4 })}</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-slate-400">
                    <Calculator className="w-12 h-12 mb-2 opacity-20 mx-auto" />
                    <p>Enter sample data to calculate the confidence interval</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <h2 className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              Understanding Confidence Interval
            </h2>
            <p>
              A confidence interval is a range of values that is likely to contain the true population parameter with a certain level of confidence. For example, a 95% confidence interval means that if you were to repeat the study many times, 95% of the calculated intervals would contain the true population mean.
            </p>

            <h3>The Confidence Interval Formula</h3>
            <div className="bg-slate-100 p-4 rounded-lg font-mono text-center mb-4">
              CI = x̄ ± Z * (s / √n)
            </div>
            <p>Where:</p>
            <ul>
              <li><strong>x̄:</strong> The sample mean</li>
              <li><strong>Z:</strong> The Z-score for the chosen confidence level</li>
              <li><strong>s:</strong> The sample standard deviation</li>
              <li><strong>n:</strong> The sample size</li>
            </ul>

            <h2 className="flex items-center gap-2 mt-8">
              <HelpCircle className="w-6 h-6 text-[#0066cc]" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What is a 95% confidence interval?</h4>
                <p className="text-slate-600 text-sm">It means we are 95% confident that the true population mean falls within the calculated range.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">How does sample size affect the interval?</h4>
                <p className="text-slate-600 text-sm">A larger sample size reduces the margin of error, resulting in a narrower (more precise) confidence interval.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-semibold text-slate-900">What is the margin of error?</h4>
                <p className="text-slate-600 text-sm">The margin of error is the range of values above and below the sample mean in a confidence interval.</p>
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
                Higher confidence levels (e.g., 99%) result in wider intervals.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                Use a larger sample size if you need a more precise estimate.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] mt-1.5"></span>
                The confidence interval is centered around the sample mean.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
