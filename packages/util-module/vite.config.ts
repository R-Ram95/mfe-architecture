/// <reference types="vitest" />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  // options for test
  test: {},
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Index',
      fileName: 'index',
    },
  },
  server: {
    port: 5001,
  },
  preview: {
    port: 5001,
  },
});
