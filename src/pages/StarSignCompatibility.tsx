import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Heart, Sparkles, Star } from 'lucide-react';

export const StarSignCompatibility: React.FC = () => {
  const [sign1, setSign1] = useState<string>('Aries');
  const [sign2, setSign2] = useState<string>('Leo');
  const [score, setScore] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const calculateCompatibility = () => {
    // Simple deterministic hash for compatibility score
    const combined = sign1 + sign2;
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      hash = ((hash << 5) - hash) + combined.charCodeAt(i);
      hash |= 0;
    }
    
    const finalScore = 50 + Math.abs(hash % 51); // Score between 50 and 100
    setScore(finalScore);

    if (finalScore >= 90) setMessage("A Match Made in the Stars! Your connection is cosmic and powerful.");
    else if (finalScore >= 80) setMessage("Highly Compatible! You share a deep understanding and natural chemistry.");
    else if (finalScore >= 70) setMessage("Great Potential! You have strong common ground and mutual attraction.");
    else if (finalScore >= 60) setMessage("Good Balance! You complement each other well despite some differences.");
    else setMessage("Interesting Dynamic! You'll need to work on communication to find your rhythm.");
  };

  useEffect(() => {
    calculateCompatibility();
  }, [sign1, sign2]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Star Sign Compatibility [Free & No Sign-up]</title>
        <meta name="description" content="Free online star sign compatibility calculator. Find your zodiac love match and see how compatible you and your partner are for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Star className="w-8 h-8 text-[#0066cc]" />
          Star Sign Compatibility
        </h1>
        <p className="text-slate-600">Discover the cosmic connection between two zodiac signs and see how compatible you are in love and life.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Your Sign</label>
                <select 
                  value={sign1} 
                  onChange={(e) => setSign1(e.target.value)} 
                  className="input-field"
                >
                  {signs.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="input-label">Partner's Sign</label>
                <select 
                  value={sign2} 
                  onChange={(e) => setSign2(e.target.value)} 
                  className="input-field"
                >
                  {signs.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Zodiac Elements & Compatibility
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Astrological compatibility is often based on the four elements: Fire, Earth, Air, and Water. Signs within the same element or complementary elements tend to have higher natural compatibility.
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Fire (Aries, Leo, Sagittarius):</strong> Passionate, energetic, and adventurous. Best with other Fire or Air signs.</li>
              <li><strong>Earth (Taurus, Virgo, Capricorn):</strong> Practical, grounded, and stable. Best with other Earth or Water signs.</li>
              <li><strong>Air (Gemini, Libra, Aquarius):</strong> Intellectual, social, and communicative. Best with other Air or Fire signs.</li>
              <li><strong>Water (Cancer, Scorpio, Pisces):</strong> Emotional, intuitive, and nurturing. Best with other Water or Earth signs.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400" />
              Compatibility Score
            </h2>
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="text-8xl font-bold mb-4 text-[#0066cc]">{score}%</div>
                <div className="text-sm font-medium text-slate-300 leading-relaxed italic">
                  "{message}"
                </div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Cosmic Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              While sun signs provide a great starting point, a full birth chart comparison (synastry) offers a much deeper look into relationship dynamics.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Zodiac Compatibility in 2026</h2>
        <p>
          Our <strong>star sign compatibility calculator</strong> is a fun and insightful way to explore the astrological connection between two people. By analyzing the unique vibrations of each zodiac sign, we can reveal your potential for harmony, passion, and long-term success.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Role of the Elements</h3>
        <p>
          In astrology, the twelve signs are divided into four elements, each representing a different aspect of human nature:
        </p>
        <ul>
          <li><strong>Fire Signs:</strong> Driven by passion and action. They need excitement and freedom.</li>
          <li><strong>Earth Signs:</strong> Focused on stability and the physical world. They value security and loyalty.</li>
          <li><strong>Air Signs:</strong> Motivated by ideas and social connection. They need intellectual stimulation.</li>
          <li><strong>Water Signs:</strong> Guided by emotions and intuition. They seek deep connection and understanding.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Beyond the Sun Sign</h3>
        <p>
          While your sun sign (the sign determined by your birthday) is important, it's only one piece of the puzzle. For a truly accurate compatibility reading, astrologers look at:
        </p>
        <ul>
          <li><strong>Moon Signs:</strong> Representing your emotional needs and inner self.</li>
          <li><strong>Venus Signs:</strong> Governing how you love and what you value in a partner.</li>
          <li><strong>Mars Signs:</strong> Influencing your drive, passion, and how you handle conflict.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">Can two incompatible signs have a successful relationship?</p>
            <p>Absolutely! Astrology shows natural tendencies, but free will and effort are always more powerful. Any two signs can work if both partners are committed to understanding and respecting each other.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the most compatible sign for me?</p>
            <p>Generally, signs of the same element (e.g., Leo and Sagittarius) or complementary elements (e.g., Taurus and Cancer) have the easiest time together.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
