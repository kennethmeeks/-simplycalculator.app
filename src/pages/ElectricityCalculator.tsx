import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const ElectricityCalculator: React.FC = () => {
  const [power, setPower] = useState<number>(1000); // Watts
  const [hoursPerDay, setHoursPerDay] = useState<number>(5);
  const [costPerKWh, setCostPerKWh] = useState<number>(0.15);

  const calculateCosts = () => {
    const dailyKWh = (power * hoursPerDay) / 1000;
    const dailyCost = dailyKWh * costPerKWh;
    const monthlyCost = dailyCost * 30.44; // Average days in a month
    const yearlyCost = dailyCost * 365.25; // Average days in a year

    return { dailyKWh, dailyCost, monthlyCost, yearlyCost };
  };

  const { dailyKWh, dailyCost, monthlyCost, yearlyCost } = calculateCosts();

  return (
    <>
      <Helmet>
        <title>Electricity Cost Calculator | Energy Consumption Tool</title>
        <meta name="description" content="Calculate the electricity cost of your appliances. Estimate daily, monthly, and yearly energy consumption and costs based on wattage and usage time." />
        <meta name="keywords" content="electricity calculator, energy cost calculator, appliance energy usage, kWh calculator, electricity bill estimator, energy consumption tool" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Electricity Cost Calculator</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-blue-600">
              <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
              Appliance Usage
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Power Consumption (Watts)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={power}
                    onChange={(e) => setPower(Number(e.target.value))}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-xl font-bold"
                  />
                  <span className="text-gray-400 font-bold">W</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 italic">Example: LED bulb (10W), Laptop (60W), AC (1500W)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Hours Used Per Day</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0.1"
                    max="24"
                    step="0.1"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <span className="text-xl font-bold text-gray-700 w-16 text-right">{hoursPerDay}h</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Cost Per kWh ($)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    step="0.01"
                    value={costPerKWh}
                    onChange={(e) => setCostPerKWh(Number(e.target.value))}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-xl font-bold"
                  />
                  <span className="text-gray-400 font-bold">$/kWh</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">US Average is approx. $0.16/kWh</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl text-white flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-8 text-blue-400">Estimated Costs</h2>
            
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-gray-800 pb-4">
                <div>
                  <span className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Daily</span>
                  <span className="text-2xl font-bold text-white">${dailyCost.toFixed(2)}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-xs block">Consumption</span>
                  <span className="text-lg font-semibold text-gray-300">{dailyKWh.toFixed(2)} kWh</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end border-b border-gray-800 pb-4">
                <div>
                  <span className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Monthly</span>
                  <span className="text-4xl font-bold text-blue-400">${monthlyCost.toFixed(2)}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-xs block">Consumption</span>
                  <span className="text-xl font-semibold text-gray-300">{(dailyKWh * 30.44).toFixed(1)} kWh</span>
                </div>
              </div>

              <div className="flex justify-between items-end pt-4">
                <div>
                  <span className="text-gray-400 text-xs uppercase tracking-widest block mb-1">Yearly</span>
                  <span className="text-5xl font-bold text-green-400">${yearlyCost.toFixed(2)}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 text-xs block">Consumption</span>
                  <span className="text-2xl font-semibold text-gray-300">{(dailyKWh * 365.25).toFixed(0)} kWh</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        <section className="mt-16 prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900">How to Calculate Electricity Costs</h2>
          <p>
            Understanding how much your appliances cost to run is the first step toward reducing your energy bills. This electricity calculator uses three simple inputs to provide a detailed breakdown of your energy consumption and costs.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8">The Calculation Formula</h3>
          <p>
            To calculate the cost manually, you can use the following formula:
          </p>
          <div className="bg-gray-100 p-6 rounded-xl font-mono text-sm space-y-2">
            <p>1. Energy (kWh) = (Power in Watts × Time in Hours) / 1,000</p>
            <p>2. Cost ($) = Energy (kWh) × Cost per kWh ($)</p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8">Common Appliance Wattages</h3>
          <p>
            If you're not sure how many watts your appliance uses, check the label on the back or bottom of the device. Here are some typical estimates:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span>LED Light Bulb</span>
              <span className="font-bold">8 - 12 Watts</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span>Laptop Computer</span>
              <span className="font-bold">50 - 100 Watts</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span>Refrigerator</span>
              <span className="font-bold">100 - 400 Watts</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span>Coffee Maker</span>
              <span className="font-bold">800 - 1200 Watts</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span>Space Heater</span>
              <span className="font-bold">1500 Watts</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
              <span>Central Air Conditioning</span>
              <span className="font-bold">3000 - 5000 Watts</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8">Tips to Lower Your Electricity Bill</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Switch to LED:</strong> LED bulbs use up to 80% less energy than traditional incandescent bulbs.</li>
            <li><strong>Unplug "Vampire" Devices:</strong> Many electronics use a small amount of power even when turned off. Unplug chargers and appliances when not in use.</li>
            <li><strong>Use Smart Power Strips:</strong> These can automatically cut power to devices that are in standby mode.</li>
            <li><strong>Optimize Heating and Cooling:</strong> Heating and cooling are usually the biggest energy consumers. Use a programmable thermostat to adjust temperatures when you're away or asleep.</li>
            <li><strong>Wash Clothes in Cold Water:</strong> Heating water accounts for about 90% of a washing machine's energy use.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8">Understanding Your Utility Bill</h3>
          <p>
            Your utility bill usually lists your usage in <strong>kWh (kilowatt-hours)</strong>. One kWh is the amount of energy used by a 1,000-watt appliance running for one hour. The cost per kWh varies by region, time of day (if you have time-of-use pricing), and the total amount of energy you use.
          </p>

          <div className="mt-12 bg-green-50 p-6 rounded-xl border border-green-200">
            <h3 className="text-lg font-bold text-green-900 mb-2">Energy Saving Fact</h3>
            <p className="text-green-800 text-sm">
              Lowering your thermostat by just 1 degree in the winter can save you up to 3% on your heating bill. Over a year, these small changes can add up to significant savings!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ElectricityCalculator;
