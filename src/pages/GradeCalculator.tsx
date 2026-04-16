import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { GraduationCap, Plus, Trash2 } from 'lucide-react';

interface Assignment {
  id: string;
  name: string;
  grade: number;
  weight: number;
}

export const GradeCalculator: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([
    { id: '1', name: 'Homework', grade: 90, weight: 20 },
    { id: '2', name: 'Midterm', grade: 85, weight: 30 },
  ]);
  const [currentGrade, setCurrentGrade] = useState(0);
  const [desiredGrade, setDesiredGrade] = useState(90);
  const [finalWeight, setFinalWeight] = useState(25);
  const [neededOnFinal, setNeededOnFinal] = useState(0);

  const addAssignment = () => {
    setAssignments([...assignments, { 
      id: Math.random().toString(36).substr(2, 9), 
      name: `Assignment ${assignments.length + 1}`, 
      grade: 0, 
      weight: 0 
    }]);
  };

  const removeAssignment = (id: string) => {
    if (assignments.length > 1) {
      setAssignments(assignments.filter(a => a.id !== id));
    }
  };

  const updateAssignment = (id: string, field: keyof Assignment, value: any) => {
    setAssignments(assignments.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  useEffect(() => {
    let totalWeight = 0;
    let weightedSum = 0;
    
    assignments.forEach(a => {
      weightedSum += (a.grade * a.weight);
      totalWeight += a.weight;
    });

    const current = totalWeight > 0 ? weightedSum / totalWeight : 0;
    setCurrentGrade(Number(current.toFixed(2)));

    // Final Grade Calculation: Desired = (Current * (100 - FinalWeight) + Final * FinalWeight) / 100
    // Final = (Desired * 100 - Current * (100 - FinalWeight)) / FinalWeight
    if (finalWeight > 0) {
      const needed = (desiredGrade * 100 - current * (100 - finalWeight)) / finalWeight;
      setNeededOnFinal(Number(needed.toFixed(2)));
    }
  }, [assignments, desiredGrade, finalWeight]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Grade Calculator | Calculate Current Grade & Final Exam Score</title>
        <meta name="description" content="Free online grade calculator to find your current class grade and what you need on your final exam to reach your goal. Supports weighted categories." />
      </Helmet>

      <h1>Grade Calculator</h1>
      <p>Calculate your current weighted grade and determine exactly what score you need on your final exam to achieve your desired final grade.</p>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="section-title flex justify-between items-center">
              <span>Current Assignments / Categories</span>
              <button 
                onClick={addAssignment}
                className="text-xs bg-[#0066cc] text-white px-3 py-1 rounded hover:bg-[#0052a3] flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> Add Item
              </button>
            </div>
            
            <div className="space-y-3">
              {assignments.map((a) => (
                <div key={a.id} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded group">
                  <input 
                    type="text" 
                    value={a.name} 
                    onChange={(e) => updateAssignment(a.id, 'name', e.target.value)}
                    className="flex-1 text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                    placeholder="Name"
                  />
                  <div className="w-24">
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">Grade (%)</label>
                    <input 
                      type="number" 
                      value={a.grade} 
                      onChange={(e) => updateAssignment(a.id, 'grade', Number(e.target.value))}
                      className="w-full text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                    />
                  </div>
                  <div className="w-24">
                    <label className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">Weight (%)</label>
                    <input 
                      type="number" 
                      value={a.weight} 
                      onChange={(e) => updateAssignment(a.id, 'weight', Number(e.target.value))}
                      className="w-full text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                    />
                  </div>
                  <button 
                    onClick={() => removeAssignment(a.id)}
                    className="text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="calculator-container">
            <div className="section-title">Final Exam Goal</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Desired Final Grade (%)</label>
                <input 
                  type="number" 
                  value={desiredGrade} 
                  onChange={(e) => setDesiredGrade(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
              <div>
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
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Academic Results</div>
            <div className="space-y-6">
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Current Grade</div>
                <div className="text-3xl font-bold text-[#0066cc]">{currentGrade}%</div>
              </div>

              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Needed on Final</div>
                <div className="text-3xl font-bold text-[#0066cc]">
                  {neededOnFinal > 100 ? (
                    <span className="text-red-500">{neededOnFinal}%</span>
                  ) : (
                    <span>{neededOnFinal}%</span>
                  )}
                </div>
                {neededOnFinal > 100 && (
                  <p className="text-[10px] text-red-500 mt-2 italic">Note: You need over 100% to reach this goal.</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-[#e7f3ff] border border-[#0066cc]/20 rounded p-4 text-sm text-[#004d99]">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Study Tip
            </h4>
            <p>Focus your study time on the subjects with the highest weights. A small improvement in a heavily weighted category can significantly boost your final grade.</p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Mastering Your Academic Success with a Grade Calculator</h2>
        <p>
          Understanding where you stand in a course is essential for academic success. Whether you are a high school student or in university, our <strong>grade calculator</strong> helps you take the guesswork out of your final results. By inputting your current assignments and their weights, you can see exactly what you need to achieve on your final exam to reach your target grade in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How Weighted Grades Work</h3>
        <p>
          Most modern courses use a weighted grading system. This means that different types of assignments contribute differently to your final grade. For example:
        </p>
        <ul>
          <li><strong>Homework:</strong> 20%</li>
          <li><strong>Quizzes:</strong> 15%</li>
          <li><strong>Midterm Exam:</strong> 25%</li>
          <li><strong>Final Project:</strong> 15%</li>
          <li><strong>Final Exam:</strong> 25%</li>
        </ul>
        <p>
          In this system, a 90% on your midterm is worth much more than a 90% on a single homework assignment. Our calculator handles this math by multiplying each grade by its weight and summing the results.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Calculating Your Needed Final Exam Score</h3>
        <p>
          The most common question students ask is: "What do I need on the final to get an A?" The formula used by our tool is:
        </p>
        <div className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 my-4">
          Needed Score = [Desired Grade - (Current Grade * (100% - Final Weight))] / Final Weight
        </div>
        <p>
          This calculation tells you the minimum percentage you must earn on your final exam to reach your overall goal for the course.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What if my weights don't add up to 100%?</p>
            <p>Our calculator will still find your current average based on the weights you've provided. However, for a final grade calculation to be accurate, the total weight of all assignments plus the final exam should equal 100%.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can I calculate my GPA here?</p>
            <p>This tool is for individual course grades. To calculate your overall Grade Point Average across multiple classes, please use our dedicated <strong>GPA Calculator</strong>.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What does it mean if I need over 100% on the final?</p>
            <p>If the calculator shows you need more than 100%, it means that even with a perfect score on the final exam, your desired grade is mathematically impossible based on your current performance. You may need to adjust your goal or talk to your instructor about extra credit.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Tips for Improving Your Grade</h3>
        <p>
          If your current grade isn't where you want it to be, don't panic. Use the results from this calculator to prioritize your study time. Focus on upcoming assignments with high weights, and consider asking for feedback on previous work to understand where you can improve. Consistent effort and strategic planning are the keys to academic excellence.
        </p>
      </div>
    </div>
  );
};
