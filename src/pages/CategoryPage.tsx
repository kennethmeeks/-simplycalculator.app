import React from 'react';
import { Link, useParams, Navigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../constants/categories';

export const CategoryPage: React.FC = () => {
  const params = useParams<{ categoryKey: string }>();
  const location = useLocation();
  
  // Determine key from param or from path segment
  const categoryKey = params.categoryKey || location.pathname.split('/').pop() || '';
  const data = CATEGORIES.find(c => c.slug === categoryKey);
  
  if (!categoryKey || !data) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{data.title} - All Free Calculators 2026</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <div className="space-y-16">
        <section>
          <nav className="flex items-center gap-2 text-[10px] text-[#999] mb-8 font-black uppercase tracking-[0.2em] overflow-x-auto whitespace-nowrap pb-2">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#111]">{data.title}</span>
          </nav>

          <header className="border-b-8 border-[#111] pb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white text-[9px] font-black px-3 py-1 uppercase tracking-[0.3em]">Vertical Hub</span>
              <span className="text-[9px] font-bold text-[#999] uppercase tracking-[0.2em]">{data.items.length} Production Ready Modules</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-[#111] tracking-tighter uppercase leading-none">
              {data.title}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-[#666] max-w-3xl mt-6 font-medium italic">
              {data.description}
            </p>
          </header>
        </section>

        {/* Global Hub Navigation */}
        <section className="bg-white border-2 border-[#eee] p-6 shadow-[8px_8px_0px_0px_#f0f0f0]">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#bbb] mb-4 italic">// Jump to Hub</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
                {CATEGORIES.map(c => (
                    <Link 
                      key={c.slug} 
                      to={`/${c.slug}`} 
                      className={`text-[11px] font-black uppercase tracking-tighter transition-colors ${
                        c.slug === categoryKey ? 'text-blue-600 underline underline-offset-4 decoration-2' : 'text-[#111] hover:text-blue-600'
                      }`}
                    >
                      {c.title}
                    </Link>
                ))}
            </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {data.items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group p-8 bg-white border-2 border-[#eee] hover:border-[#111] hover:shadow-[10px_10px_0px_0px_rgba(37,99,235,1)] transition-all duration-300 relative flex flex-col h-full"
            >
              <div className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest text-[#eee] group-hover:text-blue-600/20 transition-colors">
                  Logic Module
              </div>
              <h2 className="text-xl font-black text-[#111] group-hover:text-blue-600 mb-4 leading-tight uppercase tracking-tight">
                {item.name}
              </h2>
              <p className="text-[11px] text-[#999] leading-relaxed italic font-medium mt-auto group-hover:text-[#666]">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>

        <section className="mt-20 bg-[#f9f9f9] p-12 border-2 border-[#111] relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#111]/5 -rotate-12 translate-x-8 translate-y-8"></div>
            <article className="max-w-none text-[#555] relative z-10">
                <h2 className="text-2xl font-black text-[#111] mb-8 tracking-tighter uppercase font-sans">Precision Protocol: {data.title}</h2>
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <p className="leading-relaxed text-[14px] font-medium">
                            Accuracy is our absolute priority in the <strong>{data.title}</strong> sector. Our active logic implementations 
                            follow verified 2026.4 operational standards. Every result is generated using deterministic mathematical algorithms 
                            ensuring consistent reproducibility.
                        </p>
                    </div>
                    <div>
                        <p className="leading-relaxed text-[14px] font-medium opacity-60">
                            We solve the complexity of {data.title} through rapid interface optimization. By removing the overhead of 
                            legacy software, we provide a direct channel between your variables and their logical outcome. 
                            Professional grade, zero overhead.
                        </p>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t-2 border-[#eee] flex flex-wrap justify-between items-center gap-6">
                    <div className="flex gap-4 text-[9px] font-black uppercase tracking-[0.2em] text-[#bbb]">
                        <span>Verified Core</span>
                        <span>Multi-Region Calibrated</span>
                        <span>Open Logic Standards</span>
                    </div>
                    <Link to="/" className="text-[10px] font-black text-blue-600 uppercase tracking-widest underline decoration-2 underline-offset-4">
                        Exit Category Hub →
                    </Link>
                </div>
            </article>
        </section>
      </div>
    </>
  );
};
