import fs from 'fs';
import path from 'path';

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
let content = fs.readFileSync(sitemapPath, 'utf8');

// Replace all occurrences of simplycalculator.app/category/ with simplycalculator.app/
const newContent = content.replace(/simplycalculator\.app\/category\//g, 'simplycalculator.app/');

if (content !== newContent) {
  fs.writeFileSync(sitemapPath, newContent);
  console.log('Sitemap updated: removed /category/ prefix from URLs.');
} else {
  console.log('No /category/ prefix found in sitemap.');
}
