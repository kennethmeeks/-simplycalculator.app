import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { parseInput } from '@/src/lib/calculatorUtils';

export const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState<number | string>(50);
  const [tipPercent, setTipPercent] = useState<number | string>(15);
  const [people, setPeople] = useState<number | string>(1);

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [perPerson, setPerPerson] = useState(0);

  useEffect(() => {
    const b = parseInput(bill.toString());
    const t = parseInput(tipPercent.toString());
    const p = parseInput(people.toString());
    
    const tip = b * (t / 100);
    const totalBill = b + tip;
    setTipAmount(tip);
    setTotal(totalBill);
    setPerPerson(p > 0 ? totalBill / p : 0);
  }, [bill, tipPercent, people]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Tip Calculator with Bill Split 2026 | simplycalculator.app</title>
        <meta name="description" content="Calculate the perfect tip and split the bill easily with our free tip calculator with bill split. Ideal for restaurants, bars, and group dining in 2026." />
      </Helmet>

      <h1>Tip Calculator</h1>
      <p>Calculate the tip for a bill and split it among multiple people.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Bill Amount ($)</label>
              <input 
                type="number" 
                value={bill} 
                onChange={(e) => setBill(e.target.value)}
                className="input-field w-full"
              />
            </div>
            <div className="input-group">
              <label className="input-label">Tip Percentage (%)</label>
              <div className="flex gap-2 mb-2">
                {[10, 15, 18, 20].map((p) => (
                  <button
                    key={p}
                    onClick={() => setTipPercent(p)}
                    className={`px-3 py-1 text-xs border rounded-sm ${
                      tipPercent === p 
                        ? 'bg-[#0066cc] text-white border-[#0066cc]' 
                        : 'bg-white text-[#0066cc] border-[#ccc] hover:bg-gray-50'
                    }`}
                  >
                    {p}%
                  </button>
                ))}
              </div>
              <input 
                type="number" 
                value={tipPercent} 
                onChange={(e) => setTipPercent(e.target.value)}
                className="input-field w-full"
                placeholder="Custom %"
              />
            </div>
            <div className="input-group">
              <label className="input-label">Number of People</label>
              <input 
                type="number" 
                min="1"
                value={people} 
                onChange={(e) => setPeople(e.target.value)}
                className="input-field w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">Tip Amount:</span>
                <span className="text-xl font-bold text-[#0066cc]">${tipAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">Total Bill:</span>
                <span className="text-xl font-bold">${total.toFixed(2)}</span>
              </div>
              <div className="pt-4 mt-4 border-t border-[#b3d9ff] flex justify-between items-center">
                <span className="text-lg font-bold">Per Person:</span>
                <span className="text-3xl font-bold text-[#0066cc]">${perPerson.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About the Tip Calculator with Bill Split</h2>
        <p>
          A tip or gratuity is a sum of money customarily given by a client or customer to certain service sector workers for the service they have performed, in addition to the basic price of the service. Our <strong>free tip calculator with bill split 2026</strong> is designed to take the stress out of group dining and service interactions. Whether you are at a high-end restaurant, a local cafe, or using a delivery service, knowing how much to tip and how to divide the cost fairly is essential for a smooth social experience.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Math Behind Tipping</h3>
        <p>
          Calculating a tip is a straightforward percentage-based math problem, but it can be tricky when you're in a hurry or in a large group. The basic formula for the tip amount is:
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-center my-4">
          Tip Amount = Bill Subtotal × (Tip Percentage / 100)
        </div>
        <p>
          Once the tip is determined, the total bill is calculated as:
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-center my-4">
          Total Bill = Bill Subtotal + Tip Amount
        </div>
        <p>
          Finally, if you are splitting the bill, the amount per person is:
        </p>
        <div className="bg-slate-100 p-4 rounded-lg font-mono text-center my-4">
          Amount Per Person = Total Bill / Number of People
        </div>
        <p>
          Our calculator automates all these steps, ensuring that everyone pays their fair share down to the last cent.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Tipping Etiquette in 2026</h3>
        <p>
          Tipping customs continue to evolve. In 2026, the standard for good service in many regions has shifted towards the 18-20% range. While 15% was once the baseline, it is now often reserved for adequate but not exceptional service. For outstanding experiences, many customers now choose to tip 22% or 25%. It's also important to remember that tipping isn't just for restaurants; it applies to hair stylists, taxi and rideshare drivers, and hotel staff. Using a calculator ensures you are being fair to the service provider while staying within your budget.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Tip Calculator</h3>
        <p>
          Our <strong>free tip calculator 2026</strong> makes it easy to determine the right amount to leave and how to split the bill among friends.
        </p>
        <ol>
          <li><strong>Enter the Bill Amount:</strong> Input the total amount of your bill before any tips are added.</li>
          <li><strong>Select or Enter a Tip Percentage:</strong> Choose from common percentages (10%, 15%, 18%, 20%) or enter a custom amount based on the quality of service.</li>
          <li><strong>Specify the Number of People:</strong> If you're dining with a group, enter the number of people splitting the bill.</li>
          <li><strong>View the Results:</strong> The calculator will instantly show the total tip amount, the final bill total, and the exact amount each person needs to pay.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is a standard tip in 2026?</p>
            <p>In the United States and many other countries, a standard tip for sit-down restaurant service is typically between 18% and 20%. For exceptional service, 22% or more is often appreciated. For quick-service or coffee shops, $1-$2 or a smaller percentage is common.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Should I tip on the total before or after tax?</p>
            <p>Traditionally, tips are calculated on the pre-tax subtotal. However, many modern point-of-sale systems calculate tips on the post-tax total. Either method is acceptable, but tipping on the pre-tax amount is the standard baseline.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I handle splitting a bill fairly?</p>
            <p>Our calculator splits the total bill (including tip) equally among all participants. This is the simplest way to handle group dining. If individuals ordered significantly different amounts, you might want to calculate their tips separately, but equal splitting is the most common social practice.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          Suppose your dinner bill is <strong>$120.00</strong> and you want to leave an <strong>18%</strong> tip for a group of <strong>4 people</strong>. The tip would be <strong>$21.60</strong>, making the total bill <strong>$141.60</strong>. Each person would then contribute <strong>$35.40</strong>. This ensures the server is tipped correctly and the group knows exactly what to pay.
        </p>
      </div>
    </div>
  );
};
