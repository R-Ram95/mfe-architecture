import { defineConfig, loadEnv } from 'vite';

const baseURL = {
  dev: 'https://d2s3mw0v1f3cif.cloudfront.net',
  prod: 'PROD_URL',
  local: 'http://localhost:3001',
};

type Env = {
  VITE_ENV: 'local' | 'dev' | 'prod';
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()) as Env;

  return {
    plugins: [],

    build: {
      manifest: true,
      minify: false,
      target: 'esnext',
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundledk
        // into your final package
        external: [
          'react',
          'react-dom',
          'react-router-dom',
          'shared-ui',
          'util-module',
        ],
        input: './src/main.tsx',
        output: {
          entryFileNames: `react-app-${env.VITE_ENV ?? 'local'}.js`,
          format: 'esm',

          globals: {
            react: 'react',
            reactDom: 'react-dom',
            reactRouterDom: 'react-router-dom',
            sharedUI: 'shared-ui',
          },
        },
      },
    },
    server: {
      port: 3001,
      origin: 'http://localhost:3001',
    },
    preview: {
      port: 3001,
    },
    // URL that assets are served from once deployed
    base: baseURL[env.VITE_ENV ?? 'local'],
  };
});
