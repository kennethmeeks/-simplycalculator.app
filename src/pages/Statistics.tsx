import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const StatisticsCalculator: React.FC = () => {
  const [input, setInput] = useState('10, 20, 30, 40, 50');
  const [mean, setMean] = useState(0);
  const [median, setMedian] = useState(0);
  const [mode, setMode] = useState<number[]>([]);
  const [range, setRange] = useState(0);
  const [stdDev, setStdDev] = useState(0);
  const [variance, setVariance] = useState(0);
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    const numbers = input
      .split(/[\s,]+/)
      .map(n => parseFloat(n))
      .filter(n => !isNaN(n));

    if (numbers.length === 0) return;

    const n = numbers.length;
    const s = numbers.reduce((a, b) => a + b, 0);
    const m = s / n;
    const sorted = [...numbers].sort((a, b) => a - b);
    const minVal = sorted[0];
    const maxVal = sorted[n - 1];
    const r = maxVal - minVal;

    // Median
    let med = 0;
    if (n % 2 === 0) {
      med = (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
    } else {
      med = sorted[Math.floor(n / 2)];
    }

    // Mode
    const counts: { [key: number]: number } = {};
    let maxCount = 0;
    numbers.forEach(num => {
      counts[num] = (counts[num] || 0) + 1;
      if (counts[num] > maxCount) maxCount = counts[num];
    });
    const modes = Object.keys(counts)
      .map(Number)
      .filter(num => counts[num] === maxCount && maxCount > 1);

    // Variance & Std Dev
    const sqDiffs = numbers.map(num => Math.pow(num - m, 2));
    const v = sqDiffs.reduce((a, b) => a + b, 0) / n;
    const sd = Math.sqrt(v);

    setMean(Number(m.toFixed(4)));
    setMedian(Number(med.toFixed(4)));
    setMode(modes);
    setRange(Number(r.toFixed(4)));
    setStdDev(Number(sd.toFixed(4)));
    setVariance(Number(v.toFixed(4)));
    setCount(n);
    setSum(Number(s.toFixed(4)));
    setMin(Number(minVal.toFixed(4)));
    setMax(Number(maxVal.toFixed(4)));
  }, [input]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Statistics Calculator | Mean, Median, Mode, Range & Std Dev</title>
        <meta name="description" content="Free online statistics calculator to find the mean, median, mode, range, standard deviation, and variance for a set of numbers." />
      </Helmet>

      <h1>Statistics Calculator</h1>
      <p>Enter a set of numbers separated by commas or spaces to calculate the key statistical measures instantly.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Data Set</div>
          <div className="space-y-4">
            <textarea 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              className="input-field h-32 font-mono text-sm"
              placeholder="e.g., 10, 20, 30, 40, 50"
            />
            <p className="text-xs text-slate-500 italic">
              Tip: You can paste a list of numbers from Excel or a text file.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Statistical Results</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Mean (Average)</div>
                <div className="text-2xl font-bold text-[#0066cc]">{mean}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Median</div>
                <div className="text-2xl font-bold text-[#0066cc]">{median}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Mode</div>
                <div className="text-2xl font-bold text-[#0066cc]">
                  {mode.length > 0 ? mode.join(', ') : 'None'}
                </div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Range</div>
                <div className="text-2xl font-bold text-[#0066cc]">{range}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Std Deviation</div>
                <div className="text-2xl font-bold text-[#0066cc]">{stdDev}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Variance</div>
                <div className="text-2xl font-bold text-[#0066cc]">{variance}</div>
              </div>
            </div>
          </div>

          <div className="calculator-container">
            <div className="section-title">Data Summary</div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-500">Count (n):</span>
                <span className="font-bold">{count}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-500">Sum:</span>
                <span className="font-bold">{sum}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-500">Minimum:</span>
                <span className="font-bold">{min}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-500">Maximum:</span>
                <span className="font-bold">{max}</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Comprehensive Guide to Statistics</h2>
        <p>
          Statistics is the science of collecting, analyzing, and interpreting data. Whether you are a student, a researcher, or a business professional, understanding the core statistical measures is essential for making data-driven decisions. Our <strong>statistics calculator</strong> provides fast and accurate results for all common statistical metrics in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Statistical Measures Explained</h3>
        <p>
          Each measure provides a different perspective on your data set:
        </p>
        
        <h4 className="font-bold text-slate-900">Mean (Arithmetic Average)</h4>
        <p>
          The mean is the sum of all values in a data set divided by the number of values. It represents the "center" of the data but can be heavily influenced by outliers (extremely high or low values).
        </p>

        <h4 className="font-bold text-slate-900">Median (Middle Value)</h4>
        <p>
          The median is the middle value when the data set is ordered from smallest to largest. If there is an even number of values, the median is the average of the two middle values. The median is a more robust measure of "center" than the mean when outliers are present.
        </p>

        <h4 className="font-bold text-slate-900">Mode (Most Frequent Value)</h4>
        <p>
          The mode is the value that appears most frequently in a data set. A data set can have one mode (unimodal), multiple modes (multimodal), or no mode at all if all values appear only once.
        </p>

        <h4 className="font-bold text-slate-900">Range (Spread)</h4>
        <p>
          The range is the difference between the maximum and minimum values in a data set. It provides a simple measure of how "spread out" the data is.
        </p>

        <h4 className="font-bold text-slate-900">Standard Deviation and Variance</h4>
        <p>
          These measures quantify the amount of variation or dispersion in a data set. A low standard deviation indicates that the values tend to be close to the mean, while a high standard deviation indicates that the values are spread out over a wider range. Variance is simply the square of the standard deviation.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Practical Applications of Statistics</h3>
        <p>
          Statistics is used in almost every field of study and industry:
        </p>
        <ul>
          <li><strong>Business and Finance:</strong> Analyzing market trends, calculating investment risk, and monitoring quality control in manufacturing.</li>
          <li><strong>Education:</strong> Evaluating student performance, analyzing test scores, and conducting educational research.</li>
          <li><strong>Healthcare:</strong> Interpreting clinical trial results, tracking disease outbreaks, and managing hospital resources.</li>
          <li><strong>Social Sciences:</strong> Analyzing survey data, studying population trends, and conducting psychological research.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is the difference between "population" and "sample" statistics?</p>
            <p>A population includes every member of a group, while a sample is a subset of that group. Our calculator uses the formula for <strong>population</strong> standard deviation and variance. For sample statistics, the denominator in the variance formula is (n-1) instead of (n).</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Why is the median sometimes better than the mean?</p>
            <p>If you have a data set with extreme outliers (like house prices in a neighborhood where one house is a mansion), the mean will be skewed high. The median provides a more accurate representation of what a "typical" value looks like.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What does a standard deviation of zero mean?</p>
            <p>A standard deviation of zero means that all values in the data set are exactly the same. There is no variation at all.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          For the data set <strong>10, 20, 30</strong>: Mean = (10+20+30)/3 = <strong>20</strong>. Median = <strong>20</strong>. Range = 30-10 = <strong>20</strong>. Our calculator performs these steps instantly for any size data set, ensuring you get the right answer every time.
        </p>
      </div>
    </div>
  );
};
