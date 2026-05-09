// app/robots.txt/route.js
export async function GET() {
  const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://ваш-сайт.ru/sitemap.xml`;

  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain' }
  });
}