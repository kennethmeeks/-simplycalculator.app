import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { parseInput } from '@/src/lib/calculatorUtils';

export const BMICalculator: React.FC = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  
  // Base values in metric
  const [weightKg, setWeightKg] = useState<number | string>(70);
  const [heightCm, setHeightCm] = useState<number | string>(175);
  
  // Imperial display values
  const [weightLbs, setWeightLbs] = useState<number | string>(154.3);
  const [heightFt, setHeightFt] = useState<number | string>(5);
  const [heightIn, setHeightIn] = useState<number | string>(9);

  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState('');
  const [history, setHistory] = useState<{ id: string; date: string; bmi: number; category: string; weight: string }[]>([]);

  // Load history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('bmi_history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to parse BMI history', e);
      }
    }
  }, []);

  // Save history to localStorage
  useEffect(() => {
    localStorage.setItem('bmi_history', JSON.stringify(history));
  }, [history]);

  // Sync metric to imperial
  useEffect(() => {
    if (unitSystem === 'metric') {
      const kg = parseInput(weightKg.toString());
      const cm = parseInput(heightCm.toString());
      setWeightLbs(Number((kg * 2.20462).toFixed(1)));
      const totalInches = cm * 0.393701;
      setHeightFt(Math.floor(totalInches / 12));
      setHeightIn(Math.round(totalInches % 12));
    }
  }, [weightKg, heightCm, unitSystem]);

  // Sync imperial to metric
  useEffect(() => {
    if (unitSystem === 'imperial') {
      const lbs = parseInput(weightLbs.toString());
      const ft = parseInput(heightFt.toString());
      const inch = parseInput(heightIn.toString());
      setWeightKg(Number((lbs / 2.20462).toFixed(1)));
      const totalCm = (ft * 30.48) + (inch * 2.54);
      setHeightCm(Math.round(totalCm));
    }
  }, [weightLbs, heightFt, heightIn, unitSystem]);

  useEffect(() => {
    const kg = parseInput(weightKg.toString());
    const cm = parseInput(heightCm.toString());
    const heightInMeters = cm / 100;
    const calculatedBmi = heightInMeters > 0 ? kg / (heightInMeters * heightInMeters) : 0;
    setBmi(calculatedBmi);

    if (calculatedBmi < 18.5) setCategory('Underweight');
    else if (calculatedBmi < 25) setCategory('Normal weight');
    else if (calculatedBmi < 30) setCategory('Overweight');
    else setCategory('Obesity');
  }, [weightKg, heightCm]);

  const saveToHistory = () => {
    const newEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      bmi: Number(bmi.toFixed(1)),
      category,
      weight: unitSystem === 'metric' ? `${weightKg} kg` : `${weightLbs} lbs`
    };
    setHistory([newEntry, ...history].slice(0, 10)); // Keep last 10 entries
  };

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear your BMI history?')) {
      setHistory([]);
    }
  };

  const getCategoryColor = (cat: string = category) => {
    switch (cat) {
      case 'Underweight': return 'text-blue-600';
      case 'Normal weight': return 'text-emerald-600';
      case 'Overweight': return 'text-amber-600';
      case 'Obesity': return 'text-rose-600';
      default: return 'text-slate-600';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Helmet>
        <title>BMI Calculator for Adults with History 2026 | simplycalculator.app</title>
        <meta name="description" content="Calculate your Body Mass Index with our free BMI calculator for adults with history. Track your weight trends over time and understand your health category in 2026." />
      </Helmet>

      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">BMI Calculator</h1>
        <p className="text-slate-500">Body Mass Index for adults.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <h2 className="section-title">Body Parameters</h2>
            
            {/* Unit Toggle */}
            <div className="flex gap-4 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={unitSystem === 'metric'}
                  onChange={() => setUnitSystem('metric')}
                />
                <span className="text-sm font-bold">Metric Units</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={unitSystem === 'imperial'}
                  onChange={() => setUnitSystem('imperial')}
                />
                <span className="text-sm font-bold">US Units</span>
              </label>
            </div>

            <div className="space-y-4 max-w-md">
              {unitSystem === 'metric' ? (
                <>
                  <div className="input-group">
                    <label className="input-label">Weight (kg)</label>
                    <input 
                      type="number" 
                      value={weightKg} 
                      onChange={(e) => setWeightKg(e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">Height (cm)</label>
                    <input 
                      type="number" 
                      value={heightCm} 
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="input-field"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="input-group">
                    <label className="input-label">Weight (lbs)</label>
                    <input 
                      type="number" 
                      value={weightLbs} 
                      onChange={(e) => setWeightLbs(e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="input-group">
                      <label className="input-label">Height (ft)</label>
                      <input 
                        type="number" 
                        value={heightFt} 
                        onChange={(e) => setHeightFt(e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div className="input-group">
                      <label className="input-label">Height (in)</label>
                      <input 
                        type="number" 
                        value={heightIn} 
                        onChange={(e) => setHeightIn(e.target.value)}
                        className="input-field"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm">
            <h2>BMI Classification Table</h2>
            <table className="w-full border-collapse border border-[#ccc] text-left">
              <thead>
                <tr className="bg-[#f9f9f9]">
                  <th className="border border-[#ccc] p-2">Category</th>
                  <th className="border border-[#ccc] p-2">BMI Range (kg/m²)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#ccc] p-2">Underweight</td>
                  <td className="border border-[#ccc] p-2">&lt; 18.5</td>
                </tr>
                <tr className="bg-[#f9f9f9]">
                  <td className="border border-[#ccc] p-2">Normal weight</td>
                  <td className="border border-[#ccc] p-2">18.5 – 24.9</td>
                </tr>
                <tr>
                  <td className="border border-[#ccc] p-2">Overweight</td>
                  <td className="border border-[#ccc] p-2">25 – 29.9</td>
                </tr>
                <tr className="bg-[#f9f9f9]">
                  <td className="border border-[#ccc] p-2">Obesity</td>
                  <td className="border border-[#ccc] p-2">&gt; 30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="result-box text-center">
            <h3 className="text-[#0066cc] font-bold mb-2 uppercase text-xs tracking-wider">Your BMI</h3>
            <div className="text-5xl font-bold text-[#000] mb-2">{bmi.toFixed(1)}</div>
            <p className={`text-lg font-bold ${getCategoryColor()}`}>{category}</p>
            <button 
              onClick={saveToHistory}
              className="mt-4 w-full py-2 px-4 bg-[#0066cc] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Save to History
            </button>
          </div>

          {history.length > 0 && (
            <div className="calculator-container">
              <div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
                <h3 className="font-bold text-slate-900">History</h3>
                <button 
                  onClick={clearHistory}
                  className="text-xs text-rose-500 hover:underline font-medium"
                >
                  Clear All
                </button>
              </div>
              <div className="space-y-3">
                {history.map((entry) => (
                  <div key={entry.id} className="flex justify-between items-center text-sm border-b border-slate-50 pb-2 last:border-0">
                    <div>
                      <p className="font-bold text-slate-900">{entry.bmi} <span className="text-[10px] font-normal text-slate-400">({entry.weight})</span></p>
                      <p className="text-[10px] text-slate-500">{entry.date}</p>
                    </div>
                    <span className={`text-xs font-bold ${getCategoryColor(entry.category)}`}>
                      {entry.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h3 className="text-2xl font-bold text-slate-900">Understanding the BMI Calculator for Adults with History</h3>
        <p>
          Body Mass Index (BMI) is a simple, widely-used index of weight-for-height that is commonly used to classify underweight, overweight, and obesity in adults. Our <strong>free BMI calculator for adults with history 2026</strong> is designed to not only give you an instant snapshot of your current health status but also to help you track your progress over time. By storing your previous calculations, you can see how your lifestyle changes are impacting your body composition.
        </p>
        
        <h4 className="text-xl font-bold text-slate-900 mt-8">The BMI Formula Explained</h4>
        <p>
          The calculation for BMI is standardized globally. It is defined as the weight in kilograms divided by the square of the height in metres (kg/m²). The formula used by our calculator is:
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-center my-4">
          BMI = weight (kg) / [height (m)]^2
        </div>
        <p>
          For those using US units (pounds and inches), the formula includes a conversion factor:
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-center my-4">
          BMI = 703 × weight (lbs) / [height (in)]^2
        </div>
        <p>
          Our tool handles all these conversions automatically, allowing you to switch between metric and imperial systems seamlessly.
        </p>

        <h4 className="text-xl font-bold text-slate-900 mt-8">Why Track Your BMI History?</h4>
        <p>
          A single BMI reading is just a data point. However, your BMI <em>trend</em> over time provides much more valuable insight into your long-term health. In 2026, health professionals emphasize the importance of sustainable weight management rather than rapid fluctuations. By using our "Save to History" feature, you can maintain a log of your readings, helping you and your healthcare provider identify patterns and set realistic goals. Whether you are on a fitness journey or managing a health condition, having a history of your BMI is a powerful tool for accountability.
        </p>

        <h4 className="text-xl font-bold text-slate-900 mt-6">How to Use the BMI Calculator</h4>
        <p>
          Our <strong>free BMI calculator 2026</strong> is intuitive and mobile-friendly. Simply enter your details to get started:
        </p>
        <ol>
          <li><strong>Select Your Units:</strong> Choose between "Metric Units" (kg/cm) or "US Units" (lbs/ft/in).</li>
          <li><strong>Enter Your Weight:</strong> Provide your current weight. Accuracy is key for a precise BMI reading.</li>
          <li><strong>Enter Your Height:</strong> Provide your height. If using US units, ensure you enter both feet and inches correctly.</li>
          <li><strong>Review Your Results:</strong> Your BMI and classification will appear instantly.</li>
          <li><strong>Save Your Progress:</strong> Click "Save to History" to store your reading in your browser's local storage for future reference.</li>
        </ol>

        <h4 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h4>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Is BMI accurate for everyone?</p>
            <p>While BMI is a useful screening tool, it does have limitations. It does not directly measure body fat percentage or distribution. For example, athletes with high muscle mass may have a "high" BMI despite having low body fat. Conversely, elderly individuals may have a "normal" BMI but low muscle mass. It should be used as one of many indicators of health.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is a healthy BMI range in 2026?</p>
            <p>The World Health Organization (WHO) defines a healthy BMI for most adults as being between 18.5 and 24.9. Scores below 18.5 are considered underweight, while scores above 25 are categorized as overweight, and above 30 as obese.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Where is my history stored?</p>
            <p>Your BMI history is stored locally in your browser's storage. This means your data remains private and is not sent to any external servers. However, if you clear your browser's cache or use a different device, your history will not be visible.</p>
          </div>
        </div>

        <h4 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h4>
        <p>
          If an individual weighs <strong>70 kg</strong> and is <strong>175 cm</strong> tall, their BMI is calculated as 70 / (1.75 * 1.75) = <strong>22.9</strong>. This score falls within the <strong>Normal weight</strong> category, indicating a healthy weight-to-height ratio according to standard 2026 health guidelines.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-3 bg-blue-50 rounded-lg text-center">
            <p className="text-xs font-bold text-blue-600">Underweight</p>
            <p className="text-sm text-slate-600">&lt; 18.5</p>
          </div>
          <div className="p-3 bg-emerald-50 rounded-lg text-center">
            <p className="text-xs font-bold text-emerald-600">Normal</p>
            <p className="text-sm text-slate-600">18.5 – 24.9</p>
          </div>
          <div className="p-3 bg-amber-50 rounded-lg text-center">
            <p className="text-xs font-bold text-amber-600">Overweight</p>
            <p className="text-sm text-slate-600">25 – 29.9</p>
          </div>
          <div className="p-3 bg-rose-50 rounded-lg text-center">
            <p className="text-xs font-bold text-rose-600">Obese</p>
            <p className="text-sm text-slate-600">&gt; 30</p>
          </div>
        </div>
      </div>
    </div>
  );
};
