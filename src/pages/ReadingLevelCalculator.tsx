import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { BookOpen, FileText, Type, BarChart } from 'lucide-react';

export const ReadingLevelCalculator: React.FC = () => {
  const [text, setText] = useState<string>('The quick brown fox jumps over the lazy dog. This is a sample sentence to test the reading level calculator. It calculates based on words, sentences, and syllables.');
  const [stats, setStats] = useState({
    words: 0,
    sentences: 0,
    syllables: 0,
    gradeLevel: 0,
    readingEase: 0
  });

  const countSyllables = (word: string) => {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    const syllables = word.match(/[aeiouy]{1,2}/g);
    return syllables ? syllables.length : 1;
  };

  useEffect(() => {
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    
    let totalSyllables = 0;
    words.forEach(word => {
      totalSyllables += countSyllables(word.replace(/[^a-zA-Z]/g, ''));
    });

    const wordCount = words.length;
    const sentenceCount = sentences.length;

    if (wordCount > 0 && sentenceCount > 0) {
      // Flesch-Kincaid Grade Level: 0.39 * (words/sentences) + 11.8 * (syllables/words) - 15.59
      const gradeLevel = 0.39 * (wordCount / sentenceCount) + 11.8 * (totalSyllables / wordCount) - 15.59;
      
      // Flesch Reading Ease: 206.835 - 1.015 * (words/sentences) - 84.6 * (syllables/words)
      const readingEase = 206.835 - 1.015 * (wordCount / sentenceCount) - 84.6 * (totalSyllables / wordCount);

      setStats({
        words: wordCount,
        sentences: sentenceCount,
        syllables: totalSyllables,
        gradeLevel: Number(gradeLevel.toFixed(1)),
        readingEase: Number(readingEase.toFixed(1))
      });
    }
  }, [text]);

  const getReadingEaseDescription = (score: number) => {
    if (score >= 90) return 'Very Easy (5th Grade)';
    if (score >= 80) return 'Easy (6th Grade)';
    if (score >= 70) return 'Fairly Easy (7th Grade)';
    if (score >= 60) return 'Standard (8th-9th Grade)';
    if (score >= 50) return 'Fairly Difficult (10th-12th Grade)';
    if (score >= 30) return 'Difficult (College)';
    return 'Very Difficult (College Graduate)';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Reading Level Calculator | Flesch-Kincaid Grade Level</title>
        <meta name="description" content="Free online reading level calculator. Analyze your text using the Flesch-Kincaid Grade Level and Reading Ease formulas in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Reading Level Calculator</h1>
        <p className="text-slate-600">Paste your text below to calculate its reading grade level and accessibility score.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <label className="input-label">Your Text</label>
            <textarea 
              value={text} 
              onChange={(e) => setText(e.target.value)} 
              className="w-full h-64 p-4 text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] font-serif leading-relaxed"
              placeholder="Paste your content here..."
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded text-center">
              <div className="text-xs text-slate-400 font-bold uppercase mb-1">Words</div>
              <div className="text-xl font-bold text-slate-900">{stats.words}</div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded text-center">
              <div className="text-xs text-slate-400 font-bold uppercase mb-1">Sentences</div>
              <div className="text-xl font-bold text-slate-900">{stats.sentences}</div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded text-center">
              <div className="text-xs text-slate-400 font-bold uppercase mb-1">Syllables</div>
              <div className="text-xl font-bold text-slate-900">{stats.syllables}</div>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded text-center">
              <div className="text-xs text-slate-400 font-bold uppercase mb-1">Avg Words/Sent</div>
              <div className="text-xl font-bold text-slate-900">{(stats.words / (stats.sentences || 1)).toFixed(1)}</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-indigo-600 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <BarChart className="w-5 h-5" />
              Analysis Results
            </h2>
            <div className="space-y-6">
              <div className="text-center py-4 border-b border-indigo-500/30">
                <div className="text-4xl font-bold mb-1">Grade {stats.gradeLevel}</div>
                <div className="text-xs font-medium text-indigo-100 uppercase tracking-wider">Flesch-Kincaid Grade Level</div>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold mb-1">{stats.readingEase}</div>
                <div className="text-xs font-medium text-indigo-100 uppercase tracking-wider">Reading Ease Score</div>
                <div className="mt-2 text-[10px] text-indigo-200 italic">{getReadingEaseDescription(stats.readingEase)}</div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Target Audiences
            </h3>
            <ul className="text-sm text-slate-600 space-y-3">
              <li className="flex gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <strong>General Public:</strong> Aim for Grade 8.
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <strong>Technical:</strong> Grade 12+.
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-600 font-bold">•</span>
                <strong>Marketing:</strong> Grade 6-7.
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Reading Level Scores in 2026</h2>
        <p>
          Our <strong>reading level calculator</strong> uses the Flesch-Kincaid readability tests, which are the most widely used formulas for measuring how easy a piece of text is to read. These scores are used by educators, marketers, and government agencies to ensure content is accessible to its intended audience.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">Flesch-Kincaid Grade Level</h3>
        <p>
          This score translates the complexity of your writing into a U.S. grade level. For example, a score of 8.0 means an 8th grader can understand the text. Most newspapers and popular websites aim for a score between 7.0 and 9.0 to ensure broad accessibility.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Flesch Reading Ease</h3>
        <p>
          This is a score from 0 to 100. Higher scores indicate material that is easier to read; lower numbers mark passages that are more difficult.
        </p>
        <ul>
          <li><strong>90-100:</strong> Very easy to read. Easily understood by an average 11-year-old student.</li>
          <li><strong>60-70:</strong> Standard. Easily understood by 13- to 15-year-old students.</li>
          <li><strong>0-30:</strong> Best understood by university graduates.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Improve Readability</h3>
        <p>
          If your score is too high (too difficult), try these tips:
        </p>
        <ul>
          <li><strong>Shorten sentences:</strong> Break long, complex sentences into two.</li>
          <li><strong>Use simpler words:</strong> Replace multi-syllabic words with shorter synonyms.</li>
          <li><strong>Remove jargon:</strong> Avoid technical terms unless your audience is specialized.</li>
          <li><strong>Use active voice:</strong> It's generally clearer and more direct than passive voice.</li>
        </ul>
      </div>
    </div>
  );
};
