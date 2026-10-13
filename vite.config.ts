import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            app: path.resolve(__dirname, 'app.html'),
            privacy: path.resolve(__dirname, 'privacy.html'),
            terms: path.resolve(__dirname, 'terms.html'),
            dataDeletion: path.resolve(__dirname, 'data-deletion.html'),
            rootedAndRising: path.resolve(__dirname, 'rooted-and-rising/index.html'),
            rootedAndRisingPrivacy: path.resolve(__dirname, 'rooted-and-rising/privacy-policy/index.html'),
            rootedAndRisingTerms: path.resolve(__dirname, 'rooted-and-rising/terms-of-use/index.html'),
          },
        },
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
