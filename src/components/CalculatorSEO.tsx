import React, { useState, useEffect } from 'react';
import { Loader2, BookOpen, Calculator, Lightbulb, HelpCircle, Info } from 'lucide-react';
import { fetchAIGuide, safeParseAIResponse, MODEL_PRO } from '../lib/gemini';
import ReactMarkdown from 'react-markdown';

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
    const CACHE_KEY = (p: string) => `sc_guide_${p}`;

    const getIconForSection = (title: string) => {
        const t = title.toLowerCase();
        if (t.includes('how to use')) return <BookOpen className="w-5 h-5 text-blue-600" />;
        if (t.includes('formula')) return <Calculator className="w-5 h-5 text-blue-600" />;
        if (t.includes('example')) return <Lightbulb className="w-5 h-5 text-blue-600" />;
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
            <div className="mt-12 flex justify-center p-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <div className="text-center space-y-3">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto" />
                    <p className="text-sm font-medium text-slate-500">Generating calculator guide...</p>
                </div>
            </div>
        );
    }

    if (!guideContent) return null;

    return (
        <div className="mt-16 space-y-16">
            <div className="max-w-none">
                {guideContent.sections.map((section, idx) => (
                    <div key={idx} className="mb-12">
                        <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                            {getIconForSection(section.title)}
                            {section.title}
                        </h2>
                        <div className="text-slate-600 leading-relaxed prose prose-slate max-w-none">
                            <ReactMarkdown>{section.body}</ReactMarkdown>
                        </div>
                    </div>
                ))}

                {guideContent.faq.length > 0 && (
                    <div className="mt-16 pt-16 border-t border-slate-100">
                        <h2 className="text-xl font-black text-slate-900 mb-10 flex items-center gap-3 uppercase tracking-tight">
                            <HelpCircle className="w-5 h-5 text-blue-600" />
                            Frequently Asked Questions (FAQ)
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {guideContent.faq.map((item, idx) => (
                                <div key={idx} className="space-y-3">
                                    <h3 className="text-md font-bold text-slate-900 ">{item.q}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
