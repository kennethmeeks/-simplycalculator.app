import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Loader2 } from 'lucide-react';

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });
const MODEL_PRO = "gemini-3.1-pro-preview";

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
                const response = await genAI.models.generateContent({
                    model: MODEL_PRO,
                    contents: `Generate a professional, SEO-optimized technical guide for the "${name}" calculator (${description || ''}).
                    You MUST include:
                    1. A dedicated section on "Mathematical Formula" explaining the logic clearly.
                    2. A section on "Unit Conversions" (e.g. Metric to Imperial) if relevant to this tool.
                    3. A section on "Usage & Examples" providing context on when to use this.
                    4. A Frequently Asked Questions (FAQ) section with 3-4 common questions.
                    Keep the response authoritative yet concise (under 4000 characters total).`,
                    config: {
                        systemInstruction: "You are a technical documentation and SEO expert. Return strictly JSON. Accuracy is paramount.",
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

                const data = JSON.parse(response.text);
                setGuideContent(data);
                localStorage.setItem(CACHE_KEY(path), JSON.stringify(data));
            } catch (err) {
                console.error("SEO Guide fetch error:", err);
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
                    <p className="text-sm font-medium text-slate-500">Generating educational content...</p>
                </div>
            </div>
        );
    }

    if (!guideContent) return null;

    return (
        <div className="mt-16 space-y-12">
            <div className="prose prose-slate max-w-none">
                {guideContent.sections.map((section, idx) => (
                    <div key={idx} className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h2>
                        <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                            {section.body}
                        </div>
                    </div>
                ))}

                {guideContent.faq.length > 0 && (
                    <div className="mt-16 pt-12 border-t border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions (FAQ)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {guideContent.faq.map((item, idx) => (
                                <div key={idx} className="space-y-2">
                                    <h3 className="text-lg font-bold text-slate-900">{item.q}</h3>
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
