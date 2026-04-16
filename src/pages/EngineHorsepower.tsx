import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Settings, Info, BookOpen, HelpCircle } from 'lucide-react';

export const EngineHorsepowerCalculator: React.FC = () => {
  const [torque, setTorque] = useState<string>('300');
  const [rpm, setRpm] = useState<string>('5000');
  const [hp, setHp] = useState<number | null>(null);

  const calculate = () => {
    const t = parseFloat(torque);
    const r = parseFloat(rpm);
    if (!isNaN(t) && !isNaN(r)) {
      const result = (t * r) / 5252;
      setHp(result);
    }
  };

  React.useEffect(() => {
    calculate();
  }, [torque, rpm]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Engine Horsepower Calculator | Calculate HP from Torque & RPM</title>
        <meta name="description" content="Free engine horsepower calculator. Calculate HP using torque and RPM with the standard formula. Learn how horsepower is measured in 2026." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <Link to="/sitemap" className="hover:text-[#0066cc]">other</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">engine horsepower</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Engine Horsepower Calculator</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-6">
              <Settings className="w-5 h-5 text-[#0066cc]" />
              <h2 className="text-xl font-semibold">Engine Specifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">Torque (lb-ft)</label>
                <input
                  type="number"
                  value={torque}
                  onChange={(e) => setTorque(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700">RPM (Revolutions Per Minute)</label>
                <input
                  type="number"
                  value={rpm}
                  onChange={(e) => setRpm(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {hp !== null && (
            <div className="bg-[#0066cc] text-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <p className="text-blue-100 mb-2 uppercase tracking-wider font-semibold text-sm">Calculated Horsepower</p>
                <h3 className="text-5xl font-bold mb-2">{hp.toFixed(2)} HP</h3>
                <p className="text-blue-100 text-sm">Based on {torque} lb-ft @ {rpm} RPM</p>
              </div>
            </div>
          )}

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 prose prose-slate max-w-none">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-[#0066cc]" />
              <h2 className="text-2xl font-bold m-0">Understanding Engine Horsepower</h2>
            </div>
            
            <p>
              Horsepower (HP) is a unit of measurement of power, or the rate at which work is done, usually in reference to the output of engines or motors. In the context of internal combustion engines, horsepower is a mathematical calculation derived from torque and engine speed (RPM).
            </p>

            <h3>The Horsepower Formula</h3>
            <p>
              The standard formula used by dynamometers to calculate horsepower is:
            </p>
            <div className="bg-slate-50 p-4 rounded-lg font-mono text-center">
              HP = (Torque × RPM) / 5252
            </div>
            <p>
              Where:
              <ul>
                <li><strong>Torque:</strong> The rotational force produced by the engine, measured in pound-feet (lb-ft).</li>
                <li><strong>RPM:</strong> The speed at which the crankshaft is rotating.</li>
                <li><strong>5252:</strong> A constant that converts the units of torque and RPM into horsepower.</li>
              </ul>
            </p>

            <h3>Why 5252?</h3>
            <p>
              The number 5252 is not arbitrary. It comes from the definition of one horsepower: 33,000 foot-pounds of work per minute. When you divide 33,000 by 2π (the circumference of a circle with a 1-foot radius), you get approximately 5252. This is why torque and horsepower curves always cross at exactly 5252 RPM on a standard dynamometer graph.
            </p>

            <h3>Torque vs. Horsepower</h3>
            <p>
              While torque is a measure of "work," horsepower is a measure of "how fast that work is being done." Torque is what gets a vehicle moving (initial acceleration), while horsepower is what keeps it moving at high speeds.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0066cc]" />
              FAQ
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-slate-900">What is BHP?</h4>
                <p className="text-sm text-slate-600">Brake Horsepower (BHP) is the measure of an engine's horsepower before the loss in power caused by the gearbox and drive train.</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900">Can I calculate HP from CC?</h4>
                <p className="text-sm text-slate-600">Not accurately. Engine displacement (CC) relates to size, but HP depends on efficiency, tuning, and induction (turbo/superchargers).</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
            <h3 className="font-bold mb-4">Pro Tip</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To maximize acceleration, you generally want to shift gears so that the engine stays in its "power band"—the RPM range where it produces the most horsepower.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
