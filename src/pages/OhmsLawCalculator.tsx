import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const OhmsLawCalculator: React.FC = () => {
  const [voltage, setVoltage] = useState<string>('12');
  const [current, setCurrent] = useState<string>('2');
  const [resistance, setResistance] = useState<string>('6');
  const [power, setPower] = useState<string>('24');
  const [lastChanged, setLastChanged] = useState<string[]>(['voltage', 'current']);

  const calculate = (changedField: string, value: string) => {
    const v = parseFloat(changedField === 'voltage' ? value : voltage);
    const i = parseFloat(changedField === 'current' ? value : current);
    const r = parseFloat(changedField === 'resistance' ? value : resistance);
    const p = parseFloat(changedField === 'power' ? value : power);

    let newV = v, newI = i, newR = r, newP = p;

    // Update the list of last two changed fields
    const updatedLastChanged = [changedField, ...lastChanged.filter(f => f !== changedField)].slice(0, 2);
    setLastChanged(updatedLastChanged);

    if (updatedLastChanged.includes('voltage') && updatedLastChanged.includes('current')) {
      newR = v / i;
      newP = v * i;
    } else if (updatedLastChanged.includes('voltage') && updatedLastChanged.includes('resistance')) {
      newI = v / r;
      newP = (v * v) / r;
    } else if (updatedLastChanged.includes('voltage') && updatedLastChanged.includes('power')) {
      newI = p / v;
      newR = (v * v) / p;
    } else if (updatedLastChanged.includes('current') && updatedLastChanged.includes('resistance')) {
      newV = i * r;
      newP = (i * i) * r;
    } else if (updatedLastChanged.includes('current') && updatedLastChanged.includes('power')) {
      newV = p / i;
      newR = p / (i * i);
    } else if (updatedLastChanged.includes('resistance') && updatedLastChanged.includes('power')) {
      newV = Math.sqrt(p * r);
      newI = Math.sqrt(p / r);
    }

    if (changedField !== 'voltage') setVoltage(newV.toString());
    if (changedField !== 'current') setCurrent(newI.toString());
    if (changedField !== 'resistance') setResistance(newR.toString());
    if (changedField !== 'power') setPower(newP.toString());
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === 'voltage') setVoltage(value);
    if (field === 'current') setCurrent(value);
    if (field === 'resistance') setResistance(value);
    if (field === 'power') setPower(value);
    
    if (value && !isNaN(parseFloat(value))) {
      calculate(field, value);
    }
  };

  return (
    <>
      <Helmet>
        <title>Ohm's Law Calculator | Voltage, Current, Resistance & Power</title>
        <meta name="description" content="Calculate any two values of Ohm's Law (V, I, R, P) by entering the other two. Free online tool for electrical circuit calculations." />
        <meta name="keywords" content="ohms law calculator, voltage calculator, current calculator, resistance calculator, power calculator, electrical formulas, watts law" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Ohm's Law Calculator</h1>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mb-12">
          <p className="text-gray-600 mb-8 text-center bg-blue-50 p-4 rounded-lg border border-blue-100">
            Enter any <strong>two</strong> values to calculate the other two. The last two fields you edit will be used as inputs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-6 rounded-xl border-2 transition-all ${lastChanged.includes('voltage') ? 'border-blue-500 bg-blue-50' : 'border-gray-100 bg-gray-50'}`}>
              <label className="block text-sm font-bold text-gray-500 uppercase mb-2">Voltage (V)</label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={voltage}
                  onChange={(e) => handleInputChange('voltage', e.target.value)}
                  className="text-3xl font-bold bg-transparent border-none focus:ring-0 w-full"
                />
                <span className="text-2xl font-bold text-gray-400">V</span>
              </div>
            </div>

            <div className={`p-6 rounded-xl border-2 transition-all ${lastChanged.includes('current') ? 'border-blue-500 bg-blue-50' : 'border-gray-100 bg-gray-50'}`}>
              <label className="block text-sm font-bold text-gray-500 uppercase mb-2">Current (I)</label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={current}
                  onChange={(e) => handleInputChange('current', e.target.value)}
                  className="text-3xl font-bold bg-transparent border-none focus:ring-0 w-full"
                />
                <span className="text-2xl font-bold text-gray-400">A</span>
              </div>
            </div>

            <div className={`p-6 rounded-xl border-2 transition-all ${lastChanged.includes('resistance') ? 'border-blue-500 bg-blue-50' : 'border-gray-100 bg-gray-50'}`}>
              <label className="block text-sm font-bold text-gray-500 uppercase mb-2">Resistance (R)</label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={resistance}
                  onChange={(e) => handleInputChange('resistance', e.target.value)}
                  className="text-3xl font-bold bg-transparent border-none focus:ring-0 w-full"
                />
                <span className="text-2xl font-bold text-gray-400">Ω</span>
              </div>
            </div>

            <div className={`p-6 rounded-xl border-2 transition-all ${lastChanged.includes('power') ? 'border-blue-500 bg-blue-50' : 'border-gray-100 bg-gray-50'}`}>
              <label className="block text-sm font-bold text-gray-500 uppercase mb-2">Power (P)</label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={power}
                  onChange={(e) => handleInputChange('power', e.target.value)}
                  className="text-3xl font-bold bg-transparent border-none focus:ring-0 w-full"
                />
                <span className="text-2xl font-bold text-gray-400">W</span>
              </div>
            </div>
          </div>
        </div>

        

        <section className="mt-16 prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900">Understanding Ohm's Law</h2>
          <p>
            Ohm's Law is the most fundamental principle in electronics and electrical engineering. It describes the relationship between three key electrical properties: <strong>Voltage (V)</strong>, <strong>Current (I)</strong>, and <strong>Resistance (R)</strong>.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8">The Core Formula</h3>
          <p className="bg-gray-900 text-white p-6 rounded-xl text-center text-3xl font-mono">
            V = I × R
          </p>
          <p className="mt-4">
            This means that the voltage (V) across a conductor is equal to the current (I) flowing through it multiplied by the resistance (R) of that conductor.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8">What are these units?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="font-bold text-blue-600 mb-2">Voltage (V)</h4>
              <p className="text-sm">Measured in <strong>Volts</strong>. It is the electrical pressure that pushes current through a circuit, similar to water pressure in a pipe.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="font-bold text-blue-600 mb-2">Current (I)</h4>
              <p className="text-sm">Measured in <strong>Amperes (Amps)</strong>. It is the flow of electrical charge, similar to the flow rate of water in a pipe.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="font-bold text-blue-600 mb-2">Resistance (R)</h4>
              <p className="text-sm">Measured in <strong>Ohms (Ω)</strong>. It is the opposition to the flow of current, similar to the size of the pipe (smaller pipe = more resistance).</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8">Adding Power: Watt's Law</h3>
          <p>
            Power (P), measured in <strong>Watts (W)</strong>, is the rate at which electrical energy is consumed or produced. It is related to voltage and current by the formula:
          </p>
          <p className="bg-gray-900 text-white p-6 rounded-xl text-center text-3xl font-mono">
            P = V × I
          </p>
          <p className="mt-4">
            By combining Ohm's Law and Watt's Law, we can derive several other useful formulas:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>P = I<sup>2</sup> × R</li>
            <li>P = V<sup>2</sup> / R</li>
            <li>I = V / R</li>
            <li>R = V / I</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8">Real-World Examples</h3>
          <p>
            Understanding Ohm's Law helps in everyday situations:
          </p>
          <ol className="list-decimal pl-6 space-y-4">
            <li><strong>Choosing a Fuse:</strong> If you know a device uses 1200 Watts at 120 Volts, you can calculate the current (I = P / V = 10 Amps) and ensure your fuse or circuit breaker is rated appropriately.</li>
            <li><strong>LED Resistors:</strong> When connecting an LED to a battery, you must use a resistor to limit the current. If the battery is 9V and the LED needs 2V at 0.02A, the resistor must drop 7V (9-2). Using Ohm's Law (R = V / I = 7 / 0.02), you need a 350 Ω resistor.</li>
            <li><strong>Heating Elements:</strong> A space heater works by passing current through a high-resistance wire. If the resistance is 10 Ω and the voltage is 120V, the power consumed is P = V<sup>2</sup> / R = 1440 Watts.</li>
          </ol>

          <div className="mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <h3 className="text-lg font-bold text-yellow-900 mb-2">Safety Warning</h3>
            <p className="text-yellow-800 text-sm">
              Always be extremely careful when working with electricity. High voltage and high current can be lethal. These calculations are for educational and planning purposes only. Always consult a qualified electrician for actual electrical work.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default OhmsLawCalculator;
