import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CATEGORIES } from '../constants/categories';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>All Online Calculators 2026 | Free & Accurate | simplycalculator.app</title>
        <meta name="description" content="Access over 500+ free online calculators for 2026. Organized tools for Finance, Health, Math, Construction, and more. Accurate formulas and easy-to-use interfaces." />
      </Helmet>

      <div className="space-y-12">
        <section className="border-b border-dashed border-[#ccc] pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="text-4xl font-black mb-2 text-[#111] tracking-tight">Calculator Library</h1>
              <p className="text-sm text-[#666] max-w-xl font-medium">
                Professional-grade accuracy for your daily decision making. 
                Select a category below to explore specialized tools.
              </p>
            </div>
            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-[#999]">
                <span>500+ Tools</span>
                <span>•</span>
                <span>Verified Formulas</span>
                <span>•</span>
                <span>2026 Ready</span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-12">
          {CATEGORIES.map((cat) => (
            <div key={cat.slug} className="group">
              <div className="flex items-center justify-between mb-6 border-b border-[#eee] pb-3 group-hover:border-[#0066cc] transition-colors">
                <h2 className="text-xl font-black text-[#111] tracking-tight group-hover:text-[#0066cc] transition-colors">
                  {cat.title}
                </h2>
                <Link 
                    to={`/${cat.slug}`} 
                    className="text-[11px] font-black text-[#0066cc] hover:underline uppercase tracking-tighter"
                >
                    Expand Category →
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {cat.items.slice(0, 8).map((item) => (
                  <div key={item.path} className="relative pl-4 border-l-2 border-transparent hover:border-[#0066cc] transition-all">
                    <Link 
                      to={item.path} 
                      className="text-[14px] text-[#0066cc] font-bold hover:underline block leading-tight mb-1"
                    >
                      {item.name}
                    </Link>
                    <p className="text-[11px] text-[#999] line-clamp-1 leading-none italic">
                      {item.desc}
                    </p>
                  </div>
                ))}
                {cat.items.length > 8 && (
                   <Link 
                    to={`/${cat.slug}`} 
                    className="text-[12px] text-[#0066cc] font-bold hover:underline italic pl-4"
                  >
                    + {cat.items.length - 8} more in {cat.title}...
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 shadow-sm border border-[#ccc] bg-[#ccc] overflow-hidden">
                <div className="bg-white p-8">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-[#999]">Mission</h3>
                    <p className="text-[13px] text-[#555] leading-relaxed italic">
                        "To provide absolute mathematical clarity through accessible, accurate, and free tooling for every complex decision in life."
                    </p>
                </div>
                <div className="bg-[#fcfcfc] p-8">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-[#999]">Compliance</h3>
                    <p className="text-[13px] text-[#555] leading-relaxed">
                        All financial modules are updated for the 2026 fiscal year in accordance with standard international guidelines.
                    </p>
                </div>
                <div className="bg-white p-8">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-[#999]">Updates</h3>
                    <p className="text-[13px] text-[#555] leading-relaxed">
                        We add approximately 10 new specialized calculators every month based on user feedback and regulatory changes.
                    </p>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};
