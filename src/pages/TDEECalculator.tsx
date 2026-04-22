import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Activity, Zap, Info } from 'lucide-react';
import { ResultActions } from '../components/ResultActions';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const TDEECalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(175);
  const [age, setAge] = useState(30);
  const [activity, setActivity] = useState(1.2);
  
  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);

  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let bmrValue = 0;
    if (gender === 'male') {
      bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    setBmr(Math.round(bmrValue));
    setTdee(Math.round(bmrValue * activity));
  }, [gender, weight, height, age, activity]);

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
      pdf.text('PROFESSIONAL METABOLISM REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('TDEE & ENERGY EXPENDITURE ANALYSIS', 15, 55);
      
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
      
      pdf.save('TDEE_Calculator_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>TDEE Calculator | Calculate Your Total Daily Energy Expenditure</title>
        <meta name="description" content="Free online TDEE calculator to find your maintenance calories. Estimate how many calories you burn daily based on activity level in 2026." />
      </Helmet>

      <h1>TDEE Calculator</h1>
      <p>Your Total Daily Energy Expenditure (TDEE) is an estimation of how many calories you burn per day when exercise is taken into account.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Your Profile</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Gender</label>
              <div className="flex gap-4">
                <button 
                  onClick={() => setGender('male')}
                  className={`flex-1 py-2 rounded border font-bold transition-colors ${gender === 'male' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#0066cc]'}`}
                >
                  Male
                </button>
                <button 
                  onClick={() => setGender('female')}
                  className={`flex-1 py-2 rounded border font-bold transition-colors ${gender === 'female' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-white text-slate-600 border-slate-200 hover:border-[#0066cc]'}`}
                >
                  Female
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="input-label">Weight (kg)</label>
                <input 
                  type="number" 
                  value={weight} 
                  onChange={(e) => setWeight(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Height (cm)</label>
                <input 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            </div>
            <div>
              <label className="input-label">Age (years)</label>
              <input 
                type="number" 
                value={age} 
                onChange={(e) => setAge(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Activity Level</label>
              <select 
                value={activity} 
                onChange={(e) => setActivity(Number(e.target.value))}
                className="input-field"
              >
                <option value={1.2}>Sedentary (Office job, little exercise)</option>
                <option value={1.375}>Lightly Active (Light exercise 1-3 days/week)</option>
                <option value={1.55}>Moderately Active (Moderate exercise 3-5 days/week)</option>
                <option value={1.725}>Very Active (Hard exercise 6-7 days/week)</option>
                <option value={1.9}>Extra Active (Physical job + hard training)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container" ref={resultsRef}>
            <div className="section-title">Daily Calorie Needs</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f8fbfe] border-[#e1eefc] p-6 rounded-xl text-center">
                <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Maintenance Calories (TDEE)</div>
                <div className="text-5xl font-black text-[#0066cc] tracking-tight">{tdee.toLocaleString()}</div>
                <div className="text-sm text-slate-500 mt-2 font-bold uppercase tracking-widest">Calories / Day</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                  <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">BMR</div>
                  <div className="text-xl font-black text-slate-700">{bmr.toLocaleString()} kcal</div>
                </div>
                <div className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                  <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Activity Burn</div>
                  <div className="text-xl font-black text-slate-700">{(tdee - bmr).toLocaleString()} kcal</div>
                </div>
              </div>
            </div>
          </div>
          
          <ResultActions 
            onReset={() => {
              setWeight(70);
              setHeight(175);
              setAge(30);
              setActivity(1.2);
              setGender('male');
            }}
            onDownloadPDF={handleDownloadPDF}
            onCopy={() => {
              const text = `TDEE Result: ${tdee} calories/day\nBMR: ${bmr} calories/day\nCalculated at simplycalculator.app`;
              navigator.clipboard.writeText(text);
            }}
          />
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding TDEE: Your Daily Energy Budget</h2>
        <p>
          Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns in a 24-hour period. It's the most important number for anyone looking to lose, gain, or maintain weight. Our <strong>TDEE calculator</strong> provides a personalized estimate based on your unique biology and lifestyle in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Components of TDEE</h3>
        <p>Your TDEE is made up of four main parts:</p>
        <ul>
          <li><strong>Basal Metabolic Rate (BMR):</strong> The calories burned just to keep your organs functioning while at rest (usually 60-70% of TDEE).</li>
          <li><strong>Non-Exercise Activity Thermogenesis (NEAT):</strong> Calories burned through daily movement that isn't intentional exercise (walking, fidgeting, cleaning).</li>
          <li><strong>Thermic Effect of Food (TEF):</strong> The energy your body uses to digest, absorb, and process the food you eat (usually about 10% of TDEE).</li>
          <li><strong>Exercise Activity Thermogenesis (EAT):</strong> Calories burned during intentional workouts or sports.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use Your TDEE for Weight Goals</h3>
        <ul>
          <li><strong>Maintenance:</strong> Eat your TDEE calories every day.</li>
          <li><strong>Weight Loss (Cutting):</strong> Eat 250-500 calories <em>less</em> than your TDEE. This creates a sustainable deficit.</li>
          <li><strong>Weight Gain (Bulking):</strong> Eat 250-500 calories <em>more</em> than your TDEE. This provides the surplus needed for muscle growth.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Why is my TDEE different from my friend's?</p>
            <p>TDEE is highly individual. Factors like muscle mass, age, height, and especially daily movement (NEAT) can cause two people of the same weight to have very different energy needs.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How accurate are activity levels?</p>
            <p>Activity levels are estimates. Most people tend to overestimate their activity level. If you aren't seeing results after two weeks, try adjusting your activity multiplier down one level.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does my TDEE change as I lose weight?</p>
            <p>Yes. As you lose weight, your body requires less energy to move and function. You should recalculate your TDEE every 5-10 lbs of weight change to ensure your calorie targets remain accurate.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
