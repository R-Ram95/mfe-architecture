import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), dts({ include: ['src'] })],
    define: {
      'process.env': env,
    },
    build: {
      copyPublicDir: false,
      lib: {
        entry: resolve(__dirname, 'src/main.ts'),
        formats: ['es'],
      },
      external: ['react', 'react-dom'],
    },
    server: {
      port: 5000,
    },
    preview: {
      port: 5000,
    },
  };
});
