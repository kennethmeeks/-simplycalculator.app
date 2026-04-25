import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';

import { Calculator, Info, Sparkles, Star } from 'lucide-react';

export const AngelNumberCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>('1990-01-01');
  const [angelNumber, setAngelNumber] = useState<number>(0);
  const [meaning, setMeaning] = useState<string>('');

  const meanings: { [key: number]: string } = {
    1: "New beginnings, leadership, and independence. Your angels are encouraging you to step into your power.",
    2: "Balance, harmony, and partnership. Focus on your relationships and trust the process.",
    3: "Creativity, communication, and growth. Express yourself and embrace your unique talents.",
    4: "Stability, structure, and hard work. Build a solid foundation for your future.",
    5: "Change, adventure, and freedom. Embrace new experiences and trust your intuition.",
    6: "Love, family, and domesticity. Focus on your home life and nurture your relationships.",
    7: "Spirituality, intuition, and inner wisdom. Seek deeper meaning and trust your inner voice.",
    8: "Abundance, prosperity, and success. Your hard work is paying off, and financial rewards are coming.",
    9: "Completion, humanitarianism, and spiritual enlightenment. Finish what you've started and help others.",
    11: "Spiritual awakening and enlightenment. You are a master teacher and have a powerful message to share.",
    22: "Master builder and manifestor. You have the ability to turn your dreams into reality.",
    33: "Master teacher and healer. Your mission is to inspire and uplift others through your words and actions."
  };

  useEffect(() => {
    const digits = birthDate.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    
    setAngelNumber(sum);
    setMeaning(meanings[sum] || "A unique and powerful message from your angels.");
  }, [birthDate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Angel Number Calculator | Discover Your Spiritual Message</title>
        <meta name="description" content="Free online angel number calculator. Find your unique angel number based on your birth date and discover its spiritual meaning for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-[#0066cc]" />
          Angel Number Calculator
        </h1>
        <p className="text-slate-600">Discover your unique angel number and its spiritual significance based on your birth date.</p>
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
              What are Angel Numbers?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Angel numbers are sequences of numbers that carry spiritual significance and messages from the divine realm. They are believed to be a way for angels to communicate with us and provide guidance on our life path.
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Numerology:</strong> Angel numbers are based on the principles of numerology, where each number has a unique vibration and meaning.</li>
              <li><strong>Synchronicity:</strong> Seeing angel numbers repeatedly is often a sign of synchronicity and spiritual alignment.</li>
              <li><strong>Personalized:</strong> Your birth date can reveal your primary angel number, which represents your core essence and life mission.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Your Angel Number
            </h2>
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="text-8xl font-bold mb-4 text-[#0066cc]">{angelNumber}</div>
                <div className="text-sm font-medium text-slate-300 leading-relaxed italic">
                  "{meaning}"
                </div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Spiritual Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pay attention to the numbers you see in your daily life. Your angels may be sending you additional messages through repeating number sequences like 111, 222, or 333.
            </p>
          </div>
          
          <ResultActions 
            onReset={() => {
              setBirthDate('1990-01-01');
            }}
            onCopy={() => {
              const text = `My Angel Number: ${angelNumber}\nMeaning: ${meaning}\nCalculated at simplycalculator.app`;
              navigator.clipboard.writeText(text);
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="Angel Number Calculator" 
        path="/angel-number" 
        description="Discover your unique angel number and its spiritual meaning. Calculate your core vibration in 2026 and reveal messages from the divine realm."
      />
    </div>
  );
};
