import React, { useState, useEffect } from 'react';
import { Loader2, BookOpen, Calculator, Lightbulb, HelpCircle, Info, AlertTriangle, RotateCcw, CheckCircle2, ArrowRightLeft, FileSearch } from 'lucide-react';
import { fetchAIGuide, safeParseAIResponse } from '../lib/gemini';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CATEGORY_EDUCATION, DEFAULT_EDUCATION } from '../constants/educational';
import { CATEGORIES } from '../constants/categories';
import { getSpecificFAQ } from '../lib/faq-utils';
import { getProContent } from '../lib/pro-content-utils';

import { getHighIntentSEO } from '../lib/seo-utils';

interface GuideContent {
    howAndWhy: string;
    faq: {q: string, a: string}[];
}

interface CalculatorSEOProps {
    name: string;
    path: string;
    description?: string;
}

export const CalculatorSEO: React.FC<CalculatorSEOProps> = ({ name, path, description }) => {
    const [guideContent, setGuideContent] = useState<GuideContent | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const CACHE_KEY = (p: string) => `sc_guide_v5_${p}`; // Bumped to v5 to clear old LaTeX documentation
    const [error, setError] = useState<string | null>(null);

    // Find the category and item for fallback and guidance
    const pathSlug = path.startsWith('/') ? path.slice(1).replace(/\/$/, '') : path.replace(/\/$/, '');
    const category = CATEGORIES.find(cat => 
        cat.items.some(item => item.path === path || item.path === (path === '/' ? '/' : path.replace(/\/$/, '')))
    );
    const item = category?.items.find(i => i.path === path || i.path === (path === '/' ? '/' : path.replace(/\/$/, '')));
    const fallback = CATEGORY_EDUCATION[pathSlug] || (category ? CATEGORY_EDUCATION[category.slug] : DEFAULT_EDUCATION);

    useEffect(() => {
        const cached = localStorage.getItem(CACHE_KEY(path));
        if (cached) {
            try {
                setGuideContent(JSON.parse(cached));
                return;
            } catch (e) {
                localStorage.removeItem(CACHE_KEY(path));
            }
        }

        const fetchGuide = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const dataResponse = await fetchAIGuide({
                    name,
                    description
                });

                if (!dataResponse || !dataResponse.text) {
                    throw new Error("Invalid response from server");
                }

                const data = safeParseAIResponse(dataResponse.text);
                
                // Content validation
                if (!data.howAndWhy || typeof data.howAndWhy !== 'string') {
                    throw new Error("AI failed to generate a valid How & Why section");
                }

                setGuideContent(data);
                localStorage.setItem(CACHE_KEY(path), JSON.stringify(data));
            } catch (err: any) {
                // Use fallback on error
                if (err.message !== "GEMINI_API_KEY_INVALID" && !err.message?.includes("SERVER_RESTARTING")) {
                    console.error("SEO Guide fetch error:", err);
                }
                
                // Construct a better fallback based on category
                const specificFaq = getSpecificFAQ(name, category?.title || 'Professional', path);
                const fallbackData: GuideContent = {
                    howAndWhy: `### How to use the ${name}\n\n${fallback.howToUse}\n\n### Why the ${name} matters\n\n${fallback.whyItWorks}`,
                    faq: specificFaq
                };
                setGuideContent(fallbackData);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGuide();
    }, [name, path, description, fallback, category]);

    // Ensure we always have content even if AI is loading/fails
    const displayContent = guideContent || {
        howAndWhy: `### How to use ${name}\n\n${fallback.howToUse}\n\n### Why ${name} matters\n\n${fallback.whyItWorks}`,
        faq: getSpecificFAQ(name, category?.title || 'Professional', path)
    };

    const seo = getHighIntentSEO(name, category?.title || 'Professional', category?.slug || '');
    const proContent = getProContent(path);

    return (
        <div className="mt-24 space-y-20 border-t border-slate-100 pt-20">
            {/* SEO & FAQ Schema */}
            <Helmet>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                {item?.keywords && (
                    <meta name="keywords" content={item.keywords.join(', ')} />
                )}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": name,
                        "description": description || seo.description,
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Web",
                        "softwareVersion": "2026.5.14",
                        "keywords": item?.keywords?.join(', '),
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
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
                                "item": "https://simplycalculator.app"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": category?.title || "Tools",
                                "item": `https://simplycalculator.app/${category?.slug || ""}`
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": name,
                                "item": `https://simplycalculator.app${path}`
                            }
                        ]
                    })}
                </script>
                {displayContent.faq.length > 0 && (
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": displayContent.faq.map(item => ({
                                "@type": "Question",
                                "name": item.q,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": item.a
                                }
                            }))
                        })}
                    </script>
                )}
            </Helmet>

            <div className="max-w-none">
                <header className="mb-12 flex items-center justify-between border-b-2 border-slate-900 pb-4">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
                        Calculator <span className="text-blue-600">Guide</span> & Methodology
                    </h2>
                    <div className="hidden md:block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                        {isLoading ? 'Generating Analysis...' : 'Verified 2026 Edition'}
                    </div>
                </header>

                <div className="space-y-8">
                    {/* Primary Guidance Information */}
                    {(item?.guidance || category?.defaultGuidance) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <Info className="w-3 h-3" />
                                    Why it Matters
                                </h4>
                                <p className="text-slate-600 text-[13px] leading-relaxed font-medium">
                                    {item?.guidance?.whyItMatters || category?.defaultGuidance?.whyItMatters}
                                </p>
                            </div>
                            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                                <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <Lightbulb className="w-3 h-3" />
                                    Pro Tip
                                </h4>
                                <p className="text-blue-900/70 text-[13px] leading-relaxed font-bold">
                                    {item?.guidance?.proTip || category?.defaultGuidance?.proTip}
                                </p>
                            </div>
                            {(item?.guidance?.pitfalls || category?.defaultGuidance?.pitfalls) && (
                                <div className="md:col-span-2 p-6 bg-amber-50/50 rounded-2xl border border-amber-100">
                                    <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <AlertTriangle className="w-3 h-3" />
                                        Common Pitfalls
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                        {(item?.guidance?.pitfalls || category?.defaultGuidance?.pitfalls)?.map((p, idx) => (
                                            <li key={idx} className="text-amber-900/70 text-[13px] font-medium flex gap-2">
                                                <span className="text-amber-400">•</span> {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="space-y-4">
                        <h3 className="text-[11px] font-bold text-slate-900 flex items-center gap-2 uppercase tracking-widest border-b border-slate-100 pb-3">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                            Guide: How it Works
                        </h3>
                        {(!guideContent && !isLoading) || guideContent ? (
                            <div className="text-slate-600 leading-relaxed prose prose-slate max-w-none text-[14px]">
                                <ReactMarkdown>
                                    {displayContent.howAndWhy}
                                </ReactMarkdown>
                            </div>
                        ) : (
                             <div className="space-y-4">
                                <div className="text-slate-600 leading-relaxed prose prose-slate max-w-none text-[14px] opacity-40">
                                    <ReactMarkdown>
                                        {displayContent.howAndWhy}
                                    </ReactMarkdown>
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 animate-pulse">
                                    <Loader2 className="w-3 h-3 animate-spin" />
                                    ENHANCING GUIDE WITH AI...
                                </div>
                             </div>
                        )}
                    </div>

                    {/* Glossary & Methodology */}
                    {(fallback.glossary || fallback.methodology) && (
                        <div className="mt-12 border-t border-slate-100 pt-12 space-y-12">
                            {fallback.glossary && fallback.glossary.length > 0 && (
                                <div>
                                    <h3 className="text-[11px] font-bold text-slate-900 flex items-center gap-2 uppercase tracking-widest mb-6">
                                        <Info className="w-5 h-5 text-blue-600" />
                                        Glossary of Terms
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                        {fallback.glossary.map((term, i) => (
                                            <div key={i} className="space-y-1">
                                                <dt className="text-sm font-bold text-slate-900">{term.term}</dt>
                                                <dd className="text-slate-500 text-[13px] leading-relaxed">{term.definition}</dd>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {fallback.methodology && (
                                <div className="p-8 bg-slate-900 rounded-3xl text-white">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-blue-400">
                                        Mathematical Methodology
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-medium italic">
                                        {fallback.methodology}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {proContent.map((pro, idx) => (
                        <div key={idx} className={`mt-12 p-8 border-2 rounded-3xl transition-all hover:shadow-lg ${
                            pro.type === 'checklist' ? 'bg-emerald-50/50 border-emerald-100' :
                            pro.type === 'comparison' ? 'bg-amber-50/50 border-amber-100' :
                            'bg-blue-50/50 border-blue-100'
                        }`}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-2xl ${
                                    pro.type === 'checklist' ? 'bg-emerald-100 text-emerald-600' :
                                    pro.type === 'comparison' ? 'bg-amber-100 text-amber-600' :
                                    'bg-blue-100 text-blue-600'
                                }`}>
                                    {pro.type === 'checklist' ? <CheckCircle2 className="w-6 h-6" /> :
                                     pro.type === 'comparison' ? <ArrowRightLeft className="w-6 h-6" /> :
                                     <FileSearch className="w-6 h-6" />}
                                </div>
                                <div>
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${
                                        pro.type === 'checklist' ? 'text-emerald-600' :
                                        pro.type === 'comparison' ? 'text-amber-600' :
                                        'text-blue-600'
                                    }`}>
                                        {pro.type}
                                    </span>
                                    <h3 className="text-xl font-black text-slate-800 leading-tight">
                                        {pro.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="text-[15px] text-slate-600 leading-relaxed font-medium whitespace-pre-line">
                                {pro.content}
                            </div>
                        </div>
                    ))}
                </div>

                {displayContent.faq.length > 0 && (
                    <div className="mt-24 border-t border-slate-100 pt-20">
                        <div className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                                <HelpCircle className="w-6 h-6 text-blue-600" />
                                FAQ
                            </h2>
                            <p className="text-sm text-slate-500 font-medium">Common questions about this calculator.</p>
                        </div>
                        
                        <div className="space-y-6 max-w-4xl">
                            {displayContent.faq.map((item, idx) => (
                                <div key={idx} className="group border-b border-slate-100 pb-6 last:border-0">
                                    <h3 className="text-sm font-bold text-slate-900 mb-2 flex gap-3">
                                        <span className="text-blue-600 font-black">Q.</span>
                                        {item.q}
                                    </h3>
                                    <div className="pl-7">
                                        <p className="text-slate-600 text-[13px] leading-relaxed font-medium">{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
