
export const getHighIntentSEO = (name: string, categoryTitle: string = 'Professional', categorySlug: string = '') => {
    const lowerName = name.toLowerCase();
    const lowSlug = categorySlug.toLowerCase();
    
    // 1. Dynamic CTR-Optimized Title Patterns
    let title = `${name} Calculator — Free, Accurate & Instant Results`;

    if (lowSlug === 'finance' || lowerName.includes('401k') || lowerName.includes('ira') || lowerName.includes('savings')) {
        title = `Strategic ${name} — Plan Your 2026 Financial Future`;
    } else if (lowerName.includes('mortgage') || lowerName.includes('loan') || lowerName.includes('payment')) {
        title = `How Much is ${name}? | 2026 Payment & Interest Estimator`;
    } else if (lowerName.includes('bmi') || lowerName.includes('bmr') || lowerName.includes('calories') || lowSlug === 'health') {
        title = `Check Your ${name} — 2026 Health & Fitness Index`;
    } else if (lowerName.includes('conversion') || lowerName.includes('converter') || lowerName.includes('to')) {
        const parts = name.split(' to ');
        if (parts.length === 2) {
             title = `Convert ${parts[0]} to ${parts[1]} — Precise 2026 Converter`;
        } else {
             title = `${name} — Precise Unit Conversion Tool`;
        }
    } else if (lowSlug === 'construction' || lowerName.includes('concrete') || lowerName.includes('lumber')) {
        title = `${name} Estimator | 2026 Job Site Material Tools`;
    } else if (lowerName.includes('salary') || lowerName.includes('wage') || lowerName.includes('hourly')) {
        title = `${name} Analysis — Calculate Your 2026 Net Take-Home`;
    } else if (lowerName.includes('age') || lowerName.includes('birthday') || lowSlug === 'personal') {
        title = `When is my ${name}? | Accurate Date & Milestone Tracker`;
    } else if (lowSlug === 'automotive' || lowerName.includes('car') || lowerName.includes('mpg')) {
        title = `${name} Tool — 2026 Vehicle Performance & Costs`;
    } else if (lowSlug === 'math' || lowerName.includes('scientific') || lowerName.includes('solve')) {
        title = `Solve ${name} Instantly — 2026 Mathematics Engine`;
    }

    // 2. Dynamic High-Value Meta Descriptions (Unique per Category)
    let description = `Looking for an accurate ${name}? Simply Calculator provides instant, verified results for your 2026 ${categoryTitle} needs. Try our professional ${name} now!`;

    if (lowSlug === 'finance') {
        description = `Master your money with our professional ${name}. Get precise 2026 insights into compound interest, savings goals, and investment returns in seconds.`;
    } else if (lowSlug === 'health' || lowerName.includes('bmi')) {
        description = `Understand your bio-markers with the ${name}. We use 2026 clinical standards to calculate your health metrics accurately for better wellness tracking.`;
    } else if (lowSlug === 'construction') {
        description = `Simplify your project estimates with the ${name}. Calculate materials, surface areas, and volumes for the job site with professional contractors' precision.`;
    } else if (lowSlug === 'automotive') {
        description = `Analyze your vehicle's performance and running costs with our ${name}. Get the math on fuel efficiency, depreciation, and custom tuning impacts.`;
    } else if (lowSlug === 'math') {
        description = `Solve complex equations with the ${name}. Our 2026 scientific engine handles everything from basic arithmetic to advanced calculus and geometry.`;
    } else if (lowerName.includes('converter')) {
        description = `Need to convert units? Use the ${name} for high-precision metric and imperial swaps. Instant results for technical, cooking, or educational use.`;
    }

    // Final truncate to stay within SEO limits
    if (title.length > 60) title = title.substring(0, 57) + '...';

    return { title, description };
};
