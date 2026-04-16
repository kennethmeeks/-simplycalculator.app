import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Percent } from 'lucide-react';

export const ProbabilityCalculator: React.FC = () => {
  const [favorableOutcomes, setFavorableOutcomes] = useState<number>(1);
  const [totalOutcomes, setTotalOutcomes] = useState<number>(6);
  const [probability, setProbability] = useState<number>(0);

  useEffect(() => {
    if (totalOutcomes > 0) {
      setProbability((favorableOutcomes / totalOutcomes) * 100);
    } else {
      setProbability(0);
    }
  }, [favorableOutcomes, totalOutcomes]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Probability Calculator | Calculate the Likelihood of Events</title>
        <meta name="description" content="Free online probability calculator. Calculate the likelihood of an event occurring based on favorable and total outcomes for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Percent className="w-8 h-8 text-[#0066cc]" />
          Probability Calculator
        </h1>
        <p className="text-slate-600">Calculate the likelihood of an event occurring based on favorable and total outcomes.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Number of Favorable Outcomes</label>
                <input 
                  type="number" 
                  value={favorableOutcomes} 
                  onChange={(e) => setFavorableOutcomes(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Total Number of Possible Outcomes</label>
                <input 
                  type="number" 
                  value={totalOutcomes} 
                  onChange={(e) => setTotalOutcomes(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              What is Probability?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              Probability is the branch of mathematics that deals with the likelihood of an event occurring. It is expressed as a number between 0 and 1 (or 0% and 100%).
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Favorable Outcomes:</strong> The number of ways the event you're interested in can happen.</li>
              <li><strong>Total Outcomes:</strong> The total number of possible results.</li>
              <li><strong>Probability Formula:</strong> P(E) = (Favorable Outcomes) / (Total Outcomes)</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Probability
            </h2>
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="text-8xl font-bold mb-4 text-[#0066cc]">{probability.toFixed(2)}%</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Likelihood of Event</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Math Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Probability can be expressed as a fraction, decimal, or percentage. For example, a 1 in 6 chance is 1/6, 0.1667, or 16.67%.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Probability in 2026</h2>
        <p>
          Our <strong>probability calculator</strong> is a simple and efficient tool for calculating the likelihood of an event occurring. By entering the favorable and total outcomes, we can reveal the probability as a percentage.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Importance of Probability</h3>
        <p>
          Probability is essential for making informed decisions in various fields, including science, finance, and daily life. It's used in everything from weather forecasting to insurance underwriting.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Components of Probability</h3>
        <ul>
          <li><strong>Event:</strong> The specific result you're interested in.</li>
          <li><strong>Sample Space:</strong> The set of all possible outcomes.</li>
          <li><strong>Complement:</strong> The probability of the event NOT occurring (1 - P(E)).</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">What is the probability of rolling a 6 on a standard die?</p>
            <p>There is 1 favorable outcome (rolling a 6) and 6 total possible outcomes. The probability is 1/6, or approximately 16.67%.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can probability be greater than 100%?</p>
            <p>No, probability is always between 0 and 1 (or 0% and 100%). A probability of 0 means the event is impossible, and a probability of 1 means the event is certain.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
