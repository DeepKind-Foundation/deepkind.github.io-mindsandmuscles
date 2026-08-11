// @ts-check
import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

// https://astro.build/config
// Pages stay statically prerendered by default; only the Keystatic admin
// routes and the newsletter action opt into on-demand (server) rendering.
export default defineConfig({
  integrations: [keystatic()],
  adapter: node({ mode: 'standalone' }),
});
