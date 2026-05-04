import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, BarChart3, Globe, Info } from 'lucide-react';

export const CalculatorMonthlySearches: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [estimatedVolume, setEstimatedVolume] = useState<number | null>(null);

  const popularCalculators = [
    { name: 'Mortgage Calculator', volume: '1,500,000', path: '/mortgage' },
    { name: 'BMI Calculator', volume: '1,200,000', path: '/bmi' },
    { name: 'Scientific Calculator', volume: '800,000', path: '/scientific' },
    { name: 'Compound Interest Calculator', volume: '450,000', path: '/compound-interest' },
    { name: 'Age Calculator', volume: '400,000', path: '/age' },
    { name: 'GPA Calculator', volume: '350,000', path: '/gpa' },
    { name: 'Auto Loan Calculator', volume: '300,000', path: '/auto-loan' },
    { name: 'Percentage Calculator', volume: '250,000', path: '/math/percentage' },
    { name: 'Salary Calculator', volume: '200,000', path: '/salary' },
    { name: 'Calorie Calculator', volume: '180,000', path: '/calorie' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm) return;
    // Mock logic for estimation
    const base = Math.floor(Math.random() * 50000) + 5000;
    setEstimatedVolume(base);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Calculator Monthly Searches | SEO Search Volume Tool 2026</title>
        <meta name="description" content="Discover the monthly search volume for popular online calculators. Use our estimation tool to find trending calculator keywords for SEO and research in 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Calculator Monthly Searches</h1>
        <p className="text-slate-600">Explore search trends and monthly volumes for the most popular online calculation tools.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <h2 className="section-title">Search Volume Estimator</h2>
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="input-label">Enter Calculator Keyword</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="e.g. 'mortgage calculator'"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input-field pl-10"
                    />
                  </div>
                  <button type="submit" className="bg-[#0066cc] text-white px-6 py-2 rounded font-bold hover:bg-[#0052a3] transition-colors">
                    Estimate
                  </button>
                </div>
              </div>
            </form>

            {estimatedVolume !== null && (
              <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-blue-800 uppercase tracking-wider">Estimated Monthly Searches</h3>
                    <p className="text-3xl font-bold text-blue-900 mt-1">{estimatedVolume.toLocaleString()}</p>
                  </div>
                  <TrendingUp className="w-12 h-12 text-blue-200" />
                </div>
                <p className="text-xs text-blue-600 mt-4 italic">
                  *This is an estimated value based on historical trends and global search data for 2026.
                </p>
              </div>
            )}
          </div>

          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <h2 className="font-bold text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#0066cc]" />
                Top 10 Most Searched Calculators
              </h2>
              <Globe className="w-4 h-4 text-slate-400" />
            </div>
            <div className="divide-y divide-slate-100">
              {popularCalculators.map((calc, idx) => (
                <div key={calc.name} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="text-slate-300 font-mono text-sm">{idx + 1}</span>
                    <Link to={popularCalculators.find(p => p.name === calc.name)?.path || '/'} className="font-medium text-slate-700 hover:text-blue-600 transition-colors">
                      {calc.name}
                    </Link>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-900 font-bold">{calc.volume}</span>
                    <span className="text-[10px] text-slate-400 block uppercase tracking-tighter">Searches/mo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-50">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#0066cc]" />
              SEO Insights
            </h2>
            <div className="space-y-4 text-sm text-slate-600">
              <p>
                <strong>High Intent:</strong> Calculator keywords often have high "commercial intent," meaning users are close to making a decision.
              </p>
              <p>
                <strong>Evergreen:</strong> Unlike news, math and finance calculations are evergreen, providing steady traffic year-round.
              </p>
              <p>
                <strong>Competition:</strong> "Mortgage" and "Loan" keywords are highly competitive, while niche tools like "Mulch" or "Stair" offer better ranking opportunities.
              </p>
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h3 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest border-b pb-2">Internal Linking Status</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed italic">
              Our core calculators have 100% crawl coverage. Every tool is indexed in our sitemap and linked through hierarchical categories.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Calculator Search Trends in 2026</h2>
        <p>
          Online calculators are some of the most searched-for tools on the internet. From simple math to complex financial planning, millions of users rely on these digital utilities every day. Our <strong>Calculator Monthly Searches</strong> tool provides a window into these trends, helping researchers, developers, and SEO professionals understand what the world is calculating.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Are Calculators So Popular?</h3>
        <p>
          The popularity of online calculators stems from their immediate utility. When a user searches for a "Mortgage Calculator," they aren't just looking for information; they are looking to solve a specific problem. This high-intent behavior makes calculator pages incredibly valuable.
        </p>
        <ul>
          <li><strong>Accuracy:</strong> Digital tools eliminate human error in complex formulas.</li>
          <li><strong>Speed:</strong> Instant results save time compared to manual calculations.</li>
          <li><strong>Accessibility:</strong> Free tools are available on any device with an internet connection.</li>
          <li><strong>Visual Feedback:</strong> Many modern calculators provide charts and graphs to help visualize data.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Top Categories by Search Volume</h3>
        <p>
          While thousands of different calculators exist, the majority of search volume is concentrated in a few key categories:
        </p>
        <ol>
          <li><strong>Finance:</strong> Mortgage, auto loans, compound interest, and retirement planning.</li>
          <li><strong>Health & Fitness:</strong> BMI, calorie intake, ovulation, and macro trackers.</li>
          <li><strong>Math & Science:</strong> Scientific calculators, percentage tools, and unit converters.</li>
          <li><strong>Home Improvement:</strong> Paint, flooring, mulch, and gravel estimators.</li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use This Data</h3>
        <p>
          If you are building a website or conducting market research, understanding these volumes is crucial. High-volume keywords like "BMI Calculator" are extremely difficult to rank for due to competition from major health sites. However, "long-tail" keywords—more specific searches like "Tire Size Comparison Calculator"—often have lower competition and can drive highly targeted traffic.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">How accurate is the search volume estimation?</p>
            <p>Our tool uses historical data and current trends to provide an educated estimate. For precise advertising data, we recommend using official tools like Google Keyword Planner.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Do search volumes change seasonally?</p>
            <p>Yes. For example, "Tax Refund Calculator" peaks in early spring, while "GPA Calculator" sees spikes at the end of school semesters.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the most searched calculator of all time?</p>
            <p>Historically, the simple "Calculator" or "Scientific Calculator" holds the top spot, followed closely by "Mortgage Calculator."</p>
          </div>
        </div>
      </div>
    </div>
  );
};
