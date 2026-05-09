// app/sitemap.xml/route.js
import { siteConfig } from '../metadata';

export async function GET() {
  const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/trenera', changefreq: 'weekly', priority: 0.9 },
    { url: '/uslugi', changefreq: 'weekly', priority: 0.8 },
    { url: '/ceny', changefreq: 'weekly', priority: 0.8 },
    { url: '/contacts', changefreq: 'monthly', priority: 0.7 }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>${siteConfig.url}${page.url}</loc>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `).join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}