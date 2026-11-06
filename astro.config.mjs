import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://freejiedian.homes';

export default defineConfig({
  site,
  output: 'static',
  compressHTML: true,
  trailingSlash: 'never',
  markdown: {
    syntaxHighlight: false,
  },
  integrations: [
    sitemap({
      lastmod: new Date(),
      entryLimit: 10000,
      namespaces: {
        news: false,
        video: false,
        xhtml: false,
      },
    }),
  ],
  security: {
    csp: true,
  },
  build: {
    format: 'directory',
  },
});
