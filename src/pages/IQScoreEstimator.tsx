import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Brain, Lightbulb } from 'lucide-react';

export const IQScoreEstimator: React.FC = () => {
  const [correctAnswers, setCorrectAnswers] = useState<number>(15);
  const [totalQuestions, setTotalQuestions] = useState<number>(20);
  const [age, setAge] = useState<number>(25);
  const [iqScore, setIqScore] = useState<number>(0);
  const [category, setCategory] = useState<string>('');

  useEffect(() => {
    // Very simplified IQ estimation formula for entertainment
    const baseIQ = 100;
    const performanceRatio = correctAnswers / totalQuestions;
    const estimatedIQ = baseIQ + (performanceRatio - 0.5) * 60;
    
    // Age adjustment (very simplified)
    const finalIQ = Math.round(estimatedIQ);
    setIqScore(finalIQ);

    if (finalIQ >= 130) setCategory("Very Superior (Gifted)");
    else if (finalIQ >= 120) setCategory("Superior");
    else if (finalIQ >= 110) setCategory("High Average");
    else if (finalIQ >= 90) setCategory("Average");
    else if (finalIQ >= 80) setCategory("Low Average");
    else setCategory("Borderline");
  }, [correctAnswers, totalQuestions, age]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>IQ Score Estimator | Estimate Your Intelligence Quotient</title>
        <meta name="description" content="Free online IQ score estimator. Estimate your intelligence quotient based on your performance and age for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Brain className="w-8 h-8 text-[#0066cc]" />
          IQ Score Estimator
        </h1>
        <p className="text-slate-600">Estimate your intelligence quotient (IQ) based on your performance and age.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Correct Answers</label>
                <input 
                  type="number" 
                  value={correctAnswers} 
                  onChange={(e) => setCorrectAnswers(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
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
                <label className="input-label">Your Age</label>
                <input 
                  type="number" 
                  value={age} 
                  onChange={(e) => setAge(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              What is an IQ Score?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              An intelligence quotient (IQ) is a total score derived from several standardized tests designed to assess human intelligence.
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Average IQ:</strong> The average IQ score is 100. Most people (about 68%) score between 85 and 115.</li>
              <li><strong>Standard Deviation:</strong> IQ scores are typically measured with a standard deviation of 15 points.</li>
              <li><strong>Giftedness:</strong> A score of 130 or higher is often considered "gifted."</li>
              <li><strong>Limitations:</strong> IQ tests measure specific cognitive abilities and do not account for all forms of intelligence (like emotional or creative).</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              Estimated IQ
            </h2>
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="text-8xl font-bold mb-4 text-[#0066cc]">{iqScore}</div>
                <div className="text-sm font-medium text-slate-300 leading-relaxed italic">
                  "{category}"
                </div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Intelligence Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Remember that intelligence is multifaceted. Focus on developing your unique strengths and talents, regardless of your IQ score.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding IQ Scores in 2026</h2>
        <p>
          Our <strong>IQ score estimator</strong> is a fun and lighthearted way to estimate your intelligence quotient. By analyzing your performance on a set of questions, we can reveal your potential IQ score and its associated category.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The History of IQ Testing</h3>
        <p>
          IQ testing has a long and complex history, dating back to the early 20th century. While it has been used for various purposes, it's important to understand its limitations and potential for bias.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Components of Intelligence</h3>
        <ul>
          <li><strong>Verbal Comprehension:</strong> The ability to understand and use language.</li>
          <li><strong>Perceptual Reasoning:</strong> The ability to analyze and solve visual problems.</li>
          <li><strong>Working Memory:</strong> The ability to hold and manipulate information in your mind.</li>
          <li><strong>Processing Speed:</strong> The speed at which you can perform mental tasks.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">Is the IQ score estimator accurate?</p>
            <p>The IQ score estimator is intended for entertainment purposes only and should not be taken as a definitive measure of your intelligence.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can I improve my IQ score?</p>
            <p>While your core cognitive abilities are relatively stable, you can improve your performance on specific tasks through practice and education.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
