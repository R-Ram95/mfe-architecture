import { defineConfig, loadEnv } from 'vite';

type Env = {
  VITE_ENV: 'local' | 'dev' | 'prod';
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd()) as Env;
  return {
    plugins: [],
    server: {
      port: 3003,
      origin: 'http://localhost:3003',
    },
    preview: {
      port: 3003,
    },
    build: {
      manifest: true,
      minify: false,
      target: 'esnext',
      rollupOptions: {
        input: './src/main.ts',
        output: {
          entryFileNames: `angular-app-${env.VITE_ENV ?? 'local'}.js`,
          format: 'esm',
        },
      },
    },
  };
});
