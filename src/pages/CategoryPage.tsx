import React from 'react';
import { Link, useParams, Navigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

      <div className="space-y-12">
        <section>
          <nav className="flex text-[10px] text-[#999] mb-4 font-bold uppercase tracking-[0.2em]">
            <Link to="/" className="hover:text-[#0066cc]">home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#333]">{categoryKey}</span>
          </nav>
          <h1 className="text-4xl font-black mb-4 text-[#111] tracking-tighter border-b-4 border-[#0066cc] inline-block pb-2">
            {data.title}
          </h1>
          <p className="text-sm leading-relaxed text-[#555] max-w-3xl mt-4 font-medium italic">
            {data.description}
          </p>
        </section>

        {/* Quick Jump for categories */}
        <section className="bg-[#fcfcfc] border border-[#eee] p-4 shadow-sm">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#bbb] mb-3">Browse Other Categories</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
                {CATEGORIES.filter(c => c.slug !== categoryKey).map(c => (
                    <Link key={c.slug} to={`/${c.slug}`} className="text-[11px] font-bold text-[#0066cc] hover:underline uppercase tracking-tighter">
                        {c.title}
                    </Link>
                ))}
            </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group p-6 bg-white border border-[#eee] hover:border-[#0066cc] hover:bg-[#0066cc]/[0.02] transition-all duration-200 relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 right-0 w-8 h-8 bg-[#0066cc]/5 flex items-center justify-center translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066cc]"></div>
              </div>
              <h2 className="text-[17px] font-black text-[#111] group-hover:text-[#0066cc] mb-3 leading-tight">
                {item.name}
              </h2>
              <p className="text-[11px] text-[#999] leading-relaxed italic">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>

        <section className="mt-20 bg-[#f8f9fa] p-10 border border-[#eee]">
            <article className="prose prose-sm max-w-none text-[#555]">
                <h2 className="text-2xl font-black text-[#111] mb-6 tracking-tight uppercase">Scientific Precision Tools</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="leading-relaxed">
                            Accuracy is our absolute priority in the <strong>{data.title}</strong> sector. Our calculators implement 
                            current industry standard algorithms (ISO/ANSI/IRS) ensuring that whether you are planning life-changing 
                            financial moves or verifying technical scientific data, the output remains beyond reproach.
                        </p>
                    </div>
                    <div>
                        <p className="leading-relaxed">
                            We've optimized these tools for rapid input and instant results. Every {data.title} tool features a 
                            clean, distraction-free interface that helps students, professionals, and hobbyists focus on 
                            the logic of their numbers rather than the software used to calculate them.
                        </p>
                    </div>
                </div>
                <div className="mt-10 pt-8 border-t border-[#ddd] flex justify-between items-center bg-white/50 p-4 rounded text-[10px] font-black uppercase tracking-[0.2em] text-[#bbb]">
                    <span>Verified for 2026</span>
                    <span>GDPR Compliant</span>
                    <span>Zero Data Tracking</span>
                </div>
            </article>
        </section>
      </div>
    </>
  );
};
