import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const IdealWeightCalculator: React.FC = () => {
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState('male');
  
  // Base values in metric
  const [heightCm, setHeightCm] = useState(175);
  
  // Imperial display values
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(9);

  const [idealWeight, setIdealWeight] = useState(0);

  // Sync metric to imperial
  useEffect(() => {
    if (unitSystem === 'metric') {
      const totalInches = heightCm * 0.393701;
      setHeightFt(Math.floor(totalInches / 12));
      setHeightIn(Math.round(totalInches % 12));
    }
  }, [heightCm, unitSystem]);

  // Sync imperial to metric
  useEffect(() => {
    if (unitSystem === 'imperial') {
      const totalCm = (heightFt * 30.48) + (heightIn * 2.54);
      setHeightCm(Math.round(totalCm));
    }
  }, [heightFt, heightIn, unitSystem]);

  useEffect(() => {
    // Devine Formula (1974)
    // Male: 50.0 kg + 2.3 kg per inch over 5 feet
    // Female: 45.5 kg + 2.3 kg per inch over 5 feet
    const heightInInches = heightCm * 0.393701;
    const inchesOverFiveFeet = Math.max(0, heightInInches - 60);
    
    let weight = 0;
    if (gender === 'male') {
      weight = 50 + (2.3 * inchesOverFiveFeet);
    } else {
      weight = 45.5 + (2.3 * inchesOverFiveFeet);
    }
    setIdealWeight(weight);
  }, [gender, heightCm]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Ideal Weight — Is Your Body at Its Target Weight? Free</title>
        <meta name="description" content="Stop guessing. Find your medically ideal body weight based on your height and gender with our free 2026 calculator." />
      </Helmet>

      <h1>Ideal Weight Calculator: What Is Your Heart's Perfect Weight?</h1>
      <p>Being just 10 lbs over your ideal weight puts extra stress on your joints and heart; find your target number in 3 seconds.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
          
          <div className="flex gap-4 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={unitSystem === 'metric'}
                onChange={() => setUnitSystem('metric')}
              />
              <span className="text-sm font-bold">Metric Units</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={unitSystem === 'imperial'}
                onChange={() => setUnitSystem('imperial')}
              />
              <span className="text-sm font-bold">US Units</span>
            </label>
          </div>

          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Gender</label>
              <select 
                value={gender} 
                onChange={(e) => setGender(e.target.value)} 
                className="input-field w-full"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {unitSystem === 'metric' ? (
              <div className="input-group">
                <label className="input-label">Height (cm)</label>
                <input 
                  type="number" 
                  value={heightCm} 
                  onChange={(e) => setHeightCm(Number(e.target.value))} 
                  className="input-field w-full" 
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <div className="input-group">
                  <label className="input-label">Height (ft)</label>
                  <input 
                    type="number" 
                    value={heightFt} 
                    onChange={(e) => setHeightFt(Number(e.target.value))} 
                    className="input-field w-full" 
                  />
                </div>
                <div className="input-group">
                  <label className="input-label">Height (in)</label>
                  <input 
                    type="number" 
                    value={heightIn} 
                    onChange={(e) => setHeightIn(Number(e.target.value))} 
                    className="input-field w-full" 
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="text-center mb-4">
                <div className="text-[#666] text-xs uppercase font-bold mb-1">Estimated Ideal Weight</div>
                <div className="text-4xl font-bold text-[#0066cc]">
                  {unitSystem === 'metric' 
                    ? `${idealWeight.toFixed(1)} kg` 
                    : `${(idealWeight * 2.20462).toFixed(1)} lbs`}
                </div>
                <div className="text-[#666] text-sm mt-2">Based on Devine Formula</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Ideal Weight Calculator" 
        path="/ideal-weight" 
        description="Estimate your ideal body weight based on height and gender using the clinical Devine formula. Set realistic health goals for 2026."
      />
    </div>
  );
};
