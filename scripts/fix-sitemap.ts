import fs from 'fs';
import path from 'path';

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
let content = fs.readFileSync(sitemapPath, 'utf8');

// 1. Remove /category/ prefix
let updatedContent = content.replace(/simplycalculator\.app\/category\//g, 'simplycalculator.app/');

// 2. Fix math/basic -> math/basic-calculator
updatedContent = updatedContent.replace(/simplycalculator\.app\/math\/basic<\/loc>/g, 'simplycalculator.app/math/basic-calculator</loc>');

// 3. Add math/rounding if missing
if (!updatedContent.includes('simplycalculator.app/math/rounding')) {
  const insertPoint = updatedContent.indexOf('</urlset>');
  const newEntry = `  <url>\n    <loc>https://simplycalculator.app/math/rounding</loc>\n    <lastmod>2026-05-11</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  updatedContent = updatedContent.slice(0, insertPoint) + newEntry + updatedContent.slice(insertPoint);
}

if (content !== updatedContent) {
  fs.writeFileSync(sitemapPath, updatedContent);
  console.log(`Successfully updated sitemap.xml with path fixes and additions.`);
} else {
  console.log('No changes needed for sitemap.');
}
