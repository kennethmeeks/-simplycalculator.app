import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


const zodiacSigns = [
  { name: 'Aries', start: '03-21', end: '04-19' },
  { name: 'Taurus', start: '04-20', end: '05-20' },
  { name: 'Gemini', start: '05-21', end: '06-20' },
  { name: 'Cancer', start: '06-21', end: '07-22' },
  { name: 'Leo', start: '07-23', end: '08-22' },
  { name: 'Virgo', start: '08-23', end: '09-22' },
  { name: 'Libra', start: '09-23', end: '10-22' },
  { name: 'Scorpio', start: '10-23', end: '11-21' },
  { name: 'Sagittarius', start: '11-22', end: '12-21' },
  { name: 'Capricorn', start: '12-22', end: '01-19' },
  { name: 'Aquarius', start: '01-20', end: '02-18' },
  { name: 'Pisces', start: '02-19', end: '03-20' }
];

export const Zodiac: React.FC = () => {
  const [birthDate, setBirthDate] = useState<string>('');
  const [result, setResult] = useState<string | null>(null);

  const calculateZodiac = () => {
    const date = new Date(birthDate);
    if (isNaN(date.getTime())) return;
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    const sign = zodiacSigns.find(s => {
      if (s.name === 'Capricorn') {
        return formattedDate >= s.start || formattedDate <= s.end;
      }
      return formattedDate >= s.start && formattedDate <= s.end;
    });

    setResult(sign ? sign.name : 'Unknown');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Zodiac Sign Calculator [Instant Results]</title>
        <meta name="description" content="Free online zodiac/star sign calculator for 2026. Quickly find your zodiac sign from your birth date with instant results." />
      </Helmet>

      <h1>Zodiac/Star Sign Calculator</h1>
      <p>Quickly find your zodiac sign from your birth date for insight and self-discovery.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Birth Date</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Birth Date</label>
              <input 
                type="date" 
                value={birthDate} 
                onChange={(e) => setBirthDate(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <button 
              onClick={calculateZodiac}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Find Your Zodiac Sign
            </button>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="text-center space-y-4">
                {result !== null ? (
                  <div className="space-y-2">
                    <div className="text-sm text-slate-500">Your Zodiac Sign</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      {result === 'Aries' ? 'The Ram' : result === 'Taurus' ? 'The Bull' : result === 'Gemini' ? 'The Twins' : result === 'Cancer' ? 'The Crab' : result === 'Leo' ? 'The Lion' : result === 'Virgo' ? 'The Virgin' : result === 'Libra' ? 'The Scales' : result === 'Scorpio' ? 'The Scorpion' : result === 'Sagittarius' ? 'The Archer' : result === 'Capricorn' ? 'The Goat' : result === 'Aquarius' ? 'The Water Bearer' : 'The Fish'}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter your birth date to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Zodiac / Star Sign Calculator" 
        path="/zodiac" 
        description="Discover your zodiac sign based on your birth date. Learn about your personality traits and astrological sign for 2026."
      />
    </div>
  );
};
