import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Car, User, Shield, AlertTriangle } from 'lucide-react';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';

export const CarInsuranceCalculator: React.FC = () => {
  const [age, setAge] = useState<number>(30);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [location, setLocation] = useState<'urban' | 'suburban' | 'rural'>('suburban');
  const [vehicleValue, setVehicleValue] = useState<number>(25000);
  const [annualMileage, setAnnualMileage] = useState<number>(12000);
  const [drivingRecord, setDrivingRecord] = useState<'clean' | 'minor' | 'major'>('clean');
  const [coverageLevel, setCoverageLevel] = useState<'basic' | 'standard' | 'premium'>('standard');

  const [estimatedPremium, setEstimatedPremium] = useState<number>(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  useEffect(() => {
    // Base rate for 2026
    let base = 800;

    // Age factor
    if (age < 25) base *= 1.8;
    else if (age < 30) base *= 1.2;
    else if (age > 70) base *= 1.15;

    // Location factor
    if (location === 'urban') base *= 1.4;
    else if (location === 'rural') base *= 0.85;

    // Vehicle Value factor
    base += (vehicleValue * 0.02);

    // Mileage factor
    if (annualMileage > 15000) base *= 1.1;
    else if (annualMileage < 5000) base *= 0.9;

    // Driving Record factor
    if (drivingRecord === 'minor') base *= 1.3;
    else if (drivingRecord === 'major') base *= 2.2;

    // Coverage Level factor
    if (coverageLevel === 'basic') base *= 0.7;
    else if (coverageLevel === 'premium') base *= 1.5;

    setEstimatedPremium(base);
    setMonthlyPayment(base / 12);
  }, [age, gender, location, vehicleValue, annualMileage, drivingRecord, coverageLevel]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Helmet>
        <title>Car Insurance Calculator 2026 | Estimate Your Auto Premium</title>
        <meta name="description" content="Estimate your car insurance premiums for 2026 with our free calculator. Compare rates based on age, vehicle, and driving history to find the best deal." />
        <meta name="keywords" content="car insurance calculator, auto insurance estimator 2026, car insurance premium calculator, vehicle insurance cost tool, insurance quote estimator" />
      </Helmet>

      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-2">
          <Car className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900">Car Insurance Calculator</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Get a realistic estimate of your annual auto insurance costs based on 2026 industry trends and risk factors.
        </p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
              <User className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-800">Driver Profile</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="input-group">
                <label className="input-label">Age</label>
                <input
                  type="number"
                  value={age || ''}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Location Type</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value as any)}
                  className="input-field"
                >
                  <option value="urban">Urban (City)</option>
                  <option value="suburban">Suburban</option>
                  <option value="rural">Rural (Country)</option>
                </select>
              </div>

              <div className="input-group">
                <label className="input-label">Driving Record</label>
                <select
                  value={drivingRecord}
                  onChange={(e) => setDrivingRecord(e.target.value as any)}
                  className="input-field"
                >
                  <option value="clean">Clean (No accidents/tickets)</option>
                  <option value="minor">Minor (1-2 tickets/fender benders)</option>
                  <option value="major">Major (DUI, serious accidents)</option>
                </select>
              </div>

              <div className="input-group">
                <label className="input-label">Annual Mileage</label>
                <input
                  type="number"
                  value={annualMileage || ''}
                  onChange={(e) => setAnnualMileage(Number(e.target.value))}
                  className="input-field"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-8 mb-6 border-b border-slate-100 pb-4">
              <Shield className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-slate-800">Vehicle & Coverage</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="input-group">
                <label className="input-label">Estimated Vehicle Value ($)</label>
                <input
                  type="number"
                  value={vehicleValue || ''}
                  onChange={(e) => setVehicleValue(Number(e.target.value))}
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Coverage Level</label>
                <select
                  value={coverageLevel}
                  onChange={(e) => setCoverageLevel(e.target.value as any)}
                  className="input-field"
                >
                  <option value="basic">Basic (Liability Only)</option>
                  <option value="standard">Standard (Full Coverage)</option>
                  <option value="premium">Premium (Low Deductible + Extras)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="result-box text-center bg-blue-600 text-white"
          >
            <h3 className="text-blue-100 font-bold mb-2 uppercase text-xs tracking-wider">Estimated Annual Premium</h3>
            <div className="text-4xl font-bold mb-2">
              {formatCurrency(estimatedPremium)}
            </div>
            <div className="pt-4 border-t border-blue-500 mt-4">
              <p className="text-xs text-blue-200 uppercase tracking-wide">Monthly Installment</p>
              <p className="text-xl font-bold">{formatCurrency(monthlyPayment)}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-blue-500">
              <ResultActions 
                onReset={() => {
                  setAge(30);
                  setGender('male');
                  setLocation('suburban');
                  setVehicleValue(25000);
                  setAnnualMileage(12000);
                  setDrivingRecord('clean');
                  setCoverageLevel('standard');
                }}
                onCopy={() => {
                  const text = `Car Insurance Estimate:\nAnnual Premium: ${formatCurrency(estimatedPremium)}\nMonthly: ${formatCurrency(monthlyPayment)}\nCalculated at simplycalculator.app`;
                  navigator.clipboard.writeText(text);
                }}
                dark
              />
            </div>
          </motion.div>

          <div className="calculator-container bg-amber-50 border-amber-200 p-4">
            <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2 text-sm">
              <AlertTriangle className="w-4 h-4" />
              Important Note
            </h4>
            <p className="text-xs text-amber-700 leading-relaxed">
              This is a statistical estimate based on 2026 averages. Your actual quote will depend on your specific credit score, exact vehicle safety features, and insurance provider algorithms.
            </p>
          </div>

          
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How Car Insurance Premiums are Calculated in 2026</h2>
        <p>
          Car insurance is a legal requirement in almost every state, but the price you pay can vary by thousands of dollars depending on your profile. In 2026, insurance companies are using more data than ever—including telematics and advanced risk modeling—to set rates. Our <strong>car insurance calculator</strong> provides a transparent look at the primary factors that influence your premium.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Primary Factors Influencing Your Rate</h3>
        <p>
          When you use our <strong>auto insurance estimator 2026</strong>, you'll notice that certain inputs have a massive impact on the final number. Here's why:
        </p>
        <ul>
          <li><strong>Age and Experience:</strong> Statistically, younger drivers (under 25) and very senior drivers are involved in more accidents. In 2026, teen drivers still face the highest premiums, often paying double or triple the rate of a 40-year-old with a clean record.</li>
          <li><strong>Location:</strong> Where you park your car matters. Urban areas with high traffic density and higher rates of theft and vandalism naturally command higher premiums than quiet rural towns.</li>
          <li><strong>Driving History:</strong> Your past behavior is the best predictor of future risk. A single DUI or major at-fault accident can stay on your record for years, significantly inflating your costs. Conversely, many 2026 providers offer "vanishing deductibles" for long-term safe drivers.</li>
          <li><strong>Vehicle Type:</strong> A luxury sports car costs more to repair and is more likely to be stolen than a standard sedan. Additionally, cars with advanced safety features (like autonomous braking) often qualify for discounts in 2026.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Understanding Coverage Levels</h3>
        <p>
          Our <strong>car insurance premium calculator</strong> allows you to toggle between coverage levels. 
          <strong>Basic coverage</strong> usually meets the state's minimum liability requirements but won't pay to fix your own car if you're at fault. 
          <strong>Standard coverage</strong> (often called "Full Coverage") adds collision and comprehensive protection, which is usually required if you have a car loan. 
          <strong>Premium coverage</strong> includes higher liability limits, lower deductibles, and extras like roadside assistance and rental car reimbursement.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Lower Your Premium in 2026</h3>
        <p>
          If your estimate is higher than you'd like, consider these strategies:
        </p>
        <ol>
          <li><strong>Increase Your Deductible:</strong> Moving from a $250 to a $1,000 deductible can lower your premium by 15-30%.</li>
          <li><strong>Bundle Policies:</strong> Buying your home and auto insurance from the same company is one of the easiest ways to get a discount.</li>
          <li><strong>Telematics:</strong> Many 2026 insurers offer apps that track your driving. If you're a safe, low-mileage driver, this can lead to substantial savings.</li>
          <li><strong>Shop Around:</strong> Rates change constantly. Using a tool like ours every year to check the market is a smart financial habit.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Does my credit score affect my car insurance?</p>
            <p>In most states, yes. Insurers have found a correlation between credit history and insurance risk. However, some states (like California and Hawaii) have banned the use of credit scores in setting auto rates.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is "Gap Insurance"?</p>
            <p>If your car is totaled and you owe more on your loan than the car is worth, Gap insurance covers the difference. This is highly recommended for new cars in 2026 due to rapid initial depreciation.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How does mileage affect my rate?</p>
            <p>The more you drive, the higher the chance of an accident. If you've transitioned to a permanent remote work setup in 2026, make sure to update your mileage to potentially lower your rate.</p>
          </div>
        </div>
      </div>
      <CalculatorSEO 
        name="Car Insurance Calculator" 
        path="/car-insurance-calculator" 
        description="Estimate your auto insurance premiums for 2026. Compare rates based on age, vehicle value, location, and driving history to find the best policy."
      />
    </div>
  );
};
