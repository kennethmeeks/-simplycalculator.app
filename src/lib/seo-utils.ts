
export const getHighIntentSEO = (name: string, categoryTitle: string = 'Professional', categorySlug: string = '') => {
    // High-intent Title Logic optimized for 2026
    let title = `${name} Calculator — Accurate 2026 Results | Free & Instant`;
    
    if (name.toLowerCase().includes('calculator')) {
        title = `${name} — Professional 2026 Results | Free & Instant`;
    }

    const lowerName = name.toLowerCase();
    const lowSlug = categorySlug.toLowerCase();

    // Pattern-based high-intent injection
    if (lowerName.includes('roi') || lowerName.includes('return') || lowerName.includes('profit') || lowSlug === 'finance') {
        title = `Calculate ${name} — 2026 Investment Analysis | Pro Tool`;
    } else if (lowerName.includes('bmi') || lowerName.includes('bmr') || lowerName.includes('fat') || lowerName.includes('health') || lowSlug === 'health' || lowSlug === 'medical') {
        title = `${name} — Verify Your 2026 Health Index | Accurate Health Tool`;
    } else if (lowerName.includes('loan') || lowerName.includes('mortgage') || lowerName.includes('payment') || lowerName.includes('refinance')) {
        title = `How Much is ${name}? — 2026 Monthly Payment Analysis | Verified`;
    } else if (lowerName.includes('conversion') || lowerName.includes('converter') || lowerName.includes('to')) {
        title = `${name} Online — Instant 2026 Unit Conversion | Precise Converter`;
    } else if (lowSlug === 'math' || lowerName.includes('formula') || lowerName.includes('solve')) {
        title = `Solve ${name} — 2026 Math Engine & Scientific Formula Solver`;
    } else if (lowSlug === 'automotive' || lowerName.includes('car') || lowerName.includes('vehicle')) {
        title = `${name} Tool — 2026 Vehicle Performance & Running Cost Calculator`;
    } else if (lowSlug === 'construction' || lowerName.includes('concrete') || lowerName.includes('roofing') || lowerName.includes('tile')) {
        title = `${name} Estimator — 2026 Contractor-Grade Material Calculator`;
    } else if (lowerName.includes('salary') || lowerName.includes('hourly') || lowerName.includes('wage')) {
        title = `${name} Converter — 2026 Income & Salary Analysis | Free Tool`;
    } else if (lowerName.includes('age') || lowerName.includes('date') || lowerName.includes('days')) {
        title = `${name} Calculator — Precise 2026 Date & Milestone Tracker`;
    }

    // Dynamic High-Intent Description (max 160 chars)
    const description = `Looking for an accurate ${name}? Our 2026 verified engine provides instant results for ${categoryTitle} analysis. Trusted by professionals for precision and educational insights. Try the free ${name} now!`;

    return { title, description };
};
