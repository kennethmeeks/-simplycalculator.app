import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CATEGORIES } from '../constants/categories';

export const Sitemap: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <Helmet>
        <title>Sitemap | All Online Calculators 2026 | simplycalculator.app</title>
        <meta name="description" content="Browse our complete list of over 1600+ free online calculators. Find tools for finance, fitness, health, math, and more in our comprehensive sitemap." />
      </Helmet>

      <div className="mb-12 border-b-2 border-dashed border-[#ccc] pb-8">
        <nav className="flex text-[10px] text-[#999] mb-4 font-bold uppercase tracking-[0.2em]">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#333]">sitemap</span>
        </nav>
        <h1 className="text-4xl font-black text-[#111] tracking-tighter">Site Directory</h1>
        <p className="text-sm text-[#666] mt-4 font-medium italic">
            Complete index of all specialized mathematical tools, categorized and indexed for 2026 standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {CATEGORIES.map((cat) => (
          <div key={cat.slug} className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-[#0066cc] pb-2 mb-4">
                <Link to={`/category/${cat.slug}`} className="text-lg font-black text-[#111] uppercase tracking-wide hover:text-[#0066cc]">
                    {cat.title}
                </Link>
            </div>
            <ul className="grid grid-cols-1 gap-y-3 pl-2">
              {cat.items.map((item, idx) => (
                <li key={`${item.name}-${idx}`} className="group relative pl-4 border-l border-[#eee] hover:border-[#0066cc] transition-colors list-none">
                  <Link 
                    to={item.path} 
                    className="text-[#333] hover:text-[#0066cc] font-bold text-[13px] flex items-center justify-between"
                  >
                    {item.name}
                    <span className="text-[9px] text-[#ccc] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">link &rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-12 border-t border-[#eee] bg-[#fcfcfc] p-10 rounded">
        <h2 className="text-2xl font-black mb-6 tracking-tight uppercase">Mathematical Tool Quality Assurance</h2>
        <div className="grid md:grid-cols-2 gap-12">
            <p className="text-[13px] text-[#555] leading-relaxed">
                Our sitemap is updated daily to reflect the latest additions to our library. Each calculator listed here undergoes a rigorous testing process, 
                comparing outputs against standard formulas and real-world scenarios. We maintain high standards of code quality and semantic HTML to ensure 
                accessibility for all users and assistive technologies.
            </p>
            <p className="text-[13px] text-[#555] leading-relaxed">
                If you find a missing link or have a suggestion for a new calculator that should be indexed in our directory, please 
                contact our development team. We are committed to making simplycalculator.app the only resource you need for 
                accurate online computations in 2026.
            </p>
        </div>
      </div>
    </div>
  );
};
