import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://erabi-card.pages.dev',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
