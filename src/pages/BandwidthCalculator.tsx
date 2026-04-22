import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


export const BandwidthCalculator: React.FC = () => {
  const [fileSize, setFileSize] = useState<number>(1000); // MB
  const [speed, setSpeed] = useState<number>(100); // Mbps
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    // 1 MB = 8 Mb
    setTime((fileSize * 8) / speed);
  }, [fileSize, speed]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Bandwidth Calculator | Download Time Tool 2026</title>
        <meta name="description" content="Calculate the download time of a file based on its size and the connection speed. Find the bandwidth of your network easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Bandwidth Calculator</h1>
        <p className="text-slate-600">Calculate the download time of a file based on its size and the connection speed.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Download Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">File Size (MB)</label>
              <input
                type="number"
                value={fileSize}
                onChange={(e) => setFileSize(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Connection Speed (Mbps)</label>
              <input
                type="number"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">Estimated Download Time</p>
              <p className="text-4xl font-bold text-[#0066cc]">{time.toFixed(2)} seconds</p>
              <p className="text-lg font-semibold text-slate-900">{(time / 60).toFixed(2)} minutes</p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: This calculation assumes a constant connection speed and no overhead.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CalculatorSEO 
        name="Bandwidth Calculator" 
        path="/bandwidth-calculator" 
        description="Estimate file download and upload times based on connection speed. Understand bitrate, network latency, and throughput in 2026."
      />
    </div>
  );
};
