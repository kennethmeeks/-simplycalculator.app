import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';

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

      <CalculatorSEO 
        name="Grade Calculator" 
        path="/grade" 
        description="Calculate your current class grade and determine what you need on your final exam. Track weighted assignments and reach your academic goals in 2026."
      />
    </div>
  );
};
