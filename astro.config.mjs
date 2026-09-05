// @ts-check
import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';

// https://astro.build/config
// The Keystatic admin UI (/keystatic) injects on-demand routes that require
// a server adapter. It's only needed for local content editing, so it's
// excluded from production builds — content is edited locally, committed,
// and pushed. Production output stays fully static.
export default defineConfig({
  site: 'https://mindsandmuscles.pl',
  integrations: process.env.NODE_ENV === 'production' ? [] : [keystatic()],
});
