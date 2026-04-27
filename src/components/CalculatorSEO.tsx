import React, { useState, useEffect } from 'react';
import { Loader2, BookOpen, Calculator, Lightbulb, HelpCircle, Info } from 'lucide-react';
import { callGeminiWithRetry, safeParseAIResponse, MODEL_PRO, Type } from '../lib/gemini';
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
            if (!process.env.GEMINI_API_KEY) return;
            setIsLoading(true);
            try {
                const response = await callGeminiWithRetry({
                    model: MODEL_PRO,
                    contents: `Generate a professional, SEO-optimized technical guide for the "${name}" calculator (${description || ''}).
                    You MUST include exactly these 3 sections in the 'sections' array:
                    1. "How to Use This Calculator": A short, step-by-step guide for users.
                    2. "The Mathematical Formula": A detailed explanation of the math behind the logic.
                    3. "Common Examples": Real-world scenarios or example calculations.
                    
                    Additionally, provide a "Frequently Asked Questions (FAQ)" section in the 'faq' array with 3-4 common questions about these types of calculations.
                    
                    Keep the response authoritative yet concise (under 4000 characters total). Use Markdown-style formatting in the body text where helpful (bullet points, bolding).`,
                    config: {
                        systemInstruction: "You are a technical documentation and SEO expert. Return strictly JSON. Accuracy is paramount. Ensure the 'sections' array contains exactly 3 items addressing: How to Use, Math Formula, and Common Examples. The FAQ should be in its own 'faq' array.",
                        responseMimeType: "application/json",
                        responseSchema: {
                            type: Type.OBJECT,
                            properties: {
                                sections: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            title: { type: Type.STRING },
                                            body: { type: Type.STRING }
                                        }
                                    }
                                },
                                faq: {
                                    type: Type.ARRAY,
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            q: { type: Type.STRING },
                                            a: { type: Type.STRING }
                                        }
                                    }
                                }
                            },
                            required: ["sections", "faq"]
                        }
                    }
                });

                const data = safeParseAIResponse(response.text);
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
