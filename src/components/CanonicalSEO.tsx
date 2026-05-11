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
    // Map /category/name to just /name
    if (path.startsWith('/category/')) {
        path = path.slice(9); // More efficient than replace for prefix
        if (!path.startsWith('/')) path = '/' + path;
    }

    // Special case for root: standard practice is to have the trailing slash
    // For all other paths, keep it normalized without trailing slash
    const canonicalUrl = path === '/' ? `${domain}/` : `${domain}${path}`;

    // 4. Detect search results or non-canonical parameters to noindex
    const isSearchPage = location.search.includes('?s=') || location.search.includes('&s=');

    return (
        <Helmet>
            <link rel="canonical" href={canonicalUrl} />
            <meta property="og:url" content={canonicalUrl} />
            {isSearchPage && <meta name="robots" content="noindex, follow" />}
        </Helmet>
    );
};
