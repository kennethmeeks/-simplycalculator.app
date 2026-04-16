import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const RightTriangleCalculator: React.FC = () => {
  const [sideA, setSideA] = useState<number>(3);
  const [sideB, setSideB] = useState<number>(4);
  const [hypotenuse, setHypotenuse] = useState<number>(5);
  const [area, setArea] = useState<number>(0);
  const [perimeter, setPerimeter] = useState<number>(0);

  useEffect(() => {
    const hyp = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    setHypotenuse(hyp);
    setArea(0.5 * sideA * sideB);
    setPerimeter(sideA + sideB + hyp);
  }, [sideA, sideB]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Right Triangle Calculator | Geometry Tool 2026</title>
        <meta name="description" content="Calculate the area, perimeter, and hypotenuse of a right triangle. Find the geometric properties of your triangle easily." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Right Triangle Calculator</h1>
        <p className="text-slate-600">Calculate the area, perimeter, and hypotenuse of a right triangle.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Triangle Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Side A (a)</label>
              <input
                type="number"
                value={sideA}
                onChange={(e) => setSideA(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Side B (b)</label>
              <input
                type="number"
                value={sideB}
                onChange={(e) => setSideB(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Hypotenuse (c)</p>
              <p className="text-2xl font-bold text-[#0066cc]">{hypotenuse.toFixed(4)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Area (A)</p>
              <p className="text-2xl font-bold text-slate-900">{area.toFixed(4)}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Perimeter (P)</p>
              <p className="text-2xl font-bold text-slate-900">{perimeter.toFixed(4)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a Right Triangle?</h2>
        <p>
          A right triangle is a triangle in which one angle is a right angle (90 degrees). The side opposite the right angle is called the hypotenuse, and the other two sides are called the legs.
        </p>
        <h3>The Formulas</h3>
        <ul>
          <li><strong>Hypotenuse:</strong> c = √(a² + b²)</li>
          <li><strong>Area:</strong> A = 0.5 * a * b</li>
          <li><strong>Perimeter:</strong> P = a + b + c</li>
        </ul>
        <h3>Why Right Triangles Matter</h3>
        <p>
          Right triangles are a fundamental concept in geometry and are used in a wide range of fields, including engineering, physics, and architecture. They provide a simple and effective way to model and communicate the relationship between points in a plane.
        </p>
      </div>
    </div>
  );
};
