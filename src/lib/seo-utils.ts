
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
    } else if (lowerName === 'mortgage') {
        title = `Mortgage Calculator — Monthly Payment & Interest (2026)`;
    } else if (lowerName === 'bmi') {
        title = `BMI Calculator — Check Your Body Mass Index (2026)`;
    } else if (lowerName === 'age' || lowerName === 'birth' || lowerName === 'birthday') {
        title = `Age Calculator — Your Exact Age in Years, Months, Days`;
    } else if (lowerName === 'gpa' || lowerName === 'grade') {
        title = `GPA Calculator — Semester & Cumulative Grade Average`;
    } else if (lowerName === 'compound interest') {
        title = `Compound Interest Calculator — Project Your Savings Growth`;
    } else if (lowerName.includes('word') && lowerName.includes('time')) {
        title = `Word to Time Converter — Minutes to Words Reading Calculator`;
    } else if (lowerName === 'scientific' || lowerName === 'scientific calculator') {
        title = `Scientific Calculator — Free Online Full Screen Tool (2026)`;
    } else if (lowerName === 'square footage' || lowerName === 'square feet') {
        title = `Square Footage Calculator — Calculate Area in Sq Ft & Sq M`;
    } else if (lowerName === 'percentage' || lowerName === 'percent') {
        title = `Percentage Calculator — Quick Percent Increase & Decrease`;
    } else if (lowerName === 'tip' || lowerName === 'gratuity') {
        title = `Tip Calculator — Fast Bill Split & Gratuity (2026)`;
    } else if (lowerName === 'discount' || lowerName === 'percent off') {
        title = `Discount Calculator — 2026 Sale Price & Savings Tool`;
    } else if (lowerName === 'sales tax' || lowerName === 'vat') {
        title = `Sales Tax Calculator — 2026 Accurate Tax & Total Price`;
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
    } else if (lowerName === 'inflation') {
        title = `Inflation Calculator — Buying Power & Dollar Value (2026)`;
    }

    // 2. Dynamic High-Value Meta Descriptions (Unique per Category)
    let description = `Get instant, accurate results with our free ${name} calculator. Updated for 2026 with professional math standards for ${categoryTitle} needs. Try it now!`;

    if (lowerName === 'calibration curve') {
        description = `Generate professional linear regression models with the Calibration Curve Calculator. Calculate slopes, intercepts, and interpolate unknown sample concentrations instantly.`;
    } else if (lowerName === 'wealth inequality index' || lowerName === 'gini index') {
        description = `Understand economic distribution with our Gini Index Calculator. Precise wealth and income inequality analysis for students, researchers, and professional economists.`;
    } else if (lowerName === 'mortgage') {
        description = `Find your exact monthly mortgage payment with our professional calculator. Includes principal, interest, taxes, and PMI analysis for 2026 house hunting.`;
    } else if (lowerName === 'bmi') {
        description = `Calculate your Body Mass Index (BMI) using NIH and WHO standards. Understand your weight category and healthy range with our accurate clinical index.`;
    } else if (lowerName === 'age') {
        description = `Find out your exact age in years, months, and days. Perfect for calculating age for documents, milestones, or just curiousity with precision down to the day.`;
    } else if (lowerName === 'gpa') {
        description = `Calculate your weighted or unweighted college and high school GPA instantly. Plan your grades and track academic success with our free 2026 student tool.`;
    } else if (lowerName === 'compound interest') {
        description = `Watch your money grow with the Compound Interest Calculator. See the power of compounding on your savings and investments over any time horizon.`;
    } else if (lowerName === 'inflation') {
        description = `Calculate the purchasing power of your US Dollars over time. See how inflation impacts prices and find the adjusted value of money between any years.`;
    } else if (lowerName === 'scientific' || lowerName === 'scientific calculator') {
        description = `Use our advanced full-screen Scientific Calculator for free. Includes trigonometric functions, logarithms, and high-precision math for students and engineers (2026).`;
    } else if (lowerName === 'square footage') {
        description = `Find the square footage of any room or lot. Our accurate 2026 tool calculates area for rectangles, circles, and irregular shapes for flooring and construction.`;
    } else if (lowerName === 'percentage') {
        description = `Find percentages, percentage increases, and percent decreases instantly. Our free math tool handles all your percentage calculations with professional accuracy.`;
    } else if (lowerName === 'tip') {
        description = `Calculate tips and split bills quickly with our 2026 Tip Calculator. Perfect for dining out, delivery, and services with custom percentage options.`;
    } else if (lowerName === 'discount') {
        description = `Calculate your final price after a discount. See exactly how much you save on sales with our easy-to-use 2026 discount and savings tool.`;
    } else if (lowerName === 'sales tax') {
        description = `Find the final price including sales tax. Our accurate 2026 calculator helps you understand taxes for any purchase across different rates.`;
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
    if (title.length > 70) title = title.substring(0, 67) + '...';

    return { title, description };
};
