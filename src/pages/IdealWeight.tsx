import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


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
        <title>Ideal Weight Calculator | Height & Gender Based Formula</title>
        <meta name="description" content="Calculate your ideal body weight based on your height and gender with our free online tool. Uses the Devine formula for accurate 2026 health estimates." />
      </Helmet>

      <h1>Ideal Weight Calculator</h1>
      <p>Estimate your ideal body weight based on your height and gender using the standard Devine formula.</p>

      

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

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About Ideal Body Weight</h2>
        <p>
          Ideal body weight (IBW) is an estimate of what a person should weigh based on their height and gender. In 2026, health professionals continue to use these estimates as a starting point for discussions about health and fitness. Our <strong>ideal weight calculator based on height and gender</strong> uses the widely recognized Devine formula to provide you with a reliable estimate for your fitness journey.
        </p>
        <p>
          While "ideal weight" is a useful benchmark, it's important to remember that it is just one piece of the puzzle. Factors like muscle mass, bone density, and overall body composition play a significant role in determining what a healthy weight is for any individual.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Ideal Weight Calculator</h3>
        <p>
          To get your personalized ideal weight estimate, please provide the following details:
        </p>
        <ol>
          <li><strong>Select Gender:</strong> Choose between male and female, as the formulas differ for each to account for biological differences in body composition.</li>
          <li><strong>Enter Height:</strong> Provide your height in either centimeters or feet and inches. Accuracy is important for the most reliable result.</li>
          <li><strong>View Results:</strong> The calculator will instantly show your estimated ideal weight in your preferred unit system (kilograms or pounds).</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Devine Formula Explained</h3>
        <p>
          The Devine formula is the most common method for calculating ideal body weight. It was originally developed in 1974 by Dr. Ben J. Devine to help determine the correct dosage of certain medications.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>For Men:</strong> 50.0 kg + 2.3 kg for every inch over 5 feet.</li>
          <li><strong>For Women:</strong> 45.5 kg + 2.3 kg for every inch over 5 feet.</li>
        </ul>
        <p className="mt-4">
          While other formulas like Robinson, Miller, and Hamwi exist, the Devine formula remains the clinical standard for most medical applications in 2026.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Is this the same as BMI?</p>
            <p>No. BMI (Body Mass Index) is a ratio of weight to height used to categorize weight status (e.g., underweight, normal, overweight). Ideal weight is a specific target weight based solely on height and gender, regardless of your current weight.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Is this accurate for everyone?</p>
            <p>No. These formulas do not account for muscle mass, bone density, or body composition. For example, a highly muscular athlete may weigh much more than their "ideal" weight but still be in excellent health. Similarly, it may not be accurate for very tall or very short individuals.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What should I do if I'm over my ideal weight?</p>
            <p>Don't panic! The ideal weight is a statistical average, not a strict requirement. Consult with a healthcare professional or a registered dietitian to determine a healthy weight range and lifestyle plan that works for you.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does age affect ideal weight?</p>
            <p>The standard Devine formula does not include age as a variable. However, as we age, our body composition naturally changes, and a slightly higher weight may be acceptable or even beneficial for some older adults.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          A <strong>male</strong> who is <strong>180 cm tall</strong> (approx. 5'11") has an estimated ideal weight of <strong>75.0 kg</strong> (approx. 165.3 lbs). A <strong>female</strong> of the same height has an estimated ideal weight of <strong>70.5 kg</strong> (approx. 155.4 lbs).
        </p>
      </div>
    </div>
  );
};
