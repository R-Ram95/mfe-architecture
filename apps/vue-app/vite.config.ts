import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

const baseURL = {
  dev: 'https://dct0zl4ldh29k.cloudfront.net',
  prod: 'PROD_URL',
  local: 'http://localhost:3002',
};

type Env = {
  VITE_ENV: 'local' | 'dev' | 'prod';
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()) as Env;
  return {
    plugins: [vue({customElement: true,})],
    build: {
      sourcemap: 'inline',
      manifest: true,
      minify: false,
      target: 'esnext',
      rollupOptions: {
        external: ['util-module'],
        input: './src/main.ts',
        output: {
          entryFileNames: `vue-app-${env.VITE_ENV ?? 'local'}.js`,
          format: 'esm',
        },
      },
    },
    server: {
      port: 3002,
      origin: 'http://localhost:3002',
    },
    preview: {
      port: 3002,
    },
    base: baseURL[env.VITE_ENV ?? 'local'],
  };
});
