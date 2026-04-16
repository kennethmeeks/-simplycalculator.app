import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const URLConverter: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleEncode = () => {
    try {
      setOutput(encodeURIComponent(input));
    } catch (e) {
      setOutput('Error: Invalid input for URL encoding.');
    }
  };

  const handleDecode = () => {
    try {
      setOutput(decodeURIComponent(input));
    } catch (e) {
      setOutput('Error: Invalid input for URL decoding.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>URL Converter | Encode and Decode Tool 2026</title>
        <meta name="description" content="Encode and decode text to and from URL format. Find the URL representation of your text easily and quickly." />
      </Helmet>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">URL Converter</h1>
        <p className="text-slate-600">Encode and decode text to and from URL format.</p>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Input Text</h2>
          <div className="space-y-4">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text to encode or decode..."
              className="w-full h-40 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0066cc] outline-none font-mono"
            />
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleEncode}
                className="bg-[#0066cc] text-white py-3 rounded-lg font-semibold hover:bg-[#0052a3] transition-colors"
              >
                Encode
              </button>
              <button
                onClick={handleDecode}
                className="bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
              >
                Decode
              </button>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Output Text</h2>
          <div className="space-y-6">
            <textarea
              value={output}
              readOnly
              className="w-full h-40 px-4 py-2 border border-slate-300 rounded-lg bg-white outline-none font-mono"
            />
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 italic">
                Note: URL encoding (percent-encoding) is a mechanism for encoding information in a Uniform Resource Identifier (URI).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate max-w-none">
        <h2>What is URL Encoding?</h2>
        <p>
          URL encoding (percent-encoding) is a mechanism for encoding information in a Uniform Resource Identifier (URI). It's a useful tool for quantifying the uncertainty of an estimate and identifying the range of values for a data set.
        </p>
        <h3>How to Use URL Encoding</h3>
        <p>
          To use URL encoding, you simply enter your text and select whether you want to encode or decode it. The calculator will then perform the calculation and display the URL representation of your text.
        </p>
        <h3>Why URL Encoding Matters</h3>
        <p>
          URL encoding is critical for analyzing and interpreting data in a wide range of fields, including computer science, engineering, and telecommunications. It provides a simple and effective way to quantify and communicate complex information.
        </p>
      </div>
    </div>
  );
};
