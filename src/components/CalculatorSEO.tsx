import React, { useState, useEffect } from 'react';
import { Loader2, BookOpen, Calculator, Lightbulb, HelpCircle, Info, ShieldCheck, AlertTriangle } from 'lucide-react';
import { fetchAIGuide, safeParseAIResponse } from '../lib/gemini';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';

interface GuideContent {
    sections: {title: string, body: string}[];
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
    const CACHE_KEY = (p: string) => `sc_guide_v2_${p}`; // Bumped version for new schema

    const getIconForSection = (title: string) => {
        const t = title.toLowerCase();
        if (t.includes('how to use')) return <BookOpen className="w-5 h-5 text-blue-600" />;
        if (t.includes('formula')) return <Calculator className="w-5 h-5 text-blue-600" />;
        if (t.includes('example')) return <Lightbulb className="w-5 h-5 text-blue-600" />;
        if (t.includes('mistake') || t.includes('tip')) return <AlertTriangle className="w-5 h-5 text-amber-500" />;
        return <Info className="w-5 h-5 text-blue-600" />;
    };

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
            try {
                const dataResponse = await fetchAIGuide({
                    name,
                    description
                });

                const data = safeParseAIResponse(dataResponse.text);
                setGuideContent(data);
                localStorage.setItem(CACHE_KEY(path), JSON.stringify(data));
            } catch (err) {
                console.error("SEO Guide fetch error:", err);
                setGuideContent(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGuide();
    }, [name, path, description]);

    if (isLoading) {
        return (
            <div className="mt-12 flex justify-center p-12 bg-slate-50 rounded-xl border border-dashed border-slate-200 animate-pulse">
                <div className="text-center space-y-3">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto" />
                    <p className="text-sm font-black uppercase tracking-widest text-slate-400">Verifying Experts Standards...</p>
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full border border-blue-100 text-[10px] font-black uppercase tracking-widest text-blue-600 mb-4">
                        <ShieldCheck className="w-3 h-3" />
                        Accredited Calculation Guide
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none uppercase">
                        Expert <span className="text-blue-600">Documentation</span>
                    </h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {guideContent.sections.map((section, idx) => (
                        <div key={idx} className="space-y-4">
                            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2 uppercase tracking-widest border-b border-slate-100 pb-3">
                                {getIconForSection(section.title)}
                                {section.title}
                            </h3>
                            <div className="text-slate-600 leading-relaxed prose prose-sm prose-slate max-w-none text-[13px]">
                                <ReactMarkdown>{section.body}</ReactMarkdown>
                            </div>
                        </div>
                    ))}
                </div>

                {guideContent.faq.length > 0 && (
                    <div className="mt-24 bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-xl font-bold text-slate-900 mb-10 flex items-center justify-center gap-3 uppercase tracking-widest">
                                <HelpCircle className="w-6 h-6 text-blue-600" />
                                Expert FAQ Section
                            </h2>
                            <div className="space-y-8">
                                {guideContent.faq.map((item, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                        <h3 className="text-sm font-bold text-slate-900 mb-3 flex gap-3">
                                            <span className="text-blue-600 font-black">Q:</span>
                                            {item.q}
                                        </h3>
                                        <div className="flex gap-3">
                                            <span className="text-slate-300 font-black">A:</span>
                                            <p className="text-slate-600 text-xs leading-relaxed font-medium">{item.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
