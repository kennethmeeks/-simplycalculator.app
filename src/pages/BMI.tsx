import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { parseInput } from '@/src/lib/calculatorUtils';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const BMICalculator: React.FC = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const resultsRef = useRef<HTMLDivElement>(null);
  
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

  const handleDownloadPDF = async () => {
    if (!resultsRef.current) return;
    try {
      const element = resultsRef.current;
      const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.setFillColor(0, 102, 204);
      pdf.rect(0, 0, pdfWidth, 40, 'F');
      
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      pdf.text('SIMPLYCALCULATOR.APP', 15, 25);
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text('PROFESSIONAL HEALTH REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('BODY MASS INDEX (BMI) ANALYSIS', 15, 55);
      
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(150, 150, 150);
      pdf.text(`TIMESTAMP: ${new Date().toLocaleString()}`, 15, 62);
      
      pdf.setDrawColor(230, 230, 230);
      pdf.line(15, 75, pdfWidth - 15, 75);
      
      const imgProps = pdf.getImageProperties(imgData);
      const displayWidth = pdfWidth - 30;
      const displayHeight = (imgProps.height * displayWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 15, 85, displayWidth, displayHeight);
      
      const footerY = Math.max(85 + displayHeight + 20, pdfHeight - 30);
      pdf.setFontSize(8);
      pdf.setTextColor(180, 180, 180);
      pdf.text('DISCLAIMER: This report is an estimate based on mathematical models and verified formulas.', 15, footerY);
      pdf.text('simplycalculator.app assumes no liability for critical financial or medical decisions.', 15, footerY + 4);
      
      pdf.setTextColor(0, 102, 204);
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.text('WWW.SIMPLYCALCULATOR.APP', pdfWidth / 2, pdfHeight - 10, { align: 'center' });
      
      pdf.save('BMI_Calculator_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Helmet>
        <title>BMI Calculator for Adults with History 2026 | simplycalculator.app</title>
        <meta name="description" content="Calculate your Body Mass Index with our free BMI calculator for adults with history. Track your weight trends over time and understand your health category in 2026." />
      </Helmet>

      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase">BMI Calculator</h1>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm">Standard Body Mass Index measurement for adults.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Input Panel */}
        <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col h-full">
          <div className="mb-8">
            <h2 className="text-[#0066cc] font-black text-2xl">Your Details</h2>
          </div>
          
          <div className="space-y-6 flex-1">
            {/* Unit Toggle */}
            <div className="flex gap-4 p-1 bg-slate-50 rounded-lg w-fit">
              <button
                onClick={() => setUnitSystem('metric')}
                className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                  unitSystem === 'metric' ? 'bg-[#0066cc] text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Metric Units
              </button>
              <button
                onClick={() => setUnitSystem('imperial')}
                className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                  unitSystem === 'imperial' ? 'bg-[#0066cc] text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                US Units
              </button>
            </div>

            <div className="space-y-4">
              {unitSystem === 'metric' ? (
                <>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-600">Weight (kg)</label>
                    <input 
                      type="number" 
                      value={weightKg} 
                      onChange={(e) => setWeightKg(e.target.value)}
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] outline-none font-medium text-slate-700 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-600">Height (cm)</label>
                    <input 
                      type="number" 
                      value={heightCm} 
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] outline-none font-medium text-slate-700 transition-all"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-600">Weight (lbs)</label>
                    <input 
                      type="number" 
                      value={weightLbs} 
                      onChange={(e) => setWeightLbs(e.target.value)}
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] outline-none font-medium text-slate-700 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-600">Height (ft)</label>
                      <input 
                        type="number" 
                        value={heightFt} 
                        onChange={(e) => setHeightFt(e.target.value)}
                        className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] outline-none font-medium text-slate-700 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-600">Height (in)</label>
                      <input 
                        type="number" 
                        value={heightIn} 
                        onChange={(e) => setHeightIn(e.target.value)}
                        className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] outline-none font-medium text-slate-700 transition-all"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            <button 
              onClick={saveToHistory}
              className="w-full h-14 bg-blue-600 text-white rounded-lg font-bold uppercase tracking-wider hover:bg-blue-700 transition-all shadow-md active:scale-[0.98]"
            >
              Log Entry to History
            </button>
          </div>
        </section>

        {/* Output Panel */}
        <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col h-full relative overflow-hidden" ref={resultsRef}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-blue-600 font-bold text-2xl mb-8 relative z-10">Your Results</h2>
          
          <div className="flex-1 flex flex-col justify-center items-center text-center relative z-10">
            <div className="space-y-4 w-full">
              <div>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-1">Calculated BMI</p>
                <div className="text-blue-600 text-7xl font-bold tracking-tight">{bmi.toFixed(1)}</div>
              </div>
              <p className={`text-xl font-bold uppercase tracking-tight ${getCategoryColor()}`}>{category}</p>
            </div>

            {history.length > 0 && (
              <div className="mt-8 pt-8 border-t border-slate-100 w-full" data-html2canvas-ignore>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">History Trend</h3>
                  <button onClick={clearHistory} className="text-[10px] text-slate-300 hover:text-rose-500 font-bold uppercase">Clear All</button>
                </div>
                <div className="space-y-2 max-h-[120px] overflow-y-auto pr-2 scrollbar-thin">
                  {history.map((entry) => (
                    <div key={entry.id} className="flex justify-between items-center text-xs p-2 bg-white/50 rounded border border-blue-50">
                      <span className="font-bold text-[#0066cc]">{entry.bmi} <span className="font-normal text-slate-400">({entry.weight})</span></span>
                      <span className={`font-black uppercase tracking-tighter ${getCategoryColor(entry.category)}`}>{entry.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <ResultActions 
              onReset={() => {
                setWeightKg(70);
                setHeightCm(175);
              }}
              onDownloadPDF={handleDownloadPDF}
              onCopy={() => {
                const text = `BMI Calculator Results:\nBMI: ${bmi.toFixed(1)}\nCategory: ${category}\nCalculated at simplycalculator.app`;
                navigator.clipboard.writeText(text);
              }}
            />
          </div>

          <div className="mt-8 pt-8 border-t border-blue-100/50 relative z-10">
            <p className="text-slate-400 text-[11px] font-medium leading-relaxed italic">
              Note: This is an estimate. Individual factors like muscle mass and bone density are not considered. Always consult with a healthcare professional for health-related guidance.
            </p>
          </div>
        </section>
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
