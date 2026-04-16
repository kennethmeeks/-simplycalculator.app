import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


export const WordCounter: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [words, setWords] = useState<number>(0);
  const [chars, setChars] = useState<number>(0);
  const [sentences, setSentences] = useState<number>(0);
  const [paragraphs, setParagraphs] = useState<number>(0);

  useEffect(() => {
    const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    const charCount = text.length;
    const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphCount = text.split(/\n+/).filter(p => p.trim().length > 0).length;

    setWords(wordCount);
    setChars(charCount);
    setSentences(sentenceCount);
    setParagraphs(paragraphCount);
  }, [text]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Word Counter | Count Words, Characters, Sentences & Paragraphs 2026</title>
        <meta name="description" content="Free online word counter for 2026. Quickly count words, characters, sentences, and paragraphs in any text with instant results." />
      </Helmet>

      <h1>Word Counter</h1>
      <p>Quickly count words, characters, sentences, and paragraphs in any text for any purpose.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Input Text</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Text</label>
              <textarea 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                className="input-field w-full h-64 resize-none" 
                placeholder="Paste your text here..."
              />
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Results</div>
            <div className="result-box">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Words:</span>
                  <span className="font-bold text-[#0066cc]">{words}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Characters:</span>
                  <span className="font-bold text-[#0066cc]">{chars}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[#b3d9ff]">
                  <span className="font-bold">Sentences:</span>
                  <span className="font-bold text-[#0066cc]">{sentences}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold">Paragraphs:</span>
                  <span className="font-bold text-[#0066cc]">{paragraphs}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Word Counting</h2>
        <p>
          Word counting is a process of counting the number of words in a text. It is commonly used by writers, students, and professionals to meet length requirements and track progress.
        </p>
        <p>
          Our <strong>word counter 2026</strong> is designed to provide instant results, so you can see your total savings and the final cost at a glance.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">The Method</h3>
        <p>
          Our counter uses a simple algorithm to split text into words based on whitespace characters. It also counts characters, sentences, and paragraphs to provide a comprehensive overview of your text.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Use a Word Counter?</h3>
        <p>
          Word counters are useful for several reasons:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Length Requirements:</strong> They ensure that your text meets specific length requirements for essays, articles, and social media posts.</li>
          <li><strong>Progress Tracking:</strong> They allow you to track your writing progress over time and stay motivated.</li>
          <li><strong>Clarity:</strong> They help you identify overly long sentences and paragraphs that may be difficult to read.</li>
        </ol>
      </div>
    </div>
  );
};
