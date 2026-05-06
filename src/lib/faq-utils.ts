
export interface FAQItem {
    q: string;
    a: string;
}

export const getSpecificFAQ = (calculatorName: string, categoryTitle: string, path: string): FAQItem[] => {
    // 1. Manual Overrides (Expand this as needed for high-traffic tools)
    const overrides: Record<string, FAQItem[]> = {
        '/bmi': [
            { q: "Is BMI accurate for athletes?", a: "BMI can sometimes overestimate body fat in athletes or individuals with high muscle mass, as muscle weighs more than fat. However, for the majority of the population in 2026, it remains a highly effective screening tool for health risks." },
            { q: "What is a healthy BMI range?", a: "The standard healthy range is 18.5 to 24.9. Falling below or above this can indicate potential health issues that should be discussed with a medical professional." },
            { q: "How often should I check my BMI?", a: "Monthly checks are usually sufficient. Significant changes in weight over short periods are more important to track than daily fluctuations." }
        ],
        '/compound-interest': [
            { q: "How does the frequency of compounding affect my returns?", a: "The more frequently interest is compounded (e.g., daily vs. annually), the higher your effective yield will be. Even small differences in frequency can result in thousands of extra dollars over long time horizons." },
            { q: "Can I use this for debt calculation?", a: "Yes, compound interest works both ways. You can use it to see how credit card debt grows if only minimum payments are made." },
            { q: "Should I include inflation in my calculation?", a: "For long-term planning, it's wise to subtract the expected inflation rate (usually 2-3%) from your interest rate to see the 'real' future value in today's purchasing power." }
        ],
        '/401k': [
            { q: "How much should I contribute to my 401(k) in 2026?", a: "At minimum, contribute enough to capture your full employer match—this is a 100% immediate return. Many experts recommend 15% of your gross income for long-term security." },
            { q: "Can I withdraw money from my 401(k) early?", a: "While possible via loans or hardship withdrawals, you typically face a 10% penalty plus income tax in 2026. Use our tool to see how much growth you lose long-term if you withdraw early." },
            { q: "What happens to my 401(k) if I leave my job?", a: "You can leave it with the old employer, roll it into your new job's plan, or move it to a personal IRA. A rollover typically avoids taxes and penalties." }
        ],
        '/529-plan': [
            { q: "Can I use 529 funds for something other than college?", a: "Yes, in 2026 you can use up to $10,000 per year for K-12 tuition, and unused funds can sometimes be rolled into a Roth IRA (under certain SECURE 2.0 limits)." },
            { q: "Who owns the 529 account?", a: "The person who opens it (usually a parent or grandparent) owns it, not the student. This means you maintain control over how the money is spent." }
        ],
        '/28-36-rule': [
            { q: "Is the 28/36 rule still relevant in 2026?", a: "Yes, it remains the gold standard for conservative lending. While some lenders allow higher ratios, staying within 28/36 ensures you aren't 'house poor' and can weather economic shifts." }
        ],
        '/calibration-curve': [
            { q: "What is a calibration curve used for in analytical chemistry?", a: "A calibration curve (also known as a standard curve) is used to determine the concentration of an unknown substance by comparing it to a set of standards with known concentrations. It's a fundamental method in instrumental analysis in 2026." },
            { q: "How do I interpret the R-squared value?", a: "The R-squared value indicates how well your data points fit the linear regression. A value closer to 1.0 (e.g., 0.999) suggests a highly reliable calibration." },
            { q: "What should I do if my unknown sample is outside the curve?", a: "If your unknown concentration is higher than your highest standard, you should dilute the sample and re-measure. Calculations outside the 'linear range' of the curve are statistically unreliable." }
        ],
        '/wealth-inequality-index': [
            { q: "What does a Gini Coefficient of 0% mean?", a: "A Gini Coefficient of 0% represents perfect equality, where every individual in a population has the exact same income or wealth." },
            { q: "How is wealth inequality measured in 2026?", a: "While the Gini Index remains the primary metric, economists also look at the 'Palma Ratio' and 'Top 10% Share' to get a more nuanced view of economic distribution across different social strata." },
            { q: "What is a 'high' wealth inequality score?", a: "Globally, Gini scores above 45% (0.45) are generally considered to represent significant inequality, often associated with lower social mobility and potential economic instability." }
        ],
        '/car-depreciation': [
            { q: "How much value does a new car lose in the first year?", a: "On average, a new vehicle loses 20% to 30% of its value within the first 12 months. Our 2026 model uses a baseline of 20% for the first year followed by 15% annual drops for most consumer vehicles." },
            { q: "Which car brands hold their value best?", a: "In 2026, brands like Toyota, Honda, and certain electric vehicles (EVs) with long-range batteries tend to have lower depreciation rates due to high secondary market demand." },
            { q: "Does mileage or age affect depreciation more?", a: "Both are critical. However, age is a constant factor that hits Luxury and EV models harder, while excessive mileage (over 15,000 miles per year) can trigger 'stealth depreciation' beyond the standard age curves." }
        ],
        '/debt-avalanche': [
            { q: "Debt Avalanche vs. Snowball: What's the math difference?", a: "The Debt Avalanche focus is purely mathematical efficiency: you pay off the highest interest rate debt first, regardless of the balance. This minimizes total interest paid. The Debt Snowball focuses on psychological wins by paying off the smallest balances first to gain momentum. Math-wise, the Avalanche is always faster and cheaper." },
            { q: "Which method should I choose in 2026?", a: "If you are strictly disciplined, use the Avalanche. if you struggle with motivation, the Snowball's 'quick wins' of closing out small accounts can provide the psychological boost needed to stay on track for years." }
        ],
        '/debt-snowball': [
            { q: "Is the Snowball method better than the Avalanche?", a: "Mathematically, no. But behaviorally, yes for many users. Our tool helps you see the 'Cost of Motivation'—the extra interest you pay by choosing Snowball over Avalanche." }
        ],
        '/balance-transfer': [
            { q: "Debt Consolidation Checklist: What do I need?", a: "1. Credit Score: Most 2026 lenders require 670+. 2. Interest Rate Comparison: Ensure the new loan/card APR is at least 5% lower than your current weighted average. 3. Fees: Check for 'Balance Transfer Fees' (usually 3-5%) or 'Origination Fees' on loans. 4. Repayment Plan: Have a budget that prevents you from running up balances on the newly empty cards." }
        ]
    };

    if (overrides[path]) return overrides[path];

    // 2. Dynamic Pattern-Based FAQ Generation
    // This ensures every one of the 1,600+ calculators has "unique" text structure
    const name = calculatorName;
    const cat = categoryTitle;
    const lowerName = name.toLowerCase();

    // 2. Pattern-based dynamic generation for 1600+ tools
    let genericFaq: FAQItem[] = [];

    if (lowerName.includes('cost') || lowerName.includes('price') || lowerName.includes('money') || lowerName.includes('salary')) {
        genericFaq = [
            { q: `How does the ${name} calculate financial outcomes?`, a: `Our ${name} uses verified 2026 economic models to process your inputs. It factors in current ${cat} benchmarks to ensure your cost analysis is accurate and actionable for professional budgeting.` },
            { q: `Can I use this ${name} for tax purposes?`, a: `While the ${name} provides high-precision estimates based on 2026 standards, it is intended for planning and educational use. Always verify results with a certified ${cat} professional for official tax documentation.` },
            { q: `What is the most important variable in the ${name}?`, a: `The results of the ${name} are most sensitive to your primary input values. We recommend double-checking your figures to ensure the most reliable outcome for your ${cat} needs.` }
        ];
    } else if (lowerName.includes('bmi') || lowerName.includes('fat') || lowerName.includes('health') || lowerName.includes('bmr')) {
        genericFaq = [
            { q: `How often should my ${name} results be updated?`, a: `For health-related metrics like the ${name}, we recommend tracking your data monthly. This allows you to see long-term trends in your ${cat} profile rather than daily fluctuations.` },
            { q: `Is this ${name} valid for all age groups?`, a: `The ${name} is optimized for adult users based on 2026 clinical standards. Pediatric or elderly ${cat} analysis may require specialized models, though this tool provides an excellent baseline index.` },
            { q: `Are the ${name} results private?`, a: `Yes. All calculations performed with the ${name} stay within your local session. We do not store or transmit your sensitive ${cat} data to our servers.` }
        ];
    } else if (lowerName.includes('conversion') || lowerName.includes('to') || lowerName.includes('converter')) {
        genericFaq = [
            { q: `How precise is this ${name} online?`, a: `Our ${name} uses high-precision floating point math validated for 2026. This ensures that even complex ${cat} conversions remain accurate down to several decimal places for technical use.` },
            { q: `Does this ${name} support both Metric and Imperial?`, a: `Yes, the ${name} is designed to bridge international standards, supporting a wide range of ${cat} units used globally in 2026 for maximum versatility.` },
            { q: `Why are my ${name} results slightly different from other tools?`, a: `Minor variations can occur based on the rounding methods used. The ${name} follows strict rounding protocols to ensure results are both precise and readable for ${cat} applications.` }
        ];
    } else {
        genericFaq = [
            { q: `How does the ${name} improve my ${cat} calculations?`, a: `The ${name} automates the complex formulas required for accurate ${cat} analysis in 2026. By using our verified engine, you eliminate manual arithmetic errors and save time.` },
            { q: `What are the limitations of the ${name}?`, a: `The ${name} is a powerful estimation tool that assumes standard conditions. For highly specialized ${cat} scenarios, ensure your input variables reflect the unique constraints of your project.` },
            { q: `Where can I learn more about the logic behind the ${name}?`, a: `We provide methodology insights and glossary terms below the ${name} calculator. This educational resource helps you understand the 'why' behind your ${cat} results.` }
        ];
    }

    return genericFaq;
};
