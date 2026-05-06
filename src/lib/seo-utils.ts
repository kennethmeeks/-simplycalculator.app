
export const getHighIntentSEO = (name: string, categoryTitle: string = 'Professional', categorySlug: string = '') => {
    const lowerName = name.toLowerCase();
    const lowSlug = categorySlug.toLowerCase();
    
    // 1. Dynamic CTR-Optimized Title Patterns
    let title = `${name} Calculator — 100% Free, Instant & Accurate (2026)`;
    
    if (lowerName === 'calibration curve') {
        title = `Calibration Curve Calculator — Linear Regression & Interpolation`;
    } else if (lowerName === 'gini index' || lowerName === 'wealth inequality index') {
        title = `Gini Index Calculator — Measure Wealth & Income Inequality`;
    } else if (lowerName === 'car depreciation') {
        title = `Car Depreciation Calculator — Check Your Vehicle's 2026 Value`;
    } else if (lowerName.includes('word') && lowerName.includes('time')) {
        title = `Word to Time Converter — Minutes to Words Reading Calculator`;
    } else if (lowSlug === 'finance' || lowerName.includes('401k') || lowerName.includes('ira') || lowerName.includes('savings')) {
        title = `Fast ${name} Calculator — 2026 Financial Planning Tool`;
    } else if (lowerName.includes('mortgage') || lowerName.includes('loan') || lowerName.includes('payment')) {
        title = `How Much is ${name}? | Instant 2026 Payment Estimator`;
    } else if (lowerName.includes('bmi') || lowerName.includes('bmr') || lowerName.includes('calories') || lowSlug === 'health') {
        title = `Check Your ${name} — 2026 Clinical Health & BMI Index`;
    } else if (lowerName.includes('conversion') || lowerName.includes('converter') || lowerName.includes('to')) {
        const parts = name.split(' to ');
        if (parts.length === 2) {
             title = `Convert ${parts[0]} to ${parts[1]} — Precise 2026 Results`;
        } else {
             title = `${name} — Precise Unit & Value Converter`;
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
    let description = `Get instant, accurate results with our free ${name} calculator. Updated for 2026 with professional math standards for ${categoryTitle} needs. Try it now!`;

    if (lowerName === 'calibration curve') {
        description = `Generate professional linear regression models with the Calibration Curve Calculator. Calculate slopes, intercepts, and interpolate unknown sample concentrations instantly.`;
    } else if (lowerName === 'wealth inequality index' || lowerName === 'gini index') {
        description = `Understand economic distribution with our Gini Index Calculator. Precise wealth and income inequality analysis for students, researchers, and professional economists.`;
    } else if (lowSlug === 'finance') {
        description = `Maximize your wealth with the ${name}. Our professional 2026 finance engine provides precise math on compound interest, debt payoff, and investment returns.`;
    } else if (lowSlug === 'health' || lowerName.includes('bmi')) {
        description = `Understand your bio-markers with the ${name}. We use 2026 clinical standards to calculate your health metrics accurately for better wellness tracking.`;
    } else if (lowSlug === 'construction') {
        description = `Simplify your project estimates with the ${name}. Calculate materials, surface areas, and volumes for the job site with professional contractors' precision.`;
    } else if (lowSlug === 'automotive') {
        description = `Analyze your vehicle's performance and running costs with our 2026 ${name}. Get precise data on car depreciation, fuel economy, and power-to-weight ratios in seconds.`;
    } else if (lowerName.includes('word') && lowerName.includes('time')) {
        description = `Convert word counts to minutes instantly. Our Word to Time tool is perfect for speeches, scripts, and reading assignments using custom 2026 reading speeds.`;
    } else if (lowerName.includes('converter')) {
        description = `Need to convert units? Use the ${name} for high-precision metric and imperial swaps. Instant results for technical, cooking, or educational use.`;
    }

    // Final truncate to stay within SEO limits
    if (title.length > 60) title = title.substring(0, 57) + '...';

    return { title, description };
};
