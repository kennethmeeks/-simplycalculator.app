import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Fuel, Navigation, DollarSign, Info } from 'lucide-react';

export const FuelCostCalculator: React.FC = () => {
  const [distance, setDistance] = useState(100);
  const [fuelEfficiency, setFuelEfficiency] = useState(25);
  const [fuelPrice, setFuelPrice] = useState(3.50);
  
  const [totalCost, setTotalCost] = useState(0);
  const [fuelNeeded, setFuelNeeded] = useState(0);
  const [costPerMile, setCostPerMile] = useState(0);

  useEffect(() => {
    if (fuelEfficiency > 0) {
      const needed = distance / fuelEfficiency;
      const cost = needed * fuelPrice;
      const perMile = fuelPrice / fuelEfficiency;
      
      setFuelNeeded(Number(needed.toFixed(2)));
      setTotalCost(Number(cost.toFixed(2)));
      setCostPerMile(Number(perMile.toFixed(3)));
    }
  }, [distance, fuelEfficiency, fuelPrice]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Fuel Cost Calculator | Calculate Trip Gas Money & MPG</title>
        <meta name="description" content="Free online fuel cost calculator for road trips and daily commutes. Calculate gas money needed based on distance, fuel efficiency (MPG), and gas price in 2026." />
      </Helmet>

      <h1>Fuel Cost Calculator</h1>
      <p>Estimate the total cost of fuel for your next road trip or daily commute. Simply enter your trip distance, vehicle's fuel efficiency, and current gas price.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Trip Details</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Trip Distance (miles)</label>
              <input 
                type="number" 
                value={distance} 
                onChange={(e) => setDistance(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Fuel Efficiency (MPG)</label>
              <input 
                type="number" 
                value={fuelEfficiency} 
                onChange={(e) => setFuelEfficiency(Number(e.target.value))} 
                className="input-field" 
              />
              <p className="text-[10px] text-slate-400 mt-1 italic">Miles Per Gallon (MPG)</p>
            </div>
            <div>
              <label className="input-label">Gas Price (per gallon)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                <input 
                  type="number" 
                  step="0.01"
                  value={fuelPrice} 
                  onChange={(e) => setFuelPrice(Number(e.target.value))} 
                  className="input-field pl-8" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Estimated Trip Cost</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Total Fuel Cost</div>
                <div className="text-4xl font-bold text-[#0066cc]">${totalCost.toLocaleString()}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Fuel Needed</div>
                  <div className="text-lg font-bold text-slate-700">{fuelNeeded} <span className="text-xs font-normal">gal</span></div>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-100">
                  <div className="text-[10px] text-slate-500 uppercase font-bold mb-1">Cost Per Mile</div>
                  <div className="text-lg font-bold text-slate-700">${costPerMile}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#e7f3ff] border border-[#0066cc]/20 rounded p-4 text-sm text-[#004d99]">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Navigation className="w-4 h-4" />
              Road Trip Tip
            </h4>
            <p>Don't forget to account for extra weight and roof racks, which can decrease your fuel efficiency by up to 20%.</p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Ultimate Guide to Calculating Fuel Costs</h2>
        <p>
          Fuel is one of the most significant expenses for any vehicle owner. Whether you are planning a cross-country road trip or just trying to budget for your monthly commute, our <strong>fuel cost calculator</strong> provides the accuracy you need to manage your transportation expenses in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Calculate Gas Money for a Trip</h3>
        <p>
          Calculating fuel costs manually is straightforward if you have the right data. Here is the formula:
        </p>
        <div className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 my-4">
          Total Cost = (Distance / Fuel Efficiency) * Fuel Price
        </div>
        
        <h4 className="font-bold text-slate-900">Step 1: Determine Trip Distance</h4>
        <p>
          Use a mapping service to find the total mileage for your trip. Don't forget to include side trips and local driving at your destination.
        </p>

        <h4 className="font-bold text-slate-900">Step 2: Find Your Vehicle's MPG</h4>
        <p>
          Your vehicle's fuel efficiency (Miles Per Gallon) can be found in the owner's manual or on the window sticker. Keep in mind that "City" MPG is lower than "Highway" MPG.
        </p>

        <h4 className="font-bold text-slate-900">Step 3: Check Local Gas Prices</h4>
        <p>
          Gas prices can vary significantly between states and even between gas stations. Use an app to find the average price along your route for the most accurate estimate.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Factors That Affect Fuel Efficiency</h3>
        <p>
          Your vehicle's rated MPG is just an estimate. Real-world fuel efficiency is influenced by several factors:
        </p>
        <ul>
          <li><strong>Driving Style:</strong> Aggressive acceleration and high speeds significantly decrease fuel efficiency.</li>
          <li><strong>Vehicle Maintenance:</strong> Properly inflated tires and regular oil changes can improve MPG by up to 3%.</li>
          <li><strong>Weight and Aerodynamics:</strong> Carrying heavy cargo or using a roof-mounted carrier increases drag and fuel consumption.</li>
          <li><strong>Weather Conditions:</strong> Cold weather and strong headwinds can force your engine to work harder, using more fuel.</li>
          <li><strong>Idling:</strong> Leaving your engine running while parked consumes fuel without moving the vehicle.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is the difference between "City" and "Highway" MPG?</p>
            <p>City driving involves frequent stopping and starting, which uses more fuel. Highway driving is more efficient because the vehicle maintains a constant speed in a higher gear.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How can I save money on gas?</p>
            <p>Maintain a steady speed, use cruise control on the highway, remove unnecessary weight from your vehicle, and use apps to find the cheapest gas in your area.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Does using the air conditioning affect fuel cost?</p>
            <p>Yes, using the AC can reduce fuel efficiency by 5-25% depending on the vehicle and outside temperature. At low speeds, opening windows is more efficient; at high speeds, using the AC is better due to reduced aerodynamic drag.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If you are driving <strong>500 miles</strong> in a car that gets <strong>25 MPG</strong>, and gas costs <strong>$3.50 per gallon</strong>:
          <br />Fuel Needed: 500 / 25 = <strong>20 gallons</strong>
          <br />Total Cost: 20 * $3.50 = <strong>$70.00</strong>. Our calculator performs these steps instantly, ensuring you have enough gas money for your journey.
        </p>
      </div>
    </div>
  );
};
