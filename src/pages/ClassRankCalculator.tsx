import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Users, TrendingUp, Award } from 'lucide-react';

export const ClassRankCalculator: React.FC = () => {
  const [classSize, setClassSize] = useState<number>(500);
  const [rank, setRank] = useState<number>(25);
  const [percentile, setPercentile] = useState<number>(0);
  const [topPercentage, setTopPercentage] = useState<number>(0);

  useEffect(() => {
    if (classSize > 0 && rank > 0) {
      const top = (rank / classSize) * 100;
      setTopPercentage(Number(top.toFixed(2)));
      setPercentile(Number((100 - top).toFixed(2)));
    }
  }, [classSize, rank]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Class Rank Calculator | Calculate Percentile & Standing</title>
        <meta name="description" content="Free online class rank calculator. Find your percentile standing and top percentage based on your rank and class size in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Class Rank Calculator</h1>
        <p className="text-slate-600">Enter your rank and total class size to see your percentile standing and where you fit in the top percentage.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Your Rank</label>
                <input 
                  type="number" 
                  value={rank} 
                  onChange={(e) => setRank(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Total Class Size</label>
                <input 
                  type="number" 
                  value={classSize} 
                  onChange={(e) => setClassSize(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Understanding Your Rank
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Your class rank is a measure of how your academic performance compares to your classmates. It is typically based on your GPA (Grade Point Average). Colleges often use this to understand the context of your grades within your specific school.
            </p>
            <div className="mt-4 p-3 bg-white rounded border border-slate-200 text-sm text-slate-700">
              <strong>Percentile Formula:</strong> (1 - (Rank / Class Size)) × 100
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-emerald-600 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Your Results
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-emerald-500/30">
                <div className="text-4xl font-bold mb-1">{percentile}th</div>
                <div className="text-xs font-medium text-emerald-100 uppercase tracking-wider">Percentile</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">Top {topPercentage}%</div>
                <div className="text-xs font-medium text-emerald-100 uppercase tracking-wider">of your class</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Why Rank Matters
            </h3>
            <ul className="text-sm text-slate-600 space-y-3">
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                College admissions context.
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                Scholarship eligibility.
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                Honors society qualifications.
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Importance of Class Rank in 2026</h2>
        <p>
          While many schools are moving toward holistic admissions, <strong>class rank</strong> remains a key metric for understanding a student's academic standing relative to their peers. Our calculator helps you translate your raw rank into a more meaningful percentile.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Percentile vs. Percentage</h3>
        <p>
          It's easy to confuse these two terms. A <strong>percentage</strong> tells you how many people are below you (e.g., being in the top 10%). A <strong>percentile</strong> tells you the same thing but in a different way (e.g., being in the 90th percentile means you performed better than 90% of your class).
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Improve Your Rank</h3>
        <p>
          Since class rank is usually tied to GPA, the best way to improve your rank is to focus on your grades. However, some schools use <strong>weighted GPA</strong>, which means taking more challenging courses (like AP or IB) can give your rank a significant boost even if your raw grades are slightly lower.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is a "good" class rank?</p>
            <p>Generally, being in the top 10% or 25% of your class is considered very strong for college admissions. However, "good" depends entirely on the competitiveness of your specific school.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does my rank include transfer students?</p>
            <p>Usually, yes. Most schools update their class size and rankings at the end of each semester to include any new students who have joined the grade level.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
