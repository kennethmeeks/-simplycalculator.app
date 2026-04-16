import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const AgeCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState('1990-01-01');
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    const birth = new Date(birthDate);
    const now = new Date();
    
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  }, [birthDate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Age Calculator | Calculate Age in Years, Months, and Days | simplycalculator.app</title>
        <meta name="description" content="Calculate your exact age in years, months, and days with our free online age tool. Perfect for legal, medical, or personal use in 2026." />
      </Helmet>

      <h1>Age Calculator</h1>
      <p>The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years, months, and days.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Date of Birth</label>
              <input 
                type="date" 
                value={birthDate} 
                onChange={(e) => setBirthDate(e.target.value)}
                className="input-field w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="text-center">
                <p className="font-bold text-[#555] uppercase text-xs mb-2">Your Age is</p>
                <div className="flex justify-center gap-6">
                  <div>
                    <p className="text-4xl font-bold text-[#0066cc]">{age.years}</p>
                    <p className="text-xs text-[#777] uppercase">Years</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#0066cc]">{age.months}</p>
                    <p className="text-xs text-[#777] uppercase">Months</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#0066cc]">{age.days}</p>
                    <p className="text-xs text-[#777] uppercase">Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About the Age Calculator</h2>
        <p>
          Knowing your exact age in years, months, and days can be useful for various legal, medical, and personal reasons. Our <strong>age calculator in years months and days</strong> provides a precise breakdown of your time on Earth, accounting for leap years and varying month lengths to ensure accuracy. In 2026, this tool is a quick and reliable way to get the exact data you need without manual calculations.
        </p>
        <p>
          Whether you're filling out a government form, checking eligibility for a service, or just curious about your precise age, this calculator removes the guesswork. It's also a great tool for parents tracking their children's development or for anyone celebrating a milestone birthday.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Age Calculator</h3>
        <p>
          Using the tool is straightforward and takes only a few seconds:
        </p>
        <ol>
          <li><strong>Select your Date of Birth:</strong> Use the date picker to choose the day, month, and year you were born.</li>
          <li><strong>View Results:</strong> The calculator automatically updates to show your age in three distinct units: Years, Months, and Days.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use an Online Age Calculator?</h3>
        <p>
          Calculating age manually can be surprisingly complex due to:
        </p>
        <ul>
          <li><strong>Leap Years:</strong> Every four years, an extra day is added to February, which can throw off simple subtraction.</li>
          <li><strong>Varying Month Lengths:</strong> Months have 28, 29, 30, or 31 days. Our tool handles these differences automatically.</li>
          <li><strong>Precision:</strong> Many people only know their age in years, but knowing the months and days provides a more complete picture.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How accurate is this calculator?</p>
            <p>Our calculator uses standard JavaScript Date objects which handle leap years and different month lengths (28, 29, 30, or 31 days) automatically, providing a highly accurate result based on the Gregorian calendar.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does this work for future dates?</p>
            <p>If you select a date in the future, the calculator will show the "interval" or time remaining until that date, though it's primarily designed for calculating age from the past to the present.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Why do some cultures calculate age differently?</p>
            <p>In some East Asian traditions (like the traditional Chinese age system), a person is considered one year old at birth because the time spent in the womb is counted. Furthermore, everyone's age increases on the Lunar New Year rather than their specific birthday. Our tool uses the standard Western system.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can I calculate the age of a pet or an object?</p>
            <p>Absolutely! As long as you have a starting date (like a pet's birth date or the date an object was manufactured), this tool will calculate the elapsed time in years, months, and days.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If today is <strong>March 24, 2026</strong>, and your birth date was <strong>January 15, 1995</strong>, the calculator would show that you are <strong>31 Years, 2 Months, and 9 Days</strong> old.
        </p>
      </div>
    </div>
  );
};
