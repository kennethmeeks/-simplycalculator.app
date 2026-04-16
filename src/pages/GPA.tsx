import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { parseInput } from '@/src/lib/calculatorUtils';

interface Course {
  id: number;
  grade: string;
  credits: number;
}

const gradeValues: { [key: string]: number } = {
  'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'F': 0.0
};

export const GPACalculator: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, grade: 'A', credits: 3 },
    { id: 2, grade: 'B', credits: 3 },
    { id: 3, grade: 'C', credits: 3 },
  ]);

  const [gpa, setGpa] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);

  useEffect(() => {
    let totalPoints = 0;
    let creditsSum = 0;

    courses.forEach(course => {
      const credits = parseInput(course.credits.toString());
      totalPoints += (gradeValues[course.grade] || 0) * credits;
      creditsSum += credits;
    });

    setGpa(creditsSum > 0 ? totalPoints / creditsSum : 0);
    setTotalCredits(creditsSum);
  }, [courses]);

  const addCourse = () => {
    setCourses([...courses, { id: Date.now(), grade: 'A', credits: 3 }]);
  };

  const removeCourse = (id: number) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  const updateCourse = (id: number, field: keyof Course, value: any) => {
    setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>GPA Calculator | 4.0 Scale with Credits & Weighted Average</title>
        <meta name="description" content="Calculate your Grade Point Average (GPA) with our free online tool. Supports 4.0 scale, multiple courses, and credit weights for 2026 academic planning." />
      </Helmet>

      <h1>GPA Calculator</h1>
      <p>Calculate your Grade Point Average (GPA) for the semester or your entire academic career.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Courses</div>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="flex gap-2 items-end border-b border-[#eee] pb-4">
                <div className="flex-1">
                  <label className="input-label">Grade</label>
                  <select 
                    value={course.grade} 
                    onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                    className="input-field w-full"
                  >
                    {Object.keys(gradeValues).map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="input-label">Credits</label>
                  <input 
                    type="number" 
                    value={course.credits} 
                    onChange={(e) => updateCourse(course.id, 'credits', e.target.value)}
                    className="input-field w-full"
                  />
                </div>
                <button 
                  onClick={() => removeCourse(course.id)}
                  className="text-red-500 text-sm font-bold hover:underline mb-2"
                >
                  Remove
                </button>
              </div>
            ))}
            <button 
              onClick={addCourse}
              className="btn-primary w-full mt-4"
            >
              Add Course
            </button>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Total Credits:</span>
                  <span className="font-bold text-[#0066cc]">{totalCredits}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold">GPA:</span>
                  <span className="text-4xl font-bold text-[#0066cc]">{gpa.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About GPA Calculation</h2>
        <p>
          Your Grade Point Average (GPA) is a numerical representation of your academic performance. In 2026, GPA remains a critical metric for college admissions, scholarship applications, and job opportunities. Our <strong>gpa calculator 4.0 scale with credits</strong> helps you stay on top of your academic progress by providing an easy way to calculate your weighted average for the semester or your entire academic career.
        </p>
        <p>
          A high GPA is often a prerequisite for many competitive programs and honors societies. By tracking your grades regularly, you can identify areas where you need to improve and set realistic goals for your future studies.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the GPA Calculator</h3>
        <p>
          To calculate your GPA, follow these simple steps:
        </p>
        <ol>
          <li><strong>Enter Each Course:</strong> For every class you've taken, select the letter grade you received from the dropdown menu.</li>
          <li><strong>Assign Credits:</strong> Enter the number of credit hours (or units) for each course. Higher credit courses will have a greater impact on your final GPA.</li>
          <li><strong>Add More Courses:</strong> Use the "Add Course" button to include all your classes for the semester or year.</li>
          <li><strong>Review Results:</strong> The calculator will instantly display your total credits and your calculated GPA on a 4.0 scale.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The GPA Formula</h3>
        <p>
          The formula for calculating a weighted GPA is:
        </p>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-sm overflow-x-auto">
          GPA = Σ (Grade Value × Credits) / Σ Credits
        </div>
        <p className="mt-4">
          This means you multiply each grade's numerical value by its credit weight, sum those products, and then divide by the total number of credits earned.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is a 4.0 scale?</p>
            <p>The 4.0 scale is the most common grading system in the United States. An 'A' is worth 4.0 points, a 'B' is worth 3.0, and so on. Some schools use weighted scales (up to 5.0) for honors or AP classes, but the 4.0 scale remains the standard for most applications.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do credits affect my GPA?</p>
            <p>GPA is a weighted average. A 4-credit course with an 'A' will boost your GPA more than a 1-credit course with an 'A'. Conversely, a low grade in a high-credit course will have a more significant negative impact.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is a "good" GPA in 2026?</p>
            <p>A "good" GPA depends on your goals. For many competitive colleges, a 3.5 or higher is often expected. For general graduation requirements, a 2.0 is usually the minimum. Many employers also look for a GPA of 3.0 or higher for entry-level positions.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does this calculator handle plus/minus grades?</p>
            <p>Yes, our calculator includes standard values for plus and minus grades (e.g., A- = 3.7, B+ = 3.3) to provide a more precise calculation of your academic standing.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If you take three courses: <strong>Math (3 credits, A)</strong>, <strong>English (3 credits, B)</strong>, and <strong>History (3 credits, C)</strong>. Your total grade points would be (4.0*3) + (3.0*3) + (2.0*3) = 12 + 9 + 6 = 27. Dividing 27 by the total 9 credits gives you a <strong>GPA of 3.00</strong>.
        </p>
      </div>
    </div>
  );
};
