import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


type BandColor = 'black' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'violet' | 'gray' | 'white' | 'gold' | 'silver';

interface ColorData {
  value: number;
  multiplier: number;
  tolerance?: number;
  hex: string;
  textColor: string;
}

const colorMap: Record<BandColor, ColorData> = {
  black: { value: 0, multiplier: 1, tolerance: undefined, hex: '#000000', textColor: '#ffffff' },
  brown: { value: 1, multiplier: 10, tolerance: 1, hex: '#8B4513', textColor: '#ffffff' },
  red: { value: 2, multiplier: 100, tolerance: 2, hex: '#FF0000', textColor: '#ffffff' },
  orange: { value: 3, multiplier: 1000, tolerance: 0.05, hex: '#FFA500', textColor: '#000000' },
  yellow: { value: 4, multiplier: 10000, tolerance: 0.02, hex: '#FFFF00', textColor: '#000000' },
  green: { value: 5, multiplier: 100000, tolerance: 0.5, hex: '#008000', textColor: '#ffffff' },
  blue: { value: 6, multiplier: 1000000, tolerance: 0.25, hex: '#0000FF', textColor: '#ffffff' },
  violet: { value: 7, multiplier: 10000000, tolerance: 0.1, hex: '#EE82EE', textColor: '#000000' },
  gray: { value: 8, multiplier: 100000000, tolerance: 0.01, hex: '#808080', textColor: '#ffffff' },
  white: { value: 9, multiplier: 1000000000, tolerance: undefined, hex: '#FFFFFF', textColor: '#000000' },
  gold: { value: -1, multiplier: 0.1, tolerance: 5, hex: '#FFD700', textColor: '#000000' },
  silver: { value: -1, multiplier: 0.01, tolerance: 10, hex: '#C0C0C0', textColor: '#000000' },
};

export const ResistorCalculator: React.FC = () => {
  const [bands, setBands] = useState<number>(4);
  const [band1, setBand1] = useState<BandColor>('brown');
  const [band2, setBand2] = useState<BandColor>('black');
  const [band3, setBand3] = useState<BandColor>('red');
  const [band4, setBand4] = useState<BandColor>('gold');
  const [band5, setBand5] = useState<BandColor>('brown');

  const calculateResistance = () => {
    let value = 0;
    let multiplier = 1;
    let tolerance = 0;

    if (bands === 4) {
      value = (colorMap[band1].value * 10) + colorMap[band2].value;
      multiplier = colorMap[band3].multiplier;
      tolerance = colorMap[band4].tolerance || 0;
    } else {
      value = (colorMap[band1].value * 100) + (colorMap[band2].value * 10) + colorMap[band3].value;
      multiplier = colorMap[band4].multiplier;
      tolerance = colorMap[band5].tolerance || 0;
    }

    const resistance = value * multiplier;
    return { resistance, tolerance };
  };

  const { resistance, tolerance } = calculateResistance();

  const formatResistance = (ohms: number) => {
    if (ohms >= 1000000) return `${(ohms / 1000000).toFixed(2)} MΩ`;
    if (ohms >= 1000) return `${(ohms / 1000).toFixed(2)} kΩ`;
    return `${ohms} Ω`;
  };

  const ColorSelector = ({ label, value, onChange, colors }: { label: string, value: BandColor, onChange: (v: BandColor) => void, colors: BandColor[] }) => (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</label>
      <div className="grid grid-cols-4 gap-1">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onChange(color)}
            className={`h-8 rounded-md border-2 transition-all ${value === color ? 'border-blue-500 scale-110 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}
            style={{ backgroundColor: colorMap[color].hex }}
            title={color}
          />
        ))}
      </div>
    </div>
  );

  const digitColors: BandColor[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white'];
  const multiplierColors: BandColor[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white', 'gold', 'silver'];
  const toleranceColors: BandColor[] = ['brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'gold', 'silver'];

  return (
    <>
      <Helmet>
        <title>Resistor Color Code Calculator | 4 & 5 Band Tool</title>
        <meta name="description" content="Calculate resistor values using the standard color code system. Supports 4-band and 5-band resistors. Free tool for electronics hobbyists and engineers." />
        <meta name="keywords" content="resistor color code, resistor calculator, 4 band resistor, 5 band resistor, electronics calculator, resistance value, tolerance calculator" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Resistor Color Code Calculator</h1>

        <div className="mb-8 flex gap-4">
          <button
            onClick={() => setBands(4)}
            className={`px-6 py-2 rounded-full font-bold transition-all ${bands === 4 ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            4 Band
          </button>
          <button
            onClick={() => setBands(5)}
            className={`px-6 py-2 rounded-full font-bold transition-all ${bands === 5 ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            5 Band
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex justify-center mb-12">
              <div className="relative h-24 w-64 bg-gray-200 rounded-full flex items-center px-8 gap-4 border-4 border-gray-300">
                <div className="absolute -left-12 w-12 h-1 bg-gray-400"></div>
                <div className="absolute -right-12 w-12 h-1 bg-gray-400"></div>
                <div className="w-4 h-full" style={{ backgroundColor: colorMap[band1].hex }}></div>
                <div className="w-4 h-full" style={{ backgroundColor: colorMap[band2].hex }}></div>
                <div className="w-4 h-full" style={{ backgroundColor: colorMap[band3].hex }}></div>
                <div className="w-4 h-full" style={{ backgroundColor: colorMap[band4].hex }}></div>
                {bands === 5 && <div className="w-4 h-full" style={{ backgroundColor: colorMap[band5].hex }}></div>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ColorSelector label="Band 1 (Digit)" value={band1} onChange={setBand1} colors={digitColors} />
              <ColorSelector label="Band 2 (Digit)" value={band2} onChange={setBand2} colors={digitColors} />
              {bands === 5 ? (
                <>
                  <ColorSelector label="Band 3 (Digit)" value={band3} onChange={setBand3} colors={digitColors} />
                  <ColorSelector label="Band 4 (Multiplier)" value={band4} onChange={setBand4} colors={multiplierColors} />
                  <ColorSelector label="Band 5 (Tolerance)" value={band5} onChange={setBand5} colors={toleranceColors} />
                </>
              ) : (
                <>
                  <ColorSelector label="Band 3 (Multiplier)" value={band3} onChange={setBand3} colors={multiplierColors} />
                  <ColorSelector label="Band 4 (Tolerance)" value={band4} onChange={setBand4} colors={toleranceColors} />
                </>
              )}
            </div>
          </div>

          <div className="bg-blue-900 p-8 rounded-2xl shadow-2xl text-white flex flex-col justify-center text-center">
            <h2 className="text-xl font-semibold mb-6 text-blue-300">Resistor Value</h2>
            <div className="text-5xl font-bold mb-4 text-white">
              {formatResistance(resistance)}
            </div>
            <div className="text-2xl font-semibold text-blue-200">
              ± {tolerance}%
            </div>
            <div className="mt-8 text-sm text-blue-400 italic">
              Range: {formatResistance(resistance * (1 - tolerance/100))} - {formatResistance(resistance * (1 + tolerance/100))}
            </div>
          </div>
        </div>

        

        <section className="mt-16 prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900">How to Read Resistor Color Codes</h2>
          <p>
            Resistors are tiny components used in electronics to limit current flow. Because they are often too small to have numbers printed on them, a standard color-coding system is used to indicate their resistance value and tolerance.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8">4-Band vs. 5-Band Resistors</h3>
          <p>
            Most common resistors have 4 bands, while high-precision resistors often have 5 bands.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>4-Band Resistors:</strong> The first two bands represent the significant digits, the third band is the multiplier, and the fourth band is the tolerance.</li>
            <li><strong>5-Band Resistors:</strong> The first three bands represent the significant digits, the fourth band is the multiplier, and the fifth band is the tolerance.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8">The Color Code Table</h3>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 border">Color</th>
                  <th className="px-4 py-2 border">Digit</th>
                  <th className="px-4 py-2 border">Multiplier</th>
                  <th className="px-4 py-2 border">Tolerance</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(colorMap).map(([name, data]) => (
                  <tr key={name}>
                    <td className="px-4 py-2 border font-bold capitalize" style={{ color: data.hex === '#FFFFFF' ? '#000' : data.hex }}>{name}</td>
                    <td className="px-4 py-2 border">{data.value === -1 ? '-' : data.value}</td>
                    <td className="px-4 py-2 border">x10<sup>{Math.log10(data.multiplier)}</sup></td>
                    <td className="px-4 py-2 border">{data.tolerance ? `±${data.tolerance}%` : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8">What is Tolerance?</h3>
          <p>
            Tolerance indicates how much the actual resistance can vary from the stated value. For example, a 1000 Ω resistor with a 5% tolerance (gold band) could actually measure anywhere between 950 Ω and 1050 Ω. High-precision circuits require lower tolerance resistors (e.g., 1% or 0.1%).
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8">Common Resistor Values</h3>
          <p>
            You might notice that resistors aren't available in every single value. They are manufactured in standard series, like the <strong>E12</strong> or <strong>E24</strong> series, which provide a range of values that cover the entire spectrum with their respective tolerances.
          </p>

          <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Electronics Tip</h3>
            <p className="text-blue-800 text-sm">
              When reading a resistor, look for the band that is slightly separated from the others or is thicker—that is usually the tolerance band, and you should read the resistor from the opposite end.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResistorCalculator;
