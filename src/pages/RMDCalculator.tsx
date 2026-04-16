import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const RMDCalculator: React.FC = () => {
  const [currentBalance, setCurrentBalance] = useState<number>(500000);
  const [age, setAge] = useState<number>(73);

  const [rmdAmount, setRmdAmount] = useState<number>(0);
  const [distributionPeriod, setDistributionPeriod] = useState<number>(0);

  // IRS Uniform Lifetime Table (Simplified for common ages)
  const getLifeExpectancy = (age: number): number => {
    const table: { [key: number]: number } = {
      72: 27.4, 73: 26.5, 74: 25.5, 75: 24.6, 76: 23.7, 77: 22.9, 78: 22.0, 79: 21.1, 80: 20.2,
      81: 19.4, 82: 18.5, 83: 17.7, 84: 16.8, 85: 16.0, 86: 15.2, 87: 14.4, 88: 13.7, 89: 12.9,
      90: 12.2, 91: 11.5, 92: 10.8, 93: 10.1, 94: 9.5, 95: 8.9, 96: 8.4, 97: 7.8, 98: 7.3, 99: 6.8,
      100: 6.4, 101: 6.0, 102: 5.6, 103: 5.2, 104: 4.9, 105: 4.6, 106: 4.3, 107: 4.1, 108: 3.9, 109: 3.7,
      110: 3.5, 111: 3.4, 112: 3.3, 113: 3.1, 114: 3.0, 115: 2.9, 120: 2.0
    };
    
    if (age < 72) return 0;
    if (age > 115) return 2.0;
    return table[age] || table[72];
  };

  useEffect(() => {
    const period = getLifeExpectancy(age);
    setDistributionPeriod(period);
    setRmdAmount(period > 0 ? currentBalance / period : 0);
  }, [currentBalance, age]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>RMD Calculator | Required Minimum Distribution 2026 | simplycalculator.app</title>
        <meta name="description" content="Free online RMD calculator. Estimate your Required Minimum Distribution (RMD) from your retirement accounts based on your age and account balance." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">RMD Calculator</h1>
        <p className="text-slate-600">
          Determine your Required Minimum Distribution (RMD) from your retirement accounts based on your age and account balance, using the IRS Uniform Lifetime Table.
        </p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Account Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Account Balance (Dec 31 of last year) ($)</label>
              <input
                type="number"
                value={currentBalance}
                onChange={(e) => setCurrentBalance(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Your Age (at end of current year)</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl font-semibold mb-4">Estimated RMD Amount</h2>
          <div className="space-y-4">
            {age < 73 ? (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-700">
                RMDs typically begin at age 73. You are not yet required to take distributions.
              </div>
            ) : (
              <>
                <p className="text-6xl font-bold text-[#0066cc]">${rmdAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                <div className="pt-4 border-t border-slate-200 w-full">
                  <p className="text-sm text-slate-500 mb-1">Distribution Period (IRS Table)</p>
                  <p className="text-xl font-semibold text-slate-900">{distributionPeriod} Years</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is a Required Minimum Distribution (RMD)?</h2>
        <p>
          A Required Minimum Distribution (RMD) is the minimum amount of money that you must withdraw from your retirement accounts each year once you reach a certain age. These rules apply to traditional IRAs, 401(k)s, and other tax-deferred retirement accounts.
        </p>
        
        <h3>How to Use the RMD Calculator</h3>
        <p>
          To estimate your RMD amount, you need to provide:
        </p>
        <ul>
          <li><strong>Account Balance:</strong> The total balance in your retirement account as of December 31st of the previous year.</li>
          <li><strong>Your Age:</strong> Your age at the end of the current year.</li>
        </ul>

        <h3>RMD Rules and Regulations</h3>
        <p>
          The IRS sets specific rules for RMDs:
        </p>
        <ul>
          <li><strong>Age:</strong> RMDs typically begin at age 73 (for those born between 1951 and 1959) or age 75 (for those born in 1960 or later).</li>
          <li><strong>Deadline:</strong> You must take your first RMD by April 1st of the year after you reach the required age. Subsequent RMDs must be taken by December 31st each year.</li>
          <li><strong>Penalty:</strong> If you fail to take your RMD, you may be subject to a 25% excise tax on the amount not withdrawn.</li>
        </ul>

        <h3>Types of Accounts Subject to RMDs</h3>
        <p>
          RMDs apply to most tax-deferred retirement accounts, including:
        </p>
        <ul>
          <li>Traditional IRAs</li>
          <li>SEP IRAs</li>
          <li>SIMPLE IRAs</li>
          <li>401(k) plans</li>
          <li>403(b) plans</li>
          <li>457(b) plans</li>
        </ul>
        <p><strong>Note:</strong> Roth IRAs do not require RMDs during the lifetime of the original owner.</p>

        <h3>Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-bold">Can I take more than the RMD amount?</h4>
            <p>Yes, you can always withdraw more than the required minimum amount, but you will have to pay income taxes on the entire distribution.</p>
          </div>
          <div>
            <h4 className="font-bold">What if I have multiple retirement accounts?</h4>
            <p>You must calculate the RMD for each account separately. For IRAs, you can total the RMDs and take the entire amount from one or more accounts. For 401(k)s, you must take the RMD from each individual account.</p>
          </div>
          <div>
            <h4 className="font-bold">How are RMDs taxed?</h4>
            <p>RMDs are typically taxed as ordinary income at your current tax rate.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
