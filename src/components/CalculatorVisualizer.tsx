import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { motion } from 'motion/react';

interface CalculatorVisualizerProps {
    name: string;
    category?: string;
    result: {
        value: string;
        explanation?: string;
        raw?: any; // We might want to pass raw numeric data for more complex charts
    } | null;
}

export const CalculatorVisualizer: React.FC<CalculatorVisualizerProps> = ({ name, category, result }) => {
    if (!result) return null;

    const n = name.toLowerCase();
    const c = category?.toLowerCase() || '';

    // Logic to extract numeric values for charting
    // This is a simplified version - in a real app, the math-engine would return a structured data object
    const numericValue = parseFloat(String(result.value).replace(/[^0-9.-]+/g, ""));

    // Case 1: Loan / Finance Breakdown (Interest vs Principal)
    const isFinance = c.includes('finance') || c.includes('investment') || n.includes('loan') || n.includes('mortgage');
    
    if (isFinance && result.explanation) {
        // Try to regex out "Total Interest" and "Principal" from explanation
        const interestMatch = result.explanation.match(/\$([\d,]+)\s+in total interest/i) || result.explanation.match(/total interest:\s*\$([\d,]+)/i);
        const principalMatch = result.explanation.match(/principal:\s*\$([\d,]+)/i) || result.explanation.match(/amount:\s*\$([\d,]+)/i);

        if (interestMatch) {
            const interest = parseFloat(interestMatch[1].replace(/,/g, ''));
            const principal = principalMatch ? parseFloat(principalMatch[1].replace(/,/g, '')) : numericValue - interest;
            
            const data = [
                { name: 'Principal', value: principal, color: '#3b82f6' },
                { name: 'Interest', value: interest, color: '#f59e0b' }
            ];

            return (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full mt-8 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm"
                >
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        Investment Breakdown
                    </h4>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Amount']}
                                />
                                <Legend verticalAlign="bottom" height={36}/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
            );
        }
    }

    // Case 2: Health / Scale Position (BMI, etc)
    if (n.includes('bmi')) {
        const bmi = numericValue;
        const data = [
            { name: 'Underweight', range: [0, 18.5], color: '#60a5fa' },
            { name: 'Normal', range: [18.5, 25], color: '#10b981' },
            { name: 'Overweight', range: [25, 30], color: '#f59e0b' },
            { name: 'Obese', range: [30, 40], color: '#ef4444' }
        ];

        return (
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full mt-8"
            >
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">BMI Classification Scale</h4>
                    <div className="relative h-12 w-full bg-slate-100 rounded-full flex overflow-hidden">
                        {data.map((item, idx) => (
                            <div 
                                key={idx} 
                                style={{ width: `${(item.range[1] - item.range[0]) * 2.5}%`, backgroundColor: item.color }}
                                className="h-full opacity-30 hover:opacity-100 transition-opacity flex items-center justify-center text-[8px] font-black text-white px-1 overflow-hidden"
                            >
                                {item.name}
                            </div>
                        ))}
                        {/* Needle */}
                        <div 
                            className="absolute top-0 bottom-0 w-1 bg-slate-900 border-x border-white shadow-lg z-10 transition-all duration-1000 ease-out"
                            style={{ left: `${Math.min(Math.max((bmi / 40) * 100, 0), 100)}%` }}
                        >
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rounded-full"></div>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                        <span>Underweight</span>
                        <span>Normal</span>
                        <span>Overweight</span>
                        <span>Obese</span>
                    </div>
                </div>
            </motion.div>
        );
    }

    // Default Fallback: Simple Bar comparison (if we had history or benchmarks)
    // For now, we only show specific high-value charts like Omni does.
    
    return null;
}
