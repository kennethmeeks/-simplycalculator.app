import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export const CanonicalSEO: React.FC = () => {
    const location = useLocation();
    const domain = 'https://simplycalculator.app';
    
    // Standardize the path:
    // 1. Remove trailing slash (except for empty path which becomes root)
    // 2. Ensure leading slash
    let path = location.pathname;
    if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1);
    }
    
    // Special case for root
    const canonicalUrl = `${domain}${path === '/' ? '' : path}`;

    return (
        <Helmet>
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    );
};
