import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const TimeZoneConverter: React.FC = () => {
  const [time, setTime] = useState<string>('12:00');
  const [fromZone, setFromZone] = useState<string>('UTC');
  const [toZone, setToZone] = useState<string>('America/New_York');
  const [result, setResult] = useState<string | null>(null);

  const convertTime = () => {
    const [hours, minutes] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);

    const fromOffset = new Intl.DateTimeFormat('en-US', { timeZone: fromZone, timeZoneName: 'short' }).formatToParts(date).find(p => p.type === 'timeZoneName')?.value || '';
    const toOffset = new Intl.DateTimeFormat('en-US', { timeZone: toZone, timeZoneName: 'short' }).formatToParts(date).find(p => p.type === 'timeZoneName')?.value || '';

    const formattedTime = new Intl.DateTimeFormat('en-US', {
      timeZone: toZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);

    setResult(formattedTime);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Time Zone Converter | Convert Between Global Time Zones 2026</title>
        <meta name="description" content="Free online time zone converter for 2026. Quickly convert between global time zones with instant results." />
      </Helmet>

      <h1>Time Zone Converter</h1>
      <p>Quickly convert between global time zones for travel and communication.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Converter Settings</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Time</label>
              <input 
                type="time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                className="input-field w-full" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">From Zone</label>
                <select 
                  value={fromZone} 
                  onChange={(e) => setFromZone(e.target.value)} 
                  className="input-field w-full"
                >
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">New York (EST)</option>
                  <option value="Europe/London">London (GMT)</option>
                  <option value="Asia/Tokyo">Tokyo (JST)</option>
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">To Zone</label>
                <select 
                  value={toZone} 
                  onChange={(e) => setToZone(e.target.value)} 
                  className="input-field w-full"
                >
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">New York (EST)</option>
                  <option value="Europe/London">London (GMT)</option>
                  <option value="Asia/Tokyo">Tokyo (JST)</option>
                </select>
              </div>
            </div>
            <button 
              onClick={convertTime}
              className="w-full bg-[#0066cc] text-white py-3 rounded-lg font-bold hover:bg-[#0052a3] transition-colors"
            >
              Convert Time
            </button>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="text-center space-y-4">
                {result !== null ? (
                  <div className="space-y-2">
                    <div className="text-sm text-slate-500">Converted Time</div>
                    <div className="text-5xl font-bold text-[#0066cc]">{result}</div>
                    <div className="text-sm text-slate-400 mt-4">
                      {time} in {fromZone} is {result} in {toZone}.
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-slate-500 py-4">Enter a time to see results!</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Time Zones</h2>
        <p>
          Time zones are a way of dividing the earth into regions that share the same time. They are commonly used for travel and communication to coordinate activities across different regions.
        </p>
        <p>
          Our <strong>time zone converter 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our converter uses a simple algorithm to convert between global time zones. It uses the standard time zone database to provide accurate results.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Time Zone Converter?</h3>
        <p>
          Time zone converters are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Travel:</strong> They provide a fun and insightful way to convert between different time zones and plan for travel.</li>
          <li><strong>Communication:</strong> They can be a great tool for coordinating activities across different regions and improving communication.</li>
          <li><strong>Wellness:</strong> They offer a unique perspective on your potential for health and wellness.</li>
        </ol>
      </div>
    </div>
  );
};
