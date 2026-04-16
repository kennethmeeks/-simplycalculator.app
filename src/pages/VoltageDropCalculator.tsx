import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const VoltageDropCalculator: React.FC = () => {
  const [voltage, setVoltage] = useState<number>(120);
  const [current, setCurrent] = useState<number>(15);
  const [distance, setDistance] = useState<number>(100);
  const [wireGauge, setWireGauge] = useState<string>('12');
  const [phase, setPhase] = useState<'single' | 'three'>('single');
  const [material, setMaterial] = useState<'copper' | 'aluminum'>('copper');

  // Resistance per 1000ft (approximate values for standard copper/aluminum at 75C)
  const wireResistance: Record<string, { copper: number; aluminum: number }> = {
    '14': { copper: 3.07, aluminum: 5.04 },
    '12': { copper: 1.93, aluminum: 3.18 },
    '10': { copper: 1.21, aluminum: 2.00 },
    '8': { copper: 0.764, aluminum: 1.26 },
    '6': { copper: 0.491, aluminum: 0.808 },
    '4': { copper: 0.308, aluminum: 0.508 },
    '2': { copper: 0.194, aluminum: 0.319 },
    '1': { copper: 0.154, aluminum: 0.253 },
    '1/0': { copper: 0.122, aluminum: 0.201 },
    '2/0': { copper: 0.0967, aluminum: 0.159 },
    '3/0': { copper: 0.0766, aluminum: 0.126 },
    '4/0': { copper: 0.0608, aluminum: 0.100 },
  };

  const calculateVoltageDrop = () => {
    const resistance = wireResistance[wireGauge][material];
    const totalResistance = (resistance / 1000) * distance * 2; // *2 for return path in single phase
    
    let drop = current * totalResistance;
    if (phase === 'three') {
      drop = (drop * Math.sqrt(3)) / 2; // Adjusted for 3-phase
    }

    const percentage = (drop / voltage) * 100;
    return { drop, percentage };
  };

  const { drop, percentage } = calculateVoltageDrop();

  return (
    <>
      <Helmet>
        <title>Voltage Drop Calculator | Electrical Wire Sizing Tool</title>
        <meta name="description" content="Calculate voltage drop for electrical circuits. Estimate voltage loss based on wire gauge, distance, current, and material. Free tool for electricians and DIYers." />
        <meta name="keywords" content="voltage drop calculator, electrical calculator, wire gauge calculator, voltage loss, copper vs aluminum wire, single phase voltage drop, three phase voltage drop" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Voltage Drop Calculator</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-yellow-400 rounded-full"></span>
              Circuit Parameters
            </h2>
            
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Voltage (V)</label>
                  <input
                    type="number"
                    value={voltage}
                    onChange={(e) => setVoltage(Number(e.target.value))}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Current (A)</label>
                  <input
                    type="number"
                    value={current}
                    onChange={(e) => setCurrent(Number(e.target.value))}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">One-Way Distance (ft)</label>
                <input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Wire Gauge (AWG)</label>
                  <select
                    value={wireGauge}
                    onChange={(e) => setWireGauge(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                  >
                    {Object.keys(wireResistance).map((gauge) => (
                      <option key={gauge} value={gauge}>{gauge} AWG</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Material</label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value as 'copper' | 'aluminum')}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none transition-all"
                  >
                    <option value="copper">Copper</option>
                    <option value="aluminum">Aluminum</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Phase</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={phase === 'single'}
                      onChange={() => setPhase('single')}
                      className="w-4 h-4 text-yellow-400 focus:ring-yellow-400"
                    />
                    <span className="text-sm text-gray-700">Single Phase</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      checked={phase === 'three'}
                      onChange={() => setPhase('three')}
                      className="w-4 h-4 text-yellow-400 focus:ring-yellow-400"
                    />
                    <span className="text-sm text-gray-700">Three Phase</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-2xl text-white flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-8 text-yellow-400">Calculation Results</h2>
            
            <div className="space-y-8">
              <div>
                <span className="text-gray-400 text-sm uppercase tracking-wider block mb-1">Voltage Drop</span>
                <span className="text-4xl font-bold text-white">{drop.toFixed(2)}V</span>
              </div>
              
              <div>
                <span className="text-gray-400 text-sm uppercase tracking-wider block mb-1">Voltage Drop Percentage</span>
                <div className="flex items-end gap-3">
                  <span className={`text-4xl font-bold ${percentage > 3 ? 'text-red-400' : 'text-green-400'}`}>
                    {percentage.toFixed(2)}%
                  </span>
                  <span className="text-sm text-gray-500 mb-1">
                    {percentage > 3 ? '(Exceeds 3% limit)' : '(Within 3% limit)'}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-gray-400 text-sm uppercase tracking-wider block mb-1">Voltage at Load</span>
                <span className="text-3xl font-semibold text-gray-200">{(voltage - drop).toFixed(2)}V</span>
              </div>
            </div>
          </div>
        </div>

        

        <section className="mt-16 prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900">Understanding Voltage Drop</h2>
          <p>
            Voltage drop is the decrease in electrical potential along the path of a current flowing in an electrical circuit. This phenomenon occurs because electrical wires have a small amount of resistance. As current flows through this resistance, some energy is lost as heat, resulting in a lower voltage at the destination (the load) than at the source.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8">Why Does Voltage Drop Matter?</h3>
          <p>
            Excessive voltage drop can lead to several problems in electrical systems:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Equipment Performance:</strong> Motors may run hotter and less efficiently, lights may flicker or appear dim, and electronic devices may malfunction or shut down.</li>
            <li><strong>Energy Efficiency:</strong> Energy lost as heat in the wires is wasted energy, increasing your electricity costs.</li>
            <li><strong>Safety:</strong> Significant voltage drop can cause wires to overheat, potentially leading to electrical fires.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8">The 3% Rule</h3>
          <p>
            The National Electrical Code (NEC) recommends a maximum voltage drop of <strong>3%</strong> for branch circuits and a total drop of <strong>5%</strong> for both the feeder and branch circuits combined. Our calculator highlights results in red if they exceed this 3% threshold to help you identify potential issues.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8">Factors Affecting Voltage Drop</h3>
          <p>
            Several variables influence the amount of voltage lost in a circuit:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Wire Length</h4>
              <p className="text-sm">The longer the wire, the more resistance the current encounters, leading to a higher voltage drop.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Wire Gauge (Size)</h4>
              <p className="text-sm">Thicker wires (smaller AWG numbers) have less resistance and therefore result in lower voltage drop.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Current (Amperage)</h4>
              <p className="text-sm">As the current flowing through the circuit increases, the voltage drop increases proportionally.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Wire Material</h4>
              <p className="text-sm">Copper is a better conductor than aluminum, meaning it has lower resistance and less voltage drop for the same size wire.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8">How to Reduce Voltage Drop</h3>
          <p>
            If your calculated voltage drop is too high, you can:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Increase Wire Size:</strong> Moving to a thicker gauge (e.g., from 12 AWG to 10 AWG) is the most common solution.</li>
            <li><strong>Reduce the Load:</strong> Lowering the current on the circuit will reduce the drop.</li>
            <li><strong>Shorten the Distance:</strong> If possible, move the load closer to the power source.</li>
            <li><strong>Increase Source Voltage:</strong> Higher voltage systems (e.g., 240V vs 120V) experience lower percentage drops for the same power level.</li>
          </ol>

          <div className="mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
            <h3 className="text-lg font-bold text-yellow-900 mb-2">Pro Tip for Electricians</h3>
            <p className="text-yellow-800 text-sm">
              Always consider the ambient temperature. Resistance increases with temperature. Standard tables usually assume 75°C (167°F). If your wiring is in a very hot attic or industrial environment, you may need to de-rate your wire capacity further.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default VoltageDropCalculator;
