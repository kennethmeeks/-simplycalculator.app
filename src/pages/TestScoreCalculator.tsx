import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { CheckCircle2, XCircle, Percent } from 'lucide-react';

export const TestScoreCalculator: React.FC = () => {
  const [totalQuestions, setTotalQuestions] = useState<number>(50);
  const [wrongAnswers, setWrongAnswers] = useState<number>(5);
  const [score, setScore] = useState<number>(0);
  const [letterGrade, setLetterGrade] = useState<string>('');

  useEffect(() => {
    if (totalQuestions > 0) {
      const right = totalQuestions - wrongAnswers;
      const percentage = (right / totalQuestions) * 100;
      setScore(Number(percentage.toFixed(2)));

      if (percentage >= 90) setLetterGrade('A');
      else if (percentage >= 80) setLetterGrade('B');
      else if (percentage >= 70) setLetterGrade('C');
      else if (percentage >= 60) setLetterGrade('D');
      else setLetterGrade('F');
    }
  }, [totalQuestions, wrongAnswers]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Test Score Calculator | Calculate Grades & Percentages</title>
        <meta name="description" content="Free online test score calculator. Quickly find your grade percentage and letter grade based on total questions and number of wrong answers." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Test Score Calculator</h1>
        <p className="text-slate-600">Quickly calculate your test grade by entering the total number of questions and how many you got wrong.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Total Questions</label>
                <input 
                  type="number" 
                  value={totalQuestions} 
                  onChange={(e) => setTotalQuestions(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Number Wrong</label>
                <input 
                  type="number" 
                  value={wrongAnswers} 
                  onChange={(e) => setWrongAnswers(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="calculator-container">
            <h2 className="section-title">Score Breakdown</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 border border-green-100 rounded">
                <div className="flex items-center gap-2 text-green-700 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Correct Answers
                </div>
                <span className="font-bold text-green-700">{totalQuestions - wrongAnswers}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 border border-red-100 rounded">
                <div className="flex items-center gap-2 text-red-700 font-medium">
                  <XCircle className="w-4 h-4" />
                  Incorrect Answers
                </div>
                <span className="font-bold text-red-700">{wrongAnswers}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Percent className="w-5 h-5" />
              Your Grade
            </h2>
            <div className="text-center py-8">
              <div className="text-6xl font-bold mb-2">{score}%</div>
              <div className="text-2xl font-medium text-slate-400">Letter Grade: {letterGrade}</div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded p-4">
            <h3 className="font-bold text-blue-900 mb-2">Grading Scale</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>90-100%: A</li>
              <li>80-89%: B</li>
              <li>70-79%: C</li>
              <li>60-69%: D</li>
              <li>Below 60%: F</li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How to Use the Test Score Calculator</h2>
        <p>
          Our <strong>test score calculator</strong> is designed to make grading simple for teachers and students alike. Whether you're checking your own performance or grading a stack of papers, this tool provides instant results.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Formula</h3>
        <p>
          The calculation is straightforward:
        </p>
        <div className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 my-4">
          Grade = ((Total Questions - Number Wrong) / Total Questions) * 100
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Digital Grader?</h3>
        <p>
          Manual grading can lead to errors, especially when dealing with unusual numbers of questions (like a 37-question quiz). Using a digital tool ensures:
        </p>
        <ul>
          <li><strong>Accuracy:</strong> No more math mistakes on the fly.</li>
          <li><strong>Speed:</strong> Get results instantly as you type.</li>
          <li><strong>Consistency:</strong> Apply the same grading scale to every student.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Can I use this for weighted grades?</p>
            <p>This tool is for single tests. For overall course grades that include weighted categories like homework and finals, use our <strong>Grade Calculator</strong>.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does this support half-points?</p>
            <p>Yes, you can enter decimals in the "Number Wrong" field if your instructor gives partial credit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
