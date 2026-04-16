import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Dog, Heart } from 'lucide-react';

export const DogAgeCalculator: React.FC = () => {
  const [dogAge, setDogAge] = useState<number>(3);
  const [dogSize, setDogSize] = useState<string>('medium');
  const [humanAge, setHumanAge] = useState<number>(0);

  useEffect(() => {
    let age = 0;
    if (dogAge === 1) {
      age = 15;
    } else if (dogAge === 2) {
      age = 24;
    } else {
      const baseAge = 24;
      const extraYears = dogAge - 2;
      
      if (dogSize === 'small') {
        age = baseAge + (extraYears * 4);
      } else if (dogSize === 'medium') {
        age = baseAge + (extraYears * 5);
      } else if (dogSize === 'large') {
        age = baseAge + (extraYears * 6);
      } else {
        age = baseAge + (extraYears * 7);
      }
    }
    setHumanAge(age);
  }, [dogAge, dogSize]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Dog Age Calculator | Convert Dog Years to Human Years</title>
        <meta name="description" content="Free online dog age calculator. Convert your dog's age to human years based on their size and breed for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Dog className="w-8 h-8 text-[#0066cc]" />
          Dog Age Calculator
        </h1>
        <p className="text-slate-600">Find out how old your dog is in human years based on their size and actual age.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Dog's Age (Years)</label>
                <input 
                  type="number" 
                  value={dogAge} 
                  onChange={(e) => setDogAge(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Dog Size</label>
                <select 
                  value={dogSize} 
                  onChange={(e) => setDogSize(e.target.value)}
                  className="input-field"
                >
                  <option value="small">Small (under 20 lbs)</option>
                  <option value="medium">Medium (21-50 lbs)</option>
                  <option value="large">Large (51-90 lbs)</option>
                  <option value="giant">Giant (over 90 lbs)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              How Dog Aging Works
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              The old "7 human years for every dog year" rule is a myth. Dogs age much faster during their first two years, and their size significantly impacts their lifespan and aging process.
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Small Dogs:</strong> Tend to live longer and age more slowly after the first few years.</li>
              <li><strong>Large Dogs:</strong> Age more rapidly and generally have shorter lifespans.</li>
              <li><strong>First Year:</strong> Equivalent to about 15 human years for most dogs.</li>
              <li><strong>Second Year:</strong> Adds about 9 more human years.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400" />
              Human Age Equivalent
            </h2>
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className="text-6xl font-bold mb-2 text-[#0066cc]">{humanAge}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Human Years Old</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              Pet Care Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Regular vet checkups become even more important as your dog enters their "senior" years (typically around 7-10 human years depending on size).
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Your Dog's Age in 2026</h2>
        <p>
          Our <strong>dog age calculator</strong> uses the latest veterinary research to provide a more accurate estimation of your pet's age in human terms. Unlike the outdated "multiply by 7" rule, we account for the rapid development in early years and the impact of body size on the aging process.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Science of Dog Aging</h3>
        <p>
          Recent studies on DNA methylation have shown that dogs age very quickly when they are young and then slow down. A one-year-old dog is physically and mentally more like a 15-year-old human than a 7-year-old.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Aging by Size Category</h3>
        <ul>
          <li><strong>Small Breeds (e.g., Chihuahua, Terrier):</strong> These dogs often live 15-20 years and age the slowest.</li>
          <li><strong>Medium Breeds (e.g., Beagle, Bulldog):</strong> Typically live 12-15 years and follow a standard aging curve.</li>
          <li><strong>Large Breeds (e.g., Golden Retriever, Lab):</strong> Often live 10-12 years and age faster after age 5.</li>
          <li><strong>Giant Breeds (e.g., Great Dane, Mastiff):</strong> May only live 7-10 years and are considered seniors by age 5 or 6.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">Why do small dogs live longer than large dogs?</p>
            <p>While the exact reason is still being studied, large dogs grow faster and their bodies may experience more oxidative stress, leading to a faster aging process at the cellular level.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">When is a dog considered a senior?</p>
            <p>Generally, a dog is considered a senior when they reach the last 25% of their expected lifespan. For a Great Dane, this might be age 6, while for a Toy Poodle, it could be age 12.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
