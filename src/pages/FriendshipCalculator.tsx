import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Heart, Users, Sparkles } from 'lucide-react';

export const FriendshipCalculator: React.FC = () => {
  const [name1, setName1] = useState<string>('');
  const [name2, setName2] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const calculateScore = () => {
    if (!name1 || !name2) return;
    
    const combined = (name1 + name2).toLowerCase().replace(/\s/g, '');
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      hash = ((hash << 5) - hash) + combined.charCodeAt(i);
      hash |= 0;
    }
    
    const finalScore = Math.abs(hash % 101);
    setScore(finalScore);

    if (finalScore >= 90) setMessage("Best Friends Forever! You have an incredible bond.");
    else if (finalScore >= 75) setMessage("Great Friends! You share a deep and meaningful connection.");
    else if (finalScore >= 50) setMessage("Good Friends! You enjoy each other's company and have common interests.");
    else if (finalScore >= 25) setMessage("Casual Friends! You have a friendly relationship but could grow closer.");
    else setMessage("Acquaintances! You're still getting to know each other.");
  };

  useEffect(() => {
    if (name1 && name2) {
      calculateScore();
    }
  }, [name1, name2]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Friendship Calculator [Free & No Sign-up]</title>
        <meta name="description" content="Free online friendship calculator. Test your friendship bond and see how compatible you and your friend are for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Users className="w-8 h-8 text-[#0066cc]" />
          Friendship Calculator
        </h1>
        <p className="text-slate-600">Test the strength of your friendship bond and see how compatible you and your friend are.</p>
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
                <label className="input-label">Friend's Name</label>
                <input 
                  type="text" 
                  value={name2} 
                  onChange={(e) => setName2(e.target.value)} 
                  placeholder="Enter friend's name"
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              What is a Friendship Bond?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              A friendship bond is the unique connection and compatibility between two people. It's based on shared interests, values, and experiences.
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Compatibility:</strong> How well your personalities and interests align.</li>
              <li><strong>Trust:</strong> The foundation of any strong friendship.</li>
              <li><strong>Support:</strong> Being there for each other through thick and thin.</li>
              <li><strong>Shared Joy:</strong> Celebrating each other's successes and milestones.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              Friendship Score
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
              Friendship Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Remember that friendship is a journey, not a destination. Focus on building trust, communication, and shared experiences to strengthen your bond.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Friendship Compatibility in 2026</h2>
        <p>
          Our <strong>friendship calculator</strong> is a fun and lighthearted way to test the strength of your friendship bond. By entering your names, we can reveal your compatibility score and its associated meaning.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Importance of Friendship</h3>
        <p>
          Friendships are essential for our mental and emotional well-being. They provide support, joy, and a sense of belonging.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Elements of a Strong Friendship</h3>
        <ul>
          <li><strong>Communication:</strong> Open and honest communication is vital for resolving conflicts and building trust.</li>
          <li><strong>Shared Values:</strong> Having similar values and beliefs can help you align and support each other.</li>
          <li><strong>Mutual Respect:</strong> Respecting each other's boundaries and opinions is essential for a healthy friendship.</li>
          <li><strong>Shared Experiences:</strong> Creating memories together can strengthen your bond and provide a sense of connection.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">Is the friendship score accurate?</p>
            <p>The friendship score is intended for entertainment purposes only and should not be taken as a definitive measure of your friendship bond.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How can I improve my friendship score?</p>
            <p>Focus on building trust, communication, and shared experiences with your friend. The more you invest in your friendship, the stronger your bond will become.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
