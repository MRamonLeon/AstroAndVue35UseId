import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: nodejs({
    mode: 'standalone',
  }),
  integrations: [
    vue({ appEntrypoint: '/src/app/app' }),
  ],
  server: { port: 1234, host: true}
});
