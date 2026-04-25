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

  // Robots.txt
  app.get("/robots.txt", (req, res) => {
    res.type('text/plain');
    res.send("User-agent: *\nAllow: /\n\nSitemap: https://simplycalculator.app/sitemap.xml");
  });

  // Sitemap.xml
  app.get("/sitemap.xml", (req, res) => {
    console.log(`[Sitemap] XML requested at ${new Date().toISOString()}`);
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    // Core pages
    const corePages = ["/", "/sitemap"];
    corePages.forEach(p => {
      xml += `  <url>\n    <loc>https://simplycalculator.app${p}</loc>\n    <priority>${p === '/' ? '1.0' : '0.8'}</priority>\n    <changefreq>daily</changefreq>\n  </url>\n`;
    });

    CATEGORIES.forEach(cat => {
      // Category pages
      xml += `  <url>\n    <loc>https://simplycalculator.app/category/${cat.slug}</loc>\n    <priority>0.7</priority>\n    <changefreq>weekly</changefreq>\n  </url>\n`;
      
      // Individual tool pages
      cat.items.forEach(item => {
        xml += `  <url>\n    <loc>https://simplycalculator.app${item.path}</loc>\n    <priority>0.5</priority>\n    <changefreq>monthly</changefreq>\n  </url>\n`;
      });
    });
    xml += `</urlset>`;
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });

  const isProd = process.env.NODE_ENV === "production";
  
  let vite: any;
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
  }

  // SSR for / and /sitemap to ensure crawlers see links without JS
  app.get(["/", "/sitemap"], async (req, res, next) => {
    try {
      const url = req.originalUrl;
      if (url.includes('.') || url.startsWith('/api')) {
        return next();
      }

      let template: string;
      if (!isProd) {
        template = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(path.resolve(process.cwd(), "dist/index.html"), "utf-8");
      }
      
      const isSitemap = url === "/sitemap";
      const title = isSitemap 
        ? "Sitemap | All Online Calculators 2026 | simplycalculator.app"
        : "All Online Calculators 2026 | 1600+ Free Tools | simplycalculator.app";
      const description = isSitemap
        ? "Browse our complete list of over 1600+ free online calculators. Find tools for finance, fitness, health, math, and more in our comprehensive sitemap."
        : "Access over 1600+ free online calculators for 2026. Organized tools for Finance, Health, Math, Construction, Tech, and more. Accurate formulas and easy-to-use interfaces.";
      
      const contentHtml = `
        <div id="root">
          <div class="max-w-6xl mx-auto py-8 px-4">
            <h1 class="text-4xl font-black mb-12 border-b-4 border-black pb-4">${isSitemap ? 'Site Directory (SSR)' : 'All Professional Calculators (SSR)'}</h1>
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

      let html = template.replace('<div id="root"></div>', contentHtml);
      // Clean up existing tags accurately
      html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
      
      const metaDescription = `<meta name="description" content="${description}">`;
      if (html.includes('<meta name="description"')) {
        html = html.replace(/<meta name="description".*?>/, metaDescription);
      } else {
        html = html.replace('</head>', `${metaDescription}\n  </head>`);
      }
      
      // Inject some schema for better SEO on SSR
      const schema = `<script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://simplycalculator.app/",
          "name": "simplycalculator.app",
          "description": "${description}"
        }
      </script>`;
      html = html.replace('</head>', `${schema}\n  </head>`);
      
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      if (!isProd && vite) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  if (!isProd) {
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(process.cwd(), "dist"), {
      index: false
    }));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(process.cwd(), "dist/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Development server running on http://localhost:${PORT}`);
  });
}

startDevServer().catch(err => {
  console.error("Failed to start dev server:", err);
  process.exit(1);
});
