import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { MapPin, Fuel, DollarSign, Clock, Info } from 'lucide-react';

export const RoadTripCostCalculator: React.FC = () => {
  const [distance, setDistance] = useState<number>(500);
  const [mpg, setMpg] = useState<number>(25);
  const [gasPrice, setGasPrice] = useState<number>(3.50);
  const [hotelCost, setHotelCost] = useState<number>(150);
  const [foodCost, setFoodCost] = useState<number>(50);
  const [numDays, setNumDays] = useState<number>(2);
  const [totalFuelCost, setTotalFuelCost] = useState<number>(0);
  const [totalTripCost, setTotalTripCost] = useState<number>(0);

  useEffect(() => {
    const fuelNeeded = distance / mpg;
    const fuelCost = fuelNeeded * gasPrice;
    const lodging = hotelCost * (numDays - 1);
    const food = foodCost * numDays;
    
    setTotalFuelCost(Number(fuelCost.toFixed(2)));
    setTotalTripCost(Number((fuelCost + lodging + food).toFixed(2)));
  }, [distance, mpg, gasPrice, hotelCost, foodCost, numDays]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Road Trip Cost Calculator | Plan Your Trip Budget</title>
        <meta name="description" content="Free online road trip cost calculator. Estimate your total trip budget including gas, lodging, and food costs for your next adventure in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Road Trip Cost Calculator</h1>
        <p className="text-slate-600">Plan your next adventure by estimating the total cost of gas, lodging, and food for your road trip.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Total Distance (Miles)</label>
                <input 
                  type="number" 
                  value={distance} 
                  onChange={(e) => setDistance(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Vehicle MPG</label>
                <input 
                  type="number" 
                  value={mpg} 
                  onChange={(e) => setMpg(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Gas Price ($/Gallon)</label>
                <input 
                  type="number" 
                  step="0.01"
                  value={gasPrice} 
                  onChange={(e) => setGasPrice(Math.max(0.01, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Number of Days</label>
                <input 
                  type="number" 
                  value={numDays} 
                  onChange={(e) => setNumDays(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Hotel Cost per Night ($)</label>
                <input 
                  type="number" 
                  value={hotelCost} 
                  onChange={(e) => setHotelCost(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Food Cost per Day ($)</label>
                <input 
                  type="number" 
                  value={foodCost} 
                  onChange={(e) => setFoodCost(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Road Trip Planning Tips
            </h2>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Plan Your Route:</strong> Use mapping apps to find the most efficient path and avoid tolls.</li>
              <li><strong>Check Gas Prices:</strong> Use apps to find the cheapest gas along your route.</li>
              <li><strong>Pack Snacks:</strong> Bringing your own food can significantly reduce your daily expenses.</li>
              <li><strong>Vehicle Check:</strong> Ensure your car is in good condition (oil, tires, fluids) before leaving.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-[#f0f7ff] border border-[#0066cc]/20 text-[#0066cc]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#0066cc]">
              <DollarSign className="w-5 h-5" />
              Trip Budget
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-[#0066cc]/10">
                <div className="text-4xl font-bold mb-1 text-[#0066cc]">${totalTripCost.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Estimated Cost</div>
              </div>
              <div className="space-y-4 text-center py-4 border-b border-[#0066cc]/10">
                <div>
                  <div className="text-xl font-bold text-[#0066cc]">${totalFuelCost.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Total Gas</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-[#0066cc]">${(totalTripCost - totalFuelCost).toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Lodging & Food</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Travel Time
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              At an average speed of 65 mph, your trip will take approximately <strong>{(distance / 65).toFixed(1)} hours</strong> of driving time. Don't forget to factor in stops for gas, food, and rest!
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Budgeting for Your 2026 Road Trip</h2>
        <p>
          A road trip is a classic way to explore the country, but the costs can add up quickly. Our <strong>road trip cost calculator</strong> helps you plan your budget so you can enjoy the journey without financial stress.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Save Money on Your Trip</h3>
        <p>
          Beyond the basic costs, there are many ways to make your road trip more affordable:
        </p>
        <ul>
          <li><strong>Drive Efficiently:</strong> Maintaining a steady speed and avoiding rapid acceleration can improve your MPG.</li>
          <li><strong>Stay Outside Major Cities:</strong> Hotels are often significantly cheaper just 20-30 minutes outside of major metropolitan areas.</li>
          <li><strong>Use Loyalty Programs:</strong> Sign up for gas station and hotel rewards programs to earn points and discounts.</li>
          <li><strong>Pack a Cooler:</strong> Buying groceries and making sandwiches is much cheaper than eating at restaurants for every meal.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Hidden Costs to Consider</h3>
        <p>
          While our calculator covers the big three (gas, lodging, and food), don't forget these other potential expenses:
        </p>
        <ul>
          <li><strong>Tolls:</strong> Some highways and bridges can be expensive. Check your route for toll roads.</li>
          <li><strong>Parking:</strong> Many hotels in city centers charge $30-$50 per night for parking.</li>
          <li><strong>Maintenance:</strong> Factor in the cost of an oil change or tire rotation before or after a long trip.</li>
          <li><strong>Attractions:</strong> Don't forget to budget for museum tickets, national park fees, and other activities.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">How do I find the best gas prices?</p>
            <p>Apps like GasBuddy or even Google Maps can show you real-time gas prices at stations along your route.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I rent a car or drive my own?</p>
            <p>Renting a car saves wear and tear on your own vehicle and might offer better gas mileage, but the daily rental fee and insurance costs can be high. Calculate both options to see which makes more sense for your trip.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
