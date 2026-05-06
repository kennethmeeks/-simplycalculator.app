
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
        ]
    };

    return contentMap[path] || [];
};
