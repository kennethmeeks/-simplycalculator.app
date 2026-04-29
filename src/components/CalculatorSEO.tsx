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
    const CACHE_KEY = (p: string) => `sc_guide_v3_${p}`; // Bumped version to v3 for forced content refresh
    const [error, setError] = useState<string | null>(null);

    const getIconForSection = (title: string) => {
        const t = title.toLowerCase();
        if (t.includes('how to use')) return <BookOpen className="w-5 h-5 text-blue-600" />;
        if (t.includes('formula')) return <Calculator className="w-5 h-5 text-blue-600" />;
        if (t.includes('example')) return <Lightbulb className="w-5 h-5 text-blue-600" />;
        if (t.includes('mistake') || t.includes('tip') || t.includes('advice')) return <AlertTriangle className="w-5 h-5 text-amber-500" />;
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
                if (!data.sections || !Array.isArray(data.sections) || data.sections.length === 0) {
                    throw new Error("AI failed to generate valid sections");
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
            <div className="mt-12 flex justify-center p-12 bg-slate-50 rounded-xl border border-dashed border-slate-200 animate-pulse">
                <div className="text-center space-y-3">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto" />
                    <p className="text-sm font-black uppercase tracking-widest text-slate-400">Verifying Expert Standards...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="mt-12 p-8 bg-red-50 rounded-xl border border-red-100 text-center">
                <p className="text-red-800 font-bold mb-2">Notice</p>
                <p className="text-red-600 text-xs">Our experts are currently updating this guide. Please check back in a few minutes.</p>
                <button 
                    onClick={() => window.location.reload()}
                    className="mt-4 text-xs font-black uppercase tracking-tight text-red-900 underline underline-offset-4"
                >
                    Retry Loading
                </button>
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
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-[11px] font-black text-slate-900 flex items-center gap-2 uppercase tracking-[0.2em] border-b-2 border-slate-900/5 pb-4">
                                {getIconForSection(section.title)}
                                {section.title}
                            </h3>
                            <div className="text-slate-600 leading-relaxed prose prose-sm prose-slate max-w-none text-[13px] font-medium">
                                <ReactMarkdown>{section.body}</ReactMarkdown>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {guideContent.faq.length > 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-24 bg-slate-900 rounded-[2rem] p-8 sm:p-20 text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 blur-[120px] rounded-full"></div>
                        
                        <div className="max-w-4xl mx-auto relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl font-black mb-4 flex items-center justify-center gap-3 uppercase tracking-[0.25em]">
                                    <HelpCircle className="w-8 h-8 text-blue-400" />
                                    FAQ <span className="text-blue-400">&</span> Insights
                                </h2>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Answers to critical questions regarding {name}</p>
                            </div>
                            
                            <div className="grid grid-cols-1 gap-6">
                                {guideContent.faq.map((item, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/[0.07] transition-all">
                                        <h3 className="text-base font-bold text-white mb-4 flex gap-4">
                                            <span className="text-blue-400 font-black">Q.</span>
                                            {item.q}
                                        </h3>
                                        <div className="flex gap-4">
                                            <span className="text-slate-600 font-black">A.</span>
                                            <p className="text-slate-300 text-sm leading-relaxed font-medium">{item.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
