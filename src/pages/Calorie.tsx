import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const CalorieCalculator: React.FC = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState('male');
  
  // Base values in metric
  const [weightKg, setWeightKg] = useState(70);
  const [heightCm, setHeightCm] = useState(175);
  
  // Imperial display values
  const [weightLbs, setWeightLbs] = useState(154.3);
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(9);

  const [activity, setActivity] = useState(1.2); // Sedentary

  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);

  const resultsRef = useRef<HTMLDivElement>(null);

  // Sync metric to imperial
  useEffect(() => {
    if (unitSystem === 'metric') {
      setWeightLbs(Number((weightKg * 2.20462).toFixed(1)));
      const totalInches = heightCm * 0.393701;
      setHeightFt(Math.floor(totalInches / 12));
      setHeightIn(Math.round(totalInches % 12));
    }
  }, [weightKg, heightCm, unitSystem]);

  // Sync imperial to metric
  useEffect(() => {
    if (unitSystem === 'imperial') {
      setWeightKg(Number((weightLbs / 2.20462).toFixed(1)));
      const totalCm = (heightFt * 30.48) + (heightIn * 2.54);
      setHeightCm(Math.round(totalCm));
    }
  }, [weightLbs, heightFt, heightIn, unitSystem]);

  useEffect(() => {
    // Mifflin-St Jeor Equation
    let calculatedBmr = 0;
    if (gender === 'male') {
      calculatedBmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else {
      calculatedBmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    }
    setBmr(calculatedBmr);
    setTdee(calculatedBmr * activity);
  }, [age, gender, weightKg, heightCm, activity]);

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
      pdf.text('PROFESSIONAL NUTRITION REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('CALORIE & MAINTENANCE ANALYSIS', 15, 55);
      
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
      
      pdf.save('Calorie_Calculator_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Helmet>
        <title>Calorie Calculator | Daily Needs for Weight Loss & Maintenance | simplycalculator.app</title>
        <meta name="description" content="Estimate your daily calorie needs with our free calorie calculator. Find the right balance for weight loss, muscle gain, or maintenance in 2026." />
      </Helmet>

      <header className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase">Calorie Calculator</h1>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm">Estimate your daily energy expenditure based on your physical metrics.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Input Panel */}
        <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col h-full">
          <div className="mb-8">
            <h2 className="text-blue-600 font-bold text-2xl">Energy Parameters</h2>
          </div>
          
          <div className="space-y-6 flex-1">
            {/* Unit Toggle */}
            <div className="flex gap-4 p-1 bg-slate-50 rounded-lg w-fit">
              <button
                onClick={() => setUnitSystem('metric')}
                className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                  unitSystem === 'metric' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Metric Units
              </button>
              <button
                onClick={() => setUnitSystem('imperial')}
                className={`px-4 py-2 rounded-md text-xs font-bold transition-all ${
                  unitSystem === 'imperial' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                US Units
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-600">Age</label>
                  <input 
                    type="number" 
                    value={age} 
                    onChange={(e) => setAge(Number(e.target.value))} 
                    className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-medium text-slate-700 transition-all" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-600">Gender</label>
                  <select 
                    value={gender} 
                    onChange={(e) => setGender(e.target.value)} 
                    className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-medium text-slate-700 transition-all"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              {unitSystem === 'metric' ? (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-600">Weight (kg)</label>
                    <input 
                      type="number" 
                      value={weightKg} 
                      onChange={(e) => setWeightKg(Number(e.target.value))} 
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-medium text-slate-700 transition-all" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-600">Height (cm)</label>
                    <input 
                      type="number" 
                      value={heightCm} 
                      onChange={(e) => setHeightCm(Number(e.target.value))} 
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-medium text-slate-700 transition-all" 
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-600">Weight (lbs)</label>
                    <input 
                      type="number" 
                      value={weightLbs} 
                      onChange={(e) => setWeightLbs(Number(e.target.value))} 
                      className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-medium text-slate-700 transition-all" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-600">Height (ft)</label>
                      <input 
                        type="number" 
                        value={heightFt} 
                        onChange={(e) => setHeightFt(Number(e.target.value))} 
                        className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-medium text-slate-700 transition-all" 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-600">Height (in)</label>
                      <input 
                        type="number" 
                        value={heightIn} 
                        onChange={(e) => setHeightIn(Number(e.target.value))} 
                        className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-medium text-slate-700 transition-all" 
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-600">Activity Level</label>
                <select 
                  value={activity} 
                  onChange={(e) => setActivity(Number(e.target.value))} 
                  className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none font-medium text-slate-700 transition-all"
                >
                  <option value={1.2}>Sedentary (Office job)</option>
                  <option value={1.375}>Lightly Active (1-3 days/week)</option>
                  <option value={1.55}>Moderately Active (3-5 days/week)</option>
                  <option value={1.725}>Very Active (6-7 days/week)</option>
                  <option value={1.9}>Extra Active (Physical job)</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Output Panel */}
        <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col h-full relative overflow-hidden" ref={resultsRef}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <h2 className="text-blue-600 font-bold text-2xl mb-8 relative z-10">Your Results</h2>
          
          <div className="flex-1 flex flex-col justify-center items-center text-center relative z-10">
            <div className="space-y-4 w-full">
              <div>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-1">Daily Maintenance (TDEE)</p>
                <div className="text-blue-600 text-7xl font-bold tracking-tight">{Math.round(tdee).toLocaleString()}</div>
                <div className="text-slate-500 text-sm font-bold mt-2">Calories / Day</div>
              </div>
              <div className="pt-8 border-t border-slate-100 w-full space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-slate-600">Basal Metabolic Rate:</span>
                  <span className="font-bold text-blue-600">{Math.round(bmr).toLocaleString()} kcal/day</span>
                </div>
              </div>
            </div>

            <div className="mt-12 w-full">
              <ResultActions 
                  onReset={() => {
                    setAge(25);
                    setGender('male');
                    setWeightKg(70);
                    setHeightCm(175);
                    setActivity(1.2);
                    setUnitSystem('metric');
                  }}
                  onDownloadPDF={handleDownloadPDF}
                  onCopy={() => {
                    const text = `Calorie Results:\nTDEE: ${Math.round(tdee)} kcal/day\nBMR: ${Math.round(bmr)} kcal/day\nCalculated at simplycalculator.app`;
                    navigator.clipboard.writeText(text);
                  }}
              />
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 relative z-10">
            <p className="text-slate-400 text-[11px] font-medium leading-relaxed italic">
              Note: Estimates are based on the Mifflin-St Jeor Equation. Individual results may vary based on metabolism and body composition.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About Calorie Needs</h2>
        <p>
          Understanding your daily calorie requirements is the first step toward achieving your health and fitness goals, whether you're looking to lose weight, gain muscle, or maintain your current physique. Our <strong>calorie calculator for weight loss and maintenance</strong> uses the scientifically-backed Mifflin-St Jeor Equation to provide a highly accurate estimate of your energy needs for 2026.
        </p>
        <p>
          Calories are simply a measure of energy. Your body requires a certain amount of energy just to perform basic functions like breathing and circulating blood, and additional energy for every movement you make throughout the day. By knowing your Total Daily Energy Expenditure (TDEE), you can make informed decisions about your diet and exercise routine.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Calorie Calculator</h3>
        <p>
          To get your personalized calorie estimate, please provide the following details:
        </p>
        <ol>
          <li><strong>Age & Gender:</strong> Metabolic rates vary significantly based on these biological factors. Men typically have a higher BMR due to higher muscle mass.</li>
          <li><strong>Weight & Height:</strong> These determine your body's base energy requirements (BMR). Larger bodies generally require more energy to maintain.</li>
          <li><strong>Activity Level:</strong> Choose the option that best describes your daily physical activity, from sedentary office work to intense athletic training. This is a crucial factor in determining your TDEE.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Science: Mifflin-St Jeor Equation</h3>
        <p>
          Our calculator employs the Mifflin-St Jeor Equation, which is currently the gold standard for estimating Basal Metabolic Rate (BMR) in clinical settings:
        </p>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm overflow-x-auto">
          For Men: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5<br/>
          For Women: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is BMR vs. TDEE?</p>
            <p><strong>BMR (Basal Metabolic Rate)</strong> is the number of calories your body burns just to keep your organs functioning while at rest. <strong>TDEE (Total Daily Energy Expenditure)</strong> is your BMR plus the calories burned through physical activity. TDEE is the number you should use for daily meal planning.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How many calories should I eat to lose weight?</p>
            <p>A common recommendation is to subtract 500 calories from your TDEE to lose about 1 pound (0.5 kg) per week. This creates a "calorie deficit." However, it's important not to drop below your BMR without medical supervision to avoid metabolic slowdown.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Is the Mifflin-St Jeor Equation accurate?</p>
            <p>Yes, it is currently considered one of the most accurate formulas for predicting BMR in healthy adults. However, it doesn't account for body composition (muscle vs. fat). Highly muscular individuals may find their actual needs are higher than the estimate.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the "Thermic Effect of Food" (TEF)?</p>
            <p>TEF is the energy your body uses to digest, absorb, and process the nutrients in the food you eat. It typically accounts for about 10% of your total daily energy expenditure.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          A <strong>30-year-old male</strong> who is <strong>180 cm tall</strong>, weighs <strong>85 kg</strong>, and is <strong>moderately active</strong> (3-5 days of exercise per week) has a BMR of approximately <strong>1,850 calories</strong> and a TDEE of about <strong>2,870 calories</strong> per day to maintain his current weight.
        </p>
      </div>
    </div>
  );
};
