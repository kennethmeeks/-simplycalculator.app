import React from 'react';
import { Link, useParams, Navigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../constants/categories';
import { CATEGORY_EDUCATION } from '../constants/educational';

export const CategoryPage: React.FC = () => {
  const params = useParams<{ categoryKey: string }>();
  const location = useLocation();
  
  // Determine key from param or from path segment
  const categoryKey = params.categoryKey || location.pathname.split('/').pop() || '';
  const data = CATEGORIES.find(c => c.slug === categoryKey);
  const education = CATEGORY_EDUCATION[categoryKey];
  
  // Redirect legacy /category/path to /path for SEO consistency
  if (location.pathname.startsWith('/category/')) {
    const slug = location.pathname.replace('/category/', '');
    return <Navigate to={`/${slug}`} replace />;
  }
  
  if (!categoryKey || !data) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{data.title} Calculators: Solve any {data.title} problem fast & free (2026)</title>
        <meta name="description" content={`Access ${data.items.length}+ verified ${data.title} calculators. Get professional, accurate results instantly for any ${data.title} scenario. Fast, mobile-friendly, and free for 2026.`} />
        <meta property="og:title" content={`${data.title} Hub: The Complete 2026 Calculator Suite`} />
        <meta property="og:description" content={`Solve your ${data.title} questions with our full suite of 1,600+ verified tools. Accurate, instant results for professionals and students.`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": data.title,
            "description": data.description,
            "url": `https://simplycalculator.app/${data.slug}`,
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": data.items.length,
              "itemListElement": data.items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://simplycalculator.app${item.path}`,
                "name": item.name
              }))
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://simplycalculator.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": data.title,
                "item": `https://simplycalculator.app/${data.slug}`
              }
            ]
          })}
        </script>
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
              <span className="bg-blue-600 text-white text-[9px] font-black px-3 py-1 uppercase tracking-[0.3em]">Category Hub</span>
              <span className="text-[9px] font-bold text-[#999] uppercase tracking-[0.2em]">{data.items.length} Calculators Available</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-[#111] tracking-tighter uppercase leading-none">
              {data.title}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-[#666] max-w-3xl mt-6 font-medium">
              {data.description}
            </p>
          </header>
        </section>

        {/* Global Hub Navigation */}
        <section className="bg-white border-2 border-[#eee] p-6 shadow-[8px_8px_0px_0px_#f0f0f0]">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#bbb] mb-4">// Jump to Hub</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
                {CATEGORIES.map(c => {
                    const path = `/${c.slug}`;
                    return (
                        <Link 
                          key={c.slug} 
                          to={path} 
                          className={`text-[11px] font-black uppercase tracking-tighter transition-colors ${
                            c.slug === categoryKey ? 'text-blue-600 underline underline-offset-4 decoration-2' : 'text-[#111] hover:text-blue-600'
                          }`}
                        >
                          {c.title}
                        </Link>
                    );
                })}
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
                  Calculator Tool
              </div>
              <h2 className="text-xl font-black text-[#111] group-hover:text-blue-600 mb-4 leading-tight uppercase tracking-tight">
                {item.name}
              </h2>
              <p className="text-[11px] text-[#999] leading-relaxed font-medium mt-auto group-hover:text-[#666]">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>

        <section className="mt-20 bg-[#f9f9f9] p-8 sm:p-12 border-2 border-[#111] relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#111]/5 -rotate-12 translate-x-8 translate-y-8"></div>
            <article className="max-w-none text-[#555] relative z-10">
                <h2 className="text-2xl font-black text-[#111] mb-8 tracking-tighter uppercase font-sans">
                    {education ? education.title : `Accuracy Standard: ${data.title}`}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-10 sm:gap-16">
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111] mb-3"># Overview & Utility</h4>
                            <p className="leading-relaxed text-[14px] font-medium">
                                {education ? education.whyItWorks : `Accuracy is our absolute priority in the ${data.title} sector. Our calculators follow standard 2026 mathematical protocols. Every result is generated using verified algorithms ensuring consistent reproducibility.`}
                            </p>
                        </div>
                        {education?.glossary && (
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111] mb-3"># Key Terminology</h4>
                                <dl className="space-y-4">
                                    {education.glossary.slice(0, 3).map((term, i) => (
                                        <div key={i}>
                                            <dt className="text-[12px] font-bold text-[#111] mb-1">{term.term}</dt>
                                            <dd className="text-[11px] leading-relaxed opacity-80">{term.definition}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        )}
                    </div>
                    
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111] mb-3"># Methodology</h4>
                            <p className="leading-relaxed text-[14px] font-medium opacity-80">
                                {education ? education.howToUse : `We solve the complexity of ${data.title} through rapid interface optimization. By removing the overhead of legacy software, we provide a direct channel between your variables and their logical outcome.`}
                            </p>
                        </div>

                        {education?.faq && (
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111] mb-4"># Frequently Asked</h4>
                                <div className="space-y-5">
                                    {education.faq.slice(0, 2).map((item, i) => (
                                        <div key={i} className="bg-white p-4 border border-[#eee]">
                                            <p className="text-[12px] font-bold text-[#111] mb-2">Q: {item.q}</p>
                                            <p className="text-[11px] leading-relaxed opacity-70">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t-2 border-[#eee] flex flex-wrap justify-between items-center gap-6">
                    <div className="flex gap-4 text-[9px] font-black uppercase tracking-[0.2em] text-[#bbb]">
                        <span>Verified Core</span>
                        <span>2026 Standards</span>
                        <span>Open Calculation Engine</span>
                    </div>
                    <Link to="/" className="text-[10px] font-black text-blue-600 uppercase tracking-widest underline decoration-2 underline-offset-4">
                        Explore All 1,600+ Tools →
                    </Link>
                </div>
            </article>
        </section>
      </div>
    </>
  );
};
