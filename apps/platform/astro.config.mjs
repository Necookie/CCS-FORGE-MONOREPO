import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import node from '@astrojs/node';
import { fileURLToPath } from 'node:url';

const astroPrerenderEntrypoint = fileURLToPath(
  new URL('./node_modules/astro/dist/entrypoints/prerender.js', import.meta.url),
);

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: "standalone"
  }),
  vite: {
    envDir: '../../',
    resolve: {
      alias: {
        'astro/entrypoints/prerender': astroPrerenderEntrypoint,
      },
    },
    plugins: [tailwindcss()]
  },
  integrations: [
    react()
  ]
});
