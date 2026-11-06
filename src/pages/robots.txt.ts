import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const origin = site ? site.toString().replace(/\/$/, '') : (process.env.SITE_URL || 'https://freejiedian.homes');
  const sitemap = `${origin}/sitemap-index.xml`;
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    '# Major Search Engine Crawlers',
    'User-agent: Googlebot',
    'Allow: /',
    '',
    'User-agent: bingbot',
    'Allow: /',
    '',
    'User-agent: Baiduspider',
    'Allow: /',
    '',
    'User-agent: yisouspider',
    'Allow: /',
    '',
    '# Sitemaps',
    `Sitemap: ${sitemap}`,
    `Sitemap: ${origin}/sitemap.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
