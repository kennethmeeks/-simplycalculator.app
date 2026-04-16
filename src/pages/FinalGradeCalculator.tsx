import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { GraduationCap, Target, Percent } from 'lucide-react';

export const FinalGradeCalculator: React.FC = () => {
  const [currentGrade, setCurrentGrade] = useState<number>(85);
  const [desiredGrade, setDesiredGrade] = useState<number>(90);
  const [finalWeight, setFinalWeight] = useState<number>(20);
  const [neededOnFinal, setNeededOnFinal] = useState<number>(0);

  useEffect(() => {
    if (finalWeight > 0) {
      // Formula: Desired = (Current * (100 - FinalWeight) + Needed * FinalWeight) / 100
      // Needed = (Desired * 100 - Current * (100 - FinalWeight)) / FinalWeight
      const needed = (desiredGrade * 100 - currentGrade * (100 - finalWeight)) / finalWeight;
      setNeededOnFinal(Number(needed.toFixed(2)));
    }
  }, [currentGrade, desiredGrade, finalWeight]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Final Grade Calculator | What Score Do I Need on My Final?</title>
        <meta name="description" content="Free online final grade calculator. Find out exactly what score you need on your final exam to reach your target grade in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Final Grade Calculator</h1>
        <p className="text-slate-600">Enter your current grade, your goal, and the weight of your final exam to see what score you need.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Current Grade (%)</label>
                <input 
                  type="number" 
                  value={currentGrade} 
                  onChange={(e) => setCurrentGrade(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Desired Final Grade (%)</label>
                <input 
                  type="number" 
                  value={desiredGrade} 
                  onChange={(e) => setDesiredGrade(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div className="md:col-span-2">
                <label className="input-label">Final Exam Weight (%)</label>
                <input 
                  type="number" 
                  value={finalWeight} 
                  onChange={(e) => setFinalWeight(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              How It Works
            </h2>
            <p className="text-blue-800 text-sm leading-relaxed">
              Your final grade is a weighted average of your current grade and your final exam score. This calculator uses the following formula to solve for the score you need:
            </p>
            <div className="bg-white/50 p-3 rounded font-mono text-xs border border-blue-200 my-4 text-blue-900">
              Needed = (Goal × 100 - Current × (100 - Weight)) / Weight
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-[#0066cc] text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Target Score
            </h2>
            <div className="text-center py-8">
              <div className="text-6xl font-bold mb-2">
                {neededOnFinal > 100 ? (
                  <span className="text-red-300">{neededOnFinal}%</span>
                ) : (
                  <span>{neededOnFinal}%</span>
                )}
              </div>
              <div className="text-sm font-medium text-blue-100 uppercase tracking-wider">Needed on Final Exam</div>
            </div>
            {neededOnFinal > 100 && (
              <p className="text-xs text-red-200 mt-4 italic text-center">
                Note: You need over 100% to reach this goal. Check for extra credit!
              </p>
            )}
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Percent className="w-4 h-4" />
              Quick Tips
            </h3>
            <ul className="text-sm text-slate-600 space-y-3">
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Focus on high-weight assignments first.
              </li>
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Ask your teacher about rounding policies.
              </li>
              <li className="flex gap-2">
                <span className="text-[#0066cc] font-bold">•</span>
                Don't forget to include participation grades.
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Mastering Your Final Exams with a Calculator</h2>
        <p>
          Finals week is one of the most stressful times for students in 2026. Our <strong>final grade calculator</strong> is designed to alleviate some of that stress by giving you a clear, mathematical target. Instead of worrying about "what if," you can focus your energy on studying for the score you actually need.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Understanding Weighted Grades</h3>
        <p>
          Most courses don't treat every assignment equally. A final exam might be worth 20% or 30% of your total grade, while a single homework assignment might only be 2%. This is why your current grade doesn't just drop if you get a lower score on the final—it depends on the weight.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">What if I need more than 100%?</h3>
        <p>
          If our calculator shows you need more than 100% to reach your desired grade, it means your current average is too low to reach that goal mathematically, even with a perfect final score. In this case, you should:
        </p>
        <ul>
          <li><strong>Talk to your instructor:</strong> Ask about extra credit opportunities.</li>
          <li><strong>Adjust your expectations:</strong> See what score you need for the next grade down (e.g., a B+ instead of an A-).</li>
          <li><strong>Review previous work:</strong> Ensure all your grades were entered correctly in the system.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Is this calculator accurate for college courses?</p>
            <p>Yes, this tool works for any course that uses a standard weighted grading system, including high school, AP, and university-level classes.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I find my current grade?</p>
            <p>Most schools use online portals like Canvas, Blackboard, or PowerSchool. If you don't have an official average, use our <strong>Grade Calculator</strong> to find it based on your individual assignments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
