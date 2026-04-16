import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Heart, Sparkles, Users } from 'lucide-react';

export const NameCompatibility: React.FC = () => {
  const [name1, setName1] = useState<string>('');
  const [name2, setName2] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const calculateCompatibility = () => {
    if (!name1 || !name2) return;
    
    const combined = (name1 + name2).toLowerCase().replace(/\s/g, '');
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      hash = ((hash << 5) - hash) + combined.charCodeAt(i);
      hash |= 0;
    }
    
    const finalScore = 40 + Math.abs(hash % 61); // Score between 40 and 100
    setScore(finalScore);

    if (finalScore >= 90) setMessage("A Perfect Match! Your names vibrate in complete harmony.");
    else if (finalScore >= 80) setMessage("High Compatibility! You share a strong and natural connection.");
    else if (finalScore >= 70) setMessage("Great Potential! You have a solid foundation for a lasting bond.");
    else if (finalScore >= 60) setMessage("Good Balance! You complement each other well in many ways.");
    else setMessage("Interesting Dynamic! You'll need to work on understanding each other's unique vibrations.");
  };

  useEffect(() => {
    if (name1 && name2) {
      calculateCompatibility();
    }
  }, [name1, name2]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Name Compatibility | Love Match Name Calculator</title>
        <meta name="description" content="Free online name compatibility calculator. Find your love match and see how compatible you and your partner's names are for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Heart className="w-8 h-8 text-[#0066cc]" />
          Name Compatibility
        </h1>
        <p className="text-slate-600">Discover the unique vibration between two names and see how compatible you are in love and life.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Your Name</label>
                <input 
                  type="text" 
                  value={name1} 
                  onChange={(e) => setName1(e.target.value)} 
                  placeholder="Enter your name"
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Partner's Name</label>
                <input 
                  type="text" 
                  value={name2} 
                  onChange={(e) => setName2(e.target.value)} 
                  placeholder="Enter partner's name"
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              What is Name Compatibility?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Name compatibility is based on the principles of numerology, where each letter of the alphabet is assigned a numerical value. By analyzing the unique vibrations of each name, we can reveal your potential for harmony, passion, and long-term success.
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Numerology:</strong> Each letter has a unique vibration and meaning.</li>
              <li><strong>Vibration:</strong> The combined vibration of two names can reveal their compatibility.</li>
              <li><strong>Personalized:</strong> Your name is a powerful part of your identity and vibration.</li>
              <li><strong>Fun & Insightful:</strong> A lighthearted way to explore your connection with another person.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
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
              <Calculator className="w-4 h-4" />
              Love Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              While name compatibility is fun, remember that real relationships are built on trust, communication, and shared values.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Name Compatibility in 2026</h2>
        <p>
          Our <strong>name compatibility calculator</strong> is a fun and lighthearted way to test the strength of your connection with another person. By entering your names, we can reveal your compatibility score and its associated meaning.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Power of Names</h3>
        <p>
          In many cultures, names are believed to carry a unique vibration and influence a person's life path. By analyzing the numerical values of each letter, we can reveal the potential for harmony and success between two people.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Elements of Compatibility</h3>
        <ul>
          <li><strong>Vibration:</strong> The unique energy of each name.</li>
          <li><strong>Harmony:</strong> How well two vibrations align and support each other.</li>
          <li><strong>Passion:</strong> The intensity and attraction between two people.</li>
          <li><strong>Communication:</strong> The ease and clarity of understanding each other.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">Is the name compatibility score accurate?</p>
            <p>The name compatibility score is intended for entertainment purposes only and should not be taken as a definitive measure of your relationship.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How can I improve my name compatibility score?</p>
            <p>Focus on building trust, communication, and shared experiences with your partner. The more you invest in your relationship, the stronger your bond will become.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
