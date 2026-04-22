import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const BodyTypeCalculator: React.FC = () => {
  const [bust, setBust] = useState<number>(90);
  const [waist, setWaist] = useState<number>(70);
  const [hips, setHips] = useState<number>(95);
  const [bodyType, setBodyType] = useState<string>('');

  useEffect(() => {
    // Simple logic for body type classification
    if (bust / hips >= 1.05 && bust / waist >= 1.25) {
      setBodyType('Inverted Triangle');
    } else if (hips / bust >= 1.05 && hips / waist >= 1.25) {
      setBodyType('Pear (Triangle)');
    } else if (Math.abs(bust - hips) <= bust * 0.05 && bust / waist >= 1.25) {
      setBodyType('Hourglass');
    } else if (Math.abs(bust - hips) <= bust * 0.05 && bust / waist < 1.25) {
      setBodyType('Rectangle');
    } else {
      setBodyType('Apple (Round)');
    }
  }, [bust, waist, hips]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Body Type Calculator | Find Your Body Shape 2026</title>
        <meta name="description" content="Calculate your body type based on your bust, waist, and hip measurements. Discover your body shape for better fashion and fitness choices." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Body Type Calculator</h1>
        <p className="text-slate-600">Find your body shape based on your measurements.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Your Measurements (cm)</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Bust</label>
              <input
                type="number"
                value={bust}
                onChange={(e) => setBust(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Waist</label>
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Hips</label>
              <input
                type="number"
                value={hips}
                onChange={(e) => setHips(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Your Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Your Body Type</p>
              <p className="text-4xl font-bold text-[#0066cc]">{bodyType}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This is a general classification based on measurements. Every body is unique and beautiful.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Different Body Types</h2>
        <p>
          Your body type is a classification based on your proportions and measurements. Understanding your body type can help you make better fashion choices and tailor your fitness routine to your specific needs. Our <strong>body type calculator 2026</strong> uses the ratios between your bust, waist, and hips to categorize your shape.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Common Body Types</h3>
        <ul className="space-y-4">
          <li><strong>Hourglass:</strong> Your bust and hips are nearly equal in size, and your waist is well-defined (at least 25% smaller than the rest).</li>
          <li><strong>Rectangle (Straight):</strong> Your bust, waist, and hips are all within a few inches of each other. You have a more athletic, "straight" silhouette.</li>
          <li><strong>Inverted Triangle:</strong> Your bust and shoulders are significantly wider than your hips. </li>
          <li><strong>Pear (Triangle):</strong> Your hips are wider than your bust and shoulders.</li>
          <li><strong>Apple (Round):</strong> Your bust and waist are fuller, often with narrower hips and slim legs.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Can my body type change?</p>
            <p>Yes. While your basic skeletal structure remains the same, changes in weight, muscle tone, and hormonal shifts (like during pregnancy or menopause) can lead to a shift in your body shape classification.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Is one body type "healthier" than others?</p>
            <p>Not necessarily. Health is determined by many factors including cardiovascular fitness and body fat percentage. However, "apple" shapes (carrying more weight around the midsection) are sometimes linked to a higher risk of heart disease.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I measure correctly?</p>
            <p>Use a flexible measuring tape. Keep it parallel to the floor. Measure the fullest part of your bust and hips, and the narrowest part of your waist (just above the belly button).</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Tips for Body Confidence</h3>
        <p>
          Regardless of your classification, every body is unique. Fashion is a tool to help you feel confident. For example, "A-line" skirts are often recommended for pear shapes, while belted dresses can highlight the waist of an hourglass or rectangle shape. The most important "fit" is how you feel in your own skin.
        </p>
      </div>
    </div>
  );
};
