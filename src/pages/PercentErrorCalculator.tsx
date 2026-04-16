import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { AlertCircle, Info } from 'lucide-react';

export const PercentErrorCalculator: React.FC = () => {
  const [experimental, setExperimental] = useState(95);
  const [theoretical, setTheoretical] = useState(100);
  
  const [percentError, setPercentError] = useState(0);

  useEffect(() => {
    if (theoretical !== 0) {
      const error = Math.abs((experimental - theoretical) / theoretical) * 100;
      setPercentError(Number(error.toFixed(4)));
    }
  }, [experimental, theoretical]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Percent Error Calculator | Calculate Accuracy & Precision</title>
        <meta name="description" content="Free online percent error calculator. Measure the accuracy of your experimental results compared to theoretical values in 2026." />
      </Helmet>

      <h1>Percent Error Calculator</h1>
      <p>Calculate the percentage error between an experimental value and a theoretical (accepted) value. Measure the accuracy of your measurements and experiments.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Measurement Values</div>
          <div className="space-y-6">
            <div>
              <label className="input-label">Experimental Value (Measured)</label>
              <input 
                type="number" 
                value={experimental} 
                onChange={(e) => setExperimental(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
            <div>
              <label className="input-label">Theoretical Value (Accepted)</label>
              <input 
                type="number" 
                value={theoretical} 
                onChange={(e) => setTheoretical(Number(e.target.value))} 
                className="input-field" 
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Result</div>
            <div className="space-y-6">
              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10 text-center">
                <div className="text-xs text-slate-500 uppercase font-bold">Percent Error</div>
                <div className="text-5xl font-bold text-[#0066cc]">{percentError}%</div>
              </div>
              
              <div className="p-4 bg-slate-50 rounded border border-slate-100 text-sm text-slate-600 italic">
                A lower percent error indicates higher accuracy in your measurement.
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Measuring Accuracy: A Percent Error Guide</h2>
        <p>
          In science and engineering, no measurement is perfect. Percent error is a mathematical tool used to quantify how close a measured value is to the true or accepted value. Our <strong>percent error calculator</strong> helps you analyze your experimental data in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Percent Error Formula</h3>
        <p>
          The formula for percent error is the absolute difference between the experimental and theoretical values, divided by the theoretical value, multiplied by 100:
        </p>
        <div className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 my-4">
          % Error = (|Experimental - Theoretical| / Theoretical) * 100
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Accuracy vs. Precision</h3>
        <p>It's important to understand the difference between these two related concepts:</p>
        <ul>
          <li><strong>Accuracy:</strong> How close a measurement is to the true or accepted value. Percent error measures accuracy.</li>
          <li><strong>Precision:</strong> How close multiple measurements are to each other, regardless of whether they are close to the true value.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Sources of Error</h3>
        <ul>
          <li><strong>Human Error:</strong> Mistakes made by the person performing the experiment (e.g., misreading a scale).</li>
          <li><strong>Instrumental Error:</strong> Limitations or inaccuracies in the measuring tools (e.g., an uncalibrated scale).</li>
          <li><strong>Environmental Factors:</strong> Changes in temperature, humidity, or pressure that affect the experiment.</li>
          <li><strong>Random Error:</strong> Unpredictable fluctuations that occur in any measurement.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">Can percent error be negative?</p>
            <p>In most scientific contexts, we use the absolute value of the difference, so percent error is always positive. This focuses on the <em>magnitude</em> of the error rather than its direction.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is an acceptable percent error?</p>
            <p>This depends entirely on the field. In a high school chemistry lab, 5-10% might be acceptable. In precision engineering or aerospace, even 0.01% might be too high.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I reduce percent error?</p>
            <p>Calibrate your instruments, perform multiple trials and average the results, and use more precise measuring tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
