import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Car, DollarSign, Info, ShieldAlert } from 'lucide-react';

export const VehicleTaxCalculator: React.FC = () => {
  const [purchasePrice, setPurchasePrice] = useState<number>(30000);
  const [salesTaxRate, setSalesTaxRate] = useState<number>(7); // Percentage
  const [registrationFee, setRegistrationFee] = useState<number>(250);
  const [titleFee, setTitleFee] = useState<number>(100);
  const [totalTax, setTotalTax] = useState<number>(0);
  const [totalFees, setTotalFees] = useState<number>(0);
  const [totalOutTheDoor, setTotalOutTheDoor] = useState<number>(0);

  useEffect(() => {
    const tax = purchasePrice * (salesTaxRate / 100);
    const fees = registrationFee + titleFee;
    setTotalTax(Number(tax.toFixed(2)));
    setTotalFees(Number(fees.toFixed(2)));
    setTotalOutTheDoor(Number((purchasePrice + tax + fees).toFixed(2)));
  }, [purchasePrice, salesTaxRate, registrationFee, titleFee]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Vehicle Tax Calculator | Calculate Sales Tax & Registration Fees</title>
        <meta name="description" content="Free online vehicle tax calculator. Estimate your car's sales tax, registration fees, and total out-the-door price in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Vehicle Tax Calculator</h1>
        <p className="text-slate-600">Estimate the total taxes and fees you'll pay when purchasing a new or used vehicle.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="input-label">Purchase Price ($)</label>
                <input 
                  type="number" 
                  value={purchasePrice} 
                  onChange={(e) => setPurchasePrice(Math.max(1, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Sales Tax Rate (%)</label>
                <input 
                  type="number" 
                  value={salesTaxRate} 
                  onChange={(e) => setSalesTaxRate(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Registration Fee ($)</label>
                <input 
                  type="number" 
                  value={registrationFee} 
                  onChange={(e) => setRegistrationFee(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
              <div>
                <label className="input-label">Title & Doc Fees ($)</label>
                <input 
                  type="number" 
                  value={titleFee} 
                  onChange={(e) => setTitleFee(Math.max(0, Number(e.target.value)))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              Taxes and Fees Explained
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              When buying a car, the "sticker price" is not the final amount you'll pay. Several additional costs are added by the state and the dealership:
            </p>
            <ul className="mt-4 text-xs text-slate-500 space-y-2 list-disc pl-4">
              <li><strong>Sales Tax:</strong> Charged by the state (and sometimes city/county) where you register the vehicle.</li>
              <li><strong>Registration Fee:</strong> The cost to get your license plates and registration stickers.</li>
              <li><strong>Title Fee:</strong> The cost to have the state issue a title in your name.</li>
              <li><strong>Documentation Fee:</strong> A fee charged by the dealer to process the paperwork.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Out-the-Door Price
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-slate-800">
                <div className="text-4xl font-bold mb-1">${totalOutTheDoor.toLocaleString()}</div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Estimated Cost</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center py-4">
                <div>
                  <div className="text-xl font-bold text-slate-200">${totalTax.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Sales Tax</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-200">${totalFees.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Total Fees</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              Dealer Fees Warning
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Some dealers add "hidden" fees like prep fees, advertising fees, or nitrogen tire fees. These are often negotiable. Always ask for an itemized "Out-the-Door" price before signing.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Vehicle Taxes in 2026</h2>
        <p>
          Buying a car is a major financial commitment, and it's important to budget for more than just the purchase price. Our <strong>vehicle tax calculator</strong> helps you estimate the total cost of your new or used car purchase.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How Sales Tax is Calculated</h3>
        <p>
          In most states, sales tax is calculated based on the <strong>net purchase price</strong> of the vehicle. This means if you have a trade-in, the value of that trade-in is often subtracted from the purchase price before tax is applied.
        </p>
        <div className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 my-4">
          Taxable Amount = (Purchase Price - Trade-in Value)
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">State-Specific Variations</h3>
        <p>
          Every state has its own rules for vehicle taxes and fees:
        </p>
        <ul>
          <li><strong>No Sales Tax:</strong> Some states (like Oregon, Montana, and Delaware) do not charge sales tax on vehicles.</li>
          <li><strong>Flat Fees:</strong> Some states charge a flat registration fee, while others base it on the vehicle's weight, age, or value.</li>
          <li><strong>Ad Valorem Tax:</strong> Some states charge an annual tax based on the vehicle's current value, which is separate from the initial sales tax.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Do I pay tax in the state where I buy the car or where I live?</p>
            <p>You almost always pay sales tax in the state where you <strong>register</strong> the vehicle (usually your home state), not where you purchase it.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can I roll taxes and fees into my car loan?</p>
            <p>Yes, most lenders allow you to include the taxes and fees in your financing. However, this increases your total loan amount and the interest you'll pay over time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
