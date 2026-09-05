// @ts-check
import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// The Keystatic admin UI (/keystatic) injects on-demand routes that require
// a server adapter. It's only needed for local content editing, so it's
// excluded from production builds — content is edited locally, committed,
// and pushed. Production output stays fully static.
export default defineConfig({
  site: 'https://mindsandmuscles.pl',
  integrations: [
    sitemap({
      // Keep noindex pages out of the sitemap — listing a page we've told
      // crawlers not to index is a contradictory signal.
      filter: (page) => !page.includes('/polityka-prywatnosci/') && !page.includes('/polityka-cookies/'),
    }),
    ...(process.env.NODE_ENV === 'production' ? [] : [keystatic()]),
  ],
});
