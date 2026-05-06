import React, { useState, useEffect } from 'react';
import { Loader2, BookOpen, Calculator, Lightbulb, HelpCircle, Info, AlertTriangle, RotateCcw } from 'lucide-react';
import { fetchAIGuide, safeParseAIResponse } from '../lib/gemini';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CATEGORY_EDUCATION, DEFAULT_EDUCATION } from '../constants/educational';
import { CATEGORIES } from '../constants/categories';
import { getSpecificFAQ } from '../lib/faq-utils';

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

    // Find the category for fallback
    const pathSlug = path.startsWith('/') ? path.slice(1).replace(/\/$/, '') : path.replace(/\/$/, '');
    const category = CATEGORIES.find(cat => 
        cat.items.some(item => item.path === path || item.path === (path === '/' ? '/' : path.replace(/\/$/, '')))
    );
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
                    howAndWhy: `### How to use ${name}\n\n${fallback.howToUse}\n\n### Why ${name} matters\n\n${fallback.whyItWorks}`,
                    faq: specificFaq
                };
                setGuideContent(fallbackData);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGuide();
    }, [name, path, description, fallback]);

    // Ensure we always have content even if AI is loading/fails
    const displayContent = guideContent || {
        howAndWhy: `### How to use ${name}\n\n${fallback.howToUse}\n\n### Why ${name} matters\n\n${fallback.whyItWorks}`,
        faq: getSpecificFAQ(name, category?.title || 'Professional', path)
    };

    return (
        <div className="mt-24 space-y-20 border-t border-slate-100 pt-20">
            {/* FAQ Schema */}
            <Helmet>
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
                    <div className="space-y-4">
                        <h3 className="text-[11px] font-bold text-slate-900 flex items-center gap-2 uppercase tracking-widest border-b border-slate-100 pb-3">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                            Guide: How it Works
                        </h3>
                        {isLoading && !guideContent ? (
                             <div className="space-y-4 animate-pulse">
                                <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                                <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                                <div className="h-4 bg-slate-100 rounded w-2/3"></div>
                             </div>
                        ) : (
                            <div className="text-slate-600 leading-relaxed prose prose-slate max-w-none text-[14px]">
                                <ReactMarkdown>
                                    {displayContent.howAndWhy}
                                </ReactMarkdown>
                            </div>
                        )}
                    </div>
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
