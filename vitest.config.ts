
import vue from '@vitejs/plugin-vue';
import glob from 'fast-glob';

import { coverageConfigDefaults, defineConfig } from 'vitest/config';



export default defineConfig({
  plugins: [
    vue(),
  ]
});
