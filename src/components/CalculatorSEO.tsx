import React, { useState, useEffect } from 'react';
import { Loader2, BookOpen, Calculator, Lightbulb, HelpCircle, Info, AlertTriangle, RotateCcw } from 'lucide-react';
import { fetchAIGuide, safeParseAIResponse } from '../lib/gemini';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

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
    const CACHE_KEY = (p: string) => `sc_guide_v4_${p}`; // Bumped version to v4 for new schema
    const [error, setError] = useState<string | null>(null);

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
                console.error("SEO Guide fetch error:", err);
                setError(err.message || "Failed to load expert documentation");
                setGuideContent(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGuide();
    }, [name, path, description]);

    if (isLoading) {
        return (
            <div className="mt-12 flex justify-center p-12 bg-white border border-slate-100 rounded-xl">
                <div className="text-center space-y-3">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Loading calculator guide...</p>
                </div>
            </div>
        );
    }

    if (error) {
        const isAIUnavailable = error.includes("GEMINI_API_KEY") || 
                              error.includes("API key not valid") || 
                              error.includes("AI services") ||
                              error.includes("401") ||
                              error.includes("403");
        return (
            <div className="mt-12 p-10 bg-slate-50 rounded-2xl border border-slate-100 text-center space-y-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <AlertTriangle className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                    <p className="text-slate-900 font-bold text-sm mb-1">Documentation Sync</p>
                    <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                        {isAIUnavailable 
                            ? "AI documentation requires a valid Gemini API key. Please check your application settings and try again."
                            : "Our team is currently updating this guide. Please check back in a few moments."}
                    </p>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <button 
                        onClick={() => window.location.reload()}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-slate-200 rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-900 hover:bg-slate-50 transition-all shadow-sm"
                    >
                        <RotateCcw className="w-3 h-3" />
                        Retry Load
                    </button>
                    {isAIUnavailable && (
                        <p className="text-[9px] text-slate-400 uppercase tracking-tighter">
                            Check Settings &gt; Environment Variables
                        </p>
                    )}
                </div>
            </div>
        );
    }

    if (!guideContent) return null;

    return (
        <div className="mt-24 space-y-20 border-t border-slate-100 pt-20">
            {/* FAQ Schema */}
            <Helmet>
                {guideContent.faq.length > 0 && (
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": guideContent.faq.map(item => ({
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
                <header className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight leading-none">
                        Documentation & <span className="text-blue-600">Guides</span>
                    </h2>
                </header>

                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-[11px] font-bold text-slate-900 flex items-center gap-2 uppercase tracking-widest border-b border-slate-100 pb-3">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                            How and Why it Works
                        </h3>
                        <div className="text-slate-600 leading-relaxed prose prose-slate max-w-none text-[14px]">
                            <ReactMarkdown>{guideContent.howAndWhy}</ReactMarkdown>
                        </div>
                    </div>
                </div>

                {guideContent.faq.length > 0 && (
                    <div className="mt-24 border-t border-slate-100 pt-20">
                        <div className="mb-12">
                            <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                                <HelpCircle className="w-6 h-6 text-blue-600" />
                                Frequently Asked Questions
                            </h2>
                            <p className="text-sm text-slate-500 font-medium">Common inquiries regarding the {name}.</p>
                        </div>
                        
                        <div className="space-y-6 max-w-4xl">
                            {guideContent.faq.map((item, idx) => (
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
