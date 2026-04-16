import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const TriangleCalculator: React.FC = () => {
  const [sideA, setSideA] = useState(3);
  const [sideB, setSideB] = useState(4);
  const [sideC, setSideC] = useState(5);
  const [angleA, setAngleA] = useState(0);
  const [angleB, setAngleB] = useState(0);
  const [angleC, setAngleC] = useState(90);
  
  const [area, setArea] = useState(0);
  const [perimeter, setPerimeter] = useState(0);
  const [semiPerimeter, setSemiPerimeter] = useState(0);
  const [heightA, setHeightA] = useState(0);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    // Basic Triangle Inequality Check
    if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
      setIsValid(true);
      const p = sideA + sideB + sideC;
      const s = p / 2;
      const a = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
      
      setPerimeter(Number(p.toFixed(4)));
      setSemiPerimeter(Number(s.toFixed(4)));
      setArea(Number(a.toFixed(4)));
      setHeightA(Number(((2 * a) / sideA).toFixed(4)));

      // Law of Cosines for angles
      const radA = Math.acos((sideB**2 + sideC**2 - sideA**2) / (2 * sideB * sideC));
      const radB = Math.acos((sideA**2 + sideC**2 - sideB**2) / (2 * sideA * sideC));
      const radC = Math.acos((sideA**2 + sideB**2 - sideC**2) / (2 * sideA * sideB));

      setAngleA(Number((radA * 180 / Math.PI).toFixed(2)));
      setAngleB(Number((radB * 180 / Math.PI).toFixed(2)));
      setAngleC(Number((radC * 180 / Math.PI).toFixed(2)));
    } else {
      setIsValid(false);
    }
  }, [sideA, sideB, sideC]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Triangle Calculator | Calculate Area, Perimeter, Angles & Heights</title>
        <meta name="description" content="Free online triangle calculator to solve for area, perimeter, angles, and heights using side lengths. Supports Heron's formula and the Law of Cosines." />
      </Helmet>

      <h1>Triangle Calculator</h1>
      <p>Enter the three side lengths of a triangle to calculate its area, perimeter, semi-perimeter, angles, and heights instantly.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Side Lengths</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Side a</label>
              <input type="number" value={sideA} onChange={(e) => setSideA(Number(e.target.value))} className="input-field" />
            </div>
            <div>
              <label className="input-label">Side b</label>
              <input type="number" value={sideB} onChange={(e) => setSideB(Number(e.target.value))} className="input-field" />
            </div>
            <div>
              <label className="input-label">Side c</label>
              <input type="number" value={sideC} onChange={(e) => setSideC(Number(e.target.value))} className="input-field" />
            </div>
            {!isValid && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded border border-red-100 italic">
                Invalid Triangle: The sum of any two sides must be greater than the third side.
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Triangle Properties</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Area</div>
                <div className="text-2xl font-bold text-[#0066cc]">{isValid ? area : '-'}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Perimeter</div>
                <div className="text-2xl font-bold text-[#0066cc]">{isValid ? perimeter : '-'}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Angle A</div>
                <div className="text-2xl font-bold text-[#0066cc]">{isValid ? angleA + '°' : '-'}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Angle B</div>
                <div className="text-2xl font-bold text-[#0066cc]">{isValid ? angleB + '°' : '-'}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Angle C</div>
                <div className="text-2xl font-bold text-[#0066cc]">{isValid ? angleC + '°' : '-'}</div>
              </div>
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Height (h_a)</div>
                <div className="text-2xl font-bold text-[#0066cc]">{isValid ? heightA : '-'}</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Comprehensive Guide to Triangle Calculation</h2>
        <p>
          Triangles are one of the most fundamental shapes in geometry, forming the basis for trigonometry and advanced engineering. Whether you are a student solving a math problem or a professional calculating structural loads, our <strong>triangle calculator</strong> provides fast and accurate results for all key triangle properties in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Triangle Formulas Explained</h3>
        <p>
          Each property of a triangle is derived from specific mathematical principles:
        </p>
        
        <h4 className="font-bold text-slate-900">Heron's Formula for Area</h4>
        <p>
          When you know the lengths of all three sides, you can calculate the area using Heron's Formula. First, find the semi-perimeter (s), which is half of the total perimeter. Then, Area = √[s(s-a)(s-b)(s-c)]. This is a powerful tool because it doesn't require knowing the height or any angles.
        </p>

        <h4 className="font-bold text-slate-900">The Law of Cosines for Angles</h4>
        <p>
          The Law of Cosines allows you to find any angle of a triangle if you know the lengths of all three sides. The formula is: c² = a² + b² - 2ab cos(C). Our calculator uses this law to determine all three internal angles automatically.
        </p>

        <h4 className="font-bold text-slate-900">Triangle Inequality Theorem</h4>
        <p>
          Not every set of three numbers can form a triangle. The Triangle Inequality Theorem states that for any triangle, the sum of the lengths of any two sides must be greater than the length of the third side. Our tool validates your inputs to ensure they form a real triangle.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Types of Triangles</h3>
        <p>
          Triangles can be classified by their sides or their angles:
        </p>
        <ul>
          <li><strong>Equilateral:</strong> All three sides are equal, and all three angles are 60°.</li>
          <li><strong>Isosceles:</strong> Two sides are equal, and the two angles opposite those sides are equal.</li>
          <li><strong>Scalene:</strong> All three sides and all three angles are different.</li>
          <li><strong>Right Triangle:</strong> One angle is exactly 90°. These triangles follow the Pythagorean Theorem (a² + b² = c²).</li>
          <li><strong>Acute Triangle:</strong> All three angles are less than 90°.</li>
          <li><strong>Obtuse Triangle:</strong> One angle is greater than 90°.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is the sum of angles in a triangle?</p>
            <p>The sum of the internal angles of any triangle in Euclidean geometry is always exactly 180°.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is a semi-perimeter?</p>
            <p>The semi-perimeter is half of the total perimeter of a triangle. It is a key component in Heron's Formula for calculating area.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I find the height of a triangle?</p>
            <p>If you know the area and the base, the height (h) can be found using the formula: h = (2 * Area) / Base. Our calculator provides the height relative to side 'a'.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          For a triangle with sides <strong>3, 4, and 5</strong>: Perimeter = 3+4+5 = <strong>12</strong>. Semi-perimeter = 12/2 = <strong>6</strong>. Area = √[6(6-3)(6-4)(6-5)] = √[6*3*2*1] = √36 = <strong>6</strong>. This is a classic right triangle with angles of 36.87°, 53.13°, and 90°. Our calculator handles these complex steps instantly, ensuring you get the right answer every time.
        </p>
      </div>
    </div>
  );
};
