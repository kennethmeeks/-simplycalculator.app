import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Sparkles, Star, Dice5 } from 'lucide-react';

export const LuckyNumberCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>('1990-01-01');
  const [luckyNumber, setLuckyNumber] = useState<number>(0);
  const [luckyColor, setLuckyColor] = useState<string>('');
  const [luckyDay, setLuckyDay] = useState<string>('');

  const luckyData: { [key: number]: { color: string, day: string } } = {
    1: { color: "Gold", day: "Sunday" },
    2: { color: "Silver", day: "Monday" },
    3: { color: "Yellow", day: "Thursday" },
    4: { color: "Blue", day: "Sunday" },
    5: { color: "Green", day: "Wednesday" },
    6: { color: "Pink", day: "Friday" },
    7: { color: "Violet", day: "Monday" },
    8: { color: "Black", day: "Saturday" },
    9: { color: "Red", day: "Tuesday" }
  };

  useEffect(() => {
    const digits = birthDate.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    
    while (sum > 9) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    
    setLuckyNumber(sum);
    setLuckyColor(luckyData[sum]?.color || "Vibrant");
    setLuckyDay(luckyData[sum]?.day || "Everyday");
  }, [birthDate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Lucky Number — Is Today Your Big Day? Find Out Free 2026</title>
        <meta name="description" content="Discover your personal lucky number, color, and day. Use numerology to find the hidden positive vibration in your birth date instantly." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Dice5 className="w-8 h-8 text-[#0066cc]" />
          Lucky Number Calculator: Have You Been Ignoring Your Luck?
        </h1>
        <p className="text-slate-600">You could be missing out on your most powerful days; find your unique lucky profile in just 5 seconds.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Your Birth Date</label>
                <input 
                  type="date" 
                  value={birthDate} 
                  onChange={(e) => setBirthDate(e.target.value)} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              What are Lucky Numbers?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Lucky numbers are believed to carry a positive vibration and bring good fortune to those who use them. They are often based on the principles of numerology and astrology.
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Numerology:</strong> Your birth date can reveal your primary lucky number, which represents your core essence and personal vibration.</li>
              <li><strong>Astrology:</strong> Each lucky number is associated with a specific planet, color, and day of the week.</li>
              <li><strong>Personalized:</strong> Using your lucky number, color, and day can help you align with positive energy and attract good fortune.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-[#f0f7ff] border border-[#0066cc]/20 text-[#0066cc]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0066cc]">
              <Star className="w-5 h-5 text-yellow-500" />
              Your Lucky Profile
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-[#0066cc]/10">
                <div className="text-8xl font-bold mb-2 text-[#0066cc]">{luckyNumber}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Your Lucky Number</div>
              </div>
              <div className="space-y-4 text-center py-4 border-b border-[#0066cc]/10">
                <div>
                  <div className="text-xl font-bold text-[#0066cc]">{luckyColor}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Lucky Color</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#0066cc]">{luckyDay}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Lucky Day</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Luck Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Try to incorporate your lucky color into your daily life, and use your lucky number for important decisions or events.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Lucky Numbers in 2026</h2>
        <p>
          Our <strong>lucky number calculator</strong> uses the principles of numerology to help you discover the positive vibration hidden in your birth date. By reducing your birth date to a single digit, we can reveal your core lucky number and its associated color and day.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Meaning of Each Lucky Number</h3>
        <p>
          In numerology, each number from 1 to 9 has a unique vibration and meaning:
        </p>
        <ul>
          <li><strong>1:</strong> Leadership, independence, and new beginnings.</li>
          <li><strong>2:</strong> Balance, harmony, and partnership.</li>
          <li><strong>3:</strong> Creativity, communication, and growth.</li>
          <li><strong>4:</strong> Stability, structure, and hard work.</li>
          <li><strong>5:</strong> Change, adventure, and freedom.</li>
          <li><strong>6:</strong> Love, family, and domesticity.</li>
          <li><strong>7:</strong> Spirituality, intuition, and inner wisdom.</li>
          <li><strong>8:</strong> Abundance, prosperity, and success.</li>
          <li><strong>9:</strong> Completion, humanitarianism, and spiritual enlightenment.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">How do I use my lucky number?</p>
            <p>You can use your lucky number for important decisions, lottery numbers, or as a personal mantra for positive energy.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can my lucky number change?</p>
            <p>Your primary lucky number based on your birth date remains the same throughout your life, but you may also have temporary lucky numbers based on current events or cycles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
