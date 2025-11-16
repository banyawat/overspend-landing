// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['tailwindcss']
    }
  },
  output: 'static',
  build: {
    format: 'directory'
  },
  site: 'https://overspend.app',
  prefetch: true,
  trailingSlash: 'never'
});