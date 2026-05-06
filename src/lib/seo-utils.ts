
export const getHighIntentSEO = (name: string, categoryTitle: string = 'Professional', categorySlug: string = '') => {
    // High-intent Title Logic optimized for 2026
    let title = `${name} Calculator — Accurate 2026 Results | Free & Instant`;
    
    if (name.toLowerCase().includes('calculator')) {
        title = `${name} — Professional 2026 Results | Free & Instant`;
    }

    const lowerName = name.toLowerCase();
    const lowerCategory = categoryTitle.toLowerCase();
    const lowSlug = categorySlug.toLowerCase();

    // Context-sensitive specialization
    if (lowerName.includes('roi') || lowerName.includes('return') || lowerName.includes('profit') || lowSlug === 'finance') {
        title = `Calculate ${name} — 2026 Investment Analysis | Pro Tool`;
    } else if (lowerName.includes('bmi') || lowerName.includes('bmr') || lowerName.includes('fat') || lowerName.includes('health') || lowSlug === 'health' || lowSlug === 'medical') {
        title = `${name} Calculator — Verify Your 2026 Health Index | Fast & Free`;
    } else if (lowerName.includes('loan') || lowerName.includes('mortgage') || lowerName.includes('payment') || lowerName.includes('refinance')) {
        title = `${name} Estimator — 2026 Monthly Payment Analysis | Verified`;
    } else if (lowerName.includes('conversion') || lowerName.includes('converter') || lowerName.includes('to')) {
        title = `${name} Online — Instant 2026 Unit Conversion | High Precision`;
    } else if (lowSlug === 'math' || lowerName.includes('formula') || lowerName.includes('solve')) {
        title = `Solve ${name} — Accurate 2026 Math Engine | Instant Solution`;
    } else if (lowSlug === 'automotive' || lowerName.includes('car') || lowerName.includes('vehicle')) {
        title = `${name} Calculator — 2026 Vehicle Performance & Cost | Pro Tool`;
    } else if (lowSlug === 'construction' || lowerName.includes('concrete') || lowerName.includes('roofing')) {
        title = `${name} Estimator — 2026 Job Site Materials | Professional Grade`;
    }

    const description = `Use our professional ${name} for 2026. Get instant, accurate, and verified results for ${categoryTitle} needs. Optimized for mobile and professional efficiency. Free online tool with detailed logic.`;

    return { title, description };
};
