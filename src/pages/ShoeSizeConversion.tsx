import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const ShoeSizeConversion: React.FC = () => {
  const [usSize, setUsSize] = useState<number>(9);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [ukSize, setUkSize] = useState<number>(0);
  const [euSize, setEuSize] = useState<number>(0);
  const [cmSize, setCmSize] = useState<number>(0);

  useEffect(() => {
    if (gender === 'male') {
      setUkSize(usSize - 0.5);
      setEuSize(usSize + 33);
      setCmSize(usSize * 0.846 + 18.4);
    } else {
      setUkSize(usSize - 2);
      setEuSize(usSize + 31);
      setCmSize(usSize * 0.846 + 17.1);
    }
  }, [usSize, gender]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Shoe Size Conversion | International Size Chart 2026</title>
        <meta name="description" content="Convert shoe sizes between US, UK, EU, and CM. Find your perfect shoe size for any region easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Shoe Size Conversion</h1>
        <p className="text-slate-600">Convert shoe sizes between different international standards.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Enter Size</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">US Size</label>
              <input
                type="number"
                step="0.5"
                value={usSize}
                onChange={(e) => setUsSize(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value as any)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 mb-1">UK Size</p>
                <p className="text-2xl font-bold text-[#0066cc]">{ukSize.toFixed(1)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">EU Size</p>
                <p className="text-2xl font-bold text-slate-900">{Math.round(euSize)}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Foot Length (CM)</p>
              <p className="text-2xl font-bold text-slate-900">{cmSize.toFixed(1)} cm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is Shoe Size Conversion?</h2>
        <p>
          Shoe size conversion is the process of translating a shoe size from one regional standard to another. It's a useful tool for quantifying the uncertainty of an estimate and identifying the range of values for a data set.
        </p>
        <h3>How to Convert Shoe Sizes</h3>
        <p>
          To convert shoe sizes, you simply enter your size in one regional standard and select your gender. The calculator will then perform the calculation and display your estimated size in other regional standards.
        </p>
        <h3>Why Shoe Size Conversion Matters</h3>
        <p>
          Shoe size conversion is critical for analyzing and interpreting data in a wide range of fields, including fashion, retail, and international trade. It provides a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
