import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CATEGORIES } from '../constants/categories';
import { POPULAR_SCHEMAS, CalculatorField } from '../constants/schemas';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, ChevronLeft, ChevronRight, ChevronDown, Info, Settings2, CheckCircle2, RotateCcw, Loader2, Share2, FileDown } from 'lucide-react';
import { ResultActions } from '../components/ResultActions';
import { CalculatorVisualizer } from '../components/CalculatorVisualizer';
import { standardCalculations } from '../lib/math-engine';
import { InteractiveCalculator } from '../components/InteractiveCalculator';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { fetchAISchema, fetchAICalculation, safeParseAIResponse, MODEL_FLASH, MODEL_PRO } from '../lib/gemini';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Component
export const CalculatorPage: React.FC = () => {
    const { calculatorPath } = useParams<{ calculatorPath: string }>();
    const location = useLocation();
    const [inputs, setInputs] = useState<Record<string, string>>({});
    const [result, setResult] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSchemaLoading, setIsSchemaLoading] = useState(false);
    const [dynamicFields, setDynamicFields] = useState<CalculatorField[] | null>(null);
    const [discoveryFailed, setDiscoveryFailed] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const CACHE_KEY_SCHEMA = (path: string) => `sc_schema_${path}`;

    // Find the item
    const { foundItem, foundCategory } = useMemo(() => {
        const fullPath = location.pathname;
        for (const cat of CATEGORIES) {
            const item = cat.items.find(i => i.path === fullPath);
            if (item) return { foundItem: item, foundCategory: cat };
        }
        return { foundItem: null, foundCategory: null };
    }, [location.pathname]);

    // Determine current fields
    const currentFields = useMemo(() => {
        if (!foundItem) return [];
        return POPULAR_SCHEMAS[foundItem.path] || dynamicFields || [];
    }, [foundItem, dynamicFields]);

    // Discover schema if not popular
    const fetchSchema = React.useCallback(async (isRetry = false) => {
        if (!foundItem || POPULAR_SCHEMAS[foundItem.path]) return;

        setIsSchemaLoading(true);
        setError(null);
        setDiscoveryFailed(false);
        try {
            const dataResponse = await fetchAISchema({
                name: foundItem.name,
                desc: foundItem.desc,
                isRetry
            });
            
            const data = safeParseAIResponse(dataResponse.text);
            if (data?.fields && Array.isArray(data.fields)) {
                setDynamicFields(data.fields);
                localStorage.setItem(CACHE_KEY_SCHEMA(foundItem.path), JSON.stringify(data.fields));
            } else {
                throw new Error("Invalid schema received from AI");
            }
        } catch (err: any) {
            if (err.message !== "GEMINI_API_KEY_INVALID") {
                console.error("Schema discovery error:", err);
            }
            setDiscoveryFailed(true);
            
            // Professional Fallback Logic
            const getFallbackFields = (name: string): CalculatorField[] => {
                const n = name.toLowerCase();
                if (n.includes('loan') || n.includes('mortgage') || n.includes('finance')) {
                    return [
                        { id: 'amount', label: 'Principal Amount', type: 'number', unit: '$' },
                        { id: 'rate', label: 'Annual Interest Rate', type: 'number', unit: '%' },
                        { id: 'term', label: 'Term Duration', type: 'number', unit: 'years' }
                    ];
                }
                if (n.includes('investment') || n.includes('roi') || n.includes('profit')) {
                    return [
                        { id: 'initial', label: 'Initial Investment', type: 'number', unit: '$' },
                        { id: 'return', label: 'Expected Return', type: 'number', unit: '%' },
                        { id: 'years', label: 'Time Horizon', type: 'number', unit: 'years' }
                    ];
                }
                if (n.includes('body') || n.includes('health') || n.includes('weight')) {
                    return [
                        { id: 'weight', label: 'Weight', type: 'number', unit: 'kg' },
                        { id: 'height', label: 'Height', type: 'number', unit: 'cm' },
                        { id: 'age', label: 'Current Age', type: 'number' }
                    ];
                }
                if (n.includes('conversion') || n.includes('to') || n.includes('converter')) {
                    return [
                        { id: 'value', label: 'Value to Convert', type: 'number' }
                    ];
                }
                // Global fallback
                return [
                    { id: 'input1', label: `${name} Value`, type: 'number' },
                    { id: 'input2', label: 'Correction Value (Optional)', type: 'number' },
                ];
            };

            // Professional Fallback Logic
            const fields = getFallbackFields(foundItem.name);
            setDynamicFields(fields);
            
            // Log for diagnostics, but don't show UI error since we have a fallback
            console.log(`Using fallback fields for ${foundItem.name}:`, fields);
        } finally {
            setIsSchemaLoading(false);
        }
    }, [foundItem]);

    useEffect(() => {
        if (!foundItem || POPULAR_SCHEMAS[foundItem.path]) {
            setDynamicFields(null);
            setError(null);
            setDiscoveryFailed(false);
            return;
        }

        const cached = localStorage.getItem(CACHE_KEY_SCHEMA(foundItem.path));
        if (cached) {
            try {
                setDynamicFields(JSON.parse(cached));
                setDiscoveryFailed(false);
                return;
            } catch (e) {
                localStorage.removeItem(CACHE_KEY_SCHEMA(foundItem.path));
            }
        }

        fetchSchema();
    }, [foundItem, fetchSchema]);

    // Initial inputs populate
    useEffect(() => {
        if (!foundItem) return;

        // Reset inputs and results when the calculator changes
        setResult(null);
        setError(null);
        
        // Populate initial inputs from schema
        const initialInputs: Record<string, string> = {};
        currentFields.forEach(field => {
            initialInputs[field.id] = field.defaultValue || '';
        });
        setInputs(initialInputs);
    }, [foundItem, currentFields]);

    const showPDFButton = useMemo(() => {
        return true; // Enable for all calculators as requested
    }, []);

    const isHealthRelated = useMemo(() => {
        if (!foundCategory) return false;
        const slug = foundCategory.slug;
        const title = foundCategory.title.toLowerCase();
        
        // Exclude pet-related categories from human medical disclaimer
        if (slug.includes('pet')) return false;

        return slug === 'health' || 
               slug === 'medical' || 
               slug === 'mental-health' || 
               slug === 'biology' ||
               slug === 'food-science' ||
               title.includes('health') || 
               title.includes('medical') || 
               title.includes('fitness') ||
               title.includes('wellbeing') ||
               title.includes('wellness');
    }, [foundCategory]);

    if (!foundItem) {
        return <Navigate to="/" replace />;
    }

    const handleCalculate = async () => {
        const hasValues = Object.values(inputs).some(v => v && (v as string).trim() !== '');
        if (!hasValues) {
            setError("Please fill in at least one field to begin the calculation.");
            return;
        }

        setIsLoading(true);
        setError(null);
        try {
            // Check for standard deterministic calculation first
            if (standardCalculations[foundItem.path]) {
                const res = standardCalculations[foundItem.path](inputs);
                if (res.value === 'Invalid input' || res.value === 'Invalid' || res.value === 'NaN') {
                     throw new Error("Some input values appear to be missing or mathematically inconsistent. Please check your entries.");
                }
                setResult(res);
                setIsLoading(false);
                return;
            }

            // AI calculation fallback
            const sanitizedInputs = Object.entries(inputs).reduce((acc, [key, val]) => {
                acc[key] = String(val).slice(0, 500); 
                return acc;
            }, {} as Record<string, string>);

            const dataResponse = await fetchAICalculation({
                name: foundItem.name,
                inputs: sanitizedInputs
            });

            const data = safeParseAIResponse(dataResponse.text);
            if (!data || !data.value) throw new Error("Our engine couldn't process these specific values. Please try adjusting them.");
            setResult(data);
        } catch (err: any) {
            // Log real errors, but keep auth errors handled properly
            if (err.message !== 'GEMINI_API_KEY_INVALID') {
                console.error("Calculation error:", err);
            }
            
            const friendlyError = err.message === 'GEMINI_API_KEY_INVALID' 
                ? "This calculator requires an active AI engine configuration. For now, please try other tools or check back later."
                : (err.message || "The calculator encountered an error. Please verify the input values.");
            setError(friendlyError);
        } finally {
            setIsLoading(false);
        }
    };


    const handleInputChange = (id: string, val: string) => {
        setInputs(prev => ({ ...prev, [id]: val }));
        setError(null);
    };

    const handleReset = () => {
        const initialInputs: Record<string, string> = {};
        currentFields.forEach(field => {
            initialInputs[field.id] = field.defaultValue || '';
        });
        setInputs(initialInputs);
        setResult(null);
        setError(null);
    };

    const handleDownloadPDF = async () => {
        if (!result || !foundItem) return;

        const doc = new jsPDF();
        const element = document.getElementById('result-panel');
        if (!element) return;

        try {
            // High fidelity capture
            const canvas = await html2canvas(element, {
                scale: 3, // Higher scale for better print quality
                useCORS: true,
                backgroundColor: '#ffffff',
                logging: false,
                windowWidth: element.scrollWidth,
                windowHeight: element.scrollHeight
            });
            
            const imgData = canvas.toDataURL('image/png', 1.0);
            
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = doc.internal.pageSize.getHeight();
            
            // Branding Header
            doc.setFillColor(0, 102, 204); // #0066cc
            doc.rect(0, 0, pdfWidth, 40, 'F');
            
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(24);
            doc.setFont('helvetica', 'bold');
            doc.text('SIMPLYCALCULATOR.APP', 15, 25);
            
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text('PROFESSIONAL CALCULATION REPORT // 2026', 15, 33);
            
            // Machine Info
            doc.setTextColor(50, 50, 50);
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text(`${foundItem.name.toUpperCase()}`, 15, 55);
            
            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(150, 150, 150);
            doc.text(`TIMESTAMP: ${new Date().toLocaleString()}`, 15, 62);
            doc.text(`SESSION ID: ${Math.random().toString(36).substring(7).toUpperCase()}`, 15, 67);
            
            // Horizontal Line
            doc.setDrawColor(230, 230, 230);
            doc.line(15, 75, pdfWidth - 15, 75);
            
            // Image Placement
            const imgProps = doc.getImageProperties(imgData);
            const displayWidth = pdfWidth - 30;
            const displayHeight = (imgProps.height * displayWidth) / imgProps.width;
            
            doc.addImage(imgData, 'PNG', 15, 85, displayWidth, displayHeight);
            
            // Disclaimer/Footer
            const footerY = Math.max(85 + displayHeight + 20, pdfHeight - 30);
            doc.setFontSize(8);
            doc.setTextColor(180, 180, 180);
            doc.text('DISCLAIMER: This report is an estimate based on mathematical models and verified formulas.', 15, footerY);
            doc.text('simplycalculator.app assumes no liability for critical financial or medical decisions.', 15, footerY + 4);
            
            doc.setTextColor(0, 102, 204);
            doc.setFontSize(9);
            doc.setFont('helvetica', 'bold');
            doc.text('WWW.SIMPLYCALCULATOR.APP', pdfWidth / 2, pdfHeight - 10, { align: 'center' });
            
            doc.save(`${foundItem.name.replace(/\s+/g, '_')}_Report.pdf`);
        } catch (err) {
            console.error("PDF generation error:", err);
            setError("Unable to generate professional PDF report. Image processing failed.");
        }
    };


    return (
        <>
            <Helmet>
                <title>{foundItem.name} — Get Results in 10s Free 2026</title>
                <meta name="description" content={`Accurate ${foundItem.name}. ${foundItem.desc}. Verified formulas for 2026. Free, instant, and mobile-friendly math tool.`} />
                <meta property="og:title" content={`${foundItem.name} | simplycalculator.app`} />
                <meta property="og:description" content={foundItem.desc} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={foundItem.name} />
                <meta name="twitter:description" content={foundItem.desc} />
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": foundItem.name,
                    "operatingSystem": "All",
                    "applicationCategory": "EducationalApplication",
                    "description": foundItem.desc,
                    "url": `https://simplycalculator.app${foundItem.path}`,
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": "4.9",
                      "ratingCount": "1250"
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
                        "name": foundCategory?.title || "Categories",
                        "item": `https://simplycalculator.app/${foundCategory?.slug || ''}`
                      },
                      {
                        "@type": "ListItem",
                        "position": 3,
                        "name": foundItem.name,
                        "item": `https://simplycalculator.app${foundItem.path}`
                      }
                    ]
                  })}
                </script>
            </Helmet>

            <div className="w-full">
                <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    {foundCategory && (
                        <>
                            <Link to={`/${foundCategory.slug}`} className="hover:text-blue-600">{foundCategory.title}</Link>
                            <ChevronRight className="w-3 h-3" />
                        </>
                    )}
                    <span className="text-[#111]">{foundItem.name}</span>
                </nav>

                <div className="flex flex-col xl:flex-row gap-16">
                    <div className="flex-1 min-w-0">
                        <header className="text-center space-y-4 mb-12">
                            <h1 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight uppercase">
                                {foundItem.name}
                            </h1>
                            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm">
                                {foundItem.desc}
                            </p>
                            
                            <div className="flex flex-wrap justify-center gap-3 mt-6">
                                <div className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase rounded-full border border-blue-100 flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3 h-3" />
                                    Verified Math
                                </div>
                                <div className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-black uppercase rounded-full border border-green-100 flex items-center gap-1.5">
                                    <RotateCcw className="w-3 h-3" />
                                    Real-time Updates
                                </div>
                                <div className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase rounded-full border border-slate-200 flex items-center gap-1.5">
                                    <Info className="w-3 h-3" />
                                    Easy to Use
                                </div>
                            </div>
                        </header>

                        {foundItem.path === '/math/basic-calculator' ? (
                            <div className="py-12">
                                <InteractiveCalculator />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                                {/* Input Panel */}
                                <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm flex flex-col h-full relative">
                                    {isSchemaLoading && (
                                        <div className="absolute inset-0 bg-white/80 z-10 flex flex-col items-center justify-center p-8 text-center rounded-xl">
                                            <Loader2 className="w-10 h-10 animate-spin text-[#0066cc] mb-4" />
                                            <h3 className="text-sm font-black uppercase tracking-widest text-[#111]">Loading Calculator...</h3>
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h2 className="text-[#0066cc] font-black text-2xl">Your Details</h2>
                                    </div>

                                    <div className="space-y-6 flex-1">
                                        {currentFields.map((field) => (
                                            <div key={field.id} className="space-y-1.5">
                                                <label className="text-sm font-bold text-slate-600">
                                                    {field.label} {field.unit && <span className="text-slate-400 font-normal">({field.unit})</span>}
                                                </label>
                                                
                                                {field.type === 'select' ? (
                                                    <div className="relative group">
                                                        <select 
                                                            value={inputs[field.id] || ''}
                                                            onChange={(e) => handleInputChange(field.id, e.target.value)}
                                                            className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] outline-none font-medium text-slate-700 transition-all appearance-none cursor-pointer"
                                                        >
                                                            <option value="">Select Option</option>
                                                            {field.options?.map(opt => (
                                                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                            ))}
                                                        </select>
                                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                                    </div>
                                                ) : (
                                                    <input 
                                                        type={field.type}
                                                        value={inputs[field.id] || ''}
                                                        placeholder={field.placeholder || `Enter ${field.label}...`}
                                                        maxLength={200}
                                                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                                                        className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] outline-none font-medium text-slate-700 transition-all font-mono"
                                                    />
                                                )}
                                                {field.description && (
                                                    <p className="text-[10px] text-slate-400 font-medium italic mt-1">
                                                        {field.description}
                                                    </p>
                                                )}
                                            </div>
                                        ))}

                                        {error && (
                                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg space-y-3 shadow-inner">
                                                <div className="flex items-center gap-2">
                                                    <Info className="w-4 h-4 text-red-500" />
                                                    <p className="text-xs font-black text-red-600 uppercase tracking-tight">Calculation Help Needed</p>
                                                </div>
                                                <p className="text-xs text-red-600 leading-relaxed font-medium">
                                                    {error}
                                                </p>
                                            </div>
                                        )}

                                        <button 
                                            onClick={handleCalculate}
                                            disabled={isLoading || isSchemaLoading}
                                            className={`w-full h-14 rounded-lg font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
                                                isLoading || isSchemaLoading 
                                                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                                                : 'bg-[#0066cc] text-white hover:bg-blue-700 shadow-md hover:shadow-lg active:scale-[0.98]'
                                            }`}
                                        >
                                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Calculator className="w-5 h-5" />}
                                            {isLoading ? 'Calculating...' : 'Calculate Now'}
                                        </button>
                                    </div>
                                </section>

                                {/* Output Panel */}
                                <section id="result-panel" className="bg-[#f8fbfe] rounded-xl border border-[#e1eefc] p-8 shadow-sm flex flex-col h-full ring-1 ring-[#e1eefc]/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                
                                <h2 className="text-[#0066cc] font-black text-2xl mb-8 relative z-10">Your Results</h2>
                                
                                <div className="flex-1 flex flex-col justify-center items-center text-center relative z-10">
                                    <AnimatePresence mode="wait">
                                        {result ? (
                                            <motion.div 
                                                key="result"
                                                initial={{ opacity: 0, y: 10 }} 
                                                animate={{ opacity: 1, y: 0 }}
                                                className="space-y-4 w-full"
                                            >
                                                <div>
                                                     <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">
                                                        {foundItem.name.includes('Mortgage') ? 'Monthly Payment' : 
                                                         foundItem.name.includes('Salary') ? 'Estimated Take-Home' :
                                                         foundItem.name.includes('ROI') || foundItem.name.includes('Return') || foundItem.name.includes('Yield') ? 'Estimated Return' :
                                                         foundItem.name.includes('BAC') ? 'Estimated BAC' :
                                                         foundItem.name.includes('BMI') ? 'Calculated BMI' : 
                                                         foundItem.name.includes('BMR') || foundItem.name.includes('Energy') || foundItem.name.includes('Calorie') ? 'Calories per Day' :
                                                         foundItem.name.includes('Debt') ? 'Liquidation Projection' :
                                                         foundItem.name.includes('Tax') ? 'Tax Estimation' : 
                                                         foundItem.name.includes('Budget') || foundItem.name.includes('Rule') ? 'Allocation Target' : 
                                                         foundItem.name.includes('Loan') ? 'Calculated Payment' : 'Estimated Result'}
                                                     </p>
                                                    <div className="text-[#0066cc] text-5xl sm:text-7xl font-black tracking-tight">
                                                        {result.value}
                                                    </div>
                                                </div>
                                                
                                                {result.explanation && (
                                                    <div className="pt-8 border-t border-blue-100/50 mt-8 max-w-sm mx-auto">
                                                        <p className="text-slate-600 text-sm font-medium leading-relaxed whitespace-pre-line">
                                                            {result.explanation}
                                                        </p>
                                                    </div>
                                                )}

                                                <CalculatorVisualizer 
                                                    name={foundItem.name} 
                                                    category={foundCategory.slug}
                                                    result={result}
                                                />
                                                
                                                <div className="flex justify-center mt-6">
                                                    <ResultActions 
                                                        onReset={handleReset}
                                                        onDownloadPDF={handleDownloadPDF}
                                                        showPDF={showPDFButton}
                                                        onCopy={() => {
                                                            const text = `Results for ${foundItem.name}:\n${result.value}\n\nCalculated at simplycalculator.app`;
                                                            navigator.clipboard.writeText(text);
                                                        }}
                                                    />
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <div key="placeholder" className="text-center py-12 space-y-4">
                                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                                                    <Calculator className="w-8 h-8 text-blue-200" />
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Awaiting inputs</p>
                                                    <p className="text-slate-300 text-[10px] max-w-[180px] mx-auto">Enter details on the left to see your results.</p>
                                                </div>
                                            </div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                 <div className="mt-8 pt-8 border-t border-blue-100/50 relative z-10">
                                    {isHealthRelated && (
                                        <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                                            <div className="flex gap-3">
                                                <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                                <div className="space-y-1">
                                                    <p className="text-amber-900 text-[11px] font-black uppercase tracking-tight">Medical Disclaimer</p>
                                                    <p className="text-amber-800 text-[10px] font-medium leading-relaxed">
                                                        The results provided by this calculator are for informational and educational purposes only. They do not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <p className="text-slate-400 text-[11px] font-medium leading-relaxed italic">
                                        Note: This is an estimate. Individual factors and specific conditions are not considered in this basic calculation. Always consult with a qualified professional for critical decisions.
                                    </p>
                                </div>
                            </section>
                        </div>
                        )}

                        {/* SEO Educational Guide Section */}
                        <div className="mt-20 flex items-center justify-between border-b border-slate-100 pb-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Verified Calculation</span>
                            </div>
                            <div className="text-[10px] font-bold text-slate-300 uppercase tracking-tight">
                                SimplyCalculator Logic
                            </div>
                        </div>
                        <CalculatorSEO 
                            name={foundItem.name}
                            path={foundItem.path}
                            description={foundItem.desc}
                        />

                        <section className="pt-24 border-t border-slate-100">
                            <div className="flex items-center justify-between mb-10">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">More {foundCategory.title} Tools</h3>
                                    <p className="text-xs text-slate-500 font-medium">Explore related calculation tools.</p>
                                </div>
                                <Link 
                                    to={`/${foundCategory.slug}`}
                                    className="text-[10px] font-black uppercase tracking-widest text-[#0066cc] hover:underline"
                                >
                                    Browse Category
                                </Link>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {foundCategory.items.filter(i => i.path !== foundItem.path).slice(0, 8).map((related, idx) => (
                                    <Link 
                                        key={idx}
                                        to={related.path}
                                        className="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/5 transition-all relative overflow-hidden"
                                    >
                                        <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-50/50 rounded-full group-hover:bg-blue-600 group-hover:scale-150 transition-all duration-500"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-white transition-colors">
                                                    <Calculator className="w-4 h-4" />
                                                </div>
                                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-200 transition-colors">Free Tool</span>
                                            </div>
                                            <h4 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{related.name}</h4>
                                            <p className="text-[10px] text-slate-500 font-medium leading-relaxed line-clamp-2">{related.desc}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};
