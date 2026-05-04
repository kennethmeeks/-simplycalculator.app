import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export const CanonicalSEO: React.FC = () => {
    const location = useLocation();
    const domain = 'https://simplycalculator.app';
    
    // Normalization logic
    let path = location.pathname;

    // 1. Force lowercase for consistency (Google sees /BMI and /bmi as different)
    path = path.toLowerCase();

    // 2. Remove trailing slash (except for empty path which becomes root)
    if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1);
    }
    
    // 3. Resolve duplication for categories
    // Map /category/finance to just /finance if it's a top-level category
    // This aligns with App.tsx routing
    const topKeywords = ['finance', 'health', 'math', 'science', 'personal', 'automotive', 'insurance', 'academic', 'lifestyle', 'time-date'];
    if (path.startsWith('/category/')) {
        const potentialCategory = path.split('/')[2];
        if (topKeywords.includes(potentialCategory)) {
            path = `/${potentialCategory}`;
        }
    }

    // Special case for root
    const canonicalUrl = `${domain}${path === '/' ? '' : path}`;

    return (
        <Helmet>
            <link rel="canonical" href={canonicalUrl} />
            <meta property="og:url" content={canonicalUrl} />
        </Helmet>
    );
};
