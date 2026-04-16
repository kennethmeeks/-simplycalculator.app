import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';

import { Timer, Zap, RefreshCw, Keyboard } from 'lucide-react';

export const WordsPerMinuteCalculator: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const sampleText = "The quick brown fox jumps over the lazy dog. Typing speed is measured in words per minute, which is a common metric for assessing keyboard proficiency. Practice makes perfect when it comes to developing muscle memory for touch typing.";

  const startTest = () => {
    setText('');
    setStartTime(Date.now());
    setIsFinished(false);
    setElapsedTime(0);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (!startTime && value.length > 0) {
      startTest();
    }
    setText(value);

    if (value === sampleText) {
      finishTest();
    }
  };

  const finishTest = () => {
    setIsFinished(true);
    if (timerRef.current) clearInterval(timerRef.current);
    const endTime = Date.now();
    const minutes = (endTime - (startTime || endTime)) / 60000;
    const words = sampleText.split(' ').length;
    setWpm(Math.round(words / (minutes || 1)));
    
    // Simple accuracy check
    let errors = 0;
    const inputWords = text.split(' ');
    const targetWords = sampleText.split(' ');
    targetWords.forEach((word, i) => {
      if (inputWords[i] !== word) errors++;
    });
    setAccuracy(Math.round(((targetWords.length - errors) / targetWords.length) * 100));
  };

  const reset = () => {
    setText('');
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setIsFinished(false);
    setElapsedTime(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Words Per Minute (WPM) Calculator | Typing Speed Test</title>
        <meta name="description" content="Free online WPM calculator and typing speed test. Measure your typing speed in words per minute and check your accuracy in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Words Per Minute Calculator</h1>
        <p className="text-slate-600">Test your typing speed and accuracy with our interactive WPM tool.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="mb-4 p-4 bg-slate-50 border border-slate-200 rounded font-mono text-lg leading-relaxed select-none">
              {sampleText}
            </div>
            
            <textarea 
              value={text} 
              onChange={handleInput} 
              disabled={isFinished}
              className="w-full h-32 p-4 text-lg border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] font-mono"
              placeholder="Start typing the text above to begin the test..."
            />

            <div className="mt-4 flex justify-between items-center">
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-slate-500">
                  <Timer className="w-4 h-4" />
                  <span className="font-mono">{elapsedTime}s</span>
                </div>
              </div>
              <button 
                onClick={reset}
                className="flex items-center gap-2 text-sm text-[#0066cc] hover:underline font-bold"
              >
                <RefreshCw className="w-4 h-4" /> Reset Test
              </button>
            </div>
          </div>

          {isFinished && (
            <div className="bg-green-50 border border-green-100 rounded p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Test Complete!
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded border border-green-200 text-center">
                  <div className="text-3xl font-bold text-green-700">{wpm}</div>
                  <div className="text-xs text-green-600 uppercase font-bold">WPM</div>
                </div>
                <div className="p-4 bg-white rounded border border-green-200 text-center">
                  <div className="text-3xl font-bold text-green-700">{accuracy}%</div>
                  <div className="text-xs text-green-600 uppercase font-bold">Accuracy</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Keyboard className="w-4 h-4" />
              Typing Benchmarks
            </h3>
            <ul className="text-sm text-slate-600 space-y-3">
              <li className="flex justify-between border-b border-slate-100 pb-2">
                <span>Average:</span>
                <span className="font-bold">40 WPM</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-2">
                <span>Professional:</span>
                <span className="font-bold">65-75 WPM</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-2">
                <span>Competitive:</span>
                <span className="font-bold">100+ WPM</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">How WPM is Calculated</h2>
        <p>
          <strong>Words Per Minute (WPM)</strong> is the standard measurement for typing speed. In the context of typing tests, a "word" is standardized as 5 characters (including spaces and punctuation). This ensures that typing long words doesn't unfairly penalize your score.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The WPM Formula</h3>
        <div className="bg-slate-50 p-4 rounded font-mono text-sm border border-slate-200 my-4">
          WPM = (Total Characters / 5) / Time in Minutes
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Tips to Increase Your Typing Speed</h3>
        <ul>
          <li><strong>Proper Posture:</strong> Sit up straight and keep your wrists slightly elevated.</li>
          <li><strong>Home Row:</strong> Always return your fingers to the "ASDF" and "JKL;" keys.</li>
          <li><strong>Don't Look Down:</strong> Practice touch typing by keeping your eyes on the screen, not the keyboard.</li>
          <li><strong>Consistency over Speed:</strong> Focus on accuracy first. Speed will naturally follow as you develop muscle memory.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Typing Speed Matters in 2026</h3>
        <p>
          Even with the rise of voice-to-text and AI assistants, typing remains the primary way we interact with computers and communicate professionally. A higher WPM allows you to get your thoughts down faster, respond to emails more quickly, and increase your overall digital productivity.
        </p>
      </div>
    </div>
  );
};
