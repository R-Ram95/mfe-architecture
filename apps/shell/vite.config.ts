import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import importMapPlugin, { Env } from './plugins/importMapPlugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()) as Env;
  return {
    plugins: [react(), importMapPlugin({ env })],
    server: {
      port: 3000,
      cors: true,
    },
    preview: {
      port: 3000,
    },
    build: {
      target: 'esnext',
      minify: false,
      rollupOptions: {
        external: ['react', 'react-dom', 'react-router-dom'],
        // TODO: remove this, I don't think we need it since it is for UMD modules
        output: {
          globals: {
            react: 'react',
            reactDom: 'react-dom',
            reactRouterDom: 'react-router-dom',
          },
        },
      },
    },
  };
});
