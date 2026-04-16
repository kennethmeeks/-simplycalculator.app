import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Clock, BookOpen, Calendar, Brain } from 'lucide-react';

export const StudyTimeCalculator: React.FC = () => {
  const [creditHours, setCreditHours] = useState<number>(15);
  const [difficulty, setDifficulty] = useState<number>(2); // 1-3 scale
  const [studyHours, setStudyHours] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(0);

  useEffect(() => {
    // Standard rule: 2-3 hours of study per credit hour
    const baseStudy = creditHours * difficulty;
    setStudyHours(baseStudy);
    setTotalTime(creditHours + baseStudy);
  }, [creditHours, difficulty]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Study Time Calculator | Plan Your Weekly Academic Schedule</title>
        <meta name="description" content="Free online study time calculator. Estimate how many hours you need to study each week based on your credit hours and course difficulty in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Study Time Calculator</h1>
        <p className="text-slate-600">Estimate your weekly study commitment based on your course load and difficulty level.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Total Credit Hours</label>
                <input 
                  type="number" 
                  value={creditHours} 
                  onChange={(e) => setCreditHours(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Course Difficulty</label>
                <select 
                  value={difficulty} 
                  onChange={(e) => setDifficulty(Number(e.target.value))}
                  className="input-field"
                >
                  <option value={1}>Easy (1 hr study/credit)</option>
                  <option value={2}>Average (2 hrs study/credit)</option>
                  <option value={3}>Challenging (3 hrs study/credit)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded p-6">
            <h2 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Academic Planning
            </h2>
            <p className="text-indigo-800 text-sm leading-relaxed">
              The standard "Carnegie Unit" suggests that for every hour spent in class, a student should spend 2-3 hours studying outside of class. This ensures you have enough time to master the material and succeed in your exams.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-indigo-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Weekly Commitment
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-indigo-800/50">
                <div className="text-4xl font-bold mb-1">{studyHours} hrs</div>
                <div className="text-xs font-medium text-indigo-300 uppercase tracking-wider">Study Time Needed</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">{totalTime} hrs</div>
                <div className="text-xs font-medium text-indigo-300 uppercase tracking-wider">Total Academic Time</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Daily Breakdown
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                <span>7 Days/Week:</span>
                <span className="font-bold">{(studyHours / 7).toFixed(1)} hrs/day</span>
              </div>
              <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                <span>5 Days/Week:</span>
                <span className="font-bold">{(studyHours / 5).toFixed(1)} hrs/day</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Mastering Your Study Schedule in 2026</h2>
        <p>
          Time management is the single most important factor in academic success. Our <strong>study time calculator</strong> helps you visualize your weekly commitment so you can plan your life around your education, rather than the other way around.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The 2-for-1 Rule</h3>
        <p>
          Most universities recommend the "2-for-1" rule: for every one hour you spend in a lecture, you should spend at least two hours studying, reading, and completing assignments. For more difficult subjects like engineering, medicine, or law, this often increases to a 3-for-1 ratio.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use Your Study Time Effectively</h3>
        <ul>
          <li><strong>Active Recall:</strong> Instead of just reading, test yourself on the material.</li>
          <li><strong>Spaced Repetition:</strong> Study in shorter bursts over several days rather than one long "cram" session.</li>
          <li><strong>The Pomodoro Technique:</strong> Work for 25 minutes, then take a 5-minute break to maintain focus.</li>
          <li><strong>Eliminate Distractions:</strong> Put your phone in another room and use website blockers if necessary.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Balancing Work and School</h3>
        <p>
          If you are working while attending school, it's crucial to be realistic about your time. A full-time course load (15 credits) plus 30 hours of study time equals a 45-hour work week. Adding a part-time job on top of that requires extreme discipline and a very clear schedule.
        </p>
      </div>
    </div>
  );
};
