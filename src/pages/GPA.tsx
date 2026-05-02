import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';
import { parseInput } from '../lib/calculatorUtils';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
  const resultsRef = React.useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!resultsRef.current) return;
    try {
      const element = resultsRef.current;
      const canvas = await html2canvas(element, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.setFillColor(0, 102, 204);
      pdf.rect(0, 0, pdfWidth, 40, 'F');
      
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      pdf.text('SIMPLYCALCULATOR.APP', 15, 25);
      
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.text('PROFESSIONAL ACADEMIC REPORT // 2026', 15, 33);
      
      pdf.setTextColor(50, 50, 50);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('GPA PERFORMANCE ANALYSIS', 15, 55);
      
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(150, 150, 150);
      pdf.text(`TIMESTAMP: ${new Date().toLocaleString()}`, 15, 62);
      
      pdf.setDrawColor(230, 230, 230);
      pdf.line(15, 75, pdfWidth - 15, 75);
      
      const imgProps = pdf.getImageProperties(imgData);
      const displayWidth = pdfWidth - 30;
      const displayHeight = (imgProps.height * displayWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 15, 85, displayWidth, displayHeight);
      
      const footerY = Math.max(85 + displayHeight + 20, pdfHeight - 30);
      pdf.setFontSize(8);
      pdf.setTextColor(180, 180, 180);
      pdf.text('DISCLAIMER: This report is an estimate based on academic grading standards.', 15, footerY);
      
      pdf.setTextColor(0, 102, 204);
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'bold');
      pdf.text('WWW.SIMPLYCALCULATOR.APP', pdfWidth / 2, pdfHeight - 10, { align: 'center' });
      
      pdf.save('GPA_Report.pdf');
    } catch (error) {
      console.error('PDF Export failed:', error);
    }
  };

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
        <title>GPA Calculator [Free & No Sign-up]</title>
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
          <div className="calculator-container" id="result-panel" ref={resultsRef}>
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
          
          <ResultActions 
            onReset={() => {
              setCourses([
                { id: 1, grade: 'A', credits: 3 },
                { id: 2, grade: 'B', credits: 3 },
                { id: 3, grade: 'C', credits: 3 },
              ]);
            }}
            onDownloadPDF={handleDownloadPDF}
            onCopy={() => {
              const text = `GPA Results:\nGPA: ${gpa.toFixed(2)}\nTotal Credits: ${totalCredits}\nCalculated at simplycalculator.app`;
              navigator.clipboard.writeText(text);
            }}
          />
        </div>
      </div>

      <CalculatorSEO 
        name="GPA Calculator" 
        path="/gpa" 
        description="Calculate your Grade Point Average (GPA) with our free 4.0 scale tool. Supports multiple courses and credit weights for 2026 academic tracking."
      />
    </div>
  );
};
