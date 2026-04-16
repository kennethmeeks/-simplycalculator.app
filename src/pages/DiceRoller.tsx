import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const DiceRoller: React.FC = () => {
  const [numDice, setNumDice] = useState<number>(1);
  const [numSides, setNumSides] = useState<number>(6);
  const [results, setResults] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);

  const rollDice = () => {
    const res = [];
    let sum = 0;
    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * numSides) + 1;
      res.push(roll);
      sum += roll;
    }
    setResults(res);
    setTotal(sum);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Dice Roller | Random Number Generator 2026</title>
        <meta name="description" content="Roll virtual dice for your games and activities. Find the random outcome of your dice rolls easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Dice Roller</h1>
        <p className="text-slate-600">Roll virtual dice for your games and activities.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Dice Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Number of Dice</label>
              <input
                type="number"
                value={numDice}
                onChange={(e) => setNumDice(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Number of Sides</label>
              <input
                type="number"
                value={numSides}
                onChange={(e) => setNumSides(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <button
              onClick={rollDice}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-semibold hover:bg-[#0052a3] transition-colors"
            >
              Roll Dice
            </button>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Total Sum</p>
              <p className="text-4xl font-bold text-[#0066cc]">{total}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Individual Rolls</p>
              <div className="flex flex-wrap gap-2">
                {results.map((r, i) => (
                  <span key={i} className="bg-white border border-slate-200 px-3 py-1 rounded-lg font-mono text-lg">{r}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a Dice Roller?</h2>
        <p>
          A dice roller is a tool for generating random numbers for games and activities. It's a useful tool for quantifying the uncertainty of an estimate and identifying the range of values for a data set.
        </p>
        <h3>How to Use a Dice Roller</h3>
        <p>
          To use a dice roller, you simply enter the number of dice and the number of sides for each die. The calculator will then perform the calculation and display the random outcome of your dice rolls.
        </p>
        <h3>Why Dice Rollers Matter</h3>
        <p>
          Dice rollers are critical for analyzing and interpreting data in a wide range of fields, including gaming, science, and education. They provide a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
