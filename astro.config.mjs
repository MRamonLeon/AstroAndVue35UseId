import { defineConfig } from 'astro/config';

import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: nodejs({
    mode: 'standalone',
  }),
  integrations: [
    vue({ appEntrypoint: '/src/app/app' }),
  ],
});
