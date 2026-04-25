import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import { CATEGORIES } from "./src/constants/categories";

dotenv.config();

const PORT = 3000;

async function startDevServer() {
  const app = express();

  app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }));
  
  app.use(cors({
     origin: true,
     credentials: true
  }));

  app.use(express.json());

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", mode: "development" });
  });

  // Sitemap.xml
  app.get("/sitemap.xml", (req, res) => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    xml += `  <url><loc>https://simplycalculator.app/</loc></url>\n`;
    xml += `  <url><loc>https://simplycalculator.app/sitemap</loc></url>\n`;
    CATEGORIES.forEach(cat => {
      xml += `  <url><loc>https://simplycalculator.app/category/${cat.slug}</loc></url>\n`;
      cat.items.forEach(item => {
        xml += `  <url><loc>https://simplycalculator.app${item.path}</loc></url>\n`;
      });
    });
    xml += `</urlset>`;
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });

  // Vite middleware for development
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });

  // SSR for /sitemap to ensure crawlers see links without JS
  app.get("/sitemap", async (req, res, next) => {
    try {
      const url = req.originalUrl;
      const template = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
      const transformedTemplate = await vite.transformIndexHtml(url, template);
      
      const title = "Sitemap | All Online Calculators 2026 | simplycalculator.app";
      const description = "Browse our complete list of over 1600+ free online calculators. Find tools for finance, fitness, health, math, and more in our comprehensive sitemap.";
      
      const sitemapHtml = `
        <div id="root">
          <div class="max-w-6xl mx-auto py-8 px-4">
            <h1 class="text-4xl font-black mb-12 border-b-4 border-black pb-4">Site Directory (SSR)</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              ${CATEGORIES.map(cat => `
                <div class="mb-8">
                  <h2 class="text-xl font-bold border-b-2 border-blue-600 pb-2 mb-4 uppercase tracking-wider text-slate-900">${cat.title}</h2>
                  <ul class="space-y-3">
                    ${cat.items.map(item => `
                      <li class="border-l-2 border-slate-100 pl-4">
                        <a href="${item.path}" class="text-blue-600 hover:underline font-bold text-sm block">${item.name}</a>
                        <p class="text-[11px] text-slate-400 mt-0.5 line-clamp-1">${item.desc}</p>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      let html = transformedTemplate.replace('<div id="root"></div>', sitemapHtml);
      html = html.replace('<title>Vite + React + TS</title>', `<title>${title}</title><meta name="description" content="${description}">`);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  app.use(vite.middlewares);

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Development server running on http://localhost:${PORT}`);
  });
}

startDevServer().catch(err => {
  console.error("Failed to start dev server:", err);
  process.exit(1);
});
