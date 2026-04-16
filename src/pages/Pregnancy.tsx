import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const PregnancyCalculator: React.FC = () => {
  const [lastPeriod, setLastPeriod] = useState('2026-01-01');
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [weeks, setWeeks] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const start = new Date(lastPeriod);
    const due = new Date(start);
    due.setDate(start.getDate() + 280); // 40 weeks
    setDueDate(due);

    const now = new Date();
    const diff = now.getTime() - start.getTime();
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (totalDays >= 0) {
      setWeeks(Math.floor(totalDays / 7));
      setDays(totalDays % 7);
    } else {
      setWeeks(0);
      setDays(0);
    }
  }, [lastPeriod]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Pregnancy Due Date Calculator | Track Progress & Weeks</title>
        <meta name="description" content="Calculate your pregnancy due date and track your progress with our free online tool. Accurate 2026 pregnancy tracker based on your last period (LMP)." />
      </Helmet>

      <h1>Pregnancy Due Date Calculator</h1>
      <p>Estimate your baby's due date and find out how far along you are in your pregnancy journey.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">First Day of Last Period</label>
              <input 
                type="date" 
                value={lastPeriod} 
                onChange={(e) => setLastPeriod(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <p className="text-xs text-[#666]">
              Most pregnancies last around 40 weeks (280 days) from the first day of your last menstrual period.
            </p>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-6 text-center">
                <div>
                  <p className="text-sm font-bold text-[#666] uppercase mb-1">Estimated Due Date</p>
                  <p className="text-3xl font-bold text-[#0066cc]">
                    {dueDate ? dueDate.toLocaleDateString(undefined, { dateStyle: 'long' }) : '---'}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#b3d9ff]">
                  <p className="text-sm font-bold text-[#666] uppercase mb-1">Current Progress</p>
                  <p className="text-2xl font-bold text-[#0066cc]">
                    {weeks} Weeks, {days} Days
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About Pregnancy Due Dates</h2>
        <p>
          A pregnancy due date is an estimate of when your baby will be born. In 2026, healthcare providers continue to use the first day of your last menstrual period (LMP) as the primary starting point for this calculation. Our <strong>pregnancy due date calculator and tracker</strong> uses the standard Naegele's rule to provide you with a reliable estimate for your pregnancy journey.
        </p>
        <p>
          Understanding your due date is essential for planning prenatal care, tracking fetal development, and preparing for your baby's arrival. While it's just an estimate, it helps you and your healthcare provider monitor the health and growth of your baby throughout the 40 weeks of pregnancy.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Pregnancy Calculator</h3>
        <p>
          To get your estimated due date, simply follow these steps:
        </p>
        <ol>
          <li><strong>Enter your LMP:</strong> Select the first day of your last menstrual period from the date picker. This is the most common way to estimate a due date.</li>
          <li><strong>View Results:</strong> The calculator will instantly show your estimated due date and exactly how many weeks and days you are into your pregnancy.</li>
          <li><strong>Track Progress:</strong> Bookmark this page to check your progress regularly as you move through each trimester.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">What is Naegele's Rule?</h3>
        <p>
          Naegele's Rule is a standard way of calculating the due date. It involves adding one year, subtracting three months, and adding seven days to the first day of a woman's last period. The formula assumes a standard 28-day menstrual cycle.
        </p>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm overflow-x-auto">
          Due Date = LMP + 7 Days - 3 Months + 1 Year
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How accurate is a due date?</p>
            <p>Only about 4% of babies are born on their exact due date. Most babies arrive within a week on either side of the estimate. It's a guide to help you prepare, not a fixed appointment!</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Why does my doctor use a different date?</p>
            <p>Your healthcare provider may adjust your due date based on an early ultrasound, which can provide a more accurate measurement of the baby's size and development, especially if you have irregular cycles.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What are the three trimesters?</p>
            <p>Pregnancy is divided into three trimesters: the first (weeks 1-12), the second (weeks 13-26), and the third (weeks 27 until birth). Each stage brings unique changes for both the mother and the baby.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What if I don't know my LMP?</p>
            <p>If you're unsure of the date of your last period, your doctor will likely use an ultrasound to determine your baby's gestational age and set a due date.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If the first day of your last period was <strong>January 1, 2026</strong>, your estimated due date would be <strong>October 8, 2026</strong>. By <strong>March 24, 2026</strong>, you would be <strong>11 weeks and 5 days</strong> pregnant.
        </p>
      </div>
    </div>
  );
};
