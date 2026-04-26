
import { CATEGORIES } from './src/constants/categories';
import fs from 'fs';

const escapeXml = (unsafe: string) => {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
};

const generate = () => {
  const today = new Date().toISOString().split('T')[0];
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  xml += `  <url>\n    <loc>https://simplycalculator.app/</loc>\n    <lastmod>${today}</lastmod>\n    <priority>1.0</priority>\n  </url>\n`;
  xml += `  <url>\n    <loc>https://simplycalculator.app/sitemap</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.5</priority>\n  </url>\n`;

  CATEGORIES.forEach(cat => {
    xml += `  <url>\n    <loc>https://simplycalculator.app/category/${escapeXml(cat.slug)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.8</priority>\n  </url>\n`;
    if (cat.items && Array.isArray(cat.items)) {
      cat.items.forEach(item => {
        xml += `  <url>\n    <loc>https://simplycalculator.app${escapeXml(item.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.6</priority>\n  </url>\n`;
      });
    }
  });

  xml += '</urlset>';
  fs.writeFileSync('./public/sitemap.xml', xml);
  console.log('Sitemap generated successfully in ./public/sitemap.xml');
};

generate();
