import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const GolfHandicapCalculator: React.FC = () => {
  const [score, setScore] = useState<number>(85);
  const [rating, setRating] = useState<number>(72.0);
  const [slope, setSlope] = useState<number>(113);
  const [handicap, setHandicap] = useState<number>(0);

  useEffect(() => {
    setHandicap((score - rating) * 113 / slope);
  }, [score, rating, slope]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Golf Handicap Calculator | Score Index Tool 2026</title>
        <meta name="description" content="Calculate your golf handicap index based on your score, course rating, and slope rating. Find your skill level on the golf course easily." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Golf Handicap Calculator</h1>
        <p className="text-slate-600">Calculate your golf handicap index based on your performance.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Round Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Score</label>
              <input
                type="number"
                value={score}
                onChange={(e) => setScore(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Course Rating</label>
              <input
                type="number"
                step="0.1"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Slope Rating</label>
              <input
                type="number"
                value={slope}
                onChange={(e) => setSlope(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Handicap Differential</p>
              <p className="text-4xl font-bold text-[#0066cc]">{handicap.toFixed(1)}</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation uses the standard formula for a single round's handicap differential.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a Golf Handicap?</h2>
        <p>
          A golf handicap is a measure of a golfer's skill level on the golf course. It's a useful tool for quantifying the uncertainty of an estimate and identifying the range of values for a data set.
        </p>
        <h3>The Formula</h3>
        <p>
          The formula for a handicap differential is: (Score - Course Rating) * 113 / Slope Rating.
        </p>
        <h3>Why Golf Handicaps Matter</h3>
        <p>
          Golf handicaps are critical for analyzing and interpreting data in a wide range of fields, including sports, science, and education. They provide a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
