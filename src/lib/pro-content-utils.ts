
export interface ProContent {
    title: string;
    content: string;
    type: 'summary' | 'checklist' | 'comparison';
}

export const getProContent = (path: string): ProContent[] => {
    const contentMap: Record<string, ProContent[]> = {
        '/debt-avalanche': [
            {
                title: 'Debt Avalanche vs. Snowball: The Math',
                type: 'comparison',
                content: 'The Debt Avalanche method is mathematically superior because it targets the debt with the highest interest rate first, regardless of balance. By minimizing the "cost of carry" (interest), you lower the total amount paid over time and shorten the payoff date. In contrast, the Debt Snowball targets the smallest balance first to build psychological momentum. While the Snowball feels faster due to quick wins, the Avalanche is the engine for maximum interest savings.'
            }
        ],
        '/debt-snowball': [
             {
                title: 'Snowball vs. Avalanche: The Math',
                type: 'comparison',
                content: 'The Debt Snowball targets the smallest debt balance first, providing a psychological "win" as accounts are closed quickly. Mathematically, this might cost more in interest over the long run compared to the Avalanche (high-rate first) method, but behavioral studies show that the Snowball lead to higher completion rates because the positive reinforcement of seeing debt disappear prevents burnout. It effectively trades a small math efficiency for a large behavioral advantage.'
            }
        ],
        '/debt-consolidation': [
            {
                title: 'Checklist for Debt Consolidation',
                type: 'checklist',
                content: '• **Credit Score:** Most high-value consolidation loans require a score of 670+. Check yours before applying.\n• **Interest Rate Gap:** Your new loan rate should be at least 2% lower than your weighted average current rate to be worth the fees.\n• **Total Fees:** Factor in origination fees (usually 1-5%) and balance transfer fees.\n• **Term Length:** Avoid extending your term so long that you pay more total interest even with a lower monthly rate.\n• **Variable vs Fixed:** Prefer fixed rates in 2026 to protect against inflation spikes.'
            }
        ],
        '/balance-transfer': [
             {
                title: 'Balance Transfer Logic',
                type: 'summary',
                content: 'A balance transfer is a race against time. The math only works if you can pay off the entire transferred balance within the 0% APR introductory period (usually 12-21 months). If even $1 remains after the period ends, the interest rate often jumps to 20%+, which can wipe out the initial savings from the transfer fee (typically 3% of the total).'
            }
        ],
        '/70-20-10-rule': [
            {
                title: 'Why the 70/20/10 Rule Works',
                type: 'summary',
                content: 'This rule provides a balanced framework for 2026 wealth management. By capping living expenses at 70%, you force a 20% commitment to debt repayment or investing, and a 10% commitment to giving or "fun." It prevents lifestyle creep by prioritizing the 30% "future and legacy" portion of your check before the 70% "now" portion is spent.'
            }
        ],
        '/401k': [
            {
                title: '2026 401(k) Strategic Checklist',
                type: 'checklist',
                content: '• **Employer Match:** Always contribute enough to get the full match; it is essentially a 100% immediate return.\n• **Vesting Schedule:** Check if your employer\'s contributions are yours immediately or if you need to stay 3-5 years.\n• **Expense Ratios:** Review the fees of your mutual funds. Anything over 0.50% is "expensive" in 2026.\n• **Roth vs Traditional:** If you expect to be in a higher tax bracket later, consider the Roth 401(k) option.'
            }
        ],
        '/403b': [
            {
                title: '403(b) vs 401(k) Differences',
                type: 'summary',
                content: 'While similar to a 401(k), the 403(b) is designed for non-profit and educational employees. The math of compound interest remains the same, but 403(b) plans often have a "15-year rule" allowing for catch-up contributions that aren\'t available in standard corporate plans. Use this tool to verify if your specific non-profit provider is charging hidden annuity fees.'
            }
        ],
        '/529-plan': [
            {
                title: 'The 529 College Savings Logic',
                type: 'summary',
                content: 'The 529 plan is the most powerful tool for education due to tax-free growth. Mathematically, starting a 529 plan when a child is born versus age 10 can result in over $50,000 more in available funds for the same monthly contribution, thanks to an additional decade of tax-free compounding.'
            }
        ],
        '/12-hour-shift-pay': [
            {
                title: 'The Hidden Value of 12-Hour Shifts',
                type: 'comparison',
                content: 'While 12-hour shifts are physically demanding, they often result in significant "Hidden OT." In a typical 2-week cycle (3 days on, 4 off, then 4 on, 3 off), you may hit 84 hours. This tool calculates your base vs. overtime blend, ensuring your premium pay for those final 4 hours is accurately reflected in your take-home pay.'
            }
        ],
        '/28-36-rule': [
            {
                title: 'Lender Requirements for 2026',
                type: 'checklist',
                content: '• **Front-End Ratio (28%):** Your total housing costs (PIIT) shouldn\'t exceed 28% of gross income.\n• **Back-End Ratio (36%):** Your total debt (auto, student, credit cards) plus house shouldn\'t exceed 36%.\n• **Exceptions:** High-earners in 2026 can sometimes stretch to a 43-45% DTI, but interest rates often spike at those levels.'
            }
        ],
        '/50-30-20-rule': [
            {
                title: 'The 50/30/20 Budgeting Engine',
                type: 'summary',
                content: 'This tool automates the "Needs, Wants, Savings" split. In 2026, many find that "Needs" (50%) are harder to maintain due to housing inflation. Use this analyzer to see if your "Wants" (30%) are cannibalizing your "Financial Freedom" (20%) goals.'
            }
        ],
        '/acoustic-impedance': [
            {
                title: 'Wave Reflection Logic',
                type: 'summary',
                content: 'Acoustic impedance (Z) is the product of density and sound velocity. This tool is essential for calculating the "Reflection Coefficient"—telling you how much sound energy bounces off a surface versus passing through it. High Z-mismatch means high reflection.'
            }
        ],
        '/additional-funds-needed': [
            {
                title: 'AFN Growth Strategy',
                type: 'checklist',
                content: '• **Spontaneous Liabilities:** Ensure you\'ve calculated accounts payable growth correctly.\n• **Retention Ratio:** How much profit are you reinvesting back into the firm?\n• **Capital Intensity:** How many assets do you need to support each new dollar of sales?'
            }
        ]
    };

    return contentMap[path] || [];
};
