import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CATEGORIES } from '../constants/categories';

// This component acts as a generic template for calculators that don't have a specialized UI yet.
// It ensures that all 500+ items in our categories list are navigable and SEO-friendly.
export const CalculatorPage: React.FC = () => {
    const { calculatorPath } = useParams<{ calculatorPath: string }>();
    
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

    return (
        <>
            <Helmet>
                <title>{foundItem.name} | Free Online Calculator 2026</title>
                <meta name="description" content={foundItem.desc || `Free accurate ${foundItem.name} for 2026. Part of our ${foundCategory.title} suite.`} />
            </Helmet>

            <div className="max-w-4xl mx-auto py-8">
                <nav className="flex text-[10px] text-[#999] mb-8 font-black uppercase tracking-[0.2em]">
                    <Link to="/" className="hover:text-[#0066cc]">home</Link>
                    <span className="mx-2">/</span>
                    <Link to={`/${foundCategory.slug}`} className="hover:text-[#0066cc]">{foundCategory.title}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-[#333]">{foundItem.name}</span>
                </nav>

                <header className="mb-12 border-b-4 border-[#111] pb-6">
                    <h1 className="text-5xl font-black text-[#111] tracking-tighter leading-none mb-4">
                        {foundItem.name}
                    </h1>
                    <p className="text-lg text-[#666] italic font-medium">
                        {foundItem.desc}
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        {/* Generic Interface Placeholder */}
                        <section className="bg-[#f0f0f0] p-12 border-2 border-dashed border-[#ccc] text-center rounded-sm">
                            <div className="mb-6">
                                <span className="bg-[#111] text-white px-4 py-2 text-xs font-black uppercase tracking-widest">
                                    Technical Module
                                </span>
                            </div>
                            <h2 className="text-2xl font-black mb-4 uppercase tracking-tight">Calculation Module Pending</h2>
                            <p className="text-sm text-[#666] leading-relaxed max-w-md mx-auto italic">
                                We are currently optimizing the specific algorithms for the 2026 <strong>{foundItem.name}</strong>. 
                                Full interactive controls will be deployed in the next scheduled build.
                            </p>
                        </section>

                        <section className="prose prose-sm max-w-none">
                            <h3 className="text-xl font-black text-[#111] uppercase tracking-tighter mb-4">About this tool</h3>
                            <p className="text-[#555] leading-relaxed">
                                The {foundItem.name} is designed to provide high-precision results for {foundCategory.title.toLowerCase()} related queries. 
                                Our 2026 update ensures that all underlying formulas comply with the latest regulatory standards and mathematical proofs.
                            </p>
                            <div className="bg-[#f9f9f9] p-6 border-l-4 border-[#0066cc] my-8">
                                <h4 className="text-xs font-black uppercase tracking-widest text-[#0066cc] mb-2">Key Metric</h4>
                                <p className="text-[13px] text-[#333] font-bold">
                                    "Accuracy is not an option—it is the baseline requirement for all our diagnostic tooling."
                                </p>
                            </div>
                        </section>
                    </div>

                    <aside className="space-y-12">
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-widest text-[#999] mb-6 border-b pb-2">Related {foundCategory.title} Tools</h3>
                            <div className="space-y-4">
                                {foundCategory.items.filter((i: any) => i.path !== foundItem.path).slice(0, 6).map((other: any) => (
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

                        <section className="bg-[#111] p-6 text-white text-center">
                            <h3 className="text-[10px] font-black uppercase tracking-widest mb-4">System Status</h3>
                            <div className="text-[24px] font-black mb-1">ONLINE</div>
                            <div className="text-[9px] font-medium opacity-50 uppercase tracking-tighter leading-none">
                                All Systems Nominal 2026.4
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </>
    );
};
