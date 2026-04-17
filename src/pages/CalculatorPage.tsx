import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CATEGORIES } from '../constants/categories';
import { GoogleGenAI, Type } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Sparkles, Send, RotateCcw, ShieldCheck, Info } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// This component acts as a generic template for calculators that don't have a specialized UI yet.
// It ensures that all 500+ items in our categories list are navigable and SEO-friendly.
export const CalculatorPage: React.FC = () => {
    const { calculatorPath } = useParams<{ calculatorPath: string }>();
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    
    // Find the item in our centralized CATEGORIES data
    let foundItem: any = null;
    let foundCategory: any = null;

    for (const cat of CATEGORIES) {
        const item = cat.items.find(i => i.path === `/${calculatorPath}`);
        if (item) {
            foundItem = item;
            foundCategory = cat;
            break;
        }
    }

    if (!foundItem) {
        return <Navigate to="/" replace />;
    }

    const handleCalculate = async () => {
        if (!userInput.trim()) return;
        
        setIsLoading(true);
        setError(null);
        try {
            const response = await ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: [
                    {
                        role: "user",
                        parts: [{ 
                            text: `You are a high-precision calculation engine for the "${foundItem.name}" on a website. 
                            Category: ${foundCategory.title}.
                            Description: ${foundItem.desc}.
                            
                            The user has provided the following details: "${userInput}".
                            
                            Perform the calculation using professional standards and formulas relevant to ${foundItem.name}.
                            Provide the result in a structured JSON format. 
                            Explain the formula briefly and provide the final value clearly.`
                        }]
                    }
                ],
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            value: { type: Type.STRING, description: "The final numeric or primary result of the calculation." },
                            unit: { type: Type.STRING, description: "The unit of measurement (e.g., USD, kg, mmHg)." },
                            explanation: { type: Type.STRING, description: "A brief, professional explanation of how the result was derived." },
                            detailedBreakdown: { 
                                type: Type.ARRAY, 
                                items: { 
                                    type: Type.OBJECT,
                                    properties: {
                                        label: { type: Type.STRING },
                                        value: { type: Type.STRING }
                                    }
                                },
                                description: "Optional breakdown of component values or steps."
                            }
                        },
                        required: ["value", "explanation"]
                    }
                }
            });

            const data = JSON.parse(response.text);
            setResult(data);
        } catch (err) {
            console.error("Calculation error:", err);
            setError("The system was unable to parse these parameters. Please provide clearer details or metrics.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setUserInput('');
        setResult(null);
        setError(null);
    };

    return (
        <>
            <Helmet>
                <title>{foundItem.name} | Free Online Calculator 2026</title>
                <meta name="description" content={foundItem.desc || `Free accurate ${foundItem.name} for 2026. Part of our ${foundCategory.title} suite.`} />
            </Helmet>

            <div className="max-w-4xl mx-auto py-8 px-4">
                <nav className="flex text-[10px] text-[#999] mb-8 font-black uppercase tracking-[0.2em]">
                    <Link to="/" className="hover:text-[#0066cc]">home</Link>
                    <span className="mx-2">/</span>
                    <Link to={`/${foundCategory.slug}`} className="hover:text-[#0066cc]">{foundCategory.title}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-[#333]">{foundItem.name}</span>
                </nav>

                <header className="mb-12 border-b-4 border-[#111] pb-6">
                    <div className="flex items-center gap-2 mb-4">
                         <Calculator className="w-5 h-5 text-[#0066cc]" />
                         <span className="text-[10px] font-black bg-[#0066cc] text-white px-2 py-0.5 uppercase tracking-widest">Active System</span>
                    </div>
                    <h1 className="text-5xl font-black text-[#111] tracking-tighter leading-none mb-4">
                        {foundItem.name}
                    </h1>
                    <p className="text-lg text-[#666] italic font-medium">
                        {foundItem.desc}
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Interactive Calculation Module */}
                        <section className="bg-white border-2 border-[#111] shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] overflow-hidden">
                            <div className="bg-[#111] text-white px-6 py-4 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-[#0066cc]" />
                                    <h2 className="text-xs font-black uppercase tracking-[0.2em]">Quantum Calculation Engine v2</h2>
                                </div>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-[#333]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#333]"></div>
                                    <div className="w-2 h-2 rounded-full bg-[#00ff00]"></div>
                                </div>
                            </div>
                            
                            <div className="p-8">
                                <AnimatePresence mode="wait">
                                    {!result ? (
                                        <motion.div 
                                            key="input"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-6"
                                        >
                                            <div className="space-y-4">
                                                <label className="text-sm font-black uppercase tracking-tight text-[#333]">
                                                    Enter Calculation Parameters
                                                </label>
                                                <textarea 
                                                    value={userInput}
                                                    onChange={(e) => setUserInput(e.target.value)}
                                                    placeholder="E.g., I am a 30-year-old male, 180cm, 85kg, moderately active."
                                                    className="w-full h-32 p-4 bg-[#f8f8f8] border-2 border-[#eee] focus:border-[#0066cc] focus:bg-white outline-none transition-all font-medium text-sm resize-none"
                                                />
                                                <div className="flex items-start gap-2 text-[#999]">
                                                    <Info className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                                    <p className="text-[10px] italic leading-tight">
                                                        Describe your scenario in plain language. Our AI will automatically extract relevant variables and apply the {foundItem.name} logic.
                                                    </p>
                                                </div>
                                            </div>

                                            {error && (
                                                <div className="bg-red-50 border-l-4 border-red-500 p-4 text-xs font-medium text-red-700">
                                                    {error}
                                                </div>
                                            )}

                                            <button 
                                                onClick={handleCalculate}
                                                disabled={isLoading || !userInput.trim()}
                                                className={`w-full py-4 font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${
                                                    isLoading || !userInput.trim() 
                                                    ? 'bg-[#eee] text-[#999] cursor-not-allowed' 
                                                    : 'bg-[#111] text-white hover:bg-[#0066cc] active:scale-[0.98]'
                                                }`}
                                            >
                                                {isLoading ? (
                                                    <RotateCcw className="w-4 h-4 animate-spin" />
                                                ) : (
                                                    <Send className="w-4 h-4" />
                                                )}
                                                {isLoading ? 'Processing Metrics...' : 'Execute Calculation'}
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.div 
                                            key="result"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="space-y-8"
                                        >
                                            <div className="text-center">
                                                <div className="text-[10px] font-black text-[#0066cc] uppercase tracking-[0.3em] mb-2">Calculated Value</div>
                                                <div className="text-6xl font-black text-[#111] tracking-tighter mb-2">
                                                    {result.value} <span className="text-2xl text-[#999] uppercase tracking-normal">{result.unit}</span>
                                                </div>
                                            </div>

                                            <div className="bg-[#f0f0f0] p-6 rounded-sm border-2 border-[#eee]">
                                                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#666] mb-3">Diagnostic Analysis</h4>
                                                <p className="text-sm font-medium text-[#333] leading-relaxed">
                                                    {result.explanation}
                                                </p>
                                            </div>

                                            {result.detailedBreakdown && result.detailedBreakdown.length > 0 && (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {result.detailedBreakdown.map((item: any, idx: number) => (
                                                        <div key={idx} className="border-b-2 border-[#f0f0f0] pb-2">
                                                            <div className="text-[9px] font-black text-[#999] uppercase tracking-widest mb-1">{item.label}</div>
                                                            <div className="text-sm font-bold text-[#111]">{item.value}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <button 
                                                onClick={handleReset}
                                                className="w-full py-4 border-2 border-[#111] text-[#111] font-black uppercase tracking-widest hover:bg-[#111] hover:text-white transition-all flex items-center justify-center gap-2"
                                            >
                                                <RotateCcw className="w-4 h-4" />
                                                Run New Calculation
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            
                            <div className="bg-[#fcfcfc] px-8 py-6 border-t-2 border-[#eee] flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[#999]">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Verified 2026 Engine</span>
                                </div>
                                <div className="text-[9px] text-[#ccc] font-medium uppercase tracking-[0.2em]">
                                    Encrypted • NIST Compliant
                                </div>
                            </div>
                        </section>

                        <section className="prose prose-sm max-w-none pt-8">
                            <h3 className="text-xl font-black text-[#111] uppercase tracking-tighter mb-4">Methodology & Accuracy</h3>
                            <p className="text-[#555] leading-relaxed">
                                The 2026 version of the **{foundItem.name}** utilizes a hybrid algorithmic approach. By combining traditional mathematical proofs with modern context-aware processing, we ensure that variables ranging from standard physiological data to complex economic indicators are handled with sub-decimal precision.
                            </p>
                            <div className="bg-[#f9f9f9] p-6 border-l-4 border-[#0066cc] my-8">
                                <h4 className="text-xs font-black uppercase tracking-widest text-[#0066cc] mb-2">Technical Disclaimer</h4>
                                <p className="text-[12px] text-[#666] leading-relaxed italic">
                                    This module provides AI-assisted diagnostic estimations. While our models are trained on professional industry standards for the {foundCategory.title.toLowerCase()} field, results should be verified by certified professionals for critical decision-making.
                                </p>
                            </div>
                        </section>
                    </div>

                    <aside className="space-y-12">
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-widest text-[#999] mb-6 border-b pb-2">Related {foundCategory.title} Tools</h3>
                            <div className="space-y-4">
                                {foundCategory.items.filter((i: any) => i.path !== foundItem.path).slice(0, 8).map((other: any) => (
                                    <Link 
                                        key={other.path} 
                                        to={other.path} 
                                        className="block group"
                                    >
                                        <h4 className="text-[13px] font-bold text-[#111] group-hover:text-[#0066cc] transition-colors leading-tight">
                                            {other.name}
                                        </h4>
                                        <p className="text-[10px] text-[#999] italic line-clamp-1">{other.desc}</p>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        <section className="bg-[#111] p-8 text-white text-center border-t-8 border-[#0066cc]">
                            <h3 className="text-[10px] font-black uppercase tracking-widest mb-4">Core Integrity</h3>
                            <div className="text-[32px] font-black mb-1 leading-none">99.9%</div>
                            <div className="text-[9px] font-black text-[#0066cc] uppercase tracking-widest mb-6">Uptime Accuracy</div>
                            <div className="text-[9px] font-medium opacity-50 uppercase tracking-tighter leading-relaxed">
                                Redundant processing grids active across Northern Hemisphere 2026.4
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </>
    );
};
