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

  // 1. CRAWLER ROUTES (Highest Priority - Before ANY middleware)
  app.get("/robots.txt", (req, res) => {
    res.type('text/plain').status(200).send("User-agent: *\nAllow: /\nSitemap: https://simplycalculator.app/sitemap.xml");
  });

  let cachedSitemap: string | null = null;
  app.get("/sitemap.xml", (req, res) => {
    try {
      const today = new Date().toISOString().split('T')[0];
      
      if (cachedSitemap && process.env.NODE_ENV === 'production') {
        res.set('Content-Type', 'application/xml; charset=utf-8');
        return res.status(200).send(cachedSitemap);
      }

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

      let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
      xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';
      
      xml += `  <url>\n    <loc>https://simplycalculator.app/</loc>\n    <lastmod>${today}</lastmod>\n    <priority>1.0</priority>\n    <changefreq>daily</changefreq>\n  </url>\n`;
      xml += `  <url>\n    <loc>https://simplycalculator.app/sitemap</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.9</priority>\n    <changefreq>weekly</changefreq>\n  </url>\n`;

      CATEGORIES.forEach(cat => {
        xml += `  <url>\n    <loc>https://simplycalculator.app/category/${escapeXml(cat.slug)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.8</priority>\n    <changefreq>weekly</changefreq>\n  </url>\n`;
        if (cat.items && Array.isArray(cat.items)) {
          cat.items.forEach(item => {
            xml += `  <url>\n    <loc>https://simplycalculator.app${escapeXml(item.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.6</priority>\n    <changefreq>monthly</changefreq>\n  </url>\n`;
          });
        }
      });

      xml += '</urlset>';
      cachedSitemap = xml;
      
      res.set('Content-Type', 'application/xml; charset=utf-8');
      res.status(200).send(xml);
    } catch (error) {
      console.error('[Sitemap] Error:', error);
      res.status(500).type('text/plain').send('Error generating sitemap');
    }
  });

  // 2. MIDDLEWARE
  app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }));

  app.use(cors({
     origin: true,
     credentials: true
  }));

  app.use(express.json());

  // 3. API ROUTES
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", mode: isProd ? "production" : "development" });
  });

  const isProd = process.env.NODE_ENV === "production";
  
  let vite: any;
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
  }

  // SSR for /, /sitemap, and category pages to ensure crawlers see links without JS
  app.get(["/", "/sitemap", "/category/:slug"], async (req, res, next) => {
    try {
      const url = req.path; // Use path instead of originalUrl to avoid query string issues
      console.log(`[SSR] Handling request for: ${url}`);
      
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
      const isCategory = url.startsWith("/category/");
      const categorySlug = isCategory ? req.params.slug : null;
      const category = categorySlug ? CATEGORIES.find(c => c.slug === categorySlug) : null;

      let title = "All Online Calculators 2026 | 1600+ Free Tools | simplycalculator.app";
      let description = "Access over 1600+ free online calculators for 2026. Organized tools for Finance, Health, Math, Construction, Tech, and more. Accurate formulas and easy-to-use interfaces.";

      if (isSitemap) {
        title = "Sitemap | All Online Calculators 2026 | simplycalculator.app";
        description = "Browse our complete list of over 1600+ free online calculators. Find tools for finance, fitness, health, math, and more in our comprehensive sitemap.";
      } else if (category) {
        title = `${category.title} Calculators | 2026 Online Suite | simplycalculator.app`;
        description = category.description || description;
      }
      
      const targetCategories = category ? [category] : CATEGORIES;

      const contentHtml = `
        <div id="root">
          <main class="max-w-6xl mx-auto py-12 px-6">
            <header class="mb-12 border-b-2 border-slate-200 pb-6">
                <h1 class="text-5xl font-black mb-4 text-slate-900">${category ? category.title : (isSitemap ? 'Site Directory' : 'All Professional Calculators')}</h1>
                <p class="text-lg text-slate-600 max-w-3xl">${description}</p>
            </header>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              ${targetCategories.map(cat => `
                <section class="mb-10">
                  <h2 class="text-xl font-black border-l-4 border-blue-600 pl-4 py-1 mb-6 uppercase tracking-widest text-slate-800 bg-slate-50">${cat.title}</h2>
                  <nav>
                    <ul class="space-y-4">
                      ${cat.items.map(item => `
                        <li class="group">
                          <a href="${item.path}" class="text-blue-600 hover:text-blue-800 font-bold text-base transition-colors duration-200 decoration-blue-200 decoration-2 underline-offset-4 hover:underline">
                            ${item.name}
                          </a>
                          ${item.desc ? `<p class="text-[13px] text-slate-500 mt-1 leading-relaxed line-clamp-2">${item.desc}</p>` : ''}
                        </li>
                      `).join('')}
                    </ul>
                  </nav>
                </section>
              `).join('')}
            </div>
          </main>
        </div>
      `;

      let html = template;
      
      // Inject content safely
      if (html.includes('<div id="root"></div>')) {
        html = html.replace('<div id="root"></div>', contentHtml);
      } else {
        // Fallback for different builds if root ID is missing or has attributes
        html = html.replace(/<div id="root".*?><\/div>/, contentHtml);
      }

      // Clean up existing tags accurately
      html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
      
      const metaDescription = `<meta name="description" content="${description}">`;
      if (html.includes('<meta name="description"')) {
        html = html.replace(/<meta name="description".*?>/, metaDescription);
      } else {
        html = html.replace('</head>', `  ${metaDescription}\n  </head>`);
      }
      
      // Inject schema
      const schemaData = isCategory && category ? {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": category.title,
        "description": category.description,
        "url": `https://simplycalculator.app${url}`,
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": category.items.slice(0, 50).map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://simplycalculator.app${item.path}`,
            "name": item.name
          }))
        }
      } : {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://simplycalculator.app/",
        "name": "simplycalculator.app",
        "description": description
      };

      const schema = `<script type="application/ld+json">${JSON.stringify(schemaData)}</script>`;
      html = html.replace('</head>', `  ${schema}\n  </head>`);
      
      console.log(`[SSR] Successfully generated content for ${url} (${html.length} bytes)`);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      console.error(`[SSR] Error handling ${req.path}:`, e);
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
