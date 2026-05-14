
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/constants/categories.ts');
const content = fs.readFileSync(filePath, 'utf8');

const prefixes = [
  "check", "find", "use", "best", "top", "latest", "verified", "advanced", 
  "basic", "quick", "fast", "instant", "secure", "private", "reliable",
  "modern", "pro", "smart", "easy"
];

const suffixes = [
  "online", "free", "calculator", "tool", "app", "2026", "formula", "how to calculate",
  "math", "results", "example", "guide", "tutorial", "help", "pro", "best", "accurate",
  "professional", "easy", "simple", "software", "estimator", "projection", "tracker",
  "analysis", "worksheet", "details", "stats", "data", "parameters", "units", "metric",
  "imperial", "global", "world", "expert", "master", "suite", "collection", "list",
  "comparison", "reviews", "ratings", "rankings", "summary", "breakdown", "faq", "tips",
  "mobile", "instant", "chart", "graph", "table", "visualizer", "step by step", 
  "explanation", "meaning", "definition", "calculations", "statistics", "report",
  "overview", "basics", "for beginners", "for professionals", "advanced tips",
  "for students", "for business", "for school", "interactive", "web version",
  "desktop version", "mobile app version", "utility", "helper", "system", "engine"
];

function expandKeywords(itemName: string, originalKeywords: string[]): string[] {
  const base = itemName.toLowerCase().replace(/calculator/gi, "").trim();
  const newKeywords = new Set(originalKeywords.map(k => k.toLowerCase().trim()));
  
  // Add combinations
  prefixes.forEach(prefix => {
    newKeywords.add(`${prefix} ${base}`);
    newKeywords.add(`${prefix} ${itemName.toLowerCase()}`);
  });

  suffixes.forEach(suffix => {
    newKeywords.add(`${base} ${suffix}`);
    newKeywords.add(`${itemName.toLowerCase()} ${suffix}`);
  });

  // Cross combinations (limit to avoid explosion)
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      newKeywords.add(`${prefixes[i]} ${base} ${suffixes[j]}`);
    }
  }

  return Array.from(newKeywords).slice(0, 200); // Target ~200 per item
}

// Regex to capture the full item object more reliably
// We look for name, path, desc, and keywords
const updatedContent = content.replace(
  /name: '(.+?)',[\s\S]*?path: '(.+?)',[\s\S]*?desc: '(.+?)',[\s\S]*?keywords: \[(.+?)\]/g,
  (match, name, p, desc, kwsStr) => {
    const originalKeywords = kwsStr.split(',').map((k: string) => k.replace(/['"\[\]]/g, '').trim());
    const expanded = expandKeywords(name, originalKeywords);
    const expandedStr = expanded.map(k => `'${k.replace(/'/g, "\\'")}'`).join(',');
    return match.replace(/keywords: \[(.+?)\]/, `keywords: [${expandedStr}]`);
  }
);

fs.writeFileSync(filePath, updatedContent);
console.log('Keywords expanded to ultra mode.');
